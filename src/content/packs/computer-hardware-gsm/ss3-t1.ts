import type { TermPlan } from "../types";

/** SS3 Computer Hardware and GSM Repairs, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 2,
      title: "Advanced Diagnostic Tools",
      subtopics: ["The digital multimeter", "The oscilloscope", "The DC bench power supply", "Software diagnostic tools"],
      objectives: ["Use a multimeter for advanced fault finding", "Explain the use of an oscilloscope", "Diagnose faults with a DC power supply", "Identify software tools used in diagnosing phones and computers"],
      lesson: {
        title: "Instruments for Finding Faults",
        summary: "The test equipment and software a technician uses to locate faults quickly and accurately.",
        minutes: 40,
        notes: `## Why diagnostic tools?
**Diagnosis** is **finding the cause of a fault before attempting repair**. Good tools replace guesswork, save time and prevent damage.

## The digital multimeter (DMM)
| Function | Use in repair |
|---|---|
| **DC voltage** | battery and supply rails (e.g. 3.7–4.2 V battery; 1.8 V, 3.3 V, 5 V, 12 V rails) |
| **AC voltage** | mains and adapter input |
| **resistance (Ω)** | resistors, coils, fuses |
| **continuity (buzzer)** | broken tracks, cables, switches, fuses |
| **diode mode** | diodes; **short-circuit tracing**; reading line values to ground on a board (typical 0.3–0.7) — 0.000 means a short; "OL" means open |
| **capacitance** | capacitors |
| **current (A/mA)** | in series, for consumption |

**Rule:** measure **voltage with power on**, **resistance, continuity and diode with power off**. Black probe to COM (ground).

## The oscilloscope
An **oscilloscope** **displays a voltage signal as a graph against time (a waveform)**.
- **vertical axis:** voltage — set by **volts/division**
- **horizontal axis:** time — set by **time/division**
- **trigger** — holds a repeating waveform steady
- **probe** — ×1 / ×10; ground clip to board ground

**What it shows that a multimeter cannot:** the **shape, frequency, amplitude, noise and timing** of signals.
**Uses:** checking **clock/crystal signals** (e.g. 32.768 kHz, 26 MHz), data lines, PWM backlight signals, audio, **ripple** on supply rails, charger output.

**Reading a waveform:** amplitude = divisions × volts/div; **period** $T$ = divisions × time/div; **frequency** $f = \\dfrac{1}{T}$.
*A wave occupying 4 horizontal divisions at 0.5 ms/div has* $T = 2$ ms *and* $f = 500$ Hz.

## The DC bench power supply
A **regulated, adjustable source of DC voltage with current limiting and a current display**.
**Uses:**
- powering a phone or board **in place of the battery** (set about 3.8–4.2 V for phones; 19 V for many laptops)
- **reading current consumption** to diagnose:

| Ammeter behaviour (phone) | Likely meaning |
|---|---|
| **0.00 A on pressing power** | no power-on: open circuit, power key, PMIC fault |
| **current before pressing power (leakage)** | **short circuit** or leaking component |
| **very high current at once (supply limits)** | dead short on the main line |
| **rises then stops at a low value** | boot stuck: CPU, memory, software |
| **normal rise and fluctuation** | board booting — look at display, etc. |

- **finding a shorted component:** inject a low voltage with limited current into the shorted line and find the part that heats — by touch, **freezer spray**, **rosin smoke** or a **thermal camera**
- **current limiting** protects the board

## Other hardware tools
**USB tester / ammeter** (charging voltage and current); **battery tester / activator**; **microscope**; **thermal camera**; **POST card** (shows error codes on desktop boards); **power-supply (PSU) tester**; **loopback plugs**; **cable tester** (network); **logic probe**; ESD mat and wrist strap.

## Software diagnostic tools
### Computers
- **POST** (power-on self-test) **beep codes** and messages
- **BIOS/UEFI diagnostics**
- **Device Manager**, Event Viewer, Task Manager, Resource Monitor
- **memory test** tools; **disk health (S.M.A.R.T.)** and surface scans; **chkdsk**, **sfc**
- temperature and stress-test utilities
- **antivirus / anti-malware** scanners
- bootable diagnostic USB drives

### Phones
- built-in **test (service) menus** — screen, touch, sensors, speaker, camera
- **IMEI check** (*#06#)
- battery-health and hardware-test apps
- **flashing tools and service boxes/dongles** — install firmware, repair software faults
- computer suites from manufacturers; **ADB** for Android
- **schematic and board-view software** — locate components and test points

## Care and safety
correct range and function; never measure resistance on a live circuit; do not exceed the rating; set current limit before connecting; observe polarity; keep probes sharp and clean; calibrate; discharge capacitors; wear an **anti-static wrist strap**.`,
        examples: `**Example 1.** What does an oscilloscope display? *Answer:* **A voltage signal as a waveform against time**.

**Example 2.** A waveform has a period of 4 ms. Find its frequency. *Answer:* $f = \\tfrac{1}{0.004} = \\mathbf{250}$ **Hz**.

**Example 3.** A phone draws current from the bench supply before the power key is pressed. What does this suggest? *Answer:* A **short circuit or leaking component** on the board.`,
      },
      questions: [
        ["E", "Finding the cause of a fault before attempting repair is", "diagnosis", "soldering", "flashing", "formatting", "It prevents guesswork."],
        ["E", "The instrument that displays a signal as a waveform is the", "oscilloscope", "multimeter", "soldering iron", "hot-air station", "It plots voltage against time."],
        ["E", "The multimeter setting that sounds a buzzer when a path is complete is", "continuity", "capacitance", "AC voltage", "frequency", "It is used to trace broken tracks and cables."],
        ["M", "Resistance and continuity should be measured with the circuit", "switched off", "switched on", "on charge", "under full load", "A live circuit gives false readings and may damage the meter."],
        ["M", "On an oscilloscope, the horizontal scale is set by the", "time/division control", "volts/division control", "probe ground clip", "intensity knob", "It determines how much time each division represents."],
        ["M", "A bench power supply is preferred to a battery in diagnosis mainly because it", "shows the current being drawn", "is lighter", "needs no voltage setting", "stores more energy", "The ammeter reading reveals the type of fault."],
        ["M", "The test a computer carries out on its hardware each time it is switched on is", "POST", "DNS", "DHCP", "FTP", "Power-on self-test reports faults by beeps or messages."],
        ["H", "A signal completes one cycle in 2 ms. Its frequency is", "500 Hz", "2 Hz", "200 Hz", "50 Hz", "f = 1 ÷ 0.002. Answer: 500 Hz."],
        ["H", "A phone connected to a bench supply shows 0.00 A when the power key is pressed. The likely fault is", "an open circuit in the power-on path", "a dead short on the main line", "normal booting", "a faulty speaker", "No current means the circuit is not being switched on."],
        ["H", "A shorted component can be located by injecting limited current and using", "a thermal camera to find the hot part", "a spirit level", "a crimping tool", "a cable tester", "The shorted part heats up."],
      ],
    },
    {
      week: 3,
      title: "GSM Schematic Diagrams",
      subtopics: ["Meaning and types of diagrams", "Symbols and component designators", "Reading signal and power lines", "Using schematics in fault finding"],
      objectives: ["Distinguish block, schematic and layout diagrams", "Identify symbols and designators", "Trace power and signal lines on a schematic", "Use schematics and board views to locate faults"],
      lesson: {
        title: "Reading the Map of a Phone",
        summary: "How to read the circuit diagrams that show how a phone's parts are connected.",
        minutes: 40,
        notes: `## Diagrams
| Diagram | Shows |
|---|---|
| **block diagram** | the **main sections** and how they relate — overview |
| **schematic (circuit) diagram** | **every component and its electrical connections**, using symbols |
| **layout / board view (PCB diagram)** | the **physical position** of each component on the board |
| **service manual** | all of these, with test points and procedures |

A technician reads the **schematic** to understand the circuit and the **board view** to find the part.

## Block diagram of a phone
- **power section:** battery connector → **PMIC (power management IC)** → regulators → supply rails; **charging IC**
- **baseband / logic:** **CPU (application processor)**, **RAM**, **flash memory (eMMC/UFS)**
- **RF section:** antenna → antenna switch → filters → **power amplifier (PA)** → **RF transceiver**
- **audio:** audio codec, microphone, earpiece, loudspeaker
- **user interface:** display, touch, backlight, keys, vibrator, SIM, memory card
- **connectivity:** Wi-Fi/Bluetooth, GPS, NFC, USB
- **sensors and cameras**

## Symbols
| Component | Symbol idea |
|---|---|
| **resistor** | zigzag or rectangle |
| **capacitor** | two parallel plates; polarised type marked + |
| **inductor / coil** | loops |
| **diode; LED; zener** | triangle and bar; with arrows; with bent bar |
| **transistor (BJT; MOSFET)** | three terminals — base/collector/emitter; gate/drain/source |
| **IC** | rectangle with numbered pins |
| **crystal oscillator** | rectangle between two plates |
| **fuse** | rectangle or S-curve on a line |
| **ground** | downward lines or triangle |
| **battery** | long and short lines |
| **switch; connector** | break in line; row of numbered pins |
| **antenna** | fork |
| **microphone; speaker; vibrator (motor)** | their own symbols |

## Designators
| Letter | Component |
|---|---|
| **R** | resistor |
| **C** | capacitor |
| **L** | inductor (also **FB** — ferrite bead) |
| **D** | diode (**ZD** zener) |
| **Q** (or T) | transistor |
| **U** (or IC) | integrated circuit |
| **J / CN / CON** | connector |
| **F** | fuse |
| **X / Y** | crystal |
| **SW** | switch |
| **TP** | test point |
| **BT** | battery |
| **ANT** | antenna |

## Values and units
resistors in **Ω, kΩ, MΩ** (a 0 Ω resistor is a link/jumper); capacitors in **pF, nF, µF**; inductors in nH, µH; **NC** — not connected/not fitted.

## Net names (signal labels)
Lines are named instead of being drawn across pages; a name appearing in two places is **connected**.
| Label | Meaning |
|---|---|
| **VBAT / VBATT** | battery voltage line |
| **VBUS** | 5 V from the USB charger |
| **VPH_PWR / VSYS** | main system power |
| **VDD, VCC, VREG, LDO** | regulated supply rails (1.8 V, 2.8 V, 3.3 V) |
| **GND** | ground |
| **PWR_KEY / PWRON** | power-button signal |
| **RESET** | reset signal |
| **CLK** | clock |
| **SDA, SCL (I²C)** | serial data and clock lines |
| **TX, RX** | transmit and receive |
| **BSI / BTEMP** | battery identification and temperature |
| **SIM_CLK, SIM_DATA, SIM_RST, VSIM** | SIM lines |
| **D+ / D−** | USB data |
| **EN** | enable |

## Reading a schematic
1. find the **section** from the contents or block diagram
2. locate the **connector or IC**
3. follow the **line** through components; note **net names** and page references
4. note **voltages** and **test points**
5. use the **board view** to find the physical parts
**Signal flow** is generally left to right; power from the top; ground at the bottom.

## Using schematics in fault finding
*No charging:* charger port **J** → VBUS line → fuse / protection (OVP) IC → **charging IC** → coil → battery connector. Measure VBUS (5 V) at each point; the stage where it disappears holds the fault.
*No display light:* backlight driver IC, boost coil, diode, connector pins.
*No SIM:* SIM connector → filter resistors/ESD → baseband; check VSIM.
**Board-view software** shows which pads share a line, allowing continuity checks and **jumper** planning.

## Good practice
use the diagram for the **exact model and board version**; compare with a **known-good board**; record readings.`,
        examples: `**Example 1.** What does the designator U denote? *Answer:* An **integrated circuit**.

**Example 2.** What is VBUS? *Answer:* The **5 V line from the USB charger**.

**Example 3.** Distinguish a schematic from a board view. *Answer:* A **schematic** shows electrical connections with symbols; a **board view** shows the **physical position** of components.`,
      },
      questions: [
        ["E", "A diagram that shows every component and its electrical connections using symbols is a", "schematic diagram", "block diagram", "flow chart", "pie chart", "It is also called a circuit diagram."],
        ["E", "On a schematic, the designator R stands for", "resistor", "relay only", "regulator", "receiver", "C stands for capacitor."],
        ["E", "The label GND on a schematic means", "ground", "gain node", "generator", "guard diode", "It is the common reference point."],
        ["M", "The designator used for an integrated circuit is", "U", "L", "D", "F", "Some diagrams use IC."],
        ["M", "The net name for the battery voltage line is", "VBAT", "VBUS", "VSIM", "CLK", "VBUS is the charger line."],
        ["M", "The diagram that shows the physical position of components on the board is the", "board view", "block diagram", "truth table", "timing diagram", "It helps the technician to find the part."],
        ["M", "The IC that produces the various supply voltages in a phone is the", "PMIC", "PA", "codec", "antenna switch", "Power management integrated circuit."],
        ["H", "Two points on different pages of a schematic that carry the same net name are", "electrically connected", "unrelated", "always grounded", "always at 5 V", "Net names replace long drawn lines."],
        ["H", "A resistor marked 0 Ω on a schematic acts as a", "link or jumper", "fuse rated at 0 A", "capacitor", "voltage regulator", "It simply joins two points."],
        ["H", "In tracing a no-charging fault with a schematic, the technician measures 5 V along the charging line to find", "the stage at which the voltage disappears", "the IMEI number", "the ringtone setting", "the screen resolution", "The fault lies between the last good reading and the first missing one."],
      ],
    },
    {
      week: 4,
      title: "Micro Soldering Techniques",
      subtopics: ["Tools and materials", "Soldering small components", "IC replacement and reballing", "Jumper techniques"],
      objectives: ["Identify micro-soldering tools and materials", "Solder and desolder surface-mount components", "Describe IC replacement and reballing", "Repair broken tracks with jumpers"],
      lesson: {
        title: "Soldering under the Microscope",
        summary: "Working on tiny surface-mount parts: tools, temperatures and techniques.",
        minutes: 80,
        notes: `## Micro soldering
**Micro soldering** is the **soldering of very small surface-mount components on dense circuit boards**, usually under magnification.

## Tools and materials
| Item | Use |
|---|---|
| **temperature-controlled soldering iron / station** with fine tips (conical, bevel, knife) | soldering small joints |
| **hot-air rework station** | removing and fitting SMD parts and ICs |
| **preheater** | warms the board from below; reduces thermal stress |
| **microscope** (stereo) or magnifier | seeing the work |
| **fine tweezers** (straight and curved, anti-static) | handling parts |
| **solder wire** (thin, 0.3–0.5 mm); **solder paste** | joining |
| **flux** (no-clean paste or liquid) | cleans oxide; helps solder flow |
| **desoldering wick (braid)**; solder sucker | removing solder |
| **jumper wire** (enamelled copper, about 0.02–0.1 mm) | repairing tracks |
| **UV solder mask and UV lamp** | insulating and fixing repairs |
| **BGA stencils and solder balls** | reballing |
| **isopropyl alcohol (IPA)** and brush | cleaning |
| **board holder (jig)**; **Kapton (heat-resistant) tape**; aluminium foil | holding; shielding nearby parts |
| **ESD mat and wrist strap**; fume extractor | safety |

## Solder
- **leaded** (tin–lead, e.g. 63/37): melts about **183 °C**; easy to work
- **lead-free** (tin–silver–copper): melts about **217–227 °C**; used in modern devices
- **low-melt alloy** is mixed in to ease removal of parts
Typical settings: iron about **300–350 °C**; hot air about **320–400 °C** with moderate airflow — adjust to the board.

## Good soldering
1. **clean** the pads; apply **flux**
2. **tin** the tip; keep it clean (brass wool)
3. heat **pad and lead together**; feed solder; remove solder, then iron — 2–3 seconds
4. inspect: a good joint is **shiny, smooth and concave**
**Faults:** **cold (dry) joint** — dull, grainy, unreliable; **solder bridge** — unwanted link between pins; lifted pad from overheating; too much or too little solder.

## Surface-mount components
chip resistors and capacitors (sizes 0402, 0201, 01005), diodes, transistors, coils; IC packages — **SOP/QFP** (legs on the sides), **QFN** (pads underneath, edge contacts), **BGA** (**ball grid array** — solder balls underneath).

### Removing and fitting small parts
flux → hot air (or iron on each end) → lift with tweezers → clean pads with wick → place new part → heat until solder flows and the part **self-centres**.

### Drag soldering
for fine-pitch legged ICs: flux the pins; draw a loaded tip along the row; remove bridges with wick.

## IC replacement (BGA)
1. **protect** nearby components with Kapton tape; remove shields
2. **preheat** the board
3. apply flux round the IC; heat evenly with hot air, moving in circles
4. when the solder melts, **lift** the IC with tweezers — never force (pads tear)
5. remove **underfill** (glue) carefully if present
6. **clean the pads** with iron and wick; wipe with IPA
7. **reball** the IC (or use a new one)
8. flux the pads; **align** the IC to the outline marks
9. reflow with hot air until the IC **settles**; nudge gently — it should spring back
10. cool naturally; clean; test

### Reballing
**Reballing** is **replacing the solder balls under a BGA IC**: clean the IC → fit the **stencil** → spread **solder paste** (or place balls) → heat to form balls → remove stencil → inspect.
**Reflow** — reheating to re-melt existing joints (a temporary fix for cracked joints).

## Jumper techniques
A **jumper** is a **wire soldered in to replace a broken track or missing pad**.
1. identify the break and the **two points to be joined** from the schematic / board view
2. confirm with the continuity test
3. **scrape** the solder mask to expose copper if joining to a track
4. tin both points; flux
5. solder fine **enamelled wire** from point to point by the shortest safe route
6. test continuity
7. secure and insulate with **UV solder mask**; cure with UV light
For a torn BGA pad: expose the via or run a jumper from the pad position to the connected point before refitting the IC.

## Safety and care
ESD protection; ventilation — flux fumes; safety glasses; never touch the iron tip; switch off after use; **disconnect the battery first**; avoid overheating — it lifts pads, damages ICs and warps boards; wash hands after handling leaded solder.`,
        examples: `**Example 1.** What is the purpose of flux? *Answer:* It **removes oxide and helps solder to flow** and wet the joint.

**Example 2.** What is a BGA package? *Answer:* A **ball grid array** — an IC with **solder balls underneath** instead of legs.

**Example 3.** What is a jumper? *Answer:* A **wire soldered in to replace a broken track or pad**.`,
      },
      questions: [
        ["E", "The substance applied to a joint to remove oxide and help solder flow is", "flux", "grease", "thermal paste", "thinner", "It gives clean, reliable joints."],
        ["E", "The tool used to remove surface-mount ICs with a stream of heated air is the", "hot-air rework station", "glue gun", "multimeter", "ultrasonic cleaner", "It melts all the joints together."],
        ["E", "A wire soldered in to replace a broken track is a", "jumper", "fuse", "stencil", "shield", "It restores the connection."],
        ["M", "A dull, grainy and unreliable solder joint is a", "cold joint", "solder bridge", "BGA", "via", "It results from insufficient heat or movement while cooling."],
        ["M", "An unwanted solder connection between two adjacent pins is a", "solder bridge", "dry joint", "jumper", "pad", "It is removed with flux and desoldering wick."],
        ["M", "Excess solder is removed from pads using", "desoldering wick", "Kapton tape", "UV mask", "a stencil", "The copper braid soaks up molten solder."],
        ["M", "An IC package with solder balls on its underside is a", "BGA", "DIP", "SOP", "TO-92", "Ball grid array."],
        ["H", "Replacing the solder balls under a BGA chip is called", "reballing", "reflashing", "rebooting", "rerouting", "A stencil and solder paste or balls are used."],
        ["H", "Lead-free solder differs from leaded solder in that it", "melts at a higher temperature", "melts at a lower temperature", "contains more lead", "needs no flux", "It melts at about 217–227 °C against about 183 °C."],
        ["H", "Nearby components are covered with heat-resistant tape during hot-air work in order to", "protect them from heat and being blown away", "improve conductivity", "hold the battery", "strengthen the board", "The tape shields parts that are not being worked on."],
      ],
    },
    {
      week: 6,
      title: "Advanced Computer Networking",
      subtopics: ["Network devices and topologies", "IP addressing", "Network cabling", "Wireless setup and troubleshooting"],
      objectives: ["Identify network devices and topologies", "Explain IP addressing and subnet masks", "Terminate and test network cables", "Set up and secure a wireless network and troubleshoot connections"],
      lesson: {
        title: "Building and Fixing Networks",
        summary: "Addressing, cabling and wireless configuration for small networks.",
        minutes: 80,
        notes: `## Networks
A **network** is **two or more devices connected to share data and resources**. Types: **PAN**, **LAN** (one building), **MAN**, **WAN** (wide area; the Internet is the largest).
**Topologies:** **star** (all devices to a central switch — commonest), bus, ring, mesh, tree.

## Devices
| Device | Function |
|---|---|
| **network interface card (NIC)** | connects a device to the network; has a unique **MAC address** |
| **switch** | connects devices in a LAN; forwards frames by MAC address |
| **router** | connects **different networks** (LAN to Internet); forwards packets by **IP address** |
| **access point (AP)** | provides **Wi-Fi** connection to the wired network |
| **modem** | converts signals between the ISP line and the network |
| **hub** | old device; repeats data to all ports |
| **repeater / range extender** | regenerates a weak signal |
| **firewall** | filters traffic for security |
| **server** | provides services (files, web, DHCP) |

## IP addressing
An **IP address** is a **unique logical address identifying a device on a network**.
### IPv4
**32 bits**, written as four decimal numbers (**octets**) 0–255, e.g. **192.168.1.10**.
| Class | First octet | Default subnet mask |
|---|---|---|
| A | 1–126 | 255.0.0.0 |
| B | 128–191 | 255.255.0.0 |
| C | 192–223 | 255.255.255.0 |
**Private ranges:** 10.0.0.0–10.255.255.255; 172.16.0.0–172.31.255.255; **192.168.0.0–192.168.255.255**. **Loopback:** 127.0.0.1. **APIPA:** 169.254.x.x — the device **failed to get an address from DHCP**.

### Subnet mask
Shows which part of the address is the **network** and which the **host**. With 255.255.255.0 (**/24**), 192.168.1.10 is in network **192.168.1.0**; hosts .1 to .254 (**254 usable**); broadcast .255.
Usable hosts $= 2^{h} - 2$, where $h$ is the number of host bits: /24 → $2^8 - 2 = 254$; /26 → $2^6 - 2 = 62$.

