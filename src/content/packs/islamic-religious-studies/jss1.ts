import type { TermPlan } from "../types";

/** JSS1 Islamic Religious Studies — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to Islam",
        subtopics: ["Meaning of Islam and Muslim", "The five pillars of Islam", "Sources of Islamic teaching", "Importance of Islamic Studies"],
        objectives: ["Explain the meaning of Islam and Muslim", "List the five pillars of Islam in order", "Identify the main sources of Islamic teaching", "State the importance of studying Islam"],
        lesson: {
          title: "What Is Islam?",
          summary: "Explain the meaning of Islam and outline its five pillars.",
          minutes: 40,
          notes: `## Meaning of Islam
The word **Islam** comes from an Arabic root meaning **peace** and **submission**. Islam is **total submission to the will of Allah** and obedience to His commands. A person who follows Islam is a **Muslim** — one who submits to Allah.
Islam is not a new religion: Muslims believe it is the same message taught by all the prophets, from **Adam** to **Muhammad** (peace be upon him), who is the **last Prophet**.

## The five pillars of Islam (Arkanul-Islam)
1. **Shahadah** — declaring that there is no god but Allah and that Muhammad is His Messenger
2. **Salah** — the five daily prayers
3. **Zakah** — giving a fixed share of wealth to those entitled to it
4. **Sawm** — fasting in the month of **Ramadan**
5. **Hajj** — pilgrimage to **Makkah** once in a lifetime, for those who are able

The pillars are like the pillars of a house: if they are removed, the house cannot stand.

## Sources of Islamic teaching
- the **Qur'an** — the word of Allah revealed to Prophet Muhammad; the first source
- the **Sunnah / Hadith** — the sayings, actions and approvals of the Prophet; the second source
- **Ijma** — the agreement of Muslim scholars
- **Qiyas** — reasoning by analogy from the Qur'an and Sunnah

## Branches studied in school
- **Qur'an** and its meaning
- **Hadith**
- **Tawhid** (belief in the Oneness of Allah)
- **Fiqh** (rules of worship and conduct)
- **Sirah** (the life of the Prophet) and Islamic history
- **Tahdhib** (moral education)

## Importance of Islamic Studies
- it teaches us to know and worship Allah correctly
- it builds good character: honesty, kindness, respect
- it shows the difference between **halal** (lawful) and **haram** (unlawful)
- it prepares us for this life and the **Hereafter**
- it promotes peace and good relations with others`,
          examples: `**Example 1.** What does the word Islam mean? *Answer:* **Peace and submission** to the will of Allah.

**Example 2.** Which pillar comes third? *Answer:* **Zakah**.

**Example 3.** What is the first source of Islamic teaching? *Answer:* The **Qur'an**.`,
        },
        questions: [
          ["E", "The word Islam means peace and", "submission to the will of Allah", "wealth", "travelling", "fasting only", "A Muslim submits to Allah."],
          ["E", "The number of pillars of Islam is", "five", "six", "seven", "three", "They begin with the Shahadah."],
          ["E", "A person who follows Islam is called a", "Muslim", "Mumin only", "Hajji", "Imam", "The word means one who submits."],
          ["M", "The first pillar of Islam is", "Shahadah", "Salah", "Zakah", "Hajj", "It is the declaration of faith."],
          ["M", "Fasting in the month of Ramadan is known as", "Sawm", "Zakah", "Salah", "Hajj", "It is the fourth pillar."],
          ["M", "The second source of Islamic teaching is the", "Sunnah", "Qiyas", "Ijma", "Sirah", "It records the Prophet's words and deeds."],
          ["M", "The branch of Islamic Studies that deals with the life of the Prophet is", "Sirah", "Fiqh", "Tawhid", "Tahdhib", "It includes Islamic history."],
          ["H", "Muslims describe Prophet Muhammad as the", "last of the prophets", "first of the prophets", "only prophet", "prophet of the Arabs alone", "The message began with Adam."],
          ["H", "The pillar of Islam that is required only of those who are able to afford the journey is", "Hajj", "Salah", "Shahadah", "Sawm", "It is performed in Makkah."],
          ["H", "Reasoning by analogy from the Qur'an and Sunnah is called", "Qiyas", "Ijma", "Hadith", "Fiqh", "It is the fourth source of law."],
        ],
      },
      {
        week: 2,
        title: "The Glorious Qur'an",
        subtopics: ["Meaning of the Qur'an", "Revelation of the Qur'an", "Divisions of the Qur'an", "Respect for the Qur'an"],
        objectives: ["Explain what the Qur'an is", "Describe how the Qur'an was revealed", "State the main divisions of the Qur'an", "List ways of showing respect for the Qur'an"],
        lesson: {
          title: "The Book of Allah",
          summary: "Describe the revelation, divisions and etiquette of the Qur'an.",
          minutes: 40,
          notes: `## What is the Qur'an?
The **Qur'an** is the word of **Allah** revealed to Prophet **Muhammad** (peace be upon him) through the angel **Jibril**, in the **Arabic** language. The word means "**recitation**" or "that which is read". It is the last revealed book and a guide for all mankind.

## Revelation
- the first revelation came in the cave of **Hira** on **Jabal an-Nur** (the Mountain of Light) near Makkah
- it was in the month of **Ramadan**, when the Prophet was **forty** years old
- Jibril said "**Iqra**" (Read); the first verses revealed were the **first five verses of Suratul-Alaq**
- the revelation continued in parts for about **twenty-three years** — about thirteen in **Makkah** and ten in **Madinah**
- the Prophet's companions **memorised** it and **wrote** it on materials such as parchment, bones and palm leaves

## Divisions
- **114 suwar** (chapters; singular **surah**)
- each surah is made up of **ayat** (verses; singular **ayah**)
- **30 ajza** (parts; singular **juz**) for ease of reading
- the first surah is **al-Fatihah**; the last is **an-Nas**
- the longest surah is **al-Baqarah**; the shortest is **al-Kawthar**
- suwar revealed before the Hijrah are **Makkan**; those revealed after are **Madinan**
- every surah except **at-Tawbah** begins with the **Basmalah** ("In the name of Allah, the Beneficent, the Merciful")

## Other names of the Qur'an
**Al-Kitab** (the Book), **Al-Furqan** (the Criterion between right and wrong), **Adh-Dhikr** (the Reminder), **Al-Huda** (the Guidance).

## Respect for the Qur'an
- be in a state of **cleanliness** (with ablution) before touching it
- begin with **Ta'awwudh** (seeking refuge with Allah) and the **Basmalah**
- sit properly, recite slowly and clearly (**tartil**)
- listen quietly when it is recited
- keep it in a clean, high place; do not put things on it
- try to understand and practise it

## Importance
guidance for life; source of law; cure for the heart; reciting it earns reward; it has been preserved without change.`,
          examples: `**Example 1.** Where did the first revelation come? *Answer:* In the cave of **Hira**.

**Example 2.** How many suwar are in the Qur'an? *Answer:* **114**.

**Example 3.** Which surah has no Basmalah at its beginning? *Answer:* **At-Tawbah**.`,
        },
        questions: [
          ["E", "The Qur'an was revealed to Prophet Muhammad through the angel", "Jibril", "Mika'il", "Israfil", "Malik", "He brought the revelation from Allah."],
          ["E", "The Qur'an contains how many suwar?", "114", "30", "99", "124", "The first is al-Fatihah."],
          ["E", "The first revelation came in the cave of", "Hira", "Thawr", "Uhud", "Safa", "It is on the Mountain of Light."],
          ["M", "The Qur'an was revealed over a period of about", "twenty-three years", "ten years", "forty years", "three years", "Partly in Makkah and partly in Madinah."],
          ["M", "The first verses revealed to the Prophet are found in Surah", "al-Alaq", "al-Fatihah", "al-Baqarah", "an-Nas", "They begin with the word Iqra."],
          ["M", "The Qur'an is divided into how many ajza (parts)?", "thirty", "seven", "sixty", "one hundred and fourteen", "This makes regular reading easy."],
          ["M", "The longest surah of the Qur'an is", "al-Baqarah", "al-Kawthar", "Yasin", "al-Ikhlas", "It is the second surah."],
          ["H", "The name al-Furqan, given to the Qur'an, means", "the Criterion between right and wrong", "the Reminder", "the Opening", "the Light", "It separates truth from falsehood."],
          ["H", "A surah revealed after the Prophet's migration to Madinah is described as", "Madinan", "Makkan", "Qudsi", "Mutawatir", "The Hijrah is the dividing point."],
          ["H", "Reciting the Qur'an slowly and clearly is called", "tartil", "tayammum", "takbir", "tasbih", "It is part of the etiquette of recitation."],
        ],
      },
      {
        week: 3,
        title: "Suratul-Fatihah",
        subtopics: ["Introduction to the surah", "Meaning of the verses", "Lessons of the surah", "Its place in salah"],
        objectives: ["State basic facts about Suratul-Fatihah", "Explain the meaning of its verses", "Draw lessons from the surah", "Explain its importance in prayer"],
        lesson: {
          title: "The Opening Chapter",
          summary: "Study the meaning and lessons of Suratul-Fatihah.",
          minutes: 40,
          notes: `## Introduction
**Al-Fatihah** means "**the Opening**". It is the **first** surah of the Qur'an, has **seven verses** and was revealed in **Makkah**. Other names: **Ummul-Kitab** (Mother of the Book), **As-Sab'ul-Mathani** (the Seven Oft-Repeated Verses), **Suratul-Hamd** (the Chapter of Praise).

## Meaning of the verses (in summary)
1. *Bismillahir-Rahmanir-Rahim* — beginning in the name of Allah, the **Most Gracious**, the **Most Merciful**
2. *Al-hamdu lillahi Rabbil-alamin* — all praise belongs to Allah, **Lord of all the worlds**
3. *Ar-Rahmanir-Rahim* — the Most Gracious, the Most Merciful
4. *Maliki yawmid-din* — **Master of the Day of Judgement**
5. *Iyyaka na'budu wa iyyaka nasta'in* — **You alone we worship, and You alone we ask for help**
6. *Ihdinas-siratal-mustaqim* — **guide us on the straight path**
7. *Siratal-ladhina an'amta alayhim …* — the path of those You have favoured, not of those who earned anger nor of those who went astray

After the surah we say "**Amin**" — "O Allah, accept".

## Structure
- verses 1–4: **praise** of Allah and His attributes
- verse 5: a **pledge** of worship and dependence
- verses 6–7: a **prayer** for guidance

## Lessons
- begin every good act with the **name of Allah**
- **thank and praise** Allah for His blessings
- Allah is merciful, yet He is also the Judge: there is a **Day of Judgement**
- worship **Allah alone** and seek help from Him alone (Tawhid)
- always ask for **guidance**
- follow the example of the righteous and avoid the ways of those who go astray

## Its place in salah
Al-Fatihah is recited in **every rak'ah** of every prayer. The Prophet taught that there is **no prayer** for one who does not recite it. A Muslim who prays the five daily prayers recites it at least **seventeen** times a day.

## Etiquette
recite it correctly with proper pronunciation, calmly, and with attention to its meaning.`,
          examples: `**Example 1.** What does al-Fatihah mean? *Answer:* **The Opening**.

**Example 2.** Which verse contains a pledge to worship Allah alone? *Answer:* **Verse 5** — "You alone we worship."

**Example 3.** What do we say after reciting it? *Answer:* **Amin**.`,
        },
        questions: [
          ["E", "Suratul-Fatihah has how many verses?", "seven", "five", "six", "four", "They are called the Seven Oft-Repeated."],
          ["E", "The name al-Fatihah means", "the Opening", "the Dawn", "the Help", "the People", "It opens the Qur'an."],
          ["E", "After reciting al-Fatihah we say", "Amin", "Tasbih", "Adhan", "Salam", "It means 'O Allah, accept'."],
          ["M", "Another name for Suratul-Fatihah is", "Ummul-Kitab", "Ayatul-Kursi", "Al-Furqan", "Ummul-Qura", "It means Mother of the Book."],
          ["M", "'Maliki yawmid-din' means", "Master of the Day of Judgement", "Lord of all the worlds", "Guide us on the straight path", "The Most Merciful", "It is the fourth verse."],
          ["M", "In al-Fatihah, the believer asks Allah mainly for", "guidance on the straight path", "wealth", "long life", "victory in war", "Verses six and seven are a prayer."],
          ["M", "Suratul-Fatihah was revealed in", "Makkah", "Madinah", "Ta'if", "Jerusalem", "It is a Makkan surah."],
          ["H", "The verse 'Iyyaka na'budu wa iyyaka nasta'in' teaches", "worship of Allah alone and reliance on Him alone", "the reward of fasting", "the story of earlier prophets", "the rules of inheritance", "It expresses Tawhid."],
          ["H", "A Muslim who observes only the five daily obligatory prayers recites al-Fatihah at least", "seventeen times a day", "five times a day", "ten times a day", "thirty times a day", "Once in each of the seventeen rak'ahs."],
          ["H", "The first four verses of al-Fatihah are mainly", "praise of Allah and His attributes", "a request for forgiveness", "a list of commands", "a story", "The prayer follows after the praise."],
        ],
      },
      {
        week: 4,
        title: "Suratun-Nas and Suratul-Falaq",
        subtopics: ["Introduction to the two suwar", "Meaning of Suratun-Nas", "Meaning of Suratul-Falaq", "Lessons and uses"],
        objectives: ["State basic facts about the two suwar", "Explain the meaning of Suratun-Nas", "Explain the meaning of Suratul-Falaq", "State the lessons and uses of the two suwar"],
        lesson: {
          title: "The Two Chapters of Refuge",
          summary: "Study the meaning and lessons of Suratun-Nas and Suratul-Falaq.",
          minutes: 40,
          notes: `## Introduction
The last two suwar of the Qur'an are called **Al-Mu'awwidhatayn** — "the two chapters of seeking refuge". Both begin with "**Qul a'udhu**" ("Say: I seek refuge").

## Suratun-Nas (chapter 114)
- **an-Nas** means "**Mankind**"; it has **six verses**
- meaning in summary: Say, I seek refuge with the **Lord of mankind**, the **King of mankind**, the **God of mankind**, from the evil of the **whisperer who withdraws** — who whispers into the hearts of people — from among **jinn and mankind**
- Allah is described by three titles: **Rabb** (Lord), **Malik** (King), **Ilah** (God)
- the danger is **inside**: evil whispers (waswas) from **Shaytan** and from bad companions

## Suratul-Falaq (chapter 113)
- **al-Falaq** means "**the Daybreak**"; it has **five verses**
- meaning in summary: Say, I seek refuge with the **Lord of the daybreak**, from the evil of **what He has created**, from the evil of **darkness when it settles**, from the evil of **those who blow on knots** (those who practise witchcraft), and from the evil of **an envier when he envies**
- the dangers are **outside**: harmful creatures, the night, magic and envy

## Lessons
- only **Allah** can protect; a Muslim seeks refuge with Him alone — not with charms, amulets or soothsayers
- Shaytan is an enemy who whispers and withdraws when Allah is remembered
- **magic and witchcraft** are evil and forbidden
- **envy (hasad)** is a serious sin that harms both the envier and the envied
- keep good company; bad friends also whisper evil
- remember Allah often to keep the heart safe

## Uses in daily life
The Prophet used to recite these two suwar (with al-Ikhlas):
- **before sleeping**, blowing into his palms and wiping over his body
- **after each prayer**
- **morning and evening**
- when someone is **ill** or afraid

## Recitation
Learn the Arabic text by heart from your teacher, with correct pronunciation, and use it daily.`,
          examples: `**Example 1.** What does al-Falaq mean? *Answer:* **The Daybreak**.

**Example 2.** Which three titles of Allah appear in Suratun-Nas? *Answer:* **Lord, King and God** of mankind.

**Example 3.** Name one evil mentioned in Suratul-Falaq. *Answer:* The evil of **an envier** (also darkness, and those who blow on knots).`,
        },
        questions: [
          ["E", "The last surah of the Qur'an is", "an-Nas", "al-Falaq", "al-Ikhlas", "al-Fatihah", "It is chapter 114."],
          ["E", "Al-Falaq means", "the Daybreak", "Mankind", "the Night", "the Help", "It is chapter 113."],
          ["E", "Suratun-Nas has how many verses?", "six", "five", "four", "seven", "It names Allah as Lord, King and God."],
          ["M", "Suratun-Nas and Suratul-Falaq together are called", "Al-Mu'awwidhatayn", "As-Sab'ul-Mathani", "Ummul-Kitab", "Al-Furqan", "The name means the two chapters of refuge."],
          ["M", "In Suratun-Nas, refuge is sought from the evil of", "the whisperer who withdraws", "the darkness of night", "the envier", "the rising sun", "He whispers into people's hearts."],
          ["M", "'Those who blow on knots' in Suratul-Falaq refers to people who practise", "witchcraft", "farming", "trading", "weaving", "Magic is forbidden in Islam."],
          ["M", "The Prophet used to recite the last three suwar of the Qur'an", "before going to sleep", "only during Hajj", "once a year", "only in Ramadan", "He wiped over his body afterwards."],
          ["H", "A lesson common to both suwar is that a Muslim should seek protection from", "Allah alone", "charms and amulets", "soothsayers", "the spirits of ancestors", "Only Allah can protect from evil."],
          ["H", "Hasad, which is condemned in Suratul-Falaq, means", "envy", "pride", "anger", "laziness", "The envier wishes another to lose a blessing."],
          ["H", "The whisperer in Suratun-Nas is said to come from among", "jinn and mankind", "angels and jinn", "animals and birds", "the dead", "Bad companions can also whisper evil."],
        ],
      },
      {
        week: 5,
        title: "Suratul-Ikhlas and Suratul-Masad",
        subtopics: ["Meaning of Suratul-Ikhlas", "Lessons on the Oneness of Allah", "Background of Suratul-Masad", "Lessons of Suratul-Masad"],
        objectives: ["Explain the meaning of Suratul-Ikhlas", "State the lessons of Suratul-Ikhlas on Tawhid", "Narrate the background of Suratul-Masad", "State the lessons of Suratul-Masad"],
        lesson: {
          title: "Pure Faith and a Warning",
          summary: "Study the meaning and lessons of Suratul-Ikhlas and Suratul-Masad.",
          minutes: 40,
          notes: `## Suratul-Ikhlas (chapter 112)
- **al-Ikhlas** means "**Sincerity**" or "**Purity of faith**"; it has **four verses**; Makkan
- it was revealed when the idol-worshippers asked the Prophet to describe his Lord
- meaning in summary:
  1. Say: He is Allah, **the One** (*Ahad*)
  2. Allah, **the Eternal, on whom all depend** (*As-Samad*)
  3. He **does not beget, nor was He begotten**
  4. and there is **none comparable** to Him

### Lessons
- Allah is **One**, with no partner
- everything needs Allah; He needs nothing
- Allah has **no child, parent or wife**
- nothing is like Him; He must not be pictured or compared with creatures
- associating partners with Allah (**shirk**) is the greatest sin
The Prophet said this surah is equal to **one-third of the Qur'an**, because it sums up the teaching on Tawhid.

## Suratul-Masad (chapter 111)
- **al-Masad** means "**the Palm Fibre**"; it is also called **Suratul-Lahab** ("the Flame"); it has **five verses**; Makkan

### Background
When the Prophet was commanded to preach openly, he climbed Mount **Safa** and called the clans of Quraysh. He asked whether they would believe him if he said an army was behind the hill; they said yes, for they had never known him to lie. He then warned them of Allah's punishment. His uncle **Abu Lahab** cursed him, saying, "May you perish! Is this why you gathered us?" Allah then revealed this surah.

### Meaning in summary
1. May the hands of **Abu Lahab** perish, and may he perish
2. his **wealth and what he earned** will not benefit him
3. he will enter a **blazing Fire**
4. and his **wife**, the **carrier of firewood**
5. around her neck is a **rope of palm fibre**
His wife, **Umm Jamil**, used to spread thorns on the Prophet's path and carry tales against him.

### Lessons
- opposing the truth leads to ruin
- **wealth and family ties** cannot save a person from Allah's punishment — Abu Lahab was the Prophet's own uncle
- husband and wife should not help each other in evil
- **slander and tale-bearing** are serious sins
- Allah defends His Messenger`,
          examples: `**Example 1.** What does al-Ikhlas teach? *Answer:* The **Oneness of Allah** (Tawhid).

**Example 2.** Who was Abu Lahab? *Answer:* An **uncle of the Prophet** who opposed him.

**Example 3.** What is the wife of Abu Lahab called in the surah? *Answer:* The **carrier of firewood**.`,
        },
        questions: [
          ["E", "Suratul-Ikhlas teaches mainly about", "the Oneness of Allah", "fasting", "the Day of Judgement", "the story of Musa", "It says Allah is One."],
          ["E", "Abu Lahab was the Prophet's", "uncle", "brother", "grandfather", "cousin", "He opposed the message of Islam."],
          ["E", "Suratul-Ikhlas has how many verses?", "four", "three", "five", "six", "It is chapter 112."],
          ["M", "The word 'As-Samad' in Suratul-Ikhlas means", "the Eternal on whom all depend", "the Most Merciful", "the Creator of the heavens", "the Forgiver", "Everything needs Him; He needs nothing."],
          ["M", "The Prophet said Suratul-Ikhlas is equal to", "one-third of the Qur'an", "half of the Qur'an", "the whole Qur'an", "one-tenth of the Qur'an", "It sums up the teaching on Tawhid."],
          ["M", "Suratul-Masad is also known as Surah", "al-Lahab", "al-Kawthar", "an-Nasr", "al-Asr", "The name means the Flame."],
          ["M", "The wife of Abu Lahab is described as", "the carrier of firewood", "the mother of the believers", "the keeper of the Ka'bah", "the seller of cloth", "She harmed the Prophet and carried tales."],
          ["H", "Suratul-Masad was revealed after the Prophet called the Quraysh together at", "Mount Safa", "the cave of Hira", "Mount Uhud", "Arafat", "Abu Lahab cursed him there."],
          ["H", "The verse 'He does not beget, nor was He begotten' rejects the idea that Allah", "has a child or a parent", "created the world", "sends prophets", "forgives sins", "Nothing is comparable to Him."],
          ["H", "The fate of Abu Lahab shows that", "kinship with a prophet cannot save a disbeliever", "wealth guarantees success", "uncles must be obeyed in all things", "preaching should be secret", "His wealth did not benefit him."],
        ],
      },
      {
        week: 6,
        title: "Tawhid: the Oneness of Allah",
        subtopics: ["Meaning of Tawhid", "Kalimatush-Shahadah", "Attributes of Allah", "Shirk and its dangers"],
        objectives: ["Explain the meaning of Tawhid", "Recite and explain the Kalimatush-Shahadah", "Mention some attributes of Allah", "Explain shirk and why it must be avoided"],
        lesson: {
          title: "There Is No God but Allah",
          summary: "Explain the Oneness of Allah and the declaration of faith.",
          minutes: 40,
          notes: `## Meaning of Tawhid
**Tawhid** means believing that **Allah is One** — in His Lordship, in His right to be worshipped, and in His names and attributes. It is the foundation of Islam and the first message of every prophet.

## Kalimatush-Shahadah
*Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan Rasulullah.*
"**I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.**"
It has two parts:
1. **Oneness of Allah** — nothing deserves worship except Him
2. **Prophethood of Muhammad** — he is Allah's servant and final Messenger
A person enters Islam by saying it with **belief in the heart**. It is the first pillar of Islam, is said in the **adhan**, the **iqamah** and the **tashahhud** of every prayer.

## Proofs of Allah's existence and Oneness
- the **creation**: the sky, sun, moon, rain, plants and animals did not make themselves
- the **order** of the universe: day follows night without fail; if there were many gods there would be confusion
- our **own bodies**: sight, hearing, the heartbeat
- the **Qur'an** and the message of the prophets

## Some attributes of Allah (Sifat)
- **Al-Wujud** — He exists
- **Al-Qidam** — He has no beginning
- **Al-Baqa** — He has no end
- **Al-Wahdaniyyah** — He is One
- **Al-Qudrah** — He has power over all things
- **Al-Ilm** — He knows everything
- **As-Sam'** and **Al-Basar** — He hears and sees all
- **Al-Hayah** — He is Ever-Living
Allah has **ninety-nine beautiful names** (*al-Asma'ul-Husna*), such as **Ar-Rahman** (the Most Gracious), **Al-Khaliq** (the Creator), **Ar-Razzaq** (the Provider), **Al-Ghafur** (the Forgiving).

## Shirk
**Shirk** is associating partners with Allah. Examples: worshipping **idols**; praying to trees, rivers or the dead; believing that charms or soothsayers control one's fate; swearing by other than Allah. Shirk is the **greatest sin**; Allah does not forgive it if a person dies without repenting.

## Effects of Tawhid on a Muslim
he fears only Allah; he is humble and thankful; he is honest even when alone, knowing Allah sees him; he is brave and hopeful; he treats all people as servants of one Lord.`,
          examples: `**Example 1.** What is Tawhid? *Answer:* Belief in the **Oneness of Allah**.

**Example 2.** State the two parts of the Shahadah. *Answer:* **Oneness of Allah** and the **prophethood of Muhammad**.

**Example 3.** Give one example of shirk. *Answer:* **Worshipping idols**.`,
        },
        questions: [
          ["E", "Tawhid means belief in the", "Oneness of Allah", "angels", "revealed books", "Last Day only", "It is the foundation of Islam."],
          ["E", "Associating partners with Allah is called", "shirk", "sabr", "shukr", "sadaqah", "It is the greatest sin."],
          ["E", "The beautiful names of Allah are how many?", "ninety-nine", "twenty-five", "one hundred and fourteen", "seven", "They are called al-Asma'ul-Husna."],
          ["M", "The Kalimatush-Shahadah has how many parts?", "two", "three", "five", "four", "Oneness of Allah and prophethood of Muhammad."],
          ["M", "The name Ar-Razzaq means", "the Provider", "the Creator", "the Forgiving", "the All-Hearing", "Allah gives sustenance to all."],
          ["M", "The attribute Al-Ilm means that Allah", "knows everything", "sees everything", "has no beginning", "is One", "Nothing is hidden from Him."],
          ["M", "Which of these is an act of shirk?", "praying to an idol", "giving charity", "visiting the sick", "greeting a neighbour", "Worship belongs to Allah alone."],
          ["H", "The perfect order of the universe is used as proof that", "there is only one God", "the world has no creator", "idols have power", "the sun should be worshipped", "Many gods would cause confusion."],
          ["H", "A Muslim who believes Allah sees him at all times will most likely", "be honest even when alone", "fear other people", "stop working", "boast of his deeds", "Tawhid shapes character."],
          ["H", "The attribute Al-Qidam means that Allah", "has no beginning", "has no end", "has power over all things", "is Ever-Living", "He was not created."],
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
        title: "The articles of faith",
        subtopics: ["Meaning of Iman", "The six articles of faith", "Islam, Iman and Ihsan", "Effects of faith on behaviour"],
        objectives: ["Explain the meaning of Iman", "List the six articles of faith", "Distinguish between Islam, Iman and Ihsan", "State how faith affects behaviour"],
        lesson: {
          title: "What a Muslim Believes",
          summary: "Outline the six articles of faith.",
          minutes: 40,
          notes: `## Meaning of Iman
**Iman** means **faith** — believing in the heart, declaring with the tongue and acting with the limbs. One who has Iman is a **Mu'min** (believer).

## The six articles of faith (Arkanul-Iman)
1. belief in **Allah**
2. belief in His **angels** (Mala'ikah)
3. belief in His **books** (Kutub)
4. belief in His **messengers** (Rusul)
5. belief in the **Last Day** (Yawmul-Akhir)
6. belief in **divine decree** (Qadar), its good and its bad

### Brief explanation
- **Allah**: He is One, the Creator and Sustainer, with no partner
- **angels**: created from light; they obey Allah always
- **books**: the **Tawrah** given to Musa, the **Zabur** to Dawud, the **Injil** to Isa, and the **Qur'an** to Muhammad (peace be upon them); also the scrolls (Suhuf) of Ibrahim
- **messengers**: Allah sent prophets to every people; twenty-five are named in the Qur'an; the first was **Adam** and the last **Muhammad**
- **Last Day**: the world will end; the dead will be raised; deeds will be judged; then **Jannah** (Paradise) or **Jahannam** (Hell)
- **Qadar**: Allah knows and has decreed all things; yet people choose their actions and are responsible for them

## The Hadith of Jibril
The angel Jibril came in the form of a man and asked the Prophet about **Islam**, **Iman** and **Ihsan**:
- **Islam** — the five pillars (outward actions)
- **Iman** — the six articles (inward belief)
- **Ihsan** — to worship Allah **as though you see Him**; and though you do not see Him, **He sees you** (excellence)

## Effects of faith
- obedience to Allah and avoidance of sin
- honesty, because the angels record deeds
- patience in hardship and gratitude in ease (belief in Qadar)
- respect for all prophets and revealed books
- preparation for the Hereafter through good deeds
- peace of mind`,
          examples: `**Example 1.** How many articles of faith are there? *Answer:* **Six**.

**Example 2.** Which book was given to Prophet Dawud? *Answer:* The **Zabur**.

**Example 3.** What is Ihsan? *Answer:* To worship Allah **as though you see Him**.`,
        },
        questions: [
          ["E", "The articles of faith in Islam are", "six", "five", "seven", "four", "They begin with belief in Allah."],
          ["E", "The book revealed to Prophet Isa is the", "Injil", "Zabur", "Tawrah", "Suhuf", "It is one of the four known books."],
          ["E", "One who has Iman is called a", "Mu'min", "Kafir", "Mushrik", "Munafiq", "The word means believer."],
          ["M", "The Tawrah was revealed to Prophet", "Musa", "Dawud", "Ibrahim", "Nuh", "He was sent to the Children of Israel."],
          ["M", "The number of prophets mentioned by name in the Qur'an is", "twenty-five", "twelve", "ninety-nine", "forty", "The first was Adam."],
          ["M", "Belief in Qadar means belief in", "divine decree", "the angels", "the revealed books", "the resurrection", "Allah knows and has decreed all things."],
          ["M", "The angel who came to ask the Prophet about Islam, Iman and Ihsan was", "Jibril", "Mika'il", "Israfil", "Ridwan", "He appeared in the form of a man."],
          ["H", "Ihsan is best described as", "worshipping Allah as though you see Him", "paying Zakah yearly", "believing in the angels", "memorising the Qur'an", "Though you do not see Him, He sees you."],
          ["H", "Belief in Qadar should make a Muslim", "patient in hardship and thankful in ease", "lazy and careless", "proud of his success", "afraid to work", "People remain responsible for their choices."],
          ["H", "In the Hadith of Jibril, the five pillars are given as the explanation of", "Islam", "Iman", "Ihsan", "the Hour", "They are the outward actions."],
        ],
      },
      {
        week: 2,
        title: "Belief in angels",
        subtopics: ["Nature of angels", "Names and duties of angels", "The recording angels", "Lessons from belief in angels"],
        objectives: ["Describe the nature of angels", "Match well-known angels with their duties", "Explain the work of the recording angels", "State the lessons of believing in angels"],
        lesson: {
          title: "The Angels of Allah",
          summary: "Describe the angels and their duties.",
          minutes: 40,
          notes: `## Nature of angels
**Angels** (Mala'ikah; singular **Malak**) are creatures of Allah:
- created from **light** (nur)
- they **never disobey** Allah and do exactly what they are commanded
- they do not eat, drink, sleep or marry; they are neither male nor female
- they cannot normally be seen, but may appear in human form by Allah's permission
- their number is known only to Allah

## Well-known angels and their duties
| Angel | Duty |
|---|---|
| **Jibril** | brings revelation to the prophets |
| **Mika'il** | in charge of rain and provision |
| **Israfil** | will blow the **Trumpet** on the Last Day |
| **Izra'il** (Malakul-Mawt) | takes souls at death |
| **Munkar and Nakir** | question the dead in the grave |
| **Raqib and Atid** | record each person's deeds |
| **Malik** | keeper of Hell |
| **Ridwan** | keeper of Paradise |

Other angels guard people, carry the Throne, pray for believers and attend gatherings where Allah is remembered.

## The recording angels
Every person has two angels (**Kiraman Katibin** — "noble scribes"): one on the **right** records **good deeds**, and one on the **left** records **bad deeds**. Nothing is missed. On the Day of Judgement each person will be given his **book of deeds** — the fortunate in the **right hand**.

## Questions in the grave
Munkar and Nakir ask: **Who is your Lord? What is your religion? Who is your Prophet?** The believer answers: **Allah; Islam; Muhammad**.

## Differences between angels, jinn and human beings
- angels: from light; always obey
- jinn: from **smokeless fire**; some obey, some disobey (Iblis was of the jinn)
- humans: from **clay**; have free choice

## Lessons
- be careful of words and actions — they are being recorded
- do good even in secret
- do not fear people more than Allah
- be clean and avoid foul speech; angels love purity
- feel comfort: angels protect and pray for believers`,
          examples: `**Example 1.** From what are angels created? *Answer:* **Light**.

**Example 2.** Which angel will blow the Trumpet? *Answer:* **Israfil**.

**Example 3.** What do Raqib and Atid do? *Answer:* They **record deeds**.`,
        },
        questions: [
          ["E", "Angels were created from", "light", "fire", "clay", "water", "They always obey Allah."],
          ["E", "The angel in charge of rain and provision is", "Mika'il", "Jibril", "Israfil", "Malik", "He distributes what Allah decrees."],
          ["E", "The keeper of Paradise is", "Ridwan", "Malik", "Nakir", "Atid", "Malik keeps Hell."],
          ["M", "The angels who question the dead in the grave are", "Munkar and Nakir", "Raqib and Atid", "Harut and Marut", "Jibril and Mika'il", "They ask about one's Lord, religion and Prophet."],
          ["M", "The angel who will blow the Trumpet on the Last Day is", "Israfil", "Izra'il", "Ridwan", "Jibril", "The blast will end the world."],
          ["M", "The angel on a person's right side records", "good deeds", "bad deeds", "dreams", "the time of death", "The one on the left records bad deeds."],
          ["M", "Jinn were created from", "smokeless fire", "light", "clay", "wind", "Iblis was one of them."],
          ["H", "The title Kiraman Katibin refers to the", "angels who write down deeds", "carriers of the Throne", "keepers of Hell", "angels of the grave", "It means noble scribes."],
          ["H", "A main difference between angels and human beings is that angels", "never disobey Allah", "are created from clay", "eat and sleep", "will be judged for sins", "They have no desire to sin."],
          ["H", "Belief in the recording angels should lead a Muslim to", "watch his words and actions at all times", "stop speaking altogether", "fear other people", "hide from Allah", "Every deed is written down."],
        ],
      },
      {
        week: 3,
        title: "Taharah: purification",
        subtopics: ["Meaning and importance of Taharah", "Kinds of water", "Najasah and its removal", "Istinja and personal hygiene"],
        objectives: ["Explain the meaning and importance of Taharah", "Classify water used for purification", "Identify impurities and how to remove them", "Describe istinja and good hygiene"],
        lesson: {
          title: "Cleanliness Is Half of Faith",
          summary: "Explain purification, the kinds of water and removal of impurity.",
          minutes: 40,
          notes: `## Meaning
**Taharah** means **purification** — cleanliness of body, clothes and place, and removal of ritual impurity, so that worship is valid. The Prophet said that **purity is half of faith**, and the Qur'an says Allah **loves those who purify themselves**.

## Two kinds of impurity
- **Najasah (khabath)** — physical filth, such as urine, stool, blood, vomit, pus, wine, the flesh of swine and dead animals not properly slaughtered
- **Hadath** — a ritual state that prevents prayer:
  - **minor hadath** — removed by **wudu** (e.g. after using the toilet, passing wind, deep sleep)
  - **major hadath** — removed by **ghusl** (e.g. janabah, the end of menstruation)

## Kinds of water
1. **Pure and purifying water** (*ma'un mutlaq* / *tahur*) — natural water whose **colour, taste and smell** are unchanged: rain, well, river, sea, spring, melted snow. It may be used for wudu and ghusl.
2. **Pure but not purifying** — clean water changed by a clean substance, such as water mixed with soap, milk, sugar or tea. It may be drunk or used for washing things but **not** for wudu or ghusl.
3. **Impure water** (*mutanajjis*) — water changed by an impurity. It must not be used for worship or for ordinary use.

## Removing najasah
Wash the affected part of the body, cloth or place with pure water until the **colour, smell and substance** are gone. The body, clothes and place of prayer must all be clean.

## Istinja
**Istinja** is cleaning the private parts with water after urinating or passing stool. **Istijmar** is cleaning with stones, paper or similar dry material when water is not available.
### Manners of using the toilet
- enter with the **left foot**, saying the supplication for protection; leave with the **right foot**, saying "Ghufranak"
- do not face or turn the back to the **Qiblah** in the open
- use the **left hand** for cleaning
- do not talk, and keep out of sight
- do not relieve yourself on paths, in shade used by people or in still water
- wash the hands afterwards

## Personal hygiene (Sunan al-Fitrah)
trimming the nails, brushing the teeth (**siwak**), bathing regularly, removing hair from armpits and private parts, keeping clothes and surroundings clean.

## Importance
a condition for salah; protects health; earns Allah's love; shows respect for others.`,
          examples: `**Example 1.** What is Taharah? *Answer:* **Purification** of body, clothes and place for worship.

**Example 2.** Can soapy water be used for wudu? *Answer:* **No** — it is pure but not purifying.

**Example 3.** Which foot enters the toilet first? *Answer:* The **left foot**.`,
        },
        questions: [
          ["E", "Taharah means", "purification", "prayer", "charity", "pilgrimage", "It is a condition for salah."],
          ["E", "Which of these is pure and purifying water?", "rain water", "soapy water", "tea", "water mixed with urine", "Its colour, taste and smell are unchanged."],
          ["E", "Cleaning the private parts with water after using the toilet is called", "istinja", "tayammum", "ghusl", "wudu", "The left hand is used."],
          ["M", "Minor hadath is removed by", "wudu", "ghusl", "sadaqah", "istinja alone", "Examples include passing wind."],
          ["M", "Water mixed with milk is classified as", "pure but not purifying", "pure and purifying", "impure", "blessed", "It cannot be used for ablution."],
          ["M", "Which of the following is najasah?", "urine", "sweat", "tears", "saliva", "It must be washed off before prayer."],
          ["M", "The chewing stick used for cleaning the teeth is called", "siwak", "sutrah", "subhah", "sajjadah", "It is a practice of the Prophet."],
          ["H", "The three qualities checked to decide whether water is still pure are its", "colour, taste and smell", "depth, width and source", "weight, heat and sound", "age, owner and place", "A change by impurity makes it unusable."],
          ["H", "Cleaning oneself with stones or paper when there is no water is called", "istijmar", "istinshaq", "istisqa", "istighfar", "It is allowed in place of istinja."],
          ["H", "A person leaving the toilet should step out with the", "right foot", "left foot", "either foot while talking", "both feet together", "He enters with the left."],
        ],
      },
      {
        week: 4,
        title: "Wudu: ablution",
        subtopics: ["Meaning and importance", "How to perform wudu", "Obligatory and recommended acts", "Things that nullify wudu"],
        objectives: ["Explain the meaning and importance of wudu", "Demonstrate the steps of wudu in order", "Distinguish the obligatory from the recommended acts", "List the things that nullify wudu"],
        lesson: {
          title: "Preparing for Prayer",
          summary: "Describe how to perform ablution and what spoils it.",
          minutes: 40,
          notes: `## Meaning and importance
**Wudu** (ablution) is washing certain parts of the body with pure water, with the intention of worship. It is required for **salah**, for **tawaf** round the Ka'bah and for **touching the Qur'an**. The Prophet said that Allah does not accept prayer without purification, and that sins fall away with the water of wudu.

## How to perform wudu
1. make the **intention** (niyyah) in the heart
2. say "**Bismillah**"
3. wash the **hands** to the wrists three times
4. **rinse the mouth** three times
5. **sniff water into the nose** and blow it out three times
6. wash the **face** three times — from hairline to chin and ear to ear
7. wash the **arms** up to and including the **elbows** three times, right first
8. **wipe the head** with wet hands, from front to back and back again
9. wipe the **ears**, inside and out
10. wash the **feet** up to and including the **ankles**, right first
11. say the **Shahadah** and a supplication

## Obligatory acts (Fara'id)
The Qur'an (Suratul-Ma'idah 5:6) commands four: washing the **face**, washing the **arms to the elbows**, **wiping the head**, and washing the **feet to the ankles**. To these the scholars add the **intention**; many also list **rubbing the limbs** (dalk), doing the acts **without long breaks** (muwalat) and keeping the proper **order**. Follow the detail your teacher gives for your school of law.

## Recommended acts (Sunan)
saying Bismillah; washing the hands first; rinsing the mouth and nose; wiping the ears; beginning with the right; washing three times; using the siwak; not wasting water.

## Things that nullify wudu
- anything that comes out of the private parts: **urine, stool, wind**
- **deep sleep**
- **loss of consciousness** (fainting, intoxication, madness)
- touching the private part directly with the hand (according to many scholars)
- things that require ghusl

## Things that do not nullify it
eating ordinary food, laughing outside prayer, a short doze while sitting firmly, changing clothes.

## Mistakes to avoid
leaving a dry spot on the elbows or heels; wasting water; washing more than three times; nail polish or paint that stops water reaching the skin.`,
          examples: `**Example 1.** Up to where are the arms washed? *Answer:* Up to and including the **elbows**.

**Example 2.** Name the four acts of wudu commanded in the Qur'an. *Answer:* Washing the **face**, washing the **arms**, **wiping the head**, washing the **feet**.

**Example 3.** Does passing wind spoil wudu? *Answer:* **Yes**.`,
        },
        questions: [
          ["E", "Wudu is required before", "salah", "eating", "sleeping", "greeting", "Prayer is not valid without purification."],
          ["E", "In wudu, the feet are washed up to the", "ankles", "knees", "toes only", "thighs", "The right foot is washed first."],
          ["E", "Which of these nullifies wudu?", "passing wind", "drinking water", "changing clothes", "combing the hair", "Anything from the private parts breaks it."],
          ["M", "In wudu, the head is", "wiped with wet hands", "washed three times", "left dry", "covered with a cloth", "The hands move from front to back."],
          ["M", "The verse that commands the acts of wudu is found in Surah", "al-Ma'idah", "al-Fatihah", "al-Ikhlas", "an-Nas", "It is chapter 5, verse 6."],
          ["M", "Rinsing the mouth in wudu is classified as", "a recommended act", "an obligatory act", "a forbidden act", "a nullifier", "It follows the Prophet's practice."],
          ["M", "The arms are washed up to and including the", "elbows", "wrists", "shoulders", "fingers", "The right arm comes first."],
          ["H", "Performing the acts of wudu one after another without long breaks is called", "muwalat", "dalk", "niyyah", "tartil", "Many scholars count it among the obligations."],
          ["H", "Nail polish must be removed before wudu because it", "prevents water from reaching the skin", "has a bad smell", "is expensive", "nullifies the fast", "A dry spot makes the washing incomplete."],
          ["H", "A person who made wudu and then fell into a deep sleep must", "repeat the wudu before praying", "pray at once", "perform ghusl", "only wash the face", "Deep sleep nullifies ablution."],
        ],
      },
      {
        week: 5,
        title: "Tayammum and Ghusl",
        subtopics: ["Meaning of and reasons for tayammum", "How to perform tayammum", "Occasions for ghusl", "How to perform ghusl"],
        objectives: ["State when tayammum is allowed", "Demonstrate how tayammum is performed", "List the occasions that require ghusl", "Describe how ghusl is performed"],
        lesson: {
          title: "Dry Ablution and the Ritual Bath",
          summary: "Explain tayammum and ghusl.",
          minutes: 40,
          notes: `## Tayammum
**Tayammum** is **dry ablution** — using clean earth in place of water for wudu or ghusl. It shows that Islam is a religion of **ease**.

### When it is allowed
- there is **no water**, or not enough after keeping some for drinking
- using water would cause or worsen **illness**
- water is near but reaching it is **dangerous** (enemy, wild animal)
- the water is so **cold** that it would harm and cannot be warmed
- the time of prayer would pass before water is found

### How to perform it
1. make the **intention**
2. say Bismillah
3. strike **clean earth** (soil, sand, stone, dust) lightly with both palms
4. blow or shake off the excess
5. **wipe the face**
6. **wipe the hands** — right, then left (to the wrists; many also wipe to the elbows after a second strike)

### What nullifies tayammum
everything that nullifies wudu; **finding water** or being able to use it. Many scholars say a fresh tayammum is made for each obligatory prayer.

## Ghusl
**Ghusl** is the **ritual bath** — washing the whole body with pure water with the intention of purification.

### When it is obligatory
- after **janabah** (sexual discharge or intercourse)
- at the end of **menstruation** (hayd)
- at the end of **post-natal bleeding** (nifas)
- for a **dead Muslim**, who is washed before burial

### When it is recommended
before the **Friday** prayer; before the two **Id** prayers; before entering **ihram** for Hajj or Umrah; on embracing Islam.

### How to perform it
1. intention; say Bismillah
2. wash the hands, then the private parts
3. perform **wudu**
4. pour water over the **head** three times, rubbing to the roots of the hair
5. wash the **right side** of the body, then the **left**
6. make sure water reaches **every part** — armpits, navel, between toes

### Obligatory acts
the **intention** and **water reaching the whole body** (many scholars add rubbing and continuity).

## What a person in major impurity must not do
pray; perform tawaf; touch or recite the Qur'an; stay in the mosque.`,
          examples: `**Example 1.** What is used for tayammum? *Answer:* **Clean earth**.

**Example 2.** Which parts are wiped in tayammum? *Answer:* The **face and hands**.

**Example 3.** Give one occasion when ghusl is recommended. *Answer:* Before the **Friday prayer**.`,
        },
        questions: [
          ["E", "Tayammum is performed with", "clean earth", "soap", "oil", "leaves", "It replaces water when water cannot be used."],
          ["E", "Ghusl means", "the ritual bath", "dry ablution", "the call to prayer", "wiping the socks", "The whole body is washed."],
          ["E", "In tayammum the parts wiped are the face and the", "hands", "feet", "head", "ears", "Only two parts are wiped."],
          ["M", "Tayammum is allowed when", "water is not available", "a person is in a hurry", "the water is clean", "it is night", "It is a concession for hardship."],
          ["M", "Tayammum becomes invalid when", "water is found and can be used", "the sun rises", "a person eats", "one changes clothes", "The reason for it no longer exists."],
          ["M", "Ghusl is recommended before the", "Friday prayer", "afternoon nap", "evening meal", "daily lessons", "It is also recommended before the Id prayers."],
          ["M", "Which of these makes ghusl obligatory?", "the end of menstruation", "passing wind", "light sleep", "touching a cloth", "It is a major hadath."],
          ["H", "The two essential acts of ghusl are the intention and", "water reaching the whole body", "washing three times", "using warm water", "facing the Qiblah", "No part may be left dry."],
          ["H", "Tayammum best illustrates the principle that Islam", "makes worship easy in hardship", "forbids the use of water", "requires prayer only when convenient", "values earth above water", "Allah does not intend difficulty."],
          ["H", "A person in a state of major impurity is not allowed to", "perform salah", "eat food", "speak to people", "sleep", "He must first perform ghusl."],
        ],
      },
      {
        week: 6,
        title: "Adhan and Iqamah",
        subtopics: ["Meaning and origin of the adhan", "Words of the adhan", "The iqamah", "Manners of the mu'adhdhin and the listener"],
        objectives: ["Explain the meaning and origin of the adhan", "Recite the words of the adhan in order", "Distinguish between adhan and iqamah", "State the manners of calling and responding"],
        lesson: {
          title: "The Call to Prayer",
          summary: "Explain the adhan and the iqamah.",
          minutes: 40,
          notes: `## Meaning
The **adhan** is the call announcing that the time of prayer has come. The person who calls it is the **mu'adhdhin**. The **iqamah** is the second call, made just before the prayer begins.

## Origin
In **Madinah** the Muslims wondered how to call people to prayer; a bell, a horn and a fire were suggested. A companion, **Abdullah ibn Zayd**, saw the words of the adhan in a **dream**; **Umar ibn al-Khattab** had a similar dream. The Prophet approved and told **Bilal ibn Rabah**, who had a strong and beautiful voice, to call it. Bilal became the **first mu'adhdhin**.

## Words of the adhan
1. *Allahu Akbar* (Allah is the Greatest) — four times
2. *Ash-hadu an la ilaha illallah* (I bear witness that there is no god but Allah) — twice
3. *Ash-hadu anna Muhammadan Rasulullah* (I bear witness that Muhammad is the Messenger of Allah) — twice
4. *Hayya alas-salah* (Come to prayer) — twice
5. *Hayya alal-falah* (Come to success) — twice
6. *Allahu Akbar* — twice
7. *La ilaha illallah* — once
In the adhan of **Subh** (dawn), after "Hayya alal-falah" is added *As-salatu khayrun minan-nawm* (**Prayer is better than sleep**) — twice.
(Some schools say the opening Allahu Akbar twice; follow your teacher.)

## The iqamah
It uses the same phrases, said quickly and usually fewer times, with the addition of *Qad qamatis-salah* (**Prayer is about to begin**).

## Differences
| Adhan | Iqamah |
|---|---|
| announces the time | announces the start |
| said slowly and loudly | said quickly |
| from a high place or loudspeaker | inside, near the rows |
| no "Qad qamatis-salah" | has "Qad qamatis-salah" |

## Manners of the mu'adhdhin
be a Muslim, male, sane; be clean (with wudu); **face the Qiblah**; stand; have a good voice; know the prayer times; turn the face right at "Hayya alas-salah" and left at "Hayya alal-falah".

## Manners of the listener
- repeat each phrase quietly; at "Hayya alas-salah" and "Hayya alal-falah" say *La hawla wa la quwwata illa billah*
- afterwards send blessings on the Prophet and say the supplication after the adhan
- stop idle talk and prepare for prayer
- supplication between adhan and iqamah is not rejected

## Importance
it declares Tawhid publicly; unites the community; reminds people of Allah five times daily.`,
          examples: `**Example 1.** Who was the first mu'adhdhin? *Answer:* **Bilal ibn Rabah**.

**Example 2.** What extra phrase is in the Subh adhan? *Answer:* "**Prayer is better than sleep.**"

**Example 3.** What phrase is found only in the iqamah? *Answer:* "**Qad qamatis-salah.**"`,
        },
        questions: [
          ["E", "The person who calls the adhan is the", "mu'adhdhin", "imam", "khatib", "qari", "He announces the time of prayer."],
          ["E", "The first mu'adhdhin in Islam was", "Bilal ibn Rabah", "Abu Bakr", "Ali ibn Abi Talib", "Zayd ibn Harithah", "He had a strong, beautiful voice."],
          ["E", "'Hayya alas-salah' means", "Come to prayer", "Come to success", "Allah is the Greatest", "Prayer is better than sleep", "It is said twice in the adhan."],
          ["M", "The phrase 'As-salatu khayrun minan-nawm' is added to the adhan of", "Subh", "Zuhr", "Asr", "Maghrib", "It means prayer is better than sleep."],
          ["M", "The companion who saw the words of the adhan in a dream was", "Abdullah ibn Zayd", "Abdullah ibn Mas'ud", "Anas ibn Malik", "Abu Hurayrah", "The Prophet approved the dream."],
          ["M", "The phrase found in the iqamah but not in the adhan is", "Qad qamatis-salah", "Hayya alal-falah", "Allahu Akbar", "La ilaha illallah", "It announces that prayer is starting."],
          ["M", "The adhan was introduced in", "Madinah", "Makkah", "Ta'if", "Abyssinia", "It was after the Hijrah."],
          ["H", "When the mu'adhdhin says 'Hayya alal-falah', the listener should say", "La hawla wa la quwwata illa billah", "Amin", "Subhanallah", "Allahu Akbar", "It means there is no power except with Allah."],
          ["H", "One difference between the adhan and the iqamah is that the iqamah is", "said quickly just before the prayer starts", "called from a high place", "said only at dawn", "repeated by the imam alone", "The adhan announces the time."],
          ["H", "While calling the adhan, the mu'adhdhin should face the", "Qiblah", "congregation", "east", "minbar", "He stands facing Makkah."],
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
        title: "Salah: importance, times and units",
        subtopics: ["Meaning and importance of salah", "The five daily prayers and their times", "Number of rak'ahs", "Conditions for salah"],
        objectives: ["Explain the meaning and importance of salah", "Name the five daily prayers and their times", "State the number of rak'ahs in each prayer", "List the conditions that must be met before salah"],
        lesson: {
          title: "The Pillar of the Religion",
          summary: "Explain the importance, times and units of the five daily prayers.",
          minutes: 40,
          notes: `## Meaning
**Salah** is the worship of Allah through set words and actions, beginning with **takbir** and ending with **taslim**. It is the **second pillar** of Islam and was made obligatory during the Prophet's night journey, **al-Isra' wal-Mi'raj**.

## Importance
- it is the **first deed to be judged** on the Day of Resurrection
- it is the difference between a believer and a disbeliever
- it **restrains from shameful and evil deeds** (Qur'an 29:45)
- it keeps a person in constant remembrance of Allah
- it teaches **cleanliness, punctuality, discipline, equality and unity**
- the Prophet compared the five prayers to a river at one's door in which one bathes five times a day — no dirt remains

## The five daily prayers
| Prayer | Time | Rak'ahs | Recitation |
|---|---|---|---|
| **Subh (Fajr)** | from dawn until just before sunrise | **2** | aloud |
| **Zuhr** | after the sun passes its highest point until Asr | **4** | silent |
| **Asr** | mid-afternoon until just before sunset | **4** | silent |
| **Maghrib** | just after sunset | **3** | first two aloud |
| **Isha** | from the disappearance of twilight into the night | **4** | first two aloud |

Total obligatory rak'ahs each day: **17**.

## Who must pray?
every Muslim who is **sane** and has reached **puberty**. Children are taught to pray at **seven** and corrected at **ten**.

## Conditions before salah (Shurut)
1. **Taharah** — being free from minor and major impurity (wudu or ghusl)
2. **cleanliness** of body, clothes and place
3. **covering the awrah** — for a male, from the navel to the knees; for a female, the whole body except the face and hands
4. **facing the Qiblah** — the direction of the **Ka'bah** in Makkah
5. the **time** of the prayer having entered
6. the **intention**

## Other prayers
- **Jumu'ah** — the Friday congregational prayer (two rak'ahs after the sermon) in place of Zuhr
- **Sunnah / Nafl** — voluntary prayers such as **Witr**, **Shaf'**, the two rak'ahs before Subh, **Tarawih** in Ramadan, the two **Id** prayers
- **Janazah** — the funeral prayer

## Congregational prayer
Prayer in congregation (**jama'ah**) is **twenty-seven times** better than praying alone.`,
          examples: `**Example 1.** How many rak'ahs is Maghrib? *Answer:* **Three**.

**Example 2.** When was salah made obligatory? *Answer:* During **al-Isra' wal-Mi'raj**.

**Example 3.** What is the Qiblah? *Answer:* The direction of the **Ka'bah** in Makkah.`,
        },
        questions: [
          ["E", "Salah is which pillar of Islam?", "the second", "the first", "the third", "the fifth", "It follows the Shahadah."],
          ["E", "The Maghrib prayer has", "three rak'ahs", "two rak'ahs", "four rak'ahs", "one rak'ah", "It is prayed just after sunset."],
          ["E", "Muslims face which direction in prayer?", "the Qiblah", "the east always", "the mosque door", "the imam's house", "It is the direction of the Ka'bah."],
          ["M", "The total number of obligatory rak'ahs in a day is", "seventeen", "fifteen", "twenty", "twelve", "Two, four, four, three and four."],
          ["M", "The prayer performed between dawn and sunrise is", "Subh", "Zuhr", "Asr", "Isha", "It has two rak'ahs."],
          ["M", "The five daily prayers were made obligatory during", "al-Isra' wal-Mi'raj", "the Hijrah", "the Battle of Badr", "the Farewell Pilgrimage", "It was the Prophet's night journey."],
          ["M", "Prayer in congregation is better than praying alone by", "twenty-seven degrees", "ten degrees", "seven degrees", "two degrees", "This encourages unity."],
          ["H", "According to the Qur'an, salah restrains a person from", "shameful and evil deeds", "eating and drinking", "earning a living", "travelling", "It keeps Allah in mind."],
          ["H", "Children should be taught to pray from the age of", "seven", "three", "twelve", "fifteen", "They are corrected at ten."],
          ["H", "On Fridays, the Jumu'ah prayer takes the place of", "Zuhr", "Asr", "Subh", "Maghrib", "It has two rak'ahs after the sermon."],
        ],
      },
      {
        week: 2,
        title: "How to perform salah",
        subtopics: ["The steps of a rak'ah", "The tashahhud and taslim", "Obligatory acts of salah", "Things that spoil salah"],
        objectives: ["Describe the steps of one rak'ah in order", "Explain the sitting for tashahhud and the taslim", "Identify the obligatory acts of salah", "List the things that spoil salah"],
        lesson: {
          title: "Standing before Allah",
          summary: "Describe the performance of salah and what invalidates it.",
          minutes: 40,
          notes: `## The steps of a rak'ah
1. **stand** facing the Qiblah with the **intention**
2. **Takbiratul-Ihram** — raise the hands and say "**Allahu Akbar**"; the prayer has begun
3. **Qiyam** — recite **Suratul-Fatihah**, then (in the first two rak'ahs) another surah or some verses
4. **Ruku'** — bow with hands on the knees, back level; say "*Subhana Rabbiyal-Azim*" (Glory be to my Lord, the Great)
5. **rise from ruku'** saying "*Sami'allahu liman hamidah*" (Allah hears the one who praises Him), then "*Rabbana wa lakal-hamd*"
6. **Sujud** — prostrate with forehead and nose, both palms, both knees and the toes on the ground; say "*Subhana Rabbiyal-A'la*" (Glory be to my Lord, the Most High)
7. **sit** briefly between the two prostrations
8. a **second sujud**
This completes **one rak'ah**. Stand for the next.

## Tashahhud and taslim
- after the **second rak'ah**, sit and recite the **Tashahhud** (*At-tahiyyatu lillah …*)
- in a three- or four-rak'ah prayer, stand to complete the rest, reciting only al-Fatihah
- in the **final sitting**, recite the Tashahhud and **Salatul-Ibrahimiyyah** (blessings on the Prophet)
- end with the **Taslim**: turn the face to the right saying "*As-salamu alaykum*" (many also turn to the left)

## Obligatory acts (Arkan / Fara'id)
intention; Takbiratul-Ihram; **standing** (for those able); reciting **al-Fatihah**; **ruku'**; rising from it; **sujud**; sitting between the two prostrations; **calmness** in each posture (tuma'ninah); the final sitting; the **taslim**; keeping the **order**.
If one of these is left out, the rak'ah or the prayer is not valid.

## Sunnah acts
the surah after al-Fatihah; reciting aloud or silently as appropriate; the tasbih in ruku' and sujud; the first tashahhud; saying takbir when changing posture.

## Things that spoil salah
- **talking** deliberately
- **laughing** aloud
- **eating or drinking**
- much unnecessary **movement**
- turning the body away from the **Qiblah**
- anything that **nullifies wudu**
- leaving out an obligatory act deliberately
- uncovering the awrah

## Sujudus-Sahw
The **prostration of forgetfulness** — two extra prostrations made near the end of the prayer to make up for a mistake such as forgetting the first tashahhud or adding something by error.

## Khushu'
pray with **humility and attention**: look at the place of sujud, understand what is recited, do not rush.`,
          examples: `**Example 1.** What is said to begin the prayer? *Answer:* "**Allahu Akbar**" — the Takbiratul-Ihram.

**Example 2.** What is recited in sujud? *Answer:* "**Subhana Rabbiyal-A'la.**"

**Example 3.** How does the prayer end? *Answer:* With the **Taslim** — "As-salamu alaykum".`,
        },
        questions: [
          ["E", "Salah begins with", "Takbiratul-Ihram", "the taslim", "the tashahhud", "sujud", "It is the opening Allahu Akbar."],
          ["E", "The bowing position in salah is called", "ruku'", "sujud", "qiyam", "julus", "The hands rest on the knees."],
          ["E", "Salah ends with the", "taslim", "takbir", "adhan", "ruku'", "The worshipper says As-salamu alaykum."],
          ["M", "'Subhana Rabbiyal-A'la' is said during", "sujud", "ruku'", "qiyam", "the tashahhud", "It means Glory be to my Lord, the Most High."],
          ["M", "The surah that must be recited in every rak'ah is", "al-Fatihah", "al-Ikhlas", "an-Nas", "al-Kawthar", "There is no prayer without it."],
          ["M", "The Tashahhud is first recited after the", "second rak'ah", "first rak'ah", "takbir", "ruku' of the first rak'ah", "The worshipper sits to recite it."],
          ["M", "Which of these spoils salah?", "laughing aloud", "looking at the place of sujud", "reciting slowly", "standing still", "Deliberate talking also spoils it."],
          ["H", "The two extra prostrations made to correct a mistake in prayer are called", "Sujudus-Sahw", "Sujudut-Tilawah", "Sujudush-Shukr", "Salatul-Witr", "It is the prostration of forgetfulness."],
          ["H", "Being calm and still in each posture of the prayer is known as", "tuma'ninah", "tartil", "takbir", "tasbih", "Rushing through the postures is a fault."],
          ["H", "A worshipper who passes wind during the prayer must", "leave, renew wudu and pray again", "continue to the end", "only say the taslim", "perform Sujudus-Sahw", "Loss of wudu invalidates the prayer."],
        ],
      },
      {
        week: 3,
        title: "Arabia before Islam",
        subtopics: ["The land and people of Arabia", "Religious life in the Jahiliyyah", "Social and moral life", "Good qualities of the Arabs"],
        objectives: ["Describe the land and people of Arabia", "Describe the religious practices of the Jahiliyyah", "Describe the social evils of the period", "Mention the good qualities of the pre-Islamic Arabs"],
        lesson: {
          title: "The Age of Ignorance",
          summary: "Describe life in Arabia before the coming of Islam.",
          minutes: 40,
          notes: `## The land and its people
**Arabia** is a large peninsula, mostly **desert**, with few rivers. Its people were:
- **Bedouins** — nomads who moved with their camels, sheep and goats in search of water and pasture
- **town dwellers** — in cities such as **Makkah** (a trade and religious centre), **Yathrib** (later Madinah; farming) and **Ta'if**
They were organised in **tribes** and clans. The leading tribe of Makkah was the **Quraysh**, guardians of the **Ka'bah**. There was no central government.

## Jahiliyyah
The period before Islam is called the **Jahiliyyah** — the **Age of Ignorance** — not because people lacked skill, but because they were ignorant of true guidance.

## Religious life
- most people were **idol-worshippers**; about **360 idols** stood around the Ka'bah
- well-known idols: **Hubal**, **al-Lat**, **al-Uzza** and **Manat**
- they knew of Allah but set up idols as **intermediaries**
- they believed in omens, soothsayers and charms; many **denied life after death**
- there were some **Jews** and **Christians**, and a few **Hunafa** (singular **Hanif**) who followed the pure faith of Ibrahim and rejected idols

## Social and moral life
- constant **tribal wars** and blood feuds lasting many years
- **burying baby girls alive** for fear of poverty or shame
- women had few rights and could be inherited like property
- **drinking of wine**, **gambling** and **usury** (riba)
- **slavery** and ill-treatment of slaves
- robbery of caravans; the strong oppressed the weak
- blind loyalty to the tribe (**asabiyyah**), right or wrong

## Economic life
trade caravans to **Syria** in summer and **Yemen** in winter; herding; annual fairs such as **Ukaz**.

## Good qualities
- **hospitality** and generosity to guests
- **bravery**
- **keeping promises** and loyalty
- love of **poetry** and excellent memory
- love of freedom

## Why this matters
Islam came to remove these evils: it taught Tawhid, ended infanticide, gave women rights, forbade wine and gambling, and replaced tribalism with **brotherhood**.`,
          examples: `**Example 1.** What does Jahiliyyah mean? *Answer:* The **Age of Ignorance**.

**Example 2.** Which tribe guarded the Ka'bah? *Answer:* The **Quraysh**.

**Example 3.** Give one good quality of the pre-Islamic Arabs. *Answer:* **Hospitality** (also bravery, keeping promises).`,
        },
        questions: [
          ["E", "The period before Islam in Arabia is called", "Jahiliyyah", "Hijrah", "Khilafah", "Sirah", "It means the Age of Ignorance."],
          ["E", "The leading tribe of Makkah was the", "Quraysh", "Aws", "Khazraj", "Thaqif", "They were guardians of the Ka'bah."],
          ["E", "Most Arabs before Islam worshipped", "idols", "fire", "the sun only", "one God alone", "Many idols stood round the Ka'bah."],
          ["M", "The number of idols placed around the Ka'bah was about", "360", "99", "25", "114", "Hubal was among the best known."],
          ["M", "Arabs who moved from place to place with their animals were called", "Bedouins", "Hunafa", "Ansar", "Muhajirun", "They searched for water and pasture."],
          ["M", "One cruel practice of the Jahiliyyah was", "burying baby girls alive", "feeding guests", "composing poetry", "trading with Syria", "It was done out of fear of poverty or shame."],
          ["M", "Which of these was an idol of the pagan Arabs?", "al-Uzza", "Zamzam", "Safa", "Ukaz", "Others were al-Lat and Manat."],
          ["H", "The few Arabs who rejected idols and followed the faith of Ibrahim were known as", "Hunafa", "Bedouins", "Quraysh", "Sabians", "The singular is Hanif."],
          ["H", "Asabiyyah, which Islam replaced with brotherhood, means", "blind loyalty to one's tribe", "generosity to guests", "love of poetry", "trade by caravan", "The tribe was supported right or wrong."],
          ["H", "The period is called the Age of Ignorance mainly because the people", "lacked true religious guidance", "could not trade", "had no language", "did not build houses", "They were skilled in poetry and trade."],
        ],
      },
      {
        week: 4,
        title: "The birth and early life of Prophet Muhammad",
        subtopics: ["Birth and family", "Childhood and guardians", "Youth and character", "Marriage to Khadijah"],
        objectives: ["Narrate the birth and family background of the Prophet", "Name those who cared for him in childhood", "Describe his character as a youth", "Narrate his marriage to Khadijah"],
        lesson: {
          title: "Al-Amin: the Trustworthy",
          summary: "Narrate the early life of Prophet Muhammad up to his marriage.",
          minutes: 40,
          notes: `## Birth
Prophet **Muhammad** (peace be upon him) was born in **Makkah** on a **Monday** in the month of **Rabi'ul-Awwal**, in the **Year of the Elephant** (about **570 CE**) — the year **Abrahah**, ruler of Yemen, came with an army and elephants to destroy the Ka'bah and was defeated by Allah (see Suratul-Fil).

## Family
- father: **Abdullah**, son of Abdul-Muttalib — he **died before** the Prophet was born
- mother: **Aminah**, daughter of Wahb
- grandfather: **Abdul-Muttalib**, chief of Makkah, who named him **Muhammad** ("the praised one")
- clan: **Banu Hashim**; tribe: **Quraysh**

## Childhood
- he was nursed first by his mother, briefly by **Thuwaybah**, and then, by Arab custom, by a desert foster-mother, **Halimah as-Sa'diyyah** of Banu Sa'd, with whom he spent his early years
- when he was **six**, his mother **Aminah** died at **Abwa** on the way back from Yathrib; the servant **Umm Ayman** brought him home
- his grandfather **Abdul-Muttalib** cared for him until he died when the boy was **eight**
- his uncle **Abu Talib** then became his guardian and loved him dearly
So he was an **orphan** from an early age.

## Youth
- he worked as a **shepherd**
- at about **twelve** he travelled with Abu Talib on a trade journey to **Syria**; at Busra a monk named **Bahira** is said to have recognised signs of prophethood in him
- he took part in **Hilful-Fudul**, a pact to defend the oppressed
- he never worshipped idols, drank wine or joined in the evils of his people
- he was known as **As-Sadiq** (the Truthful) and **Al-Amin** (the Trustworthy)

## Marriage to Khadijah
**Khadijah bint Khuwaylid**, a noble and wealthy widow, employed him to lead her trade caravan to Syria. Her servant **Maysarah** reported his honesty and the great profit. She proposed marriage; he was **twenty-five** and she was about **forty**. They had children including **Fatimah**, Zaynab, Ruqayyah, Umm Kulthum, and sons (Qasim, Abdullah) who died young. He married no other woman while she lived.

## The Black Stone
When he was **thirty-five**, the Quraysh rebuilt the Ka'bah and quarrelled over who should replace the **Black Stone** (al-Hajarul-Aswad). They agreed to accept the judgement of the first man to enter — it was Muhammad. He placed the stone on a cloak, had each clan leader hold an edge, and set it in place himself. War was avoided.

## Lessons
honesty earns trust; orphans deserve care; hard work is honourable; solve disputes wisely.`,
          examples: `**Example 1.** In which year was the Prophet born? *Answer:* The **Year of the Elephant** (about 570 CE).

**Example 2.** Who cared for him after his grandfather died? *Answer:* His uncle **Abu Talib**.

**Example 3.** What title did the people of Makkah give him? *Answer:* **Al-Amin** — the Trustworthy.`,
        },
        questions: [
          ["E", "Prophet Muhammad was born in", "Makkah", "Madinah", "Ta'if", "Jerusalem", "It was in the Year of the Elephant."],
          ["E", "The mother of the Prophet was", "Aminah", "Halimah", "Khadijah", "Fatimah", "She died when he was six."],
          ["E", "The title Al-Amin means", "the Trustworthy", "the Brave", "the Wealthy", "the Leader", "People kept their valuables with him."],
          ["M", "The Prophet's foster-mother in the desert was", "Halimah as-Sa'diyyah", "Umm Ayman", "Aminah bint Wahb", "Khadijah bint Khuwaylid", "She belonged to Banu Sa'd."],
          ["M", "After the death of his grandfather, the Prophet was cared for by", "Abu Talib", "Abu Lahab", "Hamzah", "Abbas", "He was his uncle."],
          ["M", "The Prophet married Khadijah when he was", "twenty-five years old", "forty years old", "eighteen years old", "thirty-five years old", "She was about forty."],
          ["M", "The Prophet's father, Abdullah, died", "before the Prophet was born", "when the Prophet was six", "when the Prophet was eight", "after the Hijrah", "He never saw his son."],
          ["H", "The ruler who marched on Makkah with elephants in the year of the Prophet's birth was", "Abrahah", "Heraclius", "Chosroes", "the Negus", "Suratul-Fil refers to the event."],
          ["H", "The Prophet settled the dispute over the Black Stone by", "placing it on a cloak held by the clan leaders", "casting lots among the clans", "giving it to the oldest man", "asking the clans to fight for it", "He then set it in place himself."],
          ["H", "Hilful-Fudul, in which the young Muhammad took part, was a pact to", "defend the oppressed", "attack Yathrib", "worship one idol", "raise the price of goods", "It showed his love of justice."],
        ],
      },
      {
        week: 5,
        title: "Introduction to Hadith",
        subtopics: ["Meaning of Hadith and Sunnah", "Parts of a Hadith", "Importance of Hadith", "Hadith on intention"],
        objectives: ["Explain the meaning of Hadith and Sunnah", "Identify the parts of a Hadith", "State the importance of Hadith", "Explain the Hadith on intention"],
        lesson: {
          title: "The Sayings of the Prophet",
          summary: "Explain what Hadith is and study the Hadith on intention.",
          minutes: 40,
          notes: `## Meaning
A **Hadith** is a report of what Prophet Muhammad (peace be upon him) **said**, **did** or **approved**. The **Sunnah** is his way of life as shown in these reports. Hadith is the **second source** of Islamic teaching after the Qur'an.

## Three kinds of Sunnah
- **Qawliyyah** — his sayings
- **Fi'liyyah** — his actions (e.g. how he prayed)
- **Taqririyyah** — what was done in his presence and he approved by silence or agreement

## Parts of a Hadith
- **Isnad (Sanad)** — the **chain of narrators** who passed on the report
- **Matn** — the **text**, the actual words

## Difference between Qur'an and Hadith
| Qur'an | Hadith |
|---|---|
| word of Allah | words and deeds of the Prophet |
| recited in salah | not recited as Qur'an in salah |
| wording and meaning from Allah | meaning inspired; wording the Prophet's |

## Famous collections
The six best-known books (*al-Kutubus-Sittah*): **Sahihul-Bukhari**, **Sahih Muslim**, **Sunan Abi Dawud**, **Jami'ut-Tirmidhi**, **Sunanun-Nasa'i**, **Sunan Ibn Majah**. Also **Al-Muwatta** of Imam **Malik**. **An-Nawawi's Forty Hadith** (*Al-Arba'un an-Nawawiyyah*) is a short collection of key teachings, compiled by Imam an-Nawawi.

## Importance
- it **explains** the Qur'an — e.g. the Qur'an commands salah; the Hadith shows how to pray
- it gives **details** not in the Qur'an
- it shows the Prophet's **example** to follow
- the Qur'an commands: obey Allah and **obey the Messenger**

## Hadith 1 of an-Nawawi: intention
Narrated by **Umar ibn al-Khattab**; recorded by **al-Bukhari and Muslim**. In summary the Prophet said that **actions are judged by intentions**, and each person will have what he intended: whoever migrated for the sake of **Allah and His Messenger**, his migration is for them; and whoever migrated for some **worldly gain or to marry a woman**, his migration is for what he migrated for.

### Lessons
- the **intention (niyyah)** is in the heart and gives an act its value
- the same act can be worship or not, depending on the reason for it
- do good deeds for **Allah alone**, not to show off (**riya'**)
- ordinary acts — studying, eating, working — become worship with a good intention
- a good intention does not make a forbidden act lawful

## Respect for Hadith
say "*sallallahu alayhi wa sallam*" when the Prophet is mentioned; learn, practise and pass on his teachings accurately.`,
          examples: `**Example 1.** What are the two parts of a Hadith? *Answer:* **Isnad** (chain) and **matn** (text).

**Example 2.** Who narrated the Hadith on intention? *Answer:* **Umar ibn al-Khattab**.

**Example 3.** What is riya'? *Answer:* **Showing off** in acts of worship.`,
        },
        questions: [
          ["E", "A Hadith is a report of the sayings, actions and approvals of", "Prophet Muhammad", "the companions only", "the angels", "the scholars", "It is the second source of Islam."],
          ["E", "The text of a Hadith is called the", "matn", "isnad", "surah", "ayah", "The chain of narrators is the isnad."],
          ["E", "According to the Hadith, actions are judged by", "intentions", "appearance", "wealth", "number", "Each person gets what he intended."],
          ["M", "The chain of narrators of a Hadith is known as the", "isnad", "matn", "tafsir", "fiqh", "It shows who passed on the report."],
          ["M", "The Hadith on intention was narrated by", "Umar ibn al-Khattab", "Abu Hurayrah", "A'ishah", "Anas ibn Malik", "It is the first of an-Nawawi's forty."],
          ["M", "Which of these is a book of Hadith?", "Sahihul-Bukhari", "Suratul-Baqarah", "Zabur", "Injil", "It is one of the six famous collections."],
          ["M", "The Sunnah that consists of the Prophet's actions is called", "Fi'liyyah", "Qawliyyah", "Taqririyyah", "Qudsiyyah", "An example is how he prayed."],
          ["H", "Doing good deeds in order to be seen and praised by people is called", "riya'", "ikhlas", "sabr", "tawbah", "It spoils the reward of the deed."],
          ["H", "The Hadith explains the Qur'an in that it", "shows in detail how commands such as salah are carried out", "replaces the Qur'an", "is recited in every rak'ah", "was revealed before the Qur'an", "The Qur'an commands; the Sunnah demonstrates."],
          ["H", "A student who studies hard in order to serve Allah and benefit people is, according to the Hadith on intention,", "rewarded as for an act of worship", "wasting his time", "committing riya'", "neglecting his religion", "A good intention turns ordinary acts into worship."],
        ],
      },
      {
        week: 6,
        title: "Islamic manners",
        subtopics: ["Truthfulness and trustworthiness", "Kindness to parents", "Greetings in Islam", "Manners of eating and drinking"],
        objectives: ["Explain the importance of truthfulness and trustworthiness", "State the duties of a child to parents", "Describe the Islamic greeting and its rules", "List the manners of eating and drinking"],
        lesson: {
          title: "Good Character",
          summary: "Explain basic Islamic manners in daily life.",
          minutes: 40,
          notes: `## Good character in Islam
The Prophet (peace be upon him) said he was sent to **perfect good character**, and that the best of people are those with the best manners. Moral training is called **Tahdhib** or **Akhlaq**.

## Truthfulness (Sidq) and trustworthiness (Amanah)
- always speak the truth, even when it is hard
- the Prophet taught that **truthfulness leads to righteousness and righteousness leads to Paradise**, while **lying leads to wickedness and wickedness leads to the Fire**
- **Amanah** is keeping safely whatever is entrusted to you: property, secrets, duties, public office
- the signs of a **hypocrite** (munafiq) are three: when he **speaks he lies**, when he **promises he breaks it**, and when he is **trusted he betrays**
- avoid cheating in examinations, false weights, stealing and breaking promises

## Kindness to parents (Birrul-Walidayn)
The Qur'an (17:23–24) joins kindness to parents with the worship of Allah:
- do not say even "**uff**" (a word of annoyance) to them, nor shout at them
- speak to them with **respect**
- be **humble** and merciful to them
- **pray** for them: "My Lord, have mercy on them as they brought me up when I was small"
Also: obey them in what is right, help them, care for them in old age, and pray for them after death. A man asked who most deserved his good company; the Prophet said, "**Your mother**" three times, then "your father". Obedience stops where a parent commands **disobedience to Allah** — but kindness continues.

## Greetings
- the Islamic greeting is "**As-salamu alaykum**" (Peace be upon you)
- the reply: "**Wa alaykumus-salam**" — it is better to add "*wa rahmatullahi wa barakatuh*"
- to **begin** the greeting is **Sunnah**; to **reply** is **obligatory**
- the young greet the old; the one walking greets the one sitting; the small group greets the large; the one entering greets those inside
- greet those you know and those you do not
- it spreads **love** and removes ill-feeling

## Manners of eating and drinking
- wash the hands
- say "**Bismillah**" before eating
- eat and drink with the **right hand**
- eat from **what is nearest** to you
- do not eat too much or waste food; do not find fault with food
- sit while eating and drinking; do not breathe into the vessel
- eat only what is **halal**
- say "**Al-hamdu lillah**" after eating

## Other manners
say "Al-hamdu lillah" after sneezing; ask permission before entering; lower the voice; respect teachers and elders; be kind to neighbours and animals.`,
          examples: `**Example 1.** What are the three signs of a hypocrite? *Answer:* He **lies**, **breaks promises** and **betrays trust**.

**Example 2.** What is the reply to the Islamic greeting? *Answer:* "**Wa alaykumus-salam.**"

**Example 3.** What is said before eating? *Answer:* "**Bismillah.**"`,
        },
        questions: [
          ["E", "The Islamic greeting is", "As-salamu alaykum", "Al-hamdu lillah", "Bismillah", "Subhanallah", "It means peace be upon you."],
          ["E", "A Muslim eats with the", "right hand", "left hand", "both hands always", "a spoon only", "This is the practice of the Prophet."],
          ["E", "After eating, a Muslim says", "Al-hamdu lillah", "Bismillah", "Astaghfirullah", "Allahu Akbar", "It is to thank Allah."],
          ["M", "Amanah means", "trustworthiness", "truthfulness", "patience", "generosity", "It is keeping what is entrusted to you."],
          ["M", "When asked who most deserves a person's good company, the Prophet first said,", "your mother", "your father", "your teacher", "your friend", "He repeated it three times."],
          ["M", "Replying to the greeting of salam is", "obligatory", "forbidden", "disliked", "only for elders", "Beginning the greeting is Sunnah."],
          ["M", "One sign of a hypocrite is that when he promises, he", "breaks it", "fulfils it", "forgets Allah", "gives charity", "He also lies and betrays trust."],
          ["H", "The Qur'an forbids saying even 'uff' to parents. This means a child must not", "show the slightest annoyance to them", "greet them", "ask them questions", "eat with them", "They are to be spoken to with respect."],
          ["H", "A child is excused from obeying a parent when the parent", "commands disobedience to Allah", "asks for help at home", "is old and weak", "gives advice", "Kindness to them still continues."],
          ["H", "According to the Prophet, truthfulness leads to righteousness, and righteousness leads to", "Paradise", "wealth", "fame", "long life", "Lying leads to wickedness and the Fire."],
        ],
      },
    ],
  },
];
