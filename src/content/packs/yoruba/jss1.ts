import type { TermPlan } from "../types";

/** JSS1 Yoruba — original Precious PS content following the national Basic Education structure. Explanations are given in English with Yoruba terms and examples. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The Yoruba people and their language",
        subtopics: ["Who the Yoruba are", "Where Yoruba is spoken", "Dialects and Standard Yoruba", "Why we study Yoruba"],
        objectives: ["Identify the Yoruba people and their homeland", "Name the states and countries where Yoruba is spoken", "Distinguish dialects from Standard Yoruba", "State reasons for studying Yoruba"],
        lesson: {
          title: "Àwọn Yorùbá àti èdè wọn",
          summary: "Meet the Yoruba people, their homeland and their language.",
          minutes: 40,
          notes: `## Who are the Yoruba?
The **Yorùbá** are one of the largest ethnic groups in Nigeria and in Africa. Their traditional homeland (**ilẹ̀ Yorùbá**) is in **south-western Nigeria**. Tradition traces their origin to **Ilé-Ifẹ̀**, regarded as the cradle of the Yoruba, and to their ancestor **Odùduwà**.

## Where is Yoruba spoken?
- in Nigeria: **Lagos, Ogun, Oyo, Osun, Ondo and Ekiti** States, and parts of **Kwara** and **Kogi** States
- outside Nigeria: in parts of the **Republic of Benin** and **Togo**
- traces of Yoruba language and religion survive in **Brazil, Cuba** and other parts of the Americas, carried there during the slave trade

## Dialects and Standard Yoruba
A **dialect** (**ẹ̀ka-èdè**) is a local variety of a language. Yoruba has many: **Ọ̀yọ́, Ẹ̀gbá, Ìjẹ̀bú, Èkìtì, Ìjẹ̀ṣà, Oǹdó, Ifẹ̀, Ìgbómìnà, Ọ̀wọ̀, Ìkálẹ̀, Àwórì** and others.
**Standard Yoruba** (**Yorùbá àjùmọ̀lò**) is the common form used in schools, books, newspapers and broadcasting. It is based mainly on the **Ọ̀yọ́** dialect. Bishop **Samuel Àjàyí Crowther** did early work in writing the language and translating the Bible into it.

## Why study Yoruba?
- to **speak, read and write** our mother tongue correctly
- to **preserve our culture** (**àṣà**) — greetings, proverbs, songs, stories
- to **communicate** with elders and neighbours
- for **unity** and understanding among Nigerians
- it is an examination subject and leads to **careers**: teaching, broadcasting, translation, writing, acting

## The three parts of the subject
1. **Èdè** — language (sounds, grammar, composition)
2. **Lítírésọ̀** — literature (stories, poems, plays, oral forms)
3. **Àṣà** — culture and customs`,
          examples: `**Example 1.** Which town is regarded as the cradle of the Yoruba? *Answer:* **Ilé-Ifẹ̀**.

**Example 2.** Name three states where Yoruba is the main language. *Answer:* **Oyo, Osun and Ondo** (also Lagos, Ogun and Ekiti).

**Example 3.** What is Standard Yoruba? *Answer:* The **common form of Yoruba used in schools, books and broadcasting**, based mainly on the Ọ̀yọ́ dialect.`,
        },
        questions: [
          ["E", "The town regarded as the cradle of the Yoruba people is", "Ilé-Ifẹ̀", "Kano", "Enugu", "Calabar", "Tradition says the Yoruba spread from there."],
          ["E", "The Yoruba homeland is in which part of Nigeria?", "the south-west", "the north-east", "the south-east", "the north-west", "It covers Lagos, Ogun, Oyo, Osun, Ondo and Ekiti."],
          ["E", "The ancestor from whom the Yoruba trace their origin is", "Odùduwà", "Bayajidda", "Eri", "Tsoede", "He is linked with Ilé-Ifẹ̀."],
          ["M", "Which of the following is a Yoruba-speaking state?", "Osun", "Sokoto", "Imo", "Bayelsa", "Its capital is Osogbo."],
          ["M", "A local variety of a language is called", "a dialect", "an alphabet", "a proverb", "a syllable", "Ẹ̀gbá and Ìjẹ̀bú are examples in Yoruba."],
          ["M", "Standard Yoruba is based mainly on the dialect of", "Ọ̀yọ́", "Ìkálẹ̀", "Ọ̀wọ̀", "Àwórì", "It is the form used in schools."],
          ["M", "Outside Nigeria, Yoruba is spoken in parts of", "the Republic of Benin and Togo", "Kenya and Uganda", "Egypt and Sudan", "Chad and Niger", "These are Nigeria's western neighbours."],
          ["H", "The clergyman noted for early work on writing Yoruba and translating the Bible into it was", "Samuel Àjàyí Crowther", "Herbert Macaulay", "Mungo Park", "Lord Lugard", "He was the first African Anglican bishop."],
          ["H", "The three parts of Yoruba as a school subject are", "language, literature and culture", "reading, sums and drawing", "history, geography and civics", "poetry, music and dance only", "They are èdè, lítírésọ̀ and àṣà."],
          ["H", "The Yoruba word 'àṣà' means", "culture and customs", "alphabet", "market", "language only", "It covers the way of life of the people."],
        ],
      },
      {
        week: 2,
        title: "The Yoruba alphabet",
        subtopics: ["The 25 letters", "Letters special to Yoruba", "Letters not used in Yoruba", "Reading the letters aloud"],
        objectives: ["Recite the Yoruba alphabet in order", "Identify the letters with a dot below and the digraph gb", "List English letters not used in Yoruba", "Write simple words with the correct letters"],
        lesson: {
          title: "Álífábẹ́ẹ̀tì Yorùbá",
          summary: "Learn the twenty-five letters of the Yoruba alphabet.",
          minutes: 40,
          notes: `## The Yoruba alphabet
The Yoruba alphabet (**álífábẹ́ẹ̀tì**) has **25 letters**:

**A B D E Ẹ F G GB H I J K L M N O Ọ P R S Ṣ T U W Y**

**a b d e ẹ f g gb h i j k l m n o ọ p r s ṣ t u w y**

## Letters special to Yoruba
| Letter | Sound | Example |
|---|---|---|
| **ẹ** | like "e" in *bed* | **ẹsẹ̀** (leg) |
| **ọ** | like "o" in *pot* | **ọmọ** (child) |
| **ṣ** | like "sh" in *shop* | **ṣe** (do) |
| **gb** | g and b sounded together | **gbogbo** (all) |

The **dot below** (**àmì ìsàlẹ̀**) changes the letter: **e** and **ẹ** are different letters; so are **o** and **ọ**, **s** and **ṣ**.
- **ẹja** (fish) but **eja** is not a word
- **ọkọ** (husband) but **oko** (farm)
- **ṣá** (cut) but **sá** (run)

**gb** is counted as **one letter**, although it is written with two symbols. It comes after **g**.

**p** in Yoruba is pronounced **"kp"** — k and p together: **pẹ́pẹ́yẹ** (duck).

## Letters not used in Yoruba
The English letters **c, q, v, x, z** are **not** in the Yoruba alphabet.

## Vowels and consonants
- **7 vowel letters**: a, e, ẹ, i, o, ọ, u
- **18 consonant letters**: b, d, f, g, gb, h, j, k, l, m, n, p, r, s, ṣ, t, w, y

## Simple words
| Yoruba | English |
|---|---|
| **ilé** | house |
| **omi** | water |
| **ajá** | dog |
| **ẹyẹ** | bird |
| **bàtà** | shoe |
| **ìwé** | book |
| **ọba** | king |

## Rule
Almost every Yoruba word **ends in a vowel** (or the nasal **n**). Yoruba does not allow two different consonants side by side as in English "school" — borrowed words are reshaped: **síkúùlù**.`,
          examples: `**Example 1.** How many letters are in the Yoruba alphabet? *Answer:* **25**.

**Example 2.** Which English letters are absent from Yoruba? *Answer:* **c, q, v, x and z**.

**Example 3.** Which letter comes immediately after **g**? *Answer:* **gb**.`,
        },
        questions: [
          ["E", "The Yoruba alphabet has", "25 letters", "26 letters", "24 letters", "30 letters", "It is one fewer than the English alphabet."],
          ["E", "Which of these letters is NOT in the Yoruba alphabet?", "z", "b", "k", "w", "The others are c, q, v and x."],
          ["E", "The Yoruba letter 'ṣ' is pronounced like the English", "sh", "s", "z", "ch", "As in the English word 'shop'."],
          ["M", "In the Yoruba alphabet, the letter that comes immediately after 'g' is", "gb", "h", "f", "j", "It is counted as one letter."],
          ["M", "The number of vowel letters in the Yoruba alphabet is", "seven", "five", "six", "nine", "They are a, e, ẹ, i, o, ọ, u."],
          ["M", "The dot written under some Yoruba letters is found under", "e, o and s", "a, i and u", "b, d and g", "m, n and r", "It gives ẹ, ọ and ṣ."],
          ["M", "The Yoruba letter 'p' is pronounced as", "kp", "f", "b", "ph", "The sounds k and p are made together."],
          ["H", "The number of consonant letters in the Yoruba alphabet is", "eighteen", "twenty", "twenty-one", "sixteen", "Twenty-five letters minus seven vowels."],
          ["H", "Which of the following groups contains only letters found in the Yoruba alphabet?", "gb, ṣ, ọ, y", "c, q, v, x", "z, b, d, f", "v, w, y, a", "The other groups each include a letter Yoruba lacks."],
          ["H", "The English word 'school' becomes 'síkúùlù' in Yoruba because Yoruba", "does not allow two different consonants side by side", "has no letter s", "has no vowels", "has no letter l", "Vowels are inserted to break up the cluster."],
        ],
      },
      {
        week: 3,
        title: "Vowels and consonants",
        subtopics: ["Oral vowels", "Nasal vowels", "Consonants", "Sounding out words"],
        objectives: ["List the seven oral vowels", "Identify the nasal vowels and how they are written", "Group the consonants", "Break simple words into their sounds"],
        lesson: {
          title: "Fáwẹ́lì àti kọ́ńsónáǹtì",
          summary: "Identify the vowel and consonant sounds of Yoruba.",
          minutes: 40,
          notes: `## Sounds of Yoruba
The sounds of the language (**ìró èdè**) are of two kinds:
- **fáwẹ́lì** — vowels: sounds made with the mouth open and the breath flowing freely
- **kọ́ńsónáǹtì** — consonants: sounds made when the breath is blocked or narrowed

## Oral vowels (fáwẹ́lì àìránmúpè)
There are **seven**: **a, e, ẹ, i, o, ọ, u**
| Vowel | Example | Meaning |
|---|---|---|
| a | **ata** | pepper |
| e | **ewé** | leaf |
| ẹ | **ẹ̀wà** | beans |
| i | **ilé** | house |
| o | **owó** | money |
| ọ | **ọwọ́** | hand |
| u | **ìlù** | drum |

## Nasal vowels (fáwẹ́lì àránmúpè)
These are pronounced **through the nose**. They are written with **n** after the vowel: **an, ẹn, in, ọn, un**
| Nasal vowel | Example | Meaning |
|---|---|---|
| an | **ìtàn** | story |
| ẹn | **ìyẹn** | that one |
| in | **irin** | iron |
| ọn | **ìbọn** | gun |
| un | **ẹ̀fun** | chalk |

The **n** here is **not** a separate consonant — it only shows that the vowel is nasal.

## Consonants (kọ́ńsónáǹtì)
There are **eighteen**: **b, d, f, g, gb, h, j, k, l, m, n, p, r, s, ṣ, t, w, y**
| Consonant | Example | Meaning |
|---|---|---|
| b | **bàbá** | father |
| d | **dúdú** | black |
| f | **fìlà** | cap |
| gb | **gbogbo** | all |
| j | **jẹ** | eat |
| k | **kọ** | write |
| m | **mu** | drink |
| r | **rà** | buy |
| ṣ | **ṣe** | do |
| w | **wá** | come |
| y | **yára** | be quick |

## Sounding out a word
**bàtà** = b + à + t + à (two consonants, two vowels)
**ọmọ** = ọ + m + ọ (two vowels, one consonant)

## Remember
- Yoruba has **no silent letters**: every letter is sounded.
- A vowel can stand alone as a word or syllable: **ó** (he/she), **a** (we).`,
          examples: `**Example 1.** List the seven oral vowels. *Answer:* **a, e, ẹ, i, o, ọ, u**.

**Example 2.** How are nasal vowels written? *Answer:* With **n after the vowel** — an, ẹn, in, ọn, un.

**Example 3.** How many consonants and vowels are in **bàtà**? *Answer:* **Two consonants** (b, t) and **two vowels** (à, à).`,
        },
        questions: [
          ["E", "The Yoruba term for 'vowel' is", "fáwẹ́lì", "kọ́ńsónáǹtì", "sílébù", "gbólóhùn", "Vowels are made with the breath flowing freely."],
          ["E", "Which of the following is a Yoruba vowel?", "ẹ", "gb", "ṣ", "k", "The others are consonants."],
          ["E", "The Yoruba term for 'consonant' is", "kọ́ńsónáǹtì", "fáwẹ́lì", "àmì ohùn", "òwe", "There are eighteen of them."],
          ["M", "The number of oral vowels in Yoruba is", "7", "5", "12", "18", "They are a, e, ẹ, i, o, ọ and u."],
          ["M", "Nasal vowels in Yoruba are written by adding which letter after the vowel?", "n", "m", "h", "y", "As in an, in and un."],
          ["M", "Which of the following words contains a nasal vowel?", "ìtàn", "ilé", "omi", "ajá", "The final 'an' is pronounced through the nose."],
          ["M", "How many consonants are in the word 'bàtà'?", "two", "one", "three", "four", "They are b and t."],
          ["H", "Which of the following lists contains only nasal vowels?", "an, in, un", "a, e, i", "b, d, f", "gb, ṣ, p", "Each is a vowel followed by n."],
          ["H", "In the word 'ìbọn' (gun), the letter 'n' shows that", "the vowel before it is nasal", "the word is plural", "the word is a verb", "the tone is high", "It is not pronounced as a separate consonant."],
          ["H", "Which statement about Yoruba spelling is correct?", "Every letter written is sounded", "Many letters are silent", "Words usually end in two consonants", "Vowels cannot stand alone", "Yoruba has no silent letters."],
        ],
      },
      {
        week: 4,
        title: "Tones and tone marks",
        subtopics: ["The three tones", "Tone marks", "Tone changes meaning", "Marking tones on words"],
        objectives: ["Name the three tones of Yoruba", "Identify the mark used for each tone", "Show how tone changes the meaning of a word", "Place tone marks on simple words"],
        lesson: {
          title: "Àmì ohùn",
          summary: "Learn the three Yoruba tones and how to mark them.",
          minutes: 40,
          notes: `## Yoruba is a tone language
In Yoruba the **pitch of the voice** on each syllable is part of the word. Change the tone and you change the meaning. This pitch is called **ohùn** (tone), and the signs that show it are **àmì ohùn** (tone marks).

## The three tones
| Tone | Yoruba name | Musical note | Mark | Example |
|---|---|---|---|---|
| **low** | ohùn ìsàlẹ̀ | **dò** | grave accent (a stroke slanting down to the right) on the vowel: **à** | **bà** |
| **mid** | ohùn àárín | **re** | no mark: **a** | **ba** |
| **high** | ohùn òkè | **mi** | acute accent (a stroke slanting up to the right) on the vowel: **á** | **bá** |

So the three tones are remembered as **dò – re – mi**.

## Where the mark goes
Tone marks are placed **on vowels** (and on the syllabic nasals **n** and **m**). The mid tone is normally left unmarked.

## Tone changes meaning
| Word | Tones | Meaning |
|---|---|---|
| **igbá** | re – mi | calabash |
| **igba** | re – re | two hundred |
| **ìgbà** | dò – dò | time, season |
| **ọkọ** | re – re | husband |
| **ọkọ́** | re – mi | hoe |
| **ọkọ̀** | re – dò | vehicle, canoe |
| **owó** | re – mi | money |
| **òwò** | dò – dò | trade |
| **ọwọ́** | re – mi | hand |
| **ọ̀wọ̀** | dò – dò | respect |

The letters are the same; **only the tones differ**. This is why writing Yoruba without tone marks can confuse the reader.

## Tone pattern of some common words
- **bàbá** (father): dò – mi
- **ìyá** (mother): dò – mi
- **ọmọ** (child): re – re
- **ilé** (house): re – mi
- **bàtà** (shoe): dò – dò
- **wá** (come): mi

## How to mark a word
1. Say the word slowly, syllable by syllable.
2. Hum each syllable as **dò, re or mi**.
3. Put the **grave accent** for dò, **nothing** for re, and the **acute accent** for mi.

## Tone and the dot below
A vowel may carry **both** a dot below and a tone mark: **ẹ̀**, **ọ́**. The dot belongs to the letter; the mark belongs to the tone.`,
          examples: `**Example 1.** Name the three tones of Yoruba. *Answer:* **Low (dò), mid (re) and high (mi)**.

**Example 2.** Give the tone pattern of **bàbá**. *Answer:* **dò – mi** (low, then high).

**Example 3.** What is the difference between **ọkọ** and **ọkọ̀**? *Answer:* **ọkọ** (re–re) means **husband**; **ọkọ̀** (re–dò) means **vehicle**.`,
        },
        questions: [
          ["E", "The number of basic tones in Yoruba is", "three", "two", "five", "seven", "They are low, mid and high."],
          ["E", "The Yoruba term for 'tone marks' is", "àmì ohùn", "fáwẹ́lì", "álífábẹ́ẹ̀tì", "òǹkà", "They show the pitch of each syllable."],
          ["E", "The three Yoruba tones are remembered with the musical notes", "dò, re, mi", "fa, so, la", "ti, do, re", "so, la, ti", "Low is dò, mid is re and high is mi."],
          ["M", "The high tone in Yoruba is represented by", "an acute mark slanting upward on the vowel", "a dot under the vowel", "a grave mark slanting downward", "no mark at all", "As in á. Answer: an acute mark slanting upward on the vowel."],
          ["M", "The tone that is normally left unmarked in Yoruba writing is the", "mid tone", "high tone", "low tone", "falling tone", "It is the 're' tone."],
          ["M", "In Yoruba, tone marks are placed on", "vowels", "the letter gb", "every consonant", "capital letters only", "They may also sit on a syllabic nasal."],
          ["M", "The tone pattern of the word 'bàbá' (father) is", "dò – mi", "mi – mi", "re – re", "mi – dò", "A low tone followed by a high tone."],
          ["H", "The Yoruba word that means 'calabash' is", "igbá", "igba", "ìgbà", "ìgbá", "Its tones are re – mi."],
          ["H", "Which of the following has the tone pattern dò – dò?", "bàtà", "ilé", "ọmọ", "bàbá", "Both syllables carry the low tone."],
          ["H", "Tone marks are important in Yoruba mainly because", "words with the same letters can have different meanings", "they make writing beautiful", "they show capital letters", "they separate sentences", "Only the tones distinguish such words."],
        ],
      },
      {
        week: 5,
        title: "Greetings for the time of day",
        subtopics: ["Morning, afternoon and evening greetings", "Asking after someone", "Polite words", "Greeting elders and friends"],
        objectives: ["Greet correctly at different times of day", "Ask and answer 'How are you?'", "Use polite words such as please and thank you", "Use the respectful plural for elders"],
        lesson: {
          title: "Ìkíni ní àsìkò ọjọ́",
          summary: "Greet people correctly at different times of the day.",
          minutes: 40,
          notes: `## Greeting is important
The Yoruba place great value on greeting (**ìkíni**). A child who does not greet is thought to be badly brought up. There is a greeting for every time and every situation.

## Greetings by time of day
| Yoruba | English | When |
|---|---|---|
| **Ẹ káàárọ̀** | Good morning | morning |
| **Ẹ káàsán** | Good afternoon | midday to mid-afternoon |
| **Ẹ kúùrọ̀lẹ́** | Good evening | late afternoon to dusk |
| **Ẹ káalẹ́** | Good evening / night | after dark |
| **Ó dàárọ̀** | Good night (till morning) | when going to bed |
| **Ó dàbọ̀** | Goodbye | when parting |

## Ẹ and O
- **Ẹ** is the **respectful (plural) form** — used for **elders**, strangers, or more than one person: **Ẹ káàárọ̀, Mà / Sà**.
- **O** is used for **one person who is your age-mate or younger**: **O káàárọ̀** (often said as **Káàárọ̀**).

## Asking after someone
| Yoruba | English |
|---|---|
| **Báwo ni?** | How are you? |
| **Dáadáa ni.** | I am fine. |
| **Ṣé àlàáfíà ni?** | Is all well? |
| **Àlàáfíà ni.** | All is well. |
| **Ṣé ẹ jí dáadáa?** | Did you wake well? |
| **A dúpẹ́.** | We give thanks. |

## Polite words
| Yoruba | English |
|---|---|
| **Ẹ ṣé / O ṣé** | Thank you |
| **Ẹ jọ̀ọ́ / Jọ̀ọ́** | Please |
| **Ẹ má bínú** | I am sorry (do not be angry) |
| **Ẹ pẹ̀lẹ́** | Sorry (sympathy) |
| **Ẹ káàbọ̀** | Welcome |
| **Bẹ́ẹ̀ ni** | Yes |
| **Bẹ́ẹ̀ kọ́ / Rárá** | No |

## How to greet an elder
- a **boy prostrates** (**dọ̀bálẹ̀**)
- a **girl kneels** (**kúnlẹ̀**)
The younger person greets first.

## A short dialogue
> **Túndé:** Ẹ káàárọ̀, Mà.
> **Ìyá:** Káàárọ̀, ọmọ mi. Ṣé o sùn dáadáa?
> **Túndé:** Bẹ́ẹ̀ ni, Mà. A dúpẹ́.`,
          examples: `**Example 1.** How do you say "Good morning" to your teacher? *Answer:* **Ẹ káàárọ̀, Sà / Mà**.

**Example 2.** What is the reply to **"Báwo ni?"** *Answer:* **Dáadáa ni** (I am fine).

**Example 3.** Why do we say **Ẹ** and not **O** to an elder? *Answer:* **Ẹ** is the **respectful form**.`,
        },
        questions: [
          ["E", "'Ẹ káàárọ̀' means", "Good morning", "Good night", "Goodbye", "Thank you", "It is the greeting used in the morning."],
          ["E", "The Yoruba expression for 'Thank you' is", "Ẹ ṣé", "Ẹ jọ̀ọ́", "Ẹ pẹ̀lẹ́", "Ó dàbọ̀", "To an age-mate one may say 'O ṣé'."],
          ["E", "'Ẹ káàsán' is a greeting used in the", "afternoon", "early morning", "middle of the night", "new year only", "Ọ̀sán means afternoon."],
          ["M", "The correct reply to 'Báwo ni?' is", "Dáadáa ni", "Ẹ káalẹ́", "Ẹ jọ̀ọ́", "Ó dàárọ̀", "It means 'I am fine'."],
          ["M", "'Ó dàbọ̀' means", "Goodbye", "Welcome", "Please", "Good afternoon", "It is said when parting."],
          ["M", "'Ẹ jọ̀ọ́' means", "Please", "Sorry", "Yes", "Welcome", "It is used when making a request."],
          ["M", "When greeting an elder, a Yoruba boy traditionally", "prostrates", "shakes hands firmly", "waves from afar", "claps his hands", "The act is called dọ̀bálẹ̀."],
          ["H", "In greetings, the form 'Ẹ' rather than 'O' is used when speaking to", "an elder or more than one person", "a younger brother", "a baby", "oneself", "It is the respectful plural form."],
          ["H", "'Ó dàárọ̀' is said when", "going to bed at night", "meeting someone at noon", "welcoming a visitor", "buying in the market", "It means 'till morning'."],
          ["H", "'Ṣé àlàáfíà ni?' is best translated as", "Is all well?", "What is your name?", "Where are you going?", "How much is it?", "Àlàáfíà means peace or well-being."],
        ],
      },
      {
        week: 6,
        title: "Greetings for occasions and introducing oneself",
        subtopics: ["Greetings for work and activities", "Greetings for seasons and events", "Introducing yourself", "Respect in greeting"],
        objectives: ["Use the correct greeting for someone at work, at home or returning", "Use greetings for festivals, births and bereavement", "Introduce yourself in Yoruba", "Explain why greeting shows good upbringing"],
        lesson: {
          title: "Ìkíni fún oríṣiríṣi ìgbà",
          summary: "Use greetings for different occasions and introduce yourself.",
          minutes: 40,
          notes: `## "Ẹ kú…"
Most Yoruba greetings begin with **Ẹ kú** ("greetings for…"), followed by the activity or occasion.

## Greetings for activities
| Yoruba | Said to someone who is… |
|---|---|
| **Ẹ kú iṣẹ́** | working |
| **Ẹ kú ilé** | at home (said by one who arrives) |
| **Ẹ kú àbọ̀ / Ẹ káàbọ̀** | returning or arriving |
| **Ẹ kú ìjókòó** | sitting |
| **Ẹ kú ìdúró** | standing or waiting |
| **Ẹ kú àtijọ́** | not seen for a long time |
| **Ẹ kú ọjà** | selling in the market |
| **Ẹ kú ìrìn** | walking or travelling |
| **Ẹ kú oúnjẹ** | eating |

The usual reply is **"Oo"**, **"Ẹ ṣé"** or the same greeting returned.

## Greetings for occasions
| Yoruba | Occasion |
|---|---|
| **Ẹ kú ọdún** | festival / new year |
| **Ẹ kú ìyèdún** | another year reached |
| **Ẹ kú ewu ọmọ** | birth of a child (to the mother) |
| **Ẹ kú orí ire** | good fortune |
| **Ẹ kú ìnáwó** | spending on a ceremony |
| **Ẹ kú ọ̀fọ̀ / Ẹ kú àṣẹ̀yìndè** | bereavement |
| **Ẹ kú àjọ̀dún** | anniversary |

## Greetings for seasons
- **Ẹ kú ọ̀gìnnìtìn** — in the cold (harmattan)
- **Ẹ kú òjò** — in the rains
- **Ẹ kú ọ̀gbẹlẹ̀** — in the dry season

## Introducing yourself
| Yoruba | English |
|---|---|
| **Kí ni orúkọ rẹ?** | What is your name? |
| **Orúkọ mi ni Adé.** | My name is Adé. |
| **Ọmọ ọdún mélòó ni ọ́?** | How old are you? |
| **Ọmọ ọdún mọ́kànlá ni mí.** | I am eleven years old. |
| **Níbo ni o ń gbé?** | Where do you live? |
| **Ìbàdàn ni mo ń gbé.** | I live in Ibadan. |
| **Ọmọ ilé-ìwé ni mí.** | I am a pupil. |

## Greeting and good upbringing
A person who greets properly is called **ọmọlúàbí** — a well-bred person. Greeting shows **respect (ọ̀wọ̀)** for elders and care for others.`,
          examples: `**Example 1.** What do you say to a man working on his farm? *Answer:* **Ẹ kú iṣẹ́**.

**Example 2.** How do you say "My name is Bọ́lá"? *Answer:* **Orúkọ mi ni Bọ́lá**.

**Example 3.** When is **Ẹ kú ọdún** used? *Answer:* At a **festival or the new year**.`,
        },
        questions: [
          ["E", "The greeting for a person who is working is", "Ẹ kú iṣẹ́", "Ẹ kú ilé", "Ẹ kú ọdún", "Ẹ kú àbọ̀", "Iṣẹ́ means work."],
          ["E", "'Orúkọ mi ni Adé' means", "My name is Adé", "I live with Adé", "Adé is my friend", "Where is Adé?", "Orúkọ means name."],
          ["E", "'Ẹ káàbọ̀' is said to someone who", "has just arrived", "is going to bed", "is eating", "is selling", "It means 'welcome'."],
          ["M", "'Ẹ kú ọdún' is a greeting for", "a festival or the new year", "a person at work", "a traveller", "a sick person", "Ọdún means year or festival."],
          ["M", "'Kí ni orúkọ rẹ?' means", "What is your name?", "How old are you?", "Where do you live?", "How are you?", "It asks for a person's name."],
          ["M", "A person entering a house greets those inside with", "Ẹ kú ilé", "Ẹ kú ọjà", "Ẹ kú ìrìn", "Ẹ kú ọ̀fọ̀", "Ilé means home."],
          ["M", "'Níbo ni o ń gbé?' asks about a person's", "place of residence", "age", "name", "school", "It means 'Where do you live?'"],
          ["H", "The greeting 'Ẹ kú ewu ọmọ' is used on the occasion of", "the birth of a child", "a burial", "the harvest", "a journey", "It congratulates the mother on a safe delivery."],
          ["H", "'Ẹ kú àtijọ́' is said to a person who", "has not been seen for a long time", "is very old", "is sitting down", "is at the market", "Àtijọ́ refers to a long time past."],
          ["H", "A well-bred person who greets and shows respect is called", "ọmọlúàbí", "alárinà", "babaláwo", "onílù", "It describes a person of good character."],
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
        title: "Numbers 1 to 20",
        subtopics: ["Counting 1 to 10", "Counting 11 to 14", "Counting 15 to 20", "Counting objects"],
        objectives: ["Count from 1 to 10 in Yoruba", "Count from 11 to 20", "Explain how 15 to 19 are formed by subtracting from 20", "Count objects using the correct forms"],
        lesson: {
          title: "Òǹkà: 1 – 20",
          summary: "Count from one to twenty in Yoruba.",
          minutes: 40,
          notes: `## Counting 1 – 10
| Figure | Yoruba |
|---|---|
| 1 | **ọ̀kan (ení)** |
| 2 | **èjì** |
| 3 | **ẹ̀ta** |
| 4 | **ẹ̀rin** |
| 5 | **àrún** |
| 6 | **ẹ̀fà** |
| 7 | **èje** |
| 8 | **ẹ̀jọ** |
| 9 | **ẹ̀sán** |
| 10 | **ẹ̀wá** |

## 11 – 14: "more than ten"
The ending **-lá** means "added to ten".
| Figure | Yoruba | Idea |
|---|---|---|
| 11 | **ọ̀kànlá** | 1 + 10 |
| 12 | **èjìlá** | 2 + 10 |
| 13 | **ẹ̀tàlá** | 3 + 10 |
| 14 | **ẹ̀rìnlá** | 4 + 10 |

## 15 – 19: "less than twenty"
From 15, Yoruba **subtracts from 20**. The part **-dín-** means "less".
| Figure | Yoruba | Idea |
|---|---|---|
| 15 | **ẹ̀ẹ́dógún** | 20 − 5 |
| 16 | **ẹ̀rìndínlógún** | 20 − 4 |
| 17 | **ẹ̀tàdínlógún** | 20 − 3 |
| 18 | **èjìdínlógún** | 20 − 2 |
| 19 | **ọ̀kàndínlógún** | 20 − 1 |
| 20 | **ogún** | — |

## Counting things
When counting objects, the number comes **after** the noun and takes the form with **m-**:
| | |
|---|---|
| **ìwé kan** | one book |
| **ìwé méjì** | two books |
| **ìwé mẹ́ta** | three books |
| **ìwé mẹ́rin** | four books |
| **ìwé márùn-ún** | five books |
| **ìwé mẹ́wàá** | ten books |

## Useful questions
- **Mélòó ni?** — How many?
- **Ọmọ mélòó ni ó wà nínú kíláàsì?** — How many children are in the class?

## Practice
Count the fingers on your hands: **ọ̀kan, èjì, ẹ̀ta, ẹ̀rin, àrún, ẹ̀fà, èje, ẹ̀jọ, ẹ̀sán, ẹ̀wá**.`,
          examples: `**Example 1.** What is 7 in Yoruba? *Answer:* **èje**.

**Example 2.** Explain how 18 is formed. *Answer:* **èjìdínlógún** — "two less than twenty" (20 − 2).

**Example 3.** Say "three books". *Answer:* **ìwé mẹ́ta**.`,
        },
        questions: [
          ["E", "The Yoruba word for the number 2 is", "èjì", "ẹ̀ta", "ẹ̀rin", "ẹ̀fà", "It comes after ọ̀kan."],
          ["E", "'Ẹ̀wá' is the number", "10", "5", "8", "20", "It ends the first set of counting."],
          ["E", "The Yoruba word for the number 5 is", "àrún", "ẹ̀sán", "èje", "ẹ̀jọ", "It is the number of fingers on one hand."],
          ["M", "'Ogún' is the number", "20", "12", "15", "30", "Numbers from 15 to 19 are counted back from it."],
          ["M", "The Yoruba word for 12 is", "èjìlá", "èjìdínlógún", "ẹ̀tàlá", "ọ̀kànlá", "It means two added to ten."],
          ["M", "'Ẹ̀sán' is the number", "9", "6", "7", "4", "It comes just before ẹ̀wá."],
          ["M", "'Ìwé méjì' means", "two books", "second book", "twelve books", "a big book", "The counting form méjì follows the noun."],
          ["H", "The Yoruba word for 19 is", "ọ̀kàndínlógún", "ọ̀kànlá", "ẹ̀ẹ́dógún", "èjìdínlógún", "It means one less than twenty."],
          ["H", "'Ẹ̀ẹ́dógún' is the number", "15", "25", "16", "50", "It means five less than twenty."],
          ["H", "In Yoruba number words, the part '-dín-' means", "less (subtract)", "added to", "multiplied by", "equal to", "It is seen in the numbers 15 to 19."],
        ],
      },
      {
        week: 2,
        title: "The family",
        subtopics: ["Members of the nuclear family", "The extended family", "Seniority terms", "Talking about one's family"],
        objectives: ["Name members of the family in Yoruba", "Distinguish ẹ̀gbọ́n from àbúrò", "Explain the Yoruba idea of the extended family", "Make simple sentences about one's family"],
        lesson: {
          title: "Ẹbí",
          summary: "Name the members of the family and describe your own family.",
          minutes: 40,
          notes: `## The family
The Yoruba word for family is **ẹbí** (also **mọ̀lẹ́bí**). The family is very important: a child belongs not only to the parents but to the whole household (**agbo ilé**).

## Family members
| Yoruba | English |
|---|---|
| **bàbá** | father |
| **ìyá (màmá)** | mother |
| **òbí** | parents |
| **ọmọ** | child |
| **ọmọkùnrin** | boy; son |
| **ọmọbìnrin** | girl; daughter |
| **ọkọ** | husband |
| **ìyàwó (aya)** | wife |
| **bàbá àgbà** | grandfather |
| **ìyá àgbà** | grandmother |
| **ọmọ-ọmọ** | grandchild |
| **ìbejì** | twins |

## Seniority, not gender
Yoruba has **no single words for "brother" and "sister"**. What matters is **age**:
- **ẹ̀gbọ́n** — an **older** brother or sister
- **àbúrò** — a **younger** brother or sister
To show gender, add **ọkùnrin** (male) or **obìnrin** (female):
- **ẹ̀gbọ́n mi ọkùnrin** — my elder brother
- **àbúrò mi obìnrin** — my younger sister

Uncles, aunts and cousins are also called **bàbá**, **ìyá**, **ẹ̀gbọ́n** or **àbúrò** according to their age — because the **extended family** is treated as one.

## Other terms
- **baálé** — the head of a household / compound
- **ìyálé** — the senior wife
- **ìyàwó** — also a new bride
- **àna** — an in-law
- **ará ilé** — member of the household
- **ọ̀rẹ́** — friend

## Talking about your family
| Yoruba | English |
|---|---|
| **Bàbá mi ni èyí.** | This is my father. |
| **Orúkọ ìyá mi ni Fúnmi.** | My mother's name is Fúnmi. |
| **Mo ní ẹ̀gbọ́n méjì.** | I have two elder siblings. |
| **Àbúrò mi kéré.** | My younger sibling is small. |
| **A jẹ́ mẹ́fà nínú ẹbí wa.** | We are six in our family. |

**mi** = my; **rẹ** = your; **wa** = our. The possessive comes **after** the noun: **ìyá mi** (my mother).

## Family values
respect for elders; helping with house work; sharing; caring for the aged.`,
          examples: `**Example 1.** What is the Yoruba word for an older sibling? *Answer:* **ẹ̀gbọ́n**.

**Example 2.** Say "my father". *Answer:* **bàbá mi**.

**Example 3.** How do you say "my younger sister"? *Answer:* **àbúrò mi obìnrin**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'mother' is", "ìyá", "bàbá", "ọmọ", "ọkọ", "Màmá is also used."],
          ["E", "'Bàbá' means", "father", "brother", "uncle only", "friend", "He is the head of the nuclear family."],
          ["E", "The Yoruba word for 'child' is", "ọmọ", "ọ̀rẹ́", "àna", "ẹbí", "Ọmọkùnrin is a boy and ọmọbìnrin a girl."],
          ["M", "An older brother or sister is called", "ẹ̀gbọ́n", "àbúrò", "ìbejì", "àna", "The term shows seniority, not gender."],
          ["M", "'Ìyá àgbà' means", "grandmother", "senior wife", "aunt", "mother-in-law", "Àgbà means elder."],
          ["M", "The Yoruba word for 'twins' is", "ìbejì", "ìyàwó", "òbí", "baálé", "Their names are Táíwò and Kẹ́hìndé."],
          ["M", "'Bàbá mi' means", "my father", "your father", "our father", "his father", "The possessive 'mi' follows the noun."],
          ["H", "'Àbúrò mi ọkùnrin' means", "my younger brother", "my elder brother", "my younger sister", "my uncle", "Ọkùnrin shows that the sibling is male."],
          ["H", "The head of a Yoruba household or compound is the", "baálé", "ìyálé", "ọmọ-ọmọ", "àbúrò", "He is the senior man of the house."],
          ["H", "Yoruba uses the words ẹ̀gbọ́n and àbúrò instead of 'brother' and 'sister' because the language stresses", "seniority in age", "the colour of the person", "the person's occupation", "the person's town", "Age, not gender, determines the term."],
        ],
      },
      {
        week: 3,
        title: "Parts of the body",
        subtopics: ["The head and face", "The trunk", "The limbs", "Sentences about the body"],
        objectives: ["Name the parts of the head and face", "Name the parts of the trunk and limbs", "Point to and name body parts", "Make simple sentences using body parts"],
        lesson: {
          title: "Ẹ̀yà ara",
          summary: "Name the parts of the human body in Yoruba.",
          minutes: 40,
          notes: `## The body
**Ara** means body; **ẹ̀yà ara** means parts of the body.

## The head and face
| Yoruba | English |
|---|---|
| **orí** | head |
| **irun** | hair |
| **ojú** | eye; face |
| **etí** | ear |
| **imú** | nose |
| **ẹnu** | mouth |
| **ètè** | lip |
| **eyín** | tooth |
| **ahọ́n** | tongue |
| **ẹ̀rẹ̀kẹ́** | cheek |
| **àgbọ̀n** | chin |
| **ọrùn** | neck |

## The trunk
| Yoruba | English |
|---|---|
| **èjìká** | shoulder |
| **àyà** | chest |
| **ikùn (inú)** | belly, stomach |
| **ẹ̀yìn** | back |
| **ìdí** | waist; buttocks |
| **ọkàn** | heart |

## The limbs
| Yoruba | English |
|---|---|
| **apá** | arm |
| **ọwọ́** | hand |
| **ìka** | finger |
| **èékánná** | fingernail |
| **itan** | thigh |
| **orúnkún** | knee |
| **ẹsẹ̀** | leg; foot |

## What each part does
- **Ojú ni a fi ń ríran.** — We see with the eyes.
- **Etí ni a fi ń gbọ́ràn.** — We hear with the ears.
- **Imú ni a fi ń gbóòórùn.** — We smell with the nose.
- **Ẹnu ni a fi ń jẹun.** — We eat with the mouth.
- **Ẹsẹ̀ ni a fi ń rìn.** — We walk with the legs.
- **Ọwọ́ ni a fi ń kọ̀wé.** — We write with the hand.

## Sentences
- **Orí mi ni èyí.** — This is my head.
- **Mo ní ojú méjì.** — I have two eyes.
- **Wẹ ọwọ́ rẹ.** — Wash your hands.
- **Ẹsẹ̀ ń dùn mí.** — My leg hurts.

## A children's action song
Touch each part as you name it: **orí, èjìká, orúnkún, ẹsẹ̀** — head, shoulders, knees and feet.

## Care of the body
Bath daily (**wẹ̀**), brush the teeth (**fọ eyín**), cut the nails (**gé èékánná**), comb the hair (**ya irun**).`,
          examples: `**Example 1.** What is **etí**, and what do we do with it? *Answer:* **Ear** — we hear with it (*Etí ni a fi ń gbọ́ràn*).

**Example 2.** Which part of the body do we use to see? *Answer:* **Ojú** (the eye).

**Example 3.** Say "my head" and "my hand" in Yoruba. *Answer:* **orí mi** and **ọwọ́ mi**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'head' is", "orí", "ojú", "etí", "imú", "It is the topmost part of the body."],
          ["E", "'Ẹsẹ̀' means", "leg", "hand", "neck", "back", "We walk with it."],
          ["E", "The Yoruba word for 'mouth' is", "ẹnu", "eyín", "ahọ́n", "ètè", "We eat and speak with it."],
          ["M", "'Etí' is the part of the body used for", "hearing", "seeing", "smelling", "walking", "Etí means ear. Answer: hearing."],
          ["M", "The Yoruba word for 'nose' is", "imú", "irun", "ikùn", "itan", "We smell with it."],
          ["M", "'Eyín' means", "tooth", "eye", "ear", "finger", "We brush it every morning."],
          ["M", "The Yoruba word for 'hand' is", "ọwọ́", "apá", "ìka", "èjìká", "We write with it."],
          ["H", "'Orúnkún' means", "knee", "shoulder", "chin", "thigh", "It is the joint in the middle of the leg."],
          ["H", "'Ojú ni a fi ń ríran' means", "We see with the eyes", "We hear with the ears", "We eat with the mouth", "We walk with the legs", "Ríran means to see."],
          ["H", "The Yoruba word for 'tongue' is", "ahọ́n", "àyà", "àgbọ̀n", "ẹ̀yìn", "It is inside the mouth."],
        ],
      },
      {
        week: 4,
        title: "Days of the week and months of the year",
        subtopics: ["The seven days", "The twelve months", "Words for time", "Saying the date"],
        objectives: ["Name the days of the week in Yoruba", "Name the months of the year in Yoruba", "Use words such as today, tomorrow and yesterday", "Answer simple questions about days and months"],
        lesson: {
          title: "Ọjọ́ ọ̀sẹ̀ àti oṣù ọdún",
          summary: "Name the days of the week and the months of the year.",
          minutes: 40,
          notes: `## Words for time
| Yoruba | English |
|---|---|
| **ọjọ́** | day |
| **ọ̀sẹ̀** | week |
| **oṣù** | month; moon |
| **ọdún** | year |
| **òní** | today |
| **ọ̀la** | tomorrow |
| **àná** | yesterday |
| **òwúrọ̀ / àárọ̀** | morning |
| **ọ̀sán** | afternoon |
| **ìrọ̀lẹ́** | evening |
| **alẹ́** | night |

## Days of the week (ọjọ́ ọ̀sẹ̀)
| Yoruba | English |
|---|---|
| **Ọjọ́ Àìkú** | Sunday |
| **Ọjọ́ Ajé** | Monday |
| **Ọjọ́ Ìṣẹ́gun** | Tuesday |
| **Ọjọ́rú** | Wednesday |
| **Ọjọ́bọ̀** | Thursday |
| **Ọjọ́ Ẹtì** | Friday |
| **Ọjọ́ Àbámẹ́ta** | Saturday |

Each name has a meaning: **Àìkú** — "not dying" (long life); **Ajé** — wealth, trade; **Ìṣẹ́gun** — victory.

## Months of the year (oṣù ọdún)
| Yoruba | English |
|---|---|
| **Ṣẹ́rẹ́** | January |
| **Èrèlé** | February |
| **Ẹrẹ́nà** | March |
| **Igbe** | April |
| **Èbìbí** | May |
| **Òkúdù** | June |
| **Agẹmọ** | July |
| **Ògún** | August |
| **Òwéwè** | September |
| **Ọ̀wàrà** | October |
| **Bélú** | November |
| **Ọ̀pẹ̀** | December |

There are **seven** days in a week (**ọjọ́ méje**) and **twelve** months in a year (**oṣù méjìlá**).

## Questions and answers
- **Ọjọ́ wo ni òní?** — What day is today?
- **Òní jẹ́ Ọjọ́ Ajé.** — Today is Monday.
- **Oṣù wo ni a wà?** — Which month are we in?
- **Oṣù Ṣẹ́rẹ́ ni a wà.** — We are in January.
- **Ọ̀la ni Ọjọ́ Ìṣẹ́gun.** — Tomorrow is Tuesday.

## The traditional week
Before the seven-day week, the Yoruba kept a **four-day market week**, each day linked with a deity.

## Seasons
- **ìgbà òjò** — the rainy season
- **ìgbà ẹ̀ẹ̀rùn** — the dry season
- **ọyẹ́** — the harmattan`,
          examples: `**Example 1.** What is Monday in Yoruba? *Answer:* **Ọjọ́ Ajé**.

**Example 2.** Which month is **Ọ̀pẹ̀**, and what number is it in the year? *Answer:* **December**, the **twelfth** month.

**Example 3.** What do **òní**, **ọ̀la** and **àná** mean? *Answer:* **Today, tomorrow and yesterday**.`,
        },
        questions: [
          ["E", "'Ọjọ́ Àìkú' is", "Sunday", "Monday", "Friday", "Saturday", "It is the first day of the week."],
          ["E", "The Yoruba word for 'today' is", "òní", "ọ̀la", "àná", "ọ̀sẹ̀", "Ọ̀la is tomorrow and àná is yesterday."],
          ["E", "The Yoruba word for 'year' is", "ọdún", "oṣù", "ọjọ́", "alẹ́", "It contains twelve months."],
          ["M", "'Ọjọ́ Ajé' is", "Monday", "Tuesday", "Wednesday", "Thursday", "Ajé is linked with trade and wealth."],
          ["M", "The Yoruba name for the month of January is", "Ṣẹ́rẹ́", "Èrèlé", "Ọ̀pẹ̀", "Bélú", "It is the first month of the year."],
          ["M", "'Ọjọ́ Àbámẹ́ta' is", "Saturday", "Sunday", "Friday", "Thursday", "It is the last day of the week."],
          ["M", "'Àná' means", "yesterday", "tomorrow", "today", "next week", "It is the day before today."],
          ["H", "The Yoruba name for the month of December is", "Ọ̀pẹ̀", "Ọ̀wàrà", "Òwéwè", "Ògún", "It is the twelfth month."],
          ["H", "'Ọjọ́ Ìṣẹ́gun' is", "Tuesday", "Thursday", "Wednesday", "Friday", "Its name means 'day of victory'."],
          ["H", "The Yoruba name for the month of October is", "Ọ̀wàrà", "Agẹmọ", "Igbe", "Èbìbí", "It is the tenth month."],
        ],
      },
      {
        week: 5,
        title: "Colours",
        subtopics: ["The three basic colour words", "Other colours", "Describing things by colour", "Colours in Yoruba culture"],
        objectives: ["Name the basic colours in Yoruba", "Describe other colours using àwọ̀", "Describe objects by their colour", "State what some colours signify in Yoruba culture"],
        lesson: {
          title: "Àwọ̀",
          summary: "Name colours and describe things by colour.",
          minutes: 40,
          notes: `## Colour
The Yoruba word for colour is **àwọ̀**.

## The three basic colour words
Traditional Yoruba groups all colours under three words:
| Yoruba | English | Covers |
|---|---|---|
| **funfun** | white | white and very light shades |
| **dúdú** | black | black, and dark shades such as dark blue and dark green |
| **pupa** | red | red, and warm shades such as orange, brown and yellow |

## Other colours
More exact colours are named by comparing with a familiar thing, using **àwọ̀** ("colour of…"):
| Yoruba | English | Literally |
|---|---|---|
| **àwọ̀ ewé** | green | colour of leaf |
| **àwọ̀ ojú ọ̀run (búlúù)** | blue | colour of the sky |
| **àwọ̀ ìyeyè** | yellow | colour of the yellow plum |
| **àwọ̀ eérú** | grey | colour of ash |
| **àwọ̀ ilẹ̀** | brown | colour of earth |
| **àwọ̀ ọsàn** | orange | colour of the orange |
| **aró** | indigo / deep blue dye | — |

## Describing things
The colour word comes **after** the noun:
- **aṣọ funfun** — a white cloth
- **bàtà dúdú** — black shoes
- **ata pupa** — red pepper
- **ewé tútù** — a fresh (green) leaf

In a sentence:
- **Aṣọ mi funfun.** — My cloth is white.
- **Irun rẹ̀ dúdú.** — His hair is black.
- **Epo pupa ni èyí.** — This is palm oil (red oil).

## Questions
- **Àwọ̀ wo ni èyí?** — What colour is this?
- **Àwọ̀ funfun ni.** — It is white.

## Colours in Yoruba culture
- **funfun** — purity and peace; the colour of **Ọbàtálá** and his worshippers
- **pupa** — power and danger; linked with **Ṣàngó**
- **dúdú / aró** — the deep blue of **àdìrẹ** (tie-and-dye cloth) made with indigo
- people are also described as **ẹni dúdú** (dark-skinned) or **ẹni pupa** (light-skinned)

## Colours of the Nigerian flag
**Àwọ̀ ewé, funfun, àwọ̀ ewé** — green, white, green.`,
          examples: `**Example 1.** What is "white" in Yoruba? *Answer:* **funfun**.

**Example 2.** Say "black shoes". *Answer:* **bàtà dúdú**.

**Example 3.** How is "green" expressed? *Answer:* **àwọ̀ ewé** — "the colour of leaf".`,
        },
        questions: [
          ["E", "The Yoruba word for 'colour' is", "àwọ̀", "aṣọ", "ewé", "ata", "It is used to name colours such as àwọ̀ ewé."],
          ["E", "'Funfun' means", "white", "black", "red", "green", "It is the colour of chalk."],
          ["E", "The Yoruba word for 'black' is", "dúdú", "pupa", "funfun", "aró", "It is the colour of charcoal."],
          ["M", "'Pupa' means", "red", "blue", "white", "grey", "Palm oil is called epo pupa."],
          ["M", "'Àwọ̀ ewé' is the colour", "green", "yellow", "brown", "blue", "Ewé means leaf."],
          ["M", "'Aṣọ funfun' means", "a white cloth", "a black cloth", "a new cloth", "a torn cloth", "The colour word follows the noun."],
          ["M", "The number of basic colour words in traditional Yoruba is", "three", "seven", "ten", "two", "They are funfun, dúdú and pupa."],
          ["H", "'Àwọ̀ ojú ọ̀run' refers to the colour", "blue", "green", "red", "black", "It means 'colour of the sky'."],
          ["H", "In Yoruba culture, the colour white is associated with the deity", "Ọbàtálá", "Ṣàngó", "Ògún", "Èṣù", "His worshippers dress in white."],
          ["H", "The colours of the Nigerian flag in Yoruba are", "àwọ̀ ewé, funfun, àwọ̀ ewé", "pupa, funfun, pupa", "dúdú, pupa, dúdú", "funfun, dúdú, funfun", "Green, white, green."],
        ],
      },
      {
        week: 6,
        title: "Things in the home and classroom",
        subtopics: ["Objects in the classroom", "Objects in the home", "This and that", "Simple questions about objects"],
        objectives: ["Name common objects in the classroom", "Name common objects in the home", "Use èyí and ìyẹn to point at things", "Ask and answer 'What is this?'"],
        lesson: {
          title: "Nǹkan inú ilé àti kíláàsì",
          summary: "Name everyday objects at home and in the classroom.",
          minutes: 40,
          notes: `## In the classroom (nínú kíláàsì)
| Yoruba | English |
|---|---|
| **ilé-ìwé** | school |
| **kíláàsì (yàrá ìkẹ́kọ̀ọ́)** | classroom |
| **olùkọ́ (tíṣà)** | teacher |
| **akẹ́kọ̀ọ́** | pupil, student |
| **ìwé** | book; paper |
| **gègé (kálámù)** | pen |
| **pẹ́ńsù** | pencil |
| **pátákó ìkọ̀wé** | writing board |
| **ẹfun** | chalk |
| **tábìlì** | table |
| **àga** | chair |
| **àpò** | bag |

## In the home (nínú ilé)
| Yoruba | English |
|---|---|
| **ilé** | house |
| **yàrá** | room |
| **ilẹ̀kùn** | door |
| **fèrèsé** | window |
| **ibùsùn (bẹ́ẹ̀dì)** | bed |
| **ẹní** | mat |
| **àtùpà** | lamp |
| **ìkòkò** | pot |
| **abọ́** | bowl, plate |
| **ṣíbí** | spoon |
| **ọ̀bẹ** | knife |
| **ife (kọ́ọ̀bù)** | cup |
| **ìgbálẹ̀ (ọwọ̀)** | broom |
| **omi** | water |
| **iná** | fire; light |
| **aago** | clock; bell |

Many modern objects have **borrowed names** reshaped to Yoruba sounds: **tábìlì** (table), **bẹ́ẹ̀dì** (bed), **kọ́ọ̀bù** (cup), **rédíò** (radio).

## This and that
- **èyí** — this
- **ìyẹn** — that
- **ìwọ̀nyí** — these
- **ìwọ̀nyẹn** — those

## Asking and answering
- **Kí ni èyí?** — What is this?
- **Ìwé ni èyí.** — This is a book.
- **Kí ni ìyẹn?** — What is that?
- **Àga ni ìyẹn.** — That is a chair.
- **Ṣé ìwé ni èyí?** — Is this a book?
- **Bẹ́ẹ̀ ni, ìwé ni.** — Yes, it is a book.
- **Rárá, àpò ni.** — No, it is a bag.

## Commands in class
- **Dìde!** — Stand up!
- **Jókòó!** — Sit down!
- **Ṣí ìwé rẹ.** — Open your book.
- **Pa ìwé rẹ dé.** — Close your book.
- **Ti ilẹ̀kùn.** — Shut the door.
- **Ẹ dákẹ́.** — Keep quiet.`,
          examples: `**Example 1.** What are **àga** and **tábìlì**? *Answer:* **Chair** and **table**.

**Example 2.** Ask "What is this?" in Yoruba. *Answer:* **Kí ni èyí?**

**Example 3.** Say "This is a book" and "That is a chair." *Answer:* **Ìwé ni èyí** and **Àga ni ìyẹn**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'book' is", "ìwé", "àga", "àpò", "ẹní", "Ilé-ìwé (school) is literally 'house of books'."],
          ["E", "'Ilẹ̀kùn' means", "door", "window", "room", "roof", "We open it to enter a room."],
          ["E", "The Yoruba word for 'water' is", "omi", "iná", "epo", "iyọ̀", "We drink it. Answer: omi."],
          ["M", "'Àga' means", "chair", "table", "bed", "mat", "We sit on it. Answer: chair."],
          ["M", "The Yoruba word for 'window' is", "fèrèsé", "ìkòkò", "àtùpà", "ìgbálẹ̀", "It lets air into the room."],
          ["M", "'Kí ni èyí?' means", "What is this?", "Who is that?", "Where is it?", "How many are they?", "Èyí means 'this'."],
          ["M", "'Olùkọ́' means", "teacher", "pupil", "farmer", "trader", "He or she teaches in the classroom."],
          ["H", "'Akẹ́kọ̀ọ́' means", "pupil or student", "head teacher", "school gate", "school bag", "It refers to one who is learning."],
          ["H", "The command 'Jókòó!' means", "Sit down!", "Stand up!", "Keep quiet!", "Come here!", "Dìde means 'stand up'."],
          ["H", "The Yoruba word 'tábìlì' is an example of", "a borrowed word reshaped to Yoruba sounds", "a proverb", "a tone mark", "a nasal vowel", "It comes from the English word 'table'."],
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
        title: "The syllable",
        subtopics: ["What a syllable is", "The three syllable types", "The syllabic nasal", "Counting syllables"],
        objectives: ["Define a syllable", "Identify the three types of Yoruba syllable", "Recognise the syllabic nasal", "Divide words into syllables and count them"],
        lesson: {
          title: "Sílébù",
          summary: "Divide Yoruba words into syllables and name the syllable types.",
          minutes: 40,
          notes: `## What is a syllable?
A **syllable** (**sílébù**) is the smallest part of a word that can be **pronounced at one breath**. In Yoruba, **every syllable carries one tone**. So the number of tones in a word tells you the number of syllables.

## The three types of syllable
| Type | Made of | Symbol | Examples |
|---|---|---|---|
| 1 | a **vowel alone** | **F** (V) | **a**-jé, **ì**-wé, **ó** |
| 2 | a **consonant + a vowel** | **KF** (CV) | **bà**-**tà**, **lọ**, **wá** |
| 3 | a **syllabic nasal** | **N** | **ǹ**-kan, ò-**ǹ**-kà, **ń** |

(F = fáwẹ́lì; K = kọ́ńsónáǹtì.)

Yoruba syllables **never end in a consonant** and **never begin with two consonants**.

## The syllabic nasal
The nasal **n** (or **m**) can form a syllable **by itself** and carry its own tone:
- **ń** in **Ó ń lọ** (He is going)
- **ǹ** in **nǹkan** (thing)
- **m̀** in **ò-rom-bó** → o-ro-**m**-bó (orange)

Do not confuse it with the **n** that only marks a nasal vowel, as in **ìtàn**.

## Dividing words into syllables
| Word | Division | Number | Pattern |
|---|---|---|---|
| **wá** | wá | 1 | KF |
| **ilé** | i-lé | 2 | F-KF |
| **bàtà** | bà-tà | 2 | KF-KF |
| **ọmọ** | ọ-mọ | 2 | F-KF |
| **gbogbo** | gbo-gbo | 2 | KF-KF |
| **àbúrò** | à-bú-rò | 3 | F-KF-KF |
| **ìtàn** | ì-tàn | 2 | F-KF (nasal vowel) |
| **òǹkà** | ò-ǹ-kà | 3 | F-N-KF |
| **alágbára** | a-lá-gbá-ra | 4 | F-KF-KF-KF |

Remember: **gb** is one consonant; **an, ẹn, in, ọn, un** are single (nasal) vowels.

## Steps
1. Find each **vowel** (and each syllabic nasal) — each is the heart of a syllable.
2. Attach the consonant **before** it, if there is one.
3. Count the parts.

## Why it matters
Knowing syllables helps with **spelling**, **reading aloud**, **marking tones** and **poetry**.`,
          examples: `**Example 1.** Divide **àbúrò** into syllables. *Answer:* **à-bú-rò** — three syllables.

**Example 2.** What type of syllable is **lọ**? *Answer:* **Consonant + vowel (KF)**.

**Example 3.** How many syllables are in **òǹkà**? *Answer:* **Three** — ò-ǹ-kà; the **ǹ** is a syllabic nasal.`,
        },
        questions: [
          ["E", "The Yoruba term for 'syllable' is", "sílébù", "fáwẹ́lì", "àmì ohùn", "gbólóhùn", "It is the part of a word said at one breath."],
          ["E", "The word 'bàtà' has how many syllables?", "two", "one", "three", "four", "It divides as bà-tà."],
          ["E", "The word 'wá' (come) has", "one syllable", "two syllables", "three syllables", "no syllable", "It is a single consonant-vowel unit."],
          ["M", "In Yoruba, every syllable carries one", "tone", "consonant cluster", "capital letter", "full stop", "So the tones can be counted to find the syllables."],
          ["M", "The syllable structure of 'lọ' (go) is", "consonant + vowel", "vowel only", "syllabic nasal", "vowel + consonant", "It is written KF."],
          ["M", "The word 'àbúrò' is divided into syllables as", "à-bú-rò", "àb-úr-ò", "àbú-rò", "à-búr-ò", "No Yoruba syllable ends in a consonant."],
          ["M", "The number of syllable types in Yoruba is", "three", "two", "five", "six", "They are F, KF and N."],
          ["H", "In the sentence 'Ó ń lọ', the element 'ń' is", "a syllabic nasal", "a nasal vowel", "a consonant cluster", "a silent letter", "It forms a syllable alone and bears a tone."],
          ["H", "The word 'gbogbo' has two syllables because", "gb is a single consonant", "it has four vowels", "it ends in a consonant", "it has a syllabic nasal", "It divides as gbo-gbo."],
          ["H", "The syllable pattern of 'ilé' is", "F-KF", "KF-KF", "KF-F", "N-KF", "A vowel syllable followed by a consonant-vowel syllable."],
        ],
      },
      {
        week: 2,
        title: "Nouns",
        subtopics: ["What a noun is", "Kinds of nouns", "Showing number", "Nouns in sentences"],
        objectives: ["Define a noun", "Classify nouns as proper, common, abstract and so on", "Show plural with àwọn", "Identify nouns in simple sentences"],
        lesson: {
          title: "Ọ̀rọ̀-orúkọ",
          summary: "Identify nouns and their kinds in Yoruba.",
          minutes: 40,
          notes: `## What is a noun?
A **noun** (**ọ̀rọ̀-orúkọ**) is the **name of a person, animal, place, thing or idea**.

## Kinds of nouns
| Kind | Yoruba term | Examples |
|---|---|---|
| **proper noun** — particular name | orúkọ àdáni | **Adé, Ìbàdàn, Nàìjíríà, Ọ̀ṣun** |
| **common noun** — general name | orúkọ àjùmọ̀ní | **ọmọ, ìlú, ajá, ilé** |
| **concrete noun** — can be seen or touched | orúkọ afojúrí | **òkúta, igi, bàtà** |
| **abstract noun** — idea or feeling | orúkọ àfòyemọ̀ | **ìfẹ́** (love), **ayọ̀** (joy), **ọgbọ́n** (wisdom) |
| **countable noun** | orúkọ aṣeékà | **ìwé, àga, ẹyin** |
| **uncountable noun** | orúkọ àìṣeékà | **omi, iyanrìn** (sand), **epo** |
| **noun of place** | orúkọ ibìkan | **ọjà, oko, ilé-ìwé** |

## Shape of Yoruba nouns
Most Yoruba nouns **begin with a vowel**: **i**lé, **ọ**mọ, **a**já, **ẹ**ja, **o**mi, **ì**wé. (Verbs, by contrast, usually begin with a consonant: **lọ, wá, jẹ**.)

## Showing number
Yoruba nouns **do not change their form** for the plural. There is no "-s".
- **ọmọ** — child / children
To show plural clearly, put **àwọn** before the noun, or a number after it:
- **àwọn ọmọ** — the children
- **ọmọ mẹ́ta** — three children
- **àwọn olùkọ́** — the teachers

## No gender, no articles
- Yoruba nouns have **no grammatical gender**.
- There is no word for "a/an"; **kan** ("one, a certain") may be used: **ọmọ kan** — a child.
- **náà** follows the noun for "the (one mentioned)": **ọmọ náà** — the child.

## Functions of a noun in a sentence
- **subject** (olùwà) — the doer: **Adé** ra ìwé. (*Adé bought a book.*)
- **object** (àbọ̀) — the receiver: Adé ra **ìwé**.
- after a preposition: Ó wà ní **ilé**. (*He is at home.*)

## Possession
The owner **follows** the thing owned:
- **ilé Adé** — Adé's house
- **ìwé olùkọ́** — the teacher's book

## Find the nouns
> **Bọ́lá** gbé **omi** wá láti **odò**.
(*Bọ́lá brought water from the river.*) Nouns: **Bọ́lá, omi, odò**.`,
          examples: `**Example 1.** Define **ọ̀rọ̀-orúkọ**. *Answer:* A **naming word** — the name of a person, animal, place, thing or idea.

**Example 2.** Give the plural of **ọmọ** ("the children"). *Answer:* **àwọn ọmọ**.

**Example 3.** Pick out the nouns in "Adé ra ìwé". *Answer:* **Adé** and **ìwé**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'noun' is", "ọ̀rọ̀-orúkọ", "ọ̀rọ̀-ìṣe", "ọ̀rọ̀-àpèjúwe", "ọ̀rọ̀-atọ́kùn", "Orúkọ means name."],
          ["E", "Which of the following is a noun?", "ilé", "lọ", "jẹ", "wá", "It is the name of a thing — a house."],
          ["E", "A noun is the name of", "a person, place or thing", "an action only", "a tone", "a question", "It may also name an animal or an idea."],
          ["M", "Which of the following is a proper noun?", "Ìbàdàn", "ìlú", "ọmọ", "ajá", "It is the particular name of a city."],
          ["M", "The plural 'the children' is expressed in Yoruba as", "àwọn ọmọ", "ọmọs", "ọmọ kan", "ọmọ náà", "Àwọn before the noun shows plural."],
          ["M", "Which of the following is an abstract noun?", "ayọ̀", "òkúta", "igi", "bàtà", "Joy cannot be seen or touched."],
          ["M", "Most Yoruba nouns begin with", "a vowel", "the letter gb", "two consonants", "a capital consonant", "Examples are ilé, ọmọ and ajá."],
          ["H", "In the sentence 'Adé ra ìwé', the noun acting as the object is", "ìwé", "Adé", "ra", "none", "It receives the action of buying."],
          ["H", "'Ilé Adé' means", "Adé's house", "Adé is at home", "a house and Adé", "Adé built it", "The owner follows the thing owned."],
          ["H", "Which statement about Yoruba nouns is correct?", "They do not change form in the plural", "They add -s in the plural", "They have masculine and feminine endings", "They always begin with a consonant", "Plural is shown by àwọn or a number."],
        ],
      },
      {
        week: 3,
        title: "Pronouns",
        subtopics: ["Subject pronouns", "Emphatic pronouns", "Object and possessive pronouns", "Respect in pronouns"],
        objectives: ["List the subject pronouns", "Use the emphatic pronouns", "Use object and possessive pronouns", "Use plural pronouns to show respect"],
        lesson: {
          title: "Ọ̀rọ̀ arọ́pò-orúkọ",
          summary: "Use Yoruba pronouns in place of nouns.",
          minutes: 40,
          notes: `## What is a pronoun?
A **pronoun** (**ọ̀rọ̀ arọ́pò-orúkọ**) is a word used **in place of a noun**.
> **Adé** wá. → **Ó** wá. (*Adé came. → He came.*)

## Subject pronouns
| | Singular | Plural |
|---|---|---|
| 1st person | **mo** — I | **a** — we |
| 2nd person | **o** — you | **ẹ** — you (plural / respect) |
| 3rd person | **ó** — he, she, it | **wọ́n** — they |

- **Mo jẹun.** — I ate.
- **O jẹun.** — You ate.
- **Ó jẹun.** — He / she ate.
- **A jẹun.** — We ate.
- **Ẹ jẹun.** — You (pl.) ate.
- **Wọ́n jẹun.** — They ate.

Note the tone: **o** (mid) = you; **ó** (high) = he/she/it. **Yoruba does not distinguish "he" from "she".**

## Emphatic (long) pronouns
Used for emphasis, alone, or after **àti** (and):
| | Singular | Plural |
|---|---|---|
| 1st | **èmi** | **àwa** |
| 2nd | **ìwọ** | **ẹ̀yin** |
| 3rd | **òun** | **àwọn** |

- **Èmi ni.** — It is I.
- **Ìwọ àti èmi** — you and I
- **Àwa ni a ṣe é.** — It is we who did it.

## Object pronouns
| | Singular | Plural |
|---|---|---|
| 1st | **mi** — me | **wa** — us |
| 2nd | **ọ / ẹ** — you | **yín** — you |
| 3rd | (the verb's vowel is repeated) — him/her/it | **wọn** — them |

- **Ó rí mi.** — He saw me.
- **Mo rí wọn.** — I saw them.
- **Mo rí i.** — I saw him/her/it.

## Possessive pronouns (after the noun)
| | Singular | Plural |
|---|---|---|
| 1st | **mi** — my | **wa** — our |
| 2nd | **rẹ** — your | **yín** — your |
| 3rd | **rẹ̀** — his / her | **wọn** — their |

- **ìwé mi** — my book
- **ilé wa** — our house
- **bàbá rẹ̀** — his / her father

## Respect
The **plural pronouns** are used for **one elder** as a sign of respect:
- **Ẹ** káàárọ̀, Bàbá. — Good morning, Father.
- **Wọ́n** ti dé. — He (the elder) has arrived.
Using **o** or **ó** for an elder is rude.`,
          examples: `**Example 1.** Replace the noun with a pronoun: **Bọ́lá lọ.** *Answer:* **Ó lọ** (She went).

**Example 2.** Say "our house". *Answer:* **ilé wa**.

**Example 3.** Which pronoun do you use for an elder: **o** or **ẹ**? *Answer:* **ẹ** — the respectful plural.`,
        },
        questions: [
          ["E", "The Yoruba pronoun for 'I' as subject is", "mo", "o", "a", "wọ́n", "As in 'Mo jẹun' — I ate."],
          ["E", "'Wọ́n' means", "they", "we", "you", "I", "It is the third person plural."],
          ["E", "A word used in place of a noun is a", "pronoun", "verb", "tone mark", "syllable", "Its Yoruba name is ọ̀rọ̀ arọ́pò-orúkọ."],
          ["M", "'A jẹun' means", "We ate", "They ate", "You ate", "I ate", "A is the first person plural."],
          ["M", "The emphatic pronoun for 'I' is", "èmi", "ìwọ", "òun", "àwa", "As in 'Èmi ni' — It is I."],
          ["M", "'Ìwé mi' means", "my book", "your book", "our book", "their book", "The possessive 'mi' follows the noun."],
          ["M", "The Yoruba pronoun 'ó' can mean", "he, she or it", "only he", "only she", "we", "Yoruba does not distinguish gender in pronouns."],
          ["H", "'Ilé wa' means", "our house", "my house", "their house", "your house", "Wa is the first person plural possessive."],
          ["H", "The pronoun used to address one elder respectfully is", "ẹ", "o", "mo", "ó", "The plural form shows respect."],
          ["H", "'Ìwọ àti èmi' means", "you and I", "he and she", "we and they", "they and you", "Emphatic pronouns are used with àti."],
        ],
      },
      {
        week: 4,
        title: "Yoruba food",
        subtopics: ["Staple foods", "Soups and stews", "Snacks and drinks", "Talking about food"],
        objectives: ["Name common Yoruba foods", "Name soups and what they are eaten with", "Name snacks and drinks", "Make sentences about eating and drinking"],
        lesson: {
          title: "Oúnjẹ Yorùbá",
          summary: "Name Yoruba foods and talk about eating.",
          minutes: 40,
          notes: `## Food
**Oúnjẹ** means food; **jẹ** means eat; **mu** means drink; **sè** means cook.

## Staple foods
| Yoruba | What it is |
|---|---|
| **iṣu** | yam |
| **iyán** | pounded yam |
| **àmàlà** | dark paste made from yam flour (**èlùbọ́**) |
| **ẹ̀bà** | paste made from **gààrí** (cassava grains) |
| **fùfú** | fermented cassava paste |
| **ẹ̀kọ / àgìdí** | set maize pap |
| **ògì** | maize pap |
| **ìrẹsì** | rice |
| **ẹ̀wà** | beans |
| **àgbàdo** | maize |
| **ọ̀gẹ̀dẹ̀** | plantain / banana |
| **dòdò** | fried ripe plantain |
| **ẹ̀gẹ́ (gbágùúdá)** | cassava |

Solid foods such as iyán, àmàlà and ẹ̀bà are called **òkèlè** — "morsels" swallowed with soup.

## Soups and stews (ọbẹ̀)
| Yoruba | English |
|---|---|
| **ọbẹ̀ ata** | pepper stew |
| **ẹ̀fọ́ rírò** | vegetable soup |
| **ewédú** | jute-leaf soup |
| **gbẹ̀gìrì** | bean soup |
| **ẹ̀gúsí** | melon-seed soup |
| **ilá** | okra |
| **àpọ̀n** | wild-mango-seed soup |

**Àmàlà** is famous with **gbẹ̀gìrì and ewédú**; **iyán** with **ẹ̀gúsí** or **ẹ̀fọ́**.

## Protein and seasoning
**ẹran** (meat), **ẹja** (fish), **ẹyin** (egg), **adìyẹ** (chicken), **pọ̀nmọ́** (cow skin), **iyọ̀** (salt), **ata** (pepper), **epo pupa** (palm oil), **àlùbọ́sà** (onion), **irú** (locust beans).

## Snacks and drinks
- **àkàrà** — fried bean cake
- **mọ́ínmọ́ín (ọ̀lẹ̀lẹ̀)** — steamed bean pudding
- **bọ̀ọ̀lì** — roasted plantain
- **gúgúrú àti ẹ̀pà** — popcorn and groundnuts
- **omi** — water
- **ẹmu** — palm wine
- **obì** — kola nut

## Talking about food
- **Ebi ń pa mí.** — I am hungry.
- **Òùngbẹ ń gbẹ mí.** — I am thirsty.
- **Mo fẹ́ jẹ iyán.** — I want to eat pounded yam.
- **Mo ti yó.** — I am full.
- **Oúnjẹ yìí dùn.** — This food is delicious.
- **Kí ni o jẹ ní àárọ̀?** — What did you eat in the morning?
- **Ẹ wá jẹun.** — Come and eat.

## Table manners
Wash your hands before eating; do not talk with food in the mouth; let elders begin first; say **"Ẹ ṣé"** after the meal. A well-known proverb says that a child who knows how to wash his hands will eat with elders.`,
          examples: `**Example 1.** What is **iyán**, and what is it eaten with? *Answer:* **Pounded yam**, eaten with soup such as ẹ̀gúsí or ẹ̀fọ́.

**Example 2.** Say "I am hungry." *Answer:* **Ebi ń pa mí**.

**Example 3.** Which food is made from beans and fried? *Answer:* **Àkàrà**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'food' is", "oúnjẹ", "omi", "ọbẹ̀", "iyọ̀", "Jẹun means 'to eat food'."],
          ["E", "'Iṣu' means", "yam", "rice", "beans", "maize", "It is pounded to make iyán."],
          ["E", "The Yoruba word for 'rice' is", "ìrẹsì", "ẹ̀wà", "àgbàdo", "ọ̀gẹ̀dẹ̀", "It is a borrowed word reshaped to Yoruba sounds."],
          ["M", "'Iyán' is", "pounded yam", "yam flour paste", "bean cake", "fried plantain", "It is eaten with soup such as ẹ̀gúsí."],
          ["M", "Àkàrà is made from", "beans", "yam", "maize", "cassava", "The beans are ground and fried in oil."],
          ["M", "'Ebi ń pa mí' means", "I am hungry", "I am thirsty", "I am full", "I am tired", "Ebi means hunger."],
          ["M", "The Yoruba word for 'meat' is", "ẹran", "ẹja", "ẹyin", "ẹ̀wà", "Ẹja is fish and ẹyin is egg."],
          ["H", "Ẹ̀bà is prepared from", "gààrí", "èlùbọ́", "ẹ̀gúsí", "àgbàdo", "Gààrí is made from cassava."],
          ["H", "The soup made from jute leaves and often eaten with àmàlà is", "ewédú", "ẹ̀gúsí", "àpọ̀n", "ọbẹ̀ ata", "It is usually served together with gbẹ̀gìrì."],
          ["H", "'Mo ti yó' means", "I am full", "I have cooked", "I am hungry", "I want water", "It is said after eating enough."],
        ],
      },
      {
        week: 5,
        title: "Riddles and folktales",
        subtopics: ["Riddles", "Folktales", "The tortoise as trickster", "Lessons from tales"],
        objectives: ["Explain what riddles are and how they are told", "Explain what folktales are and how they are told", "Describe the role of the tortoise in Yoruba tales", "State moral lessons taught by folktales"],
        lesson: {
          title: "Àlọ́ àpamọ̀ àti àlọ́ àpagbè",
          summary: "Enjoy Yoruba riddles and folktales and learn their lessons.",
          minutes: 40,
          notes: `## Àlọ́
In the evening, after the day's work, children gathered round an elder in the moonlight to hear **àlọ́**. There are two kinds.

## 1. Àlọ́ àpamọ̀ — riddles
A **riddle** is a short puzzle that tests wit. The teller describes something in a hidden way and the listeners guess.
### How it is told
> Teller: **Ààlọ́ o!**
> Listeners: **Ààlọ̀!**
> Teller: (gives the riddle)
> Listeners: (answer)
### Examples (given here in English)
- *A small room full of pegs.* — **the mouth and teeth** (ẹnu àti eyín)
- *Two brothers who live side by side but never see each other.* — **the eyes** (ojú)
- *It goes to the stream with its head down and returns with its head up.* — a **water pot**

### Uses
riddles sharpen the mind, teach observation and entertain.

## 2. Àlọ́ àpagbè — folktales
A **folktale** is a story with **songs** in which the listeners join (**ègbè** = chorus).
### How it is told
> Teller: **Ààlọ́ o!**
> Listeners: **Ààlọ̀!**
> Teller: *Ní ọjọ́ kan…* (One day…) or *Ní ìgbà kan…* (Once upon a time…)
The teller acts the parts; the song comes at the high point; the tale ends with its lesson.

### Characters
animals that talk and behave like people, human beings, spirits and kings.

### Ìjàpá — the tortoise
The best-known character is **Ìjàpá** (also called **Àjàpá** or **Alábahun**), the **tortoise**. He is small but **cunning, greedy and lazy**. He tricks bigger animals — the elephant, the dog, the leopard — but his greed usually brings him to shame. His wife is **Yánníbo**.

### A short tale (retold)
In a time of famine, the dog knew a farm where yams could be taken. Tortoise begged to go with him. The dog took a little and ran; Tortoise piled on more than he could carry and was caught by the farmer. **Lesson:** greed leads to trouble.

## Lessons taught by folktales
- **do not be greedy** (*má ṣe ojúkòkòrò*)
- **be honest**; do not steal or lie
- **obey your parents** and respect elders
- **work hard**; do not be lazy
- **do not be proud**
- kindness is rewarded

## Importance
entertainment; moral training; teaching the language; preserving culture; explaining why things are so — why the tortoise's shell is cracked.`,
          examples: `**Example 1.** What do the listeners reply when the teller says "Ààlọ́ o!"? *Answer:* **"Ààlọ̀!"**

**Example 2.** What is the difference between àlọ́ àpamọ̀ and àlọ́ àpagbè? *Answer:* **Àlọ́ àpamọ̀** is a **riddle**; **àlọ́ àpagbè** is a **folktale with songs**.

**Example 3.** Which animal is the trickster in Yoruba tales? *Answer:* **Ìjàpá, the tortoise**.`,
        },
        questions: [
          ["E", "The trickster in most Yoruba folktales is the", "tortoise", "lion", "goat", "horse", "He is called Ìjàpá."],
          ["E", "A short puzzle that tests wit is called", "àlọ́ àpamọ̀", "àlọ́ àpagbè", "oríkì", "òwe", "The listeners must guess the answer."],
          ["E", "Folktales were traditionally told", "in the evening by moonlight", "at noon in the market", "during farm work only", "at dawn before school", "Children gathered round an elder after the day's work."],
          ["M", "When the storyteller calls 'Ààlọ́ o!', the listeners answer", "Ààlọ̀!", "Ẹ ṣé!", "Bẹ́ẹ̀ ni!", "Ó dàbọ̀!", "The exchange opens every riddle or tale."],
          ["M", "A folktale in which the listeners join in the songs is called", "àlọ́ àpagbè", "àlọ́ àpamọ̀", "ìjálá", "ẹkún ìyàwó", "Ègbè means chorus."],
          ["M", "Ìjàpá is usually shown in the tales as", "cunning and greedy", "strong and brave", "honest and generous", "tall and handsome", "His greed often brings him to shame."],
          ["M", "The riddle 'a small room full of pegs' refers to", "the mouth and teeth", "the eyes", "a farm", "a market", "The pegs are the teeth."],
          ["H", "The name of Ìjàpá's wife in Yoruba folktales is", "Yánníbo", "Mọ́remí", "Ọ̀ṣun", "Ẹfúnṣetán", "She appears in many tortoise stories."],
          ["H", "The main purpose of folktales in Yoruba society is to", "teach moral lessons while entertaining", "record the prices of goods", "train soldiers", "replace the school", "Each tale ends with a lesson."],
          ["H", "A folktale that explains why the tortoise's shell is cracked is an example of a tale that", "explains how something came to be", "praises a king", "mourns the dead", "advertises goods", "Such stories account for features of nature."],
        ],
      },
      {
        week: 6,
        title: "Animals and birds",
        subtopics: ["Domestic animals", "Wild animals", "Birds and other creatures", "Sentences about animals"],
        objectives: ["Name domestic animals in Yoruba", "Name wild animals in Yoruba", "Name common birds and other creatures", "Make simple sentences about animals"],
        lesson: {
          title: "Ẹranko àti ẹyẹ",
          summary: "Name animals and birds in Yoruba.",
          minutes: 40,
          notes: `## Animals
**Ẹranko** means animal. **Ẹran ọ̀sìn** are animals kept at home (domestic animals); **ẹranko igbó** are animals of the forest (wild animals). **Ẹyẹ** means bird.

## Domestic animals (ẹran ọ̀sìn)
| Yoruba | English |
|---|---|
| **ajá** | dog |
| **ológbò** | cat |
| **ewúrẹ́** | goat |
| **àgùntàn** | sheep |
| **màlúù** | cow |
| **ẹṣin** | horse |
| **ẹlẹ́dẹ̀** | pig |
| **kẹ́tẹ́kẹ́tẹ́** | donkey |
| **ehoro** | rabbit |
| **adìyẹ** | fowl, chicken |
| **àkùkọ** | cock |
| **pẹ́pẹ́yẹ** | duck |
| **tòlótòló** | turkey |

## Wild animals (ẹranko igbó)
| Yoruba | English |
|---|---|
| **kìnnìún** | lion |
| **ẹkùn** | leopard |
| **erin** | elephant |
| **ọ̀bọ** | monkey |
| **ìnàkí** | chimpanzee / ape |
| **àgbọ̀nrín** | deer, antelope |
| **ẹfọ̀n** | buffalo |
| **ìkookò** | hyena |
| **ejò** | snake |
| **ọ̀nì** | crocodile |
| **ìjàpá** | tortoise |
| **ọ̀kẹ́rẹ́** | squirrel |
| **eku** | rat |

## Birds (ẹyẹ)
| Yoruba | English |
|---|---|
| **ẹyẹlé** | pigeon |
| **àṣá** | hawk |
| **òwìwí** | owl |
| **igún** | vulture |
| **odídẹrẹ́ (ayékòótọ́)** | parrot |
| **ẹ̀gà** | weaver bird |

## Other creatures
**ẹja** (fish), **akàn** (crab), **ọ̀pọ̀lọ́** (frog/toad), **labalábá** (butterfly), **oyin** (bee), **ẹ̀fọn** (mosquito), **eṣinṣin** (housefly), **eèrà** (ant), **aláǹgbá** (lizard), **ìgbín** (snail).

## Sentences
- **Ajá ń gbó.** — The dog is barking.
- **Ẹyẹ ń fò.** — The bird is flying.
- **Ẹja ń wẹ̀ nínú omi.** — The fish is swimming in water.
- **Erin tóbi.** — The elephant is big.
- **Ológbò ń pa eku.** — The cat kills rats.
- **Màlúù ń jẹ koríko.** — The cow eats grass.

## Uses of animals
food (meat, eggs, milk); guarding the home (dog); transport (horse, donkey); skins for drums; sacrifice and festivals.

## Animals in sayings
Animals appear in many proverbs and tales: the **tortoise** for cunning, the **lion** (or leopard) for royalty and courage, the **parrot** for talkativeness, the **dog** for loyalty.`,
          examples: `**Example 1.** What is **ajá**, and is it a domestic or a wild animal? *Answer:* **Dog** — a domestic animal (*ẹran ọ̀sìn*).

**Example 2.** Give the Yoruba word for elephant. *Answer:* **erin**.

**Example 3.** Translate: **Ẹyẹ ń fò.** *Answer:* **The bird is flying**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'dog' is", "ajá", "ológbò", "ewúrẹ́", "ẹṣin", "It guards the home."],
          ["E", "'Ẹyẹ' means", "bird", "fish", "snake", "rat", "It has wings and can fly."],
          ["E", "The Yoruba word for 'goat' is", "ewúrẹ́", "àgùntàn", "màlúù", "ẹlẹ́dẹ̀", "It is a common domestic animal."],
          ["M", "'Erin' is", "an elephant", "a lion", "a monkey", "a leopard", "It is the largest land animal."],
          ["M", "The Yoruba word for 'cat' is", "ológbò", "ehoro", "ọ̀bọ", "eku", "It catches rats."],
          ["M", "'Adìyẹ' means", "fowl", "duck", "pigeon", "turkey", "It lays the eggs we commonly eat."],
          ["M", "'Ẹja ń wẹ̀ nínú omi' means", "The fish is swimming in water", "The bird is flying in the sky", "The dog is barking at home", "The cow is eating grass", "Ẹja is fish and omi is water."],
          ["H", "The Yoruba word for 'lion' is", "kìnnìún", "ẹkùn", "ẹfọ̀n", "ìkookò", "Ẹkùn is the leopard."],
          ["H", "Animals reared at home are called", "ẹran ọ̀sìn", "ẹranko igbó", "ẹyẹ", "ẹja", "Ọ̀sìn means rearing."],
          ["H", "'Odídẹrẹ́' is", "a parrot", "an owl", "a vulture", "a hawk", "It is known for imitating speech."],
        ],
      },
    ],
  },
];
