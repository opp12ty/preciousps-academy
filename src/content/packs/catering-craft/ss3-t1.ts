import type { TermPlan } from "../types";

/** SS3 Catering and Craft Practice, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 2,
      title: "Meal Planning in Catering",
      subtopics: ["Meaning of meal planning", "Importance of meal planning", "Factors affecting meal planning", "Menus and courses"],
      objectives: ["Explain the meaning of meal planning", "State the importance of meal planning", "Discuss the factors that affect meal planning", "Distinguish the types of menu"],
      lesson: {
        title: "Planning Meals for Customers and Families",
        summary: "Deciding in advance what to serve so that meals are balanced, attractive and affordable.",
        minutes: 40,
        notes: `## Meaning
**Meal planning** is **deciding in advance what dishes will be prepared and served at each meal** over a period, so that the meals are **nutritionally adequate, attractive and within budget**. The written list of dishes is the **menu**.

## Importance
- ensures **balanced meals** that meet the eaters' needs
- **saves time, energy and money** — shopping and cooking are organised
- avoids **waste**; allows leftovers to be used
- gives **variety** in colour, flavour, texture and cooking method
- allows **seasonal and local foods** to be used when cheapest
- helps the caterer to **cost** dishes and fix prices
- makes work in the kitchen orderly: staff, equipment and time are scheduled
- meets the needs of **special groups**

## Factors affecting meal planning
| Factor | Explanation |
|---|---|
| **nutritional needs** | age, sex, occupation, health and physiological state |
| **money available** | the food budget or the price the customer will pay |
| **foods in season** | cheaper, fresher, better flavoured |
| **number of people** | portions and quantities |
| **type of meal and occasion** | breakfast, lunch, dinner, party, buffet |
| **time and skill** | of the cook |
| **equipment and facilities** | oven, refrigerator, fuel |
| **likes, dislikes, religion and culture** | taboos, fasting, vegetarianism |
| **weather / climate** | hot dishes in cold weather; light, cool dishes in heat |
| **type of establishment and customers** | hotel, school, hospital, canteen |

## Principles of a good menu
- include all the **food groups**
- avoid **repeating** a food, colour, flavour or cooking method in one meal
- balance **heavy and light** courses
- vary **texture** — soft, crisp, chewy
- make the meal **attractive** with garnish
- serve suitable **portions**

## Types of menu
| Menu | Description |
|---|---|
| **table d'hôte** | a **set menu** of a fixed number of courses at a **fixed price**, with little or no choice |
| **à la carte** | every dish is listed and **priced separately**; cooked to order |
| **cyclic menu** | a set of menus repeated over a period — schools, hospitals |
| **special function menu** | banquets, weddings |
| **carte du jour** | the "card of the day" |

## Courses of a meal
**starter (appetiser / hors d'oeuvre)** → **soup** → **fish** → **main course (entrée)** with vegetables → **sweet (dessert)** → **savoury / cheese** → **coffee**. A simple meal has three: starter, main course, dessert.`,
        examples: `**Example 1.** Define meal planning. *Answer:* **Deciding in advance** the dishes to be served so that meals are adequate, attractive and affordable.

**Example 2.** Distinguish table d'hôte from à la carte. *Answer:* **Table d'hôte** is a set menu at a fixed price; **à la carte** lists and prices each dish separately.

**Example 3.** State three factors affecting meal planning. *Answer:* **Money available, foods in season** and the **nutritional needs** of the eaters.`,
      },
      questions: [
        ["E", "Deciding in advance the dishes to be prepared and served is", "meal planning", "food costing", "portion control", "food storage", "It gives adequate, attractive and affordable meals."],
        ["E", "A written list of dishes available at a meal is a", "menu", "recipe", "requisition", "bin card", "It guides both the kitchen and the customer."],
        ["E", "Foods in season are preferred in meal planning because they are", "cheaper and fresher", "always imported", "harder to cook", "less nutritious", "Supply is plentiful in season."],
        ["M", "A set menu with a fixed number of courses at a fixed price is", "table d'hôte", "à la carte", "carte du jour", "a buffet card", "The customer has little or no choice."],
        ["M", "A menu in which each dish is priced separately and cooked to order is", "à la carte", "table d'hôte", "cyclic", "a banquet menu", "The customer pays only for what is chosen."],
        ["M", "A set of menus repeated over a period, as in boarding schools, is a", "cyclic menu", "function menu", "à la carte menu", "wine list", "It simplifies purchasing and preparation."],
        ["M", "Which of these is a good principle of menu planning?", "Avoid repeating a food or cooking method in one meal", "Serve three fried dishes together", "Use one colour throughout", "Serve only starchy foods", "Variety makes meals attractive and balanced."],
        ["H", "The first course of a formal meal, meant to stimulate the appetite, is the", "hors d'oeuvre", "entrée", "dessert", "savoury", "It is a light starter."],
        ["H", "In hot weather, the most suitable meal is one that is", "light and cool", "heavy and fatty", "very spicy and hot", "made up of stews only", "Climate affects the type of dishes chosen."],
        ["H", "A caterer plans menus partly in order to", "cost dishes and fix selling prices", "avoid buying equipment", "reduce the number of customers", "remove the need for recipes", "Knowing the dishes allows costs to be calculated."],
      ],
    },
    {
      week: 3,
      title: "Special Menu: Vegetarians",
      subtopics: ["Meaning and types of vegetarians", "Reasons for vegetarianism", "Nutritional considerations", "Planning meals for vegetarians"],
      objectives: ["Explain who a vegetarian is", "Identify the types of vegetarians", "State reasons for vegetarianism", "Plan suitable meals for vegetarians"],
      lesson: {
        title: "Catering for Vegetarians",
        summary: "People who avoid flesh foods, why they do so, and how to give them adequate meals.",
        minutes: 40,
        notes: `## Meaning
A **vegetarian** is a person who **does not eat meat, poultry or fish**, living mainly on foods of plant origin.

## Types of vegetarians
| Type | Eats | Avoids |
|---|---|---|
| **vegan (strict vegetarian)** | plant foods only | all animal products — meat, fish, eggs, milk, often honey |
| **lacto-vegetarian** | plant foods + **milk and milk products** | meat, fish, eggs |
| **ovo-vegetarian** | plant foods + **eggs** | meat, fish, milk |
| **lacto-ovo-vegetarian** | plant foods + **milk and eggs** | meat, poultry, fish |
| **pescatarian** (semi-vegetarian) | plant foods + fish | meat and poultry |
| **fruitarian** | fruits, nuts and seeds | most other foods |

## Reasons for vegetarianism
- **religion** — e.g. some Hindus, Buddhists, Seventh-day Adventists
- **moral / ethical** — objection to killing animals
- **health** — lower intake of saturated fat; medical advice
- **economic** — meat is expensive
- **environmental** concerns
- **personal taste** — dislike of meat
- **culture and family upbringing**

## Nutritional considerations
Plant diets are high in fibre and low in saturated fat, but some nutrients need care:
| Nutrient | Plant sources |
|---|---|
| **protein** | legumes (beans, soya beans, groundnuts, lentils), nuts, seeds, cereals; **combine legumes with cereals** (rice and beans) to supply all essential amino acids |
| **iron** | dark green leafy vegetables, legumes, millet; eat with **vitamin C** to aid absorption |
| **calcium** | milk (if taken), soya products, green vegetables, sesame |
| **vitamin B₁₂** | milk and eggs (if taken); **fortified foods or supplements** for vegans |
| **vitamin D** | sunlight; fortified foods |
| **zinc; omega-3 fats** | nuts, seeds, whole grains |

## Guidelines for planning
1. Find out the **type** of vegetarian.
2. Use **legumes, nuts and soya** (tofu / soya curd — "wara soya", soya milk, textured vegetable protein) in place of meat.
3. **Combine proteins** — cereal + legume.
4. Include plenty of **fruits and vegetables**.
5. Use **vegetable oils**; avoid animal fats, meat stock, lard and gelatine.
6. Check **hidden animal products** — stock cubes, crayfish in soups.
7. Use **separate utensils and oil** from those used for meat.
8. Make meals attractive and varied.

## Sample menu (lacto-ovo-vegetarian)
- **breakfast:** akamu with milk; moin-moin (no fish); orange
- **lunch:** jollof rice with beans and vegetable salad; boiled egg; pawpaw
- **dinner:** yam with garden-egg and groundnut sauce; soya milk

## Suitable Nigerian dishes
moin-moin, akara, beans porridge, ewa agoyin (without fish), vegetable soups thickened with egusi or groundnut, fried plantain, tofu stew.`,
        examples: `**Example 1.** Who is a vegan? *Answer:* A **strict vegetarian** who eats **no animal product** at all.

**Example 2.** Why are beans served with rice for vegetarians? *Answer:* The two **complement each other's amino acids**, giving complete protein.

**Example 3.** Which vitamin is most likely to be lacking in a vegan diet? *Answer:* **Vitamin B₁₂**.`,
      },
      questions: [
        ["E", "A person who does not eat meat, poultry or fish is a", "vegetarian", "convalescent", "gourmet", "diabetic", "The diet is based on plant foods."],
        ["E", "A strict vegetarian who eats no animal product at all is a", "vegan", "lacto-vegetarian", "pescatarian", "ovo-vegetarian", "Milk, eggs and honey are also avoided."],
        ["E", "Which of these is a good protein food for vegetarians?", "Soya beans", "Beef", "Stockfish", "Chicken", "Legumes replace meat in the diet."],
        ["M", "A vegetarian who takes milk and milk products but no eggs is a", "lacto-vegetarian", "vegan", "ovo-vegetarian", "fruitarian", "Lacto refers to milk."],
        ["M", "A lacto-ovo-vegetarian may eat", "milk and eggs", "fish and eggs", "chicken and milk", "meat stock", "Only flesh foods are excluded."],
        ["M", "Which of these is a religious reason for vegetarianism?", "The teaching of one's faith forbids eating meat", "Meat is expensive", "Dislike of the taste of meat", "A doctor's advice", "Some faiths encourage or require a meatless diet."],
        ["M", "Serving cereals together with legumes in a vegetarian meal improves the", "quality of protein", "fat content", "cooking time", "colour only", "Their amino acids complement each other."],
        ["H", "The vitamin most likely to be deficient in a vegan diet is", "vitamin B₁₂", "vitamin C", "vitamin K", "folic acid", "It occurs naturally almost only in animal foods."],
        ["H", "In preparing vegetable soup for a vegan, the cook should leave out", "crayfish and meat stock", "pepper and onion", "palm oil", "leafy vegetables", "These are hidden animal products."],
        ["H", "Iron from plant foods is better absorbed when the meal also contains", "vitamin C", "tea", "calcium tablets", "extra fibre", "Fruit or fresh vegetables aid absorption of non-haem iron."],
      ],
    },
    {
      week: 4,
      title: "Special Menu: Pregnant and Lactating Women",
      subtopics: ["Nutritional needs of pregnant women", "Nutritional needs of lactating mothers", "Guidelines for planning meals", "Sample menus"],
      objectives: ["State the nutritional needs of pregnant women", "State the nutritional needs of lactating mothers", "Give guidelines for planning their meals", "Plan a day's menu for an expectant or nursing mother"],
      lesson: {
        title: "Feeding the Expectant and Nursing Mother",
        summary: "The extra nutrients needed in pregnancy and breastfeeding and how to supply them.",
        minutes: 40,
        notes: `## Why special care?
A **pregnant (expectant) woman** feeds herself and the growing **foetus**; a **lactating (nursing) mother** produces **breast milk**. Both need more nutrients — **quality rather than mere quantity**.

## Nutritional needs in pregnancy
| Nutrient | Why needed | Sources |
|---|---|---|
| **protein** | growth of the foetus, placenta and mother's tissues | meat, fish, eggs, milk, beans, soya |
| **iron** | extra blood; baby's iron store; prevents **anaemia** | liver, red meat, green leafy vegetables, beans |
| **folic acid** | prevents **neural-tube defects**; blood formation | green vegetables, liver, legumes, oranges |
| **calcium, phosphorus, vitamin D** | baby's bones and teeth; protect the mother's | milk, fish with bones, crayfish, sunlight |
| **iodine** | brain development; prevents goitre | iodised salt, sea foods |
| **vitamin C** | iron absorption; healthy tissues | fruits and vegetables |
| **vitamin A; B vitamins** | growth; energy release | palm oil, carrots, whole grains |
| **energy** | moderate increase, mainly later in pregnancy | cereals, tubers |
| **fibre and water** | prevent **constipation** | fruits, vegetables, fluids |

## Needs in lactation
Needs are **higher than in pregnancy** for **energy, protein, calcium, vitamins and fluids**, because of milk production. Plenty of **water, milk, pap (akamu), soups and fruit juices** help the milk flow.

## Guidelines for planning meals
1. Provide **balanced meals** from all food groups.
2. Emphasise **protein, iron, calcium and folic acid**.
3. Give **plenty of fruits and vegetables**.
4. Serve **small, frequent meals** — helpful for **morning sickness** and heartburn.
5. Give **plenty of fluids**.
6. Avoid **excess salt, sugar, fat and highly spiced foods**.
7. Avoid **alcohol, smoking, self-medication** and too much caffeine.
8. Avoid **raw or undercooked** meat, eggs and unpasteurised milk; observe strict hygiene.
9. Avoid **excessive weight gain**.
10. Disregard harmful **food taboos** (e.g. denying eggs or meat).
11. Take prescribed **iron and folic-acid supplements**; attend antenatal clinic.

## Problems related to poor diet
anaemia; low-birth-weight baby; miscarriage and stillbirth; difficult labour; poor milk supply; weak bones and teeth in the mother.

## Sample menu
- **breakfast:** akamu enriched with milk; moin-moin; orange
- **mid-morning:** fruit and groundnuts
- **lunch:** pounded yam with vegetable (ugu) soup, fish and liver; pawpaw
- **snack:** milk drink
- **dinner:** rice and beans with stew and chicken; banana
- water throughout the day`,
        examples: `**Example 1.** Why does a pregnant woman need extra iron? *Answer:* To form **extra blood** and the baby's iron store, preventing **anaemia**.

**Example 2.** Which nutrient prevents neural-tube defects? *Answer:* **Folic acid**.

**Example 3.** Why should a nursing mother take plenty of fluids? *Answer:* To **maintain the supply of breast milk**.`,
      },
      questions: [
        ["E", "A woman who is breastfeeding her baby is described as", "lactating", "convalescent", "sedentary", "adolescent", "She is producing breast milk."],
        ["E", "The mineral needed in pregnancy to prevent anaemia is", "iron", "sodium", "fluorine", "chlorine", "It is used to form haemoglobin."],
        ["E", "Calcium is needed in pregnancy mainly for the baby's", "bones and teeth", "eyesight", "hair colour", "skin", "It works with phosphorus and vitamin D."],
        ["M", "Folic acid is important in early pregnancy because it helps to prevent", "neural-tube defects", "rickets", "scurvy", "goitre", "It is needed for the developing brain and spine."],
        ["M", "Small, frequent meals are recommended for a pregnant woman suffering from", "morning sickness", "anaemia", "goitre", "night blindness", "Large meals worsen nausea and heartburn."],
        ["M", "Compared with a pregnant woman, a lactating mother needs", "more energy and fluids", "less protein", "no calcium", "fewer vitamins", "Milk production raises her needs."],
        ["M", "Constipation in pregnancy is prevented by eating plenty of", "fruits and vegetables with water", "sweets", "fried foods", "white bread only", "Fibre and fluid keep the bowels regular."],
        ["H", "Which of the following should a pregnant woman avoid?", "Alcohol", "Green vegetables", "Milk", "Beans", "It can harm the developing baby."],
        ["H", "A traditional taboo that forbids pregnant women from eating eggs is harmful because it", "deprives them of a good source of protein", "makes them gain weight", "increases their salt intake", "causes diabetes", "Eggs supply protein, iron and vitamins."],
        ["H", "Iodine is needed in pregnancy for the baby's", "brain development", "blood clotting", "bone hardness", "milk teeth only", "Deficiency may cause mental retardation and goitre."],
      ],
    },
    {
      week: 5,
      title: "Special Menu: Infants and Toddlers",
      subtopics: ["Characteristics affecting nutritional needs", "Breastfeeding and complementary feeding", "Guidelines for planning meals", "Suitable foods"],
      objectives: ["Describe the characteristics of infants and toddlers that affect their nutritional needs", "Explain breastfeeding and complementary feeding", "Give guidelines for planning their meals", "Suggest suitable dishes"],
      lesson: {
        title: "Feeding the Very Young",
        summary: "How rapid growth and small stomachs shape the feeding of babies and young children.",
        minutes: 40,
        notes: `## Who are they?
An **infant** is a child from **birth to one year**; a **toddler** is a child of about **one to three years**, learning to walk.

## Characteristics affecting their nutritional needs
- **very rapid growth** — birth weight doubles by about 5 months and trebles by one year: high need for **protein, energy, calcium, iron**
- **small stomach** — needs **small, frequent, nutrient-dense** meals
- **immature digestive system** — food must be **soft and easily digested**
- **no or few teeth** at first — liquid, then mashed, then chopped food
- **low resistance to infection** — strict **hygiene** is essential
- **developing bones, teeth and brain**
- toddlers are **very active** and **learning to feed themselves**; appetite varies; likes and dislikes form

## Infant feeding
### Breastfeeding
**Exclusive breastfeeding for the first six months** — breast milk only, not even water — then continued breastfeeding with other foods up to two years.
**Advantages of breast milk:** right nutrients in the right proportions; easily digested; **colostrum** (the first yellowish milk) is rich in **antibodies**; clean, at the right temperature and always ready; cheap; promotes **bonding**; helps the mother's womb to contract.

### Artificial (bottle) feeding
Infant formula used when breastfeeding is impossible; needs **correct mixing** and **sterilised** utensils. Dangers: infection and diarrhoea, over-dilution, cost. **Cup and spoon** are safer than bottles.

### Complementary feeding (weaning)
The **gradual introduction of other foods alongside breast milk from six months**.
- start with **enriched pap** (akamu with milk, soya, groundnut paste, crayfish or egg)
- then mashed fruits and vegetables, mashed beans, yam, potato, soft rice, fish, egg
- introduce **one new food at a time**
- move gradually to the **family diet** by about one year

## Guidelines for planning meals
1. Provide **body-building, energy-giving and protective foods** at each meal.
2. Give **small portions often** — three meals and two or three snacks.
3. Make food **soft, mashed or finely chopped**; remove bones and seeds.
4. Use **little salt, sugar and pepper**; avoid strong spices.
5. Avoid foods that can **choke** — whole groundnuts, hard sweets.
6. Make food **colourful and attractive**; use small, unbreakable plates.
7. Observe **strict hygiene**; serve food freshly cooked.
8. Give **milk, fruits and clean water** daily.
9. **Do not force** the child to eat; encourage self-feeding; keep regular mealtimes.
10. Limit sweets and fizzy drinks — they spoil appetite and teeth.

## Suitable dishes for toddlers
enriched pap; mashed yam or potato with fish stew; soft rice with beans and vegetables; moin-moin; egg custard; fruit purée; milk.

## Problems of poor feeding
**kwashiorkor** (protein deficiency), **marasmus** (general starvation), anaemia, rickets, diarrhoea, stunted growth.`,
        examples: `**Example 1.** What is exclusive breastfeeding? *Answer:* Giving the baby **breast milk only for the first six months**.

**Example 2.** Why should toddlers have small, frequent meals? *Answer:* Their **stomachs are small** but their needs are high.

**Example 3.** Name the first milk produced after birth and its value. *Answer:* **Colostrum** — rich in **antibodies**.`,
      },
      questions: [
        ["E", "A child from birth to one year of age is an", "infant", "adolescent", "invalid", "elder", "A toddler is about one to three years old."],
        ["E", "The best food for a newborn baby is", "breast milk", "pap", "glucose water", "tinned milk", "It supplies all the baby needs in the right proportions."],
        ["E", "Exclusive breastfeeding is recommended for the first", "six months", "two weeks", "two years", "twelve months", "Other foods are added after this."],
        ["M", "The first yellowish milk produced by the mother after birth is", "colostrum", "formula", "whey", "casein", "It is rich in antibodies."],
        ["M", "The gradual introduction of other foods alongside breast milk is", "complementary feeding", "exclusive feeding", "force feeding", "bottle feeding", "It is also called weaning."],
        ["M", "Toddlers should be given small, frequent meals because they have", "small stomachs", "many teeth", "slow growth", "no appetite", "They cannot take much at one time."],
        ["M", "Pap for a weaning child is best enriched with", "soya bean or milk", "extra water", "sugar only", "pepper", "This adds the protein that pap lacks."],
        ["H", "A disease of young children caused mainly by lack of protein is", "kwashiorkor", "goitre", "scurvy", "beriberi", "It often follows weaning onto starchy foods."],
        ["H", "Whole groundnuts should not be given to toddlers because they may", "cause choking", "cause anaemia", "contain too much water", "spoil the teeth", "Small hard foods can block the airway."],
        ["H", "The greatest danger of bottle feeding where hygiene is poor is", "diarrhoea from infection", "obesity", "excess vitamin intake", "early teething", "Unsterilised bottles carry germs."],
      ],
    },
    {
      week: 6,
      title: "Special Menu: Adolescents",
      subtopics: ["Characteristics of adolescents", "Nutritional requirements of adolescents", "Planning a day's menu for adolescents", "Eating habits and problems"],
      objectives: ["Describe the characteristics of adolescents", "State their nutritional requirements", "Plan a day's menu for adolescents", "Discuss adolescent eating problems"],
      lesson: {
        title: "Feeding the Teenager",
        summary: "The growth spurt, high activity and eating habits of adolescents and the meals they need.",
        minutes: 40,
        notes: `## Who is an adolescent?
An **adolescent** is a young person between **childhood and adulthood** — roughly **10 to 19 years** — passing through **puberty**.

## Characteristics
- **rapid growth (growth spurt)** in height and weight
- **sexual maturation**; menstruation begins in girls
- **very active** — school, games, chores
- **large appetite**
- concern about **appearance and body image**; influenced by **peers and advertising**
- growing **independence** — often eat away from home; fond of **snacks and fast foods**
- may **skip meals**, especially breakfast

## Nutritional requirements
| Nutrient | Why | Sources |
|---|---|---|
| **protein** | growth of muscles and tissues | meat, fish, eggs, milk, beans |
| **energy (carbohydrate and some fat)** | growth and activity | yam, rice, bread, garri, oils |
| **calcium, phosphorus, vitamin D** | bone growth — peak bone mass is built now | milk, fish with bones, vegetables |
| **iron** | increased blood volume; **menstrual losses in girls** | liver, meat, green vegetables, beans |
| **vitamins A, B group, C** | healthy skin, energy release, resistance | fruits, vegetables, whole grains |
| **iodine and zinc** | growth and development | iodised salt, sea foods, meat |
| **water and fibre** | digestion | fluids, fruits, vegetables |

Boys generally need **more energy and protein**; girls need **more iron**.

## Guidelines for planning
1. Provide **three balanced meals** and healthy snacks.
2. Never skip **breakfast**.
3. Serve **generous portions** of protein and energy foods.
4. Include **milk, fruits and vegetables** daily.
5. Limit **sweets, fizzy drinks, fried and salty snacks**.
6. Make meals **attractive and varied**.
7. Provide **packed lunches** for school.
8. Encourage **plenty of water**.

## A day's menu
- **breakfast:** bread with fried egg and tea with milk; orange
- **mid-morning snack:** banana and groundnuts
- **lunch:** jollof rice with fried fish, beans and coleslaw; watermelon
- **snack:** moin-moin or meat pie with fruit juice
- **dinner:** eba with egusi-vegetable soup and beef; pawpaw

## Eating problems
- **obesity** — too many snacks, little exercise
- **anaemia** — especially girls
- **crash dieting** and eating disorders (**anorexia nervosa**, **bulimia**)
- **acne** concerns
- **dental caries** from sweets
- skipping meals → poor concentration
- experimenting with **alcohol and drugs**`,
        examples: `**Example 1.** Why do adolescents need plenty of protein? *Answer:* For the **rapid growth** of tissues during the growth spurt.

**Example 2.** Why do adolescent girls need more iron than boys? *Answer:* To replace iron lost in **menstruation**.

**Example 3.** Give two poor eating habits of adolescents. *Answer:* **Skipping breakfast** and eating too many **sugary snacks**.`,
      },
      questions: [
        ["E", "A young person between childhood and adulthood is", "an adolescent", "an infant", "a toddler", "a convalescent", "The stage covers roughly ages 10 to 19."],
        ["E", "Adolescents need plenty of protein mainly because of their", "rapid growth", "poor appetite", "sedentary life", "weak teeth", "New tissues are being built."],
        ["E", "The meal that adolescents should never skip is", "breakfast", "the afternoon snack", "supper dessert", "the midnight snack", "It supplies energy for the school day."],
        ["M", "Adolescent girls need more iron than boys because of", "menstrual blood loss", "greater height", "more exercise", "larger appetite", "Iron must be replaced each month."],
        ["M", "Calcium is especially important in adolescence because", "bones are growing fast", "the eyes are developing", "the stomach is small", "hair is growing", "Peak bone mass is built in these years."],
        ["M", "Eating too many sweets and fizzy drinks may lead to", "tooth decay and obesity", "anaemia only", "goitre", "night blindness", "They are high in sugar and low in nutrients."],
        ["M", "Which snack is most suitable for an adolescent?", "Fruit and groundnuts", "Sweets", "Fizzy drink", "Fried dough only", "It supplies vitamins, protein and energy."],
        ["H", "An eating disorder in which a person refuses food for fear of becoming fat is", "anorexia nervosa", "kwashiorkor", "obesity", "pellagra", "It is linked with concern about body image."],
        ["H", "Compared with girls of the same age, adolescent boys generally need more", "energy and protein", "iron", "folic acid", "fibre only", "They have greater muscle mass and are often more active."],
        ["H", "Poor concentration in class among adolescents is most often linked with", "skipping meals", "eating vegetables", "drinking water", "eating fish", "The brain lacks a steady supply of energy."],
      ],
    },
    {
      week: 8,
      title: "Special Menu: The Aged and Elderly",
      subtopics: ["Who the aged are", "Nutritional requirements of the elderly", "Factors influencing appetite and eating habits", "Guidelines and sample menu"],
      objectives: ["Describe the characteristics of the aged", "State their nutritional requirements", "Discuss the factors that influence their appetite and eating habits", "Plan suitable meals for the elderly"],
      lesson: {
        title: "Feeding Older People",
        summary: "Lower energy needs but continuing need for nutrients, and the problems that affect eating in old age.",
        minutes: 40,
        notes: `## Who are the aged?
People of about **60–65 years and above**. Body processes slow down; activity is reduced.

## Characteristics
- **reduced physical activity** and slower metabolism — **less energy** needed
- **loss or weakness of teeth**; dentures — difficulty chewing
- **weaker digestion**; reduced digestive juices; **constipation**
- reduced senses of **taste and smell**; poor appetite
- **brittle bones** (osteoporosis); stiff joints
- more **illness** — hypertension, diabetes, arthritis
- reduced **income**; may **live alone**

## Nutritional requirements
| Nutrient | Note |
|---|---|
| **energy** | **reduced** — fewer starchy, fatty and sugary foods to avoid obesity |
| **protein** | still needed for **repair** — fish, eggs, milk, minced meat, beans |
| **calcium and vitamin D** | to slow bone loss — milk, small fish with bones, sunlight |
| **iron** | to prevent anaemia — liver, green vegetables |
| **vitamin C; B vitamins (B₁₂)** | healing, resistance, nerves — fruits, vegetables |
| **fibre** | to prevent constipation — fruits, vegetables, whole grains |
| **water** | sense of thirst declines — offer fluids often |
| **fat, salt, sugar** | **limited** |

## Factors influencing appetite and eating habits
| Factor | Effect |
|---|---|
| **dental problems** | hard, tough foods avoided |
| **reduced taste and smell** | food seems tasteless; appetite falls |
| **poor digestion** | heavy, fried, spicy foods cause discomfort |
| **ill health and medication** | restricted diets; drugs affect appetite |
| **loneliness, bereavement, depression** | little interest in cooking and eating |
| **low income** | cheaper, less nutritious foods chosen |
| **physical disability** | difficulty shopping and cooking |
| **lifelong habits, culture and religion** | fixed likes and dislikes |
| **reduced activity** | smaller appetite |

## Guidelines for planning meals
1. Serve **small, attractive, regular meals**.
2. Make food **soft and easy to chew** — minced, mashed, stewed, steamed.
3. Choose **easily digested** foods; avoid heavy frying and strong spices.
4. Provide **adequate protein**, **fruits and vegetables**.
5. **Reduce salt, sugar and fat**.
6. Give **plenty of fluids** — water, soups, fruit drinks.
7. Respect **likes and habits**; serve familiar dishes.
8. Serve food **warm**; a light supper early in the evening.
9. Take account of any **medical condition**.
10. Encourage **company** at meals.

## Sample menu
- **breakfast:** oatmeal or akamu with milk; moin-moin; pawpaw
- **lunch:** amala with ewedu and fish stew; orange
- **supper:** yam pottage with vegetables and minced meat; warm milk drink`,
        examples: `**Example 1.** Why do the elderly need less energy? *Answer:* They are **less active** and their metabolism is slower.

**Example 2.** How should meat be prepared for an elderly person with few teeth? *Answer:* **Minced or stewed until soft**.

**Example 3.** Give two factors that reduce appetite in old age. *Answer:* **Loss of taste and smell** and **loneliness**.`,
      },
      questions: [
        ["E", "The aged need less energy food because they are", "less active", "still growing", "very active", "producing milk", "Metabolism and activity slow with age."],
        ["E", "Food for an elderly person with few teeth should be", "soft and easy to chew", "tough and dry", "highly spiced", "served cold and hard", "Chewing is difficult."],
        ["E", "Constipation in the elderly is relieved by foods rich in", "fibre", "fat", "salt", "sugar", "Fruits, vegetables and fluids help."],
        ["M", "Calcium and vitamin D are important for the elderly to slow down", "bone loss", "hair loss", "weight gain", "loss of taste", "Bones become brittle with age."],
        ["M", "Which of these reduces the appetite of an elderly person?", "Reduced sense of taste and smell", "Regular company at meals", "Attractive food", "Good dentures", "Food seems less appealing."],
        ["M", "The best method of cooking fish for an elderly person is", "steaming", "deep frying", "roasting until hard", "smoking", "It keeps the fish soft and easily digested."],
        ["M", "An elderly person living alone may eat poorly mainly because of", "loneliness and lack of interest in cooking", "too much exercise", "rapid growth", "excess income", "Social factors affect eating habits."],
        ["H", "Which of the following should be reduced in meals for the aged?", "Salt and fat", "Fruits", "Water", "Vegetables", "They are linked with hypertension and heart disease."],
        ["H", "The elderly should be offered fluids regularly because their", "sense of thirst declines", "kidneys stop working", "stomachs are large", "teeth are weak", "They may become dehydrated without feeling thirsty."],
        ["H", "Although energy needs fall in old age, protein is still required for", "repair of body tissues", "rapid growth", "milk production", "building baby's bones", "Worn-out cells must be replaced."],
      ],
    },
    {
      week: 9,
      title: "Special Menu: Manual and Sedentary Workers",
      subtopics: ["Meaning of manual and sedentary workers", "Differences in nutritional needs", "Suitable dishes for each group", "Packed meals"],
      objectives: ["Distinguish manual from sedentary workers", "Compare their nutritional needs", "Suggest suitable dishes for each group", "Plan packed meals for workers"],
      lesson: {
        title: "Feeding People by the Work They Do",
        summary: "How the energy spent at work decides the kind and amount of food needed.",
        minutes: 40,
        notes: `## Meaning
- A **manual worker** does **heavy physical work** using the muscles: farmers, bricklayers, labourers, carpenters, miners, load carriers, mechanics, athletes.
- A **sedentary worker** does **light work, mostly sitting**: clerks, typists, teachers, bankers, drivers, tailors, receptionists, computer operators.

## Differences
| | Manual worker | Sedentary worker |
|---|---|---|
| **activity** | heavy muscular work | little physical effort |
| **energy need** | **high** | **low to moderate** |
| **carbohydrate and fat** | generous amounts | limited |
| **protein** | higher — repair of muscles | normal |
| **B vitamins** | more — to release energy | normal |
| **water and salt** | more — lost in **sweat** | normal |
| **meal size** | large, **bulky**, satisfying | **light**, easily digested |
| **risk of poor diet** | fatigue, weight loss | **obesity**, constipation |

## Planning for manual workers
1. Supply **plenty of energy foods** — yam, garri, rice, fufu, bread, beans.
2. Give **adequate protein** — meat, fish, beans.
3. Include some **fat** — a concentrated energy source.
4. Give **plenty of water** and adequate **salt**.
5. Serve a **substantial breakfast**; provide **mid-day meals and snacks**.
6. Include fruits and vegetables.

**Suitable dishes:** pounded yam with egusi soup and meat; eba or fufu with okro soup; beans and fried plantain; rice and stew with beef; yam pottage; bread and beans; kunu or zobo.

## Planning for sedentary workers
1. **Reduce energy-dense foods** — less starch, fat and sugar.
2. Give **adequate protein, vitamins and minerals**.
3. Serve **plenty of fruits and vegetables** for fibre.
4. Choose **light, easily digested** dishes; **grill, boil, steam** rather than fry.
5. Avoid heavy mid-day meals that cause drowsiness.
6. Encourage water and **exercise**.

**Suitable dishes:** vegetable salad with fish; boiled plantain with vegetable sauce; small portion of rice with chicken and vegetables; moin-moin with pap; fruit salad; sandwiches.

## Packed meals
A **packed meal** is one prepared at home and carried to work or school.
**Points:** balanced; easy to carry and eat; not messy; keeps well without refrigeration; packed in **clean, covered containers**; includes a **drink and fruit**. Examples: jollof rice with fish and salad; sandwiches with egg; moin-moin with bread; fruit and water.

## Catering for workers
**Industrial (staff) canteens** provide cheap, nourishing meals at the workplace — improving health, output and morale.`,
        examples: `**Example 1.** Give two examples of sedentary workers. *Answer:* A **clerk** and a **typist**.

**Example 2.** Why does a farmer need more carbohydrate than a banker? *Answer:* The farmer **uses more energy** in heavy physical work.

**Example 3.** State two qualities of a good packed meal. *Answer:* **Balanced** and **easy to carry and eat**.`,
      },
      questions: [
        ["E", "A person whose job involves heavy physical work is a", "manual worker", "sedentary worker", "convalescent", "vegetarian", "The muscles do much work."],
        ["E", "Which of these is a sedentary worker?", "A typist", "A bricklayer", "A farmer", "A load carrier", "The work is done mostly sitting."],
        ["E", "Manual workers need large amounts of", "energy-giving foods", "fizzy drinks", "sweets", "spices", "Heavy work uses much energy."],
        ["M", "Manual workers need more water and salt because they", "lose them in sweat", "sit for long hours", "eat little", "sleep longer", "Sweating removes both."],
        ["M", "A suitable mid-day meal for a sedentary worker is", "vegetable salad with fish", "pounded yam with oily soup and much meat", "three wraps of fufu", "fried yam and fried pork", "It is light and low in energy."],
        ["M", "A sedentary worker who eats like a manual worker is likely to become", "obese", "anaemic", "dehydrated", "underweight", "Unused energy is stored as fat."],
        ["M", "A meal prepared at home and carried to work is a", "packed meal", "buffet", "banquet", "table d'hôte", "It should be balanced and easy to eat."],
        ["H", "The vitamins needed in greater amounts by manual workers for releasing energy are", "B vitamins", "vitamin K", "vitamin D", "vitamin A", "Thiamine, riboflavin and niacin act in energy release."],
        ["H", "A heavy starchy lunch is unsuitable for an office worker mainly because it", "causes drowsiness and excess weight", "lacks energy", "is too expensive", "contains too much protein", "Digestion of a heavy meal reduces alertness."],
        ["H", "Staff canteens are provided in factories mainly to", "improve workers' health and output", "increase working hours", "reduce wages", "replace breakfast at home", "Well-fed workers are more productive."],
      ],
    },
    {
      week: 10,
      title: "Special Menu: Diabetic and Hypertensive Patients",
      subtopics: ["Meaning of diabetes and hypertension", "Causes and signs", "Guidelines for planning meals for diabetics", "Guidelines for planning meals for hypertensive patients"],
      objectives: ["Explain diabetes and hypertension", "State the dietary principles for diabetic patients", "State the dietary principles for hypertensive patients", "Plan suitable meals for each"],
      lesson: {
        title: "Therapeutic Diets: Diabetes and Hypertension",
        summary: "Two common conditions controlled largely by diet, and the meals suited to them.",
        minutes: 40,
        notes: `## Diabetes mellitus
A condition in which the **blood sugar (glucose) level is too high** because the body **does not produce enough insulin** or cannot use it properly. **Insulin**, a hormone from the **pancreas**, controls blood sugar.

**Signs:** excessive thirst; frequent urination; sugar in the urine; tiredness; loss of weight; slow healing of wounds; blurred vision.
**Risk factors:** heredity; obesity; lack of exercise; age; excess sugar and refined foods.

### Guidelines for diabetic meals
1. **Avoid sugar and sugary foods** — sweets, soft drinks, cakes, honey, sweetened tea.
2. Choose **unrefined, high-fibre carbohydrates** in **controlled portions** — unripe plantain, beans, whole-grain cereals, wheat meal, brown rice.
3. Eat **regular meals at fixed times**; never skip meals — to avoid swings in blood sugar.
4. Give **plenty of non-starchy vegetables**.
5. Provide **lean protein** — fish, skinless chicken, beans, eggs.
6. **Limit fat**, especially animal fat; avoid frying.
7. Take **fruits in moderation**, whole rather than as juice.
8. Avoid **alcohol**; drink water.
9. Maintain a **healthy weight**; exercise.
10. Follow the doctor's and **dietitian's** instructions.

**Suitable dishes:** unripe plantain porridge with vegetables and fish; beans with vegetable sauce; wheat or unripe-plantain meal with okro or vegetable soup; vegetable salad; moin-moin.

## Hypertension
**Persistently high blood pressure** — the force of blood against the artery walls is too high. Often called the **"silent killer"**.

**Signs:** often none; headache, dizziness, palpitations.
**Risk factors:** **excess salt**; obesity; stress; heredity; alcohol; smoking; lack of exercise; age.
**Complications:** stroke, heart failure, kidney damage.

### Guidelines for hypertensive meals
1. **Reduce salt (sodium)** — cook with little; add none at table.
2. Avoid **salty foods** — stock cubes, salted or smoked fish, tinned and processed foods, salted snacks.
3. **Reduce fat**, especially saturated fat and cholesterol — fatty meat, butter, fried foods.
4. Eat **plenty of fruits and vegetables** (rich in **potassium**).
5. Use **boiling, steaming, grilling, baking** rather than frying.
6. Choose **fish, skinless poultry and legumes**.
7. Flavour with **herbs, onion, garlic and ginger** instead of salt.
8. Avoid **alcohol** and smoking; limit strong coffee.
9. **Reduce weight** if overweight; exercise; rest.

**Suitable dishes:** boiled yam with garden-egg sauce (little salt); steamed fish with vegetables; fruit salad; beans; unsalted vegetable soups.

## Similarities
Both diets are **low in fat**, rich in **vegetables and fibre**, stress **weight control**, and need **medical supervision**. A diet prescribed to treat a condition is a **therapeutic diet**.`,
        examples: `**Example 1.** Which hormone controls the level of sugar in the blood? *Answer:* **Insulin**.

**Example 2.** What should be reduced in the diet of a hypertensive patient? *Answer:* **Salt** (and fat).

**Example 3.** Suggest a suitable staple for a diabetic patient. *Answer:* **Unripe plantain** or beans.`,
      },
      questions: [
        ["E", "A condition in which the blood sugar level is too high is", "diabetes", "hypertension", "anaemia", "goitre", "The body lacks or cannot use insulin."],
        ["E", "Persistently high blood pressure is called", "hypertension", "diabetes", "kwashiorkor", "obesity", "It is often called the silent killer."],
        ["E", "A hypertensive patient should reduce the intake of", "salt", "water", "fruits", "vegetables", "Sodium raises blood pressure."],
        ["M", "The hormone that controls blood sugar is produced by the", "pancreas", "liver", "kidney", "thyroid", "It produces insulin."],
        ["M", "Which food should a diabetic patient avoid?", "Sweetened soft drinks", "Beans", "Green vegetables", "Unripe plantain", "They raise blood sugar quickly."],
        ["M", "A suitable staple for a diabetic patient is", "unripe plantain", "white sugar bread", "cake", "sweet biscuits", "It is high in fibre and releases sugar slowly."],
        ["M", "A suitable method of cooking for a hypertensive patient is", "steaming", "deep frying", "frying in butter", "salting and smoking", "It needs no added fat."],
        ["H", "Diabetic patients are advised to eat at regular times in order to", "keep the blood sugar level steady", "increase their weight", "reduce protein intake", "raise blood pressure", "Skipped meals cause swings in blood sugar."],
        ["H", "Which seasoning should be avoided in meals for a hypertensive patient?", "Stock cubes", "Fresh onion", "Garlic", "Ginger", "They contain much sodium."],
        ["H", "A diet prescribed to treat or control a disease is a", "therapeutic diet", "table d'hôte", "cyclic menu", "vegan diet", "It is planned with medical advice."],
      ],
    },
    {
      week: 11,
      title: "Special Menu: Invalids and Convalescents",
      subtopics: ["Meaning of invalid and convalescent", "Types of diet for the sick", "Guidelines for planning and serving meals", "Sample menus"],
      objectives: ["Distinguish an invalid from a convalescent", "Describe the types of diet for the sick", "Give guidelines for planning and serving their meals", "Plan sample menus"],
      lesson: {
        title: "Feeding the Sick and the Recovering",
        summary: "Light, nourishing, carefully served meals for people who are ill or getting better.",
        minutes: 40,
        notes: `## Meaning
- An **invalid** is a person who is **ill or weak through sickness or injury** and usually confined to bed.
- A **convalescent** is a person who is **recovering from an illness** and regaining strength.

## Characteristics
poor appetite; weak digestion; little activity; body tissues need **repair**; low resistance; may be feverish and losing fluids.

## Types of diet
| Diet | Description | Examples |
|---|---|---|
| **liquid (fluid) diet** | for the very ill, feverish, or after surgery | water, fruit juice, clear soup, pap, milk, tea, glucose drinks |
| **soft (light) diet** | easily chewed and digested; as the patient improves | custard, soft-boiled egg, steamed fish, mashed potato, soft rice, moin-moin |
| **full (normal) diet** | for convalescents nearly well | ordinary balanced meals, lightly cooked |
| **special (therapeutic) diet** | prescribed for a disease | low-salt, low-sugar, low-fat, high-protein |

## Nutritional needs
- **protein** — repair of tissues: fish, eggs, milk, chicken
- **vitamins and minerals** — especially **vitamin C** for healing and **iron** for blood
- **fluids** — replace losses from fever, vomiting, diarrhoea
- **energy** — moderate; in easily digested form (glucose, pap)
- little fat; little roughage for the very ill

## Guidelines for planning meals
1. **Follow the doctor's instructions**.
2. Choose **light, nourishing, easily digested** foods.
3. Use **steaming, boiling, poaching, stewing, baking**; **avoid frying**.
4. Avoid **strong spices, pepper, rich and greasy foods**.
5. Use **fresh foods** of the best quality; **no reheated leftovers**.
6. Give **plenty of fluids**.
7. Give **variety** and consider the patient's **likes**.

## Guidelines for serving
1. Serve **small portions**, **attractively**, on a clean **tray** with a tray cloth.
2. Serve **punctually**; hot food hot and cold food cold.
3. Observe **strict hygiene** — clean hands, utensils and covered food.
4. Do **not ask** the patient what they want too far ahead or cook where smells reach them.
5. **Remove the tray** promptly after the meal; never leave food at the bedside.
6. Help the patient to sit up; be cheerful and patient.
7. Keep the patient's utensils **separate** in infectious illness.

## Sample menus
**Invalid (soft diet):** breakfast — pap with milk, soft-boiled egg; lunch — steamed fish with mashed potato and carrot, orange juice; supper — chicken broth with soft bread, custard.

**Convalescent:** breakfast — oatmeal with milk, scrambled egg, pawpaw; lunch — boiled rice with chicken stew and steamed vegetables, fruit salad; supper — yam with fish sauce, milk drink.

## Suitable dishes
beef tea and broths; egg custard; steamed fish; chicken pepper soup (mild); fruit jelly; barley water; milk puddings.`,
        examples: `**Example 1.** Who is a convalescent? *Answer:* A person **recovering from illness** and regaining strength.

**Example 2.** Why is frying unsuitable for invalid cookery? *Answer:* Fried foods are **greasy and hard to digest**.

**Example 3.** Give two points on serving food to an invalid. *Answer:* Serve **small, attractive portions** and **remove the tray promptly**.`,
      },
      questions: [
        ["E", "A person recovering from an illness is a", "convalescent", "vegan", "toddler", "manual worker", "Strength is being regained."],
        ["E", "A person who is ill and confined to bed is an", "invalid", "adolescent", "athlete", "infant", "Such a person needs light, nourishing food."],
        ["E", "The method of cooking least suitable for invalids is", "frying", "steaming", "boiling", "poaching", "Fried foods are greasy and hard to digest."],
        ["M", "A very ill patient with fever is best given a", "liquid diet", "full diet", "heavy starchy diet", "fried diet", "Fluids are easily taken and replace losses."],
        ["M", "Protein is important in the diet of a convalescent for", "repair of body tissues", "providing roughage", "cooling the body", "flavour", "Illness breaks down tissue that must be rebuilt."],
        ["M", "Food for an invalid should be served in", "small, attractive portions", "large bulky portions", "one big bowl for the day", "unwashed dishes", "The appetite is poor and easily put off."],
        ["M", "Which of these is suitable for a soft diet?", "Egg custard", "Roasted corn", "Fried meat", "Chin-chin", "It is easily chewed and digested."],
        ["H", "Leftover food should not be reheated for invalids mainly because", "it may carry germs and has lost nutrients", "it is too cheap", "it is too attractive", "it contains too much protein", "The sick have low resistance to infection."],
        ["H", "The vitamin that particularly aids the healing of wounds is", "vitamin C", "vitamin K only", "vitamin B₁₂", "vitamin D", "It is needed to form connective tissue."],
        ["H", "After an invalid has finished eating, the tray should be", "removed promptly", "left by the bedside", "covered and kept for the next meal", "placed under the bed", "Stale food at the bedside is unhygienic and unappetising."],
      ],
    },
  ],
};