### Other settings
- **default gateway** — the router's address, the exit to other networks
- **DNS server** — translates **names to IP addresses**
- **DHCP** — **assigns IP settings automatically**; **static** addresses are typed in manually (servers, printers)
- **IPv6** — **128 bits**, hexadecimal, e.g. 2001:db8::1
- **MAC address** — 48-bit physical address, e.g. 00:1A:2B:3C:4D:5E

## Cabling
| Cable | Notes |
|---|---|
| **twisted pair (UTP/STP)** | Cat5e (1 Gbps), Cat6 (1–10 Gbps); **RJ45** connector; maximum run **100 m** |
| **coaxial** | cable TV and older networks |
| **fibre optic** | light signals; very high speed; long distance; immune to interference |

### Terminating UTP
Standards **T568A** and **T568B**. **T568B order:** white-orange, orange, white-green, blue, white-blue, green, white-brown, brown.
- **straight-through** — same standard at both ends: **different devices** (PC to switch)
- **crossover** — A at one end, B at the other: **similar devices** (PC to PC, switch to switch) — modern ports auto-sense
**Steps:** strip about 2.5 cm of jacket → untwist and arrange → trim evenly → insert fully into the RJ45 → **crimp** → test with a **cable tester**.
**Tools:** crimping tool, stripper, punch-down tool (for patch panels and wall jacks), cable tester, tone generator.

