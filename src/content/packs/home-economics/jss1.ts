import type { TermPlan } from "../types";

/** JSS1 Home Economics — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and scope of Home Economics",
        subtopics: ["Meaning of Home Economics", "Areas of Home Economics", "Importance of Home Economics", "Relationship with other subjects"],
        objectives: ["Define Home Economics", "Identify the main areas of Home Economics", "State the importance of Home Economics to individuals and families", "Relate Home Economics to other school subjects"],
        lesson: {
          title: "What Home Economics Is About",
          summary: "Define Home Economics and describe its main areas and importance.",
          minutes: 40,
          notes: `## Meaning
**Home Economics** is the study of how individuals and families **use their resources** (money, time, energy, skills, materials) to meet their needs and **improve the quality of life** at home and in society.
It combines science, art and management skills applied to everyday living.

## Areas of Home Economics
| Area | What it covers |
|---|---|
| **food and nutrition** | food, nutrients, meal planning, cooking, food hygiene and preservation |
| **clothing and textiles** | fibres, fabrics, sewing, garment making, care of clothes |
| **home management** | the home, family, resources, budgeting, housekeeping, consumer education |
| **family and child development** | family life, child care, relationships |

## Importance of Home Economics
- helps people to **eat well** and stay healthy
- teaches **wise use of money** and other resources
- develops practical skills (cooking, sewing, cleaning) that can become **businesses**
- promotes **good relationships** in the family
- teaches **hygiene** and safety at home
- prepares learners for **careers** (catering, fashion, interior decoration, dietetics)
- helps families to live **comfortably** within their income

## Relationship with other subjects
- **Basic Science**: nutrients, heat, cleaning agents
- **Mathematics**: measuring ingredients, budgeting, pattern drafting
- **Fine Art**: colour, design and decoration
- **Social Studies**: the family and society
- **Business Studies**: consumer education, running a small business`,
          examples: `**Example 1.** A student learns to plan balanced meals. Which area of Home Economics is this? *Answer:* **food and nutrition**.

**Example 2.** Sewing a school uniform belongs to which area? *Answer:* **clothing and textiles**.

**Example 3.** Planning how a family spends its monthly income belongs to **home management**.`,
        },
        questions: [
          ["E", "The study of how families use their resources to improve their quality of life is", "Home Economics", "Geography", "Physics", "Literature", "It applies knowledge to home living."],
          ["E", "Planning balanced meals belongs to the area of", "food and nutrition", "clothing and textiles", "home management", "child development", "It deals with food and nutrients."],
          ["E", "Sewing garments belongs to the area of", "clothing and textiles", "food and nutrition", "home management", "family living", "It deals with fabrics and clothes."],
          ["M", "Budgeting the family's monthly income belongs to", "home management", "food and nutrition", "clothing and textiles", "nutrition science", "It concerns managing resources."],
          ["M", "Which is a resource used by families?", "time", "noise", "dust", "quarrels", "Time is limited and must be managed."],
          ["M", "Measuring ingredients and budgeting link Home Economics with", "Mathematics", "History", "French", "Music", "They involve numbers and calculations."],
          ["M", "Which is an importance of Home Economics?", "developing practical skills for self-employment", "encouraging waste", "promoting poor hygiene", "discouraging family life", "Skills such as catering create income."],
          ["H", "Colour and design in interior decoration link Home Economics with", "Fine Art", "Physics", "Geography", "Chemistry only", "Art teaches colour and design."],
          ["H", "A family that lives comfortably within its income is applying", "good home management", "careless spending", "hoarding", "extravagance", "Resources are managed wisely."],
          ["H", "The area of Home Economics that deals with caring for children and family relationships is", "family and child development", "clothing and textiles", "food science only", "housing only", "It focuses on family life."],
        ],
      },
      {
        week: 2,
        title: "Careers in Home Economics",
        subtopics: ["Careers in food and nutrition", "Careers in clothing and textiles", "Careers in home management", "Qualities needed for success"],
        objectives: ["Identify careers in food and nutrition", "Identify careers in clothing and textiles", "Identify careers in home management", "State the qualities needed to succeed in Home Economics careers"],
        lesson: {
          title: "Earning a Living Through Home Economics",
          summary: "Identify careers related to Home Economics and the qualities they require.",
          minutes: 40,
          notes: `## Careers in food and nutrition
- **caterer** (prepares and serves food for events)
- **chef/cook** in hotels, restaurants and hospitals
- **dietitian/nutritionist** (plans diets for health)
- **baker and confectioner** (cakes, bread, pastries)
- **food technologist** (processing and preserving food)
- **food vendor** and restaurant owner

## Careers in clothing and textiles
- **fashion designer**
- **tailor/dressmaker**
- **textile designer** (tie-dye, batik, adire)
- **laundry and dry-cleaning** operator
- **fashion merchandiser** (sells clothing)
- **costume designer** for film and drama

## Careers in home management
- **interior decorator** (arranges and beautifies spaces)
- **hotel and hospitality manager**
- **housekeeper** in hotels and hospitals
- **event planner** and decorator
- **consumer adviser**
- **Home Economics teacher** and lecturer
- **child-care worker** (crèche, nursery)

## Qualities for success
creativity, **cleanliness**, patience, good communication, honesty, **punctuality**, physical fitness, good customer relations, willingness to learn, business skills, attention to detail.

## Getting started
study Home Economics well; attend vocational or technical training, polytechnics or universities; learn through apprenticeship; start small and grow.`,
          examples: `**Example 1.** Who plans special diets for hospital patients? *Answer:* a **dietitian**.

**Example 2.** Name one career in clothing and textiles. *Answer:* **fashion designer** (or tailor).

**Example 3.** Why is cleanliness important for a caterer? *Answer:* It **prevents food poisoning** and keeps customers safe.`,
        },
        questions: [
          ["E", "A person who prepares and serves food for events is a", "caterer", "tailor", "plumber", "mechanic", "Catering is a food career."],
          ["E", "A person who designs clothes is a", "fashion designer", "dietitian", "baker", "chef", "Fashion design is a clothing career."],
          ["E", "A person who bakes bread and cakes is a", "baker", "tailor", "interior decorator", "laundry worker", "Baking is a food career."],
          ["M", "A professional who plans special diets for patients is a", "dietitian", "tailor", "caterer only", "fashion merchandiser", "Dietitians apply nutrition science."],
          ["M", "A person who arranges and beautifies rooms is an", "interior decorator", "food technologist", "baker", "dry cleaner", "Interior decoration is home management."],
          ["M", "A career in textiles that produces adire or batik fabrics is", "textile designer", "chef", "housekeeper", "dietitian", "It involves fabric decoration."],
          ["M", "Which quality is most important for a person who handles food for customers?", "cleanliness", "rudeness", "lateness", "carelessness", "Clean handling prevents disease."],
          ["H", "A person who processes and preserves food in a factory is a", "food technologist", "fashion designer", "tailor", "interior decorator", "Food technology deals with processing."],
          ["H", "One way to learn a Home Economics trade after school is through", "apprenticeship", "gambling", "truancy", "idleness", "Learning under a master builds skill."],
          ["H", "A worker who keeps rooms clean and orderly in a hotel is a", "housekeeper", "baker", "textile designer", "dietitian", "Housekeeping is part of hospitality."],
        ],
      },
      {
        week: 3,
        title: "The family",
        subtopics: ["Meaning of the family", "Types of family", "Functions of the family", "Family values"],
        objectives: ["Define the family", "Distinguish types of family", "State the functions of the family", "Explain family values"],
        lesson: {
          title: "The Family as the Basic Unit of Society",
          summary: "Describe types and functions of the family.",
          minutes: 40,
          notes: `## Meaning
A **family** is a group of people related by **blood, marriage or adoption**, who live together and care for one another. It is the **smallest and most basic unit of society**.

## Types of family
| Type | Features |
|---|---|
| **nuclear family** | father, mother and their children |
| **extended family** | nuclear family plus relatives such as grandparents, uncles, aunts, cousins |
| **monogamous family** | one husband, one wife and their children |
| **polygamous family** | one husband with two or more wives and their children |
| **single-parent family** | one parent (father or mother) with children |
| **foster/adoptive family** | children cared for by people who are not their biological parents |

## Functions of the family
- **reproduction** (bearing children)
- **provision** of food, clothing and shelter
- **care and protection** of members
- **education and socialisation** (teaching language, values, customs)
- **love and emotional support**
- **moral and religious training**
- **economic** (working and earning to support members)
- **recreation** (relaxing together)

## Family values
respect, honesty, love, hard work, cooperation, obedience, tolerance, responsibility, sharing.
Good family values produce responsible citizens.`,
          examples: `**Example 1.** Mr and Mrs Obi live with their three children only. Which type of family is this? *Answer:* **nuclear family**.

**Example 2.** A grandmother lives with her son, his wife and their children. *Answer:* **extended family**.

**Example 3.** Name one function of the family. *Answer:* **socialisation** of children (or care and protection).`,
        },
        questions: [
          ["E", "The smallest and most basic unit of society is the", "family", "state", "school", "market", "Society is built from families."],
          ["E", "A family of father, mother and their children only is a", "nuclear family", "extended family", "polygamous family", "foster family", "It has only parents and children."],
          ["E", "A family that includes grandparents, uncles and cousins is an", "extended family", "nuclear family", "single-parent family", "adoptive family", "It extends beyond parents and children."],
          ["M", "A family with one husband and one wife is", "monogamous", "polygamous", "extended", "single-parent", "Mono means one."],
          ["M", "A family with one husband and two or more wives is", "polygamous", "monogamous", "nuclear only", "foster", "Poly means many."],
          ["M", "Teaching children the language and customs of their society is the family function of", "socialisation", "reproduction", "recreation", "economic support", "Children learn how to live in society."],
          ["M", "Providing food, clothing and shelter is the family's", "provision function", "recreation function", "religious function", "political function", "Basic needs are provided."],
          ["H", "A family made up of a mother and her children after the father's death is a", "single-parent family", "polygamous family", "extended family only", "nuclear family with two parents", "Only one parent is present."],
          ["H", "Children raised by people who are not their biological parents belong to a", "foster or adoptive family", "polygamous family", "monogamous family only", "nuclear family by birth", "They are fostered or adopted."],
          ["H", "Which family value helps members settle disagreements peacefully?", "tolerance", "selfishness", "disobedience", "dishonesty", "Tolerance accepts differences."],
        ],
      },
      {
        week: 4,
        title: "Roles and relationships in the family",
        subtopics: ["Roles of the father", "Roles of the mother", "Roles of children", "Building good family relationships"],
        objectives: ["State the roles of the father in the family", "State the roles of the mother in the family", "Describe the roles of children", "Suggest ways of building good family relationships"],
        lesson: {
          title: "Everyone Has a Part to Play",
          summary: "Describe the roles of family members and how to build good relationships.",
          minutes: 40,
          notes: `## Roles of the father
head of the family; provides for the family's needs (food, shelter, school fees); protects the family; guides and disciplines children; makes decisions with the mother; sets a good example; takes part in caring for children.

## Roles of the mother
cares for the family's health; plans and prepares meals; manages the home and household budget with the father; trains children in good habits; provides love and emotional support; may work to support the family income.

**Note:** In modern families, many roles are **shared**. Fathers can cook and care for children; mothers can earn income and make decisions. What matters is **cooperation**.

## Roles of children
obey and respect parents and elders; help with **household chores** (washing plates, sweeping, running errands); study hard; take care of younger siblings; keep themselves and the home clean; show love and support to family members; avoid bad company.

## Building good relationships
- **communication**: talk and listen to one another
- **respect** for each member's feelings and privacy
- **sharing** duties and resources
- **spending time together** (meals, worship, outings)
- **forgiveness** and patience
- **appreciation** and encouragement
- settling quarrels **peacefully**

## Causes of poor relationships
selfishness, poor communication, favouritism, lack of money, laziness, dishonesty, drug abuse, violence.`,
          examples: `**Example 1.** Tunde washes the plates after dinner. Which role is he performing? *Answer:* helping with **household chores**.

**Example 2.** Give one way to build good family relationships. *Answer:* **spending time together** (or good communication).

**Example 3.** How does favouritism affect a family? *Answer:* It causes **jealousy and quarrels** among children.`,
        },
        questions: [
          ["E", "Which is a role of children in the family?", "helping with household chores", "paying the house rent", "making all family decisions", "disciplining parents", "Children assist at home."],
          ["E", "Talking and listening to one another is", "communication", "favouritism", "selfishness", "violence", "It builds understanding."],
          ["E", "Children should treat their parents with", "respect", "rudeness", "neglect", "disobedience", "Respect is a family value."],
          ["M", "Which is traditionally a role of the father?", "providing for the family's needs", "neglecting the children", "abandoning the home", "wasting the income", "He supports the family."],
          ["M", "Which is a role of the mother?", "training children in good habits", "encouraging laziness", "abandoning meals", "ignoring sick children", "She guides children's habits."],
          ["M", "In modern families, many household roles are", "shared between father and mother", "done only by children", "left undone", "paid to strangers only", "Cooperation is key."],
          ["M", "Which is a cause of poor family relationships?", "favouritism", "sharing", "forgiveness", "appreciation", "It creates jealousy."],
          ["H", "Parents treating one child better than the others often causes", "jealousy and quarrels among the children", "more unity", "greater love for all", "better communication", "Unfairness breeds conflict."],
          ["H", "Eating meals together as a family mainly helps to", "strengthen family bonds", "waste food", "increase quarrels", "reduce communication", "Shared time builds closeness."],
          ["H", "A child who cares for younger siblings while parents work is showing", "responsibility", "laziness", "disobedience", "selfishness", "He takes on a family duty."],
        ],
      },
      {
        week: 5,
        title: "Personal hygiene",
        subtopics: ["Meaning of personal hygiene", "Care of the body parts", "Hygiene items", "Effects of poor hygiene"],
        objectives: ["Explain personal hygiene", "Describe the care of different parts of the body", "Identify items used for personal hygiene", "State the effects of poor personal hygiene"],
        lesson: {
          title: "Keeping the Body Clean and Healthy",
          summary: "Practise good personal hygiene and explain its importance.",
          minutes: 40,
          notes: `## Meaning
**Personal hygiene** is the practice of **keeping the body and clothes clean** to stay healthy and look good.

## Care of body parts
| Part | Care |
|---|---|
| **skin** | bathe at least twice daily with soap and clean water; dry with a clean towel |
| **hair** | wash regularly; comb or brush daily; keep neat |
| **teeth and mouth** | brush at least twice daily (morning and before bed) with fluoride toothpaste; floss; visit the dentist; reduce sugary foods |
| **hands** | wash with soap before eating, after using the toilet and after handling dirt |
| **nails** | cut short and clean; do not bite them |
| **feet** | wash and dry between the toes; wear clean socks and comfortable shoes |
| **eyes** | wash with clean water; avoid rubbing with dirty hands; read in good light |
| **ears and nose** | clean the outer parts gently; do not insert sharp objects |

## Menstrual hygiene (for girls)
change sanitary pads regularly (every 4–6 hours); wash the body often; dispose of used pads properly; keep a record of the cycle.

## Hygiene items
soap, sponge, towel, toothbrush, toothpaste, comb, nail cutter, deodorant, clean underwear, sanitary pads.
**Do not share** toothbrushes, towels, razors or combs.

## Effects of poor hygiene
body odour, bad breath, tooth decay, skin infections (ringworm, scabies), lice, diarrhoea and other diseases, low self-esteem, being avoided by others.`,
          examples: `**Example 1.** When should hands be washed? *Answer:* **before eating and after using the toilet**.

**Example 2.** Why should toothbrushes not be shared? *Answer:* To **prevent the spread of germs** and infections.

**Example 3.** Name one effect of poor hygiene. *Answer:* **body odour** (or skin infections).`,
        },
        questions: [
          ["E", "Keeping the body and clothes clean is", "personal hygiene", "pollution", "malnutrition", "grooming only for parties", "It keeps us healthy."],
          ["E", "Teeth should be brushed at least", "twice daily", "once a week", "once a month", "only on Sundays", "Morning and before bed."],
          ["E", "Hands should be washed with soap", "after using the toilet", "only once a year", "only when visitors come", "never", "Washing removes germs."],
          ["M", "Which item should NOT be shared with others?", "toothbrush", "a book", "a chair", "a ruler", "Sharing it spreads germs."],
          ["M", "Unpleasant smell from an unwashed body is", "body odour", "fragrance", "perfume", "deodorant", "Sweat and bacteria cause it."],
          ["M", "Fingernails should be kept", "short and clean", "long and dirty", "bitten", "painted with dirt", "Dirt under nails carries germs."],
          ["M", "Failing to brush teeth regularly can cause", "tooth decay", "stronger teeth", "better breath", "taller growth", "Bacteria attack the teeth."],
          ["H", "A girl using sanitary pads should change them about every", "4 to 6 hours", "3 days", "week", "month", "Regular change prevents infection."],
          ["H", "Scabies and ringworm are examples of", "skin infections linked to poor hygiene", "healthy skin conditions", "nutrients", "cooking methods", "Dirt helps them spread."],
          ["H", "Drying well between the toes after washing helps to prevent", "fungal infection (athlete's foot)", "tooth decay", "short-sightedness", "hair growth", "Moisture encourages fungi."],
        ],
      },
      {
        week: 6,
        title: "Grooming and good posture",
        subtopics: ["Meaning of grooming", "Good grooming practices", "Good posture", "Choosing appropriate clothes"],
        objectives: ["Explain grooming", "Describe good grooming practices", "Demonstrate good posture when standing, sitting and walking", "Choose clothes appropriate for different occasions"],
        lesson: {
          title: "Looking Neat and Carrying Yourself Well",
          summary: "Practise good grooming and correct posture.",
          minutes: 40,
          notes: `## Meaning
**Grooming** is **taking care of one's appearance** so that one looks **neat, clean and attractive**. It goes beyond hygiene to include how one dresses, keeps the hair, and carries oneself.

## Good grooming practices
- keep the body clean (bathing, oral care)
- keep hair neat and well styled for school rules
- wear **clean, well-ironed** clothes that fit
- polish and maintain shoes
- keep nails short and clean
- use simple, suitable accessories
- use a mild deodorant if needed
- keep a pleasant expression and good manners

## Good posture
**Posture** is the way the body is held when standing, sitting or walking.
| Position | Good posture |
|---|---|
| **standing** | head up, shoulders back and relaxed, back straight, weight evenly on both feet |
| **sitting** | back straight against the chair, feet flat on the floor, do not slouch |
| **walking** | head up, eyes forward, arms swinging gently, steady steps |
| **lifting** | bend the knees, keep the back straight, lift with the legs |

**Benefits:** reduces backache and tiredness; aids breathing and digestion; improves appearance and confidence.

## Choosing appropriate clothes
Consider: the **occasion** (school, church/mosque, party, sports, work); **weather** (light cotton for hot weather, warm clothes for cold); **age**; **body shape**; **comfort**; **cost**; **culture and decency**.`,
          examples: `**Example 1.** How should you lift a heavy bucket? *Answer:* **bend the knees, keep the back straight** and lift with the legs.

**Example 2.** Which clothes suit hot weather? *Answer:* **light, loose cotton clothes**.

**Example 3.** Give one benefit of good posture. *Answer:* It **reduces backache**.`,
        },
        questions: [
          ["E", "Taking care of one's appearance to look neat is", "grooming", "gossiping", "shouting", "hoarding", "It includes dressing and hair care."],
          ["E", "The way the body is held when standing or sitting is", "posture", "hygiene", "nutrition", "fibre", "Posture affects health."],
          ["E", "Clothes worn to school should be", "clean and well ironed", "torn and dirty", "wet", "oversized and stained", "Neatness is part of grooming."],
          ["M", "Good sitting posture requires", "a straight back and feet flat on the floor", "slouching forward", "crossing the legs always", "leaning on one elbow", "It supports the spine."],
          ["M", "The correct way to lift a heavy object is to", "bend the knees and keep the back straight", "bend the back with straight legs", "jerk it up quickly", "twist the body while lifting", "The legs take the load."],
          ["M", "Which fabric is most comfortable in hot weather?", "light cotton", "thick wool", "leather", "heavy velvet", "Cotton absorbs sweat and is cool."],
          ["M", "When choosing clothes, one should consider the", "occasion", "neighbour's taste only", "colour of the sky", "price of fuel", "Clothes must suit the event."],
          ["H", "Poor posture over a long time can lead to", "backache", "stronger bones", "better eyesight", "faster digestion only", "It strains muscles and the spine."],
          ["H", "Grooming differs from personal hygiene because grooming also includes", "dressing and overall appearance", "only bathing", "only brushing teeth", "only washing hands", "It covers how one looks."],
          ["H", "Good walking posture includes", "head up and eyes looking forward", "dragging the feet", "looking down always", "hunched shoulders", "It looks confident and is healthy."],
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
        title: "Food and its classes",
        subtopics: ["Meaning of food", "Functions of food", "Classes of food", "Nigerian foods in each class"],
        objectives: ["Define food", "State the functions of food in the body", "List the classes of food", "Group Nigerian foods into their classes"],
        lesson: {
          title: "Food and What It Does for the Body",
          summary: "Identify the classes of food and examples from Nigerian diets.",
          minutes: 40,
          notes: `## Meaning
**Food** is any substance that is **eaten or drunk** and **digested** to provide the body with **nutrients** for energy, growth, repair and protection.

## Functions of food
1. provides **energy** for work and play
2. promotes **growth** and **repair** of worn-out tissues
3. **protects** the body from diseases
4. **regulates** body processes (e.g. digestion, body temperature)
5. gives satisfaction and is part of **social life** (celebrations)

## Classes of food
| Class | Main function | Nigerian examples |
|---|---|---|
| **carbohydrates** | energy | yam, rice, garri, cassava, maize, bread, plantain |
| **proteins** | growth and repair | beans, meat, fish, eggs, milk, soya beans, groundnuts |
| **fats and oils** | concentrated energy, warmth | palm oil, groundnut oil, butter, shea butter |
| **vitamins** | protection, regulation | fruits (orange, mango), vegetables (ugu, spinach) |
| **mineral salts** | strong bones and teeth, healthy blood | milk (calcium), liver (iron), iodised salt, vegetables |
| **water** | transport, temperature control, digestion | drinking water, soups, fruits |
Some books also include **roughage (dietary fibre)**, which aids bowel movement — found in vegetables, fruits and whole grains.

## Nutrients
The chemical substances in food that the body uses are called **nutrients**. Carbohydrates, proteins, fats and oils, vitamins, mineral salts and water are nutrients.`,
          examples: `**Example 1.** To which class does yam belong? *Answer:* **carbohydrates**.

**Example 2.** Name two sources of protein. *Answer:* **beans and fish**.

**Example 3.** What is the main function of vitamins? *Answer:* **protecting** the body from diseases and regulating body processes.`,
        },
        questions: [
          ["E", "Any substance eaten and digested to nourish the body is", "food", "fuel", "soil", "water vapour", "Food supplies nutrients."],
          ["E", "Yam and rice belong to the class of", "carbohydrates", "proteins", "vitamins", "minerals", "They supply energy."],
          ["E", "Beans and fish are good sources of", "protein", "carbohydrate", "fat only", "roughage only", "Protein builds the body."],
          ["M", "The main function of proteins is", "growth and repair of body tissues", "providing roughage", "giving colour", "cooling the body only", "Protein builds cells."],
          ["M", "Palm oil and groundnut oil belong to", "fats and oils", "proteins", "vitamins", "mineral salts", "They are concentrated energy foods."],
          ["M", "Oranges and green leafy vegetables are rich in", "vitamins", "fats", "carbohydrates only", "protein only", "They protect the body."],
          ["M", "The chemical substances in food used by the body are called", "nutrients", "enzymes only", "additives", "spices", "Nutrients nourish the body."],
          ["H", "Dietary fibre found in vegetables and whole grains helps to", "aid bowel movement and prevent constipation", "build muscles", "supply iron only", "cause obesity", "Roughage adds bulk."],
          ["H", "Which food class helps transport nutrients and control body temperature?", "water", "fats", "proteins", "carbohydrates", "Water is the body's transport medium."],
          ["H", "Calcium for strong bones and teeth is best obtained from", "milk", "sugar", "cooking oil", "garri", "Milk is rich in calcium."],
        ],
      },
      {
        week: 2,
        title: "Nutrients and deficiency diseases",
        subtopics: ["Vitamins and their sources", "Mineral salts and their sources", "Deficiency diseases", "Prevention of deficiency diseases"],
        objectives: ["Identify common vitamins and their sources", "Identify common mineral salts and their sources", "Describe deficiency diseases", "Suggest ways of preventing deficiency diseases"],
        lesson: {
          title: "When the Body Lacks Nutrients",
          summary: "Relate vitamins and minerals to the diseases caused by their lack.",
          minutes: 40,
          notes: `## Vitamins
| Vitamin | Sources | Deficiency disease |
|---|---|---|
| **A** | carrots, palm oil, liver, eggs, green vegetables | **night blindness** |
| **B1 (thiamine)** | whole grains, beans, unpolished rice | **beriberi** |
| **B3 (niacin)** | meat, fish, groundnuts | **pellagra** |
| **C** | oranges, lemons, guava, tomatoes, fresh vegetables | **scurvy** (bleeding gums) |
| **D** | sunlight on the skin, fish liver oil, eggs, milk | **rickets** (soft, bent bones) |
| **K** | green vegetables | poor blood clotting |

## Mineral salts
| Mineral | Sources | Deficiency |
|---|---|---|
| **calcium** | milk, fish with bones, vegetables | weak bones and teeth, rickets |
| **iron** | liver, red meat, beans, green leafy vegetables | **anaemia** (tiredness, pale skin) |
| **iodine** | iodised salt, seafood | **goitre** (swollen neck) |
| **phosphorus** | milk, meat, fish | weak bones |

## Protein-energy deficiency
- **kwashiorkor**: lack of **protein**; swollen belly and legs, reddish hair, irritability
- **marasmus**: lack of **both protein and energy**; very thin, wasted body

## Prevention
eat a **balanced diet**; eat fresh fruits and vegetables; use **iodised salt**; breastfeed babies exclusively for 6 months; include protein foods for children; nutrition education; cook vegetables lightly (overcooking destroys vitamin C); regular health check-ups.`,
          examples: `**Example 1.** A child has bleeding gums. Which vitamin is lacking? *Answer:* **vitamin C** (scurvy).

**Example 2.** Which mineral prevents goitre? *Answer:* **iodine**.

**Example 3.** A child with a swollen belly and reddish hair may have **kwashiorkor** (lack of protein).`,
        },
        questions: [
          ["E", "Lack of vitamin C causes", "scurvy", "rickets", "goitre", "beriberi", "Gums bleed in scurvy."],
          ["E", "Lack of iodine causes", "goitre", "scurvy", "night blindness", "pellagra", "The thyroid gland swells."],
          ["E", "Oranges and guava are rich sources of", "vitamin C", "vitamin D", "iron", "iodine", "Citrus fruits supply vitamin C."],
          ["M", "Night blindness is caused by lack of", "vitamin A", "vitamin C", "vitamin K", "iodine", "Vitamin A aids vision."],
          ["M", "Rickets, with soft and bent bones, results from lack of", "vitamin D and calcium", "vitamin C only", "iodine", "vitamin B1", "They build strong bones."],
          ["M", "Anaemia is caused by lack of", "iron", "iodine", "vitamin A", "fat", "Iron forms haemoglobin."],
          ["M", "A child with a swollen belly, swollen legs and reddish hair likely has", "kwashiorkor", "marasmus", "goitre", "scurvy", "It is protein deficiency."],
          ["H", "A very thin, wasted child lacking both protein and energy foods has", "marasmus", "kwashiorkor", "goitre", "pellagra", "The body wastes away."],
          ["H", "Beriberi is linked to lack of vitamin B1, which is found in", "whole grains and unpolished rice", "sugar and oil", "salt only", "soft drinks", "Polishing removes thiamine."],
          ["H", "Overcooking vegetables should be avoided because it", "destroys vitamin C", "adds protein", "increases iron", "creates iodine", "Vitamin C is destroyed by heat."],
        ],
      },
      {
        week: 3,
        title: "The kitchen",
        subtopics: ["Meaning of the kitchen", "Types of kitchen", "Kitchen layouts", "Features of a good kitchen"],
        objectives: ["Explain the kitchen and its uses", "Distinguish types of kitchen", "Describe common kitchen layouts", "State features of a good kitchen"],
        lesson: {
          title: "Where Meals Are Prepared",
          summary: "Describe kitchen types, layouts and features of a good kitchen.",
          minutes: 40,
          notes: `## Meaning
A **kitchen** is a room or place where **food is stored, prepared and cooked**. Some kitchens also serve as places for eating and washing up.

## Types of kitchen
| Type | Features |
|---|---|
| **traditional (local) kitchen** | often separate from the main house; firewood or charcoal; three-stone or clay stove |
| **modern kitchen** | inside the house; gas or electric cooker; sink with running water; cabinets and worktops |
| **open-plan kitchen** | joined to the dining or sitting area without a wall |
| **institutional kitchen** | large kitchens in schools, hospitals, hotels |

## Kitchen layouts
| Layout | Description |
|---|---|
| **one-wall (single-line)** | all equipment along one wall; good for small spaces |
| **galley (corridor)** | two parallel walls with a walkway |
| **L-shaped** | equipment along two walls meeting at a corner |
| **U-shaped** | equipment along three walls; most working space |
| **island** | an extra free-standing worktop in the middle |
The **work triangle** links the **sink, cooker and refrigerator/storage**; a short triangle saves time and energy.

## Features of a good kitchen
good **ventilation** (windows, extractor fan); good **lighting**; clean water supply and **drainage**; washable floor and walls; enough **storage** space; worktops of comfortable height; a **fire extinguisher** or fire blanket; convenient location near the dining area; proper refuse disposal; free from pests.`,
          examples: `**Example 1.** Which layout has equipment along three walls? *Answer:* the **U-shaped** layout.

**Example 2.** What is the kitchen work triangle? *Answer:* the arrangement linking the **sink, cooker and refrigerator**.

**Example 3.** Why should a kitchen be well ventilated? *Answer:* To **remove smoke, heat and cooking smells**.`,
        },
        questions: [
          ["E", "A room where food is stored, prepared and cooked is the", "kitchen", "bedroom", "garage", "store room for clothes", "Meals are made there."],
          ["E", "A kitchen that uses firewood and a three-stone stove is a", "traditional kitchen", "modern kitchen", "island kitchen", "laboratory", "It uses local fuel."],
          ["E", "A kitchen should have good ventilation to", "remove smoke and heat", "keep out light", "trap smells", "increase dampness", "Fresh air circulates."],
          ["M", "A layout with equipment along three walls is", "U-shaped", "L-shaped", "one-wall", "galley", "The three walls form a U."],
          ["M", "A layout with two parallel walls and a walkway between is the", "galley kitchen", "U-shaped kitchen", "island kitchen", "one-wall kitchen", "It is like a corridor."],
          ["M", "The work triangle in a kitchen links the", "sink, cooker and refrigerator", "bed, table and chair", "door, window and roof", "TV, fan and radio", "They are the main work centres."],
          ["M", "Kitchens in schools, hospitals and hotels are", "institutional kitchens", "traditional kitchens", "island kitchens only", "mobile kitchens", "They serve many people."],
          ["H", "Keeping the work triangle short in a kitchen", "saves time and energy", "wastes movement", "causes accidents", "increases cost only", "Less walking is needed."],
          ["H", "A free-standing worktop in the middle of a kitchen is called an", "island", "galley", "alcove", "pantry", "It stands alone like an island."],
          ["H", "Which safety item should every kitchen have?", "fire extinguisher or fire blanket", "a television", "a bed", "a sewing machine", "It controls kitchen fires."],
        ],
      },
      {
        week: 4,
        title: "Kitchen equipment and utensils",
        subtopics: ["Large kitchen equipment", "Small kitchen utensils", "Choosing kitchen equipment", "Care of kitchen equipment"],
        objectives: ["Identify large kitchen equipment and their uses", "Identify small kitchen utensils and their uses", "State factors in choosing kitchen equipment", "Describe the care of kitchen equipment"],
        lesson: {
          title: "Tools for Cooking",
          summary: "Identify, choose and care for kitchen equipment and utensils.",
          minutes: 40,
          notes: `## Large equipment
| Equipment | Use |
|---|---|
| **cooker (gas or electric)** | cooking, baking (oven) |
| **refrigerator/freezer** | keeping food cold and fresh |
| **sink** | washing food and utensils |
| **microwave oven** | quick heating and cooking |
| **kitchen cabinet** | storage |

## Small utensils
| Group | Examples and uses |
|---|---|
| **cutting** | knives (chopping), grater (grating), peeler, chopping board |
| **measuring** | measuring cups and spoons, kitchen scale, measuring jug |
| **mixing** | mixing bowls, wooden spoon, whisk, sieve |
| **cooking** | pots, saucepans, frying pan, kettle |
| **serving** | serving spoons, ladle, dishes, trays |
| **others** | mortar and pestle (pounding), grinding stone, blender, rolling pin, colander (draining) |

## Choosing kitchen equipment
consider: **purpose**; **cost** and family income; **quality and durability**; **size** of family and kitchen; ease of cleaning; **safety** (well-fitted handles); availability of spare parts; source of energy (gas, electricity).

## Care of kitchen equipment
- wash with warm soapy water, rinse and dry after use
- soak burnt pots before scrubbing; avoid harsh scouring on non-stick pans
- clean the cooker after use; check gas hoses for leaks
- **defrost** and clean the refrigerator regularly
- oil wooden spoons occasionally; do not soak them for long
- keep knives sharp and store them safely
- store equipment in dry, clean places
- follow the **manufacturer's instructions**`,
          examples: `**Example 1.** Which utensil is used to drain water from boiled rice? *Answer:* a **colander**.

**Example 2.** Name one factor in choosing kitchen equipment. *Answer:* **durability** (or cost, safety).

**Example 3.** Why should a refrigerator be defrosted? *Answer:* Thick ice **reduces its efficiency** and wastes electricity.`,
        },
        questions: [
          ["E", "The appliance used to keep food cold is the", "refrigerator", "cooker", "sink", "blender", "It slows food spoilage."],
          ["E", "The utensil used to pound yam is the", "mortar and pestle", "sieve", "whisk", "ladle", "Pounding needs a mortar."],
          ["E", "A knife is a", "cutting utensil", "measuring utensil", "serving dish", "cooking fuel", "A knife is used to cut food."],
          ["M", "The utensil used to drain water from boiled food is the", "colander", "grater", "rolling pin", "kettle", "It has holes for draining."],
          ["M", "The utensil used to beat eggs quickly is the", "whisk", "grater", "ladle", "chopping board", "Whisking beats air into eggs."],
          ["M", "Measuring cups and spoons are used to", "measure ingredients accurately", "cut meat", "serve soup", "pound yam", "Accuracy gives good results."],
          ["M", "Which is a factor in choosing kitchen equipment?", "durability", "the neighbour's opinion only", "colour of the kitchen door", "the weather", "Equipment should last."],
          ["H", "Burnt pots are best cleaned by", "soaking them before scrubbing", "throwing them away immediately", "heating them further", "painting them", "Soaking loosens burnt food."],
          ["H", "A refrigerator should be defrosted regularly because thick ice", "reduces its efficiency", "improves cooling", "saves electricity", "cleans the food", "Ice acts as insulation."],
          ["H", "Non-stick pans should not be scrubbed with harsh scourers because", "the coating will be damaged", "they will become heavier", "they will rust immediately", "the handles will fall off", "The coating wears off."],
        ],
      },
      {
        week: 5,
        title: "Kitchen hygiene and safety",
        subtopics: ["Kitchen hygiene", "Food hygiene", "Common kitchen accidents", "Safety rules and first aid"],
        objectives: ["Explain kitchen hygiene", "Describe good food hygiene practices", "Identify common kitchen accidents and their causes", "State kitchen safety rules and simple first aid"],
        lesson: {
          title: "A Clean and Safe Kitchen",
          summary: "Keep the kitchen clean and prevent accidents.",
          minutes: 40,
          notes: `## Kitchen hygiene
keep floors, worktops, sinks and walls clean; wash utensils after use; empty and wash the **refuse bin** daily; keep drains clear; keep away **pests** (cockroaches, rats, flies); store food in covered containers.

## Food hygiene
- wash hands before handling food
- wear a clean **apron** and cover the hair
- do not cough or sneeze over food
- wash fruits and vegetables with clean water
- keep **raw and cooked foods separate** (use different boards and knives)
- cook meat and fish thoroughly
- cover food to keep away flies
- refrigerate leftovers quickly
- do not handle food when sick with diarrhoea or open cuts
Poor food hygiene can cause **food poisoning** (vomiting, diarrhoea, stomach pain).

## Common kitchen accidents
| Accident | Causes |
|---|---|
| **burns and scalds** | hot pots, steam, hot oil, open flames |
| **cuts** | careless use of knives, broken glass |
| **falls** | wet or greasy floors |
| **fire** | gas leaks, hot oil catching fire, flammable items near flames |
| **electric shock** | wet hands on switches, faulty wires |

## Safety rules
turn pot handles inwards; use oven gloves; dry hands before touching switches; wipe spills immediately; store knives safely; never leave cooking unattended; switch off gas and electrical appliances after use; keep children away from the cooker; never pour water on an oil fire — cover it with a lid or fire blanket.

## Simple first aid
- **burns**: cool under clean running water for about **20 minutes**; do not apply oil, toothpaste or pap
- **cuts**: press with a clean cloth to stop bleeding; clean and bandage
- seek medical help for serious injuries`,
          examples: `**Example 1.** What should be done if cooking oil catches fire? *Answer:* **Turn off the heat and cover the pan** with a lid or fire blanket — never use water.

**Example 2.** First aid for a minor burn? *Answer:* **Cool under clean running water** for about 20 minutes.

**Example 3.** Why should raw meat and cooked food be kept apart? *Answer:* To **prevent cross-contamination** by germs.`,
        },
        questions: [
          ["E", "Before handling food, a cook should", "wash hands with soap", "touch the hair", "sneeze on the food", "handle money", "Clean hands prevent contamination."],
          ["E", "An injury from hot steam or liquid is a", "scald", "fracture", "sprain", "cut", "Scalds come from hot liquids."],
          ["E", "Wet floors in the kitchen can cause", "falls", "better cooking", "stronger pots", "faster boiling", "Slippery floors are dangerous."],
          ["M", "Pot handles on the cooker should be turned", "inwards", "outwards over the edge", "towards children", "towards the door", "This prevents knocking them over."],
          ["M", "Illness from eating contaminated food is", "food poisoning", "kwashiorkor", "goitre", "scurvy", "Germs in food cause it."],
          ["M", "Using separate boards for raw meat and cooked food prevents", "cross-contamination", "cooking", "seasoning", "boiling", "Germs spread from raw food."],
          ["M", "Before touching electrical switches, one should", "dry the hands", "wet the hands", "wear wet gloves", "stand in water", "Water conducts electricity."],
          ["H", "If cooking oil catches fire, the correct action is to", "turn off the heat and cover the pan", "pour water on it", "fan the flames", "carry the pan outside quickly", "Water spreads an oil fire."],
          ["H", "The correct first aid for a minor burn is to", "cool it under clean running water", "apply palm oil", "rub toothpaste on it", "cover it with sand", "Cooling reduces damage."],
          ["H", "A food handler with diarrhoea should", "stay away from handling food", "cook for everyone", "serve food without washing", "hide the illness", "Germs can spread through food."],
        ],
      },
      {
        week: 6,
        title: "Methods of cooking",
        subtopics: ["Reasons for cooking food", "Moist-heat methods", "Dry-heat methods", "Cooking with fat"],
        objectives: ["State reasons for cooking food", "Describe moist-heat methods of cooking", "Describe dry-heat methods of cooking", "Explain methods of cooking with fat"],
        lesson: {
          title: "How Food Is Cooked",
          summary: "Describe and compare methods of cooking.",
          minutes: 40,
          notes: `## Reasons for cooking food
- to make food **safe** by killing germs
- to make it **easier to digest** and chew
- to improve **flavour, colour and appearance**
- to **preserve** food for longer
- to give **variety** in meals
- to stimulate appetite

## Moist-heat methods
| Method | Description | Examples |
|---|---|---|
| **boiling** | cooking in water at 100 °C with bubbles | yam, rice, eggs |
| **simmering** | cooking just below boiling point with gentle bubbles | soups, stews |
| **stewing** | slow cooking in a small amount of liquid in a covered pot | meat stew |
| **steaming** | cooking in the steam from boiling water | moi-moi, fish |
| **poaching** | cooking gently in liquid just below simmering | eggs, fish |

## Dry-heat methods
| Method | Description | Examples |
|---|---|---|
| **baking** | cooking in an oven by dry hot air | bread, cakes |
| **roasting** | cooking in an oven or over open fire with a little fat | chicken, plantain (boli), corn |
| **grilling/broiling** | cooking under or over direct heat | suya, fish |
| **toasting** | browning with dry heat | bread |

## Cooking with fat
- **shallow frying**: a little fat in a frying pan (eggs, pancakes)
- **deep frying**: food fully covered in hot oil (puff-puff, akara, chips)
- **sautéing/stir-frying**: quick cooking in a little oil while stirring

## Comparing methods
steaming keeps more nutrients than boiling; frying adds fat and calories; grilling allows fat to drip away.`,
          examples: `**Example 1.** Which method is used to cook moi-moi? *Answer:* **steaming**.

**Example 2.** Puff-puff and akara are cooked by **deep frying**.

**Example 3.** Give one reason for cooking food. *Answer:* to **kill germs** (or to make food easier to digest).`,
        },
        questions: [
          ["E", "Cooking food in water at 100 °C is", "boiling", "baking", "grilling", "frying", "Water boils at 100 °C."],
          ["E", "Bread and cakes are cooked by", "baking", "boiling", "steaming", "poaching", "They are cooked in an oven."],
          ["E", "Puff-puff is cooked by", "deep frying", "steaming", "boiling", "poaching", "It is fried in hot oil."],
          ["M", "Moi-moi is traditionally cooked by", "steaming", "grilling", "roasting", "deep frying", "It cooks in steam."],
          ["M", "Suya is cooked by", "grilling over direct heat", "boiling", "steaming", "poaching", "It is cooked over an open fire."],
          ["M", "Cooking gently just below boiling point with small bubbles is", "simmering", "roasting", "baking", "toasting", "It is gentler than boiling."],
          ["M", "One reason for cooking food is to", "kill germs", "add dirt", "reduce taste", "make it harder to digest", "Heat destroys micro-organisms."],
          ["H", "Which method keeps more nutrients in vegetables?", "steaming", "long boiling", "deep frying", "burning", "Nutrients are not lost into water."],
          ["H", "Frying eggs in a little oil in a pan is", "shallow frying", "deep frying", "steaming", "stewing", "Only a little fat is used."],
          ["H", "Slow cooking of meat in a small amount of liquid in a covered pot is", "stewing", "grilling", "toasting", "baking", "It tenderises tough meat."],
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
        title: "Clothing and its functions",
        subtopics: ["Meaning of clothing", "Functions of clothing", "Types of clothing", "Choosing clothing"],
        objectives: ["Define clothing", "State the functions of clothing", "Identify types of clothing for different occasions", "State factors in choosing clothing"],
        lesson: {
          title: "Why We Wear Clothes",
          summary: "Explain the functions and types of clothing.",
          minutes: 40,
          notes: `## Meaning
**Clothing** refers to all items worn on the body: garments (shirts, trousers, dresses, wrappers), headwear, footwear and accessories.

## Functions of clothing
| Function | Explanation |
|---|---|
| **protection** | from heat, cold, rain, sun, insects, injuries (e.g. helmets, boots) |
| **decency/modesty** | covers the body according to social norms |
| **adornment** | makes a person look attractive |
| **identification** | uniforms show occupation or group (police, nurses, students) |
| **status** | shows rank or wealth (chieftaincy regalia) |
| **cultural expression** | traditional attire shows ethnic identity (agbada, isiagu, babban riga) |
| **comfort** | suitable clothes help the body feel comfortable |

## Types of clothing
- **school uniforms**
- **casual wear** (for home and relaxation)
- **formal wear** (for offices and ceremonies)
- **sportswear** (tracksuits, jerseys, canvas shoes)
- **nightwear** (pyjamas, nightgowns)
- **protective wear** (aprons, overalls, helmets, raincoats)
- **traditional attire**

## Choosing clothing
occasion; weather; age; body build; comfort; cost; quality of fabric and sewing; **ease of care** (washing, ironing); fashion; culture and religion.`,
          examples: `**Example 1.** A nurse's uniform performs which function? *Answer:* **identification**.

**Example 2.** A raincoat serves which function? *Answer:* **protection** from rain.

**Example 3.** Name one factor to consider when choosing clothes. *Answer:* the **occasion** (or weather, cost).`,
        },
        questions: [
          ["E", "All items worn on the body are called", "clothing", "furniture", "utensils", "food", "They include garments and accessories."],
          ["E", "A raincoat protects the wearer from", "rain", "hunger", "noise", "darkness", "It keeps the body dry."],
          ["E", "Pyjamas are an example of", "nightwear", "sportswear", "formal wear", "protective wear", "They are worn to bed."],
          ["M", "A police uniform mainly performs the function of", "identification", "decency only", "cooking", "cleaning", "It shows occupation."],
          ["M", "Covering the body according to social norms is the function of", "decency", "status", "adornment", "identification", "It maintains modesty."],
          ["M", "Wearing clothes to look attractive is", "adornment", "protection", "identification", "insulation", "It beautifies the wearer."],
          ["M", "An apron worn while cooking is", "protective wear", "nightwear", "formal wear", "sportswear", "It protects clothes from stains."],
          ["H", "Traditional attire such as agbada or isiagu mainly shows", "cultural identity", "rain protection only", "occupation as a nurse", "sports team", "It expresses ethnic culture."],
          ["H", "Chieftaincy regalia worn by a traditional ruler shows", "status", "casual wear", "nightwear", "protective function only", "It reflects rank."],
          ["H", "Clothes that are easy to wash and iron are chosen for", "ease of care", "fashion only", "status", "adornment", "They reduce maintenance."],
        ],
      },
      {
        week: 2,
        title: "Textile fibres",
        subtopics: ["Meaning of fibres", "Natural fibres", "Man-made fibres", "Identifying fibres"],
        objectives: ["Explain textile fibres", "Classify natural fibres and state their sources", "Classify man-made fibres", "Identify fibres by simple tests"],
        lesson: {
          title: "Where Fabrics Come From",
          summary: "Classify fibres and describe their properties.",
          minutes: 40,
          notes: `## Meaning
A **fibre** is a **fine, hair-like strand** from which yarns are spun and fabrics are made. **Yarn** is formed by twisting fibres together; **fabric** is made by weaving or knitting yarns.

## Natural fibres
| Group | Fibre | Source | Properties |
|---|---|---|---|
| **plant (cellulose)** | **cotton** | cotton plant seed | absorbent, cool, strong when wet, creases easily |
| | **linen (flax)** | stem of flax plant | strong, cool, creases badly |
| **animal (protein)** | **wool** | sheep's hair | warm, elastic, may shrink |
| | **silk** | cocoon of silkworm | smooth, lustrous, strong, expensive |

## Man-made fibres
| Group | Examples | Properties |
|---|---|---|
| **regenerated** (from natural materials like wood pulp) | **rayon (viscose)**, acetate | soft, absorbent, weaker when wet |
| **synthetic** (from chemicals, e.g. petroleum) | **nylon**, **polyester**, **acrylic** | strong, crease-resistant, quick-drying, less absorbent, melt under heat |
**Blends** mix fibres to combine good qualities (e.g. polyester-cotton).

## Burning test
| Fibre | Burns | Smell | Residue |
|---|---|---|---|
| cotton/linen | quickly with yellow flame | burning paper | soft grey ash |
| wool/silk | slowly, curls away | burning hair or feathers | crushable black bead |
| nylon/polyester | melts and shrinks | chemical | hard bead |
**Safety:** do the burning test only with a teacher, using tongs over a tray.`,
          examples: `**Example 1.** Which fibre comes from the cocoon of a silkworm? *Answer:* **silk**.

**Example 2.** A fibre burns with a smell like burning hair. What group is it? *Answer:* **animal (protein)** fibre, e.g. wool.

**Example 3.** Give one property of cotton. *Answer:* It is **absorbent** and cool to wear.`,
        },
        questions: [
          ["E", "A fine hair-like strand used to make fabric is a", "fibre", "button", "needle", "pattern", "Fibres are spun into yarn."],
          ["E", "Cotton is obtained from", "the cotton plant", "sheep", "silkworms", "petroleum", "It is a plant fibre."],
          ["E", "Wool is obtained from", "sheep", "cotton plants", "flax", "wood pulp", "It is an animal fibre."],
          ["M", "Silk is produced from the", "cocoon of the silkworm", "stem of flax", "seed of cotton", "leaves of palm", "Silkworms spin cocoons."],
          ["M", "Nylon and polyester are", "synthetic fibres", "natural plant fibres", "animal fibres", "regenerated fibres", "They are made from chemicals."],
          ["M", "Rayon (viscose) is made from", "wood pulp", "sheep's hair", "petroleum only", "cocoons", "It is a regenerated fibre."],
          ["M", "Linen is made from the", "flax plant", "silkworm", "sheep", "cotton seed", "Flax stems give linen."],
          ["H", "A fibre that burns with a smell of burning hair and leaves a crushable black bead is", "wool", "cotton", "nylon", "linen", "Protein fibres smell like hair."],
          ["H", "A fibre that melts and leaves a hard bead when burnt is", "polyester", "cotton", "wool", "silk", "Synthetics melt."],
          ["H", "Mixing polyester with cotton in one fabric is called a", "blend", "weave", "hem", "dart", "Blends combine good qualities."],
        ],
      },
      {
        week: 3,
        title: "Sewing tools and equipment",
        subtopics: ["Measuring tools", "Cutting tools", "Sewing and marking tools", "Care of sewing tools"],
        objectives: ["Identify measuring tools and their uses", "Identify cutting tools and their uses", "Identify sewing and marking tools", "Describe the care of sewing tools"],
        lesson: {
          title: "Tools for Needlework",
          summary: "Identify sewing tools and use them correctly and safely.",
          minutes: 40,
          notes: `## Measuring tools
| Tool | Use |
|---|---|
| **tape measure** | taking body measurements and measuring fabric |
| **metre rule** | measuring straight lengths of fabric |
| **hem gauge** | measuring hems and small distances |
| **set square / French curve** | drafting patterns |

## Cutting tools
| Tool | Use |
|---|---|
| **dressmaker's shears** | cutting fabric (long blades, bent handle) |
| **pinking shears** | cutting zig-zag edges to reduce fraying |
| **small scissors** | trimming threads |
| **seam ripper (unpicker)** | removing unwanted stitches |

## Sewing tools
**needles** (hand and machine), **pins** (holding fabric in place), **pin cushion**, **thimble** (protects the middle finger while hand sewing), **thread**, **sewing machine**, **bodkin** (threading elastic).

## Marking tools
**tailor's chalk**, **tracing wheel** and **tracing paper** (carbon), marking pencil — used to transfer pattern markings to fabric.

## Pressing tools
**iron** and **ironing board**; pressing cloth.

## Care and safety
- use shears only for fabric (paper blunts them)
- keep pins and needles in a pin cushion or box
- never put pins in the mouth
- oil the sewing machine and cover it after use
- keep tools in a **sewing box**
- carry scissors with points downward`,
          examples: `**Example 1.** Which tool protects the finger during hand sewing? *Answer:* a **thimble**.

**Example 2.** Which tool prevents fraying by cutting a zig-zag edge? *Answer:* **pinking shears**.

**Example 3.** Why should fabric shears not be used for paper? *Answer:* Paper **blunts the blades**.`,
        },
        questions: [
          ["E", "The tool used for taking body measurements is the", "tape measure", "thimble", "bodkin", "iron", "It is flexible for curves."],
          ["E", "Pins are kept safely in a", "pin cushion", "cooking pot", "pocket", "mouth", "It prevents loss and injury."],
          ["E", "The tool that protects the finger during hand sewing is the", "thimble", "seam ripper", "tape measure", "tracing wheel", "It is worn on the middle finger."],
          ["M", "Scissors that cut zig-zag edges to reduce fraying are", "pinking shears", "dressmaker's shears", "small scissors", "tracing wheels", "The zig-zag stops fraying."],
          ["M", "The tool used to remove unwanted stitches is the", "seam ripper", "thimble", "bodkin", "iron", "It is also called an unpicker."],
          ["M", "Tailor's chalk is used for", "marking fabric", "cutting fabric", "measuring hems", "pressing seams", "It leaves removable marks."],
          ["M", "A bodkin is used for", "threading elastic through a casing", "cutting cloth", "measuring waist", "pressing clothes", "It pulls elastic through."],
          ["H", "Dressmaker's shears should not be used to cut paper because", "paper blunts the blades", "paper is too soft", "they will become sharper", "paper is expensive", "Blades lose their edge."],
          ["H", "Pins should never be held in the mouth because", "they can be swallowed", "they become sharper", "they taste nice", "they rust faster", "Swallowing pins is dangerous."],
          ["H", "A tracing wheel is used together with", "tracing (carbon) paper", "a thimble only", "an iron", "a pin cushion", "It transfers pattern markings."],
        ],
      },
      {
        week: 4,
        title: "Basic stitches",
        subtopics: ["Temporary stitches", "Permanent stitches", "Decorative stitches", "Making a simple sample"],
        objectives: ["Distinguish temporary from permanent stitches", "Work basic temporary stitches", "Work basic permanent and decorative stitches", "Make a stitch sample"],
        lesson: {
          title: "Joining and Decorating Fabric by Hand",
          summary: "Work temporary, permanent and decorative stitches.",
          minutes: 45,
          notes: `## Temporary stitches
Used to hold fabric in place **before permanent sewing**; removed afterwards.
| Stitch | Use |
|---|---|
| **tacking (basting)** | holding pieces together; long even stitches |
| **uneven tacking** | long and short stitches for marking guidelines |
| **tailor's tacks** | loops to transfer pattern markings |

## Permanent stitches
Remain in the garment.
| Stitch | Use |
|---|---|
| **running stitch** | simple seams, gathering; small even stitches |
| **back stitch** | strong seams; looks like machine stitching |
| **hemming stitch** | securing hems; small slanting stitches |
| **slip stitch** | nearly invisible hems |
| **overcasting** | neatening raw edges to stop fraying |
| **blanket stitch** | edging blankets, neatening edges |

## Decorative (embroidery) stitches
**chain stitch**, **stem stitch**, **satin stitch**, **cross stitch**, **feather stitch**, **French knot**, **lazy daisy** — used to beautify clothes, table linen and cushions.

## Rules for good hand sewing
use a short thread (about arm's length); begin with a knot or a few back stitches; keep stitches **even** in size and spacing; do not pull too tightly; fasten off securely; use a thimble; work in good light.

## Making a stitch sample
take a piece of calico about 20 cm × 15 cm; draw guidelines with chalk; work each stitch in a row; label each row; neaten the edges.`,
          examples: `**Example 1.** Which stitch holds fabric together before machine sewing and is removed later? *Answer:* **tacking**.

**Example 2.** Which stitch is strongest for hand-sewn seams? *Answer:* **back stitch**.

**Example 3.** Name one decorative stitch. *Answer:* **chain stitch** (or satin, cross stitch).`,
        },
        questions: [
          ["E", "Stitches used to hold fabric in place before final sewing are", "temporary stitches", "permanent stitches", "decorative stitches", "machine stitches only", "They are removed later."],
          ["E", "Tacking is an example of a", "temporary stitch", "decorative stitch", "permanent stitch", "knitting stitch", "It is removed after sewing."],
          ["E", "Stitches used to beautify fabric are", "decorative stitches", "temporary stitches", "tacking stitches", "tailor's tacks", "They are embroidery stitches."],
          ["M", "The strongest hand stitch for seams is the", "back stitch", "tacking stitch", "running stitch", "French knot", "It resembles machine stitching."],
          ["M", "Small slanting stitches used to secure a hem are", "hemming stitches", "tacking stitches", "cross stitches", "chain stitches", "They hold the folded edge."],
          ["M", "Overcasting is used to", "neaten raw edges", "decorate collars", "mark patterns", "gather fabric", "It prevents fraying."],
          ["M", "Which is a decorative stitch?", "chain stitch", "tacking", "tailor's tack", "uneven tacking", "It forms linked loops."],
          ["H", "Loops of thread used to transfer pattern markings to fabric are", "tailor's tacks", "hemming stitches", "back stitches", "satin stitches", "They mark darts and pockets."],
          ["H", "A nearly invisible stitch for hems is the", "slip stitch", "back stitch", "chain stitch", "blanket stitch", "It slips inside the fold."],
          ["H", "A good rule for hand sewing is to", "keep stitches even in size and spacing", "use very long thread", "pull stitches as tight as possible", "sew in poor light", "Even stitches look neat."],
        ],
      },
      {
        week: 5,
        title: "The home and types of houses",
        subtopics: ["Meaning of home and house", "Types of houses", "Factors in choosing a house", "Rooms and their uses"],
        objectives: ["Distinguish a home from a house", "Identify types of houses in Nigeria", "State factors to consider in choosing a house", "State the uses of rooms in a house"],
        lesson: {
          title: "A Place to Live",
          summary: "Identify types of houses and factors in choosing a house.",
          minutes: 40,
          notes: `## Home and house
- a **house** is a **building** where people live
- a **home** is a house plus the **love, care and relationships** of the family who live there
"A house is built with hands, but a home is built with hearts."

## Types of houses
| Type | Features |
|---|---|
| **bungalow** | single storey (all rooms on the ground floor) |
| **storey building** | two or more floors |
| **flat (apartment)** | self-contained unit within a larger building |
| **duplex** | two floors in one unit for one family |
| **terrace houses** | a row of houses sharing side walls |
| **semi-detached** | two houses sharing one wall |
| **"face-me-I-face-you" (tenement)** | rooms facing a corridor, shared toilet and kitchen |
| **traditional houses** | mud walls, thatch roofs (varies by region) |
| **mansion** | very large, luxurious house |

## Factors in choosing a house
family **size**; **income** (rent or cost); **location** (near work, school, market, hospital); **security**; **water and electricity** supply; **drainage** and freedom from flooding; road access; neighbourhood; **ventilation** and lighting; toilet and bathroom facilities.

## Rooms and their uses
sitting room (relaxing, receiving guests); bedroom (sleeping, privacy); kitchen (cooking); dining room (eating); bathroom and toilet (bathing, elimination); store (storage); study (reading).`,
          examples: `**Example 1.** A single-storey house with all rooms on the ground floor is a **bungalow**.

**Example 2.** What makes a house a home? *Answer:* **love, care and good relationships** among family members.

**Example 3.** Name one factor in choosing a house. *Answer:* **location** (or income, security).`,
        },
        questions: [
          ["E", "A building where people live is a", "house", "market", "factory", "school", "It provides shelter."],
          ["E", "A single-storey house with all rooms on the ground floor is a", "bungalow", "duplex", "storey building", "skyscraper", "It has one level."],
          ["E", "The room used mainly for sleeping is the", "bedroom", "kitchen", "store", "dining room", "It provides rest and privacy."],
          ["M", "A house becomes a home through", "love, care and good relationships", "expensive furniture only", "a large size", "many cars", "Relationships make a home."],
          ["M", "Two houses sharing one common wall are", "semi-detached", "detached bungalows", "terraces of ten", "mansions", "They are joined on one side."],
          ["M", "A self-contained unit within a larger building is a", "flat (apartment)", "mansion", "hut", "barn", "Many flats share one building."],
          ["M", "Rooms facing a corridor with shared toilet and kitchen describe a", "tenement house", "duplex", "mansion", "detached house", "It is known as face-me-I-face-you."],
          ["H", "A house with two floors used by one family is a", "duplex", "bungalow", "tenement", "hut", "It has two levels in one unit."],
          ["H", "Which factor is most important when choosing a house in a flood-prone area?", "good drainage", "colour of paint", "size of the gate only", "neighbour's car", "Flooding damages houses."],
          ["H", "The room used for receiving guests and relaxing is the", "sitting room", "store", "toilet", "kitchen", "It is the living room."],
        ],
      },
      {
        week: 6,
        title: "Care of the home",
        subtopics: ["Daily, weekly and periodic cleaning", "Cleaning agents and materials", "Cleaning different surfaces", "Refuse disposal"],
        objectives: ["Plan daily, weekly and periodic cleaning", "Identify cleaning agents and materials", "Clean different surfaces correctly", "Dispose of refuse properly"],
        lesson: {
          title: "Keeping the Home Clean",
          summary: "Plan cleaning routines and use cleaning agents correctly.",
          minutes: 40,
          notes: `## Cleaning routines
| Routine | Activities |
|---|---|
| **daily cleaning** | making beds, sweeping, dusting, washing plates, emptying bins, tidying rooms |
| **weekly cleaning** | mopping floors, washing curtains or bedsheets, cleaning windows, cleaning the toilet thoroughly, cutting grass |
| **periodic (occasional) cleaning** | spring cleaning: washing walls, cleaning ceilings, rearranging furniture, fumigation, painting |

## Cleaning agents
| Agent | Use |
|---|---|
| **soap and detergent** | general washing |
| **scouring powder** | removing stubborn stains on sinks, pots |
| **disinfectants** (e.g. Dettol, Izal) | killing germs in toilets and drains |
| **bleach** | whitening and disinfecting |
| **polish** (floor, furniture, shoe) | shining and protecting surfaces |
| **window cleaner / vinegar solution** | glass |
| **air freshener** | pleasant smell |

## Cleaning materials and equipment
broom, dustpan, mop and bucket, sponge, scrubbing brush, dusters, vacuum cleaner, toilet brush, rubber gloves.

## Cleaning different surfaces
- **tiled floors**: sweep, then mop with detergent water
- **wooden furniture**: dust, then polish; avoid soaking
- **glass**: wipe with window cleaner and dry cloth
- **toilets**: scrub with brush and disinfectant; wear gloves

## Refuse disposal
use **covered bins**; separate waste (recyclable, organic); empty bins regularly; use approved **waste collectors**; do not dump refuse in drains or streets; burying or composting organic waste. Poor disposal breeds **flies, rats and mosquitoes** and causes disease and flooding.

## Safety
never mix bleach with other cleaners (toxic fumes); store chemicals out of children's reach; ventilate rooms while cleaning.`,
          examples: `**Example 1.** Is washing curtains a daily or weekly activity? *Answer:* **weekly** (or periodic).

**Example 2.** Which cleaning agent kills germs in the toilet? *Answer:* a **disinfectant**.

**Example 3.** Why should refuse not be dumped in drains? *Answer:* It **blocks the drains and causes flooding** and disease.`,
        },
        questions: [
          ["E", "Sweeping and making beds are examples of", "daily cleaning", "periodic cleaning", "annual painting", "fumigation only", "They are done every day."],
          ["E", "The cleaning agent that kills germs is a", "disinfectant", "polish", "perfume", "starch", "It destroys micro-organisms."],
          ["E", "Refuse should be kept in", "covered bins", "open drains", "the street", "the kitchen sink", "Covering keeps pests away."],
          ["M", "Washing walls and ceilings once or twice a year is", "periodic cleaning", "daily cleaning", "weekly dusting", "hourly cleaning", "It is done occasionally."],
          ["M", "Wooden furniture should be cleaned by", "dusting and polishing", "soaking in water", "scrubbing with sand", "burning", "Water damages wood."],
          ["M", "Scouring powder is used to", "remove stubborn stains on sinks and pots", "polish wooden floors", "freshen the air", "starch clothes", "It is abrasive."],
          ["M", "Dumping refuse in drains can cause", "flooding", "cleaner streets", "better drainage", "fresher air", "Drains get blocked."],
          ["H", "Bleach should never be mixed with other cleaning agents because", "it can produce toxic fumes", "it becomes perfume", "it loses its colour only", "it becomes food", "Harmful gases may form."],
          ["H", "Separating refuse into recyclable and organic waste helps", "recycling and composting", "increase pollution", "block drains", "breed mosquitoes", "Waste can be reused."],
          ["H", "Poor refuse disposal breeds pests such as", "flies and rats", "butterflies only", "earthworms only", "bees only", "They spread diseases."],
        ],
      },
    ],
  },
];
