import type { TermPlan } from "../types";

/** JSS1 History — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and importance of History",
        subtopics: ["Meaning of History", "History and story-telling", "Importance of History", "The work of a historian"],
        objectives: ["Define History", "Differentiate History from story-telling", "State the importance of studying History", "Describe the work of a historian"],
        lesson: {
          title: "What Is History?",
          summary: "Explain what History is and why it is studied.",
          minutes: 40,
          notes: `## Meaning of History
**History** is the **study of past events** — especially the activities of human beings — based on **evidence**. It asks **what** happened, **when**, **where**, **how** and **why**, and how the past affects the present.
The word comes from the Greek *historia*, meaning "**inquiry**" or "finding out". The Greek writer **Herodotus** is often called the "**Father of History**".

History deals with three things:
- **people** — individuals and societies
- **time** — when events happened and in what order
- **place** — where they happened

## History and story-telling
| History | Story-telling |
|---|---|
| based on **evidence** | may be imagined |
| about **real** people and events | may include invented characters, spirits, talking animals |
| has **dates** and places | often "once upon a time" |
| can be **checked** against sources | cannot always be verified |
| aims to **explain** the past | aims mainly to entertain or teach morals |
Stories, legends and myths can still be useful to the historian as clues, but they must be examined carefully.

## Importance of History
1. it helps us **know our origin** and identity — who we are and where we came from
2. it helps us **understand the present**: our boundaries, languages, religions and government are results of past events
3. it helps us **learn from past mistakes** and successes and so plan for the future
4. it promotes **patriotism**, national pride and **unity** by showing what Nigerians have achieved together
5. it teaches us to **respect other peoples** and cultures
6. it preserves our **culture and heritage**
7. it trains the mind to **think critically** — to weigh evidence and not believe everything we hear
8. it prepares people for careers in law, teaching, journalism, administration, diplomacy, archives and museums

## The historian
A **historian** is a person who studies and writes about the past. The historian:
- **collects** evidence from different sources
- **examines** it to see whether it is reliable
- **interprets** it — explains causes and results
- **records** the findings fairly, without bias
Notable Nigerian historians include **Kenneth Dike**, **Jacob Ade Ajayi**, **Saburi Biobaku**, **Adiele Afigbo**, **Obaro Ikime** and **Bolanle Awe**.

## Related terms
- **prehistory** — the period before written records
- **heritage** — what is handed down from the past
- **artefact** — an object made by people in the past`,
          examples: `**Example 1.** Define History. *Answer:* The **study of past human events based on evidence**.

**Example 2.** Give one difference between History and a folk tale. *Answer:* History is **based on evidence**; a folk tale may be **imagined**.

**Example 3.** Who is called the Father of History? *Answer:* **Herodotus**.`,
        },
        questions: [
          ["E", "History is the study of", "past events", "future events", "the stars", "rocks only", "It is based on evidence."],
          ["E", "A person who studies and writes about the past is a", "historian", "geologist", "biologist", "novelist", "He collects and interprets evidence."],
          ["E", "The 'Father of History' is", "Herodotus", "Aristotle", "Homer", "Pythagoras", "He was a Greek writer."],
          ["M", "The word 'history' comes from a Greek word meaning", "inquiry", "war", "kingdom", "writing", "It means finding out."],
          ["M", "The main difference between History and story-telling is that History is based on", "evidence", "imagination", "entertainment", "proverbs", "Its claims can be checked."],
          ["M", "The period before written records is called", "prehistory", "modern history", "a century", "a decade", "It is studied mainly through remains."],
          ["M", "An object made by people in the past is called", "an artefact", "a fossil only", "a legend", "a chronicle", "Pots and tools are examples."],
          ["H", "History promotes national unity mainly by", "showing what the peoples of a country have achieved together", "praising one ethnic group", "hiding past conflicts", "teaching only foreign events", "Shared memory builds a sense of belonging."],
          ["H", "A historian treats a legend about the founding of a town as", "a clue to be examined against other evidence", "a proven fact", "a worthless lie", "a religious command", "Legends may contain useful information."],
          ["H", "Studying History trains critical thinking because the student learns to", "weigh evidence before accepting a claim", "memorise without questioning", "ignore sources", "believe every story", "Sources must be tested for reliability."],
        ],
      },
      {
        week: 2,
        title: "Sources of History",
        subtopics: ["Primary and secondary sources", "Oral sources", "Written sources", "Archaeological and other sources"],
        objectives: ["Distinguish primary from secondary sources", "Describe oral sources and their limitations", "Describe written sources and their limitations", "Describe archaeological and other sources"],
        lesson: {
          title: "How Do We Know about the Past?",
          summary: "Identify the sources from which historians obtain evidence.",
          minutes: 40,
          notes: `## What is a source?
A **source** is anything that gives **information about the past**.

## Primary and secondary sources
- **Primary sources** come **directly from the time** being studied, or from people who took part: eyewitness accounts, diaries, letters, treaties, photographs, tools, buildings.
- **Secondary sources** are produced **later**, using primary sources: textbooks, biographies, encyclopaedias, documentaries.

## 1. Oral sources
Information passed **by word of mouth**.
- **oral tradition** — handed down through generations: myths and legends of origin, king lists, praise poems (e.g. Yoruba *oriki*), songs, proverbs, festivals. Specialists such as palace historians (the **arokin** of Oyo) and praise-singers (**griots** in the western Sudan) preserve it.
- **oral evidence (oral history)** — accounts by **eyewitnesses** still alive.
**Advantages:** available where there was no writing; gives the people's own view; rich in culture.
**Limitations:** may be **forgotten, exaggerated or changed**; lacks exact **dates**; may be biased in favour of rulers; dies with the informant.

## 2. Written sources
- **archival materials** — government files, letters, treaties, court records, kept in the **National Archives** (Ibadan, Enugu, Kaduna)
- accounts of **Arab** writers and travellers (e.g. **al-Bakri**, **Ibn Battuta**) and **European** explorers, traders and missionaries
- local chronicles written in Arabic (e.g. the **Kano Chronicle**)
- books, newspapers, diaries, maps, inscriptions
**Advantages:** fairly permanent; give dates and details; easy to consult.
**Limitations:** may be **biased** or mistaken; foreign writers often misunderstood African societies; can be forged, lost or destroyed; useless to those who cannot read them.

## 3. Archaeological sources
**Archaeology** is the study of the past through the **material remains** people left behind, usually recovered by careful digging (**excavation**). Remains include **pottery, tools, weapons, bones, ornaments, buildings and burial sites**. Important Nigerian sites: **Nok, Igbo-Ukwu, Ile-Ife, Benin, Iwo Eleru, Daima**.
**Advantages:** tells about periods with no writing; objects can be **dated** scientifically (e.g. **radiocarbon dating**).
**Limitations:** expensive and slow; objects decay; remains cannot speak — they must be interpreted.

## 4. Other sources
- **linguistics** — the study of languages shows how peoples are related and have moved
- **ethnography** — the study of living customs
- **numismatics** — the study of coins
- **museums** and monuments — preserve and display objects (e.g. the National Museum, Lagos; Jos Museum)
- **photographs, films and audio recordings**

## Using sources together
No single source is complete. The historian **compares** sources and checks one against another to reach a balanced account.`,
          examples: `**Example 1.** Is a soldier's diary a primary or secondary source? *Answer:* **Primary**.

**Example 2.** Give one limitation of oral tradition. *Answer:* It may be **forgotten or exaggerated** and lacks exact dates.

**Example 3.** What is archaeology? *Answer:* The study of the past through **material remains**.`,
        },
        questions: [
          ["E", "Information passed down by word of mouth is", "oral tradition", "an archive", "an artefact", "a textbook", "It is handed down through generations."],
          ["E", "The careful digging up of remains by archaeologists is called", "excavation", "navigation", "translation", "cultivation", "Objects are recovered and recorded."],
          ["E", "Government files and old letters are kept in", "archives", "markets", "shrines", "farms", "Nigeria has National Archives in Ibadan, Enugu and Kaduna."],
          ["M", "A history textbook is an example of a", "secondary source", "primary source", "oral source", "archaeological source", "It is written later from other sources."],
          ["M", "The study of the past through material remains is", "archaeology", "linguistics", "numismatics", "geography", "It often involves excavation."],
          ["M", "A major weakness of oral tradition is that it", "lacks exact dates", "is too expensive", "needs electricity", "is written in Arabic", "It can also be exaggerated."],
          ["M", "The study of coins as a source of history is", "numismatics", "ethnography", "cartography", "archaeology", "Coins show rulers and trade links."],
          ["H", "The scientific method commonly used to date organic remains from the past is", "radiocarbon dating", "oral interview", "map reading", "translation", "It measures the decay of carbon in once-living material."],
          ["H", "Written accounts of early European visitors must be used with care mainly because they", "often misunderstood or were biased against African societies", "were written on paper", "contain dates", "are kept in archives", "The writers had their own interests and prejudices."],
          ["H", "A historian compares several kinds of source in order to", "check one against another and reach a balanced account", "make the work longer", "avoid using evidence", "please the rulers", "No single source is complete."],
        ],
      },
      {
        week: 3,
        title: "Time and chronology in History",
        subtopics: ["Units of time", "BC and AD (BCE and CE)", "Timelines", "Dating events without written records"],
        objectives: ["Explain the units of historical time", "Use BC and AD correctly", "Draw and read a simple timeline", "Describe how events were dated in traditional societies"],
        lesson: {
          title: "Putting Events in Order",
          summary: "Explain how historians measure time and arrange events.",
          minutes: 40,
          notes: `## Chronology
**Chronology** is the arrangement of events **in the order in which they happened**. Without it, history would be a confusing heap of facts.

## Units of time
- **decade** — 10 years
- **generation** — about 25–30 years
- **century** — 100 years
- **millennium** — 1,000 years
- **era / age / period** — a long stretch of time with common features (e.g. the Stone Age, the colonial period)

### Naming centuries
The **1st century** AD covers the years 1–100; the **19th century** covers **1801–1900**; the **20th century**, 1901–2000; the **21st century** began in 2001.
*Rule of thumb:* add one to the first two digits of the year. 1472 is in the **15th** century; 1914 is in the **20th**.

## BC and AD
The calendar most widely used counts years from the traditional date of the birth of **Jesus Christ**.
- **BC** — "**Before Christ**": years counted **backwards**. 500 BC is **earlier** than 200 BC.
- **AD** — *Anno Domini*, "in the year of the Lord": years counted **forwards**. AD 900 is earlier than AD 1500.
Many writers now use **BCE** (Before the Common Era) and **CE** (Common Era) for the same years.
There is **no year 0**: 1 BC is followed by AD 1.

### Calculating intervals
- both AD: **subtract** — from 1861 to 1914 is 53 years
- both BC: **subtract** — from 500 BC to 200 BC is 300 years
- one BC and one AD: **add** — from 500 BC to AD 200 is about 700 years

Muslims use the **Hijri** calendar (AH), counted from AD 622.

## Timelines
A **timeline** is a line marked with dates and events in order. To draw one:
1. choose the start and end dates
2. choose a **scale** (e.g. 1 cm = 10 years)
3. mark the dates evenly
4. write each event at its date
Example — some Nigerian dates: **1861** Lagos becomes a British colony · **1914** amalgamation · **1960** independence · **1963** republic · **1999** return to civilian rule.

## Dating in traditional societies
Before written calendars, people reckoned time by:
- **reigns of kings** ("in the time of Oba …") and **king lists**
- **memorable events**: famines, wars, eclipses, epidemics
- **age-grades** and **generations**
- **seasons**, farming cycles, **market days** and festivals
- phases of the **moon**

## Why chronology matters
it shows **cause and effect** (a cause must come before its result); helps compare events in different places; prevents **anachronism** — placing something in the wrong period.`,
          examples: `**Example 1.** In which century is the year 1897? *Answer:* The **19th century**.

**Example 2.** Which is earlier: 900 BC or 300 BC? *Answer:* **900 BC**.

**Example 3.** How many years from 500 BC to AD 200? *Answer:* About **700 years**.`,
        },
        questions: [
          ["E", "A period of one hundred years is a", "century", "decade", "millennium", "generation", "A decade is ten years."],
          ["E", "A period of ten years is called a", "decade", "century", "era", "millennium", "Ten decades make a century."],
          ["E", "BC stands for", "Before Christ", "British Colony", "Before Century", "Benin City", "Years are counted backwards."],
          ["M", "The year 1914 falls in the", "20th century", "19th century", "18th century", "21st century", "The 20th century ran from 1901 to 2000."],
          ["M", "Which of these dates is the earliest?", "900 BC", "500 BC", "AD 100", "AD 900", "BC years with larger numbers are earlier."],
          ["M", "The arrangement of events in the order in which they occurred is", "chronology", "archaeology", "geography", "biography", "It shows what came first."],
          ["M", "A period of one thousand years is a", "millennium", "century", "generation", "decade", "It equals ten centuries."],
          ["H", "The number of years between 300 BC and AD 500 is about", "800", "200", "500", "300", "Add the two figures when one is BC and one is AD."],
          ["H", "The year 1472, when the Portuguese reached the Nigerian coast, is in the", "15th century", "14th century", "16th century", "13th century", "Add one to the first two digits."],
          ["H", "Placing an event or object in the wrong historical period is called", "anachronism", "chronology", "tradition", "excavation", "Good chronology prevents it."],
        ],
      },
      {
        week: 4,
        title: "The land and peoples of Nigeria",
        subtopics: ["Location and physical features", "Vegetation zones and how they shaped life", "Major ethnic groups", "Contacts among Nigerian peoples"],
        objectives: ["Describe the location and main physical features of Nigeria", "Explain how the environment influenced the way people lived", "Identify major ethnic groups and where they live", "Describe the links that existed among Nigerian peoples"],
        lesson: {
          title: "Geography behind the History",
          summary: "Describe the Nigerian environment and its peoples as the setting of Nigerian history.",
          minutes: 40,
          notes: `## Location
Nigeria lies in **West Africa**, on the **Gulf of Guinea**. Its neighbours are **Benin Republic** (west), **Niger** (north), **Chad** (north-east) and **Cameroon** (east); the **Atlantic Ocean** lies to the south.

## Physical features
- the **River Niger** and the **River Benue**, which meet at **Lokoja** and flow to the sea through the **Niger Delta**
- **Lake Chad** in the north-east
- highlands: the **Jos Plateau**, the **Adamawa** and **Mandara** mountains, the **Obudu** plateau, the Yoruba hills
- the **coastal lagoons and creeks**
Rivers served as **highways** for trade and migration; hills gave **refuge** in time of war.

## Vegetation zones and ways of life
| Zone | Features | How it shaped life |
|---|---|---|
| **mangrove swamp** (coast, delta) | creeks, salt water | **fishing, salt-making, canoe trade**; city-states |
| **rain forest** (south) | heavy rain, thick forest, tsetse fly | **root crops** (yam, cocoyam), **oil palm, kola**; few horses and cattle; compact towns and villages |
| **savanna** (middle belt and north) | grassland, open country | **grains** (millet, guinea corn), **cattle**, **horses** — hence cavalry and large states; easy movement |
| **Sahel** (far north) | dry, near the desert | herding; link with the **trans-Saharan trade** |
Because each zone produced different goods, **trade** grew between them: salt and fish from the coast; kola and palm oil from the forest; cattle, grain, cloth and leather from the north.

## Peoples
Nigeria has **over 250 ethnic groups** and several hundred languages. Among them:
- **north**: Hausa, Fulani, Kanuri, Nupe, Tiv, Jukun, Gbagyi, Igala, Idoma, Birom
- **south-west**: Yoruba
- **mid-west**: Edo (Bini), Urhobo, Itsekiri, Esan
- **south-east**: Igbo
- **south-south**: Ijaw, Efik, Ibibio, Ogoni
The three largest are the **Hausa-Fulani, Yoruba and Igbo**.

## Contacts among Nigerian peoples before colonial rule
The peoples were **not isolated**. They were linked by:
- **trade** — long-distance routes and markets (Kano, Onitsha, Badagry)
- **migration** and settlement
- **inter-marriage**
- **war and diplomacy** — alliances, tribute
- **religion** — Islam, shared deities and oracles
- **shared crafts and ideas** — bronze casting from Ife to Benin; traditions linking Benin's dynasty with Ife; Nupe and Yoruba ties
- common words in different languages
These contacts show that Nigerians have a long history of **interdependence**.`,
          examples: `**Example 1.** Where do the Niger and Benue meet? *Answer:* At **Lokoja**.

**Example 2.** Why were horses common in the north but rare in the forest? *Answer:* The forest had the **tsetse fly**; the open **savanna** suited horses.

**Example 3.** Give two ways Nigerian peoples were linked before colonial rule. *Answer:* **Trade** and **inter-marriage**.`,
        },
        questions: [
          ["E", "The Rivers Niger and Benue meet at", "Lokoja", "Onitsha", "Jebba", "Yola", "The town stands at the confluence."],
          ["E", "The country that borders Nigeria to the west is", "Benin Republic", "Cameroon", "Chad", "Ghana", "Cameroon lies to the east."],
          ["E", "The Yoruba live mainly in the", "south-west", "north-east", "south-east", "north-west", "Their neighbours include the Edo and Nupe."],
          ["M", "The vegetation zone that favoured the keeping of horses and cattle was the", "savanna", "rain forest", "mangrove swamp", "delta", "It is open grassland free of dense tsetse."],
          ["M", "The main occupations of peoples of the mangrove swamp zone were", "fishing and salt-making", "cattle rearing", "growing millet", "camel trading", "They traded by canoe."],
          ["M", "Nigeria has more than", "250 ethnic groups", "20 ethnic groups", "50 ethnic groups", "1,000 ethnic groups", "The three largest are Hausa-Fulani, Yoruba and Igbo."],
          ["M", "The lake in the north-east of Nigeria is", "Lake Chad", "Lake Victoria", "Lake Volta", "Kainji Lake", "The Kanuri live near it."],
          ["H", "Trade grew among Nigerian peoples before colonial rule mainly because", "different vegetation zones produced different goods", "all groups spoke one language", "there was one government", "Europeans forced it", "Each zone needed what the others produced."],
          ["H", "Rivers were important in early Nigerian history chiefly as", "routes for trade and movement", "boundaries that stopped contact", "sources of gold", "places of exile", "Canoes linked distant communities."],
          ["H", "The evidence of shared crafts, trade and inter-marriage shows that pre-colonial Nigerian peoples were", "interdependent", "completely isolated", "always at war", "ruled by one king", "They had many links with one another."],
        ],
      },
      {
        week: 5,
        title: "Early man and the Stone Age in Nigeria",
        subtopics: ["The Stone Age and its stages", "Early Stone Age sites and tools", "The Late Stone Age and farming", "Evidence from Iwo Eleru, Dufuna and other sites"],
        objectives: ["Explain the Stone Age and its stages", "Describe the tools and life of early people", "Explain the change from hunting to farming", "Identify important early sites in Nigeria"],
        lesson: {
          title: "The First Nigerians",
          summary: "Describe the life of early people in Nigeria and the evidence for it.",
          minutes: 40,
          notes: `## The Stone Age
The earliest period of human history is called the **Stone Age** because people made their tools mainly from **stone** (also wood and bone). It is divided into three stages.

### 1. Early Stone Age
- tools: large, roughly chipped **hand-axes**, choppers and cleavers
- people were **hunters and gatherers** — they hunted animals, fished and collected fruits, roots and nuts
- they moved from place to place (**nomadic**) and lived in the open or in **caves and rock shelters**
- they learned to use **fire** for warmth, cooking and protection
- sites in Nigeria: tools found on the **Jos Plateau** and at **Ugwuele** (near Uturu, Abia State), a large stone-tool workshop

### 2. Middle Stone Age
- smaller, better-shaped tools; **spear points** attached to wooden shafts
- more skilful hunting in groups

### 3. Late Stone Age
- very small, sharp stone tools called **microliths**, fixed into handles to make arrows, knives and sickles
- the **bow and arrow**; **ground (polished) stone axes**; **pottery**
- later, the beginning of **farming** and the **keeping of animals** — the change sometimes called the **Neolithic Revolution**

## From hunting to farming
When people began to **plant crops** (yam, oil palm, millet, guinea corn) and **keep animals**, great changes followed:
- they **settled** in one place — villages grew
- food became more **regular**; population **increased**
- people had time for **crafts**: pottery, weaving, carving
- **specialisation** and **trade** began
- leaders and rules were needed — the beginning of **government**

## Important sites
- **Iwo Eleru** (near Akure, Ondo State): a rock shelter where a **human skeleton** about **11,000 years old** (around 9000 BC) was excavated by **Thurstan Shaw** in 1965 — the **oldest human remains** so far found in Nigeria, with Late Stone Age tools
- **Dufuna** (Yobe State): a **dug-out canoe** about **8,000 years old**, found in 1987 — the oldest boat known in Africa, showing early skill in water transport
- **Rop** rock shelter (Jos Plateau) and **Mejiro** cave (near Old Oyo): Late Stone Age tools
- **Daima** (near Lake Chad, Borno): a settlement **mound** occupied for many centuries, showing the change from stone and bone tools to iron
- **Birnin Kudu** (Jigawa): **rock paintings** of cattle
- **Afikpo** rock shelters: pottery and stone tools

## What the evidence shows
People have lived in Nigeria for **many thousands of years**; they adapted to different environments; and they slowly developed the skills on which later civilisations were built.`,
          examples: `**Example 1.** Why is the period called the Stone Age? *Answer:* Tools were made mainly of **stone**.

**Example 2.** What was found at Iwo Eleru? *Answer:* The **oldest human skeleton** known in Nigeria, about 11,000 years old.

**Example 3.** Give two results of the change to farming. *Answer:* **Settled villages** and **population growth**.`,
        },
        questions: [
          ["E", "Early people are said to have lived in the Stone Age because they", "made tools mainly of stone", "lived on stones", "worshipped stones", "built stone cities", "Wood and bone were also used."],
          ["E", "The oldest human skeleton found in Nigeria was discovered at", "Iwo Eleru", "Igbo-Ukwu", "Nok", "Benin", "It is about 11,000 years old."],
          ["E", "Early Stone Age people obtained their food by", "hunting and gathering", "trading with Europeans", "irrigation farming", "mining", "They moved from place to place."],
          ["M", "The very small stone tools of the Late Stone Age are called", "microliths", "hand-axes", "cleavers", "terracottas", "They were fixed into handles."],
          ["M", "The ancient canoe about 8,000 years old was found at", "Dufuna", "Daima", "Rop", "Ugwuele", "It is in Yobe State."],
          ["M", "The archaeologist who excavated Iwo Eleru was", "Thurstan Shaw", "Bernard Fagg", "Leo Frobenius", "Frederick Lugard", "He also excavated Igbo-Ukwu."],
          ["M", "Rock paintings of cattle are found at", "Birnin Kudu", "Iwo Eleru", "Dufuna", "Mejiro", "They are in Jigawa State."],
          ["H", "The most important result of the change from hunting to farming was that people", "settled in permanent villages", "stopped using fire", "gave up making tools", "moved more often", "Regular food made settlement possible."],
          ["H", "The Dufuna canoe is significant because it shows that early Nigerians", "had developed water transport thousands of years ago", "traded with Europe", "used iron tools", "built stone houses", "It is the oldest boat known in Africa."],
          ["H", "The settlement mound at Daima is valuable to historians because it", "records a long sequence from stone and bone tools to iron", "contains written records", "was built by the Portuguese", "is the site of a battle", "It was occupied for many centuries."],
        ],
      },
      {
        week: 6,
        title: "Traditions of origin of Nigerian peoples",
        subtopics: ["The value of traditions of origin", "Yoruba and Benin traditions", "Hausa and Kanuri traditions", "Igbo and other traditions"],
        objectives: ["Explain what traditions of origin are and how historians use them", "Narrate the Yoruba and Benin traditions of origin", "Narrate the Hausa and Kanuri traditions of origin", "Narrate the Igbo and other traditions of origin"],
        lesson: {
          title: "Where Did We Come From?",
          summary: "Narrate the traditions of origin of some Nigerian peoples.",
          minutes: 40,
          notes: `## Traditions of origin
Almost every Nigerian people has a story explaining **how it began**. These **traditions of origin** are of two kinds:
- **creation** stories — the people have always lived there, or came down from the sky
- **migration** stories — the founders came from elsewhere
Historians do not accept them word for word, but study them for clues about early movements, relationships between peoples and the rise of kingship.

## The Yoruba
- **creation version**: **Olodumare** (the Supreme Being) sent **Oduduwa** down from heaven on a chain with a handful of earth, a cockerel and a palm nut. The cockerel spread the earth upon the waters, and dry land appeared at **Ile-Ife** — regarded as the **cradle** of the Yoruba.
- **migration version**: Oduduwa came from the **east** and settled at Ile-Ife.
His descendants are said to have founded the Yoruba kingdoms; **Oranmiyan** founded **Oyo**. The ruler of Ife is the **Ooni**.

## Benin
The earliest rulers of the Edo were the **Ogiso** ("kings of the sky"). After a period of trouble, the Benin chiefs sent to Ife for a prince. **Oranmiyan** came but later returned; his son by a Benin woman became **Eweka I**, the first **Oba** of the present dynasty.

## The Hausa
The **Bayajidda** legend: a prince from **Baghdad** came to **Daura**, where a great **snake** in the **Kusugu well** prevented people from drawing water except on Fridays. He **killed the snake** and married the queen, **Daurama**. Their descendants founded the seven true Hausa states — the **Hausa Bakwai**: **Daura, Kano, Katsina, Zazzau (Zaria), Gobir, Rano and Biram**. Seven other states that adopted Hausa ways are the **Banza Bakwai**: **Kebbi, Zamfara, Nupe, Gwari, Yauri, Kwararafa and Ilorin (Yoruba)**.

## The Kanuri
Tradition links the ruling **Sayfawa** dynasty of Kanem with **Sayf ibn Dhi Yazan**, a hero from Arabia.

## The Igbo
- many Igbo communities say they have **always lived** where they are — and archaeology confirms very long settlement
- the **Nri** tradition: **Eri**, sent down from heaven by **Chukwu**, settled in the Anambra valley; his son **Nri** founded a sacred kingship whose priests travelled widely cleansing abominations and conferring titles

## Others
- **Nupe**: founded by **Tsoede (Edegi)**, who came from Idah
- **Igala**: kingship of the **Attah** at **Idah**, with links to Benin and Jukun
- **Jukun**: the kingdom of **Kwararafa**
- **Efik, Ijaw, Itsekiri, Tiv** and others have migration traditions

## What the traditions suggest
- peoples moved and mixed over a long time
- many dynasties claimed a prestigious foreign founder
- neighbouring states (Ife–Benin–Oyo; Idah–Nupe) regarded themselves as **related**`,
          examples: `**Example 1.** Which town is the cradle of the Yoruba? *Answer:* **Ile-Ife**.

**Example 2.** What did Bayajidda do at Daura? *Answer:* He **killed the snake** in the well and married the queen.

**Example 3.** Who were the earliest rulers of Benin? *Answer:* The **Ogiso**.`,
        },
        questions: [
          ["E", "The Yoruba regard their cradle as", "Ile-Ife", "Oyo", "Ibadan", "Lagos", "Oduduwa is said to have settled there."],
          ["E", "According to legend, Bayajidda killed a snake at", "Daura", "Kano", "Zaria", "Katsina", "It lived in the Kusugu well."],
          ["E", "The earliest rulers of Benin were called the", "Ogiso", "Ooni", "Alaafin", "Attah", "The name means kings of the sky."],
          ["M", "The legendary founder of the Yoruba people is", "Oduduwa", "Oranmiyan", "Sango", "Bayajidda", "He is linked with Ile-Ife."],
          ["M", "Which of these is one of the Hausa Bakwai?", "Rano", "Kebbi", "Zamfara", "Nupe", "The others named belong to the Banza Bakwai."],
          ["M", "The first Oba of the present Benin dynasty was", "Eweka I", "Ewuare", "Esigie", "Ovonramwen", "He was the son of Oranmiyan."],
          ["M", "The founder of the Nupe kingdom according to tradition was", "Tsoede", "Eri", "Sayf", "Oduduwa", "He is also called Edegi."],
          ["H", "The Nri tradition is associated with the", "Igbo", "Tiv", "Kanuri", "Efik", "Eri is said to have been sent down by Chukwu."],
          ["H", "Historians use traditions of origin mainly as", "clues to be compared with other evidence", "exact records of events", "works of fiction to ignore", "religious laws", "They hint at migrations and relationships."],
          ["H", "The tradition that Benin's dynasty came from Ife suggests that the two kingdoms", "had close early contacts", "were always enemies", "spoke the same language", "were founded by the Portuguese", "Neighbouring states saw themselves as related."],
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
        title: "The Nok culture",
        subtopics: ["Discovery and location", "Nok terracotta", "Iron working at Nok", "Importance of the Nok culture"],
        objectives: ["Describe the discovery and area of the Nok culture", "Describe the features of Nok terracotta", "Explain the evidence of iron working", "State the importance of the Nok culture"],
        lesson: {
          title: "Nigeria's Oldest Known Civilisation",
          summary: "Describe the Nok culture and its significance.",
          minutes: 40,
          notes: `## Discovery
The Nok culture is named after the village of **Nok** in southern **Kaduna State**, where the first objects were found in **1928** during **tin mining**. In 1943 a fine terracotta head was found at **Jemaa**; the archaeologist **Bernard Fagg** recognised that the finds belonged to one ancient culture and collected many more.

## Area and date
Nok objects have been found over a wide area of **central Nigeria** — parts of Kaduna, Plateau, Nasarawa, Benue and the Federal Capital Territory. The culture flourished from roughly **1000 BC to AD 300**, making it the **earliest known civilisation in Nigeria** and one of the oldest in West Africa.

## Nok terracotta
**Terracotta** means **baked clay**. Nok sculptures are figures of **human beings** and **animals**.
### Features
- **large heads** in proportion to the body
- eyes shaped like **triangles or half-circles**, with **pierced (hollow) pupils**
- pierced nostrils, ears and mouths
- **elaborate hairstyles**, beads, bracelets and anklets
- sizes from a few centimetres to nearly life-size
- hollow, coil-built and carefully fired
### What they tell us
- the people had **skilled artists** and probably specialists
- they wore **jewellery** and styled their hair, showing a rich social life
- some figures show **illness** or carry tools, hinting at beliefs and daily work
- the sculptures may have been used in **shrines** or for burial

## Iron working
At **Taruga** (near Abuja) archaeologists found **iron-smelting furnaces**, slag and iron objects dating to several centuries BC. The Nok people were among the **earliest iron-workers in West Africa**.
### Effects of iron
- stronger **hoes, axes and cutlasses** — more land cleared, more food
- better **weapons** for hunting and defence
- growth of population and settlement
They also used **stone tools**, including ground stone axes — a period of transition.

## Way of life
They were **farmers** (grains, cowpeas), kept animals, made **pottery** and lived in settled villages.

## Importance
1. it proves that Nigeria had an **advanced culture more than 2,000 years ago**
2. it is the **oldest sculptural tradition** in Africa south of the Sahara
3. it shows early mastery of **iron technology**
4. the style may have **influenced later art**, such as that of **Ife**
5. it is a source of **national pride** and attracts scholars and tourists

## Problems
Many Nok pieces have been **looted** and sold abroad illegally, destroying information about where and how they were buried.`,
          examples: `**Example 1.** What is terracotta? *Answer:* **Baked clay**.

**Example 2.** Where was evidence of Nok iron smelting found? *Answer:* **Taruga**.

**Example 3.** Give one feature of Nok sculpture. *Answer:* **Pierced pupils** in triangular or semi-circular eyes (or large heads).`,
        },
        questions: [
          ["E", "The Nok culture is named after a village in", "Kaduna State", "Anambra State", "Osun State", "Edo State", "The first finds were made there in 1928."],
          ["E", "Nok sculptures were made of", "terracotta", "bronze", "ivory", "wood", "Terracotta is baked clay."],
          ["E", "The first Nok objects were discovered during", "tin mining", "road building", "a war", "farming of cocoa", "It was in 1928."],
          ["M", "The archaeologist most associated with the study of Nok is", "Bernard Fagg", "Thurstan Shaw", "Leo Frobenius", "Graham Connah", "He recognised the finds as one culture."],
          ["M", "Evidence of iron smelting by the Nok people was found at", "Taruga", "Jemaa", "Daima", "Ife", "Furnaces and slag were excavated there."],
          ["M", "A typical feature of Nok figures is", "pierced pupils in the eyes", "small heads", "the use of gold", "written inscriptions", "The eyes are often triangular."],
          ["M", "The Nok culture flourished mainly in", "central Nigeria", "the Niger Delta", "the far north-east", "the Lagos lagoon", "Finds cover Kaduna, Plateau and nearby areas."],
          ["H", "The knowledge of iron working helped Nok society chiefly by", "providing better tools for farming and clearing land", "ending the need for pottery", "introducing writing", "starting the slave trade", "Food production and population grew."],
          ["H", "Nok is important in Nigerian history mainly because it", "shows that an advanced culture existed over two thousand years ago", "was founded by Europeans", "was the first Muslim state", "began the colonial period", "It is the earliest known civilisation in Nigeria."],
          ["H", "The illegal digging and sale of Nok objects harms the study of history because", "the information about where and how they lay is lost", "terracotta cannot travel", "foreign museums refuse them", "they are made again", "Context is essential for dating and understanding."],
        ],
      },
      {
        week: 2,
        title: "Igbo-Ukwu",
        subtopics: ["Discovery and excavation", "The three sites", "The objects and their craftsmanship", "What Igbo-Ukwu tells us"],
        objectives: ["Narrate the discovery and excavation of Igbo-Ukwu", "Describe the three sites", "Describe the objects found and how they were made", "Explain what the finds reveal about the society"],
        lesson: {
          title: "Bronzes of the Ninth Century",
          summary: "Describe the Igbo-Ukwu finds and their significance.",
          minutes: 40,
          notes: `## Discovery
**Igbo-Ukwu** is a town in **Anambra State**. In **1938** a man named **Isaiah Anozie**, digging a cistern in his compound, came upon bronze objects. In **1959–60** (and again in 1964) the archaeologist **Thurstan Shaw** carried out scientific excavations.

## The three sites
Named after the owners of the compounds:
1. **Igbo Isaiah** — a **storehouse or shrine** containing ritual vessels and ornaments
2. **Igbo Richard** — the **burial chamber of an important person**, seated on a stool, dressed in beaded regalia, with a crown, a breastplate, a fan-holder, a staff and ivory tusks — attendants were buried above
3. **Igbo Jonah** — a **disposal pit** with pottery, bones and bronze objects

## Date
Radiocarbon dating placed the finds in about the **ninth century AD** — several centuries **earlier than Ife and Benin** bronzes.

## The objects
- **bronze** vessels, bowls, pendants, staff heads, a **roped pot** on a stand, shell-shaped vessels, ornaments decorated with insects, snakes and animals
- **copper** ornaments worked by hammering
- more than **150,000 glass and stone beads**
- decorated **pottery**
- **ivory** tusks; pieces of textile

## Craftsmanship
- the bronzes were made by the **lost-wax (*cire perdue*) method**:
  1. a model is made in **wax** over a clay core
  2. it is covered with clay, leaving a channel
  3. the mould is heated — the **wax melts and runs out**
  4. molten metal is poured into the space
  5. when cool, the clay is broken off
- the work is extremely **delicate and detailed**, with fine surface decoration — among the most skilful castings known anywhere
- the style is **unique**, different from Ife and Benin: it developed locally

## What Igbo-Ukwu tells us
1. **advanced metal technology** existed in south-eastern Nigeria over a thousand years ago
2. there was a **rich, organised society** with specialists
3. the burial suggests a person of **great religious and political importance** — probably linked with the sacred kingship of **Nri** (the **Eze Nri**)
4. **long-distance trade**: the many beads (some from as far as India and the Mediterranean) and possibly the copper came through networks reaching the north and the Sahara
5. belief in **life after death** — the dead were buried with goods and attendants
6. it corrects the idea that the Igbo had no early centralised institutions

## Where the objects are
In the **National Museum, Lagos**, and other museums.`,
          examples: `**Example 1.** Who first found the Igbo-Ukwu objects? *Answer:* **Isaiah Anozie**, in 1938.

**Example 2.** Which site was a burial chamber? *Answer:* **Igbo Richard**.

**Example 3.** By what method were the bronzes cast? *Answer:* The **lost-wax** method.`,
        },
        questions: [
          ["E", "Igbo-Ukwu is located in", "Anambra State", "Kaduna State", "Osun State", "Borno State", "It is in south-eastern Nigeria."],
          ["E", "The Igbo-Ukwu objects were first found in 1938 by", "Isaiah Anozie", "Thurstan Shaw", "Bernard Fagg", "Kenneth Dike", "He was digging a cistern."],
          ["E", "The Igbo-Ukwu finds are best known for objects made of", "bronze", "terracotta only", "gold", "iron only", "They were finely cast."],
          ["M", "The Igbo-Ukwu site that contained the burial of an important person is", "Igbo Richard", "Igbo Isaiah", "Igbo Jonah", "Igbo Eze", "He was buried seated with regalia."],
          ["M", "The Igbo-Ukwu finds have been dated to about the", "ninth century AD", "fifteenth century AD", "first century BC", "nineteenth century AD", "They are older than the Ife and Benin bronzes."],
          ["M", "The archaeologist who excavated Igbo-Ukwu was", "Thurstan Shaw", "Leo Frobenius", "Bernard Fagg", "Mungo Park", "He worked there in 1959–60."],
          ["M", "The casting method in which a wax model is melted out of a clay mould is the", "lost-wax method", "coil method", "hammering method", "weaving method", "It is also called cire perdue."],
          ["H", "The thousands of glass beads found at Igbo-Ukwu are evidence of", "long-distance trade", "local glass factories only", "European colonisation", "the Atlantic slave trade", "Some came from very distant lands."],
          ["H", "The burial at Igbo Richard suggests that the society had", "a person of great religious and political importance", "no leaders at all", "a Muslim ruler", "a colonial governor", "It is linked with the Nri sacred kingship."],
          ["H", "Igbo-Ukwu art is described as unique because", "its style differs from that of Ife and Benin and developed locally", "it copied Portuguese models", "it used no metal", "it was made in Egypt", "It represents an independent tradition."],
        ],
      },
      {
        week: 3,
        title: "Ife",
        subtopics: ["Ife as a spiritual and cultural centre", "Ife art in bronze and terracotta", "Discovery of the Ife works", "Importance of Ife"],
        objectives: ["Explain the position of Ife among the Yoruba", "Describe the features of Ife art", "Narrate how Ife works became known", "State the importance of Ife in Nigerian history"],
        lesson: {
          title: "The Sacred City",
          summary: "Describe Ife and its art.",
          minutes: 40,
          notes: `## Ife among the Yoruba
**Ile-Ife**, in present-day **Osun State**, is regarded by the Yoruba as the **place of creation** and the **source of kingship**. Its ruler, the **Ooni**, is a spiritual father to other Yoruba rulers, whose crowns are traditionally traced to Ife. Many deities (*orisa*) have shrines there.

## The city
Archaeology shows that Ife was a large town by about the **eleventh century AD** and flourished especially between the **twelfth and fifteenth centuries**. Features include:
- **potsherd pavements** — floors made of broken pottery set on edge in patterns
- city **walls**
- shrines and groves
- the **Opa Oranmiyan** — a tall granite staff
- a **glass-bead industry**

## Ife art
Ife is famous for sculptures in **terracotta**, **copper** and **brass/bronze** (alloys of copper).
### Features
- **naturalism**: the heads look like real, individual people — calm faces, correct proportions
- many faces have fine **parallel lines** (striations)
- some heads have **holes** along the hairline or round the mouth, perhaps for attaching a crown, beard or veil
- life-size or nearly so
- full figures of rulers with beads and regalia
- made by the **lost-wax method**, with thin, even casting
### Purpose
Probably connected with **royal funerals**, the display of regalia, and **shrines** of ancestors and deities.

## How the works became known
- in **1910** the German traveller **Leo Frobenius** saw a brass head (the **Ori Olokun**) and terracottas; he wrongly supposed they were the work of Greeks from a lost "Atlantis" — he could not believe Africans had made them
- in **1938** a group of brass heads was found during building work at **Wunmonije Compound** near the palace
- later excavations (e.g. at **Ita Yemoo**) by **Frank Willett** and others proved they were made **locally** by Yoruba artists

## Links
- tradition says the art of brass casting was taken from **Ife to Benin** by a caster named **Iguegha**
- the terracotta tradition may be related to the much older **Nok** culture

## Importance
1. the **spiritual home** of the Yoruba and origin of their dynasties
2. its art is among the **finest in the world**, proving high skill and organisation
3. it shows a wealthy court supported by farming, craft and trade
4. it influenced **Benin** and other kingdoms
5. it disproves old claims that Africans had no history or art before Europeans came

Many Ife works are in the **National Museum, Ile-Ife** and Lagos; some are abroad.`,
          examples: `**Example 1.** What is the title of the ruler of Ife? *Answer:* The **Ooni**.

**Example 2.** What is the chief feature of Ife art? *Answer:* **Naturalism** — life-like heads.

**Example 3.** Where were brass heads found in 1938? *Answer:* **Wunmonije Compound**.`,
        },
        questions: [
          ["E", "The ruler of Ile-Ife bears the title", "Ooni", "Alaafin", "Oba of Benin", "Obi", "He is a spiritual father of Yoruba rulers."],
          ["E", "Ile-Ife is in present-day", "Osun State", "Edo State", "Kano State", "Anambra State", "It is in south-western Nigeria."],
          ["E", "Ife art is especially noted for being", "naturalistic", "abstract", "written", "painted on rocks", "The heads look like real people."],
          ["M", "The German who drew attention to Ife art in 1910 was", "Leo Frobenius", "Heinrich Barth", "Bernard Fagg", "Thurstan Shaw", "He wrongly thought Greeks had made it."],
          ["M", "The floors of broken pottery set in patterns found at Ife are called", "potsherd pavements", "terracotta walls", "bronze plaques", "moats", "They are a feature of the old city."],
          ["M", "A group of brass heads was found in 1938 at", "Wunmonije Compound", "Igbo Isaiah", "Taruga", "Ughoton", "It is near the Ooni's palace."],
          ["M", "According to tradition, brass casting was taken from Ife to", "Benin", "Kano", "Nok", "Igbo-Ukwu", "The caster was called Iguegha."],
          ["H", "The holes along the hairline of some Ife heads were probably meant for", "attaching crowns or veils", "pouring molten metal", "hanging the heads on walls only", "letting air in", "They are linked with royal display."],
          ["H", "Frobenius's claim that Greeks made the Ife heads was mistaken because", "excavations proved they were made locally by Yoruba artists", "Greeks never used metal", "the heads are made of wood", "Ife was founded in 1910", "It reflected prejudice, not evidence."],
          ["H", "Ife's importance in the history of Yoruba kingdoms lies chiefly in its role as", "the source from which their dynasties claim origin", "the largest army", "the main seaport", "the colonial capital", "Crowns are traditionally traced to it."],
        ],
      },
      {
        week: 4,
        title: "Benin: the city and its art",
        subtopics: ["Growth of the city", "Benin art", "The guilds", "Benin and the outside world"],
        objectives: ["Describe the growth and layout of Benin City", "Describe the forms and features of Benin art", "Explain the guild system", "Describe Benin's early contact with Europeans"],
        lesson: {
          title: "The City of the Oba",
          summary: "Describe the city of Benin and its famous art.",
          minutes: 40,
          notes: `## The city
**Benin City**, in present-day **Edo State**, was the capital of the **Benin Kingdom** of the **Edo** people. Under the warrior-king **Oba Ewuare the Great** (mid-fifteenth century) the city was rebuilt:
- broad, straight **streets**
- a great **palace** with courtyards
- inner **walls and a deep moat**; the earthworks around Benin and its villages (the **Benin moats**, *Iya*) run for thousands of kilometres — among the largest earthworks in the world
- quarters for different **craft guilds**
European visitors in the sixteenth and seventeenth centuries described it as large, orderly and well governed.

## Benin art
Benin is world-famous for works in **brass (called "bronze")**, **ivory**, **wood**, **terracotta** and **coral**.
### Forms
- **commemorative heads** of past Obas and Queen Mothers, placed on ancestral altars
- rectangular **plaques** that decorated the pillars of the palace, showing the Oba, chiefs, warriors, musicians, animals and **Portuguese** soldiers
- figures of **leopards**, cocks and horsemen
- carved **ivory tusks** and masks — such as the ivory pendant mask of **Queen Idia**, mother of Oba Esigie (the emblem of **FESTAC '77**)
### Features
- made by the **lost-wax method**
- more **stylised** than Ife: bold, heavy forms, high collars of coral beads
- **court art**: made for the Oba and recording the history of the kingdom

## The guilds
Craftsmen were organised into **guilds**, each living in its own street and serving the palace:
- **Igun Eronmwon** — brass casters
- **Igbesanmwan** — ivory and wood carvers
- weavers, leather-workers, blacksmiths, drummers and others
Membership was **hereditary**; the brass casters could work only with the **Oba's permission**. Tradition says casting was learned from **Ife** through **Iguegha** in the reign of **Oba Oguola**.

## Benin and the outside world
- the **Portuguese** reached Benin in about **1485** (João Afonso d'Aveiro); trade was carried on through the port of **Ughoton (Gwatto)**
- Benin sold **pepper, ivory, cloth and beads**, later slaves, and bought **brass bracelets (manillas)**, coral, cloth and guns
- ambassadors were exchanged; some Benin people learned Portuguese
- the plentiful imported brass led to an increase in casting

## The events of 1897
A British **punitive expedition** captured and burned Benin City; **Oba Ovonramwen** was exiled to **Calabar**; thousands of artworks were taken to Europe, where many remain in museums. Nigeria has long asked for their **return**, and some have been returned in recent years.

## Importance
a record of the kingdom's history; evidence of advanced technology and organisation; a source of national pride.`,
          examples: `**Example 1.** Which Oba rebuilt Benin City with walls and wide streets? *Answer:* **Ewuare the Great**.

**Example 2.** What was the guild of brass casters called? *Answer:* **Igun Eronmwon**.

**Example 3.** Whose ivory mask was the emblem of FESTAC '77? *Answer:* **Queen Idia**.`,
        },
        questions: [
          ["E", "Benin City is in present-day", "Edo State", "Ondo State", "Delta State", "Kogi State", "It was the capital of the Edo kingdom."],
          ["E", "The first Europeans to visit Benin were the", "Portuguese", "British", "Dutch", "French", "They came in about 1485."],
          ["E", "The Benin ruler exiled by the British in 1897 was", "Ovonramwen", "Ewuare", "Esigie", "Eweka I", "He was sent to Calabar."],
          ["M", "The Oba credited with rebuilding Benin City in the fifteenth century was", "Ewuare", "Oguola", "Ozolua", "Akenzua", "He is called the Great."],
          ["M", "The guild of brass casters in Benin was the", "Igun Eronmwon", "Igbesanmwan", "Uzama", "Eghaevbo", "They worked only with the Oba's permission."],
          ["M", "The rectangular brass works that decorated the palace pillars are called", "plaques", "manillas", "potsherds", "microliths", "They record scenes from court life."],
          ["M", "Benin's port for trade with the Portuguese was", "Ughoton", "Badagry", "Bonny", "Lokoja", "It is also called Gwatto."],
          ["H", "Benin art is described as court art because it", "was made for the Oba and recorded the kingdom's history", "was sold freely in markets", "was made by foreigners", "showed only animals", "The guilds served the palace."],
          ["H", "Compared with Ife heads, Benin brass heads are generally more", "stylised", "naturalistic", "ancient", "fragile", "They have bold, heavy forms."],
          ["H", "The presence of Portuguese figures on Benin plaques is evidence of", "early contact and trade with Europeans", "Portuguese rule over Benin", "the conversion of Benin to Islam", "the slave trade in the north", "The artists recorded what they saw."],
        ],
      },
      {
        week: 5,
        title: "Iron working and early technology",
        subtopics: ["The coming of iron", "How iron was smelted and worked", "Effects of iron technology", "Other early technologies"],
        objectives: ["Explain when and where iron working began in Nigeria", "Describe how iron was smelted and worked", "State the effects of iron on society", "Describe other early technologies"],
        lesson: {
          title: "The Age of Iron",
          summary: "Explain the development and effects of iron working and other crafts.",
          minutes: 40,
          notes: `## The coming of iron
After the Stone Age came the **Iron Age**. In Nigeria iron was worked by about the **middle of the first millennium BC**. Early centres include:
- **Taruga** and other **Nok** sites in central Nigeria
- the **Nsukka** area (Opi, Lejja) in the south-east, where very old smelting sites have been found
- **Daima** near Lake Chad
Unlike some parts of the world, West Africa seems to have moved from **stone directly to iron**, without a long "bronze age" first.

## How iron was made
1. **iron ore** (iron-bearing rock or laterite) was dug and broken up
2. **charcoal** was prepared by burning wood slowly
3. ore and charcoal were packed into a clay **furnace**
4. air was forced in through clay pipes (**tuyères**) using **bellows**, raising the temperature
5. the ore gave up a spongy mass of iron called a **bloom**; the waste is **slag**
6. the **blacksmith** heated the bloom and **hammered (forged)** it into tools
The process of extracting metal from ore is called **smelting**.

## The blacksmith
Blacksmiths were highly respected and sometimes feared: their work seemed mysterious and was surrounded by rituals. Among the Yoruba, **Ogun** is the deity of iron. Smiths often formed hereditary groups.

## Effects of iron technology
- **agriculture**: iron hoes, axes and cutlasses cleared forest and tilled soil faster — **more food**
- **population** grew and **settlements** expanded
- **weapons**: spears, arrowheads, swords — better hunting and stronger armies
- **state formation**: rulers who controlled iron and warriors built **kingdoms**
- **crafts and trade**: tools for carving, canoe-making and building; iron bars and hoes served as **currency** in some areas
- **specialisation**: miners, smelters, smiths

## Other early technologies
- **pottery** — for cooking, storage and ritual; mostly made by women, built by hand in coils and fired in the open
- **bronze and brass casting** — Igbo-Ukwu, Ife, Benin
- **weaving and dyeing** — cotton cloth on vertical and horizontal looms; indigo dye pits (e.g. **Kano**); **Akwete** and **aso-oke** cloth
- **leather work** — in the north; "Morocco leather" came largely from Hausaland
- **wood and ivory carving**
- **canoe building** — in the delta and along rivers
- **salt making** — from sea water, brine springs (**Uburu, Awe**) and plant ash
- **glass-bead making** — Ife; later **Bida**
- **building** — mud architecture, walls and moats

## Significance
Before any contact with Europe, Nigerian peoples had developed the technologies needed for farming, war, art and trade.`,
          examples: `**Example 1.** What is smelting? *Answer:* **Extracting metal from its ore** by heating.

**Example 2.** Give two effects of iron tools. *Answer:* **More food** from better farming; **stronger weapons and states**.

**Example 3.** Which Yoruba deity is associated with iron? *Answer:* **Ogun**.`,
        },
        questions: [
          ["E", "The craftsman who forges iron into tools is the", "blacksmith", "potter", "weaver", "carver", "He hammers heated iron into shape."],
          ["E", "The process of extracting iron from its ore is called", "smelting", "weaving", "carving", "dyeing", "It is done in a furnace."],
          ["E", "The fuel used in early iron furnaces was", "charcoal", "petrol", "coal gas", "palm oil", "It was made by burning wood slowly."],
          ["M", "The waste material left after smelting iron is", "slag", "bloom", "ore", "charcoal", "The useful product is the bloom."],
          ["M", "The Yoruba deity of iron is", "Ogun", "Sango", "Osun", "Obatala", "Blacksmiths and hunters honour him."],
          ["M", "Air was forced into the furnace by means of", "bellows", "fans of raffia only", "water wheels", "windmills", "They raised the temperature."],
          ["M", "Ancient iron-smelting sites in south-eastern Nigeria have been found in the area of", "Nsukka", "Badagry", "Sokoto", "Calabar", "Opi and Lejja are examples."],
          ["H", "Iron technology contributed to the rise of kingdoms mainly because it", "provided better farm tools and weapons", "replaced pottery", "ended trade", "introduced writing", "More food and stronger armies supported states."],
          ["H", "West Africa's metal history differs from that of some other regions in that it", "passed from stone to iron without a long bronze age", "never used iron", "used bronze for a thousand years first", "imported all its tools", "Iron working appears early and directly."],
          ["H", "The use of iron bars and hoes as currency in some areas shows that iron was", "highly valued and widely needed", "worthless", "forbidden to farmers", "used only by kings", "Useful goods often served as money."],
        ],
      },
      {
        week: 6,
        title: "Farming, crafts and trade in early Nigeria",
        subtopics: ["Farming and food crops", "Crafts and industries", "Markets and local trade", "Long-distance trade and currencies"],
        objectives: ["Describe early farming and the main crops", "Identify the crafts and industries of early Nigerian peoples", "Describe how markets and local trade worked", "Describe long-distance trade and the currencies used"],
        lesson: {
          title: "Making a Living",
          summary: "Describe the economy of Nigerian societies before 1800.",
          minutes: 40,
          notes: `## Farming
Farming was the **main occupation** of most Nigerian peoples.
- **forest zone**: **yam** (the "king of crops"), cocoyam, plantain, **oil palm**, **kola nut**, vegetables
- **savanna**: **guinea corn (sorghum), millet**, rice, beans, groundnut (later), **cotton**, shea
- **methods**: **shifting cultivation** and **bush fallowing** — land was farmed for some years and then left to regain fertility; tools were the hoe, cutlass and axe
- **labour** came from the family, age-grades and cooperative work groups
- **land** belonged to the community or lineage, not to individuals; the head allocated it
- **new crops** from the Americas after the fifteenth century — **maize, cassava, sweet potato, groundnut, tobacco** — came through the Portuguese
- **livestock**: goats, sheep and fowl in the south; **cattle**, horses, donkeys and camels in the north, with the **Fulani** as specialist herders

## Fishing and hunting
Fishing was the mainstay of the delta, the coast, Lake Chad and river peoples; **dried and smoked fish** were traded inland. Hunters supplied meat and guarded communities.

## Crafts and industries
- **iron working**: hoes, knives, weapons — Awka smiths travelled widely
- **cloth**: weaving and **dyeing** — Kano, Nupe, Yoruba, Akwete
- **leather**: sandals, bags, saddles — Kano, Sokoto
- **pottery**; **wood carving**; **calabash** decoration
- **brass and bronze casting**: Benin, Ife, Bida
- **bead making**: Ife, Bida
- **salt**: from the coast, and from **Bilma** and other northern sources
- **canoe building**, mat and basket making
Many crafts were organised in **families or guilds** and passed from parent to child.

## Markets and local trade
- markets were held **daily** in big towns and in **cycles** (every four, five or eight days) in rural areas, so that neighbouring villages did not clash
- **women** dominated local trade in foodstuffs
- markets were also centres of **news, justice and social life**; rulers kept the peace there and collected dues
- early exchange was by **barter** — goods for goods

## Long-distance trade
- **north–south**: kola, palm oil, salt and fish moved north; cattle, natron (potash), cloth, leather and horses moved south
- **trans-Saharan trade**: Kano, Katsina and Borno linked with North Africa
- **coastal trade** with Europeans from the fifteenth century
- professional traders: the **Hausa**, the **Aro**, **Nupe**, **Ijebu**, and **Wangara**
- goods were carried by **head porters, donkeys, camels and canoes**

## Currencies
Because barter is inconvenient, peoples adopted money: **cowrie shells** (the most widespread), **manillas** (brass bracelets) in the south-east and delta, **iron bars**, **copper rods**, strips of **cloth**, salt and **gold dust**.

## Importance of trade
spread of goods, ideas and religion; growth of towns; wealth for rulers through tolls; links between peoples.`,
          examples: `**Example 1.** What was the "king of crops" in the forest zone? *Answer:* **Yam**.

**Example 2.** Name two currencies used before colonial rule. *Answer:* **Cowries** and **manillas**.

**Example 3.** What is barter? *Answer:* **Exchanging goods for goods** without money.`,
        },
        questions: [
          ["E", "The main occupation of most early Nigerian peoples was", "farming", "mining", "banking", "sailing", "Most people grew their own food."],
          ["E", "The exchange of goods for goods without money is", "barter", "credit", "taxation", "tribute", "It came before the use of currency."],
          ["E", "The most widespread traditional currency in Nigeria was the", "cowrie shell", "gold coin", "paper note", "silver bar", "It was used across many regions."],
          ["M", "A crop introduced to Nigeria from the Americas through the Portuguese was", "cassava", "yam", "millet", "kola nut", "Maize also came this way."],
          ["M", "The system of farming a piece of land for some years and then leaving it to recover is", "bush fallowing", "irrigation", "plantation farming", "mixed ranching", "It restores the soil's fertility."],
          ["M", "The brass bracelets used as money in the south-east and the delta were", "manillas", "cowries", "tuyères", "microliths", "They came through European trade."],
          ["M", "Kola nuts were a major item of trade from the forest to", "the north", "the coast", "Europe", "the delta", "Cattle and natron came south in exchange."],
          ["H", "Rural markets were held in cycles of four, five or eight days so that", "neighbouring markets would not clash", "traders could avoid tax", "rulers could rest", "goods would spoil", "Traders could attend several in turn."],
          ["H", "In most early Nigerian societies, farmland was", "held by the community or lineage and allocated by its head", "bought and sold freely", "owned by the king alone", "owned by foreigners", "Individuals had rights of use."],
          ["H", "Long-distance trade promoted the growth of states because rulers", "gained wealth from tolls and protected the routes", "forbade markets", "abolished currency", "closed the roads", "Control of trade strengthened governments."],
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
        title: "The Kanem-Borno Empire",
        subtopics: ["Origin and growth", "Political organisation", "Great rulers", "Economy and decline"],
        objectives: ["Trace the origin and growth of Kanem-Borno", "Describe its political organisation", "Describe the achievements of its great rulers", "Explain its economy and decline"],
        lesson: {
          title: "A Thousand-Year Empire",
          summary: "Describe the rise, organisation and decline of Kanem-Borno.",
          minutes: 40,
          notes: `## Origin and growth
The empire grew around **Lake Chad**. It began as **Kanem**, to the north-east of the lake, founded by about the **ninth century AD** and ruled by the **Sayfawa** dynasty — one of the longest-ruling dynasties in world history. Its people became the **Kanuri**. The first capital was **Njimi**.
- in the late **eleventh century**, **Mai Umme Jilmi** accepted **Islam**
- **Mai Dunama Dibalemi** (thirteenth century) expanded Kanem northwards along the trade route to the Fezzan
- attacks by the **Bulala** forced the rulers to move west of the lake to **Borno** in the late fourteenth century
- **Mai Ali Ghaji** (about 1470) ended civil wars and built a new capital at **Ngazargamu**
- the empire reached its height under **Mai Idris Alooma** (about 1571–1603)

## Political organisation
- the ruler was the **Mai**, regarded as semi-sacred; he spoke from behind a screen
- a **council of twelve** principal officials advised him
- important women: the **Magira** (queen mother) and the **Gumsu** (first wife), who had real influence
- the **Kaigama** commanded the army and governed the south; the **Galadima** the west; the **Yerima** the north; the **Mestrema** the east
- provinces were governed by trusted officials and princes
- Islamic law was applied by **qadis** from Idris Alooma's time

## Mai Idris Alooma
- reorganised the army: **musketeers** trained by Turkish instructors, cavalry in chain mail, camels for desert campaigns, large boats for crossing rivers, fortified camps
- defeated the Bulala and other enemies
- replaced customary law with the **Shari'ah**; built **brick mosques**
- made the **pilgrimage** and built a hostel in Makkah
- kept diplomatic relations with **Tripoli** and the **Ottoman** sultan
His reign is known from his imam, **Ahmad ibn Fartuwa**.

## Economy
- **trans-Saharan trade** through **Bilma** and the **Fezzan** to **Tripoli**: Borno exported slaves, ivory, ostrich feathers and **natron**; it imported horses, cloth, weapons, glass and books
- **salt** from Bilma and natron from the lake shores
- farming (millet, guinea corn), fishing, and cattle rearing
- cloth weaving and leather work

## Decline
- weaker Mais after Idris Alooma; famines; raids by **Tuareg** and **Jukun**
- the **Sokoto Jihad**: Fulani forces sacked Ngazargamu in **1808**
- the scholar **Shaykh Muhammad al-Amin al-Kanemi** drove them back and became the real ruler; his descendants, the **Shehus**, founded a new capital at **Kukawa**; the last Sayfawa Mai was killed in **1846**
- the adventurer **Rabih az-Zubayr** conquered Borno in **1893**; he was defeated by the French in 1900, and Borno was divided among the British, French and Germans

## Legacy
long tradition of Islamic learning; the Kanuri language and culture; the office of the **Shehu of Borno**.`,
          examples: `**Example 1.** What was the title of the ruler of Kanem-Borno? *Answer:* **Mai**.

**Example 2.** Who was the greatest Mai? *Answer:* **Idris Alooma**.

**Example 3.** Who saved Borno from the Fulani jihadists? *Answer:* **Al-Kanemi**.`,
        },
        questions: [
          ["E", "The Kanem-Borno Empire grew around", "Lake Chad", "the Niger Delta", "the Jos Plateau", "the Lagos lagoon", "Its people are the Kanuri."],
          ["E", "The ruling dynasty of Kanem-Borno was the", "Sayfawa", "Ogiso", "Habe", "Oyomesi", "It ruled for about a thousand years."],
          ["E", "The first capital of Kanem was", "Njimi", "Ngazargamu", "Kukawa", "Kano", "It lay north-east of Lake Chad."],
          ["M", "The commander of the army in Kanem-Borno was the", "Kaigama", "Magira", "Gumsu", "Galadima", "He also governed the southern province."],
          ["M", "The queen mother in Kanem-Borno bore the title", "Magira", "Gumsu", "Iyoba", "Daurama", "She had real influence at court."],
          ["M", "The rulers of Kanem moved west to Borno because of attacks by the", "Bulala", "Tuareg", "Fulani", "Portuguese", "This happened in the late fourteenth century."],
          ["M", "The new capital built by al-Kanemi's line was", "Kukawa", "Njimi", "Ngazargamu", "Bilma", "The Shehus ruled from there."],
          ["H", "Idris Alooma strengthened his army mainly by", "introducing musketeers and improving transport and camps", "abolishing cavalry", "hiring Portuguese sailors", "disbanding the council", "Turkish instructors trained his gunmen."],
          ["H", "The wealth of Kanem-Borno depended largely on", "control of the trade route to Tripoli", "gold mining", "the Atlantic trade", "cocoa farming", "Salt, natron and slaves were exchanged for horses and arms."],
          ["H", "The Sayfawa dynasty finally came to an end when", "the last Mai was killed and the Shehus took full power", "the Portuguese arrived", "Idris Alooma died", "Kanem accepted Islam", "This happened in 1846."],
        ],
      },
      {
        week: 2,
        title: "The Hausa states",
        subtopics: ["The rise of the Hausa states", "Political organisation", "Economy and trade", "Notable rulers and relations among the states"],
        objectives: ["Describe the rise of the Hausa states", "Describe their political organisation", "Describe their economy and trade", "Identify notable rulers and relations among the states"],
        lesson: {
          title: "Walled Cities of the Savanna",
          summary: "Describe the Hausa city-states before 1800.",
          minutes: 40,
          notes: `## The rise of the states
The Hausa live in the savanna of what is now northern Nigeria and southern Niger. From about the **tenth to the thirteenth centuries**, farming villages grouped around **walled towns** (*birni*; plural *birane*) for protection. Each walled town with its surrounding countryside became an independent **city-state**. The Bayajidda legend names seven: **Daura, Kano, Katsina, Zazzau, Gobir, Rano and Biram**.
The states were **never united** under one ruler; they shared language and culture.

## Special roles
Tradition gives each state a role:
- **Kano** and **Rano** — industry (weaving and dyeing)
- **Katsina** and **Daura** — trade
- **Zazzau (Zaria)** — supplier of slaves and labour from the south
- **Gobir** — defence of the northern frontier against desert raiders

## Political organisation
- the ruler was the **Sarki** (king), chosen from the royal family by a council of electors
- he was assisted by titled officials:
  - **Galadima** — senior councillor, often in charge of the capital in the king's absence
  - **Madawaki** — commander of the cavalry and chief adviser
  - **Waziri** — chief minister
  - **Magaji** — in charge of the treasury
  - **Sarkin Fada** — head of palace officials
  - **Sarkin Kasuwa** — head of the market
- districts and villages had their own heads (*hakimi*, *dagaci*)
- the people were divided into **sarakuna** (rulers) and **talakawa** (commoners)
- revenue came from **taxes** on land, crafts, cattle and markets, tolls and tribute
- from the fourteenth century, **Islam** influenced the courts: imams, judges and scribes were appointed

## Economy
- **farming**: guinea corn, millet, cotton, indigo, groundnut
- **crafts**: Kano's dyed cloth and leather goods were famous across the Sahara
- **trade**: Kano and Katsina were southern terminals of the **trans-Saharan trade**; Hausa traders travelled to Gonja for **kola**, and to Nupe and Yorubaland
- large markets such as **Kurmi** in Kano

## Notable rulers
- **Sarki Yaji** of Kano (fourteenth century) — accepted Islam
- **Muhammad Rumfa** of Kano (1463–1499) — extended the walls, built the palace and Kurmi market, received al-Maghili
- **Muhammad Korau** of Katsina
- **Queen Amina** of Zazzau (sixteenth century) — a warrior queen said to have extended Zazzau's power as far as Nupe and Kwararafa and to have built walled camps wherever she campaigned

## Relations among the states
- frequent **wars**, especially between **Kano and Katsina** for control of trade
- attacks from outside: **Songhai** under Askia Muhammad, **Borno**, **Kebbi** under Kanta, and **Kwararafa**
- this disunity later made them easy to conquer during the **Sokoto Jihad** (1804), after which most Hausa rulers were replaced by **Fulani emirs**`,
          examples: `**Example 1.** What was the title of a Hausa king? *Answer:* **Sarki**.

**Example 2.** Which Hausa state was noted for cloth dyeing? *Answer:* **Kano**.

**Example 3.** Who was the famous warrior queen of Zazzau? *Answer:* **Queen Amina**.`,
        },
        questions: [
          ["E", "The title of a Hausa king was", "Sarki", "Mai", "Alaafin", "Etsu", "He was chosen from the royal family."],
          ["E", "The Hausa state famous for dyed cloth and leather was", "Kano", "Gobir", "Daura", "Biram", "Its Kurmi market was well known."],
          ["E", "The warrior queen of Zazzau was", "Amina", "Daurama", "Idia", "Moremi", "She lived in the sixteenth century."],
          ["M", "The Hausa word for a walled town is", "birni", "sarki", "talakawa", "hakimi", "The states grew around such towns."],
          ["M", "The commander of the cavalry in a Hausa state was the", "Madawaki", "Magaji", "Waziri", "Sarkin Kasuwa", "He was also a chief adviser."],
          ["M", "According to tradition, the Hausa state responsible for defending the northern frontier was", "Gobir", "Rano", "Zazzau", "Kano", "It faced the desert raiders."],
          ["M", "The commoners in Hausa society were known as", "talakawa", "sarakuna", "hakimai", "malamai", "The rulers were the sarakuna."],
          ["H", "A major weakness of the Hausa states was that they", "were never united and often fought one another", "had no walls", "refused to trade", "had no rulers", "This made conquest during the jihad easier."],
          ["H", "Kano and Katsina were frequently at war mainly over", "control of the trans-Saharan trade", "the ownership of Lake Chad", "religion", "access to the sea", "Both were southern terminals of the trade."],
          ["H", "The appointment of imams, judges and scribes at Hausa courts from the fourteenth century shows the influence of", "Islam", "Christianity", "the Portuguese", "Benin", "It came with traders and scholars."],
        ],
      },
      {
        week: 3,
        title: "The Oyo Empire",
        subtopics: ["Rise and expansion", "Political organisation and checks and balances", "The army and provincial administration", "Economy and decline"],
        objectives: ["Trace the rise and expansion of Oyo", "Explain the system of checks and balances in Oyo", "Describe the army and provincial administration", "Explain the economy and causes of decline"],
        lesson: {
          title: "The Power of the Alaafin",
          summary: "Describe the Old Oyo Empire and its system of government.",
          minutes: 40,
          notes: `## Rise and expansion
**Oyo** was founded, according to tradition, by **Oranmiyan**, a prince of Ife. Its capital, **Oyo-Ile** (Old Oyo or Katunga), lay in the **savanna** near the Niger — far north of present-day Oyo town.
- its position allowed it to obtain **horses** from the north and build a powerful **cavalry**
- after early defeats by the **Nupe** and **Borgu**, it recovered and expanded from the **seventeenth century**
- at its height in the **eighteenth century** it controlled much of Yorubaland and received tribute from **Dahomey** (conquered about 1730–48)
- it traded with Europeans through ports such as **Badagry** and **Porto Novo**

## Political organisation
- the **Alaafin** was the king, regarded as sacred — "companion of the gods"; but he was **not an absolute ruler**
- the **Oyomesi** — a council of **seven** non-royal chiefs led by the **Bashorun**; they were the **kingmakers** and advised the Alaafin
- the **Ogboni** — a society of elders devoted to the earth, who could review decisions of the Oyomesi
- the **Aremo** — the Alaafin's eldest son; for a long time he could not succeed and had to die with his father, so that he would not be tempted to hasten the king's death
- palace officials: the **ilari** (messengers with half-shaven heads) and senior eunuchs

## Checks and balances
- if the Alaafin became tyrannical, the Bashorun, speaking for the Oyomesi, could present him with an **empty calabash or parrot's eggs** — a sign that he was rejected and must **commit suicide**
- the **Ogboni** checked the Oyomesi
- the **Are-Ona-Kakanfo** (army commander) lived **outside the capital** and was not to enter it
This balance prevented any one person from holding all power.

## The army
- led by the **Are-Ona-Kakanfo**, with seventy war-chiefs (the **Eso**)
- famous for its **cavalry**, effective in open country but not in thick forest
- a Kakanfo was expected to **win or die**

## Provincial administration
- Yoruba towns kept their own **Obas and Baales**, who paid tribute and attended the annual **Bere** festival
- the Alaafin's resident agents, the **Ajele**, watched over them; the **ilari** carried messages and collected tribute

## Economy
farming; crafts (weaving, iron work, calabash carving); trade in kola, cloth, salt and horses; and, in the eighteenth century, slaves sold at the coast.

## Decline
- **constitutional crisis**: Bashorun **Gaha** seized power and raised and removed several Alaafins before he was overthrown by **Alaafin Abiodun** (1774)
- weak successors; the army neglected
- **revolts** of tributaries: Egba, Dahomey
- **Afonja**, the Kakanfo at **Ilorin**, rebelled about 1817 with the help of Fulani Muslims, who later took over Ilorin
- loss of the horse supply and trade routes
- Oyo-Ile was abandoned about **1835**; a new Oyo was founded further south by **Atiba**
The collapse led to the **Yoruba wars** of the nineteenth century.`,
          examples: `**Example 1.** Who were the Oyomesi? *Answer:* The council of **seven kingmakers**, led by the Bashorun.

**Example 2.** How was a tyrannical Alaafin removed? *Answer:* He was presented with an **empty calabash or parrot's eggs** and had to take his life.

**Example 3.** Who commanded the Oyo army? *Answer:* The **Are-Ona-Kakanfo**.`,
        },
        questions: [
          ["E", "The ruler of the Oyo Empire was the", "Alaafin", "Ooni", "Oba of Benin", "Sarki", "He was regarded as sacred."],
          ["E", "The head of the Oyomesi was the", "Bashorun", "Aremo", "Kakanfo", "Ajele", "He led the seven kingmakers."],
          ["E", "The commander of the Oyo army was the", "Are-Ona-Kakanfo", "Bashorun", "Ilari", "Baale", "He lived outside the capital."],
          ["M", "The number of chiefs in the Oyomesi was", "seven", "twelve", "three", "seventy", "They were non-royal chiefs."],
          ["M", "The Alaafin's resident agents in the provinces were called", "Ajele", "Eso", "Ogboni", "Aremo", "They watched over tributary towns."],
          ["M", "Oyo's military strength rested mainly on its", "cavalry", "navy", "firearms", "war canoes", "Horses came from the north."],
          ["M", "The Bashorun who seized power and removed several Alaafins was", "Gaha", "Afonja", "Atiba", "Abiodun", "He was eventually overthrown."],
          ["H", "The presentation of an empty calabash or parrot's eggs to the Alaafin meant that", "he had been rejected and must die", "he had won a war", "a new chief was appointed", "tribute had arrived", "It was a check on royal power."],
          ["H", "The custom that the Aremo should die with his father was intended to", "remove any temptation to hasten the king's death", "punish the royal family", "please the Ogboni", "reduce the population", "It protected the reigning Alaafin."],
          ["H", "The location of Oyo-Ile in the savanna helped the empire because it", "allowed the use of horses and access to northern trade", "protected it from all enemies", "gave it a seaport", "made farming impossible", "Cavalry worked well in open country."],
        ],
      },
      {
        week: 4,
        title: "The Benin Kingdom",
        subtopics: ["From the Ogiso to the Obas", "Political organisation", "Great Obas", "Economy and decline"],
        objectives: ["Trace the change from the Ogiso to the Obas", "Describe the political organisation of Benin", "Describe the achievements of the great Obas", "Explain the economy and decline of Benin"],
        lesson: {
          title: "The Kingdom of the Edo",
          summary: "Describe the government and history of the Benin Kingdom.",
          minutes: 40,
          notes: `## From the Ogiso to the Obas
The first rulers of the Edo were the **Ogiso**. After the banishment of the Ogiso **Owodo**, there was a period of disorder, and an attempt at rule by an administrator, **Evian**. The elders then sent to **Ife**; **Oranmiyan** came, and his son **Eweka I** became the first **Oba**, probably about the **thirteenth century**.

## Political organisation
The government was highly **centralised**.
- the **Oba** — political and religious head; succession passed from father to **eldest son** (primogeniture), which reduced disputes
- the **Uzama** — the oldest order of hereditary nobles, originally seven **kingmakers**, who installed the Oba
- the **Eghaevbo n'Ogbe** — **palace chiefs**, who managed the royal household in three associations
- the **Eghaevbo n'Ore** — **town chiefs**, led by the **Iyase**, who spoke for the people and could oppose the Oba in council
- the **Edaiken** — the heir apparent
- the **Iyoba** — the Queen Mother, with her own court at Uselu
- the kingdom was divided into villages and districts under chiefs (**Enogie**) and elders (**Odionwere**) who paid **tribute**
- titles created by the Oba were **not hereditary**, so chiefs depended on his favour; the rival orders of chiefs balanced one another

## Great Obas
- **Ewedo** — reduced the power of the Uzama; moved the palace
- **Oguola** — dug the first moat; brass casting introduced from Ife
- **Ewuare the Great** (about 1440–1473) — conquered many towns in Edo, Yoruba and Igbo areas; rebuilt the city with walls and broad streets; created the orders of palace and town chiefs; made the title of Edaiken
- **Ozolua** "the Conqueror" (about 1481–1504) — extended the empire; received the Portuguese
- **Esigie** (about 1504–1550) — defeated **Idah**; honoured his mother **Idia** with the title Iyoba; encouraged trade and learning with the Portuguese
At its height the empire stretched from **Lagos** (where Benin founded a ruling house) to the **Niger**.

## Economy
farming (yam, pepper); crafts through **guilds**; trade in **pepper, ivory, cloth, beads** and later slaves with Europeans via **Ughoton**; the Oba controlled foreign trade. Unlike many coastal states, Benin for a long period **restricted the sale of male slaves**.

## Decline
- succession disputes and civil wars in the seventeenth and eighteenth centuries
- loss of control over distant provinces; rise of **Itsekiri**, **Urhobo** and Yoruba neighbours as trade rivals
- shift of trade to the Niger Delta
- British pressure to open trade: in January **1897** an uninvited party under Acting Consul **Phillips** was attacked; in February a **punitive expedition** captured and burned the city; **Oba Ovonramwen** was exiled to Calabar, where he died in 1914
- the monarchy was restored in **1914** under **Eweka II**`,
          examples: `**Example 1.** What rule of succession did Benin follow? *Answer:* **Primogeniture** — the eldest son succeeds.

**Example 2.** Who led the town chiefs? *Answer:* The **Iyase**.

**Example 3.** When did the British conquer Benin? *Answer:* **1897**.`,
        },
        questions: [
          ["E", "The title of the ruler of Benin is", "Oba", "Alaafin", "Mai", "Obi", "The first was Eweka I."],
          ["E", "Succession to the Benin throne passed to the Oba's", "eldest son", "brother", "nephew", "most senior chief", "This is called primogeniture."],
          ["E", "The British expedition against Benin took place in", "1897", "1851", "1914", "1929", "The city was captured and burned."],
          ["M", "The hereditary nobles who installed the Oba of Benin were the", "Uzama", "Oyomesi", "Eso", "Ilari", "They are the oldest order of chiefs."],
          ["M", "The leader of the town chiefs in Benin was the", "Iyase", "Edaiken", "Enogie", "Iyoba", "He could oppose the Oba in council."],
          ["M", "The heir apparent to the Benin throne bears the title", "Edaiken", "Aremo", "Yerima", "Galadima", "The title was created by Ewuare."],
          ["M", "The Oba who honoured his mother Idia with the title of Iyoba was", "Esigie", "Ewuare", "Ozolua", "Ewedo", "He also defeated Idah."],
          ["H", "The Oba kept control over his chiefs largely because", "most titles were not hereditary and depended on his favour", "chiefs were foreigners", "there was no council", "he had no army", "Rival orders of chiefs also balanced each other."],
          ["H", "The immediate cause of the 1897 expedition was", "the attack on Phillips's party on its way to Benin", "a dispute over the Niger", "the death of Ewuare", "a Portuguese invasion", "The British used it to justify conquest."],
          ["H", "Primogeniture benefited the Benin Kingdom mainly by", "reducing disputes over who should succeed", "ending the power of the Oba", "giving chiefs the throne", "encouraging civil war", "The heir was known in advance."],
        ],
      },
      {
        week: 5,
        title: "The Igbo political system",
        subtopics: ["A decentralised society", "Institutions of government", "Law, order and religion", "Kingship among some Igbo groups"],
        objectives: ["Explain why Igbo society is described as decentralised", "Describe the institutions that governed an Igbo village", "Explain how law and order were maintained", "Identify Igbo communities with kings"],
        lesson: {
          title: "Government without Kings",
          summary: "Describe the pre-colonial political organisation of the Igbo.",
          minutes: 40,
          notes: `## A decentralised society
The Igbo live in south-eastern Nigeria, mostly in forest country east of the Niger. Most Igbo communities had **no kings or central government**. Authority was shared among many groups, and the largest unit of government was usually the **village** or **village-group (town)**. Such a system is called **decentralised**, **segmentary** or **acephalous** ("without a head"). The saying "**Igbo enwe eze**" — "the Igbo have no king" — expresses it. Because every adult male could take part, it is also described as a **village democracy**.

## Levels of organisation
family → **extended family** (*umunna*, the patrilineage) → **village** → **village-group**

## Institutions of government
1. **the family head (Okpara)** — the eldest male of a lineage; he held the **ofo**, a staff symbolising truth and authority, and settled family matters
2. **the council of elders (Ndichie)** — heads of lineages who met to discuss village affairs and settle disputes
3. **the village assembly (Oha-na-eze / Ama-ala)** — a general meeting, often in the market square, where **every adult male could speak**; decisions were reached by **consensus**
4. **age-grades** — men (and women) of about the same age formed groups that **enforced decisions**, cleared paths, guarded the village and built markets
5. **title societies** — such as the **Ozo**; men of achievement who took titles gained prestige and a strong voice. Status was **earned**, not inherited
6. **secret societies and masquerades** — regarded as spirits of the ancestors; they enforced laws and punished offenders
7. **priests and oracles** — the priest of **Ala** (the earth goddess); diviners; great oracles such as **Ibini Ukpabi** (the "Long Juju") at **Arochukwu**, **Agbala** at Awka and **Igwe-ka-Ala** at Umunoha, which acted as final courts of appeal
8. **women's associations** — the *umuada* (daughters of the lineage) and wives' groups, which settled women's matters and could discipline men by collective protest ("sitting on a man")

## Law and order
- offences against the earth (**nso ala**) — murder, incest, theft of yams — required cleansing
- disputes were settled by the family, then the elders, then the assembly, with oaths and oracles as last resort
- there were no police or prisons; **public opinion**, fines, ostracism and fear of the gods kept order

## The Aro
The **Aro** used the prestige of their oracle to build a wide **trading network** across Igboland and beyond.

## Igbo communities with kings
Some had monarchies, often through contact with neighbours:
- **Nri** — the sacred **Eze Nri**
- **Onitsha**, **Aboh**, **Oguta**, **Asaba** area — with an **Obi**, influenced by **Benin** and **Igala**
- **Arochukwu** — the Eze Aro

## Significance
The system valued **equality, achievement and participation**. Because it had no chiefs, the British later created **warrant chiefs** — a policy that failed.`,
          examples: `**Example 1.** What does "acephalous" mean? *Answer:* **Without a head** — no king or central ruler.

**Example 2.** Which group enforced the decisions of the village? *Answer:* The **age-grades**.

**Example 3.** Name an Igbo town with a king. *Answer:* **Onitsha** (also Nri, Aboh).`,
        },
        questions: [
          ["E", "Most pre-colonial Igbo communities had no", "kings", "markets", "farmers", "elders", "Authority was shared among many groups."],
          ["E", "The eldest male who headed an Igbo lineage was the", "Okpara", "Obi", "Sarki", "Bashorun", "He held the ofo."],
          ["E", "The famous oracle at Arochukwu was", "Ibini Ukpabi", "Agbala", "Ogun", "Olokun", "The British called it the Long Juju."],
          ["M", "A political system without a central ruler is described as", "acephalous", "monarchical", "feudal", "federal", "The word means without a head."],
          ["M", "The staff that symbolised truth and authority among the Igbo was the", "ofo", "ada", "opa", "ikenga only", "Lineage heads held it."],
          ["M", "Decisions of the Igbo village assembly were reached by", "consensus", "the vote of the king", "casting lots", "the order of a chief", "Every adult male could speak."],
          ["M", "The Igbo title society whose members gained prestige through achievement was the", "Ozo", "Ogboni", "Ekpe", "Uzama", "Status was earned, not inherited."],
          ["H", "The Igbo system is called a village democracy because", "all adult males could take part in decision-making", "elections were held with ballot boxes", "it had a parliament", "women ruled the villages", "Assemblies were open and decisions agreed."],
          ["H", "Monarchies in Onitsha and Aboh are explained mainly by", "influence from Benin and Igala", "British appointment", "the Atlantic trade alone", "the Sokoto Jihad", "These western and riverine Igbo had contact with kingdoms."],
          ["H", "In the absence of police and prisons, order in Igbo society was maintained chiefly through", "public opinion, age-grades and fear of the gods", "a standing army", "written laws", "foreign judges", "Sanctions were social and religious."],
        ],
      },
      {
        week: 6,
        title: "The Niger Delta city-states and other states",
        subtopics: ["The delta city-states", "The House system", "The Efik of Old Calabar", "Nupe, Igala and Jukun"],
        objectives: ["Identify the Niger Delta city-states", "Explain the House system", "Describe the Efik state of Old Calabar", "Describe the Nupe, Igala and Jukun states"],
        lesson: {
          title: "Traders of the Creeks and Kingdoms of the Middle Belt",
          summary: "Describe the delta city-states and the states of the Niger–Benue area.",
          minutes: 40,
          notes: `## The Niger Delta city-states
The delta is a land of **creeks, swamps and islands**. Its peoples — mainly the **Ijaw** — lived by **fishing and salt-making** and traded these for foodstuffs from the hinterland. With the growth of the Atlantic trade, some fishing villages became wealthy **city-states**:
- **Bonny** (Ibani)
- **Elem Kalabari** (New Calabar)
- **Nembe (Brass)**
- **Okrika**
- **Opobo** — founded in **1869** by **Jaja**
- the **Itsekiri** kingdom of **Warri**, ruled by the **Olu**
Each city-state consisted of a capital town with its trading settlements and markets up-river. The ruler was the **Amanyanabo** ("owner of the land").
They acted as **middlemen**: they bought slaves — and, in the nineteenth century, **palm oil** — from the interior and sold them to Europeans on the coast, guarding this position jealously.

## The House system
The **House** (*wari*) was the basic unit of society and trade.
- originally a family lineage; it became a **trading and fighting corporation** including the head, his relatives, free followers and **slaves**
- each House kept **war canoes** with many paddlers and cannon — the "**canoe House**"
- the **House head** was chosen for **ability**, not birth; even a former slave could rise to become head — as did **Jaja**, who became head of the Anna Pepple House in Bonny before founding Opobo
- heads of Houses formed the **council** of the Amanyanabo
- the system gave strangers and slaves a place in society and rewarded talent

## The Efik of Old Calabar
On the **Cross River**, the **Efik** towns — **Creek Town, Duke Town, Old Town** — traded with Europeans.
- each town had its ruler; the title **Obong** became pre-eminent
- real authority lay with the **Ekpe (Leopard) society**, a graded secret society of leading men: it made laws, collected debts, punished offenders and its decisions bound even Europeans
- wealthy traders such as **Eyo Honesty** and **Duke Ephraim** were famous

## Nupe
Along the middle Niger. Tradition says **Tsoede** united the Nupe in about the sixteenth century. The king was the **Etsu Nupe**. The Nupe were noted for **brass work, glass beads (Bida), weaving, canoe building and trade**; they fought Oyo and were later drawn into the Sokoto Caliphate.

## Igala
East of the Niger–Benue confluence, with the capital at **Idah**. The king, the **Attah**, was regarded as sacred and was assisted by nine kingmakers (**Igala Mela**). Igala controlled river trade and fought a famous war with **Benin** in the sixteenth century.

## Jukun (Kwararafa)
In the Benue valley, with its later capital at **Wukari**. The king, the **Aku Uka**, was a **divine ruler** believed to control rain and harvest. In the sixteenth and seventeenth centuries Kwararafa armies raided **Kano, Katsina, Zaria and Borno**.

## The Tiv
The **Tiv** of the Benue valley, like the Igbo, had a **segmentary** system based on lineages, without a central ruler.`,
          examples: `**Example 1.** What was the title of a delta city-state ruler? *Answer:* **Amanyanabo**.

**Example 2.** How was a House head chosen? *Answer:* By **ability**, not birth.

**Example 3.** Which society governed Old Calabar? *Answer:* The **Ekpe** society.`,
        },
        questions: [
          ["E", "The ruler of a Niger Delta city-state was called the", "Amanyanabo", "Attah", "Etsu", "Aku Uka", "The title means owner of the land."],
          ["E", "The city-state of Opobo was founded by", "Jaja", "Nana", "Koko", "Eyo Honesty", "He founded it in 1869."],
          ["E", "The king of the Igala bears the title", "Attah", "Olu", "Obong", "Ooni", "His capital is Idah."],
          ["M", "The basic unit of trade and society in the delta states was the", "House", "age-grade", "guild", "emirate", "It is called wari."],
          ["M", "The secret society that held real authority in Old Calabar was the", "Ekpe", "Ogboni", "Ozo", "Igun", "It made laws and collected debts."],
          ["M", "The ruler of the Jukun kingdom was the", "Aku Uka", "Etsu Nupe", "Tor Tiv", "Amanyanabo", "He was regarded as divine."],
          ["M", "The Nupe town famous for glass beads and brass work is", "Bida", "Idah", "Wukari", "Brass", "Nupe crafts were widely traded."],
          ["H", "The delta city-states grew wealthy mainly because they", "acted as middlemen between the interior and European traders", "mined gold", "grew cocoa", "controlled the Sahara routes", "They guarded this position jealously."],
          ["H", "The House system was unusual in that", "a person of slave origin could rise to become its head", "only kings' sons could lead", "women were excluded from trade", "it forbade war canoes", "Leadership depended on ability."],
          ["H", "Like the Igbo, the Tiv are described as having a", "segmentary political system", "divine kingship", "city-state system", "caliphate", "Authority rested in lineages without a central ruler."],
        ],
      },
    ],
  },
];
