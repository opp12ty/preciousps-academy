import type { TermPlan } from "../types";

/** JSS2 Home Economics — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Balanced diet and meal planning",
        subtopics: ["Meaning of a balanced diet", "Principles of meal planning", "Factors affecting meal planning", "Planning a day's meals"],
        objectives: ["Explain a balanced diet", "State the principles of meal planning", "Identify factors that affect meal planning", "Plan balanced meals for a day"],
        lesson: {
          title: "Planning Healthy Meals",
          summary: "Plan balanced meals using sound principles.",
          minutes: 40,
          notes: `## Balanced diet
A **balanced diet** is a diet that contains **all the classes of food in the right proportions** to meet the body's needs.
Too much of some foods leads to **obesity**, high blood pressure and diabetes; too little leads to **malnutrition**.

## Meal planning
**Meal planning** is deciding in advance **what food to serve**, how to prepare it and when to serve it.

## Principles of meal planning
- include **all food classes** (balance)
- consider **nutritional needs** of each family member
- use **variety** in colour, texture, flavour and cooking method
- plan within the **family budget**
- use foods **in season** (cheaper, fresher)
- consider **time and equipment** available
- make meals attractive and appetising
- avoid waste; use leftovers wisely

## Factors affecting meal planning
age, sex, occupation (activity level), health condition, religion and culture, family income, season, available time, skill of the cook, likes and dislikes, climate.

## Sample day's meals (for a student)
| Meal | Menu | Food classes covered |
|---|---|---|
| **breakfast** | pap with akara and milk; a banana | carbohydrate, protein, fat, vitamins |
| **lunch** | jollof rice with fish, fried plantain and vegetable salad | carbohydrate, protein, fat, vitamins, minerals |
| **supper** | yam porridge with vegetables and egg; water | carbohydrate, protein, vitamins, minerals, water |
Drink enough **clean water** throughout the day.`,
          examples: `**Example 1.** What is meal planning? *Answer:* **Deciding in advance** what food to serve, how to prepare it and when.

**Example 2.** Why use foods in season? *Answer:* They are **cheaper and fresher**.

**Example 3.** Which food class is missing from "rice and stew only"? *Answer:* **vitamins and roughage** from vegetables and fruits.`,
        },
        questions: [
          ["E", "A diet containing all food classes in the right proportions is a", "balanced diet", "crash diet", "junk diet", "starvation diet", "It meets body needs."],
          ["E", "Deciding in advance what food to serve is", "meal planning", "food spoilage", "food poisoning", "fasting", "Planning saves time and money."],
          ["E", "Eating too much food regularly can lead to", "obesity", "kwashiorkor", "marasmus", "scurvy only", "Excess energy is stored as fat."],
          ["M", "Using foods that are in season is advisable because they are", "cheaper and fresher", "always imported", "harder to find", "less nutritious", "Supply is high in season."],
          ["M", "Which is a principle of meal planning?", "variety in colour, texture and flavour", "serving the same meal daily", "ignoring the budget", "leaving out vegetables", "Variety makes meals appealing."],
          ["M", "A labourer needs more energy foods than a clerk because of", "higher physical activity", "his religion", "his height only", "the colour of his clothes", "Activity raises energy needs."],
          ["M", "Which factor affects meal planning?", "family income", "the price of cars", "the weather in another country", "the school timetable of a neighbour", "Budget limits food choices."],
          ["H", "A meal of rice and stew only is lacking mainly in", "vitamins and roughage", "carbohydrates", "fat", "energy", "Vegetables and fruits are missing."],
          ["H", "Malnutrition can result from", "eating too little or too much of certain nutrients", "eating a balanced diet", "drinking clean water", "regular exercise", "Imbalance causes malnutrition."],
          ["H", "Pap with akara, milk and a banana provides", "carbohydrate, protein, fat and vitamins", "only carbohydrate", "only protein", "only water", "Each item adds a food class."],
        ],
      },
      {
        week: 2,
        title: "Meals for special groups",
        subtopics: ["Meals for infants and children", "Meals for adolescents", "Meals for pregnant and nursing mothers", "Meals for the elderly and the sick"],
        objectives: ["Plan meals for infants and young children", "Explain the nutritional needs of adolescents", "State the dietary needs of pregnant and nursing mothers", "Plan suitable meals for the elderly and the sick"],
        lesson: {
          title: "Feeding Different Family Members",
          summary: "Plan meals to meet the needs of special groups.",
          minutes: 40,
          notes: `## Infants and young children
- **exclusive breastfeeding** for the first **6 months** (breast milk contains all nutrients and antibodies)
- from 6 months, **complementary feeding**: enriched pap (with milk, crayfish or soya), mashed beans, mashed fruits, eggs
- continue breastfeeding up to 2 years
- children need **protein** for growth, **calcium** for bones and **iron** for blood
- give small, frequent meals; keep feeding utensils clean

## Adolescents (10–19 years)
rapid growth needs extra **protein, energy, calcium and iron** (girls lose iron during menstruation); avoid skipping breakfast and eating too much junk food; drink water; eat fruits and vegetables.

## Pregnant and nursing mothers
extra **protein** (baby's growth), **iron** and **folic acid** (blood, prevent birth defects), **calcium** (baby's bones), **vitamins**, plenty of water; avoid alcohol and smoking; nursing mothers need extra fluids and energy to produce milk.

## The elderly
need **less energy** (less active) but enough protein, calcium and vitamins; soft, easily digested foods; less salt, sugar and fat; more fibre to prevent constipation; small, frequent meals.

## The sick (invalids and convalescents)
follow the **doctor's advice**; light, easily digested foods (pap, soups, custard, fruit juice); plenty of fluids; attractive serving in small portions; special diets for diabetes (less sugar) or high blood pressure (less salt).`,
          examples: `**Example 1.** For how long should a baby be breastfed exclusively? *Answer:* **6 months**.

**Example 2.** Why do pregnant women need folic acid? *Answer:* To **prevent birth defects** and support blood formation.

**Example 3.** What diet change suits a person with high blood pressure? *Answer:* **reduce salt**.`,
        },
        questions: [
          ["E", "Babies should be exclusively breastfed for the first", "6 months", "6 days", "6 years", "2 weeks", "Breast milk meets all needs."],
          ["E", "Adding other foods to a baby's diet after 6 months is", "complementary feeding", "fasting", "weaning off water", "force-feeding", "It complements breast milk."],
          ["E", "Sick people usually need foods that are", "light and easily digested", "very spicy and heavy", "hard and dry", "fried in much oil", "They are easier on the body."],
          ["M", "Breast milk protects babies from infections because it contains", "antibodies", "alcohol", "caffeine", "preservatives", "Antibodies fight germs."],
          ["M", "Pregnant women need extra iron and", "folic acid", "alcohol", "caffeine", "salt only", "Folic acid prevents birth defects."],
          ["M", "The elderly need less energy food because they are", "less active", "growing fast", "pregnant", "athletes", "Lower activity reduces needs."],
          ["M", "Adolescent girls need extra iron because of", "menstruation", "short height", "school uniform", "sleeping late", "Blood loss increases iron needs."],
          ["H", "A person with diabetes should reduce the intake of", "sugar", "water", "vegetables", "fibre", "Sugar raises blood glucose."],
          ["H", "A person with high blood pressure should reduce", "salt", "water", "fruits", "vegetables", "Salt raises blood pressure."],
          ["H", "The elderly benefit from more fibre in their diet because it", "prevents constipation", "raises blood sugar", "adds fat", "causes obesity", "Fibre aids bowel movement."],
        ],
      },
      {
        week: 3,
        title: "Food preservation",
        subtopics: ["Causes of food spoilage", "Reasons for preserving food", "Traditional methods", "Modern methods"],
        objectives: ["Explain the causes of food spoilage", "State reasons for preserving food", "Describe traditional methods of food preservation", "Describe modern methods of food preservation"],
        lesson: {
          title: "Making Food Last Longer",
          summary: "Explain food spoilage and methods of preservation.",
          minutes: 40,
          notes: `## Food spoilage
Food spoils when it becomes **unfit to eat** through changes in smell, colour, taste or texture.
**Causes:** **micro-organisms** (bacteria, moulds, yeasts); **enzymes** in the food; **pests** (rats, weevils, cockroaches); **moisture**; **heat**; physical damage (bruising).

## Reasons for preservation
make food last longer; prevent waste; make seasonal foods available all year; save money; ensure food security; make food easy to transport; give variety.

## Principles
Preservation works by **killing** micro-organisms or **slowing their growth** — removing water, lowering temperature, raising temperature, or adding substances they cannot grow in (salt, sugar, vinegar).

## Traditional methods
| Method | Examples |
|---|---|
| **sun-drying** | pepper, okra, cassava chips, fish |
| **smoking** | fish, meat |
| **salting** | fish, meat |
| **frying** | kilishi, fried meat, garri (roasted cassava) |
| **fermentation** | ogiri, iru (locust beans), ogi |
| **storing in cool places** | yam barns |

## Modern methods
| Method | Examples |
|---|---|
| **refrigeration** (cooling) | fruits, vegetables, milk |
| **freezing** | meat, fish |
| **canning / bottling** | tomatoes, fruits, fish |
| **pasteurisation** | milk, juices |
| **using sugar** | jams, jellies |
| **using chemicals (preservatives)** | approved preservatives in processed foods |
| **vacuum packing** | cheese, processed meat |`,
          examples: `**Example 1.** Name one cause of food spoilage. *Answer:* **micro-organisms** such as bacteria and moulds.

**Example 2.** How is fish preserved traditionally? *Answer:* by **smoking** (or drying, salting).

**Example 3.** Jam preserves fruit using which substance? *Answer:* **sugar**.`,
        },
        questions: [
          ["E", "Keeping food from spoiling so it lasts longer is", "food preservation", "food poisoning", "food spoilage", "meal planning", "It prevents waste."],
          ["E", "Moulds and bacteria that spoil food are", "micro-organisms", "vitamins", "minerals", "fibres", "They are tiny living things."],
          ["E", "A traditional method of preserving fish is", "smoking", "freezing", "canning", "pasteurisation", "Smoke dries and flavours fish."],
          ["M", "Keeping meat in a freezer preserves it by", "lowering the temperature", "adding sugar", "adding smoke", "adding water", "Cold slows micro-organisms."],
          ["M", "Heating milk to a set temperature to kill germs is", "pasteurisation", "fermentation", "salting", "smoking", "It is named after Louis Pasteur."],
          ["M", "Jams and jellies are preserved mainly with", "sugar", "salt", "smoke", "vinegar only", "High sugar prevents growth of germs."],
          ["M", "Drying pepper and okra in the sun preserves them by", "removing water", "adding salt", "adding sugar", "freezing", "Micro-organisms need water."],
          ["H", "Iru (locust beans) is produced by", "fermentation", "canning", "freezing", "pasteurisation", "Micro-organisms change the beans."],
          ["H", "One reason for preserving food is to", "make seasonal foods available all year", "increase waste", "spoil food faster", "attract pests", "Stored food lasts beyond its season."],
          ["H", "Sealing food in airtight cans after heating is", "canning", "smoking", "sun-drying", "salting", "Heat kills germs and the seal keeps them out."],
        ],
      },
      {
        week: 4,
        title: "Food storage and buying",
        subtopics: ["Storing perishable foods", "Storing non-perishable foods", "Guidelines for buying food", "Reading food labels"],
        objectives: ["Store perishable foods correctly", "Store non-perishable foods correctly", "Apply guidelines for buying food", "Read and interpret food labels"],
        lesson: {
          title: "Buying and Keeping Food Wisely",
          summary: "Buy good-quality food and store it correctly.",
          minutes: 40,
          notes: `## Perishable and non-perishable foods
- **perishable** foods spoil quickly: meat, fish, milk, eggs, fresh fruits and vegetables, cooked food
- **non-perishable** foods last long: rice, beans, garri, flour, sugar, canned foods, dried foods

## Storing perishable foods
refrigerate or freeze meat, fish and milk; keep fruits and vegetables in cool, airy places or the vegetable drawer; cover cooked food and refrigerate within 2 hours; use **first in, first out** (older stock first).

## Storing non-perishable foods
keep in **airtight containers** in a cool, dry store; raise sacks off the floor; protect from weevils, rats and damp; keep canned foods away from heat; check regularly.

## Guidelines for buying food
- make a **shopping list** and **budget**
- buy from **clean, reliable** sellers
- compare **prices** and **quality**
- buy foods in season
- buy in bulk only what can be stored
- check **freshness**: firm fish with bright eyes and red gills; fresh meat with no bad smell; unbruised fruits
- avoid **dented, bulging or rusty cans**
- check the **expiry date** and **NAFDAC registration number**

## Reading food labels
Labels show: name of product; ingredients; **net weight**; **manufacturing and expiry dates**; nutritional information; storage instructions; manufacturer's name and address; NAFDAC number.`,
          examples: `**Example 1.** Is milk perishable or non-perishable? *Answer:* **perishable**.

**Example 2.** What does a bulging can suggest? *Answer:* The food may be **spoilt** by gas-producing bacteria — do not buy it.

**Example 3.** Name two things on a food label. *Answer:* **expiry date** and **ingredients**.`,
        },
        questions: [
          ["E", "Foods that spoil quickly are called", "perishable foods", "non-perishable foods", "canned foods", "dried foods", "They need careful storage."],
          ["E", "Which food is non-perishable?", "rice", "fresh fish", "milk", "cooked stew", "Dry grains keep long."],
          ["E", "Before buying packaged food, one should check the", "expiry date", "colour of the shop", "seller's age", "weather", "Expired food is unsafe."],
          ["M", "Dry foods such as beans and garri should be stored in", "airtight containers in a dry place", "damp corners", "open trays outside", "wet sacks on the floor", "Air and damp cause spoilage."],
          ["M", "A fresh fish can be recognised by", "bright eyes and red gills", "sunken dull eyes", "a bad smell", "soft broken flesh", "These show freshness."],
          ["M", "Using older stock before newer stock is the principle of", "first in, first out", "last in, first out", "bulk buying", "impulse buying", "It reduces waste."],
          ["M", "A shopping list helps a buyer to", "avoid impulse buying", "buy everything seen", "forget items", "spend more", "It keeps spending planned."],
          ["H", "A bulging can of food should not be bought because", "the contents may be spoilt by bacteria", "it contains more food", "it is newer", "it is cheaper", "Gas from bacteria swells cans."],
          ["H", "The weight of the food without the container shown on a label is the", "net weight", "gross weight", "expiry weight", "tare only", "Net excludes packaging."],
          ["H", "Cooked food should be refrigerated within about", "2 hours", "2 days", "2 weeks", "2 months", "Bacteria multiply at room temperature."],
        ],
      },
      {
        week: 5,
        title: "Table setting and table manners",
        subtopics: ["Table appointments", "Laying the table", "Table manners", "Serving meals"],
        objectives: ["Identify table appointments", "Lay a table correctly for a meal", "Practise good table manners", "Serve meals attractively"],
        lesson: {
          title: "Setting the Table and Eating Politely",
          summary: "Lay a table correctly and practise good table manners.",
          minutes: 40,
          notes: `## Table appointments
Items used for laying the table:
- **linen**: tablecloth, table mats, napkins (serviettes)
- **cutlery**: knives, forks, spoons
- **crockery**: plates, bowls, cups, saucers, dishes
- **glassware**: tumblers, water jug
- **others**: salt and pepper shakers, serving spoons, centrepiece (flowers)

## Laying the table (cover)
A **cover** is the space and items set for one person.
1. spread a clean tablecloth or mats
2. place the plate in the centre of the cover, about 2 cm from the edge
3. **fork on the left**, **knife on the right** with the **blade facing the plate**
4. soup spoon to the right of the knife
5. dessert spoon and fork above the plate
6. glass above the tip of the knife
7. napkin on the plate or to the left of the fork
8. arrange cutlery in the order of use — **from the outside in**
9. place a centrepiece low enough for people to see one another

## Table manners
wash hands before eating; sit upright; wait for everyone before starting; chew with the mouth **closed**; do not talk with food in the mouth; do not reach across others — ask politely; use cutlery properly; do not make noise while eating; do not use phones at the table; place cutlery together on the plate when finished; thank the host.

## Serving meals
serve hot food hot and cold food cold; garnish food; serve from the **left**, clear from the **right** (common rule in formal service); do not overfill plates.`,
          examples: `**Example 1.** On which side of the plate is the fork placed? *Answer:* on the **left**.

**Example 2.** Which way should the knife blade face? *Answer:* **towards the plate**.

**Example 3.** Give one table manner. *Answer:* **chew with the mouth closed**.`,
        },
        questions: [
          ["E", "When laying a table, the fork is placed on the", "left of the plate", "right of the plate", "top of the glass", "floor", "Fork left, knife right."],
          ["E", "The knife is placed on the", "right of the plate", "left of the plate", "chair", "napkin only", "Most people cut with the right hand."],
          ["E", "Plates, cups and bowls are called", "crockery", "cutlery", "linen", "glassware", "Crockery holds food."],
          ["M", "Knives, forks and spoons are called", "cutlery", "crockery", "linen", "centrepieces", "Cutlery is used for eating."],
          ["M", "The space and items set for one person at the table is a", "cover", "course", "menu", "buffet", "Each diner has a cover."],
          ["M", "The blade of the knife should face", "the plate", "outwards", "the ceiling", "the next person", "This is safer and correct."],
          ["M", "Which is good table manners?", "chewing with the mouth closed", "talking with food in the mouth", "reaching across others", "making noise while eating", "It is polite and hygienic."],
          ["H", "Cutlery should be arranged so that diners use it", "from the outside inwards", "from the inside outwards", "in any order", "all at once", "The first course uses the outer pieces."],
          ["H", "A centrepiece on the dining table should be", "low enough for people to see one another", "very tall to block views", "placed on each chair", "placed on the floor", "Guests must see each other."],
          ["H", "A diner who needs salt at the far end of the table should", "ask politely for it to be passed", "stand and reach across others", "shout for it", "take another person's plate", "Reaching across is rude."],
        ],
      },
      {
        week: 6,
        title: "Snacks and simple recipes",
        subtopics: ["Meaning of snacks", "Nigerian snacks", "Following a recipe", "Preparing simple snacks"],
        objectives: ["Explain snacks and their role in the diet", "Identify common Nigerian snacks", "Follow a recipe correctly", "Prepare a simple snack hygienically"],
        lesson: {
          title: "Making Simple Snacks",
          summary: "Follow recipes to prepare simple, healthy snacks.",
          minutes: 45,
          notes: `## Meaning
A **snack** is a **small amount of food** eaten between main meals to reduce hunger and provide energy.
Healthy snacks: fruits, groundnuts, boiled corn, moi-moi, yoghurt. Too many sugary or fried snacks can cause **tooth decay and obesity**.

## Nigerian snacks
puff-puff, chin-chin, buns, akara, plantain chips, kuli-kuli, meat pie, doughnuts, coconut candy, roasted corn and pear (ube), boli.

## A recipe
A **recipe** is a set of **instructions** for preparing a dish. It has:
- **name** of the dish
- **ingredients** with exact **quantities**
- **method** (step-by-step instructions)
- cooking **time**, temperature and number of servings

## Recipe: Puff-puff (about 20 balls)
**Ingredients:** 2 cups plain flour; 1 teaspoon dry yeast; 3 tablespoons sugar; a pinch of salt; about 1 cup warm water; oil for deep frying.
**Method:**
1. wash hands and utensils
2. mix flour, sugar, salt and yeast in a bowl
3. add warm water gradually and mix into a smooth, sticky batter
4. cover and leave in a warm place to **rise** for about 45 minutes
5. heat oil in a deep pot (medium heat)
6. scoop small balls of batter into the oil with the hand or a spoon
7. fry, turning until **golden brown**
8. remove and drain on paper towels; serve warm

## Tips for success
read the whole recipe first; gather ingredients and equipment (**mise en place**); measure accurately; control heat; clean as you work; never leave hot oil unattended.`,
          examples: `**Example 1.** What makes puff-puff batter rise? *Answer:* **yeast**, which produces carbon dioxide gas.

**Example 2.** Name two parts of a recipe. *Answer:* **ingredients** and **method**.

**Example 3.** Give one healthy Nigerian snack. *Answer:* **roasted corn** (or groundnuts, fruit).`,
        },
        questions: [
          ["E", "A small amount of food eaten between main meals is a", "snack", "banquet", "menu", "course", "Snacks reduce hunger."],
          ["E", "A set of instructions for preparing a dish is a", "recipe", "menu", "budget", "label", "It lists ingredients and steps."],
          ["E", "Which is a Nigerian snack?", "chin-chin", "amala and ewedu", "pounded yam", "eba and egusi", "Chin-chin is eaten between meals."],
          ["M", "The ingredient that makes puff-puff batter rise is", "yeast", "salt", "oil", "sugar only", "Yeast produces gas."],
          ["M", "The part of a recipe that lists items and their quantities is the", "ingredients", "method", "title", "servings only", "It says what is needed."],
          ["M", "In the puff-puff recipe, the batter balls are cooked by", "deep frying", "boiling", "steaming", "baking only", "They are fried fully covered in hot oil."],
          ["M", "Eating too many sugary snacks can lead to", "tooth decay", "stronger teeth", "better eyesight", "night blindness", "Sugar feeds mouth bacteria."],
          ["H", "Gathering all ingredients and equipment before cooking is called", "mise en place", "garnishing", "fermentation", "pasteurisation", "It means everything in place."],
          ["H", "Leaving the batter covered in a warm place allows it to", "rise as yeast produces gas", "freeze", "dry up", "become salty", "Warmth activates yeast."],
          ["H", "Which snack is healthier for regular eating?", "fresh fruit", "sweets", "fizzy drinks", "fried doughnuts daily", "Fruits give vitamins and fibre."],
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
        title: "The sewing machine",
        subtopics: ["Types of sewing machines", "Parts of the sewing machine", "Threading and using the machine", "Care and common faults"],
        objectives: ["Identify types of sewing machines", "Name the parts of a sewing machine and their functions", "Thread and operate a sewing machine", "Care for the machine and correct common faults"],
        lesson: {
          title: "Using the Sewing Machine",
          summary: "Identify parts of the sewing machine and use it correctly.",
          minutes: 45,
          notes: `## Types of sewing machines
| Type | Power |
|---|---|
| **hand machine** | turned by hand |
| **treadle machine** | worked with the feet |
| **electric machine** | electric motor controlled by a foot pedal |
| **computerised machine** | electronic with many stitch options |
| **overlock (serger)** | trims and neatens edges |

## Parts and functions
| Part | Function |
|---|---|
| **spool pin** | holds the reel of thread |
| **thread guides** | lead the thread correctly |
| **tension disc** | controls tightness of the upper thread |
| **take-up lever** | pulls thread up and feeds it |
| **needle and needle clamp** | forms stitches; holds the needle |
| **presser foot** | holds fabric down while sewing |
| **presser foot lifter** | raises and lowers the presser foot |
| **feed dog** | moves fabric forward |
| **throat (needle) plate** | covers the bobbin area; has seam guides |
| **bobbin and bobbin case** | supply the lower thread |
| **balance wheel (hand wheel)** | raises and lowers the needle by hand |
| **stitch length regulator** | controls stitch length |
| **reverse lever** | sews backwards to secure stitches |
| **bobbin winder** | winds thread onto the bobbin |

## Using the machine
wind the bobbin; thread the upper thread through the guides, tension disc and take-up lever to the needle; draw up the bobbin thread; test on a scrap; sew with the fabric under the presser foot; guide the fabric gently — do not pull.

## Care
clean out lint; **oil** moving parts as directed; cover when not in use; use correct needle for fabric; turn the balance wheel **towards you**.

## Common faults
| Fault | Likely cause |
|---|---|
| thread breaks | tension too tight; poor threading |
| skipped stitches | bent or blunt needle |
| loose loops underneath | upper tension too loose |
| needle breaks | pulling fabric; wrong needle |`,
          examples: `**Example 1.** Which part moves the fabric forward? *Answer:* the **feed dog**.

**Example 2.** Which part controls the tightness of the upper thread? *Answer:* the **tension disc**.

**Example 3.** Skipped stitches are usually caused by a **bent or blunt needle**.`,
        },
        questions: [
          ["E", "A sewing machine worked with the feet is a", "treadle machine", "hand machine", "computerised machine", "overlock machine", "The treadle is pressed by feet."],
          ["E", "The part that holds the reel of thread is the", "spool pin", "feed dog", "presser foot", "bobbin", "Thread sits on it."],
          ["E", "The part that holds fabric down while sewing is the", "presser foot", "spool pin", "balance wheel", "bobbin winder", "It presses fabric onto the feed dog."],
          ["M", "The part that moves fabric forward during sewing is the", "feed dog", "tension disc", "spool pin", "take-up lever", "Its teeth push fabric."],
          ["M", "The part that controls the tightness of the upper thread is the", "tension disc", "throat plate", "bobbin winder", "presser foot lifter", "Tension affects stitch quality."],
          ["M", "The lower thread of the machine is supplied by the", "bobbin", "spool pin", "take-up lever", "presser foot", "It sits under the throat plate."],
          ["M", "The balance wheel should be turned", "towards the operator", "away from the operator", "in both directions quickly", "only with the foot", "Turning away can tangle threads."],
          ["H", "Skipped stitches are usually caused by", "a bent or blunt needle", "too much oil", "a new bobbin", "clean fabric", "The needle fails to catch the thread."],
          ["H", "Loose loops of thread under the fabric suggest that the", "upper tension is too loose", "feed dog is missing", "presser foot is up permanently", "fabric is too clean", "Upper thread is not tight enough."],
          ["H", "A machine that trims and neatens edges as it sews is the", "overlock (serger)", "treadle machine", "hand machine", "embroidery hoop", "It prevents fraying."],
        ],
      },
      {
        week: 2,
        title: "Seams",
        subtopics: ["Meaning of seams", "Plain seam and its neatening", "French and flat-fell seams", "Choosing a seam"],
        objectives: ["Define a seam", "Make a plain seam and neaten it", "Make French and flat-fell seams", "Choose suitable seams for different garments"],
        lesson: {
          title: "Joining Fabric Pieces",
          summary: "Make and neaten common seams.",
          minutes: 45,
          notes: `## Meaning
A **seam** is the **line of stitching that joins two or more pieces of fabric**. The **seam allowance** is the fabric between the stitching line and the raw edge (usually **1.5 cm**).

## Plain (open) seam
1. place right sides of fabric together, raw edges level
2. pin and tack on the fitting line
3. machine along the line; secure the ends with reverse stitching
4. remove tacking; **press the seam open**
Used for most garments.

### Neatening a plain seam
- **overcasting** (by hand)
- **zig-zag** machine stitching
- **pinking** (with pinking shears)
- **edge stitching** (turn under and stitch)
- **overlocking**
- **binding** (enclose edges with bias strip)

## French seam
a seam within a seam; raw edges are **enclosed**.
1. place **wrong sides together**; stitch 5 mm from the edge
2. trim; turn right sides together; press
3. stitch again about 7 mm from the fold
Used for **fine, thin fabrics** that fray (chiffon, voile) and baby clothes.

## Flat-fell (double-stitched) seam
both raw edges are enclosed with **two rows of stitching visible** on the right side. Very **strong**. Used for jeans, shirts, work clothes, pyjamas.

## Other seams
**overlaid (lapped) seam** — for yokes; **run-and-fell**.

## Choosing a seam
consider: type and thickness of fabric; position on the garment; strength needed; how often the item is washed; the look desired.`,
          examples: `**Example 1.** What is a seam allowance? *Answer:* The fabric **between the stitching line and the raw edge**, usually 1.5 cm.

**Example 2.** Which seam is best for chiffon? *Answer:* a **French seam**.

**Example 3.** Which seam is common on jeans? *Answer:* the **flat-fell seam**.`,
        },
        questions: [
          ["E", "The line of stitching that joins pieces of fabric is a", "seam", "hem", "dart", "facing", "Seams join fabric."],
          ["E", "The usual seam allowance is about", "1.5 cm", "15 cm", "1.5 m", "0.1 mm", "It is a narrow margin."],
          ["E", "The most commonly used seam is the", "plain seam", "French seam", "flat-fell seam", "overlaid seam", "It is simple and flat."],
          ["M", "For a plain seam, the fabric pieces are placed with", "right sides together", "wrong sides together", "one on the table only", "edges apart", "The seam is hidden inside."],
          ["M", "A seam in which raw edges are enclosed within a seam is the", "French seam", "plain seam", "zig-zag seam", "pinked seam", "It is a seam within a seam."],
          ["M", "A French seam is suitable for", "thin fabrics that fray", "thick denim", "leather", "canvas bags", "It neatly encloses edges."],
          ["M", "Which is a method of neatening a plain seam?", "zig-zag stitching", "gathering", "darting", "pleating", "It stops fraying."],
          ["H", "A strong seam with two rows of stitching visible on the right side is the", "flat-fell seam", "French seam", "plain seam", "tacked seam", "Used on jeans and shirts."],
          ["H", "The first row of stitching of a French seam is made with", "wrong sides together", "right sides together", "no pins", "the hem folded", "The seam is later enclosed."],
          ["H", "When choosing a seam, one should consider the", "type and thickness of the fabric", "colour of the machine", "size of the room", "day of the week", "Fabric determines suitability."],
        ],
      },
      {
        week: 3,
        title: "Disposal of fullness",
        subtopics: ["Meaning of fullness", "Darts and tucks", "Gathers and pleats", "Elastic and shirring"],
        objectives: ["Explain fullness in garments", "Make darts and tucks", "Make gathers and pleats", "Use elastic to control fullness"],
        lesson: {
          title: "Shaping Garments to Fit",
          summary: "Control fullness in garments with darts, tucks, gathers and pleats.",
          minutes: 45,
          notes: `## Meaning
**Fullness** is the **extra fabric** in a garment that allows it to **fit the curves of the body** and move comfortably. **Disposal of fullness** means controlling this extra fabric neatly.

## Methods
| Method | Description | Where used |
|---|---|---|
| **darts** | stitched, tapering folds that shape fabric to body curves | bust, waist, back of skirts and trousers |
| **tucks** | stitched folds of fabric, often decorative | bodices, sleeves, baby wear |
| **gathers** | fabric drawn into small, soft folds by pulling threads | waistlines of skirts, sleeves, frills |
| **pleats** | folds of fabric pressed or stitched in place | skirts, school pinafores |
| **elastic** | stretchy band inserted in a casing | waistbands, cuffs |
| **shirring** | several rows of gathering using elastic thread | bodices, children's dresses |
| **smocking** | decorative stitching over gathers | children's dresses |

## Types of pleats
**knife pleats** (all facing one direction), **box pleats** (two folds facing away from each other), **inverted pleats** (two folds facing each other).

## Making gathers
1. work two rows of long machine stitches within the seam allowance
2. pull the bobbin threads gently to gather
3. distribute gathers evenly
4. pin to the shorter piece and stitch
5. remove visible gathering threads

## Making a dart
fold along the centre line with right sides together; stitch from the wide end to the point; secure the thread at the point; press darts towards the centre or downwards.`,
          examples: `**Example 1.** Which method shapes fabric to the bust and waist? *Answer:* **darts**.

**Example 2.** Two folds facing away from each other form a **box pleat**.

**Example 3.** How are gathers made? *Answer:* By sewing **long stitches and pulling the threads** to draw up the fabric.`,
        },
        questions: [
          ["E", "The extra fabric in a garment that allows it to fit body curves is", "fullness", "a seam", "a hem", "a facing", "It gives room to move."],
          ["E", "Small soft folds made by pulling threads are", "gathers", "darts", "hems", "facings", "Threads draw the fabric up."],
          ["E", "Pressed or stitched folds of fabric on a skirt are", "pleats", "darts", "seams", "hems", "Pleats fold fabric."],
          ["M", "Stitched tapering folds used at the bust and waist are", "darts", "gathers", "pleats", "frills", "They shape fabric."],
          ["M", "Pleats that all face in one direction are", "knife pleats", "box pleats", "inverted pleats", "darts", "They are like knife blades in a row."],
          ["M", "Two folds facing away from each other form a", "box pleat", "knife pleat", "dart", "tuck", "They make a box shape."],
          ["M", "A stretchy band inserted in a casing at the waist is", "elastic", "interfacing", "a zip", "a button", "It controls fullness and stretches."],
          ["H", "Two folds that face each other form an", "inverted pleat", "knife pleat", "box pleat", "open dart", "They meet at the centre."],
          ["H", "Several rows of gathering made with elastic thread is", "shirring", "pleating", "hemming", "darting", "Elastic thread gathers and stretches."],
          ["H", "A dart is stitched from the", "wide end to the point", "point to the wide end without securing", "hem to the neck", "sleeve to the collar", "It tapers to a point."],
        ],
      },
      {
        week: 4,
        title: "Edge finishes and fastenings",
        subtopics: ["Hems", "Facings and binding", "Fastenings", "Attaching buttons and hooks"],
        objectives: ["Make different types of hems", "Finish edges with facings and binding", "Identify types of fastenings", "Attach buttons, hooks and eyes, and press studs"],
        lesson: {
          title: "Finishing Edges and Closing Garments",
          summary: "Finish garment edges and attach fastenings.",
          minutes: 45,
          notes: `## Hems
A **hem** is a **folded and stitched finish at the lower edge** of a garment or sleeve.
| Hem | Use |
|---|---|
| **turned-up (plain) hem** | most skirts and dresses; folded twice and hemmed |
| **narrow machined hem** | blouses, frills |
| **slip-stitched hem** | invisible hem for dresses |
| **rolled hem** | fine fabrics, scarves |
| **false (faced) hem** | where fabric is short |

## Facings and binding
- **facing**: a piece of fabric cut to the same shape as the edge, stitched and turned inside to finish **necklines, armholes** and openings
- **bias binding**: a strip cut on the **bias** (diagonal) of the fabric, used to enclose raw edges; it stretches around curves

## Fastenings
| Fastening | Use |
|---|---|
| **buttons and buttonholes** | shirts, blouses, dresses |
| **zips (zippers)** | trousers, skirts, bags |
| **hooks and eyes** | waistbands, tops of zips |
| **press studs (snap fasteners)** | light fastening on baby clothes, blouses |
| **Velcro (hook-and-loop tape)** | children's clothes, bags |
| **ties and drawstrings** | pyjamas, trousers |

## Choosing fastenings
position on the garment; type of fabric; strength needed; the wearer (children need easy fastenings); fashion; washing and ironing.

## Attaching a button
mark the position; secure thread with small stitches; place a pin on top of the button to form a **shank** (space); stitch through the holes several times; remove the pin; wind thread round the shank; fasten off at the back.`,
          examples: `**Example 1.** Which fastening is quick and easy for a small child's shoes? *Answer:* **Velcro**.

**Example 2.** What is a facing used for? *Answer:* To **finish necklines and armholes** neatly.

**Example 3.** Why is bias binding good for curved edges? *Answer:* It is cut on the **bias**, so it **stretches** around curves.`,
        },
        questions: [
          ["E", "A folded and stitched finish at the lower edge of a garment is a", "hem", "dart", "pleat", "seam", "It finishes the bottom edge."],
          ["E", "A zip is an example of a", "fastening", "seam", "hem", "dart", "It closes an opening."],
          ["E", "Velcro is also known as", "hook-and-loop tape", "bias binding", "tailor's chalk", "interfacing", "Its hooks grip loops."],
          ["M", "A piece of fabric used to finish necklines and armholes is a", "facing", "pleat", "gather", "hem gauge", "It is turned inside."],
          ["M", "A strip of fabric cut diagonally to enclose raw edges is", "bias binding", "a pleat", "a dart", "a tuck", "It stretches around curves."],
          ["M", "Small fasteners that snap together, often on baby clothes, are", "press studs", "hooks and eyes", "zips", "buckles", "They snap shut."],
          ["M", "Hooks and eyes are commonly used at the", "top of a zip or waistband", "hem of a skirt", "centre of a pocket", "end of a sleeve seam only", "They add security."],
          ["H", "Placing a pin on top of a button while stitching creates a", "shank", "dart", "tuck", "pleat", "It gives room for the buttonhole layer."],
          ["H", "The best hem for fine fabrics such as scarves is the", "rolled hem", "false hem", "deep turned-up hem", "flat-fell hem", "It is narrow and delicate."],
          ["H", "When choosing fastenings for a young child's clothes, the most important factor is", "ease of use", "cost of gold buttons", "fashion trends only", "the colour of the zip", "Children should manage them."],
        ],
      },
      {
        week: 5,
        title: "Laundry work",
        subtopics: ["Meaning of laundry", "Laundry equipment and agents", "Steps in laundering", "Laundering different fabrics"],
        objectives: ["Explain laundry work", "Identify laundry equipment and agents", "Describe the steps in laundering clothes", "Launder cotton, wool and synthetic fabrics correctly"],
        lesson: {
          title: "Washing and Caring for Clothes",
          summary: "Launder different fabrics correctly.",
          minutes: 45,
          notes: `## Meaning
**Laundry work** is the process of **washing, drying, ironing and storing** clothes and household linen.

## Laundry equipment
buckets and basins, washing board, brushes, washing machine, drying line and pegs, iron and ironing board, clothes hangers, laundry basket.

## Laundry agents
| Agent | Use |
|---|---|
| **soap and detergent** | remove dirt |
| **bleach** | whiten white cottons; remove some stains |
| **starch** | stiffen cotton and linen |
| **fabric softener** | soften and reduce static |
| **blue (laundry blue)** | makes whites look whiter |
| **stain removers** | treat particular stains |

## Steps in laundering
1. **sort** clothes: whites, colours, delicate fabrics, heavily soiled items
2. **mend** tears and remove stains before washing
3. **soak** heavily soiled items (not wool, silk or coloured items that bleed)
4. **wash** in soapy water of suitable temperature
5. **rinse** thoroughly to remove soap
6. **finish**: starch or blue if needed
7. **dry** correctly (shade for coloured items)
8. **iron** at the right temperature
9. **air** and **store**

## Laundering different fabrics
| Fabric | Care |
|---|---|
| **cotton and linen** | hot water, rubbing and boiling for whites; hot iron |
| **wool** | lukewarm water, mild soap, squeeze gently — **do not rub** (it shrinks/felts); dry **flat** in shade; cool iron |
| **silk** | lukewarm water, mild soap; squeeze gently; iron while slightly damp with a cool iron |
| **synthetics** (nylon, polyester) | warm water; do not wring hard; drip-dry; **cool iron** (they melt) |

**Care labels** show washing temperature, bleaching, drying and ironing instructions — always follow them.`,
          examples: `**Example 1.** Why should wool not be rubbed during washing? *Answer:* It **shrinks and felts**.

**Example 2.** What is the first step in laundering? *Answer:* **sorting** the clothes.

**Example 3.** Which laundry agent stiffens cotton shirts? *Answer:* **starch**.`,
        },
        questions: [
          ["E", "Washing, drying, ironing and storing clothes is", "laundry work", "needlework", "meal planning", "interior decoration", "It keeps clothes clean."],
          ["E", "The first step in laundering is", "sorting the clothes", "ironing", "storing", "starching", "Clothes are grouped first."],
          ["E", "The agent used to stiffen cotton shirts is", "starch", "bleach", "fabric softener", "blue", "Starch gives crispness."],
          ["M", "Wool should not be rubbed while washing because it", "shrinks and felts", "becomes whiter", "dries faster", "becomes stronger", "Fibres mat together."],
          ["M", "Coloured clothes should be dried in the shade to", "prevent fading", "make them shrink", "remove all colour", "stiffen them", "Sunlight fades dyes."],
          ["M", "Synthetic fabrics should be ironed with a", "cool iron", "very hot iron", "wet stone", "charcoal flame", "They melt with high heat."],
          ["M", "Laundry blue is used to", "make white clothes look whiter", "stiffen clothes", "soften towels", "remove grease", "It counteracts yellowing."],
          ["H", "The best way to dry a woollen sweater is", "flat in the shade", "hung by the shoulders in hot sun", "wrung tightly and hung", "on a hot iron", "Hanging stretches wet wool."],
          ["H", "Instructions on how to wash, dry and iron a garment are shown on its", "care label", "price tag", "receipt", "pattern envelope", "Follow care labels."],
          ["H", "Items that should NOT be soaked for long before washing include", "coloured items that may bleed", "white cotton towels", "heavily soiled cotton", "cotton overalls", "Dye can run into other clothes."],
        ],
      },
      {
        week: 6,
        title: "Stain removal",
        subtopics: ["Meaning and classes of stains", "Rules for stain removal", "Stain removal agents", "Removing common stains"],
        objectives: ["Define a stain and classify stains", "State the rules for removing stains", "Identify stain removal agents", "Remove common household stains"],
        lesson: {
          title: "Getting Rid of Stains",
          summary: "Remove common stains safely and effectively.",
          minutes: 40,
          notes: `## Meaning
A **stain** is a **mark or discolouration** on fabric that is **not removed by ordinary washing**.

## Classes of stains
| Class | Examples |
|---|---|
| **animal (protein)** | blood, egg, milk, sweat |
| **vegetable** | fruit juice, tea, coffee, grass, cocoa |
| **grease** | palm oil, butter, engine oil, lipstick |
| **mineral** | rust, ink, iron mould |
| **dye** | colour run from other clothes |
| **others** | chewing gum, candle wax, paint |

## Rules for stain removal
- treat stains **while fresh**
- identify the stain and the fabric
- try the **simplest method first** (cold water)
- **test** the remover on a hidden part of the garment
- work from the **outside of the stain inwards** to avoid spreading
- use a pad of cloth underneath to absorb the stain
- rinse well after treatment
- never use hot water on protein stains (it **sets** them)

## Stain removal agents
cold water, soap and detergent, salt, lemon juice, vinegar, borax, methylated spirit, hydrogen peroxide, bleach (for white cottons only), eucalyptus oil, grease solvents.

## Removing common stains
| Stain | Method |
|---|---|
| **blood** | soak in **cold** salty water; wash |
| **tea/coffee** | rinse in warm water; sprinkle borax; wash |
| **palm oil / grease** | apply detergent or grease solvent; wash in hot soapy water (if fabric allows) |
| **fruit juice** | stretch over a bowl and pour boiling water through (white cotton); lemon juice |
| **rust** | lemon juice and salt; dry in sun; rinse |
| **chewing gum** | harden with **ice**, scrape off; clean remaining mark |
| **candle wax** | scrape off; place blotting paper over and iron with a warm iron |
| **ink** | soak in milk or use methylated spirit; wash |`,
          examples: `**Example 1.** Why should hot water not be used on blood stains? *Answer:* Heat **sets protein stains**, making them permanent.

**Example 2.** How is chewing gum removed? *Answer:* **Harden with ice**, then scrape it off.

**Example 3.** Which class of stain is palm oil? *Answer:* a **grease** stain.`,
        },
        questions: [
          ["E", "A mark on fabric not removed by ordinary washing is a", "stain", "seam", "dart", "hem", "It needs special treatment."],
          ["E", "Stains are easiest to remove when they are", "fresh", "old", "ironed", "dried in the sun", "Fresh stains have not set."],
          ["E", "Palm oil stain is a", "grease stain", "protein stain", "mineral stain", "dye stain", "Oils cause grease stains."],
          ["M", "Blood stains should be soaked in", "cold salty water", "boiling water", "hot oil", "bleach for all fabrics", "Heat sets protein."],
          ["M", "Chewing gum on fabric is best removed by", "hardening with ice and scraping", "ironing it in", "boiling the fabric", "rubbing with oil only", "Hard gum scrapes off."],
          ["M", "Rust stains are classified as", "mineral stains", "vegetable stains", "protein stains", "grease stains", "Rust comes from iron."],
          ["M", "Tea and coffee stains belong to the class of", "vegetable stains", "animal stains", "mineral stains", "dye stains", "They come from plants."],
          ["H", "When removing a stain, one should work", "from the outside of the stain inwards", "from the centre outwards", "in circles over the whole garment", "only on the right side with pressure", "This prevents spreading."],
          ["H", "Candle wax is removed by scraping and then", "ironing over blotting paper", "soaking in hot oil", "freezing for a month", "boiling with dye", "The paper absorbs melted wax."],
          ["H", "A stain remover should first be tested on", "a hidden part of the garment", "the front of the garment", "a new garment", "the skin", "It may damage colour or fabric."],
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
        title: "Resources and decision-making",
        subtopics: ["Meaning of home management", "Human and material resources", "Steps in decision-making", "Management of time and energy"],
        objectives: ["Explain home management", "Classify family resources", "Apply the steps in decision-making", "Manage time and energy efficiently"],
        lesson: {
          title: "Managing Family Resources",
          summary: "Classify resources and make sound decisions at home.",
          minutes: 40,
          notes: `## Home management
**Home management** is the process of **planning, organising, implementing and evaluating** the use of family resources to achieve family **goals**.

## Resources
| Type | Examples |
|---|---|
| **human resources** | time, energy, knowledge, skills, abilities, attitudes |
| **material (non-human) resources** | money, land, house, furniture, equipment, food |
| **community resources** | schools, hospitals, markets, roads, parks, libraries |
Resources are **limited**, so they must be used wisely.

## Goals, values and standards
- **goals**: what the family wants to achieve (e.g. buying a house)
- **values**: what the family considers important (education, honesty)
- **standards**: acceptable levels of quality (how clean the house should be)

## Steps in decision-making
1. identify the **problem**
2. gather **information**
3. list **alternatives**
4. consider the **consequences** of each alternative
5. **choose** the best alternative
6. **act** on the decision
7. **evaluate** the result

## Time management
make a **daily schedule** or timetable; set priorities; do tasks in order of importance; avoid procrastination; combine tasks (e.g. washing while cooking); allow time for rest.

## Energy management
arrange work areas conveniently; use **labour-saving devices** (blender, washing machine); sit for jobs that can be done sitting; use correct posture; alternate heavy and light tasks; share work among family members; rest adequately.`,
          examples: `**Example 1.** Is time a human or material resource? *Answer:* a **human** resource.

**Example 2.** What is the last step in decision-making? *Answer:* **evaluating** the result.

**Example 3.** Name one labour-saving device. *Answer:* a **washing machine** (or blender).`,
        },
        questions: [
          ["E", "Planning, organising and evaluating the use of family resources is", "home management", "laundry", "needlework", "food preservation", "It aims to meet family goals."],
          ["E", "Money, furniture and equipment are", "material resources", "human resources", "community resources", "values", "They are non-human resources."],
          ["E", "Time, energy and skills are", "human resources", "material resources", "community resources", "standards", "They come from people."],
          ["M", "Schools, hospitals and markets are", "community resources", "human resources", "family goals", "personal values", "They serve the whole community."],
          ["M", "What a family wants to achieve is its", "goal", "resource", "standard", "cost", "Goals guide decisions."],
          ["M", "The first step in decision-making is to", "identify the problem", "act on the decision", "evaluate the result", "choose an alternative", "The problem must be clear first."],
          ["M", "A blender is an example of a", "labour-saving device", "community resource", "value", "standard", "It saves time and energy."],
          ["H", "The last step in decision-making is", "evaluating the result", "gathering information", "identifying the problem", "listing alternatives", "Evaluation shows whether it worked."],
          ["H", "Putting off tasks until later is called", "procrastination", "prioritising", "scheduling", "delegating", "It wastes time."],
          ["H", "Sharing household chores among family members helps to", "conserve each person's energy", "increase quarrels", "waste time", "reduce skills", "Work is spread out."],
        ],
      },
      {
        week: 2,
        title: "Family income and budgeting",
        subtopics: ["Sources of family income", "Types of income", "Preparing a family budget", "Saving and wise spending"],
        objectives: ["Identify sources of family income", "Distinguish types of income", "Prepare a simple family budget", "Explain the importance of saving"],
        lesson: {
          title: "Planning the Family's Money",
          summary: "Prepare a family budget and practise saving.",
          minutes: 40,
          notes: `## Sources of family income
salaries and wages; profits from business; farming; rent from property; pensions; interest on savings; gifts and allowances.

## Types of income
| Type | Meaning |
|---|---|
| **money income** | money received (salary, profit) |
| **real income** | goods and services money can buy |
| **psychic income** | satisfaction from using resources (joy, comfort) |
| **fixed income** | same amount regularly (salary) |
| **irregular income** | varies (trading profits, farming) |

## Budget
A **budget** is a **plan for spending income** over a period (week, month, year).

### Steps in preparing a budget
1. estimate **total income**
2. list **needs** (food, rent, school fees, transport, health, clothing, utilities)
3. set aside **savings** (e.g. 10%)
4. allocate amounts to each item according to **priority**
5. keep a record of actual spending
6. review and adjust

### Sample monthly budget (income ₦200,000)
| Item | ₦ | % |
|---|---|---|
| food | 70,000 | 35 |
| rent | 30,000 | 15 |
| education | 30,000 | 15 |
| transport | 20,000 | 10 |
| savings | 20,000 | 10 |
| utilities | 12,000 | 6 |
| health | 10,000 | 5 |
| clothing and others | 8,000 | 4 |
| **total** | **200,000** | **100** |

## Saving
**Saving** is keeping part of income for future use. Places: bank savings accounts, co-operatives, esusu/ajo, piggy banks. Importance: emergencies, future needs, investment, retirement.

## Wise spending
distinguish **needs** from **wants**; avoid impulse buying; compare prices; buy in season; avoid unnecessary debt.`,
          examples: `**Example 1.** Income ₦200,000; savings 10%. How much is saved? *Answer:* **₦20,000**.

**Example 2.** Is a salary fixed or irregular income? *Answer:* **fixed** income.

**Example 3.** Is food a need or a want? *Answer:* a **need**.`,
        },
        questions: [
          ["E", "A plan for spending income over a period is a", "budget", "recipe", "menu", "pattern", "It guides spending."],
          ["E", "Keeping part of income for future use is", "saving", "borrowing", "spending", "wasting", "It prepares for emergencies."],
          ["E", "Which is a need rather than a want?", "food", "an expensive phone", "designer shoes", "a video game", "Needs are essential for life."],
          ["M", "The same amount of money received regularly, such as a salary, is", "fixed income", "irregular income", "psychic income", "real income", "It does not change."],
          ["M", "The goods and services money can buy are", "real income", "money income", "psychic income", "fixed income", "Real income measures purchasing power."],
          ["M", "Satisfaction gained from using resources is", "psychic income", "money income", "real income", "fixed income", "It is emotional benefit."],
          ["M", "If a family earns ₦200,000 and saves 10%, it saves", "₦20,000", "₦2,000", "₦200,000", "₦10,000", "10% of 200,000 = 20,000."],
          ["H", "The first step in preparing a budget is to", "estimate total income", "buy luxuries", "take a loan", "go shopping", "You must know what is available."],
          ["H", "Buying things suddenly without planning is", "impulse buying", "budgeting", "saving", "comparing prices", "It wastes money."],
          ["H", "A family with ₦200,000 income spends 35% on food. The food allocation is", "₦70,000", "₦35,000", "₦7,000", "₦135,000", "35% of 200,000 = 70,000."],
        ],
      },
      {
        week: 3,
        title: "Consumer education",
        subtopics: ["Meaning of consumer education", "Consumer rights and responsibilities", "Sources of consumer information", "Effects of advertising"],
        objectives: ["Explain consumer education", "State consumer rights and responsibilities", "Identify sources of consumer information", "Evaluate the effects of advertising on buying"],
        lesson: {
          title: "Becoming a Wise Buyer",
          summary: "Apply consumer knowledge to make wise purchases.",
          minutes: 40,
          notes: `## Meaning
A **consumer** is a person who **buys and uses goods and services**. **Consumer education** teaches people to **buy wisely**, get value for money and protect their rights.

## Consumer rights
right to **safety**, right to be **informed**, right to **choose**, right to be **heard**, right to **redress**, right to consumer **education**, right to basic **needs**, right to a healthy **environment**.

## Consumer responsibilities
read labels and instructions; check expiry dates; keep receipts; compare prices and quality; report fake or harmful products; use products as directed; avoid wasteful buying.

## Sources of consumer information
product **labels**, advertisements, shop assistants, consumer agencies (FCCPC, NAFDAC, SON), friends and family, magazines, radio and television programmes, the internet and product reviews.

## Advertising
**Advertising** gives information about goods and services to persuade people to buy.
**Positive effects:** informs about new products, prices and uses; encourages competition.
**Negative effects:** may **exaggerate** or mislead; encourages **impulse buying**; creates desire for unnecessary goods; may promote harmful products.
**Tip:** judge adverts critically — compare with facts, labels and reviews.

## Unfair practices to watch for
fake and adulterated products; short measures (tampered scales and measuring cups); expired goods repackaged; false advertising; overpricing.`,
          examples: `**Example 1.** Who is a consumer? *Answer:* A person who **buys and uses goods and services**.

**Example 2.** Name one negative effect of advertising. *Answer:* It can **encourage impulse buying**.

**Example 3.** Where can a consumer find the ingredients of a product? *Answer:* on the **label**.`,
        },
        questions: [
          ["E", "A person who buys and uses goods and services is a", "consumer", "producer", "wholesaler", "manufacturer", "Consumers use products."],
          ["E", "Education that teaches people to buy wisely is", "consumer education", "physical education", "civic education only", "adult literacy", "It protects buyers."],
          ["E", "A consumer should keep", "receipts of purchases", "empty promises", "expired goods", "fake products", "Receipts prove purchase."],
          ["M", "Which is a consumer right?", "the right to safety", "the right to cheat", "the right to steal", "the right to hoard", "Products must be safe."],
          ["M", "Using a tampered measuring cup to sell less than paid for is", "short measure", "fair trading", "consumer education", "packaging", "Buyers receive less."],
          ["M", "One positive effect of advertising is that it", "informs consumers about new products", "always tells lies", "forces people to buy", "raises all prices", "It spreads information."],
          ["M", "Which is a source of consumer information?", "product labels", "rumours only", "fortune tellers", "dreams", "Labels give facts."],
          ["H", "Advertising can lead to impulse buying because it", "creates a desire for things not planned", "provides receipts", "reduces choice", "removes prices", "Persuasion triggers unplanned purchases."],
          ["H", "A consumer who reports a fake product to the authorities is exercising the right to be", "heard", "silent", "cheated", "ignored", "Complaints must be heard."],
          ["H", "A wise consumer should judge advertisements by", "comparing them with facts and reviews", "believing everything", "buying immediately", "ignoring labels", "Critical thinking avoids deception."],
        ],
      },
      {
        week: 4,
        title: "Safety in the home and first aid",
        subtopics: ["Common home accidents", "Causes and prevention of home accidents", "The first aid box", "First aid for common injuries"],
        objectives: ["Identify common accidents in the home", "Explain causes and prevention of home accidents", "List the contents of a first aid box", "Give first aid for common injuries"],
        lesson: {
          title: "Preventing and Handling Accidents at Home",
          summary: "Prevent home accidents and give simple first aid.",
          minutes: 40,
          notes: `## Common home accidents
falls, burns and scalds, cuts, **electric shock**, **poisoning**, choking, drowning (in buckets, wells), fire, suffocation (e.g. generator fumes).

## Causes and prevention
| Accident | Cause | Prevention |
|---|---|---|
| falls | wet floors, loose rugs, toys on stairs, poor lighting | wipe spills; secure rugs; light stairways; install handrails |
| burns | hot pots, open fires, hot irons | keep children away; turn pot handles in; unplug irons |
| poisoning | drugs and chemicals within reach; storing kerosene in drink bottles | lock away medicines and chemicals; label containers; never store chemicals in food or drink bottles |
| electric shock | wet hands, bare wires, overloaded sockets | repair faulty wiring; cover sockets; dry hands |
| choking | small objects, large mouthfuls | keep small items from babies; cut food small |
| suffocation | running generators indoors | place generators **outside**, far from windows |
| drowning | open wells, buckets of water | cover wells; supervise children near water |

## First aid box
plasters, sterile gauze, bandages, cotton wool, **antiseptic** solution, scissors, tweezers, safety pins, gloves, burn cream, pain relievers (for adults), thermometer, a first aid manual.

## First aid for common injuries
- **cuts**: wash hands; press to stop bleeding; clean with antiseptic; cover with a plaster
- **burns**: cool under running water for about 20 minutes; cover loosely with clean cloth
- **nosebleed**: sit up, lean **forward**, pinch the soft part of the nose for 10 minutes
- **fainting**: lay the person flat, raise the legs, loosen tight clothing, give fresh air
- **electric shock**: switch off the power first; do not touch the victim with bare hands; use a dry wooden object
- **poisoning**: do not induce vomiting unless advised; take the container to the hospital
Seek medical help for serious cases.`,
          examples: `**Example 1.** Why should kerosene never be stored in a drink bottle? *Answer:* A child may **drink it by mistake** (poisoning).

**Example 2.** First aid for a nosebleed? *Answer:* **Sit up, lean forward and pinch the soft part** of the nose.

**Example 3.** Why should generators be kept outside? *Answer:* Their **fumes (carbon monoxide) can kill** people indoors.`,
        },
        questions: [
          ["E", "The box containing items for treating minor injuries is the", "first aid box", "tool box", "lunch box", "letter box", "It holds bandages and antiseptics."],
          ["E", "Wet floors can cause", "falls", "poisoning", "choking", "drowning", "They are slippery."],
          ["E", "Medicines should be kept", "out of children's reach", "on the floor", "in drink bottles", "in the kitchen sink", "Children may swallow them."],
          ["M", "Storing kerosene in soft-drink bottles can lead to", "poisoning", "better cooking", "cleaner homes", "stronger bottles", "Children may drink it."],
          ["M", "Running a generator inside the house can cause", "suffocation from its fumes", "cleaner air", "cooler rooms", "better sleep", "Carbon monoxide is deadly."],
          ["M", "The first thing to do for a person receiving an electric shock is to", "switch off the power", "pull the person with bare hands", "pour water on him", "shout only", "Remove the source safely."],
          ["M", "Which item is found in a first aid box?", "antiseptic solution", "cooking oil", "hammer", "kerosene", "It cleans wounds."],
          ["H", "The correct first aid for a nosebleed is to", "sit up, lean forward and pinch the soft part of the nose", "lie flat and tilt the head back", "blow the nose hard", "pour water into the nose", "Leaning forward prevents swallowing blood."],
          ["H", "A person who has fainted should be", "laid flat with the legs raised", "made to stand immediately", "given hot tea at once", "covered tightly", "Blood flows back to the brain."],
          ["H", "An open well near a house should be", "covered to prevent drowning", "left open for air", "filled with refuse", "used as a play area", "Children could fall in."],
        ],
      },
      {
        week: 5,
        title: "Interior decoration",
        subtopics: ["Meaning of interior decoration", "Elements of design", "The colour wheel and colour schemes", "Arranging furniture and accessories"],
        objectives: ["Explain interior decoration", "Identify the elements of design", "Use the colour wheel to plan colour schemes", "Arrange furniture and accessories attractively"],
        lesson: {
          title: "Beautifying the Home",
          summary: "Apply design elements and colour to decorate a room.",
          minutes: 40,
          notes: `## Meaning
**Interior decoration** is the art of **arranging and beautifying the inside of a building** — walls, floors, furniture, lighting and accessories — to make it attractive, comfortable and functional.

## Elements of design
**line** (vertical, horizontal, curved), **shape/form**, **colour**, **texture** (rough, smooth), **space**, **light**, **pattern**.

## Principles of design
**balance** (formal/symmetrical or informal), **proportion**, **emphasis** (focal point), **rhythm** (repetition), **harmony** (unity).

## The colour wheel
- **primary colours**: **red, yellow, blue** — cannot be made by mixing
- **secondary colours**: made by mixing two primaries — **orange** (red + yellow), **green** (yellow + blue), **purple/violet** (red + blue)
- **tertiary colours**: primary + neighbouring secondary (e.g. yellow-green)
- **warm colours**: red, orange, yellow — make rooms feel cosy and smaller
- **cool colours**: blue, green, violet — make rooms feel calm and larger
- **neutral colours**: white, black, grey, beige

## Colour schemes
| Scheme | Description |
|---|---|
| **monochromatic** | shades and tints of **one** colour |
| **analogous (related)** | colours **next to each other** on the wheel |
| **complementary** | colours **opposite** each other (red and green, blue and orange, yellow and purple) |
| **neutral** | whites, greys, beiges with accents |

## Arranging furniture and accessories
consider the room's use; allow free movement (traffic paths); create a focal point; group furniture for conversation; place light sources properly; use accessories (curtains, cushions, pictures, flowers, rugs) in moderation; avoid clutter.`,
          examples: `**Example 1.** Which colours are primary? *Answer:* **red, yellow and blue**.

**Example 2.** Red and green together form which scheme? *Answer:* **complementary** (opposite on the wheel).

**Example 3.** Which colours make a small room look larger? *Answer:* **cool and light colours**.`,
        },
        questions: [
          ["E", "The art of beautifying the inside of a building is", "interior decoration", "landscaping", "plumbing", "roofing", "It deals with interiors."],
          ["E", "The primary colours are", "red, yellow and blue", "green, orange and purple", "black, white and grey", "pink, brown and gold", "They cannot be mixed from others."],
          ["E", "Mixing red and yellow gives", "orange", "green", "purple", "brown only", "Orange is a secondary colour."],
          ["M", "Mixing yellow and blue gives", "green", "orange", "purple", "red", "Green is secondary."],
          ["M", "Colours opposite each other on the colour wheel are", "complementary", "analogous", "monochromatic", "neutral", "They contrast strongly."],
          ["M", "A scheme using shades and tints of one colour is", "monochromatic", "complementary", "analogous", "triadic only", "Mono means one."],
          ["M", "Red, orange and yellow are called", "warm colours", "cool colours", "neutral colours", "tertiary colours only", "They suggest warmth."],
          ["H", "To make a small room look larger, one should use", "light, cool colours", "dark, warm colours", "black walls", "heavy patterns everywhere", "Cool light colours recede."],
          ["H", "Colours next to each other on the colour wheel form an", "analogous scheme", "complementary scheme", "neutral scheme", "opposite scheme", "They are related."],
          ["H", "A point in a room that draws attention first is the", "focal point (emphasis)", "traffic path", "rhythm", "texture", "It creates emphasis."],
        ],
      },
      {
        week: 6,
        title: "Adolescence and personal development",
        subtopics: ["Meaning of adolescence", "Physical changes at puberty", "Emotional and social changes", "Managing adolescence responsibly"],
        objectives: ["Explain adolescence and puberty", "Describe physical changes in boys and girls", "Describe emotional and social changes", "Suggest ways to manage adolescence responsibly"],
        lesson: {
          title: "Growing Up Responsibly",
          summary: "Understand and manage the changes of adolescence.",
          minutes: 40,
          notes: `## Meaning
**Adolescence** is the period of **growth from childhood to adulthood**, roughly **10 to 19 years**.
**Puberty** is the stage when the body becomes **sexually mature**, triggered by **hormones**.

## Physical changes
| Girls | Boys |
|---|---|
| growth of breasts | deepening of the voice |
| widening of hips | broadening of shoulders |
| **menstruation** begins | growth of beard and moustache |
| growth of pubic and underarm hair | growth of pubic and underarm hair |
| growth spurt | growth spurt; muscle development |
| pimples (acne) may appear | pimples; wet dreams |

## Emotional and social changes
mood swings; desire for **independence**; increased interest in appearance; strong influence of **peer groups**; attraction to the opposite sex; curiosity; sensitivity to criticism.

## Challenges
peer pressure, drug and alcohol abuse, early sexual activity, **teenage pregnancy**, sexually transmitted infections, cultism, low self-esteem, poor academic performance.

## Managing adolescence responsibly
- maintain good **personal hygiene** (bath, deodorant, menstrual hygiene)
- eat a **balanced diet**; exercise; sleep well
- choose **good friends**; learn to say **"No"** to negative peer pressure
- **abstinence** from sexual activity
- talk to parents, teachers, counsellors or religious leaders
- set goals and focus on education
- engage in hobbies, sports and clubs
- respect yourself and others

These changes are **normal**; every person develops at his or her own pace.`,
          examples: `**Example 1.** What triggers the changes of puberty? *Answer:* **hormones**.

**Example 2.** Name one physical change in boys. *Answer:* **deepening of the voice**.

**Example 3.** How can an adolescent resist negative peer pressure? *Answer:* By **saying "No" firmly** and choosing good friends.`,
        },
        questions: [
          ["E", "The period of growth from childhood to adulthood is", "adolescence", "infancy", "old age", "retirement", "It spans about 10 to 19 years."],
          ["E", "The stage when the body becomes sexually mature is", "puberty", "infancy", "menopause", "retirement", "Hormones trigger it."],
          ["E", "The beginning of menstruation occurs in", "girls", "boys", "babies", "the elderly only", "It is a sign of puberty in girls."],
          ["M", "Deepening of the voice is a sign of puberty in", "boys", "girls", "infants", "grandmothers", "The larynx grows."],
          ["M", "The changes of puberty are triggered by", "hormones", "food colouring", "the weather", "school uniforms", "Hormones are chemical messengers."],
          ["M", "Influence from friends of the same age is", "peer pressure", "hormonal change", "menstruation", "home management", "Peers influence behaviour."],
          ["M", "Which is an emotional change during adolescence?", "mood swings", "growth of beard", "widening of hips", "breaking of voice", "Feelings change quickly."],
          ["H", "The surest way for adolescents to avoid teenage pregnancy is", "abstinence", "peer pressure", "drug use", "keeping secrets", "No sexual activity means no pregnancy."],
          ["H", "An adolescent troubled by body changes should", "talk to a parent, teacher or counsellor", "hide and worry alone", "join a cult", "take unknown drugs", "Trusted adults give guidance."],
          ["H", "Using deodorant and bathing regularly during adolescence helps to prevent", "body odour", "growth", "puberty", "menstruation", "Sweat glands become more active."],
        ],
      },
    ],
  },
];