## Wireless setup
1. connect the router to the modem / ISP line (WAN port) and power on
2. log in to the admin page (e.g. 192.168.1.1)
3. **change the default admin password**
4. set the **SSID** (network name)
5. choose **WPA2 or WPA3** security with a strong passphrase (never WEP or open)
6. select band — **2.4 GHz** (longer range, slower, more interference) or **5 GHz** (faster, shorter range) — and a clear **channel** (1, 6 or 11 on 2.4 GHz)
7. enable **DHCP**; set address range
8. place the router **centrally, high up**, away from walls, metal and microwaves
9. update firmware; disable WPS; consider a guest network

## Troubleshooting
| Command / check | Purpose |
|---|---|
| link lights; cables | physical connection |
| **ipconfig** (Windows) / ifconfig, ip | view IP settings |
| **ping** | test reachability — ping 127.0.0.1 (own stack), gateway, then an outside address |
| **tracert / traceroute** | path to a destination |
| **nslookup** | DNS test |
| **ipconfig /release, /renew** | fresh DHCP address |

**Common faults:** unplugged or bad cable; 169.254 address (DHCP failure); wrong gateway or DNS; IP conflict; weak signal; wrong password; ISP outage. Work **from the physical layer upward**.`,
        examples: `**Example 1.** What is the function of DHCP? *Answer:* It **assigns IP addresses and settings to devices automatically**.

