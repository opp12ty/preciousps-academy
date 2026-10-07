import type { TermPlan } from "../types";

/** SS3 Islamic Religious Studies — original Precious PS content for senior secondary schools, with WAEC revision. */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The Islamic political system",
        subtopics: ["Foundations of Islamic government", "Shura and justice", "Qualities and duties of a leader", "Rights and duties of citizens"],
        objectives: ["State the foundations of Islamic government", "Explain the principles of shura and justice", "List the qualities and duties of a leader", "State the rights and duties of citizens, including non-Muslims"],
        lesson: {
          title: "Leadership as a Trust",
          summary: "Explain the principles of government in Islam.",
          minutes: 40,
          notes: `## Foundations
1. **Sovereignty belongs to Allah**: ultimate authority and law-giving are His; rulers govern within the limits of the **Shari'ah**.
2. **Khilafah (vicegerency)**: human beings are Allah's trustees on earth (2:30); power is a **trust (amanah)**, not a personal possession.
3. **Shura (consultation)**: "their affairs are conducted by **mutual consultation**" (42:38); the Prophet was told, "**consult them in the matter**" (3:159).
4. **Adl (justice)**: "Allah commands you to **render trusts to those to whom they are due**, and when you judge between people, to **judge with justice**" (4:58).
5. **Accountability**: before the people and before Allah. Abu Bakr said, "**If I do well, help me; if I do wrong, set me right.**"
6. **Equality before the law** — no immunity for the ruler or the noble.
7. **Obedience in what is right**: "**Obey Allah, obey the Messenger and those in authority among you**; and if you differ in anything, refer it to Allah and the Messenger" (4:59). There is **no obedience to a creature in disobedience to the Creator**.

## Choosing a leader
The first four caliphs came to office by different methods — general choice (Abu Bakr), nomination followed by acceptance (Umar), a council of six (Uthman), public acclaim (Ali) — but always with the **pledge of allegiance (bay'ah)** of the community. This shows that the form may vary while consent and consultation remain.

## Qualities of a leader
Muslim faith and piety; **knowledge**; **justice** and integrity; **competence and trustworthiness** — "the best one you can hire is the **strong and the trustworthy**" (28:26); sound mind and body; courage; not greedy for office. The Prophet said that authority is a trust and will be a cause of **regret on the Day of Resurrection** except for one who fulfils its duties; he declined to appoint those who asked for office.

## Duties of the government
- uphold the religion and its public duties
- establish **justice** and courts; protect life, property and honour
- defence and security
- collect and distribute **Zakah**; care for the poor, orphans and the disabled
- provide education and public welfare
- appoint competent and honest officials; consult

## Rights of citizens
life, dignity, property, privacy, fair trial, freedom of belief, the right to **advise and criticise** rulers, and to basic needs.

## Duties of citizens
obedience to lawful orders; sincere advice; payment of dues; defence of the community; cooperation in good.

## Non-Muslim citizens
Under a covenant of protection (*dhimmah*) they enjoy **security of life, property and worship** and their own personal law; the Prophet warned that whoever wrongs a covenanted person will have him as an opponent on the Day of Judgement. The **Charter of Madinah** is the model.

## Comparison with modern systems
Like democracy, Islam requires consultation, consent, accountability and the rule of law; it differs in that legislation must not contradict the revealed law.`,
          examples: `**Example 1.** What does shura mean? *Answer:* **Mutual consultation** in public affairs.

**Example 2.** Which verse commands obedience to those in authority? *Answer:* **Qur'an 4:59**.

**Example 3.** Which two qualities does 28:26 require of one given responsibility? *Answer:* **Strength (competence) and trustworthiness**.`,
        },
        questions: [
          ["E", "Consultation in public affairs is called", "shura", "bay'ah", "khilafah", "dhimmah", "The Prophet was commanded to practise it."],
          ["E", "In Islam, public office is regarded as", "a trust", "a private property", "an inheritance", "a reward for wealth", "The holder will account for it."],
          ["E", "The pledge of allegiance given to a leader is the", "bay'ah", "zakah", "wasiyyah", "kaffarah", "It expresses the community's consent."],
          ["M", "The verse 'Obey Allah, obey the Messenger and those in authority among you' adds that disputes should be referred to", "Allah and the Messenger", "the eldest tribesman", "the richest citizens", "the army", "The Qur'an and Sunnah are the final reference."],
          ["M", "According to Qur'an 28:26, the best person to employ is the one who is", "strong and trustworthy", "rich and famous", "old and noble", "related to the ruler", "Competence and integrity are both required."],
          ["M", "Qur'an 4:58 commands that when judging between people, one should judge with", "justice", "leniency to relatives", "severity", "regard to wealth", "Trusts must also be rendered to their owners."],
          ["M", "Non-Muslim citizens under Muslim rule are entitled to", "security of life, property and worship", "no rights at all", "exemption from all laws", "the office of imam", "They live under a covenant of protection."],
          ["H", "The differing ways in which the first four caliphs were chosen indicate that", "the method may vary provided consultation and consent are present", "leadership was hereditary", "no rules applied", "only the army could choose", "Each received the community's pledge."],
          ["H", "The principle 'no obedience to a creature in disobedience to the Creator' means that", "a ruler's unlawful orders need not be obeyed", "rulers may never be obeyed", "citizens may rebel at will", "only scholars are obeyed", "Obedience is limited to what is right."],
          ["H", "The Prophet's practice of not appointing those who sought office teaches that", "ambition for power is a warning sign in a candidate", "offices should stay vacant", "only relatives should be chosen", "leaders need no ability", "Authority is a burden and a trust."],
        ],
      },
      {
        week: 2,
        title: "The Islamic economic system",
        subtopics: ["Basic principles", "Lawful and unlawful means of earning", "Distribution of wealth", "Islamic contracts and finance"],
        objectives: ["State the basic principles of Islamic economics", "Distinguish lawful from unlawful means of earning", "Explain how Islam distributes wealth", "Describe the main Islamic commercial contracts"],
        lesson: {
          title: "Wealth as a Trust",
          summary: "Explain the principles and institutions of the Islamic economic system.",
          minutes: 40,
          notes: `## Basic principles
1. **Allah is the true owner** of everything; man is a **trustee** who will be asked how he earned and spent.
2. **Private ownership** is recognised, with social obligations.
3. **Work is honourable**: "when the prayer is finished, disperse in the land and **seek the bounty of Allah**" (62:10). The Prophet said no one eats better food than what he earns by the **work of his own hands**, and that Prophet **Dawud** ate from his own labour. Begging without need is condemned: "**the upper hand is better than the lower hand**."
4. **Justice and fair dealing**: full measure and weight (83:1–3); honest description of goods.
5. **Moderation**: neither miserliness nor waste — "**eat and drink, but do not be excessive**" (7:31); the servants of the Merciful spend moderately (25:67).
6. **Circulation of wealth**: "so that it does not circulate only among the **rich** among you" (59:7).

## Unlawful means of earning
- **riba** (interest/usury)
- **gharar** — sale involving excessive uncertainty or deception
- **gambling**
- **fraud**, short measure, concealing defects
- **hoarding** (*ihtikar*) to raise prices
- **bribery**, theft, embezzlement
- trade in forbidden things: intoxicants, pork, idols
- monopoly and exploitation

## Ethics of trade
truthfulness — "the **truthful, trustworthy merchant** will be with the prophets, the truthful and the martyrs"; mutual consent (4:29); leniency in buying, selling and collecting debts; **writing down debts** with witnesses (2:282, the longest verse of the Qur'an); prompt payment of wages — "**give the worker his wage before his sweat dries**."

## Distribution of wealth
- **Zakah** and **Zakatul-Fitr**
- **Sadaqah** (voluntary charity)
- **Waqf** — an endowment whose capital is preserved and whose benefit goes to a charitable purpose (mosques, schools, wells, hospitals)
- **inheritance** — divides estates among many heirs
- **bequests**, **expiations** and maintenance of relatives
- the **Baytul-Mal** (public treasury)

## Islamic commercial contracts
- **Mudarabah** — one party provides **capital**, the other **labour and skill**; **profit is shared** in an agreed ratio; financial **loss falls on the capital provider**
- **Musharakah** — **partnership**: all contribute capital and share profit and loss
- **Murabahah** — sale at **cost plus a disclosed profit**
- **Ijarah** — **leasing** or hire
- **Salam** — advance payment for goods to be delivered later
- **Qard hasan** — an **interest-free loan**
- **Takaful** — cooperative insurance; **Sukuk** — asset-based certificates

## Islamic banking
Banks operating without interest, sharing risk with customers, and avoiding forbidden businesses — in Nigeria described as **non-interest banking**.

## Comparison
Islam differs from **capitalism** by forbidding interest and exploitation and making the poor's share obligatory; and from **communism** by recognising private property and enterprise. It is a **middle way**.

## Benefits
reduction of poverty; fairness between capital and labour; stability; brotherhood.`,
          examples: `**Example 1.** Who bears the financial loss in mudarabah? *Answer:* The **provider of capital**.

**Example 2.** What is waqf? *Answer:* An **endowment** whose benefit is devoted to charity while the capital is preserved.

**Example 3.** Why does Islam require Zakah and inheritance? *Answer:* So that wealth does **not circulate only among the rich**.`,
        },
        questions: [
          ["E", "In Islamic economics, the true owner of all wealth is", "Allah", "the state", "the rich", "the head of the family", "Man is only a trustee."],
          ["E", "An interest-free loan is called", "qard hasan", "riba", "ijarah", "gharar", "It is given to help, not for profit."],
          ["E", "Hoarding goods in order to raise their price is called", "ihtikar", "infaq", "ijarah", "iddah", "It is forbidden."],
          ["M", "A partnership in which one party supplies capital and the other labour is", "mudarabah", "murabahah", "ijarah", "salam", "Profit is shared in an agreed ratio."],
          ["M", "A sale at cost plus a disclosed profit is known as", "murabahah", "musharakah", "takaful", "waqf", "The buyer knows the seller's cost."],
          ["M", "A charitable endowment whose capital is preserved is a", "waqf", "wasiyyah", "mahr", "fidyah", "Its benefit goes to a good cause."],
          ["M", "The Prophet said the worker should be given his wage", "before his sweat dries", "at the end of the year", "when the harvest comes", "after he asks three times", "Wages must be paid promptly."],
          ["H", "The Qur'anic phrase 'so that it does not circulate only among the rich among you' states the purpose of", "the fair distribution of wealth", "the ban on trade", "the abolition of private property", "the fixing of prices", "Zakah, inheritance and charity serve this aim."],
          ["H", "Gharar makes a contract invalid because it involves", "excessive uncertainty that may lead to dispute or exploitation", "a disclosed profit", "payment in cash", "two witnesses", "The subject or terms are not known."],
          ["H", "The Islamic economic system differs from communism chiefly in that it", "recognises private ownership and enterprise", "forbids all trade", "abolishes inheritance", "permits interest", "It nevertheless imposes social obligations on wealth."],
        ],
      },
      {
        week: 3,
        title: "Human rights and the status of women in Islam",
        subtopics: ["Human dignity and basic rights", "Equality and justice", "The status of women before and after Islam", "Rights of women in Islam"],
        objectives: ["State the basic human rights recognised by Islam", "Explain Islamic teaching on equality and justice", "Compare the status of women before and after Islam", "List the rights of women in Islam"],
        lesson: {
          title: "We Have Honoured the Children of Adam",
          summary: "Explain human rights and the position of women in Islam.",
          minutes: 40,
          notes: `## The basis of human rights
Rights in Islam are **granted by Allah**, so no ruler can take them away. "**We have honoured the children of Adam**" (17:70).

## Basic rights
- **life**: "whoever kills a soul — unless for a soul or for corruption in the land — it is as if he had **killed all mankind**; and whoever saves one, as if he had saved all mankind" (5:32)
- **dignity and honour**: no mockery, slander or torture
- **equality**: "O mankind, We created you from a male and a female and made you nations and tribes **that you may know one another**. The most noble of you in the sight of Allah is the **most God-fearing**" (49:13)
- **justice**: "be upholders of justice, witnesses for Allah, **even against yourselves, your parents or relatives**" (4:135); "do not let hatred of a people cause you to be unjust" (5:8)
- **freedom of religion**: "**There is no compulsion in religion**" (2:256)
- **property** and lawful earning
- **privacy**: do not enter homes without permission (24:27); do not spy (49:12)
- **education**
- **basic needs** and social security
- freedom of expression within truth and decency; right to advise rulers

The **Farewell Sermon** proclaimed the sanctity of life, property and honour and the equality of all races.

## Women before Islam
In the Jahiliyyah, baby girls might be **buried alive**; women were **inherited** as property; they had no share in inheritance and no say in marriage; unlimited polygamy. Other civilisations of the time also denied women legal personality.

## Changes brought by Islam
- condemned female infanticide: "when the girl buried alive is asked **for what sin she was killed**" (81:8–9)
- declared men and women **equal in spiritual worth and reward** (33:35; 16:97)
- the Prophet said, "**Women are the counterparts of men.**"

## Rights of women
1. **life and good upbringing** — the Prophet promised Paradise to one who raises daughters well
2. **education** — seeking knowledge is an obligation on every Muslim; **A'ishah** was a leading scholar
3. **consent in marriage** and the **dower**
4. **maintenance** by father or husband
5. to **own, inherit, buy and sell** property in her own name (4:7, 4:32) — **Khadijah** was a merchant
6. to **work** and earn within the limits of modesty
7. to seek **divorce** (khul') and to custody of young children
8. to **honour as a mother** — "your mother" was named three times before the father
9. to take part in public life: women gave the pledge, questioned the Prophet, corrected the caliph Umar in the mosque
10. protection from abuse and slander

## Different roles, equal worth
Some rulings differ (inheritance shares, the duty of maintenance on men) because **responsibilities** differ — not because of lesser value. The Prophet said, "**The best of you are those who are best to their women.**"

## Problems today
denial of girls' education, forced marriage, domestic violence and denial of inheritance are **cultural abuses**, contrary to Islam.`,
          examples: `**Example 1.** Which verse declares that there is no compulsion in religion? *Answer:* **Qur'an 2:256**.

**Example 2.** What is the only basis of superiority among people? *Answer:* **Taqwa** (49:13).

**Example 3.** Give two rights Islam gave women. *Answer:* The right to **inherit and own property**, and to **consent to marriage**.`,
        },
        questions: [
          ["E", "The Qur'an says, 'There is no compulsion in", "religion'", "trade'", "marriage'", "travel'", "It is in Suratul-Baqarah."],
          ["E", "According to the Qur'an, the most noble person in the sight of Allah is the most", "God-fearing", "wealthy", "learned", "powerful", "Race and tribe give no superiority."],
          ["E", "A cruel practice against girls which Islam abolished was", "burying them alive", "teaching them to read", "giving them dower", "naming them", "The Qur'an condemns it."],
          ["M", "The Qur'an compares the unjust killing of one person to", "killing all mankind", "breaking a fast", "a minor sin", "damaging property", "Saving one life is like saving all."],
          ["M", "The wife of the Prophet renowned as a scholar and teacher of Hadith was", "A'ishah", "Khadijah", "Sawdah", "Maymunah", "Many companions learned from her."],
          ["M", "Qur'an 4:135 commands believers to uphold justice even against", "themselves and their relatives", "their enemies only", "strangers only", "the poor only", "Justice is owed to Allah."],
          ["M", "The right of a woman to own and dispose of property in her own name is illustrated by", "Khadijah's business", "the battle of Uhud", "the change of the Qiblah", "the Treaty of Hudaybiyyah", "She employed the Prophet in her trade."],
          ["H", "Human rights in Islam are regarded as inalienable because they are", "granted by Allah and not by rulers", "written by scholars", "agreed by tribes", "earned by wealth", "No authority may withdraw them."],
          ["H", "The difference in inheritance shares between sons and daughters reflects", "difference in financial responsibility, not in worth", "the lower value of women", "Arab custom only", "a ban on women owning property", "Men bear the duty of maintenance."],
          ["H", "Denying girls education in the name of religion contradicts Islam because", "seeking knowledge is an obligation on every Muslim", "girls must work on farms", "schools are forbidden", "only boys can memorise", "Women were among the earliest scholars."],
        ],
      },
      {
        week: 4,
        title: "Jihad, peace and relations with non-Muslims",
        subtopics: ["Meaning and kinds of jihad", "Rules of armed struggle", "Islam and peace", "Relations with non-Muslims"],
        objectives: ["Explain the meaning and kinds of jihad", "State the conditions and rules of fighting in Islam", "Explain Islam's teaching on peace", "Describe how Muslims should relate with non-Muslims"],
        lesson: {
          title: "Striving in the Way of Allah",
          summary: "Explain the true meaning of jihad and the Islamic ethic of peaceful coexistence.",
          minutes: 40,
          notes: `## Meaning
**Jihad** comes from *jahada*, "to **strive** or exert effort". It means striving in the cause of Allah with all one's ability. It does **not** mean "holy war"; the Arabic for fighting is **qital**.

## Kinds of jihad
1. **Jihad against the self** (*jihadun-nafs*) — struggling against one's evil desires, laziness and temptation; learning and practising the religion
2. **Jihad against Satan** — resisting doubts and whispers
3. **Jihad with the tongue and pen** — teaching, da'wah, speaking the truth; "the best jihad is a **word of truth before a tyrannical ruler**"
4. **Jihad with wealth** — spending for good causes
5. **Jihad by the hand / armed struggle** (*qital*) — the last resort
When a man asked to go to battle, the Prophet asked whether his **parents** were alive and said, "**Then strive in serving them.**"

## When fighting is permitted
- in **self-defence** and against **oppression**: "permission is given to those who are fought, because they have been **wronged**" (22:39)
- to protect freedom of worship — of mosques, churches and synagogues alike (22:40)
- "**Fight in the way of Allah those who fight you, but do not transgress**; Allah does not love transgressors" (2:190)
- it must be declared by **legitimate authority**, not by individuals or groups acting on their own

## Rules of fighting
From the Prophet and the instructions of **Abu Bakr** to his army:
- do not kill **women, children, the aged**, or monks in their cells
- do not **mutilate** the dead
- do not cut down **fruit trees**, burn crops or kill animals except for food
- do not be treacherous; **honour treaties**
- treat **prisoners** kindly
- "**if they incline to peace, incline to it also**" (8:61)

## What jihad is not
- not forcing people to accept Islam — "no compulsion in religion"
- not **terrorism**: bombing, kidnapping and killing innocent people are **major crimes**; suicide is forbidden
- not rebellion or tribal violence

## Islam and peace
The word Islam is related to **salam** (peace); the greeting is peace; Allah is **As-Salam**; Paradise is **Darus-Salam**. Reconciliation is a duty (49:9–10).

## Relations with non-Muslims
- "Allah does not forbid you, regarding those who do not fight you because of religion nor drive you from your homes, from being **kind and just** to them" (60:8)
- "**Invite to the way of your Lord with wisdom and good preaching**, and argue with them in the best manner" (16:125)
- do not insult what others worship (6:108)
- food of the People of the Book and marriage to their chaste women are permitted (5:5)
- the Prophet stood for a passing funeral of a Jew, traded with non-Muslims, visited their sick and made covenants with them
- rights of the **neighbour** apply whatever his religion
- cooperate with all in what is good (5:2), while keeping one's own faith and worship distinct (Suratul-Kafirun)

## In Nigeria
live peacefully, respect the law, reject provocation and extremism, settle disputes through dialogue.`,
          examples: `**Example 1.** What does jihad literally mean? *Answer:* **Striving** or exerting effort.

**Example 2.** Give two rules of fighting. *Answer:* **Do not kill women and children**; **do not cut down fruit trees**.

**Example 3.** What does 60:8 teach about peaceful non-Muslims? *Answer:* Be **kind and just** to them.`,
        },
        questions: [
          ["E", "The literal meaning of jihad is", "striving", "killing", "conquering", "hating", "It covers every effort in Allah's cause."],
          ["E", "Struggling against one's own evil desires is called", "jihadun-nafs", "qital", "hijrah", "ribat", "It is a lifelong struggle."],
          ["E", "The Qur'an tells Muslims to invite others to the way of Allah with", "wisdom and good preaching", "force", "insults", "bribes", "It is in Suratun-Nahl."],
          ["M", "The Arabic word that specifically means fighting is", "qital", "jihad", "da'wah", "sabr", "Jihad has a wider meaning."],
          ["M", "According to Qur'an 2:190, Muslims may fight those who fight them but must not", "transgress", "defend themselves", "make treaties", "pray", "Allah does not love transgressors."],
          ["M", "The Prophet described the best jihad as", "a word of truth before a tyrannical ruler", "fighting at night", "travelling far", "collecting booty", "It is jihad with the tongue."],
          ["M", "If the enemy inclines to peace, the Qur'an instructs Muslims to", "incline to it also", "continue fighting", "demand tribute first", "retreat in fear", "Peace is preferred."],
          ["H", "Bombing a market in the name of religion is condemned in Islam because it", "kills innocent people, which is a major crime", "is not done by an army", "is too costly", "happens in towns", "Non-combatants may never be targeted."],
          ["H", "The Prophet's reply to the man with living parents — 'strive in serving them' — shows that jihad", "includes non-military forms of striving", "is forbidden to sons", "requires parental wealth", "is only for the old", "Service to parents is itself a struggle in Allah's cause."],
          ["H", "The requirement that armed struggle be declared by legitimate authority prevents", "individuals and groups from taking up arms on their own", "self-defence", "the making of treaties", "the collection of Zakah", "It guards against chaos and injustice."],
        ],
      },
      {
        week: 5,
        title: "Social ethics in Suratul-Hujurat",
        subtopics: ["Verifying information", "Reconciliation and brotherhood", "Mockery, suspicion, spying and backbiting", "The unity of mankind"],
        objectives: ["Explain the command to verify news", "Explain the duty of reconciliation among believers", "Explain the six social prohibitions in verses 11–12", "Explain the teaching of verse 13 on human unity"],
        lesson: {
          title: "A Code for Community Life",
          summary: "Study Qur'an 49:6–13 and its lessons for society.",
          minutes: 40,
          notes: `## Introduction
**Al-Hujurat** ("the Private Apartments") is chapter **49**, a **Madinan** surah of **eighteen verses**. It is sometimes called the surah of **manners**. Its opening verses teach respect for the Prophet — not putting oneself forward before Allah and His Messenger, and **not raising the voice** above his.

## Verse 6 — verify the news
"O you who believe, **if a wrongdoer (*fasiq*) brings you news, verify it** (*tabayyun*), lest you harm a people in ignorance and then regret what you have done."
*Lessons:* check the source and the facts before believing or sharing; rumours can cause bloodshed; this applies strongly to **social media**.

## Verses 9–10 — reconciliation
"If two parties of the believers fight, **make peace between them**; but if one transgresses against the other, **fight the one that transgresses until it returns** to the command of Allah; then, if it returns, **make peace between them with justice**." "**The believers are but brothers**, so make peace between your brothers."
*Lessons:* neutrality in the face of wrong is not allowed; mediation must be **just**; brotherhood of faith is above tribe.

## Verse 11 — three prohibitions
- **no mockery**: let not one people ridicule another; "**perhaps they are better than them**" — men and women are addressed separately
- **no defaming** one another (fault-finding)
- **no offensive nicknames**
"Whoever does not repent — those are the wrongdoers."

## Verse 12 — three more
- **avoid much suspicion**; "some suspicion is sin"
- **do not spy** (*tajassus*)
- **do not backbite**: "would one of you like to **eat the flesh of his dead brother**? You would hate it."
*Lessons:* these six sins destroy trust; the first three are done to a person's face, the last three behind his back; they begin in the heart (suspicion), move to action (spying) and end on the tongue (backbiting).

## Verse 13 — one humanity
"**O mankind**, We created you from **a male and a female**, and made you **nations and tribes that you may know one another**. The most noble of you in the sight of Allah is the **most God-fearing**."
*Lessons:* common origin; diversity is for **mutual acquaintance**, not pride or conflict; the only measure of honour is **taqwa**; racism and tribalism are rejected.

## Verse 14 onwards — true faith
Some bedouins said, "We believe." They were told to say rather, "**We have submitted**," for faith had not yet entered their hearts. True believers do not doubt and **strive with wealth and life**.

## Application
- cross-check messages before forwarding
- stop fights; do not take sides by tribe
- no bullying, name-calling or body-shaming
- respect privacy — do not read others' messages
- defend the absent
- judge people by character, not ethnic group`,
          examples: `**Example 1.** What should be done when a wrongdoer brings news? *Answer:* **Verify it**.

**Example 2.** To what is backbiting compared? *Answer:* **Eating the flesh of one's dead brother**.

**Example 3.** Why were people made nations and tribes? *Answer:* "**That you may know one another.**"`,
        },
        questions: [
          ["E", "Suratul-Hujurat is chapter", "49", "24", "31", "17", "It is a Madinan surah."],
          ["E", "Suratul-Hujurat says the believers are but", "brothers", "rivals", "strangers", "traders", "So peace must be made between them."],
          ["E", "The surah forbids calling one another by", "offensive nicknames", "their fathers' names", "their titles", "their first names", "It follows the ban on mockery."],
          ["M", "The command to verify news brought by a wrongdoer is expressed by the word", "tabayyun", "tajassus", "taqwa", "tawbah", "It prevents harming people in ignorance."],
          ["M", "If one of two fighting groups of believers transgresses, the others should", "resist it until it returns to Allah's command", "leave both alone", "support the stronger side", "expel both from the town", "Then peace is made with justice."],
          ["M", "The reason given for not mocking others is that", "they may be better than those who mock", "mockery is tiring", "they may retaliate", "the Prophet was present", "Only Allah knows a person's worth."],
          ["M", "Tajassus, which is forbidden in verse 12, means", "spying", "backbiting", "suspicion", "mockery", "It violates privacy."],
          ["H", "Forwarding an unverified rumour on social media that leads to violence violates the teaching of", "verse 6", "verse 13", "verse 1", "verse 14", "News must be verified before acting on it."],
          ["H", "Verse 13's statement that nations and tribes were made 'that you may know one another' implies that ethnic diversity is meant for", "mutual acquaintance and cooperation", "rivalry and war", "ranking peoples", "separation", "Honour depends on taqwa alone."],
          ["H", "The reply 'say rather, we have submitted' given to the bedouins shows that", "outward acceptance of Islam differs from faith settled in the heart", "they had left Islam", "bedouins cannot believe", "faith needs no action", "True believers do not doubt and they strive."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Luqman's advice and the commandments of Suratul-Isra'",
        subtopics: ["Luqman's advice on belief and parents", "Luqman's advice on worship and conduct", "The commandments in al-Isra' 23–30", "The commandments in al-Isra' 31–39"],
        objectives: ["Explain Luqman's advice on Tawhid and parents", "Explain Luqman's advice on worship and manners", "Explain the commandments on parents, relatives and spending", "Explain the commandments on life, chastity, property and humility"],
        lesson: {
          title: "Wisdom for Life",
          summary: "Study Qur'an 31:12–19 and 17:23–39.",
          minutes: 45,
          notes: `## Luqman
A wise man whom Allah granted **wisdom** (*hikmah*); chapter **31** is named after him. His advice to his son is a model of parental teaching — loving in tone ("**O my dear son**") and comprehensive.

## Luqman's advice (31:12–19)
1. **Gratitude**: "Be grateful to Allah"; whoever is grateful benefits himself.
2. **Tawhid**: "**Do not associate anything with Allah; shirk is a great injustice**."
3. **Parents** (a comment from Allah): his mother bore him "in **weakness upon weakness**", and his weaning is in **two years** — "be grateful to Me and to your parents". If they press you to associate partners with Me, **do not obey them, but keep company with them in this world in kindness**.
4. **Allah's knowledge**: though a deed be the weight of a **mustard seed**, hidden in a rock, the heavens or the earth, **Allah will bring it forth**.
5. **Worship and duty**: "**Establish prayer, enjoin what is right, forbid what is wrong, and be patient** over what befalls you."
6. **Humility**: "Do not turn your cheek away from people in contempt, nor walk on the earth exultantly; Allah does not love the **arrogant boaster**."
7. **Moderation**: "Be **moderate in your pace** and **lower your voice**; the harshest of sounds is the **braying of donkeys**."

## The commandments of Suratul-Isra' (17:23–39)
1. **worship none but Allah**
2. **kindness to parents**: do not say "uff", do not repel them; speak nobly; lower the "wing of humility"; pray, "My Lord, have mercy on them as they raised me when I was small"
3. give **relatives, the needy and the traveller** their due
4. **do not squander**: "the wasteful are **brothers of the devils**"
5. if you cannot give, speak a **gentle word**
6. **moderation in spending**: "do not keep your hand **chained to your neck**, nor **stretch it out completely**"
7. **do not kill your children for fear of poverty** — "We provide for them and for you"
8. **do not come near zina**
9. **do not kill a soul** which Allah has made sacred, except by right; the heir has authority but must not exceed limits
10. **do not approach the orphan's property** except in the best way, until he reaches maturity
11. **fulfil covenants** — they will be asked about
12. **give full measure** and weigh with an even balance
13. **do not pursue what you have no knowledge of** — "the **hearing, the sight and the heart** — all will be questioned"
14. **do not walk arrogantly** — "you cannot tear the earth nor reach the mountains in height"
The passage ends: "This is part of the **wisdom** your Lord has revealed to you."

## Common themes
Both passages begin with **Tawhid**, move to **parents**, then to **social conduct** and **personal manners** — faith, worship and morals form one whole.

## Application
respect parents even when you disagree; pray and speak for what is right; avoid extravagance; verify before you speak; be humble in walk and voice.`,
          examples: `**Example 1.** What was Luqman's first prohibition to his son? *Answer:* **Do not associate anything with Allah**.

**Example 2.** What are the wasteful called in al-Isra'? *Answer:* "**Brothers of the devils.**"

**Example 3.** Which three faculties will be questioned? *Answer:* The **hearing, the sight and the heart**.`,
        },
        questions: [
          ["E", "Luqman told his son that associating partners with Allah is", "a great injustice", "a small fault", "a matter of choice", "an old custom", "It was his first advice."],
          ["E", "According to Suratul-Isra', the wasteful are brothers of the", "devils", "poor", "kings", "travellers", "Squandering is condemned."],
          ["E", "Luqman advised his son to lower his", "voice", "ambition", "prayers", "eyes only", "The harshest sound is the braying of donkeys."],
          ["M", "If parents urge their child to commit shirk, the child should", "not obey them but still treat them kindly", "obey them fully", "leave them for ever", "insult them", "Kindness continues without obedience in sin."],
          ["M", "Luqman illustrated Allah's perfect knowledge with the example of", "a mustard seed hidden in a rock", "a camel in the desert", "a ship at sea", "a star at night", "Allah will bring it forth."],
          ["M", "The image of a hand 'chained to the neck' in Suratul-Isra' stands for", "miserliness", "generosity", "imprisonment", "prayer", "The opposite extreme is to stretch it out completely."],
          ["M", "Suratul-Isra' forbids approaching the property of the orphan except", "in the best way, until he reaches maturity", "when the guardian is poor", "with the consent of relatives", "for trade abroad", "It is a trust. Answer: in the best way, until he reaches maturity."],
          ["H", "The command 'do not pursue what you have no knowledge of' most directly forbids", "spreading unverified claims and false testimony", "studying science", "asking questions", "travelling to new places", "Hearing, sight and heart will all be questioned."],
          ["H", "Both Luqman's advice and the commandments of al-Isra' begin with Tawhid because", "correct belief is the foundation of all good conduct", "the listeners were idol-worshippers only", "other duties are unimportant", "parents come last", "Morals grow out of faith."],
          ["H", "Luqman's use of the phrase 'O my dear son' teaches parents to", "instruct their children with affection", "avoid correcting children", "speak only once", "leave teaching to schools", "Loving address opens the heart to advice."],
        ],
      },
      {
        week: 2,
        title: "The contributions of Muslims to civilisation",
        subtopics: ["The basis of Muslim scholarship", "Mathematics and the sciences", "Medicine", "History, geography and institutions of learning"],
        objectives: ["Explain what encouraged scholarship among Muslims", "Identify Muslim contributions to mathematics and science", "Identify Muslim contributions to medicine", "Identify contributions to history, geography and education"],
        lesson: {
          title: "A Legacy of Learning",
          summary: "Outline the contributions of Muslim scholars to world civilisation.",
          minutes: 40,
          notes: `## Why Muslims pursued knowledge
- the first revelation was "**Read**"; the Qur'an repeatedly calls people to **reflect** on the heavens, the earth and themselves
- "Are those who know equal to those who do not know?" (39:9)
- the Prophet said that seeking knowledge is an **obligation** on every Muslim
- needs of worship: prayer times and the **Qiblah** (astronomy, geography), inheritance (arithmetic), Zakah (accounting)
- patronage of the caliphs: the **Baytul-Hikmah** (House of Wisdom) in **Baghdad**, flourishing under **al-Ma'mun**, where Greek, Persian and Indian works were **translated** into Arabic, studied and corrected
- **paper-making**, learned from the Chinese, made books cheap

## Mathematics
- **al-Khwarizmi** — wrote the foundational book of **algebra** (the word comes from *al-jabr* in its title); the word **algorithm** comes from his name
- spread of the **Hindu–Arabic numerals** and the **zero**, replacing Roman numerals
- advances in **trigonometry** and geometry; **Umar al-Khayyam** on cubic equations

## Astronomy and physics
- observatories; accurate star tables; **al-Battani**; **al-Biruni** estimated the earth's radius
- **Ibn al-Haytham** (Alhazen) — the *Book of Optics*: showed that vision occurs when **light enters the eye**; insisted on **experiment** — a pioneer of the scientific method

## Chemistry
- **Jabir ibn Hayyan** — laboratory processes of distillation, crystallisation and sublimation
- words such as **alcohol, alkali, elixir** come from Arabic

## Medicine
- **ar-Razi** (Rhazes) — distinguished **smallpox from measles**; wrote the vast *al-Hawi*
- **Ibn Sina** (Avicenna) — ***al-Qanun fit-Tibb*** (the Canon of Medicine), a standard textbook in Europe for centuries
- **az-Zahrawi** (Abulcasis) of Cordoba — the father of **surgery**; designed surgical instruments
- **Ibn an-Nafis** — described the circulation of blood through the lungs
- public **hospitals** (*bimaristan*) with wards, pharmacies and teaching

## History, sociology and geography
- **Ibn Khaldun** — the ***Muqaddimah***, founding the scientific study of **history and society**
- **at-Tabari** — universal history
- **al-Idrisi** — world map and geography
- **Ibn Battuta** — the great traveller who visited Mali and East Africa
- **al-Bakri** — description of West Africa

## Philosophy and religious sciences
**al-Farabi**, **Ibn Rushd** (Averroes), **al-Ghazali** (*Ihya' Ulumid-Din*); the sciences of Hadith, fiqh and Arabic grammar.

## Institutions
- **al-Qarawiyyin** in Fez, founded by a woman, **Fatimah al-Fihri**
- **al-Azhar** in Cairo
- **Sankore** in Timbuktu
- libraries of Cordoba, Baghdad and Cairo

## Art and architecture
calligraphy, geometric design, domes and minarets — the mosque of Cordoba, the Alhambra.

## Transmission
Through **Spain** and **Sicily**, this learning passed to Europe and helped bring about its Renaissance.

## Lesson
faith and science are not opposed; Muslims today should recover excellence in learning.`,
          examples: `**Example 1.** Who is associated with the origin of algebra? *Answer:* **Al-Khwarizmi**.

**Example 2.** Who wrote the Canon of Medicine? *Answer:* **Ibn Sina**.

**Example 3.** What was the Baytul-Hikmah? *Answer:* The **House of Wisdom** in Baghdad — a centre of translation and research.`,
        },
        questions: [
          ["E", "The word 'algebra' comes from the title of a book by", "al-Khwarizmi", "Ibn Sina", "Ibn Khaldun", "ar-Razi", "The word algorithm comes from his name."],
          ["E", "The Canon of Medicine was written by", "Ibn Sina", "Ibn Battuta", "al-Idrisi", "Jabir ibn Hayyan", "It was used in Europe for centuries."],
          ["E", "The House of Wisdom was located in", "Baghdad", "Makkah", "Timbuktu", "Fez", "It flourished under al-Ma'mun."],
          ["M", "The scholar who showed that vision occurs when light enters the eye was", "Ibn al-Haytham", "al-Battani", "al-Farabi", "at-Tabari", "He wrote the Book of Optics."],
          ["M", "The physician who distinguished smallpox from measles was", "ar-Razi", "az-Zahrawi", "Ibn an-Nafis", "al-Biruni", "He was known in Europe as Rhazes."],
          ["M", "The Muqaddimah, a pioneering work on history and society, was written by", "Ibn Khaldun", "Ibn Rushd", "al-Ghazali", "al-Bakri", "He is regarded as a founder of sociology."],
          ["M", "The university of al-Qarawiyyin in Fez was founded by", "Fatimah al-Fihri", "Harun ar-Rashid", "Mansa Musa", "Salahuddin", "It shows the role of women in learning."],
          ["H", "Religious duties such as determining prayer times and the Qiblah stimulated Muslim interest in", "astronomy and geography", "poetry", "sculpture", "music", "Worship created practical scientific needs."],
          ["H", "Ibn al-Haytham's lasting contribution to science as a whole was his", "insistence on experiment and observation", "translation of Greek poetry", "invention of paper", "map of West Africa", "He helped establish the scientific method."],
          ["H", "Muslim learning reached medieval Europe mainly through", "Spain and Sicily", "India and China", "West Africa", "Russia", "Arabic works were translated into Latin there."],
        ],
      },
      {
        week: 3,
        title: "Justice and the Islamic law of crimes",
        subtopics: ["Aims and principles of Islamic justice", "Hudud", "Qisas and diyah", "Ta'zir and the administration of justice"],
        objectives: ["State the aims and principles of Islamic criminal justice", "Explain the hudud offences", "Explain qisas and diyah", "Explain ta'zir and the qualities of a judge"],
        lesson: {
          title: "Stand Firm for Justice",
          summary: "Outline the Islamic law of crimes and the principles of justice.",
          minutes: 40,
          notes: `## Aims
Islamic law protects the five essentials — **religion, life, intellect, lineage and property**. Punishment is meant to **deter**, to **reform**, to give **redress** to the victim and to **purify** the offender. It is a small part of a system that first relies on faith, moral training and social welfare.

## Principles of justice
- **equality before the law** — ruler and subject, rich and poor
- a person is **innocent until proven guilty**; "the burden of proof is on the claimant"
- **no crime or punishment without a law**
- **strict standards of evidence**
- **fixed punishments are averted by doubt**
- **individual responsibility**: no one bears another's burden
- **repentance** and concealment of private sins are encouraged; one should not expose himself or others
- punishments are applied only by a **lawful court**, never by mobs

## Three categories of offences
### 1. Hudud (singular **hadd**)
Offences with punishments **fixed by the Qur'an or Sunnah**, regarded as rights of Allah (the public):
- **theft** (*sariqah*) — amputation of the hand (5:38), subject to conditions: the property reaches a minimum value, was taken **secretly from safe custody**, and the thief was **not driven by need**. Caliph **Umar suspended** the punishment in a year of **famine**.
- **zina** — a hundred lashes for the unmarried (24:2); proof requires **four eyewitnesses** or free confession
- **qadhf** (false accusation of unchastity) — **eighty lashes** and rejection of the accuser's testimony (24:4)
- **drinking intoxicants** — flogging
- **hirabah** (armed robbery, banditry) — severe penalties (5:33), unless the offender repents before capture
The conditions are so strict that these punishments were historically rare; their chief function is **deterrence**.

### 2. Qisas (retaliation) and diyah
For **murder and bodily injury** — rights of the individual.
- "**In qisas there is life for you, O people of understanding**" (2:179) — it restrains would-be killers and ends blood feuds
- the victim's heirs may demand **equal retaliation**, or accept **diyah** (compensation), or **forgive** — and forgiveness is encouraged (2:178)
- for **accidental killing**: diyah and expiation (4:92)

### 3. Ta'zir
**Discretionary** punishments fixed by the judge or legislature for offences without a set penalty: fraud, bribery, false weights, traffic offences. It may be a reprimand, fine, imprisonment or flogging.

## The judge (Qadi)
Qualities: Muslim, adult, sane, **learned in the law**, **just**, sound in hearing, sight and speech. Etiquette: treat both parties **equally** in seating and attention; hear **both sides**; do not judge when **angry**; accept **no gifts** from litigants. The Prophet said judges are of three kinds — one in Paradise (who knows the truth and judges by it) and two in the Fire.

## Evidence
testimony of upright witnesses; confession; oath; documents and circumstantial evidence. **False testimony** is among the gravest sins.

## In Nigeria
Islamic personal law is applied by **Sharia Courts of Appeal**; some states have extended Sharia to other matters for Muslims.`,
          examples: `**Example 1.** What are hudud? *Answer:* Offences with **punishments fixed** by the Qur'an or Sunnah.

**Example 2.** What options do a murder victim's heirs have? *Answer:* **Retaliation, compensation (diyah) or forgiveness**.

**Example 3.** Why did Umar suspend the punishment for theft? *Answer:* Because of **famine** — need creates doubt.`,
        },
        questions: [
          ["E", "Punishments fixed by the Qur'an or Sunnah are called", "hudud", "ta'zir", "diyah", "kaffarah", "The singular is hadd."],
          ["E", "A judge in an Islamic court is called a", "qadi", "mufti", "khatib", "wali", "He must be learned and just."],
          ["E", "Compensation paid for killing or injury is", "diyah", "mahr", "zakah", "fidyah", "The heirs may accept it instead of retaliation."],
          ["M", "The law of equal retaliation for murder and injury is known as", "qisas", "qadhf", "hirabah", "li'an", "The Qur'an says there is life in it."],
          ["M", "The punishment for falsely accusing a chaste person of zina is", "eighty lashes", "forty lashes", "a fine", "exile only", "The accuser's testimony is also rejected."],
          ["M", "Discretionary punishment decided by the judge is called", "ta'zir", "hadd", "qisas", "diyah", "It applies where no penalty is fixed."],
          ["M", "The number of eyewitnesses required to prove zina is", "four", "two", "one", "three", "The standard of proof is very strict."],
          ["H", "Umar's suspension of the punishment for theft during a famine illustrates the principle that", "fixed punishments are averted by doubt and necessity", "theft is lawful for the poor", "caliphs may abolish the law", "only the rich are punished", "A thief driven by hunger is not treated as a criminal."],
          ["H", "'In qisas there is life for you' means that the law of retaliation", "deters killing and prevents blood feuds", "encourages revenge", "applies only to rulers", "replaces forgiveness", "Knowing the consequence restrains the would-be killer."],
          ["H", "A judge must not give judgement while angry because", "strong emotion impairs fair reasoning", "anger is a sign of knowledge", "the parties may leave", "court fees are lost", "Justice requires a calm and attentive mind."],
        ],
      },
      {
        week: 4,
        title: "Repentance, remembrance and supplication",
        subtopics: ["Tawbah and its conditions", "Istighfar", "Dhikr and its forms", "Du'a and its etiquette"],
        objectives: ["Explain repentance and its conditions", "Explain the seeking of forgiveness", "Describe the forms and benefits of dhikr", "State the etiquette and best times of supplication"],
        lesson: {
          title: "Turning to Allah",
          summary: "Explain repentance, remembrance of Allah and supplication.",
          minutes: 40,
          notes: `## Tawbah (repentance)
**Tawbah** means "**returning**" — turning back from sin to obedience. All human beings err; the Prophet said the **best of those who err are those who repent**.
- "Say: O My servants who have transgressed against themselves, **do not despair of the mercy of Allah**; Allah forgives **all sins**" (39:53)
- "O you who believe, turn to Allah in **sincere repentance** (*tawbatan nasuha*)" (66:8)
- "Allah loves those who constantly repent and those who purify themselves" (2:222)

### Conditions of valid repentance
1. **stop** the sin at once
2. feel **regret** for having done it
3. **resolve** never to return to it
4. if it involved another person's right, **restore** it or seek his pardon — return stolen property, clear a slandered name

### Time
Repentance is accepted until the **soul reaches the throat** (the death rattle) and before the **sun rises from the west**. Delay is dangerous.

### Signs of acceptance
a changed life; replacing bad deeds with good; leaving bad company.

## Istighfar
Seeking Allah's forgiveness, e.g. "**Astaghfirullah**". Though sinless, the Prophet sought forgiveness **more than seventy times a day**. The Qur'an links it with **rain, wealth and children** (71:10–12). The "**master supplication for forgiveness**" (*Sayyidul-Istighfar*) acknowledges Allah's lordship, His favours and one's sins.

## Dhikr (remembrance of Allah)
- "**Truly, in the remembrance of Allah do hearts find rest**" (13:28)
- "O you who believe, **remember Allah with much remembrance**" (33:41)
- "Remember Me and I will remember you" (2:152)

### Forms
- **tasbih**: *Subhanallah* (Glory be to Allah)
- **tahmid**: *Al-hamdu lillah* (Praise be to Allah)
- **takbir**: *Allahu Akbar*
- **tahlil**: *La ilaha illallah*
- **salawat** on the Prophet
- reciting the **Qur'an** — the best dhikr
- after each prayer: **thirty-three** each of tasbih, tahmid and takbir
- "two phrases light on the tongue, heavy on the Scale, beloved to the Most Merciful: ***Subhanallahi wa bihamdihi, Subhanallahil-Azim***"
Dhikr is by the **tongue**, the **heart** and by **obedience** in action.

### Benefits
peace of heart; protection from Satan; forgiveness; nearness to Allah; strength against temptation.

## Du'a (supplication)
- "**Call upon Me; I will respond to you**" (40:60); "I am **near**; I respond to the call of the caller when he calls Me" (2:186)
- the Prophet said, "**Du'a is worship**."

### Etiquette
begin with **praise of Allah and blessings on the Prophet**; face the Qiblah and raise the hands; be **humble and certain**; ask **Allah alone**; repeat the request; do not be hasty, saying "I prayed and was not answered"; ensure **lawful food and earnings**; do not pray for sin or cutting of kinship.

### Favoured times
the **last third of the night**; between the **adhan and iqamah**; in **sujud**; an hour on **Friday**; while **fasting** and at iftar; when **travelling**; when it rains; the prayer of a parent and of the oppressed.

### How Allah answers
by granting it, by averting an equal harm, or by storing its reward for the Hereafter.

### A comprehensive prayer
"*Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar*" — Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire (2:201).`,
          examples: `**Example 1.** What does tawbah mean? *Answer:* **Returning** to Allah from sin.

**Example 2.** List the conditions of repentance. *Answer:* **Stop, regret, resolve not to return**, and **restore rights** owed to others.

**Example 3.** Where do hearts find rest? *Answer:* "**In the remembrance of Allah.**"`,
        },
        questions: [
          ["E", "Tawbah means", "repentance", "remembrance", "supplication", "gratitude", "Literally, it is returning to Allah."],
          ["E", "Saying 'Subhanallah' is called", "tasbih", "tahmid", "takbir", "tahlil", "It means Glory be to Allah."],
          ["E", "The Prophet said that du'a is", "worship", "optional talk", "only for the sick", "for scholars only", "It should be directed to Allah alone."],
          ["M", "According to the Qur'an, hearts find rest in", "the remembrance of Allah", "the gathering of wealth", "long sleep", "travel", "It is in Surah ar-Ra'd."],
          ["M", "Which of these is a condition of valid repentance?", "regret for the sin", "announcing the sin publicly", "paying a fee to a scholar", "fasting for sixty days", "One must also stop and resolve not to return."],
          ["M", "After each obligatory prayer it is recommended to say tasbih, tahmid and takbir", "thirty-three times each", "seven times each", "once each", "one hundred times each", "This is the well-known practice."],
          ["M", "'La ilaha illallah' as a form of dhikr is called", "tahlil", "tasbih", "istighfar", "salawat", "It is the declaration of Oneness."],
          ["H", "If a sin involved taking another person's property, repentance is incomplete until the sinner", "returns it or obtains the owner's pardon", "gives charity to the mosque", "performs Hajj", "recites the Qur'an", "The rights of people must be restored."],
          ["H", "A person who says 'I prayed but was not answered' and gives up has violated the etiquette of", "patience and certainty in du'a", "facing the Qiblah", "raising the hands", "praising Allah", "Allah may avert harm or store the reward instead."],
          ["H", "Qur'an 39:53, 'do not despair of the mercy of Allah', teaches that", "no sin is too great to be forgiven if one repents", "sins do not matter", "only small sins are forgiven", "despair is a form of piety", "Despair itself is forbidden."],
        ],
      },
      {
        week: 5,
        title: "Islam and contemporary social problems",
        subtopics: ["Cultism, violence and extremism", "Drug abuse and sexual immorality", "Corruption, fraud and examination malpractice", "Islamic solutions"],
        objectives: ["Explain the Islamic position on cultism and extremism", "Explain the Islamic position on drug abuse and immorality", "Explain the Islamic position on corruption and fraud", "Suggest Islamic solutions to these problems"],
        lesson: {
          title: "Guidance for Today",
          summary: "Apply Islamic teaching to current social problems.",
          minutes: 40,
          notes: `## A middle nation
Allah describes the Muslims as "**a middle (balanced) nation**" (*ummatan wasatan*, 2:143). Islam rejects both **neglect** and **excess**. "**Cooperate in righteousness and piety, and do not cooperate in sin and aggression**" (5:2).

## Cultism and gang violence
Secret cults involve **oaths to other than Allah**, rituals of **shirk**, intimidation, rape and **murder**. All are forbidden: life is sacred (5:32); loyalty belongs to Allah; "whoever takes up arms against us is not one of us". Good company is essential — the Prophet compared a good companion to a **seller of perfume** and a bad one to a **blacksmith's bellows**.

## Religious extremism
The Prophet warned, "**Beware of extremism in religion**; those before you were destroyed by it." Declaring other Muslims unbelievers, attacking places of worship, kidnapping and bombing violate the Shari'ah. Disagreement is handled with **knowledge and dialogue**.

## Drug abuse
Every intoxicant is forbidden. Abuse of codeine, tramadol, Indian hemp and similar substances destroys the **intellect**, health and future; it fuels crime. Selling them is also forbidden.

## Sexual immorality and its consequences
Zina, pornography, prostitution, rape and same-sex acts are prohibited. Consequences include **HIV/AIDS** and other infections, unwanted pregnancy and abortion. Islam's answer: **chastity, lowering the gaze, modest dress, early lawful marriage and faithfulness**. Those infected deserve **compassion and care**, not stigma.

## Corruption and bribery
Embezzlement of public funds, inflated contracts, extortion and nepotism betray the **amanah**. The Prophet cursed the briber and the bribed, and said of an official who kept "gifts": let him sit in his father's house and see whether gifts come to him.

## Fraud and cyber-crime
Internet fraud, forgery, false advertising and "money rituals" are theft and deception: "**Whoever cheats us is not one of us.**" Ritual killing combines murder with shirk.

## Examination malpractice
It is **cheating**, lying and theft of an unearned result; it produces incompetent professionals who endanger lives. A certificate obtained by fraud brings unlawful earnings.

## Tribalism and injustice
Rejected by 49:13 and the Farewell Sermon.

## Begging and idleness
The Prophet told a man who begged to sell his belongings, buy an **axe** and gather firewood — "that is better for you than begging". Work is dignified.

## Environmental abuse
Man is **khalifah** (steward) of the earth; waste and corruption on land and sea are condemned (30:41; 7:31). Planting trees is charity; polluting water is forbidden.

## Islamic solutions
1. **faith and God-consciousness** — the inner policeman
2. **sound upbringing** at home and moral education in school
3. **good company** and role models
4. **enjoining good and forbidding evil**
5. **social justice**: Zakah, employment, fair wages
6. **just and firm law** applied equally
7. **repentance** and rehabilitation
8. **leaders who set an example**`,
          examples: `**Example 1.** What does "ummatan wasatan" mean? *Answer:* A **middle, balanced nation**.

**Example 2.** What did the Prophet advise the man who begged? *Answer:* To **buy an axe and work** — better than begging.

**Example 3.** Why is examination malpractice forbidden? *Answer:* It is **cheating and lying**, and yields an unearned result.`,
        },
        questions: [
          ["E", "The Qur'an describes the Muslim community as a", "middle nation", "nation of warriors", "nation of traders", "hidden nation", "It avoids both excess and neglect."],
          ["E", "Examination malpractice is forbidden in Islam because it is a form of", "cheating", "studying", "charity", "consultation", "The cheat is not one of us."],
          ["E", "The Prophet compared a good companion to a", "seller of perfume", "blacksmith's bellows", "thorny tree", "dry well", "One benefits from his company."],
          ["M", "The Prophet warned his community to beware of", "extremism in religion", "seeking knowledge", "trade", "marriage", "Earlier peoples were destroyed by it."],
          ["M", "Qur'an 5:2 commands believers to cooperate in", "righteousness and piety", "sin and aggression", "tribal pride", "secret societies", "They must not cooperate in sin."],
          ["M", "The Prophet advised a beggar to buy an axe in order to", "gather firewood and earn a living", "defend himself", "build a house", "clear the mosque", "Work is better than begging."],
          ["M", "Man's role on earth as steward is expressed by the term", "khalifah", "kafir", "munafiq", "musafir", "He must not spread corruption on it."],
          ["H", "Secret cult membership contradicts Tawhid chiefly because it involves", "oaths and rituals devoted to other than Allah", "meeting at night", "wearing uniforms", "paying dues", "Loyalty and worship belong to Allah."],
          ["H", "The most fundamental Islamic remedy for corruption is", "God-consciousness that restrains a person even when unobserved", "higher salaries alone", "more officials", "secrecy in government", "Law works best with inner conviction."],
          ["H", "The Islamic attitude to a person living with HIV is that he or she should", "be cared for with compassion and not stigmatised", "be driven from the community", "be denied treatment", "be assumed to be sinful", "Illness calls for mercy; prevention is through chastity."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "The Umayyad and Abbasid caliphates",
        subtopics: ["The founding of the Umayyad caliphate", "Achievements and fall of the Umayyads", "The Abbasid caliphate", "The golden age and decline"],
        objectives: ["Describe the founding of the Umayyad caliphate", "State the achievements and causes of fall of the Umayyads", "Describe the rise of the Abbasids", "Describe the Abbasid golden age and its decline"],
        lesson: {
          title: "Damascus and Baghdad",
          summary: "Outline the history of the Umayyad and Abbasid caliphates.",
          minutes: 45,
          notes: `## The Umayyads (41–132 AH / 661–750 CE)
### Founding
After the death of Ali and the abdication of **al-Hasan**, **Mu'awiyah ibn Abi Sufyan**, governor of Syria, became caliph. The capital moved to **Damascus**. He nominated his son **Yazid**, making the caliphate **hereditary**.

### Karbala
In **61 AH (680 CE)**, **al-Husayn**, grandson of the Prophet, was killed with his companions at **Karbala** in Iraq by forces of Yazid's governor — a tragedy that deepened division among Muslims.

### Notable caliphs and achievements
- **Abdul-Malik ibn Marwan**: made **Arabic** the language of administration; issued the first purely **Islamic coinage**; built the **Dome of the Rock** in Jerusalem
- **al-Walid I**: greatest expansion — **Tariq ibn Ziyad** crossed into **Spain** (711 CE; Gibraltar is named after him); **Muhammad ibn al-Qasim** reached **Sind**; **Qutaybah ibn Muslim** in Central Asia; built the **Umayyad Mosque** of Damascus
- **Umar ibn Abdul-Aziz** (99–101 AH): famed for piety and justice — sometimes called the **fifth rightly guided caliph**; returned unjustly seized property; ordered the **compilation of Hadith**
- a postal service, a navy, irrigation works

### Causes of fall
hereditary and luxurious rule; **Arab favouritism** over non-Arab Muslims (*mawali*); tribal rivalry; opposition from supporters of the Prophet's family; weak later rulers. The Umayyads were defeated at the **battle of the Zab** (750 CE). One prince, **Abdur-Rahman I**, escaped to **Spain** and founded the Umayyad state of **Cordoba**.

## The Abbasids (132–656 AH / 750–1258 CE)
### Rise
Descendants of **al-Abbas**, the Prophet's uncle, led a revolt from **Khurasan**. The first caliph was **Abul-Abbas as-Saffah**. **Al-Mansur** founded the new capital, **Baghdad** (762 CE), the "City of Peace".

### The golden age
- **Harun ar-Rashid** (786–809): prosperity, trade from China to Europe, hospitals
- **al-Ma'mun** (813–833): the **Baytul-Hikmah**; translation and science
- non-Arabs, especially Persians, rose to high office (the **wazir**); paper mills; flourishing of law — the four imams lived in this era — Hadith collection, literature and medicine

### Decline
vast size and breakaway provinces; rival caliphates (**Fatimids** in Egypt, **Umayyads** in Spain); control of the caliphs by **Turkish guards**, then **Buyids** and **Seljuks**; luxury and sectarian strife; the **Crusades**. In **1258 CE** the **Mongols** under **Hulagu** sacked **Baghdad** and killed the caliph.

## Comparison
| | Umayyads | Abbasids |
|---|---|---|
| capital | Damascus | Baghdad |
| character | Arab-dominated; conquest | cosmopolitan; learning |
| duration | about 90 years | about 500 years |
| end | Abbasid revolt, 750 | Mongols, 1258 |

## Lessons
justice and equality preserve states; luxury and division destroy them; knowledge flourishes under patronage and tolerance.`,
          examples: `**Example 1.** Who founded the Umayyad caliphate? *Answer:* **Mu'awiyah ibn Abi Sufyan**.

**Example 2.** Which Abbasid caliph founded Baghdad? *Answer:* **Al-Mansur**.

**Example 3.** What ended the Abbasid caliphate in Baghdad? *Answer:* The **Mongol** sack of 1258.`,
        },
        questions: [
          ["E", "The capital of the Umayyad caliphate was", "Damascus", "Baghdad", "Madinah", "Cairo", "Mu'awiyah ruled from Syria."],
          ["E", "The founder of the Umayyad caliphate was", "Mu'awiyah", "Abdul-Malik", "al-Mansur", "Harun ar-Rashid", "He had been governor of Syria."],
          ["E", "Baghdad was the capital of the", "Abbasids", "Umayyads", "Fatimids", "Rightly guided caliphs", "It was founded in 762 CE."],
          ["M", "The commander who led the Muslim army into Spain in 711 CE was", "Tariq ibn Ziyad", "Khalid ibn al-Walid", "Amr ibn al-As", "Uqbah ibn Nafi'", "Gibraltar is named after him."],
          ["M", "The Umayyad caliph who made Arabic the language of administration was", "Abdul-Malik ibn Marwan", "Yazid", "Umar ibn Abdul-Aziz", "Marwan II", "He also issued Islamic coinage."],
          ["M", "The grandson of the Prophet killed at Karbala was", "al-Husayn", "al-Hasan", "Zayd", "Ja'far", "It happened in 61 AH."],
          ["M", "The Abbasids took their name from", "al-Abbas, uncle of the Prophet", "a town in Persia", "Abu Bakr", "a river in Iraq", "They claimed descent from him."],
          ["H", "A major cause of the fall of the Umayyads was", "discrimination against non-Arab Muslims", "defeat by the Mongols", "the sack of Damascus by Crusaders", "lack of a capital", "The mawali supported the Abbasid revolt."],
          ["H", "Umar ibn Abdul-Aziz is sometimes called the fifth rightly guided caliph because of his", "justice and piety in government", "military conquests", "long reign", "wealth", "He restored property that had been unjustly taken."],
          ["H", "Abbasid rule differed from Umayyad rule in that it", "gave non-Arabs a large share in government and learning", "moved the capital to Damascus", "ended all scholarship", "was limited to Arabia", "Persians often served as wazirs."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: the Qur'an and Hadith",
        subtopics: ["Revelation, compilation and Tafsir", "Suwar and passages studied", "History and classification of Hadith", "The Hadith studied"],
        objectives: ["Recall the revelation, compilation and interpretation of the Qur'an", "Recall the themes of the suwar and passages studied", "Recall the history and classification of Hadith", "Recall the teachings of the Hadith studied"],
        lesson: {
          title: "Revising Qur'an and Hadith",
          summary: "Consolidate the Qur'an and Hadith sections for the senior examinations.",
          minutes: 45,
          notes: `## The Qur'an
- **wahy**: dreams, bell-like sound, angel in human form, behind a veil
- gradual revelation — wisdom; **asbabun-nuzul**
- **Makkan** (belief, short verses, "O mankind") and **Madinan** (law, "O you who believe")
- preservation: scribes; **Abu Bakr** (Yamamah, Umar's advice, Zayd, kept by Hafsah); **Uthman** (Hudhayfah, committee, Quraysh dialect, copies sent out)
- **Tafsir**: bil-ma'thur and bir-ra'y; Ibn Abbas; at-Tabari, Ibn Kathir, al-Qurtubi, Jalalayn

## Suwar and passages
| Text | Key theme |
|---|---|
| ad-Duha | not forsaken; care for the orphan |
| ash-Sharh | with hardship comes ease |
| at-Tin | best form; faith and deeds |
| al-Alaq | read; arrogance; prostrate |
| al-Qadr | night better than a thousand months |
| al-Bayyinah | clear proof; best and worst of creatures |
| az-Zalzalah | atom's weight |
| al-Adiyat | ingratitude; love of wealth |
| Ayatul-Kursi | Allah's life, knowledge and power |
| 2:285–286 | faith; no burden beyond capacity |
| al-A'la | glorify; purify; Hereafter better |
| al-Hujurat 6–13 | verify; reconcile; six prohibitions; taqwa |
| Luqman 12–19 | no shirk; parents; prayer; humility |
| al-Isra' 23–39 | commandments |
Also the junior suwar: al-Fatihah to al-Qari'ah.

## Hadith
- stages: memorisation and private notes → companions → **Umar ibn Abdul-Aziz** and **az-Zuhri** → **al-Muwatta** → the **six books**
- **sahih, hasan, da'if, mawdu'**; **mutawatir, ahad**; **marfu', mawquf, maqtu'**; **Hadith Qudsi**
- **isnad** and **matn**; al-Jarh wat-Ta'dil

## An-Nawawi's Hadith studied
1 intentions · 5 innovation · 6 lawful, unlawful, doubtful; the heart · 7 religion is sincerity · 9 obey as able · 13 love for your brother · 15 speak good; neighbour; guest · 16 anger · 18 taqwa; good character · 19 be mindful of Allah · 32 no harm · 34 changing evil · 35 brotherhood

## Technique
for a surah: give the **meaning of the name, number of verses, place of revelation, summary and lessons**; for a hadith: **narrator, collector, meaning and lessons**; write transliteration accurately if asked.`,
          examples: `**Example 1.** Which surah promises ease with hardship? *Answer:* **Ash-Sharh**.

**Example 2.** Which hadith gives the three levels of changing evil? *Answer:* **Hadith 34**.

**Example 3.** What is a mutawatir hadith? *Answer:* One narrated by **so many at every level** that agreement on a lie is impossible.`,
        },
        questions: [
          ["E", "The surah that describes man as created in the best form is", "at-Tin", "al-Adiyat", "al-Qadr", "ad-Duha", "It opens with oaths by the fig and the olive."],
          ["E", "The hadith that teaches 'no harming and no reciprocating harm' is number", "32", "1", "13", "19", "It is a legal maxim."],
          ["E", "The verse known as the greatest in the Qur'an is", "Ayatul-Kursi", "the Basmalah", "the last verse of al-Baqarah", "the first verse of al-Alaq", "It is 2:255. Answer: Ayatul-Kursi."],
          ["M", "The surah that teaches the verification of news is", "al-Hujurat", "Luqman", "al-A'la", "al-Bayyinah", "The command is in verse 6."],
          ["M", "A hadith whose chain stops at a successor is called", "maqtu'", "mawquf", "marfu'", "mutawatir", "A mawquf report stops at a companion."],
          ["M", "The surah that mentions the scriptures of Ibrahim and Musa in its final verse is", "al-A'la", "az-Zalzalah", "ash-Sharh", "al-Alaq", "It has nineteen verses."],
          ["M", "The hadith stating that the lawful is clear and the unlawful is clear was narrated by", "an-Nu'man ibn Bashir", "Tamim ad-Dari", "Abu Sa'id al-Khudri", "Ibn Abbas", "It also speaks of the heart."],
          ["H", "Suratul-Adiyat and Suratut-Takathur share the theme of", "man's attachment to wealth and forgetfulness of the Hereafter", "the rules of fasting", "the story of Abrahah", "the etiquette of the mosque", "Both warn of the graves being opened or visited."],
          ["H", "Both Luqman's advice and Hadith 34 require a Muslim to", "enjoin what is right and forbid what is wrong", "avoid all people", "collect Zakah", "travel for knowledge", "Luqman adds patience over what follows."],
          ["H", "A report found in both the Sahih of al-Bukhari and that of Muslim carries special weight because", "both applied the strictest conditions of authenticity", "they were companions", "it is then Hadith Qudsi", "it becomes part of the Qur'an", "Such a report is called agreed upon."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: Tawhid and Fiqh",
        subtopics: ["Tawhid, shirk and the articles of faith", "Sources of law and the schools", "Worship", "Family law, economics and politics"],
        objectives: ["Recall the categories of Tawhid and the articles of faith", "Recall the sources of the Shari'ah and the schools of law", "Recall the rules of the acts of worship", "Recall family law and the economic and political systems"],
        lesson: {
          title: "Revising Belief and Law",
          summary: "Consolidate the Tawhid and Fiqh sections for the senior examinations.",
          minutes: 45,
          notes: `## Tawhid
- **Rububiyyah, Uluhiyyah, Asma' was-Sifat**
- **shirk**: major and minor (riya', amulets, swearing by other than Allah); **kufr**; **nifaq**
- six articles; angels; books; prophets (qualities; Ulul-Azm); Last Day (Barzakh, Ba'th, Hisab, Mizan, Sirat); Qadar

## Sources and schools
- **Qur'an, Sunnah, Ijma, Qiyas** (asl, far', hukm, illah); Mu'adh's hadith; **maqasid** — religion, life, intellect, lineage, property
- **five rulings**: fard, mandub, mubah, makruh, haram; fard ayn and kifayah
- **Abu Hanifah** (Kufah; qiyas, istihsan), **Malik** (Madinah; al-Muwatta), **ash-Shafi'i** (ar-Risalah), **Ahmad** (al-Musnad; mihnah)

## Worship
- **Taharah**: water; wudu; tayammum; ghusl
- **Salah**: conditions, pillars, spoilers, Sujudus-Sahw; Jumu'ah; Jama'ah; Qasr and Jam'; Janazah; Id; Witr; Kusuf; Istisqa; Istikharah
- **Zakah**: nisab, hawl, 2.5%, crops 10%/5%; eight recipients; Zakatul-Fitr
- **Sawm**: essentials; spoilers; Qada, Kaffarah, Fidyah; Laylatul-Qadr; I'tikaf
- **Hajj**: conditions; ihram; tawaf; sa'y; Arafat; Muzdalifah; stoning; Ifadah; types; Umrah

## Family law
- **Nikah**: wali, witnesses, mahr, offer and acceptance, consent; prohibited degrees; polygyny with justice
- rights of spouses; nafaqah
- **Talaq**: raj'i, ba'in (minor and major); khul'; faskh; **iddah** periods
- **Mirath**: order of claims; husband 1/2 or 1/4; wife 1/4 or 1/8; son = two daughters; bequest ≤ 1/3, not to an heir
- children: aqiqah, naming, hadanah, kafalah

## Economic system
halal earning; riba, gharar, ihtikar forbidden; mudarabah, musharakah, murabahah, ijarah, qard hasan; waqf; Baytul-Mal

## Political system
sovereignty of Allah; khilafah; shura; adl; bay'ah; accountability; rights of non-Muslims

## Crimes and justice
hudud; qisas and diyah; ta'zir; qadi; doubt averts hudud

## Moral and social teaching
modesty; intoxicants, gambling, riba, bribery; human rights; status of women; jihad and peace; tawbah, dhikr, du'a.

## Technique
define the term first; give the **Qur'anic or Hadith basis**; list conditions or kinds; end with wisdom or relevance.`,
          examples: `**Example 1.** Name the four pillars of Qiyas. *Answer:* **Asl, far', hukm, illah**.

**Example 2.** What is the iddah of a divorced woman who menstruates? *Answer:* **Three menstrual cycles**.

**Example 3.** Which contract shares profit between capital and labour? *Answer:* **Mudarabah**.`,
        },
        questions: [
          ["E", "The third source of the Shari'ah is", "Ijma", "Qiyas", "Sunnah", "Urf", "It is the consensus of qualified scholars."],
          ["E", "The rate of Zakah on gold, silver and cash is", "one-fortieth", "one-tenth", "one-fifth", "one-half", "That is two and a half per cent."],
          ["E", "The condition attached to polygyny in the Qur'an is", "justice between the wives", "great wealth", "consent of the ruler", "royal birth", "Otherwise a man should marry only one."],
          ["M", "An act that is rewarded when avoided but not sinful when done is", "makruh", "haram", "mubah", "fard", "An example is wasting water in ablution."],
          ["M", "The essential rite without which the Hajj is missed is", "standing at Arafat", "the farewell tawaf", "drinking Zamzam", "visiting Madinah", "The Prophet said Hajj is Arafah."],
          ["M", "A divorced woman who does not menstruate observes an iddah of", "three months", "four months and ten days", "one month", "three cycles", "It is stated in Suratut-Talaq."],
          ["M", "Worshipping to be seen by others is an example of", "minor shirk", "major shirk", "kufr of denial", "bid'ah only", "It is called riya'."],
          ["H", "A man dies leaving a wife and no child. His wife's share of the estate is", "one-quarter", "one-eighth", "one-half", "one-third", "With a child it would be one-eighth."],
          ["H", "A traveller who cannot find water at prayer time on a long journey should", "perform tayammum and shorten the four-rak'ah prayer", "delay prayer until he returns home", "pray without purification", "pray four rak'ahs after ghusl with sand", "Both concessions apply together."],
          ["H", "The principle of shura and the rule that bequests to heirs need the other heirs' consent both reflect Islam's concern for", "fairness through consultation and consent", "the power of rulers", "secrecy in family matters", "the supremacy of custom", "Those affected have a say."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: Sirah, Islamic history and moral education",
        subtopics: ["The life of the Prophet", "The caliphs and later caliphates", "Islam in West Africa", "Moral and social teachings"],
        objectives: ["Recall the main events in the life of the Prophet", "Recall the rightly guided caliphs and the later caliphates", "Recall the history of Islam in West Africa", "Recall the moral and social teachings studied"],
        lesson: {
          title: "Revising History and Morals",
          summary: "Consolidate the Sirah, history and Tahdhib sections for the senior examinations.",
          minutes: 45,
          notes: `## The Prophet
- Jahiliyyah; birth 570; Al-Amin; Khadijah
- revelation 610; secret then open preaching; persecution; Abyssinia; boycott; Year of Sorrow; Ta'if; Isra' and Mi'raj; Aqabah
- **Hijrah 622**; mosque; brotherhood; Charter
- **Badr, Uhud, Khandaq**; **Hudaybiyyah**; **conquest of Makkah**; **Farewell Sermon**; death 632
- his character: mercy, humility, justice, shura

## The rightly guided caliphs
**Abu Bakr** (Riddah; Qur'an collected) · **Umar** (expansion; diwan; calendar; justice) · **Uthman** (standard Qur'an; navy) · **Ali** (Kufah; Jamal; Siffin)

## Later caliphates
- **Umayyads** (661–750): Mu'awiyah; Damascus; Abdul-Malik; al-Walid; Spain 711; Umar ibn Abdul-Aziz; Karbala
- **Abbasids** (750–1258): Baghdad; Harun; al-Ma'mun; Baytul-Hikmah; Mongols

## Muslim civilisation
al-Khwarizmi; Ibn Sina; ar-Razi; az-Zahrawi; Ibn al-Haytham; Jabir; Ibn Khaldun; al-Qarawiyyin; al-Azhar.

## Islam in West Africa
- routes and agents: trade, scholars, rulers, **Almoravids** (Abdullah ibn Yasin), Sufi orders
- **Ghana** (Kumbi Saleh; al-Bakri) · **Mali** (Mansa Musa 1324; as-Sahili; Ibn Battuta) · **Songhai** (Askia Muhammad; Timbuktu; Sankore; Ahmad Baba; 1591)
- **Kanem-Borno** (Umme Jilmi; Idris Alooma; Ibn Fartuwa; al-Kanemi)
- **Hausaland** (Wangara; Yaji; Rumfa; al-Maghili)
- **Sokoto Jihad** (Uthman dan Fodio; Gudu 1804; Tabkin Kwatto; Alkalawa 1808; Bello and Abdullahi; Nana Asma'u)
- **Yorubaland** (Ilorin — Alimi; societies — Ansar-Ud-Deen 1923, MSSN 1954, JNI 1962, NSCIA 1973)

## Moral and social teachings
truthfulness; trust; kindness to parents; patience; modesty and dress; avoidance of zina, intoxicants, gambling, riba, bribery; brotherhood; no mockery, suspicion, spying or backbiting; justice; care of orphans and neighbours; work; moderation; repentance.

## Technique for history questions
give **dates and names** accurately; arrange events in **order**; separate **causes, course and results**; draw **lessons** for today.`,
          examples: `**Example 1.** Arrange in order: Hudaybiyyah, Badr, conquest of Makkah. *Answer:* **Badr, Hudaybiyyah, conquest of Makkah**.

**Example 2.** Who introduced qadis in Borno? *Answer:* **Mai Idris Alooma**.

**Example 3.** In what year did the Shehu migrate to Gudu? *Answer:* **1804**.`,
        },
        questions: [
          ["E", "The treaty that the Qur'an called a clear victory was signed at", "Hudaybiyyah", "Aqabah", "Badr", "Ta'if", "It was in the sixth year after the Hijrah."],
          ["E", "The Sokoto Jihad was led by", "Uthman dan Fodio", "Idris Alooma", "Askia Muhammad", "Mansa Musa", "It began in 1804."],
          ["E", "The caliph in whose time the Hijri calendar was introduced was", "Umar", "Abu Bakr", "Uthman", "Ali", "He also set up the public registers."],
          ["M", "The correct chronological order is", "Almoravids, Mansa Musa's pilgrimage, Sokoto Jihad", "Sokoto Jihad, Almoravids, Mansa Musa's pilgrimage", "Mansa Musa's pilgrimage, Sokoto Jihad, Almoravids", "Almoravids, Sokoto Jihad, Mansa Musa's pilgrimage", "Eleventh, fourteenth and nineteenth centuries."],
          ["M", "The scholar who advised both Askia Muhammad and Muhammad Rumfa was", "al-Maghili", "Ibn Battuta", "al-Bakri", "Ahmad Baba", "He wrote on the duties of rulers."],
          ["M", "The battles of the Camel and Siffin took place during the caliphate of", "Ali", "Umar", "Abu Bakr", "Mu'awiyah", "His rule was troubled by civil strife."],
          ["M", "The Abbasid caliphate in Baghdad came to an end in", "1258", "750", "1492", "1591", "The Mongols sacked the city."],
          ["H", "A feature common to the spread of Islam in Ghana, Mali and Hausaland is that it", "began among traders and rulers in the towns", "was imposed by conquest from Arabia", "started in rural villages", "came by sea", "It reached the countryside later."],
          ["H", "The Charter of Madinah and Qur'an 60:8 together show that Islam", "provides for just and peaceful coexistence with non-Muslims", "forbids all dealings with non-Muslims", "requires their conversion", "ignores their rights", "Kindness and justice are owed to the peaceful."],
          ["H", "The reforms of Umar ibn Abdul-Aziz, Idris Alooma and Uthman dan Fodio share the aim of", "bringing government into line with justice and the Shari'ah", "expanding territory", "increasing taxes", "ending scholarship", "Each sought to correct injustice."],
        ],
      },
    ],
  },
];
