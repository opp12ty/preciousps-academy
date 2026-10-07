import type { TermPlan } from "../types";

/** JSS3 Computer Studies — original Precious PS content following the national Basic Education structure. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Problem solving and algorithms",
        subtopics: ["Steps in problem solving", "Meaning of an algorithm", "Characteristics of a good algorithm", "Writing simple algorithms"],
        objectives: ["State the steps in solving problems with computers", "Define an algorithm", "State the characteristics of a good algorithm", "Write algorithms for simple problems"],
        lesson: {
          title: "Thinking Step by Step",
          summary: "Write clear algorithms to solve simple problems.",
          minutes: 45,
          notes: `## Steps in problem solving
1. **define (understand) the problem** — what is given and what is required
2. **analyse** — identify inputs, processes and outputs
3. **design a solution** — write an **algorithm** or draw a **flowchart**
4. **code** — write the program in a programming language
5. **test and debug** — run it and correct errors (**bugs**)
6. **document and maintain**

## Algorithm
An **algorithm** is a **finite, ordered set of clear steps** for solving a problem. It can be written in plain language or **pseudocode** (structured English close to code).
Example from daily life: steps for making tea, or directions to school.

## Characteristics of a good algorithm
- **finite** — it must end after a number of steps
- **definite (unambiguous)** — each step is clear
- has **input** (zero or more) and **output** (at least one)
- **effective** — each step can be carried out
- **ordered** — steps follow a logical sequence

## Example 1: average of three numbers
1. Start
2. Input A, B, C
3. Sum = A + B + C
4. Average = Sum ÷ 3
5. Output Average
6. Stop

## Example 2: area of a rectangle
1. Start
2. Input Length, Breadth
3. Area = Length × Breadth
4. Output Area
5. Stop

## Example 3: pass or fail
1. Start
2. Input Score
3. If Score is 50 or more, output "Pass"; otherwise output "Fail"
4. Stop

## Control structures
- **sequence** — steps one after another
- **selection (decision)** — choosing a path (If … Then … Else)
- **iteration (repetition/loop)** — repeating steps`,
          examples: `**Example 1.** What is an algorithm? *Answer:* A **finite, ordered set of clear steps** for solving a problem.

**Example 2.** In the average algorithm, if A = 4, B = 6 and C = 8, what is the output? *Answer:* (4 + 6 + 8) ÷ 3 = **6**.

**Example 3.** Name the three control structures. *Answer:* **sequence, selection, iteration**.`,
        },
        questions: [
          ["E", "A finite, ordered set of steps for solving a problem is an", "algorithm", "antivirus", "address", "attachment", "Algorithms are step-by-step."],
          ["E", "An error in a computer program is called a", "bug", "byte", "bit", "boot", "Debugging removes bugs."],
          ["E", "The first step in problem solving is to", "define the problem", "write the code", "test the program", "print the output", "Understand before solving."],
          ["M", "Structured English that is close to programming code is", "pseudocode", "machine code", "binary", "HTML only", "It is 'false code'."],
          ["M", "An algorithm must end after a number of steps. This means it is", "finite", "infinite", "ambiguous", "random", "Finite means it stops."],
          ["M", "Finding and correcting errors in a program is", "debugging", "booting", "formatting", "compiling only", "Bugs are fixed."],
          ["M", "The control structure that repeats steps is", "iteration", "sequence", "selection", "termination", "Loops repeat. Answer: iteration."],
          ["H", "In an average algorithm with inputs 4, 6 and 8, the output is", "6", "18", "8", "4", "18 ÷ 3 = 6. Answer: 6."],
          ["H", "Choosing between paths using If…Then…Else is the control structure called", "selection", "sequence", "iteration", "compilation", "It makes decisions."],
          ["H", "An algorithm with a step that can be understood in two ways is not", "definite (unambiguous)", "finite", "ordered", "effective in speed", "Steps must be clear."],
        ],
      },
      {
        week: 2,
        title: "Flowcharts",
        subtopics: ["Meaning of a flowchart", "Flowchart symbols", "Drawing flowcharts for sequence", "Flowcharts with decisions"],
        objectives: ["Define a flowchart", "Identify standard flowchart symbols", "Draw flowcharts for sequential problems", "Draw flowcharts that include decisions"],
        lesson: {
          title: "Pictures of Algorithms",
          summary: "Draw flowcharts using standard symbols.",
          minutes: 45,
          notes: `## Meaning
A **flowchart** is a **diagram** that represents an algorithm using **standard symbols** connected by **arrows** showing the flow of steps.

## Flowchart symbols
| Symbol | Shape | Use |
|---|---|---|
| **terminal** | **oval (rounded rectangle)** | **Start** and **Stop** |
| **input/output** | **parallelogram** | reading input or displaying output |
| **process** | **rectangle** | calculations and assignments, e.g. Sum = A + B |
| **decision** | **diamond** | a question with Yes/No (True/False) branches |
| **flowline** | **arrow** | shows direction of flow |
| **connector** | **small circle** | joins parts of a flowchart |
| **predefined process** | rectangle with double side lines | a sub-process (procedure) |

## Rules for drawing flowcharts
- begin with **Start** and end with **Stop**
- flow from **top to bottom** and **left to right**
- use the correct symbol for each step
- a **decision** has **one entry and two exits** (Yes and No)
- keep it neat and simple

## Example 1: area of a rectangle (sequence)
**Start** (oval) → **Input L, B** (parallelogram) → **Area = L × B** (rectangle) → **Output Area** (parallelogram) → **Stop** (oval)

## Example 2: pass or fail (decision)
**Start** → **Input Score** → **Is Score ≥ 50?** (diamond)
- **Yes** → **Output "Pass"** → Stop
- **No** → **Output "Fail"** → Stop

## Example 3: larger of two numbers
Start → Input A, B → **Is A > B?** → Yes: Output A / No: Output B → Stop

## Advantages of flowcharts
easy to understand; show logic clearly; help find errors; useful documentation; guide coding.`,
          examples: `**Example 1.** Which symbol is used for a decision? *Answer:* a **diamond**.

**Example 2.** Which symbol represents input or output? *Answer:* a **parallelogram**.

**Example 3.** How many exits does a decision symbol have? *Answer:* **two** (Yes and No).`,
        },
        questions: [
          ["E", "A diagram that represents an algorithm with symbols is a", "flowchart", "spreadsheet", "network", "chart of accounts", "Flowcharts show flow."],
          ["E", "The symbol used for Start and Stop is the", "oval", "diamond", "rectangle", "parallelogram", "It is the terminal symbol."],
          ["E", "Arrows in a flowchart show the", "direction of flow", "inputs only", "decisions", "outputs only", "Flowlines connect steps."],
          ["M", "The symbol used for a decision is the", "diamond", "oval", "parallelogram", "circle", "It has Yes and No exits."],
          ["M", "The symbol used for input or output is the", "parallelogram", "rectangle", "diamond", "oval", "E.g. Input Score."],
          ["M", "The symbol used for a calculation such as Sum = A + B is the", "rectangle", "diamond", "oval", "parallelogram", "It is the process symbol."],
          ["M", "A small circle in a flowchart is a", "connector", "decision", "terminal", "process", "It joins parts."],
          ["H", "A decision symbol has", "one entry and two exits", "two entries and one exit", "no exits", "four exits always", "Yes and No paths."],
          ["H", "In a flowchart to find the larger of A and B, the question 'Is A > B?' is placed in a", "diamond", "rectangle", "parallelogram", "oval", "It is a decision."],
          ["H", "Flowcharts should generally flow from", "top to bottom", "bottom to top", "right to left only", "the centre outwards", "This is the convention."],
        ],
      },
      {
        week: 3,
        title: "Introduction to programming",
        subtopics: ["Meaning of programming", "Levels of programming languages", "Translators", "Getting started with Python"],
        objectives: ["Define programming and program", "Distinguish machine, assembly and high-level languages", "Explain compilers and interpreters", "Write simple output statements in Python"],
        lesson: {
          title: "Talking to Computers in Code",
          summary: "Explain programming languages and write first programs.",
          minutes: 45,
          notes: `## Meaning
- a **program** is a set of **instructions** written to make a computer perform a task
- **programming (coding)** is the process of **writing, testing and maintaining** programs
- a **programming language** is a formal language for writing programs

## Levels of programming languages
| Level | Description | Example |
|---|---|---|
| **machine language** | binary 0s and 1s understood **directly** by the CPU; first generation | 10110000 01100001 |
| **assembly language** | uses short **mnemonics** like ADD, MOV, SUB; needs an **assembler** | ADD A, B |
| **high-level languages** | close to **English**; easier to learn; portable | **Python, Java, C, C++, JavaScript, BASIC, Pascal, COBOL, FORTRAN** |
**Low-level** languages = machine and assembly languages.

## Translators
High-level programs (**source code**) must be translated into machine code (**object code**):
- **compiler** — translates the **whole program at once** before running (e.g. C)
- **interpreter** — translates and runs the program **line by line** (e.g. Python)
- **assembler** — translates **assembly language** into machine code

## Errors
- **syntax errors** — breaking the grammar rules of the language (e.g. a missing bracket)
- **logic errors** — the program runs but gives **wrong results**
- **runtime errors** — errors while running (e.g. dividing by zero)

## Getting started with Python
**Python** is a popular, beginner-friendly high-level language.
- **print("Hello, Nigeria!")** — displays **Hello, Nigeria!**
- **print(5 + 3)** — displays **8**
- **print("5 + 3")** — displays the text **5 + 3** (quotation marks make it a **string**)
- **#** starts a **comment** — notes ignored by the computer
Other beginner tools: **Scratch** (block-based programming).`,
          examples: `**Example 1.** What will **print(4 * 5)** display? *Answer:* **20**.

**Example 2.** Which translator converts a whole program at once? *Answer:* a **compiler**.

**Example 3.** Is Python a low-level or high-level language? *Answer:* **high-level**.`,
        },
        questions: [
          ["E", "A set of instructions that makes a computer perform a task is a", "program", "port", "pixel", "printer", "Programs are instructions."],
          ["E", "Writing, testing and maintaining programs is", "programming", "printing", "formatting", "scanning", "Also called coding."],
          ["E", "Python is an example of a", "high-level language", "machine language", "assembly language", "operating system", "It is close to English."],
          ["M", "The language made of 0s and 1s understood directly by the CPU is", "machine language", "Python", "assembly language", "English", "It is binary code."],
          ["M", "A language that uses mnemonics like ADD and MOV is", "assembly language", "machine language", "Python", "HTML", "Mnemonics aid memory."],
          ["M", "A translator that converts the whole program at once is a", "compiler", "interpreter", "assembler only", "browser", "It compiles everything."],
          ["M", "A translator that runs a program line by line is an", "interpreter", "compiler", "assembler", "editor", "Python uses an interpreter."],
          ["H", "The output of print(4 * 5) in Python is", "20", "45", "4 * 5", "9", "The asterisk multiplies."],
          ["H", "An error caused by breaking the grammar rules of a language is a", "syntax error", "logic error", "runtime error", "hardware error", "The code is malformed."],
          ["H", "A program that runs but gives wrong results has a", "logic error", "syntax error", "hardware fault", "compiler error", "The logic is wrong."],
        ],
      },
      {
        week: 4,
        title: "Variables, data types and operators",
        subtopics: ["Variables and assignment", "Data types", "Arithmetic operators", "Input and output in Python"],
        objectives: ["Explain variables and assignment", "Identify basic data types", "Use arithmetic operators correctly", "Write programs that take input and display output"],
        lesson: {
          title: "Storing and Calculating Values",
          summary: "Use variables, data types, operators and input in Python.",
          minutes: 45,
          notes: `## Variables
A **variable** is a **named storage location** in memory whose value can change.
- **assignment** gives a value: **age = 14**, **name = "Ada"**
- the **=** sign means "store the value on the right in the variable on the left"
- rules for names: start with a **letter** (or underscore); no spaces; cannot be a keyword (e.g. if, for); names are **case-sensitive** (Score and score are different)

## Data types
| Type | Meaning | Example |
|---|---|---|
| **integer (int)** | whole numbers | 25, −3 |
| **float (real)** | numbers with decimals | 3.14, 72.5 |
| **string (str)** | text in quotation marks | "Lagos" |
| **Boolean (bool)** | True or False | True |

## Arithmetic operators in Python
| Operator | Meaning | Example | Result |
|---|---|---|---|
| + | addition | 7 + 2 | 9 |
| − | subtraction | 7 − 2 | 5 |
| * | multiplication | 7 * 2 | 14 |
| / | division | 7 / 2 | 3.5 |
| // | floor (whole-number) division | 7 // 2 | 3 |
| % | modulus (remainder) | 7 % 2 | 1 |
| two asterisks | power | 2 to the power 3 | 8 |
Order of operations: brackets, powers, then × ÷ // %, then + −.

## Input and output
- **input()** reads text typed by the user
- **int()** and **float()** convert text to numbers
Example program:
**length = float(input("Enter length: "))**
**breadth = float(input("Enter breadth: "))**
**area = length * breadth**
**print("Area is", area)**
If the user enters 5 and 4, the program displays **Area is 20.0**.`,
          examples: `**Example 1.** What is the result of **17 % 5**? *Answer:* **2** (the remainder).

**Example 2.** What is the result of **17 // 5**? *Answer:* **3**.

**Example 3.** What data type is **"Abuja"**? *Answer:* **string**.`,
        },
        questions: [
          ["E", "A named storage location whose value can change is a", "variable", "constant only", "flowchart", "folder", "Variables hold values."],
          ["E", "Text written in quotation marks in Python is a", "string", "integer", "float", "Boolean", "Strings are text."],
          ["E", "A whole number such as 25 is an", "integer", "float", "string", "Boolean", "Integers have no decimals."],
          ["M", "A number with a decimal point such as 3.5 is a", "float", "integer", "string", "Boolean", "Floats are real numbers."],
          ["M", "The data type that holds only True or False is", "Boolean", "string", "float", "integer", "Named after George Boole."],
          ["M", "In Python, 7 / 2 gives", "3.5", "3", "1", "14", "Ordinary division."],
          ["M", "In Python, 17 % 5 gives", "2", "3", "3.4", "85", "% gives the remainder."],
          ["H", "In Python, 17 // 5 gives", "3", "2", "3.4", "12", "Floor division drops the decimal."],
          ["H", "The Python function that reads what the user types is", "input()", "print()", "int()", "type()", "It takes keyboard input."],
          ["H", "In Python, the variable names Score and score are", "different because names are case-sensitive", "the same variable", "both invalid", "keywords", "Case matters. Answer: different because names are case-sensitive."],
        ],
      },
      {
        week: 5,
        title: "Decision making in programs",
        subtopics: ["Comparison operators", "The if statement", "If–else and elif", "Logical operators"],
        objectives: ["Use comparison operators", "Write programs with if statements", "Use if–else and elif for several choices", "Combine conditions with and, or and not"],
        lesson: {
          title: "Programs That Choose",
          summary: "Use conditions and if statements in Python.",
          minutes: 45,
          notes: `## Comparison (relational) operators
| Operator | Meaning | Example (a = 7, b = 5) | Result |
|---|---|---|---|
| == | equal to | a == b | False |
| != | not equal to | a != b | True |
| > | greater than | a > b | True |
| < | less than | a < b | False |
| >= | greater than or equal to | a >= 7 | True |
| <= | less than or equal to | b <= 4 | False |
Note: **=** assigns a value; **==** compares values.

## The if statement
**if score >= 50:**
    **print("Pass")**
The indented line runs **only if the condition is True**. Python uses a **colon** and **indentation** (usually 4 spaces) to mark the block.

## if–else
**if score >= 50:**
    **print("Pass")**
**else:**
    **print("Fail")**

## elif (else if) for several choices — grading
**if score >= 70:**
    **print("A")**
**elif score >= 60:**
    **print("B")**
**elif score >= 50:**
    **print("C")**
**else:**
    **print("F")**
For score = 65 the output is **B** (the first true condition is used).

## Logical operators
- **and** — True only if **both** conditions are True: *age >= 13 and age <= 19* (a teenager)
- **or** — True if **at least one** is True
- **not** — reverses a condition

## Testing
test with values on both sides of each boundary, e.g. 49, 50, 59, 60, 69, 70.`,
          examples: `**Example 1.** What does **7 == 5** give? *Answer:* **False**.

**Example 2.** In the grading program, what is printed for score = 50? *Answer:* **C**.

**Example 3.** When is "x > 0 and x < 10" True? *Answer:* when **x is between 0 and 10** (exclusive).`,
        },
        questions: [
          ["E", "The operator that checks if two values are equal in Python is", "==", "=", "!=", ">=", "Double equals compares."],
          ["E", "The keyword used to make a decision in Python is", "if", "for", "print", "input", "If tests a condition."],
          ["E", "The operator meaning 'not equal to' is", "!=", "==", "<>=", "=!", "Exclamation then equals."],
          ["M", "With a = 7 and b = 5, the expression a > b is", "True", "False", "7", "error", "7 is greater than 5."],
          ["M", "The part of an if statement that runs when the condition is false is the", "else block", "if line", "colon", "print statement", "Else handles the false case."],
          ["M", "Python marks the block of code under an if statement using", "indentation", "curly brackets", "semicolons", "full stops", "Spaces show the block."],
          ["M", "The logical operator that is True only when both conditions are True is", "and", "or", "not", "if", "Both must hold."],
          ["H", "In the grading program, a score of 65 prints", "B", "A", "C", "F", "65 is at least 60 but below 70."],
          ["H", "The expression not (5 > 3) gives", "False", "True", "5", "3", "Not reverses True."],
          ["H", "In Python, a single = sign is used to", "assign a value", "compare values", "end a program", "start a comment", "== compares. Answer: assign a value."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Loops in programming",
        subtopics: ["Meaning of loops", "The for loop and range", "The while loop", "Using loops to solve problems"],
        objectives: ["Explain loops (iteration)", "Write for loops using range", "Write while loops with a stopping condition", "Use loops to total and count values"],
        lesson: {
          title: "Programs That Repeat",
          summary: "Use for and while loops in Python.",
          minutes: 45,
          notes: `## Meaning
A **loop** repeats a block of instructions. Loops save writing the same code many times. This is **iteration**.

## The for loop
used when you know **how many times** to repeat.
**for i in range(1, 6):**
    **print(i)**
Output: **1 2 3 4 5** (each on its own line).
- **range(1, 6)** produces 1, 2, 3, 4, 5 — it **stops before 6**
- **range(5)** produces 0, 1, 2, 3, 4
- **range(2, 11, 2)** produces 2, 4, 6, 8, 10 (step of 2)

## The while loop
repeats **while a condition is True**.
**count = 1**
**while count <= 3:**
    **print("Welcome")**
    **count = count + 1**
Output: **Welcome** printed **3 times**.
If the condition never becomes False, you get an **infinite loop** — always update the variable.

## Using loops
### Sum of 1 to 10
**total = 0**
**for n in range(1, 11):**
    **total = total + n**
**print(total)** → **55**

### Multiplication table of 7
**for i in range(1, 13):**
    **print(7, "x", i, "=", 7 * i)**

### Counting passes
loop through scores and add 1 to a counter when a score is 50 or above.

## Loops in flowcharts
a loop appears as an **arrow going back** to an earlier step after a **decision** (e.g. "Is count ≤ 3?").`,
          examples: `**Example 1.** What numbers does **range(1, 5)** produce? *Answer:* **1, 2, 3, 4**.

**Example 2.** What is printed by the sum program for 1 to 10? *Answer:* **55**.

**Example 3.** What is an infinite loop? *Answer:* A loop whose condition **never becomes False**.`,
        },
        questions: [
          ["E", "A structure that repeats a block of instructions is a", "loop", "variable", "string", "comment", "Loops iterate. Answer: loop."],
          ["E", "The loop used when the number of repetitions is known is usually the", "for loop", "if statement", "print function", "input function", "For loops count."],
          ["E", "The loop that repeats while a condition is True is the", "while loop", "for loop only", "if loop", "else loop", "While checks a condition."],
          ["M", "range(1, 6) produces the numbers", "1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5", "6, 5, 4, 3, 2, 1", "It stops before 6."],
          ["M", "range(5) produces the numbers", "0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0 to 5", "5 only", "It starts at 0."],
          ["M", "range(2, 11, 2) produces", "2, 4, 6, 8, 10", "2, 3, 4, … 11", "2, 11", "1, 3, 5, 7, 9", "Step of 2 from 2."],
          ["M", "A loop whose condition never becomes False is an", "infinite loop", "empty loop", "if loop", "nested function", "It never stops."],
          ["H", "The sum of the numbers 1 to 10 printed by a loop is", "55", "45", "10", "100", "1 + 2 + … + 10 = 55."],
          ["H", "In a while loop that prints 'Welcome' while count <= 3, starting from count = 1 and adding 1 each time, 'Welcome' is printed", "3 times", "2 times", "4 times", "forever", "count = 1, 2, 3."],
          ["H", "In a flowchart, a loop is shown by", "an arrow returning to an earlier step", "two Start symbols", "an oval in the middle", "a missing arrow", "Flow goes back."],
        ],
      },
      {
        week: 2,
        title: "Introduction to databases",
        subtopics: ["Meaning of a database", "Fields, records and tables", "Database management systems", "Queries, forms and reports"],
        objectives: ["Define a database", "Identify fields, records, tables and primary keys", "Name database management systems", "Explain queries, forms and reports"],
        lesson: {
          title: "Organising Data in Tables",
          summary: "Describe databases and their parts.",
          minutes: 40,
          notes: `## Meaning
A **database** is an **organised collection of related data** stored so that it can be easily **accessed, managed and updated**.
Examples: a school's student records, a bank's customer accounts, a library catalogue, a hospital's patient records, the NIN database.

## Parts of a database
| Term | Meaning | Example |
|---|---|---|
| **field** | a single item of data (a **column**) | Surname, Class, Age |
| **record** | a complete set of fields about **one item** (a **row**) | all details of one student |
| **table** | a collection of related records | Students table |
| **primary key** | a field that **uniquely identifies** each record | Admission Number |
| **file** | collection of tables (in simple terms, the database) | School.accdb |

## Example: Students table
| AdmNo (primary key) | Surname | Class | Age |
|---|---|---|---|
| 1001 | Okafor | JSS3A | 14 |
| 1002 | Bello | JSS3B | 13 |
| 1003 | Adeyemi | JSS3A | 14 |
- this table has **4 fields** and **3 records**

## Data types for fields
**text**, **number**, **date/time**, **currency**, **Yes/No (Boolean)**, **AutoNumber**.

## Database Management System (DBMS)
software for creating and managing databases: **Microsoft Access**, **MySQL**, **Oracle**, **SQL Server**, **PostgreSQL**, **SQLite**.

## Database objects
- **query** — a question that **retrieves specific data**, e.g. all students in JSS3A
- **form** — a screen for **entering and viewing** data easily
- **report** — formatted **printed output** of data

## Advantages of databases
quick **searching and sorting**; less duplication (redundancy); data **consistency**; **security** with passwords; easy **sharing**; easy updating.`,
          examples: `**Example 1.** In the Students table, what is the primary key? *Answer:* **AdmNo**.

**Example 2.** How many records are in the table above? *Answer:* **3**.

**Example 3.** Which database object retrieves all students in JSS3A? *Answer:* a **query**.`,
        },
        questions: [
          ["E", "An organised collection of related data is a", "database", "spreadsheet chart", "flowchart", "browser", "It is easily managed."],
          ["E", "A single item of data such as Surname in a database is a", "field", "record", "table", "report", "Fields are columns."],
          ["E", "A complete set of fields about one item is a", "record", "field", "query", "form", "Records are rows."],
          ["M", "A field that uniquely identifies each record is the", "primary key", "foreign field", "report key", "query key", "E.g. admission number."],
          ["M", "Microsoft Access is an example of a", "database management system", "word processor", "web browser", "operating system", "It manages databases."],
          ["M", "A database object used to retrieve specific data is a", "query", "form", "report", "macro only", "Queries ask questions."],
          ["M", "A database object used for entering data easily is a", "form", "report", "query", "primary key", "Forms ease data entry."],
          ["H", "A table with the fields AdmNo, Surname, Class and Age has", "4 fields", "3 fields", "5 fields", "1 field", "Count the columns."],
          ["H", "Formatted printed output of database data is a", "report", "query", "form", "field", "Reports present data."],
          ["H", "An advantage of databases is that they", "reduce duplication of data", "increase data errors", "make searching slower", "remove security", "Data is stored once."],
        ],
      },
      {
        week: 3,
        title: "Cybersecurity basics",
        subtopics: ["Meaning of cybersecurity", "Common cyber threats", "Security measures", "Responding to incidents"],
        objectives: ["Explain cybersecurity", "Identify common cyber threats", "Apply security measures to protect data and devices", "Describe how to respond to security incidents"],
        lesson: {
          title: "Defending Data and Devices",
          summary: "Identify cyber threats and apply protective measures.",
          minutes: 40,
          notes: `## Meaning
**Cybersecurity** is the practice of **protecting computers, networks, programs and data** from attacks, damage or unauthorised access.
Its goals are often summarised as the **CIA triad**:
- **Confidentiality** — only authorised people can see the data
- **Integrity** — data is accurate and not tampered with
- **Availability** — data and systems are available when needed

## Common cyber threats
| Threat | Description |
|---|---|
| **malware** | viruses, worms, Trojans, ransomware, spyware |
| **phishing** | fake messages to steal details |
| **social engineering** | tricking people into revealing information (e.g. pretending to be IT staff) |
| **password attacks** | guessing or stealing passwords |
| **hacking** | unauthorised access to systems |
| **denial-of-service (DoS)** | flooding a website so it stops working |
| **SIM-swap fraud** | criminals take over a phone number to receive bank codes |
| **insider threats** | harm caused by people within an organisation |

## Security measures
- **strong, unique passwords** and a password manager
- **two-factor/multi-factor authentication**
- **antivirus** and a **firewall** (filters network traffic)
- regular **software updates** (patches fix security holes)
- **encryption** — scrambling data so only authorised people can read it (HTTPS, encrypted messaging)
- regular **backups** (e.g. the 3-2-1 idea: 3 copies, 2 different media, 1 off-site)
- **access control** — giving users only the permissions they need
- **physical security** — locks, CCTV, not leaving devices unattended
- **awareness training**

## Responding to incidents
disconnect the affected device from the network; change passwords; scan for malware; report to the IT department, bank (for fraud) or the police; restore from backups; learn from the incident.`,
          examples: `**Example 1.** What does a firewall do? *Answer:* It **filters network traffic** to block unauthorised access.

**Example 2.** What is encryption? *Answer:* **Scrambling data** so only authorised people can read it.

**Example 3.** What does the C in the CIA triad stand for? *Answer:* **Confidentiality**.`,
        },
        questions: [
          ["E", "Protecting computers, networks and data from attacks is", "cybersecurity", "cyberbullying", "e-commerce", "programming", "It defends digital assets."],
          ["E", "A system that filters network traffic to block unauthorised access is a", "firewall", "flowchart", "scanner", "monitor", "It acts as a barrier."],
          ["E", "Keeping copies of data in case of loss is", "backup", "phishing", "hacking", "booting", "Backups allow recovery."],
          ["M", "Scrambling data so only authorised people can read it is", "encryption", "compression", "formatting", "sorting", "Encryption protects confidentiality."],
          ["M", "Tricking people into revealing confidential information is", "social engineering", "software updating", "networking", "backing up", "It exploits trust."],
          ["M", "Flooding a website with traffic so it stops working is a", "denial-of-service attack", "backup", "software patch", "firewall rule", "It denies service."],
          ["M", "Software updates are important because they", "fix security holes", "slow the computer", "delete user files", "disable antivirus", "Patches close vulnerabilities."],
          ["H", "In the CIA triad, the I stands for", "Integrity", "Internet", "Information", "Input", "Data must not be tampered with."],
          ["H", "Criminals taking over a person's phone number to receive bank codes is", "SIM-swap fraud", "spam filtering", "data validation", "cloud storage", "It hijacks the line."],
          ["H", "The first action when a computer is infected on a network is to", "disconnect it from the network", "share files from it", "ignore it", "turn off the antivirus", "This stops the spread."],
        ],
      },
      {
        week: 4,
        title: "Emerging technologies",
        subtopics: ["Artificial intelligence", "Cloud computing", "Internet of Things", "Other emerging technologies"],
        objectives: ["Explain artificial intelligence and its uses", "Explain cloud computing and its service models", "Describe the Internet of Things", "Identify other emerging technologies and their impact"],
        lesson: {
          title: "Technologies Shaping the Future",
          summary: "Describe AI, cloud computing, IoT and other new technologies.",
          minutes: 40,
          notes: `## Artificial intelligence (AI)
**AI** is the ability of computers to perform tasks that normally need **human intelligence** — learning, reasoning, understanding language, recognising images.
- **machine learning** — computers **learn patterns from data** instead of being given every rule
- uses: voice assistants, translation, recommendation (videos, music), medical image analysis, fraud detection in banks, self-driving cars, chatbots, farming advice
- concerns: job changes, bias, privacy, misinformation, over-dependence — AI should be used **responsibly**, and its answers checked

## Cloud computing
delivering computing services (**storage, software, processing**) **over the internet** instead of on a local computer.
| Model | Meaning | Example |
|---|---|---|
| **SaaS** — Software as a Service | software used online | web email, online office apps |
| **PaaS** — Platform as a Service | platforms for developers to build apps | app hosting platforms |
| **IaaS** — Infrastructure as a Service | rented servers and storage | cloud servers |
Advantages: access anywhere; pay for what you use; easy collaboration; automatic backups. Disadvantages: needs internet; security and privacy concerns.

## Internet of Things (IoT)
everyday **devices connected to the internet** that collect and share data: smart meters, smart TVs, CCTV cameras, fitness bands, smart home devices, sensors on farms and in factories.

## Other emerging technologies
- **robotics** — machines that perform tasks automatically
- **virtual reality (VR)** — fully computer-generated environments; **augmented reality (AR)** — digital images added to the real world
- **3D printing** — building objects layer by layer
- **blockchain** — secure, shared digital records (used in cryptocurrencies and supply chains)
- **5G** — very fast mobile networks
- **drones** — remotely piloted aircraft for delivery, mapping, surveillance

## Impact
new jobs and industries; better services in health, education and agriculture; but also need for new skills, cybersecurity and ethical rules.`,
          examples: `**Example 1.** What is machine learning? *Answer:* Computers **learning patterns from data**.

**Example 2.** Online email that you use without installing software is an example of **SaaS**.

**Example 3.** Give an example of an IoT device. *Answer:* a **smart meter** (or smart TV, fitness band).`,
        },
        questions: [
          ["E", "The ability of computers to perform tasks needing human intelligence is", "artificial intelligence", "artificial insemination", "analogue imaging", "automatic indexing", "AI mimics intelligence."],
          ["E", "Delivering computing services over the internet is", "cloud computing", "desktop publishing", "word processing", "batch printing", "Services come from the cloud."],
          ["E", "Everyday devices connected to the internet form the", "Internet of Things", "intranet", "LAN only", "World Wide Web only", "IoT links devices."],
          ["M", "Computers learning patterns from data is", "machine learning", "machine language", "manual processing", "multimedia", "A branch of AI."],
          ["M", "Using web email without installing software is an example of", "Software as a Service", "Infrastructure as a Service", "hardware leasing", "peer-to-peer", "SaaS delivers software online."],
          ["M", "Adding digital images to a real-world view through a phone camera is", "augmented reality", "virtual reality", "blockchain", "cloud storage", "AR augments reality."],
          ["M", "Building solid objects layer by layer from a digital design is", "3D printing", "laser printing", "screen printing", "dot-matrix printing", "Layers form the object."],
          ["H", "A secure, shared digital record used in cryptocurrencies is", "blockchain", "spreadsheet", "intranet", "router", "Records are chained."],
          ["H", "A concern about the use of AI is", "bias and privacy issues", "it never uses data", "it needs no electricity", "it cannot process text", "Responsible use is needed."],
          ["H", "Remotely piloted aircraft used for mapping and delivery are", "drones", "satellites only", "routers", "servers", "They fly without pilots on board."],
        ],
      },
      {
        week: 5,
        title: "Digital citizenship and e-commerce",
        subtopics: ["Meaning of digital citizenship", "Rights and responsibilities online", "E-commerce and e-payment", "Shopping safely online"],
        objectives: ["Explain digital citizenship", "State rights and responsibilities of digital citizens", "Describe e-commerce and electronic payment methods", "Apply safety rules when shopping online"],
        lesson: {
          title: "Being a Responsible Digital Citizen",
          summary: "Use the internet responsibly and shop online safely.",
          minutes: 40,
          notes: `## Digital citizenship
**Digital citizenship** means using technology **responsibly, safely, respectfully and ethically**.
Elements:
- **digital literacy** — skills to find, evaluate and create information
- **digital etiquette** — polite behaviour online (netiquette)
- **digital rights and responsibilities**
- **digital security** — protecting yourself and data
- **digital health** — balancing screen time, posture, sleep
- **digital law** — obeying laws on copyright, cybercrime, privacy
- **digital footprint** — what you post stays online

## Rights and responsibilities
- rights: access to information, freedom of expression (within the law), privacy
- responsibilities: respect others; do not bully; check facts before sharing; give credit to creators; protect your accounts; report harmful content

## E-commerce
**E-commerce** is **buying and selling goods and services over the internet**.
Types:
- **B2C** — business to consumer (online shops)
- **B2B** — business to business
- **C2C** — consumer to consumer (online marketplaces)
Advantages: convenience; wider choice; comparison of prices; 24-hour shopping; reaches more customers. Disadvantages: fraud; delivery delays; cannot inspect goods; needs internet.

## Electronic payment
debit/credit cards, **bank transfers**, **mobile money** and wallets, **USSD** codes, **POS**, online payment gateways, **QR code** payments.

## Shopping safely online
- buy from **trusted, well-reviewed** sites
- check for **HTTPS** and a padlock
- never share your **card PIN, OTP or CVV** with anyone
- use **pay on delivery** or secure payment where possible
- be careful of deals that are **"too good to be true"**
- keep receipts and order numbers
- check the seller's return policy`,
          examples: `**Example 1.** What is e-commerce? *Answer:* **Buying and selling goods and services over the internet**.

**Example 2.** An individual selling a used phone to another individual online is **C2C**.

**Example 3.** Give one rule for safe online shopping. *Answer:* **Never share your OTP or PIN**.`,
        },
        questions: [
          ["E", "Using technology responsibly, safely and ethically is", "digital citizenship", "digital piracy", "cyberbullying", "hacking", "Good online behaviour."],
          ["E", "A student who orders textbooks from an online store is taking part in", "e-commerce", "e-learning", "e-voting", "e-mailing", "Online buying is electronic commerce."],
          ["E", "When shopping online, you should never share your", "OTP or PIN", "delivery address with the shop", "name with the shop", "email address for receipts", "These codes protect your money."],
          ["M", "A business selling directly to individual customers online is", "B2C", "B2B", "C2C", "G2G", "Business to consumer."],
          ["M", "An individual selling a used item to another individual online is", "C2C", "B2B", "B2C", "B2G", "Consumer to consumer."],
          ["M", "Paying with a code dialled on a basic mobile phone is", "USSD payment", "cash payment", "cheque payment", "barter", "USSD works without internet."],
          ["M", "A deal online that is 'too good to be true' is often a sign of", "fraud", "excellent service", "a secure site", "a government offer", "Scammers use bait."],
          ["H", "Checking facts before sharing news online is a responsibility of a", "digital citizen", "hacker", "spammer", "virus", "Prevents fake news."],
          ["H", "A disadvantage of e-commerce is that", "buyers cannot physically inspect goods before buying", "shops never close", "prices can be compared", "choice is wide", "You see only pictures."],
          ["H", "Balancing screen time with sleep and exercise is part of", "digital health", "digital law", "digital commerce", "digital piracy", "It protects wellbeing."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "BECE revision: computer fundamentals",
        subtopics: ["Computer, data and characteristics", "History and generations", "Classification and components", "Hardware devices"],
        objectives: ["Recall the meaning and characteristics of computers", "Recall the history and generations of computers", "Recall classification and components of computer systems", "Recall input, output, processing and storage devices"],
        lesson: {
          title: "Revising Computer Fundamentals",
          summary: "Consolidate computer fundamentals for the BECE.",
          minutes: 45,
          notes: `## Computer and data
computer: accepts data, processes, stores, outputs information. Data = raw facts; information = processed data. Characteristics: speed, accuracy, diligence, storage, automation, versatility. GIGO.

## History
abacus; Napier's bones (1617); slide rule (Oughtred); Pascaline (Pascal, 1642); Leibniz; Jacquard loom (punched cards, 1801); Babbage (father of the computer; analytical engine); Ada Lovelace (first programmer); Hollerith (census, 1890); ENIAC (1946).

## Generations
1st vacuum tubes; 2nd transistors; 3rd integrated circuits; 4th microprocessors (Intel 4004, 1971); 5th artificial intelligence.

## Classification
type: analogue, digital, hybrid. Size: super, mainframe, mini, micro. Purpose: general, special.

## Components
hardware, software, peopleware. CPU: CU, ALU, registers; machine cycle fetch–decode–execute–store. Motherboard; ports (USB, HDMI, Ethernet).

## Memory and storage
RAM (volatile) vs ROM (non-volatile); cache. Units: bit, nibble (4), byte (8), KB (1024 bytes), MB, GB, TB. Storage: HDD (magnetic), CD/DVD (optical), flash drive/SSD/memory card (solid-state), cloud.

## Devices
input: keyboard (QWERTY), mouse, scanner, microphone, webcam, joystick, barcode reader, OMR, MICR, OCR, biometric. Output: monitor (soft copy), printer (hard copy: dot-matrix impact; inkjet, laser, thermal non-impact), speakers, projector, plotter.`,
          examples: `**Example 1.** Which generation used transistors? *Answer:* the **second** generation.

**Example 2.** Which memory is volatile? *Answer:* **RAM**.

**Example 3.** Which device reads exam shading sheets? *Answer:* **OMR**.`,
        },
        questions: [
          ["E", "Processed data is called", "information", "input", "hardware", "a bit", "It is meaningful."],
          ["E", "The CPU is known as the", "brain of the computer", "memory of the computer", "eye of the computer", "voice of the computer", "It processes data."],
          ["E", "A keyboard is an", "input device", "output device", "storage device", "operating system", "It enters data."],
          ["M", "Placing many transistors on one silicon chip marked the generation of computers that used", "integrated circuits", "vacuum tubes", "AI only", "punched cards only", "ICs were introduced."],
          ["M", "The part of the CPU that performs arithmetic is the", "ALU", "CU", "ROM", "PSU", "Arithmetic and Logic Unit."],
          ["M", "Memory whose contents are lost when power goes off is", "RAM", "ROM", "a hard disk", "a DVD", "RAM is volatile."],
          ["M", "A printer that strikes the paper is", "a dot-matrix printer", "a laser printer", "an inkjet printer", "a thermal printer", "It is an impact printer."],
          ["H", "The number of bytes in 1 kilobyte in computing is", "1,024", "1,000,000", "8", "100", "Binary prefix. Answer: 1,024."],
          ["H", "Charles Babbage is called the father of the computer because of his", "analytical engine", "Pascaline", "slide rule", "abacus", "It had modern computer parts."],
          ["H", "The device used by banks to read characters on cheques is", "MICR", "OMR", "plotter", "joystick", "Magnetic ink characters."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: software and applications",
        subtopics: ["System and application software", "Operating systems and files", "Word processing, spreadsheets and presentations", "Graphics and databases"],
        objectives: ["Recall types of software and their examples", "Recall functions of operating systems and file management", "Recall key features of office applications", "Recall graphics and database concepts"],
        lesson: {
          title: "Revising Software and Applications",
          summary: "Consolidate software and application topics for the BECE.",
          minutes: 45,
          notes: `## Software
system software: OS, utilities (antivirus), translators (compiler, interpreter, assembler), drivers. Application software: word processor, spreadsheet, presentation, database, graphics, browsers. Freeware, shareware, open-source, proprietary; piracy is illegal.

## Operating systems
functions: booting, memory, process, file and device management, user interface, security. Interfaces: CLI, GUI (WIMP), touch, voice. Examples: Windows, macOS, Linux, Android, iOS.
Booting: cold (from off), warm (restart; Ctrl + Alt + Delete). Shut down properly; UPS.

## Files and folders
extensions: .docx, .xlsx, .pptx, .pdf, .jpg, .mp3, .mp4, .exe, .zip. Recycle Bin; F2 rename; cut moves, copy duplicates; path.

## Word processing
Ctrl + S save, C copy, X cut, V paste, Z undo, B bold, I italic, U underline, P print; F7 spelling; word wrap; justify.

## Spreadsheets
cells (B3), rows (numbers), columns (letters), range (A1:A5); formulas start with =; operators + − * / ^; functions SUM, AVERAGE, MAX, MIN, COUNT, IF; fill handle; #### = column too narrow; charts (column, bar, line for trends, pie for parts).

## Presentations
slides; layouts; placeholders; transitions (between slides) vs animations (objects); F5 start show; slide sorter view.

## Graphics
Paint tools (fill, text, shapes; Shift for perfect shapes); raster (pixels) vs vector (paths).

## Databases
field (column), record (row), table, primary key; DBMS (Access, MySQL); query, form, report.`,
          examples: `**Example 1.** Which spreadsheet function finds the largest value? *Answer:* **MAX**.

**Example 2.** What is the extension of a PowerPoint file? *Answer:* **.pptx**.

**Example 3.** In a database, what is a row called? *Answer:* a **record**.`,
        },
        questions: [
          ["E", "Disk cleanup and antivirus programs belong to the group called", "utility program", "word processor", "game", "database", "It maintains the system."],
          ["E", "The shortcut Ctrl + S is used to", "save", "select all", "search", "send", "S for save. Answer: save."],
          ["E", "Every spreadsheet formula starts with", "=", "+ only", "#", "@", "Equals begins formulas."],
          ["M", "The interface that uses windows, icons, menus and pointers is the", "GUI", "CLI", "API", "BIOS", "Graphical User Interface."],
          ["M", "The file extension .pptx belongs to", "PowerPoint", "Word", "Excel", "Paint", "Presentation files."],
          ["M", "The spreadsheet function that counts cells containing numbers is", "COUNT", "SUM", "MAX", "AVERAGE", "COUNT counts. Answer: COUNT."],
          ["M", "An effect applied between two slides is a", "transition", "animation", "placeholder", "theme", "Transitions move between slides."],
          ["H", "A field that uniquely identifies each record in a table is the", "primary key", "query", "form", "report", "No two records share it."],
          ["H", "To show what percentage of a budget goes to each item, the best chart is the", "pie chart", "line chart", "scatter chart", "column chart", "Slices add to 100%."],
          ["H", "Graphics that keep their quality when enlarged are", "vector graphics", "raster graphics", "bitmaps", "screenshots", "They are path-based."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: internet, networks and security",
        subtopics: ["Internet and email", "Networks and topologies", "Number systems", "Security, ethics and safety"],
        objectives: ["Recall internet services, terms and email", "Recall network types, devices and topologies", "Convert and add binary numbers", "Recall security, ethics and online safety practices"],
        lesson: {
          title: "Revising Internet, Networks and Security",
          summary: "Consolidate internet, networks, number systems and security for the BECE.",
          minutes: 45,
          notes: `## Internet and email
internet = global network of networks (TCP/IP); WWW (Tim Berners-Lee); ISP; browser vs search engine; URL; hyperlink; HTTPS; download/upload; .ng domain.
Email: username@domain; Inbox, Sent, Drafts, Spam; To, Cc, Bcc; attachments; reply, forward; netiquette.

## Networks
PAN, LAN, MAN, WAN (internet); intranet; server and clients. Devices: NIC, modem, router, switch, hub, access point, repeater. Media: twisted-pair, coaxial, fibre optic; Wi-Fi, Bluetooth.
Topologies: bus (one backbone), star (central switch), ring (loop), mesh (many links), tree.

## Number systems
binary (0, 1), octal (0–7), decimal (0–9), hexadecimal (0–9, A–F).
decimal → binary: divide by 2, read remainders upward (13 = 1101).
binary → decimal: place values 1, 2, 4, 8, 16 … (1011 = 11).
binary addition: 1 + 1 = 10; 1 + 1 + 1 = 11.

## Security and ethics
malware (virus, worm, Trojan, spyware, ransomware); antivirus; firewall; encryption; backups; strong passwords; 2FA; phishing; social engineering; CIA triad.
Ethics: copyright, piracy, plagiarism, privacy; Nigeria Data Protection Act (2023); Cybercrimes Act 2015.
Safety: cyberbullying (save evidence, block, report, tell an adult); digital footprint; ergonomics (RSI, eye strain, 20-20-20).`,
          examples: `**Example 1.** Convert 9 to binary. *Answer:* **1001**.

**Example 2.** Which topology connects all devices to a central switch? *Answer:* **star**.

**Example 3.** What does Bcc do? *Answer:* It **hides** recipients' addresses from others.`,
        },
        questions: [
          ["E", "A network in a single school building is a", "LAN", "WAN", "MAN", "PAN", "Local Area Network."],
          ["E", "The binary equivalent of 3 is", "11", "10", "101", "3", "2 + 1 = 3. Answer: 11."],
          ["E", "Software that opens web pages is a", "browser", "search engine", "spreadsheet", "compiler", "E.g. Chrome. Answer: browser."],
          ["M", "The binary equivalent of 9 is", "1001", "1010", "1100", "111", "8 + 1 = 9. Answer: 1001."],
          ["M", "The decimal value of binary 1110 is", "14", "13", "12", "7", "8 + 4 + 2 = 14."],
          ["M", "The device that connects a LAN to the internet and directs data is the", "router", "hub only", "monitor", "printer", "Routers route traffic."],
          ["M", "A hospital's files are encrypted and the attackers demand money to unlock them. This attack is", "ransomware", "spyware", "adware", "a worm", "It holds files hostage."],
          ["H", "The sum of binary 111 and 1 is", "1000", "112", "1110", "110", "7 + 1 = 8. Answer: 1000."],
          ["H", "In hexadecimal, the digit D represents", "13", "12", "14", "11", "A=10, B=11, C=12, D=13."],
          ["H", "The Nigerian law that addresses online crimes is the", "Cybercrimes Act 2015", "Land Use Act", "Electoral Act only", "Factories Act", "It prohibits cybercrimes."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: programming and mixed practice",
        subtopics: ["Problem solving and algorithms", "Flowcharts", "Python basics", "Mixed practice test"],
        objectives: ["Recall problem-solving steps and algorithm features", "Recall flowchart symbols and draw simple flowcharts", "Predict the output of simple Python programs", "Complete a mixed BECE-style practice test"],
        lesson: {
          title: "Revising Programming",
          summary: "Consolidate programming topics and practise mixed questions.",
          minutes: 45,
          notes: `## Problem solving
define → analyse → design (algorithm/flowchart) → code → test and debug → document. Algorithm: finite, definite, input, output, effective. Control structures: sequence, selection, iteration.

## Flowchart symbols
oval (start/stop); parallelogram (input/output); rectangle (process); diamond (decision — two exits); arrow (flow); small circle (connector).

## Languages and translators
machine language (binary), assembly (mnemonics; assembler), high-level (Python, Java, C). Compiler (whole program), interpreter (line by line). Errors: syntax, logic, runtime.

## Python basics
- **print("Hi")** displays Hi; **print(3 + 4)** displays 7
- variables: **x = 10**; types: int, float, string, Boolean
- operators: + − * / (7 / 2 = 3.5), // (7 // 2 = 3), % (7 % 2 = 1)
- input: **name = input("Name: ")**; **int()** converts to whole number
- comparison: ==, !=, >, <, >=, <=; logical: and, or, not
- if / elif / else with colons and indentation
- loops: **for i in range(1, 4)** gives 1, 2, 3; **while** repeats while True

## Practice: predict the output
1. **x = 5**, **y = 3**, **print(x * y)** → **15**
2. **print(10 % 4)** → **2**
3. **for i in range(3): print(i)** → **0, 1, 2**
4. **score = 45**; if score >= 50 print "Pass" else "Fail" → **Fail**`,
          examples: `**Example 1.** Predict: **print(9 // 2)**. *Answer:* **4**.

**Example 2.** Which flowchart symbol is a parallelogram used for? *Answer:* **input/output**.

**Example 3.** How many times does **for i in range(5)** repeat? *Answer:* **5 times**.`,
        },
        questions: [
          ["E", "The flowchart symbol for a calculation is the", "rectangle", "diamond", "oval", "parallelogram", "It is a process box."],
          ["E", "In Python, print(3 + 4) displays", "7", "3 + 4", "34", "12", "Numbers are added."],
          ["E", "An error caused by misspelling a keyword is a", "syntax error", "logic error", "hardware error", "power error", "Grammar rules are broken."],
          ["M", "In Python, print(10 % 4) displays", "2", "2.5", "40", "6", "Remainder of 10 ÷ 4."],
          ["M", "In Python, print(9 // 2) displays", "4", "4.5", "5", "1", "Floor division."],
          ["M", "The number of times 'for i in range(5)' repeats is", "5", "4", "6", "0", "0, 1, 2, 3, 4. Answer: 5."],
          ["M", "The translator used by Python to run programs line by line is an", "interpreter", "assembler", "compiler only", "editor", "Python is interpreted."],
          ["H", "If x = 5 and y = 3, print(x * y) displays", "15", "8", "53", "2", "5 × 3 = 15. Answer: 15."],
          ["H", "With score = 45, an if–else that prints 'Pass' for 50 and above displays", "Fail", "Pass", "45", "nothing", "45 is below 50."],
          ["H", "The loop 'for i in range(1, 4)' produces the values", "1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3", "4, 3, 2, 1", "It stops before 4."],
        ],
      },
    ],
  },
];
