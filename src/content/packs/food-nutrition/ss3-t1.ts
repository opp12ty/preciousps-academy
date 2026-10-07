import type { TermPlan } from "../types";

/** SS3 Food and Nutrition, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Beverages",
      subtopics: ["Meaning of beverages", "Classification: alcoholic and non-alcoholic", "Nutritive value of beverages", "Characteristics of alcoholic and non-alcoholic beverages"],
      objectives: ["Explain the term beverages", "Classify beverages with examples", "Discuss the nutritive value of beverages", "Highlight the characteristics of alcoholic and non-alcoholic beverages"],
      lesson: {
        title: "Drinks and Their Value",
        summary: "What beverages are, how they are grouped, and what they contribute to the diet.",
        minutes: 40,
        notes: `## Meaning
A **beverage** is **any liquid, other than plain water, that is prepared for drinking** — to quench thirst, refresh, stimulate or nourish.

## Classification
| Class | Meaning | Examples |
|---|---|---|
| **alcoholic** | contain **ethanol** produced by fermentation or distillation | beer, stout, wine, palm wine, *burukutu*, *pito*, spirits (gin, whisky, brandy, *ogogoro*) |
| **non-alcoholic** | contain no alcohol | tea, coffee, cocoa, fruit juices, soft drinks, milk drinks, *zobo*, *kunu*, soya milk |

### Groups of alcoholic beverages
- **fermented:** beer (from cereals), wine (from grapes or other fruits), palm wine
- **distilled (spirits):** gin, whisky, brandy, rum, vodka — much higher alcohol content
- **fortified wines and liqueurs:** sherry, port

## Nutritive value
| Beverage | Nutrients |
|---|---|
| **milk and milk drinks** | protein, calcium, fat, vitamins A, B and D |
| **cocoa drinks** | energy, some protein, iron (more when made with milk) |
| **fruit juices** | vitamin C, natural sugars, minerals, water |
| **egg flip / egg nog** | protein, fat, vitamins |
| **soya milk; kunu** | protein; carbohydrate |
| **tea and coffee** | almost no nutrients alone; value comes from added milk and sugar |
| **soft drinks** | sugar (energy) and water; few other nutrients |
| **alcoholic drinks** | energy ("empty calories"); palm wine and some beers contain B vitamins and yeast |

All beverages supply **water**, which regulates body temperature, aids digestion and removes waste.

## Characteristics
### Non-alcoholic
- do not intoxicate; **suitable for all ages**
- may be **refreshing** (juices, soft drinks), **stimulating** (tea, coffee — contain caffeine) or **nourishing** (milk, cocoa)
- served hot or cold
- many are easily prepared at home

### Alcoholic
- contain ethanol; **intoxicate** when taken in excess
- **stimulate appetite** in small amounts (aperitifs); depress the nervous system
- not suitable for children, pregnant women, drivers
- habit-forming; excess damages the **liver**, brain and stomach and impairs judgement
- forbidden by some religions
- used in cooking for flavour (wine in sauces, fruit cakes)

## Uses of beverages
quench thirst; refresh; provide nutrients and energy; stimulate; aid digestion; for hospitality and entertainment; for invalids and convalescents (nourishing liquid feeds).

## Points in serving beverages
serve **hot drinks hot and cold drinks chilled**; use clean, suitable cups or glasses; do not overfill; serve attractively with appropriate accompaniments.`,
        examples: `**Example 1.** Define a beverage. *Answer:* **Any liquid other than plain water prepared for drinking**.

**Example 2.** Classify palm wine, zobo and whisky. *Answer:* Palm wine and whisky — **alcoholic**; zobo — **non-alcoholic**.

**Example 3.** Which nutrients does milk supply? *Answer:* **Protein, calcium, fat and vitamins A, B and D**.`,
      },
      questions: [
        ["E", "Any liquid other than plain water that is prepared for drinking is a", "beverage", "sauce", "stock", "gravy", "Beverages refresh, stimulate or nourish."],
        ["E", "Which of these is an alcoholic beverage?", "Palm wine", "Zobo", "Kunu", "Cocoa", "It ferments naturally and contains alcohol."],
        ["E", "Fruit juices are valued chiefly for", "vitamin C", "protein", "fat", "calcium", "Fresh fruits are rich in ascorbic acid."],
        ["M", "The substance in alcoholic drinks that causes intoxication is", "ethanol", "caffeine", "tannin", "lactose", "It is produced by fermentation."],
        ["M", "Gin and whisky are produced by", "distillation", "pasteurisation", "infusion", "homogenisation", "Spirits are distilled after fermentation."],
        ["M", "Tea and coffee taken without milk or sugar provide", "hardly any nutrients", "much protein", "much fat", "much calcium", "They are stimulants rather than foods."],
        ["M", "A nourishing beverage is", "a milk drink", "black coffee", "soda water", "plain tea", "Milk supplies protein, calcium and vitamins."],
        ["H", "Excessive intake of alcohol over time most seriously damages the", "liver", "hair", "nails", "skin colour", "It may lead to cirrhosis."],
        ["H", "The energy supplied by alcohol is described as 'empty calories' because it", "comes with few or no nutrients", "is very low", "is stored as protein", "builds bones", "Alcohol gives energy without body-building or protective nutrients."],
        ["H", "Which of these beverages is both stimulating and, when made with milk, nourishing?", "Cocoa drink", "Soda water", "Lemonade", "Ginger ale", "Cocoa contains a mild stimulant and milk adds nutrients."],
      ],
    },
    {
      week: 2,
      title: "Non-Alcoholic Beverages",
      subtopics: ["Classes of non-alcoholic beverages", "Stimulating beverages", "Refreshing beverages", "Nourishing beverages and their preparation"],
      objectives: ["Classify non-alcoholic beverages", "Describe stimulating beverages and their preparation", "Describe refreshing beverages", "Describe nourishing beverages with examples"],
      lesson: {
        title: "Tea, Coffee, Cocoa, Juices and Milk Drinks",
        summary: "The three classes of non-alcoholic drinks and the rules for making them well.",
        minutes: 40,
        notes: `## Classes
| Class | Purpose | Examples |
|---|---|---|
| **stimulating** | refresh the mind and relieve tiredness; contain **caffeine** or similar substances | tea, coffee, cocoa, kola drinks |
| **refreshing** | quench thirst and cool the body | fruit juices and drinks, squashes, soft (carbonated) drinks, *zobo*, lemonade, coconut water, flavoured water |
| **nourishing** | supply nutrients | milk, milk shakes, egg flip, cocoa and malted drinks made with milk, soya milk, *kunu*, pap, smoothies, yoghurt drinks |

## Stimulating beverages
### Tea
Made from the dried leaves of the tea plant. Contains **caffeine (theine)**, a stimulant, and **tannin**, which gives a bitter taste if tea is brewed too long. Types: black, green, herbal.
**Rules for making tea:** use freshly **boiling** water; warm the pot; allow **3–5 minutes** to infuse; do not stew; serve at once with milk, lemon or sugar to taste.

### Coffee
Made from roasted, ground coffee beans. Contains **caffeine** and tannin. Forms: ground, instant, decaffeinated.
**Rules:** use fresh coffee; water just **off the boil**; do not boil the coffee; serve hot — black or with hot milk or cream.

### Cocoa
From roasted cocoa beans. Contains **theobromine** (a mild stimulant), fat, starch and some protein and iron. Chocolate drinks have sugar and milk solids added.
**Method:** blend the powder to a smooth paste with a little cold liquid; add hot milk or water, stirring; sweeten.

## Refreshing beverages
- **fresh fruit juice** — the liquid pressed from fruit; rich in vitamin C; drink soon after extraction, as vitamin C is lost on standing
- **fruit drinks and squashes** — juice with water and sugar; squashes are diluted before drinking
- **carbonated soft drinks** — water, sugar, flavour, carbon dioxide
- ***zobo*** (from hibiscus calyces), ginger drink, tamarind drink, lemonade
- **syrups and cordials**

**Making fruit juice:** wash the fruit; peel if necessary; squeeze or blend; strain; chill; sweeten only if needed.

## Nourishing beverages
- **milk** — fresh, evaporated, powdered; **milk shake** (milk blended with flavouring or ice cream)
- **egg flip (egg nog)** — beaten egg, warm milk, sugar and flavouring; good for invalids
- **cocoa or malted food drinks with milk**
- **soya milk; tiger-nut milk (*kunun aya*)**
- ***kunu*** (millet, sorghum or maize drink); **pap** (*ogi*, *akamu*)
- **smoothies** — blended fruit with milk or yoghurt
- **barley water; oat drinks**

## General rules for preparing beverages
1. Use **clean water** and utensils.
2. Use **fresh ingredients** and correct proportions.
3. Hot drinks should be served **very hot**; cold drinks **well chilled**.
4. Do not prepare too far ahead; flavour and vitamins are lost.
5. Strain where necessary; serve attractively.

## Health notes
too much **caffeine** causes sleeplessness and nervousness; tannin taken with meals hinders **iron absorption**; sugary drinks cause **tooth decay** and weight gain.`,
        examples: `**Example 1.** Classify egg flip, zobo and coffee. *Answer:* Egg flip — **nourishing**; zobo — **refreshing**; coffee — **stimulating**.

**Example 2.** Name the stimulant in tea and coffee. *Answer:* **Caffeine**.

**Example 3.** Why should fruit juice be served soon after it is made? *Answer:* **Vitamin C is lost** on standing and exposure to air.`,
      },
      questions: [
        ["E", "Tea and coffee are classified as", "stimulating beverages", "nourishing beverages", "alcoholic beverages", "refreshing beverages only", "They contain caffeine."],
        ["E", "Zobo drink is made from", "hibiscus calyces", "millet", "soya beans", "tiger nuts", "The dried red calyces are boiled and strained."],
        ["E", "A beverage made from beaten egg, milk and sugar is", "egg flip", "squash", "cordial", "lemonade", "It is a nourishing drink."],
        ["M", "The stimulant found in tea and coffee is", "caffeine", "casein", "carotene", "cellulose", "It relieves tiredness."],
        ["M", "Tea becomes bitter when left to brew for too long because of", "tannin", "sucrose", "lactose", "vitamin C", "Tannin is extracted on prolonged infusion."],
        ["M", "Which of these is a nourishing beverage?", "Soya milk", "Soda water", "Black tea", "Lemon squash", "It supplies protein."],
        ["M", "In making cocoa, the powder is first", "blended to a smooth paste with a little cold liquid", "boiled dry", "fried in oil", "sieved into boiling fat", "This prevents lumps."],
        ["H", "The mild stimulant present in cocoa is", "theobromine", "tannin", "pectin", "rennin", "It is related to caffeine."],
        ["H", "Drinking strong tea with meals is discouraged because tannin", "reduces the absorption of iron", "destroys protein", "adds too much fat", "increases vitamin C", "It binds iron in the gut."],
        ["H", "A fruit squash differs from fresh fruit juice in that squash", "must be diluted before drinking", "contains no sugar", "is alcoholic", "is always served hot", "It is a concentrated, sweetened fruit drink."],
      ],
    },
    {
      week: 3,
      title: "Special Diet",
      subtopics: ["Meaning of special diet", "Types of vegetarian diet", "Overweight and underweight diets", "Diets for illness: HIV/AIDS, fever, diarrhoea, diabetes and ulcer"],
      objectives: ["Explain the term special diet", "Explain the types of vegetarian diet", "Differentiate between diets for the overweight and the underweight", "Discuss diets for persons with common illnesses"],
      lesson: {
        title: "Diets for Particular Needs",
        summary: "Meals planned for people whose beliefs, weight or health call for something different from the ordinary diet.",
        minutes: 40,
        notes: `## Meaning
A **special diet** is a **diet modified to meet the particular needs of an individual** — because of beliefs, age, body weight or a medical condition. A diet prescribed to treat disease is a **therapeutic diet**.

## Vegetarian diets
A **vegetarian** does not eat the flesh of animals — for religious, ethical, health or economic reasons.
| Type | Excludes | Includes |
|---|---|---|
| **strict vegetarian / vegan** | all animal foods — meat, fish, eggs, milk, honey | plant foods only |
| **lacto-vegetarian** | meat, fish, eggs | plant foods + **milk and milk products** |
| **ovo-vegetarian** | meat, fish, milk | plant foods + **eggs** |
| **lacto-ovo-vegetarian** | meat and fish | plant foods + **milk and eggs** |
| **pescatarian** | meat and poultry | plant foods + **fish** |
| **pollotarian** | red meat and fish | plant foods + **poultry** |
| **flexitarian** | mostly plant foods | meat or fish **occasionally** |

**Planning points:** combine **cereals with legumes** (rice and beans) to obtain complete protein; use soya, nuts and seeds; watch **iron, calcium, vitamin B12** (found only in animal foods — vegans need fortified foods or supplements) and vitamin D.

## Overweight and underweight
| | Overweight (obese) | Underweight |
|---|---|---|
| **cause** | energy intake **exceeds** energy used | intake **below** needs; illness |
| **aim** | **reduce** energy | **increase** energy and protein |
| **diet** | fewer fats, oils, sugar and refined starch; grill, boil or steam instead of frying; plenty of vegetables, fruits and fibre; lean protein; small portions; water | energy-dense foods; extra fats and carbohydrate; milk, eggs, legumes; frequent meals and snacks |
| **also** | regular exercise; no "crash" diets | treat underlying illness; rest |
Obesity raises the risk of **diabetes, hypertension and heart disease**.

## Diets in illness
| Condition | Diet |
|---|---|
| **HIV/AIDS** | high **protein** and **energy** to prevent wasting; plenty of fruits and vegetables for vitamins and minerals; clean, well-cooked food and safe water; small frequent meals; avoid alcohol |
| **fever and infection** | plenty of **fluids**; light, easily digested, nourishing foods; extra energy and protein; vitamin C; small frequent feeds |
| **diarrhoea** | **oral rehydration solution** (salt–sugar solution) and fluids; bland, low-fibre foods — pap, rice water, bananas; avoid fatty, spicy and very fibrous foods; continue feeding |
| **diabetes** | control **sugar and refined carbohydrate**; regular meals; unripe plantain, beans, whole grains and vegetables (high fibre); limited fat; fruits in moderation; no sweets or sugary drinks |
| **peptic ulcer** | small, **regular** meals — never go long without food; **bland** foods; avoid pepper and spices, alcohol, strong tea and coffee, fried and acidic foods; milk and soft foods are soothing |
| **hypertension** | **low salt**; less fat; more fruits and vegetables; no alcohol |
| **anaemia** | iron-rich foods — liver, meat, green leaves, beans — with vitamin C |
| **constipation** | high fibre and fluids |

## General rules for special diets
follow medical advice; keep the diet **balanced** within its limits; vary the menu; serve attractively in small portions; strict **hygiene**.`,
        examples: `**Example 1.** Which type of vegetarian eats eggs and milk but no meat or fish? *Answer:* A **lacto-ovo-vegetarian**.

**Example 2.** Give two features of a diet for a diabetic. *Answer:* **Little sugar and refined starch**; **high fibre** with regular meals.

**Example 3.** What should a person with diarrhoea be given first? *Answer:* **Oral rehydration solution** and plenty of fluids.`,
      },
      questions: [
        ["E", "A person who eats no food of animal origin at all is a", "vegan", "pescatarian", "flexitarian", "pollotarian", "Strict vegetarians eat plant foods only."],
        ["E", "A diet modified to meet the particular needs of an individual is a", "special diet", "buffet", "snack", "table d'hôte", "It may be for health, belief or body weight."],
        ["E", "A diabetic patient should avoid", "sweets and sugary drinks", "green vegetables", "beans", "water", "They raise the blood sugar rapidly."],
        ["M", "A lacto-vegetarian diet includes plant foods and", "milk and milk products", "eggs only", "fish", "poultry", "Lacto refers to milk."],
        ["M", "A vegetarian who also eats fish is a", "pescatarian", "vegan", "lacto-vegetarian", "ovo-vegetarian", "Fish is added to a plant-based diet."],
        ["M", "The diet for an overweight person should be low in", "fats and sugar", "vegetables", "water", "fibre", "These are concentrated sources of energy."],
        ["M", "A person suffering from peptic ulcer should avoid", "pepper and spicy foods", "milk", "soft-cooked rice", "boiled yam", "They irritate the stomach lining."],
        ["H", "The vitamin most likely to be lacking in a strict vegan diet is", "vitamin B12", "vitamin C", "vitamin K", "folic acid", "It occurs naturally only in animal foods."],
        ["H", "A patient with diarrhoea needs oral rehydration solution mainly to replace", "water and salts", "protein", "fat", "fibre", "Diarrhoea causes dehydration."],
        ["H", "People living with HIV/AIDS need a diet high in protein and energy in order to", "prevent wasting and support immunity", "reduce body temperature", "lower blood pressure", "avoid all vitamins", "The illness increases nutrient needs."],
      ],
    },
    {
      week: 4,
      title: "Practical on Beverages and Special Diets",
      subtopics: ["Preparing and serving hot beverages", "Preparing and serving cold beverages", "Dishes for vegetarians and the overweight", "Dishes for diabetic and ulcer patients"],
      objectives: ["Prepare and serve tea, coffee and cocoa correctly", "Prepare and serve fruit and milk drinks", "Prepare suitable dishes for vegetarians and overweight persons", "Prepare suitable dishes for diabetic and ulcer patients"],
      lesson: {
        title: "Making Drinks and Special Dishes",
        summary: "Step-by-step methods for common beverages and for dishes suited to special diets.",
        minutes: 80,
        notes: `## Before you begin
wash hands; wear an apron and cap; collect ingredients and equipment; work cleanly; follow the recipe.

## Hot beverages
### Tea (for two)
1. Boil **fresh** water.
2. **Warm the teapot**; put in 2 teaspoons of tea or 2 tea bags.
3. Pour on **boiling** water; cover.
4. **Infuse 3–5 minutes**; strain into warm cups.
5. Serve with milk, sugar or lemon separately.

### Coffee
Put coffee in a warm jug; pour on water just **off the boil**; stir; stand a few minutes (or use a filter); serve hot with hot milk.

### Cocoa drink
Mix 2 teaspoons of cocoa and sugar to a paste with a little cold milk; heat the rest of the milk; pour on, stirring; return to the pan and bring just to the boil.

### Egg flip (nourishing)
Beat 1 egg with 2 teaspoons of sugar; pour on a cup of **warm (not boiling)** milk, stirring; flavour with vanilla or nutmeg; strain; serve at once.

## Cold beverages
### Fresh fruit juice
Wash oranges or pineapples; squeeze or blend; strain; chill; serve in glasses with a slice of fruit.

### Fruit drink / punch
Combine juices of two or three fruits with chilled water or soda; sweeten lightly; add ice and fruit pieces.

### Zobo
Wash dried hibiscus calyces; boil with ginger and pineapple peel for 15–20 minutes; strain; cool; sweeten; chill.

### Milk shake
Blend cold milk with fruit (banana) or flavouring and a little sugar until frothy; serve chilled.

## Dishes for special diets
| Diet | Suitable dishes | Points |
|---|---|---|
| **vegetarian** | beans pottage; *moin-moin* without fish or egg (for vegans); vegetable stir-fry with tofu or *awara*; rice and beans; vegetable soup with mushrooms; *akara*; fruit salad | combine cereals and legumes; use plenty of vegetables |
| **overweight** | grilled or steamed fish; boiled or roasted lean chicken without skin; vegetable soups with little oil; salads with lemon dressing; fresh fruit | **no deep frying**; small portions of starch; no sugary drinks |
| **diabetic** | unripe plantain pottage; beans; whole-grain or brown rice; *ofada* rice; vegetable soup with little oil; boiled eggs; garden-egg stew | **no added sugar**; high fibre; measured portions; regular times |
| **ulcer** | well-cooked pap with milk; soft rice; mashed potato or yam; steamed fish; custard; ripe pawpaw and banana | **no pepper**, spices, frying or acidic fruits; small frequent meals |
| **fever / invalid** | light soups and broths; pap; custard; egg flip; fruit juice; steamed fish | easily digested; attractive small servings; plenty of fluids |
| **diarrhoea** | rice water; salt–sugar solution; pap; ripe banana | low fibre; safe water |

### Salt–sugar solution (home oral rehydration)
One level teaspoon of salt and ten level teaspoons of sugar in one large bottle (about 600 ml) of clean, boiled, cooled water — or use a packet of ORS as directed.

## Serving
- use a **tray** with a clean tray cloth for a patient
- serve **small, attractive portions**; garnish simply
- hot food hot, cold food cold
- remove the tray promptly; observe what was eaten

## Evaluating your work
appearance; flavour; texture; temperature; suitability for the person; cleanliness; time taken.`,
        examples: `**Example 1.** How long should tea be allowed to infuse? *Answer:* **3–5 minutes**.

**Example 2.** Name one suitable main dish for a diabetic. *Answer:* **Unripe plantain pottage** (or beans with vegetables).

**Example 3.** Why should milk for egg flip be warm and not boiling? *Answer:* Boiling milk would **curdle (cook) the egg**.`,
      },
      questions: [
        ["E", "Tea should be made with water that is", "freshly boiling", "lukewarm", "cold", "boiled for an hour", "Boiling water draws out the flavour."],
        ["E", "A suitable cooking method for an overweight person's fish is", "grilling", "deep frying", "shallow frying in butter", "frying in batter", "Grilling adds no fat."],
        ["E", "Fresh fruit juice is best served", "chilled", "boiling hot", "after a week", "with pepper", "Cold juice is refreshing."],
        ["M", "Before tea is put into a teapot, the pot should be", "warmed", "chilled", "oiled", "dried in the sun", "A warm pot keeps the water at the right temperature."],
        ["M", "A suitable dish for a person with peptic ulcer is", "soft rice with steamed fish", "pepper soup", "fried plantain with stew", "suya", "Bland, soft foods do not irritate the stomach."],
        ["M", "Which of these dishes suits a vegan?", "Rice and beans with vegetables", "Egg sauce", "Fish stew", "Milk custard", "It contains no animal products."],
        ["M", "Unripe plantain pottage is recommended for diabetics because it is", "high in fibre and slowly digested", "very sweet", "rich in refined sugar", "free of carbohydrate", "It raises blood sugar slowly."],
        ["H", "In preparing egg flip, boiling milk is avoided because it would", "curdle the egg", "destroy the sugar", "make the drink alcoholic", "remove the calcium", "The egg proteins coagulate into lumps."],
        ["H", "A home-made oral rehydration solution contains clean water, sugar and", "salt", "pepper", "oil", "vinegar", "Salt and sugar replace lost fluids and salts."],
        ["H", "A patient's meal tray should carry small, attractive portions mainly in order to", "tempt a poor appetite", "save the cook's time", "reduce washing up", "hide the food", "Sick people are easily put off by large servings."],
      ],
    },
    {
      week: 6,
      title: "Cultural Food Habits",
      subtopics: ["Food habits", "Food taboos", "Food facts and fallacies", "Factors influencing food habits"],
      objectives: ["Explain food habits, taboos, facts and fallacies", "Analyse the factors that influence food habits", "Identify traditional foods associated with taboos", "Correct food fallacies with facts"],
      lesson: {
        title: "Why We Eat What We Eat",
        summary: "How culture, belief and circumstance shape eating, and how false ideas about food can be corrected.",
        minutes: 40,
        notes: `## Definitions
- **Food habits** are the **ways in which people select, prepare, serve and eat food** — what, when, how and with whom they eat.
- A **food taboo** is a **prohibition against eating certain foods**, based on culture, religion or tradition.
- A **food fact** is a **true statement** about food supported by scientific evidence.
- A **food fallacy (food fad or superstition)** is a **false belief** about food.

## Factors influencing food habits
1. **Culture and tradition** — staple foods and ways of cooking.
2. **Religion** — Muslims avoid pork and alcohol; Hindus avoid beef; fasting in Lent and Ramadan.
3. **Availability** — what grows locally: yam and cassava in the south, grains in the north.
4. **Income** and cost of food.
5. **Education and nutrition knowledge**.
6. **Family upbringing**.
7. **Age, sex and occupation**.
8. **Health** conditions and allergies.
9. **Climate and season**.
10. **Advertising and mass media**; peer influence.
11. **Urbanisation and travel** — fast foods, foreign dishes.
12. **Personal likes and dislikes**; emotions.
13. **Technology** — storage and processing facilities.

## Food taboos
| Taboo (varies by community) | Group affected |
|---|---|
| eggs make children steal or become greedy | children |
| meat and fish spoil children | children |
| snails cause a baby to drool or be sluggish | pregnant women |
| grass-cutter or bush meat prolongs labour | pregnant women |
| pork and alcohol are forbidden | Muslims |
| particular animals (totems) must not be eaten | clans and families |
| women must not eat gizzard or certain meats | women |
Many taboos deny **children and pregnant women** the **protein** they most need.

### Effects of taboos
malnutrition (kwashiorkor, anaemia); limited variety; waste of nutritious foods. *Positive side:* some protect health or endangered animals, and they preserve identity.

## Food fallacies and the facts
| Fallacy | Fact |
|---|---|
| eggs make children thieves | eggs are an excellent source of **protein**, iron and vitamins for growth |
| fruits cause malaria or stomach upset in children | washed fruits supply **vitamins**; malaria is spread by mosquitoes |
| fish is "brain food" only | fish is good protein, but no single food builds the brain |
| eating okra or "slimy" soups causes impotence | no evidence; vegetables are protective foods |
| colostrum (first milk) is dirty | colostrum is rich in **antibodies** and should be given |
| honey or margarine is not fattening | all foods supplying energy can fatten in excess |
| brown eggs are more nutritious than white | shell colour does not affect nutrients |
| a fat baby is a healthy baby | overweight is a form of malnutrition |
| beans cause boils | no evidence; beans are a valuable protein food |
| drinking water while eating is harmful | water aids digestion |

## Correcting poor food habits
**nutrition education** in schools, clinics and the media; involving community and religious leaders; demonstrating cheap balanced meals; respecting culture while explaining the facts.`,
        examples: `**Example 1.** Define a food taboo. *Answer:* A **prohibition against eating certain foods** based on culture, religion or tradition.

**Example 2.** Give the fact that corrects the fallacy "eggs make children steal". *Answer:* Eggs supply **protein, iron and vitamins** needed for growth; they have no effect on behaviour.

**Example 3.** State three factors influencing food habits. *Answer:* **Religion, income and availability of food**.`,
      },
      questions: [
        ["E", "A false belief about food is a", "food fallacy", "food fact", "food value", "food group", "It has no scientific basis."],
        ["E", "A prohibition against eating certain foods for cultural or religious reasons is a", "food taboo", "food habit", "menu", "recipe", "The food is forbidden."],
        ["E", "The religion that forbids its followers to eat pork is", "Islam", "Hinduism only", "Buddhism only", "none", "Pork and alcohol are forbidden to Muslims."],
        ["M", "The way people select, prepare and eat their food constitutes their", "food habits", "food hygiene", "food budget", "food storage", "Habits are shaped by culture and circumstance."],
        ["M", "Taboos that forbid eggs and meat to children are harmful because they deprive children of", "protein", "fibre", "water", "starch", "Children need protein for growth."],
        ["M", "Which of these is a factor that influences food habits?", "Income", "Height of the kitchen", "Colour of plates", "Number of windows", "People buy what they can afford."],
        ["M", "The statement that eggs are rich in protein is a", "food fact", "food fallacy", "food taboo", "food fad", "It is scientifically true."],
        ["H", "The belief that colostrum is dirty milk is wrong because colostrum", "is rich in antibodies that protect the baby", "contains no nutrients", "is poisonous", "causes malaria", "The first milk gives immunity."],
        ["H", "The most effective way to correct harmful food fallacies in a community is", "nutrition education", "banning local foods", "raising food prices", "ignoring them", "People change when they understand the facts."],
        ["H", "The preference for grains such as millet and sorghum in northern Nigeria is mainly due to", "availability of the crops in the area", "advertising", "religion alone", "food taboos", "People eat what their environment produces."],
      ],
    },
    {
      week: 8,
      title: "Traditional and Foreign Dishes",
      subtopics: ["Meaning of traditional dishes", "Traditional dishes from different localities", "Meaning of foreign dishes", "Foreign dishes of the world"],
      objectives: ["Explain traditional and foreign dishes", "Identify traditional dishes from different Nigerian localities", "Enumerate foreign dishes from several countries", "Compare traditional and foreign dishes"],
      lesson: {
        title: "Dishes of Nigeria and the World",
        summary: "The typical dishes of Nigerian communities and of other countries.",
        minutes: 40,
        notes: `## Traditional dishes
**Traditional (indigenous) dishes** are meals **native to a locality or ethnic group**, prepared from local foodstuffs by methods handed down through generations.

### Dishes from different localities of Nigeria
| Area / people | Dishes |
|---|---|
| **Yoruba (South-West)** | *amala* with *ewedu* and *gbegiri*; pounded yam with *egusi* or *efo riro*; *eba*; *moin-moin*; *akara*; *ofada* rice with *ayamase*; *ikokore*; *asaro* |
| **Igbo (South-East)** | *fufu* (*akpu*) with *ofe onugbu* (bitter-leaf soup); *ofe oha*; *ofe nsala*; *abacha* (African salad); *ukwa* (breadfruit); *ji mmanu* (yam and palm oil); *okpa* |
| **Hausa-Fulani (North)** | *tuwo shinkafa* or *tuwo masara* with *miyan kuka* or *miyan taushe*; *masa*; *fura da nono*; *kilishi*; *suya*; *dan wake*; *kunu* |
| **Efik-Ibibio (Cross River, Akwa Ibom)** | *edikang ikong*; *afang* soup; *ekpang nkukwo*; *afia efere* (white soup) |
| **Edo and Delta** | *banga* soup with starch; *owo* soup; *ukodo* (yam pepper soup); black soup |
| **Ijaw and riverine** | *kekefiya* (plantain pottage); fresh-fish pepper soup; *onunu* |
| **Tiv and Idoma (Middle Belt)** | pounded yam with *okoho* or beniseed soup; *genger* soup |
| **Nupe; Kanuri** | *kuli-kuli*; *miyan kubewa* (dried okra soup) |
| **widely eaten** | jollof rice; fried rice; beans and *dodo*; pepper soup |

### Features
use of local staples (yam, cassava, grains, plantain) with soups rich in vegetables, palm oil, peppers and local seasonings (*iru*/*dawadawa*, *ogiri*, crayfish); often eaten with the hand; linked to festivals and ceremonies.

