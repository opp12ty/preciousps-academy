import type { TermPlan } from "../types";

/** JSS2 French — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The house and its rooms",
        subtopics: ["Types of houses", "Rooms of the house", "Furniture and objects", "Describing one's home"],
        objectives: ["Name types of houses in French", "Name the rooms of a house", "Name common furniture", "Describe one's home in simple sentences"],
        lesson: {
          title: "Ma maison",
          summary: "Describe a house, its rooms and furniture.",
          minutes: 40,
          notes: `## Types of houses
**une maison** (a house), **un appartement** (a flat), **un immeuble** (a block of flats), **une villa**, **un bungalow**, **une case** (a hut).

## Rooms (les pièces)
| French | English |
|---|---|
| **le salon** | sitting room |
| **la salle à manger** | dining room |
| **la cuisine** | kitchen |
| **la chambre** | bedroom |
| **la salle de bains** | bathroom |
| **les toilettes / les WC** | toilet |
| **le couloir** | corridor |
| **le jardin** | garden |
| **le garage** | garage |
| **l'escalier** (m) | stairs |

## Furniture and objects (les meubles)
**le lit** (bed), **l'armoire** (f) (wardrobe), **la table**, **la chaise**, **le fauteuil** (armchair), **le canapé** (sofa), **la télévision**, **le réfrigérateur / le frigo**, **la cuisinière** (cooker), **le ventilateur** (fan), **la lampe**, **le tapis** (rug).

## Describing your home
- **J'habite dans une maison.** — I live in a house.
- **Il y a cinq pièces.** — There are five rooms.
- **Ma chambre est petite mais jolie.** — My room is small but pretty.
- **Au rez-de-chaussée, il y a le salon et la cuisine.** — On the ground floor there are the sitting room and the kitchen.
- **Au premier étage, il y a trois chambres.** — On the first floor there are three bedrooms.
- **Dans la cuisine, on prépare les repas.** — In the kitchen, we prepare meals.

## Model paragraph
J'habite à Port Harcourt avec ma famille. Nous avons une grande maison. Il y a un salon, une cuisine, trois chambres et deux salles de bains. Ma pièce préférée est le salon parce que nous regardons la télévision ensemble.`,
          examples: `**Example 1.** What is **la cuisine**? *Answer:* the **kitchen**.

**Example 2.** Translate: *There are three bedrooms.* *Answer:* **Il y a trois chambres.**

**Example 3.** What does **"le rez-de-chaussée"** mean? *Answer:* the **ground floor**.`,
        },
        questions: [
          ["E", "'La cuisine' means", "the kitchen", "the bedroom", "the bathroom", "the garden", "Cuisine is kitchen."],
          ["E", "'La chambre' means", "the bedroom", "the sitting room", "the garage", "the corridor", "Chambre is bedroom."],
          ["E", "'Le lit' means", "the bed", "the table", "the chair", "the lamp", "Lit is bed. Answer: the bed."],
          ["M", "'Le salon' means", "the sitting room", "the dining room", "the kitchen", "the toilet", "Salon is living room."],
          ["M", "'La salle de bains' means", "the bathroom", "the classroom", "the dining room", "the store", "Bains are baths."],
          ["M", "'Un appartement' means", "a flat", "a hut", "a garden", "a garage", "Appartement is a flat."],
          ["M", "'L'armoire' means", "the wardrobe", "the armchair", "the stairs", "the window", "Armoire is wardrobe."],
          ["H", "'Au premier étage' means", "on the first floor", "on the ground floor", "in the basement", "on the roof", "Étage is floor."],
          ["H", "'Il y a cinq pièces' means", "There are five rooms", "There are five houses", "There are five people", "There are five pieces of cake", "Pièce means room here."],
          ["H", "'Le réfrigérateur' is used to", "keep food cold", "cook food", "wash clothes", "light the room", "It is the fridge."],
        ],
      },
      {
        week: 2,
        title: "Prepositions of place",
        subtopics: ["Common prepositions", "Asking where things are", "Contractions with de", "Describing a room"],
        objectives: ["Use common French prepositions of place", "Ask and answer where things are", "Use contractions du and des correctly", "Describe the position of objects in a room"],
        lesson: {
          title: "Où est le chat?",
          summary: "Say where things are using prepositions.",
          minutes: 40,
          notes: `## Common prepositions
| French | English |
|---|---|
| **sur** | on |
| **sous** | under |
| **dans** | in |
| **devant** | in front of |
| **derrière** | behind |
| **entre** | between |
| **à côté de** | beside / next to |
| **près de** | near |
| **loin de** | far from |
| **en face de** | opposite |
| **au-dessus de** | above |
| **au-dessous de** | below |

## Asking where
- **Où est le livre?** — Where is the book?
- **Le livre est sur la table.** — The book is on the table.
- **Où sont les chaussures?** — Where are the shoes?
- **Elles sont sous le lit.** — They are under the bed.

## Contractions with de
Prepositions ending in **de** combine with the article:
- **de + le = du**: *à côté du lit* (beside the bed)
- **de + les = des**: *près des fenêtres* (near the windows)
- **de + la** and **de + l'** do not change: *près de la porte*, *en face de l'école*

## Describing a room
**Dans ma chambre, il y a un lit. Le lit est à côté de l'armoire. Sur la table, il y a une lampe. Mon sac est sous la chaise. La fenêtre est en face de la porte.**

## Prepositions with places
- **à** + town: *J'habite à Kano.*
- **en** + feminine country: *en France*
- **au** + masculine country: *au Nigeria*, *au Bénin*
- **aux** + plural country: *aux États-Unis*`,
          examples: `**Example 1.** Translate: *The cat is under the table.* *Answer:* **Le chat est sous la table.**

**Example 2.** Complete: **La lampe est à côté ___ lit.** *Answer:* **du**.

**Example 3.** What does **"entre"** mean? *Answer:* **between**.`,
        },
        questions: [
          ["E", "'Sur' means", "on", "under", "in", "behind", "Sur is on. Answer: on."],
          ["E", "'Sous' means", "under", "on", "beside", "between", "Sous is under. Answer: under."],
          ["E", "'Dans' means", "in", "near", "behind", "far from", "Dans is in. Answer: in."],
          ["M", "'Derrière' means", "behind", "in front of", "next to", "opposite", "Derrière is behind."],
          ["M", "'Devant' means", "in front of", "behind", "under", "above", "Devant is in front."],
          ["M", "'Entre' means", "between", "inside", "near", "on top of", "Entre is between."],
          ["M", "'Où est le livre?' means", "Where is the book?", "Whose is the book?", "What is the book?", "How is the book?", "Où means where."],
          ["H", "Complete correctly: La lampe est à côté ___ lit.", "du", "de le", "de la", "des", "De + le = du. Answer: du."],
          ["H", "The correct phrase for 'in Nigeria' is", "au Nigeria", "en Nigeria", "à Nigeria", "aux Nigeria", "Nigeria is masculine."],
          ["H", "'En face de l'école' means", "opposite the school", "inside the school", "behind the school", "far from the school", "En face de is opposite."],
        ],
      },
      {
        week: 3,
        title: "Possessive adjectives",
        subtopics: ["My, your and his/her", "Our, your and their", "Agreement of possessives", "Using possessives in sentences"],
        objectives: ["Use mon, ma, mes, ton, ta, tes, son, sa, ses", "Use notre, nos, votre, vos, leur, leurs", "Make possessives agree with the noun", "Write sentences using possessives"],
        lesson: {
          title: "Mon, ton, son…",
          summary: "Use possessive adjectives correctly.",
          minutes: 40,
          notes: `## Possessive adjectives
| | masculine singular | feminine singular | plural |
|---|---|---|---|
| my | **mon** | **ma** | **mes** |
| your (tu) | **ton** | **ta** | **tes** |
| his / her / its | **son** | **sa** | **ses** |
| our | **notre** | **notre** | **nos** |
| your (vous) | **votre** | **votre** | **vos** |
| their | **leur** | **leur** | **leurs** |

## Agreement rule
The possessive agrees with the **thing owned**, **not** the owner:
- **son livre** = his book **or** her book (livre is masculine)
- **sa maison** = his house **or** her house (maison is feminine)
- **ses parents** = his/her parents
So "Amina's father" is **son père**, and "Musa's mother" is **sa mère**.

## Before a vowel
Use **mon, ton, son** before a **feminine** noun beginning with a **vowel** or silent h, to make pronunciation smooth:
- **mon école** (not *ma école*)
- **ton amie**
- **son histoire**

## Sentences
- **Voici ma sœur et mon frère.** — Here are my sister and my brother.
- **Où est ton cahier?** — Where is your exercise book?
- **Notre classe est grande.** — Our class is big.
- **Vos devoirs sont bons.** — Your homework is good.
- **Leurs enfants sont à l'école.** — Their children are at school.
- **Amina aime son chat.** — Amina loves her cat.`,
          examples: `**Example 1.** Translate: *her book*. *Answer:* **son livre**.

**Example 2.** Translate: *my school* (école, feminine). *Answer:* **mon école**.

**Example 3.** Translate: *their friends*. *Answer:* **leurs amis**.`,
        },
        questions: [
          ["E", "'Mon' means", "my", "your", "his", "our", "Mon is my (masculine)."],
          ["E", "'Notre' means", "our", "their", "your", "my", "Notre is our. Answer: our."],
          ["E", "'Tes' means", "your (plural things, informal)", "his", "their", "our", "Tes goes with plural nouns."],
          ["M", "The correct form is", "ma mère", "mon mère", "mes mère", "ma père", "Mère is feminine."],
          ["M", "'Sa maison' can mean", "his house or her house", "their house", "my house", "your house", "Sa agrees with maison."],
          ["M", "'Leurs enfants' means", "their children", "our children", "your children", "his children", "Leurs is plural their."],
          ["M", "'Vos livres' means", "your books (polite or plural)", "our books", "their books", "my books", "Vos is plural of votre."],
          ["H", "The correct French for 'my school' is", "mon école", "ma école", "mes école", "mon écoles", "Mon is used before a vowel."],
          ["H", "'Amina's father' in French is", "son père", "sa père", "ses père", "leur père", "Père is masculine."],
          ["H", "Possessive adjectives in French agree with", "the thing owned", "the owner", "the verb", "the subject only", "Son/sa depends on the noun."],
        ],
      },
      {
        week: 4,
        title: "Clothing",
        subtopics: ["Items of clothing", "Describing clothes", "The verb porter", "Shopping for clothes"],
        objectives: ["Name items of clothing in French", "Describe clothes with colours and sizes", "Use the verb porter", "Ask about prices and sizes when buying clothes"],
        lesson: {
          title: "Les vêtements",
          summary: "Name and describe clothes and buy them in French.",
          minutes: 40,
          notes: `## Items of clothing
| French | English |
|---|---|
| **la chemise** | shirt |
| **le pantalon** | trousers |
| **la jupe** | skirt |
| **la robe** | dress |
| **le tee-shirt** | T-shirt |
| **le pull** | sweater |
| **la veste** | jacket |
| **le short** | shorts |
| **le costume** | suit |
| **l'uniforme** (m) | uniform |
| **les chaussures** (f) | shoes |
| **les chaussettes** (f) | socks |
| **les sandales** (f) | sandals |
| **le chapeau** | hat |
| **la cravate** | tie |
| **le pagne** | wrapper (African cloth) |

## Describing clothes
- colours agree: **une chemise blanche**, **des chaussures noires**
- **grand / petit**: *Ce pantalon est trop grand.* (too big)
- **long / court**: *une jupe longue*
- **joli(e)**, **beau / belle**, **neuf / neuve** (new), **cher / chère** (expensive), **bon marché** (cheap)

## The verb porter (to wear)
**porter** is a regular -er verb:
je porte, tu portes, il/elle porte, nous portons, vous portez, ils/elles portent.
- **Je porte mon uniforme à l'école.** — I wear my uniform to school.
- **Le dimanche, ma mère porte un pagne.** — On Sundays, my mother wears a wrapper.

## Shopping for clothes
- **Je voudrais une chemise, s'il vous plaît.** — I would like a shirt, please.
- **Quelle taille?** — What size?
- **Je peux l'essayer?** — Can I try it on?
- **Combien coûte cette robe?** — How much is this dress?
- **Elle coûte cinq mille nairas.** — It costs five thousand naira.
- **C'est trop cher!** — It's too expensive!
- **Je la prends.** — I'll take it.`,
          examples: `**Example 1.** Translate: *I am wearing a blue shirt.* *Answer:* **Je porte une chemise bleue.**

**Example 2.** What is **la jupe**? *Answer:* a **skirt**.

**Example 3.** How do you say "It's too expensive"? *Answer:* **C'est trop cher!**`,
        },
        questions: [
          ["E", "'La chemise' means", "the shirt", "the skirt", "the shoe", "the hat", "Chemise is shirt."],
          ["E", "'Les chaussures' means", "the shoes", "the socks", "the trousers", "the ties", "Chaussures are shoes."],
          ["E", "'La robe' means", "the dress", "the robe of a judge only", "the jacket", "the belt", "Robe is dress. Answer: the dress."],
          ["M", "'Le pantalon' means", "the trousers", "the shorts", "the suit", "the shirt", "Pantalon is trousers."],
          ["M", "'Je porte' means", "I wear", "I carry a bag only", "I buy", "I sell", "Porter means to wear."],
          ["M", "'Quelle taille?' means", "What size?", "What colour?", "What price?", "What time?", "Taille is size."],
          ["M", "'C'est trop cher' means", "It is too expensive", "It is too cheap", "It is very nice", "It is too big", "Cher is expensive."],
          ["H", "The correct French for 'black shoes' is", "des chaussures noires", "des chaussures noir", "des noires chaussures", "des chaussure noirs", "Feminine plural agreement."],
          ["H", "'Je peux l'essayer?' means", "Can I try it on?", "Can I buy it?", "Can I wash it?", "Can I return it?", "Essayer means to try."],
          ["H", "Complete: Nous ___ (porter) nos uniformes.", "portons", "portez", "portent", "porte", "Nous takes -ons."],
        ],
      },
      {
        week: 5,
        title: "Weather and seasons",
        subtopics: ["Weather expressions", "Seasons in Nigeria", "Seasons in Europe", "Weather and activities"],
        objectives: ["Describe the weather in French", "Name the seasons in Nigeria", "Name the four seasons in Europe", "Relate weather to activities"],
        lesson: {
          title: "Quel temps fait-il?",
          summary: "Describe weather and seasons in French.",
          minutes: 40,
          notes: `## Asking about the weather
**Quel temps fait-il?** — What is the weather like?

## Weather expressions
| French | English |
|---|---|
| **Il fait beau.** | It is fine/nice. |
| **Il fait mauvais.** | It is bad weather. |
| **Il fait chaud.** | It is hot. |
| **Il fait froid.** | It is cold. |
| **Il fait frais.** | It is cool. |
| **Il fait du soleil.** | It is sunny. |
| **Il fait du vent.** | It is windy. |
| **Il pleut.** | It is raining. |
| **Il neige.** | It is snowing. |
| **Il y a des nuages.** | It is cloudy. |
| **Il y a de l'orage.** | It is stormy. |
| **Il y a du brouillard.** | It is foggy. |
Note: many weather expressions use **il fait**.

## Seasons in Nigeria
- **la saison sèche** — the dry season (roughly November to March)
- **la saison des pluies** — the rainy season (roughly April to October; varies by region)
- **l'harmattan** — the cool, dry, dusty wind from the Sahara during the dry season

## Seasons in Europe (les saisons)
| Season | French | With "in" |
|---|---|---|
| spring | **le printemps** | **au** printemps |
| summer | **l'été** | **en** été |
| autumn | **l'automne** | **en** automne |
| winter | **l'hiver** | **en** hiver |

## Weather and activities
- **Quand il pleut, je reste à la maison.** — When it rains, I stay at home.
- **Quand il fait beau, je joue au football.** — When it is fine, I play football.
- **Pendant l'harmattan, il fait froid le matin.** — During the harmattan, it is cold in the morning.`,
          examples: `**Example 1.** Translate: *It is raining.* *Answer:* **Il pleut.**

**Example 2.** What is **la saison sèche**? *Answer:* the **dry season**.

**Example 3.** Translate: *In winter it is cold.* *Answer:* **En hiver, il fait froid.**`,
        },
        questions: [
          ["E", "'Il fait chaud' means", "It is hot", "It is cold", "It is raining", "It is windy", "Chaud is hot. Answer: It is hot."],
          ["E", "'Il pleut' means", "It is raining", "It is snowing", "It is sunny", "It is foggy", "Pleuvoir is to rain."],
          ["E", "'Il fait froid' means", "It is cold", "It is cool", "It is hot", "It is fine", "Froid is cold. Answer: It is cold."],
          ["M", "'Quel temps fait-il?' means", "What is the weather like?", "What time is it?", "What day is it?", "What season is it?", "Temps here means weather."],
          ["M", "'La saison des pluies' means", "the rainy season", "the dry season", "the harmattan", "the hot season only", "Pluie is rain. Answer: the rainy season."],
          ["M", "'Il fait du vent' means", "It is windy", "It is sunny", "It is cloudy", "It is stormy", "Vent is wind. Answer: It is windy."],
          ["M", "'L'hiver' means", "winter", "summer", "spring", "autumn", "Hiver is winter."],
          ["H", "The correct phrase for 'in spring' is", "au printemps", "en printemps", "à printemps", "dans printemps", "Printemps takes au."],
          ["H", "The cool, dry, dusty wind in Nigeria's dry season is", "l'harmattan", "la mousson", "le blizzard", "la neige", "It blows from the Sahara."],
          ["H", "'Quand il pleut, je reste à la maison' means", "When it rains, I stay at home", "When it is hot, I go out", "If it snows, I play", "When it is fine, I rest", "Rester is to stay."],
        ],
      },
      {
        week: 6,
        title: "Occupations",
        subtopics: ["Names of occupations", "Masculine and feminine forms", "Places of work", "Talking about future jobs"],
        objectives: ["Name common occupations in French", "Form the feminine of occupations", "Match occupations to places of work", "Talk about what one wants to become"],
        lesson: {
          title: "Les métiers",
          summary: "Talk about jobs and places of work in French.",
          minutes: 40,
          notes: `## Occupations
| Masculine | Feminine | English |
|---|---|---|
| **le médecin** | **la médecin** | doctor |
| **l'infirmier** | **l'infirmière** | nurse |
| **l'enseignant / le professeur** | **l'enseignante / la professeure** | teacher |
| **l'avocat** | **l'avocate** | lawyer |
| **l'ingénieur** | **l'ingénieure** | engineer |
| **le commerçant** | **la commerçante** | trader |
| **le fermier / l'agriculteur** | **la fermière / l'agricultrice** | farmer |
| **le cuisinier** | **la cuisinière** | cook |
| **le chauffeur** | **la chauffeuse** | driver |
| **le policier** | **la policière** | police officer |
| **le couturier / le tailleur** | **la couturière** | tailor / dressmaker |
| **le coiffeur** | **la coiffeuse** | hairdresser |
| **le mécanicien** | **la mécanicienne** | mechanic |
| **le journaliste** | **la journaliste** | journalist |

## Feminine forms
common patterns: **-ier → -ière**; **-eur → -euse**; **-ien → -ienne**; add **-e** (avocat → avocate); words ending in **-e** stay the same (journaliste).

## No article after être
- **Mon père est médecin.** — My father is a doctor. (no **un**)
- **Ma mère est commerçante.**
- But with an adjective: **C'est un bon médecin.**

## Places of work
le médecin → **l'hôpital**; le professeur → **l'école**; le commerçant → **le marché**; le fermier → **la ferme**; le mécanicien → **le garage**; l'avocat → **le tribunal**; le policier → **le commissariat**.

## Future jobs
- **Qu'est-ce que tu veux faire plus tard?** — What do you want to do later?
- **Je veux être ingénieur.** — I want to be an engineer.
- **Je voudrais devenir avocate.** — I would like to become a lawyer.`,
          examples: `**Example 1.** Translate: *My mother is a nurse.* *Answer:* **Ma mère est infirmière.**

**Example 2.** Where does **le mécanicien** work? *Answer:* at **le garage**.

**Example 3.** Translate: *I want to be a doctor.* *Answer:* **Je veux être médecin.**`,
        },
        questions: [
          ["E", "'Le médecin' means", "the doctor", "the teacher", "the driver", "the trader", "Médecin is doctor."],
          ["E", "'Le fermier' means", "the farmer", "the fireman", "the fisherman", "the policeman", "Ferme is farm. Answer: the farmer."],
          ["E", "'Le chauffeur' means", "the driver", "the cook", "the tailor", "the nurse", "Chauffeur drives."],
          ["M", "The feminine of 'infirmier' is", "infirmière", "infirmiere", "infirmieuse", "infirmienne", "-ier becomes -ière."],
          ["M", "The feminine of 'coiffeur' is", "coiffeuse", "coiffeure", "coiffière", "coiffienne", "-eur becomes -euse."],
          ["M", "A teacher usually works at", "l'école", "le marché", "le garage", "la ferme", "École is school."],
          ["M", "'Le commerçant' works at", "le marché", "l'hôpital", "le tribunal", "le commissariat", "Traders sell at the market."],
          ["H", "The correct French for 'My father is an engineer' is", "Mon père est ingénieur.", "Mon père est un ingénieur bon.", "Mon père a ingénieur.", "Ma père est ingénieur.", "No article after être."],
          ["H", "'Je voudrais devenir avocate' means", "I would like to become a lawyer", "I want to eat avocado", "I am a lawyer now", "I visited a lawyer", "Devenir is to become."],
          ["H", "'Le tribunal' is the workplace of", "a lawyer", "a mechanic", "a hairdresser", "a farmer", "Lawyers work in court."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Regular -ir verbs",
        subtopics: ["Infinitives ending in -ir", "Present tense endings", "Common -ir verbs", "Using -ir verbs"],
        objectives: ["Identify regular -ir verbs", "Conjugate -ir verbs in the present tense", "Use common -ir verbs", "Write sentences with -ir verbs"],
        lesson: {
          title: "Finir, choisir…",
          summary: "Conjugate regular -ir verbs in the present tense.",
          minutes: 40,
          notes: `## Regular -ir verbs
The second group of regular verbs ends in **-ir**: **finir** (to finish), **choisir** (to choose), **remplir** (to fill), **réussir** (to succeed/pass), **grandir** (to grow), **obéir** (to obey), **punir** (to punish), **rougir** (to blush), **bâtir** (to build), **réfléchir** (to think).

## Present tense
Remove **-ir** and add:
| Pronoun | Ending | finir |
|---|---|---|
| je | **-is** | je fin**is** |
| tu | **-is** | tu fin**is** |
| il/elle/on | **-it** | il fin**it** |
| nous | **-issons** | nous fin**issons** |
| vous | **-issez** | vous fin**issez** |
| ils/elles | **-issent** | ils fin**issent** |
Note the **-iss-** in the plural forms.

## Sentences
- **Je finis mes devoirs.** — I finish my homework.
- **Tu choisis une robe rouge.** — You choose a red dress.
- **Les enfants grandissent vite.** — Children grow fast.
- **Nous obéissons à nos parents.** — We obey our parents. (obéir **à**)
- **Elle réussit à l'examen.** — She passes the exam.
- **Vous remplissez le seau d'eau.** — You fill the bucket with water.

## Careful!
Some common verbs ending in -ir are **irregular** and do not follow this pattern: **partir** (je pars), **sortir** (je sors), **dormir** (je dors), **venir** (je viens), **ouvrir** (j'ouvre).`,
          examples: `**Example 1.** Conjugate **choisir** with **nous**. *Answer:* **nous choisissons**.

**Example 2.** Complete: **Ils ___ (finir) à midi.** *Answer:* **finissent**.

**Example 3.** Translate: *I obey my teacher.* *Answer:* **J'obéis à mon professeur.**`,
        },
        questions: [
          ["E", "'Finir' means", "to finish", "to choose", "to fill", "to grow", "Finir is to finish."],
          ["E", "'Choisir' means", "to choose", "to finish", "to build", "to punish", "Choisir is to choose."],
          ["E", "Complete: Je ___ (finir) mes devoirs.", "finis", "finit", "finissons", "finissent", "Je takes -is. Answer: finis."],
          ["M", "Complete: Il ___ (choisir) un livre.", "choisit", "choisis", "choisissez", "choisissent", "Il takes -it. Answer: choisit."],
          ["M", "Complete: Nous ___ (finir) à midi.", "finissons", "finons", "finissez", "finit", "Nous takes -issons."],
          ["M", "Complete: Vous ___ (remplir) le seau.", "remplissez", "remplez", "remplissons", "remplit", "Vous takes -issez."],
          ["M", "'Les enfants grandissent' means", "The children are growing", "The children are playing", "The children are big", "The children are building", "Grandir is to grow."],
          ["H", "Complete: Elles ___ (réussir) à l'examen.", "réussissent", "réussisent", "réussient", "réussissons", "Elles takes -issent."],
          ["H", "Which -ir verb is irregular?", "partir", "finir", "choisir", "remplir", "Partir: je pars."],
          ["H", "'Nous obéissons à nos parents' means", "We obey our parents", "We punish our parents", "We visit our parents", "We choose our parents", "Obéir à is to obey."],
        ],
      },
      {
        week: 2,
        title: "Regular -re verbs",
        subtopics: ["Infinitives ending in -re", "Present tense endings", "Common -re verbs", "Comparing the three verb groups"],
        objectives: ["Identify regular -re verbs", "Conjugate -re verbs in the present tense", "Use common -re verbs", "Compare -er, -ir and -re endings"],
        lesson: {
          title: "Vendre, attendre…",
          summary: "Conjugate regular -re verbs and compare verb groups.",
          minutes: 40,
          notes: `## Regular -re verbs
**vendre** (to sell), **attendre** (to wait for), **entendre** (to hear), **répondre** (to answer), **descendre** (to go down), **perdre** (to lose), **rendre** (to give back).

## Present tense
Remove **-re** and add:
| Pronoun | Ending | vendre |
|---|---|---|
| je | **-s** | je vend**s** |
| tu | **-s** | tu vend**s** |
| il/elle/on | **(no ending)** | il vend |
| nous | **-ons** | nous vend**ons** |
| vous | **-ez** | vous vend**ez** |
| ils/elles | **-ent** | ils vend**ent** |
The **d** of the stem is silent in the singular forms.

## Sentences
- **Ma mère vend des tomates au marché.** — My mother sells tomatoes at the market.
- **J'attends le bus.** — I am waiting for the bus. (no word for "for")
- **Tu entends la musique?** — Do you hear the music?
- **Nous répondons aux questions.** — We answer the questions. (répondre **à**)
- **Il perd toujours ses clés.** — He always loses his keys.

## Comparing the three groups
| | parler (-er) | finir (-ir) | vendre (-re) |
|---|---|---|---|
| je | parle | finis | vends |
| tu | parles | finis | vends |
| il | parle | finit | vend |
| nous | parlons | finissons | vendons |
| vous | parlez | finissez | vendez |
| ils | parlent | finissent | vendent |
Notice that **nous -ons**, **vous -ez** and **ils -ent** are common to all three (with -iss- for -ir).

## Irregular -re verbs
some -re verbs are irregular: **prendre** (je prends, nous prenons), **faire**, **dire**, **lire**, **écrire**, **mettre**.`,
          examples: `**Example 1.** Conjugate **vendre** with **il**. *Answer:* **il vend**.

**Example 2.** Translate: *We are waiting for the teacher.* *Answer:* **Nous attendons le professeur.**

**Example 3.** Complete: **Vous ___ (répondre) bien.** *Answer:* **répondez**.`,
        },
        questions: [
          ["E", "'Vendre' means", "to sell", "to buy", "to wait", "to lose", "Vendre is to sell."],
          ["E", "'Attendre' means", "to wait for", "to attend a school", "to hear", "to answer", "Attendre is to wait."],
          ["E", "Complete: Je ___ (vendre) des livres.", "vends", "vend", "vendons", "vendent", "Je takes -s. Answer: vends."],
          ["M", "Complete: Il ___ (attendre) le bus.", "attend", "attends", "attendons", "attendent", "No ending for il."],
          ["M", "Complete: Nous ___ (répondre) aux questions.", "répondons", "répondez", "répondent", "réponds", "Nous takes -ons."],
          ["M", "'Entendre' means", "to hear", "to understand only", "to sell", "to descend", "Entendre is to hear."],
          ["M", "Complete: Ils ___ (perdre) le match.", "perdent", "perdons", "perdez", "perd", "Ils takes -ent."],
          ["H", "'J'attends le bus' means", "I am waiting for the bus", "I am taking the bus", "I am selling the bus", "I hear the bus", "Attendre has no 'for'."],
          ["H", "Which verb is an irregular -re verb?", "prendre", "vendre", "perdre", "attendre", "Prendre: nous prenons."],
          ["H", "Complete: Vous ___ (descendre) l'escalier.", "descendez", "descendons", "descendent", "descends", "Vous takes -ez."],
        ],
      },
      {
        week: 3,
        title: "The irregular verbs aller and faire",
        subtopics: ["Conjugation of aller", "Aller with places", "Conjugation of faire", "Expressions with faire"],
        objectives: ["Conjugate aller in the present tense", "Use aller with à and contractions", "Conjugate faire in the present tense", "Use common expressions with faire"],
        lesson: {
          title: "Je vais, je fais",
          summary: "Use the irregular verbs aller (to go) and faire (to do/make).",
          minutes: 40,
          notes: `## Aller (to go)
| | |
|---|---|
| **je vais** | I go |
| **tu vas** | you go |
| **il/elle/on va** | he/she goes |
| **nous allons** | we go |
| **vous allez** | you go |
| **ils/elles vont** | they go |

## Aller + à (to a place)
- **à + le = au**: *Je vais au marché.* (to the market)
- **à + la = à la**: *Elle va à la banque.*
- **à + l' = à l'**: *Nous allons à l'école.*
- **à + les = aux**: *Ils vont aux toilettes.*
- with towns: *Je vais à Abuja.*
- **chez** + person = to someone's house: *Je vais chez ma grand-mère.*
- **Comment ça va? / Ça va.** also come from aller.

## Faire (to do / to make)
| | |
|---|---|
| **je fais** | I do/make |
| **tu fais** | you do |
| **il/elle/on fait** | he/she does |
| **nous faisons** | we do |
| **vous faites** | you do |
| **ils/elles font** | they do |

## Expressions with faire
| French | English |
|---|---|
| **faire ses devoirs** | to do one's homework |
| **faire la cuisine** | to cook |
| **faire le ménage** | to do housework |
| **faire les courses** | to go shopping (groceries) |
| **faire du sport** | to do sport |
| **faire une promenade** | to go for a walk |
| **faire la vaisselle** | to wash the dishes |
| **faire attention** | to pay attention |
| **Il fait chaud.** | It is hot (weather). |
- **Qu'est-ce que tu fais?** — What are you doing?`,
          examples: `**Example 1.** Translate: *I am going to the market.* *Answer:* **Je vais au marché.**

**Example 2.** Complete: **Nous ___ (faire) nos devoirs.** *Answer:* **faisons**.

**Example 3.** Translate: *She cooks.* *Answer:* **Elle fait la cuisine.**`,
        },
        questions: [
          ["E", "'Je vais' means", "I go", "I do", "I have", "I am", "From aller. Answer: I go."],
          ["E", "'Je fais' means", "I do or make", "I go", "I finish", "I sell", "From faire. Answer: I do or make."],
          ["E", "Complete: Tu ___ (aller) à l'école.", "vas", "va", "vais", "allez", "Tu vas. Answer: vas."],
          ["M", "Complete: Ils ___ (aller) au marché.", "vont", "vas", "allons", "font", "Ils vont. Answer: vont."],
          ["M", "Complete: Vous ___ (faire) du sport.", "faites", "faisez", "faisons", "font", "Vous faites is irregular."],
          ["M", "'Je vais au marché' means", "I am going to the market", "I am at the market", "I come from the market", "I like the market", "Au = à + le. Answer: I am going to the market."],
          ["M", "'Faire la cuisine' means", "to cook", "to clean the kitchen", "to buy a kitchen", "to eat", "It means to do the cooking."],
          ["H", "The correct French for 'We are going to school' is", "Nous allons à l'école.", "Nous allons au école.", "Nous vont à l'école.", "Nous allons à le école.", "Use à l' before a vowel."],
          ["H", "'Je vais chez ma grand-mère' means", "I am going to my grandmother's house", "I am going with my grandmother", "My grandmother is coming", "I am calling my grandmother", "Chez means at the house of."],
          ["H", "Complete: Elles ___ (faire) les courses.", "font", "faisent", "faites", "vont", "Elles font. Answer: font."],
        ],
      },
      {
        week: 4,
        title: "At the market: shopping",
        subtopics: ["Items at the market", "Asking prices", "Quantities", "Bargaining politely"],
        objectives: ["Name items sold at the market", "Ask and state prices", "Use expressions of quantity", "Bargain politely in French"],
        lesson: {
          title: "Au marché",
          summary: "Buy items at the market in French.",
          minutes: 40,
          notes: `## Items at the market
**les fruits** (fruits), **les légumes** (vegetables), **les tomates**, **les oignons**, **le piment** (pepper), **le riz**, **les haricots**, **l'igname**, **le manioc** (cassava), **le gari**, **l'huile de palme** (palm oil), **la viande**, **le poisson**, **les œufs**, **le sel**, **le sucre**, **le savon** (soap).

## Asking prices
- **C'est combien?** / **Ça coûte combien?** — How much is it?
- **Combien coûtent les oranges?** — How much are the oranges?
- **Ça fait combien en tout?** — How much is it altogether?
- **Ça fait deux mille nairas.** — That's two thousand naira.

## Quantities
After expressions of quantity, use **de (d')**:
| French | English |
|---|---|
| **un kilo de** | a kilo of |
| **un litre d'** | a litre of |
| **une bouteille de** | a bottle of |
| **un sac de** | a bag of |
| **un tas de** | a heap of |
| **une douzaine d'** | a dozen |
| **un paquet de** | a packet of |
| **beaucoup de** | a lot of |
| **un peu de** | a little |
*un kilo de riz, une douzaine d'œufs, une bouteille d'huile.*

## Dialogue
— **Bonjour, Madame. Je voudrais un kilo de tomates, s'il vous plaît.**
— **Voilà. Et avec ça?**
— **Une douzaine d'œufs aussi. C'est combien?**
— **Ça fait trois mille nairas.**
— **C'est un peu cher. Vous pouvez diminuer le prix?**
— **D'accord, deux mille cinq cents.**
— **Merci, Madame. Au revoir!**

## Polite phrases
**Je voudrais…** (I would like…), **Avez-vous…?** (Do you have…?), **Et avec ça?** (Anything else?), **C'est tout.** (That's all.), **Voici l'argent.** (Here is the money.), **Gardez la monnaie.** (Keep the change.)`,
          examples: `**Example 1.** Translate: *a kilo of rice*. *Answer:* **un kilo de riz**.

**Example 2.** How do you ask "How much is it?" *Answer:* **C'est combien?** (or Ça coûte combien?)

**Example 3.** Translate: *I would like a dozen eggs.* *Answer:* **Je voudrais une douzaine d'œufs.**`,
        },
        questions: [
          ["E", "'C'est combien?' means", "How much is it?", "What is it?", "Where is it?", "Who is it?", "Combien asks for price."],
          ["E", "'Les légumes' means", "vegetables", "fruits", "meat", "drinks", "Légumes are vegetables."],
          ["E", "'Le marché' means", "the market", "the shop assistant", "the bank", "the hospital", "Marché is market."],
          ["M", "'Je voudrais' means", "I would like", "I want to go", "I have", "I will sell", "It is polite. Answer: I would like."],
          ["M", "'Un kilo de tomates' means", "a kilo of tomatoes", "a bag of tomatoes", "a tomato kilo shop", "one tomato", "Kilo is a weight."],
          ["M", "'Une douzaine d'œufs' means", "a dozen eggs", "a dozen apples", "two eggs", "a box of eggs", "Douzaine is twelve."],
          ["M", "'C'est tout' means", "That's all", "It's everything I want", "It's too much", "It's free", "Tout means all."],
          ["H", "The correct phrase for 'a bottle of oil' is", "une bouteille d'huile", "une bouteille de l'huile", "une bouteille des huiles", "un bouteille huile", "Use de/d' after quantity."],
          ["H", "'Et avec ça?' is asked by a seller to mean", "Anything else?", "How much?", "Are you sure?", "Where do you live?", "It asks for more items."],
          ["H", "'Gardez la monnaie' means", "Keep the change", "Give me the change", "Count the money", "Pay now", "Monnaie is change."],
        ],
      },
      {
        week: 5,
        title: "Ordinal numbers and dates",
        subtopics: ["Ordinal numbers", "Floors and positions", "Writing dates", "Talking about years"],
        objectives: ["Form ordinal numbers in French", "Use ordinals for floors and positions", "Write full dates in French", "Say years in French"],
        lesson: {
          title: "Premier, deuxième…",
          summary: "Form ordinal numbers and write dates and years.",
          minutes: 40,
          notes: `## Ordinal numbers
Most ordinals add **-ième** to the cardinal number:
| Cardinal | Ordinal | English |
|---|---|---|
| un | **premier / première** | first |
| deux | **deuxième** (or second/seconde) | second |
| trois | **troisième** | third |
| quatre | **quatrième** | fourth (drop final -e) |
| cinq | **cinquième** | fifth (add **u**) |
| six | **sixième** | sixth |
| neuf | **neuvième** | ninth (**f → v**) |
| dix | **dixième** | tenth |
| vingt | **vingtième** | twentieth |
| vingt et un | **vingt et unième** | twenty-first |
Abbreviations: **1er / 1re**, **2e**, **3e**, **10e**.

## Using ordinals
- **Je suis en deuxième année.** — I am in second year (JSS2).
- **J'habite au troisième étage.** — I live on the third floor.
- **Il est premier de la classe.** — He is first in class.
- **la première fois** — the first time

## Dates
In dates, French uses **cardinal** numbers except for the 1st:
- **le premier janvier** (1st January)
- **le deux mars** (2nd March)
- **le vingt et un juin** (21st June)
- full date: **lundi, le quinze septembre deux mille vingt-six**
- short form: **15/09/2026** (day/month/year)

## Years
- **2026** = **deux mille vingt-six**
- **1960** = **mille neuf cent soixante** (or dix-neuf cent soixante)
- **en 1960** — in 1960: *Le Nigeria est devenu indépendant le premier octobre mille neuf cent soixante.*`,
          examples: `**Example 1.** Write the ordinal of **cinq**. *Answer:* **cinquième**.

**Example 2.** Write *2nd May* in French. *Answer:* **le deux mai**.

**Example 3.** Say 1960 in French. *Answer:* **mille neuf cent soixante**.`,
        },
        questions: [
          ["E", "'Premier' means", "first", "second", "third", "last", "Premier is first."],
          ["E", "'Troisième' means", "third", "thirteenth", "thirtieth", "three", "Trois + ième. Answer: third."],
          ["E", "'Deuxième' means", "second", "twelfth", "double", "two", "Deux + ième. Answer: second."],
          ["M", "The ordinal of 'cinq' is", "cinquième", "cinqième", "cinquieme without accent rule", "cinquantième", "Add u before ième."],
          ["M", "The ordinal of 'neuf' is", "neuvième", "neufième", "nouvième", "neufsième", "F becomes v. Answer: neuvième."],
          ["M", "'Le premier janvier' means", "1st January", "January 1960", "the first week of January", "the last day of January", "Premier for the 1st."],
          ["M", "'Je suis en deuxième année' means", "I am in second year", "I am two years old", "I have two years left", "It is the second day", "Année is year. Answer: I am in second year."],
          ["H", "The correct French for 21st June is", "le vingt et un juin", "le vingt et unième juin", "le vingt-premier juin", "le premier vingt juin", "Dates use cardinals after the 1st."],
          ["H", "1960 in French is", "mille neuf cent soixante", "mille neuf soixante", "dix-neuf soixante mille", "neuf cent soixante mille", "1000 + 900 + 60."],
          ["H", "The abbreviation '3e' stands for", "troisième", "trois euros", "troisièmes only", "trentième", "e after a number marks ordinals."],
        ],
      },
      {
        week: 6,
        title: "Describing people: adjectives",
        subtopics: ["Physical description", "Character description", "Agreement of adjectives", "Position of adjectives"],
        objectives: ["Describe physical appearance in French", "Describe character in French", "Make adjectives agree in gender and number", "Place adjectives correctly"],
        lesson: {
          title: "Il est grand, elle est gentille",
          summary: "Describe people using correctly agreeing adjectives.",
          minutes: 40,
          notes: `## Physical description
**grand(e)** (tall), **petit(e)** (short/small), **gros(se)** (fat), **mince** (slim), **beau / belle** (handsome/beautiful), **joli(e)** (pretty), **fort(e)** (strong), **jeune** (young), **vieux / vieille** (old).
- **Il a les cheveux courts.** — He has short hair.
- **Elle a les yeux noirs.** — She has black eyes.

## Character description
**gentil(le)** (kind), **sympathique / sympa** (nice), **intelligent(e)**, **travailleur / travailleuse** (hard-working), **paresseux / paresseuse** (lazy), **drôle** (funny), **timide** (shy), **sérieux / sérieuse** (serious), **honnête** (honest), **poli(e)** (polite), **méchant(e)** (nasty).

## Agreement
| Rule | Masculine | Feminine |
|---|---|---|
| add -e | grand | grande |
| already ends in -e | mince | mince |
| -eux → -euse | sérieux | sérieuse |
| -eur → -euse | travailleur | travailleuse |
| double the consonant | gentil, gros, bon | gentille, grosse, bonne |
| irregular | beau, vieux, nouveau | belle, vieille, nouvelle |
plural: add **-s** (grands, grandes); **-eux** stays the same in the masculine plural (sérieux).

## Position
Most adjectives come **after** the noun: **un garçon intelligent**.
A few short common ones come **before** the noun (BAGS: **B**eauty, **A**ge, **G**oodness, **S**ize): **beau, joli, jeune, vieux, nouveau, bon, mauvais, grand, petit, gros**: *une jolie fille, un grand arbre, une bonne idée*.
Before a masculine noun starting with a vowel, **beau → bel**, **vieux → vieil**, **nouveau → nouvel**: *un bel homme*.

## Model
**Mon meilleur ami s'appelle Emeka. Il est grand et mince. Il a les cheveux noirs. Il est très gentil et travailleur.**`,
          examples: `**Example 1.** Make feminine: **intelligent**. *Answer:* **intelligente**.

**Example 2.** Translate: *a kind girl*. *Answer:* **une fille gentille**.

**Example 3.** Translate: *a big tree*. *Answer:* **un grand arbre** (grand comes before the noun).`,
        },
        questions: [
          ["E", "'Grand' means", "tall or big", "small", "fat", "old", "Grand is tall/big."],
          ["E", "'Gentil' means", "kind", "lazy", "funny", "shy", "Gentil is kind."],
          ["E", "'Petite' is the feminine of", "petit", "petite already masculine", "peti", "petits", "Add -e. Answer: petit."],
          ["M", "The feminine of 'sérieux' is", "sérieuse", "sérieuxe", "sérieure", "sérieux", "-eux becomes -euse."],
          ["M", "The feminine of 'beau' is", "belle", "beaue", "bele", "bonne", "Beau is irregular."],
          ["M", "'Paresseux' means", "lazy", "hard-working", "polite", "honest", "Paresseux is lazy."],
          ["M", "The feminine of 'gentil' is", "gentille", "gentile", "gentil", "gentilles", "Double the l and add e."],
          ["H", "Which phrase has the adjective correctly placed?", "une jolie robe", "une robe jolie très", "une intelligente fille", "un garçon grand bel", "Joli comes before the noun."],
          ["H", "The correct form before 'homme' is", "un bel homme", "un beau homme", "un belle homme", "un beaux homme", "Beau becomes bel before a vowel."],
          ["H", "'Elle est travailleuse' means", "She is hard-working", "She is a traveller", "She is tired", "She is lazy", "Travailleur means hard-working."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Transport and directions",
        subtopics: ["Means of transport", "Using en and à with transport", "Asking for directions", "Giving directions"],
        objectives: ["Name means of transport in French", "Use en and à correctly with transport", "Ask for directions politely", "Give simple directions"],
        lesson: {
          title: "Comment vas-tu à l'école?",
          summary: "Talk about transport and give directions.",
          minutes: 40,
          notes: `## Means of transport
| French | English |
|---|---|
| **la voiture** | car |
| **le bus / l'autobus** | bus |
| **le taxi** | taxi |
| **la moto** | motorcycle |
| **le vélo / la bicyclette** | bicycle |
| **le train** | train |
| **l'avion** (m) | aeroplane |
| **le bateau** | boat |
| **le kéké (le tricycle)** | tricycle (keke) |

## en or à?
- **en** for vehicles you go **inside**: **en voiture, en bus, en taxi, en train, en avion, en bateau**
- **à** for vehicles you sit **on** and for walking: **à vélo, à moto, à cheval, à pied** (on foot)
- **Je vais à l'école à pied.** — I walk to school.
- **Mon père va au travail en voiture.** — My father goes to work by car.

## Asking for directions
- **Excusez-moi, Monsieur. Où est la banque, s'il vous plaît?**
- **Pour aller à la gare, s'il vous plaît?** — How do I get to the station?
- **C'est loin? / C'est près?** — Is it far? / Is it near?

## Giving directions
| French | English |
|---|---|
| **Allez tout droit.** | Go straight on. |
| **Tournez à gauche.** | Turn left. |
| **Tournez à droite.** | Turn right. |
| **Prenez la première rue à droite.** | Take the first street on the right. |
| **Traversez la rue.** | Cross the street. |
| **C'est au coin de la rue.** | It is at the corner of the street. |
| **C'est à cinq minutes à pied.** | It is five minutes on foot. |
| **au carrefour / aux feux** | at the crossroads / at the traffic lights |`,
          examples: `**Example 1.** Translate: *I go to school by bus.* *Answer:* **Je vais à l'école en bus.**

**Example 2.** Translate: *Turn left.* *Answer:* **Tournez à gauche.**

**Example 3.** Translate: *on foot*. *Answer:* **à pied**.`,
        },
        questions: [
          ["E", "'La voiture' means", "the car", "the train", "the boat", "the bicycle", "Voiture is car."],
          ["E", "'L'avion' means", "the aeroplane", "the bus", "the taxi", "the boat", "Avion is aeroplane."],
          ["E", "'À pied' means", "on foot", "by car", "by bicycle", "by train", "Pied is foot. Answer: on foot."],
          ["M", "The correct phrase for 'by bus' is", "en bus", "à bus", "au bus", "par le bus en", "Use en for vehicles you enter."],
          ["M", "The correct phrase for 'by bicycle' is", "à vélo", "en vélo only", "au vélo", "dans vélo", "À for vehicles you sit on."],
          ["M", "'Tournez à droite' means", "Turn right", "Turn left", "Go straight", "Stop here", "Droite is right."],
          ["M", "'Allez tout droit' means", "Go straight on", "Turn back", "Go right", "Cross the road", "Tout droit is straight."],
          ["H", "'Prenez la première rue à gauche' means", "Take the first street on the left", "Take the first bus to the left", "The first street is on the right", "Leave the street", "Première rue is first street."],
          ["H", "'C'est à cinq minutes à pied' means", "It is five minutes on foot", "It is five kilometres away", "It is five streets away", "Walk five times", "It gives walking time."],
          ["H", "'Traversez la rue' means", "Cross the street", "Turn the street", "Leave the street", "Follow the street", "Traverser is to cross."],
        ],
      },
      {
        week: 2,
        title: "Places in town",
        subtopics: ["Public places", "Shops", "What you do in each place", "Describing your town"],
        objectives: ["Name public places in a town", "Name common shops", "Say what is done in each place", "Describe one's town in French"],
        lesson: {
          title: "En ville",
          summary: "Name places in town and describe a town.",
          minutes: 40,
          notes: `## Public places
| French | English |
|---|---|
| **la banque** | bank |
| **l'hôpital** (m) | hospital |
| **la poste** | post office |
| **l'église** (f) | church |
| **la mosquée** | mosque |
| **l'école** (f) | school |
| **la gare** | (train) station |
| **la gare routière** | motor park |
| **l'aéroport** (m) | airport |
| **le stade** | stadium |
| **le commissariat** | police station |
| **la mairie** | town hall / local government office |
| **le cinéma** | cinema |
| **la bibliothèque** | library |
| **le parc** | park |

## Shops
**la boulangerie** (bakery), **la pharmacie** (pharmacy), **le supermarché** (supermarket), **la boucherie** (butcher's), **la librairie** (bookshop — not library!), **le restaurant**.

## What you do there
- **À la banque, on dépose de l'argent.** — At the bank, we deposit money.
- **À la pharmacie, on achète des médicaments.** — At the pharmacy, we buy medicines.
- **À la bibliothèque, on lit des livres.** — At the library, we read books.
- **À la boulangerie, on achète du pain.**
- **Au stade, on regarde des matchs.**
(**on** = people in general / we)

## Describing your town
- **J'habite à Ibadan. C'est une grande ville.** — I live in Ibadan. It is a big city.
- **Il y a beaucoup de marchés et d'écoles.**
- **Il n'y a pas d'aéroport dans mon village.**
- **J'aime ma ville parce qu'elle est animée.** — I like my town because it is lively.

## False friend
**la librairie** = **bookshop**; **la bibliothèque** = **library**.`,
          examples: `**Example 1.** What is **la bibliothèque**? *Answer:* the **library**.

**Example 2.** Where do you buy bread? *Answer:* **à la boulangerie**.

**Example 3.** Translate: *There is a big stadium.* *Answer:* **Il y a un grand stade.**`,
        },
        questions: [
          ["E", "'La banque' means", "the bank", "the bench", "the bakery", "the bookshop", "Banque is bank."],
          ["E", "'L'hôpital' means", "the hospital", "the hotel", "the hall", "the house", "Hôpital is hospital."],
          ["E", "'La mosquée' means", "the mosque", "the market", "the museum", "the mountain", "Mosquée is mosque."],
          ["M", "'La boulangerie' sells", "bread", "medicines", "meat", "books", "It is a bakery."],
          ["M", "'La pharmacie' is where you buy", "medicines", "bread", "clothes", "petrol", "It is the pharmacy."],
          ["M", "'La gare routière' means", "the motor park", "the train only", "the route map", "the airport", "Buses leave from there."],
          ["M", "'Le stade' means", "the stadium", "the state", "the station", "the street", "Stade is stadium."],
          ["H", "'La librairie' means", "the bookshop", "the library", "the laboratory", "the liberty square", "It is a false friend."],
          ["H", "'À la bibliothèque, on lit des livres' means", "At the library, we read books", "At the bookshop, we buy books", "At school, we write books", "At home, we sell books", "Bibliothèque is library."],
          ["H", "'Il n'y a pas d'aéroport' means", "There is no airport", "There is an airport", "The airport is far", "The airport is closed", "Il n'y a pas de = there is no."],
        ],
      },
      {
        week: 3,
        title: "The near future",
        subtopics: ["Forming the futur proche", "Time expressions for the future", "Negative futur proche", "Making plans"],
        objectives: ["Form the near future with aller + infinitive", "Use time expressions for the future", "Make the near future negative", "Talk about plans for the weekend and holidays"],
        lesson: {
          title: "Je vais voyager",
          summary: "Talk about plans using aller + infinitive.",
          minutes: 40,
          notes: `## Forming the futur proche
**Futur proche** (near future) = **present tense of aller + infinitive**.
| | |
|---|---|
| **je vais manger** | I am going to eat |
| **tu vas jouer** | you are going to play |
| **il/elle va partir** | he/she is going to leave |
| **nous allons voyager** | we are going to travel |
| **vous allez finir** | you are going to finish |
| **ils/elles vont regarder** | they are going to watch |
The second verb stays in the **infinitive**.

## Time expressions
**demain** (tomorrow), **ce soir** (this evening), **ce week-end** (this weekend), **la semaine prochaine** (next week), **le mois prochain** (next month), **l'année prochaine** (next year), **bientôt** (soon), **plus tard** (later), **pendant les vacances** (during the holidays).

## Negative
Put **ne … pas** around the **aller** form:
- **Je ne vais pas sortir ce soir.** — I am not going to go out tonight.
- **Nous n'allons pas voyager.**

## Questions
- **Qu'est-ce que tu vas faire ce week-end?** — What are you going to do this weekend?
- **Est-ce que vous allez venir?** — Are you going to come?

## Making plans — model paragraph
**Pendant les vacances, je vais aller chez mes grands-parents à Owerri. Nous allons visiter le marché et je vais aider mon grand-père à la ferme. Le soir, nous allons écouter des contes. Je ne vais pas regarder la télévision tous les jours!**`,
          examples: `**Example 1.** Translate: *I am going to eat.* *Answer:* **Je vais manger.**

**Example 2.** Make negative: **Il va partir.** *Answer:* **Il ne va pas partir.**

**Example 3.** Translate: *We are going to travel next week.* *Answer:* **Nous allons voyager la semaine prochaine.**`,
        },
        questions: [
          ["E", "The futur proche is formed with", "aller + infinitive", "avoir + infinitive", "être + past participle", "faire + noun", "Je vais + verb."],
          ["E", "'Je vais manger' means", "I am going to eat", "I ate", "I am eating now only", "I like to eat", "Near future. Answer: I am going to eat."],
          ["E", "'Demain' means", "tomorrow", "yesterday", "today", "tonight", "Demain is tomorrow."],
          ["M", "Complete: Nous ___ voyager.", "allons", "allez", "vont", "vais", "Nous allons. Answer: allons."],
          ["M", "Complete: Ils ___ regarder un film.", "vont", "allons", "vas", "va", "Ils vont. Answer: vont."],
          ["M", "'La semaine prochaine' means", "next week", "last week", "this week", "every week", "Prochaine means next."],
          ["M", "'Tu vas jouer au football?' means", "Are you going to play football?", "Did you play football?", "Do you play football every day?", "You played football.", "Futur proche question."],
          ["H", "The negative of 'Je vais sortir' is", "Je ne vais pas sortir.", "Je vais ne pas sortir.", "Je ne vais sortir pas.", "Ne je vais pas sortir.", "Ne…pas surrounds aller."],
          ["H", "In the futur proche, the second verb is in the", "infinitive", "present tense", "past participle", "imperative", "It does not change."],
          ["H", "'Qu'est-ce que tu vas faire ce week-end?' means", "What are you going to do this weekend?", "What did you do last weekend?", "Where are you going this weekend?", "Who are you visiting this weekend?", "Faire is to do."],
        ],
      },
      {
        week: 4,
        title: "Hobbies and leisure",
        subtopics: ["Names of hobbies", "Jouer à and jouer de", "Faire de and sports", "Expressing frequency"],
        objectives: ["Name common hobbies in French", "Use jouer à for games and jouer de for instruments", "Use faire de with activities", "Say how often one does an activity"],
        lesson: {
          title: "Mes loisirs",
          summary: "Talk about hobbies and how often you do them.",
          minutes: 40,
          notes: `## Hobbies (les loisirs / les passe-temps)
**lire** (to read), **écouter de la musique**, **regarder la télévision**, **danser**, **chanter**, **dessiner** (to draw), **nager** (to swim), **cuisiner**, **voyager**, **jouer aux jeux vidéo**, **surfer sur Internet**, **faire du vélo**.

## Jouer à (games and sports)
**jouer à + le = au; à + la = à la; à + les = aux**:
- **jouer au football**, **au basket**, **au tennis**, **au volley**
- **jouer aux cartes** (cards), **aux échecs** (chess), **à l'ayo**

## Jouer de (musical instruments)
**jouer de + le = du; de + la = de la; de + l' = de l'**:
- **jouer du piano**, **du tambour** (drum), **de la guitare**, **de la flûte**, **du violon**

## Faire de (activities)
**faire du sport**, **faire de la natation** (swimming), **faire du vélo** (cycling), **faire de la danse**, **faire de l'athlétisme**.

## Expressing likes
- **J'aime jouer au football.** — I like playing football. (aimer + infinitive)
- **Mon passe-temps préféré, c'est la lecture.** — My favourite hobby is reading.
- **Je suis fan de musique.**

## Frequency
**toujours** (always), **souvent** (often), **quelquefois / parfois** (sometimes), **rarement** (rarely), **ne … jamais** (never), **tous les jours** (every day), **le samedi** (on Saturdays), **une fois par semaine** (once a week).
- **Je joue souvent au football le samedi.**
- **Je ne nage jamais.**`,
          examples: `**Example 1.** Translate: *I play the guitar.* *Answer:* **Je joue de la guitare.**

**Example 2.** Translate: *We play football on Saturdays.* *Answer:* **Nous jouons au football le samedi.**

**Example 3.** What does **"souvent"** mean? *Answer:* **often**.`,
        },
        questions: [
          ["E", "'Les loisirs' means", "hobbies or leisure activities", "lessons", "laws", "lies", "Loisirs are leisure."],
          ["E", "'Lire' means", "to read", "to laugh", "to lie down", "to write", "Lire is to read."],
          ["E", "'Nager' means", "to swim", "to dance", "to sing", "to draw", "Nager is to swim."],
          ["M", "The correct phrase for 'to play football' is", "jouer au football", "jouer du football", "jouer de football", "faire le football à", "Jouer à for sports."],
          ["M", "The correct phrase for 'to play the piano' is", "jouer du piano", "jouer au piano", "jouer à piano", "faire piano", "Jouer de for instruments."],
          ["M", "'Souvent' means", "often", "never", "rarely", "always", "Souvent is often."],
          ["M", "'Faire du vélo' means", "to go cycling", "to repair a bicycle", "to sell bicycles", "to watch a race", "Faire du + activity."],
          ["H", "The correct sentence for 'I play the guitar' is", "Je joue de la guitare.", "Je joue à la guitare.", "Je joue la guitare de.", "Je fais guitare.", "Instruments take jouer de."],
          ["H", "'Je ne nage jamais' means", "I never swim", "I always swim", "I swim sometimes", "I no longer swim", "Jamais is never."],
          ["H", "'Une fois par semaine' means", "once a week", "every day", "twice a month", "once a year", "Fois is time(s)."],
        ],
      },
      {
        week: 5,
        title: "Daily routine and reflexive verbs",
        subtopics: ["Reflexive pronouns", "Conjugating reflexive verbs", "Daily routine vocabulary", "Describing a typical day"],
        objectives: ["Explain reflexive verbs", "Conjugate reflexive verbs in the present tense", "Use daily routine vocabulary", "Describe a typical school day"],
        lesson: {
          title: "Je me lève à six heures",
          summary: "Describe a daily routine using reflexive verbs.",
          minutes: 40,
          notes: `## Reflexive verbs
**Reflexive verbs** describe actions done **to oneself**. They have a **reflexive pronoun** (se) in the infinitive: **se lever** (to get up), **se laver** (to wash oneself), **s'habiller** (to get dressed), **se brosser les dents** (to brush one's teeth), **se coucher** (to go to bed), **se réveiller** (to wake up), **se dépêcher** (to hurry), **se reposer** (to rest), **s'appeler** (to be called).

## Reflexive pronouns
| Subject | Pronoun | se laver |
|---|---|---|
| je | **me (m')** | je me lave |
| tu | **te (t')** | tu te laves |
| il/elle/on | **se (s')** | il se lave |
| nous | **nous** | nous nous lavons |
| vous | **vous** | vous vous lavez |
| ils/elles | **se (s')** | ils se lavent |
**me, te, se** become **m', t', s'** before a vowel: *je m'habille*.

## Negative
**ne** goes before the pronoun, **pas** after the verb: **Je ne me lève pas tôt.**

## Daily routine vocabulary
**le matin** (morning), **tôt** (early), **tard** (late), **d'abord** (first), **ensuite / puis** (then), **après** (after), **enfin** (finally), **prendre le petit déjeuner**, **aller à l'école**, **rentrer à la maison** (go back home), **faire ses devoirs**.

## A typical day
**Je me réveille à cinq heures et demie. D'abord, je me lève et je me lave. Ensuite, je m'habille et je prends le petit déjeuner. Je vais à l'école à sept heures. Je rentre à la maison à deux heures. Le soir, je fais mes devoirs. Enfin, je me couche à neuf heures.**`,
          examples: `**Example 1.** Translate: *I get up at six o'clock.* *Answer:* **Je me lève à six heures.**

**Example 2.** Complete: **Nous ___ couchons tard.** *Answer:* **nous**.

**Example 3.** Make negative: **Il se lave.** *Answer:* **Il ne se lave pas.**`,
        },
        questions: [
          ["E", "'Se lever' means", "to get up", "to wash", "to sleep", "to dress", "Lever is to raise."],
          ["E", "'Se coucher' means", "to go to bed", "to cough", "to wake up", "to sit", "Coucher is to lie down."],
          ["E", "'Je me lave' means", "I wash myself", "I wash the car", "I love myself", "I leave", "Se laver is reflexive."],
          ["M", "Complete: Tu ___ habilles.", "t'", "me", "se", "nous", "Te becomes t' before a vowel."],
          ["M", "Complete: Nous ___ réveillons tôt.", "nous", "se", "vous", "me", "Nous nous réveillons."],
          ["M", "Complete: Ils ___ brossent les dents.", "se", "nous", "vous", "te", "Ils se brossent."],
          ["M", "'Ensuite' means", "then", "first", "finally", "before", "It shows sequence."],
          ["H", "The negative of 'Je me lève tôt' is", "Je ne me lève pas tôt.", "Je me ne lève pas tôt.", "Je ne lève me pas tôt.", "Ne je me lève pas tôt.", "Ne goes before the pronoun."],
          ["H", "'Je m'habille' means", "I get dressed", "I live", "I am called", "I hurry", "S'habiller is to dress."],
          ["H", "'Elle se dépêche' means", "She hurries", "She rests", "She sleeps", "She leaves", "Se dépêcher is to hurry."],
        ],
      },
      {
        week: 6,
        title: "Writing about oneself",
        subtopics: ["Planning a short composition", "Useful linking words", "A model composition", "Checking your writing"],
        objectives: ["Plan a short composition about oneself", "Use linking words to connect ideas", "Write a short composition in French", "Check and correct common errors"],
        lesson: {
          title: "Je me présente",
          summary: "Write a short, well-organised composition about yourself.",
          minutes: 45,
          notes: `## Planning
Organise your composition into short paragraphs:
1. **introduction** — name, age, nationality, where you live
2. **family** — members, jobs
3. **school** — class, favourite subjects, friends
4. **hobbies and routine**
5. **conclusion** — future plans or wishes

## Linking words
| French | English |
|---|---|
| **et** | and |
| **mais** | but |
| **ou** | or |
| **parce que** | because |
| **donc** | so / therefore |
| **aussi** | also |
| **d'abord / ensuite / enfin** | first / then / finally |
| **par exemple** | for example |
| **quand** | when |

## Useful structures
- **Ma matière préférée est l'anglais parce que…** — My favourite subject is English because…
- **J'aime … mais je n'aime pas …**
- **Plus tard, je voudrais être …** — Later, I would like to be…

## Model composition
**Je m'appelle Fatima Yusuf. J'ai treize ans et je suis nigériane. J'habite à Kaduna avec ma famille.**
**Dans ma famille, il y a cinq personnes. Mon père est ingénieur et ma mère est enseignante. J'ai un frère et une sœur.**
**Je suis en deuxième année au collège. Ma matière préférée est le français parce que c'est une belle langue. Je n'aime pas beaucoup les maths, mais je travaille dur.**
**Le week-end, je joue au volley avec mes amies et je lis des romans. Plus tard, je voudrais être médecin pour aider les malades.**

## Checklist
- verb endings agree with the subject
- adjectives agree with nouns (gender, number)
- accents are correct (é, è, ç)
- articles are correct (le/la/les, un/une/des)
- capital letters for names but **not** for nationalities, days and months
- **ne … pas** used correctly`,
          examples: `**Example 1.** Join with *because*: **J'aime le français. C'est intéressant.** *Answer:* **J'aime le français parce que c'est intéressant.**

**Example 2.** Correct the error: **Je suis Nigériane.** *Answer:* **Je suis nigériane.** (no capital for nationality)

**Example 3.** Translate: *Later, I would like to be a pilot.* *Answer:* **Plus tard, je voudrais être pilote.**`,
        },
        questions: [
          ["E", "'Parce que' means", "because", "but", "so", "and", "It gives a reason."],
          ["E", "'Mais' means", "but", "more", "and", "or", "Mais is but. Answer: but."],
          ["E", "'Ma matière préférée' means", "my favourite subject", "my best friend", "my main material", "my preferred food", "Matière is subject."],
          ["M", "'Donc' means", "so or therefore", "but", "because", "although", "It shows result."],
          ["M", "'Enfin' means", "finally", "first", "then", "also", "It closes a sequence."],
          ["M", "The correct sentence is", "Je suis nigérian.", "Je suis Nigérian.", "Je suis nigérien Nigeria.", "J'ai nigérian.", "Nationalities take a small letter."],
          ["M", "'Plus tard, je voudrais être médecin' means", "Later, I would like to be a doctor", "I was a doctor before", "I am a doctor now", "The doctor came late", "Plus tard is later."],
          ["H", "Which sentence has correct agreement?", "Ma sœur est petite et gentille.", "Ma sœur est petit et gentil.", "Mon sœur est petite.", "Ma sœur sont petites.", "Sœur is feminine singular."],
          ["H", "A good French composition about oneself should begin with", "name, age and where one lives", "a list of verbs", "the conclusion", "a long poem", "Introduction comes first."],
          ["H", "The correct way to write 'on Monday' in a French composition is", "lundi", "Lundi", "le Lundi", "LUNDI", "Days take a small letter."],
        ],
      },
    ],
  },
];
