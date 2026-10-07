import type { TermPlan } from "../types";

/** SS1 Islamic Religious Studies — original Precious PS content for senior secondary schools. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The revelation of the Qur'an",
        subtopics: ["Meaning and modes of revelation", "Gradual revelation and its wisdom", "Makkan and Madinan suwar", "Features of each group"],
        objectives: ["Explain the meaning and modes of revelation", "State the wisdom behind gradual revelation", "Distinguish Makkan from Madinan suwar", "Identify the features of each group"],
        lesson: {
          title: "How the Qur'an Came Down",
          summary: "Explain the modes and stages of the revelation of the Qur'an.",
          minutes: 40,
          notes: `## Meaning of revelation
**Wahy** is the communication of Allah's message to His prophets. The Qur'an (42:51) mentions that Allah speaks to a human being only by **inspiration**, or from **behind a veil**, or by sending a **messenger (angel)**.

## Modes in which revelation came to the Prophet
1. **true dreams** — at the beginning, they came true like the break of day
2. **inspiration cast into the heart**
3. a sound like the **ringing of a bell** — the hardest form; he would sweat even on a cold day
4. the angel **Jibril in human form**, sometimes resembling the companion **Dihyah al-Kalbi**
5. Jibril in his **true form** — seen twice
6. **direct speech from behind a veil** — as on the night of the Mi'raj

## Stages of revelation
The Qur'an was sent down from the **Preserved Tablet** (*al-Lawhul-Mahfuz*) to the lowest heaven on **Laylatul-Qadr**, and then revealed to the Prophet **piecemeal** (*munajjaman*) over about **twenty-three years**.

## Wisdom of gradual revelation
- to **strengthen the heart** of the Prophet under opposition (25:32)
- to make **memorisation and understanding** easy
- to **answer questions and events** as they arose (*asbabun-nuzul* — occasions of revelation)
- to introduce **laws gradually** — e.g. intoxicants were prohibited in three stages
- to train the believers step by step
- as proof that it is from Allah: revealed over many years, yet without contradiction

## Makkan and Madinan
- **Makkan**: revealed **before the Hijrah** (wherever the place)
- **Madinan**: revealed **after the Hijrah**
By the common count there are **86 Makkan** and **28 Madinan** suwar.

## Features
| Makkan | Madinan |
|---|---|
| short verses, strong rhythm | longer verses |
| **Tawhid**, prophethood, resurrection | **laws**: worship, family, trade, crime, war and peace |
| stories of earlier prophets and nations | dealings with **hypocrites** and **People of the Book** |
| often "**O mankind**" | often "**O you who believe**" |
| moral foundations; refutation of idolatry | organisation of the community and state |
| most verses of prostration | — |

## Importance of this knowledge
helps correct interpretation; shows the development of legislation; identifies which ruling came later; reveals the method of da'wah — belief first, then law.

## First and last revelations
first: the opening five verses of **al-Alaq**. Among the last: "**This day I have perfected your religion**" (5:3) and the verse warning of the Day of return to Allah (2:281).`,
          examples: `**Example 1.** Which mode of revelation was the hardest for the Prophet? *Answer:* The sound like the **ringing of a bell**.

**Example 2.** What decides whether a surah is Makkan or Madinan? *Answer:* Whether it was revealed **before or after the Hijrah**.

**Example 3.** Give one reason for gradual revelation. *Answer:* To **strengthen the Prophet's heart** (or ease memorisation; gradual legislation).`,
        },
        questions: [
          ["E", "Wahy means", "revelation", "recitation", "interpretation", "consensus", "It is Allah's communication to His prophets."],
          ["E", "A surah revealed before the Hijrah is called", "Makkan", "Madinan", "Qudsi", "Mutawatir", "The place of revelation is not the test."],
          ["E", "The Qur'an was revealed to the Prophet over about", "twenty-three years", "thirteen years", "ten years", "forty years", "It came down piece by piece."],
          ["M", "The mode of revelation that was hardest on the Prophet was", "the sound like the ringing of a bell", "true dreams", "the angel in human form", "inspiration in sleep", "He would sweat even on a cold day."],
          ["M", "The term 'asbabun-nuzul' refers to", "the occasions on which verses were revealed", "the rules of recitation", "the number of verses", "the chain of narrators", "Many verses answered particular events."],
          ["M", "Which of these is a feature of Madinan suwar?", "detailed laws for the community", "very short rhythmic verses", "frequent address 'O mankind'", "refutation of idol worship only", "They organise the community and state."],
          ["M", "The companion whose form Jibril sometimes took was", "Dihyah al-Kalbi", "Zayd ibn Thabit", "Abu Hurayrah", "Salman al-Farisi", "He was known for his handsome appearance."],
          ["H", "The gradual prohibition of intoxicants illustrates the wisdom of revealing the Qur'an in stages, namely", "introducing laws step by step", "confusing the disbelievers", "delaying the Hijrah", "shortening the suwar", "People were trained gradually."],
          ["H", "The address 'O you who believe' is characteristic of Madinan suwar because", "a believing community needing laws had been formed", "there were no believers in Makkah", "the Quraysh had all accepted Islam", "the Prophet had stopped preaching Tawhid", "Laws were addressed to the established community."],
          ["H", "The absence of contradiction in a book revealed over many years and in varied circumstances is evidence that it", "is from Allah", "was written in one night", "was copied from earlier books", "has no laws", "The Qur'an itself makes this argument."],
        ],
      },
      {
        week: 2,
        title: "The preservation and compilation of the Qur'an",
        subtopics: ["Preservation in the Prophet's lifetime", "Compilation under Abu Bakr", "Standardisation under Uthman", "Evidence of authenticity"],
        objectives: ["Describe how the Qur'an was preserved in the Prophet's lifetime", "Narrate the compilation under Abu Bakr", "Narrate the standardisation under Uthman", "State the evidence for the authenticity of the Qur'an"],
        lesson: {
          title: "A Book Guarded by Allah",
          summary: "Trace the history of the preservation and compilation of the Qur'an.",
          minutes: 40,
          notes: `## In the Prophet's lifetime
- **memorisation**: the Prophet memorised each revelation; many companions became **huffaz**
- **writing**: he dictated to scribes — among them **Zayd ibn Thabit**, **Ubayy ibn Ka'b**, **Ali**, **Uthman** and **Mu'awiyah** — on parchment, leather, flat stones, shoulder-bones and palm stalks
- he told them **where each verse belonged**; the order of verses is therefore from him
- **Jibril** reviewed the Qur'an with him every **Ramadan** — **twice** in his final year
- it was not yet bound in one volume, because revelation was still continuing

## Under Abu Bakr
- at the battle of **Yamamah** (12 AH) against Musaylimah, many memorisers were killed
- **Umar** urged Abu Bakr to collect the Qur'an in one volume; Abu Bakr hesitated to do what the Prophet had not done, but was convinced
- **Zayd ibn Thabit** was appointed. He said that moving a mountain would have been easier. He gathered it from written pieces and from the memories of men, accepting a written portion only with **two witnesses** that it had been written in the Prophet's presence
- the collected sheets (*suhuf*) were kept by **Abu Bakr**, then **Umar**, then Umar's daughter **Hafsah**

## Under Uthman
- as Islam spread, new Muslims in distant provinces differed in **reciting** the Qur'an. During a campaign in Armenia and Azerbaijan, **Hudhayfah ibn al-Yaman** was alarmed and urged the caliph to act
- Uthman borrowed the sheets from **Hafsah** and appointed a committee: **Zayd ibn Thabit**, **Abdullah ibn az-Zubayr**, **Sa'id ibn al-As** and **Abdur-Rahman ibn al-Harith**
- where they differed in spelling, they were to write in the **dialect of the Quraysh**
- several **standard copies** were sent to the main cities — such as Makkah, Kufah, Basrah and Damascus — each with a reciter; one was kept in Madinah
- other private copies were **burned** to prevent dispute
The standard text is known as **al-Mushaful-Uthmani**.

## Later aids to reading
**Dots and vowel signs** were added in the first century (associated with **Abul-Aswad ad-Du'ali** and others) to help non-Arabs read correctly. They did not change the text.

## Evidence of authenticity
- continuous **mass memorisation** in every generation (*tawatur*)
- written record from the Prophet's own time
- the **same text** worldwide, whatever the sect or country
- its inimitable style — the challenge to produce even one surah like it remains unmet
- Allah's promise: "**We have sent down the Reminder, and We will surely guard it**" (15:9)

## Lessons
value learning and memorisation; act early to prevent division; careful verification; unity upon one Book.`,
          examples: `**Example 1.** What event led to the first compilation? *Answer:* The death of many memorisers at **Yamamah**.

**Example 2.** Who chaired both compilation tasks? *Answer:* **Zayd ibn Thabit**.

**Example 3.** In whose dialect was the standard copy written? *Answer:* The dialect of the **Quraysh**.`,
        },
        questions: [
          ["E", "The chief scribe who compiled the Qur'an under Abu Bakr was", "Zayd ibn Thabit", "Ubayy ibn Ka'b", "Abdullah ibn Mas'ud", "Mu'adh ibn Jabal", "He also served on Uthman's committee."],
          ["E", "The standard copy of the Qur'an is known as", "al-Mushaful-Uthmani", "as-Sahifah as-Sadiqah", "al-Muwatta", "ar-Risalah", "It is named after the third caliph."],
          ["E", "The battle that prompted the first compilation of the Qur'an was", "Yamamah", "Badr", "Siffin", "Yarmuk", "Many memorisers were killed there."],
          ["M", "The person who urged Abu Bakr to compile the Qur'an was", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan", "Hudhayfah ibn al-Yaman", "He feared the loss of the memorisers."],
          ["M", "After the death of Umar, the collected sheets were kept by", "Hafsah", "A'ishah", "Fatimah", "Umm Salamah", "She was Umar's daughter and a wife of the Prophet."],
          ["M", "The companion who alerted Uthman to differences in recitation was", "Hudhayfah ibn al-Yaman", "Abu Musa al-Ash'ari", "Abu Dharr", "Bilal ibn Rabah", "He noticed them during a campaign."],
          ["M", "In his final year, Jibril reviewed the Qur'an with the Prophet", "twice", "once", "three times", "every month", "The usual review was once each Ramadan."],
          ["H", "Zayd ibn Thabit required two witnesses for each written portion in order to", "confirm it had been written in the Prophet's presence", "reduce the size of the Qur'an", "choose the best handwriting", "favour the Quraysh", "Memory alone was not relied upon."],
          ["H", "The Qur'an was not bound into one volume during the Prophet's lifetime mainly because", "revelation was still continuing", "there were no scribes", "writing was forbidden", "the companions could not agree", "New verses were still being revealed."],
          ["H", "Uthman ordered other private copies to be burned in order to", "prevent disputes over the text and recitation", "hide parts of the Qur'an", "punish the reciters", "save writing materials", "The community was united on one text."],
        ],
      },
      {
        week: 3,
        title: "Suratud-Duha and Suratush-Sharh",
        subtopics: ["Background and meaning of Suratud-Duha", "Lessons of Suratud-Duha", "Meaning of Suratush-Sharh", "Lessons of Suratush-Sharh"],
        objectives: ["Narrate the background of Suratud-Duha", "Explain the meaning and lessons of Suratud-Duha", "Explain the meaning of Suratush-Sharh", "State the lessons of Suratush-Sharh"],
        lesson: {
          title: "Comfort after Distress",
          summary: "Study the meaning and lessons of Suratud-Duha and Suratush-Sharh.",
          minutes: 40,
          notes: `## Suratud-Duha (chapter 93)
- **ad-Duha** means "**the Morning Brightness**"; **eleven verses**; Makkan

### Background
Revelation paused for some time. The Prophet was grieved, and the idolaters taunted him, saying that his Lord had **abandoned** him. This surah brought reassurance.

### Meaning in summary
1–2. By the **morning brightness**, and by the **night when it is still**,
3. your Lord has **not forsaken you**, nor is He displeased.
4. The **Hereafter is better** for you than the present.
5. Your Lord will give you, and **you will be satisfied**.
6. Did He not find you an **orphan** and give you shelter?
7. He found you **unaware of the way** and guided you.
8. He found you **in need** and made you self-sufficient.
9. So do not **oppress the orphan**,
10. do not **drive away the one who asks**,
11. and **proclaim the favour** of your Lord.

### Lessons
- a pause in blessings is not abandonment; like night after day, it has a purpose
- remember **past favours** to have hope for the future
- gratitude is shown by **action**: care for orphans, kindness to beggars and seekers of knowledge
- speak of Allah's blessings thankfully, not boastfully

## Suratush-Sharh (chapter 94)
- also called **al-Inshirah** — "**the Opening of the Breast**"; **eight verses**; Makkan

### Meaning in summary
1. Did We not **expand your breast** for you,
2–3. and remove from you your **burden** which weighed down your back,
4. and **raise high your fame**?
5. Surely **with hardship comes ease**;
6. surely with hardship comes ease.
7. So when you have finished, **strive on** (in worship),
8. and **turn to your Lord** with longing.

### Lessons
- Allah gives His servants **inner peace** and strength for their tasks
- the Prophet's name is honoured: it is joined with Allah's in the Shahadah, the adhan and the tashahhud
- **ease accompanies difficulty** — the promise is repeated for emphasis; never despair
- a believer is never idle: when one duty ends, begin another
- direct every hope to **Allah alone**

## The two suwar together
Both console the Prophet by recalling Allah's past favours and promising future good, and both end with commands. They are often recited together.

## Application
when you fail a test or lose something, remember earlier successes; help an orphaned classmate; work steadily; pray after finishing your tasks.`,
          examples: `**Example 1.** Why was Suratud-Duha revealed? *Answer:* To reassure the Prophet after a **pause in revelation**.

**Example 2.** What promise is repeated in Suratush-Sharh? *Answer:* "**With hardship comes ease.**"

**Example 3.** How should gratitude be shown according to ad-Duha? *Answer:* By **kindness to the orphan and the one who asks**, and proclaiming Allah's favour.`,
        },
        questions: [
          ["E", "Ad-Duha means", "the Morning Brightness", "the Night", "the Fig", "the Opening", "It is chapter 93."],
          ["E", "Suratush-Sharh promises that with hardship comes", "ease", "wealth", "victory in war", "long life", "The promise is stated twice."],
          ["E", "Suratud-Duha forbids oppressing the", "orphan", "traveller", "trader", "neighbour", "The Prophet himself had been an orphan."],
          ["M", "Suratud-Duha was revealed when", "revelation had paused and the Prophet was taunted", "the Prophet reached Madinah", "Makkah was conquered", "the boycott began", "It assured him he was not forsaken."],
          ["M", "Another name for Suratush-Sharh is", "al-Inshirah", "al-Lahab", "al-Mu'awwidhah", "al-Hamd", "It refers to the opening of the breast."],
          ["M", "According to Suratud-Duha, Allah found the Prophet in need and", "made him self-sufficient", "sent him to Syria", "gave him a kingdom", "tested him with poverty", "It is one of three favours recalled."],
          ["M", "'And raised high your fame' is fulfilled in that the Prophet's name is mentioned in", "the adhan and the tashahhud", "every verse of the Qur'an", "the names of the months", "the Zabur", "It is joined with the name of Allah."],
          ["H", "The oaths by the morning light and the still night in Suratud-Duha suggest that", "a pause in revelation is as natural and purposeful as night after day", "the Prophet prayed only at night", "revelation came only in the morning", "the sun should be honoured", "Stillness does not mean abandonment."],
          ["H", "The command 'when you have finished, strive on' teaches that a believer should", "move from one worthy task to another without idleness", "rest after every duty", "leave worldly work", "stop preaching", "Free time is to be used in devotion."],
          ["H", "Both suwar console the Prophet chiefly by", "recalling past favours as grounds for future hope", "promising revenge on his enemies", "ordering him to migrate", "describing Paradise in detail", "What Allah did before, He will do again."],
        ],
      },
      {
        week: 4,
        title: "Suratut-Tin and Suratul-Alaq",
        subtopics: ["Meaning of Suratut-Tin", "Lessons of Suratut-Tin", "Meaning of Suratul-Alaq", "Lessons of Suratul-Alaq"],
        objectives: ["Explain the meaning of Suratut-Tin", "State the lessons of Suratut-Tin", "Explain the meaning of Suratul-Alaq", "State the lessons of Suratul-Alaq"],
        lesson: {
          title: "The Dignity of Man and the Duty to Learn",
          summary: "Study the meaning and lessons of Suratut-Tin and Suratul-Alaq.",
          minutes: 40,
          notes: `## Suratut-Tin (chapter 95)
- **at-Tin** means "**the Fig**"; **eight verses**; Makkan

### Meaning in summary
1. By the **fig** and the **olive**,
2. by **Mount Sinai**,
3. and by this **secure city** (Makkah),
4. We have created man in the **best form** (*ahsani taqwim*);
5. then We reduce him to the **lowest of the low**,
6. **except** those who believe and do righteous deeds — for them is an **unending reward**.
7. What then makes you deny the Judgement?
8. Is not Allah the **most just of judges**?

The oaths are linked by commentators to lands of revelation: the fig and olive with the region of **Isa**, Sinai with **Musa**, and Makkah with **Muhammad**.

### Lessons
- the human being is honoured: upright body, intellect, speech, free will
- by disbelief and evil he sinks lower than animals
- **faith and good deeds** preserve human dignity
- Allah's justice requires a Day of Judgement
After the last verse it is recommended to say, "**Yes indeed, and I am among those who bear witness to that.**"

## Suratul-Alaq (chapter 96)
- **al-Alaq** means "**the Clinging Clot**"; **nineteen verses**; Makkan

### Verses 1–5 — the first revelation
Read in the name of your Lord who created — created man from a **clinging clot**. Read, and your Lord is the **Most Generous**, who taught by the **pen**, taught man what he did not know.

### Verses 6–19 — revealed later
- man **transgresses** when he thinks himself **self-sufficient**; yet to his Lord is the return
- "Have you seen the one who **forbids a servant when he prays**?" — this refers to **Abu Jahl**, who threatened to trample the Prophet's neck if he prayed at the Ka'bah
- if he does not stop, "We will drag him by the **forelock** — a lying, sinful forelock"
- let him call his supporters; "We will call the **Zabaniyah**" (the guards of Hell)
- "**No! Do not obey him. Prostrate and draw near.**"
The last verse is a **verse of prostration** (sajdah).

### Lessons
- seek **knowledge**: reading and writing are gifts of Allah; learning must be "in the name of your Lord"
- remember your humble origin; do not be arrogant
- **wealth and power** tempt people to rebel
- do not give in to those who oppose worship
- **sujud** brings a servant closest to Allah

## Application
value school; use knowledge for good; stay humble when successful; never be ashamed to pray.`,
          examples: `**Example 1.** In what form was man created? *Answer:* "**The best form**" — ahsani taqwim.

**Example 2.** Who is meant by the one who forbade a servant from praying? *Answer:* **Abu Jahl**.

**Example 3.** What does the last verse of al-Alaq command? *Answer:* "**Prostrate and draw near.**"`,
        },
        questions: [
          ["E", "At-Tin means", "the Fig", "the Olive", "the Pen", "the Clot", "It is chapter 95."],
          ["E", "Suratul-Alaq has how many verses?", "nineteen", "five", "eight", "eleven", "Its first five were the first revelation."],
          ["E", "According to Suratul-Alaq, Allah taught man by the", "pen", "sword", "moon", "wind", "Writing preserves knowledge."],
          ["M", "The 'secure city' mentioned in Suratut-Tin is", "Makkah", "Madinah", "Jerusalem", "Ta'if", "Allah swears by it."],
          ["M", "'Ahsani taqwim' means", "the best form", "the lowest of the low", "the clinging clot", "the straight path", "It describes the creation of man."],
          ["M", "Those exempted from being reduced to the lowest of the low are those who", "believe and do righteous deeds", "have great wealth", "are of noble birth", "live in Makkah", "They have an unending reward."],
          ["M", "The Zabaniyah mentioned in Suratul-Alaq are", "the guards of Hell", "the scribes of deeds", "the carriers of the Throne", "the people of Thamud", "They are called against the arrogant."],
          ["H", "Suratul-Alaq says man transgresses when he", "sees himself as self-sufficient", "is poor and weak", "seeks knowledge", "remembers his origin", "Wealth and power tempt him to rebel."],
          ["H", "Linking the oaths of Suratut-Tin with the lands of Isa, Musa and Muhammad suggests that the surah", "connects the dignity of man with divine guidance through the prophets", "is about agriculture", "was revealed in Jerusalem", "describes the Hijrah", "Guidance preserves the best form."],
          ["H", "The instruction to 'read in the name of your Lord' implies that knowledge should be", "pursued with consciousness of Allah and used rightly", "limited to religious texts", "kept secret", "sought only by men", "Learning without God-consciousness leads to arrogance."],
        ],
      },
      {
        week: 5,
        title: "Suratul-Qadr and Suratul-Bayyinah",
        subtopics: ["Meaning of Suratul-Qadr", "Lessons of Suratul-Qadr", "Meaning of Suratul-Bayyinah", "Lessons of Suratul-Bayyinah"],
        objectives: ["Explain the meaning of Suratul-Qadr", "State the lessons of Suratul-Qadr", "Explain the meaning of Suratul-Bayyinah", "State the lessons of Suratul-Bayyinah"],
        lesson: {
          title: "The Night of Power and the Clear Proof",
          summary: "Study the meaning and lessons of Suratul-Qadr and Suratul-Bayyinah.",
          minutes: 40,
          notes: `## Suratul-Qadr (chapter 97)
- **al-Qadr** means "**Power**" or "**Decree**"; **five verses**

### Meaning in summary
1. We sent it (the Qur'an) down on the **Night of Power**.
2. And what will make you know what the Night of Power is?
3. The Night of Power is **better than a thousand months**.
4. The **angels and the Spirit** (Jibril) descend in it by their Lord's permission, with every decree.
5. **Peace** it is, until the rising of the **dawn**.

### Lessons
- the greatness of the **Qur'an** — its night of descent is the most honoured night
- worship on that one night outweighs worship of over **eighty-three years**
- it is in **Ramadan**; the Prophet said to seek it in the **odd nights of the last ten**
- its exact date is hidden so that believers strive throughout
- spend it in prayer, recitation, repentance and supplication

## Suratul-Bayyinah (chapter 98)
- **al-Bayyinah** means "**the Clear Proof**"; **eight verses**; regarded by most as Madinan

### Meaning in summary
1. Those who disbelieved among the **People of the Book** and the **polytheists** were not going to leave their ways until the **clear proof** came to them —
2. a **Messenger from Allah** reciting **purified pages**,
3. containing upright scriptures.
4. Those given the Book did not divide until **after** the clear proof had come to them.
5. Yet they were commanded only to **worship Allah sincerely**, being upright, to **establish prayer** and to **give Zakah** — that is the **right religion**.
6. Those who disbelieve will be in the fire of Hell; they are the **worst of creatures**.
7. Those who **believe and do righteous deeds** are the **best of creatures**.
8. Their reward is **Gardens of Eden** beneath which rivers flow; **Allah is pleased with them and they with Him** — that is for whoever **fears his Lord**.

### Lessons
- the Prophet and the Qur'an are the **clear proof** for all people
- division arises from stubbornness, not from lack of evidence
- the core of every revealed religion is the same: **sincere worship (ikhlas)**, **salah** and **Zakah**
- rank with Allah depends on **faith and deeds**, not on name or ancestry
- the highest reward is Allah's **good pleasure** (*ridwan*)
- **fear of Allah** (khashyah) is the key

## Link
Al-Qadr honours the night the Qur'an came down; al-Bayyinah shows the purpose of that Book — to bring a clear proof and call people to sincere worship.`,
          examples: `**Example 1.** How is the Night of Power described? *Answer:* "**Better than a thousand months.**"

**Example 2.** What is the "clear proof"? *Answer:* A **Messenger from Allah** reciting purified pages.

**Example 3.** What three things make up the "right religion" in verse 5? *Answer:* **Sincere worship, prayer and Zakah**.`,
        },
        questions: [
          ["E", "Al-Bayyinah means", "the Clear Proof", "the Power", "the Earthquake", "the Chargers", "It is chapter 98."],
          ["E", "Suratul-Qadr has how many verses?", "five", "eight", "three", "eleven", "It is chapter 97."],
          ["E", "According to Suratul-Qadr, the Night of Power is peace until", "the rising of the dawn", "midnight", "the next sunset", "the end of Ramadan", "It is the final verse."],
          ["M", "'The Spirit' who descends with the angels on the Night of Power is", "Jibril", "Mika'il", "Israfil", "Malik", "He is named separately for honour."],
          ["M", "In Suratul-Bayyinah, those who believe and do good are called", "the best of creatures", "the People of the Book", "the foremost emigrants", "the helpers", "The disbelievers are the worst of creatures."],
          ["M", "The 'right religion' in Suratul-Bayyinah consists of sincere worship, prayer and", "Zakah", "Hajj", "Jihad", "fasting", "These were commanded to earlier communities too."],
          ["M", "Worship on the Night of Power is better than that of about", "eighty-three years", "one year", "ten years", "forty years", "A thousand months is over eighty-three years."],
          ["H", "The exact date of the Night of Power is hidden so that believers will", "strive in worship throughout the last ten nights", "stop fasting early", "argue about it", "neglect other nights", "Seeking it encourages sustained devotion."],
          ["H", "Suratul-Bayyinah states that the People of the Book became divided", "only after the clear proof had come to them", "because they had no scripture", "before any prophet was sent", "because of poverty", "Their division was from stubbornness, not ignorance."],
          ["H", "The phrase 'Allah is pleased with them and they with Him' identifies the highest reward as", "the good pleasure of Allah", "rivers of water", "wealth in this world", "long life", "It is greater than the gardens themselves."],
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
        title: "The history of the collection of Hadith",
        subtopics: ["Hadith in the Prophet's lifetime", "The period of the companions and successors", "Official compilation", "The golden age and the six collectors"],
        objectives: ["Describe how Hadith was preserved in the Prophet's lifetime", "Describe its transmission by companions and successors", "Explain the official compilation under Umar ibn Abdul-Aziz", "Name the six major collectors and their works"],
        lesson: {
          title: "Preserving the Sunnah",
          summary: "Trace the stages in the collection and compilation of Hadith.",
          minutes: 40,
          notes: `## Stage 1: the Prophet's lifetime
- companions **memorised** his words and copied his actions; they repeated them to those absent
- at first he discouraged general writing of Hadith so that it would **not be mixed with the Qur'an**; later he permitted it
- some kept written notes — notably **Abdullah ibn Amr ibn al-As**, whose collection is called **as-Sahifah as-Sadiqah**
- his letters, treaties and instructions on Zakah were written

## Stage 2: the companions
After his death the companions spread across the provinces and taught what they knew. Those who narrated most include:
- **Abu Hurayrah** — the most prolific narrator
- **Abdullah ibn Umar**
- **Anas ibn Malik**
- **A'ishah** — especially on his private and family life
- **Abdullah ibn Abbas**
- **Jabir ibn Abdullah**
They were careful: Abu Bakr and Umar asked for confirmation before accepting a report.

## Stage 3: the successors (Tabi'un) and official compilation
With civil strife and the rise of sects, some people **fabricated** sayings. Scholars began to ask, "**Name your men**" — the **isnad** became essential.
The Umayyad caliph **Umar ibn Abdul-Aziz** (ruled 99–101 AH), fearing the loss of knowledge as scholars died, ordered governors and scholars to **collect Hadith in writing**. **Ibn Shihab az-Zuhri** is counted the first to compile on this order.

## Stage 4: early books (second century AH)
Works arranged by topic appeared, the most famous being **al-Muwatta** of **Imam Malik** of Madinah.

## Stage 5: the golden age (third century AH)
- **Musnad** of **Ahmad ibn Hanbal** — arranged by companion
- the **six books** (*al-Kutubus-Sittah*):
  1. **Sahih al-Bukhari** — Muhammad ibn Isma'il **al-Bukhari** (d. 256 AH), of Bukhara
  2. **Sahih Muslim** — **Muslim ibn al-Hajjaj** (d. 261 AH), of Nishapur
  3. **Sunan Abi Dawud** (d. 275 AH)
  4. **Jami' at-Tirmidhi** (d. 279 AH)
  5. **Sunan an-Nasa'i** (d. 303 AH)
  6. **Sunan Ibn Majah** (d. 273 AH)
Al-Bukhari and Muslim together are called **ash-Shaykhan**, and their books **as-Sahihan**; a hadith in both is "agreed upon" (*muttafaq alayh*).

## Sciences that grew up
- **Ilmur-Rijal** — biographies of narrators
- **al-Jarh wat-Ta'dil** — assessing reliability
- **Mustalahul-Hadith** — classification terms
Scholars travelled great distances to verify a single report.

## Importance
the Sunnah was preserved with unparalleled care; Muslims can distinguish the authentic from the false.`,
          examples: `**Example 1.** Which caliph ordered the official collection of Hadith? *Answer:* **Umar ibn Abdul-Aziz**.

**Example 2.** Whose written collection was called as-Sahifah as-Sadiqah? *Answer:* **Abdullah ibn Amr ibn al-As**.

**Example 3.** What does "muttafaq alayh" mean? *Answer:* A hadith recorded by **both al-Bukhari and Muslim**.`,
        },
        questions: [
          ["E", "The companion who narrated the largest number of Hadith was", "Abu Hurayrah", "Abu Bakr", "Bilal", "Khalid ibn al-Walid", "He stayed close to the Prophet to learn."],
          ["E", "Al-Muwatta was compiled by", "Imam Malik", "Imam al-Bukhari", "Imam Muslim", "Imam Abu Dawud", "He lived in Madinah."],
          ["E", "The two most authentic books of Hadith are together called", "as-Sahihan", "as-Sunan", "al-Musnad", "al-Muwatta", "They are by al-Bukhari and Muslim."],
          ["M", "The caliph who ordered the official compilation of Hadith was", "Umar ibn Abdul-Aziz", "Umar ibn al-Khattab", "Harun ar-Rashid", "Mu'awiyah", "He feared the loss of knowledge."],
          ["M", "The scholar counted as the first to compile Hadith on the caliph's order was", "Ibn Shihab az-Zuhri", "Ibn Majah", "an-Nasa'i", "at-Tirmidhi", "He was a leading successor."],
          ["M", "The Prophet at first discouraged the writing of Hadith so that it would not be", "mixed with the Qur'an", "sold in the markets", "read by the Quraysh", "translated", "He later permitted it."],
          ["M", "The science that assesses the reliability of narrators is", "al-Jarh wat-Ta'dil", "Tajwid", "Tafsir", "Usulul-Fiqh", "It grades narrators as trustworthy or weak."],
          ["H", "The isnad became essential during the period of the successors mainly because", "fabricated reports had begun to appear", "paper had been invented", "the Qur'an was being compiled", "the companions forbade narration", "Scholars demanded to know the narrators."],
          ["H", "A hadith described as 'muttafaq alayh' is one that is", "recorded by both al-Bukhari and Muslim", "narrated by a single companion", "found in all six books", "attributed to a successor", "It carries the highest authority."],
          ["H", "The Musnad of Ahmad ibn Hanbal differs from the Sahih of al-Bukhari in that it is arranged by", "the companion who narrated each report", "legal topic", "date of narration", "length of text", "A musnad groups hadith under each companion."],
        ],
      },
      {
        week: 2,
        title: "The classification of Hadith",
        subtopics: ["Classification by authenticity", "Classification by number of narrators", "Classification by attribution", "Hadith Qudsi"],
        objectives: ["Classify Hadith by degree of authenticity", "Classify Hadith by number of narrators", "Classify Hadith by the person to whom it is attributed", "Explain Hadith Qudsi and how it differs from the Qur'an"],
        lesson: {
          title: "Sound, Good and Weak",
          summary: "Explain how scholars classify Hadith.",
          minutes: 40,
          notes: `## Why classify?
To separate what the Prophet truly said or did from what is doubtful or false. Both the **chain (isnad)** and the **text (matn)** are examined.

## By authenticity
1. **Sahih (sound)** — five conditions:
   - an **unbroken chain**
   - every narrator is **upright** (*adl*)
   - every narrator is **accurate** in memory or record (*dabt*)
   - it does **not contradict** stronger reports (free from *shudhudh*)
   - it has **no hidden defect** (*illah*)
2. **Hasan (good)** — like the sahih, but a narrator is slightly lower in accuracy. Both sahih and hasan are **accepted** as proof.
3. **Da'if (weak)** — lacks one or more conditions: a broken chain, an unknown or unreliable narrator. It is not used to establish law.
4. **Mawdu' (fabricated)** — a lie attributed to the Prophet. It is **not a hadith at all** and may not be quoted except to expose it. The Prophet warned that whoever lies about him deliberately should take his seat in the Fire.

### Why some people fabricated
political and sectarian rivalry; flattering rulers; story-tellers seeking fame; enemies of Islam; misguided attempts to encourage piety.

## By number of narrators
- **Mutawatir** — narrated by so many people at **every level** that agreement on a lie is impossible; it gives **certain knowledge**
- **Ahad** — fewer than that:
  - **Mashhur** — three or more at each level
  - **Aziz** — at least two
  - **Gharib** — a single narrator at some level

## By attribution
- **Marfu'** — traced to the **Prophet**
- **Mawquf** — stops at a **companion**
- **Maqtu'** — stops at a **successor**

## Hadith Qudsi
A **sacred hadith**: the **meaning is from Allah**, but the **wording is the Prophet's**. He introduces it with "Allah says …". Example in summary: Allah says, "I am as My servant thinks of Me, and I am with him when he remembers Me."

| | Qur'an | Hadith Qudsi | Hadith Nabawi |
|---|---|---|---|
| meaning | from Allah | from Allah | inspired |
| wording | from Allah | the Prophet's | the Prophet's |
| recited in salah | yes | no | no |
| transmission | all mutawatir | mostly ahad | varies |
| inimitable | yes | no | no |

## Using Hadith responsibly
check the source and grade before quoting; do not pass on unverified sayings in messages or sermons; prefer the well-known collections.`,
          examples: `**Example 1.** Give two conditions of a sahih hadith. *Answer:* An **unbroken chain** and **upright, accurate narrators**.

**Example 2.** What is a mawquf hadith? *Answer:* A report that stops at a **companion**.

**Example 3.** How does Hadith Qudsi differ from the Qur'an? *Answer:* Its **wording is the Prophet's** and it is **not recited in salah**.`,
        },
        questions: [
          ["E", "A sound hadith is called", "sahih", "da'if", "mawdu'", "maqtu'", "It meets all the conditions of acceptance."],
          ["E", "A fabricated report falsely attributed to the Prophet is", "mawdu'", "hasan", "mashhur", "marfu'", "It is not a hadith at all."],
          ["E", "A hadith traced back to the Prophet is described as", "marfu'", "mawquf", "maqtu'", "gharib", "The word means elevated."],
          ["M", "A hadith narrated by so many people at every level that they could not agree on a lie is", "mutawatir", "aziz", "gharib", "da'if", "It gives certain knowledge."],
          ["M", "A report that stops at a companion is called", "mawquf", "marfu'", "maqtu'", "mutawatir", "It is the companion's own statement."],
          ["M", "The quality of a narrator's accuracy in memory or writing is known as", "dabt", "adl", "illah", "matn", "It is one of the conditions of a sound hadith."],
          ["M", "In Hadith Qudsi, the wording is from", "the Prophet", "Allah", "Jibril", "the companions", "The meaning is from Allah."],
          ["H", "A hasan hadith differs from a sahih hadith in that", "a narrator is slightly less accurate", "its chain is broken", "it is fabricated", "it has only one narrator", "Both are accepted as proof."],
          ["H", "A hadith with a single narrator at some level of its chain is termed", "gharib", "mashhur", "mutawatir", "muttafaq alayh", "It is a kind of ahad report."],
          ["H", "A weak hadith is not used to establish a rule of law because", "its attribution to the Prophet is not sufficiently established", "it is always false", "it contradicts the Qur'an", "it was narrated by women", "A condition of acceptance is missing."],
        ],
      },
      {
        week: 3,
        title: "Selected Hadith: innovation, the lawful and the doubtful, sincerity and obedience",
        subtopics: ["Hadith 5: innovation", "Hadith 6: the lawful, the unlawful and the doubtful", "Hadith 7: religion is sincerity", "Hadith 9: obedience without hardship"],
        objectives: ["Explain the Hadith on innovation in religion", "Explain the Hadith on the lawful and the doubtful", "Explain the Hadith on sincerity", "Explain the Hadith on obedience according to ability"],
        lesson: {
          title: "Guarding the Religion and the Heart",
          summary: "Study four of an-Nawawi's Forty Hadith and their lessons.",
          minutes: 40,
          notes: `## Hadith 5 — innovation
Narrated by **A'ishah**; al-Bukhari and Muslim. In summary: **whoever introduces into this affair of ours something that does not belong to it, it is rejected**.
### Lessons
- acts of worship must follow the **Qur'an and Sunnah**
- **bid'ah** is an invented practice in religion with no basis in them; it is rejected however good the intention
- worship needs two conditions: **sincerity** (Hadith 1) and **conformity** to the Sunnah (Hadith 5)
- worldly inventions — vehicles, schools, technology — are not meant; they are judged by their benefit and lawfulness

## Hadith 6 — the lawful, the unlawful and the doubtful
Narrated by **an-Nu'man ibn Bashir**; al-Bukhari and Muslim. In summary: **the lawful is clear and the unlawful is clear, and between them are doubtful matters** which many people do not know. Whoever **avoids the doubtful** keeps his religion and honour clean; whoever falls into them falls into the unlawful — like a **shepherd grazing around a sanctuary**, who will soon graze in it. Every king has a sanctuary, and Allah's sanctuary is His **prohibitions**. In the body is a **piece of flesh**: if it is sound, the whole body is sound; if corrupt, the whole body is corrupt — it is the **heart**.
### Lessons
- three categories: **halal**, **haram**, **mushtabihat** (doubtful)
- **wara'** — scrupulousness: leave what is doubtful
- small steps lead to great sins; keep a safe distance
- reform begins with the **heart**

## Hadith 7 — religion is sincerity
Narrated by **Tamim ad-Dari**; Muslim. In summary: "**Religion is nasihah** (sincerity and good counsel)." They asked, "To whom?" He said, "**To Allah, His Book, His Messenger, the leaders of the Muslims and their common people.**"
### Lessons
- to **Allah**: believe, worship Him alone
- to His **Book**: recite, understand, act
- to His **Messenger**: believe, obey, love
- to **leaders**: support them in what is right, advise them politely, do not deceive or rebel unjustly
- to the **people**: wish them well, teach, help, do not cheat

## Hadith 9 — obedience according to ability
Narrated by **Abu Hurayrah**; al-Bukhari and Muslim. In summary: **what I have forbidden you, avoid; what I have commanded you, do as much of it as you can**. Those before you were destroyed by their **excessive questioning** and their **disagreement with their prophets**.
### Lessons
- prohibitions are to be left **completely**; commands are fulfilled **according to ability** (e.g. praying seated if unable to stand)
- Islam does not burden a soul beyond its capacity
- avoid needless, hair-splitting questions and argument
- follow the Prophet without objection`,
          examples: `**Example 1.** What is bid'ah? *Answer:* An **invented practice in religion** with no basis in the Qur'an or Sunnah.

**Example 2.** Which organ determines the soundness of the whole body? *Answer:* The **heart**.

**Example 3.** To whom is nasihah due? *Answer:* **Allah, His Book, His Messenger, the leaders and the common people**.`,
        },
        questions: [
          ["E", "An invented practice in religion with no basis in the Qur'an or Sunnah is", "bid'ah", "sunnah", "fard", "ijma", "It is rejected."],
          ["E", "According to Hadith 6, the piece of flesh on which the body's soundness depends is the", "heart", "tongue", "liver", "brain", "If it is sound, the whole body is sound."],
          ["E", "The Hadith 'Religion is nasihah' was narrated by", "Tamim ad-Dari", "A'ishah", "Abu Hurayrah", "an-Nu'man ibn Bashir", "It is recorded by Muslim."],
          ["M", "Matters that lie between the clearly lawful and the clearly unlawful are called", "mushtabihat", "muharramat", "mubahat", "wajibat", "Many people do not know their ruling."],
          ["M", "The Hadith on innovation was narrated by", "A'ishah", "Umar", "Anas", "Abu Dharr", "It is the fifth of an-Nawawi's forty."],
          ["M", "According to Hadith 9, what the Prophet commanded should be done", "as much as one is able", "only when convenient", "only by scholars", "once in a lifetime", "What he forbade must be avoided entirely."],
          ["M", "In Hadith 6, the one who falls into doubtful matters is compared to", "a shepherd grazing around a sanctuary", "a traveller without water", "a house on sand", "a blind man on a road", "He will soon graze inside it."],
          ["H", "Taking Hadith 1 and Hadith 5 together, an act of worship is accepted only if it is", "sincere and in conformity with the Sunnah", "performed in public", "long and difficult", "approved by a ruler", "Intention and correctness are both required."],
          ["H", "Earlier communities were destroyed, according to Hadith 9, by", "excessive questioning and disagreeing with their prophets", "poverty and disease", "trade and travel", "learning and writing", "The Prophet warned his followers against this."],
          ["H", "Nasihah to the leaders of the Muslims means", "supporting them in what is right and advising them sincerely", "obeying them in sin", "flattering them", "overthrowing them at will", "They are neither deceived nor blindly followed."],
        ],
      },
      {
        week: 4,
        title: "Tawhid in depth: its categories and what opposes it",
        subtopics: ["The categories of Tawhid", "Major and minor shirk", "Kufr and its forms", "Nifaq"],
        objectives: ["Explain the three categories of Tawhid", "Distinguish major from minor shirk", "Explain kufr and its forms", "Explain nifaq and its signs"],
        lesson: {
          title: "Pure Monotheism",
          summary: "Analyse the categories of Tawhid and the beliefs and acts that contradict it.",
          minutes: 40,
          notes: `## The categories of Tawhid
Scholars explain Tawhid under three headings:
1. **Tawhidur-Rububiyyah** — Oneness of **Lordship**: Allah alone **creates, owns, sustains and controls** all things. Even the pagan Arabs admitted this (Qur'an 31:25), yet it did not make them Muslims.
2. **Tawhidul-Uluhiyyah** (or *al-Ibadah*) — Oneness of **worship**: prayer, supplication, sacrifice, vows, reliance, fear and hope are directed to **Allah alone**. This was the point of dispute between the prophets and their peoples — the meaning of *la ilaha illallah*.
3. **Tawhidul-Asma' was-Sifat** — Oneness of **names and attributes**: Allah is described as He and His Messenger described Him, without likening Him to creation — "**There is nothing like Him**, and He is the All-Hearing, the All-Seeing" (42:11).

## Shirk
Associating partners with Allah in what belongs to Him alone.
- **Major shirk** (*ash-shirkul-akbar*) — takes a person out of Islam and is not forgiven without repentance (4:48): worshipping idols, praying to the dead, sacrificing to jinn or shrines, believing others control the universe
- **Minor shirk** (*ash-shirkul-asghar*) — a grave sin that does not take one out of Islam but leads towards major shirk:
  - **riya'** — doing worship to be seen
  - **swearing by other than Allah**
  - saying "what Allah wills and you will"
  - wearing **charms and amulets** believing they are causes of protection

## Practices to avoid
consulting **soothsayers and fortune-tellers**; **magic** (sihr); belief in omens; visiting oracles; using talismans. The Prophet said that whoever goes to a fortune-teller and believes him has disbelieved in what was revealed to Muhammad.

## Kufr
**Disbelief** — rejecting or covering the truth. Forms include:
- **denial** (*takdhib*)
- **arrogant refusal** though one knows the truth — like **Iblis**
- **doubt**
- **turning away**
- **hypocrisy**
**Minor kufr** (ingratitude, *kufrun-ni'mah*) is a sin short of apostasy. Declaring a particular Muslim a disbeliever (**takfir**) is a grave matter for qualified scholars and courts, not individuals.

## Nifaq (hypocrisy)
- **in belief** — showing Islam while hiding disbelief: the worst state; such people are "in the **lowest depth of the Fire**" (4:145)
- **in action** — having a hypocrite's traits while believing: **lying, breaking promises, betraying trust**, and behaving wickedly in disputes

## Fruits of pure Tawhid
freedom from superstition and fear of creatures; dignity; reliance on Allah; unity of mankind; sincerity; safety in the Hereafter.`,
          examples: `**Example 1.** Which category of Tawhid concerns worship? *Answer:* **Tawhidul-Uluhiyyah**.

**Example 2.** Give one example of minor shirk. *Answer:* **Riya'** (or swearing by other than Allah).

**Example 3.** Where does the Qur'an place the hypocrites in belief? *Answer:* In the **lowest depth of the Fire**.`,
        },
        questions: [
          ["E", "Belief that Allah alone creates and sustains all things is Tawhid of", "Lordship", "worship", "names", "prophethood", "It is called Tawhidur-Rububiyyah."],
          ["E", "Hypocrisy in Arabic is", "nifaq", "kufr", "shirk", "fisq", "The hypocrite hides disbelief."],
          ["E", "Showing off in acts of worship is an example of", "minor shirk", "major shirk", "kufr", "bid'ah only", "It is called riya'."],
          ["M", "Directing prayer, sacrifice and vows to Allah alone is the meaning of", "Tawhidul-Uluhiyyah", "Tawhidur-Rububiyyah", "Tawhidul-Asma' was-Sifat", "Tawhidul-Hakimiyyah only", "It is the Oneness of worship."],
          ["M", "The verse 'There is nothing like Him' is a basis for Tawhid of", "names and attributes", "Lordship", "worship", "law", "Allah is not likened to His creation."],
          ["M", "Which of these is an act of major shirk?", "sacrificing an animal to a shrine", "swearing by one's father", "praying to impress people", "neglecting Sunnah prayers", "Sacrifice is worship due to Allah alone."],
          ["M", "The refusal of Iblis to prostrate is an example of kufr through", "arrogance", "doubt", "ignorance", "forgetfulness", "He knew the truth but refused."],
          ["H", "The pagan Arabs admitted that Allah was the Creator yet were not counted as Muslims because they", "directed worship to others besides Him", "denied the existence of Allah", "refused to trade", "rejected the Ka'bah", "Tawhid of Lordship alone is not enough."],
          ["H", "The Qur'an places hypocrites in belief in the lowest depth of the Fire because they", "combine disbelief with deception of the believers", "were poor", "did not fight", "lived in Madinah", "They are more dangerous than open enemies."],
          ["H", "Wearing an amulet in the belief that it is a means of protection is classed as minor shirk because it", "attaches reliance to something Allah has not made a cause", "is expensive", "is an Arab custom", "is done by children", "Trust belongs to Allah."],
        ],
      },
      {
        week: 5,
        title: "The sources of the Shari'ah and the classification of acts",
        subtopics: ["Meaning and aims of the Shari'ah", "Primary sources: Qur'an and Sunnah", "Secondary sources: Ijma and Qiyas", "The five rulings"],
        objectives: ["Explain the meaning and aims of the Shari'ah", "Explain the Qur'an and Sunnah as primary sources", "Explain Ijma and Qiyas with examples", "Classify human acts under the five rulings"],
        lesson: {
          title: "How Islamic Law Is Derived",
          summary: "Explain the sources of Islamic law and the categories of legal rulings.",
          minutes: 40,
          notes: `## Meaning
**Shari'ah** literally means "a path to water". It is the **divine law** governing a Muslim's worship, dealings and conduct. **Fiqh** is human understanding and detailed derivation of that law by scholars.

## Aims of the Shari'ah (Maqasid)
It protects five essentials:
1. **religion**
2. **life**
3. **intellect**
4. **lineage / family**
5. **property**
Thus it forbids apostasy, murder, intoxicants, fornication and theft, and commands what preserves each.

## Primary sources
### 1. The Qur'an
The first and highest source. It gives beliefs, morals and laws — some in detail (inheritance), others in general terms (prayer).
### 2. The Sunnah
It **explains** the Qur'an (how to pray), **specifies** the general, **restricts** the absolute, and **adds** rulings not mentioned in it (e.g. Zakatul-Fitr). "Whatever the Messenger gives you, take it; and whatever he forbids you, abstain" (59:7).

When the Prophet sent **Mu'adh ibn Jabal** to Yemen, he asked how he would judge. Mu'adh said: by the **Book of Allah**; if not found, by the **Sunnah**; if not found, "**I will exert my own judgement**" (ijtihad). The Prophet approved.

## Secondary sources
### 3. Ijma (consensus)
The **agreement of the qualified scholars** (mujtahidun) of the Muslim community, after the Prophet, on a ruling. Example: the companions' agreement to **compile the Qur'an** in one volume, and to fight those who withheld Zakah.
### 4. Qiyas (analogy)
Extending a ruling from an original case to a new one because they share the same **effective cause** (*illah*). Its four pillars: the **original case** (asl), the **new case** (far'), the **ruling** (hukm), and the **cause** (illah).
Example: **wine** is forbidden because it **intoxicates**; **hard drugs** intoxicate; therefore they are forbidden.

### Other methods used by scholars
**istihsan** (juristic preference), **maslahah mursalah** (public interest), **urf** (sound custom), **istishab** (presumption of continuity).

## Ijtihad and Taqlid
- **Ijtihad** — a qualified scholar's utmost effort to derive a ruling
- **Taqlid** — a layperson following a qualified scholar

## The five rulings (al-Ahkamul-Khamsah)
| Ruling | Meaning | Example |
|---|---|---|
| **Fard / Wajib** | obligatory: rewarded if done, sinful if left | five daily prayers |
| **Mandub / Sunnah** | recommended: rewarded if done, no sin if left | Witr, siwak |
| **Mubah** | permitted: neither reward nor sin in itself | choosing lawful food |
| **Makruh** | disliked: rewarded for leaving, no sin if done | wasting water in wudu |
| **Haram** | forbidden: sinful if done, rewarded for leaving | theft, wine |
Fard is of two kinds: **fard ayn** (on every individual) and **fard kifayah** (communal).`,
          examples: `**Example 1.** Name the two primary sources of the Shari'ah. *Answer:* The **Qur'an and the Sunnah**.

**Example 2.** Why are hard drugs forbidden by Qiyas? *Answer:* They share the **cause of intoxication** with wine.

**Example 3.** What ruling applies to the Witr prayer? *Answer:* **Mandub** (recommended).`,
        },
        questions: [
          ["E", "The first source of the Shari'ah is", "the Qur'an", "Ijma", "Qiyas", "custom", "It is the word of Allah."],
          ["E", "An act that is forbidden is termed", "haram", "mubah", "mandub", "makruh", "Doing it is sinful."],
          ["E", "The agreement of qualified scholars on a ruling is called", "Ijma", "Qiyas", "Ijtihad", "Taqlid", "It is the third source."],
          ["M", "The companion sent to Yemen who said he would use his own judgement if he found no text was", "Mu'adh ibn Jabal", "Abu Musa al-Ash'ari", "Ali ibn Abi Talib", "Amr ibn al-As", "The Prophet approved his answer."],
          ["M", "In Qiyas, the common factor linking the original case and the new case is the", "illah", "asl", "far'", "hukm", "It is the effective cause of the ruling."],
          ["M", "An act that is rewarded if done but carries no sin if omitted is", "mandub", "fard", "makruh", "haram", "It is also called Sunnah or mustahabb."],
          ["M", "The five essentials protected by the Shari'ah include religion, life, intellect, lineage and", "property", "fame", "leisure", "tribe", "Theft is forbidden to protect it."],
          ["H", "The prohibition of hard drugs by analogy with wine is an application of", "Qiyas", "Ijma", "Istishab", "Taqlid", "Both share the cause of intoxication."],
          ["H", "The Sunnah's role in relation to the command to pray in the Qur'an is to", "explain how the general command is carried out", "cancel the command", "repeat it without detail", "replace it with fasting", "The Prophet demonstrated the prayer."],
          ["H", "The funeral prayer is fard kifayah, which means that", "the duty is discharged if enough people perform it", "every Muslim must attend each one", "it is merely recommended", "only scholars may perform it", "If none performs it, all are sinful."],
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
        title: "The four Sunni schools of law",
        subtopics: ["Imam Abu Hanifah", "Imam Malik", "Imam ash-Shafi'i", "Imam Ahmad ibn Hanbal"],
        objectives: ["Describe the life and method of Imam Abu Hanifah", "Describe the life and method of Imam Malik", "Describe the life and method of Imam ash-Shafi'i", "Describe the life and method of Imam Ahmad"],
        lesson: {
          title: "The Great Jurists",
          summary: "Outline the lives and contributions of the founders of the four schools of law.",
          minutes: 40,
          notes: `## Why schools of law arose
After the companions, Islam spread to many lands with new situations. Great scholars derived rulings from the Qur'an and Sunnah by **ijtihad**. Their students recorded and developed their methods; these became the **madhahib** (singular **madhhab**) — schools of law. They **agree on the fundamentals** and differ only in details.

## 1. Imam Abu Hanifah (80–150 AH)
- **an-Nu'man ibn Thabit**, born in **Kufah** (Iraq); a silk merchant known for honesty
- taught through discussion with his students; relied on the Qur'an, authentic Sunnah, the views of companions, then **qiyas** and **istihsan** (juristic preference)
- his school is called the school of **reasoned opinion** (*ahlur-ra'y*)
- refused the post of chief judge and was imprisoned; died in **Baghdad**
- chief students: **Abu Yusuf** and **Muhammad ash-Shaybani**
- **Hanafi** school: widespread in Turkey, Central and South Asia

## 2. Imam Malik (93–179 AH)
- **Malik ibn Anas**, born, lived and died in **Madinah**; called *Imam Darul-Hijrah*
- compiled **al-Muwatta**, the earliest surviving book of Hadith and law
- gave weight to the **practice of the people of Madinah**, as living Sunnah, and to public interest (*maslahah*)
- famous for saying "**I do not know**" when unsure, and for reverence when narrating Hadith
- **Maliki** school: predominant in **North and West Africa, including Nigeria**

## 3. Imam ash-Shafi'i (150–204 AH)
- **Muhammad ibn Idris ash-Shafi'i**, born in **Gaza**, raised in Makkah; of the Quraysh
- memorised the Qur'an as a child and al-Muwatta soon after; studied under **Malik**, and in Iraq under ash-Shaybani
- wrote **ar-Risalah**, the first systematic work on **Usulul-Fiqh** (principles of jurisprudence), and **al-Umm**
- combined the methods of Madinah and Iraq; died in **Egypt**
- **Shafi'i** school: East Africa, Egypt, South-East Asia

## 4. Imam Ahmad ibn Hanbal (164–241 AH)
- born and died in **Baghdad**; student of ash-Shafi'i
- compiled **al-Musnad**, containing about thirty thousand hadith
- adhered closely to texts and the statements of the companions
- stood firm during the **mihnah** (inquisition) when the caliph demanded that scholars say the Qur'an was created; he was flogged and imprisoned but did not yield
- **Hanbali** school: Arabian peninsula

## Their attitude
Each imam taught that if an authentic hadith contradicted his view, the hadith should be followed. They respected and learned from one another.

## Lessons
diversity in details is a mercy and not a cause for hatred; follow qualified scholarship; seek knowledge with humility; stand firm on principle.`,
          examples: `**Example 1.** Which school is predominant in Nigeria? *Answer:* The **Maliki** school.

**Example 2.** Who wrote ar-Risalah? *Answer:* **Imam ash-Shafi'i**.

**Example 3.** Which imam was tried during the mihnah? *Answer:* **Imam Ahmad ibn Hanbal**.`,
        },
        questions: [
          ["E", "The school of law predominant in West Africa is the", "Maliki", "Hanafi", "Shafi'i", "Hanbali", "Imam Malik lived in Madinah."],
          ["E", "The personal name of Imam Abu Hanifah was", "an-Nu'man ibn Thabit", "Malik ibn Anas", "Muhammad ibn Idris", "Ahmad ibn Muhammad", "He was born in Kufah."],
          ["E", "A school of Islamic law is called a", "madhhab", "minbar", "mihrab", "mushaf", "The plural is madhahib."],
          ["M", "Ar-Risalah, the first systematic work on the principles of jurisprudence, was written by", "ash-Shafi'i", "Malik", "Abu Hanifah", "Ahmad ibn Hanbal", "He is regarded as the founder of Usulul-Fiqh."],
          ["M", "The imam who gave special weight to the practice of the people of Madinah was", "Malik", "Abu Hanifah", "ash-Shafi'i", "Ahmad", "He regarded it as living Sunnah."],
          ["M", "The two chief students of Abu Hanifah were Abu Yusuf and", "Muhammad ash-Shaybani", "Ibn Shihab az-Zuhri", "Ibn Majah", "al-Bukhari", "They recorded and developed his teaching."],
          ["M", "Imam ash-Shafi'i was born in", "Gaza", "Madinah", "Kufah", "Baghdad", "He was raised in Makkah."],
          ["H", "Imam Ahmad ibn Hanbal was flogged and imprisoned because he", "refused to say that the Qur'an was created", "refused to pay tax", "led a rebellion", "wrote al-Musnad", "The trial is known as the mihnah."],
          ["H", "The schools of law differ from one another mainly in", "details of rulings, not in the fundamentals of faith", "belief in Allah", "the text of the Qur'an", "the number of pillars of Islam", "All rely on the Qur'an and Sunnah."],
          ["H", "The imams' instruction to follow an authentic hadith over their own opinion shows that they", "placed the Sunnah above personal views", "doubted their own knowledge entirely", "rejected analogy", "forbade their students to think", "Their aim was the truth, not personal authority."],
        ],
      },
      {
        week: 2,
        title: "Kinds of prayer: obligatory, Sunnah and special prayers",
        subtopics: ["Classification of prayers", "Regular Sunnah and night prayers", "The Id prayers", "Prayers for special occasions"],
        objectives: ["Classify prayers into obligatory and voluntary", "Describe the regular Sunnah and night prayers", "Describe how the Id prayers are performed", "Describe the eclipse, rain and guidance prayers"],
        lesson: {
          title: "Drawing Near through Extra Worship",
          summary: "Explain the different kinds of prayer in Islam.",
          minutes: 40,
          notes: `## Classification
- **Fard ayn** — the five daily prayers and Jumu'ah
- **Fard kifayah** — the funeral prayer
- **Sunnah mu'akkadah** — emphasised Sunnah that the Prophet rarely left: Witr, the two Id prayers, the eclipse prayer, the two rak'ahs of Fajr
- **Nafl** — other voluntary prayers
A Hadith Qudsi says that a servant keeps drawing near to Allah through voluntary acts until Allah loves him. Voluntary prayers also make up for shortcomings in the obligatory ones.

## Regular Sunnah prayers (Rawatib)
Prayed before or after the obligatory prayers: two before **Subh**; before and after **Zuhr**; after **Maghrib**; after **Isha**. The two rak'ahs before Subh are described as better than the world and all it contains.

## Shaf' and Witr
After Isha, two rak'ahs (**Shaf'**) followed by a single rak'ah (**Witr**) — the last prayer of the night. Witr means "odd".

## Night and forenoon prayers
- **Tahajjud** (*Qiyamul-Layl*) — prayed after sleeping, best in the last third of the night
- **Tarawih** — in Ramadan
- **Duha** — after sunrise until before noon
- **Tahiyyatul-Masjid** — two rak'ahs on entering a mosque, before sitting

## The Id prayers
- **Idul-Fitr** (1 Shawwal) and **Idul-Adha** (10 Dhul-Hijjah)
- time: after sunrise until before noon; preferably in an open ground (**musalla**)
- **two rak'ahs**, with **no adhan or iqamah**
- **extra takbirs**: seven in the first rak'ah and five in the second (schools differ slightly on counting)
- recitation aloud; the **sermon comes after** the prayer (unlike Jumu'ah)
- Idul-Adha is followed by the **sacrifice** (udhiyah)

## Prayers for special occasions
- **Salatul-Kusuf** (solar eclipse) and **Khusuf** (lunar eclipse): two rak'ahs, each with **two standings and two bowings**, with long recitation. The Prophet taught that the sun and moon are **signs of Allah** and are not eclipsed for anyone's death or birth.
- **Salatul-Istisqa** (prayer for rain): two rak'ahs in the open, with a sermon, repentance and supplication in humility; the cloak is turned.
- **Salatul-Istikharah** (seeking guidance): two rak'ahs followed by a special supplication when deciding a lawful matter; then one proceeds, trusting Allah.
- **Salatul-Hajah** (need) and **Salatut-Tawbah** (repentance).
- **Sujudut-Tilawah** — prostration on reciting a verse of sajdah; **Sujudush-Shukr** — prostration of thanks.

## Times when voluntary prayer is disliked
after Subh until the sun has risen; when the sun is at its highest; after Asr until sunset.

## Benefits
closeness to Allah; forgiveness; perfecting the obligatory prayers; discipline; relief in difficulty.`,
          examples: `**Example 1.** What does Witr mean? *Answer:* **Odd** — a single rak'ah ending the night prayers.

**Example 2.** When is the sermon given at Id? *Answer:* **After** the prayer.

**Example 3.** Which prayer is offered when choosing between lawful options? *Answer:* **Salatul-Istikharah**.`,
        },
        questions: [
          ["E", "The prayer performed to ask Allah for rain is", "Salatul-Istisqa", "Salatul-Kusuf", "Salatul-Istikharah", "Salatud-Duha", "It is prayed in the open with supplication."],
          ["E", "Witr means", "odd", "even", "night", "dawn", "It closes the night prayers."],
          ["E", "Two rak'ahs offered on entering a mosque are called", "Tahiyyatul-Masjid", "Tahajjud", "Tarawih", "Rawatib", "They are prayed before sitting."],
          ["M", "The prayer performed during an eclipse of the sun is", "Salatul-Kusuf", "Salatul-Istisqa", "Salatul-Hajah", "Salatul-Janazah", "Each rak'ah has two bowings."],
          ["M", "In the Id prayer, the sermon is delivered", "after the prayer", "before the prayer", "between the rak'ahs", "at night", "This is the opposite of Jumu'ah."],
          ["M", "The voluntary prayer offered at night after sleeping is", "Tahajjud", "Duha", "Witr only", "Shaf'", "It is best in the last third of the night."],
          ["M", "Idul-Adha is celebrated on the", "10th of Dhul-Hijjah", "1st of Shawwal", "9th of Dhul-Hijjah", "12th of Rabi'ul-Awwal", "It is followed by the sacrifice."],
          ["H", "The Prophet's teaching that eclipses do not occur for anyone's death or birth was meant to", "remove superstition and direct people to Allah", "stop people from praying", "explain the calendar", "honour his son", "The sun and moon are signs of Allah."],
          ["H", "Voluntary prayers benefit a Muslim on the Day of Judgement because they", "make up for shortcomings in the obligatory prayers", "replace the obligatory prayers", "cancel the need for Zakah", "are recorded as fard", "They also bring him nearer to Allah."],
          ["H", "A student unsure which of two lawful courses to choose should, according to the Sunnah,", "pray Istikharah and then proceed with trust in Allah", "consult a fortune-teller", "cast lots with arrows", "wait for a dream before acting", "It is two rak'ahs with a special supplication."],
        ],
      },
      {
        week: 3,
        title: "The Prophet as a model of character and leadership",
        subtopics: ["The Prophet's character in the Qur'an", "Mercy, humility and forgiveness", "Justice and consultation", "Family and social life"],
        objectives: ["State what the Qur'an says about the Prophet's character", "Illustrate his mercy, humility and forgiveness", "Illustrate his justice and practice of consultation", "Describe his conduct in family and social life"],
        lesson: {
          title: "An Excellent Example",
          summary: "Examine the character and leadership qualities of the Prophet.",
          minutes: 40,
          notes: `## The Qur'an on his character
- "**You are truly of a great moral character**" (68:4)
- "**In the Messenger of Allah you have an excellent example** (*uswatun hasanah*)" (33:21)
- "We have sent you only as a **mercy to the worlds**" (21:107)
- "It was by the mercy of Allah that you were **gentle** with them; had you been harsh and hard-hearted, they would have dispersed from around you" (3:159)
Asked about his character, **A'ishah** replied, "**His character was the Qur'an.**"

## Truthfulness and trust
Known as **As-Sadiq al-Amin** before prophethood; even his enemies deposited valuables with him, which he returned at the Hijrah.

## Mercy
- to **children**: he carried his grandchildren in prayer and shortened the prayer on hearing a child cry
- to **animals**: he told of a woman punished for starving a cat and a person forgiven for giving water to a thirsty dog
- to **enemies**: at Ta'if he prayed for their guidance

## Humility and simplicity
He mended his own sandals and clothes, milked the goat, helped at home, sat on the floor, ate simple food and slept on a mat that marked his side. He disliked people standing for him and said, "**I am only a servant; call me the servant of Allah and His Messenger.**"

## Forgiveness
At the conquest of Makkah he pardoned those who had persecuted him for twenty years. He forgave **Wahshi**, who had killed Hamzah, when he accepted Islam.

## Justice
A woman of the noble clan of **Makhzum** stole, and people sought to intercede. He said that earlier nations were destroyed because they let the noble go and punished the weak: "**By Allah, if Fatimah the daughter of Muhammad were to steal, I would cut off her hand.**"

## Consultation (Shura)
Though he received revelation, he consulted his companions in worldly matters: the camp at **Badr**, going out at **Uhud**, the **trench**. Allah commanded: "**Consult them in the matter**" (3:159).

## Courage and patience
He stood firm at Uhud and Hunayn; bore boycott, loss and insult for years.

## Family life
"**The best of you is the best to his family**, and I am the best of you to my family." He was kind and playful with his wives, never struck a woman or a servant; his servant **Anas** said that in ten years he never once said "uff" to him.

## As a leader
He taught by example, trained others to lead, kept his word even to enemies, lived as the poorest of his people and left no wealth.

## Lessons
follow him in honesty, mercy, humility and fairness — at home, in school and in public life.`,
          examples: `**Example 1.** How did A'ishah describe his character? *Answer:* "**His character was the Qur'an.**"

**Example 2.** What did he say about the theft by the woman of Makhzum? *Answer:* Even **Fatimah** would be punished if she stole — justice applies to all.

**Example 3.** Give one instance of his consulting others. *Answer:* The **trench** at Khandaq (or the camp at Badr).`,
        },
        questions: [
          ["E", "The Qur'an describes the Prophet as an excellent", "example", "poet", "king", "merchant", "The phrase is uswatun hasanah."],
          ["E", "A'ishah said that the Prophet's character was", "the Qur'an", "like a king's", "that of a soldier", "hidden from people", "He lived what it taught."],
          ["E", "The Prophet was sent, according to the Qur'an, as a mercy to", "the worlds", "the Arabs only", "the Quraysh only", "the believers only", "His mercy reached people and animals."],
          ["M", "The servant who said the Prophet never rebuked him in ten years was", "Anas ibn Malik", "Zayd ibn Harithah", "Bilal ibn Rabah", "Abu Hurayrah", "He served him in Madinah."],
          ["M", "The Prophet's statement about Fatimah and theft teaches", "equality of all before the law", "the harshness of punishment", "the wealth of his family", "the weakness of women", "The noble and the weak are judged alike."],
          ["M", "The Qur'an says that had the Prophet been harsh and hard-hearted, the people would have", "dispersed from around him", "obeyed him more", "made him king", "fought the Quraysh sooner", "Gentleness holds a community together."],
          ["M", "The Prophet said, 'The best of you is the best to his", "family'", "tribe'", "ruler'", "trade'", "He was himself the best to his family."],
          ["H", "The fact that the Prophet consulted his companions although he received revelation shows that", "consultation is a principle of leadership in worldly affairs", "revelation was incomplete", "he lacked confidence", "the companions were prophets", "The Qur'an commanded him to consult them."],
          ["H", "The story of the woman punished for starving a cat illustrates the Islamic teaching on", "kindness to animals", "the rights of neighbours", "the rules of fasting", "the punishment for theft", "Cruelty to creatures is a sin."],
          ["H", "His pardon of Wahshi, who had killed Hamzah, shows that he", "put the acceptance of Islam above personal grief", "did not love his uncle", "feared the Quraysh", "wanted Wahshi's wealth", "He did not take personal revenge."],
        ],
      },
      {
        week: 4,
        title: "Modesty and decent conduct",
        subtopics: ["Haya' (modesty)", "Lowering the gaze and guarding chastity", "Islamic dress", "The prohibition of zina and what leads to it"],
        objectives: ["Explain the meaning and importance of haya'", "Explain the Qur'anic commands on the gaze and chastity", "State the requirements of Islamic dress", "Explain the prohibition of zina and its preventive measures"],
        lesson: {
          title: "Purity of Heart and Conduct",
          summary: "Explain Islamic teaching on modesty, dress and chastity.",
          minutes: 40,
          notes: `## Haya'
**Haya'** is modesty, shyness and a sense of shame that keeps a person from indecent acts. The Prophet said, "**Haya' is a branch of faith**," and "**If you feel no shame, do as you wish**." It applies to both sexes, in speech, dress and behaviour, in public and in private.

## The gaze and chastity (Suratun-Nur 24:30–31)
- believing **men** are told to **lower their gaze** and **guard their private parts**; "that is purer for them"
- believing **women** are told the same, and not to display their adornment except what ordinarily appears, to draw their **head-coverings over their bosoms**, and to show their adornment only to their husbands and close relatives (mahram)
The command to men comes first: modesty is a shared duty.

## Islamic dress
### For all
- covers the **awrah**
- **loose**, not tight; **thick enough** not to be transparent
- not worn to show off; clean and dignified
- men should not imitate women in dress, nor women men
### Awrah
- **male**: from the **navel to the knees**
- **female** before non-mahram men: the whole body except the **face and hands**
Suratul-Ahzab (33:59) tells believing women to draw their **outer garments** (*jalabib*) over themselves, "that they may be known and not harassed". Men are forbidden to wear **silk and gold**.

## Zina
**Zina** — sexual relations outside marriage — is a major sin. The Qur'an does not merely say "do not commit" it, but "**Do not come near to zina**; it is an indecency and an evil way" (17:32). Islamic law prescribes severe punishment for it, subject to strict proof.

### Things that lead to it — and are therefore forbidden
- lustful looking; pornography
- **khalwah** — a man and an unrelated woman being alone together
- indecent dress and talk
- free mixing without limits; touching
- intoxicants

### Islamic safeguards
lowering the gaze; modest dress; **marriage**, which the Prophet urged on young people who are able — "it lowers the gaze and guards chastity" — and **fasting** for those who cannot yet marry; good company; remembrance of Allah; useful occupation.

## Related offences
**Qadhf** (falsely accusing a chaste person of zina) is itself a major sin; homosexual acts, rape and sexual harassment are forbidden.

## Effects of immorality
broken families; children of unknown parentage; disease; abortion; loss of honour; crime.

## Application
choose decent clothes; avoid suggestive media; keep interactions respectful and purposeful; protect your own and others' reputation.`,
          examples: `**Example 1.** What is haya'? *Answer:* **Modesty** that restrains a person from indecency.

**Example 2.** What is the male awrah? *Answer:* From the **navel to the knees**.

**Example 3.** Why does the Qur'an say "do not come near" zina? *Answer:* To forbid **everything that leads to it** as well.`,
        },
        questions: [
          ["E", "Haya' means", "modesty", "bravery", "patience", "generosity", "It is a branch of faith."],
          ["E", "Sexual relations outside marriage are called", "zina", "riba", "qadhf", "khamr", "The Qur'an says do not come near it."],
          ["E", "The awrah of a male is from the navel to the", "knees", "ankles", "shoulders", "chest", "It must be covered in prayer and in public."],
          ["M", "The command to lower the gaze and guard chastity is found in Surah", "an-Nur", "al-Fatihah", "al-Fil", "al-Kawthar", "It is addressed first to men, then to women."],
          ["M", "Khalwah refers to", "a man and an unrelated woman being alone together", "retreat in the mosque", "the call to prayer", "a marriage feast", "It is forbidden as a step towards zina."],
          ["M", "For young people unable to marry, the Prophet recommended", "fasting", "travelling", "trading", "seclusion", "It helps to control desire."],
          ["M", "Falsely accusing a chaste person of zina is called", "qadhf", "ghibah", "namimah", "riya'", "It is a major sin with a prescribed punishment."],
          ["H", "The fact that the Qur'an addresses men first with the command to lower the gaze shows that", "modesty is a duty on men as well as women", "women are exempt", "only men commit sin", "the verse is for the Prophet alone", "Both sexes share the responsibility."],
          ["H", "The wording 'do not come near to zina' rather than 'do not commit zina' implies that", "the steps leading to it are also forbidden", "zina is only disliked", "the sin is unavoidable", "only married people are addressed", "Prevention is part of the law."],
          ["H", "A requirement of Islamic dress for both men and women is that it should", "be loose and not transparent", "be white", "be made of silk", "follow current fashion", "It must conceal the shape and colour of the body."],
        ],
      },
      {
        week: 5,
        title: "Intoxicants, gambling, usury and bribery",
        subtopics: ["Intoxicants and drugs", "Gambling", "Usury (riba)", "Bribery and corruption"],
        objectives: ["Explain the prohibition of intoxicants and its stages", "Explain the prohibition of gambling", "Explain the prohibition of riba", "Explain the Islamic position on bribery and corruption"],
        lesson: {
          title: "Protecting Mind, Wealth and Society",
          summary: "Explain four major social prohibitions in Islam and the wisdom behind them.",
          minutes: 40,
          notes: `## Intoxicants (khamr)
**Khamr** is anything that **clouds the mind**. The prohibition came in **three stages**:
1. **2:219** — in wine and gambling there is **great sin and some benefit** for people, but their **sin is greater** than their benefit
2. **4:43** — **do not approach prayer while intoxicated**
3. **5:90–91** — intoxicants, gambling, idols and divining arrows are "**an abomination of Satan's handiwork; so avoid it**"; Satan wants to stir up **enmity and hatred** and turn you from the remembrance of Allah and from prayer
The companions poured their wine into the streets of Madinah.

### Principles from the Sunnah
- "**Every intoxicant is khamr, and every khamr is haram.**"
- "**What intoxicates in large quantity is forbidden in small quantity.**"
- the curse covers not only the drinker but the one who **makes, carries, serves, sells and profits** from it
By **qiyas**, hard drugs — Indian hemp, cocaine, codeine and tramadol abuse — are also forbidden.

### Harm
loss of reason; disease; accidents and crime; poverty; broken homes; neglect of worship. Islamic law punishes drinking. Khamr is called "**the mother of all evils**".

## Gambling (maysir / qimar)
Any game or contract in which money is staked on **chance**, so that one gains at another's loss without fair exchange: betting, lotteries, pools, casinos. It is forbidden in the same verse as wine. Harm: addiction, debt, idleness, hatred, family ruin. Wealth must be earned by **work, trade or lawful gift**.

## Usury (riba)
**Riba** is any fixed **increase demanded on a loan**, or unequal exchange of the same kind of goods.
- "**Allah has permitted trade and forbidden riba**" (2:275)
- those who persist are warned of **war from Allah and His Messenger** (2:279); they are entitled only to their **capital**
- a debtor in difficulty should be given **time**, and to remit the debt is better (2:280)
- the Prophet cursed the one who **takes riba, gives it, records it and witnesses it**
### Why
it exploits the needy, concentrates wealth, rewards money without risk or effort. Alternatives: **interest-free loans** (qard hasan), **profit-and-loss partnership** (mudarabah, musharakah), fair sale.

## Bribery (rishwah) and corruption
- the Prophet **cursed the giver and the taker** of a bribe
- "**Do not consume one another's wealth unjustly, nor offer it to judges** to devour a portion of people's wealth sinfully" (2:188)
- includes embezzling public funds, inflating contracts, extortion, nepotism, examination malpractice
- public office is a **trust (amanah)**; a gift to an official because of his office belongs to the treasury
Effects: injustice, poverty, bad roads and hospitals, loss of trust.

## The common wisdom
These laws protect the **intellect**, **property**, **family** and **justice** — aims of the Shari'ah.`,
          examples: `**Example 1.** In how many stages was wine prohibited? *Answer:* **Three**.

**Example 2.** What does the Qur'an say about trade and riba? *Answer:* "**Allah has permitted trade and forbidden riba.**"

**Example 3.** Who is cursed in connection with bribery? *Answer:* **Both the giver and the taker**.`,
        },
        questions: [
          ["E", "Khamr refers to", "intoxicants", "usury", "gambling", "bribery", "It clouds the mind."],
          ["E", "The Arabic term for bribery is", "rishwah", "riba", "maysir", "qard", "Both giver and taker are cursed."],
          ["E", "The Qur'an permits trade and forbids", "riba", "profit", "partnership", "saving", "Riba is an increase demanded on a loan."],
          ["M", "The final and complete prohibition of intoxicants is found in Surah", "al-Ma'idah", "al-Baqarah", "an-Nisa'", "an-Nur", "It calls them an abomination of Satan's handiwork."],
          ["M", "The second stage of the prohibition told believers not to", "approach prayer while intoxicated", "sell wine to non-Muslims", "drink in public", "plant grapes", "This limited the times of drinking."],
          ["M", "According to the Sunnah, what intoxicates in large quantity is", "forbidden in small quantity", "allowed in small quantity", "allowed as medicine freely", "only disliked", "The door to it is closed."],
          ["M", "A game in which money is staked on chance is", "maysir", "mudarabah", "sadaqah", "ijarah", "It is forbidden with wine in the same verse."],
          ["H", "Those who persist in riba are warned in the Qur'an of", "war from Allah and His Messenger", "loss of harvest", "a short life", "exile from Makkah", "They may take back only their capital."],
          ["H", "An Islamic alternative to interest-based lending is", "profit-and-loss partnership", "a fixed charge on every loan", "betting on returns", "hoarding money", "Both parties share the risk."],
          ["H", "The four prohibitions studied — intoxicants, gambling, riba and bribery — together serve mainly to protect", "the intellect, property and justice in society", "the customs of the Arabs", "the wealth of rulers", "trade with foreign lands", "These are among the aims of the Shari'ah."],
        ],
      },
    ],
  },
];