**Example 2.** How many usable hosts are in a /24 network? *Answer:* $2^8 - 2 = \\mathbf{254}$.

**Example 3.** A PC shows the address 169.254.10.5. What is wrong? *Answer:* It **failed to obtain an address from the DHCP server**.`,
      },
      questions: [
        ["E", "A device that connects different networks and forwards packets by IP address is a", "router", "hub", "repeater", "NIC", "It links a LAN to the Internet."],
        ["E", "The connector used on twisted-pair network cables is the", "RJ45", "RJ11", "BNC", "HDMI", "It has eight contacts."],
        ["E", "The name of a wireless network is its", "SSID", "MAC", "DNS", "PIN", "Service set identifier."],
        ["M", "An IPv4 address is made up of", "32 bits", "48 bits", "64 bits", "128 bits", "It is written as four octets."],
        ["M", "The service that translates domain names into IP addresses is", "DNS", "DHCP", "NAT", "FTP", "Domain name system."],
        ["M", "The maximum recommended length of a Cat6 UTP cable run is", "100 m", "10 m", "500 m", "1 km", "Beyond this the signal weakens."],
        ["M", "Which of these is a private IP address?", "192.168.1.20", "8.8.8.8", "172.50.1.1", "200.1.1.1", "The 192.168.x.x range is reserved for private networks."],
        ["H", "The number of usable host addresses in a /26 network is", "62", "64", "30", "126", "2⁶ − 2. Answer: 62."],
        ["H", "A cable wired to T568A at one end and T568B at the other is a", "crossover cable", "straight-through cable", "rollover cable", "fibre patch cord", "It connects similar devices directly."],
        ["H", "The most secure setting among these for a home wireless network is", "WPA3", "WEP", "open network", "WPS only", "It provides the strongest encryption."],
      ],
    },
    {
      week: 8,
      title: "Repair Case Studies",
      subtopics: ["A systematic approach to repair", "Phone repair scenarios", "Computer repair scenarios", "Documentation of repairs"],
      objectives: ["Apply a systematic troubleshooting method", "Analyse real-life phone repair scenarios", "Analyse real-life computer repair scenarios", "Document a repair job"],
      lesson: {
        title: "Real Faults and How They Were Solved",
        summary: "Worked scenarios that show the reasoning from symptom to cure.",
        minutes: 80,
        notes: `## A systematic method