## Foreign dishes
**Foreign (continental or international) dishes** are meals that **originate from other countries**.

| Country / region | Dishes |
|---|---|
| **Britain / Europe** | fish and chips; roast beef with Yorkshire pudding; shepherd's pie; stews; puddings |
| **Italy** | pizza; spaghetti bolognese; lasagne; risotto |
| **France** | omelette; quiche; soufflé; croissant; ratatouille |
| **America** | hamburger; hot dog; fried chicken; barbecue; pancakes; doughnuts |
| **China** | fried rice; spring rolls; chow mein (noodles); sweet-and-sour dishes; stir-fries |
| **Japan** | sushi; tempura; ramen; miso soup |
| **India** | curry; biryani; chapati; samosa; tandoori chicken |
| **Middle East** | shawarma; kebab; hummus; falafel |
| **Mexico** | tacos; tortillas |
| **other African** | Ghanaian *waakye* and *banku*; Ethiopian *injera*; Senegalese *thieboudienne*; South African *bobotie* |

### Features
varied cooking methods — roasting, baking, stir-frying; use of dairy products, wheat, herbs and sauces; served in **courses** with cutlery (or chopsticks).

## Comparison
| | Traditional | Foreign |
|---|---|---|
| ingredients | local, cheap, available | may be imported, costly |
| acceptability | familiar | may need getting used to |
| value | rich in vegetables and fibre | variety; new skills and tastes |

