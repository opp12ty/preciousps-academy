import type { TermPlan } from "../types";

/** JSS3 French — original Precious PS content following the national Basic Education structure. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The passé composé with avoir",
        subtopics: ["Meaning of the passé composé", "Forming past participles", "Passé composé with avoir", "Time expressions for the past"],
        objectives: ["Explain when the passé composé is used", "Form past participles of regular verbs", "Form the passé composé with avoir", "Use past time expressions"],
        lesson: {
          title: "Hier, j'ai mangé…",
          summary: "Talk about completed past actions with avoir + past participle.",
          minutes: 45,
          notes: `## Meaning
The **passé composé** is used for **completed actions in the past**: *I ate, I have eaten, I did eat*.

## Formation
**passé composé = present tense of the auxiliary (avoir or être) + past participle**
Most verbs use **avoir**.

## Past participles of regular verbs
| Group | Rule | Example |
|---|---|---|
| **-er** | -er → **-é** | parler → **parlé**, manger → **mangé** |
| **-ir** | -ir → **-i** | finir → **fini**, choisir → **choisi** |
| **-re** | -re → **-u** | vendre → **vendu**, attendre → **attendu** |

## Common irregular past participles
**avoir → eu**, **être → été**, **faire → fait**, **prendre → pris**, **mettre → mis**, **dire → dit**, **écrire → écrit**, **lire → lu**, **voir → vu**, **boire → bu**, **pouvoir → pu**, **vouloir → voulu**.

## Passé composé with avoir — manger
| | |
|---|---|
| **j'ai mangé** | I ate / have eaten |
| **tu as mangé** | you ate |
| **il/elle a mangé** | he/she ate |
| **nous avons mangé** | we ate |
| **vous avez mangé** | you ate |
| **ils/elles ont mangé** | they ate |

## Negative
**ne … pas** goes around the **auxiliary**: **Je n'ai pas mangé.** — I did not eat.

## Time expressions
**hier** (yesterday), **hier soir** (last night), **avant-hier** (the day before yesterday), **la semaine dernière** (last week), **le mois dernier** (last month), **l'année dernière** (last year), **il y a deux jours** (two days ago), **ce matin** (this morning).

## Examples
- **Hier, j'ai regardé un film.** — Yesterday, I watched a film.
- **Nous avons fini nos devoirs.** — We finished our homework.
- **Ils ont vendu leur voiture.** — They sold their car.
- **Elle a pris le bus.** — She took the bus.`,
          examples: `**Example 1.** Give the past participle of **choisir**. *Answer:* **choisi**.

**Example 2.** Translate: *We ate rice yesterday.* *Answer:* **Hier, nous avons mangé du riz.**

**Example 3.** Make negative: **Il a fini.** *Answer:* **Il n'a pas fini.**`,
        },
        questions: [
          ["E", "The passé composé is used for", "completed actions in the past", "future plans", "habitual present actions only", "commands", "It narrates finished events."],
          ["E", "The past participle of 'parler' is", "parlé", "parli", "parlu", "parlant", "-er becomes -é."],
          ["E", "'Hier' means", "yesterday", "tomorrow", "today", "next week", "Hier is yesterday."],
          ["M", "The past participle of 'finir' is", "fini", "finé", "finu", "finis", "-ir becomes -i."],
          ["M", "The past participle of 'vendre' is", "vendu", "vendé", "vendi", "vendre", "-re becomes -u."],
          ["M", "Complete: Nous ___ regardé la télévision.", "avons", "sommes", "ont", "avez", "Nous avons. Answer: avons."],
          ["M", "The past participle of 'faire' is", "fait", "faisé", "fu", "faité", "It is irregular."],
          ["H", "The negative of 'J'ai mangé' is", "Je n'ai pas mangé.", "Je n'ai mangé pas.", "Je ne pas ai mangé.", "Je ai ne pas mangé.", "Ne…pas surrounds the auxiliary."],
          ["H", "'Il y a deux jours' means", "two days ago", "in two days", "there are two days", "every two days", "Il y a + time = ago."],
          ["H", "The past participle of 'prendre' is", "pris", "prendu", "prené", "prit", "Prendre is irregular."],
        ],
      },
      {
        week: 2,
        title: "The passé composé with être",
        subtopics: ["Verbs that take être", "Agreement of the past participle", "Reflexive verbs in the passé composé", "Narrating past events"],
        objectives: ["Identify verbs that form the passé composé with être", "Make past participles agree with the subject", "Form reflexive verbs in the passé composé", "Narrate a past event using avoir and être"],
        lesson: {
          title: "Je suis allé(e)…",
          summary: "Use être as the auxiliary and make past participles agree.",
          minutes: 45,
          notes: `## Verbs that take être
Mostly verbs of **movement or change of state**. A helpful memory house — **"MRS VAN DER TRAMP"**:
| Verb | Past participle | Verb | Past participle |
|---|---|---|---|
| **monter** (go up) | monté | **naître** (be born) | **né** |
| **rester** (stay) | resté | **descendre** (go down) | descendu |
| **sortir** (go out) | sorti | **entrer** (enter) | entré |
| **venir** (come) | **venu** | **rentrer** (go home) | rentré |
| **aller** (go) | allé | **tomber** (fall) | tombé |
| **arriver** (arrive) | arrivé | **retourner** (return) | retourné |
| **mourir** (die) | **mort** | **partir** (leave) | parti |
Also verbs formed from these: **revenir**, **devenir** (devenu).
**All reflexive verbs** also take **être**.

## Agreement
With **être**, the past participle **agrees with the subject** like an adjective:
| | aller |
|---|---|
| je suis allé(e) | nous sommes allé(e)s |
| tu es allé(e) | vous êtes allé(e)(s) |
| il est allé | ils sont allés |
| elle est allée | elles sont allées |
- add **-e** for feminine, **-s** for plural, **-es** for feminine plural
- **Amina est arrivée.** — Amina arrived.
- **Les garçons sont partis.** — The boys left.

## Reflexive verbs
- **je me suis levé(e)** — I got up
- **elle s'est lavée** — she washed (herself)
- **nous nous sommes couché(e)s** — we went to bed
- negative: **Je ne me suis pas levé tôt.**

## Narrating — model
**Samedi dernier, je me suis levée à sept heures. Je suis allée au marché avec ma mère. Nous avons acheté des légumes. Ensuite, nous sommes rentrées à la maison et j'ai aidé ma mère à préparer le repas.**`,
          examples: `**Example 1.** Translate: *She went to school.* *Answer:* **Elle est allée à l'école.**

**Example 2.** Complete: **Ils sont ___ (arriver).** *Answer:* **arrivés**.

**Example 3.** Translate: *I (boy) got up at six.* *Answer:* **Je me suis levé à six heures.**`,
        },
        questions: [
          ["E", "The passé composé of 'aller' uses the auxiliary", "être", "avoir", "faire", "aller", "Movement verbs take être."],
          ["E", "'Je suis allé' means", "I went", "I go", "I am going to go", "I have gone to sleep", "Aller in the past."],
          ["E", "Which verb takes être in the passé composé?", "arriver", "manger", "parler", "finir", "Arriver is a movement verb."],
          ["M", "Complete: Elle est ___ (partir).", "partie", "parti", "partis", "parties", "Feminine adds -e."],
          ["M", "Complete: Nous sommes ___ (rentrer). (boys)", "rentrés", "rentré", "rentrées", "rentrée", "Masculine plural adds -s."],
          ["M", "The past participle of 'venir' is", "venu", "venir", "vené", "venait", "It is irregular."],
          ["M", "The past participle of 'naître' is", "né", "naît", "naissu", "nait", "Je suis né = I was born."],
          ["H", "The correct sentence is", "Les filles sont arrivées.", "Les filles ont arrivé.", "Les filles sont arrivé.", "Les filles sont arrivés.", "Feminine plural agreement with être."],
          ["H", "The passé composé of 'je me lève' is", "je me suis levé(e)", "j'ai me levé", "je me ai levé", "je suis me levé", "Reflexive verbs take être."],
          ["H", "'Il est mort en 1990' means", "He died in 1990", "He was born in 1990", "He went out in 1990", "He arrived in 1990", "Mourir → mort. Answer: He died in 1990."],
        ],
      },
      {
        week: 3,
        title: "The imperative",
        subtopics: ["Forming the imperative", "Imperative of -er verbs", "Irregular imperatives", "Negative imperative"],
        objectives: ["Form the imperative of regular verbs", "Drop the s in -er verbs in the tu form", "Use irregular imperatives", "Give negative commands"],
        lesson: {
          title: "Ferme la porte!",
          summary: "Give instructions and commands in French.",
          minutes: 40,
          notes: `## Meaning
The **imperative** is used to give **commands, instructions, advice or requests**. It has only **three forms**: **tu**, **nous** (let's…), **vous** — **without** the subject pronoun.

## Formation
Take the present tense form and **drop the pronoun**:
| Present | Imperative | Meaning |
|---|---|---|
| tu finis | **Finis!** | Finish! |
| nous finissons | **Finissons!** | Let's finish! |
| vous finissez | **Finissez!** | Finish! (polite/plural) |
| tu attends | **Attends!** | Wait! |

## -er verbs: drop the s in the tu form
- tu parles → **Parle!** (Speak!)
- tu fermes → **Ferme la porte!** (Close the door!)
- tu écoutes → **Écoute!**
- **aller**: tu vas → **Va!** (Go!)

## Irregular imperatives
| Verb | tu | nous | vous |
|---|---|---|---|
| **être** | **sois** | **soyons** | **soyez** |
| **avoir** | **aie** | **ayons** | **ayez** |
| **savoir** | **sache** | **sachons** | **sachez** |
| **vouloir** | — | — | **veuillez** (please, formal) |
- **Sois sage!** — Be good!
- **Soyez à l'heure!** — Be on time!
- **N'ayez pas peur!** — Don't be afraid!

## Negative imperative
**ne** before the verb, **pas** after: **Ne parle pas!** — Don't talk! **Ne courez pas!** — Don't run!

## Reflexive verbs
- positive: pronoun **after**, with hyphen: **Lève-toi!** (Get up!), **Asseyez-vous!** (Sit down!)
- negative: pronoun **before**: **Ne te lève pas!**

## Classroom and safety instructions
**Lisez le texte.** **Répondez aux questions.** **Ne copiez pas!** **Lavez-vous les mains.** **Traversez la rue prudemment.**`,
          examples: `**Example 1.** Give the tu imperative of **manger**. *Answer:* **Mange!**

**Example 2.** Translate: *Don't run!* (vous) *Answer:* **Ne courez pas!**

**Example 3.** Translate: *Let's go!* *Answer:* **Allons-y!** (or Allons!)`,
        },
        questions: [
          ["E", "The imperative is used to", "give commands", "describe the past", "ask the time", "count", "It instructs. Answer: give commands."],
          ["E", "'Fermez la porte!' means", "Close the door!", "Open the door!", "Paint the door!", "Knock on the door!", "Fermer is to close."],
          ["E", "'Écoutez!' is a command meaning", "Listen!", "Write!", "Stand!", "Wait!", "Écouter is to listen."],
          ["M", "The tu imperative of 'parler' is", "Parle!", "Parles!", "Parlez!", "Parlons!", "Drop the s for -er verbs."],
          ["M", "The nous imperative of 'partir' means", "Let's leave!", "Leave! (one person)", "Don't leave!", "They leave.", "Nous form means let's."],
          ["M", "'Ne parle pas!' means", "Don't talk!", "Talk louder!", "Let's talk!", "You don't talk.", "Negative imperative."],
          ["M", "The vous imperative of 'être' is", "Soyez!", "Êtes!", "Soyons!", "Sois!", "Être is irregular."],
          ["H", "The correct translation of 'Get up!' (tu) is", "Lève-toi!", "Te lève!", "Lève-te!", "Toi lève!", "Pronoun follows in positive commands."],
          ["H", "The correct negative of 'Assieds-toi!' is", "Ne t'assieds pas!", "Ne assieds-toi pas!", "Assieds-toi pas!", "Ne toi assieds pas!", "Pronoun goes before in negative."],
          ["H", "'Soyez à l'heure!' means", "Be on time!", "It is time!", "Take your time!", "What time is it?", "Soyez is from être."],
        ],
      },
      {
        week: 4,
        title: "Partitive articles",
        subtopics: ["Meaning of partitive articles", "Du, de la, de l', des", "Partitive after negatives", "Expressions of quantity"],
        objectives: ["Explain partitive articles", "Use du, de la, de l' and des correctly", "Change partitives to de after negatives", "Use expressions of quantity correctly"],
        lesson: {
          title: "Du pain, de l'eau…",
          summary: "Use partitive articles to talk about some or any.",
          minutes: 40,
          notes: `## Meaning
The **partitive article** means **some** or **any**. It is used for an **unspecified quantity**, especially of food and drink. French requires it even where English omits "some".

## Forms
| | Use | Example |
|---|---|---|
| **du** | masculine singular | **du pain** (some bread) |
| **de la** | feminine singular | **de la viande** (some meat) |
| **de l'** | before a vowel or silent h | **de l'eau** (some water) |
| **des** | plural | **des oranges** (some oranges) |

## Examples
- **Je mange du riz.** — I eat (some) rice.
- **Elle boit de l'eau.** — She drinks water.
- **Nous achetons de la viande et des tomates.**
- **Tu veux du thé?** — Do you want some tea?

## Partitive or definite article?
- after **aimer, adorer, préférer, détester** use the **definite article**: *J'aime **le** riz* (I like rice in general)
- for **some** of something use the **partitive**: *Je mange **du** riz*

## After negatives
**du, de la, de l', des → de (d')**:
- **Je mange du pain.** → **Je ne mange pas de pain.**
- **Il boit de l'eau.** → **Il ne boit pas d'eau.**
- **Nous avons des oranges.** → **Nous n'avons pas d'oranges.**
(But after **être** the article does not change: *Ce n'est pas du sucre.*)

## Expressions of quantity
use **de (d')** alone: **beaucoup de riz**, **un peu de sel**, **assez d'argent** (enough money), **trop de sucre** (too much sugar), **un verre d'eau**, **une tasse de thé**, **un morceau de pain** (a piece of bread).`,
          examples: `**Example 1.** Complete: **Je bois ___ lait.** *Answer:* **du**.

**Example 2.** Make negative: **Elle mange de la viande.** *Answer:* **Elle ne mange pas de viande.**

**Example 3.** Translate: *a cup of tea*. *Answer:* **une tasse de thé**.`,
        },
        questions: [
          ["E", "The partitive article means", "some or any", "the only", "my", "this", "It shows an unspecified quantity."],
          ["E", "Complete: Je mange ___ pain.", "du", "de la", "des", "de l'", "Pain is masculine."],
          ["E", "Complete: Elle boit ___ eau.", "de l'", "du", "de la", "des", "Eau begins with a vowel."],
          ["M", "Complete: Nous achetons ___ viande.", "de la", "du", "des", "de l'", "Viande is feminine."],
          ["M", "Complete: Il y a ___ oranges.", "des", "du", "de la", "de l'", "Plural uses des."],
          ["M", "The negative of 'Je mange du riz' is", "Je ne mange pas de riz.", "Je ne mange pas du riz.", "Je ne mange pas des riz.", "Je mange pas le riz de.", "Du becomes de after pas."],
          ["M", "'Beaucoup de sucre' means", "a lot of sugar", "a little sugar", "some sugar only", "no sugar", "Beaucoup is a lot."],
          ["H", "Which sentence is correct?", "J'aime le riz.", "J'aime du riz.", "J'aime de riz.", "J'aime des riz.", "Aimer takes the definite article."],
          ["H", "The negative of 'Il boit de l'eau' is", "Il ne boit pas d'eau.", "Il ne boit pas de l'eau.", "Il ne boit pas des eau.", "Il ne boit pas eau.", "De l' becomes d'."],
          ["H", "'Un morceau de pain' means", "a piece of bread", "a loaf of bread", "some breads", "bread crumbs only", "Morceau is piece."],
        ],
      },
      {
        week: 5,
        title: "Health and at the doctor's",
        subtopics: ["Common illnesses and symptoms", "At the doctor's", "Advice for good health", "Emergency phrases"],
        objectives: ["Name common illnesses and symptoms", "Describe symptoms to a doctor", "Give and understand health advice", "Use emergency phrases"],
        lesson: {
          title: "Chez le médecin",
          summary: "Describe illnesses and understand medical advice in French.",
          minutes: 40,
          notes: `## Illnesses and symptoms
| French | English |
|---|---|
| **être malade** | to be sick |
| **avoir de la fièvre** | to have a fever |
| **avoir le paludisme** | to have malaria |
| **avoir un rhume** | to have a cold |
| **tousser / la toux** | to cough / a cough |
| **avoir mal à la tête** | to have a headache |
| **avoir mal à la gorge** | to have a sore throat |
| **avoir mal au ventre** | to have a stomach ache |
| **vomir** | to vomit |
| **avoir la diarrhée** | to have diarrhoea |
| **être fatigué(e)** | to be tired |
| **se blesser** | to hurt oneself |

## At the doctor's
- **Qu'est-ce qui ne va pas?** — What's wrong?
- **Où avez-vous mal?** — Where does it hurt?
- **Depuis quand?** — Since when?
- **J'ai de la fièvre depuis deux jours.** — I have had a fever for two days.
- **Je vais vous examiner.** — I am going to examine you.
- **Voici une ordonnance.** — Here is a prescription.
- **Prenez ces comprimés trois fois par jour.** — Take these tablets three times a day.
- **Allez à la pharmacie.**

## Advice for good health
- **Il faut** + infinitive = one must: **Il faut boire beaucoup d'eau.**
- **Il ne faut pas fumer.** — One must not smoke.
- **Mangez des fruits et des légumes.**
- **Dormez huit heures par nuit.**
- **Lavez-vous les mains.**
- **Dormez sous une moustiquaire.** — Sleep under a mosquito net.

## Emergencies
**Au secours!** (Help!), **Appelez un médecin!**, **Appelez une ambulance!**, **C'est urgent!**, **Il y a eu un accident.**`,
          examples: `**Example 1.** Translate: *I have a fever.* *Answer:* **J'ai de la fièvre.**

**Example 2.** What is **une ordonnance**? *Answer:* a **prescription**.

**Example 3.** Translate: *One must drink a lot of water.* *Answer:* **Il faut boire beaucoup d'eau.**`,
        },
        questions: [
          ["E", "'Je suis malade' means", "I am sick", "I am tired", "I am bad", "I am late", "Malade is sick."],
          ["E", "'Avoir de la fièvre' means", "to have a fever", "to have a cold", "to have a cough", "to have a headache", "Fièvre is fever."],
          ["E", "'Au secours!' means", "Help!", "Good luck!", "Hurry!", "Welcome!", "It is an emergency cry."],
          ["M", "'J'ai mal à la gorge' means", "I have a sore throat", "I have a stomach ache", "I have toothache", "I have a sore leg", "Gorge is throat."],
          ["M", "'Le paludisme' means", "malaria", "measles", "flu", "typhoid", "Paludisme is malaria."],
          ["M", "'Une ordonnance' is", "a prescription", "an order of food", "a hospital bed", "an ambulance", "Doctors write it."],
          ["M", "'Il faut boire de l'eau' means", "One must drink water", "There is water", "I don't drink water", "Water is expensive", "Il faut = one must."],
          ["H", "'J'ai de la fièvre depuis deux jours' means", "I have had a fever for two days", "I will have a fever in two days", "I had a fever two days ago only", "I have two fevers", "Depuis + present = for."],
          ["H", "'Prenez ces comprimés trois fois par jour' means", "Take these tablets three times a day", "Buy three tablets a day", "Take three tablets once", "Don't take the tablets", "Fois par jour = times a day."],
          ["H", "'Dormez sous une moustiquaire' advises you to", "sleep under a mosquito net", "sleep in the afternoon", "sleep on the floor", "sleep with the window open", "Moustiquaire protects against malaria."],
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
        title: "Comparisons",
        subtopics: ["Comparative of adjectives", "Irregular comparatives", "Superlative of adjectives", "Comparing people and places"],
        objectives: ["Form comparatives with plus, moins and aussi", "Use meilleur and pire correctly", "Form superlatives", "Compare people, places and things"],
        lesson: {
          title: "Plus grand que…",
          summary: "Compare people and things using comparatives and superlatives.",
          minutes: 40,
          notes: `## Comparative
| Structure | Meaning | Example |
|---|---|---|
| **plus + adjective + que** | more … than | **Lagos est plus grand que Jos.** |
| **moins + adjective + que** | less … than | **Jos est moins chaud que Lagos.** |
| **aussi + adjective + que** | as … as | **Ada est aussi grande que Chioma.** |
The adjective still **agrees** with the noun it describes.

## Irregular comparatives
- **bon → meilleur(e)** (better): *Le riz est **meilleur** que le pain.* (never "plus bon")
- **mauvais → pire** or plus mauvais (worse)
- **bien → mieux** (better, adverb): *Elle chante **mieux** que moi.*

## Comparing quantities
**plus de … que**, **moins de … que**, **autant de … que**:
*J'ai plus de livres que toi.* — I have more books than you.

## Superlative
**le / la / les + plus / moins + adjective (+ de)**:
- **Ada est la plus grande de la classe.** — Ada is the tallest in the class.
- **C'est le livre le plus intéressant.** — It is the most interesting book.
- **le meilleur / la meilleure** — the best: *C'est la meilleure élève.*
Note: after a superlative, "in" is **de**: *le plus grand pays **d'**Afrique*.

## Stressed pronouns after que
**que moi, que toi, que lui, qu'elle, que nous, que vous, qu'eux, qu'elles**.

## Facts to compare
- **Le Nigeria est le pays le plus peuplé d'Afrique.** — Nigeria is the most populous country in Africa.
- **Le Niger est plus grand que le Bénin.**
- **Le fleuve Niger est plus long que la Bénoué.**`,
          examples: `**Example 1.** Translate: *Tunde is taller than Musa.* *Answer:* **Tunde est plus grand que Musa.**

**Example 2.** Translate: *better than*. *Answer:* **meilleur que** (adjective) / **mieux que** (adverb).

**Example 3.** Translate: *She is the most intelligent in the class.* *Answer:* **Elle est la plus intelligente de la classe.**`,
        },
        questions: [
          ["E", "'Plus … que' means", "more … than", "less … than", "as … as", "the most", "Plus is more. Answer: more … than."],
          ["E", "'Moins … que' means", "less … than", "more … than", "as … as", "the least only", "Moins is less. Answer: less … than."],
          ["E", "'Aussi … que' means", "as … as", "more … than", "less … than", "also … that", "It shows equality."],
          ["M", "The comparative of 'bon' is", "meilleur", "plus bon", "mieux only", "bonner", "Bon is irregular."],
          ["M", "'Ada est la plus grande de la classe' means", "Ada is the tallest in the class", "Ada is taller than the class", "Ada is as tall as the class", "Ada is in the big class", "Superlative. Answer: Ada is the tallest in the class."],
          ["M", "'Elle chante mieux que moi' means", "She sings better than me", "She sings more than me", "She sings as well as me", "She sings worse than me", "Mieux is better (adverb)."],
          ["M", "'J'ai plus de livres que toi' means", "I have more books than you", "I have fewer books than you", "I have as many books as you", "I have no books", "Plus de = more."],
          ["H", "The correct French for 'the best student' (female) is", "la meilleure élève", "la plus bonne élève", "la mieux élève", "le meilleur élève", "Meilleure agrees."],
          ["H", "In a superlative, 'in Africa' is translated as", "d'Afrique", "en Afrique", "dans Afrique", "à Afrique", "De follows superlatives."],
          ["H", "'Jos est moins chaud que Lagos' means", "Jos is less hot than Lagos", "Jos is hotter than Lagos", "Jos is as hot as Lagos", "Jos is the hottest", "Moins … que. Answer: Jos is less hot than Lagos."],
        ],
      },
      {
        week: 2,
        title: "Asking questions",
        subtopics: ["Question words", "Questions with est-ce que", "Inversion with question words", "Quel and lequel"],
        objectives: ["Use French question words", "Form questions with est-ce que and question words", "Form questions by inversion", "Use quel and its forms"],
        lesson: {
          title: "Qui, où, quand, pourquoi?",
          summary: "Ask information questions in French.",
          minutes: 40,
          notes: `## Question words
| French | English | Example |
|---|---|---|
| **qui** | who | **Qui est ton professeur?** |
| **que / qu'est-ce que** | what | **Qu'est-ce que tu manges?** |
| **quoi** | what (after a preposition or informal) | **Tu fais quoi?** / **De quoi parles-tu?** |
| **où** | where | **Où habites-tu?** |
| **quand** | when | **Quand pars-tu?** |
| **comment** | how | **Comment vas-tu?** |
| **pourquoi** | why | **Pourquoi es-tu en retard?** |
| **combien (de)** | how much / many | **Combien de frères as-tu?** |
| **d'où** | from where | **D'où viens-tu?** |
- answer to **pourquoi** begins with **parce que** (because)

## Three ways to ask
1. **intonation**: *Tu habites où?*
2. **question word + est-ce que**: **Où est-ce que tu habites?**
3. **inversion**: **Où habites-tu?** (verb–pronoun with hyphen; add **-t-** between vowels: *Où va-t-il?*)

## Quel (which / what)
**Quel** agrees with the noun:
| | singular | plural |
|---|---|---|
| masculine | **quel** | **quels** |
| feminine | **quelle** | **quelles** |
- **Quel âge as-tu?** — How old are you?
- **Quelle heure est-il?**
- **Quels sports aimes-tu?**
- **Quelles sont tes matières préférées?**
- exclamation: **Quelle belle robe!** — What a beautiful dress!

## Lequel (which one)
**lequel, laquelle, lesquels, lesquelles**: *Voici deux livres. Lequel préfères-tu?*`,
          examples: `**Example 1.** Translate: *Where do you live?* *Answer:* **Où habites-tu?** (or Où est-ce que tu habites?)

**Example 2.** Complete: **___ heure est-il?** *Answer:* **Quelle**.

**Example 3.** Translate: *Why are you late?* *Answer:* **Pourquoi es-tu en retard?**`,
        },
        questions: [
          ["E", "'Qui' means", "who", "what", "where", "when", "Qui asks about people."],
          ["E", "'Où' means", "where", "or", "who", "how", "Où with accent is where."],
          ["E", "'Pourquoi' means", "why", "how", "when", "which", "Pourquoi is why."],
          ["M", "'Quand' means", "when", "how much", "where", "who", "Quand asks about time."],
          ["M", "'Combien de frères as-tu?' means", "How many brothers do you have?", "Where are your brothers?", "Who are your brothers?", "When do your brothers come?", "Combien de = how many."],
          ["M", "Complete: ___ âge as-tu?", "Quel", "Quelle", "Quels", "Qui", "Âge is masculine."],
          ["M", "'D'où viens-tu?' means", "Where do you come from?", "Where are you going?", "When are you coming?", "How did you come?", "D'où = from where."],
          ["H", "The answer to a 'pourquoi' question usually begins with", "parce que", "pourquoi", "quand", "comment", "Parce que = because."],
          ["H", "The correct inverted question for 'Where does he go?' is", "Où va-t-il?", "Où va-il?", "Où il-va?", "Où est-il va?", "Add -t- between vowels."],
          ["H", "Complete: ___ sont tes matières préférées?", "Quelles", "Quels", "Quel", "Quelle", "Matières is feminine plural."],
        ],
      },
      {
        week: 3,
        title: "Francophone Africa",
        subtopics: ["French-speaking African countries", "Capitals and currencies", "Nigeria and its francophone neighbours", "Cultural links"],
        objectives: ["Name francophone African countries", "State the capitals of some francophone countries", "Explain the CFA franc", "Describe links between Nigeria and its francophone neighbours"],
        lesson: {
          title: "L'Afrique francophone",
          summary: "Learn about French-speaking African countries and their links with Nigeria.",
          minutes: 40,
          notes: `## Francophone African countries and capitals
| Country (French name) | Capital |
|---|---|
| **le Bénin** | **Porto-Novo** (official capital); Cotonou is the main city and seat of government |
| **le Niger** | **Niamey** |
| **le Tchad** | **N'Djamena** |
| **le Cameroun** | **Yaoundé** |
| **le Togo** | **Lomé** |
| **le Sénégal** | **Dakar** |
| **la Côte d'Ivoire** | **Yamoussoukro** (official); Abidjan is the largest city |
| **le Mali** | **Bamako** |
| **le Burkina Faso** | **Ouagadougou** |
| **la Guinée** | **Conakry** |
| **le Gabon** | **Libreville** |

## Currency
Many francophone countries in West and Central Africa use the **franc CFA**. Benin, Niger, Togo, Senegal, Côte d'Ivoire, Mali and Burkina Faso use the West African CFA franc; Chad, Cameroon and Gabon use the Central African CFA franc.

## Nigeria and its neighbours
- **le Bénin** borders Nigeria to the **west**; the main border crossing is at **Seme**
- **le Niger** borders Nigeria to the **north**
- **le Tchad** borders Nigeria to the **north-east** (Lake Chad)
- **le Cameroun** borders Nigeria to the **east**
- Nigeria and these countries trade and cooperate through **ECOWAS** (la CEDEAO) and the **Lake Chad Basin Commission**
- many ethnic groups live across the borders — **Yoruba** in Benin, **Hausa** in Niger, **Kanuri** in Niger and Chad

## Cultural links
- shared foods (gari, rice dishes), music and dress
- markets near borders where traders use French, English and local languages
- students study in neighbouring countries to improve their French

## Useful sentences
- **Le Bénin est un pays francophone.**
- **La capitale du Sénégal est Dakar.**
- **On parle français au Togo.**`,
          examples: `**Example 1.** What is the capital of Senegal? *Answer:* **Dakar**.

**Example 2.** Which francophone country borders Nigeria to the north? *Answer:* **le Niger**.

**Example 3.** Name the currency used in Benin. *Answer:* the **franc CFA**.`,
        },
        questions: [
          ["E", "The capital of Niger is", "Niamey", "Dakar", "Lomé", "Bamako", "Niamey is on the Niger River."],
          ["E", "The capital of Senegal is", "Dakar", "Yaoundé", "Conakry", "Libreville", "Dakar is on the Atlantic coast."],
          ["E", "The capital of Togo is", "Lomé", "Cotonou", "Accra", "Niamey", "Lomé is Togo's capital."],
          ["M", "The capital of Cameroon is", "Yaoundé", "Douala", "N'Djamena", "Bamako", "Douala is the largest port city."],
          ["M", "The currency used in many francophone West African countries is the", "franc CFA", "naira", "cedi", "dalasi", "It is shared by several countries."],
          ["M", "The francophone country that borders Nigeria to the west is", "le Bénin", "le Niger", "le Tchad", "le Cameroun", "Seme is a main crossing."],
          ["M", "The capital of Chad is", "N'Djamena", "Niamey", "Ouagadougou", "Yaoundé", "N'Djamena is near Lake Chad."],
          ["H", "The official capital of Benin is", "Porto-Novo", "Cotonou", "Lomé", "Parakou", "Cotonou is the seat of government."],
          ["H", "The French name for ECOWAS is", "la CEDEAO", "l'ONU", "l'UA", "l'OTAN", "Communauté économique des États de l'Afrique de l'Ouest."],
          ["H", "'On parle français au Togo' means", "French is spoken in Togo", "People speak about Togo in France", "We are going to Togo", "Togo is in France", "On = people in general."],
        ],
      },
      {
        week: 4,
        title: "Writing a friendly letter",
        subtopics: ["Format of an informal letter", "Openings and closings", "Useful expressions", "A model letter"],
        objectives: ["Lay out an informal letter correctly", "Use suitable openings and closings", "Use common expressions in letters", "Write a friendly letter in French"],
        lesson: {
          title: "Cher ami…",
          summary: "Write a well-formatted informal letter in French.",
          minutes: 45,
          notes: `## Format of an informal letter
1. **place and date** at the **top right**: **Kano, le 10 mars 2026**
2. **salutation**: **Cher Paul,** (to a boy) / **Chère Aïcha,** (to a girl) / **Chers amis,** (plural)
3. **introduction**: greet and ask about the friend's health
4. **body**: give news, describe events, ask questions
5. **conclusion**: send greetings, express hope to hear from the friend
6. **closing formula** and **signature**

## Openings
- **Comment vas-tu?** — How are you?
- **J'espère que tu vas bien.** — I hope you are well.
- **Merci pour ta lettre.** — Thank you for your letter.
- **Je suis très content(e) de t'écrire.** — I am very happy to write to you.

## Body expressions
- **Je vais te raconter…** — I am going to tell you about…
- **La semaine dernière, …** — Last week, …
- **Pendant les vacances, je vais…**
- **Et toi, qu'est-ce que tu fais?**

## Closings
- **Dis bonjour à ta famille.** — Say hello to your family.
- **J'attends ta réponse avec impatience.** — I look forward to your reply.
- **Écris-moi vite!** — Write to me soon!
- **Amitiés,** / **Bien amicalement,** — Best wishes,
- **Grosses bises,** / **Je t'embrasse,** — Love, (to close friends and family)
- **À bientôt,** — See you soon,

## Model letter
**Lagos, le 5 avril 2026**
**Chère Mariam,**
**Comment vas-tu? J'espère que tu vas bien et ta famille aussi. Merci pour ta belle lettre.**
**Le week-end dernier, je suis allée à la plage avec mes cousins. Nous avons nagé et nous avons mangé du poisson grillé. C'était super!**
**Pendant les vacances, je vais visiter Abuja. Et toi, qu'est-ce que tu vas faire?**
**Dis bonjour à tes parents. Écris-moi vite!**
**Grosses bises,**
**Kemi**`,
          examples: `**Example 1.** How do you begin a letter to a female friend called Aïcha? *Answer:* **Chère Aïcha,**

**Example 2.** Where is the date written? *Answer:* at the **top right**, e.g. **Abuja, le 2 mai 2026**.

**Example 3.** Translate: *Write to me soon!* *Answer:* **Écris-moi vite!**`,
        },
        questions: [
          ["E", "'Cher Paul' is used to begin a letter to", "a boy called Paul", "a girl called Paul", "a teacher only", "a company", "Cher is masculine."],
          ["E", "'Chère Aïcha' is used to begin a letter to", "a girl called Aïcha", "a boy called Aïcha", "many friends", "a stranger", "Chère is feminine."],
          ["E", "'Merci pour ta lettre' means", "Thank you for your letter", "Send me your letter", "I lost your letter", "Read my letter", "Lettre is letter."],
          ["M", "In a French informal letter, the place and date are written", "at the top right", "at the bottom left", "in the middle of the body", "after the signature", "Lagos, le 5 avril."],
          ["M", "'J'espère que tu vas bien' means", "I hope you are well", "I know you are well", "I wish you were here", "I hope you are going", "Espérer is to hope."],
          ["M", "'Écris-moi vite!' means", "Write to me soon!", "Write quickly on the board!", "Call me now!", "Read quickly!", "Écrire is to write."],
          ["M", "'Dis bonjour à ta famille' means", "Say hello to your family", "Tell your family goodbye", "Your family says hello", "Visit your family", "Dire is to say."],
          ["H", "A suitable closing for a letter to a close friend is", "Grosses bises,", "Veuillez agréer, Monsieur…", "Objet:", "Madame la Directrice,", "Informal closing."],
          ["H", "The correct French date line for Kano, 10 March 2026 is", "Kano, le 10 mars 2026", "Kano, Mars 10 2026", "Le Kano 10, mars 2026", "10/Mars/Kano", "Place, le + day + month + year."],
          ["H", "'J'attends ta réponse avec impatience' means", "I look forward to your reply", "I am impatient with you", "I answered you quickly", "I am waiting at the gate", "It expresses eagerness."],
        ],
      },
      {
        week: 5,
        title: "Reading comprehension skills",
        subtopics: ["Before reading", "Understanding new words", "Answering comprehension questions", "Practice passage"],
        objectives: ["Use pre-reading strategies", "Work out meanings of new words from context and cognates", "Answer comprehension questions accurately", "Read and answer questions on a short French passage"],
        lesson: {
          title: "Lire et comprendre",
          summary: "Apply strategies to understand French texts.",
          minutes: 45,
          notes: `## Before reading
- read the **title** and look at any pictures
- predict what the text is about
- read the **questions first** so you know what to look for

## Understanding new words
- **cognates** (mots apparentés) — words similar to English: *important, la famille, le président, la musique, le problème*
- **context** — use the words around it
- **word families**: *chanter → le chanteur → la chanson*
- **false friends** (faux amis): **la librairie** (bookshop), **actuellement** (currently), **sympathique** (nice), **la journée** (day), **assister à** (to attend)

## Answering questions
- read each question carefully; identify question words (**qui, où, quand, pourquoi, combien**)
- find the part of the text with the answer
- answer in **full sentences** when asked, using the **same tense** as the question
- **Vrai ou faux?** — true or false; correct false statements
- do not copy long, irrelevant sentences

## Practice passage
**La journée d'Ibrahim**
*Ibrahim habite à Maiduguri avec ses parents et ses deux sœurs. Il a quatorze ans et il est en troisième année au collège. Tous les jours, il se lève à cinq heures et demie. Il va à l'école à vélo parce que l'école n'est pas loin. Sa matière préférée est la géographie. Après l'école, il aide son père dans son magasin. Le samedi, il joue au football avec ses amis. Plus tard, Ibrahim voudrait être pilote.*

**Questions**
1. Où habite Ibrahim? — **Il habite à Maiduguri.**
2. Combien de sœurs a-t-il? — **Il a deux sœurs.**
3. Comment va-t-il à l'école? — **Il va à l'école à vélo.**
4. Pourquoi? — **Parce que l'école n'est pas loin.**
5. Que fait-il le samedi? — **Il joue au football avec ses amis.**`,
          examples: `**Example 1.** What is a cognate? *Answer:* a French word that **looks like an English word with the same meaning**, e.g. *la musique*.

**Example 2.** In the passage, what does Ibrahim want to be? *Answer:* **pilote** (a pilot).

**Example 3.** What does **actuellement** mean? *Answer:* **currently** — a false friend.`,
        },
        questions: [
          ["E", "Words that look similar in French and English with the same meaning are", "cognates", "false friends", "verbs only", "pronouns", "E.g. la musique."],
          ["E", "'Vrai ou faux?' means", "True or false?", "Read or write?", "Who or what?", "Now or later?", "Vrai is true. Answer: True or false?."],
          ["E", "In the passage, Ibrahim lives in", "Maiduguri", "Lagos", "Kano", "Abuja", "Il habite à Maiduguri."],
          ["M", "Ibrahim goes to school", "by bicycle", "by bus", "on foot", "by car", "Il va à l'école à vélo."],
          ["M", "Ibrahim's favourite subject is", "geography", "mathematics", "French", "history", "Sa matière préférée est la géographie."],
          ["M", "After school, Ibrahim", "helps his father in his shop", "plays football every day", "goes to the library", "sleeps", "Il aide son père."],
          ["M", "Ibrahim would like to become a", "pilot", "doctor", "teacher", "footballer", "Il voudrait être pilote."],
          ["H", "The word 'actuellement' means", "currently", "actually", "accurately", "actively", "It is a false friend."],
          ["H", "A good strategy before reading a passage is to", "read the questions first", "skip the title", "translate every word immediately", "start from the last line", "It focuses your reading."],
          ["H", "Why does Ibrahim cycle to school?", "Because the school is not far", "Because he has no shoes", "Because his father is a cyclist", "Because buses are expensive", "Parce que l'école n'est pas loin."],
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
        title: "BECE revision: vocabulary and expressions",
        subtopics: ["Greetings and introductions", "Family, home and school", "Numbers, time and dates", "Food, body and health"],
        objectives: ["Recall greetings and introduction expressions", "Recall vocabulary on family, home and school", "Use numbers, time and dates accurately", "Recall vocabulary on food, the body and health"],
        lesson: {
          title: "Révision: le vocabulaire",
          summary: "Consolidate core French vocabulary for the BECE.",
          minutes: 45,
          notes: `## Greetings and introductions
Bonjour, Bonsoir, Salut, Au revoir, À demain, Comment allez-vous? / Ça va?, Je m'appelle…, J'ai … ans, Je suis nigérian(e), J'habite à…, Enchanté(e).

## Family, home and school
- family: le père, la mère, le frère, la sœur, les grands-parents, l'oncle, la tante, le cousin, la cousine
- home: le salon, la cuisine, la chambre, la salle de bains; le lit, la table, la chaise, l'armoire
- school: le stylo, le crayon, le cahier, le livre, la règle, la gomme, le tableau; l'enseignant(e), l'élève

## Numbers, time and dates
- 1–20: un … vingt; 70 soixante-dix; 80 quatre-vingts; 90 quatre-vingt-dix; 100 cent
- time: Il est deux heures et quart / et demie / moins le quart; midi; minuit
- days: lundi … dimanche; months: janvier … décembre; le premier octobre

## Food, body and health
- food: le pain, le riz, la viande, le poisson, l'eau, le lait; le petit déjeuner, le déjeuner, le dîner
- body: la tête, les yeux, la bouche, le bras, la main, la jambe, le pied
- health: J'ai mal à la tête / au ventre / aux dents; J'ai de la fièvre; le médecin, l'hôpital, la pharmacie

## Places, transport and weather
la banque, la poste, le marché, la gare; en voiture, en bus, à pied, à vélo; Il fait chaud, Il pleut, la saison sèche, la saison des pluies.

## Colours and clothes
rouge, bleu(e), vert(e), noir(e), blanc/blanche; la chemise, le pantalon, la robe, la jupe, les chaussures.`,
          examples: `**Example 1.** Translate: *It is quarter to five.* *Answer:* **Il est cinq heures moins le quart.**

**Example 2.** What is 80 in French? *Answer:* **quatre-vingts**.

**Example 3.** Translate: *I have toothache.* *Answer:* **J'ai mal aux dents.**`,
        },
        questions: [
          ["E", "'Bonsoir' is used", "in the evening", "in the morning only", "when leaving for school", "at lunchtime only", "Soir is evening."],
          ["E", "'La sœur' is", "the sister", "the mother", "the aunt", "the cousin", "Sœur is sister."],
          ["E", "'Quatre-vingts' is", "80", "24", "90", "40", "4 × 20. Answer: 80."],
          ["M", "'Il est cinq heures moins le quart' means", "It is quarter to five", "It is quarter past five", "It is half past five", "It is five fifteen", "Moins le quart."],
          ["M", "'J'ai mal au ventre' means", "I have a stomach ache", "I have a headache", "I have a sore foot", "I have a fever", "Ventre is stomach."],
          ["M", "'La salle de bains' is", "the bathroom", "the dining room", "the classroom", "the bedroom", "Bains are baths."],
          ["M", "'En voiture' means", "by car", "by bicycle", "on foot", "by train", "Voiture is car."],
          ["H", "The French for 'the first of October' is", "le premier octobre", "le un octobre", "le premier d'octobre", "la première octobre", "Use premier. Answer: le premier octobre."],
          ["H", "During the rainy season, a Nigerian student would often say", "Il pleut.", "Il neige.", "Il fait froid en hiver.", "Il y a du brouillard toujours.", "Il pleut means it is raining."],
          ["H", "The French for 'white shirt' is", "une chemise blanche", "une chemise blanc", "un chemise blanche", "une blanche chemise", "Blanc becomes blanche."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: grammar",
        subtopics: ["Articles, gender and agreement", "Present tense of regular and irregular verbs", "Negation and questions", "Possessives and prepositions"],
        objectives: ["Apply rules of articles, gender and adjective agreement", "Conjugate key verbs in the present tense", "Form negatives and questions", "Use possessives and prepositions correctly"],
        lesson: {
          title: "Révision: la grammaire (1)",
          summary: "Consolidate core grammar for the BECE.",
          minutes: 45,
          notes: `## Articles and agreement
- un/une/des; le/la/l'/les; partitive du/de la/de l'/des; after negative → de
- adjectives agree: grand/grande/grands/grandes; most follow the noun except BAGS adjectives
- colours follow the noun: une robe rouge

## Present tense
| | -er (parler) | -ir (finir) | -re (vendre) |
|---|---|---|---|
| je | parle | finis | vends |
| tu | parles | finis | vends |
| il | parle | finit | vend |
| nous | parlons | finissons | vendons |
| vous | parlez | finissez | vendez |
| ils | parlent | finissent | vendent |
Irregular: **être** (suis, es, est, sommes, êtes, sont); **avoir** (ai, as, a, avons, avez, ont); **aller** (vais, vas, va, allons, allez, vont); **faire** (fais, fais, fait, faisons, faites, font).

## Negation and questions
- ne … pas / jamais / plus / rien; n' before a vowel
- questions: intonation, est-ce que, inversion (Aime-t-il…?)
- question words: qui, que, où, quand, comment, pourquoi, combien, quel(le)(s)

## Possessives
mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs — agree with the **thing owned**; mon before a feminine vowel (mon école).

## Prepositions and contractions
à + le = au; à + les = aux; de + le = du; de + les = des. Sur, sous, dans, devant, derrière, entre, à côté de.
Countries: au Nigeria, en France, aux États-Unis; towns: à Lagos.

## Futur proche
aller + infinitive: Je vais voyager. Negative: Je ne vais pas voyager.`,
          examples: `**Example 1.** Complete: **Vous ___ (faire) vos devoirs.** *Answer:* **faites**.

**Example 2.** Correct the error: **ma école**. *Answer:* **mon école**.

**Example 3.** Complete: **Je vais ___ marché.** *Answer:* **au**.`,
        },
        questions: [
          ["E", "Complete: Nous ___ (être) élèves.", "sommes", "êtes", "sont", "avons", "Nous sommes. Answer: sommes."],
          ["E", "Complete: Ils ___ (avoir) un chien.", "ont", "sont", "avons", "a", "Ils ont. Answer: ont."],
          ["E", "Complete: Tu ___ (aller) au marché.", "vas", "va", "vais", "allez", "Tu vas. Answer: vas."],
          ["M", "Complete: Vous ___ (finir) le travail.", "finissez", "finez", "finissons", "finit", "Vous finissez. Answer: finissez."],
          ["M", "Complete: Elle ___ (vendre) des fruits.", "vend", "vends", "vendent", "vendons", "Il/elle has no ending."],
          ["M", "The correct form is", "mon école", "ma école", "mes école", "ton écoles", "Mon before a vowel."],
          ["M", "Complete: Je vais ___ marché.", "au", "à le", "à la", "aux", "À + le = au. Answer: au."],
          ["H", "The negative of 'Nous avons des livres' is", "Nous n'avons pas de livres.", "Nous n'avons pas des livres.", "Nous ne avons pas livres.", "Nous avons pas de livres ne.", "Des becomes de."],
          ["H", "Which sentence uses the futur proche correctly?", "Elle va chanter.", "Elle va chante.", "Elle vas chanter.", "Elle va chanté.", "Aller + infinitive."],
          ["H", "Complete: ___ sports aimes-tu?", "Quels", "Quelles", "Quel", "Quelle", "Sports is masculine plural."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: past, imperative and comparisons",
        subtopics: ["Passé composé with avoir and être", "Imperative", "Reflexive verbs", "Comparatives and superlatives"],
        objectives: ["Form the passé composé correctly", "Form positive and negative commands", "Use reflexive verbs in present and past", "Make comparisons and superlatives"],
        lesson: {
          title: "Révision: la grammaire (2)",
          summary: "Consolidate past tense, commands and comparisons for the BECE.",
          minutes: 45,
          notes: `## Passé composé
- **avoir + past participle**: j'ai mangé, tu as fini, il a vendu, nous avons fait, vous avez pris, ils ont vu
- participles: -er → -é; -ir → -i; -re → -u; irregular: eu, été, fait, pris, mis, dit, écrit, lu, vu, bu, venu, né, mort
- **être** with MRS VAN DER TRAMP verbs and **all reflexive verbs**; participle **agrees** with the subject: elle est allée; ils sont partis; elles se sont levées
- negative: je **n'**ai **pas** mangé; elle **n'**est **pas** venue

## Imperative
- tu, nous, vous forms without the pronoun: Finis! Finissons! Finissez!
- -er verbs drop the **s** in the tu form: Ferme! Va!
- irregular: sois/soyons/soyez; aie/ayons/ayez
- negative: Ne parle pas!
- reflexive: Lève-toi! / Ne te lève pas!

## Reflexive verbs
present: je me lave, tu te laves, il se lave, nous nous lavons, vous vous lavez, ils se lavent.

## Comparisons
plus/moins/aussi + adjective + que; meilleur (better, adjective), mieux (better, adverb); superlative: le/la/les plus + adjective + de: *la plus grande ville du Nigeria*.

## Time expressions
past: hier, la semaine dernière, il y a deux jours; future: demain, la semaine prochaine.`,
          examples: `**Example 1.** Put into the passé composé: **Elle part.** *Answer:* **Elle est partie.**

**Example 2.** Give the tu imperative of **aller**. *Answer:* **Va!**

**Example 3.** Translate: *Kano is bigger than Jos.* *Answer:* **Kano est plus grand que Jos.**`,
        },
        questions: [
          ["E", "The past participle of 'manger' is", "mangé", "mangi", "mangu", "mangeant", "-er becomes -é."],
          ["E", "Complete: Hier, j'___ fini mes devoirs.", "ai", "suis", "as", "est", "Finir takes avoir."],
          ["E", "Which verb uses être in the passé composé?", "venir", "parler", "finir", "prendre", "Venir is a movement verb."],
          ["M", "The passé composé of 'Elle part' is", "Elle est partie.", "Elle a parti.", "Elle est parti.", "Elle a partie.", "Être with agreement."],
          ["M", "The tu imperative of 'aller' is", "Va!", "Vas!", "Allez!", "Allons!", "Aller drops the s."],
          ["M", "The negative command 'Don't run!' (vous) is", "Ne courez pas!", "Courez pas ne!", "Ne pas courez!", "Courez ne pas!", "Ne…pas around the verb."],
          ["M", "Complete: Nous ___ levons à six heures.", "nous", "se", "vous", "me", "Nous nous levons."],
          ["H", "The correct passé composé of 'Ils se couchent' is", "Ils se sont couchés.", "Ils ont se couchés.", "Ils se ont couché.", "Ils sont se couchés.", "Reflexives take être."],
          ["H", "The correct sentence is", "Le riz est meilleur que le pain.", "Le riz est plus bon que le pain.", "Le riz est mieux que le pain.", "Le riz est bonner que le pain.", "Meilleur is the comparative of bon."],
          ["H", "'La semaine dernière, nous sommes allés à Abuja' means", "Last week, we went to Abuja", "Next week, we will go to Abuja", "This week, we are in Abuja", "Every week, we go to Abuja", "Dernière means last."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: comprehension, writing and mixed practice",
        subtopics: ["Reading comprehension practice", "Letter and composition writing", "Translation tips", "Mixed practice test"],
        objectives: ["Answer comprehension questions on short passages", "Write letters and compositions with correct format", "Translate simple sentences accurately", "Complete a mixed BECE-style practice test"],
        lesson: {
          title: "Révision générale",
          summary: "Practise comprehension, writing and mixed BECE questions.",
          minutes: 45,
          notes: `## Comprehension practice
**Le marché de Bodija**
*Samedi dernier, Madame Adeyemi est allée au marché de Bodija à Ibadan avec sa fille Bisi. Elles ont pris un taxi parce qu'il pleuvait. Au marché, elles ont acheté des ignames, des tomates, du poisson et de l'huile de palme. Bisi voulait une nouvelle robe, mais sa mère a dit que c'était trop cher. Elles sont rentrées à la maison à midi et elles ont préparé un bon repas pour la famille.*

1. Quand Madame Adeyemi est-elle allée au marché? — **Samedi dernier.**
2. Avec qui? — **Avec sa fille Bisi.**
3. Pourquoi ont-elles pris un taxi? — **Parce qu'il pleuvait.**
4. Pourquoi Bisi n'a-t-elle pas eu de robe? — **Parce que c'était trop cher.**

## Writing tips
- **letter**: place and date top right; Cher/Chère…; introduction, body, conclusion; Amitiés / Grosses bises; signature
- **composition**: short paragraphs, linking words (d'abord, ensuite, enfin, parce que, mais)
- check verb endings, agreements, accents and articles

## Translation tips
- do not translate **word for word**: *I am hungry* → **J'ai faim**; *I am 14* → **J'ai quatorze ans**
- watch false friends
- use **du/de la** for "some" even if English omits it: *I eat bread* → **Je mange du pain**
- no article before professions after être: *She is a teacher* → **Elle est enseignante**

## Exam skills
read all instructions; answer every question; manage time; check spelling and accents; for objective questions eliminate wrong options first.`,
          examples: `**Example 1.** In the passage, what did they buy? *Answer:* **des ignames, des tomates, du poisson et de l'huile de palme**.

**Example 2.** Translate: *I am hungry.* *Answer:* **J'ai faim.**

**Example 3.** Translate: *My father is a doctor.* *Answer:* **Mon père est médecin.**`,
        },
        questions: [
          ["E", "In the passage, Madame Adeyemi went to the market with", "her daughter Bisi", "her husband", "her son", "her neighbour", "Avec sa fille Bisi."],
          ["E", "They went to the market", "by taxi", "on foot", "by bicycle", "by train", "Elles ont pris un taxi."],
          ["E", "The market in the passage is in", "Ibadan", "Lagos", "Abuja", "Kano", "Bodija is in Ibadan."],
          ["M", "They took a taxi because", "it was raining", "it was far", "they were late", "they had many bags", "Parce qu'il pleuvait."],
          ["M", "Bisi did not get a new dress because", "it was too expensive", "the shop was closed", "she did not like it", "it was too small", "C'était trop cher."],
          ["M", "They returned home at", "midday", "midnight", "six o'clock", "the evening", "Elles sont rentrées à midi."],
          ["M", "The correct translation of 'I eat bread' is", "Je mange du pain.", "Je mange pain.", "Je mange le pain only.", "Je suis pain.", "Use the partitive."],
          ["H", "The correct translation of 'She is a teacher' is", "Elle est enseignante.", "Elle est une enseignante.", "Elle a enseignante.", "Elle est un enseignant.", "No article after être with professions."],
          ["H", "The correct translation of 'I am fifteen years old' is", "J'ai quinze ans.", "Je suis quinze ans.", "J'ai quinze.", "Je suis quinze années.", "Use avoir for age."],
          ["H", "In the passage, the verb 'pleuvait' tells us that", "it was raining", "it was sunny", "it was cold", "it was windy", "Pleuvoir means to rain."],
        ],
      },
    ],
  },
];
