import type { TermPlan } from "../types";

/** JSS3 Home Economics — original Precious PS content following the national Basic Education structure. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Entertaining and meal service",
        subtopics: ["Occasions for entertaining", "Styles of meal service", "Planning a party menu", "Duties of a host and guest"],
        objectives: ["Identify occasions for entertaining", "Distinguish styles of meal service", "Plan a menu for a party", "State the duties of a host and a guest"],
        lesson: {
          title: "Serving Food to Guests",
          summary: "Plan and serve meals for special occasions.",
          minutes: 40,
          notes: `## Occasions for entertaining
birthdays, weddings, naming ceremonies, graduations, religious festivals (Christmas, Eid), house-warming, anniversaries, end-of-year parties, visits by friends.

## Styles of meal service
| Style | Description | Suitable for |
|---|---|---|
| **buffet** | food arranged on a table; guests **serve themselves** | large parties, weddings |
| **family (English) service** | dishes placed on the table; host or members serve | family meals |
| **plated (American) service** | food served on plates from the kitchen | restaurants, formal events |
| **silver (Russian) service** | waiters serve guests from platters at the table | formal banquets |
| **cafeteria service** | guests queue and pick food from a counter | schools, offices |
| **packed/take-away** | food in packs (small chops, jollof packs) | parties, outdoor events |

## Planning a party menu
consider number and type of guests; **budget**; season and available foods; time and equipment; **balance and variety**; culture and religion (e.g. no pork for Muslim guests); style of service; easy-to-eat foods for standing guests.
**Sample buffet menu:** small chops (puff-puff, samosa, spring rolls); jollof and fried rice; grilled chicken; moi-moi; coleslaw; fruit salad; chilled drinks and water.

## Duties of a host
send invitations early; plan menu and seating; prepare the venue; welcome guests warmly; introduce guests; ensure everyone is served; see guests off.

## Duties of a guest
reply to invitations (**RSVP**); arrive on time; dress appropriately; be polite and friendly; do not waste food; thank the host.`,
          examples: `**Example 1.** Guests serve themselves from a table of dishes. Which style is this? *Answer:* **buffet** service.

**Example 2.** What does RSVP ask a guest to do? *Answer:* **Reply** to say whether he or she will attend.

**Example 3.** Give one factor to consider when planning a party menu. *Answer:* **budget** (or number of guests).`,
        },
        questions: [
          ["E", "A style of service where guests serve themselves is", "buffet", "silver service", "plated service", "room service", "Guests pick their own food."],
          ["E", "Which is an occasion for entertaining?", "a naming ceremony", "a flood", "an exam", "a traffic jam", "Guests are invited to celebrate."],
          ["E", "A guest who receives an invitation marked RSVP should", "reply to the host", "ignore it", "bring many uninvited friends", "arrive very late", "RSVP asks for a reply."],
          ["M", "Food served on plates from the kitchen is", "plated service", "buffet service", "family service", "cafeteria service", "Plates are prepared before serving."],
          ["M", "Waiters serving guests from platters at the table is", "silver service", "buffet", "cafeteria", "self-service", "It is formal service."],
          ["M", "Guests queuing and picking food from a counter is", "cafeteria service", "silver service", "plated service", "room service", "Common in schools."],
          ["M", "Which is a duty of a host?", "welcoming guests warmly", "arriving late to his own party", "ignoring guests", "hiding the food", "Hosts make guests comfortable."],
          ["H", "When planning a menu for Muslim guests, the host should avoid", "pork", "rice", "chicken", "fruit salad", "Religion affects food choice."],
          ["H", "For a large wedding reception, the most practical style of service is", "buffet", "silver service for each guest", "room service", "picnic without food", "It serves many people quickly."],
          ["H", "Easy-to-eat foods are preferred at parties where guests", "stand while eating", "sit at formal tables", "do not eat", "eat at home", "Standing guests need finger foods."],
        ],
      },
      {
        week: 2,
        title: "Convenience foods and food additives",
        subtopics: ["Meaning of convenience foods", "Types of convenience foods", "Advantages and disadvantages", "Food additives"],
        objectives: ["Explain convenience foods", "Identify types of convenience foods", "State the advantages and disadvantages of convenience foods", "Explain food additives and their uses"],
        lesson: {
          title: "Ready-to-Use Foods",
          summary: "Evaluate convenience foods and food additives.",
          minutes: 40,
          notes: `## Meaning
**Convenience foods** are foods that have been **partly or fully prepared** by manufacturers so that they need **little or no preparation** at home.

## Types
| Type | Examples |
|---|---|
| **canned** | sardines, tomato paste, baked beans, corned beef |
| **dried/dehydrated** | instant noodles, powdered milk, custard powder, cornflakes |
| **frozen** | frozen chicken, fish, chips |
| **ready-to-eat** | bread, biscuits, meat pies, yoghurt |
| **instant mixes** | cake mixes, instant pap, poundo yam flour |
| **bottled** | juices, sauces, groundnut oil |

## Advantages
save **time and energy**; easy to store and carry; available out of season; less waste; useful in emergencies and for travellers; consistent quality.

## Disadvantages
often **more expensive**; may be high in **salt, sugar, fat** or additives; may lose some nutrients during processing; less fresh flavour; packaging adds waste; risk of buying **expired** or fake products.

## Food additives
**Food additives** are substances **added to food** to improve keeping quality, taste or appearance.
| Additive | Purpose | Example |
|---|---|---|
| **preservatives** | prevent spoilage | salt, sugar, vinegar, approved chemicals |
| **colourings** | improve appearance | caramel, beetroot colour |
| **flavourings and flavour enhancers** | improve taste | seasoning cubes, vanilla |
| **sweeteners** | sweeten | sugar, artificial sweeteners |
| **emulsifiers and stabilisers** | keep mixtures smooth | lecithin in margarine |
| **raising agents** | make baked goods rise | baking powder, yeast |
| **nutrients (fortification)** | add value | iodine in salt, vitamin A in flour and oil |
Additives must be **approved** (e.g. by NAFDAC) and used in safe amounts.`,
          examples: `**Example 1.** Name two convenience foods. *Answer:* **instant noodles** and **sardines**.

**Example 2.** Give one disadvantage of convenience foods. *Answer:* They are often **more expensive**.

**Example 3.** Iodine added to table salt is an example of **fortification**.`,
        },
        questions: [
          ["E", "Foods partly or fully prepared by manufacturers are", "convenience foods", "raw foods only", "wild foods", "farm foods", "They save preparation time."],
          ["E", "Instant noodles are an example of", "convenience food", "fresh vegetables", "raw meat", "unprocessed grain", "They cook in minutes."],
          ["E", "A major advantage of convenience foods is that they", "save time", "always cost less", "have no packaging", "never expire", "Little preparation is needed."],
          ["M", "Substances added to food to improve keeping quality or taste are", "food additives", "nutrients only", "fibres", "enzymes only", "They are added during processing."],
          ["M", "Baking powder is a", "raising agent", "colouring", "preservative only", "sweetener", "It makes cakes rise."],
          ["M", "Adding vitamin A to flour and vegetable oil is", "fortification", "adulteration", "fermentation", "dehydration", "It increases nutritional value."],
          ["M", "A disadvantage of many convenience foods is that they may be", "high in salt, sugar or fat", "too fresh", "free of cost", "rich in fibre always", "Processing adds these."],
          ["H", "Seasoning cubes are an example of", "flavour enhancers", "raising agents", "emulsifiers", "fortificants", "They improve taste."],
          ["H", "Food additives used in Nigeria should be approved by", "NAFDAC", "NIPOST", "INEC", "FRSC", "NAFDAC regulates food safety."],
          ["H", "Substances that keep oil and water mixtures smooth, as in margarine, are", "emulsifiers", "raising agents", "colourings", "sweeteners", "They stop separation."],
        ],
      },
      {
        week: 3,
        title: "Processing local foods",
        subtopics: ["Meaning of food processing", "Processing cassava into garri", "Processing soya beans into soya milk", "Hygiene in food processing"],
        objectives: ["Explain food processing", "Describe the processing of cassava into garri", "Describe the processing of soya beans into soya milk", "Apply hygiene rules during food processing"],
        lesson: {
          title: "Turning Raw Foods into Products",
          summary: "Process local raw materials into food products hygienically.",
          minutes: 45,
          notes: `## Meaning
**Food processing** is changing **raw food materials** into forms that are **safe, convenient, longer-lasting and more valuable**.
Benefits: reduces waste; adds value and income; improves keeping quality; provides variety; creates jobs.

## Processing cassava into garri
1. **harvest** fresh cassava roots
2. **peel** and **wash** thoroughly
3. **grate** into a mash
4. put into sacks and **press** to remove water (and some cyanide) — leave to **ferment** for 2–3 days
5. **sieve** to remove fibres and lumps
6. **fry (garify)** in a wide pan, stirring continuously, until dry and crisp (palm oil may be added for yellow garri)
7. cool, **sieve** again for uniform size
8. **package** in clean, dry, airtight bags
**Note:** fermentation and frying reduce the natural **cyanide** in cassava, making it safe.

## Processing soya beans into soya milk
1. pick and **wash** the beans
2. **soak** overnight (8–12 hours)
3. remove the hulls (dehull)
4. **grind** with clean water into a smooth paste
5. **sieve** through a clean cloth to separate milk from the chaff (okara)
6. **boil** the milk for about 20 minutes, stirring (removes beany taste and kills germs)
7. add sugar and flavour if desired; cool
8. store in clean bottles in a refrigerator
Soya milk is rich in **protein** and is an alternative to cow's milk.

## Other local products
palm oil from palm fruits; ogi (pap) from maize; plantain chips; zobo drink; kuli-kuli from groundnuts; fufu from cassava.

## Hygiene in processing
wash hands and equipment; use clean water; wear aprons and hair covers; keep the area clean and free from pests; use clean packaging; label products with dates.`,
          examples: `**Example 1.** Why is cassava mash pressed and fermented? *Answer:* To **remove water and reduce cyanide**.

**Example 2.** Why is soya milk boiled? *Answer:* To **kill germs and remove the beany taste**.

**Example 3.** Name one product from maize. *Answer:* **ogi (pap)**.`,
        },
        questions: [
          ["E", "Changing raw food materials into safer, longer-lasting forms is", "food processing", "food poisoning", "food spoilage", "meal service", "Processing adds value to raw food."],
          ["E", "Garri is produced from", "cassava", "maize", "yam", "rice", "Cassava roots are grated and fried."],
          ["E", "Soya milk is produced from", "soya beans", "cow's milk", "groundnuts only", "coconut water", "Beans are ground and sieved."],
          ["M", "Pressing and fermenting cassava mash helps to", "remove water and reduce cyanide", "add sugar", "increase fat", "remove protein", "Cyanide is harmful."],
          ["M", "The step of frying sieved cassava mash is called", "garification", "fermentation", "grinding", "soaking", "It dries the mash."],
          ["M", "Soya beans are soaked overnight to", "soften them for grinding and dehulling", "sweeten them", "freeze them", "colour them", "Soaking softens beans."],
          ["M", "Ogi (pap) is made from", "maize", "cassava leaves", "palm fruit", "soya milk", "It is fermented maize."],
          ["H", "Soya milk is boiled mainly to", "kill germs and remove the beany taste", "make it green", "remove all protein", "freeze it", "Heat improves safety and flavour."],
          ["H", "Kuli-kuli is made from", "groundnuts", "plantain", "maize", "cassava", "It is a groundnut snack."],
          ["H", "The chaff left after sieving ground soya beans is called", "okara", "garri", "ogiri", "fufu", "It is soya pulp."],
        ],
      },
      {
        week: 4,
        title: "Cooking fuels and energy conservation",
        subtopics: ["Sources of cooking fuel", "Advantages and disadvantages of fuels", "Safety with cooking fuels", "Conserving energy in the kitchen"],
        objectives: ["Identify sources of cooking fuel", "Compare cooking fuels", "Apply safety rules when using cooking fuels", "Conserve energy while cooking"],
        lesson: {
          title: "Energy for Cooking",
          summary: "Compare cooking fuels and use energy safely and efficiently.",
          minutes: 40,
          notes: `## Sources of cooking fuel
firewood, charcoal, sawdust, kerosene, **liquefied petroleum gas (LPG / cooking gas)**, electricity, biogas, solar energy.

## Comparing fuels
| Fuel | Advantages | Disadvantages |
|---|---|---|
| **firewood** | cheap, available in rural areas | smoke, eye and lung problems, deforestation, blackens pots |
| **charcoal** | burns steadily, little smoke | deforestation; carbon monoxide danger indoors |
| **kerosene** | easy to use | smell, soot, fire risk, price changes |
| **cooking gas (LPG)** | clean, fast, easy to control | cylinder cost; leaks can cause explosions |
| **electricity** | clean, convenient | power outages; expensive appliances; shock risk |
| **biogas** | renewable, from waste | needs a digester |
| **solar** | free and clean energy | depends on sunshine; expensive cookers |

## Safety with fuels
- keep gas cylinders **upright and outside or in ventilated places**
- check hoses and regulators for leaks with **soapy water** (never a flame)
- if gas leaks: **do not** switch on lights or strike matches; open windows; turn off the cylinder
- never use charcoal stoves indoors without ventilation
- store kerosene away from fire and in labelled containers
- do not leave cooking unattended
- keep a fire extinguisher or sand bucket nearby

## Energy conservation
use the right pot size for the burner; **cover pots** while cooking; soak beans before cooking; cut food into small pieces; use a pressure cooker; turn off heat when food is done; cook several items at once; keep burners clean; use **energy-saving** stoves (improved cookstoves).`,
          examples: `**Example 1.** How should you check a gas hose for leaks? *Answer:* Apply **soapy water** — bubbles show a leak.

**Example 2.** Give one way to save fuel while cooking. *Answer:* **Cover the pot**.

**Example 3.** Name one disadvantage of firewood. *Answer:* It causes **smoke and deforestation**.`,
        },
        questions: [
          ["E", "LPG stands for", "liquefied petroleum gas", "liquid plant grease", "low pressure gasoline", "light powder glue", "It is cooking gas."],
          ["E", "Which fuel is obtained from burnt wood?", "charcoal", "kerosene", "LPG", "electricity", "Charcoal is made by partly burning wood."],
          ["E", "Covering pots while cooking helps to", "save fuel", "waste gas", "cool food", "spoil food", "Heat is kept in."],
          ["M", "A leak in a gas hose should be checked using", "soapy water", "a lit match", "a candle", "a lighter", "Bubbles show leaks safely."],
          ["M", "If gas leaks in the kitchen, one should", "open windows and turn off the cylinder", "switch on the light", "strike a match", "start the generator", "Sparks can cause explosion."],
          ["M", "A disadvantage of firewood is that it", "produces smoke and causes deforestation", "is very clean", "is always expensive", "is electric", "Smoke harms health."],
          ["M", "Fuel produced from animal dung and waste in a digester is", "biogas", "LPG", "kerosene", "charcoal", "Waste produces methane."],
          ["H", "Using charcoal stoves in closed rooms is dangerous because of", "carbon monoxide", "oxygen", "water vapour", "nitrogen only", "It is a poisonous gas."],
          ["H", "Soaking beans before cooking conserves energy because", "they cook faster", "they become raw", "they need more fuel", "they lose all protein", "Softened beans need less time."],
          ["H", "A disadvantage of solar cookers is that they", "depend on sunshine", "produce smoke", "cause deforestation", "leak gas", "They do not work well on cloudy days."],
        ],
      },
      {
        week: 5,
        title: "Baking and flour mixtures",
        subtopics: ["Types of flour", "Raising agents", "Methods of making flour mixtures", "Baking a simple cake"],
        objectives: ["Identify types of flour and their uses", "Explain raising agents", "Describe methods of making flour mixtures", "Bake a simple cake"],
        lesson: {
          title: "Cakes, Bread and Pastries",
          summary: "Use flour mixtures and raising agents to bake.",
          minutes: 45,
          notes: `## Types of flour
| Flour | Use |
|---|---|
| **plain (all-purpose) flour** | pastries, chin-chin, puff-puff |
| **self-raising flour** | cakes (contains baking powder) |
| **strong (bread) flour** | bread (high gluten) |
| **whole-wheat flour** | brown bread; more fibre |
| **local flours** | cassava, plantain, yam, maize flours |

## Raising agents
Raising agents make mixtures **light** by introducing **gas** that expands when heated.
| Type | Examples |
|---|---|
| **air** | sieving flour, creaming, whisking eggs |
| **steam** | from water in the mixture (choux pastry) |
| **chemical** | **baking powder**, bicarbonate of soda (produce carbon dioxide) |
| **biological** | **yeast** (ferments sugar to produce carbon dioxide) |

## Methods of making flour mixtures
| Method | Description | Example |
|---|---|---|
| **rubbing-in** | fat rubbed into flour with fingertips | shortcrust pastry, scones, rock buns |
| **creaming** | fat and sugar beaten until light and fluffy, then eggs and flour added | Victoria sponge, fruit cake |
| **whisking** | eggs and sugar whisked until thick | fatless sponge |
| **melting** | fat melted with sugar/syrup | gingerbread |
| **all-in-one** | all ingredients beaten together | quick cakes |

## Recipe: simple creamed cake
**Ingredients:** 250 g margarine; 250 g sugar; 4 eggs; 250 g self-raising flour; 1 teaspoon vanilla; 2 tablespoons milk.
**Method:** preheat oven to about 180 °C; grease and line tin; cream margarine and sugar until light; beat in eggs one at a time; add vanilla; **fold in** sieved flour; add milk to get a soft dropping consistency; pour into tin; bake for about 45 minutes until a skewer comes out clean; cool on a wire rack.

## Faults
sunken cake (oven door opened early; too much raising agent); hard crust (oven too hot); heavy texture (too little creaming).`,
          examples: `**Example 1.** Which method is used for a Victoria sponge? *Answer:* the **creaming** method.

**Example 2.** Name a biological raising agent. *Answer:* **yeast**.

**Example 3.** How do you know a cake is done? *Answer:* A **skewer inserted comes out clean**.`,
        },
        questions: [
          ["E", "Flour that already contains baking powder is", "self-raising flour", "plain flour", "strong flour", "cassava flour", "It raises cakes."],
          ["E", "Yeast is a", "biological raising agent", "chemical raising agent", "type of flour", "type of fat", "It is a living organism."],
          ["E", "The gas produced by raising agents is", "carbon dioxide", "oxygen only", "nitrogen", "hydrogen", "CO2 makes mixtures rise."],
          ["M", "Beating fat and sugar until light and fluffy is the", "creaming method", "rubbing-in method", "melting method", "whisking method", "Creaming traps air in the mixture."],
          ["M", "Rubbing fat into flour with the fingertips is used for", "shortcrust pastry", "fatless sponge", "gingerbread", "choux pastry", "It gives a crumbly texture."],
          ["M", "Bread is best made with", "strong flour", "self-raising flour", "cornflour", "custard powder", "It has high gluten."],
          ["M", "Baking powder is a", "chemical raising agent", "biological raising agent", "type of flour", "flavouring", "It releases gas chemically."],
          ["H", "A cake is done when", "a skewer inserted comes out clean", "the top is still wet", "the oven is switched off", "it sinks in the middle", "No raw batter sticks."],
          ["H", "A cake that sinks in the middle may be caused by", "opening the oven door too early", "correct baking time", "creaming well", "sieving flour", "Cold air collapses the rise."],
          ["H", "Whisking eggs and sugar until thick is used to make a", "fatless sponge", "shortcrust pastry", "rock bun", "gingerbread", "Air is the raising agent."],
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
        title: "Body measurements and patterns",
        subtopics: ["Taking body measurements", "Commercial and drafted patterns", "Pattern markings", "Laying out and cutting fabric"],
        objectives: ["Take body measurements accurately", "Distinguish commercial and drafted patterns", "Interpret pattern markings", "Lay out and cut fabric correctly"],
        lesson: {
          title: "From Measurements to Cutting",
          summary: "Take measurements and use patterns to cut fabric.",
          minutes: 45,
          notes: `## Taking body measurements
Rules: wear light clothing; stand straight; use a **tape measure** that has not stretched; measure **closely but not tightly**; tie a string round the natural waist as a guide; record measurements immediately; work in pairs.
| Measurement | How to take |
|---|---|
| **bust/chest** | round the fullest part, tape level at the back |
| **waist** | round the natural waistline |
| **hip** | round the fullest part of the hips (about 20 cm below the waist) |
| **shoulder** | from the neck base to the shoulder point |
| **back length (nape to waist)** | from the neck bone at the back to the waist |
| **sleeve length** | from shoulder point over bent elbow to the wrist |
| **skirt/trouser length** | from waist to desired length |
| **inside leg** | from crotch to ankle |

## Patterns
A **pattern** is a **paper guide** used to cut out the pieces of a garment.
- **commercial patterns**: bought in envelopes with instructions and sizes
- **drafted patterns**: drawn from personal body measurements
- **adapted patterns**: basic patterns changed for new styles

## Pattern markings
| Marking | Meaning |
|---|---|
| **straight grain line** (arrow) | place parallel to the selvedge |
| **place on fold** | put the edge on the folded fabric |
| **notches** | match pieces when sewing |
| **darts, dots** | positions of darts, pockets, buttons |
| **cutting line** | outer line to cut along |
| **fitting (stitching) line** | where to sew |

## Laying out and cutting
press fabric; fold as instructed (**right sides together**); follow the layout chart; place grain lines parallel to the **selvedge** (finished edge); pin pieces; cut with long, smooth strokes of the shears; transfer markings; keep scraps for testing.`,
          examples: `**Example 1.** Where is the hip measurement taken? *Answer:* round the **fullest part of the hips**.

**Example 2.** What does the grain-line arrow on a pattern mean? *Answer:* Place it **parallel to the selvedge**.

**Example 3.** What is the selvedge? *Answer:* The **finished edge** of a fabric that does not fray.`,
        },
        questions: [
          ["E", "A paper guide for cutting out garment pieces is a", "pattern", "hem", "seam", "facing", "It shows garment shapes."],
          ["E", "Body measurements are taken with a", "tape measure", "metre rule only", "thimble", "bodkin", "It bends around the body."],
          ["E", "The finished edge of a fabric that does not fray is the", "selvedge", "hem", "dart", "notch", "It runs along the length."],
          ["M", "Patterns drawn from a person's own measurements are", "drafted patterns", "commercial patterns", "tracing patterns", "embroidery patterns", "They are made to measure."],
          ["M", "The grain-line arrow on a pattern should be placed", "parallel to the selvedge", "across the selvedge", "on the fold always", "diagonally", "It keeps the garment hanging straight."],
          ["M", "Notches on a pattern are used to", "match pieces when sewing", "mark buttons only", "show the price", "indicate size only", "They help alignment."],
          ["M", "The waist measurement is taken round the", "natural waistline", "fullest part of hips", "chest", "neck", "It is the narrowest part of the trunk."],
          ["H", "When taking measurements, the tape should be", "close but not tight", "very tight", "very loose", "twisted", "Accuracy needs a snug fit."],
          ["H", "The pattern marking 'place on fold' means", "put that edge on the folded fabric", "cut along the fold", "fold the pattern", "ignore the fold", "It gives a symmetrical piece."],
          ["H", "The back length is measured from the", "nape of the neck to the waist", "shoulder to wrist", "waist to knee", "crotch to ankle", "It is nape to waist."],
        ],
      },
      {
        week: 2,
        title: "Making simple articles",
        subtopics: ["Planning a sewing project", "Making an apron", "Making a pillowcase", "Finishing and evaluating work"],
        objectives: ["Plan a simple sewing project", "Make an apron following instructions", "Make a pillowcase", "Finish and evaluate a sewing project"],
        lesson: {
          title: "Sewing Useful Articles",
          summary: "Plan, make and evaluate simple household articles.",
          minutes: 45,
          notes: `## Planning a sewing project
decide the **article** and its purpose; take measurements; choose suitable **fabric** (cotton or calico for aprons); estimate the **quantity** of fabric; list materials (thread, bias binding, fasteners); plan the **order of work**; estimate cost and time.

## Making a half apron
**Materials:** 60 cm × 45 cm cotton fabric; 1 m tape or fabric for waistband and ties; matching thread; pocket piece 18 cm × 15 cm.
**Order of work:**
1. cut out the skirt, pocket and waistband
2. neaten and hem the **sides** of the apron with narrow hems
3. make the **pocket**: hem the top edge, turn in the other edges, tack and machine onto the apron
4. make a **deep hem** at the bottom (about 4 cm)
5. **gather** the top edge
6. attach the **waistband** and ties; distribute gathers evenly
7. remove tacking; press

## Making a pillowcase (housewife style)
**Materials:** cotton fabric about 2 × pillow length + 20 cm for the flap; thread.
1. hem the two short ends
2. fold one end over to form the **flap**
3. fold with right sides together; stitch the side seams (French seams for neatness)
4. turn right side out; press

## Finishing and evaluating
remove tacking; trim threads; press carefully; check measurements, neatness of stitches, straightness of seams, evenness of gathers and hems.
**Evaluation questions:** Does the article serve its purpose? Is it neat and well pressed? Were materials used economically? What could be improved?`,
          examples: `**Example 1.** Which fabric is suitable for a kitchen apron? *Answer:* **cotton**, because it is washable and absorbent.

**Example 2.** Why is a deep hem made at the bottom of an apron? *Answer:* It gives **weight** and a neat finish.

**Example 3.** Name one evaluation question. *Answer:* **Does the article serve its purpose?**`,
        },
        questions: [
          ["E", "A garment worn to protect clothes while cooking is an", "apron", "overcoat", "necktie", "pyjama", "It keeps clothes clean."],
          ["E", "A suitable fabric for a kitchen apron is", "cotton", "silk chiffon", "velvet", "lace", "Cotton is washable."],
          ["E", "The first step in a sewing project is", "planning", "pressing", "evaluating", "packaging", "Planning guides the work."],
          ["M", "The waistband of a half apron is attached after", "gathering the top edge", "cutting the pocket only", "pressing the finished apron", "evaluating", "Gathers are joined to the band."],
          ["M", "Making a list of fabric, thread and fasteners needed is part of", "planning a project", "evaluation", "laundering", "pressing", "Materials must be known."],
          ["M", "The flap of a housewife pillowcase is used to", "hold the pillow inside", "decorate the edge only", "hang it on a wall", "strengthen seams", "It tucks over the pillow."],
          ["M", "The final process before evaluating a sewn article is", "pressing", "cutting", "measuring", "buying fabric", "Pressing gives a neat finish."],
          ["H", "Checking whether an article serves its purpose and is neat is", "evaluation", "drafting", "tacking", "cutting out", "It judges quality."],
          ["H", "Using French seams on a pillowcase gives", "neat enclosed edges", "decorative pleats", "a bulky finish", "visible raw edges", "Raw edges are hidden."],
          ["H", "A deep hem at the bottom of an apron", "adds weight and a neat finish", "makes it shorter only", "is used for pockets", "replaces the waistband", "Weight helps it hang well."],
        ],
      },
      {
        week: 3,
        title: "Wardrobe planning and care of clothes",
        subtopics: ["Meaning of wardrobe planning", "Steps in wardrobe planning", "Daily and weekly care of clothes", "Storing clothes"],
        objectives: ["Explain wardrobe planning", "Plan a personal wardrobe", "Describe daily and weekly care of clothes", "Store clothes correctly"],
        lesson: {
          title: "Managing Your Clothes",
          summary: "Plan a wardrobe and care for clothes properly.",
          minutes: 40,
          notes: `## Meaning
A **wardrobe** is the **collection of clothes** a person owns (also the cupboard where they are kept). **Wardrobe planning** is organising clothing needs so that one is **suitably dressed for all occasions** within one's budget.

## Steps in wardrobe planning
1. **take stock** — list the clothes you have
2. sort them: keep, repair, alter, give away
3. identify **needs** for school, church/mosque, parties, sports and home
4. plan **mix-and-match** items that go together
5. make a **budget** and list items to buy
6. buy wisely: good quality, suitable colours, easy care
7. care for clothes to make them last

## Daily care of clothes
hang up clothes after use; air sweaty clothes; brush off dust; remove stains promptly; mend small tears and replace buttons immediately; polish shoes; do not sit on or crumple clothes.

## Weekly care
wash and iron clothes; mend clothes; clean the wardrobe; check for insects.

## Storing clothes
- clothes must be **clean and dry** before storage
- hang dresses, shirts and trousers on **hangers**
- fold knitted items (they stretch when hung)
- use **moth balls or dried neem leaves** to repel insects
- keep wardrobes **ventilated** to prevent mould
- store shoes in racks; stuff with paper to keep shape
- store seasonal or special clothes in covered boxes`,
          examples: `**Example 1.** What is the first step in wardrobe planning? *Answer:* **Taking stock** of the clothes one has.

**Example 2.** Why should knitted items be folded rather than hung? *Answer:* Hanging **stretches** them out of shape.

**Example 3.** Name one item used to repel insects in wardrobes. *Answer:* **moth balls** (or dried neem leaves).`,
        },
        questions: [
          ["E", "The collection of clothes a person owns is a", "wardrobe", "pattern", "recipe", "menu", "It includes all garments."],
          ["E", "Clothes should be hung on", "hangers", "the floor", "the kitchen table", "the car seat", "Hangers keep their shape."],
          ["E", "Clothes should be stored only when they are", "clean and dry", "wet and dirty", "stained", "torn", "Dirt and damp cause damage."],
          ["M", "The first step in wardrobe planning is", "taking stock of existing clothes", "buying new clothes", "giving all clothes away", "ironing", "Know what you have first."],
          ["M", "Clothes that can be combined in different ways are", "mix-and-match items", "uniforms only", "nightwear only", "protective wear", "They give many outfits."],
          ["M", "Moth balls are used in wardrobes to", "repel insects", "add colour", "iron clothes", "wash clothes", "Insects damage fabric."],
          ["M", "A small tear in a garment should be", "mended immediately", "left to grow", "cut further", "ignored", "Early repair prevents bigger damage."],
          ["H", "Knitted garments should be folded rather than hung because hanging", "stretches them out of shape", "makes them shrink", "cleans them", "irons them", "Weight pulls the knit."],
          ["H", "Wardrobes should be ventilated to prevent", "mould and musty smells", "clothes from drying", "light from entering", "moths from leaving", "Damp causes mould."],
          ["H", "Stuffing shoes with paper during storage helps to", "keep their shape", "make them wet", "change their colour", "attract insects", "Paper supports the shape."],
        ],
      },
      {
        week: 4,
        title: "Textile decoration: tie-dye and batik",
        subtopics: ["Meaning of textile decoration", "Tie-dye techniques", "Batik process", "Materials and safety"],
        objectives: ["Explain textile decoration", "Describe tie-dye techniques", "Describe the batik process", "Use dyes and chemicals safely"],
        lesson: {
          title: "Decorating Fabric with Dye",
          summary: "Decorate fabric using tie-dye and batik methods.",
          minutes: 45,
          notes: `## Meaning
**Textile decoration** is **adding design and colour** to fabric by methods such as dyeing, printing, painting and embroidery.
**Resist dyeing** prevents dye from reaching some parts of the fabric to create patterns. **Tie-dye** and **batik** are resist methods. In Yoruba land, resist-dyed cloth is called **adire**.

## Materials
white cotton fabric (**100% cotton** absorbs dye well), dyes (vat or direct dyes), **caustic soda** and **sodium hydrosulphite** (for vat dyes), salt, rubber bands, raffia or string, buckets, gloves, stirring sticks, wax (for batik), tjanting or brush, iron and old newspapers.

## Tie-dye techniques
| Technique | Method | Effect |
|---|---|---|
| **marbling (crumpling)** | crumple fabric into a ball and tie | marble-like patterns |
| **circles (sunburst)** | pick a point, tie at intervals | rings |
| **pleating/folding** | fold like a fan and tie | stripes |
| **knotting** | tie the fabric itself in knots | irregular shapes |
| **twisting** | twist tightly and tie | spiral patterns |
| **stitching (tritik)** | sew running stitches, pull tight | fine line patterns |

### Steps
wash fabric to remove starch; tie the design; wet the fabric; prepare the dye bath; dip for the required time; rinse; untie; rinse again; dry in the shade; iron.

## Batik process
1. draw the design lightly on fabric
2. apply **hot wax** to areas to remain undyed (with a tjanting or brush)
3. dip in the dye bath; allow to dry
4. apply wax to more areas and dye again for more colours (light to dark)
5. remove wax by **ironing between newspapers** or boiling
6. wash and iron
**Crackle effect**: cracked wax lets dye seep in, producing fine veins.

## Safety
wear **gloves** and aprons; work in a ventilated area; keep chemicals away from children and eyes; do not heat wax over an open flame unattended; wash hands after work.`,
          examples: `**Example 1.** What name is given to Yoruba resist-dyed cloth? *Answer:* **adire**.

**Example 2.** What resists the dye in batik? *Answer:* **wax**.

**Example 3.** How is wax removed from batik fabric? *Answer:* By **ironing between newspapers** (or boiling).`,
        },
        questions: [
          ["E", "Adding colour and design to fabric is", "textile decoration", "laundry", "meal planning", "pattern drafting", "It beautifies fabric."],
          ["E", "The material used to resist dye in batik is", "wax", "salt", "starch", "sugar", "Wax blocks the dye."],
          ["E", "Resist-dyed cloth of the Yoruba is called", "adire", "aso oke only", "akwete", "george", "Adire uses resist dyeing."],
          ["M", "Crumpling fabric into a ball and tying it before dyeing gives a", "marbling effect", "stripe effect", "circle effect", "plain colour", "Random creases resist dye."],
          ["M", "Folding fabric like a fan and tying it gives a", "stripe pattern", "circle pattern", "spiral pattern", "dot pattern only", "Folds create lines."],
          ["M", "Sewing running stitches and pulling them tight before dyeing is", "tritik", "marbling", "batik", "printing", "It creates fine lines."],
          ["M", "The best fabric for tie-dye is", "100% cotton", "nylon", "polyester", "plastic sheet", "Cotton absorbs dye well."],
          ["H", "Wax is removed from finished batik by", "ironing between newspapers", "soaking in dye", "rubbing with sand", "freezing permanently", "Heat melts wax into paper."],
          ["H", "Fine veins of colour in batik caused by cracked wax are called the", "crackle effect", "marble effect", "circle effect", "shading effect", "Dye seeps into cracks."],
          ["H", "When using caustic soda for dyeing, one must", "wear gloves and work in a ventilated area", "use bare hands", "taste the solution", "work near children", "It is corrosive."],
        ],
      },
      {
        week: 5,
        title: "Household linen and soft furnishings",
        subtopics: ["Types of household linen", "Choosing household linen", "Soft furnishings", "Care of household linen"],
        objectives: ["Identify types of household linen", "State factors in choosing household linen", "Identify soft furnishings and their uses", "Care for household linen"],
        lesson: {
          title: "Fabrics Around the Home",
          summary: "Choose and care for household linen and soft furnishings.",
          minutes: 40,
          notes: `## Household linen
Fabric articles used in the home:
| Group | Items |
|---|---|
| **bed linen** | bedsheets, pillowcases, duvet covers, blankets, bedspreads |
| **bathroom linen** | bath towels, hand towels, face towels, bath mats |
| **table linen** | tablecloths, table mats, napkins, runners |
| **kitchen linen** | tea towels, dish cloths, oven gloves, aprons |

## Choosing household linen
**purpose**; **absorbency** (cotton towels absorb well); **durability** and firm weave; **size** to fit beds and tables; **colour-fastness**; **ease of care**; cost; colour harmony with the room; quality of finishing (neat hems).

## Soft furnishings
Fabric items that **decorate and add comfort** to the home: **curtains** and blinds, **cushions** and cushion covers, **upholstery** (fabric covering chairs and sofas), **rugs and carpets**, loose covers, lampshades.
Uses: privacy (curtains), comfort, warmth, decoration, noise reduction, protection of furniture.

## Care of household linen
- wash regularly (bed linen weekly; towels after a few uses)
- use suitable water temperature and detergent
- dry in the sun (whites) or shade (colours)
- iron and fold neatly
- store in a clean, dry **linen cupboard**
- **rotate** linen so that items wear evenly
- mend tears promptly
- vacuum or beat rugs and carpets; wash curtains periodically`,
          examples: `**Example 1.** Name two items of bed linen. *Answer:* **bedsheets and pillowcases**.

**Example 2.** Which fibre makes the most absorbent towels? *Answer:* **cotton**.

**Example 3.** Why should linen be rotated? *Answer:* So that **items wear evenly** and last longer.`,
        },
        questions: [
          ["E", "Bedsheets and pillowcases are", "bed linen", "table linen", "kitchen linen", "bathroom linen", "They are used on beds."],
          ["E", "Tablecloths and napkins are", "table linen", "bed linen", "bathroom linen", "upholstery", "They are used at meals."],
          ["E", "Curtains are an example of", "soft furnishings", "cutlery", "crockery", "cleaning agents", "They are fabric decorations."],
          ["M", "The most absorbent fibre for towels is", "cotton", "nylon", "polyester", "acrylic", "Cotton absorbs water well."],
          ["M", "Fabric covering chairs and sofas is called", "upholstery", "bias binding", "facing", "interfacing", "It covers furniture."],
          ["M", "Curtains provide", "privacy", "food", "fuel", "water", "They block view from outside."],
          ["M", "Tea towels and oven gloves are", "kitchen linen", "bed linen", "table linen", "soft furnishings only", "They are used in the kitchen."],
          ["H", "Using household linen in turns so that items wear evenly is", "rotation", "shirring", "pleating", "hoarding", "It extends their life."],
          ["H", "When buying coloured table linen, it is important to check for", "colour-fastness", "strong smell", "loose threads", "stains", "Colours should not run."],
          ["H", "Household linen should be stored in a", "clean, dry linen cupboard", "damp corner", "kitchen sink", "refuse bin", "Dryness prevents mould."],
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
        title: "BECE revision: food and nutrition",
        subtopics: ["Food classes and deficiency diseases", "Meal planning and special groups", "Cooking methods and kitchen safety", "Food preservation and processing"],
        objectives: ["Recall food classes, functions and deficiency diseases", "Apply meal planning principles", "Recall methods of cooking and kitchen safety rules", "Recall methods of food preservation and processing"],
        lesson: {
          title: "Revising Food and Nutrition",
          summary: "Consolidate food and nutrition topics for the BECE.",
          minutes: 45,
          notes: `## Food classes and functions
carbohydrates (energy); proteins (growth and repair); fats and oils (concentrated energy); vitamins and minerals (protection and regulation); water (transport, temperature); roughage (bowel movement).

## Deficiency diseases
| Lack of | Disease |
|---|---|
| protein | kwashiorkor |
| protein and energy | marasmus |
| vitamin A | night blindness |
| vitamin B1 | beriberi |
| vitamin C | scurvy |
| vitamin D / calcium | rickets |
| iron | anaemia |
| iodine | goitre |

## Meal planning
balanced diet; variety; budget; seasonal foods; needs of infants (exclusive breastfeeding 6 months), adolescents (protein, iron), pregnant women (iron, folic acid), elderly (less energy, more fibre), sick (light foods).

## Cooking methods
moist heat: boiling, simmering, stewing, steaming, poaching. Dry heat: baking, roasting, grilling, toasting. Fat: shallow frying, deep frying.

## Kitchen safety
turn pot handles in; wipe spills; never pour water on oil fires; check gas leaks with soapy water; cool burns under running water.

## Preservation and processing
drying, smoking, salting, fermentation, refrigeration, freezing, canning, pasteurisation; cassava → garri; soya beans → soya milk; maize → ogi.`,
          examples: `**Example 1.** Which disease is caused by lack of iodine? *Answer:* **goitre**.

**Example 2.** Moi-moi is cooked by **steaming**.

**Example 3.** Milk is made safe by heating to a set temperature, called **pasteurisation**.`,
        },
        questions: [
          ["E", "Energy-giving foods are mainly", "carbohydrates", "vitamins", "minerals", "water", "Carbohydrates supply energy."],
          ["E", "Swelling of the neck due to lack of iodine is", "goitre", "rickets", "scurvy", "anaemia", "The thyroid enlarges."],
          ["E", "Cooking food by the steam from boiling water is", "steaming", "grilling", "baking", "frying", "Steam cooks the food."],
          ["M", "Bleeding gums result from lack of", "vitamin C", "vitamin A", "iodine", "protein", "This is scurvy."],
          ["M", "Night blindness is prevented by eating foods rich in", "vitamin A", "vitamin C", "iodine", "vitamin B1", "Carrots and palm oil help."],
          ["M", "The best food for an infant in the first 6 months is", "breast milk", "garri", "pounded yam", "soft drinks", "It meets all needs."],
          ["M", "Preserving fish by exposing it to smoke is", "smoking", "canning", "freezing", "pasteurisation", "Smoke dries and preserves."],
          ["H", "A pregnant woman needs extra iron to", "prevent anaemia and support blood formation", "reduce protein intake", "stop the baby's growth", "increase sugar", "Blood volume increases."],
          ["H", "The correct action when a pan of oil catches fire is to", "cover it with a lid or damp cloth after turning off the heat", "pour water on it", "fan it", "throw it outside while burning", "Covering cuts off oxygen."],
          ["H", "Fermentation in producing garri helps to", "reduce cyanide", "add protein", "add iodine", "increase water", "It makes cassava safe."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: clothing and textiles",
        subtopics: ["Fibres and fabrics", "Sewing tools, stitches and seams", "Fullness, edge finishes and fastenings", "Laundry and stain removal"],
        objectives: ["Recall types and properties of fibres", "Recall sewing tools, stitches and seams", "Recall methods of disposing of fullness, edge finishes and fastenings", "Apply laundry and stain removal methods"],
        lesson: {
          title: "Revising Clothing and Textiles",
          summary: "Consolidate clothing and textiles topics for the BECE.",
          minutes: 45,
          notes: `## Fibres
natural: cotton, linen (plant); wool, silk (animal). Man-made: rayon (regenerated); nylon, polyester, acrylic (synthetic).
Burning test: plant fibres — paper smell, soft ash; animal fibres — hair smell, crushable bead; synthetics — melt, hard bead.

## Tools
measuring (tape measure); cutting (shears, pinking shears, seam ripper); sewing (needles, pins, thimble); marking (tailor's chalk, tracing wheel); pressing (iron).

## Stitches
temporary: tacking, tailor's tacks. Permanent: running, back stitch, hemming, slip stitch, overcasting. Decorative: chain, stem, satin, cross stitch, French knot.

## Seams
plain (open) seam; French seam (fine fabrics); flat-fell seam (jeans, shirts).

## Fullness
darts, tucks, gathers, pleats (knife, box, inverted), elastic, shirring, smocking.

## Edge finishes and fastenings
hems, facings, bias binding; buttons, zips, hooks and eyes, press studs, Velcro.

## Sewing machine
feed dog (moves fabric), tension disc (thread tightness), presser foot (holds fabric), bobbin (lower thread), balance wheel (turn towards you).

## Laundry and stains
sort → mend/remove stains → soak → wash → rinse → finish → dry → iron → store.
blood: cold salty water; chewing gum: ice; candle wax: iron over blotting paper; rust: lemon and salt.`,
          examples: `**Example 1.** Which seam is best for chiffon? *Answer:* **French seam**.

**Example 2.** Which part of the sewing machine moves fabric forward? *Answer:* **feed dog**.

**Example 3.** Two folds facing away from each other form a **box pleat**.`,
        },
        questions: [
          ["E", "Wool is an example of", "an animal fibre", "a plant fibre", "a synthetic fibre", "a regenerated fibre", "It comes from sheep."],
          ["E", "The tool used for cutting fabric is the", "dressmaker's shears", "thimble", "tape measure", "bodkin", "Shears have long blades."],
          ["E", "A temporary stitch used to hold fabric before sewing is", "tacking", "chain stitch", "satin stitch", "back stitch", "It is removed later."],
          ["M", "Nylon is classified as a", "synthetic fibre", "plant fibre", "animal fibre", "natural fibre", "It is made from chemicals."],
          ["M", "The strong seam used on jeans is the", "flat-fell seam", "French seam", "tacked seam", "plain seam unneatened", "It has two visible rows of stitching."],
          ["M", "Stitched tapering folds used to shape fabric to the body are", "darts", "hems", "facings", "notches", "They fit body curves."],
          ["M", "The part of the sewing machine that supplies the lower thread is the", "bobbin", "spool pin", "presser foot", "take-up lever", "It sits below the plate."],
          ["H", "A fibre that smells like burning paper and leaves soft grey ash is", "cotton", "wool", "silk", "nylon", "Plant fibres burn like paper."],
          ["H", "Candle wax on a tablecloth is best removed by", "scraping and ironing over blotting paper", "soaking in hot oil", "freezing for weeks", "boiling with dye", "Paper absorbs melted wax."],
          ["H", "Synthetic garments should be ironed with a cool iron because they", "melt at high temperature", "become stronger", "shrink in cold", "absorb heat well", "Heat damages synthetics."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: home management",
        subtopics: ["Resources, decision-making and budgeting", "Consumer education", "The home, cleaning and safety", "Interior decoration"],
        objectives: ["Recall types of resources and decision-making steps", "Apply budgeting and consumer education principles", "Recall home care and home safety practices", "Apply colour and design principles"],
        lesson: {
          title: "Revising Home Management",
          summary: "Consolidate home management topics for the BECE.",
          minutes: 45,
          notes: `## Resources
human (time, energy, skills, knowledge); material (money, house, equipment); community (schools, hospitals, markets).

## Decision-making steps
identify problem → gather information → list alternatives → consider consequences → choose → act → evaluate.

## Budgeting
estimate income → list needs → set savings → allocate by priority → record spending → review. Distinguish **needs** from **wants**; avoid impulse buying.
Types of income: money, real, psychic; fixed and irregular.

## Consumer education
rights: safety, information, choice, to be heard, redress, education. Responsibilities: read labels, check expiry dates, keep receipts, report fake products. Agencies: FCCPC, NAFDAC, SON.

## The home
house vs home; bungalow, duplex, flat, semi-detached, tenement. Factors in choosing a house: income, location, security, water, drainage.
Cleaning: daily (sweeping, dusting), weekly (mopping, washing linen), periodic (spring cleaning). Agents: detergent, disinfectant, bleach, polish.
Refuse: covered bins; do not dump in drains.

## Home safety
prevent falls, burns, poisoning, electric shock, suffocation (generators outside), drowning. First aid: burns — cool water; nosebleed — lean forward, pinch nose; fainting — lay flat, raise legs.

## Interior decoration
primary colours: red, yellow, blue. Secondary: orange, green, purple. Schemes: monochromatic, analogous, complementary, neutral. Warm colours cosy; cool colours spacious.`,
          examples: `**Example 1.** Is money a human or material resource? *Answer:* **material**.

**Example 2.** Blue and orange together form a **complementary** colour scheme.

**Example 3.** Why keep generators outside? *Answer:* To **prevent carbon monoxide poisoning**.`,
        },
        questions: [
          ["E", "Knowledge and skills are", "human resources", "material resources", "community resources", "consumer rights", "They belong to people."],
          ["E", "Mopping floors and washing bedsheets are usually", "weekly cleaning tasks", "yearly tasks", "hourly tasks", "never done", "They are done each week."],
          ["E", "A plan for spending money is a", "budget", "recipe", "pattern", "menu", "It controls spending."],
          ["M", "Blue and orange together form a", "complementary colour scheme", "monochromatic scheme", "analogous scheme", "neutral scheme", "They are opposite on the wheel."],
          ["M", "Mixing red and blue gives", "purple", "green", "orange", "yellow", "Purple is a secondary colour."],
          ["M", "A consumer who wants compensation for a faulty product is exercising the right to", "redress", "vote", "hoard", "silence", "Redress corrects the wrong."],
          ["M", "The step in decision-making after listing alternatives is", "considering the consequences of each", "evaluating the result", "identifying the problem", "acting on the decision", "Consequences are weighed before choosing."],
          ["H", "Generators should be placed outside the house to prevent", "carbon monoxide poisoning", "theft of fuel only", "noise indoors only", "rust", "The exhaust gas is deadly."],
          ["H", "A family's feeling of comfort and joy from a well-kept home is", "psychic income", "money income", "fixed income", "irregular income", "It is emotional satisfaction."],
          ["H", "Light cool colours make a small room appear", "larger", "smaller", "darker", "hotter", "Cool colours recede."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: family living and mixed practice",
        subtopics: ["The family and its functions", "Personal hygiene and grooming", "Adolescence", "Mixed practice test"],
        objectives: ["Recall types and functions of the family", "Recall personal hygiene and grooming practices", "Recall the changes and challenges of adolescence", "Complete a mixed BECE-style practice test"],
        lesson: {
          title: "Revising Family Living",
          summary: "Consolidate family living topics and practise mixed questions.",
          minutes: 45,
          notes: `## The family
nuclear, extended, monogamous, polygamous, single-parent, foster/adoptive.
Functions: reproduction, provision, care and protection, socialisation, love, moral training, economic support, recreation.
Values: respect, honesty, love, cooperation, tolerance.
Roles: parents provide, guide and protect; children obey, help with chores, study.

## Personal hygiene and grooming
bathe twice daily; brush teeth twice daily; wash hands after the toilet and before eating; keep nails short; do not share toothbrushes or towels; menstrual hygiene.
Grooming: neat clothes, hair and shoes; good posture (sit upright, feet flat; lift with knees bent).

## Adolescence
10–19 years; puberty triggered by hormones.
Girls: breasts, hips widen, menstruation. Boys: voice deepens, beard, shoulders broaden. Both: growth spurt, body hair, pimples.
Challenges: peer pressure, drug abuse, teenage pregnancy, STIs, cultism.
Coping: good hygiene, balanced diet, good friends, abstinence, talking to trusted adults, setting goals.

## Careers in Home Economics
caterer, chef, dietitian, baker, fashion designer, tailor, textile designer, interior decorator, hotel manager, teacher.

## Exam tips
read each question carefully; look out for **NOT** and **EXCEPT**; eliminate wrong options; answer all questions; check your shading.`,
          examples: `**Example 1.** Which type of family includes grandparents and cousins? *Answer:* **extended family**.

**Example 2.** What triggers puberty? *Answer:* **hormones**.

**Example 3.** Name one career in Home Economics. *Answer:* **dietitian** (or caterer, fashion designer).`,
        },
        questions: [
          ["E", "A family of parents and children with grandparents living together is", "an extended family", "a nuclear family", "a single-parent family", "a foster family only", "Relatives extend the family."],
          ["E", "Hands should be washed", "before eating", "only once a week", "only after sleeping", "never", "It removes germs."],
          ["E", "A professional who plans diets for patients is a", "dietitian", "tailor", "decorator", "baker", "Dietitians apply nutrition."],
          ["M", "Teaching children customs and values is the family function of", "socialisation", "reproduction", "recreation", "provision", "Children learn society's ways."],
          ["M", "Broadening of the shoulders is a sign of puberty in", "boys", "girls", "infants", "the elderly", "It is a male change."],
          ["M", "Good sitting posture includes", "sitting upright with feet flat on the floor", "slouching", "lying on the desk", "crossing legs always", "It protects the spine."],
          ["M", "Items that should never be shared because they spread germs include", "toothbrushes and towels", "books", "rulers", "chairs", "Personal items carry germs."],
          ["H", "An adolescent under pressure from friends to take drugs should", "say 'No' firmly and seek help from a trusted adult", "try it once", "keep it secret", "join them to fit in", "Refusal protects health."],
          ["H", "A family of one husband and one wife with their children is", "monogamous", "polygamous", "extended", "single-parent", "Mono means one spouse."],
          ["H", "Chemical messengers that cause the changes of puberty are", "hormones", "vitamins", "enzymes in food only", "antibodies", "Glands release hormones."],
        ],
      },
    ],
  },
];