## Why learn both?
preserves **culture**; widens variety; prepares for **catering careers** and hosting guests; promotes tourism; encourages creative use of local foods in foreign recipes.`,
        examples: `**Example 1.** Name one traditional dish each of the Efik and the Hausa. *Answer:* **Edikang ikong** (Efik); **tuwo shinkafa with miyan kuka** (Hausa).

**Example 2.** From which countries do pizza and sushi come? *Answer:* **Italy** and **Japan**.

**Example 3.** What are foreign dishes? *Answer:* Meals that **originate from other countries**.`,
      },
      questions: [
        ["E", "Meals native to a locality and prepared from local foodstuffs are", "traditional dishes", "foreign dishes", "convenience foods", "fast foods only", "They are handed down through generations."],
        ["E", "Pizza is a dish from", "Italy", "China", "India", "Japan", "It is a flat baked bread with toppings."],
        ["E", "Tuwo shinkafa is a traditional dish of the", "Hausa", "Efik", "Ijaw", "Urhobo", "It is made from soft-cooked rice."],
        ["M", "Edikang ikong and afang soups are associated with the", "Efik and Ibibio", "Kanuri", "Tiv", "Nupe", "They are vegetable soups of the Cross River area."],
        ["M", "Sushi and tempura are dishes of", "Japan", "Mexico", "France", "Britain", "They are well-known Japanese foods."],
        ["M", "Banga soup served with starch is a traditional dish of", "Delta State peoples", "Borno State peoples", "Sokoto State peoples", "Kwara State peoples", "It is made from palm-fruit extract."],
        ["M", "Curry and biryani are dishes of", "India", "Italy", "America", "Germany", "They use many spices."],
        ["H", "Ofe onugbu is a soup made with", "bitter leaf", "baobab leaf", "waterleaf and ugu only", "jute leaf", "It is an Igbo bitter-leaf soup."],
        ["H", "A feature of many foreign (continental) meals is that they are", "served in courses with cutlery", "always eaten with the hand", "based on cassava", "seasoned with iru", "Courses follow one another."],
        ["H", "Learning to prepare both traditional and foreign dishes is valuable to a caterer because it", "widens the range of customers he can serve", "reduces the need for hygiene", "removes the need for recipes", "makes food cheaper to buy", "Guests of different backgrounds can be catered for."],
      ],
    },
    {
      week: 9,
      title: "Practical: Preparing Traditional and Foreign Dishes",
      subtopics: ["Planning the practical", "Preparing a traditional dish", "Preparing a foreign dish", "Serving and evaluation"],
      objectives: ["Plan the preparation of a chosen dish", "Prepare and serve a traditional dish of one's ethnic group", "Prepare and serve a selected foreign dish", "Evaluate the finished dishes"],
      lesson: {
        title: "Cooking Local and International Meals",
        summary: "Sample methods for a traditional and a foreign dish, with planning, service and evaluation.",
        minutes: 80,
        notes: `## Planning
