import type { TermPlan } from "../types";

/** JSS2 Security Education — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Situational awareness",
        subtopics: ["Meaning of situational awareness", "Levels of alertness", "Observing and remembering details", "Applying awareness in daily life"],
        objectives: ["Explain situational awareness", "Describe levels of alertness", "Practise observing and remembering important details", "Apply situational awareness at school, on the road and in public places"],
        lesson: {
          title: "Knowing What Is Happening Around You",
          summary: "Develop the habit of noticing and interpreting what goes on around you.",
          minutes: 40,
          notes: `## Meaning
**Situational awareness** is **knowing what is happening around you**, understanding what it means, and predicting what may happen next so that you can act early to stay safe.

## Levels of alertness (colour code)
| Level | State | Example |
|---|---|---|
| **white** | unaware, distracted | walking while staring at a phone |
| **yellow** | relaxed but alert | noticing people and exits as you walk |
| **orange** | specific possible threat noticed | a stranger seems to be following you |
| **red** | danger is present; take action | someone grabs your bag — run, shout, get help |
Aim to stay in **yellow** in public places.

## Observing and remembering details
When something suspicious happens, note:
- **people**: height, clothing, face, voice, distinctive marks
- **vehicles**: colour, type, **plate number**, direction of travel
- **time and place**
- **objects**: unattended bags, weapons
Remembering such details helps the police.

## Applying awareness
- know the **exits** in buildings and vehicles
- keep phones away while crossing roads or walking in lonely areas
- notice changes in normal patterns (e.g. unusual strangers near school)
- trust instincts; move towards people and safe places
- avoid predictable routines when there is a known threat`,
          examples: `**Example 1.** A student walks home staring at a phone and does not notice a car following him. Which level of alertness is he in? *Answer:* **white** (unaware).

**Example 2.** Name two details to note about a suspicious vehicle. *Answer:* **colour** and **plate number** (or type, direction).

**Example 3.** Which level should you maintain in public places? *Answer:* **yellow** — relaxed but alert.`,
        },
        questions: [
          ["E", "Knowing what is happening around you and what it means is", "situational awareness", "daydreaming", "apathy", "carelessness", "It helps you act early."],
          ["E", "Walking while staring at a phone reduces", "awareness of danger", "risk", "distraction", "accidents only for drivers", "You miss warning signs."],
          ["E", "In a building, you should know where the", "exits are", "snacks are", "toilets are only", "teachers' cars are", "Exits matter in emergencies."],
          ["M", "The alertness level described as 'relaxed but alert' is", "yellow", "white", "red", "black", "It suits public places."],
          ["M", "The alertness level in which a person is unaware and distracted is", "white", "yellow", "orange", "red", "It is the most vulnerable state."],
          ["M", "The most useful detail to note about a suspicious vehicle is its", "plate number", "radio station", "number of stickers only", "brand of tyres", "Plate numbers identify vehicles."],
          ["M", "When danger is present and you must act immediately, you are at level", "red", "white", "yellow", "green", "Red means act now."],
          ["H", "Noticing that a stranger seems to be following you puts you at alertness level", "orange", "white", "yellow", "red", "A specific possible threat has been noticed."],
          ["H", "Why is remembering a suspect's distinctive marks useful?", "It helps the police to identify the suspect.", "It is not useful.", "It helps the suspect.", "It delays investigation.", "Details aid identification."],
          ["H", "Varying your routine when there is a known threat helps because", "attackers find it harder to predict your movements", "it confuses your friends only", "it wastes time", "it attracts criminals", "Predictability can be exploited."],
        ],
      },
      {
        week: 2,
        title: "Kidnapping: causes and prevention",
        subtopics: ["Meaning and types of kidnapping", "Causes of kidnapping in Nigeria", "Effects of kidnapping", "Prevention and response"],
        objectives: ["Define kidnapping and identify its types", "Analyse causes of kidnapping", "Describe effects of kidnapping", "Explain prevention measures and correct responses"],
        lesson: {
          title: "Protecting Ourselves from Kidnapping",
          summary: "Understand kidnapping and the measures that reduce the risk.",
          minutes: 40,
          notes: `## Meaning
**Kidnapping** is the **unlawful seizure and detention of a person against his or her will**, usually for **ransom**, political reasons, ritual purposes or exploitation.

## Types
- **for ransom** (the most common in Nigeria)
- **school abductions** (e.g. attacks on schools in the north)
- **highway kidnapping**
- **"express" kidnapping** (victims forced to withdraw money)
- **child abduction** for trafficking or baby factories
- **political or terrorist kidnapping**
- **virtual kidnapping** (fake calls claiming a relative has been kidnapped to extort money)

## Causes
poverty and unemployment, greed and quest for quick money, ungoverned forests and weak policing, proliferation of small arms, payment of ransoms that encourages the crime, drug abuse, poor border control, corruption.

## Effects
trauma and death of victims; financial ruin of families; closure of schools and farms; fear and restricted movement; food insecurity; loss of investment.

## Prevention
- avoid lonely roads and night travel on highways
- vary routines; do not share travel plans publicly (including on social media)
- schools: perimeter security, guards, alarms, drills, community early warning
- report suspicious strangers and camps
- do not display wealth
- verify distress calls about relatives before sending money

## If kidnapped
stay calm; do not resist armed kidnappers; cooperate; remember details; keep hope; follow rescuers' instructions.
The **Terrorism (Prevention and Prohibition) Act 2022** criminalises payment of ransom to terrorists, and many states have laws with severe penalties for kidnapping.`,
          examples: `**Example 1.** What is virtual kidnapping? *Answer:* A **fake call** claiming a relative has been kidnapped in order to **extort money**.

**Example 2.** Name one cause of kidnapping. *Answer:* **greed for quick money** (or poverty, ungoverned forests).

**Example 3.** Why should travel plans not be posted on social media? *Answer:* Criminals may use them to **plan an attack**.`,
        },
        questions: [
          ["E", "The unlawful seizure and detention of a person is", "kidnapping", "arrest by police with a warrant", "adoption", "tourism", "It is a violent crime."],
          ["E", "The most common purpose of kidnapping in Nigeria is", "ransom", "education", "tourism", "sports", "Kidnappers demand money."],
          ["E", "Which reduces the risk of kidnapping?", "avoiding lonely roads at night", "travelling alone at night", "displaying wealth", "posting travel plans online", "Lonely roads are risky."],
          ["M", "A fake call claiming a relative has been kidnapped to extort money is", "virtual kidnapping", "express kidnapping", "school abduction", "arrest", "No one is actually taken."],
          ["M", "Forcing a victim to withdraw money from ATMs during a short abduction is", "express kidnapping", "virtual kidnapping", "trafficking", "arrest", "It is a quick cash crime."],
          ["M", "Which is a cause of kidnapping?", "greed for quick money", "job creation", "strong policing", "good education", "Criminals seek fast profits."],
          ["M", "Posting travel plans on social media is risky because", "criminals may use the information", "friends may be jealous", "it costs data", "it is illegal to travel", "Information aids attackers."],
          ["H", "If kidnapped by armed people, a victim should", "stay calm and avoid provoking the kidnappers", "fight them immediately", "insult them", "try to snatch their weapons", "Survival is the priority."],
          ["H", "Why does paying ransom encourage kidnapping?", "It makes kidnapping profitable for criminals.", "It discourages criminals.", "It ends all kidnapping.", "It has no effect.", "Profit motivates repeat crimes."],
          ["H", "Before sending money in response to a distress call about a relative, you should", "verify the relative's whereabouts", "send money immediately", "switch off your phone", "share your PIN", "Many such calls are scams."],
        ],
      },
      {
        week: 3,
        title: "Terrorism and violent extremism",
        subtopics: ["Meaning of terrorism and violent extremism", "Causes and signs of radicalisation", "Effects of terrorism", "Preventing violent extremism"],
        objectives: ["Define terrorism and violent extremism", "Identify causes and warning signs of radicalisation", "Describe effects of terrorism", "Suggest ways of preventing violent extremism"],
        lesson: {
          title: "Standing Against Terror",
          summary: "Recognise radicalisation and support efforts to prevent violent extremism.",
          minutes: 40,
          notes: `## Meanings
- **Terrorism** is the **use or threat of violence against civilians** to create fear and achieve political, religious or ideological goals.
- **Violent extremism** is supporting or using **violence** to achieve extreme ideological aims.
- **Radicalisation** is the process by which a person comes to adopt extreme views that may lead to violence.

## Causes of radicalisation
poverty and unemployment; injustice and marginalisation; illiteracy and misinterpretation of religion; manipulation by extremist preachers and online propaganda; desire for belonging, identity or revenge; weak governance.

## Warning signs
sudden isolation from family and friends; hostility to people of other faiths or groups; justifying violence; secretive online activity with extremist content; new unexplained money or contacts; talk of "enemies" who must be destroyed.

## Effects
loss of lives and injuries; displacement (IDPs); destruction of schools, markets and places of worship; fear; hunger; economic decline; loss of education (e.g. attacks on schools in the north-east).

## Prevention
- **education** and critical thinking
- tolerance and interfaith dialogue
- jobs and youth empowerment
- responsible religious teaching
- **reporting** suspicious persons and activities
- rejecting and reporting extremist content online
- government programmes (e.g. deradicalisation through **Operation Safe Corridor**)

## Safety during an attack
**Run** to safety if possible; **hide** if you cannot run (lock doors, silence phones); **tell** the authorities (112) when safe.`,
          examples: `**Example 1.** Define terrorism. *Answer:* The **use or threat of violence against civilians** to create fear for political or ideological goals.

**Example 2.** Name one warning sign of radicalisation. *Answer:* **justifying violence against other groups** (or sudden isolation).

**Example 3.** What are the three safety actions during an attack? *Answer:* **Run, Hide, Tell**.`,
        },
        questions: [
          ["E", "The use of violence against civilians to create fear for political aims is", "terrorism", "democracy", "trade", "tourism", "Terrorists target civilians."],
          ["E", "Which helps to prevent violent extremism?", "education and tolerance", "hate speech", "isolation", "injustice", "Understanding reduces extremism."],
          ["E", "During an attack, if you cannot run to safety, you should", "hide and keep silent", "shout at the attackers", "take photos", "walk towards them", "Hiding reduces exposure."],
          ["M", "The process by which a person adopts extreme views that may lead to violence is", "radicalisation", "socialisation", "education", "integration", "It changes beliefs dangerously."],
          ["M", "Which is a warning sign of radicalisation?", "justifying violence against other groups", "helping neighbours", "studying hard", "joining a sports club", "Justifying violence is a red flag."],
          ["M", "Which is an effect of terrorism?", "displacement of people", "more tourism", "better education", "economic growth", "People flee attacks."],
          ["M", "Online extremist content should be", "reported and not shared", "shared widely", "downloaded", "ignored while forwarding", "Sharing spreads propaganda."],
          ["H", "The government programme that deradicalises repentant insurgents is", "Operation Safe Corridor", "War Against Indiscipline", "MAMSER", "Operation Feed the Nation", "It rehabilitates ex-fighters."],
          ["H", "Why does injustice contribute to violent extremism?", "People who feel marginalised may be easier to recruit.", "Justice causes extremism.", "It has no effect.", "Everyone is satisfied.", "Grievances are exploited by recruiters."],
          ["H", "Interfaith dialogue helps prevent extremism by", "promoting understanding among religious groups", "encouraging hatred", "isolating communities", "promoting violence", "Dialogue builds respect."],
        ],
      },
      {
        week: 4,
        title: "Gangs, cults and youth violence",
        subtopics: ["Meaning of gangs and cults", "How young people are recruited", "Dangers of gangs and cults", "Staying safe and getting help"],
        objectives: ["Distinguish gangs from secret cults", "Identify recruitment tactics", "Explain the dangers of gangs and cults", "Describe ways to stay safe and seek help"],
        lesson: {
          title: "Avoiding Gangs and Cults",
          summary: "Recognise recruitment into gangs and cults and how to stay safe.",
          minutes: 40,
          notes: `## Meanings
- A **gang** is a group of people, often young, who engage in **criminal or violent activities** together (e.g. street gangs, "area boys" involved in extortion).
- A **secret cult** is a society bound by **oaths and secrecy**, often violent, found in schools and communities.

## Recruitment tactics
- offering **protection** from bullies or rival groups
- promises of **money, popularity, girlfriends or boyfriends**
- **peer pressure** and threats
- parties, drugs and alcohol
- targeting **new students** and lonely or troubled youths
- use of social media

## Dangers
violence, injury and death; arrest and prosecution; expulsion from school; drug addiction; involvement in robbery, kidnapping and political thuggery; lifelong fear; family disgrace; being forced to harm others.

## Signs a friend may be involved
new secretive friends, unexplained money, strange symbols or colours, sudden aggression, late nights, drug use, carrying weapons.

## Staying safe
- choose good friends; join **positive clubs** (sports, debate, JETS, religious groups)
- say **No** firmly; avoid parties with strangers and drugs
- do not accept "protection" or gifts from unknown groups
- report threats and recruitment attempts to teachers, parents or the police
- schools and parents should monitor, counsel and support youths`,
          examples: `**Example 1.** Name one recruitment tactic used by cults. *Answer:* **offering protection** (or money, popularity).

**Example 2.** Name one danger of joining a gang. *Answer:* **arrest and prosecution** (or death).

**Example 3.** How can a student avoid gangs? *Answer:* **Join positive clubs**, keep good friends and report recruitment attempts.`,
        },
        questions: [
          ["E", "A group of people engaged in criminal or violent activities together is a", "gang", "debate club", "choir", "sports team", "Gangs commit crimes."],
          ["E", "A secret society bound by oaths and often violent is a", "secret cult", "school club", "religious choir", "cooperative", "Cults operate in secrecy."],
          ["E", "A positive alternative to joining gangs is", "joining a sports or debate club", "joining a street gang", "taking drugs", "skipping school", "Positive clubs build character."],
          ["M", "Which is a common recruitment tactic of cults?", "offering protection", "giving homework", "teaching honesty", "reporting to teachers", "They exploit fear."],
          ["M", "New students are often targeted for recruitment because they", "may feel lonely or unsure", "are always cult members", "are rich", "are teachers", "Newcomers seek belonging."],
          ["M", "Which is a danger of joining a cult?", "expulsion and prosecution", "scholarships", "better grades", "national honours", "Cultism is illegal."],
          ["M", "A friend who suddenly has unexplained money and new secretive friends may be", "involved in a gang or cult", "receiving a scholarship legitimately always", "a prefect", "studying hard", "These are warning signs."],
          ["H", "Why should students avoid parties with strangers where drugs are served?", "Such parties are used for recruitment and can be dangerous.", "They are educational.", "Drugs improve safety.", "Strangers are always friends.", "Drugs and strangers raise the risk."],
          ["H", "Gang members used by politicians during elections are often called", "political thugs", "election observers", "civil servants", "legislators", "Thuggery disrupts elections."],
          ["H", "A student threatened to join a cult should", "report to school authorities or the police", "join to avoid trouble", "keep quiet", "carry a weapon", "Authorities can protect the student."],
        ],
      },
      {
        week: 5,
        title: "Theft, burglary and robbery",
        subtopics: ["Meaning and differences", "Common methods used by criminals", "Protecting personal and household property", "What to do during and after a robbery"],
        objectives: ["Distinguish theft, burglary and robbery", "Identify common methods used by criminals", "Describe measures for protecting property", "State correct actions during and after a robbery"],
        lesson: {
          title: "Protecting Property",
          summary: "Distinguish property crimes and protect belongings and homes.",
          minutes: 40,
          notes: `## Meanings
| Crime | Meaning |
|---|---|
| **theft (stealing)** | taking someone's property without permission, without force |
| **burglary** | breaking into a building to steal |
| **robbery** | stealing with **force or threat of force** |
| **armed robbery** | robbery using weapons — a very serious crime |
| **pickpocketing** | stealing from pockets or bags in crowds |
| **snatching** | grabbing phones or bags, often from motorcycles |

## Common methods
distraction in crowds; picking unlocked doors; posing as repairmen, officials or buyers; "one chance" vehicles (criminals posing as commercial drivers and passengers); following people from banks and ATMs; phone snatching at traffic lights.

## Protecting property
- lock doors, windows, gates and vehicles
- do not display phones, jewellery or cash in public
- keep bags in front in crowds
- use trusted and registered transport; avoid empty "one chance" vehicles
- be careful at ATMs: cover the keypad; do not accept help from strangers
- mark valuables and keep receipts and phone IMEI numbers
- install security lights and good locks

## During and after a robbery
- **do not resist** armed robbers — life is more important than property
- stay calm; avoid sudden movements
- remember details of the robbers
- after they leave: get to safety, call **112** or the police, do not touch evidence, block bank cards and SIMs`,
          examples: `**Example 1.** Stealing with a gun is **armed robbery**.

**Example 2.** What is a "one chance" vehicle? *Answer:* A vehicle in which **criminals pose as drivers and passengers** to rob unsuspecting riders.

**Example 3.** What should you do during an armed robbery? *Answer:* **Do not resist**; stay calm and remember details.`,
        },
        questions: [
          ["E", "Taking someone's property without permission and without force is", "theft", "robbery", "arson", "assault", "Theft involves no force."],
          ["E", "Breaking into a building to steal is", "burglary", "fraud", "forgery", "pickpocketing", "Burglary involves entry."],
          ["E", "During an armed robbery, you should", "not resist", "fight the robbers", "chase them", "shout insults", "Life is more important than property."],
          ["M", "Stealing with force or threat of force is", "robbery", "theft", "burglary", "fraud", "Force distinguishes robbery."],
          ["M", "Stealing from pockets or bags in crowded places is", "pickpocketing", "burglary", "arson", "forgery", "Crowds provide cover."],
          ["M", "A vehicle in which criminals pose as drivers and passengers to rob riders is called", "one chance", "BRT", "taxi rank", "keke rank", "It is a common robbery trick."],
          ["M", "At an ATM, you should", "cover the keypad and refuse help from strangers", "ask strangers to enter your PIN", "leave your card in the machine", "count money openly in a crowd", "Protect your PIN."],
          ["H", "After a robbery, blocking bank cards and SIM cards helps to", "prevent further financial loss", "help the robbers", "delay police", "increase theft", "Criminals may use them."],
          ["H", "Recording your phone's IMEI number helps", "trace or block the phone if stolen", "increase phone speed", "reduce battery use", "change its colour", "IMEI identifies devices."],
          ["H", "Why should evidence at a crime scene not be touched?", "It may be needed by the police for investigation.", "It is dirty.", "It belongs to robbers.", "It is not important.", "Evidence helps identify criminals."],
        ],
      },
      {
        week: 6,
        title: "Human trafficking awareness",
        subtopics: ["Meaning of human trafficking", "Recruitment tricks", "Who is at risk", "Reporting and seeking help"],
        objectives: ["Explain human trafficking", "Identify common recruitment tricks", "Identify groups at risk", "Describe how to report and seek help"],
        lesson: {
          title: "Recognising Trafficking Tricks",
          summary: "Recognise the tricks traffickers use and how to seek help.",
          minutes: 40,
          notes: `## Meaning
**Human trafficking** is moving or keeping people through **force, deception or threats** in order to **exploit** them — forced labour, sexual exploitation, domestic servitude, begging or organ removal.

## Recruitment tricks
- promises of **good jobs abroad** or in big cities (as house helps, salespeople, footballers, models)
- fake **scholarships** and study abroad offers
- "**sponsors**" who offer to pay travel costs, creating a debt
- **romantic** relationships used as bait
- **oaths** and threats to ensure secrecy
- **fake travel documents**
- online job adverts and social media contacts

## Who is at risk?
children and young people, girls and women, poor and unemployed people, orphans, internally displaced persons (IDPs), children sent to live with distant "relatives", people desperate to travel abroad.

## Warning signs of a trafficking offer
too good to be true; secrecy demanded; documents held by the "agent"; no contract or verifiable company; travel arranged by strangers; requests to lie to parents or officials.

## Reporting and help
- tell **parents** or trusted adults
- report to the **police** or **NAPTIP** (National Agency for the Prohibition of Trafficking in Persons)
- verify jobs and scholarships with official bodies and embassies
- victims are **protected and rehabilitated**; they are not treated as criminals`,
          examples: `**Example 1.** An agent offers a girl a well-paid job abroad but says she must not tell her parents. What should she do? *Answer:* **Refuse and report** to parents and NAPTIP.

**Example 2.** Name one group at high risk of trafficking. *Answer:* **internally displaced persons** (or orphans, poor youths).

**Example 3.** Name one warning sign of a trafficking offer. *Answer:* **the agent keeps your travel documents** (or demands secrecy).`,
        },
        questions: [
          ["E", "Moving people through deception in order to exploit them is", "human trafficking", "tourism", "migration for study with consent", "adoption through court", "Exploitation is the aim."],
          ["E", "A job offer that demands secrecy from parents is", "a warning sign of trafficking", "a normal job", "a scholarship", "a school rule", "Secrecy is a red flag."],
          ["E", "Human trafficking should be reported to", "NAPTIP or the police", "nobody", "the trafficker", "social media only", "Authorities can intervene."],
          ["M", "An 'agent' keeping a person's travel documents is", "a warning sign of trafficking", "normal practice", "required by law", "a sign of care", "It controls the victim."],
          ["M", "Which group is at high risk of trafficking?", "internally displaced persons", "well-protected children in secure homes", "government officials", "police officers", "IDPs are vulnerable."],
          ["M", "Traffickers sometimes use oaths to", "keep victims silent and afraid", "help victims escape", "give victims education", "protect victims", "Fear ensures compliance."],
          ["M", "Before accepting a scholarship abroad, you should", "verify it with official bodies", "pay any agent immediately", "keep it secret", "surrender your documents", "Verification exposes fakes."],
          ["H", "Why is a 'sponsor' who pays travel costs sometimes dangerous?", "Victims are forced to repay a huge debt through exploitation.", "Sponsors are always charities.", "It is free travel.", "It guarantees jobs.", "Debt bondage traps victims."],
          ["H", "Rescued victims of trafficking should be", "protected and rehabilitated", "imprisoned", "deported without help", "blamed publicly", "They are victims, not criminals."],
          ["H", "An offer described as 'too good to be true' should make you", "suspicious and cautious", "accept immediately", "pay quickly", "hide it from parents", "Unrealistic offers are often traps."],
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
        title: "Emergency preparedness and evacuation",
        subtopics: ["Meaning of emergency preparedness", "Family and school emergency plans", "Evacuation procedures", "Emergency kits"],
        objectives: ["Explain emergency preparedness", "Prepare a simple family emergency plan", "Describe evacuation procedures", "List the contents of an emergency kit"],
        lesson: {
          title: "Planning Before Emergencies Happen",
          summary: "Prepare emergency plans and practise safe evacuation.",
          minutes: 40,
          notes: `## Meaning
**Emergency preparedness** is planning and practising **what to do before an emergency happens**, so that people can respond quickly and safely.

## Family emergency plan
- list of **emergency contacts** (112, family, neighbours, hospital)
- a **meeting place** outside the home and another outside the neighbourhood
- escape routes from each room
- roles: who helps children, the elderly and persons with disabilities
- where important **documents** are kept
- how to switch off gas and electricity

## School emergency plan
- alarms and signals
- evacuation routes and **assembly points**
- roles of teachers and prefects
- **headcount** procedure
- regular **drills** (fire, lockdown, evacuation)
- communication with parents

## Evacuation procedure
1. hear the alarm and stop activities
2. leave quickly by the **nearest safe exit**
3. walk; do not run, push or use lifts
4. help others who need assistance
5. gather at the **assembly point**
6. do not return until authorities declare it safe

## Lockdown
When a threat is **outside** (e.g. armed intruders), a **lockdown** may be safer than evacuation: lock doors, stay away from windows, keep silent, follow instructions.

## Emergency kit
water, non-perishable food, torch and batteries, first-aid kit, whistle, copies of documents, phone charger/power bank, some cash, essential medicines, face masks.`,
          examples: `**Example 1.** What is emergency preparedness? *Answer:* **Planning and practising** what to do before an emergency happens.

**Example 2.** When is lockdown safer than evacuation? *Answer:* When the threat, such as armed intruders, is **outside**.

**Example 3.** Name two items in an emergency kit. *Answer:* **torch** and **first-aid kit** (or water, whistle).`,
        },
        questions: [
          ["E", "Planning what to do before an emergency happens is", "emergency preparedness", "panic", "negligence", "carelessness", "Preparation saves lives."],
          ["E", "An agreed place where family members meet after escaping is a", "meeting place", "bedroom", "market", "secret hideout", "It helps account for everyone."],
          ["E", "During evacuation, you should", "walk quickly to the nearest safe exit", "use the lift", "run and push", "collect your belongings first", "Orderly exit prevents injuries."],
          ["M", "When armed intruders are outside a school, the safer action is usually", "lockdown", "evacuation into the open", "opening all gates", "playing outside", "Staying locked in reduces exposure."],
          ["M", "During a lockdown, students should", "stay away from windows and keep silent", "open the doors", "shout loudly", "go outside to look", "Silence and cover protect them."],
          ["M", "A whistle in an emergency kit is used to", "signal for help", "play music", "cool food", "light fires", "It attracts rescuers."],
          ["M", "A family emergency plan should include", "a list of emergency contacts", "only party plans", "exam timetables", "shopping lists only", "Contacts are essential."],
          ["H", "Why should copies of important documents be kept in an emergency kit?", "Originals may be lost in the emergency.", "They are decorations.", "They are not useful.", "They replace food.", "Documents help recovery."],
          ["H", "Assigning someone to help persons with disabilities during evacuation ensures that", "no one is left behind", "evacuation is slower for all", "they stay inside", "it is not needed", "Inclusion saves lives."],
          ["H", "Students should return to a building after evacuation only when", "the authorities declare it safe", "their friends go back", "they feel like it", "the bell rings for lunch", "Premature return is dangerous."],
        ],
      },
      {
        week: 2,
        title: "Fire extinguishers and firefighting",
        subtopics: ["Classes of fire", "Types of fire extinguishers", "Using a fire extinguisher (PASS)", "When not to fight a fire"],
        objectives: ["Identify classes of fire", "Match fire extinguishers to classes of fire", "Use the PASS technique", "Decide when to evacuate rather than fight a fire"],
        lesson: {
          title: "Putting Out Small Fires Safely",
          summary: "Choose and use the right extinguisher, and know when to leave.",
          minutes: 45,
          notes: `## Classes of fire (common system)
| Class | Fuel |
|---|---|
| **A** | ordinary solids: wood, paper, cloth, plastics |
| **B** | flammable liquids: petrol, kerosene, oil, paint |
| **C** | flammable gases: cooking gas (LPG), methane |
| **D** | combustible metals |
| **electrical** | live electrical equipment |
| **F** (or K) | cooking oils and fats |

## Types of extinguishers (colour-coded bands)
| Extinguisher | Band colour | Suitable for | Not suitable for |
|---|---|---|---|
| **water** | red | Class A | electrical fires, burning oil |
| **foam** | cream | Class A and B | live electrical equipment |
| **dry powder** | blue | A, B, C and electrical | enclosed spaces (visibility) |
| **carbon dioxide (CO₂)** | black | electrical fires and Class B | Class A (may re-ignite) |
| **wet chemical** | yellow | Class F (cooking oil) | — |
A **fire blanket** smothers small fires, including pan fires, and can wrap a person whose clothes are on fire.

## Using an extinguisher: PASS
- **P**ull the safety pin
- **A**im at the **base** of the fire
- **S**queeze the handle
- **S**weep from side to side

## When not to fight a fire
if the fire is **spreading quickly** or larger than a waste bin; if the room is filling with smoke; if you do not have the right extinguisher; if your escape route may be blocked. **Evacuate and call 112.**
**Never** pour water on burning oil or electrical fires.`,
          examples: `**Example 1.** Which extinguisher is best for an electrical fire? *Answer:* **carbon dioxide (CO₂)** (or dry powder).

**Example 2.** What does PASS stand for? *Answer:* **Pull, Aim, Squeeze, Sweep**.

**Example 3.** Why should water not be poured on burning cooking oil? *Answer:* It causes the oil to **splash and spread** the fire violently.`,
        },
        questions: [
          ["E", "A fire involving wood and paper is Class", "A", "B", "C", "D", "Class A covers ordinary solids."],
          ["E", "PASS stands for Pull, Aim, Squeeze and", "Sweep", "Stop", "Shout", "Sit", "Sweep from side to side."],
          ["E", "When using an extinguisher, you should aim at the", "base of the fire", "top of the flames", "ceiling", "smoke", "The fuel burns at the base."],
          ["M", "A fire involving petrol or kerosene is Class", "B", "A", "D", "F", "Class B covers flammable liquids."],
          ["M", "The extinguisher best suited to electrical fires is", "carbon dioxide", "water", "foam on live equipment", "sand mixed with water", "CO₂ does not conduct electricity."],
          ["M", "Water extinguishers should NOT be used on", "electrical fires", "wood fires", "paper fires", "cloth fires", "Water conducts electricity."],
          ["M", "A fire blanket works by", "smothering the fire", "adding fuel", "adding heat", "fanning the flames", "It cuts off oxygen."],
          ["H", "Pouring water on burning cooking oil is dangerous because", "the oil splashes and spreads the fire", "it cools too slowly", "water is expensive", "it produces smoke only", "Water turns to steam violently."],
          ["H", "You should evacuate instead of fighting a fire when", "the fire is spreading quickly or smoke is filling the room", "it is a tiny flame in a bin with an extinguisher nearby", "you have the right extinguisher and a clear exit", "the fire is out", "Personal safety comes first."],
          ["H", "The extinguisher with a cream band contains", "foam", "water", "carbon dioxide", "dry powder", "Cream identifies foam."],
        ],
      },
      {
        week: 3,
        title: "Crowd safety and stampedes",
        subtopics: ["Meaning of crowds and stampedes", "Causes of stampedes", "Staying safe in crowds", "Organising safe events"],
        objectives: ["Explain crowd safety and stampedes", "Identify causes of stampedes", "Describe how to stay safe in crowds", "Suggest measures for organising safe events"],
        lesson: {
          title: "Safety in Crowded Places",
          summary: "Recognise crowd dangers and stay safe at large gatherings.",
          minutes: 40,
          notes: `## Meanings
- A **crowd** is a large number of people gathered in one place (stadiums, markets, religious gatherings, concerts, recruitment exercises, relief distribution).
- A **stampede** is a **sudden, uncontrolled rush** of a crowd, often causing people to be crushed or trampled.

## Causes of stampedes
overcrowding beyond venue capacity; narrow or locked exits; panic from rumours, gunshots or fire; rush for free items, food or relief materials; poor organisation and crowd control; darkness; collapse of structures.

## Staying safe in crowds
- note **exits** when you arrive
- stay at the **edges** of the crowd, away from barriers and walls
- keep children close and agree on a meeting point if separated
- avoid pushing; move **diagonally** away from pressure
- if you fall, get up quickly; if you cannot, **curl into a ball** and protect your head
- keep arms in front of the chest to create breathing space
- leave early if the crowd becomes too dense
- do not spread rumours that cause panic

## Organising safe events
limit numbers to capacity; several wide exits kept open; trained stewards and security; clear signs and lighting; first-aid posts; orderly queues and ticketing; emergency plans; controlled distribution of items.`,
          examples: `**Example 1.** Name one cause of stampedes. *Answer:* **panic from rumours** (or overcrowding, locked exits).

**Example 2.** Where is it safest to stand in a crowd? *Answer:* at the **edges**, away from barriers.

**Example 3.** Name one measure organisers can take. *Answer:* **limit attendance to venue capacity** (or keep exits open).`,
        },
        questions: [
          ["E", "A sudden uncontrolled rush of a crowd is a", "stampede", "parade", "queue", "rally", "People may be crushed."],
          ["E", "When you arrive at a crowded venue, you should note the", "exits", "snack stands only", "celebrities", "car colours", "Exits are escape routes."],
          ["E", "Which can cause a stampede?", "panic from rumours", "orderly queues", "open exits", "good lighting", "Panic triggers rushes."],
          ["M", "The safest place to stand in a dense crowd is", "at the edges", "against a barrier", "in the centre", "near a locked gate", "Edges allow escape."],
          ["M", "If you fall in a crowd and cannot rise, you should", "curl into a ball and protect your head", "lie flat on your back", "shout and stay still in the open", "grab people's legs", "Protecting the head reduces injury."],
          ["M", "Keeping your arms in front of your chest in a crush helps", "create breathing space", "push others down", "raise your hands", "wave for photos", "Compression can stop breathing."],
          ["M", "Locked or narrow exits at an event increase the risk of", "stampedes", "good order", "safety", "comfort", "People cannot escape quickly."],
          ["H", "Why do relief distributions sometimes cause stampedes?", "People rush for limited free items.", "Everyone waits patiently.", "Items are unlimited.", "There are no people.", "Scarcity leads to rushing."],
          ["H", "Which measure makes events safer?", "limiting attendance to venue capacity", "overselling tickets", "locking exits", "switching off lights", "Capacity limits prevent crushes."],
          ["H", "When pressure builds in a crowd, you should move", "diagonally away from the pressure", "towards the pressure", "backwards into walls", "nowhere at all", "Diagonal movement escapes the flow."],
        ],
      },
      {
        week: 4,
        title: "Epidemics and health security",
        subtopics: ["Meaning of epidemics and pandemics", "Epidemics in Nigeria", "Preventing the spread of infectious diseases", "Role of health agencies"],
        objectives: ["Distinguish epidemics from pandemics", "Identify epidemics that have affected Nigeria", "Describe measures that prevent the spread of infectious diseases", "Explain the roles of health agencies"],
        lesson: {
          title: "Staying Safe During Disease Outbreaks",
          summary: "Explain epidemics and the measures that protect communities.",
          minutes: 40,
          notes: `## Meanings
- An **outbreak** is a sudden increase in cases of a disease in a place.
- An **epidemic** is a disease spreading rapidly to **many people in a community or region**.
- A **pandemic** is an epidemic that spreads **across countries and continents** (e.g. COVID-19, 2020).
- **Endemic** diseases are regularly present in an area (e.g. malaria in Nigeria).
**Health security** means protecting people from health threats such as epidemics.

## Epidemics in Nigeria (examples)
cholera, **Lassa fever** (spread by rats), meningitis (dry season, north), measles, **Ebola** (2014, contained), **COVID-19** (from 2020), diphtheria, mpox.

## Preventing spread
- **handwashing** with soap and running water
- covering coughs and sneezes; wearing masks when advised
- **vaccination**
- safe water and food hygiene
- keeping rats away (proper food storage, clean surroundings) against Lassa fever
- **isolation** of sick people and **quarantine** of exposed people
- avoiding crowded places during outbreaks
- reporting symptoms early; not hiding cases
- avoiding **fake news** and unproven cures

## Health agencies
- **Nigeria Centre for Disease Control and Prevention (NCDC)**: surveillance, outbreak response, public information
- Federal and State Ministries of Health; primary health care agencies (vaccination)
- **World Health Organization (WHO)** and UNICEF`,
          examples: `**Example 1.** What is the difference between an epidemic and a pandemic? *Answer:* An epidemic affects a **community or region**; a pandemic spreads **across countries and continents**.

**Example 2.** Which animal spreads Lassa fever? *Answer:* **rats** (the multimammate rat).

**Example 3.** Which agency leads outbreak response in Nigeria? *Answer:* the **NCDC**.`,
        },
        questions: [
          ["E", "A disease spreading rapidly to many people in a community is", "an epidemic", "a vaccine", "a festival", "a census", "Epidemics spread widely."],
          ["E", "Washing hands with soap and water helps to", "prevent the spread of diseases", "spread diseases", "cause cholera", "weaken immunity", "It removes germs."],
          ["E", "Lassa fever is spread mainly by", "rats", "mosquitoes", "cows", "birds", "Rodents carry the virus."],
          ["M", "An epidemic that spreads across countries and continents is", "a pandemic", "an endemic disease", "an outbreak in one village", "a vaccine", "COVID-19 was a pandemic."],
          ["M", "Separating exposed but healthy people to see if they become sick is", "quarantine", "isolation of the sick only", "vaccination", "surveillance of rats", "It limits spread."],
          ["M", "The Nigerian agency that leads disease outbreak response is", "NCDC", "NDLEA", "FRSC", "NAPTIP", "Nigeria Centre for Disease Control and Prevention."],
          ["M", "Diseases regularly present in an area, like malaria in Nigeria, are", "endemic", "pandemic only", "extinct", "imaginary", "They occur continually."],
          ["H", "Why is hiding a sick person during an outbreak dangerous?", "It allows the disease to spread to others.", "It protects everyone.", "It cures the disease.", "It is required by law.", "Early reporting enables treatment and containment."],
          ["H", "Nigeria contained an outbreak of Ebola in", "2014", "1990", "2005", "2022", "Health workers stopped its spread quickly."],
          ["H", "Proper food storage and clean surroundings help prevent", "Lassa fever", "sickle-cell disease", "short-sightedness", "rickets", "They keep rats away."],
        ],
      },
      {
        week: 5,
        title: "Water safety",
        subtopics: ["Water-related dangers", "Safety when swimming", "Safety on boats and during floods", "Rescue and first response"],
        objectives: ["Identify water-related dangers", "State rules for safe swimming", "Describe safety on boats and during floods", "Explain safe rescue methods"],
        lesson: {
          title: "Staying Safe Around Water",
          summary: "Prevent drowning and respond safely to water emergencies.",
          minutes: 40,
          notes: `## Water-related dangers
drowning in rivers, lakes, pools, wells, gutters and floodwaters; strong currents and rip currents at beaches; hidden objects under water; contaminated water; boat accidents (overloading, no life jackets).

## Safe swimming rules
- learn to swim from qualified instructors
- **never swim alone**; swim where there is a **lifeguard**
- do not swim in rivers, lagoons or unknown waters
- avoid swimming after eating heavily or when tired
- obey **warning flags and signs** at beaches
- do not dive into shallow or unknown water

## Boat and flood safety
- always wear a **life jacket** on boats
- do not board **overloaded** boats or travel at night or in bad weather
- sit still and balanced
- during floods: do not walk, swim or drive through floodwater (15 cm of fast water can knock a person down; 60 cm can carry a car)
- stay away from drains and gutters during heavy rain

## Safe rescue: "Reach, Throw, Don't Go"
1. **Shout** for help and call **112**
2. **Reach** with a stick, pole or rope while staying on land
3. **Throw** something that floats (a jerrycan, rubber tube, plank)
4. **Don't go** into the water unless trained — many rescuers drown
After rescue: check breathing; start **CPR** if trained; keep the person warm; get medical help.`,
          examples: `**Example 1.** What should every boat passenger wear? *Answer:* a **life jacket**.

**Example 2.** What is the safe rescue rule for untrained people? *Answer:* **Reach, Throw, Don't Go**.

**Example 3.** Why should you not walk through floodwater? *Answer:* Even **shallow fast-moving water** can knock you down and sweep you away.`,
        },
        questions: [
          ["E", "Boat passengers should always wear", "life jackets", "raincoats only", "heavy boots", "jewellery", "Life jackets keep you afloat."],
          ["E", "When swimming, you should never", "swim alone", "swim with a lifeguard present", "obey warning signs", "swim in safe pools", "Company provides help."],
          ["E", "During floods, you should not", "walk through floodwater", "move to higher ground", "listen to warnings", "stay away from drains", "Fast water is dangerous."],
          ["M", "The safe rescue rule for untrained people is", "Reach, Throw, Don't Go", "Jump, Swim, Shout", "Run, Hide, Wait", "Dive, Grab, Pull", "Rescuers stay safe on land."],
          ["M", "An object that can be thrown to a drowning person is", "an empty jerrycan", "a stone", "an iron bar", "a heavy bag", "A sealed empty jerrycan floats."],
          ["M", "Travelling on an overloaded boat is dangerous because", "it can capsize", "it is faster", "it is cheaper", "it is comfortable", "Overloading destabilises boats."],
          ["M", "Diving into unknown shallow water can cause", "head and spinal injuries", "better swimming", "stronger bones", "no harm", "Hidden rocks or shallowness injure divers."],
          ["H", "Why should untrained people avoid jumping into water to rescue someone?", "A panicking victim can pull them under and both may drown.", "It is always safe.", "Water is cold.", "Rescue is illegal.", "Many rescuers drown."],
          ["H", "About how deep does fast-moving floodwater need to be to carry away a car?", "about 60 cm", "about 1 cm", "about 5 m only", "no depth can move a car", "Moving water exerts great force."],
          ["H", "After pulling someone out of water, the first thing to check is", "breathing", "their shoes", "their phone", "their hairstyle", "Breathing determines next steps."],
        ],
      },
      {
        week: 6,
        title: "Protecting personal information and identity",
        subtopics: ["Personal information and identity theft", "How criminals obtain personal data", "Protecting data offline and online", "Nigeria's data protection framework"],
        objectives: ["Explain personal information and identity theft", "Identify how criminals obtain personal data", "Describe ways of protecting personal data", "Identify Nigeria's data protection law and agency"],
        lesson: {
          title: "Guarding Your Identity",
          summary: "Protect personal information from criminals offline and online.",
          minutes: 40,
          notes: `## Meanings
- **Personal information (data)** is any information that identifies a person: name, date of birth, address, phone number, **NIN**, **BVN**, photographs, fingerprints, passwords, bank details.
- **Identity theft** is when a criminal **uses someone else's personal information** to commit fraud or other crimes.

## How criminals obtain personal data
- **phishing**: fake emails, SMS or calls pretending to be banks, schools or companies
- fake websites and links
- social media oversharing
- lost or stolen phones, ID cards and documents
- shoulder surfing at ATMs
- malware on computers and phones
- fake SIM swap requests

## Protecting personal data
- never share **PINs, passwords, OTPs, BVN** or NIN with callers or strangers
- use strong passwords and **two-factor authentication**
- lock phones with PINs or fingerprints
- check website addresses before entering details
- do not click unknown links
- tear or shred documents with personal details before disposal
- adjust privacy settings on social media
- report lost ID cards, phones and SIMs quickly

## Nigeria's framework
- **Nigeria Data Protection Act, 2023** — protects personal data and gives people rights over their information.
- **Nigeria Data Protection Commission (NDPC)** — regulates data protection.
- **NIMC** issues the NIN; the **Cybercrimes Act 2015** punishes identity theft.`,
          examples: `**Example 1.** A text message says, "Your BVN is blocked; click this link to update." What is this? *Answer:* a **phishing** attempt.

**Example 2.** Name one way to protect personal data. *Answer:* **never share OTPs or PINs** (or use strong passwords).

**Example 3.** Which law protects personal data in Nigeria? *Answer:* the **Nigeria Data Protection Act, 2023**.`,
        },
        questions: [
          ["E", "Using someone else's personal information to commit fraud is", "identity theft", "identity card", "registration", "census", "Criminals pretend to be the victim."],
          ["E", "Which should never be shared with callers claiming to be from a bank?", "your PIN or OTP", "the bank's name", "the weather", "the date", "Banks never ask for PINs."],
          ["E", "Personal information includes", "your phone number and address", "the name of a river", "a mathematics formula", "the colour of the sky", "It identifies a person."],
          ["M", "Fake messages pretending to be from banks to steal data are called", "phishing", "fishing for fish", "banking", "budgeting", "They 'fish' for information."],
          ["M", "Using a password plus a code sent to your phone to log in is", "two-factor authentication", "one-chance", "phishing", "shoulder surfing", "It adds a layer of security."],
          ["M", "Watching over someone's shoulder to see their PIN is", "shoulder surfing", "phishing", "hacking of servers", "encryption", "It steals PINs at ATMs."],
          ["M", "Before disposing of documents with personal details, you should", "tear or shred them", "throw them away whole", "post them online", "give them to strangers", "Shredding prevents misuse."],
          ["H", "The law that protects personal data in Nigeria is the", "Nigeria Data Protection Act, 2023", "Land Use Act", "Child Rights Act", "Electoral Act 2010", "It created the NDPC."],
          ["H", "The body that regulates data protection in Nigeria is the", "Nigeria Data Protection Commission", "NDLEA", "NAFDAC", "FRSC", "The NDPC enforces data protection."],
          ["H", "Why should a lost SIM card be reported quickly?", "Criminals may use it to access bank accounts through OTPs.", "It will stop working anyway.", "It is not important.", "It helps criminals.", "SIMs receive bank codes."],
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
        title: "Gender-based violence and sexual abuse",
        subtopics: ["Meaning of gender-based violence", "Forms of sexual abuse", "Warning signs and prevention", "Reporting and support services"],
        objectives: ["Explain gender-based violence", "Identify forms of sexual abuse", "Recognise warning signs and prevention strategies", "Identify reporting channels and support services"],
        lesson: {
          title: "Protection from Abuse",
          summary: "Recognise gender-based violence and abuse and know where to get help.",
          minutes: 40,
          notes: `## Meanings
- **Gender-based violence (GBV)** is harm done to a person because of their **sex or gender**, including physical, sexual, emotional and economic abuse.
- **Sexual abuse** is any unwanted sexual act or contact, or any sexual act involving a child.

## Forms
| Form | Examples |
|---|---|
| **physical** | beating, battering |
| **sexual** | rape, unwanted touching, sexual harassment, child sexual abuse |
| **emotional** | threats, humiliation, isolation |
| **economic** | denying money, property or inheritance |
| **harmful practices** | FGM, early and forced marriage |
| **online** | sextortion, sharing intimate images without consent |

## Body safety for young people
- your body belongs to you; **private parts** are private
- no one should touch you inappropriately or ask you to touch them
- **no secrets** about touching; tell a trusted adult
- trust your feelings: if it feels wrong, say **No**, get away and **tell**

## Warning signs of grooming
excessive gifts or attention; asking you to keep secrets; trying to be alone with you; showing inappropriate pictures; online requests for photos.

## Prevention
avoid being alone with people who make you uncomfortable; go out in groups; set boundaries; tell parents where you are; know emergency contacts.

## Reporting and support
parents and teachers, school counsellors, the **police** (gender desks), **Sexual Assault Referral Centres (SARCs)** for medical and psychological care, the **National Human Rights Commission**, social welfare offices and NGOs.
Laws: **Violence Against Persons (Prohibition) Act, 2015**; **Child Rights Act, 2003**.
**Abuse is never the victim's fault.**`,
          examples: `**Example 1.** Name one form of gender-based violence. *Answer:* **sexual harassment** (or forced marriage, battering).

**Example 2.** What should a child do if someone touches them inappropriately? *Answer:* Say **No**, get away and **tell a trusted adult**.

**Example 3.** Where can survivors of sexual assault get medical and psychological care? *Answer:* at a **Sexual Assault Referral Centre (SARC)**.`,
        },
        questions: [
          ["E", "Harm done to a person because of their sex or gender is", "gender-based violence", "gender equality", "family planning", "community service", "GBV targets people because of gender."],
          ["E", "If someone touches you inappropriately, you should", "say No, get away and tell a trusted adult", "keep it secret", "blame yourself", "accept gifts to stay quiet", "Telling brings protection."],
          ["E", "When a child is abused, the abuse is", "never the victim's fault", "always the victim's fault", "acceptable if secret", "a school rule", "Responsibility lies with the abuser."],
          ["M", "Excessive gifts and requests to keep secrets from parents may be signs of", "grooming", "friendship always", "good manners", "scholarship", "Abusers build trust to exploit."],
          ["M", "Threatening to share someone's private images unless they send money or more images is", "sextortion", "community service", "counselling", "photography", "It is online abuse."],
          ["M", "Denying a woman access to money or inheritance is", "economic abuse", "physical abuse", "first aid", "fair treatment", "Control of resources is abuse."],
          ["M", "The law that prohibits many forms of violence against persons in Nigeria is the", "Violence Against Persons (Prohibition) Act", "Land Use Act", "Electoral Act", "Companies Act", "It was passed in 2015."],
          ["H", "Centres that provide medical and psychological care to survivors of sexual assault are called", "Sexual Assault Referral Centres", "motor parks", "polling units", "customs posts", "SARCs support survivors."],
          ["H", "Why is it important not to keep secrets about unsafe touching?", "Secrecy allows abuse to continue.", "Secrets protect children.", "Telling causes trouble for the child.", "It is not important.", "Disclosure stops abuse."],
          ["H", "Police gender desks are designed to", "handle GBV cases sensitively", "punish victims", "sell forms", "record traffic offences only", "They support survivors."],
        ],
      },
      {
        week: 2,
        title: "Conflict prevention and peaceful coexistence",
        subtopics: ["Conflict and insecurity", "Early warning signs of violent conflict", "Peaceful ways of resolving conflict", "Promoting peaceful coexistence"],
        objectives: ["Explain the link between conflict and insecurity", "Identify early warning signs of violent conflict", "Describe peaceful ways of resolving conflict", "Suggest ways of promoting peaceful coexistence"],
        lesson: {
          title: "Preventing Conflict, Building Peace",
          summary: "Recognise signs of violent conflict and promote peaceful coexistence.",
          minutes: 40,
          notes: `## Conflict and insecurity
Unresolved conflicts — over land, chieftaincy, religion, elections or resources — can turn **violent**, leading to killings, displacement and destruction. Preventing conflict is therefore a key part of security.

## Early warning signs of violent conflict
- **hate speech** and inflammatory messages (including on social media)
- rumours and fake news targeting a group
- stockpiling of weapons; strangers arriving in large numbers
- sudden movement of families out of an area
- threats and ultimatums between groups
- closure of shops and schools out of fear
- youth mobilisation by political or ethnic leaders

## Peaceful ways of resolving conflict
dialogue, negotiation, mediation by respected leaders, arbitration, going to court, reconciliation, compromise.

## Promoting peaceful coexistence
- **tolerance** of other ethnic groups and religions
- inter-community activities: sports, festivals, joint projects
- responsible use of social media; not sharing hate speech
- justice and fairness by leaders
- **early warning and early response**: report threats to security agencies and community leaders
- **peace clubs** in schools
- respecting the law and human rights

## Individual role
avoid insults and stereotypes; verify information; be a peacemaker among friends; report threats.`,
          examples: `**Example 1.** Name one early warning sign of violent conflict. *Answer:* **hate speech** (or stockpiling of weapons).

**Example 2.** Name one peaceful way of resolving conflict. *Answer:* **mediation** (or dialogue).

**Example 3.** How can students promote peaceful coexistence? *Answer:* By **joining peace clubs** and refusing to share hate speech.`,
        },
        questions: [
          ["E", "Which can turn conflicts violent?", "hate speech", "dialogue", "tolerance", "mediation", "Hate speech inflames tension."],
          ["E", "Which is a peaceful way of resolving conflict?", "dialogue", "revenge", "violence", "insults", "Talking settles disputes."],
          ["E", "Accepting people of different religions and tribes is", "tolerance", "discrimination", "hatred", "prejudice", "Tolerance supports peace."],
          ["M", "Which is an early warning sign of violent conflict?", "stockpiling of weapons", "joint community festivals", "peace clubs", "inter-community sports", "Weapons signal preparation for violence."],
          ["M", "Sudden movement of families out of an area may indicate", "fear of imminent violence", "a festival", "a school holiday only", "good harvest", "People flee expected attacks."],
          ["M", "A respected person helping two sides reach agreement is", "a mediator", "an attacker", "a rumour-monger", "a thug", "Mediators facilitate agreement."],
          ["M", "Sharing unverified messages that target an ethnic group can", "fuel violence", "promote peace", "reduce tension", "build unity", "Misinformation sparks conflict."],
          ["H", "Early warning and early response means", "detecting signs of conflict and acting before violence starts", "reacting only after deaths", "ignoring signs", "spreading rumours early", "Prevention is better than cure."],
          ["H", "Why is justice important for peaceful coexistence?", "Unfair treatment breeds resentment and conflict.", "Justice causes conflict.", "It has no effect.", "Only violence brings peace.", "Fairness reduces grievances."],
          ["H", "Peace clubs in schools help to", "teach conflict resolution and tolerance", "promote violence", "organise cults", "encourage bullying", "They build peace skills."],
        ],
      },
      {
        week: 3,
        title: "Cybercrime and online scams",
        subtopics: ["Meaning and types of cybercrime", "Common online scams in Nigeria", "Consequences of cybercrime", "Staying safe and reporting"],
        objectives: ["Define cybercrime and identify types", "Recognise common online scams", "Explain the consequences of cybercrime for offenders and victims", "Describe safety measures and reporting channels"],
        lesson: {
          title: "Fighting Crime in Cyberspace",
          summary: "Recognise cybercrimes and scams and protect yourself online.",
          minutes: 40,
          notes: `## Meaning
**Cybercrime** is **crime committed using computers, phones or the internet**.

## Types
| Type | Meaning |
|---|---|
| **hacking** | unauthorised access to computers or accounts |
| **phishing** | tricking people into revealing personal data |
| **identity theft** | using another person's identity |
| **online fraud** ("yahoo yahoo") | deceiving people online to obtain money |
| **cyberbullying and cyberstalking** | harassing or threatening people online |
| **malware and ransomware** | harmful software that damages or locks data |
| **sextortion** | blackmail with intimate images |
| **fake news** | spreading false information |

## Common online scams
fake investment schemes promising huge returns (Ponzi schemes); fake job and scholarship offers; romance scams; fake online shops; "You have won a prize" messages; fake bank alerts; impersonation of friends' accounts asking for money; fake loan apps.

## Consequences
**For offenders:** arrest by the **EFCC** or police; prosecution under the **Cybercrimes Act 2015**; imprisonment; forfeiture of property; ruined reputation; travel bans.
**For victims:** financial loss, emotional distress, damaged reputation.
**For the nation:** bad international image; Nigerians face extra checks online and abroad.

## Staying safe
verify before paying; if it is too good to be true, it probably is; use official apps and websites; enable two-factor authentication; never share OTPs; confirm friends' requests by calling them.
**Report** to the police cybercrime units, the **EFCC**, banks (for fraud) and platform operators.`,
          examples: `**Example 1.** A friend's social media account asks you to send money urgently. What should you do? *Answer:* **Call the friend** to confirm before doing anything.

**Example 2.** Name one type of cybercrime. *Answer:* **hacking** (or phishing, online fraud).

**Example 3.** Which law punishes cybercrimes in Nigeria? *Answer:* the **Cybercrimes (Prohibition, Prevention, etc.) Act, 2015**.`,
        },
        questions: [
          ["E", "Crime committed using computers or the internet is", "cybercrime", "burglary", "arson", "piracy at sea", "It happens online."],
          ["E", "Gaining unauthorised access to someone's account is", "hacking", "chatting", "blogging", "browsing", "It is a cybercrime."],
          ["E", "Which advice helps you avoid online scams?", "If it is too good to be true, it probably is.", "Trust every prize message.", "Share OTPs with callers.", "Pay before verifying.", "Unrealistic offers are traps."],
          ["M", "Harmful software that locks your data until you pay is", "ransomware", "antivirus", "word processor", "spreadsheet", "It extorts victims."],
          ["M", "An investment scheme that pays old investors with new investors' money is a", "Ponzi scheme", "savings account", "cooperative society", "government bond", "It collapses eventually."],
          ["M", "If a friend's account messages you asking for money urgently, you should", "call the friend to confirm", "send money at once", "share your PIN", "ignore all friends forever", "The account may be hacked."],
          ["M", "The agency that arrests and prosecutes internet fraudsters is the", "EFCC", "FRSC", "NCDC", "NiMet", "It fights financial crimes."],
          ["H", "The law that punishes cybercrimes in Nigeria was enacted in", "2015", "1960", "2003", "2023", "The Cybercrimes Act dates from 2015."],
          ["H", "How does internet fraud affect Nigeria as a nation?", "It damages the country's international image.", "It improves foreign relations.", "It creates legal jobs.", "It has no effect.", "Honest Nigerians face suspicion."],
          ["H", "A fake bank alert is used by fraudsters to", "trick sellers into releasing goods without real payment", "give genuine refunds", "protect customers", "pay taxes", "Always confirm with the bank."],
        ],
      },
      {
        week: 4,
        title: "Relating with security personnel and knowing your rights",
        subtopics: ["Roles of security personnel", "Rights of citizens and children during encounters", "Responsibilities of citizens", "Reporting misconduct"],
        objectives: ["Explain the roles of security personnel", "Identify rights of citizens and children during encounters with security agencies", "State citizens' responsibilities during such encounters", "Describe how to report misconduct"],
        lesson: {
          title: "Rights and Responsibilities During Security Encounters",
          summary: "Relate respectfully with security personnel while knowing your rights.",
          minutes: 40,
          notes: `## Roles of security personnel
protecting lives and property; preventing and investigating crime; maintaining public order; enforcing laws; responding to emergencies; assisting victims.

## Rights of citizens during encounters
- right to **dignity**: no torture or degrading treatment (Anti-Torture Act, 2017)
- right to know the **reason for arrest**
- right to **remain silent** and to consult a **lawyer**
- right to be brought before a court within the time set by the Constitution (Section 35)
- right to **bail** in appropriate cases ("bail is free")
- presumption of **innocence** (Section 36)
- right not to be arrested in place of another person (Administration of Criminal Justice Act, 2015)

## Rights of children
- a child should not be detained with adults
- parents or guardians must be informed
- a child's statement should be taken in the presence of a parent, guardian or appropriate person
- child-friendly treatment under the **Child Rights Act 2003**

## Responsibilities of citizens
remain **calm and respectful**; obey **lawful** instructions; provide correct identification; do not resist lawful arrest; give truthful information; do not bribe officers; record the officer's name and number if there is misconduct.

## Reporting misconduct
police **Complaint Response Units**, Police Service Commission, National Human Rights Commission, legal aid, the courts, civil society organisations.`,
          examples: `**Example 1.** Name one right of a person being arrested. *Answer:* the **right to know the reason for the arrest** (or to a lawyer).

**Example 2.** Should a child be detained together with adults? *Answer:* **No**.

**Example 3.** Where can police misconduct be reported? *Answer:* the **Police Complaint Response Unit** (or Police Service Commission, NHRC).`,
        },
        questions: [
          ["E", "A person being arrested has the right to", "know the reason for the arrest", "be tortured", "be detained forever", "be denied a lawyer", "Arrests must be explained."],
          ["E", "During an encounter with security personnel, a citizen should be", "calm and respectful", "rude and violent", "insulting", "aggressive", "Calm behaviour prevents escalation."],
          ["E", "Offering money to an officer to avoid arrest is", "bribery", "civic duty", "bail", "evidence", "It is corruption."],
          ["M", "The law that prohibits torture in Nigeria is the", "Anti-Torture Act, 2017", "Land Use Act", "Electoral Act", "Companies Act", "It criminalises torture."],
          ["M", "Arresting a person in place of a suspect is prohibited by the", "Administration of Criminal Justice Act, 2015", "Land Use Act", "Child Rights Act only", "Electoral Act", "Each person answers for himself."],
          ["M", "When a child is arrested, the police must", "inform the parents or guardian", "keep the parents unaware", "detain the child with adults", "deny food", "Children need protection."],
          ["M", "The presumption of innocence means", "a person is innocent until proven guilty", "everyone arrested is guilty", "only the rich are innocent", "courts are unnecessary", "Section 36 provides it."],
          ["H", "Police misconduct can be reported to the", "Police Complaint Response Unit", "Nigerian Customs Service", "NiMet", "NCDC", "It handles complaints against officers."],
          ["H", "Why should a citizen obey lawful instructions but not unlawful ones?", "The law binds officers too; unlawful orders violate rights.", "All orders must be obeyed.", "No orders should be obeyed.", "Officers are above the law.", "Lawfulness defines legitimate authority."],
          ["H", "The slogan 'bail is free' means", "no one should pay money to be granted police bail", "bail is not allowed", "bail must be bought", "only lawyers get bail", "Charging for bail is illegal."],
        ],
      },
      {
        week: 5,
        title: "Community policing and reporting crime",
        subtopics: ["Meaning of community policing", "Principles of community policing", "How to report crime effectively", "Protecting informants"],
        objectives: ["Explain community policing", "State principles of community policing", "Report crime effectively", "Explain how informants are protected"],
        lesson: {
          title: "Partnering with the Police",
          summary: "Explain community policing and how to report crime effectively.",
          minutes: 40,
          notes: `## Meaning
**Community policing** is a **partnership between the police and the community** to identify and solve problems of crime and disorder together.
Nigeria's **Police Act, 2020** provides for community policing, and community policing committees exist in many areas.

## Principles
- **partnership**: citizens and police work together
- **problem solving**: address root causes, not only arrests
- **trust and respect** on both sides
- **decentralisation**: officers who know the community
- **accountability** of police to the community
- **prevention** as a priority

## Benefits
better intelligence; faster response; reduced crime and fear; improved police–public relations; early detection of threats.

## Reporting crime effectively
Report to the police, community policing committees or through **112**. Give:
1. what happened (type of crime)
2. where and when
3. description of suspects: sex, height, clothing, marks, direction taken
4. vehicles: type, colour, plate number
5. number of victims and injuries
6. whether weapons were seen
Report **promptly** and **truthfully**; do not exaggerate.

## Protecting informants
Security agencies should keep informants' identities **confidential**. Citizens may use **anonymous** reporting channels. Informants should not publicise their reports.`,
          examples: `**Example 1.** What is community policing? *Answer:* A **partnership between the police and the community** to prevent and solve crime.

**Example 2.** Name two details to give when reporting a suspect. *Answer:* **clothing** and **direction taken** (or height, marks).

**Example 3.** Why should informants' identities be kept secret? *Answer:* To **protect them from revenge** by criminals.`,
        },
        questions: [
          ["E", "A partnership between the police and the community to fight crime is", "community policing", "jungle justice", "cultism", "vigilante violence", "Cooperation prevents crime."],
          ["E", "Crime should be reported", "promptly and truthfully", "after many weeks", "with exaggeration", "only on social media", "Quick, accurate reports help."],
          ["E", "The toll-free number for reporting emergencies is", "112", "999", "911", "000", "It connects to emergency services."],
          ["M", "The law that provides for community policing in Nigeria is the", "Police Act, 2020", "Land Use Act", "Child Rights Act", "Companies Act", "It modernised policing."],
          ["M", "Which is a principle of community policing?", "trust and respect between police and public", "secrecy from the community", "force without accountability", "ignoring citizens", "Trust enables partnership."],
          ["M", "When reporting a suspect, a useful detail is", "the direction the suspect went", "your favourite song", "the colour of the sky", "the school timetable", "It guides pursuit."],
          ["M", "Which is a benefit of community policing?", "better intelligence on crime", "more crime", "less trust", "slower response", "Residents share information."],
          ["H", "Informants' identities should be kept confidential to", "protect them from revenge", "hide crimes", "delay investigations", "embarrass them", "Safety encourages reporting."],
          ["H", "Community policing focuses on prevention and", "problem solving", "revenge", "punishing all youths", "secrecy", "It tackles root causes."],
          ["H", "Anonymous reporting channels are useful because", "people can report without fear of exposure", "they encourage false reports only", "they are illegal", "they stop investigations", "Anonymity reduces fear."],
        ],
      },
      {
        week: 6,
        title: "Personal security plan",
        subtopics: ["Meaning of a personal security plan", "Identifying personal risks", "Safety routines and contacts", "Reviewing and practising the plan"],
        objectives: ["Explain a personal security plan", "Identify personal risks in daily routines", "Develop safety routines and emergency contacts", "Review and practise a personal security plan"],
        lesson: {
          title: "Making Your Own Safety Plan",
          summary: "Develop a practical personal security plan for daily life.",
          minutes: 40,
          notes: `## Meaning
A **personal security plan** is a simple, written set of **actions and contacts** an individual uses to **reduce risks** and respond to emergencies in daily life.

## Step 1: Identify personal risks
Think about your daily routine:
- route to and from school (lonely stretches? busy roads?)
- times you are alone at home
- online activities
- places you visit (markets, parks, events)
- health needs (allergies, asthma, sickle cell)

## Step 2: Safety routines
- travel in **groups** on known routes
- keep phones charged; carry a small amount of emergency money
- tell parents your plans and expected return time; agree on a **check-in** system
- family **code word** for pickups
- lock doors when alone; do not open to strangers
- follow online safety rules

## Step 3: Emergency contacts and information
parents/guardians, a trusted neighbour, school, **112**, nearest police station and hospital; medical information (blood group, allergies).

## Step 4: Know safe places
school, police stations, hospitals, trusted shops, places of worship along your route.

## Step 5: Review and practise
update the plan when routines change; discuss it with family; practise drills (fire, lockdown, meeting points).`,
          examples: `**Example 1.** What is a personal security plan? *Answer:* A set of **actions and contacts** to reduce risks and respond to emergencies.

**Example 2.** Give one safety routine for travelling to school. *Answer:* **Walk in groups on a known route.**

**Example 3.** Name one safe place along a route. *Answer:* a **police station** (or school, hospital).`,
        },
        questions: [
          ["E", "A set of actions and contacts to reduce personal risks is a", "personal security plan", "timetable of lessons", "shopping list", "birthday plan", "It guides safety decisions."],
          ["E", "Telling parents your expected return time helps", "them know if something goes wrong", "waste time", "increase risk", "hide your movements", "Delays can trigger help."],
          ["E", "Which is a safe place to run to if followed?", "a police station", "a lonely bush path", "an empty building", "a dark alley", "Police can help immediately."],
          ["M", "The first step in making a personal security plan is to", "identify personal risks", "buy expensive gadgets", "ignore routines", "post plans online", "Knowing risks guides planning."],
          ["M", "A system where you inform parents when you arrive at a destination is a", "check-in system", "code word", "lockdown", "evacuation", "It confirms safety."],
          ["M", "Including your blood group and allergies in your plan helps", "medical responders in emergencies", "criminals", "no one", "only friends", "Medical information speeds treatment."],
          ["M", "A personal security plan should be reviewed", "whenever routines change", "never", "only once in life", "only after a crime", "Plans must stay current."],
          ["H", "Why should you keep your phone charged and carry some emergency money?", "to call for help and get transport in emergencies", "to impress friends", "to buy snacks only", "to attract thieves", "Resources support escape."],
          ["H", "Practising drills with family helps because", "people respond faster and calmly in real emergencies", "it wastes time", "it creates fear", "it is unnecessary", "Practice builds readiness."],
          ["H", "Which risk should a student who walks home through a lonely stretch plan for?", "abduction or robbery", "flooding in the desert", "volcanoes", "snowstorms", "Lonely routes increase crime risk."],
        ],
      },
    ],
  },
];
