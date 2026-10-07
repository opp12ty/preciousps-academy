import type { TermPlan } from "../types";

/** JSS3 Security Education — original Precious PS content; Term 3 is structured BECE revision. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "National security: concept and threats",
        subtopics: ["Meaning and dimensions of national security", "Internal and external threats", "Institutions of national security", "Citizens' contribution"],
        objectives: ["Explain national security and its dimensions", "Distinguish internal from external threats", "Identify institutions responsible for national security", "Explain how citizens contribute to national security"],
        lesson: {
          title: "Keeping the Nation Secure",
          summary: "Explain the dimensions of national security and threats to Nigeria.",
          minutes: 45,
          notes: `## Meaning
**National security** is the **protection of a nation's people, territory, institutions, economy and values** from threats, and the creation of conditions in which citizens can live in peace and prosperity.

## Dimensions
| Dimension | Concern |
|---|---|
| **military/defence** | protection from armed attack |
| **internal security** | law and order, crime control |
| **economic security** | stable economy, jobs, protection of resources |
| **food security** | enough food for all |
| **health security** | protection from epidemics |
| **environmental security** | protection from environmental degradation |
| **cyber security** | protection of digital systems and data |
| **human security** | freedom from fear and want for every person |

## Threats
- **Internal**: terrorism and insurgency, banditry, kidnapping, communal and farmer–herder clashes, separatist violence, oil theft and pipeline vandalism, cultism, drug trafficking, cybercrime, corruption, poverty and unemployment.
- **External**: foreign aggression, cross-border terrorism, arms and drug smuggling, transnational organised crime, piracy in the Gulf of Guinea.

## Institutions
the armed forces; police; DSS; NSCDC; Immigration and Customs; NDLEA; the **Office of the National Security Adviser (ONSA)**; the **National Security Council** (advises the President); intelligence agencies; the judiciary.

## Citizens' contribution
obey laws; report suspicious activities; avoid hate speech; protect public infrastructure; support community policing; embrace tolerance; pay taxes; resist corruption.`,
          examples: `**Example 1.** Name two dimensions of national security. *Answer:* **food security** and **cyber security** (or health, economic).

**Example 2.** Is piracy in the Gulf of Guinea an internal or external threat? *Answer:* **external** (transnational) threat.

**Example 3.** Which body advises the President on national security? *Answer:* the **National Security Council**.`,
        },
        questions: [
          ["E", "The protection of a nation's people, territory and institutions from threats is", "national security", "tourism", "census", "budgeting", "It safeguards the nation."],
          ["E", "Which is an internal security threat?", "banditry", "foreign invasion only", "a treaty", "a festival", "Banditry occurs within the country."],
          ["E", "Having enough food for all citizens is", "food security", "cyber security", "military security", "border security", "It prevents hunger."],
          ["M", "Freedom from fear and want for every person is described as", "human security", "military security only", "border control", "cyber security", "It focuses on individuals."],
          ["M", "Piracy in the Gulf of Guinea is an example of", "an external (transnational) threat", "an internal festival", "a domestic election", "food security", "It crosses national boundaries."],
          ["M", "The body that advises the President on national security matters is the", "National Security Council", "INEC", "NCDC", "FRSC", "It includes top security officials."],
          ["M", "Protection of digital systems and data is", "cyber security", "food security", "environmental security", "health security", "It concerns computers and networks."],
          ["H", "Why are poverty and unemployment considered threats to national security?", "They create conditions for recruitment into crime and violence.", "They improve security.", "They reduce crime.", "They have no effect.", "Deprivation fuels insecurity."],
          ["H", "The office that coordinates national security policy in Nigeria is the", "Office of the National Security Adviser", "INEC", "NBC", "NIMC", "ONSA coordinates security agencies."],
          ["H", "Which citizen action contributes most directly to national security?", "reporting suspicious activities to authorities", "spreading hate speech", "vandalising infrastructure", "evading taxes", "Information helps prevent attacks."],
        ],
      },
      {
        week: 2,
        title: "Small arms and light weapons",
        subtopics: ["Meaning of small arms and light weapons", "Sources of illegal arms in Nigeria", "Effects of arms proliferation", "Control measures"],
        objectives: ["Explain small arms and light weapons", "Identify sources of illegal arms", "Describe effects of arms proliferation", "Explain measures for controlling arms"],
        lesson: {
          title: "The Danger of Illegal Weapons",
          summary: "Explain how illegal weapons fuel insecurity and how they are controlled.",
          minutes: 40,
          notes: `## Meaning
**Small arms** are weapons designed for use by one person (pistols, rifles, sub-machine guns). **Light weapons** are designed for use by a small crew (heavy machine guns, grenade launchers, portable anti-tank weapons). Together they are called **SALW**.
**Proliferation** means the spread of these weapons, especially illegally.

## Sources of illegal arms in Nigeria
- smuggling across porous borders (especially from conflict areas in the Sahel and Libya)
- **local fabrication** by illegal gunsmiths
- theft or diversion from armouries
- sale by corrupt officials
- weapons captured from security forces by criminals
- leftover weapons from past conflicts

## Effects
banditry, kidnapping, armed robbery, terrorism and communal violence become deadlier; loss of lives; displacement; fear; destruction of livelihoods; loss of investment; strain on security forces.

## Control measures
- the **Firearms Act** regulates possession; unlicensed possession is a crime
- **National Centre for the Control of Small Arms and Light Weapons (NCCSALW)** (established 2021) coordinates control
- **ECOWAS Convention on Small Arms and Light Weapons (2006)**
- border patrols and cooperation with neighbours
- weapons collection and destruction exercises
- disarmament of armed groups and amnesty programmes
- community education and reporting of illegal weapons

## Personal safety
never touch unknown weapons or suspicious objects (they may be explosives); keep away and report to the police.`,
          examples: `**Example 1.** What does SALW stand for? *Answer:* **Small Arms and Light Weapons**.

**Example 2.** Name one source of illegal arms in Nigeria. *Answer:* **smuggling across borders** (or local fabrication).

**Example 3.** What should you do if you find an unknown weapon? *Answer:* **Do not touch it**; keep away and report to the police.`,
        },
        questions: [
          ["E", "Weapons designed for use by one person, such as pistols and rifles, are", "small arms", "warships", "fighter jets", "tanks", "They are portable."],
          ["E", "If you find an unknown weapon or suspicious object, you should", "keep away and report it", "pick it up", "play with it", "sell it", "It may be explosive."],
          ["E", "The spread of weapons, especially illegally, is called", "proliferation", "disarmament", "registration", "licensing", "It increases violence."],
          ["M", "Which is a source of illegal arms in Nigeria?", "smuggling across porous borders", "licensed hunting shops only", "school laboratories", "hospitals", "Borders are poorly guarded."],
          ["M", "The law regulating the possession of guns in Nigeria is the", "Firearms Act", "Land Use Act", "Electoral Act", "Child Rights Act", "Unlicensed possession is illegal."],
          ["M", "Which is an effect of arms proliferation?", "deadlier banditry and kidnapping", "more peace", "less crime", "more investment", "Weapons make crime deadlier."],
          ["M", "Weapons collection and destruction exercises aim to", "reduce illegal weapons in circulation", "increase weapons", "arm civilians", "sell weapons", "Destruction removes them permanently."],
          ["H", "The Nigerian body established in 2021 to coordinate small arms control is the", "National Centre for the Control of Small Arms and Light Weapons", "NDLEA", "NAPTIP", "NCDC", "It is known as NCCSALW."],
          ["H", "The ECOWAS Convention on Small Arms and Light Weapons was adopted in", "2006", "1975", "1999", "2021", "It regulates arms in West Africa."],
          ["H", "Local fabrication of guns by illegal gunsmiths contributes to", "arms proliferation", "disarmament", "peace", "licensed hunting", "It adds untraceable weapons."],
        ],
      },
      {
        week: 3,
        title: "Border security and smuggling",
        subtopics: ["Meaning of borders and border security", "Nigeria's borders and challenges", "Smuggling and its effects", "Agencies and measures for border security"],
        objectives: ["Explain borders and border security", "Identify Nigeria's land and maritime borders and their challenges", "Explain smuggling and its effects", "Describe agencies and measures for border security"],
        lesson: {
          title: "Guarding Nigeria's Borders",
          summary: "Explain border security, smuggling and the agencies that guard borders.",
          minutes: 40,
          notes: `## Meanings
- A **border** is the boundary between countries.
- **Border security** is the control of **people and goods** crossing borders to prevent illegal entry, smuggling and threats.

## Nigeria's borders
- land borders with **Benin, Niger, Chad and Cameroon**
- **maritime** border on the **Atlantic Ocean (Gulf of Guinea)**
Many unofficial crossing routes ("porous borders") exist in forests, deserts and waterways.

## Challenges
long and porous borders; few personnel and equipment; corruption; ethnic groups living on both sides; difficult terrain; insecurity in the Sahel.

## Smuggling
**Smuggling** is moving goods **into or out of a country illegally**, avoiding customs duties or bans.
Items often smuggled: rice, vehicles, petrol (out of the country), arms, drugs, fake medicines, wildlife products, and people (migrant smuggling).
**Effects:** loss of government revenue; collapse of local industries and farms; entry of dangerous and fake products; arms and drugs fuel crime; health risks.

## Agencies
- **Nigeria Customs Service**: goods, duties, anti-smuggling
- **Nigeria Immigration Service**: people, passports, visas
- **Nigerian Army, Navy and Air Force**: territorial defence and patrols
- **Nigeria Police** and **NDLEA** (drugs), **NAFDAC** (fake products)
- **Port Health Services** (disease control)

## Measures
technology (surveillance, e-border systems), more personnel, joint patrols with neighbouring countries, community cooperation, anti-corruption, support for local production.`,
          examples: `**Example 1.** Name Nigeria's four land neighbours. *Answer:* **Benin, Niger, Chad and Cameroon**.

**Example 2.** What is smuggling? *Answer:* **Moving goods into or out of a country illegally**.

**Example 3.** Name one effect of smuggling. *Answer:* **loss of government revenue** (or collapse of local industries).`,
        },
        questions: [
          ["E", "The boundary between countries is a", "border", "river bank only", "street", "market", "Borders separate countries."],
          ["E", "Moving goods into a country illegally to avoid duties is", "smuggling", "exporting legally", "farming", "banking", "It evades customs."],
          ["E", "The agency that fights smuggling of goods is the", "Nigeria Customs Service", "INEC", "NCDC", "FRSC", "Customs controls goods."],
          ["M", "Which country shares a land border with Nigeria?", "Cameroon", "Ghana", "Togo", "Senegal", "Cameroon is to the east."],
          ["M", "Borders with many unofficial crossing points are described as", "porous", "sealed", "closed", "diplomatic", "They are easy to cross illegally."],
          ["M", "The agency that controls the movement of people across borders is the", "Nigeria Immigration Service", "Customs Service", "NAFDAC", "FRSC", "It manages entry and exit."],
          ["M", "Which is an effect of smuggling?", "loss of government revenue", "higher customs revenue", "growth of local industries", "safer medicines", "Duties are evaded."],
          ["H", "Why does rice smuggling hurt Nigerian farmers?", "Cheap smuggled rice undercuts local producers.", "It helps farmers sell more.", "It increases local prices only.", "It has no effect.", "Local rice cannot compete."],
          ["H", "Smuggling of fake medicines threatens", "public health", "tax evasion only", "tourism", "sports", "Fake drugs harm patients."],
          ["H", "Joint border patrols with neighbouring countries help because", "criminals cannot easily escape across the border", "they increase smuggling", "they close all trade", "they are unnecessary", "Cooperation closes gaps."],
        ],
      },
      {
        week: 4,
        title: "Travel safety",
        subtopics: ["Planning safe journeys", "Safety in road and rail travel", "Safety in air and water travel", "Safety in motor parks, airports and hotels"],
        objectives: ["Plan safe journeys", "State safety rules for road and rail travel", "State safety rules for air and water travel", "Describe safety practices in transport terminals and lodgings"],
        lesson: {
          title: "Travelling Safely",
          summary: "Plan and make journeys safely by road, rail, air and water.",
          minutes: 40,
          notes: `## Planning safe journeys
- choose safe **routes** and **times**; avoid night travel on highways
- check security and weather updates
- share your **itinerary** with family, not publicly online
- travel with registered transport companies
- carry identification, emergency contacts and a charged phone
- keep valuables hidden

## Road and rail travel
- use **registered** vehicles and motor parks; avoid "one chance" vehicles
- wear **seat belts**; avoid overloaded or unroadworthy vehicles
- report reckless or drunk drivers
- on trains: keep belongings close; follow crew instructions; do not lean out of doors

## Air travel
- follow **security screening** rules; never carry items for strangers
- watch the safety briefing; locate exits; fasten seat belts
- keep luggage tagged and never leave it unattended

## Water travel
- use licensed boats; wear **life jackets**
- avoid overloading, night travel and bad weather

## Motor parks, airports and hotels
- beware of touts and fake agents
- do not accept food or drinks from strangers (they may be drugged)
- lock hotel doors; use the peephole; keep room numbers private
- know emergency exits
- report suspicious bags or persons to security`,
          examples: `**Example 1.** Why should you avoid night travel on highways? *Answer:* Risks of **armed robbery, kidnapping and crashes** are higher at night.

**Example 2.** Why should you never carry a bag for a stranger at an airport? *Answer:* It may contain **drugs or dangerous items** and you will be held responsible.

**Example 3.** Name one hotel safety practice. *Answer:* **Lock the door** and use the peephole.`,
        },
        questions: [
          ["E", "When travelling by boat, you should wear a", "life jacket", "heavy coat", "helmet only", "necklace", "Life jackets save lives."],
          ["E", "Travellers should avoid highway travel", "at night", "in the morning", "with registered companies", "in daylight", "Night travel is riskier."],
          ["E", "You should never carry luggage for", "strangers", "yourself", "your family", "your school", "It may contain illegal items."],
          ["M", "Accepting food or drinks from strangers while travelling is dangerous because", "they may be drugged", "they are always free", "they are healthy", "they are expensive", "Criminals drug victims."],
          ["M", "Sharing your itinerary should be done with", "family members, not publicly online", "everyone on social media", "strangers at the park", "no one at all", "Family can raise alarm if needed."],
          ["M", "Before a flight, passengers should pay attention to the", "safety briefing", "shopping catalogue", "music playlist", "weather in another country", "It explains emergency procedures."],
          ["M", "In a hotel, you should", "lock the door and use the peephole", "leave the door open", "tell strangers your room number", "let anyone in", "These prevent intrusion."],
          ["H", "Travelling with registered transport companies improves safety because", "vehicles and drivers can be traced and are regulated", "they are always cheaper", "they never stop", "they carry more passengers", "Accountability improves safety."],
          ["H", "Checking security updates before a journey helps you to", "avoid routes with recent attacks", "increase risk", "waste time only", "attract criminals", "Information guides safe choices."],
          ["H", "Leaving luggage unattended at an airport may", "cause a security alert", "be completely safe", "speed up boarding", "earn a reward", "Unattended bags are treated as threats."],
        ],
      },
      {
        week: 5,
        title: "Economic sabotage: oil theft and vandalism",
        subtopics: ["Meaning of economic sabotage", "Oil theft and illegal refining", "Vandalism of public infrastructure", "Effects and control"],
        objectives: ["Explain economic sabotage", "Describe oil theft and illegal refining", "Identify forms of infrastructure vandalism", "Explain the effects and control of economic sabotage"],
        lesson: {
          title: "Protecting the Nation's Wealth",
          summary: "Explain economic sabotage and its impact on national security.",
          minutes: 40,
          notes: `## Meaning
**Economic sabotage** is the **deliberate destruction, theft or disruption** of a nation's economic resources and infrastructure.

## Oil theft and illegal refining
- **Crude oil theft** involves tapping pipelines to steal oil ("bunkering").
- **Illegal refining** in crude local refineries (in creeks of the Niger Delta).
Effects: huge revenue losses; reduced oil output; **pollution** of land, water and air (soot); fires and explosions that kill people; health problems.

## Vandalism of public infrastructure
destruction or theft of:
- **electricity** cables, transformers and towers
- **telecommunication** masts and fibre cables
- **railway** tracks and equipment
- **water** pipes and street lights
- road signs and guard rails
Stolen metals are often sold as scrap.

## Effects
power outages; loss of communication; accidents; increased costs of repairs; loss of revenue; unemployment; poor services; environmental disasters; insecurity.

## Control
- security agencies (**NSCDC**, Navy, army, police) protect infrastructure
- **host community** involvement and surveillance contracts
- prosecution of offenders and **scrap-metal dealers** who buy stolen items
- modern monitoring technology (drones, sensors)
- alternative livelihoods for youths
- public enlightenment: public property belongs to all`,
          examples: `**Example 1.** What is economic sabotage? *Answer:* **Deliberate destruction, theft or disruption** of a nation's economic resources.

**Example 2.** Name one effect of illegal refining. *Answer:* **pollution** (or fires and deaths).

**Example 3.** Which agency is mainly responsible for protecting critical national infrastructure? *Answer:* the **NSCDC**.`,
        },
        questions: [
          ["E", "Deliberate destruction or theft of a nation's economic resources is", "economic sabotage", "economic growth", "saving", "investment", "It harms the economy."],
          ["E", "Stealing electricity cables and transformers is", "vandalism", "maintenance", "installation", "community service", "It damages public property."],
          ["E", "Public property belongs to", "everyone", "no one", "only the government officials", "only thieves", "It serves all citizens."],
          ["M", "Tapping pipelines to steal crude oil is called", "oil theft (bunkering)", "oil exploration by licence", "refining in a licensed plant", "oil export", "It is illegal tapping of pipelines."],
          ["M", "Which is an effect of illegal refining?", "pollution of air, land and water", "cleaner rivers", "more revenue for government", "better health", "Crude refining releases soot and oil."],
          ["M", "The agency mainly responsible for protecting critical infrastructure is the", "NSCDC", "NCDC", "FRSC", "NiMet", "Civil Defence guards pipelines and facilities."],
          ["M", "Vandalism of telecommunication masts causes", "loss of network services", "better signals", "cheaper data", "more masts", "Services are disrupted."],
          ["H", "Why are scrap-metal dealers sometimes prosecuted in anti-vandalism efforts?", "They buy stolen public infrastructure materials.", "They build roads.", "They clean the environment.", "They pay taxes.", "Demand fuels theft."],
          ["H", "Involving host communities in protecting pipelines helps because", "residents can monitor and report attacks", "communities cause attacks", "it increases theft", "it is unnecessary", "Local vigilance deters saboteurs."],
          ["H", "How does oil theft affect the nation's security?", "It reduces revenue and funds criminal groups.", "It increases revenue.", "It reduces crime.", "It creates legal jobs.", "Proceeds finance crime."],
        ],
      },
      {
        week: 6,
        title: "Social media, fake news and hate speech",
        subtopics: ["Social media and security", "Fake news and misinformation", "Hate speech and its dangers", "Responsible use and verification"],
        objectives: ["Explain the link between social media and security", "Identify fake news and misinformation", "Explain the dangers of hate speech", "Apply verification and responsible sharing practices"],
        lesson: {
          title: "Think Before You Share",
          summary: "Identify fake news and hate speech and use social media responsibly.",
          minutes: 40,
          notes: `## Social media and security
Social media spreads information **fast**. It helps warn people, mobilise help and report crimes, but it can also spread **panic, rumours and hatred**.

## Fake news and misinformation
- **Misinformation**: false information shared **without** intent to harm.
- **Disinformation**: false information shared **deliberately** to deceive.
- **Fake news**: false stories presented as real news.
Signs: sensational headlines; no author or date; unknown websites; edited photos or videos; urgent calls to "share before it is deleted"; no other trusted source reporting it.

## Hate speech
**Hate speech** is speech that **attacks or incites violence** against people because of their **ethnicity, religion, sex, disability or other identity**.
Dangers: incites violence and reprisal attacks; deepens division; can lead to communal clashes and loss of lives.

## Verification (SIFT)
- **S**top — do not share immediately
- **I**nvestigate the source
- **F**ind trusted coverage (reputable media, official agencies)
- **T**race claims, photos and videos to their original context

## Responsible use
- share only verified information
- report fake news and hate speech to platforms
- do not forward messages that insult groups
- follow official sources during emergencies (NCDC, NEMA, police)
- remember that online actions can have **legal consequences** (Cybercrimes Act 2015)`,
          examples: `**Example 1.** What is the difference between misinformation and disinformation? *Answer:* Misinformation is false **without intent to harm**; disinformation is **deliberately** false.

**Example 2.** Name one sign of fake news. *Answer:* a **sensational headline with no trusted source** (or "share before it is deleted").

**Example 3.** What does SIFT stand for? *Answer:* **Stop, Investigate the source, Find trusted coverage, Trace claims**.`,
        },
        questions: [
          ["E", "False stories presented as real news are called", "fake news", "weather reports", "school notices", "textbooks", "They mislead readers."],
          ["E", "Before sharing a message online, you should", "verify it", "forward it immediately", "add exaggerations", "post it to all groups", "Verification prevents harm."],
          ["E", "Speech that attacks people because of their ethnicity or religion is", "hate speech", "free advice", "a lesson", "a prayer", "It can incite violence."],
          ["M", "False information shared deliberately to deceive is", "disinformation", "misinformation", "education", "entertainment", "The intent is to mislead."],
          ["M", "Which is a sign that a story may be fake?", "it urges you to share before it is deleted", "it is reported by several trusted outlets", "it names its author and date", "it links to official sources", "Urgency pressures sharing."],
          ["M", "During an emergency, reliable information should be obtained from", "official agencies such as NEMA or the police", "anonymous broadcast messages", "rumours", "unknown websites", "Official sources are accountable."],
          ["M", "The first step in the SIFT method is to", "stop", "share", "save", "shout", "Pausing prevents spreading falsehoods."],
          ["H", "Why is hate speech a security threat?", "It can incite violence and reprisal attacks.", "It promotes peace.", "It has no effect.", "It improves unity.", "Words can trigger violence."],
          ["H", "Misinformation differs from disinformation because misinformation", "is shared without intent to harm", "is always deliberate", "is always true", "comes only from government", "Intent is the difference."],
          ["H", "Posting false information that causes panic can lead to", "legal consequences under the Cybercrimes Act", "a national award", "nothing", "promotion", "Online acts can be offences."],
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
        title: "First aid for serious injuries",
        subtopics: ["Priorities in first aid (DRABC)", "Severe bleeding and shock", "Fractures and head injuries", "Choking and basic CPR"],
        objectives: ["Apply the DRABC approach", "Give first aid for severe bleeding and shock", "Give first aid for fractures and head injuries", "Describe first aid for choking and basic CPR"],
        lesson: {
          title: "Responding to Serious Injuries",
          summary: "Apply first-aid priorities to serious injuries until professional help arrives.",
          minutes: 45,
          notes: `## Priorities: DRABC
1. **D**anger — make sure the area is safe for you and the casualty
2. **R**esponse — check if the casualty responds (speak, tap shoulders)
3. **A**irway — open the airway (tilt head back, lift chin)
4. **B**reathing — look, listen and feel for normal breathing for up to 10 seconds
5. **C**irculation / **C**all for help — call **112**; check for severe bleeding

## Severe bleeding
- apply **firm direct pressure** with a clean pad
- raise the injured part if possible (if no fracture)
- add more pads if blood soaks through; do not remove the first pad
- bandage firmly; get medical help

## Shock
signs: pale, cold, clammy skin; fast weak pulse; confusion.
lay the casualty down, raise the legs (if no leg injury), keep warm, reassure, do not give food or drink.

## Fractures
keep the injured part **still**; support it with padding or a splint; do not try to straighten it; get medical help.

## Head injuries
keep the person still; watch for vomiting, confusion or unconsciousness; seek medical help immediately.

## Choking (conscious adult or child over 1 year)
encourage coughing; give up to **5 back blows** between the shoulder blades; then up to **5 abdominal thrusts**; repeat; call 112 if not relieved.

## Basic CPR (for an unresponsive casualty not breathing normally)
call 112; push **hard and fast** in the centre of the chest (about 100–120 compressions per minute); trained rescuers add rescue breaths (30 compressions : 2 breaths); continue until help arrives. Use an **AED** if available.`,
          examples: `**Example 1.** What does DRABC stand for? *Answer:* **Danger, Response, Airway, Breathing, Circulation/Call**.

**Example 2.** What is the first action for severe bleeding? *Answer:* Apply **firm direct pressure**.

**Example 3.** What is the recommended rate of chest compressions in CPR? *Answer:* about **100–120 per minute**.`,
        },
        questions: [
          ["E", "The first thing to check at an accident scene is", "danger", "the casualty's phone", "the weather", "the casualty's name", "Your own safety comes first."],
          ["E", "Severe bleeding should first be treated by", "applying firm direct pressure", "washing with hot water", "applying sand", "removing clothes only", "Pressure slows bleeding."],
          ["E", "A suspected fracture should be", "kept still and supported", "straightened by force", "massaged", "ignored", "Movement worsens injury."],
          ["M", "In DRABC, the letter A stands for", "Airway", "Arm", "Ambulance", "Alarm", "Open the airway."],
          ["M", "A person with pale, cold, clammy skin and a fast weak pulse after injury may be in", "shock", "good health", "deep sleep", "a fever only", "These are signs of shock."],
          ["M", "For a conscious choking person who cannot cough effectively, give", "back blows and abdominal thrusts", "water to drink", "a slap on the face", "food", "These help dislodge the object."],
          ["M", "If blood soaks through a dressing, you should", "add more pads on top", "remove the first pad", "stop applying pressure", "wash the wound again", "Removing pads disturbs clotting."],
          ["H", "The recommended rate of chest compressions in CPR is about", "100–120 per minute", "10 per minute", "300 per minute", "1 per minute", "This maintains circulation."],
          ["H", "A person in shock should NOT be given", "food or drink", "reassurance", "warmth", "rest", "They may need surgery or may choke."],
          ["H", "An automated external defibrillator (AED) is used to", "restore a normal heart rhythm", "stop bleeding", "splint fractures", "measure temperature", "It delivers a shock to the heart."],
        ],
      },
      {
        week: 2,
        title: "Road traffic crash response",
        subtopics: ["Causes of road crashes", "Actions at a crash scene", "Helping casualties safely", "Reporting and preventing crashes"],
        objectives: ["Identify causes of road crashes", "State safe actions at a crash scene", "Explain how to help casualties safely", "Describe how to report and prevent road crashes"],
        lesson: {
          title: "What to Do at a Crash Scene",
          summary: "Respond safely and helpfully at the scene of a road crash.",
          minutes: 40,
          notes: `## Causes of road crashes
speeding, drunk or drugged driving, phone use, fatigue, dangerous overtaking, bad roads and potholes, unroadworthy vehicles (bad brakes, worn tyres), overloading, poor visibility, pedestrians' carelessness, animals on roads.

## Actions at a crash scene (for bystanders)
1. **Protect yourself**: stay off the traffic lane; wear bright clothing if possible.
2. **Make the scene safe**: warn approaching traffic (hazard lights, warning triangles placed well behind the crash); no smoking (fuel leaks).
3. **Call for help**: **122** (FRSC) or **112**; give location, number of vehicles and casualties, hazards (fire, fuel spill).
4. **Help casualties**: check responsiveness and breathing; control bleeding; keep them warm and calm.
5. **Do not move** casualties unless there is immediate danger (fire, traffic) — they may have spinal injuries.
6. **Do not remove** motorcycle helmets unless necessary for breathing.
7. **Protect property**: do not loot; looting is a crime.

## Helping safely
wear gloves if possible; do not give food or drink; reassure casualties; note details for the police.

## Prevention
obey traffic rules; maintain vehicles; avoid drink-driving; wear seat belts and helmets; pedestrians use crossings; report reckless drivers.`,
          examples: `**Example 1.** Why should casualties not be moved unnecessarily after a crash? *Answer:* They may have **spinal injuries** that movement can worsen.

**Example 2.** What should you tell emergency services when reporting a crash? *Answer:* **location**, number of vehicles and casualties, and hazards such as fire.

**Example 3.** Why should no one smoke at a crash scene? *Answer:* **Leaking fuel** may catch fire.`,
        },
        questions: [
          ["E", "Which is a cause of road crashes?", "speeding", "wearing seat belts", "obeying traffic lights", "vehicle maintenance", "Speed reduces control."],
          ["E", "At a crash scene, you should first", "protect yourself and make the scene safe", "loot the vehicles", "take selfies", "move all casualties immediately", "Safety comes first."],
          ["E", "Road crashes can be reported to the FRSC on", "122", "199", "911", "000", "It is the FRSC emergency number."],
          ["M", "Casualties should not be moved unnecessarily because they may have", "spinal injuries", "no injuries", "extra energy", "better blood flow", "Movement can cause paralysis."],
          ["M", "Warning triangles are placed", "well behind the crash to alert oncoming traffic", "on the casualties", "inside the car", "in the bush", "They prevent further collisions."],
          ["M", "Smoking at a crash scene is dangerous because", "leaking fuel may catch fire", "it is rude only", "it helps casualties", "it stops bleeding", "Fuel vapour is flammable."],
          ["M", "Taking property from crash victims is", "looting and a crime", "helping", "first aid", "legal salvage", "Victims must be protected."],
          ["H", "A motorcyclist's helmet should be removed only if", "necessary to keep the airway open", "the victim looks uncomfortable", "you want to see his face", "it is dirty", "Removal can worsen neck injuries."],
          ["H", "When reporting a crash, mentioning a fuel spill helps responders to", "prepare for fire risk", "ignore the call", "delay arrival", "bring snacks", "Hazards shape the response."],
          ["H", "Which measure best prevents crashes caused by vehicle failure?", "regular vehicle maintenance", "overloading", "speeding", "worn tyres", "Well-maintained vehicles are safer."],
        ],
      },
      {
        week: 3,
        title: "Environmental security",
        subtopics: ["Meaning of environmental security", "Environmental threats in Nigeria", "Links between environment and conflict", "Protecting the environment"],
        objectives: ["Explain environmental security", "Identify environmental threats in Nigeria", "Explain links between environmental degradation and conflict", "Suggest ways of protecting the environment"],
        lesson: {
          title: "A Safe Environment for All",
          summary: "Explain how environmental problems threaten security and how to prevent them.",
          minutes: 40,
          notes: `## Meaning
**Environmental security** is the **protection of people and communities from environmental threats** and the sustainable management of natural resources so that they support life and peace.

## Environmental threats in Nigeria
| Threat | Main areas |
|---|---|
| **desertification and drought** | far north |
| **flooding** | river valleys, coastal and urban areas |
| **gully erosion** | south-east |
| **oil pollution and gas flaring** | Niger Delta |
| **deforestation** | forest belt |
| **waste and plastic pollution** | cities |
| **climate change** | nationwide |

## Environment and conflict
- **scarcity** of land and water (from desertification) pushes herders southwards, contributing to **farmer–herder conflicts**
- **oil pollution** destroys livelihoods, fuelling agitation in the Niger Delta
- **floods** displace people and create competition for resources
- shrinking of **Lake Chad** has affected livelihoods in the north-east, worsening insecurity

## Protecting the environment
tree planting (e.g. the **Great Green Wall**), proper waste disposal and recycling, clean-up of polluted areas, controlled grazing and ranching, avoiding building in waterways, renewable energy, enforcement of environmental laws (**NESREA**), environmental education, participation in sanitation exercises.`,
          examples: `**Example 1.** How does desertification contribute to insecurity? *Answer:* It causes **scarcity of land and water**, pushing herders south and fuelling **farmer–herder conflicts**.

**Example 2.** Name one environmental threat in the Niger Delta. *Answer:* **oil pollution** (or gas flaring).

**Example 3.** Name one way to protect the environment. *Answer:* **tree planting** (or recycling).`,
        },
        questions: [
          ["E", "Protection of people from environmental threats is", "environmental security", "cyber security", "border security", "school security", "It links nature and safety."],
          ["E", "Which environmental threat is common in the far north?", "desertification", "gully erosion", "mangrove loss", "coastal erosion", "Dry conditions spread desert."],
          ["E", "Planting trees helps to", "protect the environment", "increase erosion", "cause floods", "pollute air", "Trees hold soil and absorb carbon."],
          ["M", "Oil pollution and gas flaring are major problems in the", "Niger Delta", "Sahel", "Jos Plateau", "Sokoto plains", "Oil is produced there."],
          ["M", "How does desertification contribute to farmer–herder conflicts?", "It reduces grazing land, pushing herders into farming areas.", "It creates more pasture.", "It stops migration.", "It has no effect.", "Scarcity drives movement."],
          ["M", "The shrinking of Lake Chad has worsened insecurity because", "it destroyed livelihoods of people who depended on it", "it created more fish", "it improved farming", "it stopped migration", "Loss of income fuels conflict."],
          ["M", "The agency that enforces environmental standards is", "NESREA", "NDLEA", "NCDC", "FRSC", "It enforces environmental laws."],
          ["H", "The Great Green Wall initiative aims to", "stop the spread of the desert with tree belts", "build a wall at the border", "increase mining", "drain lakes", "Trees halt desertification."],
          ["H", "Why does oil pollution fuel agitation in the Niger Delta?", "It destroys fishing and farming livelihoods.", "It creates many jobs for locals only.", "It improves health.", "It has no local effect.", "Livelihood loss causes grievances."],
          ["H", "Ranching instead of open grazing can improve environmental security by", "reducing conflict over farmland", "increasing crop destruction", "spreading desert", "encouraging cattle rustling", "It limits clashes over land."],
        ],
      },
      {
        week: 4,
        title: "Safety with gas and electricity",
        subtopics: ["Liquefied petroleum gas (LPG) safety", "Gas explosions and prevention", "Electrical hazards", "Electrical safety and response to shock"],
        objectives: ["Explain safe handling of LPG", "Identify causes of gas explosions and preventive measures", "Identify electrical hazards", "Describe electrical safety and response to electric shock"],
        lesson: {
          title: "Handling Gas and Electricity Safely",
          summary: "Prevent gas explosions and electrical accidents at home and in public.",
          minutes: 40,
          notes: `## LPG (cooking gas) safety
- buy cylinders from **licensed** dealers; check for dents and rust
- keep cylinders **upright**, outdoors or in well-ventilated places, away from heat
- use approved regulators and hoses; replace cracked hoses
- check for leaks with **soapy water**
- turn off the cylinder valve after cooking
- never leave cooking unattended

## Gas explosions: causes and prevention
causes: leaks from faulty hoses or valves; illegal refilling ("decanting"); overfilled cylinders; storing gas plants near homes; accidents during transport.
If you smell gas: **do not switch on/off lights or use phones inside**; do not light matches; turn off the valve; open windows and doors; leave the building; call for help from outside.

## Electrical hazards
faulty or exposed wiring; overloaded sockets; wet hands or floors; illegal connections; poor-quality cables; touching fallen power lines; climbing electric poles; flying kites near power lines.

## Electrical safety
use qualified electricians; use fuses and circuit breakers; do not overload sockets; switch off appliances after use; keep electrical items away from water; report fallen cables to the electricity company.

## Response to electric shock
1. **do not touch** the person while they are in contact with the current
2. **switch off** the power at the mains, or push the source away with a **dry wooden** stick
3. call **112**
4. check breathing; start CPR if needed and trained
5. treat burns with cool water`,
          examples: `**Example 1.** How should you check a gas hose for leaks? *Answer:* With **soapy water**.

**Example 2.** What should you avoid doing if you smell gas indoors? *Answer:* **Switching lights on or off** or lighting matches.

**Example 3.** What is the first step in helping a victim of electric shock? *Answer:* **Switch off the power** (or separate them with a dry wooden object) without touching them.`,
        },
        questions: [
          ["E", "Cooking gas cylinders should be kept", "upright in a well-ventilated place", "lying flat near the stove", "inside a closed cupboard near heat", "in direct fire", "Ventilation prevents gas build-up."],
          ["E", "Before touching a victim of electric shock, you should", "switch off the power", "grab the victim's hand", "pour water on the victim", "shout only", "Otherwise you may be shocked."],
          ["E", "Which is an electrical hazard?", "exposed wiring", "switched-off appliances", "properly installed sockets", "circuit breakers", "Exposed wires cause shocks."],
          ["M", "If you smell gas indoors, you should NOT", "switch on the lights", "open windows", "turn off the valve", "leave the building", "Sparks can ignite gas."],
          ["M", "Leaks in gas hoses are safely detected with", "soapy water", "a lit match", "a candle", "a lighter", "Bubbles reveal leaks."],
          ["M", "Illegal refilling of gas cylinders from other cylinders is called", "decanting", "recycling", "metering", "venting", "It is unsafe and illegal."],
          ["M", "Fallen electric cables should be", "avoided and reported to the electricity company", "moved with bare hands", "used as ropes", "stepped on", "They may be live."],
          ["H", "Flying kites near power lines is dangerous because", "the kite string may conduct electricity or cause faults", "kites fly better there", "it improves reception", "it is required", "Contact can cause electrocution."],
          ["H", "A dry wooden stick can be used to separate a victim from a current because", "dry wood does not conduct electricity well", "wood conducts electricity well", "it absorbs electricity", "it is heavy", "Dry wood is an insulator."],
          ["H", "Why should gas plants not be located close to residential homes?", "Explosions there can kill many residents.", "They improve property value.", "They reduce fire risk.", "They are required by law to be near homes.", "Distance limits casualties."],
        ],
      },
      {
        week: 5,
        title: "Voluntary service and uniformed youth organisations",
        subtopics: ["Meaning of voluntary service", "Uniformed youth organisations", "Roles in safety and emergencies", "Benefits of volunteering"],
        objectives: ["Explain voluntary service", "Identify uniformed youth organisations in Nigerian schools", "Describe their roles in safety and emergencies", "Explain the benefits of volunteering"],
        lesson: {
          title: "Serving Others Through Volunteering",
          summary: "Explore uniformed youth organisations and their contribution to safety.",
          minutes: 40,
          notes: `## Meaning
**Voluntary service** is work done **willingly and without payment** to help others and the community.

## Uniformed youth organisations
| Organisation | Focus |
|---|---|
| **Boys' Scouts** | outdoor skills, first aid, community service ("Be Prepared") |
| **Girl Guides** | leadership, life skills, community service |
| **Red Cross Society (Youth/Red Cross Links)** | first aid, disaster relief, blood donation awareness |
| **Man O' War** | discipline, leadership, adventure training |
| **Boys' Brigade** and **Girls' Brigade** | Christian values, discipline, service |
| **Muslim Students' Society (MSS)** and other faith groups | moral values and service |
| **Road Safety Clubs** (FRSC) | road safety education |
| **Peace clubs** and anti-drug clubs (NDLEA) | peace and drug-free living |

## Roles in safety and emergencies
first aid at events; crowd control support at school functions; sanitation and tree planting; awareness campaigns (road safety, drugs, disease prevention); helping in relief distribution and emergencies (under adult supervision); assisting the elderly and persons with disabilities.

## Benefits of volunteering
**for the volunteer:** discipline, leadership, teamwork, first-aid and survival skills, confidence, sense of purpose, certificates and recognition.
**for society:** safer communities, reduced workload for emergency services, stronger community spirit.`,
          examples: `**Example 1.** What is the motto of the Scouts? *Answer:* **"Be Prepared."**

**Example 2.** Which youth organisation focuses on first aid and disaster relief? *Answer:* the **Red Cross** (youth links).

**Example 3.** Name one benefit of volunteering to a student. *Answer:* **leadership skills** (or discipline, teamwork).`,
        },
        questions: [
          ["E", "Work done willingly without payment to help others is", "voluntary service", "paid employment", "punishment", "taxation", "Volunteers serve freely."],
          ["E", "The motto of the Scouts is", "Be Prepared", "Unity and Faith", "Service to Humanity", "Work and Play", "Scouts prepare for emergencies."],
          ["E", "Which youth organisation is known for first aid and disaster relief?", "Red Cross", "a street gang", "a secret cult", "a football fan club", "It helps the injured and displaced."],
          ["M", "Road Safety Clubs in schools are linked to the", "FRSC", "NDLEA", "INEC", "NCDC", "They promote road safety."],
          ["M", "Anti-drug clubs in schools are supported by the", "NDLEA", "FRSC", "NIMC", "NERC", "They promote drug-free living."],
          ["M", "Which is a benefit of volunteering to students?", "leadership and teamwork skills", "laziness", "loss of confidence", "isolation", "Volunteering builds skills."],
          ["M", "The Man O' War organisation emphasises", "discipline and adventure training", "gambling", "cultism", "political thuggery", "It builds character."],
          ["H", "Why should young volunteers in emergencies work under adult supervision?", "to ensure their safety and effective coordination", "because they are not useful", "to slow the response", "to avoid all work", "Supervision protects volunteers."],
          ["H", "How do volunteers help emergency services?", "They reduce the workload and extend reach.", "They block responders.", "They create more emergencies.", "They replace hospitals.", "Extra hands support response."],
          ["H", "Taking part in tree planting and sanitation is an example of", "community service", "crime", "vandalism", "trespass", "It improves the environment."],
        ],
      },
      {
        week: 6,
        title: "Protecting public infrastructure and facilities",
        subtopics: ["Meaning of public infrastructure", "Importance of public facilities", "Threats to public facilities", "Citizens' responsibilities"],
        objectives: ["Explain public infrastructure", "Explain the importance of public facilities", "Identify threats to public facilities", "Describe citizens' responsibilities for protecting them"],
        lesson: {
          title: "Caring for What Belongs to All",
          summary: "Protect public facilities that serve everyone.",
          minutes: 40,
          notes: `## Meaning
**Public infrastructure** refers to facilities and systems **provided for the use of all citizens**, usually by government: roads, bridges, railways, schools, hospitals, water supply, electricity networks, street lights, telecommunication masts, drainage, public toilets, parks, markets and government buildings.

## Importance
enable transport, trade and communication; provide essential services (health, education, water, power); support security (street lights, communication); promote development and quality of life.

## Threats
- **vandalism** and theft (cables, manhole covers, guard rails)
- **arson** during riots and protests
- **misuse** (overloading bridges, dumping refuse in drains)
- **neglect** and lack of maintenance
- **encroachment** (building on drainage channels and road setbacks)
- **terrorist and criminal attacks**
- **corruption** in construction (substandard work)

## Citizens' responsibilities
- use facilities properly and keep them clean
- do not vandalise or buy stolen public materials
- report damage and vandalism to authorities
- participate in community protection and sanitation
- express grievances **peacefully**, not by destroying public property
- pay taxes and levies that fund maintenance
- monitor public projects to ensure quality`,
          examples: `**Example 1.** Name two examples of public infrastructure. *Answer:* **roads** and **hospitals** (or street lights, water supply).

**Example 2.** Name one threat to public facilities. *Answer:* **vandalism** (or encroachment).

**Example 3.** How should citizens express grievances? *Answer:* **Peacefully**, without destroying public property.`,
        },
        questions: [
          ["E", "Facilities provided for the use of all citizens are called", "public infrastructure", "private property", "personal belongings", "family heirlooms", "They serve everyone."],
          ["E", "Which is public infrastructure?", "a public hospital", "a family car", "a private shop", "a personal phone", "It serves the public."],
          ["E", "Citizens should report damaged public facilities to", "the authorities", "no one", "vandals", "social media only", "Authorities can repair them."],
          ["M", "Building houses on drainage channels is", "encroachment", "maintenance", "recycling", "sanitation", "It blocks public facilities."],
          ["M", "Burning public buildings during protests is", "arson", "peaceful protest", "community service", "civic duty", "It destroys shared property."],
          ["M", "Street lights contribute to security by", "reducing hiding places for criminals at night", "attracting criminals", "wasting money only", "blinding drivers", "Light deters crime."],
          ["M", "Buying stolen manhole covers and cables encourages", "vandalism", "maintenance", "safety", "development", "Demand fuels theft."],
          ["H", "How does corruption in construction threaten public safety?", "Substandard buildings and bridges may collapse.", "It improves quality.", "It reduces costs safely.", "It has no effect.", "Poor materials cause disasters."],
          ["H", "Paying taxes and levies helps public infrastructure because", "it funds construction and maintenance", "it is unrelated", "it causes vandalism", "it stops services", "Revenue supports facilities."],
          ["H", "The best way to express dissatisfaction with government is", "peaceful and lawful protest or petition", "destroying public property", "arson", "looting", "Lawful means protect rights and property."],
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
        title: "BECE revision: security concepts and threats",
        subtopics: ["Security, safety and types of security", "Threats, risks and situational awareness", "Crime and crime prevention", "National security threats"],
        objectives: ["Recall key security concepts", "Revise threats, risks and awareness", "Revise crime and crime prevention", "Answer BECE-style questions on security concepts"],
        lesson: {
          title: "BECE Revision: Security Concepts",
          summary: "Revise security concepts, threats and crime prevention for the BECE.",
          minutes: 45,
          notes: `## Key concepts
- **Security**: freedom from danger; **safety**: protection from accidents.
- Types: personal, home, school, community, national; also food, health, cyber, environmental, economic, human security.
- **Threat** (source of harm) + **vulnerability** (weakness) → **risk** (chance of harm).
- Situational awareness levels: white (unaware), yellow (alert), orange (specific threat), red (act).

## Crime
- Crime: act punishable by the state. Felonies (serious), misdemeanours, simple offences.
- Theft (no force), burglary (breaking in), robbery (force), armed robbery (weapons).
- Causes: poverty, unemployment, greed, peer pressure, drugs, weak enforcement.
- Prevention: target hardening, street lights, neighbourhood watch, community policing (Police Act 2020), job creation.

## National security threats
terrorism, banditry, kidnapping (ransom, virtual, express), cultism and gangs, oil theft and vandalism, arms proliferation (SALW; NCCSALW 2021), smuggling, cybercrime, communal conflicts, hate speech and fake news.

## Agencies
Army, Navy, Air Force; Police; DSS; NSCDC; Immigration; Customs; NDLEA; NAPTIP; FRSC; Correctional Service; NEMA; NCDC.`,
          examples: `**Example 1.** *Robbery differs from theft because robbery involves:* **force or threat of force**.

**Example 2.** *Which agency protects critical infrastructure?* **NSCDC**.

**Example 3.** *Risk results from a threat combined with a:* **vulnerability**.`,
        },
        questions: [
          ["E", "Robbery differs from theft because robbery involves", "force or threat of force", "no victims", "legal permission", "no property", "Force defines robbery."],
          ["E", "Which is an example of target hardening?", "installing strong locks and burglary-proof bars", "leaving doors open", "displaying valuables", "switching off street lights", "It makes targets harder to attack."],
          ["E", "The agency that fights human trafficking is", "NAPTIP", "NCDC", "NiMet", "NERC", "It was set up in 2003."],
          ["M", "Risk results from a threat combined with", "vulnerability", "safety", "security", "reward", "Weakness increases the chance of harm."],
          ["M", "The alertness level in which danger is present and you must act is", "red", "white", "yellow", "orange", "Red means act immediately."],
          ["M", "A fake call claiming a relative has been kidnapped is", "virtual kidnapping", "express kidnapping", "real abduction", "arrest", "It is extortion by deception."],
          ["M", "The body that coordinates small arms control in Nigeria is", "NCCSALW", "NCDC", "NDPC", "NESREA", "It was established in 2021."],
          ["H", "Community policing was provided for in the", "Police Act, 2020", "Land Use Act", "Firearms Act of 1959 only", "Electoral Act", "It supports police–community partnership."],
          ["H", "Which dimension of security concerns protection of computers and data?", "cyber security", "food security", "environmental security", "military security", "It deals with digital threats."],
          ["H", "Proceeds of oil theft threaten national security because they", "fund criminal and militant groups", "go to schools", "pay taxes", "build hospitals", "Illicit money fuels crime."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: personal safety and protection",
        subtopics: ["Stranger danger, abduction and trafficking", "Bullying, abuse and gender-based violence", "Online safety, cybercrime and data protection", "Drugs, gangs and cults"],
        objectives: ["Revise personal safety rules", "Revise protection from abuse and violence", "Revise online safety and data protection", "Answer BECE-style questions on personal safety"],
        lesson: {
          title: "BECE Revision: Personal Safety",
          summary: "Revise personal safety, protection from abuse and online safety.",
          minutes: 45,
          notes: `## Stranger danger and trafficking
- Abductors' tricks: gifts, lifts, fake emergencies, pretending to be officials.
- Rules: family code word; walk in groups; **No – Go – Yell – Tell**.
- Trafficking: deception for exploitation; warning signs (secrecy, agents keeping documents); report to **NAPTIP**.

## Abuse and violence
- Bullying: physical, verbal, social, cyber, extortion — tell an adult; bystanders support victims.
- GBV and sexual abuse: body safety; no secrets about touching; grooming signs; **SARCs**, police gender desks; VAPP Act 2015; Child Rights Act 2003.

## Online safety
- Protect personal data: never share PINs, OTPs, BVN, passwords; strong passwords; two-factor authentication.
- Phishing, identity theft, scams, Ponzi schemes, fake alerts, sextortion.
- THINK before you post; SIFT to verify news.
- Laws: **Cybercrimes Act 2015**; **Nigeria Data Protection Act 2023**.

## Drugs, gangs and cults
- Drug abuse leads to crime and violence; refusal skills; **NDLEA**.
- Gangs and cults recruit with protection, money and peer pressure; join positive clubs; report threats.`,
          examples: `**Example 1.** *The steps when a stranger tries to take you are:* **No, Go, Yell, Tell**.

**Example 2.** *Which law protects personal data in Nigeria?* **Nigeria Data Protection Act, 2023**.

**Example 3.** *Excessive gifts and requests for secrecy are signs of:* **grooming**.`,
        },
        questions: [
          ["E", "If a stranger tries to take you, you should", "say No, run, yell and tell", "go quietly", "accept the gift", "keep it secret", "These steps help escape."],
          ["E", "Which should you never share with anyone online?", "your OTP", "your favourite subject", "the name of a book", "a school event date", "OTPs give access to accounts."],
          ["E", "Bullies should be reported to", "a trusted adult", "nobody", "other bullies", "social media only", "Adults can stop bullying."],
          ["M", "Excessive gifts and requests for secrecy from an adult are signs of", "grooming", "friendship always", "generosity only", "a scholarship", "Abusers build secret trust."],
          ["M", "The law protecting personal data in Nigeria is the", "Nigeria Data Protection Act, 2023", "Child Rights Act, 2003", "Firearms Act", "Police Act", "It regulates personal data."],
          ["M", "Checking a story using trusted sources before sharing follows the", "SIFT method", "PASS technique", "DRABC approach", "RICE method", "SIFT verifies information."],
          ["M", "Survivors of sexual assault can receive medical and psychological care at", "Sexual Assault Referral Centres", "motor parks", "customs posts", "stadiums", "SARCs support survivors."],
          ["H", "An agent who keeps a job seeker's passport is showing a warning sign of", "human trafficking", "good employment practice", "tourism", "scholarship", "It controls victims."],
          ["H", "Blackmailing someone with intimate images is", "sextortion", "phishing", "hacking of servers", "cyber security", "It is a serious online crime."],
          ["H", "Which is the best response to recruitment attempts by a cult?", "refuse firmly and report to school authorities", "join to avoid trouble", "keep quiet", "carry a weapon", "Authorities can protect students."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: emergencies and first aid",
        subtopics: ["Fire safety and extinguishers", "Emergency preparedness, drills and reporting", "First aid", "Disasters, water safety and crowd safety"],
        objectives: ["Revise fire safety and extinguishers", "Revise emergency preparedness and reporting", "Revise first-aid procedures", "Answer BECE-style questions on emergencies"],
        lesson: {
          title: "BECE Revision: Emergencies",
          summary: "Revise fire safety, emergency response and first aid for the BECE.",
          minutes: 45,
          notes: `## Fire
- Fire triangle: **heat, fuel, oxygen**.
- Classes: A (solids), B (liquids), C (gases), electrical, F (cooking oil).
- Extinguishers: water (red, Class A), foam (cream, A and B), dry powder (blue, multi-purpose), CO₂ (black, electrical), wet chemical (yellow, F).
- **PASS**: Pull, Aim at the base, Squeeze, Sweep. Stop, drop and roll; crawl low; never use lifts.

## Emergencies
- **112** (national emergency), **122** (FRSC).
- Report: who, what, where, how many injured, hazards; do not hang up.
- Evacuation: walk to the nearest safe exit, assembly point, headcount. Lockdown when the threat is outside.
- Emergency kit: water, food, torch, first-aid kit, whistle, documents, power bank.

## First aid
- Aims: preserve life, prevent worsening, promote recovery.
- **DRABC**; severe bleeding — direct pressure; shock — lay down, raise legs, keep warm; fractures — keep still; choking — back blows and abdominal thrusts; CPR — 100–120 compressions per minute.
- Burns — cool running water; nosebleed — lean forward and pinch; sprains — RICE.

## Disasters and crowds
- Floods: higher ground; no walking through floodwater. Lightning: stay indoors, avoid tall trees.
- Water rescue: **Reach, Throw, Don't Go**.
- Stampedes: stay at edges; protect your head if you fall.`,
          examples: `**Example 1.** *Which extinguisher is best for electrical fires?* **CO₂**.

**Example 2.** *What does the first D in DRABC stand for?* **Danger**.

**Example 3.** *For a nosebleed, the person should:* **lean forward and pinch the soft part of the nose**.`,
        },
        questions: [
          ["E", "The three sides of the fire triangle are heat, fuel and", "oxygen", "water", "carbon dioxide", "sand", "Remove one and the fire stops."],
          ["E", "The national emergency number is", "112", "911", "999", "000", "It is toll-free in Nigeria."],
          ["E", "For a minor burn, the first action is to", "cool it under running water", "apply oil", "burst the blisters", "cover with sand", "Cooling limits damage."],
          ["M", "The extinguisher best suited for electrical fires is", "carbon dioxide", "water", "foam on live equipment", "wet chemical for oil only", "CO₂ does not conduct electricity."],
          ["M", "In PASS, the extinguisher should be aimed at the", "base of the fire", "top of the flames", "ceiling", "smoke", "The fuel burns at the base."],
          ["M", "In DRABC, the first step is to check for", "danger", "response", "airway", "breathing", "Rescuer safety comes first."],
          ["M", "The rule for untrained people rescuing someone from water is", "Reach, Throw, Don't Go", "Jump and swim", "Dive and grab", "Run and hide", "Stay safe on land."],
          ["H", "When the threat is armed intruders outside the school, the recommended action is usually", "lockdown", "evacuation to the playground", "opening the gates", "assembling outside", "Staying inside reduces exposure."],
          ["H", "A person in shock should be", "laid down with legs raised and kept warm", "given food immediately", "made to walk around", "left alone", "This improves blood flow to vital organs."],
          ["H", "If you fall during a stampede and cannot get up, you should", "curl up and protect your head", "lie flat on your back", "stay still in the open", "grab people's legs", "Protecting the head reduces injury."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: security agencies, rights and civic roles",
        subtopics: ["Security agencies and their functions", "Rights during encounters with security personnel", "Community safety and reporting", "Protecting public infrastructure and the environment"],
        objectives: ["Revise the functions of security agencies", "Revise citizens' rights and responsibilities during encounters", "Revise community safety and reporting", "Answer BECE-style questions on civic roles in security"],
        lesson: {
          title: "BECE Revision: Agencies and Civic Roles",
          summary: "Revise security agencies, rights and citizens' roles for the BECE.",
          minutes: 45,
          notes: `## Agencies at a glance
| Agency | Role |
|---|---|
| Army / Navy / Air Force | defence of land, sea, air |
| Nigeria Police Force | law and order; crime |
| DSS | intelligence |
| NSCDC | critical infrastructure |
| Immigration Service | people and passports |
| Customs Service | goods and duties; anti-smuggling |
| FRSC | road safety (122) |
| NDLEA | drugs |
| NAPTIP | human trafficking |
| NEMA / SEMA | disasters |
| NCDC | disease outbreaks |
| Correctional Service | custody and rehabilitation |
| Federal Fire Service | fire and rescue |

## Rights during encounters
reason for arrest; silence and a lawyer; dignity (Anti-Torture Act 2017); presumption of innocence; no arrest in place of another (ACJA 2015); bail is free; children not detained with adults.
Responsibilities: be calm and respectful; obey lawful instructions; do not bribe; report misconduct to the **Police Complaint Response Unit**.

## Community safety
neighbourhood watch; community policing; report promptly and accurately; protect informants; avoid jungle justice and rumours.

## Infrastructure and environment
protect public facilities; report vandalism; express grievances peacefully; environmental security (desertification, pollution, floods) and its link to conflict; **NESREA**.`,
          examples: `**Example 1.** *Which agency handles disease outbreaks?* **NCDC**.

**Example 2.** *Where can police misconduct be reported?* **Police Complaint Response Unit**.

**Example 3.** *Suspects caught by the community should be:* **handed over to the police**.`,
        },
        questions: [
          ["E", "The agency responsible for disease outbreak response is", "NCDC", "NDLEA", "FRSC", "NAPTIP", "Nigeria Centre for Disease Control and Prevention."],
          ["E", "A suspect caught by the community should be", "handed over to the police", "beaten by a mob", "burnt", "hidden", "Only courts may punish."],
          ["E", "Which agency is responsible for disaster management at the national level?", "NEMA", "NCDC", "NDLEA", "INEC", "The National Emergency Management Agency."],
          ["M", "The body that oversees the discipline of police officers is the", "Police Service Commission", "Nigerian Customs Service", "NiMet", "NERC", "It handles appointments and discipline."],
          ["M", "The law that prohibits arresting a person in place of a suspect is the", "Administration of Criminal Justice Act, 2015", "Land Use Act", "Firearms Act", "Electoral Act", "It protects innocent relatives."],
          ["M", "The agency that controls entry and exit of people at the borders is the", "Nigeria Immigration Service", "NSCDC", "FRSC", "NDLEA", "It issues passports and visas."],
          ["M", "Expressing grievances by destroying public property is", "vandalism and unlawful", "a civic duty", "peaceful protest", "community service", "Protest must be peaceful."],
          ["H", "The slogan 'bail is free' means", "no one should pay money to obtain police bail", "bail is illegal", "only the rich get bail", "bail must be bought", "Charging for bail is corrupt."],
          ["H", "Why must the identity of informants be protected?", "to prevent revenge attacks", "to hide crimes", "to embarrass them", "to slow investigations", "Protection encourages reporting."],
          ["H", "How does environmental degradation contribute to insecurity?", "It creates scarcity that fuels competition and conflict.", "It creates peace.", "It stops migration.", "It increases resources.", "Scarcity drives conflict."],
        ],
      },
    ],
  },
];