1. Choose the dish; write the **recipe** — ingredients with quantities, and method.
2. Make a **shopping list** and cost it.
3. List **equipment**.
4. Draw up a **time plan** — order of work.
5. Observe **hygiene and safety** throughout.

## Traditional dish — Egusi soup with pounded yam (serves 4)
**Ingredients:** 2 cups ground melon seed; 500 g meat and/or fish; 1 cooking spoon palm oil; pepper, onion, crayfish, *iru*; leafy vegetable (ugu or bitter leaf); stock; salt and seasoning; 1 medium tuber of yam.

**Method**
1. Wash, season and boil the meat until tender; keep the stock.
2. Heat the oil; fry chopped onion; add ground pepper and fry.
3. Mix the egusi to a thick paste with a little water or stock; add in lumps; cover and cook on low heat, then stir.
4. Add stock, meat, fish, crayfish and *iru*; simmer 15–20 minutes.
5. Add the washed, sliced vegetable; cook 3–5 minutes so it stays green; adjust seasoning.
6. Peel, slice and boil the yam until soft; pound in a mortar until smooth and stretchy; mould into portions.
**Serve** the pounded yam in a covered dish or wrapped; soup in a bowl.

## Traditional dish — Jollof rice
Parboil and wash rice; fry onion, tomato and pepper purée in oil until the sourness goes; add stock, seasoning, thyme, curry and bay leaf; add rice with enough liquid just to cover; cook covered on low heat until tender and the liquid is absorbed; serve with fried plantain and chicken.