1. **Gather information** — ask the customer: what happened, when, any drop, liquid or previous repair?
2. **Verify the fault** — reproduce it.
3. **Back up data** if possible; obtain consent.
4. **Check the obvious** — charger, cable, battery, settings.
5. **Identify the likely cause** — hardware or software? which section?
6. **Test the theory** — measure; substitute known-good parts.
7. **Plan and carry out the repair**.
8. **Test fully** — all functions.
9. **Document** and advise the customer on prevention.
**Principles:** simplest and cheapest checks first; **one change at a time**; software before hardware where symptoms allow.

## Phone scenarios
### Case 1 — "Not charging"
*Checks:* another charger and cable → clean the **charging port** (lint) → inspect port pins → measure **VBUS 5 V** at the port and after the fuse / protection IC → battery voltage → charging IC.
*Finding:* bent, corroded port. *Repair:* replace the charging port (or sub-board). *Lesson:* most charging faults are the cable, port or battery.

### Case 2 — "Dead after falling in water"
*Do not power on or charge.* Disconnect the battery → dismantle → remove shields → clean corrosion with **IPA** and brush (ultrasonic cleaner) → dry → inspect under microscope → check for **shorts** in diode mode → bench supply.
*Finding:* shorted capacitor on the main power line; replaced. *Lesson:* speed matters; rice does not remove corrosion.

### Case 3 — "Screen blank but phone rings"
*Checks:* torch test for a faint image (backlight fault) → reseat display connector → try a known-good display → check backlight circuit (driver IC, coil, diode).
*Finding:* damaged display after a drop; replaced.

### Case 4 — "Stuck on logo / keeps restarting"
*Checks:* forced restart → safe mode → clear cache → **software flash** → if unsuccessful, battery, power IC or storage (eMMC) fault.
*Finding:* corrupted firmware; reflashed after backup. *Lesson:* use the **correct firmware** for the exact model.

