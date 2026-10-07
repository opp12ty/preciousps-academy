import type { TermPlan } from "../types";

/** SS2 History — Nigeria and West Africa, 1800–1960. Original Precious PS content for senior secondary schools. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The Sokoto Caliphate: administration and achievements",
        subtopics: ["The structure of the caliphate", "The emirates and their relations with Sokoto", "Economy and learning", "Problems and assessment"],
        objectives: ["Describe the structure of government in the Sokoto Caliphate", "Explain the relationship between Sokoto and the emirates", "Assess the economic and intellectual achievements of the caliphate", "Identify the problems the caliphate faced"],
        lesson: {
          title: "A Nineteenth-Century Islamic State",
          summary: "Analyse the government, achievements and problems of the Sokoto Caliphate.",
          minutes: 40,
          notes: `## Foundations
The jihad of **1804** replaced the Hausa kingdoms with a state based on the reformers' ideal of government by the **Shari'ah**. Its theory was set out in the writings of **Uthman dan Fodio** (*Kitabul-Farq*, *Bayan Wujubil-Hijrah*), **Abdullahi** (*Diya'ul-Hukkam*) and **Muhammad Bello**.

## The centre
- the **Caliph** (*Amirul-Mu'minin*; "Sultan" in later usage) at **Sokoto** — elected from the Shehu's descendants by a council of electors
- the **Waziri** — chief adviser and link with the eastern emirates; the first was **Gidado dan Laima**
- other officials: the **Galadima**, **Magajin Gari**, **Magajin Rafi**, the chief **Alkali**
- **Gwandu**, under Abdullahi's line, supervised the western emirates (Nupe, Ilorin, Yauri and beyond)
- Bello fortified the frontiers with **ribats** — garrisoned settlements that also served to settle pastoral Fulani

## The emirates
About thirty, including **Kano, Katsina, Zazzau, Bauchi, Gombe, Adamawa (Fombina, founded by Modibbo Adama, with its capital at Yola), Hadejia, Katagum, Nupe and Ilorin**.
### Obligations of an emir
- appointment (or confirmation) and **turbanning** by the Caliph
- annual **tribute** (*gaisuwa*, *kharaj*) and a share of booty
- military contingents for the Caliph's campaigns
- visits to Sokoto; acceptance of the Caliph's arbitration
- government in accordance with Islamic law
### Autonomy
Emirs ran their internal affairs — appointing officials, collecting taxes, keeping courts and armies. The caliphate was thus a **loose federation held together by religion, loyalty and correspondence**, not by a standing central army. Sokoto intervened in disputed successions and could **depose** an emir.

## Law and justice
**Alkali** courts applied Maliki law; emirs heard appeals and political cases; complaints could be carried to Sokoto.

## Revenue
*zakat*; *kharaj* (land tax); *jizya* (from non-Muslims); *jangali*; market and craft dues; tribute in slaves and goods.

## Economy
- security over a wide area promoted **farming** and **trade**
- **Kano** became the commercial heart of the central Sudan — the traveller **Barth** (1851) compared its cloth industry with the great manufacturing towns of Europe; dyed cloth was exported as far as Timbuktu and Tripoli
- **slave labour** on plantation-like estates (*rumada*) and in households
- kola caravans to Gonja; trans-Saharan trade through Kano and Katsina

## Learning
An exceptional outpouring of **scholarship** in Arabic, Fulfulde and Hausa (**ajami**): law, theology, history, medicine and poetry. **Nana Asma'u** organised women's education. Qur'anic and advanced (*ilmi*) schools spread.

## Problems
- continued resistance by the displaced **Habe** rulers of Gobir, Kebbi and Maradi
- **revolts**: the dissident scholar **Abd as-Salam** (1817); **Buhari of Hadejia** (1850s); the **Kano civil war** (*Basasa*, 1893–95)
- decline from the founders' ideals: Abdullahi himself complained of worldliness; hereditary privilege and heavy taxes returned
- **slave raiding** on the non-Muslim frontiers
- **Mahdist** movements late in the century
- no military answer to the **British** (1897–1903)

## Assessment
The caliphate gave a large part of what became Nigeria a century of relative unity, a common law, literacy and commercial prosperity — and provided the framework the British used for **indirect rule**.`,
          examples: `**Example 1.** What held the caliphate together? *Answer:* **Religion, loyalty to the Caliph and correspondence** — not a central army.

**Example 2.** Name two obligations of an emir. *Answer:* **Annual tribute** and **military contingents**.

**Example 3.** Which city was the commercial centre of the caliphate? *Answer:* **Kano**.`,
        },
        questions: [
          ["E", "The chief adviser to the Caliph at Sokoto was the", "Waziri", "Alkali", "Madawaki", "Ajele", "The first was Gidado dan Laima."],
          ["E", "The emirate of Adamawa was founded by", "Modibbo Adama", "Mallam Dendo", "Shaykh Alimi", "Yakubu", "Its capital became Yola."],
          ["E", "Hausa and Fulfulde written in Arabic script are known as", "ajami", "nsibidi", "girgam", "kente", "Much literature was produced in it."],
          ["M", "The frontier garrison settlements established by Muhammad Bello were called", "ribats", "birane", "wards", "barracoons", "They defended the caliphate's borders."],
          ["M", "The European traveller who described Kano's cloth industry in 1851 was", "Barth", "Clapperton", "Lander", "Park", "He compared it with European manufacturing towns."],
          ["M", "The emir who led a long revolt against Sokoto in the 1850s ruled", "Hadejia", "Kano", "Zazzau", "Bauchi", "His name was Buhari."],
          ["M", "Slave-worked farming estates in the caliphate were known as", "rumada", "ribats", "fiefs of chima", "wari", "They supplied the households of the rulers."],
          ["H", "The Sokoto Caliphate is best described politically as", "a loose federation of emirates united by religious allegiance", "a highly centralised state with a standing army", "a military dictatorship", "a group of independent kingdoms with no common head", "Emirs kept wide internal autonomy."],
          ["H", "Abdullahi dan Fodio's later criticisms of the jihadists show that", "some leaders felt the movement had fallen away from its ideals", "he opposed Islam", "he supported the Habe kings", "he wished to become Caliph by force", "He complained of worldliness among them."],
          ["H", "The caliphate eased the British task after 1903 because it", "offered an existing administrative structure for indirect rule", "had no rulers", "welcomed missionaries", "had already adopted English law", "Emirs, courts and taxes were retained."],
        ],
      },
      {
        week: 2,
        title: "Borno under the al-Kanemi dynasty",
        subtopics: ["The jihad and the rise of al-Kanemi", "The debate with Sokoto", "The end of the Sayfawa and the Shehus", "Rabih and the European conquest"],
        objectives: ["Explain how al-Kanemi rose to power in Borno", "Summarise the debate between al-Kanemi and the Sokoto leaders", "Describe the end of the Sayfawa dynasty and rule of the Shehus", "Narrate Rabih's conquest and the European partition of Borno"],
        lesson: {
          title: "Borno in the Nineteenth Century",
          summary: "Analyse the transformation of Borno from the Sayfawa to the Shehus and its conquest.",
          minutes: 40,
          notes: `## The jihad in Borno
Fulani leaders in the western provinces took up the jihad. In **1808** **Ngazargamu** was captured and sacked; **Mai Ahmad** fled. In desperation the Mai called on a respected scholar living at Ngala, **Shaykh Muhammad al-Amin al-Kanemi**.

## Al-Kanemi
- of **Kanembu** origin, educated in the Fezzan and widely travelled; a scholar with a following of Kanembu spearmen and Shuwa Arab cavalry
- he defeated the Fulani and restored the Mai; when they returned and took the capital again, he drove them out a second time
- in reward he received lands and revenue; his influence grew until he was the **real ruler**, while the Mais became figureheads
- about **1814** he built his own town, **Kukawa**
- **Mai Dunama**, who tried to shake him off with the help of Baghirmi, was killed (1820); al-Kanemi installed **Mai Ibrahim**
- he took the modest title **Shehu** (Shaykh), never Mai
- he reorganised the army, appointed his own governors and judges, and received the British travellers **Denham and Clapperton** (1823)

## The debate with Sokoto
In a famous exchange of letters with **Muhammad Bello** and Uthman dan Fodio, al-Kanemi asked **why Muslims were attacking a Muslim country**. He argued that:
- Borno had been Muslim for centuries
- sins and lax practices by some people do **not make them unbelievers**; otherwise no Muslim land would be safe
The Sokoto leaders replied that Borno's rulers tolerated un-Islamic rites and had aided the Hausa kings against the jihad. The correspondence is a major document of West African Islamic thought. In the end a boundary was accepted: the west (**Katagum, Hadejia, Misau, Gombe**) remained in the caliphate; Borno proper stayed independent.

## The end of the Sayfawa
Al-Kanemi died in **1837**; his son **Umar** succeeded as Shehu. In **1846** Mai Ibrahim invited the ruler of **Wadai** to invade; Umar executed Ibrahim, and the last Mai, **Ali**, was killed in battle. The **Sayfawa dynasty**, after about a thousand years, was at an end. Shehu Umar (d. 1881) now ruled openly. The German traveller **Barth** stayed at Kukawa in 1851.

### Government under the Shehus
the Shehu and his council; **slave officials (kachalla)** in command of troops; fief-holders; the old Sayfawa titles lost importance. After Umar the state weakened — court intrigue, falling trans-Saharan trade, heavy taxes.

## Rabih az-Zubayr
**Rabih ibn Fadlallah**, a Sudanese slave-soldier and former lieutenant of the slave trader Zubayr Pasha, came from the east with a disciplined army armed with **rifles**. In **1893** he defeated the Shehu's forces, destroyed **Kukawa** and made **Dikwa** his capital. He ruled harshly but efficiently, and looked to the Mahdist state in the Sudan.

## The European conquest
Borno had been assigned on paper to Britain, France and Germany. The **French**, advancing on Lake Chad from three directions, defeated and killed Rabih at **Kousséri** in **April 1900**. Borno was **partitioned**: the larger part to Britain, Dikwa to Germany (Kamerun), the rest to France. The British recognised **Shehu Abubakar Garbai** of the al-Kanemi line (1902); the capital was later fixed at **Maiduguri (Yerwa)**.

## Significance
- a scholar saved a state when its ancient dynasty could not
- the al-Kanemi–Bello debate raised lasting questions about **who may be declared an unbeliever**
- Borno's separate history explains its distinct identity within northern Nigeria.`,
          examples: `**Example 1.** Who saved Borno from the jihadists? *Answer:* **Shaykh al-Kanemi**.

**Example 2.** What was al-Kanemi's main argument against Sokoto? *Answer:* **Sin does not make Muslims unbelievers**, so a Muslim land should not be attacked.

**Example 3.** When did the Sayfawa dynasty end? *Answer:* **1846**.`,
        },
        questions: [
          ["E", "Al-Kanemi took the title of", "Shehu", "Mai", "Sultan", "Emir", "He never called himself Mai."],
          ["E", "Al-Kanemi built his own capital at", "Kukawa", "Ngazargamu", "Dikwa", "Maiduguri", "It was founded about 1814."],
          ["E", "Rabih was defeated and killed in 1900 by the", "French", "British", "Germans", "Sokoto army", "The battle was at Kousséri."],
          ["M", "The Sayfawa dynasty came to an end in", "1846", "1808", "1837", "1893", "The last Mai was killed in battle."],
          ["M", "Rabih made his capital at", "Dikwa", "Kukawa", "Yola", "Ngala", "He had destroyed Kukawa in 1893."],
          ["M", "Al-Kanemi's correspondence about the jihad was mainly with", "Muhammad Bello", "Idris Alooma", "Mungo Park", "Rabih", "They debated its justification."],
          ["M", "The slave officials who commanded troops under the Shehus were called", "kachalla", "ilari", "eso", "jakadu", "They were loyal to the Shehu personally."],
          ["H", "The core of al-Kanemi's argument was that", "wrongdoing by some Muslims does not turn a Muslim country into a land of unbelief", "Borno had never been Muslim", "the Fulani were not Muslims", "jihad is never lawful", "He denied the grounds for attacking Borno."],
          ["H", "Al-Kanemi's rise illustrates a wider nineteenth-century pattern in which", "men of ability replaced or overshadowed old hereditary dynasties", "old dynasties grew stronger", "Europeans appointed rulers", "women became rulers", "Real power passed from the Mai to the Shehu."],
          ["H", "Borno's partition among three European powers resulted from", "prior agreements among them followed by the French defeat of Rabih", "a request by the Shehu", "the Sokoto Jihad", "a war between Britain and Germany in 1900", "The boundaries had been drawn on paper earlier."],
        ],
      },
      {
        week: 3,
        title: "Yorubaland in the nineteenth century: new states and systems",
        subtopics: ["The collapse of Oyo analysed", "Ibadan", "Abeokuta and Ijaye", "War, trade and British intervention"],
        objectives: ["Analyse the causes of the collapse of Oyo", "Describe the political system of Ibadan", "Describe the political systems of Abeokuta and Ijaye", "Explain how war and trade led to British intervention"],
        lesson: {
          title: "The Search for a New Order",
          summary: "Analyse the successor states of Oyo and the outcome of the Yoruba wars.",
          minutes: 40,
          notes: `## The collapse of Oyo
### Long-term causes
- **constitutional**: the balance between Alaafin and Oyomesi broke down (Gaha's tyranny, then Abiodun's reaction and the weakening of the Oyomesi)
- **military**: the army was neglected under Abiodun in favour of trade; defeats by Borgu and Nupe (1783, 1791)
- **economic**: dependence on the slave trade and on imported horses
- **imperial overstretch**: the Egba revolted (c. 1780s); Dahomey withheld tribute
### Immediate causes
- the quarrel between **Alaafin Awole** and the Kakanfo **Afonja** (1796), ending in Awole's suicide and curse
- Afonja's revolt at **Ilorin** (c. 1817), using Hausa and Fulani Muslim troops under **Alimi**; Afonja was later killed and Ilorin became an emirate
- the Muslim revolt cut off the horse supply and drew in the jihad
- civil wars among Oyo chiefs; the last attempt to recover Ilorin failed at the **Eleduwe War** (c. 1835); the capital was abandoned

## Ibadan
A war camp of Oyo, Ife and Ijebu soldiers (c. 1829) that became the largest city in tropical Africa.
- **no hereditary king**: titles were open to **talent**, especially military achievement
- two lines of chiefs — the **military** (headed by the **Balogun**) and the **civil** (headed by the **Baale**) — with promotion step by step; plus the **Iyalode**, head of the women, who had a seat in council
- chiefs maintained large private armies of **war boys** and slaves
- an **empire** over Ibarapa, Osun, Ife, Ijesa, Ekiti and Akoko, governed through resident **Ajele**, whose exactions caused the Ekitiparapo revolt
- Ibadan saw itself as the defender of Yorubaland — it stopped Ilorin at **Osogbo (c. 1840)**

## Abeokuta
Founded about **1830** by Egba refugees under **Sodeke**.
- a **federation** of townships (Ake, Oke-Ona, Gbagura and Owu), each keeping its own Oba; the **Alake** of Ake became first among equals
- power lay with the **Ogboni** (civil elders), the **Olorogun** (war chiefs) and the **Parakoyi** (trade chiefs)
- welcomed **missionaries** (from 1846) and the **Saro**, hoping for British support against **Dahomey**, whose attacks were repulsed in 1851 and 1864
- experiments in modern government: the **Egba United Board of Management (1865)** led by **G.W. Johnson**, and the **Egba United Government (1898–1914)**

## Ijaye
A military **autocracy** under **Kurunmi**, the Are-Ona-Kakanfo, who concentrated all power in himself. When he refused to accept **Adelu's** succession at Oyo, Ibadan destroyed Ijaye (1860–62).

## New Oyo
**Alaafin Atiba** tried to restore the monarchy's prestige, conferring the titles of Bashorun on Ibadan's leader and Kakanfo on Kurunmi, assigning them the defence of the north and west.

## War and trade
- the shift from the slave trade to **palm oil** made control of routes to **Lagos** vital; the **Egba** and **Ijebu** as middlemen blocked Ibadan's direct access to the coast and to arms
- firearms and later breech-loading rifles changed warfare

## British intervention
- Lagos (annexed 1861) wanted open roads for trade; its governors alternately blockaded and mediated
- missionaries pressed for peace
- the **1886 treaty** ended the Kiriji fighting on the main front
- the **Ijebu expedition (1892)** showed British power; **Governor Carter's** tour (**1893**) produced treaties with Oyo, Ibadan, Abeokuta (which kept its independence until 1914) and others
- Ilorin was taken by the Royal Niger Company in 1897

## Assessment
The wars destroyed the old order but also produced creative political experiments. Their final effect was to hand Yorubaland to the British.`,
          examples: `**Example 1.** What was distinctive about Ibadan's government? *Answer:* It had **no hereditary king**; titles were open to **merit**.

**Example 2.** Who were the Parakoyi? *Answer:* The **trade chiefs** of Abeokuta.

**Example 3.** What did Governor Carter achieve in 1893? *Answer:* **Treaties** that brought most of Yorubaland under British control and ended the wars.`,
        },
        questions: [
          ["E", "The head of the military chiefs in Ibadan was the", "Balogun", "Baale", "Iyalode", "Alake", "The Baale headed the civil line."],
          ["E", "The first among equals of the Egba rulers at Abeokuta is the", "Alake", "Alaafin", "Awujale", "Ooni", "He is the Oba of Ake."],
          ["E", "The Alaafin who founded New Oyo was", "Atiba", "Awole", "Abiodun", "Adelu", "He tried to restore the monarchy's prestige."],
          ["M", "The woman chief with a seat in Ibadan's council was the", "Iyalode", "Iyoba", "Magira", "Omu", "She represented the women."],
          ["M", "The trade chiefs of Abeokuta were the", "Parakoyi", "Olorogun", "Ogboni", "Eso", "They regulated markets and commerce."],
          ["M", "The Egba United Board of Management of 1865 was led by", "G.W. Johnson", "Samuel Johnson", "Henry Townsend", "Sodeke", "He was a Saro reformer."],
          ["M", "The Alaafin whose quarrel with Afonja ended in his own suicide was", "Awole", "Atiba", "Abiodun", "Oluewu", "He is said to have cursed his people."],
          ["H", "Ibadan's political system differed from that of Old Oyo chiefly in that", "office depended on achievement rather than birth", "it had a sacred king", "it had no army", "it was ruled by the Ogboni", "Chiefs were promoted step by step."],
          ["H", "The Egba and Ijebu were hostile to Ibadan largely because", "they wished to keep their position as middlemen on the routes to the coast", "they were Ibadan's vassals", "they opposed Christianity", "they supported Ilorin's jihad", "Control of the arms and oil trade was at stake."],
          ["H", "The Egba welcomed missionaries and Saro in the 1840s mainly because they", "hoped for British support against Dahomey and other enemies", "had rejected their own religion", "were ordered to by Lagos", "wanted to end trade", "Diplomatic advantage was a strong motive."],
        ],
      },
      {
        week: 4,
        title: "The Niger Delta and the coast in the nineteenth century",
        subtopics: ["From slaves to palm oil", "Politics in Bonny, Kalabari and Opobo", "Itsekiri and Old Calabar", "Consular authority and the loss of sovereignty"],
        objectives: ["Explain the effects of the change from the slave trade to palm oil", "Describe political change in Bonny, Kalabari and Opobo", "Describe developments among the Itsekiri and at Old Calabar", "Explain how consular authority eroded the sovereignty of the coastal states"],
        lesson: {
          title: "Kings, Houses and Consuls",
          summary: "Analyse political and economic change in the coastal states, 1800–1890.",
          minutes: 40,
          notes: `## From slaves to palm oil
After 1807 the delta states adapted quickly. By the 1830s **Bonny** was the greatest palm-oil port in West Africa.
### Effects
- wealth now came from **organising canoe fleets and credit**, favouring able House heads — including men of **slave origin**
- the number of Houses multiplied; competition for inland markets intensified
- kings lost their monopoly of wealth; **House heads** rivalled them
- resident European **supercargoes**, the **trust** system and **Courts of Equity**
- steamships (1850s) brought many small traders and lower prices, straining the system

## Bonny
- the **Pepple** dynasty: **William Dappa Pepple** was deposed and exiled by Consul **Beecroft** in **1854**
- two great groups of Houses: **Manilla Pepple** (led by **Oko Jumbo**) and **Anna Pepple** (led by **Alali**, then from 1863 by **Jaja**, an ex-slave of Igbo origin)
- rivalry ended in **civil war (1869)**; Jaja withdrew with his followers

## Opobo
Jaja founded **Opobo** (1869–70), sited to cut Bonny off from its richest oil markets. Recognised by the British in **1873**, he became the most powerful ruler in the delta, taxing trade, barring Europeans from his markets and shipping oil direct to Britain.

## Kalabari
Rivalry between the **Amakiri** and **Barboy (Will Braide)** groups led to war (1879–83) and the dispersal of Elem Kalabari into **Buguma, Abonnema and Bakana**.

## Nembe (Brass)
Lost its markets to the Royal Niger Company — hence the **Akassa raid (1895)**.

## The Itsekiri
After the death of **Olu Akengbuwa** (1848) there was a long **interregnum** — no Olu was crowned until 1936. Power passed to wealthy traders; the British recognised a "**Governor of the Benin River**" to deal with: **Nana Olomu** held the post from 1884 until his overthrow in 1894.

## Old Calabar
- **Duke Town** and **Creek Town**, governed through the **Ekpe** society
- **King Eyo Honesty II** of Creek Town invited the **Presbyterian** mission (1846)
- social tension: plantation slaves formed the "**Order of Blood Men**" (1850–51) to resist being sacrificed at the funerals of great men
- missionaries and consuls pressed for the end of human sacrifice and twin-killing

## Lagos and Badagry
The dynastic dispute between **Kosoko** and **Akitoye**; the bombardment (1851); the consulate; annexation (**1861**) under **Dosunmu**.

## The growth of consular authority
1. **1849**: Beecroft appointed consul — a "policeman" for British traders
2. consuls arbitrated disputes, enforced debts with **gunboats**, deposed rulers
3. **Courts of Equity** gained official backing (1872)
4. after the French and Germans appeared, Consul **Hewett** signed **protection treaties (1884)**; at Berlin Britain claimed the coast
5. **Oil Rivers Protectorate (1885)**; Acting Consul **Johnston** removed **Jaja (1887)**
6. a regular administration under **Sir Claude Macdonald** (1891); **Niger Coast Protectorate (1893)**; Nana (1894), Brass (1895), Benin (1897)

## Why the coastal states lost their sovereignty
dependence on overseas trade; internal rivalries which the British exploited; naval power; treaties whose implications were not grasped; the British traders' demand for direct access to the interior.

## Significance
The delta shows most clearly how **informal influence** through trade became **formal empire**.`,
          examples: `**Example 1.** Why did Jaja found Opobo? *Answer:* After the **Bonny civil war of 1869**, to control the oil markets.

**Example 2.** What was the Itsekiri interregnum? *Answer:* The period from **1848 to 1936** when no Olu reigned.

**Example 3.** Who were the Blood Men? *Answer:* **Plantation slaves of Calabar** who united to resist sacrifice at funerals.`,
        },
        questions: [
          ["E", "By the 1830s the leading palm-oil port in West Africa was", "Bonny", "Badagry", "Lagos", "Warri", "It had been a great slave port."],
          ["E", "The king of Bonny exiled by Consul Beecroft in 1854 was", "William Dappa Pepple", "Jaja", "Oko Jumbo", "Koko", "He was later allowed to return."],
          ["E", "The ruler of Creek Town who invited the Presbyterian mission was", "Eyo Honesty II", "Duke Ephraim", "Nana Olomu", "Amakiri", "The mission came in 1846."],
          ["M", "Jaja was head of which House in Bonny before 1869?", "Anna Pepple", "Manilla Pepple", "Amakiri", "Barboy", "Its rival was led by Oko Jumbo."],
          ["M", "The Kalabari dispersed in 1879–84 to found Buguma, Abonnema and", "Bakana", "Opobo", "Okrika", "Nembe", "Civil strife caused the move."],
          ["M", "The plantation slaves of Calabar who united in 1850–51 were called the", "Order of Blood Men", "Ekpe", "Ekine", "Ekumeku", "They resisted funeral sacrifices."],
          ["M", "The official who set up a regular administration in the Oil Rivers in 1891 was", "Claude Macdonald", "Harry Johnston", "John Beecroft", "Edward Hewett", "He became Commissioner and Consul-General."],
          ["H", "The palm-oil trade altered the balance of power within the delta states because", "wealth passed to able House heads, including men of slave origin", "kings gained a monopoly", "trade ended", "Europeans took over the Houses", "Organising canoes and credit mattered more than birth."],
          ["H", "The position of 'Governor of the Benin River' arose because", "the Itsekiri had no Olu and the British wanted one authority to deal with", "the Oba of Benin created it", "the Portuguese required it", "Lagos ruled the area", "It was held by leading traders such as Nana."],
          ["H", "The history of the delta between 1849 and 1893 illustrates the process by which", "informal commercial influence turned into formal colonial rule", "African states conquered European traders", "the slave trade revived", "missions replaced trade", "Consuls became rulers."],
        ],
      },
      {
        week: 5,
        title: "Missions, the new elite and cultural nationalism",
        subtopics: ["The spread of missions analysed", "The Saro and the rise of an educated elite", "Crisis in the missions and the African churches", "Cultural nationalism"],
        objectives: ["Analyse the factors that aided and hindered missionary work", "Describe the rise of the educated elite", "Explain the crisis in the missions and the rise of African churches", "Explain cultural nationalism and its importance"],
        lesson: {
          title: "Educated Africans and the Colonial Challenge",
          summary: "Analyse the social and intellectual consequences of nineteenth-century missionary activity.",
          minutes: 40,
          notes: `## Factors that aided the missions
- the anti-slavery movement and its funds
- **liberated Africans (Saro)** who returned as catechists, teachers and traders
- rulers seeking **allies** (Egba, Creek Town)
- **quinine** and the steamship
- the policy of **Henry Venn**, CMS Secretary: a "**self-governing, self-supporting, self-propagating**" native church led by African clergy
- schools, which people desired for the new opportunities they opened

## Factors that hindered them
disease and death; attachment to traditional religion and polygamy; **Islam** in the north; suspicion of missionaries as agents of foreign power; rivalry among denominations; the wars.

## The educated elite
In **Lagos, Abeokuta, Calabar and Onitsha** a new class emerged: clergy, teachers, clerks, merchants, lawyers, doctors and journalists.
- **Bishop Crowther** and his Niger Mission staff
- **James Johnson** ("Holy Johnson") — pastor and champion of African leadership
- **Christopher Sapara Williams** — the first Nigerian lawyer
- doctors such as **Obadiah Johnson** and **J.K. Randle**
- **Samuel Johnson** — historian of the Yoruba
- merchants like **R.B. Blaize** and **J.P.L. Davies**; women traders such as **Madam Tinubu**
- newspapers: *Anglo-African* (1863), *Lagos Times*, *Lagos Observer*, *Lagos Weekly Record* (**John Payne Jackson**, 1891)
At first they admired British ways and expected to be partners in "civilising" the country.

## The crisis
From the 1880s **racial attitudes hardened** in Europe ("scientific" racism, the scramble).
- young European missionaries attacked the **Niger Mission**; in **1890** Crowther's African agents were dismissed or suspended on charges largely unproved; the bishop resigned from the finance committee and died in **1891**; a European succeeded him
- Africans were passed over in the church, the civil service and medicine; pay scales were unequal
- British trading firms squeezed out African merchants

## The African churches
In protest, Africans founded churches under their own control:
- the **Native Baptist Church** (1888)
- the **United Native African Church** (1891)
- the **African Church (Bethel)** (1901)
- later, prophet-healing (**Aladura**) churches from about 1918: Christ Apostolic Church, Cherubim and Seraphim
They kept Christian doctrine but allowed African leadership, music, and in some cases polygamy.

## Cultural nationalism
A movement to **assert the worth of African culture**:
- inspired by **Edward Wilmot Blyden** (ideas of "African personality")
- adoption of **African names and dress**: David Brown Vincent became **Mojola Agbebi**; others followed
- research into **history, language and customs**: Samuel Johnson's *History*; studies of Ifa; Yoruba school readers
- defence of African institutions against missionary condemnation
- demand for a West African **university**
- sometimes called **Ethiopianism** ("Africa for the Africans")

## Significance
- the first organised challenge to European claims of superiority
- trained leaders and created a **press** tradition
- provided the bridge from **resistance** to **political nationalism** in the twentieth century
- limitations: confined to a small coastal elite; focused on culture and church rather than political power.`,
          examples: `**Example 1.** What was Henry Venn's policy? *Answer:* A **self-governing, self-supporting, self-propagating** African church.

**Example 2.** What happened to Crowther's Niger Mission in 1890? *Answer:* His African staff were **purged** by European missionaries.

**Example 3.** Give one expression of cultural nationalism. *Answer:* Taking **African names and dress** (e.g. Mojola Agbebi).`,
        },
        questions: [
          ["E", "The CMS Secretary who advocated a self-governing African church was", "Henry Venn", "Henry Townsend", "Hope Waddell", "Thomas Bowen", "He supported Crowther's appointment."],
          ["E", "David Brown Vincent changed his name to", "Mojola Agbebi", "James Johnson", "Herbert Macaulay", "Samuel Johnson", "It was an act of cultural nationalism."],
          ["E", "The first Nigerian lawyer was", "Sapara Williams", "Herbert Macaulay", "Kitoyi Ajasa", "Eric Moore", "He practised in Lagos."],
          ["M", "The thinker whose ideas of 'African personality' inspired cultural nationalists was", "Edward Blyden", "Marcus Garvey", "Henry Venn", "Booker T. Washington", "He was born in the West Indies."],
          ["M", "The first of the independent African churches in Nigeria, founded in 1888, was the", "Native Baptist Church", "African Church (Bethel)", "Christ Apostolic Church", "Qua Iboe Church", "It broke from the American Baptist mission."],
          ["M", "The Lagos Weekly Record was edited by", "John Payne Jackson", "Ernest Ikoli", "Nnamdi Azikiwe", "Henry Townsend", "It began in 1891."],
          ["M", "The prophet-healing churches that arose from about 1918 are known as", "Aladura", "Saro", "Aguda", "Ethiopian", "The name refers to prayer."],
          ["H", "The purge of the Niger Mission in 1890 reflected", "a hardening of European racial attitudes at the time of the scramble", "the failure of African clergy", "a shortage of funds", "Crowther's wish to retire", "Africans were no longer trusted with leadership."],
          ["H", "Cultural nationalism was historically important mainly because it", "challenged European claims of superiority and prepared the way for political nationalism", "ended colonial rule", "restored the old kingdoms", "rejected Christianity entirely", "It built pride and leadership."],
          ["H", "A limitation of nineteenth-century cultural nationalism was that it", "was confined to a small educated coastal elite", "had no leaders", "opposed education", "was organised by the colonial government", "It did not yet mobilise the mass of the people."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "The scramble and the British conquest: an analysis",
        subtopics: ["Theories of imperialism", "The partition and the Nigerian boundaries", "Stages and methods of conquest", "African responses analysed"],
        objectives: ["Explain the main theories of European imperialism", "Describe how Nigeria's boundaries were fixed", "Analyse the stages and methods of British conquest", "Analyse the range of African responses"],
        lesson: {
          title: "Why and How Nigeria Was Conquered",
          summary: "Analyse the causes, process and responses to the British conquest of Nigeria.",
          minutes: 40,
          notes: `## Theories of imperialism
Historians explain the late nineteenth-century scramble in different ways:
- **economic**: industrial capitalism needed raw materials, markets and outlets for investment (**Hobson**; **Lenin** — imperialism as the "highest stage of capitalism")
- **strategic**: Britain acted to protect routes to India after occupying Egypt (1882), setting off a chain reaction (**Robinson and Gallagher**)
- **political/diplomatic**: rivalry and prestige among the European powers; Bismarck's diplomacy
- **the periphery**: crises on the African side — the breakdown of commercial relations in the era of legitimate trade — drew governments in (**Hopkins**)
- **technological**: quinine, steamships, the telegraph and the machine gun made it possible
- **ideological**: racism, the "civilising mission", missionary pressure
For Nigeria, **trade** — the wish of British merchants for direct access to the interior, and fear of French and German tariffs — was central.

## The partition
- **Berlin Conference (1884–85)**: free navigation of the Niger; "effective occupation"; Britain's claim to the lower Niger admitted
- **Anglo-German agreements** (1885, 1893) fixed the eastern boundary with Kamerun
- **Anglo-French agreements** (1889, 1890, **1898**) fixed the west and north after the "race to **Borgu**", where Lugard obtained a treaty at Nikki (1894) and the **WAFF** faced French troops
The boundaries cut across peoples — **Yoruba** in Nigeria and Dahomey; **Hausa** in Nigeria and Niger; **Borno** split three ways.

## Stages of conquest
1. **consular and naval pressure** on the coast (1849–85)
2. **chartered company** rule on the Niger (1886–99)
3. **protectorates** proclaimed (1885, 1893, 1900)
4. **military conquest** of the interior (1892–1903 and after)
5. "**pacification**" patrols until about 1914

## Methods
treaties; gunboats; deportation of rulers; punitive expeditions; alliance with one group against another; use of African troops; persuasion through missionaries and traders.

## African responses
Historians once divided rulers into "resisters" and "collaborators". Most now see **a range of strategies** aimed at preserving as much independence as possible:
- **confrontation**: Benin, Ijebu, Nana, Sokoto, the Aro, Ekumeku
- **diplomacy and delay**: Jaja; the Egba, who kept self-government until 1914
- **alliance**: some rulers sought British help against rivals — e.g. Ibadan's acceptance of a Resident; emirs who submitted to keep their thrones
- **withdrawal**: Attahiru's hijra
- **adaptation**: using Western education and law to defend rights
The same ruler might use several in turn.

## Why conquest succeeded
- the **technological gap**
- **political division** among African states
- the British could concentrate force at one point; African states could not combine
- economic dependence on European trade and arms
- the limited aims many rulers attributed to the British

## Consequences
loss of sovereignty; new boundaries; a single authority over many peoples; the beginning of the colonial state.`,
          examples: `**Example 1.** Give two theories explaining imperialism. *Answer:* **Economic** (raw materials and markets) and **strategic** (protecting routes).

**Example 2.** What was the "race to Borgu"? *Answer:* The **Anglo-French rivalry** for treaties and posts in Borgu in the 1890s.

**Example 3.** Why is the resister/collaborator division too simple? *Answer:* Rulers used a **range of strategies** to preserve independence.`,
        },
        questions: [
          ["E", "The principle that a power must actually control territory it claimed is", "effective occupation", "indirect rule", "free trade", "assimilation", "It was agreed at Berlin."],
          ["E", "The western and northern boundaries of Nigeria were settled mainly with", "France", "Germany", "Portugal", "Belgium", "The key agreement was in 1898."],
          ["E", "The writer who described imperialism as the highest stage of capitalism was", "Lenin", "Lugard", "Bismarck", "Blyden", "It is an economic explanation."],
          ["M", "The treaty Lugard obtained during the race to Borgu was at", "Nikki", "Lokoja", "Bussa", "Jebba", "It was signed in 1894."],
          ["M", "The historians who stressed Britain's strategic concern for the route to India were", "Robinson and Gallagher", "Hobson and Lenin", "Dike and Ajayi", "Rodney and Williams", "They began their explanation with Egypt in 1882."],
          ["M", "A people divided by the Nigeria–Niger boundary are the", "Hausa", "Igbo", "Edo", "Ijaw", "The Yoruba were divided by the western boundary."],
          ["M", "The eastern boundary of Nigeria was first agreed with", "Germany", "France", "Spain", "Italy", "Germany held Kamerun."],
          ["H", "For Nigeria, the most direct cause of British expansion was", "the desire of British traders for secure, direct access to interior markets", "the search for gold", "a wish to settle British farmers", "the defence of India", "Fear of rival tariffs added urgency."],
          ["H", "The modern view of African responses to conquest holds that rulers", "used varied strategies to keep as much independence as possible", "were either heroes or traitors", "all welcomed colonial rule", "did nothing", "Confrontation and diplomacy were both used."],
          ["H", "The arbitrary nature of the colonial boundaries is shown by the fact that", "they divided peoples such as the Yoruba and Hausa between different colonies", "they followed ethnic lines exactly", "Africans drew them", "they have since been abolished", "They were fixed by European agreements."],
        ],
      },
      {
        week: 2,
        title: "Colonial administration, 1900–1945",
        subtopics: ["The machinery of colonial government", "Indirect rule in theory and practice", "Reforms and criticisms", "The legislative councils"],
        objectives: ["Describe the machinery of colonial government", "Analyse indirect rule in theory and practice", "Explain the reforms and criticisms of the system", "Trace the development of the legislative councils"],
        lesson: {
          title: "Governing the Colony",
          summary: "Analyse the structure and working of British colonial administration in Nigeria.",
          minutes: 40,
          notes: `## The machinery
- the **Secretary of State for the Colonies** and the **Colonial Office** in London
- the **Governor** (Governor-General under Lugard, 1914–19): head of the executive, with wide powers including veto and reserved powers
- the **Executive Council** — senior officials; the first Africans were appointed only in **1943**
- the **Legislative Council**
- **Lieutenant-Governors** (later Chief Commissioners) for the Northern and Southern Provinces
- **Residents** (provinces) and **District Officers** (divisions)
- technical departments: railways, public works, medical, education, agriculture, police
- revenue: customs duties, direct tax, railway receipts — the colony had to be **self-supporting**

## Indirect rule: the theory
Set out in Lugard's **Political Memoranda** and *The Dual Mandate*:
- rule through **indigenous institutions**, modified by British guidance
- the "dual mandate": to develop the colony's resources for the world and to advance the welfare of its people
- three pillars: **Native Authority**, **Native Courts**, **Native Treasury**
- direct **taxation** as the link between ruler and ruled

## In practice
- **North**: the model; emirs strengthened and protected; Christian missions and Western schools restricted; the *talakawa* had no voice
- **West**: Lugard extended it after 1914; the **Alaafin** was built up; taxation riots at **Iseyin (1916)** and **Abeokuta (1918)**
- **East**: **warrant chiefs** and Native Courts with powerful **court clerks**; corruption; the **Women's War (1929)**
- **Lagos Colony**: ruled directly, under English law

## Reforms
- **Sir Hugh Clifford** (1919–25) criticised Lugard's system as secretive and stagnant, and introduced the 1922 constitution
- after 1929, officials (e.g. **Meek**, **Jeffreys**) studied Igbo and Ibibio institutions; councils of elders and "clan councils" replaced warrant chiefs
- **Sir Donald Cameron** (1931–35): reformed the Native Courts (appeals, professional judges), insisted that Native Authorities must have **popular acceptance**, opposed turning emirates into separate states, and opened the way for educated men
- from the late 1940s, **local government** by elected councils began to replace Native Authorities (East 1950, West 1952)

## Criticisms of indirect rule
- it **froze** societies and discouraged change
- it made rulers **agents of the colonial state**, less accountable to their people
- it **excluded** the educated elite, turning them into opponents
- it sharpened **ethnic and regional** separateness
- it was applied dogmatically where it did not fit
### In its defence
cheap; avoided the dislocation of direct rule; preserved institutions that later became channels of local government.

## The legislative councils
- **1862**: a small Legislative Council for **Lagos Colony**, with nominated members
- **1914**: the **Nigerian Council** — advisory, ineffective
- **1922** (Clifford): 46 members; **four elected**; jurisdiction over the South only
- **1946** (Richards): the North included; unofficial majority; regional councils
Throughout, officials held the real power; the councils were forums for criticism by a few Africans.

## Comparison
British indirect rule contrasted with French **assimilation and direct administration** (see third term).`,
          examples: `**Example 1.** What were the three pillars of indirect rule? *Answer:* **Native Authority, Native Courts and Native Treasury**.

**Example 2.** Which governor reformed indirect rule in 1931–35? *Answer:* **Sir Donald Cameron**.

**Example 3.** When were Africans first appointed to the Executive Council? *Answer:* **1943**.`,
        },
        questions: [
          ["E", "The British official in charge of a division was the", "District Officer", "Resident", "Governor", "Lieutenant-Governor", "He supervised the Native Authority."],
          ["E", "The governor who reformed the Native Courts in the early 1930s was", "Donald Cameron", "Hugh Clifford", "Arthur Richards", "Graeme Thomson", "He served from 1931 to 1935."],
          ["E", "Lagos Colony under British rule was governed", "directly", "through emirs", "through warrant chiefs", "by the Royal Niger Company", "English law applied there."],
          ["M", "Africans were first appointed to the Governor's Executive Council in", "1943", "1922", "1914", "1951", "Until then it was entirely official."],
          ["M", "The term 'dual mandate' referred to the duty to develop resources for the world and to", "advance the welfare of the colonial peoples", "spread Christianity", "abolish chiefs", "grant independence", "Lugard used it as the title of his book."],
          ["M", "A Legislative Council for Lagos Colony was first set up in", "1862", "1900", "1914", "1922", "Its members were nominated."],
          ["M", "The officials whose power made the Native Courts of the East notorious were the", "court clerks", "alkalis", "ilari", "kachalla", "They and the warrant chiefs were accused of corruption."],
          ["H", "Cameron's insistence that Native Authorities needed popular acceptance was a criticism of", "the Lugardian practice of propping up rulers regardless of local opinion", "the elective principle", "missionary education", "direct taxation", "He wanted the system to be more flexible."],
          ["H", "Indirect rule turned the educated elite into opponents of the colonial government because it", "gave them no place in the administration of their own areas", "taxed them more heavily", "closed their newspapers", "sent them abroad", "They had expected partnership."],
          ["H", "The requirement that a colony be financially self-supporting meant that", "development was limited to what local revenue could pay for", "Britain paid for all services", "no taxes were collected", "Nigerians controlled the budget", "Spending on welfare was small."],
        ],
      },
      {
        week: 3,
        title: "The colonial economy analysed",
        subtopics: ["Land and labour policies", "Agriculture, mining and transport", "Trade, finance and the expatriate firms", "Development planning and assessment"],
        objectives: ["Explain colonial land and labour policies", "Analyse the development of agriculture, mining and transport", "Explain the structure of trade and finance", "Assess colonial development planning and its legacy"],
        lesson: {
          title: "Who Benefited?",
          summary: "Analyse the structure and legacy of the colonial economy in Nigeria.",
          minutes: 40,
          notes: `## Land policy
- in the **North**, the **Land and Native Rights Proclamation (1910)** placed all land under the control of the **Governor**, to be held in trust; this prevented a market in land and the growth of a landlord class
- in the **South**, land remained with families and communities under customary law; alienation to non-natives needed government approval
- the government **refused** the request of **William Lever** (Lever Brothers) for large **palm plantations** — West African policy favoured **peasant production**, unlike Kenya or the Belgian Congo
- **forest reserves** and mining leases took some land

## Labour
- **forced labour** for railways, roads and porterage in the early period, recruited through chiefs
- **taxation** pushed men into wage labour and cash-cropping
- **migrant labour**: to the cocoa belt, the Jos tin mines, the Enugu coalfield and the railways
- low wages; racial pay scales; poor conditions on the minefields
- **trade unions** legalised in **1938**; rapid growth in the 1940s

## Agriculture
- export crops grown by **small farmers** using family labour: cocoa (spread by African initiative from the 1890s), palm produce, groundnuts (boom after the railway reached Kano in 1912), cotton (promoted by the **British Cotton Growing Association**), rubber
- research stations (Moor Plantation, Samaru) and departments of agriculture
- **food production** received little attention

## Mining
- **tin** — Jos Plateau: African smelters were displaced by foreign companies using wage labour
- **coal** — Enugu (state-owned)
- minerals were vested in the **Crown**; royalties went to government

## Transport
railways (western line 1896–1912; eastern line 1913–26), **Lagos harbour** works, river fleets, feeder roads; from the 1920s motor lorries — many owned by Africans.

## Trade
- an **export–import** economy dominated by a few **expatriate firms**: after mergers, the **United Africa Company (1929)**, a subsidiary of Unilever, handled a very large share
- firms formed **pools** to fix buying prices — provoking the **cocoa hold-up (1937–38)** in the Gold Coast and Nigeria and the **Nowell Commission**
- **Lebanese** and Syrian traders occupied the middle level
- African merchants, strong in the nineteenth century, were reduced to produce buyers and retailers

## Finance
- the **West African Currency Board (1912)**: local currency fully backed by sterling held in London — no independent monetary policy
- the **Bank of British West Africa** and Barclays financed expatriate trade; indigenous banks (National Bank 1933, African Continental Bank 1947) arose in response
- colonial reserves were invested in Britain

## Marketing boards
Wartime bulk-buying became statutory **Marketing Boards** (Cocoa 1947; Palm Produce, Groundnuts, Cotton 1949). They paid farmers **below world prices** and accumulated large surpluses — a tax on farmers, later used by regional governments.

## Development planning
- **Colonial Development and Welfare Acts (1940, 1945)** provided British grants
- the **Ten-Year Plan of Development and Welfare (1946)** — roads, water, health, education; modest and drawn up by officials
- some import-substituting industries in the 1950s (cement, textiles, brewing)

## Assessment
**Achievements:** infrastructure; a money economy; expansion of output; new skills.
**Legacy:** a **mono-cultural export economy**; little industry; regional specialisation and inequality; foreign control of commerce and banking; neglect of food and of the interior away from the railway.`,
          examples: `**Example 1.** Why were European plantations not established in Nigeria? *Answer:* Colonial policy favoured **peasant production**; Lever's request was refused.

**Example 2.** What caused the cocoa hold-up of 1937–38? *Answer:* Buying **pools** by expatriate firms to fix low prices.

**Example 3.** How did Marketing Boards affect farmers? *Answer:* They paid **below world prices**, in effect taxing farmers.`,
        },
        questions: [
          ["E", "The businessman whose request for palm plantations in Nigeria was refused was", "William Lever", "George Goldie", "John Holt", "Cecil Rhodes", "Policy favoured peasant farmers."],
          ["E", "Trade unions were legalised in Nigeria in", "1938", "1914", "1945", "1960", "They grew rapidly in the 1940s."],
          ["E", "The Cocoa Marketing Board was set up in", "1947", "1929", "1912", "1960", "Other boards followed in 1949."],
          ["M", "The 1910 proclamation that placed northern land under the Governor's control was the", "Land and Native Rights Proclamation", "Land Use Decree", "Native Authority Ordinance", "Minerals Ordinance", "It prevented a free market in land."],
          ["M", "The commission that investigated the cocoa hold-up was the", "Nowell Commission", "Willink Commission", "Watson Commission", "Phillipson Commission", "It examined the buying agreements."],
          ["M", "The first Colonial Development and Welfare Act was passed in", "1940", "1922", "1900", "1957", "A second followed in 1945."],
          ["M", "The United Africa Company was a subsidiary of", "Unilever", "Shell", "Barclays", "Elder Dempster", "It was formed by merger in 1929."],
          ["H", "The currency-board system limited Nigeria's economic freedom because", "local money had to be fully backed by sterling reserves held in London", "it banned coins", "it allowed unlimited printing", "it was run by African banks", "There was no independent monetary policy."],
          ["H", "Indigenous banks were founded in the 1930s and 1940s mainly because", "expatriate banks seldom lent to African businessmen", "the government required them", "there was too much money", "foreign banks had closed", "Africans needed credit."],
          ["H", "The principal structural weakness left by the colonial economy was", "reliance on a few primary exports with little manufacturing", "over-industrialisation", "the absence of any trade", "too much food production", "This made the economy vulnerable to world prices."],
        ],
      },
      {
        week: 4,
        title: "Nigerian nationalism to 1945: an analysis",
        subtopics: ["Phases and types of nationalism", "External influences", "Organisations and leaders", "Achievements and limitations before 1945"],
        objectives: ["Distinguish the phases and types of Nigerian nationalism", "Assess external influences on the movement", "Evaluate the main organisations and leaders", "Assess the achievements and limitations of nationalism before 1945"],
        lesson: {
          title: "The Growth of a Movement",
          summary: "Analyse the development of Nigerian nationalism up to the end of the Second World War.",
          minutes: 40,
          notes: `## Phases
1. **primary resistance** (to c. 1914): defence of sovereignty by traditional states
2. **cultural nationalism** and protest (c. 1880–1920): the educated elite, the African churches, the press
3. **constitutional or elite nationalism** (1920–39): demand for reform and representation — NCBWA, NNDP, NYM
4. **mass or militant nationalism** (from the 1940s): parties, labour and youth demanding self-government

## Grievances
exclusion from the senior service; discrimination; land and water-rate issues; taxation; the commercial dominance of expatriate firms; limited higher education; the indignities of indirect rule; censorship laws.

## External influences
- **Pan-Africanism**: the congresses organised by **W.E.B. Du Bois** (1919–27); **Marcus Garvey's** Universal Negro Improvement Association and its slogan "Africa for the Africans" — branches existed in Lagos
- the **West African Students' Union** in London (1925): a training ground for leaders; it campaigned against the colour bar and for dominion status
- study in **America** — **Azikiwe**, Eyo Ita — brought a more assertive style
- the **Italian invasion of Ethiopia (1935)** aroused anger across Africa
- **Indian** nationalism; **socialist** ideas
- the **Second World War**: the fall of Singapore, the Atlantic Charter, service overseas

## Organisations and leaders
### NCBWA (1920)
Demands: elected majority in the legislature; a West African university and appeal court; end of discrimination; separation of the judiciary. Weakness: elitist, inter-territorial, opposed by governors and chiefs. Result: the elective principle of 1922.
### Herbert Macaulay and the NNDP (1923)
Skilled use of Lagos issues — the **Eleko affair**, the Apapa land case — and of his paper, the *Lagos Daily News*. Dominated Lagos elections for fifteen years. Limit: local, and loyal to the "manifest benefits" of British connection.
### The Nigerian Youth Movement (1936–41)
- the **Youth Charter**: unity of Nigeria's peoples; "complete autonomy within the British Empire"; economic opportunity
- national in membership; won Lagos in 1938; campaigned against the cocoa pool
- destroyed by the **1941 crisis**
### The press
**Azikiwe's** *West African Pilot* (1937) — "Show the light and the people will find the way" — popularised nationalism with a lively style and a chain of provincial papers.
### Labour and others
railway workers under **Imoudu**; the **Nigerian Union of Teachers (1931)**; the **Nigerian Union of Students (1939)**, which called the meeting that founded the **NCNC (1944)**; ethnic unions.

## Achievements before 1945
- the principle of elected representation
- a tradition of political journalism and public debate
- the idea of **Nigeria** as a nation spread among the educated
- experience of organisation
- concessions such as Africans on the Executive Council (1943) and plans for a university

## Limitations
- centred on **Lagos** and the south; the **North** scarcely involved
- led by a small professional elite; little rural following
- aims were **reformist**, not yet independence
- personal and **ethnic rivalries** (1941) foreshadowed later divisions
- colonial government could ignore or divide them

## Turning point
The war years transformed nationalism into a mass movement with a clear goal: **self-government**.`,
          examples: `**Example 1.** Name the four phases of Nigerian nationalism. *Answer:* **Primary resistance; cultural nationalism; constitutional (elite) nationalism; mass nationalism**.

**Example 2.** What did the NYM's Youth Charter demand? *Answer:* **National unity and autonomy within the British Empire**.

**Example 3.** Which event of 1935 angered Africans? *Answer:* The **Italian invasion of Ethiopia**.`,
        },
        questions: [
          ["E", "The Pan-African leader whose slogan was 'Africa for the Africans' was", "Marcus Garvey", "W.E.B. Du Bois", "Edward Blyden", "George Padmore", "He founded the UNIA."],
          ["E", "The motto of the West African Pilot was", "Show the light and the people will find the way", "One North, one people", "Freedom for all, life more abundant", "Unity and faith", "Azikiwe founded the paper in 1937."],
          ["E", "The country whose invasion by Italy in 1935 aroused African anger was", "Ethiopia", "Liberia", "Egypt", "Libya", "It was one of only two independent African states."],
          ["M", "The meeting that founded the NCNC in 1944 was called by the", "Nigerian Union of Students", "Nigerian Union of Teachers", "Lagos Chamber of Commerce", "Egbe Omo Oduduwa", "Many organisations attended."],
          ["M", "The Nigerian Youth Movement's programme was set out in the", "Youth Charter", "Freedom Charter", "Atlantic Charter", "Sardauna's eight points", "It called for unity and autonomy."],
          ["M", "The issue of the deposed Lagos ruler championed by Macaulay is known as the", "Eleko affair", "Akassa raid", "Adubi rising", "Enugu shooting", "Oba Eshugbayi was later restored."],
          ["M", "The early Pan-African Congresses of 1919–27 were organised by", "W.E.B. Du Bois", "Kwame Nkrumah", "Herbert Macaulay", "Casely Hayford", "The first met in Paris."],
          ["H", "Nationalism between 1920 and 1939 is described as 'constitutional' or 'elite' because it", "sought reform through petitions and elections and was led by a small professional class", "used armed struggle", "was led by farmers", "demanded immediate independence", "It had little mass following."],
          ["H", "A major limitation of pre-1945 nationalism was that", "the North was hardly involved", "it had no newspapers", "it rejected education", "it was led by chiefs", "It was centred on Lagos and the south."],
          ["H", "The 1941 crisis in the NYM was significant for the future because it", "showed how personal rivalry could take on an ethnic form in politics", "ended all newspapers", "led to independence", "united the regions", "It foreshadowed the regional parties."],
        ],
      },
      {
        week: 5,
        title: "Decolonisation, 1945–1960: an analysis",
        subtopics: ["Why Britain decolonised", "Constitutional change and the growth of regionalism", "The parties, the leaders and the issues", "The independence settlement assessed"],
        objectives: ["Explain why Britain decided to transfer power", "Analyse how constitutional change fostered regionalism", "Assess the parties, leaders and issues of the 1950s", "Assess the strengths and weaknesses of the independence settlement"],
        lesson: {
          title: "The Transfer of Power",
          summary: "Analyse the process and outcome of Nigeria's decolonisation.",
          minutes: 40,
          notes: `## Why Britain decolonised
- **nationalist pressure**: parties, strikes (1945), the Zikists, the Enugu shooting (1949), the press
- **Britain's weakness** after 1945 and dependence on the USA, which disliked old empires
- the **example of India (1947)** and the **Gold Coast riots (1948)**, which convinced London to move ahead of events
- a new policy of **partnership** and planned constitutional advance (Governor **Macpherson** and Chief Secretary Hugh Foot)
- international opinion: the UN, the Soviet bloc
- calculation: friendly successor governments would protect British **trade and investment**

## Constitutional change and regionalism
| Constitution | Effect on regionalism |
|---|---|
| **Richards (1946)** | created three regions and regional councils |
| **Macpherson (1951)** | regional legislatures as electoral colleges for the centre — to gain power at the centre a party had first to win a region |
| **Lyttleton (1954)** | full **federalism**; regional premiers, civil services, marketing boards, residual powers |
Each step **strengthened the regions**. Combined with one dominant ethnic group and one party in each region, this produced the "**tripod**": **NPC–North, AG–West, NCNC–East**.

## The parties and their outlooks
- **NCNC**: began as a national front; favoured a stronger centre; after 1951 increasingly identified with the East
- **Action Group**: disciplined, with a programme (free primary education, 1955); argued for **federalism** based on ethnic-linguistic units; later championed minority states outside the West
- **NPC**: conservative, linked to the Native Authorities; aimed to protect northern interests — "One North"; insisted on half the seats in the federal legislature
- **NEPU, UMBC, UNIP, BYM**: opposition parties in the regions, often allied with a major party from another region

## The issues
1. **the timing of self-government** — the 1953 motion and crisis
2. **the form of the state** — unitary, federal or confederal
3. **representation** — the North's claim to 50 per cent of seats on the basis of population
4. **the status of Lagos** — kept as federal territory against the AG's wishes
5. **revenue allocation** — by need, by national interest, or by **derivation** (favoured by the richer regions); commissions: **Phillipson (1946)**, **Hicks–Phillipson (1951)**, **Chick (1953)**, **Raisman (1958)**
6. **minorities** and new states — the **Willink Commission**
7. **Northernisation** of the northern public service to offset southern advantage
8. the **police**, the judiciary and fundamental rights

## The leaders
**Azikiwe** (Premier of the East 1954–59), **Awolowo** (Premier of the West 1954–59), **Ahmadu Bello** (Premier of the North, who chose to stay there) and **Tafawa Balewa** (Prime Minister from 1957): men of ability whose regional bases shaped their politics.

## The settlement of 1960
### Strengths
- peaceful, negotiated transfer of power
- a federal constitution with fundamental rights
- experienced leaders and a trained civil service at the top
- goodwill abroad
### Weaknesses
- an **unbalanced federation**: one region larger than the rest combined
- **strong regions, weak centre**
- **regional parties** and ethnic voting
- unresolved **minority** demands
- an economy dependent on primary exports
- educational and economic **inequality** between North and South
- the armed forces and police untested

## Conclusion
Independence was a real achievement, but the structure inherited carried the seeds of the crises of 1962–66.`,
          examples: `**Example 1.** Give two reasons Britain decolonised. *Answer:* **Nationalist pressure** and **Britain's post-war weakness** (also India's example).

**Example 2.** What principle of revenue allocation did richer regions prefer? *Answer:* **Derivation**.

**Example 3.** State one weakness of the 1960 settlement. *Answer:* An **unbalanced federation** with the North larger than the others combined.`,
        },
        questions: [
          ["E", "The principle of sharing revenue according to where it was produced is", "derivation", "need", "equality of states", "national interest", "The richer regions favoured it."],
          ["E", "The revenue allocation commission of 1958 was headed by", "Raisman", "Willink", "Phillipson", "Chick", "It reported before independence."],
          ["E", "Free primary education was introduced in the Western Region in", "1955", "1946", "1960", "1976", "It was an Action Group programme."],
          ["M", "The northern policy of filling its public service with northerners was called", "Northernisation", "Nigerianisation", "indigenisation", "assimilation", "It aimed to offset southern educational advantage."],
          ["M", "The Premier of the North who chose to remain in his region rather than become Prime Minister was", "Ahmadu Bello", "Tafawa Balewa", "Aminu Kano", "Kashim Ibrahim", "His deputy went to the centre."],
          ["M", "The event in the Gold Coast that pushed Britain to speed up constitutional change was the", "Accra riots of 1948", "Yaa Asantewaa War", "cocoa hold-up", "Bond of 1844", "It showed the danger of delay."],
          ["M", "The party that argued most consistently for federalism based on ethnic-linguistic units was the", "Action Group", "NPC", "NEPU", "NNDP", "Awolowo set out the case in his writings."],
          ["H", "The Macpherson Constitution encouraged regional parties because", "control of a regional legislature was the route to seats at the centre", "it banned national parties", "it abolished elections", "it created twelve states", "Regional houses acted as electoral colleges."],
          ["H", "The North's insistence on half the federal seats rested on", "its share of the population and fear of southern domination", "its greater wealth", "its number of graduates", "a British order", "It would not otherwise join a self-governing federation."],
          ["H", "The independence settlement is criticised chiefly because it left", "strong regions under regional parties and a comparatively weak centre", "no constitution", "a one-party state", "British officials in full control", "This structure contributed to the crises of the 1960s."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Sierra Leone and Liberia",
        subtopics: ["The founding of Sierra Leone", "The Creoles and their influence", "The founding of Liberia", "Liberia's problems and survival"],
        objectives: ["Narrate the founding of Sierra Leone", "Assess the influence of the Creoles in West Africa", "Narrate the founding of Liberia", "Explain how Liberia survived and the problems it faced"],
        lesson: {
          title: "Settlements for the Freed",
          summary: "Analyse the origins and development of Sierra Leone and Liberia.",
          minutes: 40,
          notes: `## Sierra Leone
### Founding
- **1787**: **Granville Sharp** and other abolitionists sent the "**Black Poor**" of London to found the "**Province of Freedom**"; the first settlement failed
- **1792**: about 1,100 **Nova Scotians** — former American slaves who had fought for Britain — arrived under **John Clarkson** (with **Thomas Peters** as their spokesman) and founded **Freetown**, under the **Sierra Leone Company**
- **1800**: the **Maroons** from Jamaica
- **1808**: the settlement became a **Crown Colony** and the base of the **naval squadron**; slave ships were condemned in the Vice-Admiralty and Mixed Commission courts
- **recaptives (liberated Africans)**: tens of thousands freed from slave ships — many **Yoruba (Aku)** and **Igbo** — were settled in villages around Freetown

### The Creoles (Krio)
The descendants of settlers and recaptives blended into a new society with its own language (**Krio**), Christian, educated and commercially active.
- **Fourah Bay College** (founded **1827**, affiliated to Durham University in **1876**) made Freetown the "**Athens of West Africa**"; its first student was **Samuel Ajayi Crowther**
- Creoles served across British West Africa as **clergy, teachers, clerks, doctors, lawyers, traders** — pioneers such as **Africanus Horton** (doctor and author), **Samuel Lewis** (lawyer, first African knighted), **James Johnson**
- they carried Christianity and education to **Nigeria** (the Saro), the Gambia and the Gold Coast

### Later history
- a **Protectorate** was declared over the interior in **1896**; the **Hut Tax War (1898)**, led by **Bai Bureh**, was a major resistance
- after the 1890s Europeans displaced Creoles from senior posts
- tension between **Colony (Creole)** and **Protectorate** peoples marked politics up to independence (**27 April 1961**, under **Milton Margai**)

## Liberia
### Founding
- the **American Colonization Society** (founded 1816) wished to resettle free African Americans in Africa — from mixed motives: humanitarian, missionary, and the desire of slave-owners to remove free blacks
- **1822**: the first settlers landed at **Cape Mesurado**; the town was named **Monrovia** after President **James Monroe**
- leaders such as **Jehudi Ashmun** organised the colony; other settlements joined
- **26 July 1847**: Liberia declared **independence** — the first African republic; **Joseph Jenkins Roberts** was its first President
- the constitution, flag and institutions were modelled on those of the **United States**

### The Americo-Liberians
The settlers and their descendants — a small minority on the coast — monopolised government through the **True Whig Party** (in power from 1878 to 1980) and treated the indigenous peoples (Kpelle, Gola, Kru, Grebo, Vai) as subjects, with forced labour and a hut tax. The **Vai** had earlier invented their own script.

### Problems
- **finance**: foreign loans (1871, 1906, 1912) on harsh terms; customs put under foreign control
- **loss of territory** to Britain and France
- revolts in the interior
- the **Fernando Po labour scandal (1930)** — a League of Nations inquiry into forced labour
- dependence on the **Firestone** rubber company (concession of **1926**)

### Why Liberia survived the scramble
American diplomatic support; rivalry between Britain and France; its recognised statehood.

### Later history
**William Tubman** (1944–71): the "**Open Door**" (foreign investment) and "**Unification**" policies. The settler oligarchy was overthrown by **Samuel Doe's** coup in **1980**.

## Comparison
both were founded for freed slaves; in both, settler communities held themselves apart from the interior peoples; Sierra Leone became a colony, Liberia an independent — though dependent — republic.`,
          examples: `**Example 1.** Who founded Freetown in 1792? *Answer:* The **Nova Scotians**, under John Clarkson.

**Example 2.** Why was Freetown called the Athens of West Africa? *Answer:* Because of **Fourah Bay College** and its educated Creoles.

**Example 3.** When did Liberia become independent? *Answer:* **26 July 1847**.`,
        },
        questions: [
          ["E", "Freetown is the capital of", "Sierra Leone", "Liberia", "Gambia", "Ghana", "It was founded in 1792."],
          ["E", "The capital of Liberia is named after", "James Monroe", "Abraham Lincoln", "George Washington", "Thomas Peters", "He was President of the United States."],
          ["E", "The first President of Liberia was", "Joseph Jenkins Roberts", "William Tubman", "Samuel Doe", "Jehudi Ashmun", "He took office in 1847."],
          ["M", "Fourah Bay College was affiliated to Durham University in", "1876", "1827", "1808", "1896", "It had been founded in 1827."],
          ["M", "The leader of the Hut Tax War of 1898 in Sierra Leone was", "Bai Bureh", "Samori Touré", "Milton Margai", "Africanus Horton", "It was a major resistance to the protectorate."],
          ["M", "The party that ruled Liberia from 1878 to 1980 was the", "True Whig Party", "Convention People's Party", "Republican Party", "People's Progressive Party", "It represented the Americo-Liberians."],
          ["M", "The body that sent the first settlers to Liberia was the", "American Colonization Society", "Sierra Leone Company", "African Association", "Church Missionary Society", "It was founded in 1816."],
          ["H", "The Creoles were important to the wider history of West Africa mainly because they", "spread Christianity, education and professional skills across the British territories", "conquered the interior", "ran the slave trade", "founded Liberia", "They served as clergy, teachers and clerks."],
          ["H", "Liberia escaped colonisation chiefly because of", "American support and Anglo-French rivalry", "its strong army", "its great wealth", "its alliance with Asante", "No power was willing to seize it outright."],
          ["H", "A feature shared by Sierra Leone and Liberia was", "a divide between coastal settler communities and the peoples of the interior", "rule by the True Whig Party", "independence in 1847", "French colonial rule", "It shaped the politics of both countries."],
        ],
      },
      {
        week: 2,
        title: "French colonial policy in West Africa",
        subtopics: ["The structure of French West Africa", "Assimilation", "Association and direct administration", "Comparison with British indirect rule"],
        objectives: ["Describe the structure of French West Africa", "Explain the policy of assimilation", "Explain the policy of association and direct administration", "Compare French and British colonial systems"],
        lesson: {
          title: "Assimilation and Association",
          summary: "Analyse French colonial policy and compare it with British indirect rule.",
          minutes: 40,
          notes: `## French West Africa
The French colonies — **Senegal, French Sudan (Mali), Guinea, Côte d'Ivoire, Dahomey, Upper Volta, Niger and Mauritania** — were grouped in **1895** into the federation of **French West Africa (AOF)**, with a **Governor-General** at **Dakar**. Each colony had a **Lieutenant-Governor**; colonies were divided into **cercles** under a **commandant** and subdivisions under French officers. The system was **highly centralised**, with orders flowing from Paris through Dakar.

## Assimilation
### Meaning
The policy of turning colonial peoples into **Frenchmen** in language, culture and law, on the belief that French civilisation was universal and that the colonies were an extension of France.
### Origins
The ideals of the **French Revolution** — liberty, equality, fraternity.
### In practice
Full assimilation was applied only in the **Four Communes** of **Senegal** — **Saint-Louis, Gorée, Dakar and Rufisque** — whose inhabitants (*originaires*) were **French citizens**: they voted, had municipal councils and elected a **deputy to the French parliament**. **Blaise Diagne** became the first black African deputy in **1914**.
Elsewhere an African could become a citizen only by meeting strict conditions (French education, service, monogamy); very few did.
### Citizens and subjects
- **citoyens**: under French law, with political rights
- **sujets**: the vast majority, with no political rights

### Why assimilation was abandoned as general policy
- too **expensive** (schools for all)
- racial theories that Africans could not be assimilated
- fear that millions of African citizens would swamp French voters
- resistance of Muslims and others attached to their own law

## Association
Adopted after about 1900–20 (associated with **Jules Harmand** and **Albert Sarraut**): Africans would develop "along their own lines" in association with France, while France retained full control. In reality it meant rule over **subjects**.

### Features of rule over subjects
- the **indigénat**: administrators could punish subjects summarily, without trial, for a list of offences
- **forced labour** (*corvée*, *prestation*) for roads, railways and plantations
- **military conscription** — the *tirailleurs sénégalais* fought in both World Wars
- **head tax**
- **chiefs** (*chefs de canton*) were appointed as **agents** — chosen for loyalty and literacy in French, moved or dismissed at will; great traditional rulers were suppressed or reduced
- education in **French** only, for a small elite; an *évolué* class attached to French culture

## Reforms after 1944
- the **Brazzaville Conference (1944)** promised change
- **1946**: the **French Union** — the indigénat and forced labour were abolished (the **Houphouët-Boigny law**); all became citizens (**Lamine Guèye law**); Africans elected deputies to Paris
- the **Loi Cadre (1956)**: universal suffrage and territorial governments
- **1958**: de Gaulle's referendum on the **French Community**

## Comparison with British indirect rule
| | French | British |
|---|---|---|
| aim | cultural assimilation / association | separate development under trusteeship |
| structure | centralised federation | separate colonies, decentralised |
| chiefs | subordinate officials | rulers of Native Authorities |
| law | French law and the indigénat | customary and Islamic law in native courts |
| education | French language; small elite | mission schools; local languages in early years |
| representation | deputies in Paris | local legislative councils |
| elite | *évolués* tied to France | elite excluded, became nationalists |
**Similarities:** both aimed at exploitation at low cost; both used chiefs; both imposed taxes and forced or cheap labour; both left export economies.

## Effects
French-speaking Africa retained close cultural, monetary (the **CFA franc**) and military ties with France after independence.`,
          examples: `**Example 1.** What was assimilation? *Answer:* The policy of making Africans **French in culture and citizenship**.

**Example 2.** Name the Four Communes. *Answer:* **Saint-Louis, Gorée, Dakar, Rufisque**.

**Example 3.** How did French treatment of chiefs differ from British? *Answer:* The French made them **subordinate agents**; the British ruled **through** them as Native Authorities.`,
        },
        questions: [
          ["E", "The capital of the federation of French West Africa was", "Dakar", "Abidjan", "Bamako", "Conakry", "The Governor-General resided there."],
          ["E", "The French policy of turning Africans into Frenchmen was called", "assimilation", "indirect rule", "apartheid", "paternalism", "It was fully applied only in part of Senegal."],
          ["E", "The first black African deputy in the French parliament was", "Blaise Diagne", "Léopold Senghor", "Houphouët-Boigny", "Sékou Touré", "He was elected in 1914."],
          ["M", "The system that allowed French officials to punish subjects without trial was the", "indigénat", "corvée", "loi cadre", "cercle", "It was abolished in 1946."],
          ["M", "The inhabitants of the Four Communes with citizenship rights were known as", "originaires", "sujets", "tirailleurs", "commandants", "They elected a deputy."],
          ["M", "The law of 1956 that gave French African territories universal suffrage and their own governments was the", "Loi Cadre", "Lamine Guèye law", "Code Napoléon", "Brazzaville Declaration", "It prepared the way for self-government."],
          ["M", "Under association, most Africans in French West Africa were classed as", "subjects", "citizens", "settlers", "protected persons", "They had no political rights."],
          ["H", "Assimilation was abandoned as a general policy mainly because", "it was costly and would have made Africans a majority of French voters", "Africans all became citizens", "Britain objected", "it succeeded too quickly", "Racial theories also played a part."],
          ["H", "The main difference between French and British use of chiefs was that the French", "treated them as appointed officials who could be moved or dismissed", "left them fully independent", "abolished them entirely", "elected them by universal suffrage", "The British preserved them as Native Authorities."],
          ["H", "A lasting consequence of French policy is that former French colonies", "kept close cultural, monetary and military ties with France", "rejected the French language", "joined the Commonwealth", "adopted indirect rule", "The CFA franc is an example."],
        ],
      },
      {
        week: 3,
        title: "Nationalism and independence in Ghana and French West Africa",
        subtopics: ["The Gold Coast to 1948", "Nkrumah, the CPP and independence", "Nationalism in French West Africa", "Guinea and the independence of 1960"],
        objectives: ["Describe nationalism in the Gold Coast up to 1948", "Explain how Nkrumah and the CPP achieved independence", "Describe nationalism in French West Africa", "Explain Guinea's choice in 1958 and the independence of 1960"],
        lesson: {
          title: "Freedom in West Africa",
          summary: "Analyse the achievement of independence in Ghana and in French West Africa.",
          minutes: 40,
          notes: `## The Gold Coast before 1948
- early organisations: the **Fante Confederation** (1868–73); the **Aborigines' Rights Protection Society (1897)**, which defeated a Lands Bill; the **NCBWA (1920)**, led by **J.E. Casely Hayford**
- a prosperous **cocoa** economy and a large educated class
- the **Burns Constitution (1946)** gave an African majority in the legislature, but most members were chosen by chiefs
- the **United Gold Coast Convention (UGCC, 1947)**, led by **J.B. Danquah** and other professionals, sought self-government "in the shortest possible time"; it invited **Kwame Nkrumah** home from London as general secretary

## 1948: the turning point
- post-war grievances: high prices, shortages, unemployed **ex-servicemen**, the cutting of diseased cocoa trees
- a **boycott** of European goods led by **Nii Kwabena Bonne**
- **28 February 1948**: police fired on a march of ex-servicemen in **Accra**; riots followed
- the UGCC leaders — the "**Big Six**" — were detained
- the **Watson Commission** recommended a new constitution; the all-African **Coussey Committee** drafted it

## Nkrumah and the CPP
- impatient with the UGCC's caution, Nkrumah founded the **Convention People's Party (CPP)** in **June 1949** — slogan "**Self-Government Now**"
- he organised the youth, workers, market women and farmers — a **mass party**
- **Positive Action** (January 1950): strikes and non-cooperation; Nkrumah was jailed
- the CPP won the **1951 election**; Nkrumah was released to become **Leader of Government Business**, then **Prime Minister (1952)**
- further victories in 1954 and 1956, against the federalist **National Liberation Movement** in Asante
- **6 March 1957**: the Gold Coast became independent as **Ghana** — the **first** black African colony to do so; a **republic** in 1960

### Significance
An inspiration to all Africa. Nkrumah declared that Ghana's independence was "meaningless unless linked with the total liberation of Africa" and hosted the **Accra conferences of 1958**.

## French West Africa
- after 1946 Africans sat in the French parliament: **Léopold Senghor** and **Lamine Guèye** (Senegal), **Félix Houphouët-Boigny** (Côte d'Ivoire)
- the **Rassemblement Démocratique Africain (RDA)** was founded at **Bamako** in **1946** as an inter-territorial party under Houphouët-Boigny; at first allied to the French Communists and repressed, it later cooperated with the government
- the aim of most leaders was **equality within** a French union, not separation
- **trade unions** (e.g. the Dakar–Niger railway strike, 1947–48) and students were more radical
- the **Loi Cadre (1956)** gave each territory its own government — and, by weakening the federation, led to the **"balkanisation"** of French West Africa into separate states (opposed by Senghor, favoured by Houphouët-Boigny)

## 1958: the referendum
**General de Gaulle** offered a choice: "Yes" to autonomy within the **French Community**, or "No" — immediate independence with the loss of all French aid.
- only **Guinea**, led by **Sékou Touré** and its trade-union based party, voted "**No**": "We prefer **poverty in freedom to riches in slavery**."
- Guinea became independent on **2 October 1958**; France withdrew officials, equipment and aid abruptly; **Ghana** and the Soviet bloc gave help

## 1960
Guinea's survival made the Community unworkable. In **1960** the other territories — Senegal, Mali, Côte d'Ivoire, Dahomey, Upper Volta, Niger, Mauritania, Togo — became independent, mostly by agreement and with **cooperation accords** tying them to France. An attempted **Mali Federation** (Senegal and Sudan) broke up within months.

## Comparison
British West Africa advanced by territorial constitutions and mass parties; French West Africa by reform from Paris, ending in sudden independence that left strong links with France.`,
          examples: `**Example 1.** What triggered the 1948 Accra riots? *Answer:* Police **shooting of ex-servicemen** on a protest march.

**Example 2.** What was the CPP's slogan? *Answer:* "**Self-Government Now.**"

**Example 3.** Which French territory voted "No" in 1958? *Answer:* **Guinea**, under Sékou Touré.`,
        },
        questions: [
          ["E", "Ghana became independent on", "6 March 1957", "1 October 1960", "2 October 1958", "27 April 1961", "It was the first black African colony to do so."],
          ["E", "The Convention People's Party was founded by", "Kwame Nkrumah", "J.B. Danquah", "Casely Hayford", "Kofi Busia", "He founded it in 1949."],
          ["E", "The leader who took Guinea to independence in 1958 was", "Sékou Touré", "Léopold Senghor", "Modibo Keita", "Hamani Diori", "He led the vote against the French Community."],
          ["M", "The inter-territorial party founded at Bamako in 1946 was the", "RDA", "CPP", "UGCC", "NLM", "Houphouët-Boigny led it."],
          ["M", "Nkrumah's campaign of strikes and non-cooperation in 1950 was called", "Positive Action", "Operation Wetie", "the Hold-Up", "the Long March", "He was imprisoned for it."],
          ["M", "The commission that inquired into the 1948 Gold Coast disturbances was the", "Watson Commission", "Willink Commission", "Coussey Committee", "Nowell Commission", "The Coussey Committee then drafted a constitution."],
          ["M", "The Asante-based movement that opposed the CPP and wanted a federal constitution was the", "National Liberation Movement", "United Gold Coast Convention", "Aborigines' Rights Protection Society", "Fante Confederation", "It arose in the mid-1950s."],
          ["H", "Nkrumah broke with the UGCC because", "he wanted a mass party demanding immediate self-government", "he opposed independence", "he was expelled for corruption", "the British asked him to", "The UGCC leaders were more cautious."],
          ["H", "The Loi Cadre of 1956 contributed to the 'balkanisation' of French West Africa because it", "gave each territory its own government and weakened the federation", "abolished all elections", "merged the colonies into one state", "handed power to chiefs", "Separate states emerged in 1960."],
          ["H", "Guinea's 'No' vote in 1958 was important for the rest of French Africa because it", "showed that independence was possible and hastened that of the others in 1960", "ended French aid everywhere", "led to war with France", "restored the federation", "The Community soon became unworkable."],
        ],
      },
      {
        week: 4,
        title: "Resistance to colonial conquest in West Africa",
        subtopics: ["Samori Touré", "The Asante resistance", "Other resistance movements", "Assessment"],
        objectives: ["Describe the empire and resistance of Samori Touré", "Describe Asante resistance to the British", "Identify other resistance movements in West Africa", "Assess why resistance failed and its significance"],
        lesson: {
          title: "Defending Independence",
          summary: "Analyse major West African resistance to European conquest.",
          minutes: 40,
          notes: `## Samori Touré (c. 1830–1900)
### Rise
A **Mandinka (Dyula)** trader from the Guinea highlands who became a soldier to rescue his captured mother. By the 1870s he had built the **Mandinka (Wassulu) Empire**, with its capital at **Bissandugu**, taking the title **Almami**. He used Islam and trade networks to unite the Mandinka.
### The state
- provinces under governors, with military, civil and religious officials
- a disciplined professional army of **sofas**, organised in units with a regular chain of command, and cavalry
- firearms bought with **gold, ivory and slaves** through Freetown; his own **blacksmiths made and repaired rifles** and ammunition
- efficient taxation and state farms
### Resistance to the French (1882–1898)
- first clashes in 1882; treaties of 1886–87 (**Bissandugu**) fixing the Niger as a boundary — which the French soon broke
- he tried diplomacy with the **British** in Sierra Leone
- when pressed, he carried out an extraordinary **scorched-earth withdrawal**, moving his whole state eastwards (1891–94) to the northern Côte d'Ivoire and Ghana, destroying everything behind him
- he failed to win allies: **Tieba** of Sikasso was his enemy; the destruction of **Kong** (1895) alienated others
- trapped between the French and the British, he was captured in **1898** and exiled to **Gabon**, where he died in **1900**
### Why he lasted so long
military genius; mobility; modern weapons and local manufacture; intelligence; organisation.
### Why he failed
superior French resources; cut off from arms supplies; hostility of peoples he had conquered or devastated; lack of African unity.

## Asante
A century of conflict with the British and their coastal allies:
- **1824**: Governor **MacCarthy** defeated and killed at Nsamankow
- **1826**: Asante defeated at **Katamanso**; the 1831 treaty
- **1873–74**: General **Wolseley** invaded and burned **Kumasi**; the Treaty of **Fomena** weakened the empire
- **1896**: the British occupied Kumasi; Asantehene **Prempeh I** chose not to fight and was exiled (later to the Seychelles)
- **1900**: Governor **Hodgson** demanded the **Golden Stool** to sit upon; **Yaa Asantewaa**, Queen Mother of Ejisu, led the last war; Asante was annexed in **1901**
- Prempeh returned in 1924; the confederacy was restored in 1935

## Other resistance
- **Lat Dior** of Cayor (Senegal), who fought the French railway (killed 1886)
- **Mamadu Lamine** in Senegambia
- **Ahmadu Seku** of the **Tukulor Empire** (heir of al-Hajj Umar), defeated 1890–93
- **Behanzin** of **Dahomey** (1892–94)
- **Bai Bureh** in Sierra Leone (1898)
- in Nigeria: **Jaja, Nana, Ovonramwen, Attahiru I**, the **Ekumeku**
- the **Baule** of Côte d'Ivoire resisted until about 1917

## Assessment
### Why resistance failed
- the **weapons gap**
- European **resources** and reinforcements
- **disunity** — rivalries prevented alliances; Europeans used African troops and allies
- economic disruption
### Significance
- it disproves the myth of passive acceptance
- it delayed and shaped colonial rule
- its heroes inspired later **nationalists**: Sékou Touré claimed descent from Samori; Nkrumah honoured Yaa Asantewaa
- it preserved pride and institutions (the Golden Stool was never surrendered).`,
          examples: `**Example 1.** What were Samori's soldiers called? *Answer:* **Sofas**.

**Example 2.** What caused the Asante war of 1900? *Answer:* Governor Hodgson's demand for the **Golden Stool**.

**Example 3.** Give one reason resistance failed. *Answer:* The **weapons gap** (or African disunity).`,
        },
        questions: [
          ["E", "Samori Touré resisted the", "French", "British", "Germans", "Portuguese", "He fought them from 1882 to 1898."],
          ["E", "The soldiers of Samori Touré were known as", "sofas", "tirailleurs", "eso", "askaris", "They were a disciplined professional force."],
          ["E", "The Asantehene exiled by the British in 1896 was", "Prempeh I", "Osei Tutu", "Opoku Ware", "Kofi Karikari", "He returned in 1924."],
          ["M", "The capital of Samori's empire was", "Bissandugu", "Sikasso", "Kong", "Segu", "A treaty was signed there with the French."],
          ["M", "The British general who burned Kumasi in 1874 was", "Wolseley", "MacCarthy", "Hodgson", "Lugard", "The Treaty of Fomena followed."],
          ["M", "The king of Dahomey defeated by the French in 1892–94 was", "Behanzin", "Gezo", "Agaja", "Glele", "He was exiled. Answer: Behanzin."],
          ["M", "Samori was captured in 1898 and exiled to", "Gabon", "the Seychelles", "Calabar", "the West Indies", "He died there in 1900."],
          ["H", "Samori's scorched-earth withdrawal eastwards showed his", "determination and organising ability, but it also made enemies of those whose lands he ravaged", "wish to surrender", "alliance with the French", "lack of an army", "It prolonged resistance at a high cost."],
          ["H", "A distinctive strength of Samori's army was that it", "manufactured and repaired its own firearms", "used only bows", "was commanded by Europeans", "had no cavalry", "His blacksmiths copied modern rifles."],
          ["H", "Resistance leaders such as Samori and Yaa Asantewaa mattered to later history mainly because they", "became symbols that inspired twentieth-century nationalists", "defeated colonialism permanently", "accepted European rule", "founded political parties", "Their memory sustained pride."],
        ],
      },
      {
        week: 5,
        title: "Economic and social change in colonial West Africa",
        subtopics: ["Patterns of colonial economy", "Transport, towns and labour", "Education, health and religion", "The balance sheet of colonial rule"],
        objectives: ["Compare patterns of colonial economy in West Africa", "Describe changes in transport, towns and labour", "Describe changes in education, health and religion", "Draw up a balance sheet of colonial rule in West Africa"],
        lesson: {
          title: "Colonial Rule Assessed",
          summary: "Evaluate the economic and social impact of colonial rule in West Africa.",
          minutes: 40,
          notes: `## Patterns of colonial economy
- **peasant export production** was the West African norm: **cocoa** in the Gold Coast (the world's largest producer by 1911), Nigeria and Côte d'Ivoire; **groundnuts** in Senegal, the Gambia and northern Nigeria; **palm produce** in Nigeria, Dahomey and Sierra Leone; **cotton** in the French Sudan
- **plantations and concessions** were limited: Firestone in **Liberia**; some European planters in **Côte d'Ivoire** and Guinea
- **mining**: gold (Gold Coast), tin and coal (Nigeria), diamonds and iron (Sierra Leone), bauxite (Guinea)
- little **manufacturing**; trade controlled by firms such as **UAC**, **CFAO** and **SCOA**
- currencies tied to the metropole: the **West African pound** and the **CFA franc** (1945)

### African initiative
The cocoa industry of the Gold Coast was created by **African farmers** — **Tetteh Quarshie** is credited with bringing the seeds from Fernando Po (1879) — who bought land, hired labour and migrated to new areas without government help.

## Transport and towns
- railways from ports to producing areas: **Dakar–Bamako**, **Conakry–Kankan**, **Abidjan–Ouagadougou**, **Sekondi–Kumasi**, **Lagos–Kano**
- new or expanded ports: **Dakar, Abidjan, Takoradi (1928), Lagos, Port Harcourt**
- growth of towns; **migration** from the savanna to the coast — seasonal workers (*navétanes* in Senegambia; Mossi to the cocoa farms)
- French use of **forced labour** until 1946, causing flight into British territories

## Labour and protest
- wage labour on railways, mines and docks; early **strikes** (Sierra Leone railway 1919 and 1926; Dakar–Niger 1947–48; Nigeria 1945; Enugu 1949)
- **cocoa hold-ups** (1930–31, 1937–38)
- **women's protests**: Aba (1929), Lomé market women (1933), Abeokuta (1947)

## Education
- British territories: mainly **mission schools**, with government grants; **Achimota College (1927)** in the Gold Coast; **Fourah Bay**; universities at **Ibadan** and **Legon** (1948)
- French territories: fewer, **state-run** schools in French; the **École William Ponty** near Dakar trained teachers, clerks and medical assistants — and many future leaders
- everywhere: low enrolment, bias towards boys and coastal areas; curricula centred on Europe

## Health
campaigns against sleeping sickness, yaws, smallpox and yellow fever; hospitals in towns; population growth from the 1920s.

## Religion and culture
spread of **Christianity** and — even faster in many areas — of **Islam**, aided by peace, roads and trade (e.g. the **Mourides** in Senegal, founded by **Ahmadu Bamba**, who organised groundnut farming); African independent churches and prophets (**William Wadé Harris** in Côte d'Ivoire, 1913–15); European languages; new elites.

## The balance sheet
### Credits
- larger political units and peace within them
- modern transport, ports and communications
- cash economy and expanded production
- Western education, literacy and medicine
- abolition of slave raiding
- new ideas — nationalism, the rule of law
### Debits
- loss of **sovereignty** and dignity; racial discrimination
- **arbitrary boundaries**
- **export-dependent**, externally oriented economies; underdevelopment of industry
- forced labour, taxation and conscription
- uneven development between coast and interior, and between groups
- neglect of African languages, history and technology
- authoritarian government — a poor training for democracy
### Verdict
Historians differ: some stress modernisation (**Gann and Duignan**), others exploitation (**Rodney**). **Adu Boahen** concluded that colonialism brought some benefits but that these were by-products, few and bought at great cost; **Ade Ajayi** saw it as an important but brief "**episode**" in the long history of Africa.`,
          examples: `**Example 1.** Who is credited with introducing cocoa to the Gold Coast? *Answer:* **Tetteh Quarshie**.

**Example 2.** Which school near Dakar trained many French West African leaders? *Answer:* **École William Ponty**.

**Example 3.** Give one credit and one debit of colonial rule. *Answer:* Credit: **modern transport**; debit: **export-dependent economies**.`,
        },
        questions: [
          ["E", "The person credited with bringing cocoa to the Gold Coast was", "Tetteh Quarshie", "Kwame Nkrumah", "Osei Tutu", "John Mensah Sarbah", "He brought seeds from Fernando Po."],
          ["E", "The currency of most former French West African territories is the", "CFA franc", "cedi", "naira", "West African pound", "It was created in 1945."],
          ["E", "Achimota College was established in", "the Gold Coast", "Nigeria", "Sierra Leone", "Senegal", "It opened in 1927."],
          ["M", "The school near Dakar that trained teachers, clerks and medical assistants was the", "École William Ponty", "Fourah Bay College", "Yaba Higher College", "Katsina College", "Many future leaders studied there."],
          ["M", "The Muslim brotherhood in Senegal that organised groundnut farming was the", "Mourides", "Qadiriyyah of Sokoto", "Sanusiyyah", "Mahdists", "Ahmadu Bamba founded it."],
          ["M", "The Liberian prophet who led a mass Christian movement in Côte d'Ivoire in 1913–15 was", "William Wadé Harris", "Garrick Braide", "Moses Orimolade", "Simon Kimbangu", "Thousands were baptised."],
          ["M", "The deep-water harbour opened in the Gold Coast in 1928 was", "Takoradi", "Tema", "Accra", "Cape Coast", "It served the cocoa and mineral trade."],
          ["H", "The Gold Coast cocoa industry is an example of", "African initiative within the colonial economy", "European plantation agriculture", "forced cultivation", "state farming", "Farmers bought land and migrated on their own."],
          ["H", "The historian who described colonialism as an 'episode' in African history was", "Ade Ajayi", "Walter Rodney", "Hugh Trevor-Roper", "Frederick Lugard", "He stressed the continuity of African history."],
          ["H", "The most enduring economic debit of colonial rule in West Africa was", "economies geared to exporting a few primary products", "too many railways", "the abolition of currency", "excessive industrialisation", "It left the new states vulnerable."],
        ],
      },
    ],
  },
];