## Foreign dish — Chinese-style fried rice
**Ingredients:** 3 cups cooked, cooled rice; diced carrots, green beans, sweet corn, peas, spring onion; 2 eggs; small pieces of chicken, liver or shrimp; oil; soy sauce; salt; seasoning.

**Method**
1. Cook the rice in stock until just tender; cool so the grains separate.
2. Scramble the eggs lightly; set aside.
3. Heat oil in a wok or wide pan; **stir-fry** the meat, then the vegetables briefly so they stay crisp and colourful.
4. Add the rice; toss over high heat; add soy sauce and seasoning.
5. Fold in the egg; serve hot.

## Foreign dish — Shepherd's pie (British)
Fry minced meat with onion and carrot; add stock and seasoning; simmer; place in a pie dish; cover with **mashed potato**; mark with a fork; bake until golden.

## Foreign dish — Pancakes
Batter of flour, egg, milk, a little sugar and salt; rest; fry thin layers in a lightly greased pan; turn; serve rolled with filling.

## Cooking methods used
boiling, stewing, frying, **stir-frying**, pounding, baking, steaming.

## Serving
- traditional meals: in bowls or wrapped; water for washing hands provided
- foreign meals: on plates with cutlery, in courses
- **garnish** appropriately — tomato, lettuce, parsley, sliced egg
- hot food on warm plates

