import type { TermPlan } from "../types";

/** SS1 History — Nigeria and West Africa to 1800. Original Precious PS content for senior secondary schools. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Historiography and the nature of History",
        subtopics: ["The nature of historical knowledge", "Objectivity, bias and interpretation", "The denial of African history", "The rise of African historiography"],
        objectives: ["Explain the nature of historical knowledge", "Discuss objectivity, bias and interpretation in History", "Explain how and why African history was once denied", "Describe the rise of modern African historiography"],
        lesson: {
          title: "How History Is Written",
          summary: "Examine the nature of History as a discipline and the development of African historiography.",
          minutes: 40,
          notes: `## History as a discipline
**History** is both the **past itself** and the **study and writing** of that past. **Historiography** is the study of **how history is written** — the methods, sources and viewpoints of historians.

### Views on the nature of History
- **Leopold von Ranke** (nineteenth century) urged historians to show the past "**as it actually happened**", from careful study of documents
- **E.H. Carr**, in *What Is History?*, called it "**an unending dialogue between the present and the past**" — a continuous interaction between the historian and the facts. Facts do not speak for themselves; the historian **selects and interprets** them.

## The historian's method
1. choose a problem and frame questions
2. **collect** evidence from all relevant sources
3. **criticise** the sources — *external criticism* (is it genuine?) and *internal criticism* (is its content reliable?)
4. **interpret**: establish causes, consequences and significance
5. **present** a reasoned, balanced account, with references

## Key concepts
- **causation**: events have many causes — remote and immediate, political, economic, social
- **change and continuity** over time
- **evidence** versus **opinion**
- **chronology** and **periodisation**
- **significance**

## Objectivity and bias
**Objectivity** means judging on the evidence, without favouring a side. Complete objectivity is difficult because historians are influenced by nationality, religion, class, period and available sources. **Bias** is a one-sided leaning. A good historian reduces bias by using many sources, declaring assumptions, and giving weight to evidence that contradicts his view. Different interpretations of the same event are normal; they are tested against the evidence.

## The denial of African history
For a long time many European writers claimed that Africa south of the Sahara had **no history** before the coming of Europeans:
- the philosopher **Hegel** called Africa "no historical part of the world"
- the Oxford professor **Hugh Trevor-Roper** said in the 1960s that there was only the history of **Europeans in Africa**; the rest was darkness
### Why?
- the belief that **history requires written documents**, and many African societies had none
- **racism**, used to justify the slave trade and colonialism
- ignorance of African languages and oral literature
- colonial education taught European history

## The rise of African historiography
From the 1950s African scholars showed that Africa has a long and rich history:
- **Kenneth Onwuka Dike** — *Trade and Politics in the Niger Delta, 1830–1885* (1956) — used **oral traditions** alongside documents and wrote from the African point of view; he founded the **Ibadan School of History**, the **National Archives** and helped establish the **Historical Society of Nigeria (1955)**
- **Saburi Biobaku** — *The Egba and Their Neighbours*; the Yoruba Historical Research Scheme
- **J.F. Ade Ajayi** — *Christian Missions in Nigeria*
- **Adiele Afigbo** — *The Warrant Chiefs*; **Obaro Ikime**; **Tekena Tamuno**; **Bolanle Awe**
- **Abdullahi Smith** and the **Zaria** school; **Yusufu Bala Usman**
- **Jan Vansina** set out rigorous methods for using **oral tradition**
- the **UNESCO General History of Africa** (eight volumes)
### Their achievements
recognition of **oral tradition, archaeology and linguistics** as valid sources; emphasis on African **initiative**; histories of states, trade, religion and resistance.
### Criticisms
some early works concentrated on kings and states and neglected ordinary people, women and economic life — later historians have widened the field.`,
          examples: `**Example 1.** What is historiography? *Answer:* The study of **how history is written**.

**Example 2.** Why did some Europeans deny African history? *Answer:* They held that history needs **written documents**, and they were influenced by **racism**.

**Example 3.** Who founded the Ibadan School of History? *Answer:* **Kenneth Onwuka Dike**.`,
        },
        questions: [
          ["E", "The study of how history is written is called", "historiography", "archaeology", "chronology", "ethnography", "It examines methods and viewpoints."],
          ["E", "The founder of the Ibadan School of History was", "Kenneth Dike", "Hugh Trevor-Roper", "E.H. Carr", "Jan Vansina", "He wrote on the Niger Delta."],
          ["E", "A one-sided leaning in the writing of history is", "bias", "evidence", "chronology", "causation", "Historians try to reduce it."],
          ["M", "The historian who described History as an unending dialogue between the present and the past was", "E.H. Carr", "Ranke", "Hegel", "Herodotus", "He wrote What Is History?"],
          ["M", "Testing whether a document is genuine is called", "external criticism", "internal criticism", "interpretation", "periodisation", "Internal criticism tests the content."],
          ["M", "The Historical Society of Nigeria was founded in", "1955", "1914", "1960", "1975", "Dike and others established it."],
          ["M", "The scholar who set out rigorous methods for using oral tradition was", "Jan Vansina", "Leopold von Ranke", "Thurstan Shaw", "Frederick Lugard", "His work gave oral sources academic standing."],
          ["H", "The claim that Africa had no history rested mainly on the assumption that", "history can only be written from documents", "Africans had no past", "archaeology was unreliable", "oral tradition was too detailed", "It ignored other kinds of evidence."],
          ["H", "Dike's Trade and Politics in the Niger Delta was a landmark because it", "combined oral and written sources and wrote from an African perspective", "used only missionary records", "denied the role of trade", "was the first book on Europe", "It showed African initiative in history."],
          ["H", "Complete objectivity is difficult for a historian mainly because", "he selects and interprets facts under the influence of his own time and background", "facts are always false", "sources never survive", "history has no method", "Awareness of this helps to limit bias."],
        ],
      },
      {
        week: 2,
        title: "Sources and methods of dating",
        subtopics: ["Evaluation of oral, written and archaeological sources", "Other disciplines that aid History", "Relative and absolute dating", "Scientific dating methods"],
        objectives: ["Evaluate the main sources of Nigerian history", "Explain how other disciplines assist the historian", "Distinguish relative from absolute dating", "Describe scientific methods of dating"],
        lesson: {
          title: "Evidence and Its Limits",
          summary: "Evaluate the sources of African history and the methods used to date the past.",
          minutes: 40,
          notes: `## Oral sources
### Types
- **formal traditions**: myths of origin, king lists, praise poetry, ritual texts — often preserved by specialists (the Oyo **arokin**, Benin **Ihogbe**, Hausa court praise-singers)
- **informal traditions**: family histories, proverbs, songs, folktales
- **eyewitness testimony**
### Strengths
they give the inside view; cover societies without writing; preserve values and institutions.
### Weaknesses
- weak **chronology** — "telescoping" of long periods; reign-lengths are estimated
- distortion to **legitimise rulers** or claims to land
- loss through death of informants; contamination by published books ("feedback")
### How historians handle them
record several versions; compare with neighbours' traditions, archaeology and written sources; study the purpose of the tradition.

## Written sources
- **Arabic**: geographers and travellers — **al-Bakri**, **al-Idrisi**, **Ibn Battuta**, **Leo Africanus**; local works — the **Kano Chronicle**, the Borno *girgam* and **Ibn Fartuwa**, the Timbuktu *Tarikhs*, the writings of the Sokoto leaders
- **European**: Portuguese accounts (**Pacheco Pereira**), Dutch (**Dapper**), traders' journals, explorers (**Park, Clapperton, Barth**), missionary papers, consular and colonial records
- **African autobiographies**: **Equiano**
- newspapers and private papers
### Limitations
uneven coverage — good for the coast and the Muslim north, poor for the interior before 1800; outsiders' prejudice and misunderstanding; survival and access.

## Archaeology
recovers **material culture**; extends history back thousands of years; allows scientific dating. Limits: cost; few sites excavated; acid soils destroy bone and iron; silent on ideas and names.

## Disciplines that aid History
- **linguistics**: language families and loan-words reveal relationships and contacts (e.g. the spread of the Bantu languages from the Nigeria–Cameroon border area; **glottochronology** estimates when languages separated)
- **ethnography / anthropology**: living customs and institutions
- **botany and zoology**: origins and spread of crops and animals
- **geography**, **geology**
- **art history**: styles and techniques
- **genetics**

## Dating
### Relative dating
tells whether one thing is **older or younger** than another, without giving years:
- **stratigraphy** — in an undisturbed site, **lower layers are older**
- **typology / seriation** — arranging objects by changing style
### Absolute dating
gives an age in years (with a margin of error):
- **radiocarbon (carbon-14)** — measures the decay of radioactive carbon in **once-living material** (charcoal, bone, wood); useful to about **50,000 years**; it dated Iwo Eleru, Taruga and Igbo-Ukwu
- **thermoluminescence** — measures light released when **fired clay** (pottery, terracotta) or burnt stone is reheated; it gives the time since firing — used on Nok and Ife terracottas
- **potassium–argon** — for **volcanic rocks** millions of years old, used at early human sites in East Africa
- **dendrochronology** — counting **tree rings**
### Dating from written and oral evidence
king lists and average reign-lengths; references to **eclipses** and comets; synchronisms with dated foreign events.

## Conclusion
The historian of early Nigeria must be **inter-disciplinary**, combining all these to build a reliable account.`,
          examples: `**Example 1.** What is stratigraphy? *Answer:* Dating by the **order of layers** — lower layers are older.

**Example 2.** Which method dates fired clay? *Answer:* **Thermoluminescence**.

**Example 3.** Give one weakness of oral tradition. *Answer:* **Weak chronology** (or distortion to legitimise rulers).`,
        },
        questions: [
          ["E", "The principle that lower layers of an undisturbed site are older is", "stratigraphy", "typology", "linguistics", "ethnography", "It is a method of relative dating."],
          ["E", "Radiocarbon dating is used on", "once-living material such as charcoal", "volcanic rock", "gold objects", "glass beads only", "It measures the decay of carbon-14."],
          ["E", "The Kano Chronicle is an example of a", "written source", "oral source only", "archaeological source", "linguistic source", "It is written in Arabic."],
          ["M", "The dating method best suited to pottery and terracotta is", "thermoluminescence", "potassium–argon", "dendrochronology", "glottochronology", "It measures the time since firing."],
          ["M", "The palace historians of Oyo were the", "arokin", "ilari", "eso", "ajele", "They preserved royal traditions."],
          ["M", "Dating by counting tree rings is known as", "dendrochronology", "stratigraphy", "radiocarbon dating", "seriation", "Each ring represents a year of growth."],
          ["M", "Which of these writers visited Mali in the fourteenth century?", "Ibn Battuta", "Mungo Park", "Heinrich Barth", "Pacheco Pereira", "He left a detailed description."],
          ["H", "'Telescoping' in oral tradition refers to", "the compression of long periods into a few generations", "the use of telescopes by informants", "the adding of foreign words", "the recording of traditions on tape", "It weakens chronology."],
          ["H", "A historian reduces the weaknesses of oral tradition mainly by", "comparing several versions with other kinds of evidence", "rejecting it altogether", "accepting the royal version", "translating it into English", "Cross-checking improves reliability."],
          ["H", "Written sources for Nigerian history before 1800 are uneven because they", "cover the coast and the Muslim north far better than the interior", "were all destroyed", "were written only by Nigerians", "deal only with religion", "Outsiders visited only certain areas."],
        ],
      },
      {
        week: 3,
        title: "Environment and inter-group relations before 1800",
        subtopics: ["Geographical zones and human activity", "Factors that promoted inter-group relations", "Forms of inter-group relations", "Significance for Nigerian unity"],
        objectives: ["Relate the geographical zones to patterns of settlement and economy", "Explain the factors that promoted inter-group relations", "Describe the forms these relations took", "Assess their significance for modern Nigeria"],
        lesson: {
          title: "Peoples in Contact",
          summary: "Analyse how environment shaped Nigerian societies and how those societies related to one another before 1800.",
          minutes: 40,
          notes: `## Environment and history
Geography does not determine history, but it sets **opportunities and limits**.
- the **savanna** allowed **cavalry**, easy movement and large territorial states (Borno, the Hausa states, Oyo, Nupe)
- the **forest** restricted horses (tsetse fly), favoured **root-crop** farming and produced compact kingdoms (Benin, Ife) and village democracies (the Igbo)
- the **delta and coast** encouraged **fishing, salt and canoe trade**, and city-states
- the **Niger–Benue** system was a highway linking north and south
- **plateaux and hills** (Jos, Adamawa, the Kukuruku hills) served as refuges for small groups
- **minerals**: iron ore widely; tin on the plateau; salt at Bilma, Awe, Uburu and the coast

## Factors that promoted inter-group relations
1. **complementary ecology** — each zone needed the products of the others
2. **rivers and routes**
3. **the search for land, security and opportunity** — migration
4. **religion** — Islam; shared cults and oracles
5. **political expansion** — empires incorporated many peoples
6. **common crafts and technology**

## Forms of inter-group relations
### Trade
- north–south exchange of **natron, cattle, horses, cloth and leather** for **kola, salt, fish and palm oil**
- **Hausa** traders in Nupe, Yorubaland and beyond; **Nupe** and **Igala** on the Niger; **Aro** networks across Igboland; **Ijaw** and **Itsekiri** linking coast and interior; **Awka** smiths and **Nri** priests as travelling specialists
- markets such as **Kano, Katsina, Raba, Onitsha, Idah, Badagry**
### Political and military
- **Borno** and the Hausa states: tribute and war
- **Kwararafa (Jukun)** raids on Kano and Borno
- **Nupe–Oyo** wars and marriages (tradition makes **Sango's** mother Nupe)
- **Benin**'s expansion over parts of Yorubaland, the western Igbo and to **Lagos**; **Benin–Idah** war
- **Igala** influence on the Nsukka Igbo and on Nupe traditions (Tsoede)
### Dynastic and cultural links
- **Ife–Benin–Oyo** traditions (Oranmiyan)
- **Bayajidda** legend tying the Hausa states to Borno and beyond
- spread of **bronze casting**, **title systems** (Benin influence on Onitsha, Aboh) and **masquerades**
- **loan-words**: Hausa in many languages; Yoruba *oba* and Edo *ogie*
### Religious
- **Islam** from Borno and Mali into Hausaland, Nupe and northern Yorubaland
- **oracles** consulted across ethnic lines — Ibini Ukpabi
### Social
**inter-marriage**; settlement of strangers' quarters; adoption and assimilation; refugees.

## Conflict and cooperation
Relations were not always peaceful — there were wars, slave raids and tribute. But conflict itself brought contact, and it existed side by side with exchange.

## Significance
- the peoples of Nigeria were **not strangers** to one another before 1914
- the colonial boundary enclosed groups already linked by centuries of interaction
- this corrects the view that Nigeria is a "mere geographical expression"
- it offers a historical basis for **national integration**.`,
          examples: `**Example 1.** Why did large cavalry states arise in the savanna? *Answer:* Open country and absence of dense tsetse allowed **horses**.

**Example 2.** Give two forms of inter-group relations before 1800. *Answer:* **Trade** and **dynastic links** (also war, religion, marriage).

**Example 3.** Which Igbo groups travelled as specialists? *Answer:* **Awka** smiths, **Nri** priests and **Aro** traders.`,
        },
        questions: [
          ["E", "Large cavalry states developed mainly in the", "savanna", "mangrove swamp", "rain forest", "delta", "Horses could be kept and used there."],
          ["E", "The Aro were best known in pre-colonial times as", "traders with a wide network", "cavalry soldiers", "cattle herders", "bronze casters", "Their oracle gave them influence."],
          ["E", "An important item sent from the north to the south in pre-colonial trade was", "natron", "kola", "palm oil", "sea salt", "It is a kind of potash."],
          ["M", "The itinerant blacksmiths of Igboland came mainly from", "Awka", "Aba", "Owerri", "Abakaliki", "They travelled widely to practise their craft."],
          ["M", "Tradition links the founder of the Nupe kingdom with", "Idah", "Benin", "Kano", "Ife", "Tsoede is said to have come from the Igala capital."],
          ["M", "The Jukun kingdom that raided Kano and Borno was", "Kwararafa", "Kebbi", "Zamfara", "Gobir", "Its later capital was Wukari."],
          ["M", "Benin's influence is seen in the title systems of", "Onitsha and Aboh", "Kano and Katsina", "Borno and Kanem", "Tiv and Idoma", "These riverine Igbo towns adopted kingship."],
          ["H", "The statement that geography 'sets opportunities and limits' means that the environment", "influenced but did not wholly decide how societies developed", "determined every event", "had no effect on history", "prevented all contact", "People made choices within their environment."],
          ["H", "The evidence of pre-colonial inter-group relations challenges the view that", "Nigeria is a mere geographical expression with no shared past", "Nigerians traded before 1800", "Islam reached Hausaland", "rivers were used for transport", "Peoples had long been linked."],
          ["H", "Even wars between pre-colonial states contributed to inter-group relations because they", "brought peoples into contact through tribute, captives and diplomacy", "ended all trade", "isolated each state", "were fought only by foreigners", "Conflict and exchange existed side by side."],
        ],
      },
      {
        week: 4,
        title: "Early centres of civilisation: a comparative study",
        subtopics: ["Nok and the Iron Age", "Igbo-Ukwu", "Ife and Benin", "Comparison and significance"],
        objectives: ["Assess the significance of Nok for the Iron Age in Nigeria", "Assess the evidence from Igbo-Ukwu", "Compare the art and society of Ife and Benin", "Evaluate what the centres reveal about early Nigerian societies"],
        lesson: {
          title: "Reading the Archaeological Record",
          summary: "Compare the early centres of civilisation and what they reveal.",
          minutes: 40,
          notes: `## Nok (c. 1000 BC – AD 300)
- **evidence**: terracotta sculptures; iron furnaces and slag at **Taruga**; stone axes; pottery; settlement sites
- **interpretation**: a farming society in transition from stone to iron, with specialist potters/sculptors and probably ritual centres
- **debates**: whether iron working was **invented locally** or diffused from elsewhere (Meroe or North Africa) — early Nigerian dates support independent or very early development; whether Nok was one "culture" or a shared art style among several peoples
- **significance**: earliest known sculptural tradition south of the Sahara; evidence of early iron; possible ancestor of later traditions

## Daima (c. 550 BC – AD 1150)
A mound near Lake Chad excavated by **Graham Connah**: successive levels show stone and bone tools, then iron (about the fifth century AD), mud houses, cattle keeping, clay figurines, and later trade goods — a record of **continuous occupation** for some 1,800 years.

## Igbo-Ukwu (ninth century AD)
- **evidence**: lost-wax bronzes of exceptional delicacy; hammered copper; some 150,000 beads; textiles; a rich burial
- **interpretation**: a society with **surplus wealth**, specialised craftsmen and a **sacred office** (linked with **Nri**); long-distance trade for beads and perhaps copper
- **debates**: the early date was at first doubted but has been confirmed; analysis shows the metal was largely from **local ores**
- **significance**: an independent metal-working tradition; shows complex institutions among a "stateless" people

## Ife (c. eleventh–fifteenth centuries)
- **evidence**: naturalistic heads and figures in terracotta, copper and brass; potsherd pavements; glass-working crucibles; walls
- **interpretation**: a wealthy urban centre and **sacred kingship**; art served royal and religious ritual
- **significance**: spiritual capital of the Yoruba; technical mastery; influence on Benin

## Benin (from about the thirteenth century)
- **evidence**: brass heads and plaques; ivory; vast earthworks; European descriptions
- **interpretation**: a **centralised state**; art controlled by the **Oba** through guilds and used to record dynastic history
- **significance**: continuity of tradition into the present; documents contact with Europe

## Comparison
| | Nok | Igbo-Ukwu | Ife | Benin |
|---|---|---|---|---|
| medium | terracotta | bronze, copper | terracotta, brass, copper | brass, ivory |
| style | stylised | intricate surface decoration | naturalistic | stylised court style |
| political setting | villages | sacred office | sacred kingship | centralised monarchy |
| date | c. 1000 BC–AD 300 | 9th century | 11th–15th century | 13th century onward |

## What the centres show
1. **antiquity** of settled life and technology in Nigeria
2. **indigenous development** — not the work of outsiders
3. **specialisation** and **surplus**, implying organised society
4. **trade** over long distances
5. **religion and kingship** as patrons of art
6. regional **connections** (Nok–Ife; Ife–Benin)

## Threats
looting, illegal export, urban building and neglect; the debate over **restitution** of the Benin works taken in 1897.`,
          examples: `**Example 1.** Which site shows about 1,800 years of continuous occupation? *Answer:* **Daima**.

**Example 2.** Contrast the art styles of Ife and Benin. *Answer:* Ife is **naturalistic**; Benin is a more **stylised** court style.

**Example 3.** What do the centres prove about early Nigeria? *Answer:* **Indigenous, advanced** technology and organised societies.`,
        },
        questions: [
          ["E", "The Daima mound is located near", "Lake Chad", "the Niger Delta", "Ile-Ife", "Benin City", "It was excavated by Graham Connah."],
          ["E", "The art of Ife is described as", "naturalistic", "abstract only", "written", "imported", "The heads resemble real individuals."],
          ["E", "Benin art was produced under the control of the", "Oba", "Portuguese", "village assembly", "Ooni of Ife", "Guilds worked for the palace."],
          ["M", "The archaeologist who excavated Daima was", "Graham Connah", "Bernard Fagg", "Frank Willett", "Thurstan Shaw", "He recorded a long sequence of occupation."],
          ["M", "Analysis of the Igbo-Ukwu bronzes suggests that the metal came largely from", "local ores", "Portugal", "Egypt", "India", "This supports an indigenous tradition."],
          ["M", "The medium common to Nok and Ife art is", "terracotta", "ivory", "gold", "glass", "This suggests a possible link."],
          ["M", "Glass-working crucibles and potsherd pavements are associated with", "Ife", "Nok", "Daima", "Igbo-Ukwu", "They show an urban craft economy."],
          ["H", "The early iron-working dates from Nok sites are important in the debate over whether", "iron technology developed independently in West Africa", "bronze casting came from Portugal", "the Igbo had kings", "Benin copied Ife", "They are as early as dates from supposed sources."],
          ["H", "Igbo-Ukwu challenges older ideas about the Igbo because it shows", "a wealthy society with a sacred office and long-distance trade", "that the Igbo migrated from Egypt", "that they had no crafts", "that they were ruled from Benin", "A 'stateless' people had complex institutions."],
          ["H", "The existence of specialised artists at all four centres implies that these societies", "produced a surplus that could support non-farmers", "had no farmers", "depended on imported food", "were nomadic", "Specialisation requires surplus."],
        ],
      },
      {
        week: 5,
        title: "State formation: centralised and non-centralised societies",
        subtopics: ["Meaning of centralised and non-centralised states", "Factors in the rise of states", "Features of each type", "Evaluation"],
        objectives: ["Distinguish centralised from non-centralised political systems", "Explain the factors that led to the rise of states", "Describe the features of each type with examples", "Evaluate the strengths and weaknesses of each type"],
        lesson: {
          title: "Kingdoms and Village Democracies",
          summary: "Analyse the two broad types of political organisation in pre-colonial Nigeria.",
          minutes: 40,
          notes: `## Two broad types
- **centralised states**: authority concentrated in a **king** and his officials, with a capital, a hierarchy of chiefs, tribute, courts and often a standing or organised army — **Kanem-Borno, the Hausa states, Oyo, Benin, Nupe, Igala, Jukun**
- **non-centralised (segmentary, acephalous) societies**: no single ruler; authority **dispersed** among lineages, elders, age-grades, title societies and assemblies — most **Igbo**, **Tiv**, **Ibibio**, **Idoma**, **Urhobo**, **Isoko**, many peoples of the Jos Plateau
The **city-states** of the Niger Delta and Hausaland are a third pattern: small but centralised.

## Factors in the rise of centralised states
1. **agricultural surplus** and population growth
2. **iron technology** — tools and weapons
3. **trade** — control of routes and markets gave rulers wealth to reward followers
4. **the horse** and later **firearms**
5. **defence** — the need for protection led people to accept a leader and walled towns
6. **religion and ideology** — sacred kingship; later Islam, with literacy and law
7. **conquest and migration** of ruling groups
8. **able leaders**

## Why some peoples remained non-centralised
- forest or hilly terrain made conquest and cavalry difficult
- land was plentiful; people could move away from a would-be ruler
- strong **egalitarian values**; kinship and religion already ensured order
- no large external threat for long periods
It was a **different** form of organisation, not a failure to develop.

## Features of centralised states
- hereditary kingship, often **sacred**
- councils of chiefs and **kingmakers** who limited the ruler (Oyomesi, Uzama, the Borno council)
- **checks and balances**
- provincial administration and **tribute**
- specialised officials; courts; taxation
- capitals with palaces, markets and craft guilds
- social stratification: royals, nobles, commoners, slaves

## Features of non-centralised societies
- the **lineage** as the basic unit; the village-group as the largest
- leadership by **age and achievement**
- **direct participation** in assemblies; decision by **consensus**
- law enforced by **age-grades**, masquerades, oaths and oracles
- wide **equality**; few hereditary privileges
- flexible, with strong local loyalty

## The Tiv example
The Tiv trace descent from a common ancestor through a **segmentary lineage** system. The basic territory, the **tar**, was managed by elders (**mbatsav**). Leadership was by influence; there was **no chief** until colonial times (the **Tor Tiv**, 1947).

## Evaluation
| | Centralised | Non-centralised |
|---|---|---|
| strengths | large-scale defence and public works; order over wide areas; long-distance trade | participation; freedom; difficult to conquer at one blow |
| weaknesses | tyranny, succession disputes, heavy tribute | slow decisions; hard to unite against a strong invader |

## Under colonial rule
Indirect rule suited centralised states; among non-centralised peoples the British **invented chiefs** — with disastrous results.`,
          examples: `**Example 1.** Give two examples of non-centralised peoples. *Answer:* The **Igbo** and the **Tiv**.

**Example 2.** State two factors in the rise of centralised states. *Answer:* **Control of trade** and **iron technology** (also the horse, religion).

**Example 3.** Give one strength of non-centralised societies. *Answer:* **Wide participation** in decision-making.`,
        },
        questions: [
          ["E", "A society in which authority is dispersed among lineages and elders is", "non-centralised", "centralised", "imperial", "colonial", "It has no single ruler."],
          ["E", "Which of these was a centralised state?", "Benin", "Tiv", "Ibibio", "Idoma", "It was ruled by an Oba."],
          ["E", "In non-centralised societies, decisions were usually reached by", "consensus", "royal decree", "the vote of chiefs only", "written law", "Assemblies discussed until agreement."],
          ["M", "The basic territorial unit of the Tiv was the", "tar", "birni", "wari", "emirate", "Elders managed its affairs."],
          ["M", "A factor that helped rulers build centralised states was control of", "trade routes and markets", "village assemblies", "age-grades", "masquerades", "It gave them wealth to reward followers."],
          ["M", "The Oyomesi and the Uzama are examples of", "councils that limited the power of kings", "age-grades", "trading houses", "craft guilds", "They were kingmakers."],
          ["M", "The office of Tor Tiv was created in", "1947", "1804", "1900", "1960", "The Tiv had no chief before colonial times."],
          ["H", "One reason some peoples remained non-centralised is that", "plentiful land allowed people to move away from would-be rulers", "they had no farming", "they lacked language", "they were ruled by Benin", "Authority could not easily be imposed."],
          ["H", "A weakness of non-centralised societies in the face of colonial conquest was that they", "could not easily unite against a powerful invader", "surrendered at once", "had large standing armies", "depended on cavalry", "Yet each community had to be conquered separately."],
          ["H", "Describing non-centralised societies as a 'different form of organisation, not a failure to develop' means that", "they maintained order effectively without kings", "they were primitive", "they wanted kings", "they had no laws", "Kinship, religion and age-grades kept order."],
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
        title: "Kanem-Borno to 1800",
        subtopics: ["Sources and origins", "Kanem under the early Sayfawa", "The move to Borno and revival", "Borno in the seventeenth and eighteenth centuries"],
        objectives: ["Identify the sources for the history of Kanem-Borno", "Describe Kanem under the early Sayfawa", "Explain the move to Borno and the revival of the state", "Assess Borno in the seventeenth and eighteenth centuries"],
        lesson: {
          title: "The Sayfawa State",
          summary: "Analyse the history of Kanem-Borno up to 1800.",
          minutes: 40,
          notes: `## Sources
- the royal chronicle, the **Diwan** (*girgam*), listing the Mais
- **Ibn Fartuwa**'s accounts of Idris Alooma's campaigns
- Arab geographers (al-Ya'qubi, al-Idrisi, Ibn Sa'id, al-Maqrizi)
- letters between Borno and Egypt and Tripoli
- oral tradition and archaeology (Njimi's site is still uncertain; Ngazargamu's ruins survive)

## Origins
Kanem arose north-east of Lake Chad among the **Zaghawa** and **Kanembu**, at the southern end of the route to the Fezzan. The **Sayfawa** dynasty, claiming descent from **Sayf ibn Dhi Yazan**, ruled from about the ninth century.

## Kanem under the early Sayfawa
- **Mai Umme Jilmi** (c. 1085–1097): conversion to **Islam**; links with North Africa
- **Mai Dunama Dibalemi** (c. 1221–1259): the high point of Kanem
  - a cavalry said to number tens of thousands
  - control of the **Fezzan**, securing the trade route
  - embassy to Tunis; hostel in Cairo
  - tradition says he opened the sacred **mune**, a pre-Islamic talisman of kingship, and that this brought troubles — reflecting tension between Islam and older beliefs
- thereafter: **dynastic quarrels**, revolts of the **Sao**, and long wars with the **Bulala**

## The move to Borno
About **1390**, **Mai Umar ibn Idris** abandoned Njimi and moved west of the lake to **Borno**. A century of instability followed: rival branches of the royal house, powerful office-holders (the **Kaigama**), and no fixed capital.

## Revival
- **Mai Ali Ghaji** (c. 1470–1503): ended the civil wars; reduced the power of the title-holders; built **Birni Ngazargamu**; resumed trade and diplomacy
- **Idris Katakarmabe**: defeated the Bulala and re-entered Njimi
- **Mai Idris Alooma** (c. 1571–1603): military innovation (musketeers, camel corps, boats, fortified camps, scorched-earth tactics); administrative and legal reform (qadis, Shari'ah); mosque-building; pilgrimage; diplomacy with Tripoli, Morocco and the Ottomans. Borno became the leading power of the central Sudan.

## Government
The **Mai**; the council of twelve; great officers with territorial commands — **Kaigama** (south), **Galadima** (west), **Yerima** (north), **Mestrema** (east); royal women — **Magira**, **Gumsu**; fiefs (*chima*) assigned to nobles who lived at court and governed through agents; slave officials loyal to the Mai.

## Economy
trans-Saharan trade via **Bilma–Fezzan–Tripoli**; salt and natron; slaves; horses; local farming, fishing, herding by **Shuwa Arabs** and Fulani; textile and leather crafts.

## The seventeenth and eighteenth centuries
- capable rulers at first (e.g. **Mai Ali ibn Umar**, a noted pilgrim), with Ngazargamu famous for **learning**
- but growing problems: severe **famines**; **Tuareg** pressure from the north and loss of control of Bilma; **Jukun** raids; rebellious vassals; an expedition against **Mandara** ended in defeat (1780s); the Mais became secluded and pious rather than warlike
By 1800 Borno was weakened, on the eve of the **Sokoto Jihad**.

## Significance
continuity of a dynasty for about a thousand years; a centre of **Islamic scholarship**; model of administration for neighbours; long links with the Mediterranean.`,
          examples: `**Example 1.** Under which Mai did Kanem reach its height? *Answer:* **Dunama Dibalemi**.

**Example 2.** Why did the Sayfawa leave Kanem? *Answer:* **Bulala** attacks and dynastic strife.

**Example 3.** Name two problems of Borno in the eighteenth century. *Answer:* **Famine** and **Tuareg** pressure.`,
        },
        questions: [
          ["E", "The royal chronicle of Kanem-Borno is called the", "Diwan", "Kano Chronicle", "Tarikh as-Sudan", "Infaq", "It lists the Mais and their reigns."],
          ["E", "The Sayfawa moved from Kanem to Borno in about", "1390", "1085", "1571", "1808", "Mai Umar ibn Idris led the move."],
          ["E", "The capital built by Mai Ali Ghaji was", "Birni Ngazargamu", "Njimi", "Kukawa", "Bilma", "Its ruins survive in Yobe State."],
          ["M", "The Mai associated with the opening of the sacred mune was", "Dunama Dibalemi", "Umme Jilmi", "Idris Alooma", "Ali Ghaji", "Tradition says it brought troubles."],
          ["M", "Fiefs assigned to nobles in Borno were known as", "chima", "tar", "wari", "ajele", "The holders lived at court."],
          ["M", "The Mai who re-entered Njimi after defeating the Bulala was", "Idris Katakarmabe", "Dunama Dibalemi", "Umar ibn Idris", "Ali ibn Umar", "He was the son of Ali Ghaji."],
          ["M", "The pastoral Arabs who settled in Borno are the", "Shuwa", "Tuareg", "Bulala", "Sao", "They kept cattle."],
          ["H", "The tradition about the mune is best interpreted as reflecting", "tension between Islam and older beliefs about kingship", "a foreign invasion", "the introduction of firearms", "a trade dispute", "The ruler broke with a pre-Islamic symbol."],
          ["H", "Ali Ghaji's building of a permanent capital mattered because it", "ended a century of instability and gave the state a firm centre", "moved the state back to Kanem", "ended the trans-Saharan trade", "introduced Christianity", "He also curbed the title-holders."],
          ["H", "Borno's weakness by 1800 was due largely to", "famine, Tuareg and Jukun pressure and inactive rulers", "conquest by Oyo", "the Atlantic trade", "the loss of Islam", "This left it exposed to the jihad."],
        ],
      },
      {
        week: 2,
        title: "The Hausa states to 1800",
        subtopics: ["Sources and emergence", "Government and society", "Islam and external relations", "The eighteenth century"],
        objectives: ["Identify the sources for Hausa history and explain the emergence of the states", "Analyse government and society in the Hausa states", "Assess the role of Islam and external powers", "Describe conditions in the eighteenth century"],
        lesson: {
          title: "Rival City-States",
          summary: "Analyse the history of the Hausa states to the eve of the jihad.",
          minutes: 40,
          notes: `## Sources
- the **Kano Chronicle** (a king list with notes, compiled in the nineteenth century from older material); the **Song of Bagauda**
- **Leo Africanus** (early sixteenth century)
- writings of **al-Maghili** and, later, of the jihad leaders (who were hostile witnesses)
- oral tradition; archaeology of the city walls (e.g. **Dala hill**, Kano)

## Emergence
The **Bayajidda** legend is a later explanation of unity. Historically, villages around iron-working hills and fertile plains grew into **walled towns** (*birane*) that dominated their districts. The Kano Chronicle names **Bagauda** as first king of Kano (about AD 1000). By the fifteenth century the states were well established.

## Government
- the **Sarki** — sacred in early times; later a Muslim ruler
- **electors** and a council of title-holders: **Galadima, Madawaki, Waziri, Makama, Sarkin Dawaki** (cavalry), **Sarkin Fada**; the queen-mother (**Magajiya** / *Iya*)
- **fief-holders** in the capital governing districts through agents (*jakadu*)
- revenue: land tax (**kudin kasa**), craft taxes, market dues, cattle tax (**jangali**), tolls, tribute and booty
- **slave officials** and eunuchs in the palace
- justice: the Sarki's court and, increasingly, the **alkali**

## Society and economy
- classes: **sarakuna** (rulers), **malamai** (scholars), merchants (**attajirai**), **talakawa** (commoners) and slaves
- intensive farming with manure; cotton and indigo; **dyeing, weaving, leather, iron**
- trade: Kano and Katsina as termini of the Sahara routes; caravans to **Gonja** for kola; **Kurmi** market

## Islam
- **Wangara** scholars under **Yaji** (fourteenth century)
- **Muhammad Rumfa** of Kano (1463–99): palace, market, walls, the **council of nine**; **al-Maghili**'s advice on government
- **Muhammad Korau** and **Ibrahim Sura** of Katsina; Queen **Amina** of Zazzau belongs to the same age of expansion
- Islam was the religion of **court and town**; traditional cults (*iskoki*, *bori*) continued — the **mixing** condemned by later reformers
- **Katsina** became famous for scholarship in the seventeenth and eighteenth centuries (**Dan Marina**, **Dan Masani**)

## External relations
- **Borno** claimed tribute from the Hausa states for long periods
- **Songhai** under Askia Muhammad invaded about 1512–13
- **Kebbi**, under **Kanta Kotal**, threw off Songhai, defeated Borno and dominated western Hausaland in the early sixteenth century
- **Kwararafa** raided Kano, Katsina and Zaria in the seventeenth century
- the **Kano–Katsina** rivalry lasted about a century

## The eighteenth century
- rise of **Zamfara** and then of **Gobir**, which destroyed Zamfara's capital and became the strongest state under **Bawa Jan Gwarzo**
- incessant **wars** and heavy **taxation**; conscription; enslavement of free people
- growing numbers of **Fulani** pastoralists and scholars, subject to *jangali* and other burdens
- a rising class of Muslim scholars critical of the rulers
These conditions prepared the ground for the **jihad of 1804**.

## Assessment
The Hausa states achieved prosperity, urban life and a common culture, but **political disunity** was their abiding weakness.`,
          examples: `**Example 1.** What is the main written source for Kano's history? *Answer:* The **Kano Chronicle**.

**Example 2.** Which state dominated western Hausaland under Kanta? *Answer:* **Kebbi**.

**Example 3.** Which state was strongest in the late eighteenth century? *Answer:* **Gobir**.`,
        },
        questions: [
          ["E", "According to the Kano Chronicle, the first king of Kano was", "Bagauda", "Rumfa", "Yaji", "Kanta", "He is dated to about AD 1000."],
          ["E", "The land tax in the Hausa states was called", "kudin kasa", "jangali", "jizya", "comey", "Jangali was the cattle tax."],
          ["E", "The ruler of Kebbi who defeated both Songhai and Borno was", "Kanta", "Amina", "Korau", "Bawa", "He ruled in the early sixteenth century."],
          ["M", "The agents through whom fief-holders governed their districts were the", "jakadu", "ilari", "ajele", "eso", "The fief-holders themselves lived in the capital."],
          ["M", "The Hausa state that became the strongest in the late eighteenth century was", "Gobir", "Daura", "Rano", "Biram", "Bawa Jan Gwarzo was its famous king."],
          ["M", "Katsina in the seventeenth and eighteenth centuries was especially noted for", "Islamic scholarship", "naval power", "bronze casting", "gold mining", "Dan Marina and Dan Masani taught there."],
          ["M", "The traditional spirit cult that continued alongside Islam in Hausaland is", "bori", "ekpe", "ogboni", "ozo", "Reformers condemned such mixing."],
          ["H", "The writings of the jihad leaders must be used with caution as sources for the Hausa states because they", "were written by opponents who wished to justify their revolt", "were composed in Hausa", "contain no dates", "ignore religion", "They are hostile witnesses."],
          ["H", "The Bayajidda legend is best understood by historians as", "a later attempt to explain the unity and common culture of the Hausa", "an exact record of events", "a Portuguese invention", "a story about Borno only", "It links states that were politically separate."],
          ["H", "The social conditions that favoured the jihad in the eighteenth century included", "constant wars, heavy taxation and grievances of scholars and herders", "peace and low taxes", "the absence of Islam", "the decline of trade", "Many groups had reasons to support change."],
        ],
      },
      {
        week: 3,
        title: "Oyo and Benin: a comparative study",
        subtopics: ["Sources and origins", "Political structures compared", "Military and economic bases", "Causes of decline compared"],
        objectives: ["Identify the sources and origins of Oyo and Benin", "Compare their political structures", "Compare their military and economic bases", "Compare the causes of their decline"],
        lesson: {
          title: "Two Forest-Fringe Empires",
          summary: "Compare the Oyo Empire and the Benin Kingdom.",
          minutes: 40,
          notes: `## Sources
- **Oyo**: oral traditions recorded by **Samuel Johnson** (*The History of the Yorubas*); palace historians; European reports from the coast; archaeology of Oyo-Ile
- **Benin**: traditions recorded by **Jacob Egharevba** (*A Short History of Benin*); the art; Portuguese and Dutch accounts (**Pacheco Pereira**, **Dapper**)

## Origins
Both trace their dynasties to **Ife** through **Oranmiyan** — a tradition expressing ritual kinship. Oyo arose in the **northern savanna** of Yorubaland; Benin in the **forest** west of the Niger.

## Political structures
| | Oyo | Benin |
|---|---|---|
| ruler | **Alaafin** — sacred but constitutionally limited | **Oba** — sacred and politically stronger |
| succession | chosen by the **Oyomesi** from royal candidates; the **Aremo** originally died with his father | **primogeniture** — eldest son (from Ewuare's time) |
| council | **Oyomesi** (seven, led by the **Bashorun**) | **Uzama**; **Eghaevbo n'Ore** (town chiefs, led by the **Iyase**); **Eghaevbo n'Ogbe** (palace chiefs) |
| checks | Oyomesi could force the Alaafin's suicide; **Ogboni** checked the Oyomesi | rival orders of chiefs balanced each other; titles in the Oba's gift |
| army | **Are-Ona-Kakanfo** and the Eso | war chiefs: **Iyase, Ezomo** |
| provinces | **Ajele** residents; **ilari** messengers; tribute; Bere festival | **Enogie** (district chiefs); tribute; royal agents |
**Comment:** Oyo's system divided power so finely that a strong Bashorun (**Gaha**) could dominate the state; Benin's system gave the Oba greater control but led to palace intrigue and civil wars over succession.

## Military bases
- **Oyo**: **cavalry**, effective in the savanna; dependent on horses imported from the north; expansion south-west through the open "Dahomey gap" to the coast
- **Benin**: **infantry** suited to forest warfare; war canoes on the creeks; firearms obtained from Europeans but tightly controlled

## Economic bases
- **Oyo**: farming; weaving and other crafts; middleman trade between the Niger and the coast; in the eighteenth century the **slave trade** through Badagry and Porto Novo; tribute from **Dahomey**
- **Benin**: farming; guild crafts; trade with Europeans in **pepper, ivory, cloth** — and slaves, though for long periods the Oba restricted their export; royal **monopoly** over key goods

## Expansion
- Oyo at its height (c. 1650–1790): most of Yorubaland, Dahomey, parts of Nupe and Borgu
- Benin at its height (c. 1450–1600): from **Lagos** to the Niger; Ekiti, Owo, western Igbo

## Decline
| Oyo | Benin |
|---|---|
| constitutional breakdown — Gaha; later Alaafin–chiefs conflict | succession disputes and civil wars (17th–18th centuries) |
| neglect of the army; revolt of the Kakanfo **Afonja** at Ilorin (c. 1817) | loss of outlying provinces |
| revolts of the Egba and Dahomey | rise of Itsekiri and others as coastal middlemen |
| Fulani pressure from Ilorin; loss of horse supply | shift of trade away from Ughoton |
| capital abandoned c. 1835 | British conquest, 1897 |

## Similarities
dynastic link with Ife; sacred kingship limited by chiefs; tribute empires; craft specialisation; involvement in Atlantic trade.

## Differences
environment and military system; rule of succession; degree of royal control; manner of collapse — Oyo from **within** in the early nineteenth century, Benin by **conquest** at its end.`,
          examples: `**Example 1.** How did succession differ in Oyo and Benin? *Answer:* Oyo: **chosen by the Oyomesi**; Benin: **primogeniture**.

**Example 2.** What was the basis of Oyo's military power? *Answer:* **Cavalry**.

**Example 3.** How did each state finally fall? *Answer:* Oyo collapsed **from within** (c. 1835); Benin was **conquered** by the British (1897).`,
        },
        questions: [
          ["E", "The classic history of the Yoruba was written by", "Samuel Johnson", "Jacob Egharevba", "Kenneth Dike", "Samuel Crowther", "It is The History of the Yorubas."],
          ["E", "Jacob Egharevba is known for recording the traditions of", "Benin", "Oyo", "Kano", "Borno", "He wrote A Short History of Benin."],
          ["E", "Oyo's army was strongest in", "cavalry", "war canoes", "artillery", "archers on camels", "It operated best in the savanna."],
          ["M", "The Benin war chief who, with the Iyase, led the army was the", "Ezomo", "Edaiken", "Enogie", "Esama", "He was one of the Uzama."],
          ["M", "Oyo received tribute in the eighteenth century from", "Dahomey", "Benin", "Borno", "Kano", "It had been conquered about 1730–48."],
          ["M", "The rule of succession in Benin from Ewuare's time was", "primogeniture", "election by the Uzama from many princes", "rotation among ruling houses", "matrilineal", "The eldest son succeeded."],
          ["M", "Oyo expanded south-westwards to the coast mainly through", "the open country of the Dahomey gap", "the Niger Delta creeks", "the Benin forest", "the Jos Plateau", "Cavalry could operate there."],
          ["H", "The career of Bashorun Gaha shows that Oyo's constitution", "could be exploited by an over-mighty chief", "made the Alaafin absolute", "had no checks", "was copied from Benin", "The balance of power broke down."],
          ["H", "A key difference in the collapse of the two states is that", "Oyo broke up from internal crisis while Benin fell to foreign conquest", "both were conquered by the Fulani", "Benin collapsed first", "neither had succession problems", "Oyo-Ile was abandoned long before 1897."],
          ["H", "The tradition that both dynasties descend from Oranmiyan is best seen as", "an expression of ritual and cultural kinship between the kingdoms", "proof that Oyo ruled Benin", "a Portuguese record", "a colonial invention", "It links both to Ife."],
        ],
      },
      {
        week: 4,
        title: "Non-centralised societies: the Igbo, Ibibio and Tiv",
        subtopics: ["Igbo institutions", "Nri and the Aro", "The Ibibio and their neighbours", "The Tiv"],
        objectives: ["Analyse the institutions of Igbo government", "Explain the roles of Nri and the Aro", "Describe the political organisation of the Ibibio", "Describe the political organisation of the Tiv"],
        lesson: {
          title: "Order without Rulers",
          summary: "Analyse the political systems of the Igbo, Ibibio and Tiv before 1800.",
          minutes: 40,
          notes: `## The Igbo
### Structure
family (*ezi*) → lineage (*umunna*) → village → **village-group** (the widest political unit). No authority existed above the village-group.
### Institutions
- **lineage heads** holding the *ofo*
- the **council of elders**
- the **village assembly** — open debate; consensus
- **age-grades** — executive and police functions; public works; defence
- **title societies** (Ozo, Nze) — achievement, wealth and moral standing
- **masquerade societies** (*mmanwu*)
- **priests** of Ala; diviners (*dibia*); **oracles**
- **women's organisations** — *umuada* and *inyemedi*; the **Omu** (women's leader) in western Igbo towns
### Variations
- **monarchies**: Onitsha, Aboh, Oguta, Osomari; **Nri**
- **Cross River Igbo** (Ohafia, Abam, Afikpo): strong age-set and warrior organisation; some matrilineal features
- **presidential** role of the oldest man in some communities; rule by titled men in others
### Values
achievement, equality of opportunity, republicanism: "*Igbo enwe eze*".

## Nri
A **sacred kingship** without military power. The **Eze Nri** and his agents (recognisable by facial marks, *ichi*) travelled across Igboland to **cleanse abominations**, make peace, crown title-holders and regulate the **yam** and the **calendar**. Its influence was ritual and moral — and is linked with the **Igbo-Ukwu** finds. It declined with the slave trade and the rise of the Aro.

## The Aro
From **Arochukwu**, where Igbo, Ibibio and Akpa elements combined:
- the **Ibini Ukpabi** oracle — a supreme court of appeal; those "eaten" by the oracle were often sold as slaves
- **trading colonies** along the main routes and great fairs (**Bende, Uburu, Uzuakoli**)
- alliances with warrior groups (**Abam, Ohafia, Edda**) who enforced their interests
- the Aro supplied slaves and later palm produce to the delta states
The Aro system was a **commercial-religious network**, not a territorial empire.

## The Ibibio (with the Annang and Efik)
- organised in **villages** grouped into clans; the head was the **Obong**; elders formed the council
- the **Ekpo** society (ancestral spirits) enforced law; the **Idiong** society of diviners; the women's **Ebre** society
- among the **Efik** of Old Calabar the **Ekpe** (Leopard) society became a governing body of merchants, with grades bought by payment
- the *nsibidi* signs — an indigenous system of writing used by Ekpe members

## The Tiv
- all Tiv claim descent from one ancestor, **Tiv**, through two sons — **Ichongo** and **Ipusu**; society is a pyramid of **segments** that unite or oppose according to genealogical distance
- the **tar**: the land of a lineage segment
- elders with *tsav* (mystical power) — the **mbatsav** — safeguarded the land and settled disputes
- leadership by men of prestige (**or ya**, compound head); **age-sets**; exchange marriage; no markets tax, no tribute, no chief
- farming of **yams** and grains; the expansion of the Tiv across the Benue valley

## Common features
kinship as the frame of politics; religion as sanction; diffusion of authority; wide participation; small scale.

## Significance
These systems show that ordered, prosperous societies existed without kings — and they explain later resistance to imposed chiefs.`,
          examples: `**Example 1.** What was the widest political unit among most Igbo? *Answer:* The **village-group**.

**Example 2.** How did Nri exercise influence? *Answer:* Through **ritual authority** — cleansing abominations and conferring titles.

**Example 3.** What is nsibidi? *Answer:* An **indigenous system of signs/writing** used in the Cross River area.`,
        },
        questions: [
          ["E", "The Igbo expression 'Igbo enwe eze' means", "the Igbo have no king", "the Igbo love trade", "the Igbo are farmers", "the Igbo are one", "It expresses their republican values."],
          ["E", "The governing society among the Efik of Old Calabar was", "Ekpe", "Ozo", "Ogboni", "Bori", "It is the Leopard society."],
          ["E", "The indigenous sign-writing of the Cross River area is", "nsibidi", "ajami", "ichi", "ofo", "Ekpe members used it."],
          ["M", "The Eze Nri's authority over Igbo communities was mainly", "ritual", "military", "commercial", "colonial", "His agents cleansed abominations."],
          ["M", "The great fairs of the Aro trading network included", "Bende and Uzuakoli", "Kano and Katsina", "Badagry and Lagos", "Idah and Raba", "Slaves and goods were exchanged there."],
          ["M", "The warrior groups allied to the Aro included the", "Abam and Ohafia", "Egba and Ijebu", "Tuareg and Shuwa", "Nupe and Igala", "They enforced Aro interests."],
          ["M", "Among the Tiv, the elders who safeguarded the land were the", "mbatsav", "ndichie", "oyomesi", "uzama", "They possessed tsav."],
          ["H", "The Aro system is best described as", "a commercial and religious network rather than a territorial state", "a centralised empire with provinces", "a military republic", "a caliphate", "Its power rested on the oracle and trade."],
          ["H", "The Tiv segmentary system worked by", "lineage segments uniting or opposing according to their genealogical closeness", "obedience to a divine king", "election of a president", "rule by a merchant society", "There was no permanent central authority."],
          ["H", "The decline of Nri's influence was connected with", "the growth of the slave trade and the rise of the Aro", "the Sokoto Jihad", "the Portuguese at Benin", "the Yoruba wars", "Violence undermined its peaceful ritual role."],
        ],
      },
      {
        week: 5,
        title: "The Niger Delta and the Niger–Benue states to 1800",
        subtopics: ["The delta peoples and the rise of city-states", "Itsekiri and the western delta", "Nupe and Igala", "The Jukun"],
        objectives: ["Explain the rise of the delta city-states", "Describe the Itsekiri kingdom and its neighbours", "Describe the Nupe and Igala kingdoms", "Describe the Jukun kingdom"],
        lesson: {
          title: "River and Coast",
          summary: "Analyse the states of the Niger Delta and the Niger–Benue area before 1800.",
          minutes: 40,
          notes: `## The eastern delta
### Before the Atlantic trade
**Ijaw** fishing villages, each made up of lineages (**wari**, Houses) under elders, with a village head (**amanyanabo**) and assembly; exchange of **fish and salt** for foodstuffs from the hinterland.
### Transformation
From the sixteenth century, overseas trade — at first in slaves — turned villages into **city-states**: **Bonny, Elem Kalabari, Nembe (Brass), Okrika**.
- the amanyanabo became a **king** with wealth and firearms: e.g. **Pepple (Perekule)** of Bonny, **Amakiri** of Kalabari (eighteenth century)
- the lineage became the **canoe House**: a trading and war corporation that absorbed slaves and strangers as members; headship by ability
- **Ekine (Sekiapu)** society — a masquerade and cultural society that spread common values and acculturated newcomers
- the states controlled defined **trading empires** up the rivers and defended them against rivals

## The western delta
- the **Itsekiri** kingdom of **Warri** (*Iwere*): tradition traces its founder, **Ginuwa**, to a Benin prince (fifteenth century). The king is the **Olu**; a council of chiefs (**Ojoye**) led by the **Ologbotsere**.
- early contact with the **Portuguese**: Catholic missions; several Christian Olus in the sixteenth–seventeenth centuries; a prince educated in Portugal
- the Itsekiri were middlemen between Europeans and the **Urhobo** and **Isoko** producers, who were organised in village republics with elders and age-grades
- the **western Ijaw** remained largely non-centralised

## Nupe
- on both banks of the middle Niger
- **Tsoede (Edegi)** — son of an Attah of Igala by a Nupe woman according to tradition — fled Idah with insignia of kingship (a bronze canoe, chains, bells), conquered the Nupe chiefdoms and founded the kingdom (dated variously to the fifteenth–sixteenth century); bronzes at **Tada** and **Jebba** are associated with him
- the **Etsu Nupe**; titled nobility; capital moved several times (**Gbara**, later **Raba**)
- wars and alliances with **Oyo**; Islam accepted by the court under **Etsu Jibrilu** (eighteenth century)
- economy: riverine trade; crafts — **brass, glass, weaving, canoe-building**; organised **guilds**

## Igala
- capital **Idah**, at a strategic point controlling the Niger below the confluence
- the **Attah** — a sacred king; dynasties linked by tradition to **Benin**, **Jukun** and Yoruba; **Ayegba om'Idoko** is remembered for freeing Igala from Jukun overlordship (the legend of **Inikpi**, his daughter, who was sacrificed)
- the **Igala Mela** — nine kingmakers, representing the original landowners; the **Achadu**, their head, as prime minister
- war with **Benin** (early sixteenth century) — Benin's victory under Esigie
- influence over the **Nsukka Igbo** and **Idoma**

## The Jukun (Kwararafa)
- a confederacy in the Benue valley, strongest in the **sixteenth and seventeenth centuries**, when it raided **Kano, Katsina, Zaria** and **Ngazargamu**
- the **Aku Uka** at **Wukari** (after the earlier capital declined): a **divine king** whose health was bound up with the fertility of the land; he lived in seclusion and was governed by taboos
- officials: the **Abo Achuwo** (chief minister) and others
- power was more **ritual** than military by the eighteenth century

## Themes
the effect of **trade** on political change; the importance of **rivers**; sacred kingship; inter-relations — Benin with Itsekiri and Igala; Igala with Nupe and Jukun.`,
          examples: `**Example 1.** How did the Atlantic trade change the delta lineage? *Answer:* It became the **canoe House** — a trading and war corporation open to slaves and strangers.

**Example 2.** Who is the traditional founder of the Itsekiri kingdom? *Answer:* **Ginuwa**, a Benin prince.

**Example 3.** Who were the Igala Mela? *Answer:* The **nine kingmakers** of Igala.`,
        },
        questions: [
          ["E", "The Itsekiri king bears the title", "Olu", "Attah", "Etsu", "Aku", "His kingdom is Warri."],
          ["E", "The capital of the Igala kingdom is", "Idah", "Wukari", "Raba", "Bida", "It stands on the Niger."],
          ["E", "The Jukun capital in later times was", "Wukari", "Idah", "Gbara", "Nembe", "The Aku Uka rules from there."],
          ["M", "The traditional founder of the Itsekiri kingdom was", "Ginuwa", "Tsoede", "Ayegba", "Amakiri", "He is said to have been a Benin prince."],
          ["M", "The nine kingmakers of Igala are known as the", "Igala Mela", "Oyomesi", "Uzama", "Ojoye", "The Achadu is their head."],
          ["M", "The cultural society that helped absorb strangers into delta communities was", "Ekine", "Ekpe", "Ozo", "Ogboni", "It is also called Sekiapu."],
          ["M", "Bronzes at Tada and Jebba are associated in tradition with", "Tsoede", "Ginuwa", "Ewuare", "Oduduwa", "He is said to have brought them from Idah."],
          ["H", "The transformation of delta fishing villages into city-states was caused mainly by", "the growth of overseas trade", "the Sokoto Jihad", "the introduction of cavalry", "migration from Borno", "Wealth and firearms strengthened the rulers."],
          ["H", "The power of the Aku Uka of the Jukun by the eighteenth century rested chiefly on", "ritual authority as a divine king", "a large cavalry", "control of the sea trade", "written law", "His well-being was tied to the land's fertility."],
          ["H", "Idah's importance in pre-colonial Nigeria derived largely from its", "strategic control of the Niger below the confluence", "gold mines", "position on the coast", "walls built by the Portuguese", "It linked northern and southern trade."],
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
        title: "Ancient Ghana",
        subtopics: ["Sources and origin", "Government", "Economy", "Decline and fall"],
        objectives: ["Identify the sources for the history of Ghana and describe its origin", "Describe the government of Ghana", "Explain the economic basis of the empire", "Explain the causes of its decline and fall"],
        lesson: {
          title: "The Land of Gold",
          summary: "Analyse the rise, organisation and fall of the empire of ancient Ghana.",
          minutes: 40,
          notes: `## Sources
Arabic writers — **al-Fazari** (eighth century, the first to mention it as "the land of gold"), **al-Bakri** of Cordoba (**1067–68**, the fullest account, compiled from travellers), **al-Idrisi**; oral traditions of the **Soninke**; archaeology at **Kumbi Saleh**.

## Location and origin
Ancient Ghana lay in the **Sahel**, between the upper Senegal and Niger rivers, in what is now south-eastern **Mauritania** and western **Mali** — far from modern Ghana. Its people were the **Soninke**, who called their state **Wagadu**. "**Ghana**" was a royal title meaning **war chief**; the king was also **Kaya Maghan**, "lord of the gold". The state existed by about the **fifth–eighth century AD** and reached its height in the **tenth and eleventh centuries**.

### Factors in its rise
- position between the **gold** of the south and the **salt** of the Sahara
- **iron** weapons against neighbours using stone or ebony
- **horses**
- able rulers and a sacred kingship

## Government
- the king was **semi-divine**, head of the traditional religion, supreme judge and commander
- succession was **matrilineal** — to the **son of the king's sister**
- a court of officials, many of them **Muslims** who served as ministers, treasurer and interpreters
- provinces under governors; **vassal kings** paid tribute and sent their **sons to court** as hostages
- al-Bakri describes King **Tunka Manin** (succeeded 1063) holding audience in a domed pavilion, with guards bearing gold-mounted swords and dogs with gold collars
- the capital consisted of **two towns** about ten kilometres apart: the **royal town** (al-Ghaba, with the palace and sacred grove) and the **Muslim merchants' town** with **twelve mosques**
- an army said to number **200,000**, including **40,000 archers**

## Economy
- **trans-Saharan trade**: Ghana did not own the goldfields (**Bambuk/Wangara**) but controlled access to them; salt came from **Taghaza** through **Awdaghust**
- **taxation**: one dinar of gold on each donkey-load of **salt** entering and **two** on each leaving; duties on copper and other goods
- **gold policy**: all **nuggets** belonged to the king; people could keep **gold dust** — this prevented a fall in the value of gold
- **silent (dumb) barter** was said to be used with the gold producers
- farming, herding, fishing; crafts in iron, cloth and leather

## Islam
Tolerated and employed, but the king and most people kept their own religion until after 1076.

## Decline and fall
1. the **Almoravids** — Sanhaja Berbers seeking to control the trade and impose strict Islam — took Awdaghust (1054–55) and, under **Abu Bakr ibn Umar**, seized the capital about **1076**
2. disruption of trade routes; opening of new goldfields (**Bure**) beyond Ghana's control
3. **revolts** of vassal states; loss of tribute
4. environmental stress — overgrazing and drying of the Sahel
5. **Sumanguru Kante** of **Sosso** conquered the remnant in about **1203**
6. **Sundiata** of Mali destroyed Sosso (1235) and absorbed Ghana (about 1240)

## Significance
the first great empire of the Western Sudan; a model of wealth from trade; early coexistence of Islam and African religion.`,
          examples: `**Example 1.** Who were the people of ancient Ghana? *Answer:* The **Soninke**.

**Example 2.** How did the king prevent gold losing its value? *Answer:* All **nuggets** belonged to him; people kept only **dust**.

**Example 3.** Who captured the capital in about 1076? *Answer:* The **Almoravids**.`,
        },
        questions: [
          ["E", "The people who founded ancient Ghana were the", "Soninke", "Mandinka", "Songhai", "Akan", "They called their state Wagadu."],
          ["E", "The fullest Arabic account of ancient Ghana was written by", "al-Bakri", "Ibn Battuta", "Leo Africanus", "as-Sa'di", "He wrote in 1067–68."],
          ["E", "Ancient Ghana was located in present-day", "Mauritania and Mali", "Ghana", "Nigeria", "Senegal and Gambia only", "It was far from modern Ghana."],
          ["M", "Succession to the throne of ancient Ghana passed to the king's", "sister's son", "eldest son", "brother", "chief minister", "It was matrilineal."],
          ["M", "The title 'Kaya Maghan' means", "lord of the gold", "war chief", "commander of the faithful", "king of the sky", "'Ghana' meant war chief."],
          ["M", "The king of Ghana described by al-Bakri in 1067–68 was", "Tunka Manin", "Sumanguru", "Sundiata", "Mansa Musa", "He succeeded in 1063."],
          ["M", "On each load of salt leaving the kingdom the king collected", "two dinars of gold", "one dinar of gold", "ten dinars", "nothing", "One dinar was paid on entry."],
          ["H", "Ghana's wealth is best explained by its", "control of the trade between the goldfields and the salt mines", "ownership of the Bambuk mines", "sea trade with Europe", "large-scale manufacturing", "It taxed goods passing through."],
          ["H", "The opening of the Bure goldfields weakened Ghana because", "the new source lay outside its control", "gold lost all value", "the Almoravids owned Bure", "salt was found there", "Trade shifted southwards towards Mali."],
          ["H", "The practice of keeping vassal kings' sons at court served mainly to", "ensure the loyalty of their fathers", "educate them in Islam", "train them as traders", "supply the army", "They were in effect hostages."],
        ],
      },
      {
        week: 2,
        title: "The Mali Empire",
        subtopics: ["Origin and Sundiata", "Mansa Musa", "Government and economy", "Decline"],
        objectives: ["Describe the origin of Mali and the achievements of Sundiata", "Assess the reign of Mansa Musa", "Describe the government and economy of Mali", "Explain the decline of Mali"],
        lesson: {
          title: "The Empire of the Mandinka",
          summary: "Analyse the rise, organisation and decline of the Mali Empire.",
          minutes: 40,
          notes: `## Sources
the **epic of Sundiata** preserved by **griots** (*jeli*); **Ibn Battuta** (visited 1352–53); **al-Umari** (on Mansa Musa in Cairo); **Ibn Khaldun**; the **Catalan Atlas** (1375), which shows Mansa Musa holding a gold nugget.

## Origin
Mali grew from the small **Mandinka (Malinke)** state of **Kangaba** on the upper Niger, near the **Bure** goldfields. Its rulers had long been Muslim.

## Sundiata Keita (c. 1230–1255)
- the epic tells how the crippled prince rose to free his people from **Sumanguru Kante** of **Sosso**
- he defeated Sumanguru at the **battle of Kirina (about 1235)**
- he took the remnants of **Ghana** (1240) and the goldfields of Bambuk and Bure
- established the capital at **Niani**
- organised the clans, assigning hereditary occupations; tradition credits him with a charter of rights and duties (**Kurukan Fuga**)
- promoted **farming** — cotton, rice, groundnuts — as well as trade
- title: **Mansa** (emperor)

## Mansa Musa (c. 1312–1337)
- extended the empire to its greatest size — from the **Atlantic** to beyond **Gao**, including **Timbuktu**, **Walata** and the salt mines of **Taghaza**
- **pilgrimage of 1324**: a caravan of thousands, with camels laden with gold; his generosity in **Cairo** lowered the value of gold there for years; Mali became known across the Mediterranean world
- brought back scholars, books and the architect **as-Sahili**, who introduced burnt-brick building — the **Djinguereber** mosque at Timbuktu and a palace
- encouraged **Islamic learning**; sent students to **Fez**; Timbuktu and **Jenne** grew as centres of scholarship
- exchanged embassies with **Morocco** and **Egypt**
- maintained **justice and security**

## Mansa Sulayman (c. 1341–1360)
Careful administrator; received **Ibn Battuta**, who praised the people's **justice**, the **safety** of travellers, respect for property of dead strangers, punctual prayers and Qur'an learning — but disliked some court customs and the freedom of women.

## Government
- the Mansa as supreme ruler, with a council of chiefs and griots as spokesmen
- three kinds of territory: the **core** ruled directly; **provinces** under governors (**farba / farin**); **vassal kingdoms** whose rulers kept their thrones and paid tribute
- a strong **army** with cavalry commanders; royal slaves in high office
- revenue: taxes on trade, tribute, gold, royal farms

## Economy
gold of **Bure and Bambuk**; salt from Taghaza; copper from Takedda; kola from the forest; agriculture on the Niger flood-plain; **cowries** and gold dust as currency; Wangara merchants.

## Decline
1. **succession disputes** — no fixed rule; palace coups after Sulayman
2. the **size** of the empire and slow communications
3. revolts of subject peoples — **Songhai (Gao)** broke away
4. attacks: the **Mossi** raided Timbuktu; the **Tuareg** took Timbuktu (1433); the **Fulani** of Tekrur
5. the rise of **Songhai** under Sunni Ali, who took Timbuktu (1468) and Jenne
6. loss of control of trade routes; later, Portuguese trade on the coast
By the sixteenth century Mali had shrunk to Kangaba.

## Legacy
the spread of **Mande** language and culture; Islamic scholarship; the griot tradition; a memory of imperial unity.`,
          examples: `**Example 1.** At which battle did Sundiata defeat Sumanguru? *Answer:* **Kirina**, about 1235.

**Example 2.** What was the result of Mansa Musa's stay in Cairo? *Answer:* The **value of gold fell** because he gave away so much.

**Example 3.** Give one cause of Mali's decline. *Answer:* **Succession disputes** (or the rise of Songhai).`,
        },
        questions: [
          ["E", "The founder of the Mali Empire was", "Sundiata Keita", "Mansa Musa", "Sunni Ali", "Tunka Manin", "He defeated Sumanguru of Sosso."],
          ["E", "The title of the ruler of Mali was", "Mansa", "Askia", "Mai", "Ghana", "It means emperor."],
          ["E", "The capital of Mali was", "Niani", "Gao", "Kumbi Saleh", "Kumasi", "Sundiata established it."],
          ["M", "The oral historians who preserved the epic of Sundiata are the", "griots", "arokin", "ilari", "alkali", "They are also called jeli."],
          ["M", "The Mansa who received Ibn Battuta in 1352–53 was", "Sulayman", "Musa", "Sundiata", "Uli", "He was a careful administrator."],
          ["M", "The architect who built the Djinguereber mosque at Timbuktu was", "as-Sahili", "al-Maghili", "al-Bakri", "Leo Africanus", "Mansa Musa brought him from his pilgrimage."],
          ["M", "The small state from which Mali grew was", "Kangaba", "Sosso", "Tekrur", "Awdaghust", "It lay near the Bure goldfields."],
          ["H", "Mansa Musa's pilgrimage was significant for Mali chiefly because it", "made the empire known abroad and strengthened learning and trade links", "ended the gold trade", "led to war with Egypt", "caused the fall of Timbuktu", "Scholars and architects returned with him."],
          ["H", "A fundamental weakness of the Mali Empire was", "the lack of a fixed rule of succession", "its small size", "the absence of gold", "the rejection of Islam", "Disputes followed the death of strong rulers."],
          ["H", "Mali's system of leaving vassal rulers on their thrones had the advantage of", "governing a vast area cheaply, but the risk of revolt when the centre weakened", "ending all tribute", "removing the need for an army", "preventing trade", "Songhai later broke away."],
        ],
      },
      {
        week: 3,
        title: "The Songhai Empire",
        subtopics: ["Origin and Sunni Ali", "Askia Muhammad", "Government, economy and learning", "The Moroccan invasion and fall"],
        objectives: ["Describe the origin of Songhai and the conquests of Sunni Ali", "Assess the reforms of Askia Muhammad", "Describe government, economy and learning in Songhai", "Explain the fall of Songhai"],
        lesson: {
          title: "The Greatest Empire of the Western Sudan",
          summary: "Analyse the rise, organisation and fall of the Songhai Empire.",
          minutes: 40,
          notes: `## Sources
the Timbuktu chronicles — ***Tarikhus-Sudan*** (as-Sa'di) and ***Tarikhul-Fattash*** (Ka'ti family); **Leo Africanus** (visited about 1510); the replies of **al-Maghili** to Askia Muhammad.

## Origin
The **Songhai** lived along the middle Niger as farmers, hunters and fishermen (**Sorko**). Their capital moved from **Kukiya** to **Gao**, an important trade terminus. The early **Dia (Za)** rulers accepted Islam about 1010. Gao was subject to **Mali** for a time, then regained independence under the **Sunni** dynasty.

## Sunni Ali (1464–1492)
- a brilliant soldier who "was always victorious"; he built the empire by conquest
- used **cavalry** and a **river fleet** of war canoes on the Niger
- captured **Timbuktu** from the Tuareg (**1468**) and **Jenne** after a long siege (about 1473)
- repelled the **Mossi** and Fulani
- divided the conquests into provinces under governors
- he was a nominal Muslim who respected traditional religion; he **persecuted the scholars of Timbuktu**, whom he suspected of siding with the Tuareg — hence the hostility of the chronicles
- drowned in 1492; his son **Sunni Baru** refused to embrace orthodox Islam fully

## Askia Muhammad Ture (1493–1528)
A general of Soninke origin who overthrew Sunni Baru and founded the **Askia** dynasty.
- **pilgrimage (1496–97)**: gained the title of **Caliph** of the Western Sudan
- **expansion**: to **Taghaza** in the north, into **Hausaland** (Katsina, Zaria, Kano paid tribute for a time) and **Air (Agades)**
- **administration**:
  - provinces under governors (**-koi**, **-fari**): the **Kurmina-fari** (west) and **Dendi-fari** (south-east) were the greatest
  - central ministers: **hi-koi** (commander of the fleet), **fari-mondio** (chief tax collector), **balama** (military commander), **korey-farma** (in charge of foreigners), **hari-farma** (waters and fishing)
- a **professional standing army** in place of general levies
- **qadis** in the main towns; Islamic law; consulted al-Maghili and as-Suyuti
- **standard weights and measures**; market inspectors
- patron of **learning**
He went blind and was deposed by his son in 1528.

## Later Askias
Family quarrels followed; **Askia Dawud (1549–1582)** restored stability and prosperity — the last great reign.

## Economy and learning
- trade in **gold, salt, slaves, kola, cloth, horses**; Gao, Timbuktu and Jenne as great markets
- royal **estates** worked by slaves producing rice and grain
- **Timbuktu**: the **Sankore** quarter — scholars taught law, theology, grammar, astronomy; families of jurists (the **Aqit**); **Ahmad Baba**; a flourishing book trade

## The Moroccan invasion
**Sultan Ahmad al-Mansur** of Morocco coveted the gold trade and the **Taghaza** salt mines. In **1591** an army of about 4,000 — many of them Spanish Muslim and renegade musketeers — under **Judar Pasha** crossed the Sahara. At **Tondibi** their **firearms** routed the far larger Songhai army of **Askia Ishaq II**. Gao, Timbuktu and Jenne were occupied.

## Why Songhai fell
- **firearms** against cavalry and bowmen
- **succession disputes** and civil war (1588) had weakened the state
- resentment of subject peoples
- over-extension

## Results
break-up into small states; decline of Timbuktu's scholarship (scholars exiled); insecurity on trade routes; the Moroccans (the **Arma**) could not hold the empire — the end of the great Sudanic empires.`,
          examples: `**Example 1.** Which towns did Sunni Ali capture? *Answer:* **Timbuktu** (1468) and **Jenne**.

**Example 2.** Name two of Askia Muhammad's reforms. *Answer:* A **standing army** and **standard weights and measures** (also provincial governors, qadis).

**Example 3.** Why did Songhai lose at Tondibi? *Answer:* The Moroccans had **firearms**.`,
        },
        questions: [
          ["E", "The battle at which Morocco defeated Songhai in 1591 was", "Tondibi", "Kirina", "Feyiase", "Tabkin Kwatto", "Firearms decided it."],
          ["E", "The founder of the Askia dynasty was", "Muhammad Ture", "Sunni Ali", "Dawud", "Sundiata", "He seized power in 1493."],
          ["E", "The famous centre of learning in Timbuktu was", "Sankore", "al-Azhar", "Niani", "Kumbi", "Scholars taught in its mosque."],
          ["M", "Sunni Ali captured Timbuktu in", "1468", "1324", "1493", "1591", "He took it from the Tuareg."],
          ["M", "The Songhai official in command of the river fleet was the", "hi-koi", "fari-mondio", "balama", "korey-farma", "The fleet operated on the Niger."],
          ["M", "The commander of the Moroccan army that invaded Songhai was", "Judar Pasha", "al-Mansur", "Ibn Yasin", "Abu Bakr", "He led about four thousand men."],
          ["M", "The last great ruler of Songhai was", "Askia Dawud", "Askia Musa", "Sunni Baru", "Askia Ishaq II", "He reigned from 1549 to 1582."],
          ["H", "The Timbuktu chronicles are hostile to Sunni Ali mainly because he", "persecuted the scholars of the city", "lost many battles", "refused to trade", "was a foreigner", "The chroniclers belonged to that scholarly class."],
          ["H", "Askia Muhammad's creation of a standing army was an advance because it", "provided a trained permanent force and freed farmers from levies", "abolished the navy", "ended taxation", "removed provincial governors", "The state could campaign at any season."],
          ["H", "A long-term result of the Moroccan conquest was", "the break-up of the Western Sudan into small states and decline of trade and learning", "the unification of West Africa", "the spread of Christianity", "the rise of Mali", "The Moroccans could not hold the empire."],
        ],
      },
      {
        week: 4,
        title: "Asante and Dahomey",
        subtopics: ["The rise of Asante", "Government and economy of Asante", "The rise of Dahomey", "Government and economy of Dahomey"],
        objectives: ["Explain the rise of the Asante Empire", "Describe the government and economy of Asante", "Explain the rise of Dahomey", "Describe the government and economy of Dahomey"],
        lesson: {
          title: "Forest Kingdoms of the Atlantic Age",
          summary: "Analyse the rise and organisation of Asante and Dahomey.",
          minutes: 40,
          notes: `## Asante
### Rise
The **Akan** peoples of the forest (in modern Ghana) lived in small states, many paying tribute to **Denkyira**. In the late seventeenth century **Osei Tutu** (c. 1695–1717), ruler of **Kumasi**, with his friend and priest **Okomfo Anokye**, united them.
- the **Golden Stool** (*Sika Dwa Kofi*): Anokye is said to have brought it down from the sky to rest on Osei Tutu's knees. It was held to contain the **soul of the nation** — a symbol of unity above any single chief.
- **Kumasi** became the capital; the **Odwira** festival brought all chiefs together yearly
- a **national army** with fixed formations (van, wings, rear)
- **Denkyira** was defeated at **Feyiase (1701)**, giving Asante access to European trade and arms

### Expansion
**Opoku Ware** (c. 1720–1750) conquered north and south; by 1800 Asante controlled most of modern Ghana and beyond.

### Government
- the **Asantehene** — king of Asante and chief of Kumasi
- the **Asanteman council** — the union of the *amanhene* (chiefs of the founding states), who kept their own stools and affairs
- conquered **provinces** paid tribute and supplied troops
- under **Osei Kwadwo** (1764–77) and his successors a **bureaucracy** of appointed officials (not hereditary) was created for finance, diplomacy and provincial control — power shifted to the king
- the **Queen Mother** nominated candidates; succession was **matrilineal**

### Economy
**gold**; **kola** traded north to Hausaland; slaves and ivory to the coast; guns, cloth and metal goods imported; state trading and tolls; crafts — **kente** cloth, goldwork.

### Later history
Wars with the **British** and their Fante allies through the nineteenth century: the British governor MacCarthy was killed (1824); Kumasi was burned (1874); **Prempeh I** was exiled (1896); the **Yaa Asantewaa War (1900)** was fought when the governor demanded the Golden Stool; annexation followed in 1901.

## Dahomey
### Rise
The **Fon** kingdom on the **Abomey** plateau (modern Republic of Benin) was founded in the early seventeenth century; **Wegbaja** (c. 1645–85) is regarded as its real founder. **Agaja** (1708–40) conquered **Allada (1724)** and **Whydah (Ouidah, 1727)**, reaching the coast and the European trade. **Oyo** invaded repeatedly, and Dahomey paid it **tribute** from about 1730 (settled 1748) until **Gezo** (1818–58) threw it off.

### Government — highly centralised
- the king was **absolute**; all land and people belonged to him; no hereditary nobility with independent power
- officials appointed and dismissed at will: the **Migan** (prime minister and executioner), the **Meu** (finance; overseer of princes), the **Yovogan** (viceroy at Whydah, in charge of Europeans)
- each official had a **female counterpart** within the palace (the "mothers") who checked his reports
- an efficient system of **intelligence**, messengers and a **census** kept with pebbles; taxation of produce and trade
- the **Annual Customs** — a great assembly for ceremonies, tribute and decisions
- the **army**: a standing force including the famous regiments of **women soldiers** ("Amazons")
- succession: the king chose his heir among his sons

### Economy
the **slave trade** through Whydah under royal control; from Gezo's time, **palm oil** plantations worked by slaves; farming and crafts.

### Later history
Conquered by the **French** (1892–94) under **Behanzin**.

## Comparison
| | Asante | Dahomey |
|---|---|---|
| basis of unity | confederation; Golden Stool | absolute monarchy |
| succession | matrilineal | patrilineal, king's choice |
| officials | chiefs + appointed bureaucracy | wholly appointed |
| trade | gold, kola, slaves | slaves, later palm oil |`,
          examples: `**Example 1.** What did the Golden Stool symbolise? *Answer:* The **soul and unity of the Asante nation**.

**Example 2.** Which Dahomey king conquered Whydah? *Answer:* **Agaja**, in 1727.

**Example 3.** Contrast the two governments. *Answer:* Asante was a **confederation**; Dahomey an **absolute monarchy**.`,
        },
        questions: [
          ["E", "The founder of the Asante union was", "Osei Tutu", "Opoku Ware", "Prempeh I", "Agaja", "He worked with Okomfo Anokye."],
          ["E", "The symbol of Asante unity is the", "Golden Stool", "Golden Sword", "Ivory Mask", "Brass Canoe", "It is said to hold the soul of the nation."],
          ["E", "The capital of Dahomey was", "Abomey", "Kumasi", "Whydah", "Allada", "It stood on a plateau inland."],
          ["M", "Asante defeated Denkyira in 1701 at", "Feyiase", "Kirina", "Katamanso", "Tondibi", "This opened the way to the coast."],
          ["M", "The Dahomean official in charge of relations with Europeans at Whydah was the", "Yovogan", "Migan", "Meu", "Kpojito", "The title means chief of the white men."],
          ["M", "Dahomey paid tribute for much of the eighteenth century to", "Oyo", "Asante", "Benin", "Mali", "Gezo ended it in the nineteenth century."],
          ["M", "The Asante war of 1900 against the British was led by", "Yaa Asantewaa", "Prempeh I", "Osei Kwadwo", "Okomfo Anokye", "The governor had demanded the Golden Stool."],
          ["H", "The Golden Stool strengthened Asante mainly by", "providing a sacred focus of loyalty above individual chiefdoms", "supplying gold for trade", "serving as the king's throne in battle", "replacing the army", "It bound the states into one nation."],
          ["H", "The pairing of each Dahomean official with a female counterpart in the palace served to", "check the official's reports and keep the king informed", "replace the army", "collect slaves", "choose the next king", "It was a device of royal control."],
          ["H", "Osei Kwadwo's appointment of non-hereditary officials is significant because it", "shifted power from the chiefs to the king and created a bureaucracy", "ended the Asante union", "abolished the Golden Stool", "introduced matrilineal succession", "Officials depended on royal favour."],
        ],
      },
      {
        week: 5,
        title: "Trade and the West African economy to 1800",
        subtopics: ["The internal economy", "The trans-Saharan trade: an assessment", "The Atlantic trade: an assessment", "The debate on the effects of the slave trade"],
        objectives: ["Describe the internal economy of West Africa before 1800", "Assess the impact of the trans-Saharan trade", "Assess the impact of the Atlantic trade", "Evaluate the debate on the effects of the slave trade"],
        lesson: {
          title: "Commerce and Its Consequences",
          summary: "Evaluate the role of long-distance trade in West African history to 1800.",
          minutes: 40,
          notes: `## The internal economy
The foundation of West African life was **not** long-distance trade but **local production**:
- **agriculture**: grains in the savanna, roots in the forest; rice on the upper Guinea coast and inland delta of the Niger
- **crafts**: iron, textiles, leather, pottery, salt, gold mining and working
- **regional trade** between ecological zones, with networks of professional merchants — **Wangara/Dyula**, **Hausa**, **Yoruba**, **Aro**
- **currencies**: cowries, gold dust (*mithqal*), cloth strips, iron bars, manillas
- **credit**, brokers and landlords; markets in periodic rings
Long-distance trade grew **on top of** this base.

## The trans-Saharan trade: assessment
**Benefits**
- revenue that sustained the great states
- horses, weapons, copper, salt
- **Islam**, literacy, law, architecture; diplomatic and intellectual links
- growth of cities
**Costs**
- export of people as **slaves** to North Africa and the Middle East over many centuries
- the gold enriched rulers and foreign merchants more than producers
- states became vulnerable to shifts in routes

## The Atlantic trade: assessment
### Phases
- fifteenth–sixteenth centuries: gold, pepper, ivory, cloth; limited numbers of slaves
- seventeenth–eighteenth centuries: the **slave trade** dominant — peaking in the **eighteenth century**
### Regions most affected
Senegambia, the Gold Coast, the **Slave Coast** (Bight of Benin), the **Bight of Biafra** (Bonny, Calabar) and, further south, Congo–Angola.
### Organisation in Africa
European forts and factories on the coast paying rent to African rulers; inland supply by African states and merchants; payment in assorted goods ("sorting").

## The debate on effects
### Demographic
- about **twelve million** embarked across the Atlantic; many more died in capture and transit
- most were **young adults**, two-thirds male — a loss of the most productive people
- some historians (e.g. **Walter Rodney**, **Joseph Inikori**) stress that West Africa's population stagnated while other continents' grew; others (e.g. **J.D. Fage**) argued that losses were partly offset by natural increase and new food crops (maize, cassava) — though few now minimise the damage

### Economic
- diversion of energy from production to **raiding**
- import of consumer goods and guns rather than capital goods; competition with local **crafts** (textiles, iron)
- no transfer of technology
- yet: new crops; expansion of currency; growth of commercial skills in coastal societies
- Rodney's thesis (*How Europe Underdeveloped Africa*): the trade **retarded** African development while aiding Europe's — the origin of **dependency**

### Political
- rise of **slave-trading states** — Oyo, Dahomey, Asante, the delta city-states — and decline of others (Benin's hinterland, Kongo)
- more frequent **warfare**; militarisation; political instability
- increase of **slavery within Africa** itself

### Social and moral
insecurity; corruption of justice (judicial enslavement); breakdown of trust; racism abroad.

### For Europe and the Americas
profits for shipping, banking and industry (the argument of **Eric Williams**, *Capitalism and Slavery*); the labour that built the plantation economies; the African **diaspora**.

## Conclusion
While some rulers and merchants gained, the Atlantic slave trade was overwhelmingly **destructive** for West African societies and left the region poorly placed to face the nineteenth-century European challenge.`,
          examples: `**Example 1.** What was the real basis of the West African economy? *Answer:* **Local agriculture and crafts**, not long-distance trade.

**Example 2.** Which historian argued that the slave trade underdeveloped Africa? *Answer:* **Walter Rodney**.

**Example 3.** In which century did the Atlantic slave trade peak? *Answer:* The **eighteenth century**.`,
        },
        questions: [
          ["E", "The basis of the pre-colonial West African economy was", "agriculture", "the slave trade", "mining of diamonds", "manufacturing for export", "Most people were farmers."],
          ["E", "The Atlantic slave trade reached its peak in the", "eighteenth century", "fifteenth century", "sixteenth century", "twentieth century", "Plantation demand was then at its height."],
          ["E", "The author of How Europe Underdeveloped Africa is", "Walter Rodney", "Eric Williams", "J.D. Fage", "Kenneth Dike", "He stressed the damage done by the trade."],
          ["M", "The unit of gold dust used as currency in the Western Sudan was the", "mithqal", "manilla", "cowrie", "dinar note", "It was a standard weight."],
          ["M", "Eric Williams argued in Capitalism and Slavery that profits from slavery", "helped finance Britain's industrialisation", "ruined Europe", "went mainly to Africa", "were insignificant", "This is known as the Williams thesis."],
          ["M", "Most of those shipped across the Atlantic were", "young adults, mainly male", "elderly people", "infants", "rulers", "The most productive people were lost."],
          ["M", "The part of the coast known as the Slave Coast was the", "Bight of Benin", "Gold Coast", "Grain Coast", "Ivory Coast", "It ran from the Volta to Lagos."],
          ["H", "The view that losses from the slave trade were partly offset by new food crops and natural increase is associated with", "J.D. Fage", "Walter Rodney", "Joseph Inikori", "Eric Williams", "Most historians now stress the damage."],
          ["H", "The Atlantic trade harmed West African manufacturing mainly because", "imported goods competed with local crafts and no technology was transferred", "Africans stopped using cloth", "iron ore ran out", "Europeans banned crafts", "Energy also went into raiding."],
          ["H", "The best overall judgement on the Atlantic slave trade is that it", "enriched a few rulers and merchants but was destructive for West African societies as a whole", "benefited all Africans", "had no effect on politics", "ended slavery in Africa", "It left the region weakened."],
        ],
      },
    ],
  },
];
