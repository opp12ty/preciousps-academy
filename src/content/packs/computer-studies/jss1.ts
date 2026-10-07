import type { TermPlan } from "../types";

/** JSS1 Computer Studies — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and characteristics of a computer",
        subtopics: ["Meaning of a computer", "Data and information", "Characteristics of computers", "Limitations of computers"],
        objectives: ["Define a computer", "Distinguish data from information", "State the characteristics of computers", "State the limitations of computers"],
        lesson: {
          title: "What Is a Computer?",
          summary: "Define a computer and describe its characteristics and limitations.",
          minutes: 40,
          notes: `## Meaning
A **computer** is an **electronic device** that **accepts data (input)**, **processes** it according to a set of **instructions (program)**, **stores** it, and **produces information (output)**.

## Data and information
- **data** — raw, unprocessed facts and figures, e.g. a list of scores: 45, 67, 80
- **information** — **processed** data that is meaningful and useful, e.g. "the class average is 64"
**Input → Process → Output** (with **storage**) is the basic cycle of a computer.

## Characteristics of computers
| Characteristic | Meaning |
|---|---|
| **speed** | performs millions or billions of operations per second |
| **accuracy** | gives correct results if data and instructions are correct |
| **diligence** | does not get tired or bored; works for long hours |
| **storage (memory)** | stores large amounts of data for future use |
| **automation** | works automatically once instructions are given |
| **versatility** | can do many different tasks (typing, calculating, playing music) |
| **reliability** | performs consistently over time |

## GIGO
**Garbage In, Garbage Out** — if wrong data or instructions are entered, the output will also be wrong. The computer is only as accurate as the data and instructions given to it.

## Limitations of computers
- cannot **think** or make decisions on their own (they follow instructions)
- no **feelings** or common sense
- depend on **electricity** (or batteries)
- can be attacked by **viruses**
- need **human beings** to operate and program them
- can break down and lose data`,
          examples: `**Example 1.** Is "25, 30, 18" data or information? *Answer:* **data** — raw figures.

**Example 2.** What does GIGO mean? *Answer:* **Garbage In, Garbage Out**.

**Example 3.** Name one limitation of computers. *Answer:* They **cannot think** on their own.`,
        },
        questions: [
          ["E", "An electronic device that accepts data, processes it and produces information is a", "computer", "radio", "calculator only", "television", "It follows instructions."],
          ["E", "Raw, unprocessed facts are called", "data", "information", "output", "software", "Data is processed into information."],
          ["E", "Processed data that is meaningful is", "information", "data", "input", "hardware", "Information is useful."],
          ["M", "The ability of a computer to work for long hours without tiring is", "diligence", "speed", "versatility", "storage", "Computers do not get bored."],
          ["M", "The ability of a computer to perform many different tasks is", "versatility", "accuracy", "automation", "diligence", "It is multi-purpose."],
          ["M", "GIGO stands for", "Garbage In, Garbage Out", "Good Input, Good Output", "General Input, General Output", "Get In, Get Out", "Wrong input gives wrong output."],
          ["M", "The basic cycle of a computer is", "input, process, output", "output, input, process", "process, store, delete", "type, print, save only", "Data flows in order."],
          ["H", "A major limitation of a computer is that it", "cannot think on its own", "is very fast", "is accurate", "can store data", "It follows instructions only."],
          ["H", "The statement 'the class average is 64' is an example of", "information", "raw data", "an input device", "a program", "It is processed and meaningful."],
          ["H", "A computer gives wrong results mainly when", "the data or instructions are wrong", "it is too fast", "it has too much memory", "the screen is large", "This is GIGO. Answer: the data or instructions are wrong."],
        ],
      },
      {
        week: 2,
        title: "History of computing",
        subtopics: ["Early counting devices", "Mechanical calculating machines", "Pioneers of computing", "Early electronic computers"],
        objectives: ["Describe early counting devices", "Describe mechanical calculating machines", "Identify pioneers of computing and their contributions", "Name early electronic computers"],
        lesson: {
          title: "From the Abacus to Electronic Computers",
          summary: "Trace the development of computing devices.",
          minutes: 40,
          notes: `## Early counting devices
- **fingers, stones, sticks and knots** on ropes
- **the abacus** — a frame with **beads** on rods, used for counting and calculating; one of the oldest calculating devices, used in ancient **China** and elsewhere

## Mechanical aids and machines
| Device | Inventor | Year (approx.) |
|---|---|---|
| **Napier's bones** — numbered rods for multiplication | **John Napier** (Scotland) | **1617** |
| **slide rule** — based on logarithms | **William Oughtred** (England) | **1620s** |
| **Pascaline** — mechanical adding machine using gears | **Blaise Pascal** (France) | **1642** |
| **stepped reckoner** — could multiply and divide | **Gottfried Leibniz** (Germany) | **1670s** |
| **Jacquard loom** — used **punched cards** to control weaving patterns | **Joseph Marie Jacquard** (France) | **1801** |
| **difference engine** and **analytical engine** | **Charles Babbage** (England) | **1822** and **1830s** |
| **punched-card tabulating machine** for the US census | **Herman Hollerith** | **1890** |

## Pioneers
- **Charles Babbage** — called the **"father of the computer"**; his analytical engine had the ideas of a modern computer (input, memory, processing, output)
- **Ada Lovelace** — wrote instructions for the analytical engine; regarded as the **first computer programmer**
- **Herman Hollerith** — his company later became part of **IBM**
- **Alan Turing** — British mathematician whose ideas laid foundations for computer science

## Early electronic computers
- **ENIAC** (1946) — one of the first general-purpose electronic computers, built by **J. Presper Eckert and John Mauchly**; used thousands of **vacuum tubes** and filled a large room
- **UNIVAC I** (1951) — an early commercial computer
Modern computers are much **smaller, faster, cheaper** and more powerful.`,
          examples: `**Example 1.** Who is called the father of the computer? *Answer:* **Charles Babbage**.

**Example 2.** Who invented the Pascaline? *Answer:* **Blaise Pascal** (1642).

**Example 3.** Who is regarded as the first computer programmer? *Answer:* **Ada Lovelace**.`,
        },
        questions: [
          ["E", "A frame with beads on rods used for counting is the", "abacus", "slide rule", "Pascaline", "ENIAC", "It is an ancient device."],
          ["E", "The person called the father of the computer is", "Charles Babbage", "Blaise Pascal", "John Napier", "Bill Gates", "He designed the analytical engine."],
          ["E", "The Pascaline was invented by", "Blaise Pascal", "John Napier", "Herman Hollerith", "Ada Lovelace", "It was a mechanical adding machine."],
          ["M", "Napier's bones were used mainly for", "multiplication", "typing", "printing", "storing data", "Numbered rods aided multiplication."],
          ["M", "The person regarded as the first computer programmer is", "Ada Lovelace", "Charles Babbage", "Alan Turing", "John Mauchly", "She wrote for the analytical engine."],
          ["M", "The Jacquard loom used", "punched cards", "vacuum tubes", "transistors", "keyboards", "Cards controlled weaving patterns."],
          ["M", "Herman Hollerith's machine was used to process the", "US census", "first moon landing", "Nigerian election", "Olympic results", "It tabulated census data in 1890."],
          ["H", "ENIAC, built in 1946, used thousands of", "vacuum tubes", "microprocessors", "transistors only", "integrated circuits", "It was a first-generation computer."],
          ["H", "The slide rule was based on", "logarithms", "binary numbers", "punched cards", "electricity", "It was developed by William Oughtred."],
          ["H", "Babbage's analytical engine is important because it", "had the main parts of a modern computer", "was the first smartphone", "used the internet", "was made of plastic", "It had input, memory, processing and output."],
        ],
      },
      {
        week: 3,
        title: "Classification of computers",
        subtopics: ["Classification by type", "Classification by size", "Classification by purpose", "Examples in daily life"],
        objectives: ["Classify computers by type", "Classify computers by size", "Classify computers by purpose", "Give everyday examples of each class"],
        lesson: {
          title: "Kinds of Computers",
          summary: "Classify computers by type, size and purpose.",
          minutes: 40,
          notes: `## By type (how data is represented)
| Type | Description | Examples |
|---|---|---|
| **analogue** | measures **continuously changing** quantities (temperature, speed, pressure) | speedometer, analogue thermometer, petrol pump meter |
| **digital** | works with **discrete numbers** (digits 0 and 1) | laptops, desktops, calculators, smartphones |
| **hybrid** | combines **analogue and digital** features | hospital ICU monitors, some aircraft systems |

## By size (and power)
| Class | Features | Examples of use |
|---|---|---|
| **supercomputer** | the **fastest and most powerful**; very expensive | weather forecasting, scientific research |
| **mainframe** | large; serves **many users at once** | banks, airlines, government agencies |
| **minicomputer** | medium size; serves a department | small organisations |
| **microcomputer** | small; for **one user**; uses a microprocessor | desktops, laptops, tablets, smartphones |

Microcomputers include **desktop**, **laptop (notebook)**, **palmtop**, **tablet** and **smartphone**.

## By purpose
- **general-purpose computers** — can perform many tasks (personal computers)
- **special-purpose (dedicated) computers** — built for **one task** (ATMs, traffic light controllers, washing machine controllers, digital watches)

## Embedded computers
small computers built into other devices: microwave ovens, cars, TVs, smart meters.`,
          examples: `**Example 1.** Which type of computer is used for weather forecasting? *Answer:* a **supercomputer**.

**Example 2.** Is a speedometer analogue or digital? *Answer:* **analogue** (pointer type).

**Example 3.** An ATM is a **special-purpose** computer.`,
        },
        questions: [
          ["E", "A computer that works with discrete digits 0 and 1 is", "digital", "analogue", "hybrid", "mechanical", "Digital uses digits."],
          ["E", "A laptop is an example of a", "microcomputer", "supercomputer", "mainframe", "minicomputer", "It is used by one person."],
          ["E", "The fastest and most powerful computers are", "supercomputers", "microcomputers", "palmtops", "calculators", "They handle huge tasks."],
          ["M", "A computer that measures continuously changing quantities is", "analogue", "digital", "micro", "general-purpose", "E.g. a speedometer."],
          ["M", "A computer that combines analogue and digital features is", "hybrid", "mainframe", "micro", "special-purpose only", "Hospital monitors are examples."],
          ["M", "Large computers serving many users at once in banks are", "mainframes", "palmtops", "tablets", "smartphones", "They handle many transactions."],
          ["M", "An ATM is an example of a", "special-purpose computer", "general-purpose computer", "supercomputer", "minicomputer", "It does one job."],
          ["H", "Weather forecasting mainly uses", "supercomputers", "smartphones", "calculators", "digital watches", "It needs huge processing power."],
          ["H", "Computers built into devices like microwave ovens are", "embedded computers", "mainframes", "supercomputers", "hybrid servers", "They are inside other machines."],
          ["H", "A personal computer that can type, calculate and play music is", "a general-purpose computer", "a dedicated computer", "an analogue computer", "a supercomputer", "It performs many tasks."],
        ],
      },
      {
        week: 4,
        title: "Parts of a computer system",
        subtopics: ["Hardware", "Software", "Peopleware (users)", "How the parts work together"],
        objectives: ["Explain the components of a computer system", "Distinguish hardware from software", "Identify categories of computer users", "Explain how hardware, software and people work together"],
        lesson: {
          title: "Hardware, Software and People",
          summary: "Identify the components of a computer system.",
          minutes: 40,
          notes: `## A computer system
A **computer system** is made up of **hardware**, **software** and **peopleware (users)** working together. Some books also include **data** and **procedures**.

## Hardware
**Hardware** is the **physical parts** of a computer that can be **seen and touched**.
- **input devices** — keyboard, mouse, scanner, microphone
- **processing device** — the **system unit** containing the **CPU**
- **output devices** — monitor, printer, speakers
- **storage devices** — hard disk, flash drive, memory card
- **communication devices** — modem, network card

## Software
**Software** is the **set of programs (instructions)** that tell the hardware what to do. It **cannot be touched**.
- **system software** — operating systems (Windows, Linux, macOS, Android), utilities
- **application software** — word processors, spreadsheets, games, browsers

## Peopleware (users)
**Peopleware** are the **people** who use and work with computers:
- **end users** — use computers for everyday tasks
- **programmers** — write programs
- **system analysts** — study and design computer systems
- **computer operators** — run computers in organisations
- **computer engineers/technicians** — build and repair hardware
- **database and network administrators**

## How they work together
hardware without software cannot do anything; software needs hardware to run; and people give instructions, supply data and use the results. Example: a student (**peopleware**) types an essay using **Microsoft Word** (**software**) on a **laptop** (**hardware**).`,
          examples: `**Example 1.** Is a printer hardware or software? *Answer:* **hardware**.

**Example 2.** Is Microsoft Word hardware or software? *Answer:* **software** (application).

**Example 3.** Who writes computer programs? *Answer:* a **programmer** (peopleware).`,
        },
        questions: [
          ["E", "The physical parts of a computer that can be touched are", "hardware", "software", "peopleware", "data", "Hardware is tangible."],
          ["E", "The programs that tell a computer what to do are", "software", "hardware", "firmware cables", "peripherals", "Software is intangible."],
          ["E", "People who work with computers are called", "peopleware", "hardware", "software", "firmware", "They are users."],
          ["M", "Which is an example of hardware?", "keyboard", "Windows", "Microsoft Word", "a game app", "It can be touched."],
          ["M", "Which is an example of application software?", "a word processor", "an operating system", "a mouse", "a monitor", "It performs user tasks."],
          ["M", "A person who writes computer programs is a", "programmer", "computer operator only", "typist", "end user", "Programmers code."],
          ["M", "Windows and Linux are examples of", "operating systems", "input devices", "application games", "storage devices", "They are system software."],
          ["H", "A person who studies and designs computer systems for organisations is a", "system analyst", "data entry clerk", "end user", "printer technician", "Analysts design systems."],
          ["H", "A computer with hardware but no software", "cannot perform useful tasks", "works perfectly", "is faster", "needs no electricity", "Software gives instructions."],
          ["H", "A student typing an essay on a laptop using a word processor shows", "hardware, software and peopleware working together", "only hardware", "only software", "only peopleware", "All three are involved."],
        ],
      },
      {
        week: 5,
        title: "Input devices",
        subtopics: ["Meaning of input devices", "Keyboard and mouse", "Other input devices", "Choosing input devices"],
        objectives: ["Define input devices", "Describe the keyboard and mouse", "Identify other input devices and their uses", "Choose suitable input devices for tasks"],
        lesson: {
          title: "Getting Data into the Computer",
          summary: "Identify and use input devices.",
          minutes: 40,
          notes: `## Meaning
**Input devices** are hardware used to **enter data and instructions** into a computer.

## The keyboard
the most common input device for typing text and commands. Groups of keys:
- **alphanumeric keys** — letters and numbers
- **function keys** — F1 to F12 (e.g. F1 for help)
- **numeric keypad** — numbers arranged like a calculator
- **cursor (arrow) keys** — move the cursor
- **special keys** — Enter, Shift, Caps Lock, Tab, Backspace, Delete, Space bar, Esc, Ctrl, Alt
Standard keyboards use the **QWERTY** layout (named from the first six letters on the top letter row).

## The mouse
a **pointing device** that controls the **pointer** on the screen.
Actions: **click** (press and release the left button), **double-click**, **right-click** (shows a shortcut menu), **drag and drop**, **scroll**.
Types: mechanical (ball) mouse, **optical** mouse, wireless mouse.

## Other input devices
| Device | Use |
|---|---|
| **scanner** | converts printed documents and pictures into digital form |
| **microphone** | inputs sound/voice |
| **digital camera / webcam** | captures pictures and video |
| **joystick** | controls games and simulators |
| **touchscreen** | input by touching the screen (phones, ATMs) |
| **light pen / stylus** | drawing or selecting on screens |
| **barcode reader** | reads barcodes in supermarkets |
| **MICR** | reads magnetic ink characters on **cheques** |
| **OMR** | reads marks on **answer sheets** (e.g. exam shading sheets) |
| **OCR** | recognises printed text and converts it to editable text |
| **biometric scanner** | reads fingerprints, faces (e.g. BVN, NIN enrolment) |

## Choosing an input device
consider the **type of data** (text, sound, image), speed needed, accuracy, cost and the user.`,
          examples: `**Example 1.** Which device reads exam answer sheets? *Answer:* **OMR** (optical mark reader).

**Example 2.** Which device reads cheques in banks? *Answer:* **MICR**.

**Example 3.** What does a scanner do? *Answer:* It **converts printed pages into digital form**.`,
        },
        questions: [
          ["E", "Hardware used to enter data into a computer is called an", "input device", "output device", "storage device", "operating system", "It brings data in."],
          ["E", "The most common device for typing text is the", "keyboard", "mouse", "printer", "monitor", "Keys enter characters."],
          ["E", "A pointing device that controls the pointer on the screen is the", "mouse", "scanner", "speaker", "printer", "It points and clicks."],
          ["M", "The standard keyboard layout is called", "QWERTY", "ABCDEF", "AZERTY only", "NUMPAD", "Named from the top row."],
          ["M", "A device that converts printed pictures into digital form is the", "scanner", "plotter", "speaker", "projector", "It scans pages."],
          ["M", "Clicking the right mouse button usually", "shows a shortcut menu", "deletes a file", "shuts down the computer", "prints a page", "It opens context menus."],
          ["M", "The device used to read barcodes in supermarkets is the", "barcode reader", "joystick", "microphone", "plotter", "It scans product codes."],
          ["H", "The device that reads marks shaded on exam answer sheets is the", "OMR", "MICR", "OCR only", "plotter", "Optical mark reader."],
          ["H", "The device used by banks to read the special characters on cheques is the", "MICR", "OMR", "joystick", "webcam", "Magnetic ink character recognition."],
          ["H", "Fingerprint devices used during NIN enrolment are", "biometric scanners", "plotters", "speakers", "projectors", "They capture body features."],
        ],
      },
      {
        week: 6,
        title: "Output devices",
        subtopics: ["Meaning of output devices", "Monitors", "Printers", "Other output devices"],
        objectives: ["Define output devices", "Describe types of monitors", "Classify printers", "Identify other output devices and their uses"],
        lesson: {
          title: "Getting Information Out of the Computer",
          summary: "Identify and compare output devices.",
          minutes: 40,
          notes: `## Meaning
**Output devices** are hardware that **present processed information** to the user in a usable form.
- **soft copy** — output shown on a **screen** or played as sound; cannot be touched
- **hard copy** — output **printed on paper**; can be touched and carried

## Monitors (visual display units)
- **CRT** (cathode ray tube) — old, bulky monitors
- **LCD** (liquid crystal display) — flat, light, less power
- **LED** — LCD with LED backlight; bright and energy-saving
- **touchscreen monitors** — act as both input and output
Screen quality depends on **size** (measured diagonally in inches) and **resolution** (number of **pixels**).

## Printers
| Group | Type | Features |
|---|---|---|
| **impact printers** (strike the paper) | **dot-matrix** | noisy; can print on multi-part forms |
| **non-impact printers** | **inkjet** | sprays ink; good colour; cheap to buy |
| | **laser** | uses toner and a laser; fast, sharp, quiet |
| | **thermal** | uses heat; receipts, POS slips |
**3D printers** build solid objects layer by layer.

## Other output devices
| Device | Use |
|---|---|
| **speakers / headphones** | sound output |
| **projector** | shows the screen on a large wall or screen |
| **plotter** | prints large drawings, maps and engineering designs |
| **braille display/printer** | output for visually impaired users |

## Choosing an output device
consider whether **hard or soft copy** is needed, quality, speed, cost and noise level.`,
          examples: `**Example 1.** Is a printed report a soft copy or a hard copy? *Answer:* **hard copy**.

**Example 2.** Which printer is used for POS receipts? *Answer:* the **thermal** printer.

**Example 3.** Which device prints large maps and building plans? *Answer:* the **plotter**.`,
        },
        questions: [
          ["E", "Hardware that presents processed information to the user is an", "output device", "input device", "operating system", "processor", "It brings information out."],
          ["E", "Output printed on paper is called", "hard copy", "soft copy", "software", "firmware", "It can be touched."],
          ["E", "The output device that produces sound is the", "speaker", "scanner", "keyboard", "mouse", "Speakers play sound."],
          ["M", "Output displayed on a screen is called", "soft copy", "hard copy", "paper copy", "photocopy", "It cannot be touched."],
          ["M", "A printer that strikes the paper to print is an", "impact printer", "inkjet printer", "laser printer", "thermal printer", "Dot-matrix is an example."],
          ["M", "A printer that sprays tiny drops of ink onto paper is the", "inkjet printer", "dot-matrix printer", "plotter", "thermal printer", "Ink is jetted. Answer: inkjet printer."],
          ["M", "The device used to display a computer screen on a large wall is the", "projector", "scanner", "plotter", "microphone", "It enlarges the display."],
          ["H", "A fast, quiet printer that uses toner is the", "laser printer", "dot-matrix printer", "thermal printer", "plotter", "Laser printers use toner powder."],
          ["H", "The output device used to print large engineering drawings is the", "plotter", "thermal printer", "speaker", "webcam", "Plotters handle large sizes."],
          ["H", "Screen sharpness depends mainly on the number of", "pixels (resolution)", "keys", "speakers", "cables", "More pixels give finer detail."],
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
        title: "Generations of computers",
        subtopics: ["First and second generations", "Third generation", "Fourth generation", "Fifth generation"],
        objectives: ["Describe first and second generation computers", "Describe third generation computers", "Describe fourth generation computers", "Explain fifth generation computers"],
        lesson: {
          title: "How Computers Have Changed",
          summary: "Compare the generations of computers by their main technology.",
          minutes: 40,
          notes: `## Generations of computers
A **generation** is a stage in computer development marked by a **major change in technology**.

| Generation | Period (approx.) | Main technology | Features | Examples |
|---|---|---|---|---|
| **first** | 1940s–1950s | **vacuum tubes** | very large, produced much heat, used a lot of electricity, slow, unreliable; programmed in **machine language** | ENIAC, UNIVAC I |
| **second** | late 1950s–1960s | **transistors** | smaller, faster, more reliable, less heat; **assembly language** and early high-level languages (FORTRAN, COBOL) | IBM 1401 |
| **third** | mid-1960s–early 1970s | **integrated circuits (ICs)** — many transistors on a silicon chip | smaller, cheaper, faster; keyboards and monitors; **operating systems** | IBM System/360 |
| **fourth** | 1970s–present | **microprocessors** (VLSI — whole CPU on one chip) | personal computers, laptops, smartphones; networks and the internet; GUIs | IBM PC, Apple Macintosh, modern laptops |
| **fifth** | present and future | **artificial intelligence (AI)**, parallel processing, advanced chips | understand natural language, learn, recognise speech and images | AI assistants, robots, self-driving systems |

## Key ideas
- the **transistor** was invented in **1947** at Bell Laboratories
- the **integrated circuit** was developed in **1958–1959** (Jack Kilby and Robert Noyce)
- the first commercial **microprocessor**, the **Intel 4004**, appeared in **1971**

## Trends across generations
computers have become **smaller**, **faster**, **cheaper**, more **reliable**, use **less power**, store **more data** and are **easier to use**.`,
          examples: `**Example 1.** What technology was used in first-generation computers? *Answer:* **vacuum tubes**.

**Example 2.** Which generation introduced the microprocessor? *Answer:* the **fourth** generation.

**Example 3.** What is the main feature of fifth-generation computers? *Answer:* **artificial intelligence**.`,
        },
        questions: [
          ["E", "First-generation computers used", "vacuum tubes", "microprocessors", "transistors", "integrated circuits", "Vacuum tubes produced much heat."],
          ["E", "Second-generation computers used", "transistors", "vacuum tubes", "artificial intelligence", "microprocessors", "Transistors replaced tubes."],
          ["E", "Fourth-generation computers are based on", "microprocessors", "vacuum tubes", "punched cards only", "transistors only", "A whole CPU on one chip."],
          ["M", "Third-generation computers used", "integrated circuits", "vacuum tubes", "abacus beads", "gears", "Many transistors on one chip."],
          ["M", "Fifth-generation computers are associated with", "artificial intelligence", "vacuum tubes", "punched cards", "slide rules", "They aim to learn and reason."],
          ["M", "A problem of first-generation computers was that they", "produced a lot of heat", "were very small", "were cheap", "used microprocessors", "Tubes got very hot."],
          ["M", "The first commercial microprocessor, the Intel 4004, appeared in", "1971", "1946", "1822", "2001", "It began the PC era."],
          ["H", "The trend across generations of computers is that they became", "smaller, faster and cheaper", "larger and slower", "more expensive and less reliable", "heavier and hotter", "Technology improved."],
          ["H", "The transistor was invented in", "1947", "1642", "1971", "1890", "At Bell Laboratories."],
          ["H", "Personal computers and smartphones belong to the", "fourth generation", "first generation", "second generation", "third generation", "They use microprocessors."],
        ],
      },
      {
        week: 2,
        title: "The system unit and the CPU",
        subtopics: ["The system unit", "The CPU and its parts", "The motherboard and ports", "Processor speed"],
        objectives: ["Identify the components of the system unit", "Describe the parts of the CPU", "Identify the motherboard and common ports", "Explain processor speed"],
        lesson: {
          title: "Inside the System Unit",
          summary: "Describe the system unit, the CPU and common ports.",
          minutes: 40,
          notes: `## The system unit
The **system unit** (casing, tower) is the box that **houses the main processing components**: the **motherboard**, **CPU**, **memory (RAM)**, **hard disk**, **power supply unit (PSU)**, cooling fans and expansion cards.

## The CPU
The **Central Processing Unit (CPU)** or **processor** is the **"brain" of the computer**. It carries out instructions.
Parts of the CPU:
| Part | Function |
|---|---|
| **Control Unit (CU)** | **directs and coordinates** all operations; fetches and decodes instructions |
| **Arithmetic and Logic Unit (ALU)** | performs **calculations** (+, −, ×, ÷) and **logical comparisons** (greater than, equal to) |
| **registers** | very small, very fast storage locations inside the CPU for data being processed |

## The machine cycle
the CPU repeats **fetch → decode → execute → store**.

## The motherboard
the **main circuit board** that connects all components; it holds the CPU socket, RAM slots, expansion slots and ports.

## Common ports
| Port | Use |
|---|---|
| **USB** | flash drives, mouse, keyboard, printers, phones |
| **HDMI / VGA** | connect monitors and projectors |
| **Ethernet (RJ45)** | network cable |
| **audio jacks** | speakers, headphones, microphones |
| **power port** | power cable |

## Processor speed
measured in **hertz (Hz)** — today usually **gigahertz (GHz)** (billions of cycles per second). Modern CPUs may have several **cores** that work at the same time.`,
          examples: `**Example 1.** Which part of the CPU performs calculations? *Answer:* the **ALU**.

**Example 2.** What is the main circuit board called? *Answer:* the **motherboard**.

**Example 3.** In what unit is processor speed measured? *Answer:* **gigahertz (GHz)**.`,
        },
        questions: [
          ["E", "The 'brain' of the computer is the", "CPU", "monitor", "keyboard", "mouse", "It processes instructions."],
          ["E", "CPU stands for", "Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Printing Unit", "It is the processor."],
          ["E", "The box that houses the CPU and motherboard is the", "system unit", "monitor", "printer", "scanner", "It contains main components."],
          ["M", "The part of the CPU that performs calculations and comparisons is the", "ALU", "CU", "PSU", "RAM", "Arithmetic and Logic Unit."],
          ["M", "The part of the CPU that directs and coordinates operations is the", "Control Unit", "ALU", "hard disk", "power supply", "It controls the flow."],
          ["M", "The main circuit board inside the system unit is the", "motherboard", "keyboard", "dashboard", "chalkboard", "It connects components."],
          ["M", "A flash drive is usually connected to the", "USB port", "HDMI port", "audio jack", "Ethernet port", "USB is universal."],
          ["H", "The correct order of the machine cycle is", "fetch, decode, execute, store", "execute, fetch, store, decode", "decode, store, fetch, execute", "store, execute, decode, fetch", "Instructions are fetched first."],
          ["H", "Processor speed is commonly measured in", "gigahertz", "gigabytes", "megapixels", "watts only", "Hz measures cycles per second."],
          ["H", "Very fast storage locations inside the CPU are called", "registers", "hard disks", "flash drives", "ports", "They hold data being processed."],
        ],
      },
      {
        week: 3,
        title: "Computer memory",
        subtopics: ["Meaning of memory", "RAM and ROM", "Units of memory", "Cache memory"],
        objectives: ["Explain computer memory", "Distinguish RAM from ROM", "Convert between units of memory", "Explain cache memory"],
        lesson: {
          title: "How Computers Remember",
          summary: "Distinguish types of memory and units of storage.",
          minutes: 40,
          notes: `## Meaning
**Memory** is the part of a computer that **holds data and instructions** for processing. **Primary (main) memory** is directly accessed by the CPU.

## RAM and ROM
| Feature | RAM | ROM |
|---|---|---|
| full name | **Random Access Memory** | **Read Only Memory** |
| use | holds data and programs **currently in use** | holds **permanent instructions**, such as start-up (boot) instructions (BIOS/firmware) |
| volatility | **volatile** — contents are **lost when power goes off** | **non-volatile** — contents remain when power is off |
| changing contents | can be read and **written** | can usually only be **read** |
| size | larger (e.g. 8 GB) | smaller |
More RAM allows a computer to run more programs at the same time smoothly.

## Units of memory
| Unit | Size |
|---|---|
| **bit** (binary digit) | 0 or 1 — the smallest unit |
| **nibble** | 4 bits |
| **byte** | **8 bits** — about one character, e.g. "A" |
| **kilobyte (KB)** | 1,024 bytes |
| **megabyte (MB)** | 1,024 KB |
| **gigabyte (GB)** | 1,024 MB |
| **terabyte (TB)** | 1,024 GB |
(In everyday use, people often round 1 KB to 1,000 bytes.)

## Cache memory
**Cache** is a small, **very fast** memory close to the CPU that stores frequently used data, making processing faster.

## Secondary memory
storage that keeps data permanently (hard disks, flash drives) — studied next.`,
          examples: `**Example 1.** Which memory loses its contents when power goes off? *Answer:* **RAM**.

**Example 2.** How many bits are in a byte? *Answer:* **8**.

**Example 3.** How many megabytes are in 2 GB (computing units)? *Answer:* 2 × 1,024 = **2,048 MB**.`,
        },
        questions: [
          ["E", "RAM stands for", "Random Access Memory", "Read Access Memory", "Rapid Action Memory", "Run All Memory", "It holds data in use."],
          ["E", "ROM stands for", "Read Only Memory", "Random Only Memory", "Run Once Memory", "Read Open Memory", "Its contents are permanent."],
          ["E", "The smallest unit of data is the", "bit", "byte", "kilobyte", "nibble", "A bit is 0 or 1."],
          ["M", "The number of bits in a byte is", "8", "4", "16", "1024", "A byte is 8 bits."],
          ["M", "Memory that loses its contents when power is switched off is", "volatile", "non-volatile", "permanent", "read-only", "RAM is volatile."],
          ["M", "The memory that stores start-up instructions permanently is", "ROM", "RAM", "cache", "registers", "ROM holds boot instructions."],
          ["M", "Four bits make a", "nibble", "byte", "kilobyte", "word", "Half a byte. Answer: nibble."],
          ["H", "In computing units, 2 GB equals", "2,048 MB", "2,000 KB", "1,024 MB", "20,480 MB", "2 × 1,024. Answer: 2,048 MB."],
          ["H", "A small, very fast memory close to the CPU that stores frequently used data is", "cache memory", "ROM", "hard disk", "flash drive", "It speeds up processing."],
          ["H", "Adding more RAM to a computer generally", "allows more programs to run smoothly", "deletes stored files", "slows down the CPU", "removes the operating system", "More working memory is available."],
        ],
      },
      {
        week: 4,
        title: "Storage devices",
        subtopics: ["Primary and secondary storage", "Magnetic storage", "Optical and solid-state storage", "Cloud storage and care of devices"],
        objectives: ["Distinguish primary and secondary storage", "Describe magnetic storage devices", "Describe optical and solid-state storage devices", "Explain cloud storage and care of storage devices"],
        lesson: {
          title: "Keeping Data for Later",
          summary: "Compare storage devices and care for them.",
          minutes: 40,
          notes: `## Primary and secondary storage
- **primary storage** — main memory (RAM, ROM) used directly by the CPU
- **secondary (auxiliary) storage** — keeps data and programs **permanently**, even when power is off; larger and cheaper but slower than RAM

## Magnetic storage
| Device | Notes |
|---|---|
| **hard disk drive (HDD)** | spinning magnetic platters; large capacity; inside most computers |
| **magnetic tape** | used for **backups** in large organisations; data read in order (sequential access) |
| **floppy disk** | old, small capacity; no longer used |

## Optical storage
read and written using a **laser**:
- **CD** (compact disc) — about 700 MB
- **DVD** — about 4.7 GB (single layer)
- **Blu-ray** — 25 GB or more
- **-ROM** discs can only be read; **-R** written once; **-RW** rewritable

## Solid-state storage
no moving parts; uses **flash memory**:
- **flash drive (USB stick, pen drive)**
- **memory card (SD card)** — phones and cameras
- **solid-state drive (SSD)** — faster, quieter and more durable than HDDs

## Cloud storage
saving files on **remote servers over the internet** (e.g. Google Drive, OneDrive, iCloud). Advantages: access from anywhere; easy sharing; backup. Disadvantages: needs internet; privacy and security concerns; subscription costs.

## Care of storage devices
keep away from **heat, water, dust and magnets**; **eject safely** before removing flash drives; scan for **viruses**; do not bend or scratch discs; make **backups** of important files.`,
          examples: `**Example 1.** Which storage device has no moving parts and is used in phones? *Answer:* a **memory card** (solid-state).

**Example 2.** What reads data on CDs and DVDs? *Answer:* a **laser**.

**Example 3.** Give one advantage of cloud storage. *Answer:* Files can be **accessed from anywhere** with internet.`,
        },
        questions: [
          ["E", "Storage that keeps data permanently even when power is off is", "secondary storage", "RAM", "registers", "cache only", "It is auxiliary storage."],
          ["E", "A small portable storage device plugged into a USB port is a", "flash drive", "monitor", "printer", "scanner", "It is a pen drive."],
          ["E", "CDs and DVDs are", "optical storage", "magnetic tapes", "RAM chips", "input devices", "A laser reads them."],
          ["M", "A hard disk drive stores data", "magnetically on spinning platters", "with a laser only", "on paper", "in the CPU registers", "It is magnetic storage."],
          ["M", "Saving files on remote servers through the internet is", "cloud storage", "magnetic tape storage", "ROM storage", "cache storage", "Files are stored online."],
          ["M", "A storage device with no moving parts that uses flash memory is", "solid-state drive", "floppy disk", "hard disk drive", "magnetic tape", "SSD is solid-state."],
          ["M", "Magnetic tapes are mainly used for", "backups in large organisations", "playing games", "typing documents", "displaying pictures", "They store large backups."],
          ["H", "A disc marked RW can be", "written to and erased many times", "only read", "written only once", "used only for music", "RW means rewritable."],
          ["H", "Before removing a flash drive, you should", "eject it safely", "switch off the monitor", "delete its files", "shake it", "This prevents data loss."],
          ["H", "A disadvantage of cloud storage is that it", "needs internet access", "cannot store files", "is always lost", "works without servers", "No internet means no access."],
        ],
      },
      {
        week: 5,
        title: "Starting and shutting down a computer",
        subtopics: ["Booting a computer", "Cold and warm booting", "Logging in and the desktop", "Shutting down properly"],
        objectives: ["Explain booting", "Distinguish cold booting from warm booting", "Log in and identify desktop elements", "Shut down a computer properly"],
        lesson: {
          title: "Switching On and Off Correctly",
          summary: "Boot and shut down a computer safely.",
          minutes: 40,
          notes: `## Booting
**Booting** is the process of **starting a computer** and loading the **operating system** into memory. During booting, the computer runs a **POST (Power-On Self-Test)** to check the hardware.

## Types of booting
| Type | How | When |
|---|---|---|
| **cold booting** | switching on a computer that was **completely off** using the power button | start of the day |
| **warm booting (restarting)** | restarting a computer that is **already on**, e.g. **Start → Restart**, or **Ctrl + Alt + Delete** | after installing software, or when the computer hangs |

## Steps to switch on a desktop
1. ensure the cables are connected and the power source (UPS/stabiliser) is on
2. switch on the **monitor**
3. press the **power button** on the system unit
4. wait for the operating system to load
5. enter your **username and password** if required (**logging in**)

## The desktop
the main screen after booting:
- **icons** — small pictures representing programs, files or folders
- **taskbar** — bar (usually at the bottom) showing open programs
- **Start button / menu** — gives access to programs and settings
- **wallpaper** — background picture
- **pointer (cursor)**
- **notification area / clock**

## Shutting down properly
1. **save** your work
2. **close** all open programs
3. click **Start → Power → Shut down**
4. wait for the computer to switch off
5. switch off the monitor and the power source
**Why?** Switching off directly at the socket can **damage files**, the operating system and hardware.

## Using a UPS
A **UPS (Uninterruptible Power Supply)** gives power for a short time during **power failure**, so you can save and shut down safely. A **stabiliser** protects against voltage fluctuations.`,
          examples: `**Example 1.** What is cold booting? *Answer:* Starting a computer that was **completely switched off**.

**Example 2.** Which key combination can restart a computer? *Answer:* **Ctrl + Alt + Delete**.

**Example 3.** Why should you shut down properly? *Answer:* To **avoid damaging files** and the system.`,
        },
        questions: [
          ["E", "Starting a computer and loading the operating system is", "booting", "printing", "scanning", "formatting", "The OS is loaded."],
          ["E", "The small pictures on the desktop representing programs are", "icons", "pixels", "ports", "bytes", "Icons are clickable."],
          ["E", "Before shutting down a computer, you should", "save your work", "remove the hard disk", "pour water on it", "unplug the keyboard first", "Unsaved work is lost."],
          ["M", "Starting a computer that was completely off is", "cold booting", "warm booting", "logging off", "sleeping", "It starts from cold."],
          ["M", "Restarting a computer that is already on is", "warm booting", "cold booting", "shutting down", "formatting", "It is a restart."],
          ["M", "The bar at the bottom of the desktop showing open programs is the", "taskbar", "title bar", "scroll bar", "menu bar", "It shows running tasks."],
          ["M", "A device that supplies power during a power failure is the", "UPS", "CPU", "USB", "ROM", "Uninterruptible Power Supply."],
          ["H", "POST stands for", "Power-On Self-Test", "Print Output System Test", "Program Operation Start Time", "Power Output Safety Tool", "It checks hardware at start-up."],
          ["H", "The key combination often used to restart or open a security screen is", "Ctrl + Alt + Delete", "Ctrl + C", "Alt + F4 + P", "Shift + Tab", "It is a classic shortcut."],
          ["H", "Switching off a computer at the socket without shutting down can", "damage files and the system", "speed up the computer", "save electricity safely", "update the software", "Improper shutdown is harmful."],
        ],
      },
      {
        week: 6,
        title: "Using the mouse and keyboard",
        subtopics: ["Mouse techniques", "Keyboard key groups", "Special and function keys", "Typing posture and practice"],
        objectives: ["Perform mouse techniques correctly", "Identify keyboard key groups", "Use special and function keys", "Type with correct posture"],
        lesson: {
          title: "Mastering the Mouse and Keyboard",
          summary: "Use mouse techniques and keyboard keys effectively.",
          minutes: 45,
          notes: `## Holding the mouse
rest the palm on the mouse; index finger on the **left button**, middle finger on the **right button**; move it smoothly on a **mouse pad**.

## Mouse techniques
| Action | How | Use |
|---|---|---|
| **point** | move the pointer over an item | to highlight or show tooltips |
| **click** | press and release the left button once | select an item |
| **double-click** | click the left button twice quickly | open files and programs |
| **right-click** | press the right button | open a **shortcut (context) menu** |
| **drag and drop** | hold the left button, move, release | move items |
| **scroll** | roll the wheel | move up or down a page |

## Keyboard key groups
- **alphanumeric (typing) keys** — letters, numbers, punctuation
- **function keys** — **F1–F12** (F1 = help; F5 = refresh; F2 = rename)
- **numeric keypad** — on the right; works when **Num Lock** is on
- **navigation keys** — arrow keys, **Home, End, Page Up, Page Down**
- **special keys** — see below

## Special keys
| Key | Function |
|---|---|
| **Enter** | executes a command or starts a new line/paragraph |
| **Space bar** | inserts a space |
| **Backspace** | deletes the character to the **left** of the cursor |
| **Delete** | deletes the character to the **right** of the cursor or a selected item |
| **Shift** | types capital letters and upper symbols while held |
| **Caps Lock** | types all letters in capitals |
| **Tab** | moves the cursor forward by a set space |
| **Esc** | cancels an operation |
| **Ctrl / Alt** | used with other keys for **shortcuts** |
| **Windows key** | opens the Start menu |

## Typing posture
sit upright, feet flat, wrists straight; screen at eye level about an arm's length away; fingers on the **home keys** (ASDF, JKL;); look at the screen, not the keys (**touch typing**); take short breaks.`,
          examples: `**Example 1.** Which mouse action opens a file? *Answer:* **double-click**.

**Example 2.** Which key deletes the character to the right of the cursor? *Answer:* **Delete**.

**Example 3.** Which key types all letters in capitals until pressed again? *Answer:* **Caps Lock**.`,
        },
        questions: [
          ["E", "Pressing and releasing the left mouse button once is", "clicking", "dragging", "scrolling", "pointing", "A single click selects."],
          ["E", "The key used to insert spaces between words is the", "space bar", "Enter key", "Tab key", "Esc key", "It is the longest key."],
          ["E", "The keys F1 to F12 are", "function keys", "arrow keys", "number keys", "home keys", "They perform special functions."],
          ["M", "Clicking the left button twice quickly is", "double-clicking", "right-clicking", "dragging", "scrolling", "It opens items."],
          ["M", "Holding the left button, moving an item and releasing it is", "drag and drop", "double-click", "scroll", "point", "It moves items."],
          ["M", "The key that types all letters in capitals until pressed again is", "Caps Lock", "Shift", "Tab", "Alt", "It locks capitals."],
          ["M", "The key that cancels an operation is", "Esc", "Enter", "Delete", "Home", "Escape cancels."],
          ["H", "The numeric keypad works only when", "Num Lock is on", "Caps Lock is on", "the mouse is unplugged", "the screen is off", "Num Lock activates numbers."],
          ["H", "The function key commonly used to get help is", "F1", "F5", "F12", "F9", "F1 opens help. Answer: F1."],
          ["H", "Correct typing posture includes", "sitting upright with wrists straight", "looking at the keys always", "slouching close to the screen", "resting feet on the chair", "It prevents strain."],
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
        title: "Computer software",
        subtopics: ["Meaning of software", "System software", "Application software", "Acquiring software"],
        objectives: ["Define software", "Describe types of system software", "Describe types of application software", "Explain ways of acquiring software"],
        lesson: {
          title: "The Instructions Behind the Machine",
          summary: "Classify software and explain how it is acquired.",
          minutes: 40,
          notes: `## Meaning
**Software** is a **set of programs** (instructions) that tells the computer **what to do and how to do it**.

## System software
software that **manages the computer** and provides a platform for other programs.
- **operating systems (OS)** — Windows, macOS, Linux, Android, iOS
- **utility programs** — maintain and protect the computer: **antivirus**, disk cleanup, file compression (e.g. ZIP), backup tools
- **language translators** — convert program code into machine language: **compilers**, **interpreters**, **assemblers**
- **device drivers** — let the OS communicate with hardware like printers

## Application software
software that helps users perform **specific tasks**.
| Type | Examples |
|---|---|
| **word processors** | Microsoft Word, Google Docs, LibreOffice Writer |
| **spreadsheets** | Microsoft Excel, Google Sheets |
| **presentation** | Microsoft PowerPoint, Google Slides |
| **database** | Microsoft Access |
| **graphics** | CorelDRAW, Adobe Photoshop, Paint |
| **web browsers** | Google Chrome, Microsoft Edge, Mozilla Firefox |
| **communication** | email clients, WhatsApp, Zoom |
| **educational and games** | encyclopaedias, typing tutors, games |
Application software may be **general-purpose (packages)** or **custom-made (tailor-made)** for one organisation, e.g. a school's result-processing software.

## Acquiring software
- **buying** licensed software
- **free software / freeware** and **open-source** software (source code available to all, e.g. Linux, LibreOffice)
- **shareware** — free for a trial period
- **custom development** by programmers
- **app stores** for phones and tablets
Using **pirated** (illegally copied) software is **against the law** and risky (viruses).`,
          examples: `**Example 1.** Is antivirus system software or application software? *Answer:* **system software** (utility).

**Example 2.** Name one spreadsheet program. *Answer:* **Microsoft Excel**.

**Example 3.** What is open-source software? *Answer:* Software whose **source code is freely available** to the public.`,
        },
        questions: [
          ["E", "A set of programs that tells the computer what to do is", "software", "hardware", "peopleware", "a port", "Software is instructions."],
          ["E", "Windows is an example of", "an operating system", "a spreadsheet", "a browser game", "an input device", "It manages the computer."],
          ["E", "Microsoft Word is an example of", "a word processor", "an operating system", "a utility", "a compiler", "It is used for documents."],
          ["M", "Software that manages the computer and runs other programs is", "system software", "application software", "games only", "freeware only", "It is the platform."],
          ["M", "An antivirus program is a", "utility program", "word processor", "spreadsheet", "presentation package", "It maintains and protects."],
          ["M", "Google Chrome is an example of a", "web browser", "spreadsheet", "operating system", "compiler", "It opens web pages."],
          ["M", "Programs that convert program code into machine language are", "language translators", "web browsers", "spreadsheets", "drivers only", "Compilers and interpreters."],
          ["H", "Software whose source code is freely available to the public is", "open-source software", "pirated software", "custom software", "shareware only", "E.g. Linux. Answer: open-source software."],
          ["H", "Software that is free for a trial period only is", "shareware", "freeware", "open-source", "firmware", "Pay after the trial."],
          ["H", "Using illegally copied software is called", "software piracy", "software licensing", "software updating", "software compiling", "It breaks copyright law."],
        ],
      },
      {
        week: 2,
        title: "Operating systems",
        subtopics: ["Meaning of an operating system", "Functions of an operating system", "Types of user interface", "Examples of operating systems"],
        objectives: ["Define an operating system", "State the functions of an operating system", "Distinguish GUI from command-line interfaces", "Name operating systems for computers and phones"],
        lesson: {
          title: "The Manager of the Computer",
          summary: "Explain the functions and types of operating systems.",
          minutes: 40,
          notes: `## Meaning
An **operating system (OS)** is the **main system software** that **manages the hardware and software** of a computer and provides an **interface** between the user and the computer. A computer cannot function usefully without one.

## Functions of an operating system
| Function | Meaning |
|---|---|
| **booting** | starts the computer and loads itself into memory |
| **memory management** | allocates RAM to programs |
| **process (task) management** | controls programs running at the same time (multitasking) |
| **file management** | creates, saves, copies, moves, deletes and organises files and folders |
| **device management** | controls input/output devices through **drivers** |
| **user interface** | allows the user to interact with the computer |
| **security** | user accounts, passwords, permissions |
| **error handling** | reports and manages errors |

## Types of user interface
- **Command-Line Interface (CLI)** — the user **types commands** (e.g. MS-DOS, Linux terminal); fast for experts but hard for beginners
- **Graphical User Interface (GUI)** — uses **windows, icons, menus and pointers (WIMP)**; easy to use (e.g. Windows, macOS)
- **touch interface** — tapping and swiping on phones and tablets
- **voice interface** — spoken commands (voice assistants)

## Examples of operating systems
| Computers | Mobile devices |
|---|---|
| **Microsoft Windows** | **Android** (Google) |
| **macOS** (Apple) | **iOS** (Apple iPhone) |
| **Linux** (e.g. Ubuntu) — open-source | HarmonyOS, KaiOS |
| **UNIX** | |
| **MS-DOS** (older, command-line) | |

## Single-user and multi-user
**single-user** OS (most PCs) vs **multi-user** OS (servers allowing many users at once).`,
          examples: `**Example 1.** Which interface uses windows, icons, menus and pointers? *Answer:* **GUI**.

**Example 2.** Name a mobile operating system. *Answer:* **Android** (or iOS).

**Example 3.** Give one function of the OS. *Answer:* **file management**.`,
        },
        questions: [
          ["E", "The main system software that manages the computer is the", "operating system", "word processor", "spreadsheet", "browser", "It controls hardware and software."],
          ["E", "Android is an operating system for", "mobile devices", "printers only", "televisions only", "calculators", "It runs on phones."],
          ["E", "GUI stands for", "Graphical User Interface", "General User Input", "Graphic Unit Item", "Guided Use Instruction", "It uses pictures."],
          ["M", "An interface in which users type commands is a", "command-line interface", "graphical user interface", "touch interface", "voice interface", "CLI uses typed commands."],
          ["M", "WIMP stands for windows, icons, menus and", "pointers", "printers", "programs", "ports", "It describes GUIs."],
          ["M", "Allocating RAM to running programs is the OS function of", "memory management", "file management", "device management", "booting", "It manages memory."],
          ["M", "Creating, copying and deleting files is the OS function of", "file management", "memory management", "process management", "error handling", "It organises files."],
          ["H", "The operating system used on Apple iPhones is", "iOS", "Android", "Windows", "Linux", "Apple makes iOS."],
          ["H", "An open-source operating system is", "Linux", "Windows", "macOS", "iOS", "Its source code is free."],
          ["H", "The OS controls devices like printers through programs called", "drivers", "browsers", "spreadsheets", "compilers", "Drivers link OS and hardware."],
        ],
      },
      {
        week: 3,
        title: "Introduction to word processing",
        subtopics: ["Meaning of word processing", "Starting a word processor", "Creating and saving a document", "Editing and formatting text"],
        objectives: ["Explain word processing", "Identify parts of the word processor window", "Create, save and open documents", "Edit and format text"],
        lesson: {
          title: "Creating Documents on the Computer",
          summary: "Create, edit, format and save documents with a word processor.",
          minutes: 45,
          notes: `## Meaning
**Word processing** is using a computer to **create, edit, format, save and print text documents** such as letters, reports and assignments. A **word processor** is the software used (e.g. **Microsoft Word**, Google Docs, LibreOffice Writer, WordPad).

## Parts of the word processor window
**title bar** (shows document name), **ribbon/menu bar** (tabs and commands), **Quick Access Toolbar**, **document area** (where you type), **cursor/insertion point**, **scroll bars**, **status bar** (page and word count), **ruler**, **zoom slider**.

## Creating and saving
1. open the word processor
2. click **File → New → Blank document**
3. type your text; press **Enter** only at the end of a paragraph (**word wrap** moves text to the next line automatically)
4. **save**: **File → Save As** (or **Ctrl + S**), choose a location, type a **file name**, click **Save**
5. **open** an existing file: **File → Open** (Ctrl + O)

## Editing
- **select** text by dragging over it (or double-click a word)
- **cut (Ctrl + X)**, **copy (Ctrl + C)**, **paste (Ctrl + V)**
- **undo (Ctrl + Z)**, **redo (Ctrl + Y)**
- **find and replace (Ctrl + H)**
- **spelling and grammar check (F7)** — red underlines show possible spelling errors

## Formatting
- **font** type, **size** and **colour**
- **bold (Ctrl + B)**, **italic (Ctrl + I)**, **underline (Ctrl + U)**
- **alignment**: left, centre (Ctrl + E), right, **justify**
- **line spacing**, **bullets and numbering**
- **page setup**: margins, paper size, orientation

## Printing
**File → Print** (Ctrl + P); use **print preview** to check before printing.`,
          examples: `**Example 1.** Which shortcut saves a document? *Answer:* **Ctrl + S**.

**Example 2.** What is word wrap? *Answer:* Text **moves to the next line automatically** when a line is full.

**Example 3.** Which key checks spelling in Microsoft Word? *Answer:* **F7**.`,
        },
        questions: [
          ["E", "Using a computer to create and edit text documents is", "word processing", "spreadsheet analysis", "graphics design", "programming", "It handles text."],
          ["E", "Microsoft Word is a", "word processor", "spreadsheet", "browser", "operating system", "It creates documents."],
          ["E", "The shortcut Ctrl + C is used to", "copy", "cut", "paste", "close", "C for copy. Answer: copy."],
          ["M", "The bar that shows the document's name at the top is the", "title bar", "status bar", "scroll bar", "taskbar", "It displays the title."],
          ["M", "The automatic movement of text to the next line is", "word wrap", "word art", "page break only", "auto save", "No need to press Enter."],
          ["M", "The shortcut to paste is", "Ctrl + V", "Ctrl + P", "Ctrl + X", "Ctrl + Z", "V pastes. Answer: Ctrl + V."],
          ["M", "The shortcut to make text bold is", "Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D", "B for bold. Answer: Ctrl + B."],
          ["H", "The key that runs the spelling and grammar check in Microsoft Word is", "F7", "F1", "F5", "F12", "F7 checks spelling."],
          ["H", "Aligning text evenly along both left and right margins is", "justify", "centre", "left align", "indent", "Justify fills the line."],
          ["H", "Checking how a document will look before printing is done with", "print preview", "word wrap", "find and replace", "copy and paste", "Preview avoids waste."],
        ],
      },
      {
        week: 4,
        title: "Computer care and safety",
        subtopics: ["Caring for computer hardware", "The computer laboratory rules", "Ergonomics and health", "Electrical safety"],
        objectives: ["Describe ways of caring for computer hardware", "State computer laboratory rules", "Explain ergonomics and computer-related health problems", "Apply electrical safety rules"],
        lesson: {
          title: "Using Computers Safely",
          summary: "Care for computers and use them safely and healthily.",
          minutes: 40,
          notes: `## Caring for hardware
- keep computers in a **clean, dust-free, cool** room (air conditioning or fans)
- cover computers with **dust covers** when not in use
- do not eat or drink near computers
- handle storage devices carefully; keep away from magnets and heat
- use a **UPS** and **voltage stabiliser**
- shut down properly
- clean the screen and keyboard gently with suitable materials
- install and update **antivirus** software
- do not open the system unit unless trained

## Computer laboratory rules
enter only with the teacher's permission; remove or keep bags in the designated place; no food or drinks; do not touch cables or sockets; use only assigned computers; no unauthorised installation or downloads; log off and shut down properly; report faults immediately; keep the lab tidy.

## Ergonomics and health
**Ergonomics** is designing the workplace to fit the user and **reduce strain and injury**.
| Problem | Cause | Prevention |
|---|---|---|
| **eye strain** | staring at screens | screen at eye level, proper lighting, **20-20-20 rule** (every 20 minutes look at something 20 feet away for 20 seconds) |
| **back and neck pain** | poor posture | adjustable chair, sit upright |
| **repetitive strain injury (RSI)** | repeated typing and mouse use | wrist support, breaks, correct hand position |
| **headaches and fatigue** | long use without rest | regular breaks |

## Electrical safety
do not overload sockets; keep liquids away; do not touch electrical equipment with wet hands; check cables for damage; switch off at the mains after use; report sparks or burning smells.`,
          examples: `**Example 1.** What is ergonomics? *Answer:* Designing the workplace to **fit the user and reduce strain**.

**Example 2.** What causes repetitive strain injury? *Answer:* **Repeated typing and mouse movements** without breaks.

**Example 3.** Give one computer lab rule. *Answer:* **No food or drinks** in the lab.`,
        },
        questions: [
          ["E", "Computers should be kept in a room that is", "clean and cool", "dusty and hot", "wet", "dark and damp", "Heat and dust damage them."],
          ["E", "In the computer laboratory, students should not", "eat or drink", "listen to the teacher", "log off properly", "report faults", "Spills damage computers."],
          ["E", "A cover used to protect a computer from dust is a", "dust cover", "mouse pad", "flash drive", "monitor stand", "It keeps dust away."],
          ["M", "Designing the workplace to fit the user and reduce strain is", "ergonomics", "economics", "electronics", "ethics", "Ergonomics prevents injury."],
          ["M", "Injury caused by repeated typing and mouse use is", "repetitive strain injury", "eye strain only", "electric shock", "virus infection", "RSI affects wrists."],
          ["M", "Staring at a screen for long periods can cause", "eye strain", "stronger eyes", "better posture", "faster typing", "Eyes get tired."],
          ["M", "A device that protects a computer from voltage fluctuations is a", "stabiliser", "scanner", "webcam", "router", "It regulates voltage."],
          ["H", "The 20-20-20 rule helps to reduce", "eye strain", "virus attacks", "power cuts", "file loss", "Look away regularly."],
          ["H", "Plugging too many devices into one socket can cause", "overloading and fire risk", "faster computers", "better internet", "longer battery life", "Sockets have limits."],
          ["H", "If a student notices a burning smell from a computer, the student should", "switch off and report immediately", "continue working", "pour water on it", "open the system unit", "Safety first. Answer: switch off and report immediately."],
        ],
      },
      {
        week: 5,
        title: "Data processing",
        subtopics: ["The data processing cycle", "Methods of data processing", "Data collection and validation", "Advantages of electronic data processing"],
        objectives: ["Describe the data processing cycle", "Compare manual, mechanical and electronic data processing", "Explain data collection and validation", "State advantages of electronic data processing"],
        lesson: {
          title: "Turning Data into Information",
          summary: "Describe the data processing cycle and its methods.",
          minutes: 40,
          notes: `## Data processing
**Data processing** is the **collection and manipulation of data** to produce **meaningful information**.

## The data processing cycle
1. **data collection (gathering)** — getting raw data (forms, surveys, sensors)
2. **data preparation/validation** — checking and organising data for errors
3. **input** — entering data into the computer
4. **processing** — calculating, sorting, classifying, summarising
5. **output** — producing information (reports, charts)
6. **storage** — saving data and information for future use
7. **distribution/feedback** — sharing information with users

## Methods of data processing
| Method | Description | Example |
|---|---|---|
| **manual** | done by hand with pen, paper and the brain | marking a register by hand |
| **mechanical** | uses simple machines | calculators, typewriters, cash registers |
| **electronic (EDP)** | uses **computers** | result processing, bank transactions |

## Processing activities
**sorting** (arranging in order), **classifying** (grouping), **calculating**, **summarising** (totals, averages), **merging**, **searching**.

## Validation and verification
- **validation** — checking that data is **sensible and within allowed limits** (e.g. a score must be between 0 and 100)
- **verification** — checking that data was **entered correctly** from the source (e.g. double entry or proofreading)

## Advantages of electronic data processing
**speed**, **accuracy**, large **storage**, easy **retrieval and sharing**, less paperwork, automation of repeated tasks, better **security** with backups and passwords.`,
          examples: `**Example 1.** Arranging names in alphabetical order is **sorting**.

**Example 2.** A check that rejects a score of 150 out of 100 is **validation**.

**Example 3.** Name the stage where information is produced. *Answer:* **output**.`,
        },
        questions: [
          ["E", "Collecting and manipulating data to produce information is", "data processing", "data deletion", "hardware repair", "word wrap", "It turns data into information."],
          ["E", "Arranging data in a particular order is", "sorting", "merging", "storing", "printing", "E.g. alphabetical order."],
          ["E", "Processing data using a computer is", "electronic data processing", "manual processing", "mechanical processing", "oral processing", "EDP uses computers."],
          ["M", "The first stage of the data processing cycle is", "data collection", "output", "storage", "distribution", "Data must be gathered first."],
          ["M", "Using a calculator to add figures is", "mechanical data processing", "manual data processing", "electronic data processing only", "verification", "Simple machines are used."],
          ["M", "Grouping data into categories is", "classifying", "sorting", "searching", "merging", "Data is put into groups."],
          ["M", "The stage where results are produced as reports or charts is", "output", "input", "collection", "validation", "Output presents information."],
          ["H", "Checking that a score entered is between 0 and 100 is", "validation", "verification", "sorting", "merging", "It checks data is sensible."],
          ["H", "Checking that data was copied correctly from the source document is", "verification", "validation", "classification", "summarising", "It compares with the source."],
          ["H", "An advantage of electronic data processing over manual processing is", "greater speed and accuracy", "more paperwork", "slower results", "no need for data", "Computers are fast and accurate."],
        ],
      },
      {
        week: 6,
        title: "Uses of computers in society",
        subtopics: ["Computers in education and health", "Computers in banking and business", "Computers in government and security", "Computers in communication and entertainment"],
        objectives: ["Describe uses of computers in education and health", "Describe uses of computers in banking and business", "Describe uses of computers in government and security", "Describe uses of computers in communication and entertainment"],
        lesson: {
          title: "Computers Everywhere",
          summary: "Describe how computers are used in different areas of life.",
          minutes: 40,
          notes: `## Education
computer-based tests (**CBT**) such as UTME; e-learning and online classes; result processing; school management software; research on the internet; digital libraries; simulations and educational games.

## Health
patient records; diagnosis equipment (CT scans, MRI, ultrasound); monitoring patients in intensive care; pharmacy stock control; telemedicine (consulting doctors online); research and drug design.

## Banking and finance
**ATMs**, **POS** terminals, **internet and mobile banking**, transfers, **BVN** (Bank Verification Number) records, fraud detection, interest calculation, stock trading.

## Business and industry
accounting and payroll; inventory (stock) control; online shopping (**e-commerce**); advertising; **robots** in manufacturing; computer-aided design (**CAD**).

## Government and security
national identity (**NIN**), voter registration and accreditation, tax records, census, e-passports; **CCTV** monitoring, crime databases, fingerprint identification, military defence systems.

## Communication and media
email, social media, video calls, mobile phones, satellite communication, news websites, publishing.

## Transport
online ticket booking, traffic light control, GPS navigation, air traffic control, vehicle diagnostics.

## Entertainment
music and video streaming, movie production and animation (Nollywood editing), video games, digital photography.

## Agriculture
weather forecasting, farm records, precision farming with sensors and drones, agricultural market information.`,
          examples: `**Example 1.** Give one use of computers in education. *Answer:* **computer-based tests** (CBT).

**Example 2.** How are computers used in banking? *Answer:* **ATMs**, POS and mobile banking.

**Example 3.** What is CAD? *Answer:* **Computer-aided design**.`,
        },
        questions: [
          ["E", "Writing examinations on computers is called", "computer-based testing", "manual testing", "paper testing only", "oral testing", "CBT uses computers."],
          ["E", "A machine that allows customers to withdraw cash at any time is the", "ATM", "CCTV", "GPS", "CAD", "Automated teller machine."],
          ["E", "Buying and selling goods over the internet is", "e-commerce", "e-learning", "e-voting only", "e-mailing", "Electronic commerce."],
          ["M", "CCTV cameras are mainly used for", "security monitoring", "word processing", "cooking", "playing music", "They watch premises."],
          ["M", "Consulting a doctor online through video is", "telemedicine", "telecommuting", "teleshopping", "telegraphing", "Medicine at a distance."],
          ["M", "CAD stands for", "computer-aided design", "central accounting data", "computer audio device", "card access door", "Used by engineers and architects."],
          ["M", "GPS is used mainly for", "navigation and location", "printing documents", "storing files", "typing letters", "Global Positioning System."],
          ["H", "The National Identification Number (NIN) system uses computers for", "storing citizens' identity records", "teaching typing", "playing games", "designing clothes", "It is a government database."],
          ["H", "Robots controlled by computers are widely used in", "manufacturing industries", "only schools", "only churches", "only farms without electricity", "They assemble products."],
          ["H", "Using sensors and drones to monitor crops is part of", "precision farming", "e-banking", "telemedicine", "e-voting", "Computers aid agriculture."],
        ],
      },
    ],
  },
];