## Evaluation
| Criterion | Questions |
|---|---|
| **appearance** | colour, garnish, neatness |
| **texture / consistency** | tender? smooth? not burnt or soggy? |
| **flavour** | well seasoned? |
| **temperature** | served hot or cold as required |
| **nutritive value** | balanced? |
| **time and cost** | within plan? |
| **hygiene and tidiness** | work area clean? |`,
        examples: `**Example 1.** Why are leafy vegetables added last to soup? *Answer:* To **keep their colour and vitamins**; long cooking destroys them.

**Example 2.** What cooking method is used for Chinese fried rice? *Answer:* **Stir-frying** over high heat.

**Example 3.** State three criteria for evaluating a finished dish. *Answer:* **Appearance, flavour and texture**.`,
      },
      questions: [
        ["E", "A written list of ingredients and the method for preparing a dish is a", "recipe", "menu", "receipt", "time plan", "It guides the cook."],
        ["E", "Egusi soup is thickened with ground", "melon seeds", "groundnuts", "maize", "millet", "Egusi is melon seed."],
        ["E", "Decorating a dish with edible items to improve its appearance is", "garnishing", "basting", "marinating", "blanching", "Parsley, tomato or egg slices are used."],
        ["M", "Leafy vegetables are added towards the end of cooking a soup so as to", "retain colour and vitamins", "make the soup sour", "thicken the soup", "tenderise the meat", "Prolonged heat destroys vitamin C."],
        ["M", "Cooking small pieces of food quickly in a little hot oil while stirring is", "stir-frying", "stewing", "poaching", "braising", "It is typical of Chinese cookery."],
        ["M", "In shepherd's pie, the minced meat is covered with", "mashed potato", "pastry", "rice", "bread", "The potato topping is browned in the oven."],
        ["M", "Rice for fried rice is cooled before frying so that the grains", "remain separate", "become sticky", "turn brown", "absorb more water", "Hot, wet rice clumps together."],
        ["H", "A time plan for a practical lesson shows the", "order of work and time for each task", "cost of each ingredient", "nutrients in each food", "names of guests", "It helps the cook finish on time."],
        ["H", "In making jollof rice, the tomato and pepper mixture is fried well mainly to", "remove the raw, sour taste", "increase the water content", "add protein", "bleach the oil", "Frying develops flavour and removes sourness."],
        ["H", "Which criterion assesses whether a meal supplies the nutrients the body needs?", "Nutritive value", "Appearance", "Temperature", "Garnish", "A good meal should be balanced."],
      ],
    },
    {
      week: 10,
      title: "Art of Entertainment",
      subtopics: ["Meaning of entertainment", "Types of parties", "Steps in organising a party", "Responsibilities of host and guest"],
      objectives: ["Explain the term entertainment", "Describe the different types of parties", "Discuss the steps in organising a party", "State the duties of the host and of the guests"],
      lesson: {
        title: "Entertaining Guests",
        summary: "The kinds of parties and how to plan and run one successfully.",
        minutes: 40,
        notes: `## Meaning
