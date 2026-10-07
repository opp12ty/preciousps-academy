import type { TermPlan } from "../types";

/** JSS1 Security Education — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and importance of security education",
        subtopics: ["Meaning of security and safety", "Meaning of security education", "Objectives of security education", "Importance to the individual and nation"],
        objectives: ["Explain security and safety", "Define security education", "State the objectives of security education", "Explain the importance of security education"],
        lesson: {
          title: "Why Learn About Security?",
          summary: "Understand security, safety and why every citizen needs security education.",
          minutes: 40,
          notes: `## Meanings
- **Security** is the state of being **free from danger, threat or harm**, and the measures taken to protect people and property.
- **Safety** is the condition of being **protected from accidents and injury**.
- **Security education** teaches people how to **recognise threats, avoid dangers, protect themselves and others**, and respond correctly in emergencies.
Security Education was introduced into Nigeria's Basic Education curriculum to help learners cope with rising insecurity.

## Objectives
- to create **security awareness** and consciousness
- to teach **personal safety** skills
- to teach how to **report** threats and emergencies
- to promote **cooperation** with security agencies
- to reduce crime, accidents and panic in emergencies
- to build responsible, **vigilant** citizens

## Importance
| To the individual | To the nation |
|---|---|
| protects life and property | reduces crime and insecurity |
| builds confidence and alertness | supports security agencies with information |
| teaches first response in emergencies | promotes peace and development |
| helps avoid kidnapping, fraud and abuse | encourages investment and tourism |

## Security is everyone's business
The slogan **"If you see something, say something"** means every citizen should report suspicious activities to trusted adults or the authorities.`,
          examples: `**Example 1.** What is security education? *Answer:* Education that teaches people to **recognise threats, avoid danger and respond correctly** in emergencies.

**Example 2.** Give one importance of security education to the nation. *Answer:* It **reduces crime and insecurity**.

**Example 3.** What does "If you see something, say something" mean? *Answer:* **Report suspicious activities** to trusted adults or authorities.`,
        },
        questions: [
          ["E", "The state of being free from danger or threat is", "security", "insecurity", "pollution", "poverty", "Security means protection from harm."],
          ["E", "Security education teaches people to", "recognise and avoid threats", "commit crimes", "ignore danger", "panic in emergencies", "It builds awareness and safe habits."],
          ["E", "The condition of being protected from accidents and injury is", "safety", "danger", "risk", "crime", "Safety prevents harm."],
          ["M", "Which is an objective of security education?", "creating security awareness", "encouraging crime", "hiding information from authorities", "promoting fear", "Awareness is its main goal."],
          ["M", "The slogan 'If you see something, say something' encourages", "reporting suspicious activities", "ignoring strange behaviour", "spreading rumours", "fighting strangers", "Information helps security."],
          ["M", "Security education helps individuals by", "teaching them how to respond in emergencies", "making them careless", "encouraging risky behaviour", "stopping them from learning", "Preparedness saves lives."],
          ["M", "Security is described as everyone's business because", "every citizen can help prevent threats", "only soldiers can help", "only the President is responsible", "it concerns nobody", "Vigilant citizens support security."],
          ["H", "How does security education support national development?", "It reduces insecurity and encourages investment.", "It increases crime.", "It discourages tourism.", "It has no effect.", "Safe environments attract investment."],
          ["H", "Being alert and watchful of one's surroundings is called", "vigilance", "carelessness", "apathy", "negligence", "Vigilance helps spot danger early."],
          ["H", "Why was Security Education introduced into Nigerian schools?", "to help learners cope with rising insecurity", "to replace Mathematics", "to train soldiers only", "to reduce school hours", "Learners need safety skills."],
        ],
      },
      {
        week: 2,
        title: "Types of security",
        subtopics: ["Personal security", "Home and school security", "Community security", "National security"],
        objectives: ["Identify types of security", "Describe measures for personal security", "Describe measures for home, school and community security", "Explain national security"],
        lesson: {
          title: "Levels of Security",
          summary: "Identify the levels of security from the individual to the nation.",
          minutes: 40,
          notes: `## Types (levels) of security
| Type | Meaning | Examples of measures |
|---|---|---|
| **personal security** | protection of one's body, life and belongings | being alert, avoiding lonely places, not accepting gifts or lifts from strangers, keeping personal information private |
| **home security** | protection of family and property at home | locking doors and windows, burglary-proof bars, security lights, not opening doors to strangers, knowing neighbours |
| **school security** | protection of students, staff and property in school | perimeter fence, gate control, identity cards, visitors' register, emergency drills, reporting strangers |
| **community security** | protection of people and property in a community | neighbourhood watch, street lights, community policing, reporting crimes |
| **national security** | protection of the country from internal and external threats | armed forces, police, intelligence agencies, border control, good governance |

Other forms: **food security** (enough nutritious food), **health security** (protection from diseases), **environmental security**, **cyber security** (protection of computers and data), **economic security**.

## Relationship
All levels are connected: when individuals are careful and communities are vigilant, national security becomes stronger.`,
          examples: `**Example 1.** Locking doors at night is an example of **home security**.

**Example 2.** Checking visitors at the school gate is an example of **school security**.

**Example 3.** Protecting Nigeria's borders is part of **national security**.`,
        },
        questions: [
          ["E", "Protection of one's body, life and belongings is", "personal security", "national security", "food security", "cyber security", "It concerns the individual."],
          ["E", "Locking doors and windows at night is an example of", "home security", "national security", "cyber security", "food security", "It protects the household."],
          ["E", "Protection of a country from internal and external threats is", "national security", "personal security only", "home security", "school security", "It concerns the whole nation."],
          ["M", "Checking visitors at the school gate is an example of", "school security", "food security", "cyber security", "health security", "It controls who enters the school."],
          ["M", "A neighbourhood watch group contributes to", "community security", "cyber security", "food security", "personal hygiene", "Residents watch over their area."],
          ["M", "Protecting computers and personal data from attack is", "cyber security", "food security", "home security", "border security", "It concerns digital systems."],
          ["M", "Having enough nutritious food for all people is", "food security", "cyber security", "national defence", "school security", "It prevents hunger."],
          ["H", "Why are the levels of security connected?", "Vigilant individuals and communities strengthen national security.", "They have no link.", "Only national security matters.", "Personal security harms communities.", "Security builds from the individual upwards."],
          ["H", "Not accepting lifts from strangers is a measure of", "personal security", "national security", "food security", "cyber security", "It protects the individual from abduction."],
          ["H", "Controlling who enters and leaves Nigeria is the work of", "border security", "home security", "food security", "school security", "Immigration and Customs guard borders."],
        ],
      },
      {
        week: 3,
        title: "Threats and risks",
        subtopics: ["Meaning of threat, risk and vulnerability", "Common threats to students", "Warning signs of danger", "Reducing risk"],
        objectives: ["Distinguish threat, risk and vulnerability", "Identify common threats to students", "Recognise warning signs of danger", "Suggest ways of reducing risk"],
        lesson: {
          title: "Recognising Danger",
          summary: "Identify threats and warning signs and reduce personal risk.",
          minutes: 40,
          notes: `## Key terms
| Term | Meaning | Example |
|---|---|---|
| **threat** | anything that can cause harm | a kidnapper, a fire, a flood |
| **vulnerability** | a weakness that makes harm more likely | walking alone at night, an open window |
| **risk** | the chance that harm will happen (threat + vulnerability) | high risk of theft if a phone is displayed in a crowded bus |

## Common threats to students
kidnapping and abduction, bullying, sexual abuse, cultism and gangs, drug pushers, road accidents, fire and electrical accidents, online scams and cyberbullying, theft, stampedes, epidemics.

## Warning signs of danger
- a stranger watching the school or following you
- unknown vehicles parked near the school for long periods
- someone offering gifts, money or lifts
- adults asking you to keep secrets from your parents
- unusual packages or bags left unattended
- smell of smoke or gas
- sudden panic or crowd movement

## Reducing risk
- stay in **groups**; avoid lonely and dark places
- tell parents where you are going
- do not share personal information with strangers
- report strange people, vehicles or packages
- follow safety rules and drills
- trust your feelings: if something feels wrong, **leave** and **tell** a trusted adult`,
          examples: `**Example 1.** Walking alone at night is a **vulnerability** that increases risk.

**Example 2.** Name one warning sign of danger. *Answer:* a **stranger following you** (or an unattended bag).

**Example 3.** What should you do if something feels wrong? *Answer:* **Leave** the place and **tell** a trusted adult.`,
        },
        questions: [
          ["E", "Anything that can cause harm is a", "threat", "reward", "skill", "value", "Threats are sources of harm."],
          ["E", "Which is a warning sign of danger?", "a stranger following you", "a teacher greeting you", "a friend lending a pen", "a parent picking you up", "Being followed is suspicious."],
          ["E", "To reduce risk, students should", "move in groups", "walk alone in dark places", "accept lifts from strangers", "share home addresses online", "Groups are safer."],
          ["M", "A weakness that makes harm more likely is", "vulnerability", "threat", "security", "safety", "It increases risk."],
          ["M", "The chance that harm will happen is", "risk", "value", "reward", "vigilance", "Risk combines threat and vulnerability."],
          ["M", "An unattended bag in a crowded place should be", "reported to the authorities", "opened immediately", "kicked", "taken home", "It could be dangerous."],
          ["M", "An adult asking a child to keep secrets from parents is", "a warning sign", "normal and safe", "a reward", "a school rule", "Abusers often demand secrecy."],
          ["H", "Displaying an expensive phone in a crowded bus increases the", "risk of theft", "safety of the owner", "security of passengers", "value of the phone", "It attracts thieves."],
          ["H", "Which combination best describes risk?", "threat plus vulnerability", "safety plus security", "value plus reward", "skill plus talent", "Risk depends on both."],
          ["H", "The best response when a situation feels unsafe is to", "leave and tell a trusted adult", "stay and ignore it", "confront the danger alone", "post it online first", "Getting to safety comes first."],
        ],
      },
      {
        week: 4,
        title: "Personal safety at home",
        subtopics: ["Common home accidents", "Safety with fire, gas and electricity", "Safety with medicines and chemicals", "Security of the home"],
        objectives: ["Identify common accidents at home", "State safety rules for fire, gas and electricity", "Explain safe handling of medicines and chemicals", "Describe measures for securing the home"],
        lesson: {
          title: "Staying Safe at Home",
          summary: "Prevent accidents and keep the home secure.",
          minutes: 40,
          notes: `## Common home accidents
falls (wet floors, stairs), burns and scalds, electric shock, poisoning, cuts, choking, drowning (wells, buckets), gas explosions.

## Fire and gas safety
- never leave cooking unattended
- keep matches and lighters away from children
- switch off gas cylinders after use; check for leaks with **soapy water**, never with a flame
- if you smell gas: **do not switch on lights**, open windows, turn off the cylinder, leave, and call for help
- keep the generator **outside**, away from windows

## Electrical safety
- do not touch switches with wet hands
- do not overload sockets
- replace damaged cords
- switch off appliances after use

## Medicines and chemicals
- keep medicines, kerosene, insecticides and bleach **out of reach of children**
- never store chemicals in drink bottles
- take medicines only as prescribed

## Home security
lock doors and windows; do not open the door to strangers; use peepholes or ask "Who is it?"; keep keys safe; do not tell strangers when the house is empty; keep emergency numbers (**112**) handy; know your neighbours.`,
          examples: `**Example 1.** How should you check a gas cylinder for leaks? *Answer:* With **soapy water** — bubbles show a leak.

**Example 2.** Why should kerosene never be stored in a drink bottle? *Answer:* Someone may **drink it by mistake** and be poisoned.

**Example 3.** What should you do if you smell gas at home? *Answer:* **Do not switch on lights**; open windows, turn off the cylinder, leave and call for help.`,
        },
        questions: [
          ["E", "Which is a common home accident?", "burns from hot water", "winning a prize", "doing homework", "reading a book", "Scalds are frequent at home."],
          ["E", "Medicines should be kept", "out of reach of children", "on the floor", "in drink bottles", "in the kitchen sink", "Children may swallow them."],
          ["E", "You should not touch electrical switches with", "wet hands", "dry hands", "gloves", "a clean cloth", "Water conducts electricity."],
          ["M", "A gas cylinder leak should be checked with", "soapy water", "a lighted match", "a candle", "a torch flame", "Bubbles reveal leaks safely."],
          ["M", "If you smell gas in the kitchen, you should NOT", "switch on the lights", "open the windows", "turn off the cylinder", "leave the room", "Sparks may cause an explosion."],
          ["M", "Kerosene should never be stored in", "drink bottles", "labelled containers", "locked cabinets", "safe storage areas", "It may be drunk by mistake."],
          ["M", "When a stranger knocks at the door, a child at home alone should", "not open the door and call a parent", "open the door widely", "invite the stranger in", "go outside to meet him", "Strangers may be dangerous."],
          ["H", "Why should generators be placed outside the house?", "Their fumes contain poisonous carbon monoxide.", "They work better in the sun.", "They are too noisy only.", "They attract customers.", "Carbon monoxide can kill."],
          ["H", "Which action reduces the risk of drowning for small children?", "covering wells and buckets of water", "leaving wells open", "letting children swim alone", "filling buckets near toddlers", "Children can drown in small amounts of water."],
          ["H", "Telling strangers that your house will be empty during holidays", "increases the risk of burglary", "improves home security", "is a safety rule", "protects neighbours", "Burglars target empty houses."],
        ],
      },
      {
        week: 5,
        title: "Safety in school",
        subtopics: ["School security measures", "Safety in classrooms, laboratories and playgrounds", "Emergency drills", "Students' roles in school safety"],
        objectives: ["Identify security measures in schools", "State safety rules for classrooms, laboratories and playgrounds", "Describe emergency drills", "Explain students' roles in keeping the school safe"],
        lesson: {
          title: "A Safe School for All",
          summary: "Follow school safety rules and take part in keeping the school secure.",
          minutes: 40,
          notes: `## School security measures
perimeter fence and gates; **security guards**; visitors' register and gate passes; student **identity cards** and uniforms; CCTV cameras (in some schools); emergency alarms; security lights; controlled pick-up of pupils; **Safe Schools Initiative** measures.

## Safety rules
| Place | Rules |
|---|---|
| **classroom** | no running or fighting; report broken windows, exposed wires and loose ceiling boards |
| **laboratory** | enter only with a teacher; no eating or tasting; follow instructions; report breakages |
| **playground** | use equipment properly; no dangerous games; report injuries |
| **workshop** | wear protective clothing; use tools correctly |
| **stairs and corridors** | walk; keep to the right; do not push |

## Emergency drills
Regular **fire drills** and **evacuation drills** teach students to leave buildings quickly and orderly:
1. stop work when the alarm sounds
2. leave bags behind
3. walk quickly — **do not run or push**
4. follow the teacher to the **assembly point**
5. stay with your class for a **headcount**

## Students' roles
obey school rules; wear ID cards; report strangers, fights, bullying, drugs and weapons; do not leave school without permission; keep the environment clean; take drills seriously.`,
          examples: `**Example 1.** Name one school security measure. *Answer:* a **visitors' register** (or perimeter fence).

**Example 2.** Where should students gather during a fire drill? *Answer:* at the **assembly point**.

**Example 3.** Why should students not run during an evacuation? *Answer:* Running and pushing can cause **falls and stampedes**.`,
        },
        questions: [
          ["E", "Which is a school security measure?", "a visitors' register at the gate", "an open unguarded gate", "no fence", "allowing strangers into classes", "Registers track visitors."],
          ["E", "During an evacuation, students should", "walk quickly without pushing", "run and push", "go back for their bags", "hide in the classroom", "Orderly movement prevents injuries."],
          ["E", "Students should enter the laboratory", "only with a teacher's permission", "at any time", "to eat lunch", "to play games", "Laboratories contain hazards."],
          ["M", "The place where students gather after evacuating a building is the", "assembly point", "staff room", "laboratory", "library", "Headcounts are taken there."],
          ["M", "Wearing identity cards in school helps to", "identify students and detect intruders", "decorate uniforms", "replace exercise books", "reduce homework", "IDs support gate control."],
          ["M", "Exposed electrical wires in a classroom should be", "reported to the teacher", "touched", "ignored", "pulled out by students", "They can cause shock or fire."],
          ["M", "Practising how to leave a building quickly during an emergency is a", "fire or evacuation drill", "sports competition", "debate", "examination", "Drills build readiness."],
          ["H", "Why should students not return for bags during a fire drill?", "It wastes time and puts them in danger.", "Bags are not important ever.", "Teachers dislike bags.", "It is against uniform rules.", "Seconds matter in emergencies."],
          ["H", "A headcount at the assembly point helps to", "find out if anyone is missing", "choose prefects", "mark homework", "sell snacks", "Missing persons can be searched for."],
          ["H", "The Safe Schools Initiative in Nigeria aims to", "protect students and schools from attacks", "close all schools", "train soldiers in schools", "abolish uniforms", "It responds to attacks on schools."],
        ],
      },
      {
        week: 6,
        title: "Introduction to security agencies",
        subtopics: ["Meaning of security agencies", "The armed forces", "The police and paramilitary agencies", "Relating with security personnel"],
        objectives: ["Explain security agencies", "Identify the armed forces and their roles", "Identify the police and paramilitary agencies and their roles", "Describe how citizens should relate with security personnel"],
        lesson: {
          title: "Those Who Keep Us Safe",
          summary: "Identify Nigeria's security agencies and how to relate with them.",
          minutes: 40,
          notes: `## Meaning
**Security agencies** are government organisations responsible for **protecting lives, property and the nation**, enforcing laws and responding to emergencies.

## The armed forces
- **Nigerian Army** — land
- **Nigerian Navy** — sea and waterways
- **Nigerian Air Force** — air
The **President** is the **Commander-in-Chief**.

## Police and paramilitary agencies
| Agency | Main role |
|---|---|
| **Nigeria Police Force** | maintain law and order; prevent and investigate crime |
| **NSCDC (Civil Defence)** | protect public infrastructure; disaster support |
| **Nigeria Immigration Service** | control entry and exit; passports |
| **Nigeria Customs Service** | collect duties; stop smuggling |
| **FRSC** | road safety |
| **NDLEA** | drug control |
| **Federal Fire Service** | fire prevention and rescue |
| **Nigerian Correctional Service** | custody and rehabilitation of offenders |
| **DSS** | intelligence and internal security |

## Relating with security personnel
- be **respectful** and cooperative
- give **accurate** information
- identify genuine officers (uniform, ID); be cautious of impostors
- know your rights (e.g. a child should have a parent or guardian present)
- report misconduct through proper channels (e.g. police complaint units)
Emergency number: **112** (toll-free).`,
          examples: `**Example 1.** Which arm of the armed forces protects Nigeria's waters? *Answer:* the **Navy**.

**Example 2.** Which agency issues passports? *Answer:* the **Nigeria Immigration Service**.

**Example 3.** What is the national emergency number? *Answer:* **112**.`,
        },
        questions: [
          ["E", "The agency that maintains law and order and investigates crime is the", "Nigeria Police Force", "FRSC", "NAFDAC", "NPC", "Police fight crime."],
          ["E", "The arm of the armed forces responsible for the air is the", "Air Force", "Army", "Navy", "Police", "The Air Force operates aircraft."],
          ["E", "The national toll-free emergency number is", "112", "999", "000", "123", "It connects to emergency services."],
          ["M", "The agency that issues passports is the", "Nigeria Immigration Service", "Customs Service", "FRSC", "NDLEA", "It controls travel documents."],
          ["M", "The agency that fights smuggling and collects import duties is the", "Nigeria Customs Service", "Immigration Service", "Fire Service", "NSCDC", "Customs guards trade routes."],
          ["M", "The Commander-in-Chief of the Armed Forces is the", "President", "Inspector-General of Police", "Chief of Army Staff", "Senate President", "The Constitution provides this."],
          ["M", "The agency that protects public infrastructure such as pipelines is the", "NSCDC", "NDLEA", "FRSC", "Customs Service", "Civil Defence guards infrastructure."],
          ["H", "How should citizens relate with genuine security personnel?", "respectfully and cooperatively, giving accurate information", "by fighting them", "by lying to them", "by ignoring them", "Cooperation helps security."],
          ["H", "Why should citizens check the identity of people claiming to be officers?", "to avoid falling victim to impostors", "to insult officers", "to delay emergencies", "it is not necessary", "Criminals may impersonate officers."],
          ["H", "The agency responsible for custody and rehabilitation of offenders is the", "Nigerian Correctional Service", "FRSC", "NAFDAC", "Immigration Service", "It replaced the Prisons Service."],
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
        title: "Crime: meaning and types",
        subtopics: ["Meaning of crime", "Types of crime", "Causes of crime", "Effects of crime"],
        objectives: ["Define crime", "Classify types of crime", "Identify causes of crime", "Explain effects of crime on individuals and society"],
        lesson: {
          title: "Understanding Crime",
          summary: "Define crime, classify its types and explain its causes and effects.",
          minutes: 40,
          notes: `## Meaning
A **crime** is an act or omission that **breaks the law** and is **punishable by the state**.

## Types of crime
| Type | Examples |
|---|---|
| **crimes against persons** | murder, assault, kidnapping, rape |
| **crimes against property** | theft (stealing), burglary, robbery, vandalism, arson |
| **financial crimes** | fraud, forgery, embezzlement, internet fraud |
| **drug-related crimes** | drug trafficking, possession of illegal drugs |
| **crimes against the state** | terrorism, treason, pipeline vandalism |
| **cybercrimes** | hacking, identity theft, online scams, cyberbullying |
| **traffic offences** | reckless driving, driving without a licence |

**Felonies** are serious crimes (e.g. armed robbery, murder); **misdemeanours** are less serious (e.g. minor assault); **simple offences** are minor breaches.

## Causes of crime
poverty and unemployment, greed, peer pressure, drug abuse, poor parenting, illiteracy, weak law enforcement, corruption, availability of weapons, idleness.

## Effects of crime
| Victims | Society |
|---|---|
| injury and death | fear and insecurity |
| loss of property | loss of investment and jobs |
| trauma | poor national image |
| financial loss | high cost of security |`,
          examples: `**Example 1.** Is burglary a crime against persons or property? *Answer:* **property**.

**Example 2.** Name one cause of crime. *Answer:* **unemployment** (or peer pressure, drug abuse).

**Example 3.** Name one effect of crime on society. *Answer:* **fear and insecurity** (or loss of investment).`,
        },
        questions: [
          ["E", "An act that breaks the law and is punishable by the state is a", "crime", "custom", "habit", "game", "Crimes attract legal punishment."],
          ["E", "Stealing is a crime against", "property", "the state only", "the environment only", "nature", "It takes others' belongings."],
          ["E", "Which is a cause of crime?", "unemployment", "hard work", "good parenting", "education", "Idle people may turn to crime."],
          ["M", "Breaking into a house to steal is", "burglary", "fraud", "forgery", "treason", "Burglary involves unlawful entry."],
          ["M", "Deceiving people online to obtain money is", "internet fraud", "vandalism", "assault", "arson", "It is a cybercrime."],
          ["M", "Deliberately setting fire to property is", "arson", "forgery", "burglary", "embezzlement", "Arson destroys property by fire."],
          ["M", "Which is an effect of crime on society?", "fear and insecurity", "more investment", "better image", "lower security costs", "Crime frightens people."],
          ["H", "Serious crimes such as murder and armed robbery are called", "felonies", "misdemeanours", "simple offences", "customs", "They attract severe punishment."],
          ["H", "Damaging public property deliberately is", "vandalism", "fraud", "forgery", "embezzlement", "It destroys shared facilities."],
          ["H", "Crimes such as terrorism and treason are crimes against", "the state", "only individuals", "the environment only", "animals", "They threaten the nation."],
        ],
      },
      {
        week: 2,
        title: "Crime prevention",
        subtopics: ["Meaning of crime prevention", "Individual crime prevention", "Community crime prevention", "Role of government and security agencies"],
        objectives: ["Explain crime prevention", "Describe individual measures to prevent crime", "Describe community measures to prevent crime", "Explain government's role in crime prevention"],
        lesson: {
          title: "Stopping Crime Before It Happens",
          summary: "Describe individual, community and government measures to prevent crime.",
          minutes: 40,
          notes: `## Meaning
**Crime prevention** refers to actions taken to **reduce the chances of crime** happening and to reduce fear of crime.

## Individual measures
- be alert and avoid risky places and times
- secure belongings: do not display valuables
- lock doors, windows, bicycles and vehicles
- protect personal information and passwords
- avoid bad company; say **No** to crime and drugs
- report suspicious persons and activities

## Community measures
- **neighbourhood watch** and vigilance groups (operating within the law)
- **street lights** and clearing bushes where criminals hide
- community gates and controlled entry at night where lawful
- **community policing** partnerships with the police
- youth engagement: sports, skills training, jobs
- community meetings to share security information

## Government and security agencies
- effective **policing** and patrols
- **laws** and swift **justice**
- job creation and poverty reduction
- **education** and public enlightenment
- modern technology (CCTV, databases, NIN–SIM linkage)
- border control against arms and drugs

## Target hardening
Making targets **harder** to attack: strong doors, burglary-proof bars, alarms, safes, security guards, CCTV.`,
          examples: `**Example 1.** Name one individual crime-prevention measure. *Answer:* **locking doors and windows** (or not displaying valuables).

**Example 2.** How do street lights help prevent crime? *Answer:* Criminals **avoid well-lit areas** where they can be seen.

**Example 3.** What is target hardening? *Answer:* **Making homes and property harder to attack**, e.g. with strong doors and alarms.`,
        },
        questions: [
          ["E", "Actions taken to reduce the chances of crime are called", "crime prevention", "crime promotion", "criminal trial", "sentencing", "Prevention stops crime before it happens."],
          ["E", "Which is an individual crime-prevention measure?", "locking doors and windows", "leaving doors open", "displaying valuables", "sharing passwords", "Locks deter thieves."],
          ["E", "Street lights help prevent crime because criminals", "avoid well-lit areas", "prefer bright light", "cannot see at night", "enjoy darkness less than light always", "Light exposes criminals."],
          ["M", "Residents organising to watch over their area form a", "neighbourhood watch", "political party", "trade union", "cult", "It supports community security."],
          ["M", "Making homes harder to attack with strong doors and alarms is", "target hardening", "vandalism", "burglary", "trespass", "It deters attackers."],
          ["M", "Partnership between communities and the police to fight crime is", "community policing", "jungle justice", "cultism", "vigilante violence", "It improves cooperation."],
          ["M", "Engaging youths in sports and skills training helps to", "reduce idleness and crime", "increase crime", "encourage gangs", "promote drug abuse", "Busy youths avoid crime."],
          ["H", "Clearing bushes around homes helps prevent crime because", "criminals cannot hide there easily", "it attracts snakes", "it makes houses hotter", "it has no effect", "Bushes provide hiding places."],
          ["H", "Which government measure prevents crime in the long term?", "job creation and poverty reduction", "ignoring unemployment", "reducing police patrols", "weakening laws", "Opportunities reduce crime."],
          ["H", "Community security groups must operate", "within the law", "above the law", "by jungle justice", "in secret cults", "They must respect rights and laws."],
        ],
      },
      {
        week: 3,
        title: "Stranger danger and abduction",
        subtopics: ["Who is a stranger", "Tricks used by abductors", "Safety rules against abduction", "What to do if approached or abducted"],
        objectives: ["Explain who a stranger is", "Identify tricks used by abductors", "State safety rules against abduction", "Describe what to do if approached or taken"],
        lesson: {
          title: "Staying Safe from Abductors",
          summary: "Recognise abductors' tricks and follow rules that prevent abduction.",
          minutes: 40,
          notes: `## Who is a stranger?
A **stranger** is anyone you do not know well. Most strangers are not dangerous, but you cannot tell by looking, so you must follow safety rules. Sometimes known people can also be dangerous.

## Tricks abductors use
- offering **sweets, money, gifts or phones**
- offering a **lift** home ("Your mother sent me")
- asking for **help** (to carry a load, find a lost pet or give directions)
- pretending to be a **police officer, doctor or relative**
- **online** friendship leading to secret meetings
- claiming there is an **emergency** at home

## Safety rules
1. **Never go anywhere** with a stranger without your parents' permission.
2. Do not accept gifts or lifts from strangers.
3. Agree on a **family code word**; anyone sent to pick you up must know it.
4. Walk in **groups**; use busy, well-lit routes.
5. Do not share personal details (name, address, school) with strangers, including online.
6. Tell parents or teachers where you are going and when you will return.
7. Keep a safe distance from strangers in vehicles.

## If approached or grabbed
**No – Go – Yell – Tell**:
- say **"No!"** loudly
- **run** to a safe place (school, shop, police)
- **yell** for help ("This is not my parent!")
- **tell** a trusted adult immediately
If abducted: stay calm, remember details (faces, vehicle, places), follow instructions that keep you safe, and seek help when possible.`,
          examples: `**Example 1.** A man says, "Your mother sent me to pick you up," but he does not know the family code word. What should you do? *Answer:* **Refuse, go to a safe place and tell a teacher.**

**Example 2.** What are the four steps if a stranger tries to take you? *Answer:* **No, Go, Yell, Tell**.

**Example 3.** Name one trick abductors use. *Answer:* **offering sweets or money** (or a lift).`,
        },
        questions: [
          ["E", "A person you do not know well is a", "stranger", "parent", "sibling", "class teacher", "Strangers are unfamiliar people."],
          ["E", "You should never accept", "lifts from strangers", "help from your teacher", "food from your parents", "books from the library", "Lifts may lead to abduction."],
          ["E", "If a stranger tries to grab you, you should", "yell for help and run", "stay quiet", "follow him", "hide in his car", "Noise attracts help."],
          ["M", "A secret word agreed within the family to identify trusted persons is a", "code word", "password for games", "nickname", "slogan", "It confirms who is genuinely sent."],
          ["M", "Which is a trick used by abductors?", "offering sweets or money", "giving homework", "calling a parent openly", "wearing a school badge", "Gifts lure children."],
          ["M", "The safety steps No, Go, Yell and Tell mean", "refuse, run, shout and report", "sing, dance, play and sleep", "hide, wait, cry and stay", "follow, obey, go and keep quiet", "They help escape danger."],
          ["M", "Sharing your home address with an online stranger", "is unsafe", "is always safe", "is required", "improves security", "Strangers may use it to find you."],
          ["H", "A man claims to be sent by your mother but does not know the family code word. You should", "refuse, go to a safe place and tell an adult", "go with him quickly", "give him your phone", "wait alone with him", "Without the code word, he is not trusted."],
          ["H", "If abducted, remembering details such as faces and vehicles helps", "the police to rescue you and catch the abductors", "the abductors", "no one", "only the media", "Details aid investigation."],
          ["H", "Why must children tell parents where they are going?", "so they can be found quickly if something goes wrong", "to ask for money", "to avoid homework", "it is not important", "Known whereabouts aid safety."],
        ],
      },
      {
        week: 4,
        title: "Fire safety",
        subtopics: ["The fire triangle", "Causes of fire outbreaks", "Fire prevention", "What to do in a fire"],
        objectives: ["Explain the fire triangle", "Identify causes of fire outbreaks", "State fire prevention measures", "Describe correct actions during a fire outbreak"],
        lesson: {
          title: "Preventing and Escaping Fire",
          summary: "Explain how fires start, how to prevent them and how to escape safely.",
          minutes: 40,
          notes: `## The fire triangle
A fire needs three things:
1. **heat** (ignition source)
2. **fuel** (something that burns: wood, paper, petrol, gas)
3. **oxygen** (air)
Removing **any one** puts out the fire: cooling removes heat, smothering removes oxygen, and removing fuel starves it.

## Causes of fire outbreaks
careless handling of candles and mosquito coils; unattended cooking; gas leaks; faulty wiring and overloaded sockets; storing fuel indoors; smoking; bush burning; children playing with matches; illegal fuel storage and tanker accidents.

## Prevention
- switch off appliances and gas after use
- do not overload sockets; use qualified electricians
- store petrol and kerosene safely outside living areas
- never leave cooking or candles unattended
- keep matches away from children
- install **smoke detectors** and keep **fire extinguishers**
- keep exits clear

## In a fire
1. **Raise the alarm**: shout "Fire!"
2. **Get out** quickly; do not stop for belongings
3. **Crawl low** under smoke — cleaner air is near the floor
4. **Feel doors** with the back of your hand before opening; if hot, use another exit
5. **Never use lifts**
6. If your clothes catch fire: **Stop, Drop and Roll**
7. Go to the **assembly point**; do not go back inside
8. Call the fire service or **112**`,
          examples: `**Example 1.** Name the three parts of the fire triangle. *Answer:* **heat, fuel and oxygen**.

**Example 2.** What should you do if your clothes catch fire? *Answer:* **Stop, Drop and Roll**.

**Example 3.** Why should you crawl low in a smoky room? *Answer:* **Cleaner air** is near the floor.`,
        },
        questions: [
          ["E", "A fire needs heat, fuel and", "oxygen", "water", "sand", "carbon dioxide only", "These form the fire triangle."],
          ["E", "If your clothes catch fire, you should", "stop, drop and roll", "run fast", "fan the flames", "jump up and down", "Rolling smothers the flames."],
          ["E", "During a fire, you should NOT", "use the lift", "raise the alarm", "crawl low under smoke", "go to the assembly point", "Lifts can fail or fill with smoke."],
          ["M", "Removing oxygen from a fire by covering it is called", "smothering", "fuelling", "igniting", "heating", "No oxygen, no fire."],
          ["M", "Which is a common cause of fire in homes?", "unattended cooking", "washing dishes", "reading books", "sleeping", "Food on fire can spread."],
          ["M", "Before opening a door during a fire, you should", "feel it with the back of your hand", "kick it immediately", "pour petrol on it", "open it quickly without checking", "A hot door means fire behind it."],
          ["M", "A device that sounds an alarm when it detects smoke is a", "smoke detector", "thermometer", "barometer", "voltmeter", "It gives early warning."],
          ["H", "Pouring water on a burning wood fire mainly removes", "heat", "fuel", "oxygen only", "the fire triangle's air", "Water cools the fire."],
          ["H", "Why should petrol not be stored inside living rooms?", "Its vapour can easily catch fire.", "It improves air quality.", "It is too heavy.", "It attracts customers.", "Petrol vapour is highly flammable."],
          ["H", "After escaping from a burning building, you should", "stay at the assembly point and not go back in", "go back for your phone", "hide in the building", "open all windows from inside", "Returning is dangerous."],
        ],
      },
      {
        week: 5,
        title: "Emergency reporting and communication",
        subtopics: ["Meaning of an emergency", "Emergency numbers and services", "How to make an emergency call", "False alarms and prank calls"],
        objectives: ["Explain what an emergency is", "Identify emergency numbers and services", "Make a clear emergency report", "Explain why false alarms are harmful"],
        lesson: {
          title: "Calling for Help",
          summary: "Report emergencies clearly and correctly to the right services.",
          minutes: 40,
          notes: `## Meaning
An **emergency** is a **sudden, dangerous situation** that needs **immediate help** to protect life, health or property — e.g. fire, serious injury, robbery, flood, road crash, collapse of a building.

## Emergency services and numbers
| Service | Number |
|---|---|
| **national emergency number** | **112** (toll-free; connects to police, fire, ambulance) |
| FRSC (road crashes) | **122** |
| police (some states) | state police control-room lines |
Parents should also save numbers of the nearest hospital, police station and fire service.

## Making an emergency call
Stay calm and give clear information:
1. **Who** you are
2. **What** has happened (fire, accident, injury, crime)
3. **Where** it is — exact address and landmarks
4. **How many** people are hurt and how badly
5. **Any danger** still present (fire spreading, gas leak, armed people)
6. **Do not hang up** until told to

## Other ways of raising alarm
shouting for help, using school alarms or bells, informing the nearest adult, security guard or teacher.

## False alarms and prank calls
Calling emergency numbers as a joke **wastes resources** and may **delay help** for real emergencies; it is an offence and can be traced.`,
          examples: `**Example 1.** What is the national toll-free emergency number? *Answer:* **112**.

**Example 2.** What information should you give first after your name? *Answer:* **what** has happened and **where** it is.

**Example 3.** Why are prank calls harmful? *Answer:* They **waste resources** and may **delay help** for real emergencies.`,
        },
        questions: [
          ["E", "A sudden dangerous situation needing immediate help is", "an emergency", "a festival", "a holiday", "a lesson", "Emergencies require quick action."],
          ["E", "The national toll-free emergency number in Nigeria is", "112", "911", "999", "000", "It links to emergency services."],
          ["E", "When making an emergency call, you should", "stay calm and speak clearly", "shout and hang up", "give a false address", "laugh", "Clear information saves time."],
          ["M", "The FRSC emergency number for road crashes is", "122", "112", "199", "911", "The FRSC emergency line is 122."],
          ["M", "The most important information to give in an emergency call includes", "what happened and the exact location", "your favourite colour", "your class timetable", "the weather only", "Responders need details and location."],
          ["M", "Calling emergency numbers as a joke is a", "prank call", "valid report", "civic duty", "drill", "It wastes resources."],
          ["M", "Mentioning landmarks when giving an address helps responders to", "find the place quickly", "get lost", "delay", "cancel the call", "Landmarks guide responders."],
          ["H", "Why should you not hang up an emergency call until told to?", "The operator may need more information or give instructions.", "It costs more money.", "It is a game.", "Operators dislike short calls.", "Instructions can save lives."],
          ["H", "Prank calls to emergency services are harmful because they", "may delay help for real emergencies", "improve response times", "train operators", "are legal and harmless", "Resources are diverted."],
          ["H", "When reporting an emergency, telling the operator that there is a gas leak helps because", "responders can prepare for the danger", "it is not important", "it delays help", "operators ignore dangers", "Hazards affect how responders act."],
        ],
      },
      {
        week: 6,
        title: "Pedestrian and road safety",
        subtopics: ["Road users", "Rules for pedestrians", "Safety on the way to and from school", "Safe use of public transport and motorcycles"],
        objectives: ["Identify road users", "State rules for pedestrians", "Describe safe behaviour on the way to and from school", "Explain safety in public transport and on motorcycles"],
        lesson: {
          title: "Safe Journeys to School",
          summary: "Follow road safety rules as a pedestrian and passenger.",
          minutes: 40,
          notes: `## Road users
pedestrians, cyclists, motorcyclists, drivers, passengers, and people pushing carts.

## Rules for pedestrians
- use **zebra crossings**, footbridges or traffic lights
- **look left, right and left again** before crossing; keep looking while crossing
- walk on **walkways**; where there is none, walk **facing oncoming traffic**
- do not cross between parked vehicles or at bends
- do not use phones or headphones while crossing
- wear **bright or reflective** clothing at night
- hold younger children's hands

## On the way to and from school
walk in groups; use known routes; do not play on the road; go straight home; avoid lonely shortcuts; tell parents if routes change.

## Public transport and motorcycles
- board and alight only when the vehicle has **stopped**, on the **kerb side**
- wear **seat belts**
- do not distract the driver
- avoid overloaded or unroadworthy vehicles
- on motorcycles: wear a **helmet**; do not ride three or more on one motorcycle
- report reckless drivers
- keep hands and heads inside vehicles`,
          examples: `**Example 1.** Where should pedestrians walk when there is no walkway? *Answer:* on the side of the road **facing oncoming traffic**.

**Example 2.** Why should pedestrians wear bright clothing at night? *Answer:* So **drivers can see them**.

**Example 3.** Name one safety rule for motorcycle passengers. *Answer:* **Wear a helmet**.`,
        },
        questions: [
          ["E", "People who walk along or across roads are", "pedestrians", "drivers", "pilots", "sailors", "Pedestrians travel on foot."],
          ["E", "Before crossing a road, you should look", "left, right and left again", "only straight ahead", "at the sky", "at your phone", "This checks all traffic."],
          ["E", "Motorcycle passengers should wear", "helmets", "caps only", "headphones", "sunglasses only", "Helmets protect the head."],
          ["M", "Where there is no walkway, pedestrians should walk", "facing oncoming traffic", "with their backs to traffic", "in the middle of the road", "on the median only", "They can see approaching vehicles."],
          ["M", "Wearing bright or reflective clothing at night helps", "drivers to see pedestrians", "hide pedestrians", "make roads darker", "reduce visibility", "Visibility prevents accidents."],
          ["M", "Passengers should board or alight from a bus", "only when it has stopped", "while it is moving", "from the road side of traffic", "through the window", "Moving vehicles cause falls."],
          ["M", "Using headphones while crossing the road is dangerous because", "you may not hear approaching vehicles", "it improves hearing", "drivers can see you better", "it is required", "Distraction causes accidents."],
          ["H", "Crossing the road between parked vehicles is dangerous because", "drivers cannot see you until it is too late", "parked cars are clean", "it is a zebra crossing", "it is the safest place", "Parked vehicles block the view."],
          ["H", "Carrying three or more people on a motorcycle is unsafe because", "it reduces balance and control", "it is fuel efficient", "it is required by law", "it improves safety", "Overloading causes crashes."],
          ["H", "Walking home in groups by a known route helps to", "reduce the risk of accidents and abduction", "increase danger", "waste time only", "attract criminals", "Groups and known routes are safer."],
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
        title: "Basic first aid",
        subtopics: ["Meaning and aims of first aid", "The first-aid box", "First aid for cuts, nosebleeds and burns", "When to seek medical help"],
        objectives: ["Define first aid and state its aims", "Identify contents of a first-aid box", "Give first aid for minor cuts, nosebleeds and burns", "Recognise when to seek medical help"],
        lesson: {
          title: "Helping Before the Doctor Arrives",
          summary: "Give simple first aid for common injuries and know when to get help.",
          minutes: 40,
          notes: `## Meaning
**First aid** is the **immediate help** given to an injured or suddenly ill person **before professional medical help** arrives.

## Aims (the 3 Ps)
- **Preserve life**
- **Prevent** the condition from getting worse
- **Promote** recovery

## The first-aid box
bandages, sterile gauze and dressings, adhesive plasters, cotton wool, antiseptic solution, scissors, disposable **gloves**, tweezers, safety pins, triangular bandage, clean water, a thermometer, and a first-aid manual.

## First aid for common injuries
| Injury | First aid |
|---|---|
| **minor cut** | wash hands and wear gloves; clean the wound with clean water; apply pressure to stop bleeding; cover with a clean dressing |
| **nosebleed** | sit up and **lean forward**; pinch the soft part of the nose for 10–15 minutes; breathe through the mouth; do **not** tilt the head back |
| **minor burn** | cool under **clean running water** for about 20 minutes; remove tight items; cover loosely with a clean dressing; do **not** apply oil, toothpaste or burst blisters |
| **insect sting** | remove the sting by scraping; wash; apply a cold compress |
| **sprain** | Rest, Ice (cold compress), Compression, Elevation (**RICE**) |

## Seek medical help when
bleeding does not stop, burns are large or on the face, the person is unconscious, has difficulty breathing, or has a suspected fracture. Call **112**.`,
          examples: `**Example 1.** What are the aims of first aid? *Answer:* to **preserve life**, **prevent** worsening and **promote** recovery.

**Example 2.** How should you stop a nosebleed? *Answer:* **Sit up, lean forward and pinch the soft part of the nose.**

**Example 3.** What should you put on a minor burn first? *Answer:* **Cool running water** for about 20 minutes.`,
        },
        questions: [
          ["E", "Immediate help given to an injured person before medical help arrives is", "first aid", "surgery", "medication by prescription", "therapy", "It is emergency care."],
          ["E", "A box containing materials for first aid is a", "first-aid box", "toolbox", "lunch box", "fuse box", "It holds bandages and dressings."],
          ["E", "A minor burn should first be cooled with", "clean running water", "engine oil", "toothpaste", "sand", "Water cools the burn."],
          ["M", "During a nosebleed, the person should", "sit up and lean forward", "lie flat on the back", "tilt the head backwards", "blow the nose hard", "This prevents swallowing blood."],
          ["M", "The aims of first aid are to preserve life, prevent worsening and", "promote recovery", "punish the victim", "prescribe drugs", "perform surgery", "These are the 3 Ps."],
          ["M", "Before treating a bleeding wound, a first aider should wear", "disposable gloves", "a cap", "sunglasses", "a scarf", "Gloves prevent infection."],
          ["M", "RICE, used for sprains, stands for Rest, Ice, Compression and", "Elevation", "Exercise", "Eating", "Examination", "Raising the limb reduces swelling."],
          ["H", "Why should blisters from a burn not be burst?", "It increases the risk of infection.", "It speeds healing always.", "It reduces pain completely.", "It is required first aid.", "Blisters protect the wound."],
          ["H", "When should a first aider call 112 immediately?", "when the person is unconscious or cannot breathe well", "for a tiny scratch", "for a mild headache only", "never", "Serious cases need professionals."],
          ["H", "Pressing on a bleeding wound with a clean cloth helps to", "stop the bleeding", "increase bleeding", "cause infection", "cool the wound only", "Pressure helps clotting."],
        ],
      },
      {
        week: 2,
        title: "Bullying",
        subtopics: ["Meaning of bullying", "Forms of bullying", "Effects of bullying", "Preventing and reporting bullying"],
        objectives: ["Define bullying", "Identify forms of bullying", "Explain the effects of bullying", "Describe ways to prevent and report bullying"],
        lesson: {
          title: "Say No to Bullying",
          summary: "Recognise bullying and act to stop it.",
          minutes: 40,
          notes: `## Meaning
**Bullying** is **repeated, intentional behaviour** by a person or group that **hurts, frightens or humiliates** someone who finds it hard to defend himself or herself.

## Forms
| Form | Examples |
|---|---|
| **physical** | hitting, pushing, taking or damaging belongings |
| **verbal** | name-calling, insults, threats, mocking |
| **social (relational)** | excluding someone, spreading rumours |
| **cyberbullying** | hurtful messages, posting embarrassing photos, fake accounts online |
| **extortion** | forcing others to give money or food (e.g. by seniors in boarding schools) |

## Effects
fear and anxiety; low self-esteem; poor concentration and grades; truancy; loneliness and depression; injuries; in extreme cases, self-harm. Bullies may also develop into violent adults.

## Preventing and reporting bullying
**If you are bullied:**
- stay calm; say **"Stop!"** firmly and walk away
- **tell** a trusted adult (teacher, counsellor, parent)
- keep evidence (screenshots for cyberbullying)
- stay near friends and supervised areas

**If you see bullying (as a bystander):**
- do not join in or laugh
- support the victim
- **report** to a teacher

**Schools** should have anti-bullying rules, supervision, counselling and fair discipline.`,
          examples: `**Example 1.** Posting embarrassing photos of a classmate online is **cyberbullying**.

**Example 2.** Name one effect of bullying. *Answer:* **low self-esteem** (or poor grades).

**Example 3.** What should a bystander do when a student is being bullied? *Answer:* **Support the victim and report** to a teacher.`,
        },
        questions: [
          ["E", "Repeated, intentional behaviour that hurts or frightens someone is", "bullying", "friendship", "cooperation", "teaching", "Bullying is repeated harm."],
          ["E", "Name-calling and insults are", "verbal bullying", "physical bullying", "first aid", "good manners", "Words can hurt."],
          ["E", "A student who is bullied should", "tell a trusted adult", "keep it secret forever", "bully others", "stop coming to school", "Adults can stop it."],
          ["M", "Posting hurtful messages about someone online is", "cyberbullying", "physical bullying", "community service", "friendship", "It uses digital platforms."],
          ["M", "Deliberately excluding a classmate from all activities is", "social bullying", "physical bullying", "first aid", "teamwork", "It isolates the victim."],
          ["M", "Seniors forcing juniors to give them food or money is", "extortion", "cooperation", "sharing", "community service", "It is a form of bullying."],
          ["M", "Which is an effect of bullying on the victim?", "low self-esteem", "higher confidence", "better grades", "more friends", "Victims feel worthless."],
          ["H", "A bystander who sees bullying should", "support the victim and report it", "laugh and join in", "record it for fun", "ignore it always", "Bystanders can stop bullying."],
          ["H", "For cyberbullying, keeping screenshots helps because they", "serve as evidence when reporting", "spread the bullying", "delete the messages", "are not useful", "Evidence supports action."],
          ["H", "Why must schools have anti-bullying rules?", "to protect students and create a safe learning environment", "to encourage bullying", "to punish victims", "to reduce supervision", "Safety supports learning."],
        ],
      },
      {
        week: 3,
        title: "Online safety for young people",
        subtopics: ["Benefits and risks of the internet", "Protecting personal information", "Online predators and scams", "Responsible online behaviour"],
        objectives: ["Identify benefits and risks of the internet", "Protect personal information online", "Recognise online predators and scams", "Practise responsible online behaviour"],
        lesson: {
          title: "Staying Safe Online",
          summary: "Use the internet safely and responsibly.",
          minutes: 40,
          notes: `## Benefits and risks
| Benefits | Risks |
|---|---|
| learning resources | online predators |
| communication with family | scams and fraud |
| creativity and skills | cyberbullying |
| entertainment | exposure to harmful content |
| | addiction and loss of sleep |
| | identity theft and hacking |

## Protecting personal information
Do **not** share online: full name with address, school name, phone number, passwords, photos showing your location, bank or card details, or daily routines.
Use **strong passwords** (long, with letters, numbers and symbols); never share them except with parents; use privacy settings.

## Online predators and scams
- **Predators** pretend to be young friends, give compliments and gifts, ask for secrets, private photos or meetings.
- **Scams**: fake prizes ("You have won!"), requests for PINs or OTPs, fake job and scholarship offers, suspicious links.
**Never** meet online friends in person without parents; never send private photos; never share OTPs or PINs.

## Responsible online behaviour
**THINK before you post**: is it **T**rue, **H**elpful, **I**nspiring, **N**ecessary and **K**ind?
respect others; do not spread rumours or fake news; report and block bullies; limit screen time; tell a trusted adult if anything makes you uncomfortable.`,
          examples: `**Example 1.** Name one piece of personal information you should not share online. *Answer:* **your home address** (or password, phone number).

**Example 2.** A message says "You have won ₦500,000! Send your bank PIN." What is it? *Answer:* a **scam**.

**Example 3.** What does THINK before you post stand for? *Answer:* **True, Helpful, Inspiring, Necessary, Kind**.`,
        },
        questions: [
          ["E", "Which information should NOT be shared online with strangers?", "home address", "favourite colour in a class project", "a school subject you like", "a book title", "Addresses reveal your location."],
          ["E", "A message asking for your bank PIN to claim a prize is a", "scam", "genuine prize", "school notice", "bank requirement", "Banks never ask for PINs."],
          ["E", "If something online makes you uncomfortable, you should", "tell a trusted adult", "keep it secret", "reply rudely", "share it widely", "Adults can help."],
          ["M", "A strong password should", "be long and mix letters, numbers and symbols", "be your name", "be 1234", "be shared with friends", "Complex passwords resist hacking."],
          ["M", "An adult pretending to be a young friend online to harm children is", "an online predator", "a teacher", "a moderator", "a relative", "Predators hide their identity."],
          ["M", "Meeting an online friend in person without your parents is", "dangerous", "always safe", "required", "a school rule", "The person may not be who they claim."],
          ["M", "The 'K' in THINK before you post stands for", "Kind", "Known", "Key", "Keep", "Posts should be kind."],
          ["H", "A one-time password (OTP) sent to your phone should be", "never shared with anyone", "shared with online friends", "posted online", "given to callers claiming to be banks", "Fraudsters use OTPs to steal."],
          ["H", "Posting photos that show your school uniform and location can", "help strangers locate you", "improve your privacy", "stop predators", "protect you", "Location details are risky."],
          ["H", "Blocking and reporting a cyberbully helps to", "stop further harassment", "encourage the bully", "spread the messages", "hide evidence from adults", "Platforms can act on reports."],
        ],
      },
      {
        week: 4,
        title: "Community safety and vigilance",
        subtopics: ["Meaning of community safety", "Community safety structures", "Being a vigilant citizen", "Relationship with neighbours"],
        objectives: ["Explain community safety", "Identify community safety structures", "Describe what vigilant citizens do", "Explain how good neighbourliness promotes security"],
        lesson: {
          title: "Watching Out for One Another",
          summary: "Explain how communities work together to stay safe.",
          minutes: 40,
          notes: `## Meaning
**Community safety** is the state in which people in a community can **live, work and move about without fear** of crime, violence or accidents.

## Community safety structures
- **traditional rulers** and community leaders
- **neighbourhood watch** and lawful vigilance groups
- **community policing** committees working with the police
- **landlords' and residents' associations**
- **age grades** and youth groups
- religious and market associations
- local government and **ward** structures

## Being a vigilant citizen
- notice unusual activities (strange vehicles, unknown people loitering, sudden movement of many strangers into an area)
- **report** to leaders, police or security agencies — accurately and without exaggeration
- avoid spreading **rumours** that cause panic
- protect community facilities (street lights, transformers, water points)
- attend community meetings and follow safety guidelines

## Good neighbourliness
Knowing and helping neighbours builds **trust**; neighbours can watch each other's homes, share information and respond quickly in emergencies. Hostility and isolation make communities vulnerable.

## Limits
Citizens must **not** take the law into their own hands (no jungle justice); suspects must be handed over to the police.`,
          examples: `**Example 1.** Name one community safety structure. *Answer:* **neighbourhood watch** (or community policing committee).

**Example 2.** Why should rumours not be spread? *Answer:* They cause **panic** and may lead to violence.

**Example 3.** How does good neighbourliness promote security? *Answer:* Neighbours **watch each other's homes** and respond quickly to emergencies.`,
        },
        questions: [
          ["E", "A state where people live without fear of crime in their area is", "community safety", "insecurity", "pollution", "migration", "It is shared security."],
          ["E", "Which is a community safety structure?", "neighbourhood watch", "a secret cult", "a street gang", "a smuggling ring", "Residents watch over their area."],
          ["E", "Being alert to unusual activities around you is", "vigilance", "carelessness", "apathy", "rudeness", "Vigilance helps detect threats."],
          ["M", "Unusual activity in the community should be reported to", "community leaders or the police", "nobody", "social media only", "the suspects", "Proper authorities can act."],
          ["M", "Spreading unverified rumours about attacks can", "cause panic and violence", "improve security", "calm people", "stop crime", "False alarms create chaos."],
          ["M", "Knowing and helping neighbours promotes", "trust and quick response to emergencies", "isolation", "insecurity", "conflict", "Good neighbours protect each other."],
          ["M", "Protecting street lights and transformers is part of", "protecting community facilities", "vandalism", "crime", "trespass", "They serve everyone."],
          ["H", "A suspected thief caught in the community should be", "handed over to the police", "beaten by a mob", "burnt", "released without report", "Jungle justice is illegal."],
          ["H", "Community policing means", "partnership between the police and community members", "communities replacing the police entirely", "mob justice", "private armies", "Cooperation improves security."],
          ["H", "Why should reports to security agencies be accurate?", "Exaggeration can mislead responders and waste resources.", "Accuracy is not important.", "Agencies prefer rumours.", "Reports should be dramatic.", "Accurate information leads to correct action."],
        ],
      },
      {
        week: 5,
        title: "Natural hazards and disaster awareness",
        subtopics: ["Meaning of hazards and disasters", "Natural hazards in Nigeria", "Preparedness for disasters", "Safety during and after disasters"],
        objectives: ["Distinguish hazards from disasters", "Identify natural hazards common in Nigeria", "Describe preparedness measures", "State safety actions during and after disasters"],
        lesson: {
          title: "Being Ready for Disasters",
          summary: "Identify natural hazards in Nigeria and prepare for them.",
          minutes: 40,
          notes: `## Meanings
- A **hazard** is something that **could** cause harm (e.g. heavy rainfall, strong winds).
- A **disaster** occurs when a hazard **seriously harms** a community beyond its ability to cope (e.g. a flood that destroys homes).

## Natural hazards in Nigeria
| Hazard | Common areas | Dangers |
|---|---|---|
| **flooding** | river valleys (Niger–Benue), coastal cities, low-lying areas | drowning, loss of homes, disease |
| **windstorms and rainstorms** | nationwide | roofs blown off, falling trees |
| **drought and desertification** | far north | crop failure, hunger |
| **gully erosion** | south-east | destruction of homes and roads |
| **lightning** | nationwide | electrocution, fires |
| **epidemics** (cholera, Lassa fever) | various | illness and death |
| **extreme heat** | north | heat stroke |

## Preparedness
listen to **weather forecasts** (NiMet) and flood outlooks (NIHSA); clear drains; avoid building in waterways; plant trees; prepare an **emergency kit** (water, food, torch, first-aid kit, documents); know evacuation routes; keep emergency numbers.

## During disasters
- **floods**: move to higher ground; do not walk or drive through floodwater
- **storms and lightning**: stay indoors, away from windows; avoid tall trees and metal poles; unplug appliances
- **heat**: drink water; stay in shade

## After disasters
avoid fallen electric wires; drink safe water; follow instructions from **NEMA/SEMA**; report missing persons; help the vulnerable.`,
          examples: `**Example 1.** What is the difference between a hazard and a disaster? *Answer:* A hazard **could** cause harm; a disaster **does** cause serious harm.

**Example 2.** What should you do during a flood? *Answer:* **Move to higher ground** and avoid floodwater.

**Example 3.** Name one item in an emergency kit. *Answer:* **drinking water** (or a torch, first-aid kit).`,
        },
        questions: [
          ["E", "Something that could cause harm is a", "hazard", "disaster", "reward", "resource", "Hazards are potential dangers."],
          ["E", "Which natural hazard is common in Nigeria's river valleys?", "flooding", "earthquakes", "volcanoes", "snowstorms", "Rivers overflow in heavy rains."],
          ["E", "During a flood, you should", "move to higher ground", "walk through floodwater", "swim in the flood", "stay in a basement", "Higher ground is safer."],
          ["M", "When a hazard seriously harms a community beyond its ability to cope, it becomes a", "disaster", "drill", "festival", "resource", "Disasters overwhelm communities."],
          ["M", "During a lightning storm, you should avoid", "standing under tall trees", "staying indoors", "unplugging appliances", "keeping away from windows", "Trees attract lightning."],
          ["M", "The agency that provides weather forecasts in Nigeria is", "NiMet", "NDLEA", "NAFDAC", "FRSC", "The Nigerian Meteorological Agency."],
          ["M", "Which item belongs in an emergency kit?", "drinking water", "video games", "perfume", "jewellery", "Water is essential for survival."],
          ["H", "After a storm, fallen electric wires should be", "avoided and reported", "touched to check", "moved by hand", "used as ropes", "They may still be live."],
          ["H", "The agency that manages disasters at the national level is", "NEMA", "INEC", "NBC", "NOA", "The National Emergency Management Agency."],
          ["H", "Why is building houses in waterways dangerous?", "They block water flow and are likely to be flooded.", "They keep rivers clean.", "They stop rainfall.", "They are cheaper to insure.", "Floodwater needs space to flow."],
        ],
      },
      {
        week: 6,
        title: "Drug and substance abuse prevention",
        subtopics: ["Meaning of drug and substance abuse", "How drug abuse threatens security", "Warning signs and refusal skills", "Where to get help"],
        objectives: ["Explain drug and substance abuse", "Relate drug abuse to insecurity", "Identify warning signs and use refusal skills", "Identify sources of help"],
        lesson: {
          title: "Drugs and Your Safety",
          summary: "Understand how drug abuse threatens personal and community security.",
          minutes: 40,
          notes: `## Meaning
**Drug and substance abuse** is the **use of drugs or other substances in ways that harm the body and mind**, including illegal drugs, misuse of medicines (e.g. codeine, tramadol), alcohol, tobacco and inhalants (glue, petrol fumes).

## How drug abuse threatens security
- users may **commit crimes** (theft, robbery) to buy drugs
- drugs reduce self-control, leading to **violence**
- criminals and cults use drugs to **embolden** members
- drug trafficking funds **organised crime and terrorism**
- impaired drivers cause **road crashes**
- young people become **vulnerable** to abuse and exploitation

## Warning signs in peers
sudden change of friends, secretive behaviour, red eyes, mood swings, loss of interest in school, missing money or items at home, smell of smoke or chemicals.

## Refusal skills
- say **"No, thanks"** firmly
- give a reason: *"I want to stay healthy."*
- suggest an alternative activity
- **walk away**
- choose friends who respect your choices

## Where to get help
parents, teachers, school counsellors, religious leaders, health workers, **NDLEA** (drug demand reduction and counselling), rehabilitation centres.`,
          examples: `**Example 1.** How can drug abuse lead to crime? *Answer:* Users may **steal or rob** to buy drugs.

**Example 2.** Give one refusal line. *Answer:* **"No, thanks. I want to stay healthy."**

**Example 3.** Which agency provides drug counselling and enforcement? *Answer:* the **NDLEA**.`,
        },
        questions: [
          ["E", "Using drugs in ways that harm the body and mind is", "drug abuse", "vaccination", "nutrition", "exercise", "It damages health."],
          ["E", "The agency that fights drug abuse and trafficking is", "NDLEA", "FRSC", "NPC", "INEC", "It enforces drug laws."],
          ["E", "When offered drugs, you should", "say 'No, thanks' and walk away", "try a little", "keep it secret", "sell it", "Refusal protects you."],
          ["M", "How can drug abuse lead to crime?", "users may steal to buy drugs", "drugs make people law-abiding", "drugs improve study", "drugs reduce violence", "Addiction drives theft."],
          ["M", "Which is a warning sign of drug abuse in a friend?", "sudden secretive behaviour and mood swings", "improved grades", "regular attendance", "better hygiene", "Behaviour changes are clues."],
          ["M", "Drug-impaired drivers are a major cause of", "road crashes", "better traffic flow", "safer roads", "reduced accidents", "Impairment slows reactions."],
          ["M", "Inhaling glue or petrol fumes is", "substance abuse", "first aid", "exercise", "hygiene", "Inhalants damage the brain."],
          ["H", "Why do criminal gangs sometimes give drugs to their members?", "to embolden them to commit violent acts", "to make them healthier", "to improve their education", "to make them law-abiding", "Drugs lower inhibitions."],
          ["H", "Drug trafficking threatens national security because it", "funds organised crime and terrorism", "improves the economy safely", "creates legal jobs", "reduces crime", "Illegal profits finance crime."],
          ["H", "A student worried about a friend's drug use should", "tell a counsellor or trusted adult", "keep it secret forever", "join the friend", "report it only on social media", "Adults can arrange help."],
        ],
      },
    ],
  },
];
