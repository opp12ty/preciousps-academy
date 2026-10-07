import type { TermPlan } from "../types";

/** JSS2 Computer Studies — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Number systems",
        subtopics: ["Meaning of number base", "The decimal system", "The binary system", "Octal and hexadecimal systems"],
        objectives: ["Explain number bases", "Describe the decimal system and place values", "Explain why computers use binary", "Identify octal and hexadecimal digits"],
        lesson: {
          title: "How Computers Count",
          summary: "Explain number bases and why computers use binary.",
          minutes: 40,
          notes: `## Number base
A **number base (radix)** is the number of **different digits** used in a number system, including zero.

## The decimal system (base 10)
- digits: **0, 1, 2, 3, 4, 5, 6, 7, 8, 9** (ten digits)
- place values are powers of 10: units (1), tens (10), hundreds (100), thousands (1000)
- e.g. **345** = 3 × 100 + 4 × 10 + 5 × 1

## The binary system (base 2)
- digits: **0 and 1** only (called **bits**)
- place values are powers of 2: **1, 2, 4, 8, 16, 32, 64, 128** (from right to left)
- written with a subscript: **101₂** (read "one-zero-one base two")

## Why computers use binary
- electronic circuits have **two states**: **ON (1)** and **OFF (0)**
- two states are easy and reliable to represent with switches and transistors
- all data — numbers, text, pictures, sound — is stored as patterns of 0s and 1s

## Octal (base 8)
digits **0–7**; place values 1, 8, 64…; each octal digit represents **3 bits**.

## Hexadecimal (base 16)
digits **0–9** and **A–F**, where **A = 10, B = 11, C = 12, D = 13, E = 14, F = 15**; each hex digit represents **4 bits**; used for colour codes and memory addresses.

## Summary
| System | Base | Digits |
|---|---|---|
| binary | 2 | 0, 1 |
| octal | 8 | 0–7 |
| decimal | 10 | 0–9 |
| hexadecimal | 16 | 0–9, A–F |`,
          examples: `**Example 1.** How many digits does the binary system use? *Answer:* **two** (0 and 1).

**Example 2.** What is the decimal value of hexadecimal **C**? *Answer:* **12**.

**Example 3.** Why do computers use binary? *Answer:* Circuits have **two states**, ON and OFF.`,
        },
        questions: [
          ["E", "The number system used by computers is", "binary", "decimal", "Roman", "octal only", "Computers use 0 and 1."],
          ["E", "The binary system uses the digits", "0 and 1", "0 to 9", "1 and 2", "0 to 7", "Base two has two digits."],
          ["E", "The decimal system has base", "10", "2", "8", "16", "Ten digits 0–9."],
          ["M", "The base of the hexadecimal system is", "16", "8", "10", "2", "Hex means six, deci means ten."],
          ["M", "The octal system uses the digits", "0 to 7", "0 to 9", "0 and 1", "0 to F", "Base 8 has eight digits."],
          ["M", "In hexadecimal, the letter F represents", "15", "16", "14", "10", "A=10 up to F=15."],
          ["M", "The place values in binary from the right are", "1, 2, 4, 8, 16", "1, 10, 100, 1000", "1, 8, 64, 512", "2, 4, 6, 8", "Powers of 2. Answer: 1, 2, 4, 8, 16."],
          ["H", "Computers use binary because electronic circuits have", "two states, ON and OFF", "ten states", "no states", "sixteen colours", "Two states map to 1 and 0."],
          ["H", "Each hexadecimal digit represents", "4 bits", "3 bits", "8 bits", "2 bits", "16 = 2 to the power 4."],
          ["H", "In hexadecimal, the letter B stands for the decimal number", "11", "12", "10", "13", "A=10, B=11. Answer: 11."],
        ],
      },
      {
        week: 2,
        title: "Number base conversion",
        subtopics: ["Converting decimal to binary", "Converting binary to decimal", "Checking conversions", "Binary numbers of characters"],
        objectives: ["Convert decimal numbers to binary", "Convert binary numbers to decimal", "Check conversions by reversing them", "Explain how characters are coded in binary"],
        lesson: {
          title: "Changing Between Decimal and Binary",
          summary: "Convert numbers between decimal and binary.",
          minutes: 45,
          notes: `## Decimal to binary: repeated division by 2
Divide by **2** repeatedly and record the **remainders**; read the remainders from the **bottom up**.

**Example: convert 13 to binary**
| Division | Quotient | Remainder |
|---|---|---|
| 13 ÷ 2 | 6 | **1** |
| 6 ÷ 2 | 3 | **0** |
| 3 ÷ 2 | 1 | **1** |
| 1 ÷ 2 | 0 | **1** |
Reading upwards: **13 = 1101₂**

**Example: convert 25 to binary**
25 ÷ 2 = 12 r **1**; 12 ÷ 2 = 6 r **0**; 6 ÷ 2 = 3 r **0**; 3 ÷ 2 = 1 r **1**; 1 ÷ 2 = 0 r **1** → **25 = 11001₂**

## Binary to decimal: place values
Multiply each bit by its place value (1, 2, 4, 8, 16, …) and add.

**Example: convert 1011₂ to decimal**
| Place value | 8 | 4 | 2 | 1 |
|---|---|---|---|---|
| Bit | 1 | 0 | 1 | 1 |
1 × 8 + 0 × 4 + 1 × 2 + 1 × 1 = 8 + 0 + 2 + 1 = **11**

**Example: convert 110010₂**
32 + 16 + 0 + 0 + 2 + 0 = **50**

## Checking
convert your answer back to the original base. 1101₂ → 8 + 4 + 0 + 1 = 13 ✔

## Characters in binary
Letters and symbols are stored using codes such as **ASCII** and **Unicode**. In ASCII, capital **A = 65 = 01000001₂**, **B = 66**, and so on. Each character uses **one byte** in basic ASCII.`,
          examples: `**Example 1.** Convert 6 to binary. *Answer:* **110₂**.

**Example 2.** Convert 1111₂ to decimal. *Answer:* 8 + 4 + 2 + 1 = **15**.

**Example 3.** Convert 10 to binary. *Answer:* 10 ÷ 2 = 5 r 0; 5 ÷ 2 = 2 r 1; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1 → **1010₂**.`,
        },
        questions: [
          ["E", "To convert a decimal number to binary, you divide repeatedly by", "2", "10", "8", "16", "Binary is base two."],
          ["E", "The binary equivalent of 1 is", "1", "10", "0", "11", "One is 1 in both bases."],
          ["E", "The binary equivalent of 2 is", "10", "2", "11", "01", "One two, no units."],
          ["M", "The binary equivalent of 5 is", "101", "110", "111", "100", "4 + 1 = 5. Answer: 101."],
          ["M", "The decimal value of 111 in binary is", "7", "3", "111", "6", "4 + 2 + 1 = 7. Answer: 7."],
          ["M", "The binary equivalent of 13 is", "1101", "1011", "1110", "1001", "8 + 4 + 1 = 13."],
          ["M", "The decimal value of 1011 in binary is", "11", "13", "9", "10", "8 + 2 + 1 = 11."],
          ["H", "The binary equivalent of 25 is", "11001", "10011", "11010", "10101", "16 + 8 + 1 = 25."],
          ["H", "The decimal value of 110010 in binary is", "50", "52", "48", "34", "32 + 16 + 2 = 50."],
          ["H", "In ASCII, the capital letter A is represented by the decimal number", "65", "1", "97", "26", "Lower case a is 97."],
        ],
      },
      {
        week: 3,
        title: "Binary addition",
        subtopics: ["Rules of binary addition", "Adding two binary numbers", "Carrying in binary", "Checking with decimal"],
        objectives: ["State the rules of binary addition", "Add two binary numbers", "Carry correctly in binary addition", "Check binary sums by converting to decimal"],
        lesson: {
          title: "Adding in Base Two",
          summary: "Add binary numbers using the rules of binary addition.",
          minutes: 40,
          notes: `## Rules of binary addition
| Sum | Result | Write | Carry |
|---|---|---|---|
| 0 + 0 | 0 | 0 | 0 |
| 0 + 1 | 1 | 1 | 0 |
| 1 + 0 | 1 | 1 | 0 |
| 1 + 1 | **10** (two) | **0** | **1** |
| 1 + 1 + 1 | **11** (three) | **1** | **1** |

## Method
1. write the numbers one under the other, lining up the **right-hand** digits
2. add column by column from **right to left**
3. write the result digit and **carry** 1 to the next column when needed

## Example 1: 101₂ + 11₂
| | 1 | 0 | 1 |
|---|---|---|---|
| + | 0 | 1 | 1 |
| **=** | **1** | **0** | **0** | **0** |
- right column: 1 + 1 = 10 → write **0**, carry 1
- middle: 0 + 1 + 1 (carry) = 10 → write **0**, carry 1
- left: 1 + 0 + 1 (carry) = 10 → write **0**, carry 1 → write the final **1**
Answer: **1000₂**
Check: 101₂ = 5; 11₂ = 3; 5 + 3 = 8 = **1000₂** ✔

## Example 2: 1101₂ + 1011₂
13 + 11 = 24; in binary: **11000₂**
Working: 1+1 = 0 carry 1; 0+1+1 = 0 carry 1; 1+0+1 = 0 carry 1; 1+1+1 = 1 carry 1 → **11000₂**

## Why it matters
the **ALU** in the CPU adds binary numbers using electronic circuits called **adders**; all calculations are built from such operations.`,
          examples: `**Example 1.** Add 1₂ + 1₂. *Answer:* **10₂**.

**Example 2.** Add 110₂ + 1₂. *Answer:* **111₂** (6 + 1 = 7).

**Example 3.** Add 101₂ + 101₂. *Answer:* right column 1 + 1 = 0 carry 1; then 0 + 0 + 1 = 1; then 1 + 1 = 0 carry 1 → **1010₂** (check: 5 + 5 = 10).`,
        },
        questions: [
          ["E", "In binary, 0 + 1 equals", "1", "0", "10", "2", "No carry needed."],
          ["E", "In binary, 1 + 1 equals", "10", "2", "11", "1", "Write 0, carry 1."],
          ["E", "In binary, 0 + 0 equals", "0", "1", "10", "00 carry 1", "Nothing to add."],
          ["M", "In binary, 1 + 1 + 1 equals", "11", "10", "3", "111", "Three is 11 in binary."],
          ["M", "The sum of 10₂ and 1₂ is", "11₂", "100₂", "12₂", "10₂", "2 + 1 = 3. Answer: 11₂."],
          ["M", "The sum of 110₂ and 1₂ is", "111₂", "1000₂", "112₂", "101₂", "6 + 1 = 7. Answer: 111₂."],
          ["M", "The sum of 101₂ and 11₂ is", "1000₂", "110₂", "111₂", "1001₂", "5 + 3 = 8. Answer: 1000₂."],
          ["H", "The sum of 1101₂ and 1011₂ is", "11000₂", "10110₂", "11100₂", "10100₂", "13 + 11 = 24. Answer: 11000₂."],
          ["H", "The sum of 101₂ and 101₂ is", "1010₂", "1001₂", "202₂", "1100₂", "5 + 5 = 10. Answer: 1010₂."],
          ["H", "The part of the CPU that adds binary numbers is the", "ALU", "control unit", "hard disk", "monitor", "It performs arithmetic."],
        ],
      },
      {
        week: 4,
        title: "Computer viruses and antivirus software",
        subtopics: ["Meaning of computer viruses and malware", "How viruses spread", "Signs of virus infection", "Prevention and antivirus software"],
        objectives: ["Define computer viruses and malware", "Explain how viruses spread", "Identify signs of virus infection", "Describe ways of preventing and removing viruses"],
        lesson: {
          title: "Protecting Computers from Malware",
          summary: "Recognise, prevent and remove computer viruses.",
          minutes: 40,
          notes: `## Meaning
A **computer virus** is a **harmful program** that attaches itself to files, **copies (replicates) itself** and spreads to other files and computers, often damaging data. **Malware** (malicious software) is the general name for harmful programs.

## Types of malware
| Type | What it does |
|---|---|
| **virus** | attaches to files and spreads when the file is run |
| **worm** | spreads by itself across networks without a host file |
| **Trojan horse** | pretends to be useful software but does harm secretly |
| **spyware** | secretly collects information about the user |
| **adware** | shows unwanted advertisements |
| **ransomware** | locks or encrypts files and demands payment |

## How viruses spread
infected **flash drives** and memory cards; **email attachments**; downloading from untrusted websites; pirated software; clicking unknown links; networks.

## Signs of infection
- computer becomes very **slow**
- files **disappear** or become corrupted
- strange messages or pop-ups
- programs fail to open or crash
- unusual **shortcut files** on flash drives
- computer restarts by itself

## Prevention
- install reputable **antivirus** software and **update it regularly**
- **scan** flash drives before opening them
- do not open suspicious emails or attachments
- download only from trusted sources
- avoid pirated software
- keep the operating system **updated**
- make regular **backups**
- use a **firewall**

## Antivirus software
programs that **detect, quarantine and remove** malware, e.g. Microsoft Defender, Avast, Kaspersky, Norton, AVG. **Quarantine** isolates infected files so they cannot cause harm.`,
          examples: `**Example 1.** Which malware pretends to be useful software? *Answer:* a **Trojan horse**.

**Example 2.** Give one sign of a virus infection. *Answer:* the computer becomes **very slow**.

**Example 3.** What does an antivirus do to an infected file? *Answer:* It can **quarantine or delete** it.`,
        },
        questions: [
          ["E", "A harmful program that copies itself and spreads to other files is a", "computer virus", "word processor", "spreadsheet", "browser", "Viruses replicate."],
          ["E", "Software that detects and removes viruses is", "antivirus software", "a game", "a web browser", "a spreadsheet", "It protects the computer."],
          ["E", "Viruses can spread through infected", "flash drives", "keyboard covers", "monitors only", "mouse pads", "Removable media spread them."],
          ["M", "Malware that pretends to be useful software is a", "Trojan horse", "worm", "spyware only", "firewall", "Like the wooden horse of legend."],
          ["M", "Malware that secretly collects information about users is", "spyware", "adware", "antivirus", "freeware", "It spies on users."],
          ["M", "Malware that locks files and demands payment is", "ransomware", "adware", "a worm only", "shareware", "It holds files to ransom."],
          ["M", "A common sign of virus infection is that the computer", "becomes very slow", "becomes faster", "uses less memory", "shows no change", "Viruses use resources."],
          ["H", "Malware that spreads across networks by itself without a host file is a", "worm", "Trojan horse", "virus that needs a host", "adware", "Worms self-propagate."],
          ["H", "Isolating an infected file so it cannot cause harm is called", "quarantine", "formatting", "compressing", "booting", "It is held separately."],
          ["H", "Antivirus software should be updated regularly because", "new viruses appear constantly", "updates slow the computer", "old versions are faster", "it deletes all files", "Updates recognise new threats."],
        ],
      },
      {
        week: 5,
        title: "Managing files and folders",
        subtopics: ["Files and folders", "File names and extensions", "Creating, renaming and deleting", "Copying and moving files"],
        objectives: ["Distinguish files from folders", "Identify common file extensions", "Create, rename and delete files and folders", "Copy and move files"],
        lesson: {
          title: "Organising Your Work",
          summary: "Create and manage files and folders.",
          minutes: 40,
          notes: `## Files and folders
- a **file** is a **named collection of data** stored on a computer (a document, picture, song, program)
- a **folder (directory)** is a **container** used to **organise files** and other folders (sub-folders)
- **File Explorer** (Windows) or **Finder** (Mac) is used to manage files

## File names and extensions
A file name has a **name** and an **extension** separated by a dot, e.g. **essay.docx**. The extension shows the **file type**.
| Extension | File type |
|---|---|
| **.docx / .doc** | Word document |
| **.xlsx** | Excel spreadsheet |
| **.pptx** | PowerPoint presentation |
| **.pdf** | Portable Document Format |
| **.txt** | plain text |
| **.jpg / .png** | picture |
| **.mp3** | audio |
| **.mp4** | video |
| **.exe** | program (executable) |
| **.zip** | compressed file |
Some characters are not allowed in Windows file names: **\\ / : * ? " < > |**

## Creating and renaming
- new folder: right-click → **New → Folder**, type a name, press Enter (or **Ctrl + Shift + N**)
- rename: right-click → **Rename** (or press **F2**)

## Deleting and restoring
- select and press **Delete**; deleted items go to the **Recycle Bin**
- **restore** from the Recycle Bin if deleted by mistake
- **Shift + Delete** deletes permanently

## Copying and moving
- **copy** (Ctrl + C) then **paste** (Ctrl + V) — the original stays and a duplicate is made
- **cut** (Ctrl + X) then paste — the file is **moved**
- **drag and drop** between folders

## Path
the **location** of a file, e.g. **C:\\Users\\Ada\\Documents\\Essay.docx**

## Good practice
use meaningful names; organise by subject or date; back up important files.`,
          examples: `**Example 1.** What type of file is **result.xlsx**? *Answer:* an **Excel spreadsheet**.

**Example 2.** Where do deleted files go? *Answer:* the **Recycle Bin**.

**Example 3.** Which key renames a selected file? *Answer:* **F2**.`,
        },
        questions: [
          ["E", "A named collection of data stored on a computer is a", "file", "folder only", "monitor", "port", "Files hold data."],
          ["E", "A container used to organise files is a", "folder", "byte", "cursor", "keyboard", "Folders group files."],
          ["E", "Deleted files in Windows are moved to the", "Recycle Bin", "Start menu", "taskbar", "control panel", "They can be restored."],
          ["M", "The extension .docx indicates a", "Word document", "picture", "video", "spreadsheet", "Docx is Word. Answer: Word document."],
          ["M", "The extension .jpg indicates a", "picture", "song", "program", "presentation", "JPEG images. Answer: picture."],
          ["M", "The key used to rename a selected file is", "F2", "F5", "F1", "F12", "F2 renames. Answer: F2."],
          ["M", "Using cut and paste on a file", "moves it to a new location", "makes a duplicate", "deletes it permanently", "renames it", "The original is moved."],
          ["H", "The extension .xlsx indicates", "an Excel spreadsheet", "a Word document", "an audio file", "a compressed file", "Excel uses xlsx."],
          ["H", "Pressing Shift + Delete on a file", "deletes it permanently without the Recycle Bin", "copies it", "renames it", "restores it", "It bypasses the bin."],
          ["H", "The full location of a file such as C:\\Users\\Ada\\Essay.docx is its", "path", "extension", "icon", "size", "It shows where it is stored."],
        ],
      },
      {
        week: 6,
        title: "Introduction to spreadsheets",
        subtopics: ["Meaning of a spreadsheet", "The spreadsheet window", "Entering data", "Simple formulas"],
        objectives: ["Explain spreadsheets and their uses", "Identify cells, rows, columns and cell addresses", "Enter text and numbers in cells", "Write simple formulas"],
        lesson: {
          title: "Working with Rows and Columns",
          summary: "Enter data and simple formulas in a spreadsheet.",
          minutes: 45,
          notes: `## Meaning
A **spreadsheet** is a program for organising data in **rows and columns** and performing **calculations**. Examples: **Microsoft Excel**, **Google Sheets**, LibreOffice Calc.
Uses: result sheets, budgets, payrolls, inventories, charts, data analysis.

## The spreadsheet window
- **workbook** — a spreadsheet file (e.g. results.xlsx)
- **worksheet** — a single sheet in a workbook (Sheet1, Sheet2)
- **columns** — vertical, labelled with **letters** (A, B, C …)
- **rows** — horizontal, labelled with **numbers** (1, 2, 3 …)
- **cell** — the box where a row and column meet
- **cell address (reference)** — column letter + row number, e.g. **B3**
- **active cell** — the selected cell (with a thick border)
- **formula bar** — shows the contents of the active cell
- **name box** — shows the address of the active cell
- **range** — a group of cells, e.g. **A1:A5** (A1 to A5)

## Entering data
- **labels** (text), **values** (numbers), **formulas**
- click a cell, type, press **Enter** (moves down) or **Tab** (moves right)
- text aligns **left**, numbers align **right** by default

## Simple formulas
A **formula** always begins with an **equals sign (=)**.
| Operator | Meaning | Example |
|---|---|---|
| + | add | **=A1+B1** |
| − | subtract | **=A1-B1** |
| * | multiply | **=A1*B1** |
| / | divide | **=A1/B1** |
| ^ | power | **=A1^2** |
If A1 = 10 and B1 = 4, then **=A1+B1** gives **14** and **=A1*B1** gives **40**.
When the values change, the result **updates automatically**.

## Order of operations
brackets first, then powers, then × and ÷, then + and −: **=(A1+B1)/2** finds the average of A1 and B1.`,
          examples: `**Example 1.** What is the address of the cell in column C, row 5? *Answer:* **C5**.

**Example 2.** If A1 = 6 and A2 = 7, what does **=A1*A2** give? *Answer:* **42**.

**Example 3.** What must every formula begin with? *Answer:* an **equals sign (=)**.`,
        },
        questions: [
          ["E", "A program that organises data in rows and columns for calculation is a", "spreadsheet", "word processor", "browser", "paint program", "E.g. Excel. Answer: spreadsheet."],
          ["E", "Columns in a spreadsheet are labelled with", "letters", "numbers", "colours", "symbols", "A, B, C… Answer: letters."],
          ["E", "Rows in a spreadsheet are labelled with", "numbers", "letters", "pictures", "dates", "1, 2, 3… Answer: numbers."],
          ["M", "The box where a row and a column meet is a", "cell", "range", "chart", "tab", "Data is entered in cells."],
          ["M", "The address of the cell in column D and row 7 is", "D7", "7D", "D-7", "Row7D", "Column letter then row number."],
          ["M", "Every spreadsheet formula must begin with", "an equals sign", "a plus sign only", "a letter", "a bracket", "= starts formulas."],
          ["M", "The symbol used for multiplication in a spreadsheet formula is", "*", "x", "×", "#", "The asterisk multiplies."],
          ["H", "If A1 = 10 and B1 = 4, the formula =A1-B1 gives", "6", "14", "40", "2.5", "10 − 4 = 6. Answer: 6."],
          ["H", "The cells from A1 to A5 written as a range are", "A1:A5", "A1-A5", "A1;A5", "A1+A5", "The colon shows a range."],
          ["H", "The formula =(A1+B1)/2 calculates the", "average of A1 and B1", "product of A1 and B1", "difference of A1 and B1", "square of A1", "Sum divided by two."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Spreadsheet functions and formatting",
        subtopics: ["Built-in functions", "Using SUM, AVERAGE, MAX, MIN and COUNT", "Copying formulas (autofill)", "Formatting cells"],
        objectives: ["Explain spreadsheet functions", "Use common functions to analyse data", "Copy formulas using the fill handle", "Format cells for clear presentation"],
        lesson: {
          title: "Letting the Spreadsheet Calculate",
          summary: "Use built-in functions and format a result sheet.",
          minutes: 45,
          notes: `## Functions
A **function** is a **ready-made formula** that performs a calculation. It has a **name** and **arguments** in brackets.
| Function | Purpose | Example |
|---|---|---|
| **SUM** | adds values | **=SUM(B2:B6)** |
| **AVERAGE** | finds the mean | **=AVERAGE(B2:B6)** |
| **MAX** | finds the largest value | **=MAX(B2:B6)** |
| **MIN** | finds the smallest value | **=MIN(B2:B6)** |
| **COUNT** | counts cells containing numbers | **=COUNT(B2:B6)** |
| **IF** | tests a condition | **=IF(B2>=50,"Pass","Fail")** |

## Worked example: a result sheet
| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Name | Maths | English | Total | Average |
| 2 | Ada | 70 | 60 | **=SUM(B2:C2)** → 130 | **=AVERAGE(B2:C2)** → 65 |
| 3 | Musa | 85 | 75 | 160 | 80 |
| 4 | Bisi | 55 | 65 | 120 | 60 |
- highest maths score: **=MAX(B2:B4)** → 85
- number of students: **=COUNT(B2:B4)** → 3

## Copying formulas (autofill)
type a formula in one cell, then drag the **fill handle** (small square at the bottom-right corner of the cell) down. The cell references **adjust automatically** (relative referencing): =SUM(B2:C2) becomes =SUM(B3:C3), =SUM(B4:C4).

## Formatting cells
- **bold**, font, colour, borders and shading
- **number formats**: decimal places, currency (₦), percentage, date
- **alignment** and **merge and centre** for titles
- **column width** and row height (double-click the boundary to auto-fit)
- **sort** data (A to Z, highest to lowest)
- **####** in a cell means the column is **too narrow** to display the number`,
          examples: `**Example 1.** Write a formula to add B2 to B10. *Answer:* **=SUM(B2:B10)**.

**Example 2.** What does **=MAX(C2:C20)** find? *Answer:* the **largest value** in C2 to C20.

**Example 3.** What does #### in a cell mean? *Answer:* The **column is too narrow**.`,
        },
        questions: [
          ["E", "The function that adds a range of values is", "SUM", "MAX", "COUNT", "MIN", "SUM totals values."],
          ["E", "The function that finds the mean of values is", "AVERAGE", "SUM", "COUNT", "MAX", "It divides total by count."],
          ["E", "The function that finds the largest value is", "MAX", "MIN", "SUM", "COUNT", "MAX is maximum."],
          ["M", "The function that finds the smallest value is", "MIN", "MAX", "AVERAGE", "IF", "MIN is minimum."],
          ["M", "The formula to add B2 to B10 is", "=SUM(B2:B10)", "=ADD(B2-B10)", "SUM B2+B10", "=B2:B10", "SUM with a range."],
          ["M", "The function that counts cells containing numbers is", "COUNT", "SUM", "MAX", "IF", "COUNT counts entries."],
          ["M", "The small square at the bottom-right of a selected cell used to copy formulas is the", "fill handle", "name box", "formula bar", "scroll bar", "Drag it to autofill."],
          ["H", "If B2 = 70 and C2 = 60, then =AVERAGE(B2:C2) gives", "65", "130", "10", "70", "(70 + 60) ÷ 2 = 65."],
          ["H", "When a cell shows ####, it usually means", "the column is too narrow", "the formula is wrong", "the file is infected", "the number is negative", "Widen the column."],
          ["H", "The formula =IF(B2>=50,\"Pass\",\"Fail\") displays Pass when", "B2 is 50 or more", "B2 is less than 50", "B2 is empty", "B2 contains text", "The condition is true."],
        ],
      },
      {
        week: 2,
        title: "Charts in spreadsheets",
        subtopics: ["Meaning and uses of charts", "Types of charts", "Creating a chart", "Parts of a chart"],
        objectives: ["Explain the uses of charts", "Choose suitable chart types for data", "Create a chart from spreadsheet data", "Identify the parts of a chart"],
        lesson: {
          title: "Showing Data as Pictures",
          summary: "Create and label suitable charts from spreadsheet data.",
          minutes: 40,
          notes: `## Meaning and uses
A **chart (graph)** is a **pictorial representation of data**. Charts make data **easier to understand**, show **trends** and help **comparison** at a glance.

## Types of charts
| Chart | Best for | Example |
|---|---|---|
| **column chart** | comparing values with vertical bars | scores of students |
| **bar chart** | comparing values with horizontal bars | population of states |
| **line chart** | showing **trends over time** | monthly rainfall, sales over a year |
| **pie chart** | showing **parts of a whole** (percentages) | how a family spends its budget |
| **scatter chart** | relationship between two sets of values | height against weight |
| **area chart** | change in quantity over time | |

## Creating a chart (Excel)
1. **select** the data, including headings
2. click the **Insert** tab
3. choose the **chart type** (e.g. Column)
4. the chart appears; move and resize it
5. use **Chart Design/Format** tools to add a title, labels, colours

## Parts of a chart
| Part | Description |
|---|---|
| **chart title** | the name of the chart |
| **axes** | **x-axis** (horizontal, categories) and **y-axis** (vertical, values) |
| **axis titles** | labels on each axis |
| **legend** | key explaining colours or series |
| **data labels** | values shown on bars or slices |
| **gridlines** | lines that help read values |
| **plot area** | where the data is drawn |

## Good charts
choose the right type; give a clear title; label axes; avoid too many colours; make sure the scale is accurate.`,
          examples: `**Example 1.** Which chart shows parts of a whole? *Answer:* a **pie chart**.

**Example 2.** Which chart best shows rainfall over 12 months? *Answer:* a **line chart**.

**Example 3.** What is a legend? *Answer:* A **key** explaining colours or series.`,
        },
        questions: [
          ["E", "A pictorial representation of data is a", "chart", "formula", "cell", "range", "Charts show data visually."],
          ["E", "A chart shaped like a circle divided into slices is a", "pie chart", "bar chart", "line chart", "column chart", "Slices show parts."],
          ["E", "A chart with vertical bars is a", "column chart", "pie chart", "line chart", "scatter chart", "Columns stand up."],
          ["M", "The chart best for showing trends over time is the", "line chart", "pie chart", "doughnut chart", "radar chart only", "Lines show change."],
          ["M", "The chart best for showing parts of a whole is the", "pie chart", "line chart", "scatter chart", "bar chart", "Slices add to 100%."],
          ["M", "The key that explains the colours in a chart is the", "legend", "title", "axis", "gridline", "Legends identify series."],
          ["M", "The horizontal axis of a chart is the", "x-axis", "y-axis", "z-axis", "plot area", "Categories go on x."],
          ["H", "To create a chart in Excel, you first", "select the data", "print the sheet", "delete the headings", "close the workbook", "Charts need selected data."],
          ["H", "A chart showing the relationship between height and weight is best drawn as a", "scatter chart", "pie chart", "column chart only", "area chart", "Points show relationships."],
          ["H", "Lines drawn across the plot area to help read values are", "gridlines", "legends", "titles", "slices", "They guide the eye."],
        ],
      },
      {
        week: 3,
        title: "The internet",
        subtopics: ["Meaning of the internet", "Requirements for internet access", "Uses of the internet", "Internet terms"],
        objectives: ["Define the internet", "State the requirements for connecting to the internet", "Describe uses of the internet", "Explain common internet terms"],
        lesson: {
          title: "A Network of Networks",
          summary: "Explain the internet, how to connect and its uses.",
          minutes: 40,
          notes: `## Meaning
The **internet** is a **global network of interconnected computer networks** that communicate using common rules called **protocols** (mainly **TCP/IP**).
The **World Wide Web (WWW)** is a service on the internet made up of linked **web pages**; it was invented by **Tim Berners-Lee** around **1989–1991**.

## Requirements for internet access
- a **device** — computer, smartphone, tablet
- an **Internet Service Provider (ISP)** — e.g. telecom companies providing data
- a **connection** — modem/router, mobile data, Wi-Fi, fibre, satellite
- **software** — a **web browser** (Chrome, Edge, Firefox, Safari)
- a data plan or subscription

## Uses of the internet
- **information and research** (search engines, online encyclopaedias)
- **communication** — email, social media, video calls
- **e-learning** and online examinations registration
- **e-commerce** and online banking
- **entertainment** — music, films, games
- **news**
- **e-government** — online applications (passport, NIN, tax)
- **jobs** — online applications, remote work

## Internet terms
| Term | Meaning |
|---|---|
| **website** | a collection of related web pages |
| **web page** | a single document on the web |
| **home page** | the main page of a website |
| **URL** | Uniform Resource Locator — a web address, e.g. https://www.example.com |
| **hyperlink** | clickable text or image that opens another page |
| **HTTP / HTTPS** | protocols for web pages; **HTTPS** is secure (padlock) |
| **download / upload** | receive files from / send files to the internet |
| **bandwidth** | amount of data that can be transferred per second |
| **online / offline** | connected / not connected |
| **domain name** | the name part of a URL, e.g. example.com; **.ng** is Nigeria's country domain |`,
          examples: `**Example 1.** What does URL stand for? *Answer:* **Uniform Resource Locator**.

**Example 2.** Who invented the World Wide Web? *Answer:* **Tim Berners-Lee**.

**Example 3.** What does HTTPS with a padlock show? *Answer:* The connection is **secure**.`,
        },
        questions: [
          ["E", "A global network of interconnected computer networks is the", "internet", "intranet only", "LAN", "printer network", "It spans the world."],
          ["E", "Software used to view web pages is a", "web browser", "spreadsheet", "word processor", "antivirus", "E.g. Chrome. Answer: web browser."],
          ["E", "Receiving files from the internet to your device is", "downloading", "uploading", "printing", "scanning", "Down to your device."],
          ["M", "A company that provides internet access is an", "Internet Service Provider", "operating system", "web browser", "antivirus vendor", "ISP gives access."],
          ["M", "URL stands for", "Uniform Resource Locator", "Universal Radio Link", "User Resource List", "Uniform Router Line", "It is a web address."],
          ["M", "Clickable text that opens another web page is a", "hyperlink", "home page", "bandwidth", "domain", "Links connect pages."],
          ["M", "The main page of a website is the", "home page", "web browser", "search engine", "server room", "It is the starting page."],
          ["H", "The World Wide Web was invented by", "Tim Berners-Lee", "Charles Babbage", "Bill Gates", "Alan Turing", "Around 1989–1991."],
          ["H", "A web address beginning with https and showing a padlock indicates", "a secure connection", "a virus", "an offline page", "a printer", "S means secure."],
          ["H", "Nigeria's country code top-level domain is", ".ng", ".ni", ".na", ".nn", "E.g. gov.ng. Answer: .ng."],
        ],
      },
      {
        week: 4,
        title: "Web browsers and search engines",
        subtopics: ["Parts of a web browser", "Navigating websites", "Search engines", "Effective searching and evaluating sources"],
        objectives: ["Identify parts of a web browser", "Navigate websites using links and the address bar", "Use search engines", "Search effectively and evaluate online information"],
        lesson: {
          title: "Finding Information Online",
          summary: "Use browsers and search engines effectively and judge sources.",
          minutes: 40,
          notes: `## Parts of a web browser
| Part | Use |
|---|---|
| **address bar** | type a URL to visit a website |
| **back / forward buttons** | move to previous or next pages |
| **refresh (reload)** | reload the current page (F5) |
| **home button** | go to the home page |
| **tabs** | open several pages in one window (**Ctrl + T** new tab) |
| **bookmarks / favourites** | save addresses of useful pages |
| **history** | list of pages visited (**Ctrl + H**) |
| **downloads** | list of downloaded files |
Examples of browsers: **Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Opera**.

## Search engines
A **search engine** is a website that **finds information on the web** using keywords. Examples: **Google, Bing, Yahoo, DuckDuckGo**.
Note: a **browser** opens web pages; a **search engine** is a website used to search.

## Effective searching
- use **specific keywords**: *causes of malaria in Nigeria* instead of *malaria*
- use **quotation marks** for exact phrases: "Lake Chad"
- use a **minus sign** to exclude words: *jaguar -car*
- use **site:** to search one website: *site:gov.ng NIN*
- check spellings; try synonyms

## Evaluating sources
- **who** wrote it? Is the author an expert or organisation (e.g. **.gov**, **.edu**)?
- **when** was it published or updated?
- is the information **accurate** and supported by other sources?
- is it **biased** or trying to sell something?
- avoid copying — **cite your sources** and write in your own words (avoid **plagiarism**)`,
          examples: `**Example 1.** Name a search engine. *Answer:* **Google** (or Bing).

**Example 2.** How do you search for an exact phrase? *Answer:* Put it in **quotation marks**.

**Example 3.** What is plagiarism? *Answer:* **Copying another person's work** and presenting it as your own.`,
        },
        questions: [
          ["E", "A website used to find information on the web with keywords is a", "search engine", "spreadsheet", "word processor", "operating system", "E.g. Google. Answer: search engine."],
          ["E", "The part of a browser where you type a web address is the", "address bar", "status bar", "taskbar", "scroll bar", "URLs go there. Answer: address bar."],
          ["E", "Mozilla Firefox and Microsoft Edge are examples of", "web browsers", "search engines only", "spreadsheets", "viruses", "Both open and display web pages."],
          ["M", "Saving the address of a useful web page in a browser is", "bookmarking", "refreshing", "downloading", "uploading", "Bookmarks save links."],
          ["M", "The button that reloads the current web page is", "refresh", "home", "back", "bookmark", "F5 also refreshes."],
          ["M", "To search for an exact phrase, you should put it in", "quotation marks", "brackets", "capital letters only", "italics", "Quotes keep words together."],
          ["M", "The browser feature that shows a list of pages visited is", "history", "bookmarks", "tabs", "downloads", "History records visits."],
          ["H", "The search 'site:gov.ng passport' finds results", "only from gov.ng websites", "from all websites except gov.ng", "only images", "only videos", "Site: limits to a domain."],
          ["H", "Copying another person's work and presenting it as your own is", "plagiarism", "citation", "research", "bookmarking", "Always credit sources."],
          ["H", "A reliable online source is more likely to be", "written by experts and recently updated", "anonymous and selling products", "full of spelling errors", "very old and unsupported", "Check author and date."],
        ],
      },
      {
        week: 5,
        title: "Electronic mail",
        subtopics: ["Meaning of email", "Email addresses", "Creating and sending an email", "Email features and etiquette"],
        objectives: ["Explain electronic mail", "Identify the parts of an email address", "Compose and send an email", "Use email features and observe etiquette"],
        lesson: {
          title: "Sending Messages Electronically",
          summary: "Create, send and manage email correctly.",
          minutes: 40,
          notes: `## Meaning
**Electronic mail (email)** is a method of **sending and receiving messages and files** over the internet. Email services include **Gmail, Outlook, Yahoo Mail**.

## Email address
format: **username@domainname**
example: **ada.okafor@example.com**
- **username** — identifies the user (ada.okafor)
- **@** — "at" sign, separates the parts
- **domain name** — the mail service or organisation (example.com)
Email addresses have **no spaces**.

## Creating an account
choose a provider; fill in personal details; choose a username; create a **strong password**; add a recovery phone or email.

## Composing and sending
1. click **Compose** (or New)
2. **To:** — recipient's address
3. **Cc:** — carbon copy (others who should see it)
4. **Bcc:** — blind carbon copy (hidden recipients)
5. **Subject:** — short summary of the message
6. **body** — the message
7. **attach** files with the **paperclip** icon
8. click **Send**

## Mail folders
**Inbox** (received mail), **Sent**, **Drafts** (unfinished messages), **Spam/Junk** (unwanted mail), **Trash/Bin**.
- **Reply** — answer the sender; **Reply all** — answer everyone; **Forward** — send a received email to someone else

## Advantages
fast; cheap; can send attachments; reach many people at once; messages are stored.

## Etiquette (netiquette)
clear subject; polite greeting and closing; short and clear message; check spelling; avoid writing in ALL CAPITALS (seen as shouting); do not forward chain messages; do not open suspicious attachments; respect privacy.`,
          examples: `**Example 1.** Identify the domain name in **musa@school.edu.ng**. *Answer:* **school.edu.ng**.

**Example 2.** Where are unfinished emails saved? *Answer:* the **Drafts** folder.

**Example 3.** What is the difference between Cc and Bcc? *Answer:* **Bcc recipients are hidden** from other recipients.`,
        },
        questions: [
          ["E", "Sending and receiving messages over the internet is", "electronic mail", "postal mail", "faxing only", "texting by radio", "Email is electronic."],
          ["E", "The symbol that separates the username and domain in an email address is", "@", "#", "&", "%", "@ means at. Answer: @."],
          ["E", "The folder that holds received emails is the", "Inbox", "Outbox", "Drafts", "Sent", "New mail arrives there."],
          ["M", "The folder that stores unfinished emails is", "Drafts", "Inbox", "Spam", "Sent", "Drafts are incomplete."],
          ["M", "Sending a received email to another person is", "forwarding", "replying", "composing", "deleting", "Forward passes it on."],
          ["M", "A file sent along with an email is an", "attachment", "address", "inbox", "subject", "Attached with the paperclip."],
          ["M", "Unwanted bulk emails are stored in the", "Spam folder", "Inbox only", "Drafts", "Sent folder", "Spam is junk mail."],
          ["H", "Recipients whose addresses are hidden from others are added in the", "Bcc field", "Cc field", "To field", "Subject field", "Blind carbon copy."],
          ["H", "Writing an email entirely in capital letters is considered", "shouting", "polite", "formal", "secure", "It is poor netiquette."],
          ["H", "Which is a valid email address?", "ada.okafor@example.com", "ada okafor@example.com", "ada.okafor.example.com", "@ada.okafor", "No spaces and one @."],
        ],
      },
      {
        week: 6,
        title: "Internet safety",
        subtopics: ["Online risks", "Protecting personal information", "Cyberbullying", "Safe online habits"],
        objectives: ["Identify online risks", "Protect personal information online", "Respond to cyberbullying", "Practise safe online habits"],
        lesson: {
          title: "Staying Safe Online",
          summary: "Recognise online dangers and protect yourself.",
          minutes: 40,
          notes: `## Online risks
| Risk | Meaning |
|---|---|
| **phishing** | fake emails, messages or websites that trick people into giving passwords, PINs or bank details |
| **identity theft** | criminals using someone's personal details |
| **online fraud (scams)** | fake prizes, fake jobs, "send money" messages |
| **malware** | viruses from downloads and links |
| **cyberbullying** | using digital devices to threaten, insult or embarrass someone |
| **inappropriate content** | violent or harmful material |
| **online predators** | adults pretending to be friends to harm young people |
| **addiction** | spending too much time online |

## Protecting personal information
- never share your **password, PIN, BVN, OTP**, home address or school details with strangers
- use **strong passwords** — at least **8–12 characters** mixing **upper and lower case letters, numbers and symbols**; do not use names or birthdays
- use different passwords for different accounts
- turn on **two-factor authentication (2FA)**
- set social media accounts to **private**
- **log out** on shared computers
- think before posting — the internet has a long memory (**digital footprint**)

## Cyberbullying
- **do not reply** to bullies
- **save evidence** (screenshots)
- **block** and **report** the person
- **tell a trusted adult** — parent, teacher, counsellor
- never bully others

## Safe online habits
check that websites use **HTTPS**; do not click unknown links; verify messages that claim to be from banks — banks do not ask for PINs; do not meet online friends without a parent; balance screen time with other activities.`,
          examples: `**Example 1.** A message asks you to "verify your BVN" by clicking a link. What is this likely to be? *Answer:* **phishing**.

**Example 2.** Give an example of a strong password pattern. *Answer:* a mix like **Kola#2026!pen** (letters, numbers, symbols).

**Example 3.** What should you do if cyberbullied? *Answer:* **Save evidence, block, report and tell a trusted adult.**`,
        },
        questions: [
          ["E", "Fake messages that trick people into revealing passwords are", "phishing", "browsing", "downloading", "formatting", "They fish for details."],
          ["E", "Using digital devices to insult or threaten someone is", "cyberbullying", "e-learning", "netiquette", "blogging", "It is online bullying."],
          ["E", "You should never share your", "password", "favourite colour", "school subject", "hobby", "Passwords must be secret."],
          ["M", "A strong password should contain", "letters, numbers and symbols", "only your name", "only your birthday", "the word password", "Mixing characters makes it harder to guess."],
          ["M", "Two-factor authentication adds", "an extra step to verify identity", "two viruses", "two browsers", "two keyboards", "E.g. a code sent to your phone."],
          ["M", "The record of everything you post and do online is your", "digital footprint", "hard copy", "bandwidth", "IP address only", "It stays online."],
          ["M", "If you are cyberbullied, you should first", "tell a trusted adult and save evidence", "reply with insults", "delete all evidence", "keep it secret", "Adults can help."],
          ["H", "A message claiming to be from your bank asking for your PIN is most likely", "a scam", "a genuine request", "an update", "a reward", "Banks never ask for PINs."],
          ["H", "Using criminals' stolen personal details to pretend to be someone is", "identity theft", "spamming", "phishing only", "blogging", "It misuses identity."],
          ["H", "On a shared computer, after using your email you should", "log out", "leave it open", "save your password in the browser", "share your password", "Logging out protects the account."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Computer networks",
        subtopics: ["Meaning of a computer network", "Types of networks", "Advantages and disadvantages of networks", "Wired and wireless networks"],
        objectives: ["Define a computer network", "Distinguish PAN, LAN, MAN and WAN", "State advantages and disadvantages of networks", "Distinguish wired and wireless networks"],
        lesson: {
          title: "Connecting Computers Together",
          summary: "Classify computer networks and describe their benefits.",
          minutes: 40,
          notes: `## Meaning
A **computer network** is **two or more computers connected together** to **share resources** (files, printers, internet) and **communicate**.

## Types of networks by size
| Type | Full name | Coverage | Example |
|---|---|---|---|
| **PAN** | Personal Area Network | a few metres around a person | phone connected to earbuds by Bluetooth |
| **LAN** | Local Area Network | a room, building or school | school computer laboratory |
| **MAN** | Metropolitan Area Network | a city or town | network linking a university's campuses in a city |
| **WAN** | Wide Area Network | countries and continents | the **internet**, bank networks across Nigeria |

## Other terms
- **intranet** — a private network within an organisation using internet technology
- **server** — a powerful computer that provides services (files, websites) to other computers (**clients**)
- **peer-to-peer** — computers share equally without a central server

## Advantages of networks
**sharing** of files, printers and internet; **communication** (email, chat); centralised **backups**; easier **software updates**; reduced costs.

## Disadvantages
**viruses** spread easily; **security** risks (hacking); cost of setting up; failure of the server can affect everyone; needs skilled administrators.

## Wired and wireless
- **wired** — uses **cables** (Ethernet twisted-pair, fibre optic); fast, stable, secure
- **wireless** — uses **radio waves** (**Wi-Fi**, **Bluetooth**, mobile networks); flexible and mobile but may be slower and less secure
**Fibre optic** cables carry data as **light** and are very fast.`,
          examples: `**Example 1.** What type of network is a school computer lab? *Answer:* a **LAN**.

**Example 2.** Which is the largest WAN? *Answer:* the **internet**.

**Example 3.** Give one advantage of a network. *Answer:* **sharing printers and files**.`,
        },
        questions: [
          ["E", "Two or more computers connected to share resources form a", "network", "spreadsheet", "folder", "program", "Networks share resources."],
          ["E", "A network within a school building is a", "LAN", "WAN", "MAN", "PAN", "Local Area Network."],
          ["E", "The internet is the largest", "WAN", "LAN", "PAN", "intranet", "It covers the world."],
          ["M", "PAN stands for", "Personal Area Network", "Public Access Network", "Private Area Node", "Primary Access Network", "It covers a few metres."],
          ["M", "A network covering a city is a", "MAN", "PAN", "LAN", "SAN", "Metropolitan Area Network."],
          ["M", "A powerful computer that provides services to other computers is a", "server", "client only", "router", "printer", "Servers serve clients."],
          ["M", "Wireless networking within homes and offices commonly uses", "Wi-Fi", "fibre only", "telephone wires only", "parallel cables", "It uses radio waves."],
          ["H", "A private network within an organisation using internet technology is an", "intranet", "internet", "extranet only", "PAN", "It is internal."],
          ["H", "Cables that carry data as pulses of light are", "fibre optic cables", "twisted-pair cables", "power cables", "telephone cords", "Light travels very fast."],
          ["H", "A disadvantage of computer networks is that", "viruses can spread easily", "files can be shared", "printers can be shared", "communication is easier", "Connections spread malware."],
        ],
      },
      {
        week: 2,
        title: "Network devices and topologies",
        subtopics: ["Network devices", "Transmission media", "Network topologies", "Choosing a topology"],
        objectives: ["Identify network devices and their functions", "Identify transmission media", "Describe bus, star, ring and mesh topologies", "Compare advantages of different topologies"],
        lesson: {
          title: "How Networks Are Built",
          summary: "Identify network devices and topologies.",
          minutes: 40,
          notes: `## Network devices
| Device | Function |
|---|---|
| **Network Interface Card (NIC)** | allows a computer to connect to a network |
| **modem** | **MO**dulates and **DEM**odulates — converts digital signals to analogue for transmission and back |
| **router** | **directs data** between networks; connects a LAN to the internet |
| **switch** | connects devices in a LAN and sends data only to the intended device |
| **hub** | connects devices but sends data to **all** devices (older, less efficient) |
| **access point** | provides **Wi-Fi** connection to wireless devices |
| **repeater** | **boosts** weak signals over long distances |

## Transmission media
- **guided (wired)**: twisted-pair cable (Ethernet), coaxial cable, fibre optic cable
- **unguided (wireless)**: radio waves (Wi-Fi), microwaves, infrared, satellite

## Network topologies
**Topology** is the **physical or logical arrangement** of computers and devices in a network.
| Topology | Arrangement | Advantage | Disadvantage |
|---|---|---|---|
| **bus** | all devices share **one main cable (backbone)** | cheap, easy to set up | if the main cable fails, the network fails |
| **star** | each device connects to a **central switch/hub** | easy to add devices; one cable failure affects only one device | if the central device fails, the network fails |
| **ring** | devices connected in a **closed loop** | orderly data flow | one break can disrupt the ring |
| **mesh** | each device connected to **many or all** others | very reliable; many paths | expensive, many cables |
| **tree** | a combination of star networks linked to a bus | scalable | depends on the backbone |
The **star** topology is the most common in schools and offices.`,
          examples: `**Example 1.** Which device connects a home network to the internet? *Answer:* a **router**.

**Example 2.** In which topology do all devices connect to a central switch? *Answer:* **star** topology.

**Example 3.** What does a repeater do? *Answer:* It **boosts weak signals**.`,
        },
        questions: [
          ["E", "The arrangement of computers in a network is its", "topology", "protocol", "bandwidth", "domain", "Topology is layout."],
          ["E", "A device that directs data between networks is a", "router", "monitor", "printer", "scanner", "Routers route data."],
          ["E", "A network in which all devices connect to a central device is a", "star topology", "bus topology", "ring topology", "mesh topology", "It looks like a star."],
          ["M", "A topology in which all devices share one main cable is the", "bus topology", "star topology", "ring topology", "tree topology", "The cable is the backbone."],
          ["M", "A topology in which devices form a closed loop is the", "ring topology", "bus topology", "star topology", "mesh topology", "Data travels round."],
          ["M", "A device that boosts weak signals is a", "repeater", "modem", "switch", "printer", "It regenerates signals."],
          ["M", "The card that allows a computer to connect to a network is the", "Network Interface Card", "graphics card", "sound card", "memory card", "NIC connects to networks."],
          ["H", "The word 'modem' comes from", "modulator-demodulator", "mobile-device-memory", "modern-demand", "monitor-device", "It converts signals."],
          ["H", "A disadvantage of the star topology is that", "the network fails if the central device fails", "adding computers is difficult", "one cable failure stops everything", "it needs no switch", "The hub is critical."],
          ["H", "The most reliable but most expensive topology because of many connections is the", "mesh topology", "bus topology", "ring topology", "star topology", "Many paths exist."],
        ],
      },
      {
        week: 3,
        title: "Presentation software",
        subtopics: ["Meaning and uses of presentation software", "Creating slides", "Adding pictures, transitions and animations", "Delivering a presentation"],
        objectives: ["Explain presentation software and its uses", "Create and format slides", "Add pictures, transitions and animations", "Deliver an effective slide presentation"],
        lesson: {
          title: "Presenting with Slides",
          summary: "Create and deliver an effective slide presentation.",
          minutes: 45,
          notes: `## Meaning and uses
**Presentation software** is used to create **slide shows** that combine text, pictures, charts, audio and video. Examples: **Microsoft PowerPoint**, **Google Slides**, **Apple Keynote**, LibreOffice Impress.
Uses: class presentations, business meetings, seminars, church/mosque announcements, training, advertisements.

## Key terms
- **slide** — one page of a presentation
- **presentation** — the whole file (e.g. project.pptx)
- **slide layout** — arrangement of placeholders (title, content, two content)
- **placeholder** — box for text or objects
- **theme/design** — consistent colours, fonts and backgrounds
- **slide sorter view** — shows all slides as thumbnails for rearranging
- **notes pane** — speaker notes not shown to the audience

## Creating slides
1. open PowerPoint → **Blank presentation** or a template
2. type the **title slide**
3. **Home → New Slide** to add slides
4. choose layouts; type text in placeholders
5. apply a **design theme**
6. save (Ctrl + S)

## Adding objects and effects
- **Insert** tab: pictures, shapes, charts, tables, audio, video
- **transitions** — effects **between slides** (fade, push, wipe)
- **animations** — effects on **objects within a slide** (fly in, appear)
- use effects **sparingly** — too many distract the audience

## Running the slide show
- **F5** — start from the beginning
- **Shift + F5** — start from the current slide
- arrow keys or click to move; **Esc** ends the show

## Tips for good presentations (the 6 × 6 guideline)
about **six bullet points** per slide and about **six words** per point; large readable fonts (at least 24 point for body text); high contrast colours; one idea per slide; practise; face the audience — do not read every word.`,
          examples: `**Example 1.** Which key starts a slide show from the beginning? *Answer:* **F5**.

**Example 2.** What is the difference between a transition and an animation? *Answer:* A **transition** is between slides; an **animation** is on objects within a slide.

**Example 3.** Which view helps you rearrange slides? *Answer:* **slide sorter** view.`,
        },
        questions: [
          ["E", "Software used to create slide shows is", "presentation software", "spreadsheet software", "database software", "antivirus software", "E.g. PowerPoint."],
          ["E", "One page of a presentation is a", "slide", "cell", "record", "field", "Presentations contain slides."],
          ["E", "Microsoft PowerPoint is a", "presentation program", "word processor", "spreadsheet", "browser", "It makes slides."],
          ["M", "An effect applied when moving from one slide to the next is a", "transition", "animation", "theme", "placeholder", "Transitions link slides."],
          ["M", "An effect applied to an object within a slide is an", "animation", "transition", "outline", "orientation", "Objects can fly in."],
          ["M", "The key that starts a slide show from the beginning is", "F5", "F7", "F2", "F12", "F5 runs the show."],
          ["M", "A box on a slide that holds text or objects is a", "placeholder", "transition", "cell", "legend", "It reserves space."],
          ["H", "The view that shows all slides as thumbnails for rearranging is", "slide sorter view", "normal view", "reading view", "notes page view", "It sorts slides."],
          ["H", "A good presentation should have", "few words per slide and readable fonts", "many paragraphs on each slide", "tiny fonts", "many distracting animations", "Keep slides simple."],
          ["H", "Speaker notes are typed in the", "notes pane", "title placeholder", "slide sorter", "address bar", "Audiences don't see them."],
        ],
      },
      {
        week: 4,
        title: "Computer graphics",
        subtopics: ["Meaning of computer graphics", "Graphics software", "Using a paint program", "Raster and vector graphics"],
        objectives: ["Explain computer graphics", "Identify graphics software", "Create simple drawings with a paint program", "Distinguish raster and vector graphics"],
        lesson: {
          title: "Drawing with the Computer",
          summary: "Create simple graphics and understand image types.",
          minutes: 40,
          notes: `## Meaning
**Computer graphics** are **pictures, drawings, designs and animations** created or edited with a computer.
Uses: logos, posters, cartoons and animation, games, engineering designs (CAD), photo editing, web design, maps.

## Graphics software
| Software | Use |
|---|---|
| **Microsoft Paint** | simple drawing and colouring |
| **CorelDRAW**, **Adobe Illustrator**, **Inkscape** | vector design: logos, flyers |
| **Adobe Photoshop**, **GIMP** | photo editing |
| **AutoCAD** | engineering and architectural drawings |
| **Blender** | 3D modelling and animation |
| **Canva** | quick online designs |

## Using Paint
Common tools:
- **pencil** (freehand thin lines), **brushes**, **eraser**
- **fill with colour** (paint bucket) — fills an enclosed area
- **text tool** (A) — adds text
- **shapes** — line, rectangle, oval, triangle, star
- **colour picker** — picks a colour from the picture
- **magnifier** — zoom
- **select**, **crop**, **resize**, **rotate**
- hold **Shift** while drawing a rectangle to get a **perfect square**, or an oval to get a **perfect circle**
Save as **.png** or **.jpg**.

## Raster and vector graphics
| Raster (bitmap) | Vector |
|---|---|
| made of **pixels** | made of **paths** (lines and curves) defined mathematically |
| become **blurred/pixelated** when enlarged | can be resized **without losing quality** |
| photographs, Paint images | logos, illustrations |
| .jpg, .png, .bmp, .gif | .svg, .ai, .cdr, .eps |

## Resolution
the number of pixels in an image (e.g. 1920 × 1080); higher resolution gives sharper images but larger files.`,
          examples: `**Example 1.** Which Paint tool fills an enclosed area with colour? *Answer:* the **fill (paint bucket)** tool.

**Example 2.** Which type of graphic keeps its quality when enlarged? *Answer:* **vector** graphics.

**Example 3.** How do you draw a perfect circle in Paint? *Answer:* Hold **Shift** while drawing an oval.`,
        },
        questions: [
          ["E", "Pictures and drawings created with a computer are", "computer graphics", "spreadsheets", "databases", "emails", "Graphics are visual."],
          ["E", "A simple drawing program that comes with Windows is", "Paint", "Excel", "Access", "Outlook", "It is used for drawing."],
          ["E", "The Paint tool that fills an enclosed area with colour is the", "fill (paint bucket)", "eraser", "text tool", "magnifier", "It pours colour."],
          ["M", "Images made of pixels are", "raster graphics", "vector graphics", "3D models only", "fonts", "Pixels form bitmaps."],
          ["M", "Images made of mathematical paths are", "vector graphics", "raster graphics", "photographs", "scans", "Paths scale well."],
          ["M", "Software used mainly for editing photographs is", "Adobe Photoshop", "Microsoft Access", "AutoCAD only", "Notepad", "It edits photos."],
          ["M", "Software used for engineering and architectural drawings is", "AutoCAD", "Paint only", "PowerPoint", "Outlook", "CAD software. Answer: AutoCAD."],
          ["H", "To draw a perfect square in Paint, hold the", "Shift key", "Ctrl key", "Alt key", "Tab key", "Shift constrains proportions."],
          ["H", "A raster image that looks blocky when enlarged is", "pixelated", "vectorised", "compressed", "animated", "Pixels become visible."],
          ["H", "A file extension commonly used for vector graphics is", ".svg", ".jpg", ".bmp", ".mp3", "Scalable Vector Graphics."],
        ],
      },
      {
        week: 5,
        title: "Computer ethics and copyright",
        subtopics: ["Meaning of computer ethics", "Copyright and software licensing", "Privacy and data protection", "Cybercrime and the law"],
        objectives: ["Explain computer ethics", "Explain copyright and software licences", "Describe privacy and data protection", "Identify cybercrimes and relevant Nigerian laws"],
        lesson: {
          title: "Doing the Right Thing with Computers",
          summary: "Apply ethical, legal and responsible computer use.",
          minutes: 40,
          notes: `## Computer ethics
**Computer ethics** are the **moral principles** that guide the **responsible use** of computers and the internet.
Examples of ethical behaviour:
- do not use another person's account or files without permission
- do not spread **false information (fake news)** or hateful content
- do not copy others' work without credit (**plagiarism**)
- respect **privacy**
- do not hack or damage systems
- use school computers only for approved purposes

## Copyright and licensing
- **copyright** gives creators the legal right to control copies of their work (software, music, films, books)
- **software licence** — permission to use software under certain conditions
  - **proprietary (commercial)** — must be bought (e.g. Microsoft Office)
  - **freeware** — free to use
  - **open-source** — source code available; can be modified and shared (e.g. Linux, LibreOffice)
  - **shareware** — free trial, then pay
- **software piracy** — illegal copying or distribution of software
- **Creative Commons** licences allow some sharing with conditions

## Privacy and data protection
**Privacy** is the right to keep personal information confidential. Organisations that collect data must protect it. In Nigeria, the **Nigeria Data Protection Act (2023)** and the **Nigeria Data Protection Commission (NDPC)** regulate how personal data is collected and used.

## Cybercrime
crimes committed using computers or the internet: **hacking** (unauthorised access), **phishing**, online **fraud** ("yahoo yahoo"), **identity theft**, **cyberstalking** and cyberbullying, spreading **malware**, **software piracy**.
In Nigeria, the **Cybercrimes (Prohibition, Prevention, etc.) Act 2015** provides punishments for such crimes. Agencies such as the **EFCC** and the **police** investigate them.`,
          examples: `**Example 1.** Is copying a friend's assignment from the internet ethical? *Answer:* **No** — it is plagiarism.

**Example 2.** What is software piracy? *Answer:* **Illegal copying or distribution** of software.

**Example 3.** Name the Nigerian law against cybercrime. *Answer:* the **Cybercrimes (Prohibition, Prevention, etc.) Act 2015**.`,
        },
        questions: [
          ["E", "Moral principles that guide responsible computer use are", "computer ethics", "computer graphics", "computer networks", "computer generations", "Ethics guide behaviour."],
          ["E", "Illegally copying software is", "software piracy", "software licensing", "software updating", "software testing", "It breaks copyright."],
          ["E", "Gaining unauthorised access to a computer system is", "hacking", "booting", "browsing", "scanning", "It is illegal. Answer: hacking."],
          ["M", "The legal right of creators to control copies of their work is", "copyright", "privacy", "freeware", "piracy", "It protects creators."],
          ["M", "Software that must be bought before use is", "proprietary software", "freeware", "open-source software", "public domain software", "It is commercial."],
          ["M", "The right to keep personal information confidential is", "privacy", "piracy", "plagiarism", "phishing", "Privacy protects data."],
          ["M", "Copying someone else's work and presenting it as yours is", "plagiarism", "citation", "licensing", "backup", "Always give credit."],
          ["H", "The Nigerian law that punishes cybercrimes is the", "Cybercrimes (Prohibition, Prevention, etc.) Act 2015", "Land Use Act", "Labour Act", "Evidence Act only", "It addresses cybercrime."],
          ["H", "The Nigerian body that regulates the use of personal data is the", "Nigeria Data Protection Commission", "NAFDAC", "NIPOST", "NCC only", "Established under the 2023 Act."],
          ["H", "Spreading false information online deliberately is", "unethical behaviour", "good netiquette", "data protection", "software licensing", "Fake news harms people."],
        ],
      },
      {
        week: 6,
        title: "Careers in computing",
        subtopics: ["Computer professionals", "Skills and qualifications", "ICT professional bodies", "Preparing for an ICT career"],
        objectives: ["Identify computer professionals and their roles", "State the skills and qualifications needed", "Name ICT professional bodies in Nigeria", "Plan how to prepare for an ICT career"],
        lesson: {
          title: "Jobs in the Digital World",
          summary: "Explore careers in computing and how to prepare for them.",
          minutes: 40,
          notes: `## Computer professionals
| Professional | Role |
|---|---|
| **software developer / programmer** | writes and tests programs and apps |
| **systems analyst** | studies an organisation's needs and designs computer systems |
| **database administrator** | manages databases and their security |
| **network administrator/engineer** | sets up and maintains networks |
| **web developer** | builds websites |
| **cybersecurity analyst** | protects systems from attacks |
| **data analyst / data scientist** | analyses data to support decisions |
| **computer engineer / hardware technician** | designs, builds and repairs hardware |
| **graphic designer / UI-UX designer** | designs visuals and user interfaces |
| **IT support specialist** | helps users solve computer problems |
| **computer teacher/lecturer** | teaches computing |
| **game developer**, **AI/machine learning engineer**, **cloud engineer** | emerging fields |

## Skills needed
**problem-solving** and logical thinking; **mathematics**; programming; attention to detail; communication and teamwork; creativity; willingness to **keep learning** (technology changes quickly); honesty and integrity.

## Qualifications
- study **Computer Studies**, **Mathematics**, **Physics** and **English** well
- degrees/diplomas in Computer Science, Software Engineering, Information Technology, Cybersecurity, Computer Engineering
- professional **certifications** (networking, cloud, security)
- online courses, bootcamps and building a **portfolio** of projects

## ICT professional bodies in Nigeria
- **Computer Professionals (Registration Council of Nigeria) — CPN** — regulates the computing profession
- **Nigeria Computer Society (NCS)**
- **National Information Technology Development Agency (NITDA)** — develops and regulates IT in Nigeria

## Preparing now
practise typing and office skills; learn a programming language (e.g. Python, Scratch); join a computer club; take part in coding competitions; use the internet safely for learning.`,
          examples: `**Example 1.** Who builds websites? *Answer:* a **web developer**.

**Example 2.** Which body regulates the computing profession in Nigeria? *Answer:* **CPN** (Computer Professionals Registration Council of Nigeria).

**Example 3.** Name one skill needed for a computing career. *Answer:* **problem-solving**.`,
        },
        questions: [
          ["E", "A software developer who writes and tests code for apps is also called a", "programmer", "typist", "cashier", "receptionist", "Programmers write code."],
          ["E", "A person who builds websites is a", "web developer", "hardware technician", "data entry clerk", "cleaner", "They create sites."],
          ["E", "A person who repairs computer hardware is a", "hardware technician", "web designer", "graphic designer", "data analyst", "They fix devices."],
          ["M", "A professional who protects computer systems from attacks is a", "cybersecurity analyst", "graphic designer", "typist", "salesperson", "They secure systems."],
          ["M", "A professional who manages databases is a", "database administrator", "network cable layer", "web browser", "game tester only", "DBAs manage data."],
          ["M", "A professional who studies an organisation's needs and designs computer systems is a", "systems analyst", "typist", "IT trainee only", "photographer", "They analyse requirements."],
          ["M", "An important skill for computing careers is", "problem-solving", "laziness", "carelessness", "dishonesty", "Computing solves problems."],
          ["H", "The body that regulates the computing profession in Nigeria is", "CPN", "NAFDAC", "INEC", "NBC", "Computer Professionals Registration Council."],
          ["H", "The agency responsible for developing and regulating IT in Nigeria is", "NITDA", "NIPOST", "NDLEA", "NEMA", "National IT Development Agency."],
          ["H", "A collection of projects that shows a programmer's skills is a", "portfolio", "licence", "virus", "domain", "It proves ability."],
        ],
      },
    ],
  },
];