**Entertainment** is the **art of receiving and providing for guests** — offering food, drink and hospitality so that they are comfortable and happy. It may be **formal** or **informal**.

## Types of parties
| Party | Description |
|---|---|
| **birthday party** | celebrates a person's birthday; cake cutting |
| **surprise party** | arranged without the knowledge of the person honoured |
| **dinner party** | a formal evening meal of several courses, guests seated |
| **luncheon** | midday meal for guests |
| **tea party** | afternoon; tea with sandwiches, cakes, small chops |
| **cocktail party** | early evening; drinks with finger foods; guests stand and mingle |
| **buffet party** | guests serve themselves from a table |
| **garden party / picnic / barbecue** | held outdoors |
| **reception** | follows a wedding, naming or official event |
| **costume (fancy-dress) party** | guests dress to a theme |
| **Christmas carolling party** | carols with refreshments |
| **pool party** | by a swimming pool |
| **fundraising party** | to raise money for a cause |
| **graduation party; send-forth / farewell; welcome party** | mark achievements, departures and arrivals |
| **house-warming** | celebrates moving into a new home |
| **children's party** | games and simple foods |

## Steps in organising a party
1. Decide the **type, purpose and date**.
2. Fix the **budget**.
3. Draw up the **guest list**; send **invitations** early (stating date, time, venue, dress and "RSVP").
4. Choose the **venue**; arrange seating, decoration, lighting and music.
5. Plan the **menu** — suit the occasion, guests' ages, religions and special diets, the season and the budget.
6. Make a **shopping list**; buy non-perishables early, perishables last.
7. Arrange **equipment** — tables, chairs, linen, crockery, cutlery, glasses.
8. Prepare a **time plan**; cook ahead what can be prepared in advance.
9. Arrange **service** — waiters, buffet or family style.
10. **Receive** guests warmly; introduce them; serve drinks.
11. **Serve** the food; attend to guests.
12. **Clear up** afterwards; thank helpers.

## Foods for parties
- **small chops / finger foods:** puff-puff, samosa, spring rolls, meat pie, *chin-chin*, sausage rolls, stick meat
- **main dishes:** jollof and fried rice, salads, *moin-moin*, grilled chicken or fish, pounded yam and soups
- **desserts:** fruit salad, cakes, ice cream
- **drinks:** juices, soft drinks, *zobo*, water

Choose foods that are **easy to serve and eat**, attractive and safe (keep hot foods hot and cold foods cold).

## Responsibilities
### Host / hostess
plan carefully; welcome and introduce guests; make everyone comfortable; ensure enough food and drink; be cheerful and calm; see guests off.

### Guest
reply to the invitation; arrive on time; dress suitably; be polite and sociable; eat with good manners; do not overstay; thank the host.

## Importance of entertainment
strengthens friendship and family ties; marks important events; develops social and organising skills; provides relaxation; promotes business and goodwill.`,
        examples: `**Example 1.** What is a cocktail party? *Answer:* An early-evening party where guests **stand and mingle**, taking **drinks and finger foods**.

**Example 2.** Give four steps in organising a party. *Answer:* **Fix the budget, send invitations, plan the menu** and **arrange the venue**.