### Case 5 — "No network / no SIM"
*Checks:* another SIM; airplane mode; **IMEI** (*#06#); network settings → SIM tray and connector → antenna contacts → RF section (PA, transceiver).
*Finding:* broken SIM connector pin; replaced.

### Case 6 — "Battery drains fast and gets hot"
*Checks:* battery health; apps running in background; current draw when off on the bench supply (**leakage**).
*Finding:* swollen battery — replaced; dispose safely.

## Computer scenarios
### Case 7 — "Desktop will not power on"
power cable and socket → PSU switch → **paper-clip / PSU tester** → front-panel switch → motherboard standby LED.
*Finding:* failed PSU; replaced with one of adequate wattage.

### Case 8 — "Powers on, no display, beeps"
note the **beep code** → reseat **RAM** (clean contacts) → test one module at a time → reseat graphics card → check monitor and cable → clear CMOS.
*Finding:* loose RAM module.

### Case 9 — "Laptop overheats and shuts down"
blocked vents and **fan clogged with dust**; dried **thermal paste**.
*Repair:* clean fan and heat sink; apply new thermal paste. *Lesson:* preventive cleaning.

### Case 10 — "Very slow computer"
check Task Manager; **malware scan**; too many start-up programs; low RAM; nearly full or **failing hard disk** (S.M.A.R.T.).
*Repair:* remove malware, add RAM, replace HDD with **SSD**.

### Case 11 — "Operating system not found"
BIOS boot order → drive detected? → cable → repair boot records → drive failure — replace and restore from backup.

### Case 12 — "No Internet on one PC"
link lights → ipconfig (169.254?) → ping gateway → DNS → driver → cable.
*Finding:* faulty patch cable.

## Documentation — the job card
| Field | Example |
|---|---|
| job number; date | 0142; 12 Oct |
| customer; phone | — |
| device; model; **IMEI / serial number** | — |
| condition on receipt; accessories | cracked back; no SIM |
| **fault reported** | not charging |
| diagnosis | corroded port |
| work done; parts used | port replaced |
| cost; deposit; balance | — |
| technician; warranty | 30 days on part |
| customer's signature | on collection |

Records protect technician and customer, build a **knowledge base** of faults, and support warranty claims.

## Estimating
Give an **estimate before work**; seek approval before extra costs; explain when a repair is uneconomical.`,
        examples: `**Example 1.** What is the first step when a phone falls into water? *Answer:* **Do not switch it on or charge it**; disconnect the battery and clean the board.

**Example 2.** A desktop gives beeps and no display. What should be checked first? *Answer:* The **RAM** — reseat and test the modules.

**Example 3.** Why is a job card kept? *Answer:* It **records the device, fault, work done and cost**, protecting both customer and technician.`,
      },
      questions: [
        ["E", "The first step in troubleshooting a customer's device is to", "gather information about the fault", "replace the motherboard", "format the storage", "solder a jumper", "The history guides the diagnosis."],
        ["E", "A phone that will not charge should first be tested with", "another charger and cable", "a new motherboard", "a new display", "a different SIM", "The simplest causes are checked first."],
        ["E", "The record of a customer's device, fault and work done is the", "job card", "schematic", "firmware", "price tag", "It documents the repair."],
        ["M", "A phone recovered from water should NOT be", "switched on or charged", "dismantled", "cleaned with alcohol", "dried", "Power causes short circuits and speeds corrosion."],
        ["M", "A desktop that powers on with beeps but no display most often has a fault in the", "RAM", "keyboard", "speaker", "printer", "Reseating the memory often cures it."],
        ["M", "A laptop that overheats and shuts down most likely needs", "cleaning of the fan and new thermal paste", "a new keyboard", "a larger screen", "a faster modem", "Dust blocks airflow and old paste conducts heat poorly."],
        ["M", "A phone stuck on the logo after an update is most likely to have", "a software fault", "a broken speaker", "a faulty vibrator", "a damaged SIM tray", "Reflashing the firmware usually resolves it."],
        ["H", "In troubleshooting, changing only one thing at a time is important because", "the actual cause can then be identified", "it uses more parts", "it takes longer", "customers prefer it", "Several changes at once hide which one fixed the fault."],
        ["H", "A computer reports that no operating system is found although the drive spins. The technician should first check the", "boot order and drive detection in the BIOS", "printer driver", "screen brightness", "keyboard layout", "The system may be trying to boot from the wrong device."],
        ["H", "A phone that draws current from a bench supply while switched off most likely has", "a leakage or short on the board", "a healthy board", "a faulty charger cable", "an empty SIM tray", "No current should flow before the power key is pressed."],
      ],
    },
    {
      week: 9,
      title: "Professional Ethics in ICT Repairs",
      subtopics: ["Meaning of professional ethics", "Customer service", "Safety in the workshop", "Data privacy and legal issues"],
      objectives: ["Explain professional ethics in repair work", "Describe good customer service", "State workshop safety practices", "Explain data privacy and the legal duties of a technician"],
      lesson: {
        title: "Doing the Job Honestly and Safely",
        summary: "The conduct expected of a repair technician towards customers, their data and the law.",
        minutes: 40,
        notes: `## Professional ethics
**Ethics** are **principles of right conduct**. **Professional ethics** are the **standards of behaviour expected of people in a trade or profession**.

### Core values for a technician
- **honesty** — truthful diagnosis and pricing; no charging for work not done
- **integrity** — **no swapping of good parts** for inferior ones; return replaced parts on request
- **competence** — accept only work you can do; keep learning
- **confidentiality** — protect customers' information
- **accountability** — admit mistakes; honour warranties
- **respect** and courtesy to every customer
- **reliability** — keep to promised times
- **lawfulness**

### Unethical practices
inflating faults; fitting used or fake parts as new; removing original parts; snooping in customers' files; copying photographs or contacts; installing **pirated software**; unlocking or changing the **IMEI** of stolen phones; buying stolen devices; keeping customers' devices indefinitely.

## Customer service
- greet; **listen**; ask clear questions
- explain the fault in **simple language**
- give a written **estimate** and time; get **approval** before proceeding
- issue a **job card / receipt** recording the device's condition and IMEI or serial number
- **communicate** delays or extra costs promptly
- test the device **in the customer's presence** on collection
- give a **warranty** on parts and labour; advise on care
- handle **complaints** calmly — listen, apologise, correct
- keep the shop clean and orderly

## Safety in the workshop
| Hazard | Precaution |
|---|---|
| **electric shock** | unplug before opening; discharge capacitors; dry hands; insulated tools; never work on live mains parts unless trained; RCD protection |
| **electrostatic discharge (ESD)** — damages components | **anti-static wrist strap and mat**; hold boards by the edges; anti-static bags |
| **lithium batteries** — fire, explosion | never puncture, bend or overheat; use plastic tools; store swollen batteries in a fire-proof container or sand; no metal contact across terminals |
| **burns** | iron in its stand; care with hot air |
| **fumes** | ventilation or fume extractor; avoid leaded solder ingestion — wash hands |
| **eye injury** | safety glasses when clipping leads or opening glass |
| **cuts** — broken screens | gloves; tape over cracked glass |
| **chemicals** — IPA, flux, thinner | labelled containers; away from flames |
| **fire** | CO₂ or dry-powder extinguisher (**not water** on electrical fires); no overloaded sockets |
| **posture and eye strain** | good chair, lighting, breaks |
Keep a **first-aid box**; tidy cables; no food or drink on the bench.

## Data privacy
**Data privacy** is the **right of individuals to control how their personal information is collected, used and shared**. A device under repair holds **photographs, messages, contacts, passwords, banking apps and documents**.

### The technician's duties
- access **only what the repair requires**
- **never copy, view, share or post** customers' data
- ask the customer to **back up** and, where possible, **log out or lock** sensitive apps; request a passcode only when needed and do not keep it
- obtain **consent** before any reset that erases data
- keep devices **secure** in the shop
- **wipe** storage securely before disposing of or reselling devices
- report serious loss of data honestly

### Law
- the **Nigeria Data Protection Act, 2023** (and the earlier NDPR) — personal data must be processed lawfully, for a stated purpose, kept secure and not disclosed without consent; overseen by the **Nigeria Data Protection Commission**
- the **Cybercrimes (Prohibition, Prevention, etc.) Act, 2015** — offences include unauthorised access, identity theft and **tampering with device identifiers**
- **copyright law** — pirated software is illegal
- **NCC** rules on SIM registration and type-approved devices
- consumer protection (FCCPC) — fair treatment and redress

## Intellectual property and software
use **licensed** or free/open-source software; do not crack software; respect manufacturers' terms.

## Environmental responsibility
dispose of batteries, boards and screens through **e-waste collectors**; never burn or dump.

## Professionalism
neat appearance; fair prices; continuous training; membership of trade associations; refusal of illegal jobs.`,
        examples: `**Example 1.** What is data privacy? *Answer:* The **right of individuals to control how their personal information is used and shared**.

**Example 2.** How is ESD damage prevented? *Answer:* By wearing an **anti-static wrist strap** and working on an **anti-static mat**.

**Example 3.** Give two unethical practices in repair. *Answer:* **Swapping good parts** for inferior ones and **viewing customers' private files**.`,
      },
      questions: [
        ["E", "Standards of behaviour expected of people in a trade are", "professional ethics", "schematics", "protocols of networking", "firmware", "They guide right conduct at work."],
        ["E", "A wrist strap worn while handling circuit boards protects against", "electrostatic discharge", "electric fan noise", "eye strain", "solder fumes", "Static can destroy sensitive components."],
        ["E", "Looking through a customer's photographs during a repair is", "a breach of privacy", "good customer service", "part of diagnosis", "a warranty requirement", "Only what the repair requires should be accessed."],
        ["M", "Replacing a customer's original part with an inferior one without consent is", "unethical", "preventive maintenance", "upselling", "calibration", "It is dishonest and damages trust."],
        ["M", "The correct extinguisher for a fire involving live electrical equipment is", "carbon dioxide", "water", "wet blanket", "foam with water jet", "Water conducts electricity."],
        ["M", "Before carrying out a factory reset that erases a phone, the technician must obtain the customer's", "consent", "SIM card", "charger", "receipt book", "The customer may lose data and must agree."],
        ["M", "A swollen lithium battery should be", "removed carefully and stored in a fire-proof container", "pierced to release the gas", "charged quickly", "pressed flat and reused", "Puncturing can cause fire or explosion."],
        ["H", "The Nigerian law enacted in 2023 to regulate the processing of personal data is the", "Nigeria Data Protection Act", "Electricity Act", "Petroleum Industry Act", "Companies and Allied Matters Act", "It is enforced by the Nigeria Data Protection Commission."],
        ["H", "Changing the IMEI of a phone brought in by a customer is", "illegal tampering with a device identifier", "routine maintenance", "a software update", "a warranty service", "It is an offence and often linked with stolen devices."],
        ["H", "Before reselling a customer's traded-in device, the technician should", "securely wipe its storage", "keep the previous owner's accounts logged in", "copy the contacts", "post the photographs online", "Personal data must not pass to the next owner."],
      ],
    },
    {
      week: 10,
      title: "ICT Career Opportunities and Certification Pathways",
      subtopics: ["Careers in ICT hardware and repairs", "Certification pathways", "Further education and training", "Building a career"],
      objectives: ["Identify careers in ICT hardware, networking and phone repair", "Describe recognised certification pathways", "Outline routes for further training", "Plan the steps for building a career"],
      lesson: {
        title: "Where the Trade Can Take You",
        summary: "Jobs, certificates and training routes open to a hardware and GSM repair technician.",
        minutes: 40,
        notes: `## Careers
| Area | Careers |
|---|---|
| **computer hardware** | computer technician / hardware engineer; laptop repair specialist; field service engineer; printer and copier technician; data-recovery technician |
| **mobile devices** | **GSM / smartphone repair technician**; micro-soldering (board-level) specialist; software/flashing technician; accessories dealer |
| **networking** | network technician; network administrator; cabling installer; wireless/ISP field engineer; network engineer |
| **support** | **IT support / help-desk officer**; system administrator; technical support for companies, schools, banks |
| **security** | CCTV and access-control installer; cybersecurity analyst (with further study) |
| **infrastructure** | telecom mast (base station) technician; data-centre technician; solar/inverter technician for ICT power |
| **business** | repair-shop owner; device and parts retailer; trainer; technical sales representative |
| **further** | electronics, computer and telecommunications **engineer**; software developer; cloud engineer |

**Employers:** repair centres; phone manufacturers' service centres; telecom operators and contractors; ISPs; banks; schools; government; oil and manufacturing companies; self-employment.

## Certification pathways
A **certification** is a **credential awarded after examination, proving competence in a defined area**. It is recognised by employers worldwide.

### CompTIA (vendor-neutral)
| Certificate | Covers |
|---|---|
| **IT Fundamentals (ITF+ / Tech+)** | basic ICT literacy |
| **A+** | **PC hardware, mobile devices, operating systems, troubleshooting** — the entry certificate for technicians |
| **Network+** | networking concepts, cabling, troubleshooting |
| **Security+** | security fundamentals |
| **Server+; Linux+; Cloud+** | specialisms |

### Cisco
| Certificate | Covers |
|---|---|
| **CCST** (Cisco Certified Support Technician) | entry-level networking / cybersecurity |
| **CCNA** (Cisco Certified Network Associate) | routing, switching, IP addressing, wireless, security basics |
| **CCNP** | professional level |
| **CCIE** | expert level |
The **Cisco Networking Academy** offers courses through schools and online.

### Others
- **Microsoft** — fundamentals and role-based certificates
- **Google IT Support** certificate
- **manufacturers' service training** — authorised technician programmes of phone and computer makers
- **GSM repair training** — hardware (board-level), software (flashing, unlocking within the law), micro-soldering courses at technical academies
- **fibre-optic and cabling** installer certificates

### Nigerian qualifications
**Trade Test** certificates (Grades III–I); **National Skills Qualification (NSQ)**; **NABTEB** National Technical / Business Certificate; **NBTE** National Innovation Diploma; **ND/HND** and degrees in computer engineering, electrical/electronics, computer science; the **Computer Professionals Registration Council of Nigeria (CPN)** registers ICT professionals.

## Why certify?
proof of skill; better **job and pay** prospects; customer confidence; structured learning; international recognition; access to manufacturers' parts and tools.

## Further training routes
apprenticeship under a master technician; technical colleges and innovation institutes; polytechnics and universities; **online learning** (videos, forums, courses); practice on scrap boards; workshops and trade fairs.

## Skills employers look for
### Technical
diagnosis; soldering; OS installation; networking; reading schematics; use of test instruments.
### Soft
communication; **customer service**; problem solving; honesty; teamwork; time management; documentation; willingness to learn.

## Building a career
1. master the **fundamentals** — electricity, electronics, tools
2. practise — repair many devices; keep notes
3. obtain an **entry certificate** (Trade Test, A+)
4. **specialise** — board-level repair, networking, data recovery
5. build a **portfolio / logbook** of jobs done
6. write a **CV**; gain work experience or internship
7. **network** with other technicians; join associations
8. keep up with **new technology** — 5G, foldables, SSDs, cloud
9. consider **starting a business**

## Trends creating opportunities
growth in smartphone use; 4G/5G roll-out; fibre broadband; remote work; fintech and POS devices; solar-powered ICT; IoT devices; demand for data recovery and cybersecurity; **refurbishing and e-waste recycling**.`,
        examples: `**Example 1.** Which CompTIA certificate is the entry point for hardware technicians? *Answer:* **CompTIA A+**.

**Example 2.** What does CCNA stand for? *Answer:* **Cisco Certified Network Associate**.

**Example 3.** Give two benefits of certification. *Answer:* **Proof of competence** and **better job prospects**.`,
      },
      questions: [
        ["E", "A credential awarded after examination to prove competence is a", "certification", "schematic", "subscription", "specification", "Employers recognise it as evidence of skill."],
        ["E", "A person who repairs mobile phones is a", "GSM repair technician", "network administrator", "web designer", "data analyst", "The work covers hardware and software faults."],
        ["E", "The staff who assist computer users with technical problems are", "IT support officers", "accountants", "storekeepers", "receptionists", "Also called help-desk officers."],
        ["M", "The entry-level CompTIA certificate covering PC hardware and troubleshooting is", "A+", "CCNA", "Security+", "CCIE", "It is the foundation for technicians."],
        ["M", "CCNA is a certification offered by", "Cisco", "CompTIA", "Microsoft", "Google", "Cisco Certified Network Associate."],
        ["M", "The CompTIA certificate that focuses on networking is", "Network+", "A+", "ITF+", "Linux+", "It covers cabling, protocols and troubleshooting."],
        ["M", "Which of these is a soft skill needed by a technician?", "Good communication", "Micro soldering", "Reballing", "Crimping", "It concerns dealing with people."],
        ["H", "The highest level of Cisco certification among these is", "CCIE", "CCNA", "CCST", "CCNP", "The order rises from CCST through CCNA and CCNP to CCIE."],
        ["H", "The body that registers computing professionals in Nigeria is the", "Computer Professionals Registration Council of Nigeria", "Nigerian Communications Commission", "National Universities Commission", "Corporate Affairs Commission", "It is commonly abbreviated CPN."],
        ["H", "A certificate described as vendor-neutral is one that", "is not tied to one manufacturer's products", "is issued only by phone makers", "has no examination", "is valid in one country only", "CompTIA certificates are examples."],
      ],
    },
  ],
};
