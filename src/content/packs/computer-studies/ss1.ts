import type { TermPlan } from "../types";

/** SS1 Computer Studies — original Precious PS content aligned to the senior secondary syllabus (WAEC/NECO). */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Computer architecture and the stored-program concept",
        subtopics: ["The von Neumann architecture", "The stored-program concept", "System buses", "The fetch–execute cycle in detail"],
        objectives: ["Describe the von Neumann architecture", "Explain the stored-program concept", "Distinguish the data, address and control buses", "Explain the stages of the fetch–execute cycle"],
        lesson: {
          title: "How a Computer Is Organised",
          summary: "Describe the von Neumann model, buses and the fetch–execute cycle.",
          minutes: 45,
          notes: `## The von Neumann architecture
Most modern computers follow a design described by **John von Neumann** (1945). Its main parts:
- **Central Processing Unit (CPU)** — **control unit**, **ALU** and **registers**
- **main memory** — holds **both data and program instructions**
- **input/output (I/O) devices**
- **buses** — pathways connecting the parts

## The stored-program concept
**Instructions and data are stored together in the same memory** in binary form, and the CPU fetches instructions from memory one after another. Earlier machines were "programmed" by rewiring; storing programs in memory made computers flexible.

## System buses
A **bus** is a set of parallel wires that carries signals between components.
| Bus | Carries | Direction |
|---|---|---|
| **data bus** | the actual **data** being transferred | two-way (bidirectional) |
| **address bus** | the **memory address** (location) to read from or write to | one-way (CPU → memory) |
| **control bus** | **control signals** (read, write, clock, interrupt) | two-way |
The **width** of the address bus decides how much memory can be addressed: n address lines can address **2 to the power n** locations.

## Important registers
| Register | Function |
|---|---|
| **Program Counter (PC)** | holds the **address of the next instruction** |
| **Memory Address Register (MAR)** | holds the address being accessed |
| **Memory Data/Buffer Register (MDR/MBR)** | holds data just read from or about to be written to memory |
| **Current Instruction Register (CIR/IR)** | holds the instruction being decoded and executed |
| **Accumulator (ACC)** | holds results of ALU calculations |

## The fetch–execute cycle
1. **fetch** — PC address copied to MAR; instruction read into MDR, then to CIR; PC increased by 1
2. **decode** — control unit interprets the instruction
3. **execute** — the instruction is carried out (e.g. ALU adds; result in accumulator)
4. repeat
The **clock** produces pulses that synchronise the cycle; speed in GHz.`,
          examples: `**Example 1.** Which register holds the address of the next instruction? *Answer:* the **Program Counter**.

**Example 2.** Which bus is one-way from the CPU to memory? *Answer:* the **address bus**.

**Example 3.** How many locations can 16 address lines address? *Answer:* 2 to the power 16 = **65,536**.`,
        },
        questions: [
          ["E", "The idea that instructions and data are stored together in memory is the", "stored-program concept", "binary concept", "network concept", "GIGO concept", "Von Neumann described it."],
          ["E", "A set of parallel wires carrying signals between components is a", "bus", "port", "register", "cache", "Buses connect parts."],
          ["E", "The bus that carries the actual data being transferred is the", "data bus", "address bus", "control bus", "power bus", "It moves data both ways."],
          ["M", "The bus that carries memory locations from the CPU is the", "address bus", "data bus", "control bus", "USB bus", "It is one-way. Answer: address bus."],
          ["M", "The register that holds the address of the next instruction is the", "program counter", "accumulator", "MDR", "CIR", "PC points ahead."],
          ["M", "The register that holds the results of ALU calculations is the", "accumulator", "program counter", "MAR", "address bus", "ACC accumulates results."],
          ["M", "Signals such as read, write and interrupt travel on the", "control bus", "data bus", "address bus", "expansion slot", "They control operations."],
          ["H", "The number of memory locations that 16 address lines can address is", "65,536", "16", "256", "1,024", "2 to the power 16."],
          ["H", "During the fetch stage, after an instruction is fetched, the program counter is", "increased to point to the next instruction", "cleared to zero", "sent to the printer", "copied to the hard disk", "PC is incremented."],
          ["H", "The register that holds the instruction currently being decoded is the", "current instruction register", "memory address register", "accumulator", "stack pointer", "CIR holds the instruction."],
        ],
      },
      {
        week: 2,
        title: "Number bases: octal and hexadecimal conversions",
        subtopics: ["Decimal to octal and hexadecimal", "Octal and hexadecimal to decimal", "Binary to octal and back", "Binary to hexadecimal and back"],
        objectives: ["Convert decimal numbers to octal and hexadecimal", "Convert octal and hexadecimal numbers to decimal", "Convert between binary and octal by grouping in threes", "Convert between binary and hexadecimal by grouping in fours"],
        lesson: {
          title: "Converting Between Number Bases",
          summary: "Convert numbers among bases 2, 8, 10 and 16.",
          minutes: 45,
          notes: `## Decimal to another base
divide repeatedly by the **new base** and read the remainders **upwards**.
**156 to octal:** 156 ÷ 8 = 19 r **4**; 19 ÷ 8 = 2 r **3**; 2 ÷ 8 = 0 r **2** → **234₈**
**254 to hexadecimal:** 254 ÷ 16 = 15 r **14 (E)**; 15 ÷ 16 = 0 r **15 (F)** → **FE₁₆**

## Another base to decimal
multiply each digit by its **place value** (powers of the base) and add.
- **234₈** = 2 × 64 + 3 × 8 + 4 × 1 = 128 + 24 + 4 = **156**
- **2A₁₆** = 2 × 16 + 10 × 1 = **42**
- **1F₁₆** = 16 + 15 = **31**

## Binary ↔ octal (groups of 3)
each octal digit = **3 bits** (000 = 0 … 111 = 7).
- **110101₂** → group from the right: **110 | 101** → 6 | 5 → **65₈**
- **1011₂** → **001 | 011** → **13₈** (add leading zeros)
- **57₈** → 5 = 101, 7 = 111 → **101111₂**

## Binary ↔ hexadecimal (groups of 4)
each hex digit = **4 bits** (0000 = 0 … 1111 = F).
- **11010110₂** → **1101 | 0110** → D | 6 → **D6₁₆**
- **3C₁₆** → 3 = 0011, C = 1100 → **00111100₂** = **111100₂**

## Quick table
| Dec | Bin | Oct | Hex |
|---|---|---|---|
| 8 | 1000 | 10 | 8 |
| 10 | 1010 | 12 | A |
| 15 | 1111 | 17 | F |
| 16 | 10000 | 20 | 10 |

## Why octal and hex?
they are **shorter ways of writing binary**; hex is used for memory addresses, colour codes (e.g. #FF0000 is red) and machine code listings.`,
          examples: `**Example 1.** Convert 100 to octal. *Answer:* 100 ÷ 8 = 12 r 4; 12 ÷ 8 = 1 r 4; 1 ÷ 8 = 0 r 1 → **144₈**.

**Example 2.** Convert 101101₂ to octal. *Answer:* 101 | 101 → **55₈**.

**Example 3.** Convert A3₁₆ to decimal. *Answer:* 10 × 16 + 3 = **163**.`,
        },
        questions: [
          ["E", "To convert a decimal number to octal, you divide repeatedly by", "8", "2", "10", "16", "Octal is base 8."],
          ["E", "Each octal digit can be represented by", "3 bits", "4 bits", "2 bits", "8 bits", "8 = 2 to the power 3."],
          ["E", "Each hexadecimal digit can be represented by", "4 bits", "3 bits", "8 bits", "16 bits", "16 = 2 to the power 4."],
          ["M", "The octal number 234 in decimal is", "156", "234", "92", "164", "128 + 24 + 4. Answer: 156."],
          ["M", "The hexadecimal number 2A in decimal is", "42", "210", "32", "26", "2 × 16 + 10. Answer: 42."],
          ["M", "The binary number 110101 in octal is", "65", "53", "56", "35", "110 = 6, 101 = 5."],
          ["M", "The decimal number 254 in hexadecimal is", "FE", "EF", "FF", "F4", "15 × 16 + 14. Answer: FE."],
          ["H", "The binary number 11010110 in hexadecimal is", "D6", "6D", "C6", "D5", "1101 = D, 0110 = 6."],
          ["H", "The octal number 57 in binary is", "101111", "111101", "101011", "100111", "5 = 101, 7 = 111."],
          ["H", "The decimal number 100 in octal is", "144", "124", "164", "114", "1 × 64 + 4 × 8 + 4."],
        ],
      },
      {
        week: 3,
        title: "Data representation",
        subtopics: ["Representing characters: ASCII and Unicode", "Binary Coded Decimal", "Representing images and sound", "Parity checks"],
        objectives: ["Explain character coding with ASCII and Unicode", "Represent decimal digits in BCD", "Explain how images and sound are stored digitally", "Use parity bits to detect errors"],
        lesson: {
          title: "How Data Is Stored as Bits",
          summary: "Represent characters, numbers, images and sound in binary.",
          minutes: 45,
          notes: `## Character codes
A **character set** assigns a unique binary code to each character.
| Code | Bits | Notes |
|---|---|---|
| **ASCII** (American Standard Code for Information Interchange) | **7 bits** (128 characters); extended ASCII uses 8 bits (256) | A = 65, B = 66, a = 97, space = 32, digit 0 = 48 |
| **EBCDIC** (Extended Binary Coded Decimal Interchange Code) | 8 bits | used on older IBM mainframes |
| **Unicode** | up to 32 bits (UTF-8, UTF-16) | represents characters of **almost all languages** and emojis, including Yoruba, Igbo and Hausa letters with marks |
Example: "HI" in ASCII = 72, 73 = **01001000 01001001**.

## Binary Coded Decimal (BCD)
each **decimal digit** is coded separately in **4 bits**:
- 59 in BCD = 5 → **0101**, 9 → **1001** → **0101 1001**
- compare with pure binary: 59 = 111011
BCD is used in calculators and digital clocks.

## Images
a **bitmap** image is a grid of **pixels**; each pixel's colour is stored as a binary number.
- **colour depth** — bits per pixel: 1 bit = 2 colours (black and white), 8 bits = 256 colours, 24 bits = about 16.7 million colours
- **file size (bits) = width × height × colour depth**
  e.g. 100 × 100 pixels at 8 bits = 80,000 bits = 10,000 bytes

## Sound
sound is **sampled** many times per second (**sampling rate**, e.g. 44,100 Hz) and each sample stored as a number (**bit depth**). Higher sampling rate and bit depth give better quality but larger files.

## Parity checks
a **parity bit** is an extra bit added to detect errors in transmission.
- **even parity**: total number of 1s (including the parity bit) is **even**
- **odd parity**: total number of 1s is **odd**
Example: data 1011001 has four 1s → even parity bit **0** → 10110010; odd parity bit **1**.`,
          examples: `**Example 1.** Write 47 in BCD. *Answer:* 4 = 0100, 7 = 0111 → **0100 0111**.

**Example 2.** How many colours can 8-bit colour depth show? *Answer:* **256**.

**Example 3.** Data 1100001 uses even parity. What is the parity bit? *Answer:* three 1s → parity bit **1** (to make four).`,
        },
        questions: [
          ["E", "The character code that uses 7 bits for 128 characters is", "ASCII", "Unicode only", "BCD", "EBCDIC", "American Standard Code."],
          ["E", "The code that can represent characters of almost all world languages is", "Unicode", "ASCII", "BCD", "Morse code", "It supports many scripts."],
          ["E", "A tiny dot of colour in a bitmap image is a", "pixel", "bit", "byte", "register", "Picture element."],
          ["M", "In ASCII, the capital letter B has the decimal code", "66", "65", "98", "2", "A = 65, so B = 66."],
          ["M", "In BCD, each decimal digit is represented by", "4 bits", "8 bits", "2 bits", "3 bits", "Binary Coded Decimal."],
          ["M", "The decimal number 59 in BCD is", "0101 1001", "111011", "0101 1000", "1001 0101", "5 = 0101, 9 = 1001."],
          ["M", "The number of bits used to store the colour of each pixel is the", "colour depth", "resolution", "sampling rate", "parity", "More bits mean more colours."],
          ["H", "With 8-bit colour depth, the number of possible colours is", "256", "8", "16", "16.7 million", "2 to the power 8."],
          ["H", "A 100 × 100 pixel image with 8-bit colour needs", "10,000 bytes", "80,000 bytes", "1,000 bytes", "800 bytes", "100 × 100 × 8 ÷ 8."],
          ["H", "For the data 1100001 using even parity, the parity bit is", "1", "0", "2", "3", "Three 1s need one more."],
        ],
      },
      {
        week: 4,
        title: "Logic gates and Boolean logic",
        subtopics: ["Boolean values and operations", "AND, OR and NOT gates", "NAND, NOR and XOR gates", "Truth tables for simple circuits"],
        objectives: ["Explain Boolean values and operations", "Describe the AND, OR and NOT gates", "Describe the NAND, NOR and XOR gates", "Construct truth tables for simple logic circuits"],
        lesson: {
          title: "The Building Blocks of Digital Circuits",
          summary: "Describe logic gates and build truth tables.",
          minutes: 45,
          notes: `## Boolean logic
**Boolean logic** (from **George Boole**) works with only two values: **1 (True/ON)** and **0 (False/OFF)**. Electronic circuits that perform Boolean operations are **logic gates**.

## Basic gates
| Gate | Rule | Expression |
|---|---|---|
| **AND** | output is 1 **only when all inputs are 1** | Q = A · B (A AND B) |
| **OR** | output is 1 when **at least one input is 1** | Q = A + B (A OR B) |
| **NOT (inverter)** | output is the **opposite** of the single input | Q = NOT A |

### Truth tables
| A | B | AND | OR | NAND | NOR | XOR |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |
NOT: input 0 → output 1; input 1 → output 0.

## Other gates
- **NAND** (NOT AND) — output 0 **only when all inputs are 1**
- **NOR** (NOT OR) — output 1 **only when all inputs are 0**
- **XOR** (exclusive OR) — output 1 when the inputs are **different**
- **XNOR** — output 1 when the inputs are the **same**
NAND and NOR are called **universal gates** because any other gate can be built from them.

## Number of rows
a truth table with **n inputs** has **2 to the power n rows**: 2 inputs → 4 rows; 3 inputs → 8 rows.

## Simple circuit
Q = (A AND B) OR C
| A | B | C | A AND B | Q |
|---|---|---|---|---|
| 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |

## Real-life examples
**AND**: a car starts only if the key is turned AND the gear is in park. **OR**: a doorbell rings if the front OR back button is pressed. **NOT**: a light that comes on when it is NOT daylight.`,
          examples: `**Example 1.** What is the output of an AND gate with inputs 1 and 0? *Answer:* **0**.

**Example 2.** What is the output of an XOR gate with inputs 1 and 1? *Answer:* **0**.

**Example 3.** How many rows does a 3-input truth table have? *Answer:* **8**.`,
        },
        questions: [
          ["E", "A gate whose output is 1 only when all inputs are 1 is the", "AND gate", "OR gate", "NOT gate", "NOR gate", "All must be 1. Answer: AND gate."],
          ["E", "A gate that gives the opposite of its input is the", "NOT gate", "AND gate", "OR gate", "XOR gate", "It inverts. Answer: NOT gate."],
          ["E", "Boolean logic uses the values", "0 and 1", "0 to 9", "A to F", "1 and 2", "True and false."],
          ["M", "An OR gate with inputs 0 and 1 gives", "1", "0", "2", "10", "At least one input is 1."],
          ["M", "An AND gate with inputs 1 and 0 gives", "0", "1", "10", "2", "Not all inputs are 1."],
          ["M", "A NOR gate gives 1 only when", "all inputs are 0", "all inputs are 1", "inputs differ", "one input is 1", "NOT OR. Answer: all inputs are 0."],
          ["M", "An XOR gate gives 1 when", "the inputs are different", "both inputs are 1", "both inputs are 0", "any input is 0", "Exclusive OR. Answer: the inputs are different."],
          ["H", "A NAND gate with inputs 1 and 1 gives", "0", "1", "11", "2", "NOT of AND. Answer: 0."],
          ["H", "The number of rows in a truth table with 3 inputs is", "8", "6", "3", "9", "2 to the power 3."],
          ["H", "Gates from which any other gate can be built are called", "universal gates", "basic gates", "inverters only", "buffers", "NAND and NOR. Answer: universal gates."],
        ],
      },
      {
        week: 5,
        title: "Computer hardware in detail",
        subtopics: ["Processors and their performance", "Primary memory types", "Secondary storage characteristics", "Peripheral interfaces"],
        objectives: ["Explain factors affecting processor performance", "Distinguish types of RAM and ROM", "Compare storage devices by access method, capacity and speed", "Identify peripheral interfaces"],
        lesson: {
          title: "Inside the Hardware",
          summary: "Analyse processors, memory types, storage and interfaces.",
          minutes: 45,
          notes: `## Processor performance
factors that make a CPU faster:
- **clock speed** — cycles per second (GHz)
- **number of cores** — each core can process instructions at the same time
- **cache size** — more fast memory near the CPU
- **word size** — number of bits processed at once (e.g. 32-bit, 64-bit)
- **bus width** — wider buses move more data at once

## Types of RAM
| Type | Features |
|---|---|
| **DRAM** (dynamic RAM) | must be **refreshed** constantly; cheaper; used as main memory |
| **SRAM** (static RAM) | no refreshing; **faster** and more expensive; used for **cache** |

## Types of ROM
| Type | Features |
|---|---|
| **PROM** | programmable **once** by the user |
| **EPROM** | erasable with **ultraviolet light** and reprogrammable |
| **EEPROM** | erasable **electrically**; flash memory is a form of EEPROM; used for BIOS/firmware updates |
**Firmware** is software permanently stored in ROM (e.g. BIOS/UEFI).

## Secondary storage characteristics
| Device | Access method | Notes |
|---|---|---|
| magnetic tape | **sequential (serial)** — must read in order | cheap, high capacity, backups |
| hard disk | **direct (random)** | large capacity, moderate speed |
| SSD | direct | very fast, no moving parts |
| optical disc | direct | portable, distribution |
**Access time** = time to locate data; **transfer rate** = speed of reading/writing.

## Virtual memory
when RAM is full, the OS uses part of the **hard disk** as extra memory; it is **slower** than RAM.

## Peripheral interfaces
**USB** (Universal Serial Bus; plug and play), **HDMI** (video and audio), **Thunderbolt**, **SATA** (connects hard drives), **PCIe** (expansion cards, fast SSDs), **Bluetooth** and **Wi-Fi** (wireless). **Serial** sends bits one after another; **parallel** sends several bits at once.`,
          examples: `**Example 1.** Which type of RAM is used for cache? *Answer:* **SRAM**.

**Example 2.** Which ROM can be erased with ultraviolet light? *Answer:* **EPROM**.

**Example 3.** Which storage uses sequential access? *Answer:* **magnetic tape**.`,
        },
        questions: [
          ["E", "The number of independent processing units in a CPU is its number of", "cores", "ports", "buses", "pixels", "Multi-core CPUs work in parallel."],
          ["E", "Software permanently stored in ROM is called", "firmware", "freeware", "shareware", "malware", "E.g. BIOS. Answer: firmware."],
          ["E", "USB stands for", "Universal Serial Bus", "Unified System Board", "User Storage Box", "Universal Speed Booster", "It connects peripherals."],
          ["M", "RAM that must be refreshed constantly is", "DRAM", "SRAM", "EPROM", "PROM", "Dynamic RAM. Answer: DRAM."],
          ["M", "Faster RAM used for cache memory is", "SRAM", "DRAM", "EEPROM", "virtual memory", "Static RAM. Answer: SRAM."],
          ["M", "ROM that can be erased with ultraviolet light is", "EPROM", "PROM", "EEPROM", "DRAM", "Erasable PROM. Answer: EPROM."],
          ["M", "The storage medium that uses sequential access is", "magnetic tape", "hard disk", "SSD", "flash drive", "Data is read in order."],
          ["H", "Using part of the hard disk as extra memory when RAM is full is", "virtual memory", "cache memory", "ROM", "a register", "It is slower than RAM."],
          ["H", "The interface commonly used to connect internal hard drives is", "SATA", "HDMI", "VGA", "RJ11", "Serial ATA. Answer: SATA."],
          ["H", "ROM that can be erased electrically and is used for BIOS updates is", "EEPROM", "PROM", "EPROM", "SRAM", "Electrically erasable."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Operating system concepts",
        subtopics: ["Types of operating systems", "Process and memory management", "Multitasking and multiprogramming", "Utility programs and system maintenance"],
        objectives: ["Classify operating systems by type", "Explain process and memory management", "Distinguish multitasking, multiprogramming and multiprocessing", "Describe utility programs used for system maintenance"],
        lesson: {
          title: "How the Operating System Manages Resources",
          summary: "Classify operating systems and explain how they manage resources.",
          minutes: 45,
          notes: `## Types of operating systems
| Type | Description | Example use |
|---|---|---|
| **single-user, single-task** | one user, one program at a time | early MS-DOS |
| **single-user, multitasking** | one user runs many programs | Windows, macOS on a PC |
| **multi-user** | many users share one computer | servers, mainframes (UNIX, Linux) |
| **real-time OS (RTOS)** | responds **immediately** to inputs | aircraft control, medical devices, industrial robots |
| **batch processing OS** | jobs collected and processed in groups without user interaction | payroll, bills |
| **distributed OS** | manages a group of networked computers as one | clusters |
| **embedded OS** | built into devices | smart TVs, ATMs, cars |
| **mobile OS** | smartphones and tablets | Android, iOS |

## Process management
a **process** is a program in execution. The OS **schedules** processes on the CPU (e.g. first-come-first-served, round robin, priority), handles **interrupts** (signals needing immediate attention, e.g. a key press) and prevents conflicts.

## Memory management
allocates and frees memory for processes; protects each process's memory; uses **virtual memory**, **paging** (dividing memory into fixed blocks) and **swapping**.

## Multi- terms
- **multitasking** — one user running several tasks apparently at the same time
- **multiprogramming** — several programs kept in memory so the CPU is always busy
- **multiprocessing** — using **two or more CPUs/cores** at the same time
- **time-sharing** — CPU time divided into slices for many users

## Utility programs
| Utility | Function |
|---|---|
| **disk defragmenter** | rearranges scattered file parts on a hard disk to speed access |
| **disk cleanup** | removes temporary and unnecessary files |
| **backup** utility | copies files for recovery |
| **file compression** | reduces file size (ZIP, RAR) |
| **antivirus** | detects and removes malware |
| **disk formatter** | prepares a disk for use (erases data) |
| **task manager** | shows and ends running processes |`,
          examples: `**Example 1.** Which OS type is used in aircraft control? *Answer:* a **real-time OS**.

**Example 2.** What does a disk defragmenter do? *Answer:* It **rearranges scattered file parts** to speed up access.

**Example 3.** Using two or more processors at the same time is **multiprocessing**.`,
        },
        questions: [
          ["E", "A program in execution is called a", "process", "file", "folder", "driver", "The OS manages processes."],
          ["E", "An operating system that responds immediately to inputs is a", "real-time OS", "batch OS", "single-task OS", "games OS", "Used where delays are dangerous."],
          ["E", "Android and iOS are", "mobile operating systems", "batch operating systems", "utility programs", "programming languages", "They run phones."],
          ["M", "An OS that allows many users to share one computer at the same time is", "multi-user", "single-user", "embedded only", "real-time only", "Servers are multi-user."],
          ["M", "A signal that needs the CPU's immediate attention is an", "interrupt", "algorithm", "extension", "attachment", "E.g. a key press."],
          ["M", "Using two or more processors at the same time is", "multiprocessing", "multitasking", "batch processing", "time-sharing only", "Multiple CPUs work together."],
          ["M", "The utility that removes temporary and unnecessary files is", "disk cleanup", "defragmenter", "compiler", "debugger", "It frees space."],
          ["H", "Rearranging scattered parts of files on a hard disk to speed access is", "defragmentation", "formatting", "compression", "encryption", "It joins fragments."],
          ["H", "Keeping several programs in memory so that the CPU is always busy is", "multiprogramming", "single tasking", "booting", "paging out", "CPU switches between programs."],
          ["H", "Dividing memory into fixed-size blocks for management is", "paging", "booting", "parsing", "pairing", "Pages are fixed blocks."],
        ],
      },
      {
        week: 2,
        title: "Advanced word processing",
        subtopics: ["Tables and columns", "Headers, footers and page numbering", "Mail merge", "Styles and table of contents"],
        objectives: ["Insert and format tables and columns", "Add headers, footers and page numbers", "Perform a mail merge", "Use styles to generate a table of contents"],
        lesson: {
          title: "Producing Professional Documents",
          summary: "Use advanced word-processing features to produce professional documents.",
          minutes: 45,
          notes: `## Tables
**Insert → Table**, choose rows and columns. Format with borders and shading; **merge cells** (join cells) and **split cells**; adjust column widths; use **table styles**; sort table data; simple formulas (=SUM(ABOVE)).

## Columns
**Layout → Columns** to arrange text in newspaper-style columns (e.g. newsletters); use a **column break** to start a new column.

## Headers, footers and page numbers
- a **header** appears at the **top** of every page; a **footer** at the **bottom**
- **Insert → Header/Footer**; **Insert → Page Number**
- "different first page" option for title pages
- **section breaks** allow different layouts or numbering in parts of a document

## Footnotes and endnotes
references at the bottom of the page (**footnote**) or end of the document (**endnote**).

## Mail merge
**Mail merge** combines a **main document** (letter with placeholders) with a **data source** (list of names and addresses) to produce **personalised copies** automatically.
Steps:
1. create the **main document** (e.g. a letter to parents)
2. create or select the **data source** (Excel list or table with fields like Name, Class)
3. insert **merge fields** (e.g. «Name», «Class») in the letter
4. **preview** results
5. **finish and merge** — print or create individual letters/emails
Uses: invitation letters, result slips, certificates, envelopes and labels.

## Styles and table of contents
- **styles** (Heading 1, Heading 2, Normal) apply consistent formatting
- **References → Table of Contents** builds a table of contents automatically from headings; update it when pages change

## Other features
**track changes** and comments for reviewing; **find and replace**; **word count**; **watermarks**; **templates**; saving as **PDF**.`,
          examples: `**Example 1.** What feature produces 200 personalised invitation letters from one letter and a list? *Answer:* **mail merge**.

**Example 2.** Where does a footer appear? *Answer:* at the **bottom** of every page.

**Example 3.** What must headings use for an automatic table of contents? *Answer:* **heading styles**.`,
        },
        questions: [
          ["E", "Text that appears at the top of every page is the", "header", "footer", "footnote", "margin", "Headers are at the top."],
          ["E", "Text that appears at the bottom of every page is the", "footer", "header", "title", "caption", "Footers are at the bottom."],
          ["E", "Joining two or more table cells into one is", "merging cells", "splitting cells", "sorting", "wrapping", "Merge combines cells."],
          ["M", "Combining a letter with a list of names to make personalised copies is", "mail merge", "track changes", "word wrap", "section break", "It personalises documents."],
          ["M", "In mail merge, the list of names and addresses is the", "data source", "main document", "template", "macro", "Fields come from it."],
          ["M", "Arranging text in newspaper-style columns is done with the", "Columns feature", "Table of Contents", "Mail merge", "Footnote", "Layout → Columns."],
          ["M", "A reference note printed at the bottom of the page is a", "footnote", "endnote", "header", "watermark", "Foot of the page."],
          ["H", "To generate an automatic table of contents, headings must be formatted with", "heading styles", "bold only", "underline only", "capital letters only", "Styles mark headings."],
          ["H", "The feature that records edits so others can accept or reject them is", "track changes", "mail merge", "word count", "page break", "Useful for reviewing."],
          ["H", "A break that allows different page numbering in parts of a document is a", "section break", "line break", "column break", "page border", "Sections can differ."],
        ],
      },
      {
        week: 3,
        title: "Data processing methods",
        subtopics: ["Batch processing", "Online and real-time processing", "Time-sharing and distributed processing", "Choosing a processing method"],
        objectives: ["Explain batch processing", "Explain online and real-time processing", "Describe time-sharing and distributed processing", "Choose suitable processing methods for given applications"],
        lesson: {
          title: "Ways of Processing Data",
          summary: "Compare data processing methods and their applications.",
          minutes: 45,
          notes: `## Batch processing
data is **collected over a period** and processed **all together** as a **batch**, without user interaction during processing.
- examples: **payroll** (salaries at month end), **electricity bills**, **examination results**, cheque clearing
- advantages: efficient for large volumes; can run at night when the computer is less busy
- disadvantages: **delay** — results are not immediate; errors found late

## Online processing
data is entered and processed **directly through terminals connected to the computer**, and files are updated **immediately**.
- examples: online booking, ATM withdrawals, e-commerce orders

## Real-time processing
input is processed **instantly**, and the output **affects the next action** almost immediately.
- examples: **air traffic control**, **airline seat reservations**, **traffic lights**, **patient monitoring**, missile guidance, **self-driving cars**
- requires fast, reliable systems

## Interactive processing
the user and computer exchange information in a dialogue (e.g. a quiz program, CBT).

## Time-sharing
many users connected to one computer get **short slices of CPU time** in turn, so each seems to have the computer to themselves.

## Distributed processing
processing is **shared among several computers** at different locations linked by a network (e.g. bank branches across Nigeria each process local transactions and share data).

## Multiprocessing and parallel processing
two or more processors work on tasks **at the same time** — used in supercomputers.

## Choosing a method
| Application | Method |
|---|---|
| monthly payroll | batch |
| ATM withdrawal | online/real-time |
| flight booking | real-time |
| WAEC result computation | batch |
| hospital intensive care monitor | real-time |`,
          examples: `**Example 1.** Which method suits monthly salary computation? *Answer:* **batch processing**.

**Example 2.** Which method is used in air traffic control? *Answer:* **real-time processing**.

**Example 3.** Bank branches sharing processing across a network use **distributed processing**.`,
        },
        questions: [
          ["E", "Collecting data over a period and processing it all together is", "batch processing", "real-time processing", "online processing", "interactive processing", "Jobs are grouped."],
          ["E", "Monthly payroll is usually done by", "batch processing", "real-time processing", "manual singing", "interactive games", "Salaries are processed together."],
          ["E", "Processing input instantly so that output affects the next action is", "real-time processing", "batch processing", "delayed processing", "offline processing", "Response is immediate."],
          ["M", "Air traffic control systems use", "real-time processing", "batch processing", "manual processing", "offline processing", "Delays are dangerous."],
          ["M", "Many users sharing one computer through short slices of CPU time is", "time-sharing", "batch processing", "distributed processing", "parallel printing", "Users take turns quickly."],
          ["M", "Processing shared among computers at different locations is", "distributed processing", "batch processing", "single-user processing", "manual processing", "Work is distributed."],
          ["M", "A disadvantage of batch processing is that", "results are delayed", "it handles large volumes", "it runs at night", "it is efficient", "Output comes later."],
          ["H", "An ATM withdrawal that updates the account immediately is an example of", "online processing", "batch processing", "manual processing", "distributed printing", "Records update at once."],
          ["H", "Computing WAEC results for thousands of candidates is best done by", "batch processing", "real-time processing", "interactive processing only", "manual processing", "Large volume, no urgency per item."],
          ["H", "A hospital monitor that sounds an alarm the moment a patient's heart rate falls uses", "real-time processing", "batch processing", "time-sharing", "offline processing", "Instant response."],
        ],
      },
      {
        week: 4,
        title: "Data transmission and communication",
        subtopics: ["Elements of data communication", "Transmission modes", "Serial and parallel transmission", "Bandwidth and data rate"],
        objectives: ["Identify the elements of a data communication system", "Distinguish simplex, half-duplex and full-duplex modes", "Compare serial and parallel transmission", "Explain bandwidth and data transfer rate"],
        lesson: {
          title: "Moving Data from Place to Place",
          summary: "Explain how data is transmitted between devices.",
          minutes: 45,
          notes: `## Data communication
**Data communication** is the exchange of data between two devices through a transmission medium.

## Elements
1. **sender (source)** — device that sends the data
2. **receiver (destination)** — device that receives it
3. **message** — the data or information
4. **transmission medium** — the physical path (cable, radio waves)
5. **protocol** — set of **rules** governing communication (e.g. TCP/IP, HTTP)

## Transmission modes
| Mode | Direction | Example |
|---|---|---|
| **simplex** | **one direction only** | radio and TV broadcasting, keyboard to computer |
| **half-duplex** | **both directions, but one at a time** | walkie-talkie |
| **full-duplex** | **both directions at the same time** | telephone call, video call |

## Serial and parallel transmission
| Serial | Parallel |
|---|---|
| bits sent **one after another** on a single line | several bits sent **at the same time** on multiple lines |
| suitable for **long distances** | suitable for **short distances** |
| fewer wires, cheaper | more wires; signals can get out of step (skew) |
| USB, Ethernet, SATA | old printer cables, internal buses |

## Synchronous and asynchronous
- **asynchronous** — data sent one character at a time with **start and stop bits** (e.g. keyboard)
- **synchronous** — data sent in continuous blocks, timed by a shared clock (faster)

## Analogue and digital signals
- **analogue** — continuous waves (old telephone lines)
- **digital** — discrete 0s and 1s
a **modem** converts between them (modulation and demodulation).

## Bandwidth and data rate
- **bandwidth** — capacity of a channel; in networking, measured in **bits per second (bps)**: Kbps, Mbps, Gbps
- **latency** — delay before data starts arriving
- **time = file size ÷ data rate**: a 40 Mb (megabit) file at 8 Mbps takes **5 seconds**`,
          examples: `**Example 1.** What transmission mode does a walkie-talkie use? *Answer:* **half-duplex**.

**Example 2.** Which transmission is better over long distances, serial or parallel? *Answer:* **serial**.

**Example 3.** How long does a 100 Mb file take at 20 Mbps? *Answer:* 100 ÷ 20 = **5 seconds**.`,
        },
        questions: [
          ["E", "A set of rules governing data communication is a", "protocol", "topology", "register", "pixel", "E.g. TCP/IP. Answer: protocol."],
          ["E", "Transmission in one direction only is", "simplex", "half-duplex", "full-duplex", "multiplex", "Like TV broadcasting."],
          ["E", "A telephone conversation where both people can talk at once uses", "full-duplex", "simplex", "half-duplex", "no mode", "Both directions together."],
          ["M", "A walkie-talkie uses", "half-duplex", "simplex", "full-duplex", "parallel only", "One speaks at a time."],
          ["M", "Sending bits one after another on a single line is", "serial transmission", "parallel transmission", "simplex only", "broadcasting", "One bit at a time."],
          ["M", "Sending several bits at the same time on multiple lines is", "parallel transmission", "serial transmission", "asynchronous only", "half-duplex", "Many lines at once."],
          ["M", "Bandwidth in networking is commonly measured in", "bits per second", "bytes of RAM", "pixels per inch", "hertz of the CPU only", "Mbps, Gbps. Answer: bits per second."],
          ["H", "Asynchronous transmission sends each character with", "start and stop bits", "a shared clock only", "no extra bits", "parity only", "Bits frame each character."],
          ["H", "A 40 megabit file sent at 8 megabits per second takes", "5 seconds", "32 seconds", "320 seconds", "48 seconds", "40 ÷ 8 = 5. Answer: 5 seconds."],
          ["H", "Over long distances, serial transmission is preferred because", "it needs fewer wires and avoids skew", "it is always parallel", "it uses more wires", "it cannot carry data", "Parallel signals drift apart."],
        ],
      },
      {
        week: 5,
        title: "Computer files and file organisation",
        subtopics: ["Field, record and file", "Types of files", "File organisation methods", "File access methods"],
        objectives: ["Explain the data hierarchy", "Classify computer files by use", "Describe methods of file organisation", "Distinguish file access methods"],
        lesson: {
          title: "Organising Data in Files",
          summary: "Describe file types, organisation and access methods.",
          minutes: 45,
          notes: `## Data hierarchy
**bit → byte (character) → field → record → file → database**
- **field** — a single data item (e.g. Surname)
- **record** — related fields about one entity (one student)
- **file** — a collection of related records (all students)
- **key field** — field that identifies a record (e.g. Registration Number)

## Types of files by use
| File | Description | Example |
|---|---|---|
| **master file** | **permanent** main records, updated periodically | customer accounts, student records |
| **transaction file** | **temporary** records of recent activities used to update the master file | daily deposits and withdrawals |
| **reference file** | data used for lookup, rarely changed | tax rates, price lists |
| **backup file** | copy kept for recovery | weekly backup |
| **archive file** | old records kept for history | past students' records |

## File organisation methods
| Method | Description | Suitable for |
|---|---|---|
| **serial** | records stored **one after another in the order they arrive** | transaction files, magnetic tape |
| **sequential** | records stored in **order of a key field** (e.g. ascending ID) | payroll master files, batch processing |
| **indexed sequential** | records in key order **with an index** for fast lookup | systems needing both sequential and direct access |
| **random (direct)** | record position calculated from the key (hashing) | real-time systems, airline booking |

## File access methods
- **sequential access** — records read in order from the beginning (tape)
- **direct (random) access** — any record retrieved directly without reading others (disk)
- **indexed access** — use an index to locate records

## Criteria for choosing organisation
the storage medium; how often records are accessed (**hit rate**); file size and growth; response time needed.

## File operations
**create, open, read, write (update), append, delete, close**; also **sort** and **merge**.`,
          examples: `**Example 1.** Daily records of bank deposits form a **transaction file**.

**Example 2.** Which file organisation stores records in the order they arrive? *Answer:* **serial**.

**Example 3.** Which access method suits an airline booking system? *Answer:* **direct (random) access**.`,
        },
        questions: [
          ["E", "A collection of related records is a", "file", "field", "bit", "byte", "Files contain records."],
          ["E", "A file containing permanent main records is a", "master file", "transaction file", "temporary file", "scratch file", "It is updated periodically."],
          ["E", "The field that uniquely identifies a record is the", "key field", "data field only", "file name", "byte", "E.g. registration number."],
          ["M", "A file containing recent activities used to update the master file is a", "transaction file", "reference file", "archive file", "program file", "It records transactions."],
          ["M", "Records stored in the order in which they arrive use", "serial organisation", "sequential organisation", "random organisation", "indexed organisation", "No ordering by key."],
          ["M", "Records stored in order of a key field use", "sequential organisation", "serial organisation", "random organisation", "heap organisation", "Ordered by key."],
          ["M", "Reading records one after another from the beginning is", "sequential access", "random access", "indexed access", "parallel access", "Like playing a tape."],
          ["H", "Retrieving any record without reading the others first is", "direct (random) access", "serial access", "sequential access", "batch access", "Disks allow direct access."],
          ["H", "The correct order of the data hierarchy is", "bit, byte, field, record, file", "file, record, field, byte, bit", "byte, bit, record, field, file", "field, bit, file, byte, record", "From smallest to largest."],
          ["H", "A file of tax rates used for lookup and rarely changed is a", "reference file", "transaction file", "master file", "temporary file", "It is referred to."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Advanced spreadsheets",
        subtopics: ["Relative and absolute references", "Logical and lookup functions", "Sorting and filtering", "Data analysis tools"],
        objectives: ["Distinguish relative from absolute cell references", "Use logical and lookup functions", "Sort and filter data", "Use simple data analysis tools"],
        lesson: {
          title: "Analysing Data with Spreadsheets",
          summary: "Use advanced spreadsheet functions and data tools.",
          minutes: 45,
          notes: `## Cell references
- **relative reference** (e.g. B2) — **changes** when the formula is copied: =B2*C2 copied down becomes =B3*C3
- **absolute reference** — **does not change** when copied; it is made by placing a **dollar sign before the column letter and the row number**, or by pressing **F4** after typing the reference. It is used when every formula must refer to one fixed cell, such as a single tax rate cell.
- **mixed reference** — only the column or only the row is fixed

## Logical functions
- **IF** — =IF(E2>=50,"Pass","Fail")
- **nested IF** for grades — =IF(E2>=70,"A",IF(E2>=60,"B",IF(E2>=50,"C","F")))
- **AND / OR** inside IF — =IF(AND(B2>=50,C2>=50),"Promoted","Repeat")
- **COUNTIF** — counts cells meeting a condition: =COUNTIF(E2:E40,">=50") counts passes
- **SUMIF** — adds values meeting a condition

## Lookup and other functions
- **VLOOKUP** — finds a value in the first column of a table and returns a value from another column, e.g. find a student's score by admission number
- **RANK** — gives the position of a value in a list (e.g. class position)
- **ROUND** — =ROUND(E2,1) rounds to 1 decimal place
- **TODAY**, **NOW** — current date/time
- **CONCAT** — joins text

## Sorting and filtering
- **sort** by one or more columns (e.g. by total, descending)
- **filter** shows only rows that meet criteria (e.g. Class = SS1A)
- **conditional formatting** — highlights cells automatically (e.g. scores below 40 in red)

## Data analysis
**charts**, **pivot tables** (summarise large data by categories), **freeze panes** (keep headings visible), **data validation** (restrict entries, e.g. scores 0–100), protecting sheets with passwords.`,
          examples: `**Example 1.** Write a formula to count how many scores in E2:E40 are 50 or more. *Answer:* **=COUNTIF(E2:E40,">=50")**.

**Example 2.** What happens to =B2*C2 when copied to the next row? *Answer:* It becomes **=B3*C3** (relative reference).

**Example 3.** Which feature highlights scores below 40 automatically? *Answer:* **conditional formatting**.`,
        },
        questions: [
          ["E", "A cell reference that changes when a formula is copied is", "relative", "absolute", "fixed", "frozen", "It adjusts to its new position."],
          ["E", "Showing only rows that meet certain criteria is", "filtering", "sorting", "merging", "printing", "Filters hide other rows."],
          ["E", "Arranging rows in ascending or descending order is", "sorting", "filtering", "freezing", "wrapping", "Sort orders data."],
          ["M", "A cell reference that stays the same when a formula is copied is", "absolute", "relative", "dynamic", "temporary", "It is locked. Answer: absolute."],
          ["M", "The function that counts cells meeting a condition is", "COUNTIF", "COUNT", "SUM", "MAX", "It counts with a criterion."],
          ["M", "The function used to find a student's class position is", "RANK", "ROUND", "TODAY", "CONCAT", "RANK gives position."],
          ["M", "Highlighting cells automatically when they meet a condition is", "conditional formatting", "data validation", "freeze panes", "pivot table", "Formatting depends on value."],
          ["H", "The formula =IF(AND(B2>=50,C2>=50),\"Promoted\",\"Repeat\") returns Promoted when", "both B2 and C2 are 50 or more", "either B2 or C2 is 50 or more", "both are below 50", "B2 is empty", "AND needs both."],
          ["H", "The function that finds a value in the first column of a table and returns data from another column is", "VLOOKUP", "COUNTIF", "RANK", "ROUND", "Vertical lookup."],
          ["H", "Restricting entries in a cell to scores between 0 and 100 is done with", "data validation", "conditional formatting", "freeze panes", "word wrap", "It prevents wrong entries."],
        ],
      },
      {
        week: 2,
        title: "The internet and its services",
        subtopics: ["How the internet works", "IP addresses and the DNS", "Internet services and protocols", "Web pages and HTML basics"],
        objectives: ["Explain how data travels on the internet", "Explain IP addresses and the domain name system", "Identify internet services and their protocols", "Describe the structure of a simple HTML page"],
        lesson: {
          title: "How the Internet Works",
          summary: "Explain internet addressing, protocols, services and web pages.",
          minutes: 45,
          notes: `## How data travels
data is broken into **packets**; each packet carries the destination address and travels through **routers** by the best path; packets are **reassembled** at the destination (**packet switching**). The **TCP/IP** suite governs this: **TCP** ensures reliable delivery and order; **IP** handles addressing and routing.

## IP addresses
every device on a network has an **IP address**.
- **IPv4** — **32 bits**, written as four numbers 0–255, e.g. **192.168.1.10**
- **IPv6** — **128 bits**, written in hexadecimal, created because IPv4 addresses ran out
- **public** vs **private** IP addresses; **static** vs **dynamic** (assigned by **DHCP**)

## Domain Name System (DNS)
people use names like **www.example.com**; the **DNS** translates **domain names into IP addresses**, like a phone book.
Parts of a URL **https://www.school.edu.ng/results/index.html**: protocol (https), subdomain (www), domain (school.edu.ng), path (/results/index.html).

## Internet services and protocols
| Service | Protocol |
|---|---|
| web pages | **HTTP / HTTPS** |
| file transfer | **FTP** |
| sending email | **SMTP** |
| receiving email | **POP3**, **IMAP** |
| remote login (secure) | **SSH** |
| online chat, VoIP calls, video conferencing | various |
Other services: search engines, e-learning, e-commerce, cloud storage, newsgroups/forums, social media, streaming.

## Web pages and HTML
web pages are written in **HTML (HyperText Markup Language)** using **tags** in angle brackets:
- html, head, title, body
- h1 for a heading, p for a paragraph, a for a hyperlink, img for an image
**CSS** styles the page; **JavaScript** makes it interactive. A **web server** stores and delivers web pages; the **browser** displays them.`,
          examples: `**Example 1.** What does the DNS do? *Answer:* It **translates domain names into IP addresses**.

**Example 2.** How many bits are in an IPv4 address? *Answer:* **32 bits**.

**Example 3.** Which protocol is used to send email? *Answer:* **SMTP**.`,
        },
        questions: [
          ["E", "A unique number that identifies a device on a network is an", "IP address", "email address only", "URL", "MAC menu", "Internet Protocol address."],
          ["E", "The language used to create web pages is", "HTML", "Excel", "BASIC only", "SQL", "HyperText Markup Language."],
          ["E", "The protocol used to view web pages securely is", "HTTPS", "FTP", "SMTP", "POP3", "S means secure."],
          ["M", "The system that translates domain names into IP addresses is", "DNS", "DHCP", "FTP", "HTML", "Domain Name System."],
          ["M", "An IPv4 address contains", "32 bits", "128 bits", "8 bits", "64 bits", "Four 8-bit numbers."],
          ["M", "The protocol used for sending email is", "SMTP", "POP3", "FTP", "HTTP", "Simple Mail Transfer Protocol."],
          ["M", "The protocol used for transferring files between computers is", "FTP", "SMTP", "IMAP", "DNS", "File Transfer Protocol."],
          ["H", "Breaking data into small units that travel separately and are reassembled is", "packet switching", "circuit printing", "batch processing", "defragmentation", "Packets take different routes."],
          ["H", "IPv6 was introduced mainly because", "IPv4 addresses were running out", "IPv4 was too fast", "websites stopped working", "emails were too large", "IPv6 has many more addresses."],
          ["H", "The service that automatically assigns IP addresses to devices is", "DHCP", "DNS", "FTP", "SSH", "Dynamic Host Configuration Protocol."],
        ],
      },
      {
        week: 3,
        title: "Computer ethics, professionalism and legal issues",
        subtopics: ["Professional ethics in computing", "Intellectual property", "Data protection and privacy laws", "Health and environmental issues"],
        objectives: ["Explain professional ethics for computer users and professionals", "Explain forms of intellectual property protection", "Describe data protection principles", "Discuss health and environmental issues of computing"],
        lesson: {
          title: "Responsible Computing",
          summary: "Apply ethics, law and professionalism in computing.",
          minutes: 45,
          notes: `## Professional ethics
computer professionals should show:
- **integrity and honesty** — no fraud or misrepresentation
- **confidentiality** — protect client and employer data
- **competence** — accept only work they can do; keep learning
- **respect for intellectual property**
- **avoid harm** — do not create malware or misuse access
- **accountability** — take responsibility for their work
Codes of conduct are set by bodies such as the **Computer Professionals (Registration Council of Nigeria) — CPN** and the **Nigeria Computer Society**.

## Intellectual property (IP)
creations of the mind protected by law:
| Protection | What it protects |
|---|---|
| **copyright** | software code, books, music, films |
| **patent** | new inventions and technical processes |
| **trademark** | names, logos and slogans of businesses |
| **trade secret** | confidential business information |
**Licences**: proprietary, open-source (e.g. GPL), Creative Commons. **Software piracy** violates copyright.

## Data protection principles
personal data should be: collected **lawfully** and for a **specific purpose**; **adequate and relevant**; **accurate**; kept no longer than necessary; kept **secure**; processed with respect for people's **rights** (to access, correct or delete their data).
In Nigeria, the **Nigeria Data Protection Act 2023** established the **Nigeria Data Protection Commission (NDPC)**.

## Cybercrime law
the **Cybercrimes (Prohibition, Prevention, etc.) Act 2015** criminalises hacking, identity theft, cyberstalking, online fraud and child exploitation.

## Health issues
RSI, carpal tunnel syndrome, eye strain, back pain, headaches, **digital addiction**, sedentary lifestyle — prevent with ergonomic furniture, breaks and exercise.

## Environmental issues
**e-waste** (discarded electronics with toxic metals such as lead and mercury), high **energy use** by data centres. Solutions: **recycling**, refurbishing and donating old devices, energy-saving settings, buying efficient equipment (**green computing**).`,
          examples: `**Example 1.** Which form of IP protects a company logo? *Answer:* **trademark**.

**Example 2.** What is e-waste? *Answer:* **Discarded electronic devices**.

**Example 3.** Name one data protection principle. *Answer:* data should be kept **secure** (or accurate, used for a specific purpose).`,
        },
        questions: [
          ["E", "Discarded electronic devices are called", "e-waste", "e-commerce", "e-learning", "e-mail", "They may contain toxic metals."],
          ["E", "Protecting client data from unauthorised people is", "confidentiality", "piracy", "plagiarism", "phishing", "Professionals keep secrets."],
          ["E", "Copyright protects", "software, books and music", "only buildings", "only farmland", "only logos", "It covers creative works."],
          ["M", "A new invention is protected by a", "patent", "trademark", "copyright only", "licence plate", "Patents protect inventions."],
          ["M", "A company's name and logo are protected by a", "trademark", "patent", "trade secret", "copyleft", "Trademarks identify brands."],
          ["M", "Using energy-efficient equipment and recycling electronics is", "green computing", "grey hacking", "cloud piracy", "data mining", "It protects the environment."],
          ["M", "The Nigerian body that regulates computing professionals is the", "CPN", "NAFDAC", "NDLEA", "FRSC", "Computer Professionals Registration Council."],
          ["H", "The 2023 Nigerian law that set up the Data Protection Commission is the", "Nigeria Data Protection Act", "Cybercrimes Act", "Copyright Act", "Electoral Act", "It governs personal data."],
          ["H", "A data protection principle states that personal data should be kept", "no longer than necessary", "forever", "on public notice boards", "without security", "Retention must be limited."],
          ["H", "Pain and numbness in the wrist from prolonged keyboard use is", "carpal tunnel syndrome", "eye strain", "migraine only", "e-waste", "A type of RSI. Answer: carpal tunnel syndrome."],
        ],
      },
      {
        week: 4,
        title: "Introduction to BASIC programming",
        subtopics: ["Features of BASIC", "BASIC keywords and statements", "Arithmetic in BASIC", "Writing simple BASIC programs"],
        objectives: ["State the features of BASIC", "Use BASIC keywords such as REM, LET, INPUT, PRINT and END", "Write arithmetic expressions in BASIC", "Write simple BASIC programs"],
        lesson: {
          title: "Programming in BASIC",
          summary: "Write simple programs in BASIC.",
          minutes: 45,
          notes: `## BASIC
**BASIC** stands for **Beginner's All-purpose Symbolic Instruction Code**. It was developed in **1964** by **John Kemeny and Thomas Kurtz** at Dartmouth College. Versions include **QBASIC** and **GW-BASIC**. It is easy to learn and is still used to teach programming.

## Features
- English-like **keywords**
- programs may use **line numbers** (10, 20, 30 …), usually in steps of 10 so lines can be inserted
- usually **interpreted**

## Keywords and statements
| Keyword | Use | Example |
|---|---|---|
| **REM** | remark (comment) — ignored by the computer | 10 REM AREA OF A RECTANGLE |
| **LET** | assigns a value | 20 LET A = 5 |
| **INPUT** | accepts data from the keyboard | 30 INPUT L, B |
| **PRINT** | displays output | 40 PRINT "AREA ="; A |
| **READ / DATA** | reads values listed in DATA | 50 READ X: 60 DATA 4 |
| **GOTO** | jumps to a line | 70 GOTO 30 |
| **END** | ends the program | 80 END |

## Variables
numeric variable names such as A, X, SUM, B1. (String variable names end with a dollar sign in BASIC.)

## Arithmetic operators and order
| Operator | Meaning |
|---|---|
| ^ | exponentiation (power) |
| * and / | multiplication and division |
| \\ | integer division (QBASIC) |
| MOD | remainder |
| + and − | addition and subtraction |
Order: **brackets → ^ → * / → \\ → MOD → + −**.
Example: the expression 2 + 3 * 4 ^ 2 = 2 + 3 * 16 = **50**.
Writing algebra in BASIC: **(a + b) ÷ 2c** becomes **(A + B) / (2 * C)**.

## Program 1: area of a rectangle
10 REM AREA OF A RECTANGLE
20 INPUT "LENGTH, BREADTH"; L, B
30 LET A = L * B
40 PRINT "AREA ="; A
50 END
If L = 6 and B = 4, the output is **AREA = 24**.

## Program 2: average of three numbers
10 INPUT X, Y, Z
20 LET M = (X + Y + Z) / 3
30 PRINT "AVERAGE ="; M
40 END`,
          examples: `**Example 1.** What does REM do? *Answer:* It writes a **remark (comment)** ignored by the computer.

**Example 2.** Evaluate 2 + 3 * 4 ^ 2 in BASIC. *Answer:* 4 ^ 2 = 16; 3 * 16 = 48; 2 + 48 = **50**.

**Example 3.** Write (a + b) ÷ 2c in BASIC. *Answer:* **(A + B) / (2 * C)**.`,
        },
        questions: [
          ["E", "BASIC stands for", "Beginner's All-purpose Symbolic Instruction Code", "Basic Applied Science In Computing", "Binary And Symbolic Integer Code", "Business Application System Integrated Code", "It is a beginner's language."],
          ["E", "The BASIC keyword used to display output is", "PRINT", "INPUT", "REM", "LET", "PRINT shows results."],
          ["E", "The BASIC keyword used to end a program is", "END", "STOP only", "EXIT", "CLOSE", "END terminates."],
          ["M", "The BASIC keyword for comments is", "REM", "LET", "DATA", "GOTO", "Remarks are ignored."],
          ["M", "The BASIC keyword used to accept data from the keyboard is", "INPUT", "PRINT", "READ", "LET", "INPUT waits for typing."],
          ["M", "In BASIC, the symbol ^ represents", "exponentiation", "multiplication", "division", "remainder", "It raises to a power."],
          ["M", "BASIC was developed by", "John Kemeny and Thomas Kurtz", "Charles Babbage", "Tim Berners-Lee", "Bill Gates alone", "At Dartmouth in 1964."],
          ["H", "In BASIC, the value of 2 + 3 * 4 ^ 2 is", "50", "140", "200", "26", "Power first, then multiply, then add."],
          ["H", "The BASIC form of (a + b) ÷ 2c is", "(A + B) / (2 * C)", "A + B / 2 * C", "(A + B) / 2C", "A + B ÷ 2C", "Use * and brackets."],
          ["H", "In the area program with L = 6 and B = 4, the output is", "AREA = 24", "AREA = 10", "AREA = 64", "AREA = L * B", "6 × 4 = 24. Answer: AREA = 24."],
        ],
      },
      {
        week: 5,
        title: "Decisions and loops in BASIC",
        subtopics: ["Relational operators in BASIC", "IF…THEN…ELSE", "FOR…NEXT loops", "Accumulating totals and counts"],
        objectives: ["Use relational operators in BASIC", "Write IF…THEN…ELSE statements", "Write FOR…NEXT loops", "Use loops to accumulate totals and counts"],
        lesson: {
          title: "Making Choices and Repeating in BASIC",
          summary: "Write BASIC programs with decisions and loops.",
          minutes: 45,
          notes: `## Relational operators in BASIC
| Operator | Meaning |
|---|---|
| = | equal to |
| <> | not equal to |
| < | less than |
| > | greater than |
| <= | less than or equal to |
| >= | greater than or equal to |
Logical operators: **AND**, **OR**, **NOT**.

## IF…THEN…ELSE
10 INPUT S
20 IF S >= 50 THEN PRINT "PASS" ELSE PRINT "FAIL"
30 END
For S = 72 the output is **PASS**; for S = 41 the output is **FAIL**.

## FOR…NEXT loop
repeats statements a fixed number of times:
10 FOR I = 1 TO 5
20 PRINT I
30 NEXT I
40 END
Output: **1 2 3 4 5**.
- **STEP** changes the increment: FOR I = 2 TO 10 STEP 2 gives 2, 4, 6, 8, 10
- counting down: FOR I = 10 TO 1 STEP -1

## Accumulating a total
10 LET SUM = 0
20 FOR I = 1 TO 10
30 LET SUM = SUM + I
40 NEXT I
50 PRINT "SUM ="; SUM
60 END
Output: **SUM = 55**.

## Counting
10 LET C = 0
20 FOR K = 1 TO 5
30 INPUT S
40 IF S >= 50 THEN LET C = C + 1
50 NEXT K
60 PRINT "PASSES ="; C
70 END

## Multiplication table
10 FOR N = 1 TO 12
20 PRINT 7; "X"; N; "="; 7 * N
30 NEXT N
40 END

## Tracing (dry run)
tracing means working through a program by hand, recording variable values at each step, to predict output and find errors.`,
          examples: `**Example 1.** What is printed by FOR I = 1 TO 3: PRINT I: NEXT I? *Answer:* **1, 2, 3**.

**Example 2.** What values does FOR I = 5 TO 15 STEP 5 produce? *Answer:* **5, 10, 15**.

**Example 3.** Which BASIC operator means "not equal to"? *Answer:* **<>**.`,
        },
        questions: [
          ["E", "In BASIC, the operator meaning 'not equal to' is", "<>", "!=", "=/=", "><", "BASIC uses angle brackets."],
          ["E", "The BASIC loop that repeats a fixed number of times is", "FOR…NEXT", "IF…THEN", "INPUT…PRINT", "REM…END", "It counts iterations."],
          ["E", "In BASIC, the keyword used to make a decision is", "IF", "FOR", "LET", "REM", "IF tests a condition."],
          ["M", "FOR I = 1 TO 5 … NEXT I repeats", "5 times", "4 times", "6 times", "1 time", "I takes 1 to 5."],
          ["M", "FOR I = 2 TO 10 STEP 2 produces", "2, 4, 6, 8, 10", "2, 3, 4 … 10", "1, 3, 5, 7, 9", "10, 8, 6, 4, 2", "Step of 2. Answer: 2, 4, 6, 8, 10."],
          ["M", "With S = 41, the statement IF S >= 50 THEN PRINT \"PASS\" ELSE PRINT \"FAIL\" displays", "FAIL", "PASS", "41", "nothing", "41 is below 50."],
          ["M", "A loop that counts down from 10 to 1 uses", "STEP -1", "STEP 1", "STEP 10", "no STEP", "Negative step decreases."],
          ["H", "A program that adds the numbers 1 to 10 in a loop prints", "55", "10", "45", "100", "Sum of 1 to 10."],
          ["H", "Working through a program by hand to record variable values is", "tracing (dry run)", "compiling", "debugging by computer only", "booting", "It predicts output."],
          ["H", "In the counting program, the statement LET C = C + 1 is used to", "count the number of passes", "add all scores", "end the program", "print the score", "C is a counter."],
        ],
      },
    ],
  },
];
