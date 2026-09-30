import type { TermPlan } from "../types";

/** JSS1 Basic Science — original Precious PS content following the national Basic Science and Technology structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Science and the scientific method",
        subtopics: ["Meaning of science", "Steps of the scientific method", "Safety in the science laboratory", "Science in everyday life"],
        objectives: ["Explain the meaning of science", "List the steps of the scientific method in order", "State basic laboratory safety rules", "Give examples of how science improves daily life"],
        lesson: {
          title: "What Is Science?",
          summary: "Understand what science is and how scientists find answers to questions.",
          minutes: 40,
          notes: `## Meaning of science
**Science** is the organised study of the natural world through **observation** and **experiment**. It helps us understand, explain and predict things around us.

## The scientific method
Scientists solve problems in orderly steps:
1. **Observation** — noticing something with the senses. *The plants near the window grow taller.*
2. **Problem / question** — *Does light affect plant growth?*
3. **Hypothesis** — a sensible guess that can be tested. *Plants grow better with more light.*
4. **Experiment** — a fair test to check the hypothesis. Change only **one** thing (the variable) at a time.
5. **Result / data** — recording what happens.
6. **Conclusion** — deciding whether the hypothesis is supported.
7. **Communication** — sharing results so others can check them.

## Laboratory safety rules
- Do not enter the laboratory without a teacher.
- Never eat, drink or taste chemicals.
- Wear protective clothing (lab coat, goggles) when told.
- Report every accident or breakage immediately.
- Keep flammable substances away from flames.
- Wash your hands after practical work.

## Science in everyday life
Medicine and vaccines, clean water, electricity, mobile phones, improved crops, transport and weather forecasting all come from science.`,
          examples: `**Example 1.** Ada notices that bread left in a dark, damp cupboard grows mould faster. What is a suitable hypothesis? *Answer:* **Mould grows faster in damp conditions.**

**Example 2.** In testing whether water helps seeds germinate, why must both groups of seeds be kept at the same temperature? *Answer:* So that **water is the only factor that changes** — a fair test.

**Example 3.** Put in order: conclusion, hypothesis, observation, experiment. *Answer:* **observation → hypothesis → experiment → conclusion**.`,
        },
        questions: [
          ["E", "Science is best described as", "the organised study of nature through observation and experiment", "the study of languages only", "guessing without testing", "the history of kings", "Science relies on observation and experiment."],
          ["E", "A sensible guess that can be tested is called a", "hypothesis", "conclusion", "result", "law", "A hypothesis is tested by experiment."],
          ["E", "Which is a laboratory safety rule?", "Never taste chemicals.", "Eat snacks during experiments.", "Hide broken glassware.", "Run around the laboratory.", "Chemicals can be poisonous."],
          ["M", "What is the first step of the scientific method?", "observation", "conclusion", "experiment", "communication", "Scientists begin by noticing something."],
          ["M", "In a fair test, how many factors should be changed at a time?", "one", "two", "all of them", "none", "Changing one factor shows its effect clearly."],
          ["M", "Which step comes immediately after forming a hypothesis?", "experiment", "observation", "problem", "communication", "The hypothesis is tested by experiment."],
          ["M", "Deciding whether the results support the hypothesis is called the", "conclusion", "observation", "problem", "variable", "The conclusion interprets the results."],
          ["H", "Ada notices that bread in a damp cupboard grows mould faster. Which is a suitable hypothesis?", "Mould grows faster in damp conditions.", "Bread is tasty.", "Cupboards are dark.", "Mould is green.", "It is a testable explanation of the observation."],
          ["H", "When testing whether water helps seeds germinate, both groups of seeds should be kept at the same temperature so that", "water is the only factor that changes", "the seeds grow faster", "the experiment takes longer", "the seeds do not need water", "Controlling other factors makes the test fair."],
          ["H", "Why should scientists communicate their results?", "So that others can check and use them", "To keep them secret", "To avoid doing experiments", "Because results are always wrong", "Sharing allows checking and progress."],
        ],
      },
      {
        week: 2,
        title: "Living and non-living things",
        subtopics: ["Characteristics of living things", "Differences between living and non-living things", "Examples of living and non-living things", "Things that were once alive"],
        objectives: ["List the characteristics of living things", "Distinguish living things from non-living things", "Classify given objects as living or non-living", "Explain why objects made from once-living things are no longer alive"],
        lesson: {
          title: "Living and Non-Living Things",
          summary: "Use the characteristics of life to tell living things from non-living things.",
          minutes: 40,
          notes: `## Characteristics of living things (MRS GREN)
| Letter | Characteristic | Meaning |
|---|---|---|
| M | **Movement** | changing position; plants move parts slowly (e.g. towards light) |
| R | **Respiration** | releasing energy from food |
| S | **Sensitivity** (irritability) | responding to changes around them |
| G | **Growth** | permanent increase in size |
| R | **Reproduction** | producing young ones |
| E | **Excretion** | removing waste products |
| N | **Nutrition** | taking in or making food |

A thing is **living** only if it shows **all** these characteristics during its life.

## Non-living things
Non-living things do **not** show all the characteristics: *stone, water, table, car, air*.
A car **moves** and **uses fuel**, but it does not grow, reproduce or respond like a living thing — so it is non-living.
Fire "grows" and "uses air" but cannot reproduce or excrete in the biological sense.

## Once-living things
A dead leaf, a wooden chair or a piece of cloth made of cotton **came from** living things but are no longer alive.

## Differences
| Living things | Non-living things |
|---|---|
| grow from within | do not grow (or only increase by addition) |
| reproduce | do not reproduce |
| respire | do not respire |
| respond to stimuli | do not respond |`,
          examples: `**Example 1.** Is a goat living or non-living? *Answer:* **living** — it feeds, grows, reproduces, moves, etc.

**Example 2.** A car moves and uses fuel. Why is it non-living? *Answer:* It **does not grow, reproduce or respond** like living things.

**Example 3.** Which characteristic is shown when a plant bends towards light? *Answer:* **sensitivity** (response to light).`,
        },
        questions: [
          ["E", "Which of these is a living thing?", "goat", "stone", "chair", "bucket", "A goat shows all the characteristics of life."],
          ["E", "Which of these is a non-living thing?", "stone", "mango tree", "fish", "mushroom", "A stone does not feed, grow or reproduce."],
          ["E", "Producing young ones is called", "reproduction", "respiration", "excretion", "nutrition", "Living things reproduce."],
          ["M", "Releasing energy from food is called", "respiration", "excretion", "growth", "movement", "Respiration releases energy."],
          ["M", "Removing waste products from the body is", "excretion", "nutrition", "sensitivity", "reproduction", "Excretion removes wastes."],
          ["M", "A plant bending towards light shows", "sensitivity", "excretion", "reproduction", "nutrition", "It is responding to light."],
          ["M", "A car moves and uses fuel, yet it is non-living because it", "does not grow or reproduce", "is made of metal", "has wheels", "is expensive", "It lacks most characteristics of life."],
          ["H", "A wooden chair is made from a tree. The chair is", "non-living, but made from a once-living thing", "a living thing", "a plant", "growing slowly", "Wood came from a tree but is no longer alive."],
          ["H", "Which characteristic of life does a growing child show most clearly?", "permanent increase in size", "excretion only", "reproduction", "photosynthesis", "Growth is a permanent increase in size."],
          ["H", "In MRS GREN, the letter N stands for", "nutrition", "nerves", "nesting", "noise", "Living things need food: nutrition."],
        ],
      },
      {
        week: 3,
        title: "Classification of living things",
        subtopics: ["Why we classify living things", "Plants and animals", "Differences between plants and animals", "Groups of animals and plants"],
        objectives: ["Explain the importance of classification", "State differences between plants and animals", "Group animals into vertebrates and invertebrates", "Group plants into flowering and non-flowering plants"],
        lesson: {
          title: "Grouping Living Things",
          summary: "Sort living things into groups using their features.",
          minutes: 40,
          notes: `## Why classify?
**Classification** means putting living things into groups according to shared features. It makes study easier, helps us identify organisms and shows relationships.

## Plants and animals
| Plants | Animals |
|---|---|
| make their own food (photosynthesis) | depend on plants or other animals for food |
| contain green chlorophyll | no chlorophyll |
| usually do not move from place to place | move from place to place |
| cell wall made of cellulose | no cell wall |
| grow throughout life | stop growing at maturity |
| respond slowly | respond quickly |

## Animals
- **Vertebrates** have a **backbone**: fish, amphibians (frog, toad), reptiles (lizard, snake), birds, mammals (goat, human, bat).
- **Invertebrates** have **no backbone**: insects (housefly, ant), worms (earthworm), snails, spiders, crabs.

## Plants
- **Flowering plants** produce flowers and seeds: maize, mango, hibiscus.
- **Non-flowering plants** do not produce flowers: mosses, ferns, pines (cone-bearing).

## Microorganisms
Very tiny living things seen with a **microscope**: bacteria, some fungi (yeast), viruses (which only show life inside other cells).`,
          examples: `**Example 1.** Is a snail a vertebrate or invertebrate? *Answer:* **invertebrate** (no backbone).

**Example 2.** Why is a bat classified as a mammal? *Answer:* It has **hair/fur** and **feeds its young on milk**.

**Example 3.** Is a fern a flowering plant? *Answer:* **No** — ferns reproduce by **spores**.`,
        },
        questions: [
          ["E", "Putting living things into groups according to their features is called", "classification", "respiration", "germination", "excretion", "Classification groups organisms."],
          ["E", "Animals with a backbone are called", "vertebrates", "invertebrates", "insects", "microorganisms", "Vertebrates have backbones."],
          ["E", "Which of these is an invertebrate?", "snail", "goat", "frog", "lizard", "A snail has no backbone."],
          ["M", "Which feature is found in plants but NOT in animals?", "chlorophyll", "a nervous response", "movement from place to place", "a mouth", "Chlorophyll allows plants to make food."],
          ["M", "Which of these is a non-flowering plant?", "fern", "maize", "mango", "hibiscus", "Ferns reproduce by spores."],
          ["M", "Which of these is a mammal?", "bat", "lizard", "housefly", "tilapia", "Bats have fur and feed their young on milk."],
          ["M", "Very tiny living things that can only be seen with a microscope are", "microorganisms", "vertebrates", "flowering plants", "reptiles", "Bacteria and yeast are microorganisms."],
          ["H", "Which statement about plants and animals is correct?", "Plants make their own food; animals depend on other organisms for food.", "Animals make food by photosynthesis.", "Plants move from place to place quickly.", "Animals have cellulose cell walls.", "This is a key difference."],
          ["H", "A frog belongs to which group of vertebrates?", "amphibians", "reptiles", "mammals", "birds", "Frogs live both in water and on land."],
          ["H", "Why is classification useful to scientists?", "It makes the study and identification of organisms easier.", "It makes organisms grow faster.", "It changes the features of organisms.", "It stops organisms from reproducing.", "Grouping simplifies study."],
        ],
      },
      {
        week: 4,
        title: "Family health: personal hygiene",
        subtopics: ["Meaning of personal hygiene", "Care of the skin, teeth, hair and nails", "Care of clothing", "Consequences of poor hygiene"],
        objectives: ["Explain the meaning of personal hygiene", "Describe how to care for the body", "State ways of keeping clothing clean", "Explain the dangers of poor hygiene"],
        lesson: {
          title: "Keeping the Body Clean",
          summary: "Learn habits that keep the body healthy and prevent disease.",
          minutes: 40,
          notes: `## Meaning
**Personal hygiene** means keeping the body and clothing clean to stay healthy and prevent disease.

## Care of the body
| Part | How to care for it | Why |
|---|---|---|
| **Skin** | bathe at least twice daily with soap and clean water | removes sweat, dirt and germs; prevents body odour and skin infections |
| **Teeth** | brush after meals or at least morning and night; use fluoride toothpaste; visit a dentist | prevents tooth decay and bad breath |
| **Hair** | wash, comb and keep neat | prevents lice and dandruff |
| **Nails** | cut short and clean | germs hide under long, dirty nails |
| **Hands** | wash with soap after using the toilet and before eating | prevents diarrhoea, cholera and typhoid |
| **Eyes, ears, nose** | clean gently; never push sharp objects into the ears | prevents injury and infection |

## Care of clothing
- Wash clothes regularly, especially underwear and socks.
- Dry them in the sun (sunlight kills some germs).
- Iron clothes — heat kills lice eggs and germs.

## Consequences of poor hygiene
Body odour, ringworm, scabies, lice, tooth decay, diarrhoea and other infections; also loss of respect from others.`,
          examples: `**Example 1.** Why should hands be washed after using the toilet? *Answer:* To remove **germs** that cause diseases such as **diarrhoea and cholera**.

**Example 2.** How does ironing clothes help health? *Answer:* The **heat kills germs and lice eggs**.

**Example 3.** Name one effect of not brushing teeth. *Answer:* **tooth decay** (or bad breath).`,
        },
        questions: [
          ["E", "Keeping the body and clothing clean is called", "personal hygiene", "nutrition", "respiration", "classification", "Hygiene prevents disease."],
          ["E", "How often should we bathe?", "at least twice a day", "once a month", "once a week", "only on holidays", "Regular bathing removes sweat and germs."],
          ["E", "Brushing the teeth regularly helps to prevent", "tooth decay", "ringworm", "malaria", "lice", "Brushing removes food and bacteria."],
          ["M", "Hands should be washed with soap after using the toilet to prevent", "diarrhoea and cholera", "short-sightedness", "sunburn", "malaria", "Germs from faeces cause these diseases."],
          ["M", "Long, dirty fingernails are harmful because they", "hide germs", "make us taller", "improve eyesight", "prevent lice", "Germs collect under nails."],
          ["M", "Ironing clothes helps health because the heat", "kills germs and lice eggs", "makes clothes heavier", "adds colour", "removes buttons", "Heat destroys germs and eggs."],
          ["M", "Which disease is linked with poor care of the hair?", "lice", "diabetes", "measles", "tetanus only", "Lice live in dirty hair."],
          ["H", "Why should sharp objects not be pushed into the ears?", "They can injure the eardrum.", "They improve hearing.", "They clean the brain.", "They prevent body odour.", "The eardrum is delicate."],
          ["H", "Drying clothes in sunlight is helpful because sunlight", "helps kill some germs", "adds vitamins to the clothes", "makes clothes larger", "prevents washing", "Sunlight has a germ-killing effect."],
          ["H", "Which is a social effect of poor personal hygiene?", "loss of respect from others", "faster growth", "better eyesight", "higher marks", "People avoid those with body odour."],
        ],
      },
      {
        week: 5,
        title: "Family health: food and nutrition",
        subtopics: ["Classes of food", "Sources and functions of each class", "Balanced diet", "Deficiency diseases"],
        objectives: ["Name the classes of food", "State the sources and functions of each food class", "Explain the meaning of a balanced diet", "Relate deficiency diseases to missing nutrients"],
        lesson: {
          title: "Food and Nutrition",
          summary: "Identify food classes and plan a balanced diet.",
          minutes: 45,
          notes: `## Classes of food
| Class | Main sources | Function |
|---|---|---|
| **Carbohydrates** | yam, rice, cassava (garri), bread, maize | give **energy** |
| **Proteins** | beans, fish, meat, eggs, milk | **growth** and **repair** of body tissues |
| **Fats and oils** | palm oil, groundnut oil, butter | give **energy**; keep the body **warm** |
| **Vitamins** | fruits, vegetables | protect against disease; keep body working well |
| **Mineral salts** | salt, milk (calcium), vegetables (iron) | strong bones and teeth (calcium); healthy blood (iron) |
| **Water** | drinking water, fruits | transports substances; regulates body temperature |
| **Roughage (fibre)** | vegetables, fruits, whole grains | helps bowel movement; prevents constipation |

## Balanced diet
A **balanced diet** contains **all the food classes in the right proportions** for a person's age, sex and activity.
*Example of a balanced meal:* jollof rice (carbohydrate), fish (protein), vegetable salad (vitamins, minerals, roughage), with water.

## Deficiency diseases
| Missing nutrient | Disease | Signs |
|---|---|---|
| protein | **kwashiorkor** | swollen belly, reddish hair |
| vitamin C | **scurvy** | bleeding gums |
| vitamin D / calcium | **rickets** | bent legs |
| vitamin A | **night blindness** | poor sight in dim light |
| iron | **anaemia** | tiredness, pale skin |
| iodine | **goitre** | swollen neck |`,
          examples: `**Example 1.** Which class of food does beans belong to? *Answer:* **protein**.

**Example 2.** A child has a swollen belly and reddish hair. Which nutrient is lacking? *Answer:* **protein** (kwashiorkor).

**Example 3.** Is a meal of only garri and water balanced? *Answer:* **No** — it lacks protein, vitamins, minerals and fats.`,
        },
        questions: [
          ["E", "Yam and rice are rich in", "carbohydrates", "proteins", "vitamins", "minerals", "They are energy-giving foods."],
          ["E", "Which food is a good source of protein?", "beans", "garri", "sugar", "palm oil", "Beans are rich in protein."],
          ["E", "The main function of carbohydrates is to", "give energy", "repair tissues", "prevent scurvy", "form bones", "Carbohydrates supply energy."],
          ["M", "Proteins are needed mainly for", "growth and repair", "keeping warm only", "preventing constipation", "giving colour", "Proteins build tissues."],
          ["M", "A meal containing all the food classes in the right proportions is", "a balanced diet", "a deficiency diet", "a carbohydrate meal", "a snack", "Balance means all classes, correct amounts."],
          ["M", "Bleeding gums are a sign of lack of", "vitamin C", "protein", "iodine", "fat", "This condition is scurvy."],
          ["M", "Roughage in food helps to", "prevent constipation", "cause anaemia", "give energy directly", "form hair", "Fibre aids bowel movement."],
          ["H", "A child with a swollen belly and reddish hair is likely suffering from", "kwashiorkor", "rickets", "goitre", "scurvy", "Kwashiorkor results from protein deficiency."],
          ["H", "Lack of iodine in the diet causes", "goitre", "rickets", "night blindness", "kwashiorkor", "Iodine deficiency swells the thyroid gland."],
          ["H", "Which meal is the most balanced?", "rice, fish, vegetable salad and water", "garri and water", "bread and tea only", "fried yam and palm oil only", "It contains all the main food classes."],
        ],
      },
      {
        week: 6,
        title: "Drug abuse",
        subtopics: ["Meaning of drugs and drug abuse", "Commonly abused substances", "Effects of drug abuse", "Prevention of drug abuse"],
        objectives: ["Define drugs and drug abuse", "Name commonly abused substances", "Explain the effects of drug abuse on the individual and society", "Suggest ways to prevent drug abuse"],
        lesson: {
          title: "Say No to Drug Abuse",
          summary: "Understand drug abuse, its dangers and how to avoid it.",
          minutes: 40,
          notes: `## Meanings
- A **drug** is a substance that changes the way the body or mind works. Medicines are drugs used to treat illness.
- **Drug abuse** is the use of a drug for a wrong purpose, in the wrong amount, without a doctor's prescription, or the use of illegal drugs.

## Commonly abused substances
- **Alcohol** (in excess)
- **Tobacco** (cigarettes) — contains **nicotine**
- **Cannabis** (Indian hemp)
- **Codeine** cough syrups and **tramadol** used without prescription
- **Cocaine** and **heroin**
- Inhalants such as glue and petrol fumes
- Excess **caffeine**-containing stimulants

## Effects on the individual
- damage to the brain, liver, lungs and heart
- addiction (dependence)
- mental illness, poor memory and poor school performance
- risky behaviour, accidents and death from overdose

## Effects on society
Crime, violence, broken homes, road accidents, loss of productive youth and heavy costs to the health system.

## Prevention
- Take medicines **only** as prescribed by a qualified health worker.
- Keep good friends; learn to say **"No"** firmly.
- Engage in sports, clubs and hobbies.
- Talk to parents, teachers or counsellors about problems.
- Laws and agencies (e.g. NDLEA) control illegal drugs.`,
          examples: `**Example 1.** Tobu takes a codeine cough syrup every day without being ill. Is this drug abuse? *Answer:* **Yes** — it is used without prescription and for the wrong purpose.

**Example 2.** Which substance in cigarettes causes addiction? *Answer:* **nicotine**.

**Example 3.** Give one way a student can avoid drug abuse. *Answer:* **Refuse firmly and keep away from peers who use drugs.**`,
        },
        questions: [
          ["E", "A substance that changes the way the body or mind works is a", "drug", "vitamin only", "mineral", "fibre", "Drugs affect body functions."],
          ["E", "The addictive substance in tobacco is", "nicotine", "caffeine", "iodine", "protein", "Nicotine causes addiction."],
          ["E", "Which is a good way to avoid drug abuse?", "Take medicine only as prescribed by a health worker.", "Share medicines with friends.", "Take extra doses to recover faster.", "Buy drugs from roadside hawkers.", "Correct use prevents abuse."],
          ["M", "Using a drug without prescription for a wrong purpose is", "drug abuse", "nutrition", "vaccination", "hygiene", "It is misuse of drugs."],
          ["M", "Which organ is especially damaged by excessive alcohol?", "liver", "skin", "hair", "nails", "The liver processes alcohol."],
          ["M", "Dependence on a drug so that one cannot stop using it is called", "addiction", "digestion", "respiration", "immunity", "Addiction is a key danger of drug abuse."],
          ["M", "The government agency that fights illegal drugs in Nigeria is the", "NDLEA", "NECO", "WAEC", "NYSC", "It is the National Drug Law Enforcement Agency."],
          ["H", "Tobu takes a codeine cough syrup daily although he is not ill. This is", "drug abuse", "proper medication", "a balanced diet", "good hygiene", "It is unprescribed use for the wrong purpose."],
          ["H", "Which is a social effect of drug abuse?", "increase in crime and violence", "improved school results", "better road safety", "stronger families", "Drug abuse harms society."],
          ["H", "Which activity helps young people stay away from drugs?", "joining sports and clubs", "keeping friends who use drugs", "hiding problems from parents", "skipping school", "Positive activities reduce temptation."],
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
        title: "Measurement: physical quantities and units",
        subtopics: ["Meaning of measurement", "Fundamental quantities and SI units", "Measuring length, mass and time", "Simple derived quantities: area and volume"],
        objectives: ["Explain the importance of measurement", "State the SI units of length, mass and time", "Use instruments to measure length, mass and time", "Calculate area and volume of regular shapes"],
        lesson: {
          title: "Measuring Things",
          summary: "Measure physical quantities with the correct instruments and SI units.",
          minutes: 45,
          notes: `## Why measure?
**Measurement** compares a quantity with a standard **unit**. It makes trade fair, science accurate and daily life organised.

## Fundamental quantities and SI units
| Quantity | SI unit | Symbol | Instrument |
|---|---|---|---|
| length | metre | m | metre rule, tape |
| mass | kilogram | kg | beam balance, electronic balance |
| time | second | s | stopwatch, clock |
| temperature | kelvin | K | thermometer (often in °C) |

## Useful conversions
- $1\\text{ km} = 1000\\text{ m}$; $1\\text{ m} = 100\\text{ cm}$; $1\\text{ cm} = 10\\text{ mm}$
- $1\\text{ kg} = 1000\\text{ g}$
- $1\\text{ min} = 60\\text{ s}$; $1\\text{ h} = 3600\\text{ s}$

## Mass and weight
**Mass** is the amount of matter in an object (kg). **Weight** is the pull of gravity on it (newtons, N). Mass does not change from place to place; weight does.

## Area and volume (derived quantities)
- Area of a rectangle: $A = l \\times b$ (unit $\\text{m}^2$ or $\\text{cm}^2$)
- Volume of a cuboid: $V = l \\times b \\times h$ (unit $\\text{m}^3$ or $\\text{cm}^3$)
- The volume of a liquid is measured with a **measuring cylinder**; $1\\text{ L} = 1000\\text{ cm}^3$.
- Read a measuring cylinder at the **bottom of the meniscus**, with your eye level with it.`,
          examples: `**Example 1.** Convert 2.5 km to metres. *Answer:* $2.5 \\times 1000 = 2500\\text{ m}$.

**Example 2.** A box measures 10 cm by 5 cm by 4 cm. Find its volume. *Answer:* $V = 10 \\times 5 \\times 4 = 200\\text{ cm}^3$.

**Example 3.** Which instrument measures the mass of a bag of rice? *Answer:* a **balance** (beam or electronic).`,
        },
        questions: [
          ["E", "The SI unit of length is the", "metre", "kilogram", "second", "litre", "Length is measured in metres."],
          ["E", "The SI unit of mass is the", "kilogram", "metre", "newton", "second", "Mass is measured in kilograms."],
          ["E", "Which instrument is used to measure time in a race?", "stopwatch", "metre rule", "thermometer", "measuring cylinder", "A stopwatch measures short time intervals."],
          ["M", "Convert 2.5 km to metres.", "2500 m", "250 m", "25 m", "25 000 m", "$2.5 \\times 1000 = 2500$."],
          ["M", "How many seconds are in 3 minutes?", "180", "30", "360", "120", "$3 \\times 60 = 180$."],
          ["M", "A rectangle measures 8 cm by 5 cm. What is its area?", "$40\\text{ cm}^2$", "$13\\text{ cm}^2$", "$26\\text{ cm}^2$", "$40\\text{ cm}$", "$A = 8 \\times 5 = 40\\text{ cm}^2$."],
          ["M", "The pull of gravity on an object is its", "weight", "mass", "volume", "length", "Weight is a force, measured in newtons."],
          ["H", "A box measures 10 cm by 5 cm by 4 cm. What is its volume?", "$200\\text{ cm}^3$", "$19\\text{ cm}^3$", "$50\\text{ cm}^3$", "$200\\text{ cm}^2$", "$V = 10 \\times 5 \\times 4 = 200\\text{ cm}^3$."],
          ["H", "When reading a measuring cylinder containing water, you should read", "the bottom of the meniscus with your eye level with it", "the top edge of the cylinder", "from above at an angle", "the highest mark only", "This avoids parallax error."],
          ["H", "How many cubic centimetres are in 2 litres?", "2000", "200", "20", "20 000", "$1\\text{ L} = 1000\\text{ cm}^3$."],
        ],
      },
      {
        week: 2,
        title: "Matter and its states",
        subtopics: ["Meaning of matter", "The three states of matter", "Properties of solids, liquids and gases", "Arrangement of particles"],
        objectives: ["Define matter", "Name the three states of matter with examples", "Compare the properties of solids, liquids and gases", "Describe the arrangement and movement of particles in each state"],
        lesson: {
          title: "Solids, Liquids and Gases",
          summary: "Describe matter in its three states and explain their properties using particles.",
          minutes: 40,
          notes: `## What is matter?
**Matter** is anything that has **mass** and occupies **space** (has volume). Air, water, stones, our bodies — all are matter.

## The three states
| Property | Solid | Liquid | Gas |
|---|---|---|---|
| Shape | fixed | takes the shape of its container | fills its container |
| Volume | fixed | fixed | not fixed |
| Can it be compressed? | no | hardly | yes, easily |
| Can it flow? | no | yes | yes |
| Examples | stone, ice, wood | water, kerosene, milk | air, steam, cooking gas |

## Particle arrangement
- **Solid**: particles packed **closely** in a regular pattern; they only **vibrate** in fixed positions. Strong forces between them.
- **Liquid**: particles close together but **not in fixed positions**; they slide past one another.
- **Gas**: particles **far apart**, moving **rapidly** and randomly in all directions. Very weak forces between them.

## Evidence that air is matter
- A deflated ball becomes heavier when pumped (air has mass).
- An "empty" bottle pushed upside-down into water does not fill completely (air occupies space).`,
          examples: `**Example 1.** Why can a gas be compressed easily? *Answer:* Its **particles are far apart**, so they can be pushed closer.

**Example 2.** Water in a bottle takes the bottle's shape. Which state is it in? *Answer:* **liquid**.

**Example 3.** How can you show that air has mass? *Answer:* Weigh a ball **before and after pumping** it — it becomes heavier.`,
        },
        questions: [
          ["E", "Anything that has mass and occupies space is", "matter", "energy", "force", "light", "This is the definition of matter."],
          ["E", "Which of these is a solid?", "stone", "water", "air", "steam", "A stone has a fixed shape and volume."],
          ["E", "Which state of matter has a fixed shape?", "solid", "liquid", "gas", "all states", "Solids keep their shape."],
          ["M", "Which state of matter takes the shape of its container but has a fixed volume?", "liquid", "solid", "gas", "none", "Liquids flow but keep their volume."],
          ["M", "Which state of matter can be compressed most easily?", "gas", "liquid", "solid", "they are equal", "Gas particles are far apart."],
          ["M", "In a solid, the particles", "vibrate in fixed positions", "move rapidly and freely", "are very far apart", "slide past each other freely", "Strong forces hold them in place."],
          ["M", "Cooking gas is an example of matter in the", "gaseous state", "solid state", "liquid state at room temperature", "plasma state only", "It fills its container."],
          ["H", "A ball becomes heavier after it is pumped. This shows that air", "has mass", "has no mass", "is a solid", "cannot occupy space", "The added air has mass."],
          ["H", "Why can liquids flow?", "Their particles can slide past one another.", "Their particles are fixed in place.", "They have no particles.", "Their particles are extremely far apart.", "Particles are not in fixed positions."],
          ["H", "An upside-down 'empty' bottle pushed into water does not fill completely because", "air in the bottle occupies space", "water cannot enter glass", "the bottle is a solid", "water is a gas", "Air takes up space."],
        ],
      },
      {
        week: 3,
        title: "Physical and chemical changes",
        subtopics: ["Changes of state", "Physical changes", "Chemical changes", "Differences between physical and chemical changes"],
        objectives: ["Describe melting, freezing, evaporation, condensation and sublimation", "Give examples of physical changes", "Give examples of chemical changes", "Distinguish physical from chemical changes"],
        lesson: {
          title: "Changes in Matter",
          summary: "Tell physical changes from chemical changes using clear criteria.",
          minutes: 40,
          notes: `## Changes of state
| Change | From → To | Example |
|---|---|---|
| **melting** | solid → liquid | ice melting |
| **freezing** | liquid → solid | water in a freezer |
| **evaporation / boiling** | liquid → gas | wet clothes drying |
| **condensation** | gas → liquid | water droplets on a cold bottle |
| **sublimation** | solid → gas directly | camphor (naphthalene) balls disappearing |

## Physical change
- **No new substance** is formed.
- Usually **reversible**.
- Little or no heat change (except change of state).
- Examples: melting ice, dissolving salt, breaking glass, cutting paper, sublimation.

## Chemical change
- A **new substance** is formed.
- Usually **not easily reversible**.
- Often involves heat or light given out, colour change, gas given off.
- Examples: burning paper or firewood, rusting of iron, cooking food, souring of milk, digestion of food.

## Comparison
| Physical change | Chemical change |
|---|---|
| no new substance | new substance formed |
| easily reversed | not easily reversed |
| mass unchanged | new products with different properties |`,
          examples: `**Example 1.** Is melting of shea butter a physical or chemical change? *Answer:* **physical** — no new substance; it solidifies again on cooling.

**Example 2.** Is burning of firewood physical or chemical? *Answer:* **chemical** — new substances (ash, smoke, carbon dioxide) are formed.

**Example 3.** Water droplets form outside a cold bottle of drink. What change is this? *Answer:* **condensation**.`,
        },
        questions: [
          ["E", "The change from solid to liquid is called", "melting", "freezing", "condensation", "evaporation", "Solids melt into liquids."],
          ["E", "Which is a chemical change?", "burning of paper", "melting of ice", "breaking of glass", "dissolving of sugar", "Burning forms new substances."],
          ["E", "Which is a physical change?", "melting of butter", "rusting of iron", "cooking of rice", "burning of firewood", "No new substance is formed."],
          ["M", "The change from gas to liquid is called", "condensation", "evaporation", "sublimation", "melting", "Gas cools to form liquid."],
          ["M", "Camphor balls disappearing without melting is an example of", "sublimation", "condensation", "freezing", "melting", "Solid changes directly to gas."],
          ["M", "In a chemical change,", "a new substance is formed", "no new substance is formed", "the change is always easily reversible", "only the shape changes", "New substances are a key sign."],
          ["M", "Water droplets forming outside a cold bottle is due to", "condensation", "evaporation", "sublimation", "melting", "Water vapour in air cools on the bottle."],
          ["H", "Which of these is NOT a sign of a chemical change?", "change of shape only", "gas given off", "colour change", "heat and light given out", "Changing shape is physical."],
          ["H", "Rusting of iron is a chemical change because", "a new substance, rust, is formed", "iron melts", "the iron becomes a gas", "it is easily reversed", "Rust has different properties from iron."],
          ["H", "Why is dissolving salt in water a physical change?", "The salt can be recovered by evaporating the water.", "A gas is always produced.", "The salt burns.", "The water changes colour permanently.", "No new substance is formed."],
        ],
      },
      {
        week: 4,
        title: "Elements, compounds and mixtures",
        subtopics: ["Elements", "Compounds", "Mixtures", "Differences between compounds and mixtures"],
        objectives: ["Define element, compound and mixture with examples", "Give the symbols of common elements", "Distinguish compounds from mixtures", "Classify familiar substances"],
        lesson: {
          title: "Elements, Compounds and Mixtures",
          summary: "Classify substances as elements, compounds or mixtures.",
          minutes: 40,
          notes: `## Element
An **element** is a substance that **cannot be split** into simpler substances by chemical means.
| Element | Symbol |
|---|---|
| hydrogen | H |
| oxygen | O |
| carbon | C |
| nitrogen | N |
| iron | Fe |
| copper | Cu |
| sodium | Na |
| gold | Au |

## Compound
A **compound** is formed when two or more elements **combine chemically** in fixed proportions.
- water ($\\text{H}_2\\text{O}$) — hydrogen + oxygen
- carbon dioxide ($\\text{CO}_2$) — carbon + oxygen
- common salt (sodium chloride, NaCl) — sodium + chlorine
A compound has properties **different** from its elements (sodium is a dangerous metal; chlorine is a poisonous gas; salt is safe to eat).

## Mixture
A **mixture** contains two or more substances **not chemically combined**; each keeps its own properties and can be separated physically.
Examples: air, sand and water, salt solution, garri and sugar, soil.

## Compound versus mixture
| Compound | Mixture |
|---|---|
| chemically combined | not chemically combined |
| fixed composition | variable composition |
| new properties | components keep their properties |
| separated only by chemical means | separated by physical means |`,
          examples: `**Example 1.** Is air an element, compound or mixture? *Answer:* **mixture** — nitrogen, oxygen and other gases not chemically combined.

**Example 2.** What is the symbol of iron? *Answer:* **Fe**.

**Example 3.** Why is water a compound? *Answer:* Hydrogen and oxygen are **chemically combined** in a **fixed ratio**, giving new properties.`,
        },
        questions: [
          ["E", "A substance that cannot be split into simpler substances by chemical means is", "an element", "a compound", "a mixture", "a solution", "Elements are the simplest substances."],
          ["E", "The chemical symbol of oxygen is", "O", "Ox", "Og", "On", "The symbol of oxygen is the single letter O."],
          ["E", "Which of these is a mixture?", "air", "water", "oxygen", "gold", "Air contains several uncombined gases."],
          ["M", "The chemical symbol of iron is", "Fe", "Ir", "I", "In", "Fe comes from the Latin 'ferrum'."],
          ["M", "Water is a compound of", "hydrogen and oxygen", "carbon and oxygen", "sodium and chlorine", "nitrogen and oxygen", "Its formula is $\\text{H}_2\\text{O}$."],
          ["M", "Which is a compound?", "carbon dioxide", "air", "sand and water", "garri and sugar", "Carbon and oxygen are chemically combined."],
          ["M", "In a mixture, the components", "keep their own properties", "are chemically combined", "are always in fixed amounts", "form a new substance", "Mixtures are physical combinations."],
          ["H", "Common salt is safe to eat although sodium and chlorine are dangerous. This shows that a compound", "has properties different from its elements", "has the same properties as its elements", "is a mixture", "is an element", "Chemical combination creates new properties."],
          ["H", "Which statement about mixtures is correct?", "They can be separated by physical means.", "They have a fixed composition.", "They are chemically combined.", "They are single elements.", "Physical methods separate mixtures."],
          ["H", "The chemical symbol Na stands for", "sodium", "nitrogen", "neon", "nickel", "Na comes from the Latin 'natrium'."],
        ],
      },
      {
        week: 5,
        title: "Forms of energy",
        subtopics: ["Meaning of energy", "Forms of energy", "Potential and kinetic energy", "Everyday uses of energy"],
        objectives: ["Define energy and state its unit", "Name the forms of energy with examples", "Distinguish potential from kinetic energy", "Identify forms of energy in everyday activities"],
        lesson: {
          title: "Energy in Many Forms",
          summary: "Identify the forms of energy we use every day.",
          minutes: 40,
          notes: `## What is energy?
**Energy** is the **ability to do work**. Its SI unit is the **joule (J)**.

## Forms of energy
| Form | Description | Example |
|---|---|---|
| **chemical** | stored in substances; released in reactions | food, fuel, batteries |
| **heat (thermal)** | energy of hot bodies | fire, the sun, a hot iron |
| **light** | energy we can see | sun, torch, bulb |
| **sound** | energy of vibrations | drum, radio, voice |
| **electrical** | energy of moving charges | electric current |
| **mechanical** | energy of motion and position | moving car, raised stone |
| **nuclear** | stored in the nucleus of atoms | nuclear power stations |
| **solar** | energy from the sun | solar panels |

## Mechanical energy
- **Potential energy (P.E.)**: energy due to **position** or condition — a stone on a high shelf, a stretched catapult, water in a dam.
- **Kinetic energy (K.E.)**: energy due to **motion** — a moving bus, flowing river, falling mango.

The higher an object is raised, the more potential energy it has; the faster it moves, the more kinetic energy it has.`,
          examples: `**Example 1.** What form of energy does food contain? *Answer:* **chemical energy**.

**Example 2.** A stretched catapult rubber has which energy? *Answer:* **potential energy** (elastic).

**Example 3.** A mango falling from a tree has which energy just before it hits the ground? *Answer:* **kinetic energy**.`,
        },
        questions: [
          ["E", "Energy is the ability to", "do work", "grow", "breathe", "sleep", "This is the definition of energy."],
          ["E", "The SI unit of energy is the", "joule", "newton", "metre", "kilogram", "Energy is measured in joules."],
          ["E", "Food contains", "chemical energy", "sound energy", "nuclear energy", "light energy", "Food releases energy in body reactions."],
          ["M", "Energy due to motion is", "kinetic energy", "potential energy", "chemical energy", "nuclear energy", "Moving objects have kinetic energy."],
          ["M", "A stone resting on a high shelf has", "potential energy", "kinetic energy", "sound energy", "electrical energy", "It has energy due to its position."],
          ["M", "A drum being beaten produces", "sound energy", "nuclear energy", "chemical energy", "potential energy only", "Vibrations produce sound."],
          ["M", "A stretched catapult rubber stores", "potential energy", "kinetic energy", "light energy", "sound energy", "Elastic potential energy is stored by stretching."],
          ["H", "A falling mango, just before hitting the ground, has mostly", "kinetic energy", "potential energy", "chemical energy", "electrical energy", "It is moving fastest just before impact."],
          ["H", "Energy stored in the nucleus of atoms is", "nuclear energy", "chemical energy", "solar energy", "sound energy", "Nuclear reactions release it."],
          ["H", "Which object has the greatest potential energy?", "a stone on a high roof", "a stone on the ground", "a stone rolling on the floor", "a stone in a shallow hole", "Height increases potential energy."],
        ],
      },
      {
        week: 6,
        title: "Energy conversion and sources",
        subtopics: ["Conservation of energy", "Energy conversion in devices", "Renewable and non-renewable sources", "Saving energy"],
        objectives: ["State the principle of conservation of energy", "Describe energy conversions in common devices", "Distinguish renewable from non-renewable energy sources", "Suggest ways of saving energy"],
        lesson: {
          title: "Changing Energy from One Form to Another",
          summary: "Trace energy changes in devices and compare energy sources.",
          minutes: 40,
          notes: `## Conservation of energy
Energy **cannot be created or destroyed**; it can only be **changed from one form to another**.

## Energy conversions
| Device / process | Energy change |
|---|---|
| electric bulb | electrical → light + heat |
| electric fan | electrical → mechanical (kinetic) + sound |
| radio / loudspeaker | electrical → sound |
| torch battery | chemical → electrical |
| solar panel | light (solar) → electrical |
| generator | mechanical → electrical |
| burning firewood | chemical → heat + light |
| photosynthesis | light → chemical |
| running person | chemical → kinetic + heat |

## Energy sources
- **Renewable** (can be replaced naturally): sun (solar), wind, flowing water (hydro), biomass (wood, plant waste).
- **Non-renewable** (limited; will run out): petroleum, natural gas, coal.
Nigeria's Kainji and Jebba dams use **hydroelectric** power; many homes now use **solar** panels.

## Saving energy
Switch off lights and appliances not in use; use energy-saving bulbs; iron clothes in batches; close fridge doors quickly.`,
          examples: `**Example 1.** What energy change occurs in an electric bulb? *Answer:* **electrical → light and heat**.

**Example 2.** Is coal a renewable source? *Answer:* **No** — it is non-renewable; it cannot be replaced quickly.

**Example 3.** What energy change occurs in photosynthesis? *Answer:* **light → chemical** energy stored in food.`,
        },
        questions: [
          ["E", "Energy cannot be created or destroyed. This is the principle of", "conservation of energy", "classification", "photosynthesis", "respiration", "Energy only changes form."],
          ["E", "An electric bulb changes electrical energy mainly into", "light and heat", "sound only", "chemical energy", "nuclear energy", "Bulbs glow and get hot."],
          ["E", "Which is a renewable source of energy?", "the sun", "coal", "petroleum", "natural gas", "Sunlight is continually available."],
          ["M", "A torch battery changes", "chemical energy into electrical energy", "light into sound", "heat into chemical energy", "sound into electrical energy", "Batteries store chemical energy."],
          ["M", "A solar panel changes", "light energy into electrical energy", "electrical energy into light", "sound energy into heat", "chemical energy into sound", "Solar cells convert sunlight."],
          ["M", "A generator changes", "mechanical energy into electrical energy", "electrical energy into chemical", "light into chemical", "sound into light", "Rotating coils produce electricity."],
          ["M", "Which is a non-renewable source of energy?", "petroleum", "wind", "flowing water", "sunlight", "Petroleum reserves will run out."],
          ["H", "During photosynthesis, energy changes from", "light to chemical", "chemical to light", "heat to sound", "electrical to chemical", "Plants store light energy as food."],
          ["H", "An electric fan changes electrical energy mainly into", "kinetic energy (with some sound)", "chemical energy", "nuclear energy", "light energy", "The blades move."],
          ["H", "Which is a good way to save energy at home?", "switch off appliances when not in use", "leave the fridge door open", "keep lights on all day", "iron one cloth at a time many times", "It prevents waste."],
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
        title: "Habitats",
        subtopics: ["Meaning of habitat", "Aquatic habitats", "Terrestrial habitats", "Adaptation of organisms to habitats"],
        objectives: ["Define habitat", "Distinguish aquatic from terrestrial habitats with examples", "Name organisms found in different habitats", "Describe simple adaptations of organisms to their habitats"],
        lesson: {
          title: "Where Organisms Live",
          summary: "Describe habitats and how organisms are suited to them.",
          minutes: 40,
          notes: `## Meaning
A **habitat** is the natural home of an organism — where it lives, feeds and reproduces.

## Types of habitat
**Aquatic (water) habitats**
- **Freshwater**: rivers, streams, ponds, lakes — tilapia, catfish, water lily.
- **Marine**: seas and oceans — sharks, crabs, seaweed.
- **Estuarine / brackish**: where rivers meet the sea — mangrove swamps (e.g. Niger Delta), mudskippers.

**Terrestrial (land) habitats**
- **Forest**: tall trees, monkeys, snakes (south of Nigeria).
- **Grassland (savanna)**: grasses, scattered trees, cattle, antelopes (north of Nigeria).
- **Desert / arid**: very little rain, cactus, camels (far north, near the Sahara).

**Arboreal** habitats are in trees (monkeys, birds, squirrels).

## Adaptation
**Adaptation** means having features that help an organism survive in its habitat.
| Organism | Adaptation |
|---|---|
| fish | gills for breathing; fins for swimming; streamlined body |
| camel | stores fat in its hump; can go days without water |
| cactus | leaves reduced to spines; thick stem stores water |
| duck | webbed feet for swimming |
| monkey | long tail and grasping hands for climbing |`,
          examples: `**Example 1.** Name the habitat of a tilapia. *Answer:* **freshwater (aquatic)** — rivers and ponds.

**Example 2.** How is a fish adapted for life in water? *Answer:* It has **gills** to breathe dissolved oxygen and **fins** for swimming.

**Example 3.** Which Nigerian habitat is found where rivers meet the sea? *Answer:* **mangrove swamp** (estuarine).`,
        },
        questions: [
          ["E", "The natural home of an organism is its", "habitat", "food chain", "skeleton", "population", "Organisms live in habitats."],
          ["E", "A river is an example of", "an aquatic habitat", "a terrestrial habitat", "a desert habitat", "an arboreal habitat", "Aquatic habitats contain water."],
          ["E", "A forest is an example of", "a terrestrial habitat", "an aquatic habitat", "a marine habitat", "an estuarine habitat", "Forests are on land."],
          ["M", "Fish breathe in water using", "gills", "lungs", "skin only", "fins", "Gills absorb dissolved oxygen."],
          ["M", "The camel is adapted to desert life because it", "can go days without water", "has gills", "has webbed feet", "lives in trees", "This helps it survive dry conditions."],
          ["M", "An organism that lives in trees has an", "arboreal habitat", "aquatic habitat", "marine habitat", "underground habitat only", "Arboreal means in trees."],
          ["M", "Webbed feet help ducks to", "swim", "climb trees", "store water", "breathe", "They push water effectively."],
          ["H", "The habitat where rivers meet the sea, such as mangrove swamps, is", "estuarine", "desert", "savanna", "arboreal", "It contains brackish water."],
          ["H", "In the cactus, leaves reduced to spines help to", "reduce water loss", "absorb more rain", "make the plant taller", "attract insects", "Less surface area means less water loss."],
          ["H", "Having features that help an organism survive in its habitat is called", "adaptation", "classification", "reproduction", "pollution", "Adaptations suit organisms to their environment."],
        ],
      },
      {
        week: 2,
        title: "Food chains and food webs",
        subtopics: ["Producers and consumers", "Food chains", "Food webs", "Decomposers"],
        objectives: ["Distinguish producers, consumers and decomposers", "Construct simple food chains", "Interpret a simple food web", "Explain the role of decomposers"],
        lesson: {
          title: "Who Eats Whom?",
          summary: "Build food chains and food webs and explain the flow of energy.",
          minutes: 40,
          notes: `## Producers and consumers
- **Producers** make their own food by photosynthesis — **green plants**. They start every food chain.
- **Consumers** eat other organisms:
  - **primary consumers** (herbivores) eat plants — grasshopper, goat;
  - **secondary consumers** eat herbivores — lizard, frog;
  - **tertiary consumers** eat secondary consumers — hawk, snake.
- **Decomposers** (bacteria, fungi) break down dead organisms and wastes, returning **nutrients** to the soil.

## Food chain
A **food chain** shows how energy passes from one organism to another by feeding. Arrows point in the **direction of energy flow** ("is eaten by"):
**grass → grasshopper → lizard → hawk**

## Food web
A **food web** is many interconnected food chains in a habitat. It is more realistic, because most animals eat more than one kind of food.

## Energy flow
The sun is the original source of energy. Energy is **lost** (as heat and in wastes) at each level, so food chains are usually short (3–5 links).`,
          examples: `**Example 1.** In *grass → goat → man*, which is the producer? *Answer:* **grass**.

**Example 2.** Arrange into a food chain: *hawk, maize, rat*. *Answer:* **maize → rat → hawk**.

**Example 3.** What would happen to the soil if there were no decomposers? *Answer:* **Nutrients would not be returned**, and dead matter would pile up.`,
        },
        questions: [
          ["E", "Organisms that make their own food are called", "producers", "consumers", "decomposers", "predators", "Green plants produce food."],
          ["E", "Every food chain begins with", "a green plant", "a lion", "a hawk", "a mushroom", "Producers start food chains."],
          ["E", "Animals that eat only plants are", "herbivores", "carnivores", "decomposers", "producers", "Herbivores are primary consumers."],
          ["M", "Arrange into a food chain: hawk, maize, rat.", "maize → rat → hawk", "hawk → rat → maize", "rat → maize → hawk", "maize → hawk → rat", "Energy flows from plant to herbivore to carnivore."],
          ["M", "In 'grass → grasshopper → lizard → hawk', the secondary consumer is the", "lizard", "grass", "grasshopper", "hawk", "The lizard eats the herbivore."],
          ["M", "The arrows in a food chain show", "the direction of energy flow", "the size of the animals", "where animals sleep", "the speed of animals", "Arrows mean 'is eaten by'."],
          ["M", "Bacteria and fungi that break down dead organisms are", "decomposers", "producers", "herbivores", "predators", "They recycle nutrients."],
          ["H", "The original source of energy in almost all food chains is", "the sun", "the soil", "water", "the hawk", "Plants capture light energy."],
          ["H", "Many interconnected food chains in a habitat form a", "food web", "food pyramid of one chain", "habitat map", "population", "A food web shows multiple feeding links."],
          ["H", "If there were no decomposers,", "nutrients would not be returned to the soil", "plants would grow faster", "there would be more oxygen", "animals would stop eating", "Decomposers recycle nutrients."],
        ],
      },
      {
        week: 3,
        title: "Environmental pollution",
        subtopics: ["Meaning of pollution", "Air pollution", "Water and land pollution", "Control of pollution"],
        objectives: ["Define pollution and pollutants", "Identify sources and effects of air, water and land pollution", "Explain noise pollution", "Suggest ways of controlling pollution"],
        lesson: {
          title: "Pollution and Our Environment",
          summary: "Identify the causes and effects of pollution and ways to control it.",
          minutes: 40,
          notes: `## Meaning
**Pollution** is the introduction of harmful substances or energy into the environment. The harmful substances are **pollutants**.

## Types, sources and effects
| Type | Sources | Effects |
|---|---|---|
| **Air** | vehicle exhaust, generator fumes, bush burning, factory smoke, gas flaring | coughing, asthma, lung disease; acid rain; global warming |
| **Water** | refuse and sewage in rivers, oil spills, chemicals from farms and factories | cholera and typhoid; death of fish; unsafe drinking water |
| **Land** | refuse dumps, plastics, oil spills, chemicals | loss of soil fertility; breeding of flies, rats and mosquitoes; blocked drains and flooding |
| **Noise** | loud music, generators, vehicles, factories | hearing damage, stress, headaches |

## Nigerian examples
Oil spills and gas flaring in the Niger Delta; plastic waste blocking drains in cities; generator fumes in homes.

## Control
- Dispose of refuse properly; recycle plastics.
- Stop bush burning; maintain vehicles and generators; never run generators indoors.
- Treat sewage and industrial waste before disposal.
- Enforce environmental laws; plant trees.
- Keep music at moderate volume.`,
          examples: `**Example 1.** Name one source of air pollution in homes. *Answer:* **generator fumes** (contain poisonous carbon monoxide).

**Example 2.** How can water pollution cause disease? *Answer:* Sewage carries **germs** that cause **cholera and typhoid**.

**Example 3.** Suggest one way to reduce land pollution. *Answer:* **Proper refuse disposal and recycling of plastics.**`,
        },
        questions: [
          ["E", "The introduction of harmful substances into the environment is", "pollution", "conservation", "germination", "photosynthesis", "Pollution harms the environment."],
          ["E", "Harmful substances that cause pollution are called", "pollutants", "nutrients", "producers", "vitamins", "Pollutants damage the environment."],
          ["E", "Which is a source of air pollution?", "vehicle exhaust", "planting trees", "drinking water", "reading books", "Exhaust fumes contain harmful gases."],
          ["M", "Oil spills in rivers mainly cause", "water pollution", "noise pollution", "air pollution only", "no pollution", "Oil contaminates water."],
          ["M", "Loud music from speakers late at night causes", "noise pollution", "water pollution", "land pollution", "soil erosion only", "Excess sound is noise pollution."],
          ["M", "Drinking water polluted by sewage can cause", "cholera", "rickets", "goitre", "scurvy", "Sewage contains disease germs."],
          ["M", "Plastic waste blocking drains can lead to", "flooding", "better drainage", "cleaner rivers", "more fish", "Blocked drains overflow."],
          ["H", "Why should generators never be run inside a house?", "Their fumes contain poisonous carbon monoxide.", "They become too cold.", "They produce too much light.", "They stop working indoors.", "Carbon monoxide can kill."],
          ["H", "Which practice helps to control land pollution?", "recycling plastics", "burning tyres", "dumping refuse in drains", "spilling oil", "Recycling reduces waste."],
          ["H", "Gas flaring in the Niger Delta mainly causes", "air pollution", "noise pollution only", "sound energy", "food shortage directly", "Burning gas releases smoke and harmful gases."],
        ],
      },
      {
        week: 4,
        title: "The skin and the sense organs",
        subtopics: ["The five senses", "The skin and touch", "The eye and the ear", "Care of the sense organs"],
        objectives: ["Name the five sense organs and their senses", "Describe the functions of the skin", "State the main parts and functions of the eye and ear", "Explain how to care for the sense organs"],
        lesson: {
          title: "Our Sense Organs",
          summary: "Identify the sense organs, how they work and how to care for them.",
          minutes: 40,
          notes: `## The five senses
| Sense organ | Sense |
|---|---|
| eye | sight |
| ear | hearing (and balance) |
| nose | smell |
| tongue | taste |
| skin | touch, heat, cold, pain, pressure |

## The skin
The largest organ of the body. Functions:
- **protection** against germs and injury;
- **sensitivity** to touch, heat, cold and pain;
- **temperature control** by sweating;
- **excretion** of water and salts in sweat;
- making **vitamin D** in sunlight.

## The eye
- **Cornea**: clear front layer.
- **Iris**: coloured part; controls the size of the **pupil**.
- **Lens**: focuses light onto the **retina**.
- **Retina**: light-sensitive layer; sends messages along the **optic nerve** to the brain.

## The ear
- **Outer ear** (pinna) collects sound.
- **Eardrum** vibrates.
- **Middle ear** bones pass on vibrations.
- **Inner ear** (cochlea) changes vibrations into nerve messages; semicircular canals help **balance**.

## Care of the sense organs
Do not read in poor light; avoid rubbing eyes with dirty hands; never put sharp objects in the ears; avoid very loud sounds; brush the tongue; keep the skin clean.`,
          examples: `**Example 1.** Which sense organ detects smell? *Answer:* **nose**.

**Example 2.** Which part of the eye controls the amount of light entering? *Answer:* the **iris** (by changing the size of the pupil).

**Example 3.** Give one function of the skin apart from touch. *Answer:* **temperature control** by sweating.`,
        },
        questions: [
          ["E", "The sense of sight is provided by the", "eye", "ear", "nose", "tongue", "Eyes detect light."],
          ["E", "The sense organ for taste is the", "tongue", "skin", "nose", "ear", "Taste buds are on the tongue."],
          ["E", "The largest organ of the human body is the", "skin", "eye", "heart", "tongue", "The skin covers the whole body."],
          ["M", "Which part of the eye controls the size of the pupil?", "iris", "retina", "lens", "optic nerve", "The iris muscles adjust the pupil."],
          ["M", "The light-sensitive layer of the eye is the", "retina", "cornea", "iris", "pupil", "The retina detects light."],
          ["M", "The part of the ear that vibrates when sound reaches it is the", "eardrum", "pinna", "cochlea", "optic nerve", "The eardrum vibrates with sound."],
          ["M", "The skin helps to control body temperature by", "sweating", "producing tears", "making saliva", "growing nails", "Evaporating sweat cools the body."],
          ["H", "Which part of the ear helps us keep our balance?", "semicircular canals", "pinna", "eardrum", "ear wax", "They detect head movement."],
          ["H", "Messages from the retina travel to the brain through the", "optic nerve", "eardrum", "cornea", "spinal fluid", "The optic nerve carries visual signals."],
          ["H", "Which habit is harmful to the eyes?", "reading in very poor light", "eating vegetables", "washing hands before touching the eyes", "resting the eyes", "Poor light strains the eyes."],
        ],
      },
      {
        week: 5,
        title: "Force and its types",
        subtopics: ["Meaning of force", "Contact forces", "Non-contact forces", "Effects of force"],
        objectives: ["Define force and state its unit", "Distinguish contact from non-contact forces", "Give examples of friction, gravity and magnetic force", "Describe the effects of forces on objects"],
        lesson: {
          title: "Pushes and Pulls",
          summary: "Identify types of forces and their effects on objects.",
          minutes: 40,
          notes: `## Meaning
A **force** is a **push or a pull** that can change the state of rest or motion of an object. The SI unit of force is the **newton (N)**. Force is measured with a **spring balance**.

## Contact forces (objects must touch)
- **Friction**: opposes motion between surfaces in contact. It helps us walk and brakes to stop cars, but wears out tyres and shoes.
- **Muscular force**: pushing a cart, lifting a bucket.
- **Tension**: in a stretched rope or string.
- **Air resistance / drag**: friction from air or water.

## Non-contact forces (act at a distance)
- **Gravity**: pulls objects towards the earth; gives objects weight.
- **Magnetic force**: magnets attract iron and steel.
- **Electrostatic force**: a rubbed plastic comb attracts small pieces of paper.

## Effects of force
A force can:
- make a stationary object **move**;
- **stop** or **slow down** a moving object;
- change the **direction** of motion;
- change the **shape** of an object (squeezing a sponge, denting a can);
- change the **speed**.

## Reducing and increasing friction
Reduce: oil, grease, ball bearings, smooth surfaces. Increase: treads on tyres, sand on slippery roads.`,
          examples: `**Example 1.** Which force makes a mango fall to the ground? *Answer:* **gravity**.

**Example 2.** Why do we oil a squeaky door hinge? *Answer:* To **reduce friction**.

**Example 3.** A rubbed plastic pen picks up bits of paper. Which force acts? *Answer:* **electrostatic force**.`,
        },
        questions: [
          ["E", "A push or a pull is called a", "force", "mass", "volume", "habitat", "This is the definition of force."],
          ["E", "The SI unit of force is the", "newton", "joule", "metre", "kilogram", "Force is measured in newtons."],
          ["E", "The force that makes a mango fall to the ground is", "gravity", "friction", "magnetism", "tension", "Gravity pulls objects towards the earth."],
          ["M", "The force that opposes motion between surfaces in contact is", "friction", "gravity", "magnetic force", "electrostatic force", "Friction resists sliding."],
          ["M", "Which is a non-contact force?", "magnetic force", "friction", "tension", "muscular force", "Magnets act at a distance."],
          ["M", "Oiling a squeaky door hinge", "reduces friction", "increases friction", "increases gravity", "creates magnetism", "Lubricants make surfaces slide easily."],
          ["M", "The instrument used to measure force is the", "spring balance", "thermometer", "metre rule", "stopwatch", "It measures force in newtons."],
          ["H", "A rubbed plastic pen picks up small pieces of paper because of", "electrostatic force", "gravity", "friction", "tension", "Rubbing gives the pen an electric charge."],
          ["H", "Which is NOT an effect of a force?", "changing the mass of an object", "changing its shape", "changing its direction", "changing its speed", "Force does not change mass."],
          ["H", "Treads on car tyres are designed to", "increase friction and grip", "reduce friction completely", "make tyres lighter", "attract magnets", "Treads improve grip on the road."],
        ],
      },
      {
        week: 6,
        title: "The solar system",
        subtopics: ["The sun and its importance", "The planets", "The moon", "Day, night and the year"],
        objectives: ["Describe the sun as a star and source of energy", "Name the planets in order from the sun", "Describe the moon and its phases", "Explain day and night and the year"],
        lesson: {
          title: "Our Solar System",
          summary: "Describe the sun, planets and moon and explain day, night and the year.",
          minutes: 40,
          notes: `## The solar system
The **solar system** consists of the **sun** and the bodies that move around it: **eight planets**, their moons, asteroids and comets.

## The sun
- A **star** — a huge ball of very hot gases that gives out its own light and heat.
- The source of energy for almost all life on Earth.

## The planets (in order from the sun)
**Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**
Memory aid: *My Very Educated Mother Just Served Us Noodles.*
- **Jupiter** is the largest planet.
- **Mercury** is the closest to the sun.
- **Saturn** has bright rings.
- **Earth** is the only planet known to support life.

## The moon
- Earth's natural **satellite**; it moves round the Earth in about **27–29 days**.
- It does **not** produce its own light; it **reflects** sunlight.
- Its apparent shape changes (the **phases**): new moon, crescent, half moon, full moon.

## Day, night and the year
- The Earth **rotates** on its axis once in about **24 hours**, causing **day and night**.
- The Earth **revolves** round the sun once in about **365¼ days** — one **year**.`,
          examples: `**Example 1.** Which planet is closest to the sun? *Answer:* **Mercury**.

**Example 2.** What causes day and night? *Answer:* The **rotation of the Earth** on its axis.

**Example 3.** Why does the moon shine? *Answer:* It **reflects sunlight**; it does not make its own light.`,
        },
        questions: [
          ["E", "The sun is a", "star", "planet", "moon", "comet", "It produces its own light and heat."],
          ["E", "How many planets are in our solar system?", "8", "9", "7", "10", "There are eight planets."],
          ["E", "The Earth's natural satellite is the", "moon", "sun", "Mars", "Venus", "The moon orbits the Earth."],
          ["M", "Which planet is closest to the sun?", "Mercury", "Venus", "Earth", "Neptune", "Mercury has the smallest orbit."],
          ["M", "The largest planet in the solar system is", "Jupiter", "Saturn", "Earth", "Mars", "Jupiter is a gas giant."],
          ["M", "Day and night are caused by the", "rotation of the Earth on its axis", "revolution of the moon", "movement of the sun round the Earth", "clouds", "The Earth spins once in about 24 hours."],
          ["M", "The moon shines because it", "reflects light from the sun", "produces its own light", "is on fire", "contains electricity", "The moon is not a light source."],
          ["H", "One complete revolution of the Earth round the sun takes about", "365¼ days", "24 hours", "30 days", "7 days", "This is one year."],
          ["H", "Which planet is known for its bright rings?", "Saturn", "Mercury", "Mars", "Venus", "Saturn's rings are made of ice and rock."],
          ["H", "Which planet comes immediately after Earth in order from the sun?", "Mars", "Venus", "Jupiter", "Mercury", "Order: Mercury, Venus, Earth, Mars…"],
        ],
      },
    ],
  },
];
