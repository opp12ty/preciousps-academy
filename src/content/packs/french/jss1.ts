import type { TermPlan } from "../types";

/** JSS1 French — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to French and the francophone world",
        subtopics: ["Why Nigerians learn French", "French-speaking neighbours of Nigeria", "The francophone world", "Simple classroom French"],
        objectives: ["State reasons for learning French in Nigeria", "Name Nigeria's French-speaking neighbours", "Explain the term francophone", "Use simple classroom expressions"],
        lesson: {
          title: "Bienvenue au français!",
          summary: "Explain why French matters to Nigerians and meet the francophone world.",
          minutes: 40,
          notes: `## Why learn French?
- Nigeria is **surrounded by French-speaking countries**: **Benin** (west), **Niger** (north), **Chad** (north-east) and **Cameroon** (east; Cameroon uses both French and English)
- French helps **trade**, travel and good relations with neighbours (e.g. ECOWAS)
- French is an official language of the **African Union**, the **United Nations** and many international bodies
- it opens **jobs**: interpreting, translation, teaching, diplomacy, tourism, international business
- it is a subject in the **BECE** and senior examinations

## The francophone world
- **francophone** means **French-speaking**; **la Francophonie** is the community of French-speaking countries
- French is spoken in **France**, **Belgium**, **Switzerland**, **Canada** (Quebec) and many African countries: **Senegal, Côte d'Ivoire, Togo, Benin, Niger, Mali, Burkina Faso, Cameroon, Chad, Guinea, Gabon, the Democratic Republic of the Congo**, and others
- the capital of **France** is **Paris**

## Classroom French
| French | English |
|---|---|
| **Bonjour, Monsieur / Madame** | Good morning/afternoon, Sir / Madam |
| **Levez-vous!** | Stand up! |
| **Asseyez-vous!** | Sit down! |
| **Écoutez!** | Listen! |
| **Répétez!** | Repeat! |
| **Silence, s'il vous plaît!** | Silence, please! |
| **Ouvrez vos livres!** | Open your books! |
| **Fermez vos livres!** | Close your books! |
| **Je ne comprends pas.** | I don't understand. |
| **Merci.** | Thank you. |
| **Oui / Non** | Yes / No |`,
          examples: `**Example 1.** Name two French-speaking countries that share a border with Nigeria. *Answer:* **Benin** and **Niger** (also Chad and Cameroon).

**Example 2.** What does **"Asseyez-vous!"** mean? *Answer:* **Sit down!**

**Example 3.** What does **francophone** mean? *Answer:* **French-speaking**.`,
        },
        questions: [
          ["E", "The French-speaking country on Nigeria's western border is", "Benin", "Ghana", "Liberia", "Kenya", "Benin borders Nigeria to the west."],
          ["E", "The word 'francophone' means", "French-speaking", "English-speaking", "Arabic-speaking", "Spanish-speaking", "Franco refers to French."],
          ["E", "'Merci' means", "thank you", "good night", "please", "sorry", "Merci expresses thanks."],
          ["M", "The capital of France is", "Paris", "Lyon", "Dakar", "Lomé", "Paris is the French capital."],
          ["M", "'Levez-vous!' means", "Stand up!", "Sit down!", "Listen!", "Go out!", "Se lever means to get up."],
          ["M", "'Écoutez!' means", "Listen!", "Write!", "Read!", "Run!", "Écouter means to listen."],
          ["M", "Which of these neighbours of Nigeria uses both French and English officially?", "Cameroon", "Niger", "Benin", "Chad", "Cameroon is bilingual."],
          ["H", "'Je ne comprends pas' means", "I don't understand", "I am hungry", "I am fine", "I don't know him", "Comprendre means to understand."],
          ["H", "Nigerians benefit from learning French mainly because", "Nigeria is surrounded by French-speaking countries", "French is Nigeria's only language", "French is not used in Africa", "English is banned in Nigeria", "Neighbours speak French."],
          ["H", "'Ouvrez vos livres!' means", "Open your books!", "Close your books!", "Read your notes!", "Bring your bags!", "Ouvrir means to open."],
        ],
      },
      {
        week: 2,
        title: "Greetings and leave-taking",
        subtopics: ["Greetings at different times of day", "Formal and informal greetings", "Asking how someone is", "Saying goodbye"],
        objectives: ["Greet people at different times of day", "Distinguish formal from informal greetings", "Ask and answer how someone is", "Take leave politely"],
        lesson: {
          title: "Bonjour! Comment ça va?",
          summary: "Greet people and take leave correctly in French.",
          minutes: 40,
          notes: `## Greetings
| French | English | When |
|---|---|---|
| **Bonjour** | Good morning / Good afternoon / Hello | from morning till about evening |
| **Bonsoir** | Good evening | in the evening |
| **Bonne nuit** | Good night | going to bed (leave-taking) |
| **Salut!** | Hi! / Bye! | **informal** — with friends |

## Formal and informal
- **formal** (to elders, teachers, strangers): **Bonjour, Monsieur.** / **Bonjour, Madame.** / **Bonjour, Mademoiselle.**; use **vous**
- **informal** (to friends, family, younger people): **Salut!**; use **tu**

## Asking how someone is
| Question | Register |
|---|---|
| **Comment allez-vous?** | formal — How are you? |
| **Comment vas-tu?** | informal |
| **Ça va?** | very informal — Are you OK? |
### Answers
- **Je vais bien, merci.** — I am fine, thank you.
- **Très bien, merci.** — Very well, thank you.
- **Ça va bien.** — I'm fine.
- **Comme ci, comme ça.** — So-so.
- **Pas mal.** — Not bad.
- **Je ne vais pas bien.** — I am not well.
- **Et vous? / Et toi?** — And you?

## Saying goodbye
**Au revoir** (goodbye), **À bientôt** (see you soon), **À demain** (see you tomorrow), **À plus tard** (see you later), **Bonne journée** (have a good day), **Bonne nuit** (good night).

## Sample dialogue
— Bonjour, Madame Okafor!
— Bonjour, Ada. Comment vas-tu?
— Je vais bien, merci. Et vous?
— Très bien, merci. Au revoir!
— Au revoir, Madame. À demain!`,
          examples: `**Example 1.** How do you greet your teacher, Mr Bello, in the morning? *Answer:* **Bonjour, Monsieur.**

**Example 2.** What does **"À demain"** mean? *Answer:* **See you tomorrow.**

**Example 3.** Reply to **"Comment allez-vous?"** *Answer:* **Je vais bien, merci.**`,
        },
        questions: [
          ["E", "'Bonjour' is used to say", "good morning or hello", "good night", "goodbye", "thank you", "It is the daytime greeting."],
          ["E", "'Bonsoir' means", "good evening", "good morning", "good night", "see you tomorrow", "Soir means evening."],
          ["E", "'Au revoir' means", "goodbye", "hello", "please", "welcome", "It is used when leaving."],
          ["M", "The informal word for 'hi' among friends is", "Salut", "Monsieur", "Bonsoir", "Madame", "Salut is casual."],
          ["M", "'Comment allez-vous?' means", "How are you?", "What is your name?", "Where are you going?", "How old are you?", "It is a formal question."],
          ["M", "A suitable reply to 'Ça va?' is", "Ça va bien, merci.", "Je m'appelle Ada.", "J'ai douze ans.", "Au revoir, Monsieur.", "It answers how you are."],
          ["M", "'À demain' means", "see you tomorrow", "see you soon", "good night", "see you later today", "Demain means tomorrow."],
          ["H", "When greeting a female teacher formally, a student says", "Bonjour, Madame.", "Salut, Madame!", "Salut, toi!", "Bonne nuit, Madame.", "Formal greeting uses Bonjour."],
          ["H", "'Comme ci, comme ça' means", "so-so", "very well", "very bad", "goodbye", "It describes an average state."],
          ["H", "'Bonne nuit' is used", "when going to bed", "at breakfast", "when arriving in the morning", "at noon", "It means good night."],
        ],
      },
      {
        week: 3,
        title: "Introducing oneself",
        subtopics: ["Saying one's name", "Saying one's age", "Nationality and where one lives", "Introducing others"],
        objectives: ["State one's name in French", "State one's age in French", "State nationality and place of residence", "Introduce another person"],
        lesson: {
          title: "Je m'appelle…",
          summary: "Introduce yourself and others in French.",
          minutes: 40,
          notes: `## Name
- **Comment t'appelles-tu?** (informal) / **Comment vous appelez-vous?** (formal) — What is your name?
- **Je m'appelle Chidi.** — My name is Chidi.
- **Mon nom est Okon.** — My (sur)name is Okon.

## Age
- **Quel âge as-tu?** / **Quel âge avez-vous?** — How old are you?
- **J'ai douze ans.** — I am twelve years old.
Note: French uses the verb **avoir** (to have) for age, and always adds **ans**.

## Nationality
- **Je suis nigérian.** (boy) — I am Nigerian.
- **Je suis nigériane.** (girl) — I am Nigerian.
The feminine usually adds **-e**. Nationality adjectives are written with a **small letter** in French.
| Country | Masculine | Feminine |
|---|---|---|
| le Nigeria | nigérian | nigériane |
| la France | français | française |
| le Bénin | béninois | béninoise |
| le Ghana | ghanéen | ghanéenne |

## Where you live
- **Où habites-tu?** — Where do you live?
- **J'habite à Abuja.** — I live in Abuja. (Use **à** before a town.)
- **J'habite au Nigeria.** — I live in Nigeria.

## Introducing others
- **Voici mon ami, Tunde.** — Here is my friend, Tunde.
- **Il s'appelle Tunde.** — His name is Tunde.
- **Elle s'appelle Amina.** — Her name is Amina.
- **Enchanté(e)!** — Pleased to meet you!

## Model paragraph
Bonjour! Je m'appelle Amina Bello. J'ai onze ans. Je suis nigériane. J'habite à Kano. Je suis élève en première année.`,
          examples: `**Example 1.** Translate: *I am thirteen years old.* *Answer:* **J'ai treize ans.**

**Example 2.** A girl says she is Nigerian. *Answer:* **Je suis nigériane.**

**Example 3.** Translate: *I live in Lagos.* *Answer:* **J'habite à Lagos.**`,
        },
        questions: [
          ["E", "'Je m'appelle Tunde' means", "My name is Tunde", "I am Tunde's friend", "I live with Tunde", "I am calling Tunde", "S'appeler gives one's name."],
          ["E", "'Comment t'appelles-tu?' means", "What is your name?", "How old are you?", "Where do you live?", "How are you?", "It asks for a name."],
          ["E", "'J'ai douze ans' means", "I am twelve years old", "I have twelve books", "I am in class twelve", "I live at number twelve", "Avoir is used for age."],
          ["M", "'Quel âge as-tu?' means", "How old are you?", "What is your name?", "Where are you from?", "What time is it?", "It asks for age."],
          ["M", "A Nigerian girl says", "Je suis nigériane.", "Je suis nigérian.", "Je suis Nigeria.", "J'ai nigériane.", "Feminine adds -e."],
          ["M", "'J'habite à Abuja' means", "I live in Abuja", "I am going to Abuja", "I come from Abuja only", "I like Abuja", "Habiter means to live."],
          ["M", "'Elle s'appelle Amina' means", "Her name is Amina", "His name is Amina", "My name is Amina", "Amina is calling her", "Elle refers to a female."],
          ["H", "The correct French for 'I am fourteen years old' is", "J'ai quatorze ans.", "Je suis quatorze ans.", "J'ai quatorze.", "Je suis quatorze.", "French uses avoir and ans."],
          ["H", "'Enchanté' is said when", "meeting someone for the first time", "leaving a party", "apologising", "eating", "It means pleased to meet you."],
          ["H", "The feminine form of 'français' is", "française", "françaises", "françois", "francaisse", "Add -e for feminine."],
        ],
      },
      {
        week: 4,
        title: "The French alphabet and accents",
        subtopics: ["The French alphabet", "Spelling names", "Accents and the cedilla", "Special sounds"],
        objectives: ["Recite the French alphabet", "Spell names in French", "Identify French accents and their effects", "Pronounce common French sounds"],
        lesson: {
          title: "L'alphabet français",
          summary: "Pronounce the alphabet and recognise accents.",
          minutes: 40,
          notes: `## The alphabet
French uses the same **26 letters** as English, but they are **pronounced differently**. Some approximate sounds:
| Letter | Sound | Letter | Sound |
|---|---|---|---|
| A | "ah" | N | "en" |
| B | "bay" | O | "oh" |
| C | "say" | P | "pay" |
| D | "day" | Q | "kü" |
| E | "uh" | R | "air" (from the throat) |
| F | "eff" | S | "ess" |
| G | "zhay" | T | "tay" |
| H | "ash" | U | "ü" (lips rounded) |
| I | "ee" | V | "vay" |
| J | "zhee" | W | "doo-bluh-vay" |
| K | "kah" | X | "eeks" |
| L | "ell" | Y | "ee-grek" |
| M | "em" | Z | "zed" |
**Note:** in French, **E** sounds like "uh" and **I** sounds like "ee" — they are often confused by beginners. **G** and **J** are also easily mixed up.

## Spelling
**Comment ça s'écrit?** — How is it spelt? **Ça s'écrit…** — It is spelt…

## Accents
| Accent | Name | Example | Effect |
|---|---|---|---|
| **é** | accent **aigu** (acute) | **école**, **été** | "ay" sound |
| **è** | accent **grave** | **mère**, **très** | open "eh" sound |
| **ê** | accent **circonflexe** | **fête**, **tête** | often shows a lost "s" (feast, head) |
| **ç** | **cédille** (cedilla) | **français**, **garçon** | makes **c** sound like **s** before a, o, u |
| **ë / ï** | **tréma** | **Noël**, **naïf** | vowel pronounced separately |
Accents are part of the spelling — leaving them out is a **mistake**. The accent can also change meaning: **a** (has) vs **à** (to/at), **ou** (or) vs **où** (where).

## Special sounds
- final consonants are often **silent**: *petit*, *grand*, *Paris*
- **h** is silent: *hôtel*
- **ou** = "oo" (*vous*); **oi** = "wa" (*moi*); **eau / au** = "oh" (*beau*)
- nasal sounds: **an/en**, **on**, **in** (*enfant, bonbon, vin*)`,
          examples: `**Example 1.** Name the accent on **é**. *Answer:* **accent aigu** (acute accent).

**Example 2.** Why does **garçon** have a cedilla? *Answer:* The **ç** makes the **c** sound like **s** before **o**.

**Example 3.** What is the difference between **ou** and **où**? *Answer:* **ou** = or; **où** = where.`,
        },
        questions: [
          ["E", "The number of letters in the French alphabet is", "26", "24", "28", "30", "Same letters as English."],
          ["E", "The accent on 'é' is called", "accent aigu", "accent grave", "accent circonflexe", "cédille", "It is the acute accent."],
          ["E", "The mark under the c in 'ç' is the", "cédille", "tréma", "accent grave", "accent aigu", "It softens the c."],
          ["M", "The accent on 'è' as in 'mère' is the", "accent grave", "accent aigu", "accent circonflexe", "tréma", "It slopes down to the right."],
          ["M", "The cedilla makes the letter c sound like", "s", "k", "g", "z", "Ç is pronounced like s."],
          ["M", "'Comment ça s'écrit?' means", "How is it spelt?", "How are you?", "What is your name?", "How much is it?", "Écrire means to write."],
          ["M", "In the word 'hôtel', the letter h is", "silent", "pronounced strongly", "pronounced like k", "pronounced like r", "French h is silent."],
          ["H", "The word 'où' with an accent means", "where", "or", "yes", "who", "Ou without accent means or."],
          ["H", "The accent circonflexe in words like 'fête' often shows that", "an s has been lost from an older spelling", "the word is plural", "the word is feminine", "the vowel is silent", "Compare feast and fête."],
          ["H", "The letters 'oi' in 'moi' are pronounced like", "wa", "oy", "oh", "ee", "Oi sounds like wa."],
        ],
      },
      {
        week: 5,
        title: "Numbers 0 to 20",
        subtopics: ["Numbers 0 to 10", "Numbers 11 to 20", "Using numbers in sentences", "Simple sums in French"],
        objectives: ["Count from 0 to 10 in French", "Count from 11 to 20 in French", "Use numbers in simple sentences", "Do simple sums in French"],
        lesson: {
          title: "Les nombres de 0 à 20",
          summary: "Count and calculate from 0 to 20 in French.",
          minutes: 40,
          notes: `## Numbers 0–10
| 0 zéro | 1 un | 2 deux | 3 trois | 4 quatre | 5 cinq |
|---|---|---|---|---|---|
| 6 six | 7 sept | 8 huit | 9 neuf | 10 dix | |

## Numbers 11–20
| 11 onze | 12 douze | 13 treize | 14 quatorze | 15 quinze |
|---|---|---|---|---|
| 16 seize | 17 dix-sept | 18 dix-huit | 19 dix-neuf | 20 vingt |
**Note:** 17, 18 and 19 are formed as **dix + sept**, **dix + huit**, **dix + neuf** with a **hyphen**.

## Un and une
**un** is used with masculine nouns and **une** with feminine nouns: *un livre* (one book), *une règle* (one ruler).

## Using numbers
- **J'ai dix ans.** — I am ten.
- **Il y a vingt élèves.** — There are twenty pupils.
- **J'ai trois frères.** — I have three brothers.
- **Combien de…?** — How many…? *Combien de stylos as-tu?* — How many pens do you have?

## Simple sums
| French | Meaning |
|---|---|
| **plus** (et) | + |
| **moins** | − |
| **fois** | × |
| **divisé par** | ÷ |
| **font / égale** | = |
- **Deux plus trois font cinq.** (2 + 3 = 5)
- **Dix moins quatre font six.** (10 − 4 = 6)
- **Trois fois cinq font quinze.** (3 × 5 = 15)
- **Vingt divisé par quatre font cinq.** (20 ÷ 4 = 5)

## Pronunciation tips
the final consonant of **six** and **dix** is silent before a consonant (*six livres*) but pronounced "z" before a vowel (*six ans*) and "s" alone; **neuf** before *ans* sounds like "neuv".`,
          examples: `**Example 1.** Write 15 in French. *Answer:* **quinze**.

**Example 2.** Translate **"Sept plus huit font quinze."** *Answer:* **7 + 8 = 15**.

**Example 3.** How is 18 written? *Answer:* **dix-huit**.`,
        },
        questions: [
          ["E", "'Trois' means", "3", "13", "30", "2", "Trois is three."],
          ["E", "'Dix' means", "10", "2", "12", "20", "Dix is ten. Answer: 10."],
          ["E", "The French word for 20 is", "vingt", "douze", "dix", "deux", "Vingt is twenty."],
          ["M", "'Quatorze' means", "14", "4", "40", "15", "Quatorze is fourteen."],
          ["M", "The French word for 17 is", "dix-sept", "sept", "seize", "soixante", "It is ten plus seven."],
          ["M", "'Deux plus trois font' gives", "cinq", "six", "quatre", "un", "2 + 3 = 5. Answer: cinq."],
          ["M", "'Combien de' means", "how many", "how old", "where", "who", "It asks for quantity."],
          ["H", "'Trois fois six font' gives", "dix-huit", "neuf", "quinze", "seize", "3 × 6 = 18. Answer: dix-huit."],
          ["H", "'Vingt moins sept font' gives", "treize", "douze", "quatorze", "onze", "20 − 7 = 13. Answer: treize."],
          ["H", "The French word for 16 is", "seize", "six", "soixante", "dix-six", "Seize is sixteen."],
        ],
      },
      {
        week: 6,
        title: "Classroom objects",
        subtopics: ["Names of classroom objects", "Asking what something is", "Il y a in the classroom", "Classroom requests"],
        objectives: ["Name common classroom objects in French", "Ask and answer 'What is it?'", "Describe the classroom with 'il y a'", "Make polite classroom requests"],
        lesson: {
          title: "Dans la salle de classe",
          summary: "Name classroom objects and make simple requests.",
          minutes: 40,
          notes: `## Classroom objects
| Masculine (un) | Feminine (une) |
|---|---|
| **un stylo** — a pen | **une règle** — a ruler |
| **un crayon** — a pencil | **une gomme** — an eraser |
| **un livre** — a book | **une table** — a table |
| **un cahier** — an exercise book | **une chaise** — a chair |
| **un sac** — a bag | **une porte** — a door |
| **un tableau** — a board | **une fenêtre** — a window |
| **un bureau** — a desk | **une craie** — a piece of chalk |
| **un taille-crayon** — a sharpener | **une trousse** — a pencil case |
| **un ordinateur** — a computer | **une carte** — a map |

## Asking what something is
- **Qu'est-ce que c'est?** — What is it?
- **C'est un stylo.** — It is a pen.
- **C'est une règle.** — It is a ruler.
- **Ce sont des livres.** — They are books.

## Il y a
**Il y a** means **there is / there are**.
- **Il y a un tableau dans la classe.** — There is a board in the classroom.
- **Il y a trente chaises.** — There are thirty chairs.
- **Qu'est-ce qu'il y a dans ton sac?** — What is in your bag?

## Classroom requests
- **Prête-moi ton stylo, s'il te plaît.** — Lend me your pen, please (informal).
- **Est-ce que je peux sortir?** — May I go out?
- **Pouvez-vous répéter, s'il vous plaît?** — Can you repeat, please?
- **Comment dit-on "ruler" en français?** — How do you say "ruler" in French?
- **On dit "une règle".** — We say "une règle".`,
          examples: `**Example 1.** Translate: *It is an exercise book.* *Answer:* **C'est un cahier.**

**Example 2.** What does **"Il y a une carte"** mean? *Answer:* **There is a map.**

**Example 3.** How do you ask "What is it?" *Answer:* **Qu'est-ce que c'est?**`,
        },
        questions: [
          ["E", "'Un stylo' means", "a pen", "a pencil", "a ruler", "a book", "Stylo is pen. Answer: a pen."],
          ["E", "'Une chaise' means", "a chair", "a table", "a door", "a window", "Chaise is chair."],
          ["E", "'Un livre' means", "a book", "a bag", "a board", "a desk", "Livre is book. Answer: a book."],
          ["M", "'Une gomme' means", "an eraser", "a pencil case", "a ruler", "chalk", "Gomme rubs out."],
          ["M", "'Qu'est-ce que c'est?' means", "What is it?", "Who is it?", "Where is it?", "How much is it?", "It asks for identification."],
          ["M", "'Il y a' means", "there is or there are", "he has", "he is", "she goes", "It describes what exists."],
          ["M", "The French word for 'exercise book' is", "un cahier", "un crayon", "un tableau", "une craie", "Cahier is exercise book."],
          ["H", "'Est-ce que je peux sortir?' means", "May I go out?", "Can you come in?", "Shall we sit?", "Do you want to play?", "Sortir means to go out."],
          ["H", "The correct sentence for 'They are books' is", "Ce sont des livres.", "C'est un livres.", "Il y a livre.", "Ce sont une livre.", "Plural uses ce sont des."],
          ["H", "'Comment dit-on \"ruler\" en français?' asks", "how to say a word in French", "where the ruler is", "who owns the ruler", "how much a ruler costs", "Dire means to say."],
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
        title: "Gender and articles",
        subtopics: ["Masculine and feminine nouns", "Indefinite articles", "Definite articles", "Plural of nouns"],
        objectives: ["Explain gender of French nouns", "Use indefinite articles un, une, des", "Use definite articles le, la, l', les", "Form the plural of regular nouns"],
        lesson: {
          title: "Le, la, les — un, une, des",
          summary: "Use French articles correctly with masculine, feminine and plural nouns.",
          minutes: 40,
          notes: `## Gender
Every French noun is either **masculine** or **feminine** — even objects. Learn each noun **with its article**.

## Indefinite articles (a, an, some)
| | Masculine | Feminine |
|---|---|---|
| singular | **un** (un garçon) | **une** (une fille) |
| plural | **des** (des garçons) | **des** (des filles) |

## Definite articles (the)
| | Masculine | Feminine |
|---|---|---|
| singular | **le** (le livre) | **la** (la table) |
| before a vowel or silent h | **l'** (l'arbre, l'hôtel) | **l'** (l'école) |
| plural | **les** (les livres) | **les** (les tables) |
**Elision:** **le** and **la** become **l'** before a vowel or a silent **h**.

## Plural of nouns
- most nouns add **-s**: un livre → des livres
- nouns ending in **-eau**, **-eu** add **-x**: un tableau → des tableaux; un jeu → des jeux
- nouns ending in **-al** usually change to **-aux**: un animal → des animaux; un journal → des journaux
- nouns ending in **-s, -x, -z** do not change: un bras → des bras
The final **-s** is usually **silent**; the article (les, des) tells us it is plural.

## Some tips on gender
- people: **le garçon, le père** (masc.); **la fille, la mère** (fem.)
- many nouns ending in **-tion**, **-ette**, **-ure** are feminine: la nation, la fourchette, la voiture
- many nouns ending in **-ment**, **-eau** are masculine: le bâtiment, le bureau`,
          examples: `**Example 1.** Give the definite article: ___ école. *Answer:* **l'école**.

**Example 2.** Make plural: **un tableau**. *Answer:* **des tableaux**.

**Example 3.** Give the indefinite article: ___ fille. *Answer:* **une** fille.`,
        },
        questions: [
          ["E", "The indefinite article used with a masculine singular noun is", "un", "une", "la", "les", "Un garçon. Answer: un."],
          ["E", "The indefinite article used with a feminine singular noun is", "une", "un", "le", "des", "Une fille. Answer: une."],
          ["E", "The definite article 'les' is used with", "plural nouns", "only masculine singular nouns", "only feminine singular nouns", "verbs", "Les means the (plural)."],
          ["M", "Which is correct?", "l'école", "la école", "le école", "les école", "Elision before a vowel."],
          ["M", "The plural of 'un livre' is", "des livres", "des livrex", "les livre", "un livres", "Add -s. Answer: des livres."],
          ["M", "The plural of 'un tableau' is", "des tableaux", "des tableaus", "des tableau", "les tableaues", "-eau adds -x. Answer: des tableaux."],
          ["M", "The plural of 'un animal' is", "des animaux", "des animals", "des animales", "les animal", "-al becomes -aux."],
          ["H", "'Le' and 'la' become 'l'' before", "a vowel or silent h", "every consonant", "plural nouns", "numbers", "This is elision."],
          ["H", "Which noun is feminine?", "la voiture", "le bureau", "le garçon", "le livre", "Voiture takes la."],
          ["H", "In 'des livres', the plural is shown mainly by", "the article des", "a loud final s", "a change of the stem", "an accent", "The final s is silent."],
        ],
      },
      {
        week: 2,
        title: "The family",
        subtopics: ["Members of the family", "Describing one's family", "Using possessives mon, ma, mes", "Talking about family size"],
        objectives: ["Name family members in French", "Describe one's family in simple sentences", "Use mon, ma and mes correctly", "Talk about the number of brothers and sisters"],
        lesson: {
          title: "Ma famille",
          summary: "Talk about family members in French.",
          minutes: 40,
          notes: `## Family members
| Masculine | Feminine |
|---|---|
| **le père** — father | **la mère** — mother |
| **le papa** — dad | **la maman** — mum |
| **le frère** — brother | **la sœur** — sister |
| **le fils** — son | **la fille** — daughter |
| **le grand-père** — grandfather | **la grand-mère** — grandmother |
| **l'oncle** — uncle | **la tante** — aunt |
| **le cousin** — cousin (m) | **la cousine** — cousin (f) |
| **le mari** — husband | **la femme** — wife |
Plural: **les parents** (parents), **les grands-parents** (grandparents), **les enfants** (children).

## Possessives "my"
- **mon** + masculine noun: **mon père, mon frère**
- **ma** + feminine noun: **ma mère, ma sœur**
- **mes** + plural noun: **mes parents, mes sœurs**
- before a feminine noun starting with a vowel use **mon**: **mon amie** (my female friend)

## Describing your family
- **Il y a cinq personnes dans ma famille.** — There are five people in my family.
- **J'ai deux frères et une sœur.** — I have two brothers and one sister.
- **Je n'ai pas de sœur.** — I don't have a sister.
- **Je suis fils unique / fille unique.** — I am an only child.
- **Mon père s'appelle Monsieur Adewale.** — My father is called Mr Adewale.
- **Ma mère est infirmière.** — My mother is a nurse.

## Questions
- **Combien de frères as-tu?** — How many brothers do you have?
- **Comment s'appelle ta mère?** — What is your mother's name?

## Model paragraph
Je m'appelle Ngozi. Il y a six personnes dans ma famille: mon père, ma mère, mes deux frères, ma sœur et moi. Mon père est médecin. J'aime ma famille.`,
          examples: `**Example 1.** Translate: *my sister*. *Answer:* **ma sœur**.

**Example 2.** Translate: *I have two brothers.* *Answer:* **J'ai deux frères.**

**Example 3.** What does **"mes grands-parents"** mean? *Answer:* **my grandparents**.`,
        },
        questions: [
          ["E", "'Le père' means", "the father", "the mother", "the brother", "the uncle", "Père is father."],
          ["E", "'La mère' means", "the mother", "the sister", "the aunt", "the daughter", "Mère is mother."],
          ["E", "'Le frère' means", "the brother", "the father", "the son", "the cousin", "Frère is brother."],
          ["M", "'La sœur' means", "the sister", "the aunt", "the grandmother", "the wife", "Sœur is sister."],
          ["M", "'Ma' is used before", "a feminine singular noun", "a masculine singular noun", "plural nouns", "verbs", "Ma mère. Answer: a feminine singular noun."],
          ["M", "'Mes parents' means", "my parents", "your parents", "his parents", "our parents", "Mes is plural my."],
          ["M", "'La grand-mère' means", "the grandmother", "the great aunt", "the mother-in-law", "the big sister", "Grand-mère is grandmother."],
          ["H", "'J'ai deux frères et une sœur' means", "I have two brothers and one sister", "I have two sisters and one brother", "My two brothers have one sister", "I am two brothers and a sister", "Count the nouns."],
          ["H", "The correct form for 'my female friend' is", "mon amie", "ma amie", "mes amie", "ma ami", "Mon is used before a vowel."],
          ["H", "'Je suis fille unique' means", "I am an only child (girl)", "I am a unique girl", "I am the first daughter", "I have one daughter", "Unique means only."],
        ],
      },
      {
        week: 3,
        title: "Subject pronouns and the verb être",
        subtopics: ["Subject pronouns", "Tu and vous", "Conjugation of être", "Using être in sentences"],
        objectives: ["Identify French subject pronouns", "Distinguish tu from vous", "Conjugate the verb être in the present tense", "Use être to describe people"],
        lesson: {
          title: "Je suis, tu es…",
          summary: "Use subject pronouns and the verb être (to be).",
          minutes: 40,
          notes: `## Subject pronouns
| French | English |
|---|---|
| **je (j')** | I |
| **tu** | you (one friend, informal) |
| **il** | he / it (masculine) |
| **elle** | she / it (feminine) |
| **on** | one / we (informal) / people |
| **nous** | we |
| **vous** | you (polite singular, or plural) |
| **ils** | they (masculine or mixed group) |
| **elles** | they (all feminine) |
**je** becomes **j'** before a vowel: *j'ai, j'habite*.

## Tu and vous
- **tu** — to a friend, family member, child or animal (informal, one person)
- **vous** — to an adult you respect, a stranger, a teacher (**polite**), or to **more than one** person

## The verb être (to be) — present tense
| | |
|---|---|
| **je suis** | I am |
| **tu es** | you are |
| **il / elle / on est** | he / she / one is |
| **nous sommes** | we are |
| **vous êtes** | you are |
| **ils / elles sont** | they are |
**Être** is **irregular** — learn it by heart.

## Using être
- **Je suis élève.** — I am a pupil. (no article before a profession)
- **Elle est grande.** — She is tall.
- **Nous sommes nigérians.** — We are Nigerian.
- **Vous êtes professeur?** — Are you a teacher?
- **Ils sont dans la classe.** — They are in the class.
- **C'est** — it is / this is: *C'est mon ami.*

## Negative
**ne … pas** around the verb: **Je ne suis pas malade.** — I am not sick.`,
          examples: `**Example 1.** Complete: **Nous ___ élèves.** *Answer:* **sommes**.

**Example 2.** Which pronoun would you use to address your principal? *Answer:* **vous**.

**Example 3.** Translate: *They (girls) are happy.* *Answer:* **Elles sont contentes.**`,
        },
        questions: [
          ["E", "The French pronoun for 'I' is", "je", "tu", "il", "nous", "Je means I. Answer: je."],
          ["E", "The French pronoun for 'we' is", "nous", "vous", "ils", "elles", "Nous means we. Answer: nous."],
          ["E", "'Je suis' means", "I am", "I have", "I go", "I do", "Être means to be."],
          ["M", "Complete: Tu ___ mon ami.", "es", "est", "suis", "sont", "Tu es. Answer: es."],
          ["M", "Complete: Nous ___ nigérians.", "sommes", "êtes", "sont", "est", "Nous sommes. Answer: sommes."],
          ["M", "Complete: Ils ___ dans la classe.", "sont", "sommes", "est", "êtes", "Ils sont. Answer: sont."],
          ["M", "The pronoun used for a group of girls only is", "elles", "ils", "vous", "on", "Elles is feminine plural."],
          ["H", "A student speaking politely to the principal uses", "vous", "tu", "on", "elles", "Vous shows respect."],
          ["H", "'Vous êtes' means", "you are (polite or plural)", "we are", "they are", "you have", "Vous êtes from être."],
          ["H", "The negative of 'Je suis malade' is", "Je ne suis pas malade.", "Je suis ne pas malade.", "Je pas suis malade.", "Ne je suis pas malade.", "Ne…pas surrounds the verb."],
        ],
      },
      {
        week: 4,
        title: "The verb avoir",
        subtopics: ["Conjugation of avoir", "Expressing possession", "Expressions with avoir", "Negative with avoir"],
        objectives: ["Conjugate the verb avoir in the present tense", "Express possession with avoir", "Use common expressions with avoir", "Form negative sentences with avoir"],
        lesson: {
          title: "J'ai, tu as…",
          summary: "Use the verb avoir (to have) and its common expressions.",
          minutes: 40,
          notes: `## The verb avoir (to have) — present tense
| | |
|---|---|
| **j'ai** | I have |
| **tu as** | you have |
| **il / elle / on a** | he / she / one has |
| **nous avons** | we have |
| **vous avez** | you have |
| **ils / elles ont** | they have |
**Avoir** is **irregular**. Be careful: **ils sont** (they are) vs **ils ont** (they have).

## Possession
- **J'ai un vélo.** — I have a bicycle.
- **Elle a deux sœurs.** — She has two sisters.
- **Nous avons un chien.** — We have a dog.

## Expressions with avoir
| French | English |
|---|---|
| **avoir … ans** | to be … years old |
| **avoir faim** | to be hungry |
| **avoir soif** | to be thirsty |
| **avoir chaud** | to be hot |
| **avoir froid** | to be cold |
| **avoir peur (de)** | to be afraid (of) |
| **avoir sommeil** | to be sleepy |
| **avoir raison** | to be right |
| **avoir tort** | to be wrong |
| **avoir mal à** | to have a pain in |
French uses **avoir** where English uses **to be**: *J'ai faim* = I **am** hungry.

## Negative with avoir
After a negative, **un, une, des** become **de (d')**:
- **J'ai un stylo.** → **Je n'ai pas de stylo.** (I don't have a pen.)
- **Il a des frères.** → **Il n'a pas de frères.**
- **Nous avons une voiture.** → **Nous n'avons pas de voiture.**
Note: **ne** becomes **n'** before a vowel.`,
          examples: `**Example 1.** Complete: **Ils ___ un ballon.** *Answer:* **ont**.

**Example 2.** Translate: *I am hungry.* *Answer:* **J'ai faim.**

**Example 3.** Make negative: **J'ai un frère.** *Answer:* **Je n'ai pas de frère.**`,
        },
        questions: [
          ["E", "'J'ai' means", "I have", "I am", "I go", "I eat", "Avoir means to have."],
          ["E", "Complete: Tu ___ un stylo.", "as", "a", "ai", "ont", "Tu as. Answer: as."],
          ["E", "'J'ai faim' means", "I am hungry", "I am thirsty", "I am cold", "I am afraid", "Faim is hunger."],
          ["M", "Complete: Nous ___ une voiture.", "avons", "avez", "ont", "as", "Nous avons. Answer: avons."],
          ["M", "Complete: Elles ___ deux chats.", "ont", "sont", "avons", "a", "Elles ont. Answer: ont."],
          ["M", "'J'ai soif' means", "I am thirsty", "I am hungry", "I am sleepy", "I am right", "Soif is thirst."],
          ["M", "'Il a peur' means", "He is afraid", "He is cold", "He is tired", "He is late", "Peur is fear. Answer: He is afraid."],
          ["H", "The negative of 'J'ai un stylo' is", "Je n'ai pas de stylo.", "Je n'ai pas un stylo.", "Je ne pas ai stylo.", "J'ai pas stylo de.", "Un becomes de after pas."],
          ["H", "'Ils sont' and 'ils ont' mean respectively", "they are / they have", "they have / they are", "they go / they are", "they are / they go", "Être vs avoir. Answer: they are / they have."],
          ["H", "'Tu as raison' means", "You are right", "You are wrong", "You have a reason to leave", "You are angry", "Avoir raison = to be right."],
        ],
      },
      {
        week: 5,
        title: "Colours",
        subtopics: ["Names of colours", "Agreement of colour adjectives", "Position of colour adjectives", "Describing things with colours"],
        objectives: ["Name colours in French", "Make colour adjectives agree with nouns", "Place colour adjectives correctly", "Describe objects using colours"],
        lesson: {
          title: "Les couleurs",
          summary: "Name colours and make them agree with nouns.",
          minutes: 40,
          notes: `## Colours
| Masculine | Feminine | English |
|---|---|---|
| **rouge** | **rouge** | red |
| **jaune** | **jaune** | yellow |
| **bleu** | **bleue** | blue |
| **vert** | **verte** | green |
| **noir** | **noire** | black |
| **blanc** | **blanche** | white |
| **gris** | **grise** | grey |
| **violet** | **violette** | purple |
| **rose** | **rose** | pink |
| **marron** | **marron** | brown |
| **orange** | **orange** | orange |

## Agreement
Colour adjectives **agree** with the noun in **gender** and **number**:
- feminine: usually add **-e**: un sac **vert** → une robe **verte**
- plural: add **-s**: des sacs **verts**, des robes **vertes**
- adjectives already ending in **-e** do not change in the feminine: rouge, jaune, rose
- special: **blanc → blanche**; **violet → violette**
- **marron** and **orange** never change: des chaussures **marron**

## Position
Colour adjectives come **after** the noun:
- **un stylo bleu** — a blue pen
- **une voiture noire** — a black car
- **les fleurs jaunes** — the yellow flowers

## Asking about colour
- **De quelle couleur est…?** — What colour is…?
- **De quelle couleur est ton sac?** — **Mon sac est noir.**

## The Nigerian flag
**Le drapeau nigérian est vert, blanc et vert.** — The Nigerian flag is green, white and green.`,
          examples: `**Example 1.** Translate: *a white shirt* (une chemise). *Answer:* **une chemise blanche**.

**Example 2.** Make agree: **des livres (vert)**. *Answer:* **des livres verts**.

**Example 3.** What colours is the Nigerian flag? *Answer:* **vert, blanc et vert**.`,
        },
        questions: [
          ["E", "'Rouge' means", "red", "blue", "green", "black", "Rouge is red. Answer: red."],
          ["E", "'Vert' means", "green", "grey", "white", "yellow", "Vert is green. Answer: green."],
          ["E", "'Noir' means", "black", "brown", "pink", "white", "Noir is black. Answer: black."],
          ["M", "The feminine form of 'blanc' is", "blanche", "blance", "blanque", "blanc", "Blanc becomes blanche."],
          ["M", "'Une voiture bleue' means", "a blue car", "a black car", "a blue bicycle", "a new car", "Bleue agrees with voiture."],
          ["M", "In French, colour adjectives are usually placed", "after the noun", "before the noun", "at the start of the sentence", "after the verb only", "Un stylo bleu. Answer: after the noun."],
          ["M", "'De quelle couleur est ton sac?' asks", "What colour is your bag?", "Where is your bag?", "How big is your bag?", "Whose bag is this?", "Couleur is colour."],
          ["H", "The correct form is", "des robes vertes", "des robes vert", "des robes verts", "des robe vertes", "Feminine plural adds -es."],
          ["H", "Which colour adjective never changes form?", "marron", "vert", "noir", "gris", "Marron is invariable."],
          ["H", "The Nigerian flag is described in French as", "vert, blanc et vert", "rouge, blanc et bleu", "vert, jaune et rouge", "blanc, vert et blanc", "Green-white-green."],
        ],
      },
      {
        week: 6,
        title: "Days of the week and months of the year",
        subtopics: ["Days of the week", "Months of the year", "Saying the date", "Talking about birthdays"],
        objectives: ["Name the days of the week in French", "Name the months of the year in French", "Say and write the date in French", "Talk about birthdays"],
        lesson: {
          title: "Les jours et les mois",
          summary: "Say the days, months and dates in French.",
          minutes: 40,
          notes: `## Days of the week (les jours de la semaine)
**lundi** (Monday), **mardi** (Tuesday), **mercredi** (Wednesday), **jeudi** (Thursday), **vendredi** (Friday), **samedi** (Saturday), **dimanche** (Sunday).
- days and months are written with a **small letter** in French
- the French week begins on **lundi**
- **le lundi** = on Mondays (every Monday); **lundi** = on (this) Monday

## Months (les mois de l'année)
**janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre**.

## Saying the date
- **Quelle est la date aujourd'hui?** / **Quel jour sommes-nous?** — What is the date today? / What day is it?
- **C'est lundi.** / **Nous sommes lundi.**
- **C'est le douze mars.** — It is the 12th of March.
- use **le + number + month**: le cinq juin, le vingt octobre
- for the **first** day use **premier**: **le premier octobre** (1st October)
- year: **deux mille vingt-six** (2026)
- **aujourd'hui** (today), **demain** (tomorrow), **hier** (yesterday)

## Birthdays
- **C'est quand ton anniversaire?** — When is your birthday?
- **Mon anniversaire, c'est le quinze août.** — My birthday is the 15th of August.
- **Bon anniversaire!** — Happy birthday!

## Nigerian dates
- **la fête de l'Indépendance du Nigeria: le premier octobre**
- **le Jour de la Démocratie: le douze juin**`,
          examples: `**Example 1.** What is **mercredi** in English? *Answer:* **Wednesday**.

**Example 2.** Write *1st October* in French. *Answer:* **le premier octobre**.

**Example 3.** Translate: *Happy birthday!* *Answer:* **Bon anniversaire!**`,
        },
        questions: [
          ["E", "'Lundi' means", "Monday", "Sunday", "Tuesday", "Friday", "The week starts on lundi."],
          ["E", "'Dimanche' means", "Sunday", "Saturday", "Monday", "Thursday", "Dimanche is Sunday."],
          ["E", "'Janvier' is the month of", "January", "June", "July", "February", "Janvier is January."],
          ["M", "'Jeudi' means", "Thursday", "Tuesday", "Wednesday", "Friday", "Jeudi is Thursday."],
          ["M", "The French word for August is", "août", "avril", "juillet", "octobre", "Août is August."],
          ["M", "'Aujourd'hui' means", "today", "tomorrow", "yesterday", "tonight", "Aujourd'hui is today."],
          ["M", "'Bon anniversaire!' means", "Happy birthday!", "Happy new year!", "Good evening!", "Good luck!", "Anniversaire is birthday."],
          ["H", "The correct French for 1st October is", "le premier octobre", "le un octobre", "le première octobre", "le octobre un", "Premier is used for the first."],
          ["H", "In French, the names of days and months are written", "with a small letter", "always in capitals", "with an accent always", "in italics", "Lundi, janvier."],
          ["H", "'Le douze juin' is", "12th June", "2nd June", "12th July", "20th June", "Douze is twelve."],
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
        title: "Numbers 21 to 100",
        subtopics: ["Tens from 20 to 60", "Numbers 70 to 79", "Numbers 80 to 100", "Using larger numbers"],
        objectives: ["Count in tens from 20 to 100", "Form numbers from 70 to 79", "Form numbers from 80 to 100", "Use numbers for prices and quantities"],
        lesson: {
          title: "Les nombres de 21 à 100",
          summary: "Count from 21 to 100 in French.",
          minutes: 40,
          notes: `## Tens
| 20 vingt | 30 trente | 40 quarante | 50 cinquante | 60 soixante |
|---|---|---|---|---|

## 21–69
- with **1**, add **et un**: **vingt et un** (21), **trente et un** (31), **soixante et un** (61)
- other numbers use a **hyphen**: **vingt-deux** (22), **trente-cinq** (35), **quarante-huit** (48), **cinquante-neuf** (59)

## 70–79 (sixty + ten…)
French says **sixty-ten**, **sixty-eleven**, etc.
- **soixante-dix** (70) = 60 + 10
- **soixante et onze** (71)
- **soixante-douze** (72) … **soixante-dix-neuf** (79)

## 80–99 (four twenties…)
- **quatre-vingts** (80) = 4 × 20 (with **-s**)
- **quatre-vingt-un** (81) — no "et", and no **-s**
- **quatre-vingt-dix** (90) = 4 × 20 + 10
- **quatre-vingt-onze** (91) … **quatre-vingt-dix-neuf** (99)

## 100
**cent** (100). 101 = cent un; 200 = deux cents.
(In Belgium and Switzerland, people say **septante** (70) and **nonante** (90).)

## Using larger numbers
- **Ça coûte combien?** — How much does it cost?
- **Ça coûte cinquante nairas.** — It costs fifty naira.
- **Il y a quarante élèves dans la classe.**
- **Mon numéro de téléphone est…** — French often reads phone numbers in pairs: 08 12 34 56 78.`,
          examples: `**Example 1.** Write 75 in French. *Answer:* **soixante-quinze**.

**Example 2.** Write 92 in French. *Answer:* **quatre-vingt-douze**.

**Example 3.** Write 41 in French. *Answer:* **quarante et un**.`,
        },
        questions: [
          ["E", "'Trente' means", "30", "13", "3", "300", "Trente is thirty."],
          ["E", "'Cinquante' means", "50", "5", "15", "500", "Cinquante is fifty."],
          ["E", "The French for 100 is", "cent", "mille", "dix", "soixante", "Cent is a hundred."],
          ["M", "'Soixante' means", "60", "70", "16", "6", "Soixante is sixty."],
          ["M", "The French for 21 is", "vingt et un", "vingt-un", "deux-un", "vingt-et-une-un", "Use et with one."],
          ["M", "'Soixante-dix' means", "70", "60", "80", "90", "It is sixty plus ten."],
          ["M", "'Quatre-vingts' means", "80", "24", "84", "90", "Four twenties. Answer: 80."],
          ["H", "The French for 95 is", "quatre-vingt-quinze", "quatre-vingt-cinq", "nonante", "soixante-quinze", "80 + 15. Answer: quatre-vingt-quinze."],
          ["H", "The French for 73 is", "soixante-treize", "soixante-trois", "septante", "quatre-vingt-treize", "60 + 13. Answer: soixante-treize."],
          ["H", "'Quarante-huit' means", "48", "84", "40", "28", "Quarante is forty."],
        ],
      },
      {
        week: 2,
        title: "Telling the time",
        subtopics: ["Asking the time", "Hours", "Quarter past, half past and quarter to", "Daily times and the 24-hour clock"],
        objectives: ["Ask the time in French", "Tell the time on the hour", "Use et quart, et demie and moins le quart", "Use the 24-hour clock for timetables"],
        lesson: {
          title: "Quelle heure est-il?",
          summary: "Ask and tell the time in French.",
          minutes: 40,
          notes: `## Asking the time
- **Quelle heure est-il?** — What time is it?
- **Il est…** — It is…
- **À quelle heure…?** — At what time…? *À quelle heure commence l'école?*

## On the hour
- **Il est une heure.** — It is one o'clock. (singular **heure**)
- **Il est deux heures.** — It is two o'clock. (plural **heures**)
- **Il est midi.** — It is midday (12 noon).
- **Il est minuit.** — It is midnight.

## Minutes past and to
- **Il est trois heures cinq.** — 3:05
- **Il est trois heures et quart.** — quarter past three (3:15)
- **Il est trois heures et demie.** — half past three (3:30)
- **Il est quatre heures moins vingt.** — twenty to four (3:40)
- **Il est quatre heures moins le quart.** — quarter to four (3:45)
- after midi and minuit, write **demi**: **midi et demi** (12:30)

## Parts of the day
**du matin** (in the morning), **de l'après-midi** (in the afternoon), **du soir** (in the evening).
*Il est sept heures du soir.* — It is 7 p.m.

## 24-hour clock
used for timetables, travel and TV: **quinze heures trente** (15:30), **vingt heures** (20:00).

## Daily routine times
- **Je me lève à six heures.** — I get up at six.
- **L'école commence à sept heures et demie.** — School starts at half past seven.
- **Je mange à midi.** — I eat at midday.`,
          examples: `**Example 1.** Say 2:30 in French. *Answer:* **Il est deux heures et demie.**

**Example 2.** Say 5:45. *Answer:* **Il est six heures moins le quart.**

**Example 3.** What does **"Il est midi"** mean? *Answer:* **It is twelve noon.**`,
        },
        questions: [
          ["E", "'Quelle heure est-il?' means", "What time is it?", "What day is it?", "How old are you?", "Where is the clock?", "Heure means hour."],
          ["E", "'Il est midi' means", "It is noon", "It is midnight", "It is morning", "It is evening", "Midi is midday."],
          ["E", "'Il est minuit' means", "It is midnight", "It is noon", "It is one o'clock", "It is late afternoon", "Minuit is midnight."],
          ["M", "'Il est trois heures et quart' means", "It is quarter past three", "It is quarter to three", "It is half past three", "It is three fifteen p.m. only", "Et quart is quarter past."],
          ["M", "'Il est quatre heures et demie' means", "It is half past four", "It is half past three", "It is four forty", "It is quarter to four", "Et demie is half past."],
          ["M", "The French for 'It is one o'clock' is", "Il est une heure.", "Il est un heures.", "Il est une heures.", "C'est un heure.", "Une heure is singular."],
          ["M", "'Du soir' means", "in the evening", "in the morning", "at noon", "at dawn", "Soir is evening."],
          ["H", "The French for 'quarter to six' is", "six heures moins le quart", "six heures et quart", "cinq heures moins le quart", "six heures et demie", "Moins means minus."],
          ["H", "'Il est dix heures moins dix' means", "It is ten to ten (9:50)", "It is ten past ten", "It is ten o'clock", "It is twenty past nine", "10 minus 10 minutes."],
          ["H", "In the 24-hour clock, 'quinze heures' is", "3 p.m.", "5 p.m.", "3 a.m.", "1 p.m.", "15:00 is 3 p.m."],
        ],
      },
      {
        week: 3,
        title: "Parts of the body",
        subtopics: ["Head and face", "Body and limbs", "Describing oneself", "Avoir mal à"],
        objectives: ["Name parts of the head and face", "Name parts of the body and limbs", "Describe physical features", "Say where one has a pain"],
        lesson: {
          title: "Le corps humain",
          summary: "Name body parts and say where it hurts.",
          minutes: 40,
          notes: `## Head and face (la tête et le visage)
**la tête** (head), **les cheveux** (hair), **le visage** (face), **les yeux** (eyes; singular **l'œil**), **le nez** (nose), **la bouche** (mouth), **les dents** (teeth), **les oreilles** (ears), **la joue** (cheek), **le front** (forehead), **le cou** (neck).

## Body and limbs
**le corps** (body), **l'épaule** (shoulder), **le bras** (arm), **la main** (hand), **le doigt** (finger), **la poitrine** (chest), **le ventre** (stomach/belly), **le dos** (back), **la jambe** (leg), **le genou** (knee), **le pied** (foot), **l'orteil** (toe).

## Describing yourself
- **J'ai les yeux marron.** — I have brown eyes.
- **J'ai les cheveux noirs et courts.** — I have short black hair.
- **Je suis grand(e) / petit(e).** — I am tall / short.
- **Il a un grand nez.** — He has a big nose.
Note: French uses **les** with body parts: *J'ai les yeux noirs.*

## Avoir mal à (to have a pain in)
**à + le = au**, **à + la = à la**, **à + l' = à l'**, **à + les = aux**:
- **J'ai mal à la tête.** — I have a headache.
- **J'ai mal au ventre.** — I have a stomach ache.
- **J'ai mal aux dents.** — I have toothache.
- **J'ai mal à l'oreille.** — I have earache.
- **Tu as mal où?** — Where does it hurt?

## Song idea
"Tête, épaules, genoux et pieds…" — a song to practise body parts while touching them.`,
          examples: `**Example 1.** Translate: *I have a headache.* *Answer:* **J'ai mal à la tête.**

**Example 2.** What does **"les yeux"** mean? *Answer:* **the eyes**.

**Example 3.** Translate: *I have a stomach ache.* *Answer:* **J'ai mal au ventre.**`,
        },
        questions: [
          ["E", "'La tête' means", "the head", "the hand", "the foot", "the back", "Tête is head. Answer: the head."],
          ["E", "'La main' means", "the hand", "the arm", "the mouth", "the leg", "Main is hand. Answer: the hand."],
          ["E", "'Le pied' means", "the foot", "the knee", "the finger", "the nose", "Pied is foot. Answer: the foot."],
          ["M", "'Les yeux' means", "the eyes", "the ears", "the teeth", "the cheeks", "Yeux is plural of œil."],
          ["M", "'La bouche' means", "the mouth", "the nose", "the neck", "the chest", "Bouche is mouth."],
          ["M", "'Le bras' means", "the arm", "the back", "the belly", "the shoulder", "Bras is arm. Answer: the arm."],
          ["M", "'J'ai mal à la tête' means", "I have a headache", "I have a stomach ache", "I have toothache", "I am tired", "Mal à la tête. Answer: I have a headache."],
          ["H", "The correct French for 'I have toothache' is", "J'ai mal aux dents.", "J'ai mal à les dents.", "J'ai mal au dents.", "Je suis mal dents.", "À + les = aux. Answer: J'ai mal aux dents."],
          ["H", "The correct French for 'I have a stomach ache' is", "J'ai mal au ventre.", "J'ai mal à le ventre.", "J'ai mal à la ventre.", "J'ai ventre mal.", "À + le = au. Answer: J'ai mal au ventre."],
          ["H", "'J'ai les cheveux noirs' means", "I have black hair", "I have black eyes", "My horse is black", "I have no hair", "Cheveux means hair."],
        ],
      },
      {
        week: 4,
        title: "Food and drinks",
        subtopics: ["Common foods", "Drinks", "Expressing likes and dislikes", "Meals of the day"],
        objectives: ["Name common foods in French", "Name common drinks in French", "Express likes and dislikes about food", "Name the meals of the day"],
        lesson: {
          title: "La nourriture et les boissons",
          summary: "Talk about food, drinks and meals.",
          minutes: 40,
          notes: `## Foods
| French | English |
|---|---|
| **le riz** | rice |
| **le pain** | bread |
| **l'igname** (f) | yam |
| **le haricot** | bean |
| **la viande** | meat |
| **le poulet** | chicken |
| **le poisson** | fish |
| **l'œuf** (m) | egg |
| **la banane** | banana |
| **l'orange** (f) | orange |
| **la mangue** | mango |
| **la tomate** | tomato |
| **la soupe** | soup |
| **le gâteau** | cake |

## Drinks (les boissons)
**l'eau** (f) (water), **le lait** (milk), **le jus d'orange** (orange juice), **le thé** (tea), **le café** (coffee), **le chocolat chaud** (hot chocolate).

## Likes and dislikes
- **J'aime le riz.** — I like rice.
- **J'adore le poulet.** — I love chicken.
- **Je n'aime pas le poisson.** — I don't like fish.
- **Je déteste le café.** — I hate coffee.
- **Je préfère le thé.** — I prefer tea.
After **aimer, adorer, détester, préférer**, use the **definite article** (le, la, l', les).

## Meals (les repas)
- **le petit déjeuner** — breakfast
- **le déjeuner** — lunch
- **le goûter** — afternoon snack
- **le dîner** — dinner/supper

## Useful phrases
- **J'ai faim. / J'ai soif.** — I am hungry. / I am thirsty.
- **Qu'est-ce que tu manges au petit déjeuner?** — What do you eat for breakfast?
- **Je mange du pain et je bois du thé.** — I eat bread and drink tea.
- **Bon appétit!** — Enjoy your meal!`,
          examples: `**Example 1.** Translate: *I like rice.* *Answer:* **J'aime le riz.**

**Example 2.** What is **le petit déjeuner**? *Answer:* **breakfast**.

**Example 3.** Translate: *I don't like fish.* *Answer:* **Je n'aime pas le poisson.**`,
        },
        questions: [
          ["E", "'Le pain' means", "bread", "rice", "meat", "fish", "Pain is bread. Answer: bread."],
          ["E", "'L'eau' means", "water", "milk", "juice", "tea", "Eau is water. Answer: water."],
          ["E", "'Le poisson' means", "fish", "chicken", "egg", "yam", "Poisson is fish."],
          ["M", "'Le petit déjeuner' means", "breakfast", "lunch", "dinner", "snack", "It is the morning meal."],
          ["M", "'J'aime le poulet' means", "I like chicken", "I like fish", "I eat chicken now", "I hate chicken", "Aimer is to like."],
          ["M", "'Le lait' means", "milk", "water", "coffee", "juice", "Lait is milk. Answer: milk."],
          ["M", "'Bon appétit!' is said", "before eating", "after waking up", "when leaving school", "when buying clothes", "It wishes a good meal."],
          ["H", "The correct French for 'I don't like coffee' is", "Je n'aime pas le café.", "Je n'aime pas café.", "Je ne pas aime le café.", "J'aime pas de le café.", "Use le after aimer."],
          ["H", "'Le dîner' is", "the evening meal", "breakfast", "the morning snack", "lunch at noon only", "Dîner is dinner."],
          ["H", "'Je préfère le thé' means", "I prefer tea", "I make tea", "I have no tea", "I sell tea", "Préférer is to prefer."],
        ],
      },
      {
        week: 5,
        title: "Regular -er verbs in the present tense",
        subtopics: ["Infinitives ending in -er", "Present tense endings", "Common -er verbs", "Using -er verbs in sentences"],
        objectives: ["Identify regular -er verbs", "Conjugate -er verbs in the present tense", "Use common -er verbs", "Write sentences with -er verbs"],
        lesson: {
          title: "Parler, manger, aimer…",
          summary: "Conjugate and use regular -er verbs in the present tense.",
          minutes: 40,
          notes: `## Infinitive
The **infinitive** is the basic form of a verb (to …). The largest group of French verbs ends in **-er**: **parler** (to speak), **aimer** (to like), **jouer** (to play), **habiter** (to live), **regarder** (to watch), **écouter** (to listen), **chanter** (to sing), **danser** (to dance), **travailler** (to work), **étudier** (to study), **manger** (to eat), **marcher** (to walk).

## Present tense
Remove **-er** to get the **stem**, then add the endings:
| Pronoun | Ending | parler |
|---|---|---|
| je | **-e** | je parl**e** |
| tu | **-es** | tu parl**es** |
| il/elle/on | **-e** | il parl**e** |
| nous | **-ons** | nous parl**ons** |
| vous | **-ez** | vous parl**ez** |
| ils/elles | **-ent** | ils parl**ent** |
The endings **-e, -es, -ent** are **silent**, so *parle, parles, parlent* sound the same.

## Spelling notes
- **je → j'** before a vowel or silent h: **j'aime, j'habite, j'écoute**
- **manger**: **nous mangeons** (keep **e** to keep the soft g)
- **commencer**: **nous commençons** (ç keeps the soft c)

## The present tense meaning
**je parle** = I speak / I am speaking / I do speak.

## Sentences
- **Je parle anglais et français.** — I speak English and French.
- **Nous jouons au football.** — We play football.
- **Ils regardent la télévision.** — They watch television.
- **Elle habite à Enugu.** — She lives in Enugu.
- **Vous chantez bien!** — You sing well!`,
          examples: `**Example 1.** Conjugate **jouer** with **nous**. *Answer:* **nous jouons**.

**Example 2.** Complete: **Ils ___ (danser).** *Answer:* **dansent**.

**Example 3.** Translate: *I speak French.* *Answer:* **Je parle français.**`,
        },
        questions: [
          ["E", "'Parler' means", "to speak", "to eat", "to play", "to sing", "Parler is to speak."],
          ["E", "The ending for 'nous' with -er verbs is", "-ons", "-ez", "-ent", "-es", "Nous parlons. Answer: -ons."],
          ["E", "'Je joue' means", "I play", "I eat", "I walk", "I listen", "Jouer is to play."],
          ["M", "Complete: Vous ___ (écouter) la radio.", "écoutez", "écoutons", "écoutent", "écoutes", "Vous takes -ez."],
          ["M", "Complete: Ils ___ (regarder) la télé.", "regardent", "regardons", "regardez", "regarde", "Ils takes -ent."],
          ["M", "Complete: Tu ___ (chanter) bien.", "chantes", "chante", "chantez", "chantent", "Tu takes -es. Answer: chantes."],
          ["M", "'Elle habite à Enugu' means", "She lives in Enugu", "She visits Enugu", "She likes Enugu", "She works in Enugu", "Habiter is to live."],
          ["H", "The correct form of 'manger' with nous is", "nous mangeons", "nous mangons", "nous mangez", "nous mangent", "The e keeps the g soft."],
          ["H", "Which pronoun becomes j' in 'j'aime'?", "je before a vowel", "tu before a vowel", "il before a vowel", "nous before a vowel", "Elision of je. Answer: je before a vowel."],
          ["H", "'Nous travaillons' means", "we work", "we travel", "we play", "we sleep", "Travailler is to work."],
        ],
      },
      {
        week: 6,
        title: "Negation and simple questions",
        subtopics: ["Negation with ne … pas", "Other negatives", "Asking yes/no questions", "Answering questions"],
        objectives: ["Form negative sentences with ne … pas", "Use simple negatives such as ne … jamais", "Ask yes/no questions in three ways", "Answer questions with oui, non and si"],
        lesson: {
          title: "Non, je ne parle pas…",
          summary: "Make negative sentences and ask simple questions.",
          minutes: 40,
          notes: `## Negation with ne … pas
Put **ne** before the verb and **pas** after it:
- **Je parle espagnol.** → **Je ne parle pas espagnol.**
- **Il est là.** → **Il n'est pas là.** (ne → **n'** before a vowel)
- **Nous aimons le café.** → **Nous n'aimons pas le café.**
Remember: after a negative, **un / une / des → de (d')**: *Je n'ai pas de frère.*
In everyday speech the French often drop **ne** (*Je sais pas*), but in writing always use **ne … pas**.

## Other negatives
- **ne … jamais** — never: *Il ne mange jamais de viande.*
- **ne … plus** — no longer: *Je n'habite plus à Ibadan.*
- **ne … rien** — nothing: *Je ne vois rien.*
- **ne … personne** — nobody: *Je ne connais personne.*

## Asking yes/no questions
1. **rising intonation**: *Tu parles français?* ↗
2. **est-ce que** at the start: **Est-ce que tu parles français?**
3. **inversion** (verb–pronoun with hyphen): **Parles-tu français?**
- with il/elle and a verb ending in a vowel, add **-t-**: **Aime-t-il le riz?**

## Answering
- **Oui, je parle français.**
- **Non, je ne parle pas français.**
- **Si** — "yes" to contradict a **negative** question: *Tu n'aimes pas le riz?* — **Si, j'aime le riz!**

## Question words (preview)
**qui** (who), **quoi / que** (what), **où** (where), **quand** (when), **comment** (how), **pourquoi** (why), **combien** (how much/many).`,
          examples: `**Example 1.** Make negative: **Elle aime le football.** *Answer:* **Elle n'aime pas le football.**

**Example 2.** Turn into a question with est-ce que: **Tu habites à Jos.** *Answer:* **Est-ce que tu habites à Jos?**

**Example 3.** Answer "yes" to **"Tu ne danses pas?"** *Answer:* **Si, je danse!**`,
        },
        questions: [
          ["E", "The negative of 'Je parle' is", "Je ne parle pas.", "Je parle ne pas.", "Ne je parle pas.", "Je pas parle ne.", "Ne and pas surround the verb."],
          ["E", "'Oui' means", "yes", "no", "maybe", "never", "Oui is yes. Answer: yes."],
          ["E", "'Non' means", "no", "yes", "please", "thanks", "Non is no. Answer: no."],
          ["M", "The negative of 'Il est là' is", "Il n'est pas là.", "Il ne est pas là.", "Il est ne pas là.", "Il pas est là.", "Ne becomes n' before a vowel."],
          ["M", "'Est-ce que tu danses?' means", "Do you dance?", "You don't dance.", "Where do you dance?", "Why do you dance?", "Est-ce que forms a question."],
          ["M", "'Il ne mange jamais de viande' means", "He never eats meat", "He no longer eats meat", "He eats only meat", "He does not eat now", "Jamais means never."],
          ["M", "'Je n'habite plus à Ibadan' means", "I no longer live in Ibadan", "I never lived in Ibadan", "I live in Ibadan now", "I want to live in Ibadan", "Ne…plus means no longer."],
          ["H", "The correct answer 'yes' to 'Tu n'aimes pas le riz?' is", "Si, j'aime le riz.", "Oui, je n'aime pas le riz.", "Non, j'aime le riz.", "Oui, j'aime pas.", "Si contradicts a negative."],
          ["H", "The inverted question form of 'Il aime le riz' is", "Aime-t-il le riz?", "Aime-il le riz?", "Il-aime le riz?", "Est-il aime le riz?", "Add -t- between vowels."],
          ["H", "'Je ne vois rien' means", "I see nothing", "I see nobody", "I never see", "I see everything", "Rien means nothing."],
        ],
      },
    ],
  },
];
