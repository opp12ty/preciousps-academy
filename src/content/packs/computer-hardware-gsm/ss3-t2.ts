import type { TermPlan } from "../types";

/** SS3 Computer Hardware and GSM Repairs, Second and Third Terms — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "GSM Advanced Repairs: Water Damage and Motherboard Faults",
      subtopics: ["Effects of liquid on a phone", "Water-damage treatment", "Common motherboard faults", "Short-circuit tracing and repair"],
      objectives: ["Explain how liquid damages a phone", "Describe the procedure for treating a water-damaged phone", "Identify common motherboard faults", "Trace and repair short circuits"],
      lesson: {
        title: "Board-Level Phone Repair",
        summary: "Rescuing liquid-damaged phones and repairing faults on the motherboard.",
        minutes: 80,
        notes: `## How liquid damages a phone
- **short circuits** — water with dissolved salts conducts between pins while the board is powered
- **corrosion** — electrolysis eats copper pads and component legs (green/white deposits); it **continues after drying**
- **residue** — sugar, salt and minerals left behind keep conducting
- damage to the **display, battery, speakers, microphones and cameras**
Salt water and sugary drinks are worse than clean water. The **liquid contact indicator (LCI)** — a sticker that turns **red** — shows that liquid entered.

## Advice to the customer
switch off at once; **do not charge**; do not press keys; remove SIM and card; do not use a hair dryer or oven; bring it for repair quickly. Rice does not stop corrosion.

## Treatment procedure
1. **Do not power on.** Record the phone's condition.
2. **Disassemble**; **disconnect the battery** first.
3. Remove **metal shields** — liquid hides beneath them.
4. **Inspect** under the microscope for corrosion and burnt parts.
5. **Clean** — brush with **isopropyl alcohol (99%)**; an **ultrasonic cleaner** removes residue under ICs.
6. **Dry** — warm air at low temperature or a drying cabinet.
7. Clean **connectors** and flex cables.
8. **Test for shorts** with the multimeter (diode/continuity mode) on main lines.
9. Power from the **bench supply**; observe current.
10. Replace **damaged components**; repair corroded tracks with jumpers.
11. Reassemble; **test all functions**; recommend battery replacement where the battery was soaked.
12. Advise that liquid damage may cause later faults; **back up data**.

## Common motherboard faults
| Fault | Typical causes |
|---|---|
| **dead phone (no power)** | shorted capacitor on VBAT or VPH; faulty PMIC; dead battery connector; power-key line open |
| **no charging** | port, fuse/OVP IC, charging IC, coil, battery connector, BSI line |
| **fake charging** (icon shows, level does not rise) | charging IC, battery, sense resistor |
| **short circuit / overheating** | leaking capacitor, damaged IC |
| **restarting / freezing** | PMIC, CPU or memory joints, software, battery |
| **no display / no backlight** | connector, backlight driver, filter, display IC |
| **no touch** | touch IC, connector, damaged lines |
| **no network / no service** | antenna contacts, PA, transceiver, baseband, IMEI/software |
| **no sound; mic not working** | codec, amplifier IC, speaker, mic, filters |
| **no Wi-Fi / Bluetooth** | Wi-Fi IC, antenna |
| **camera error** | connector, supply lines, camera module |
| **SIM / memory card not detected** | reader, filters, ESD components |

## Tracing a short circuit
1. Meter in **diode / continuity** mode: red probe to ground, black to the line (or as the manual specifies). A reading of **0.000 or a continuous beep** on VBAT/VPH indicates a short.
2. Compare with a **good board** or known values.
3. Use the **schematic** to list components on the shorted line.
4. **Inject voltage** from the bench supply (about 1–4 V, current limited) into the line; the shorted part **heats** — detect by touch, **freezer spray / frost**, **rosin**, IPA evaporation or **thermal camera**.
5. **Remove the suspect** (usually a small **capacitor**); re-measure; replace with the correct value.
6. If the short remains, lift coils or parts to **isolate sections** of the line.

## Open circuits and missing voltages
With the schematic, follow the line from source to load, measuring voltage at each point; the fault lies between the last correct reading and the first missing one. Repair with a **jumper**.

## Reflow and replacement
cracked BGA joints after a drop: reflow or **reball**; faulty ICs replaced with the correct part number; apply **underfill** considerations.

## Software after hardware repair
update or reflash firmware; calibrate sensors; some parts (display, battery, fingerprint) may be **paired** to the board and need programming.

## Precautions
ESD protection; correct temperatures; shield neighbours; never short the battery; use the correct schematic; test after each step; document readings.`,
        examples: `**Example 1.** Why does corrosion continue after a wet phone dries? *Answer:* **Residues of salts and minerals** remain on the board and keep reacting with the metal.

**Example 2.** What cleaning liquid is used on a liquid-damaged board? *Answer:* **Isopropyl alcohol (IPA)**.

**Example 3.** Which component most often causes a short on the main power line? *Answer:* A **shorted capacitor**.`,
      },
      questions: [
        ["E", "The liquid used to clean corrosion from a phone motherboard is", "isopropyl alcohol", "kerosene", "salt water", "engine oil", "It dissolves residue and evaporates quickly."],
        ["E", "The first thing to disconnect when opening a phone for repair is the", "battery", "camera", "speaker", "display glass", "This removes power from the board."],
        ["E", "The sticker inside a phone that turns red when liquid enters is the", "liquid contact indicator", "warranty seal", "IMEI label", "QC sticker", "It shows evidence of liquid damage."],
        ["M", "The machine that removes residue from under ICs using sound waves in a liquid bath is the", "ultrasonic cleaner", "hot-air station", "preheater", "bench supply", "Vibrations dislodge dirt from hidden areas."],
        ["M", "Green or white deposits on a liquid-damaged board are signs of", "corrosion", "new solder", "thermal paste", "flux only", "Metal has reacted with the liquid."],
        ["M", "A phone that shows the charging icon but whose battery level does not rise has", "fake charging", "fast charging", "wireless charging", "reverse charging", "The charging IC or battery is usually at fault."],
        ["M", "Metal shields are removed from a wet board because", "liquid is trapped beneath them", "they are not needed", "they cause corrosion", "they block the antenna", "Hidden moisture continues to damage the parts."],
        ["H", "A multimeter in diode mode reads 0.000 between the VBAT line and ground. This indicates", "a short circuit", "an open circuit", "a healthy line", "a charged battery", "A near-zero reading means a direct path to ground."],
        ["H", "When voltage is injected into a shorted line, the faulty component is identified because it", "heats up", "emits light", "rings", "vibrates", "The short dissipates the injected power as heat."],
        ["H", "Salt water is more damaging to a phone than clean water because it", "conducts better and corrodes faster", "evaporates faster", "is lighter", "contains no minerals", "Dissolved salts increase conductivity and corrosion."],
      ],
    },
    {
      week: 2,
      title: "Smartphone Technology: Android and iOS Architecture",
      subtopics: ["Hardware architecture of a smartphone", "Android architecture", "iOS architecture", "Comparison and service implications"],
      objectives: ["Describe the hardware architecture of a smartphone", "Outline the layers of Android", "Outline the layers of iOS", "Compare Android and iOS and their implications for repair"],
      lesson: {
        title: "Inside the Smartphone",
        summary: "The hardware and software layers of smartphones and how the two major platforms differ.",
        minutes: 40,
        notes: `## A smartphone
A **smartphone** is a **mobile phone with an advanced operating system, able to run applications and connect to the Internet**.

## Hardware architecture
| Part | Role |
|---|---|
| **SoC (system on chip)** | one chip containing the **CPU**, **GPU**, modem, image processor and more |
| **RAM** | working memory |
| **storage (eMMC / UFS / NVMe)** | operating system, apps and data |
| **PMIC and charging IC** | power management |
| **RF front end** | antennas, PA, filters, transceiver — 2G/3G/4G/5G |
| **display and touch** | LCD (IPS) or **OLED/AMOLED**; capacitive touch |
| **sensors** | accelerometer, gyroscope, proximity, ambient light, magnetometer, fingerprint, face sensors |
| **cameras** | image sensors and lenses |
| **audio** | codec, speakers, microphones |
| **connectivity** | Wi-Fi, Bluetooth, GPS, NFC, USB-C / Lightning |
| **battery** | lithium-ion / lithium-polymer |
| **SIM / eSIM** | subscriber identity |
Processors use the **ARM** architecture — low power.

## Operating system
The **OS** **manages hardware and provides services for apps**.

## Android architecture
Developed by **Google**; based on the **Linux kernel**; **open source** (AOSP); used by many manufacturers.
| Layer | Contents |
|---|---|
| **applications** | system and user apps |
| **application framework (Java/Kotlin APIs)** | activity, window, notification, telephony managers |
| **native libraries and Android Runtime (ART)** | SQLite, media, graphics; ART runs app code |
| **hardware abstraction layer (HAL)** | standard interface between framework and device drivers |
| **Linux kernel** | drivers, memory, process and power management, security |

**Storage partitions:** **bootloader**, **boot** (kernel), **system**, **vendor**, **recovery**, **userdata**, cache.
**Service modes:** **recovery mode** (wipe, update), **fastboot / download mode** (flashing), **safe mode** (third-party apps disabled).
**App format:** APK / AAB; store — Google Play; **sideloading** allowed.
**Security:** app sandbox; permissions; verified boot; encryption; **Factory Reset Protection (FRP)** — after a reset, the previous Google account is required.

## iOS architecture
Developed by **Apple** for iPhone; **closed source**; hardware and software from one maker; based on a **Unix-like (Darwin / XNU) kernel**.
| Layer | Contents |
|---|---|
| **Cocoa Touch** | user-interface frameworks (UIKit, SwiftUI), touch, notifications |
| **Media** | graphics, audio, video |
| **Core Services** | data, networking, location, iCloud |
| **Core OS** | kernel, drivers, security, file system |
**App format:** IPA; store — App Store (strict review).
**Service modes:** **recovery mode**, **DFU mode** (device firmware update) — restore with a computer.
**Security:** **Secure Enclave**; code signing; sandbox; encryption; **Activation Lock** (tied to the Apple ID).

## Comparison
| Feature | Android | iOS |
|---|---|---|
| **developer** | Google and device makers | Apple |
| **source** | open | closed |
| **devices** | many brands and prices | iPhone only |
| **customisation** | high | limited |
| **app sources** | Play Store and others | App Store |
| **updates** | vary by maker | direct from Apple, long support |
| **file access** | open file system | restricted |
| **languages** | Kotlin, Java | Swift, Objective-C |
| **market share in Nigeria** | dominant | smaller, premium |

## Implications for repair
- **Android:** many models and tools; firmware must match the **exact model and region**; flashing with manufacturer tools; FRP must be cleared by the **rightful owner's** account
- **iOS:** restore through a computer; **parts pairing** (display, battery, cameras may show messages unless programmed); Activation Lock cannot be lawfully bypassed
- **back up** before any software work
- **IMEI** identifies the device; never alter it
- root / jailbreak removes protections and voids warranty
- error codes guide diagnosis

## Mobile network generations
**2G** (GSM — voice, SMS), **3G** (data), **4G LTE** (broadband), **5G** (very high speed, low latency).

## Trends
foldable displays; eSIM; fast and wireless charging; on-device AI; multiple cameras; satellite messaging.`,
        examples: `**Example 1.** On which kernel is Android based? *Answer:* The **Linux kernel**.

**Example 2.** What is an SoC? *Answer:* A **system on chip** — one chip combining the CPU, GPU, modem and other functions.

**Example 3.** State one difference between Android and iOS. *Answer:* **Android is open source and used by many makers**; **iOS is closed and runs only on Apple devices**.`,
      },
      questions: [
        ["E", "The operating system developed by Google for mobile devices is", "Android", "iOS", "Windows 11", "macOS", "It runs on phones from many manufacturers."],
        ["E", "iOS is developed by", "Apple", "Google", "Samsung", "Microsoft", "It runs on the iPhone."],
        ["E", "The software that manages a phone's hardware and runs apps is the", "operating system", "charger", "SIM card", "antenna", "Android and iOS are examples."],
        ["M", "Android is based on the", "Linux kernel", "Windows NT kernel", "DOS kernel", "Symbian kernel", "The kernel provides drivers and core services."],
        ["M", "A single chip that combines the CPU, GPU and modem of a phone is the", "SoC", "PMIC", "eMMC", "NFC", "System on chip."],
        ["M", "The Android feature that requires the previous Google account after a factory reset is", "Factory Reset Protection", "Safe mode", "Fastboot", "Developer options", "It deters theft."],
        ["M", "The file format of an Android application package is", "APK", "IPA", "EXE", "DMG", "IPA is the iOS format."],
        ["H", "The Android layer that provides a standard interface between the framework and device drivers is the", "hardware abstraction layer", "application layer", "Cocoa Touch layer", "recovery partition", "It lets the same framework run on different hardware."],
        ["H", "The iPhone mode used to restore firmware when the device will not start normally is", "DFU mode", "safe mode", "fastboot mode", "guest mode", "Device firmware update mode connects the phone to a computer for restoration."],
        ["H", "Smartphone processors are based mainly on the ARM architecture because it", "uses little power", "is the largest in size", "needs mains power", "cannot run apps", "Low power consumption suits battery-powered devices."],
      ],
    },
    {
      week: 3,
      title: "Advanced Computer Maintenance: Servers and Virtualization",
      subtopics: ["Servers and their components", "Server maintenance", "Backup, RAID and power protection", "Virtualization basics"],
      objectives: ["Describe servers and their special components", "Carry out server maintenance tasks", "Explain RAID, backup and power protection", "Explain the basics of virtualization"],
      lesson: {
        title: "Looking after Servers",
        summary: "The machines that serve a network, how they are kept running, and how one machine can host many.",
        minutes: 40,
        notes: `## Servers
A **server** is a **computer that provides services or resources to other computers (clients)** on a network.
**Types by role:** file server; print server; **web server**; mail server; **database server**; application server; **DHCP and DNS** servers; domain controller; backup server.
**Forms:** **tower**, **rack-mounted** (measured in rack units, U), **blade**.

### How servers differ from desktops
| Feature | Server |
|---|---|
| **reliability** | designed to run **24 hours a day** |
| **processors** | multiple multi-core server CPUs |
| **memory** | large; **ECC RAM** (error-correcting) |
| **storage** | many drives; **hot-swappable**; RAID |
| **power** | **redundant power supplies** |
| **network** | several NICs |
| **cooling** | strong fans; air-conditioned room |
| **management** | remote management controller (e.g. IPMI / iLO / iDRAC) |
| **software** | server operating systems — Windows Server, Linux (Ubuntu Server, Red Hat) |

## The server room
cool (about 18–27 °C), dry, clean, **secure (locked; restricted access)**; raised floor or racks; cable management; fire suppression (gas, not water); **UPS** and generator; monitoring of temperature and humidity.

## Server maintenance
### Preventive
- **monitor** — CPU, memory, disk space, temperatures, fans, event logs
- **updates and patches** — operating system, firmware, drivers, antivirus (test first; schedule out of hours)
- **backups** — regular and **tested**
- **cleaning** — dust from filters, fans and vents; check airflow
- **hardware checks** — drive health (S.M.A.R.T.), RAID status, PSU, battery of RAID controller and UPS
- **security** — strong passwords, least privilege, firewall, audit of accounts, physical security
- **documentation** — configuration, changes, maintenance log
- **capacity planning** — add storage or memory before it runs out
### Corrective
replace failed drives (hot-swap; RAID rebuilds), PSUs, fans, memory; restore from backup.
**Downtime** is costly — plan maintenance windows and inform users.

## RAID
**RAID** — **redundant array of independent disks** — combines drives for **speed, fault tolerance or both**.
| Level | Method | Minimum drives | Fault tolerance | Usable capacity |
|---|---|---|---|---|
| **RAID 0** | striping | 2 | **none** | all |
| **RAID 1** | **mirroring** | 2 | one drive | half |
| **RAID 5** | striping with **parity** | 3 | one drive | $(n - 1)$ drives |
| **RAID 6** | double parity | 4 | two drives | $(n - 2)$ drives |
| **RAID 10** | mirror + stripe | 4 | one per mirror | half |
*Four 2 TB drives in RAID 5 give* $(4 - 1) \\times 2 = 6$ TB.
**RAID is not a backup** — it does not protect against deletion, malware or fire.

## Backup
A **backup** is a **copy of data kept for recovery**.
- **full** — everything; **incremental** — changes since the last backup of any kind; **differential** — changes since the last full backup
- **3-2-1 rule:** **3 copies**, on **2 different media**, **1 off-site** (or cloud)
- **test restores** regularly

## Power protection
- **UPS (uninterruptible power supply)** — battery power during outages; time to shut down safely; smooths supply
- **surge protector**; **stabiliser (AVR)**
- generator / inverter / solar
- UPS load: choose a VA rating above the load. *An 800 W load at power factor 0.8 needs* $800 \\div 0.8 = 1000$ VA.

## Virtualization
**Virtualization** is the **creation of virtual (software) versions of computers, so that several operating systems run on one physical machine**.
- a **virtual machine (VM)** behaves like a separate computer with its own OS, virtual CPU, memory, disk and network
- the **hypervisor** creates and manages VMs:
  - **Type 1 (bare-metal)** runs directly on hardware — VMware ESXi, Microsoft Hyper-V, KVM, Proxmox
  - **Type 2 (hosted)** runs on top of an operating system — VirtualBox, VMware Workstation
- **host** — the physical machine; **guest** — the VM
- **snapshot** — a saved state of a VM to which it can be returned

### Advantages
fewer physical servers — saves **cost, space, power and cooling**; **isolation**; easy **backup, cloning and migration**; rapid setup; testing software safely; better use of hardware.
### Disadvantages
host failure affects all its VMs; needs powerful hardware; licensing; performance overhead; complexity.
**Containers** (e.g. Docker) are lighter — they share the host kernel. **Cloud computing** is built on virtualization.

## Requirements for virtualization
CPU with virtualization support (Intel VT-x / AMD-V) enabled in BIOS; ample RAM and storage; 64-bit OS.`,
        examples: `**Example 1.** What is a server? *Answer:* A **computer that provides services or resources to other computers** on a network.

**Example 2.** Three 4 TB drives are set up in RAID 5. Find the usable capacity. *Answer:* $(3 - 1) \\times 4 = \\mathbf{8}$ **TB**.

**Example 3.** What is a hypervisor? *Answer:* **Software that creates and manages virtual machines**.`,
      },
      questions: [
        ["E", "A computer that provides services to other computers on a network is a", "server", "client", "terminal", "router", "Clients request services from it."],
        ["E", "A copy of data kept so that it can be recovered after loss is a", "backup", "driver", "patch", "snapshot of RAM", "It should be stored separately from the original."],
        ["E", "The device that supplies battery power to a server during a power cut is the", "UPS", "NIC", "RAID controller", "KVM switch", "Uninterruptible power supply."],
        ["M", "The RAID level that mirrors data on two drives is", "RAID 1", "RAID 0", "RAID 5", "RAID 6", "Each drive holds an identical copy."],
        ["M", "The RAID level that offers no fault tolerance is", "RAID 0", "RAID 1", "RAID 5", "RAID 10", "Striping alone gives speed but no protection."],
        ["M", "Running several operating systems on one physical machine by means of software is", "virtualization", "defragmentation", "overclocking", "partitioning only", "Each operating system runs in a virtual machine."],
        ["M", "Software that creates and manages virtual machines is a", "hypervisor", "compiler", "firewall", "browser", "It may be bare-metal or hosted."],
        ["H", "Five 2 TB drives are configured as RAID 5. The usable capacity is", "8 TB", "10 TB", "5 TB", "4 TB", "(5 − 1) × 2. Answer: 8 TB."],
        ["H", "Under the 3-2-1 backup rule, the '1' refers to", "one copy kept off-site", "one backup a year", "one type of media", "one user", "An off-site copy survives fire or theft at the main site."],
        ["H", "A server load of 1200 W at a power factor of 0.8 requires a UPS rated at least", "1500 VA", "960 VA", "1200 VA", "2000 VA", "VA = W ÷ power factor."],
      ],
    },
    {
      week: 4,
      title: "Entrepreneurship in ICT: Costing, Pricing and Business Plan",
      subtopics: ["ICT business opportunities", "Costing a repair job", "Pricing strategies", "The business plan"],
      objectives: ["Identify business opportunities in ICT repair", "Calculate the cost of a repair job", "Apply pricing strategies", "Outline a business plan for a repair shop"],
      lesson: {
        title: "Starting a Repair Business",
        summary: "Turning technical skill into a business: what to offer, what to charge and how to plan.",
        minutes: 40,
        notes: `## Entrepreneurship
An **entrepreneur** **identifies a business opportunity, gathers resources and bears the risk** in order to make a profit.

## Opportunities
phone repair shop; computer and laptop repair; **sales of accessories and parts** (chargers, screens, batteries, cases); phone and laptop sales (new, used, refurbished); **software services** (OS installation, flashing, data transfer, data recovery); **networking and CCTV installation**; printer servicing and cartridge refilling; **business centre** (printing, typing, scanning); POS and mobile-money agency; ICT training; maintenance contracts for schools and offices; refurbishing and e-waste collection.

## Starting up
- **skills and certification**
- **market survey** — customers, competitors, prices, location
- **location** — busy, accessible, secure, with power
- **tools and equipment** — soldering and rework stations, multimeter, bench supply, microscope, screwdrivers and opening tools, computer with service software, programmers, spare parts stock, furniture, generator/inverter
- **registration** — CAC business name; tax; local permits
- **capital** — savings, family, co-operatives, microfinance, grants, equipment hire purchase

## Costing a repair job
$$\\text{total cost} = \\text{parts} + \\text{labour} + \\text{overheads}$$
- **parts** — replacement components and consumables
- **labour** — time × hourly rate
- **overheads** — rent, power, internet, tool wear, transport, shared among jobs

### Example — screen replacement
| Item | ₦ |
|---|---|
| screen | 18 000 |
| adhesive and consumables | 500 |
| labour: 1 hour at ₦3 000 | 3 000 |
| overheads | 1 500 |
| **total cost** | **23 000** |
With a **20% mark-up**: profit ₦4 600; **price ₦27 600** (say ₦28 000).

**Overhead per job** $= \\dfrac{\\text{monthly overheads}}{\\text{jobs per month}}$: ₦150 000 ÷ 100 jobs = ₦1 500.

## Pricing strategies
| Strategy | Meaning |
|---|---|
| **cost-plus** | cost + percentage mark-up |
| **competitive** | based on competitors' prices |
| **value-based** | based on the value to the customer (urgent data recovery; board-level repair few can do) |
| **flat-rate** | fixed price per type of job |
| **diagnostic fee** | charge for diagnosis, deducted if the repair proceeds |
| **penetration** | low opening prices to win customers |
| **bundle** | package — e.g. screen + protector + case |

**Factors:** cost of parts; difficulty and time; skill; competition; customer's ability to pay; urgency; warranty offered; the device's value (a repair should cost less than replacement).

## Profit measures
- **mark-up %** = profit ÷ cost × 100
- **margin %** = profit ÷ price × 100
- **break-even jobs** = fixed costs ÷ (average price − average variable cost)
*Fixed costs ₦180 000 a month; average price ₦12 000; variable cost ₦6 000 → 30 jobs to break even.*

## The business plan
| Section | Content |
|---|---|
| **executive summary** | overview |
| **business description** | name, location, services, objectives |
| **market analysis** | customers, competitors, demand |
| **marketing plan** | pricing, promotion, branding |
| **operations plan** | premises, tools, suppliers, process, staff |
| **management** | owner's skills; roles |
| **financial plan** | start-up costs, income forecast, cash flow, break-even, funding |
| **risk analysis** | theft, power, part quality, technology change |
**Uses:** guides the owner; needed for **loans and grants**; measures progress.

## Start-up budget — example
tools and equipment ₦450 000; rent ₦200 000; furniture and fittings ₦100 000; initial parts stock ₦150 000; registration and signage ₦50 000; working capital ₦50 000 → **₦1 000 000**.

## Keys to success
quality work; honesty; fast turnaround; warranty; good records; stock control; customer service; continuous learning; diversification of services.`,
        examples: `**Example 1.** A repair uses parts worth ₦8 000, labour ₦2 500 and overheads ₦1 500. Find the total cost. *Answer:* **₦12 000**.

**Example 2.** A job costing ₦15 000 is charged with a 20% mark-up. Find the price. *Answer:* ₦15 000 × 1.2 = **₦18 000**.

**Example 3.** Monthly fixed costs ₦120 000; average price ₦10 000; variable cost ₦6 000. Find the break-even number of jobs. *Answer:* $120\\,000 \\div 4\\,000 = \\mathbf{30}$.`,
      },
      questions: [
        ["E", "A person who starts a business and bears its risk is an", "entrepreneur", "apprentice", "auditor", "agent of the bank", "The reward for risk is profit."],
        ["E", "The cost of replacement components in a repair is the cost of", "parts", "labour", "overheads", "profit", "Labour covers the technician's time."],
        ["E", "Shop rent and electricity are examples of", "overheads", "parts", "mark-up", "revenue", "They are shared among all jobs."],
        ["M", "A repair has parts of ₦6 000, labour of ₦2 000 and overheads of ₦1 000. Its total cost is", "₦9 000", "₦8 000", "₦7 000", "₦10 000", "Sum of the three elements."],
        ["M", "A job costing ₦20 000 is priced with a 25% mark-up. The price is", "₦25 000", "₦22 500", "₦20 250", "₦45 000", "20 000 × 1.25. Answer: ₦25 000."],
        ["M", "Charging a fixed amount for each type of repair regardless of time taken is", "flat-rate pricing", "value-based pricing", "penetration pricing", "auction pricing", "Customers know the price in advance."],
        ["M", "A shop has monthly overheads of ₦200 000 and does 80 jobs a month. The overhead per job is", "₦2 500", "₦1 600", "₦4 000", "₦250", "200 000 ÷ 80. Answer: ₦2 500."],
        ["H", "A repair costs ₦16 000 and is sold for ₦20 000. The profit margin on price is", "20%", "25%", "80%", "4%", "4 000 ÷ 20 000 × 100."],
        ["H", "A shop has fixed costs of ₦240 000 a month, an average job price of ₦15 000 and a variable cost of ₦9 000 per job. It breaks even at", "40 jobs", "16 jobs", "27 jobs", "60 jobs", "240 000 ÷ (15 000 − 9 000)."],
        ["H", "Charging a high fee for urgent recovery of a customer's important files is an example of", "value-based pricing", "cost-plus pricing", "penetration pricing", "flat-rate pricing", "The price reflects the value of the service to the customer."],
      ],
    },
    {
      week: 6,
      title: "E-Waste Management",
      subtopics: ["Meaning and sources of e-waste", "Hazards of e-waste", "Recycling and safe disposal", "Regulation and the technician's role"],
      objectives: ["Explain e-waste and its sources", "State the hazards of improper disposal", "Describe recycling and safe disposal methods", "Explain regulations and the technician's responsibilities"],
      lesson: {
        title: "Dealing with Electronic Waste",
        summary: "Why discarded electronics are dangerous and how they should be handled.",
        minutes: 40,
        notes: `## Meaning
**E-waste (electronic waste / WEEE)** is **discarded electrical and electronic equipment and its parts**: phones, computers, monitors, televisions, printers, batteries, chargers, cables, circuit boards, cartridges.

## Why it is growing
rapid change in technology; short product life; cheap devices; **importation of used and near-end-of-life equipment**; lack of repair and recycling systems.

## What e-waste contains
### Valuable materials
**gold, silver, copper, palladium**, aluminium, iron, cobalt, lithium, rare-earth metals, plastics and glass — recovering them is called **urban mining**.
### Hazardous substances
| Substance | Found in | Harm |
|---|---|---|
| **lead** | old solder, CRT glass, batteries | brain and nerve damage, especially in children |
| **mercury** | fluorescent backlights, switches | nervous system, kidneys |
| **cadmium** | rechargeable (Ni-Cd) batteries, old components | kidneys, bones; cancer |
| **brominated flame retardants** | plastics, boards | hormone disruption |
| **hexavalent chromium; beryllium; arsenic** | coatings, connectors, semiconductors | cancer, lung disease |
| **lithium** | batteries | **fire and explosion** |
| **PVC** | cable insulation | toxic **dioxins** when burnt |

## Hazards of improper disposal
- **open burning** of cables and boards (to recover copper) — toxic smoke, dioxins
- **dumping** — heavy metals leach into **soil and ground water**
- **acid baths** to extract gold — poisonous fumes and effluent
- health effects on informal recyclers and nearby residents — breathing problems, skin diseases, poisoning
- **battery fires** in refuse dumps and trucks
- **data theft** from discarded storage
- loss of valuable resources

## The waste hierarchy for electronics
**reduce → reuse → repair → refurbish → recycle → recover → dispose**. Repair technicians are central to **extending product life**.

## Management methods
| Method | Description |
|---|---|
| **reduce** | buy durable, repairable, upgradeable devices |
| **reuse / donate** | pass on working equipment |
| **repair and refurbish** | restore to working order; resell |
| **parts harvesting** | recover working parts from dead devices |
| **formal recycling** | dismantling, sorting, shredding and safe recovery of materials in licensed plants |
| **take-back schemes** | manufacturers and sellers collect old products |
| **safe disposal** | engineered hazardous-waste facilities for what cannot be recovered |

### Formal recycling steps
collection → sorting → **data destruction** → manual dismantling → removal of hazardous parts (batteries, mercury lamps) → shredding → separation (magnets, eddy currents, density) → refining of metals → safe treatment of residues.

## Data security
before disposal or resale: **back up**, then **securely erase** — factory reset with encryption, disk-wiping software (overwriting), or **physical destruction** (shredding, drilling) of drives.

## Regulation
- **NESREA** — National Environmental (Electrical/Electronic Sector) Regulations; control of imports of e-waste
- **Extended Producer Responsibility (EPR)** — producers and importers finance collection and recycling; the **E-waste Producer Responsibility Organisation of Nigeria (EPRON)**
- **Basel Convention** — controls the **movement of hazardous wastes across borders**
- **Bamako Convention** — bans import of hazardous waste into Africa
- state waste-management authorities

## The technician's role
1. **repair rather than replace**.
2. keep **separate, labelled bins** — batteries, boards, screens, cables, plastics.
3. store **lithium batteries** safely — terminals taped; fire-proof container; never pierce.
4. hand waste to **registered collectors / recyclers**.
5. never burn or dump.
6. wipe customers' data.
7. educate customers; offer **take-back** of old devices.
8. use PPE when dismantling.

## Opportunities
collection and sorting businesses; refurbishing; parts trade; registered recycling; upcycling projects.`,
        examples: `**Example 1.** Define e-waste. *Answer:* **Discarded electrical and electronic equipment and its parts**.

**Example 2.** Why is burning cables dangerous? *Answer:* It releases **toxic fumes such as dioxins** from the PVC insulation.

**Example 3.** What should be done to a hard drive before disposal? *Answer:* **Securely erase or physically destroy it** to protect data.`,
      },
      questions: [
        ["E", "Discarded phones, computers and their parts are known as", "e-waste", "bio-waste", "sewage", "compost", "Electronic waste."],
        ["E", "A toxic metal found in old solder and CRT glass is", "lead", "gold", "aluminium", "iron", "It damages the brain and nerves."],
        ["E", "Restoring a used device to working order for resale is", "refurbishing", "incinerating", "dumping", "leaching", "It extends the life of the product."],
        ["M", "Recovering valuable metals such as gold and copper from e-waste is called", "urban mining", "strip mining", "quarrying", "dredging", "E-waste is a rich source of metals."],
        ["M", "Burning PVC cable insulation releases", "dioxins", "oxygen", "nitrogen", "water vapour only", "They are highly toxic."],
        ["M", "The Nigerian agency that enforces environmental regulations on e-waste is", "NESREA", "NAFDAC", "NIMC", "NERC", "National Environmental Standards and Regulations Enforcement Agency."],
        ["M", "Discarded lithium batteries are hazardous mainly because they may", "catch fire or explode", "attract insects", "absorb water", "lose colour", "Damage or heat can cause thermal runaway."],
        ["H", "The international agreement controlling the movement of hazardous wastes across borders is the", "Basel Convention", "Geneva Convention", "Kyoto Protocol", "Vienna Convention on Diplomatic Relations", "It covers the export of e-waste."],
        ["H", "A policy that makes manufacturers and importers finance the collection and recycling of their products is", "extended producer responsibility", "planned obsolescence", "net metering", "price control", "It shifts end-of-life costs to producers."],
        ["H", "In the waste hierarchy for electronics, the option that comes before recycling is", "repair", "disposal", "incineration", "landfill", "Keeping a product in use is better than breaking it down."],
      ],
    },
    {
      week: 8,
      title: "ICT Business Marketing",
      subtopics: ["Marketing and the marketing mix", "Branding", "Digital marketing", "Customer retention"],
      objectives: ["Explain marketing and the marketing mix", "Build a brand for a repair business", "Use digital marketing tools", "Apply strategies for retaining customers"],
      lesson: {
        title: "Winning and Keeping Customers",
        summary: "Promoting a repair business, building its name and bringing customers back.",
        minutes: 40,
        notes: `## Marketing
**Marketing** is **identifying customers' needs and satisfying them at a profit**.

### The marketing mix (4 Ps)
| P | For a repair business |
|---|---|
| **product** | services (repairs, installations) and goods (parts, accessories); quality; warranty |
| **price** | fair, competitive, transparent |
| **place** | accessible shop; pick-up and delivery; home or office service |
| **promotion** | making the business known |
For services, add **people, process and physical evidence** (clean shop, uniform, receipts).

### Target market
individuals; students; offices; schools; shops; POS agents — each with different needs.

### Unique selling proposition (USP)
What makes the business **different**: *"screen replaced in 30 minutes"*, *"90-day warranty"*, *"data never touched"*, *"board-level repairs"*.

## Branding
A **brand** is the **name, symbol and reputation that identify a business**.
- memorable **name**; **logo**; colours; slogan
- **signboard**, uniform, branded job cards, receipts, stickers and packaging
- consistent service quality — the real foundation of a brand
- **trademark** registration protects the name and logo
**Benefits:** recognition; trust; customer loyalty; ability to charge fair premium prices; referrals.

## Promotion methods
### Traditional
signboard and banners; flyers and complimentary cards; **word of mouth / referrals**; radio; partnership with phone dealers; demonstrations at schools and markets; discounts and promotions.
### Digital marketing
**Promoting through the internet and electronic devices.**
| Tool | Use |
|---|---|
| **social-media pages** | before-and-after repair photos, short repair videos, tips, offers |
| **messaging apps (business profile, status, broadcast)** | enquiries, updates |
| **online maps / business listing** | location, hours, **reviews** |
| **website** | services, prices, booking, contact |
| **search engine optimisation (SEO)** | being found for "phone repair near me" |
| **paid adverts** | targeted by location |
| **SMS and e-mail** | reminders, promotions |
| **online marketplaces** | selling accessories and refurbished devices |
**Good practice:** clear photographs; honest claims; quick replies; consistent posting; customer testimonials (with permission); never post customers' private data.

### Measuring
reach, engagement, enquiries, **conversion** (enquiries that become jobs).
**Conversion rate** $= \\dfrac{\\text{jobs}}{\\text{enquiries}} \\times 100$: 30 jobs from 120 enquiries = 25%.
**Cost per customer** = advertising cost ÷ customers gained: ₦20 000 ÷ 40 = ₦500.

## Customer retention
**Retention** is **keeping existing customers coming back**. It costs less to keep a customer than to win a new one.
- **quality repairs** done right the first time
- **warranty** honoured without argument
- **fast turnaround** and honest timelines
- **fair, transparent pricing**; no hidden charges
- **follow-up** call or message after the repair
- **customer database** — name, device, jobs done; reminders (battery, service)
- **loyalty rewards** — discount after several jobs; free screen protector
- **referral rewards**
- polite handling of **complaints**
- clean, welcoming shop; waiting area; charging point
- **maintenance contracts** for offices and schools
- value-added tips on device care

**Retention rate** $= \\dfrac{\\text{returning customers}}{\\text{total customers}} \\times 100$.

## Customer service standards
greet within seconds; listen; explain; written estimate; update on progress; test with the customer; thank the customer.

## Handling competition
specialise; improve skill; offer warranty; convenient hours; pick-up service; partnerships; reputation for honesty.

## Ethics in marketing
truthful advertising; no fake reviews; no disparaging competitors; respect privacy; deliver what is promised.`,
        examples: `**Example 1.** List the 4 Ps of marketing. *Answer:* **Product, price, place, promotion**.

**Example 2.** A page received 200 enquiries and 50 became jobs. Find the conversion rate. *Answer:* $\\tfrac{50}{200} \\times 100 = \\mathbf{25\\%}$.

**Example 3.** Give two ways of retaining customers. *Answer:* **Honouring warranties** and **following up after repairs**.`,
      },
      questions: [
        ["E", "Identifying customers' needs and satisfying them at a profit is", "marketing", "soldering", "auditing", "flashing", "It covers product, price, place and promotion."],
        ["E", "The name, symbol and reputation that identify a business form its", "brand", "schematic", "firmware", "overhead", "A strong brand builds trust."],
        ["E", "Keeping existing customers coming back is customer", "retention", "rejection", "rotation", "restriction", "It is cheaper than winning new customers."],
        ["M", "In the marketing mix, a signboard and flyers belong to", "promotion", "product", "price", "place", "They make the business known."],
        ["M", "The feature that makes a business different from its competitors is its", "unique selling proposition", "break-even point", "job card", "IP address", "It gives customers a reason to choose the business."],
        ["M", "Out of 150 enquiries, 45 became repair jobs. The conversion rate is", "30%", "45%", "15%", "333%", "45 ÷ 150 × 100."],
        ["M", "A written promise to correct a repair free of charge if it fails within a stated period is a", "warranty", "discount", "deposit", "tariff", "It builds customer confidence."],
        ["H", "An advert costing ₦30 000 brings in 60 new customers. The cost per customer gained is", "₦500", "₦2 000", "₦180", "₦5 000", "30 000 ÷ 60. Answer: ₦500."],
        ["H", "Out of 400 customers in a year, 140 came back for another job. The retention rate is", "35%", "14%", "65%", "40%", "140 ÷ 400 × 100."],
        ["H", "Posting customers' private photographs to advertise a data-recovery service is wrong because it", "violates their privacy", "costs too much", "reduces reach", "needs a website", "Customers' data must never be disclosed."],
      ],
    },
    {
      week: 9,
      title: "Financial Management: Record Keeping and Profit Analysis",
      subtopics: ["Importance of financial records", "Books and documents", "Profit and loss", "Stock control and cash management"],
      objectives: ["Explain the importance of keeping financial records", "Identify the books and documents of a small business", "Prepare a simple profit and loss statement", "Explain stock control and cash management"],
      lesson: {
        title: "Managing the Money",
        summary: "Recording income and expenses and working out whether the business is making a profit.",
        minutes: 40,
        notes: `## Financial management
**Financial management** is **planning, recording and controlling the money of a business**.

## Why keep records?
show **profit or loss**; track **cash**; monitor **debtors and creditors**; control **stock**; support **loan** applications; needed for **tax**; guide decisions; detect theft and errors; separate business from personal money.

## Source documents
| Document | Purpose |
|---|---|
| **receipt** | evidence of payment received |
| **invoice** | bill for goods or services supplied on credit |
| **job card** | details and charges of a repair |
| **quotation / estimate** | price offered before the job |
| **purchase order; delivery note** | ordering and receiving stock |
| **payment voucher** | evidence of payment made |
| **bank statement; transfer alerts** | bank transactions |

## Books of account
- **cash book** — all money received and paid (cash and bank)
- **sales book / daily sales record**
- **purchases book**
- **expenses book**
- **debtors' record** — customers who owe
- **creditors' record** — suppliers owed
- **stock (inventory) record**
- **petty cash book** — small expenses
Spreadsheets and **accounting / POS apps** make recording and reporting faster.

### A simple cash book
| Date | Details | In (₦) | Out (₦) | Balance (₦) |
|---|---|---|---|---|
| 1 Mar | balance b/f | | | 50 000 |
| 1 Mar | screen repair | 28 000 | | 78 000 |
| 2 Mar | parts purchased | | 40 000 | 38 000 |
| 3 Mar | charging-port repair | 8 000 | | 46 000 |

## Profit and loss
| | ₦ |
|---|---|
| **sales (revenue)** | 900 000 |
| less **cost of sales** (parts used) | 400 000 |
| **gross profit** | 500 000 |
| less **expenses** (rent 60 000; wages 150 000; power 40 000; internet 10 000; depreciation 20 000; others 20 000) | 300 000 |
| **net profit** | **200 000** |

- **gross profit** = sales − cost of sales
- **net profit** = gross profit − expenses
- **gross profit margin** $= \\dfrac{\\text{gross profit}}{\\text{sales}} \\times 100 = 55.6\\%$
- **net profit margin** $= \\dfrac{\\text{net profit}}{\\text{sales}} \\times 100 = 22.2\\%$
- **cost of sales** = opening stock + purchases − closing stock

## Balance sheet ideas
**assets** (what the business owns — tools, stock, cash, debtors) = **liabilities** (what it owes) + **capital** (owner's stake).

## Depreciation
Tools lose value with use. Straight line: (cost − scrap value) ÷ useful life. *A rework station costing ₦120 000 with scrap value ₦20 000 over 5 years: ₦20 000 a year.*

## Stock control
- record parts **received, used and remaining**
- **re-order level** — the quantity at which more is ordered
- **FIFO** for items that age (batteries, adhesives)
- regular **stock-taking**; investigate differences
- avoid over-stocking slow parts — money tied up; models change quickly
- secure storage; label by model

## Cash management
- **separate business and personal** accounts
- bank takings regularly; reconcile with the cash book
- **cash-flow forecast** — expected receipts and payments month by month
- control **credit** to customers; collect deposits for expensive parts
- keep an **emergency reserve**
- pay yourself a fixed **salary**; reinvest part of the profit
- **budget** for tools, rent and taxes

## Budget
An **estimate of expected income and expenditure** for a period; compare actual results with the budget (**variance**) and correct.

## Taxes and levies
tax identification number; applicable business taxes and local levies; keep records for assessment.

## Analysing performance
compare months; identify the **most profitable services**; watch expense ratios; calculate **return on investment**:
$$\\text{ROI} = \\frac{\\text{net profit}}{\\text{capital invested}} \\times 100$$
*Annual net profit ₦1 200 000 on capital of ₦2 000 000 gives 60%.*

## Common mistakes
no records; mixing personal and business money; under-pricing; excessive credit; ignoring depreciation; overspending on stock.`,
        examples: `**Example 1.** Sales are ₦500 000 and cost of sales ₦220 000. Find the gross profit. *Answer:* **₦280 000**.

**Example 2.** Gross profit is ₦280 000 and expenses are ₦180 000. Find the net profit. *Answer:* **₦100 000**.

**Example 3.** Opening stock ₦60 000; purchases ₦200 000; closing stock ₦40 000. Find the cost of sales. *Answer:* ₦60 000 + ₦200 000 − ₦40 000 = **₦220 000**.`,
      },
      questions: [
        ["E", "The book that records all money received and paid out is the", "cash book", "job card", "price list", "service manual", "It shows the balance of cash."],
        ["E", "A document given to a customer as evidence of payment is a", "receipt", "quotation", "purchase order", "schematic", "It confirms the amount paid."],
        ["E", "What a business owns — tools, stock and cash — are its", "assets", "liabilities", "expenses", "debts", "Liabilities are what it owes."],
        ["M", "Sales minus cost of sales gives the", "gross profit", "net profit", "capital", "turnover", "Expenses are then deducted to give net profit."],
        ["M", "A shop has sales of ₦800 000 and cost of sales of ₦350 000. Its gross profit is", "₦450 000", "₦1 150 000", "₦350 000", "₦400 000", "800 000 − 350 000."],
        ["M", "Customers who owe the business money are its", "debtors", "creditors", "suppliers", "shareholders", "Creditors are those the business owes."],
        ["M", "The stock quantity at which a new order should be placed is the", "re-order level", "break-even point", "closing stock", "mark-up", "It prevents running out of parts."],
        ["H", "Opening stock is ₦80 000, purchases ₦300 000 and closing stock ₦50 000. The cost of sales is", "₦330 000", "₦430 000", "₦270 000", "₦380 000", "80 000 + 300 000 − 50 000."],
        ["H", "A business has sales of ₦1 000 000 and a net profit of ₦180 000. Its net profit margin is", "18%", "82%", "5.6%", "1.8%", "180 000 ÷ 1 000 000 × 100."],
        ["H", "A microscope costing ₦250 000 has a scrap value of ₦50 000 and a useful life of 4 years. Annual straight-line depreciation is", "₦50 000", "₦62 500", "₦75 000", "₦200 000", "(250 000 − 50 000) ÷ 4."],
      ],
    },
    {
      week: 10,
      title: "Project Planning for the Final-Year Project",
      subtopics: ["Choosing a project", "Project planning tools", "The project proposal", "Managing time, cost and risk"],
      objectives: ["Choose a suitable final-year project", "Use simple project planning tools", "Write a project proposal", "Plan the time, cost and risks of a project"],
      lesson: {
        title: "Planning the Final Project",
        summary: "Selecting a hardware or GSM repair project and planning it properly before work begins.",
        minutes: 40,
        notes: `## What is a project?
A **project** is a **temporary piece of work with a definite goal, start and finish**, using limited time, money and resources.

## Choosing a project
Criteria: **relevance** to the trade; solves a **real problem**; **feasible** with available skill, tools and money; can be finished **in time**; safe; shows a range of skills; original or an improvement.

### Suitable projects
- restoring a **dead phone** (board-level fault) with full documentation
- repairing a **liquid-damaged** phone
- **refurbishing a faulty laptop** — diagnosis, part replacement, OS installation
- assembling a **desktop computer** from components
- building and configuring a **small network** for a classroom (cabling, switch, router, Wi-Fi, shared printer)
- constructing a **power bank**, phone charger or **bench power supply**
- building a **solar phone-charging station**
- setting up a **file server / virtual machine lab**
- producing a **fault-finding guide** or database for a phone model
- a **data-recovery** case study
- an **e-waste sorting and parts-harvesting** scheme for the school

## The project life cycle
**initiation → planning → execution → monitoring and control → closure**.

## Planning tools
- **objectives** — **SMART**: specific, measurable, achievable, relevant, time-bound
- **work breakdown structure (WBS)** — dividing the project into smaller tasks
- **Gantt chart** — a **bar chart showing each task against time**
- **bill of materials** and **budget**
- **flow chart / block diagram** of the system or procedure
- **risk register**
- **logbook** — dated record of work done

### Example Gantt outline (6 weeks)
| Task | Week |
|---|---|
| proposal and approval | 1 |
| collecting tools and materials | 2 |
| diagnosis / design | 2–3 |
| repair / construction | 3–4 |
| testing and correction | 5 |
| report and presentation | 5–6 |

## The project proposal
A **proposal** is a **written plan submitted for approval before work starts**.
| Section | Content |
|---|---|
| **title** | clear and specific |
| **introduction / background** | context of the problem |
| **statement of the problem** | what is wrong or needed |
| **aim and objectives** | what will be achieved |
| **scope and limitations** | what is and is not covered |
| **significance** | who benefits |
| **methodology** | how the work will be done; tools and materials |
| **work plan** | timeline |
| **budget** | costs |
| **expected results** | what success looks like |
| **references** | sources |
The supervisor **reviews and approves** (or asks for changes).

## Budget — example
replacement parts ₦25 000; consumables (solder, flux, IPA) ₦4 000; cables and connectors ₦6 000; printing and binding ₦5 000; **contingency (10%)** ₦4 000 → **₦44 000**.

## Time management
set **milestones**; start early; allow time for parts to arrive and for testing; review progress weekly with the supervisor.

## Risk management
| Risk | Response |
|---|---|
| part unavailable or wrong | order early; identify alternatives |
| further damage during repair | practise on scrap boards; follow procedure |
| loss of data | back up first |
| power failure | plan around supply; backup power |
| time overrun | buffer in the schedule |
| safety hazards | PPE; ESD protection; supervision |
| cost overrun | contingency |

## Team projects
assign **roles**; share tasks fairly; meet regularly; record each member's contribution.

## Ethics
original work; acknowledge sources (**no plagiarism**); honest results, including failures; owner's consent for any device used.

## Preparing for execution
gather the service manual and schematic; set up a safe workstation; photograph the device before and at each stage; keep the logbook daily.`,
        examples: `**Example 1.** What is a Gantt chart? *Answer:* A **bar chart showing project tasks against time**.

**Example 2.** What does SMART stand for? *Answer:* **Specific, measurable, achievable, relevant, time-bound**.

**Example 3.** Materials for a project cost ₦30 000 and a 10% contingency is added. Find the budget. *Answer:* ₦30 000 + ₦3 000 = **₦33 000**.`,
      },
      questions: [
        ["E", "A temporary piece of work with a definite goal, start and finish is a", "project", "routine", "habit", "contract of sale", "It uses limited time and resources."],
        ["E", "A written plan submitted for approval before a project begins is a", "proposal", "receipt", "logbook entry", "warranty", "The supervisor reviews it."],
        ["E", "The dated record of work done on a project is kept in a", "logbook", "price list", "visitors' book", "cash book", "It shows progress day by day."],
        ["M", "A bar chart that shows project tasks against time is a", "Gantt chart", "pie chart", "flow chart", "circuit diagram", "It is used for scheduling."],
        ["M", "Dividing a project into smaller, manageable tasks produces a", "work breakdown structure", "balance sheet", "block diagram of a phone", "risk register", "Each task can then be planned and assigned."],
        ["M", "In SMART objectives, the letter T stands for", "time-bound", "technical", "tested", "total", "The objective has a deadline."],
        ["M", "An extra amount added to a project budget for unforeseen costs is the", "contingency", "deposit", "discount", "mark-down", "It is often about 10%."],
        ["H", "A project's materials cost ₦40 000 and a contingency of 10% is added. The total budget is", "₦44 000", "₦40 400", "₦50 000", "₦36 000", "40 000 × 1.10. Answer: ₦44 000."],
        ["H", "The section of a proposal that states what the project will and will not cover is the", "scope and limitations", "budget", "references", "title", "It sets the boundaries of the work."],
        ["H", "Presenting another person's work as one's own in a project report is", "plagiarism", "referencing", "paraphrasing with credit", "collaboration", "Sources must be acknowledged."],
      ],
    },
  ],
};

export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 2,
      title: "Final-Year Project Execution and Practical Demonstration",
      subtopics: ["Executing the project", "Testing and troubleshooting", "Documentation during the work", "Practical demonstration"],
      objectives: ["Carry out a hardware or GSM repair project in an orderly way", "Test and troubleshoot the work", "Document each stage", "Demonstrate the finished project"],
      lesson: {
        title: "Carrying Out the Project",
        summary: "Doing the work methodically, proving that it works and showing it to others.",
        minutes: 80,
        notes: `## Before starting
approved **proposal**; tools and materials ready; **service manual / schematic** for the exact model; clean, **ESD-safe** workstation; safety equipment; logbook and camera; owner's consent and **data backup**.

## Stages of execution — a repair project
1. **Receive and record** the device — model, serial/IMEI, condition, reported fault; photograph.
2. **Verify the fault**.
3. **Preliminary checks** — charger, battery, visible damage, software state.
4. **Disassemble** — correct tools; keep screws in a **labelled tray** (screw map); disconnect battery first.
5. **Diagnose** — visual inspection under magnification; measurements (voltages, diode-mode values, current on the bench supply); compare with schematic values.
6. **State the diagnosis** and plan the repair.
7. **Repair** — clean; replace components; jumper; reflow; reinstall software.
8. **Test at each step** — do not close the device before testing.
9. **Reassemble** — all connectors, shields, screws, seals.
10. **Final test** — every function.
11. **Record** results and hand over.

## Stages — a construction or installation project
design and drawings → materials → build in **modules** → test each module → integrate → test the whole → enclosure and labelling → user instructions.
*Network project:* plan and addressing scheme → run and terminate cables → test each cable → configure switch, router and Wi-Fi → connect clients → test connectivity (ping), sharing and Internet → document.

## Testing
### Functional test — phone
power on/off; charging (current drawn); display and touch; network, calls and data; Wi-Fi, Bluetooth, GPS; speakers and microphones; cameras and flash; sensors; buttons; vibration; SIM and card; battery performance.
### Functional test — computer
POST; boot; all ports; display; keyboard and pointing device; audio; network; storage health; temperatures under load; battery and charging (laptop).
### Recording results
| Test | Expected | Observed | Pass / fail |
|---|---|---|---|
| charging current | about 1–2 A | 1.6 A | pass |
| VBAT line (diode mode) | 0.4–0.6 | 0.512 | pass |

### Stress and soak tests
run the device for an extended period to reveal **intermittent** faults.

## Troubleshooting during the project
if a repair does not work: return to the **last known-good step**; re-check measurements; examine joints; verify the part; consult the schematic; seek the supervisor's advice. **Record failures** — they are part of the learning and of the report.

## Documentation during the work
- **logbook** — date, activity, readings, problems, solutions, time spent
- **photographs** — before, during, after; microscope images of the fault
- **measurements table**
- **parts and cost record**
- **diagrams** — block diagram, section of schematic, wiring or network diagram

## Safety and good practice
ESD strap; correct temperatures; ventilation; eye protection; battery safety; tidy bench; no rushing; supervision for mains-powered work.

## Practical demonstration
A **demonstration** **shows the examiner or audience that the project works and how it was done**.
### Preparing
check the device or system beforehand; charge batteries; prepare tools and **backup** (spare cable, second device); rehearse; prepare a short explanation.
### Conducting
1. state the **problem** and objective
2. show the **fault evidence** (photographs, readings)
3. explain the **diagnosis** using the block diagram or schematic
4. describe or perform the **key repair step** safely
5. **show the working result** — run the tests
6. state the **cost**, challenges and lessons
7. answer questions

### What assessors look for
understanding of principles; correct and safe use of tools; systematic method; quality of workmanship (clean joints, neat assembly); working result; documentation; ability to explain; time management.

## Evaluating your own project
Were the objectives met? What worked and what did not? Was it within budget and time? What would be improved? What skills were gained?`,
        examples: `**Example 1.** Why are photographs taken during a project? *Answer:* They provide **evidence of each stage** for the report and help in reassembly.

**Example 2.** Why should a device be tested before it is fully closed? *Answer:* So that **faults can be corrected without dismantling it again**.

**Example 3.** What is a soak test? *Answer:* **Running the device for an extended period** to reveal intermittent faults.`,
      },
      questions: [
        ["E", "Before a customer's device is used for a project, the technician should obtain the owner's", "consent", "password to every app", "bank details", "charger only", "The owner must agree to the work."],
        ["E", "During disassembly, screws are best kept in a", "labelled tray", "pocket", "pile on the bench", "dustbin", "A screw map avoids misplacement and damage."],
        ["E", "Showing an audience that a completed project works is a", "demonstration", "proposal", "quotation", "diagnosis", "It includes running tests in front of the assessors."],
        ["M", "In a test record, the column that states whether the observed value is acceptable is headed", "pass / fail", "date", "serial number", "price", "It gives the verdict on each test."],
        ["M", "Running a repaired device for a long period to expose intermittent faults is a", "soak test", "diode test", "patch test", "visual inspection", "Some faults appear only after time or heat."],
        ["M", "After each stage of a repair, the technician should", "test before going further", "seal the device", "discard the old part unrecorded", "delete the logbook", "Testing at each step locates problems early."],
        ["M", "A network project is tested for connectivity between computers using the command", "ping", "format", "chkdsk", "defrag", "It checks whether another host can be reached."],
        ["H", "When a repair attempt fails during a project, the correct response is to", "return to the last known-good step and re-check", "hide the failure", "replace every component at random", "abandon the logbook", "A systematic review finds the error."],
        ["H", "Building a system in modules and testing each before joining them mainly helps to", "locate faults easily", "increase cost", "avoid documentation", "shorten the report", "A fault is confined to the module being tested."],
        ["H", "Failures met during a project should be recorded because they", "show the method followed and the lessons learnt", "lower the marks automatically", "are irrelevant", "replace the results section", "Honest records demonstrate understanding."],
      ],
    },
    {
      week: 4,
      title: "Project Report Writing",
      subtopics: ["Structure of a project report", "Diagrams and data presentation", "Analysis and discussion", "References and presentation"],
      objectives: ["Outline the structure of a project report", "Present diagrams, tables and results correctly", "Analyse and discuss results", "Cite references and present the report neatly"],
      lesson: {
        title: "Writing Up the Project",
        summary: "Documenting a technical project clearly so that another technician could follow it.",
        minutes: 80,
        notes: `## Purpose
A **project report** is a **formal written account of what was done, how, with what results and what was learnt**. It is evidence of the work and a guide for anyone repeating it.

## Structure
### Preliminary pages
**title page** (title, name, number, school, date); **certification / approval page**; **dedication** (optional); **acknowledgement**; **abstract** — a summary of about 150–250 words covering problem, method, results and conclusion; **table of contents**; lists of figures and tables.

### Chapters
| Chapter | Content |
|---|---|
| **1. Introduction** | background; statement of the problem; aim and objectives; scope; significance; definition of terms |
| **2. Literature review / theory** | principles involved — e.g. the charging circuit, power sequence, networking concepts; related work |
| **3. Methodology** | tools and materials; block diagram; procedure step by step; diagnostic method; safety measures |
| **4. Results and discussion** | observations, measurements, test results; analysis; problems and solutions; cost analysis |
| **5. Conclusion and recommendations** | summary of achievements; limitations; suggestions |

### End matter
**references**; **appendices** — schematics, data sheets, logbook extracts, photographs, bill of materials.

## Writing style
clear, concise and **formal**; **past tense** and impersonal ("the board was cleaned"); correct **technical terms**; define abbreviations at first use (PMIC — power management integrated circuit); **SI units**; logical order; numbered headings (1.1, 1.2); consistent font and spacing; proof-read.

## Diagrams
- **block diagram** — sections and signal flow
- **circuit diagram** — the relevant section, with the faulty part marked
- **flow chart** — the troubleshooting procedure: **oval** (start/stop), **rectangle** (process), **diamond** (decision), **parallelogram** (input/output), arrows
- **network / wiring diagram**
- **photographs** — labelled and referred to in the text
Every figure has a **number and caption below** (Figure 3.1: Block diagram of the charging section); every table a **number and title above** (Table 4.1: Voltage measurements).

## Presenting data
### Tables
| Test point | Expected (V) | Measured before (V) | Measured after (V) |
|---|---|---|---|
| VBUS | 5.0 | 5.1 | 5.1 |
| VBAT | 3.7–4.2 | 0.0 | 3.9 |
### Graphs
line graph (battery voltage against charging time); bar chart (cost breakdown).

## Analysis
Explain **what the results show** and **why**:
- compare **measured with expected** values
- **percentage error** $= \\dfrac{|\\text{measured} - \\text{expected}|}{\\text{expected}} \\times 100$ — expected 5.0 V, measured 4.8 V → 4%
- identify the **root cause**, not just the symptom
- account for problems and how they were solved
- **cost analysis:** total cost of repair against the cost of replacement; saving achieved
*Repair cost ₦18 000; replacement phone ₦120 000: saving ₦102 000 — 85%.*

## Conclusion and recommendations
state whether the **objectives were achieved**; key findings; limitations; advice for users (prevention), for future students and for the workshop.

## References
List every source used — books, manuals, websites, videos — in a **consistent style**: author, year, title, publisher or web address and date accessed. Cite them in the text. **Plagiarism** — copying without acknowledgement — is an offence.

## Appendices
material too detailed for the main text.

## Presentation
typed; spell-checked; pages numbered; bound; soft copy backed up.

## Common faults in reports
vague title; no clear objectives; copied theory unrelated to the work; missing procedure details; results without units; no discussion; unlabelled pictures; no references; poor grammar.

## Checklist
Is the problem clear? Could someone repeat the work from the method? Are all results recorded with units? Are figures and tables numbered and cited? Does the conclusion answer the objectives?`,
        examples: `**Example 1.** What is an abstract? *Answer:* A **short summary of the whole report** — problem, method, results and conclusion.

**Example 2.** Which flow-chart symbol represents a decision? *Answer:* A **diamond**.

**Example 3.** Expected voltage 3.3 V; measured 3.0 V. Find the percentage error. *Answer:* $\\tfrac{0.3}{3.3} \\times 100 \\approx \\mathbf{9.1\\%}$.`,
      },
      questions: [
        ["E", "A short summary of an entire project report is the", "abstract", "appendix", "dedication", "caption", "It appears near the beginning."],
        ["E", "The chapter that describes the tools, materials and procedure used is the", "methodology", "introduction", "conclusion", "literature review", "It should allow the work to be repeated."],
        ["E", "A list of the sources consulted in writing a report is the", "references", "abstract", "table of contents", "acknowledgement", "It gives credit to authors."],
        ["M", "In a flow chart, a decision is represented by a", "diamond", "rectangle", "oval", "parallelogram", "It has two or more outgoing paths."],
        ["M", "The caption of a figure in a report is placed", "below the figure", "above the figure", "in the appendix only", "on the title page", "Table titles go above the table."],
        ["M", "Project reports are normally written in the", "past tense", "future tense", "imperative mood", "first-person slang", "They describe work already done."],
        ["M", "Material that is too detailed for the main text, such as full schematics, is placed in the", "appendix", "abstract", "introduction", "conclusion", "It supports the report without interrupting it."],
        ["H", "A supply rail expected to be 5.0 V measures 4.6 V. The percentage error is", "8%", "0.4%", "4.6%", "92%", "0.4 ÷ 5.0 × 100."],
        ["H", "A phone was repaired for ₦20 000 instead of buying a replacement at ₦100 000. The percentage saving is", "80%", "20%", "25%", "500%", "80 000 ÷ 100 000 × 100."],
        ["H", "A good discussion of results should identify the", "root cause of the fault", "name of the school", "price of the logbook", "colour of the casing", "It explains why the symptom occurred, not merely what was seen."],
      ],
    },
    {
      week: 6,
      title: "Presentation Skills: Oral Defence and Use of Slides",
      subtopics: ["Planning a presentation", "Designing slides", "Delivery", "Handling questions in an oral defence"],
      objectives: ["Plan the content of a project presentation", "Design clear slides", "Deliver a presentation confidently", "Answer questions in an oral defence"],
      lesson: {
        title: "Defending Your Project",
        summary: "Explaining technical work clearly to an audience and answering their questions.",
        minutes: 40,
        notes: `## Purpose
An **oral defence** is a **presentation of the project to a panel, followed by questions**, to show that the student **did the work and understands it**.

## Planning
- know the **audience** (teachers, examiners, classmates) and the **time allowed** (often 10–15 minutes)
- decide the **key message**
- **structure:**
  1. title and introduction
  2. problem and objectives
  3. theory in brief (block diagram)
  4. method — tools and procedure
  5. results — measurements, before and after
  6. cost and challenges
  7. conclusion and recommendations
  8. demonstration and questions
- about **one slide per minute** — 10 minutes ≈ 8–10 slides

## Designing slides
Presentation software: PowerPoint, Google Slides, Impress, Keynote.
### Rules
- **one idea per slide**
- **few words** — about six lines of six words (the "6 × 6" guide); key points, not paragraphs
- **large, readable font** — titles about 36–44 pt; text not less than about 24 pt; plain typefaces
- **high contrast** — dark text on light background or the reverse
- **consistent** layout, colours and fonts (use a template)
- **pictures and diagrams** — clear, labelled photographs of the fault and repair; block diagrams; graphs instead of long tables
- limit animation and sound effects
- number the slides; include your name and title
- check spelling

### Typical slides
title → problem → objectives → block diagram → tools → procedure (with photographs) → results table or graph → cost → challenges → conclusion → thank you / questions.

## Other visual aids
the **actual device or model**; charts; printed handouts; live demonstration; short video of the repair.

## Delivery
### Before
**rehearse** aloud and time yourself; check the projector, laptop, cables and file (carry a **backup** on a flash drive and as PDF); arrive early; dress neatly.
### Voice
clear, audible, moderate pace; vary the tone; pause at key points; avoid fillers ("um", "you know").
### Body language
stand upright; face the **audience, not the screen**; **eye contact**; natural gestures; do not block the screen; do not read the slides word for word.
### Managing nerves
prepare thoroughly; breathe slowly; start with a memorised opening; remember that you know the project best.
### Content
explain **technical terms** simply; use **signposts** ("first… next… finally"); keep to **time**; end with a clear conclusion.

## Group presentations
share sections; introduce each speaker; smooth hand-overs; every member must be able to answer questions.

## Handling questions
1. **listen** to the whole question
2. **pause** and think; ask for clarification if needed
3. answer **directly, briefly and honestly**
4. refer to your **evidence** — readings, photographs, schematic
5. if you do not know, **say so** and suggest how you would find out — never bluff
6. stay **calm and polite**, even when challenged
7. thank the questioner

### Likely questions
*Why did you choose this project? How did you identify the fault? What does this component do? Why that soldering temperature? What safety measures did you take? What was the most difficult part? How much did it cost? What would you improve? How do you know the repair will last?*

## Assessment criteria
content and understanding; organisation; quality of slides; delivery; demonstration; response to questions; time-keeping; teamwork.

## After the defence
note the panel's comments; correct the report; submit the final copy.`,
        examples: `**Example 1.** How many slides suit a 10-minute presentation? *Answer:* About **8–10 slides** — roughly one per minute.

**Example 2.** What should a presenter do when asked a question he cannot answer? *Answer:* **Admit it honestly** and say how the answer could be found.

**Example 3.** Give two rules for good slides. *Answer:* **Few words in large font** and **one idea per slide**.`,
      },
      questions: [
        ["E", "Presenting a project to a panel and answering their questions is an", "oral defence", "open-book test", "aptitude test", "interview for a loan", "It shows that the student understands the work."],
        ["E", "Which of these is presentation software?", "PowerPoint", "Notepad", "Paint", "Calculator", "It is used to prepare slides."],
        ["E", "During a presentation, the speaker should face the", "audience", "screen", "floor", "wall", "Eye contact keeps the audience engaged."],
        ["M", "A good slide contains", "a few key points in large font", "long paragraphs in small font", "many animations", "several unrelated ideas", "Slides support the speaker; they are not a script."],
        ["M", "The best way to make sure a presentation fits the time allowed is to", "rehearse and time it", "speak very fast", "skip the conclusion", "add more slides", "Practice reveals where to cut or expand."],
        ["M", "Before the presentation, the student should save a backup of the slides on", "a flash drive", "the projector screen", "the title page", "the whiteboard", "Equipment or files may fail."],
        ["M", "Results that compare measurements before and after a repair are best shown on a slide as a", "simple table or graph", "long paragraph", "list of references", "block of code", "Visual presentation is quickly understood."],
        ["H", "When asked a question he cannot answer, a presenter should", "admit it and say how he would find out", "invent an answer", "ignore the questioner", "argue with the panel", "Honesty earns more respect than bluffing."],
        ["H", "For a 12-minute presentation, a suitable number of slides is about", "10 to 12", "40 to 50", "1 or 2", "100", "Roughly one slide per minute."],
        ["H", "In a group defence, every member must be able to answer questions because", "the panel assesses each member's understanding", "it shortens the presentation", "only one person prepared the slides", "questions are optional", "Each member is examined on the whole project."],
      ],
    },
    {
      week: 9,
      title: "Revision of Practical Works and Examination Preparation",
      subtopics: ["Computer hardware practicals", "GSM repair practicals", "Networking and software practicals", "Key theory areas and examination technique"],
      objectives: ["Carry out the standard computer hardware practicals", "Carry out the standard GSM repair practicals", "Carry out networking and software tasks", "Recall key theory and apply good examination technique"],
      lesson: {
        title: "Hands-On Review and the Final Examination",
        summary: "The practical tasks and theory most likely to be examined, and how to approach the papers.",
        minutes: 80,
        notes: `## Computer hardware practicals
### Identifying components
**motherboard** (CPU socket, RAM slots, chipset, expansion slots — PCIe, SATA and M.2 ports, CMOS battery, front-panel header); **CPU** and heat sink/fan; **RAM** (DDR3/DDR4/DDR5; SODIMM for laptops); **storage** — HDD, SSD (SATA, NVMe); **PSU** (24-pin ATX, 4/8-pin CPU, SATA and PCIe power); graphics card; NIC; optical drive; ports — USB, HDMI, VGA, DisplayPort, RJ45, audio.

### Assembling a desktop
ESD strap → fit CPU (align the triangle), apply **thermal paste**, fit cooler → fit RAM (match the notch; click) → mount motherboard on **standoffs** → fit PSU → drives → cards → connect power and data cables → front-panel connectors → check → power on → enter BIOS.

### Installing an operating system
create bootable USB → set **boot order** → boot → partition and format → install → **drivers** → updates → antivirus → user accounts.

### Maintenance
dust cleaning; thermal paste renewal; disk clean-up; updates; backups; malware removal.

### POST and beep codes
continuous beeps — RAM; one long, two or three short — display adapter (varies with the BIOS maker); consult the manual.

## GSM repair practicals
### Tools
precision screwdrivers, spudger and opening picks, tweezers, suction cup, heat mat or hot air for adhesive, soldering and rework stations, multimeter, bench supply, microscope, brush and IPA.

### Tasks
- **disassembly and reassembly** in the correct order; battery disconnected first
- **identifying parts** — display, battery, charging port/sub-board, speakers, microphones, cameras, vibrator, antennas, SIM reader, PMIC, CPU, PA, charging IC
- **replacement** of screen, battery, charging port, speaker, microphone
- **measurements** — battery voltage (about **3.7 V nominal; 4.2 V fully charged**); charger output (5 V); continuity of a flex or track; diode-mode check for a short
- **soldering** — a jumper; an SMD resistor or capacitor; a charging connector
- **software** — factory reset, firmware flashing, backup and restore
- **fault finding** from a given symptom

### Battery safety
never pry with metal against the cell; replace swollen batteries; correct charger.

## Networking practicals
- make a **straight-through cable** (T568B both ends) and test it
- assign **IP addresses**; check with **ipconfig**; **ping**
- configure a **wireless router** — SSID, WPA2/WPA3 password
- share a folder or printer
- identify cables and devices

## Software and utilities
device manager; disk management; task manager; antivirus; backup; command prompt basics.

## Key theory areas
1. **basic electronics** — Ohm's law ($V = IR$), power ($P = VI$), series and parallel; resistor colour code; diodes, transistors, capacitors, ICs.
2. **number systems** — binary, octal, hexadecimal; bits and bytes (1 byte = 8 bits; 1 KB = 1024 bytes).
3. **computer organisation** — input, processing, storage, output; memory types (RAM volatile; ROM non-volatile).
4. **mobile technology** — GSM, generations, SIM, IMEI, phone sections.
5. **diagnostic tools** — multimeter, oscilloscope, bench supply.
6. **schematics** — symbols, designators, net names.
7. **soldering** — tools, solder, flux, faults.
8. **networking** — devices, IP addressing, cabling, wireless security.
9. **servers, RAID, backup, virtualization**.
10. **ethics, safety, data privacy, e-waste**.
11. **business** — costing, pricing, records, marketing.

### Worked reminders
- two 10 Ω resistors: series 20 Ω; parallel 5 Ω
- a 5 V, 2 A charger delivers $P = 5 \\times 2 = 10$ W
- binary 1010 = decimal 10; decimal 255 = hexadecimal FF
- a 4000 mAh battery supplying 500 mA lasts about $4000 \\div 500 = 8$ hours

## Examination technique
### Theory
read all questions; plan the time; **define**, **list**, **explain** as asked; draw neat **labelled diagrams**; show **working** with units.
### Objective
eliminate wrong options; watch NOT and EXCEPT; answer all.
### Practical
read the task; **safety and ESD first**; lay out tools; work systematically; record readings with units in a table; state observations and conclusion; leave the bench tidy; manage time.

## Final preparation
practise each task until confident; revise from diagrams, tables and past practical tasks; rest well.`,
        examples: `**Example 1.** What is applied between the CPU and its heat sink? *Answer:* **Thermal paste**, to improve heat transfer.

**Example 2.** A 3000 mAh battery supplies a steady 600 mA. How long does it last? *Answer:* $3000 \\div 600 = \\mathbf{5}$ **hours**.

**Example 3.** Convert binary 1101 to decimal. *Answer:* $8 + 4 + 0 + 1 = \\mathbf{13}$.`,
      },
      questions: [
        ["E", "The main circuit board of a computer is the", "motherboard", "power supply", "hard disk", "heat sink", "All other components connect to it."],
        ["E", "The memory that loses its contents when power is switched off is", "RAM", "ROM", "SSD", "flash drive", "It is volatile."],
        ["E", "The unique 15-digit number that identifies a mobile phone is the", "IMEI", "PIN", "PUK", "SSID", "It is displayed by dialling *#06#."],
        ["M", "The substance applied between a processor and its heat sink is", "thermal paste", "flux", "solder paste", "grease remover", "It fills air gaps and conducts heat."],
        ["M", "The voltage of a fully charged single-cell lithium phone battery is about", "4.2 V", "1.5 V", "9 V", "12 V", "Its nominal voltage is about 3.7 V."],
        ["M", "The Windows command used to display a computer's IP settings is", "ipconfig", "chkdsk", "format", "tasklist", "It shows the address, mask and gateway."],
        ["M", "The binary number 1010 is equal to the decimal number", "10", "5", "12", "8", "8 + 0 + 2 + 0. Answer: 10."],
        ["H", "Two 12 Ω resistors connected in parallel have a combined resistance of", "6 Ω", "24 Ω", "12 Ω", "144 Ω", "Equal resistors in parallel give half the value of one."],
        ["H", "A 5000 mAh battery supplying a steady current of 1 A will last about", "5 hours", "50 hours", "0.5 hour", "500 hours", "5000 mAh ÷ 1000 mA."],
        ["H", "The decimal number 255 written in hexadecimal is", "FF", "F0", "11", "100", "15 × 16 + 15 = 255."],
      ],
    },
  ],
};