**Example 3.** State two duties of a guest. *Answer:* **Arrive on time** and **thank the host**.`,
      },
      questions: [
        ["E", "The art of receiving and providing for guests is", "entertainment", "budgeting", "marketing", "laundering", "It involves hospitality with food and drink."],
        ["E", "A party held to celebrate moving into a new home is a", "house-warming", "reception", "send-forth", "cocktail", "Friends are invited to the new house."],
        ["E", "The person who invites and receives guests is the", "host", "waiter", "caterer only", "usher", "A woman who does so is the hostess."],
        ["M", "A party at which guests serve themselves from a table of dishes is a", "buffet party", "dinner party", "tea party", "cocktail party", "It needs few waiters."],
        ["M", "Light refreshments such as samosa, spring rolls and puff-puff are called", "small chops", "main courses", "desserts", "entrées", "They are finger foods."],
        ["M", "The letters RSVP on an invitation card ask the guest to", "reply", "bring a gift", "come early", "dress formally", "It is French for 'please reply'."],
        ["M", "A formal evening meal of several courses with seated guests is a", "dinner party", "picnic", "cocktail party", "barbecue", "It is the most formal kind of party."],
        ["H", "In planning a party menu, the hostess should first consider", "the type of occasion and the guests", "the colour of the walls", "her favourite food only", "the cheapest foods regardless of guests", "The menu must suit the event and those invited."],
        ["H", "Finger foods are preferred at a cocktail party because guests", "stand and move about while eating", "sit at a formal table", "are served several courses", "are mostly children", "Such foods need no cutlery."],
        ["H", "Which of these is a responsibility of a guest?", "Replying to the invitation", "Preparing the menu", "Paying for the food", "Arranging the venue", "The host needs to know who will attend."],
      ],
    },
    {
      week: 11,
      title: "Table Setting and Etiquette",
      subtopics: ["Host, guest, waiter and waitress", "Table setting: formal and informal", "Rules for laying a table", "Table manners and etiquette"],
      objectives: ["Explain the terms host, guest, waiter and waitress and their qualities", "Explain table setting and distinguish formal from informal settings", "Demonstrate how to lay a cover", "Highlight good table manners and etiquette"],
      lesson: {
        title: "Laying the Table and Behaving at It",
        summary: "How to set a table correctly for different occasions and how to conduct oneself during a meal.",
        minutes: 80,
        notes: `## People at table
- **Host / hostess** — the man or woman who **invites and entertains** guests.
- **Guest** — a person **invited** to a meal or function.
- **Waiter / waitress** — a man or woman who **serves food and drink** to guests.

### Qualities
| Host / hostess | Guest | Waiter / waitress |
|---|---|---|
| welcoming, cheerful | punctual | clean and neat |
| organised | polite | courteous and attentive |
| attentive to all guests | appreciative | quick and efficient |
| tactful | well mannered | knows the menu |
| generous | sociable | honest; good memory |

## Table setting
**Table setting (laying the table)** is the **arrangement of linen, cutlery, crockery and glassware** on the table for a meal. The place set for one person is a **cover**.

### Items
- **linen:** tablecloth, table mats, napkins (serviettes)
- **cutlery (flatware):** knives, forks, spoons
- **crockery:** dinner plate, side plate, soup bowl, cup and saucer
- **glassware:** water glass, wine glass
- **others:** cruet (salt and pepper), serving dishes, centrepiece (flowers)

### Formal and informal settings
| | Formal | Informal |
|---|---|---|
| **occasion** | dinner parties, banquets | family meals, casual gatherings |
| **courses** | several (four or more) | one to three |
| **items** | full range of cutlery and glasses for every course; tablecloth and folded napkins | only what is needed; table mats may be used |
| **service** | by waiters, course by course | family style or self-service |
| **seating** | planned; place cards | free |

## Rules for laying a cover
1. Table clean; cloth laid evenly.
2. Allow about **60 cm** per cover.
3. **Dinner plate** (or space) in the centre, about 2 cm from the table edge.
4. **Forks on the left**; **knives on the right** with **blades facing the plate**; **spoons on the right**.
5. Arrange cutlery in **order of use, from the outside in**.
6. **Dessert spoon and fork** above the plate (or brought with the dessert).
7. **Side plate on the left** with the butter knife.
8. **Glass** above the tip of the knife, on the **right**.
9. **Napkin** on the side plate, centre of the cover or in the glass.
10. Cruet and centrepiece in the middle — low enough not to block the view.

## Styles of service
**plate service**; **silver service** (waiter serves from a dish); **family service**; **buffet**; **tray service**. Food is served from the guest's **left**; drinks are poured and plates cleared from the **right**.

## Table manners and etiquette
**Etiquette** is the **accepted code of polite behaviour**.
- wash hands; come to the table tidy and on time
- sit upright; **elbows off the table**
- place the napkin on your lap
- wait until all are served and grace is said
- use cutlery correctly — **outside in**; do not wave it about
- take **small mouthfuls**; chew with the **mouth closed**
- **do not talk with food in the mouth**
- do not reach across; ask for things to be passed; say "please" and "thank you"
- do not blow on hot food, slurp or pick the teeth
- no phones at table; pleasant conversation only
- when finished, place **knife and fork together** on the plate
- excuse yourself before leaving; thank the host`,
        examples: `**Example 1.** What is a cover? *Answer:* The **place setting for one person** at a table.

**Example 2.** On which side of the plate are forks placed? *Answer:* The **left**.

**Example 3.** Give three rules of table etiquette. *Answer:* **Chew with the mouth closed, keep elbows off the table** and **do not talk with food in the mouth**.`,
      },
      questions: [
        ["E", "The place setting for one person at a table is called a", "cover", "course", "cruet", "centrepiece", "It includes the cutlery, plate, glass and napkin."],
        ["E", "In a table setting, forks are placed on the", "left of the plate", "right of the plate", "top of the plate", "side plate", "Knives and spoons go on the right."],
        ["E", "A person who serves food and drinks to guests is a", "waiter", "host", "guest", "chef only", "A woman who does so is a waitress."],
        ["M", "The blade of a table knife should face", "the plate", "away from the plate", "the glass", "the napkin", "This is the correct and safe position."],
        ["M", "Cutlery on a formal table is arranged in order of use", "from the outside inwards", "from the inside outwards", "at random", "by size only", "The first course uses the outermost pieces."],
        ["M", "The accepted code of polite behaviour at table is", "etiquette", "nutrition", "hygiene only", "service", "It governs manners."],
        ["M", "The water glass is placed", "above the tip of the knife on the right", "on the left of the forks", "on the side plate", "in the centre of the table", "The glass stands at the top right of the cover."],
        ["H", "A formal table setting differs from an informal one in having", "cutlery and glasses for several courses", "no napkins", "only spoons", "no tablecloth or mats", "A formal meal has many courses."],
        ["H", "At a formal meal, a waiter clears used plates from the guest's", "right", "left", "front across the table", "back over the head", "Food is served from the left and cleared from the right."],
        ["H", "When a diner has finished eating, the knife and fork should be placed", "together on the plate", "crossed on the table", "on the napkin", "in the glass", "This signals that the plate may be cleared."],
      ],
    },
  ],
};
