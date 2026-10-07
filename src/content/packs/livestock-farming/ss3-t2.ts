import type { TermPlan } from "../types";

/** SS3 Livestock Farming, Second Term — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Dairy Technology I: Milk Production, Handling and Hygiene",
      subtopics: ["Composition of milk", "Milk secretion and milking", "Clean milk production", "Handling, cooling and testing"],
      objectives: ["State the composition of milk", "Describe milk let-down and milking methods", "Explain how to produce clean milk", "Describe the handling, cooling and testing of raw milk"],
      lesson: {
        title: "From Udder to Cooler",
        summary: "How milk is produced and kept clean and safe before processing.",
        minutes: 40,
        notes: `## Milk
**Milk** is the **secretion of the mammary gland of female mammals** for feeding their young.

### Composition of cow's milk (approximate)
| Component | % |
|---|---|
| **water** | 87 |
| **lactose** (milk sugar) | 4.8 |
| **fat** (butterfat) | 3.5–4 |
| **protein** (mainly **casein**; also whey proteins) | 3.3 |
| **minerals** (calcium, phosphorus) | 0.7 |
Also vitamins A, D and B group. **Total solids** ≈ 13%; **solids-not-fat (SNF)** ≈ 9%. Composition varies with breed (Jersey milk is richest in fat), stage of lactation, feed and health.

**Colostrum** — the first milk after calving; thick, yellowish; rich in **antibodies**, protein and vitamin A; essential for the newborn; not sold.

## Dairy animals
cattle (Friesian, Jersey, Brown Swiss; White Fulani and crosses in Nigeria), goats, sheep, camels.

## Milk secretion
Milk is made in the **alveoli** of the udder and stored in ducts and the **gland and teat cisterns**. **Let-down** is caused by the hormone **oxytocin**, released when the udder is stimulated (washing, the calf, milking sounds). Fear and pain release adrenaline, which **blocks let-down** — handle cows gently and keep a routine. **Prolactin** maintains milk secretion.

**Lactation period:** about **305 days**; **dry period:** about 60 days before the next calving.

## Milking
- **hand milking** — full-hand method (squeeze) is preferred to stripping (pulling)
- **machine milking** — teat cups apply vacuum and pulsation; faster, cleaner
Milk at **regular times** (usually twice daily), quickly, quietly and **completely**.

### Milking routine
1. Assemble clean equipment.
2. Bring the cow in calmly; restrain; give a little feed.
3. **Wash the udder and teats** with clean warm water and disinfectant; **dry** with an individual towel.
4. **Fore-milk test** — draw the first streams into a **strip cup** to check for clots (**mastitis**); discard.
5. Milk out fully within about 5–7 minutes.
6. **Teat dip** in disinfectant.
7. **Strain / filter** the milk; **cool** at once.
8. Wash and sanitise equipment.
Milk healthy cows first and mastitic cows last.

## Clean milk production
**Sources of contamination:** the udder and flanks; the milker's hands; utensils; dust, flies, dung; water; a diseased cow.
**Requirements:**
- **healthy cows** — free of **mastitis, tuberculosis, brucellosis**
- **clean milker** — healthy, clean hands and clothes, short nails
- **clean, well-drained milking parlour**
- **seamless stainless-steel or aluminium utensils**, rinsed, washed with hot detergent, sanitised and dried upside down
- clean water
- covered pails; no dusty feed during milking
- milk from cows under **antibiotic treatment** is withheld for the **withdrawal period**

## Handling raw milk
- **cool to 4 °C or below** within two hours — bacteria multiply rapidly in warm milk
- store in a **bulk cooling tank**; transport in clean churns or insulated tankers
- keep out of sunlight
- deliver quickly to the collection or processing centre

## Quality tests
| Test | Checks |
|---|---|
| **organoleptic** | smell, colour, taste, appearance |
| **lactometer** | density — detects **added water** (normal specific gravity about 1.028–1.032) |
| **alcohol test; clot-on-boiling** | acidity / sourness |
| **methylene blue / resazurin reduction** | bacterial load |
| **Gerber test** | butterfat percentage |
| **California mastitis test** | mastitis (somatic cells) |
| **antibiotic residue test** | drug residues |

## Milk-borne diseases
tuberculosis, brucellosis, typhoid, Q fever, food poisoning — prevented by healthy herds, hygiene and **pasteurisation**.`,
        examples: `**Example 1.** Name the main protein and the sugar in milk. *Answer:* **Casein** and **lactose**.

**Example 2.** Which hormone causes milk let-down? *Answer:* **Oxytocin**.

**Example 3.** Why must milk be cooled quickly after milking? *Answer:* To **slow the growth of bacteria** that sour and spoil it.`,
      },
      questions: [
        ["E", "The largest component of milk is", "water", "fat", "protein", "lactose", "Milk is about 87% water."],
        ["E", "The sugar found in milk is", "lactose", "sucrose", "maltose", "fructose", "It is called milk sugar."],
        ["E", "The first milk produced after calving is", "colostrum", "whey", "cream", "skim milk", "It is rich in antibodies."],
        ["M", "The hormone responsible for milk let-down is", "oxytocin", "insulin", "adrenaline", "thyroxine", "It is released when the udder is stimulated."],
        ["M", "Inflammation of the udder is called", "mastitis", "bloat", "foot rot", "anthrax", "It is detected by clots in the fore-milk."],
        ["M", "Raw milk should be cooled soon after milking to about", "4 °C", "25 °C", "37 °C", "63 °C", "Low temperature slows bacterial growth."],
        ["M", "The instrument used to detect the addition of water to milk is the", "lactometer", "thermometer", "hygrometer", "barometer", "It measures the density of the milk."],
        ["H", "The percentage of butterfat in milk is determined by the", "Gerber test", "alcohol test", "resazurin test", "strip-cup test", "Acid and centrifuging separate the fat for measurement."],
        ["H", "A frightened cow fails to let down her milk because of the release of", "adrenaline", "prolactin", "oestrogen", "progesterone", "It blocks the action of oxytocin."],
        ["H", "Milk from a cow being treated with antibiotics should be", "withheld until the withdrawal period is over", "sold at once", "mixed with the bulk milk", "given to consumers after straining", "Residues are harmful and interfere with fermentation."],
      ],
    },
    {
      week: 2,
      title: "Dairy Technology II: Milk Processing",
      subtopics: ["Heat treatment of milk", "Yoghurt", "Cheese", "Butter and other products"],
      objectives: ["Describe pasteurisation and other heat treatments", "Explain how yoghurt is made", "Explain how cheese is made", "Describe butter making and other dairy products"],
      lesson: {
        title: "Turning Milk into Products",
        summary: "The processing of milk into safe, longer-lasting and more valuable foods.",
        minutes: 40,
        notes: `## Why process milk?
to make it **safe**; to **extend shelf life**; to **add value** and variety; to ease transport and storage; to use surplus milk.

## Heat treatment
| Process | Conditions | Result |
|---|---|---|
| **pasteurisation — LTLT (batch / holder)** | **63 °C for 30 minutes** | kills disease organisms; keeps flavour |
| **pasteurisation — HTST** | **72 °C for 15 seconds** | commonest commercial method |
| **UHT (ultra-high temperature)** | about **135–140 °C for 2–4 seconds**, aseptic packing | keeps for months unopened without refrigeration |
| **sterilisation** | about 115–120 °C for 15–20 minutes in sealed containers | long life; cooked flavour |
| **boiling** | home method | safe but some nutrient loss |

Pasteurised milk is **cooled rapidly** to 4 °C and kept refrigerated. **Pasteurisation does not kill all bacteria** — it destroys pathogens and reduces spoilage organisms.

## Other basic operations
- **standardisation** — adjusting the fat content
- **homogenisation** — forcing milk through fine openings to **break fat globules** so cream does not rise
- **separation** — a **cream separator** (centrifuge) divides milk into **cream** and **skim milk**

## Yoghurt
A **fermented milk** product.
1. **Heat** milk to about 85–90 °C; hold a few minutes (kills bacteria; improves texture).
2. **Cool** to about **42–45 °C**.
3. **Inoculate** with **starter culture** — *Lactobacillus bulgaricus* and *Streptococcus thermophilus* (about 2–3%).
4. **Incubate** at about 42 °C for 4–6 hours — bacteria convert **lactose to lactic acid**, which **coagulates** the casein and gives the sour taste.
5. **Cool** to about 4 °C to stop fermentation.
6. Add sugar, flavour or fruit; **package**; refrigerate.
**Nono** is a traditional Nigerian fermented milk; **fura da nono** is nono with millet balls.

## Cheese
Cheese is made by **coagulating milk and separating the curd from the whey**.
1. **Pasteurise** and cool the milk.
2. Add **starter culture** (ripening).
3. Add **rennet** (enzyme **chymosin**) or an acid / plant extract to **coagulate** the milk.
4. **Cut the curd**; stir and heat gently to expel whey.
5. **Drain the whey**.
6. **Salt** the curd.
7. **Mould and press**.
8. **Ripen (cure)** for hard cheeses — weeks to months.

**Types:** soft (cottage, cream cheese), semi-hard, hard (Cheddar), processed.
**Wara (warankasi)** — Nigerian soft cheese: fresh milk is heated and coagulated with the juice of **sodom apple (*Calotropis procera*) leaves**; the curd is drained in small baskets. It is unripened and keeps only a few days.
**Whey** — the liquid left; used in feed and drinks.

## Butter
**Butter** is made by **churning cream**.
1. **Separate** cream (about 35–40% fat).
2. **Pasteurise**; cool; **ripen** (optional, with culture).
3. **Churn** — agitation breaks the fat globules, which join into butter grains.
4. Drain the **buttermilk**.
5. **Wash** the grains with cold water.
6. **Salt** and **work (knead)** to remove water and give a smooth texture.
7. **Package** and refrigerate.
Butter is about **80% fat**. **Ghee (man shanu)** is clarified butter — heated to remove water; keeps well without refrigeration.

## Other products
**cream; ice cream; evaporated milk** (about 60% of water removed); **sweetened condensed milk** (sugar added); **milk powder** (spray or roller dried); flavoured milk; kindirmo; **casein**; lactose.

## Hygiene and packaging
clean plant; stainless-steel equipment; clean-in-place; safe water; sterile, sealed, labelled containers; **cold chain**; NAFDAC registration.

## Yield examples
10 litres of milk give roughly **1 kg of hard cheese**; about 20–25 litres of milk give **1 kg of butter**.`,
        examples: `**Example 1.** State the conditions for HTST pasteurisation. *Answer:* **72 °C for 15 seconds**, followed by rapid cooling.

**Example 2.** Which acid forms in yoghurt? *Answer:* **Lactic acid**, from the fermentation of lactose.

**Example 3.** What is the liquid left after cheese curd is removed? *Answer:* **Whey**.`,
      },
      questions: [
        ["E", "Heating milk to destroy disease-causing organisms without boiling it is", "pasteurisation", "homogenisation", "churning", "condensation", "It makes milk safe while keeping its flavour."],
        ["E", "Butter is made by", "churning cream", "boiling whey", "freezing skim milk", "drying yoghurt", "Agitation brings the fat globules together."],
        ["E", "The liquid that drains from the curd in cheese making is", "whey", "cream", "buttermilk", "colostrum", "It contains lactose and whey proteins."],
        ["M", "The conditions for batch (holder) pasteurisation are", "63 °C for 30 minutes", "72 °C for 15 seconds", "100 °C for 1 hour", "40 °C for 6 hours", "It is the low-temperature long-time method."],
        ["M", "In yoghurt making, bacteria convert lactose into", "lactic acid", "acetic acid", "alcohol", "citric acid", "The acid coagulates the casein."],
        ["M", "The enzyme preparation used to coagulate milk in cheese making is", "rennet", "amylase", "lipase", "pectinase", "It contains chymosin."],
        ["M", "Breaking up the fat globules of milk so that cream does not rise is", "homogenisation", "standardisation", "sterilisation", "separation", "Milk is forced through fine openings under pressure."],
        ["H", "The Nigerian soft cheese wara is traditionally coagulated with", "juice of sodom apple leaves", "rennet tablets", "vinegar", "yeast", "The plant extract contains a milk-clotting enzyme."],
        ["H", "Milk that keeps for months unopened without refrigeration has been treated by", "UHT processing", "batch pasteurisation", "cooling only", "homogenisation only", "It is heated to about 135–140 °C for a few seconds and packed aseptically."],
        ["H", "Clarified butter that keeps well without refrigeration is", "ghee", "buttermilk", "cream cheese", "casein", "Heating removes the water and milk solids."],
      ],
    },
    {
      week: 3,
      title: "Meat Science I: Slaughtering and Carcass Dressing",
      subtopics: ["The abattoir", "Pre-slaughter care and inspection", "The slaughtering process", "Carcass dressing and yield"],
      objectives: ["Describe the sections of an abattoir", "Explain pre-slaughter handling and inspection", "Outline the slaughtering process", "Describe carcass dressing and calculate dressing percentage"],
      lesson: {
        title: "From Live Animal to Carcass",
        summary: "The hygienic conversion of livestock into wholesome meat.",
        minutes: 40,
        notes: `## Meat
**Meat** is the **flesh of animals used as food**: **beef** (cattle), **veal** (calf), **mutton** (sheep), **lamb**, **chevon** (goat), **pork** (pig), **poultry meat**.

## The abattoir
An **abattoir (slaughterhouse)** is a **place where animals are slaughtered hygienically for human consumption**.
**Sections:** **lairage** (holding pens); stunning and bleeding area; dressing hall (overhead rails and hoists); offal and gut room; inspection points; **chilling rooms**; cutting/boning room; hide store; by-products and condemned-meat section; waste treatment; laboratory and offices.
**Requirements:** clean **water** supply; drainage; washable floors and walls; separation of **clean and dirty** operations; cold storage; trained staff in protective clothing; veterinary supervision.

## Pre-slaughter care
- transport gently; **rest** for 12–24 hours in the lairage
- **withhold feed** for about 12–24 hours but give **water** — empties the gut, eases dressing, reduces contamination
- avoid stress, beating and mixing of strange animals
- **ante-mortem inspection** — sick animals are isolated, treated or condemned

## The slaughtering process (cattle)
1. **Stunning** (where practised) or restraint for ritual slaughter.
2. **Sticking / bleeding** — cutting the major blood vessels of the neck; the carcass is **hoisted** to bleed thoroughly (blood is about 3–4% of live weight). Complete bleeding improves keeping quality.
3. **Removal of head and feet (shanks)**.
4. **Flaying (skinning)** — careful removal of the hide without cuts.
5. **Evisceration** — opening the carcass and removing the internal organs without puncturing the gut.
6. **Splitting** the carcass down the backbone into two sides.
7. **Washing and trimming**.
8. **Post-mortem inspection** — carcass, lymph nodes and organs examined; unfit parts **condemned**; fit meat **stamped**.
9. **Weighing and chilling** at about 0–4 °C.

### Pigs
after bleeding, the carcass is **scalded** in hot water (about 60–65 °C) and **dehaired** by scraping; **singed**; the skin is usually left on.

### Poultry
stun → bleed → **scald** (about 55–60 °C) → **pluck (defeather)** → eviscerate → wash → chill → pack.

### Sheep and goats
bled, skinned (pelt removed by "fisting"), eviscerated; in Nigeria carcasses are often **singed** to keep the skin on.

## Offal
- **edible offal (variety meats):** liver, heart, kidneys, tongue, tripe (stomach), intestines, tail
- **inedible:** horns, hooves, gall bladder, condemned parts

## Dressing percentage
$$\\text{dressing \\%} = \\frac{\\text{carcass weight}}{\\text{live weight}} \\times 100$$
Typical: cattle **50–60%**; sheep and goats 45–50%; **pigs 70–75%** (skin and head left on); poultry about 70%.
*A 400 kg bull giving a 220 kg carcass dresses at 55%.*

## Rigor mortis and ageing
After death, muscles stiffen (**rigor mortis**) as glycogen is converted to **lactic acid** and pH falls from about 7 to about 5.6. **Ageing (conditioning)** in the chiller afterwards lets natural enzymes **tenderise** the meat.

## Meat quality
colour, tenderness, juiciness, flavour, **marbling** (fat within the muscle); affected by age, breed, sex, feeding and pre-slaughter stress.

## Hygiene
clean knives sterilised in hot water (82 °C); protective clothing; no carcass on the floor; separate handling of gut; pest control; safe disposal of waste and condemned meat.`,
        examples: `**Example 1.** What is flaying? *Answer:* The **removal of the hide or skin** from the carcass.

**Example 2.** A 60 kg pig gives a 45 kg carcass. Find the dressing percentage. *Answer:* $\\tfrac{45}{60} \\times 100 = \\mathbf{75\\%}$.

**Example 3.** Why are animals fasted before slaughter? *Answer:* To **empty the gut**, making dressing easier and reducing contamination.`,
      },
      questions: [
        ["E", "A place where animals are slaughtered hygienically for food is an", "abattoir", "apiary", "aviary", "arboretum", "It is also called a slaughterhouse."],
        ["E", "The meat of cattle is called", "beef", "pork", "mutton", "chevon", "Veal is the meat of the calf."],
        ["E", "The meat of the goat is known as", "chevon", "venison", "veal", "bacon", "Mutton is from sheep."],
        ["M", "Removal of the internal organs from a carcass is", "evisceration", "flaying", "sticking", "scalding", "The gut must not be punctured."],
        ["M", "Removal of the hide from a carcass is", "flaying", "bleeding", "splitting", "chilling", "It is done carefully to avoid cutting the hide."],
        ["M", "Pig carcasses are dipped in hot water in order to", "loosen the hair for scraping", "cook the meat", "tenderise the meat", "remove the fat", "Scalding precedes dehairing."],
        ["M", "Examination of the carcass and organs after slaughter is", "post-mortem inspection", "ante-mortem inspection", "grading of live animals", "quarantine", "Unfit meat is condemned."],
        ["H", "A steer weighing 500 kg yields a carcass of 280 kg. Its dressing percentage is", "56%", "44%", "178%", "28%", "280 ÷ 500 × 100."],
        ["H", "The stiffening of muscles after death is", "rigor mortis", "marbling", "ageing", "evisceration", "It is caused by chemical changes as lactic acid builds up."],
        ["H", "Pigs have a higher dressing percentage than cattle mainly because", "the skin and head are left on and the gut is smaller", "they are bled less", "they are fatter in the bones", "their hides are heavier", "A simple stomach and retained skin raise carcass yield."],
      ],
    },
    {
      week: 4,
      title: "Meat Science II: Processing, Preservation and Packaging of Meat",
      subtopics: ["Meat cuts", "Causes of spoilage", "Methods of preservation", "Processed meat products and packaging"],
      objectives: ["Identify the main cuts of meat", "Explain why meat spoils", "Describe methods of preserving meat", "Describe processed meat products and packaging"],
      lesson: {
        title: "Keeping and Adding Value to Meat",
        summary: "How meat is cut, preserved, processed and packaged.",
        minutes: 40,
        notes: `## Meat cuts
The carcass is divided into **wholesale (primal) cuts**, then **retail cuts**.
- **beef:** chuck (shoulder), rib, **loin (sirloin)**, round (rump/topside), brisket, flank, shank; the **fillet (tenderloin)** is the most tender
- **pork:** ham (leg), loin, shoulder, belly (bacon), spare ribs
- **mutton / chevon:** leg, loin, rack (ribs), shoulder, breast
**Tender cuts** (little-used muscles — loin, rib) suit grilling and roasting; **tough cuts** (shank, neck) need stewing.

## Composition of lean meat
water about 75%; **protein about 20%**; fat 3–5%; minerals (iron, zinc) and B vitamins.

## Spoilage
Meat is **highly perishable** — moist, nutritious and near-neutral in pH.
**Causes:** **bacteria** (the main cause), moulds and yeasts; the meat's own **enzymes**; **oxidation** of fat (**rancidity**); insects and rodents.
**Signs:** off-odour, **slime**, discolouration (green, grey), sour taste, gas.

## Principles of preservation
**remove water, lower the temperature, raise the temperature, add preserving chemicals, exclude air** — all stop or slow microbes and enzymes.

## Methods
| Method | How it works | Examples |
|---|---|---|
| **chilling** | 0–4 °C; slows bacteria | fresh meat for days |
| **freezing** | **−18 °C or below**; stops growth | months; thaw in the refrigerator; do not refreeze |
| **drying / dehydration** | removes water | **kilishi**, biltong, sun-dried meat (banda) |
| **smoking** | heat dries; smoke chemicals preserve and flavour | smoked fish and meat |
| **salting / curing** | salt draws out water; **nitrite** fixes the pink colour and prevents botulism | bacon, ham, corned beef |
| **canning** | sealed and heat-sterilised | corned beef, luncheon meat |
| **frying / cooking** | heat kills microbes | fried meat, dambu nama |
| **irradiation** | radiation kills microbes | limited use |
| **chemical preservatives** | sorbates, nitrites | sausages |
| **vacuum and modified-atmosphere packaging** | excludes oxygen | chilled retail cuts |

## Processed meat products
- **sausages** — minced meat, fat, salt, spices and binder filled into casings; fresh, smoked or cooked (frankfurters)
- **bacon** — cured, smoked pork belly; **ham** — cured pork leg
- **burgers / patties**, meatballs, minced meat
- **corned beef**, luncheon meat
- **Nigerian products:** **suya** (spiced, roasted skewered meat), **kilishi** (thin sheets of sun-dried meat coated with spiced groundnut paste and roasted), **balangu / tsire**, **dambu nama** (shredded fried meat), **kundi**, **ponmo** (processed hide)

### Basic steps in sausage making
select and chill meat → **mince** → mix with salt, spices, ice and binder → **stuff** into casings → **link** → cook or smoke → cool → pack → refrigerate.

## Packaging
**Functions:** protects from contamination, moisture loss and damage; extends shelf life; makes handling easy; carries **information**; attracts buyers.
**Materials:** polythene and shrink film; **vacuum packs**; trays with cling film; cans; casings; cartons; foil.
**Label:** product name, weight, ingredients, **production and expiry dates**, storage instructions, producer's name and address, batch number, **NAFDAC number**.

## The cold chain
Meat must stay **cold from abattoir to consumer** — chiller, refrigerated van, cold room, display cabinet. A break in the chain allows bacteria to multiply.

## Meat hygiene
clean premises, tools and hands; separate raw and cooked products; potable water; pest control; health checks for handlers; **meat inspection**; cook meat thoroughly.

## Meat-borne hazards
tapeworms (*Taenia*), **tuberculosis**, **anthrax**, salmonellosis, *E. coli*, botulism.

## By-products
blood meal, bone meal, meat-and-bone meal; tallow and lard (soap, candles); hides and skins; gelatine and glue; horns and hooves (buttons, ornaments); casings; pharmaceuticals (insulin, heparin).`,
        examples: `**Example 1.** State the main cause of meat spoilage. *Answer:* The **growth of bacteria**.

**Example 2.** At what temperature is frozen meat stored? *Answer:* **−18 °C or below**.

**Example 3.** What is kilishi? *Answer:* **Thin sheets of sun-dried meat** coated with spiced groundnut paste and roasted.`,
      },
      questions: [
        ["E", "The main cause of meat spoilage is the activity of", "bacteria", "sunlight alone", "salt", "smoke", "They multiply rapidly on moist, nutritious meat."],
        ["E", "Preserving meat by storing it at −18 °C is", "freezing", "chilling", "curing", "smoking", "Microbial growth stops at this temperature."],
        ["E", "Spiced meat roasted on skewers over a fire in Nigeria is", "suya", "ponmo", "bacon", "ham", "It is a popular ready-to-eat product."],
        ["M", "Preserving meat with salt and nitrite is", "curing", "canning", "irradiation", "chilling", "Bacon and ham are cured products."],
        ["M", "The most tender cut of beef is the", "fillet", "shank", "neck", "brisket", "It comes from a little-used muscle along the loin."],
        ["M", "The unpleasant flavour caused by oxidation of fat in stored meat is", "rancidity", "rigor", "marbling", "curing", "Excluding air slows it."],
        ["M", "Minced seasoned meat filled into casings is", "sausage", "kilishi", "corned beef", "tallow", "It may be fresh, smoked or cooked."],
        ["H", "Nitrite is added in curing mainly to fix the pink colour and to prevent", "botulism", "rigor mortis", "marbling", "freezer burn", "It inhibits Clostridium botulinum."],
        ["H", "Keeping meat at low temperature at every stage from the abattoir to the consumer is known as the", "cold chain", "value chain only", "food web", "dressing line", "A break allows bacteria to multiply."],
        ["H", "Packaging meat in a sealed pack from which air has been removed is", "vacuum packaging", "canning", "smoking", "salting", "Excluding oxygen slows spoilage and rancidity."],
      ],
    },
    {
      week: 6,
      title: "Hide and Skin Processing",
      subtopics: ["Hides and skins", "Flaying, curing and defects", "Tanning methods", "Leather products"],
      objectives: ["Distinguish hides from skins", "Describe flaying and curing and identify defects", "Describe the tanning process and methods", "List leather products and their importance"],
      lesson: {
        title: "From Raw Hide to Leather",
        summary: "Preserving animal hides and skins and turning them into leather.",
        minutes: 40,
        notes: `## Hides and skins
- a **hide** is the outer covering of a **large animal** — cattle, camel, horse, buffalo
- a **skin** is that of a **small animal** — goat, sheep, calf, reptile
The **Red Sokoto (Maradi) goat** yields the world-famous **"Morocco leather"**.

**Structure:** **epidermis** (with hair), **dermis / corium** — the fibrous **collagen** layer that becomes leather — and **flesh** layer.

## Importance
raw material for the **leather industry**; **foreign exchange**; employment; income to farmers and butchers; in Nigeria much hide is also eaten as **ponmo**, which reduces supply to tanneries.

## Flaying
Removing the hide without **cuts, holes or gouges**; use rounded flaying knives or hide pullers; keep clean; follow correct ripping lines for a good **pattern**.

## Curing (temporary preservation)
Raw hides **putrefy** within hours. **Curing** prevents bacterial decay until tanning.
| Method | Description |
|---|---|
| **air / sun drying** | **frame drying** (stretched on a frame, in shade) is best; ground drying gives poor quality |
| **wet salting** | spread flesh side up and cover with salt (about 30–50% of hide weight); stack |
| **dry salting** | salted, then dried |
| **brining** | soaked in saturated salt solution |
| **chilling / freezing** | short term |
| **pickling** | salt and acid — for skins |

## Defects
- **ante-mortem:** brand marks, scratches, tick and mange damage, warble holes, pox, horn rakes, poor nutrition
- **post-mortem:** **flay cuts**, poor bleeding, bad pattern, **putrefaction** (hair slip), sun blisters, insect damage in store

## Tanning
**Tanning** is the **process of converting raw hide or skin into leather** — a stable material that does not rot and remains flexible.

### Stages
1. **Beamhouse (pre-tanning):** **soaking** (rehydrate and clean) → **liming** (lime and sulphide loosen hair and swell the hide) → **unhairing and fleshing** → **deliming and bating** (enzymes soften) → **pickling** (acid and salt).
2. **Tanning proper.**
3. **Post-tanning:** splitting and shaving → **neutralising, retanning, dyeing, fatliquoring** (oiling) → drying → **staking** (softening) → **finishing** (buffing, coating, embossing).

### Methods of tanning
| Method | Agent | Leather |
|---|---|---|
| **vegetable tanning** | **tannins** from bark, pods and leaves — e.g. **bagaruwa** (*Acacia nilotica* pods), mangrove, mimosa, quebracho | firm, brownish; soles, belts, saddlery; slow (weeks) |
| **chrome (mineral) tanning** | **chromium sulphate** | soft, strong, heat-resistant, bluish ("wet blue"); shoe uppers, garments; fast (a day) |
| **aldehyde / synthetic tanning** | glutaraldehyde, syntans | white, soft leather |
| **oil tanning** | fish oils | **chamois** leather |
| **combination tanning** | two agents | special properties |

Traditional tanning in northern Nigeria (Kano, Sokoto) uses bagaruwa.

## Environmental concerns
Tannery effluent contains **chromium, sulphides, salt and organic matter**; it must be treated before discharge. Solid wastes: hair, fleshings, shavings.

## Leather products
footwear; bags, wallets and belts; garments and gloves; **upholstery** (furniture, car seats); saddlery and harness; sports goods (balls); drums and traditional crafts; book binding; industrial belts.
**By-products:** gelatine and glue from fleshings; hair for brushes and felt.

## Grading
By size or weight, substance (thickness), and freedom from defects — first to fourth grades and rejects.

## Improving quality
tick control; careful branding (on the leg or cheek, not the back); good handling; skilled flaying; prompt, correct curing; clean storage.`,
        examples: `**Example 1.** Distinguish a hide from a skin. *Answer:* A **hide** comes from a **large animal** such as cattle; a **skin** from a **small animal** such as a goat.

**Example 2.** What is tanning? *Answer:* **Converting raw hide or skin into leather**.

**Example 3.** Name the chemical used in mineral tanning. *Answer:* **Chromium sulphate**.`,
      },
      questions: [
        ["E", "The outer covering of a large animal such as a cow is a", "hide", "skin", "pelt of fur", "fleece", "Skins come from small animals."],
        ["E", "The process of converting raw hides and skins into leather is", "tanning", "flaying", "curing", "fleshing", "It makes the material durable and non-putrescible."],
        ["E", "Which of these is a leather product?", "Shoe", "Yoghurt", "Bone meal", "Tallow", "Footwear is the largest use of leather."],
        ["M", "Temporary preservation of hides before tanning is", "curing", "staking", "liming", "bating", "Salting and drying are the usual methods."],
        ["M", "The goat breed whose skin gives the famous Morocco leather is the", "Red Sokoto", "West African Dwarf", "Sahel", "Saanen", "It is also called the Maradi goat."],
        ["M", "The best method of drying hides is", "frame drying in the shade", "drying on bare ground", "drying over a fire", "drying on a tin roof", "The hide dries evenly without blistering or dirt."],
        ["M", "Tanning with plant materials such as bagaruwa pods is", "vegetable tanning", "chrome tanning", "oil tanning", "aldehyde tanning", "The active agents are tannins."],
        ["H", "The tanning method that is fastest and gives soft, heat-resistant leather for shoe uppers is", "chrome tanning", "vegetable tanning", "oil tanning", "smoke tanning", "Chromium salts tan hides within about a day."],
        ["H", "In the beamhouse, hair is loosened from the hide by", "liming", "pickling", "fatliquoring", "staking", "Lime and sulphide attack the hair roots."],
        ["H", "A hide defect caused by careless skinning is", "flay cuts", "brand marks", "tick damage", "pox scars", "Knife cuts lower the grade of the hide."],
      ],
    },
    {
      week: 8,
      title: "Egg Technology",
      subtopics: ["Structure and composition of the egg", "Egg quality and grading", "Egg preservation", "Processing into egg products"],
      objectives: ["Describe the structure and composition of an egg", "Explain how eggs are graded for quality", "Describe methods of preserving eggs", "Describe the processing of eggs into products"],
      lesson: {
        title: "The Egg after It Is Laid",
        summary: "Handling, grading, preserving and processing table eggs.",
        minutes: 40,
        notes: `## Structure of the egg
| Part | Notes | Share |
|---|---|---|
| **shell** | calcium carbonate; porous; covered by the **cuticle (bloom)** | about 10–11% |
| **shell membranes** (inner and outer) | separate at the broad end to form the **air cell** | |
| **albumen (egg white)** | thin and thick layers; mainly water and protein | about 58–60% |
| **chalazae** | twisted cords holding the yolk in the centre | |
| **yolk** | fat, protein, vitamins, minerals; enclosed in the **vitelline membrane**; carries the **germinal disc** | about 30% |

## Composition and food value
whole egg: water about 74%, **protein 12–13%**, fat 11–12%, minerals 1%. Rich in high-quality protein, vitamins A, D, B₁₂ and iron. The egg is a **complete protein** food.

## Egg quality
### External
**size/weight**, shape, **shell cleanliness**, soundness (no cracks), texture and colour.
### Internal — by **candling**
**Candling** is **examining an egg against a strong light** to see inside without breaking it. A fresh egg shows a **small air cell**, a **dimly visible, centred yolk**, firm clear albumen and no blood or meat spots.
### Broken-out tests
- **albumen height / Haugh unit** — the higher, the fresher
- **yolk index** — height ÷ width
A stale egg has a **large air cell**, watery white and a flat yolk that breaks easily.

### Simple freshness tests
**water test** — a fresh egg **sinks and lies flat**; a stale egg stands on end or **floats** (large air cell); a fresh egg does not rattle when shaken.

## Grading
By **weight:** e.g. small (below about 53 g), medium (53–63 g), large (63–73 g), extra large (above 73 g).
By **quality:** grades AA / A / B on shell and interior quality.
Grading gives **uniform packs and fair prices**.

## Handling
collect **at least three times daily**; use clean trays, **broad end up**; remove cracked and dirty eggs; dry-clean lightly soiled eggs; store **cool (about 10–15 °C) and humid (about 75%)**; keep away from strong odours (eggs absorb smells); sell on a first-in, first-out basis.

## Why eggs deteriorate
loss of **water and carbon dioxide** through the shell pores (air cell enlarges, white thins, pH rises); bacterial and mould entry; high temperature; embryo development in fertile eggs.

## Preservation
| Method | Principle |
|---|---|
| **cold storage** | about 0–1 °C, 85–90% humidity; keeps for months |
| **oiling** | coating the shell with odourless **mineral oil** seals the pores |
| **water glass** | immersion in **sodium silicate** solution |
| **lime water** | immersion in lime solution seals the pores |
| **thermostabilisation** | brief dip in hot water or oil (about 54 °C) |
| **freezing** | of **liquid egg** (not in the shell) |
| **drying** | **egg powder** |
| **pickling; salting** | hard-boiled eggs in vinegar; salted eggs |
| **pasteurisation** | of liquid egg (about 60–64 °C for a few minutes) to destroy *Salmonella* |

## Egg products
- **liquid egg** — whole, white or yolk; pasteurised, chilled or frozen
- **egg powder** — spray-dried whole egg, yolk or albumen; long shelf life; for bakeries and food manufacture
- **boiled / pickled eggs**, scotch eggs, egg rolls
- **mayonnaise and salad cream** (yolk as emulsifier)
- cakes, custard, noodles, ice cream

### Steps in making egg powder
wash and candle → **break** and separate → filter → **pasteurise** → **spray-dry** → sieve → package in moisture-proof containers.

## Functional properties of eggs in food
**binding, coating, thickening, emulsifying, foaming / leavening, glazing, enriching**.

## Uses of by-products
**eggshell** — calcium source in feed, fertiliser; shell membranes.

## Safety
*Salmonella* is the main hazard — keep eggs clean and cool; cook thoroughly; discard cracked eggs.`,
        examples: `**Example 1.** What is candling? *Answer:* **Examining an egg against a strong light** to judge its internal quality.

**Example 2.** How does a stale egg behave in water? *Answer:* It **floats or stands on end** because its air cell is large.

**Example 3.** How does oiling preserve eggs? *Answer:* It **seals the shell pores**, reducing loss of water and carbon dioxide.`,
      },
      questions: [
        ["E", "The egg shell is made mainly of", "calcium carbonate", "sodium chloride", "iron oxide", "silica", "It is porous to gases."],
        ["E", "The white of an egg is called the", "albumen", "yolk", "chalaza", "cuticle", "It is mainly water and protein."],
        ["E", "Examining an egg against a strong light is", "candling", "grading by weight", "oiling", "pickling", "It reveals the air cell, yolk and defects."],
        ["M", "The twisted cords that hold the yolk in the centre of the egg are the", "chalazae", "shell membranes", "germinal discs", "air cells", "They anchor the yolk in the thick albumen."],
        ["M", "A fresh egg placed in water will", "sink and lie flat", "float", "stand on its broad end at the surface", "burst", "Its air cell is small."],
        ["M", "Eggs should be stored with the", "broad end up", "narrow end up", "shell cracked", "cuticle washed off", "This keeps the air cell in place and the yolk centred."],
        ["M", "Coating eggs with mineral oil preserves them by", "sealing the pores of the shell", "cooking the albumen", "killing the embryo with heat", "adding nutrients", "Loss of water and carbon dioxide is reduced."],
        ["H", "As an egg ages, its air cell", "becomes larger", "disappears", "becomes smaller", "moves to the narrow end", "Water evaporates through the shell."],
        ["H", "The solution known as water glass, used in preserving eggs, is", "sodium silicate", "sodium chloride", "calcium hydroxide", "acetic acid", "It seals the shell pores."],
        ["H", "Liquid egg is pasteurised before drying mainly to destroy", "Salmonella", "the cuticle", "the chalazae", "calcium", "It is the main food-safety hazard in eggs."],
      ],
    },
    {
      week: 9,
      title: "Livestock Product Quality Control",
      subtopics: ["Meaning of quality control", "Standards and regulatory bodies", "Certification", "Food safety systems"],
      objectives: ["Explain quality control and quality assurance", "Identify the standards and bodies regulating livestock products", "Explain certification", "Describe food safety systems such as HACCP"],
      lesson: {
        title: "Making Sure Products Are Safe and Good",
        summary: "Standards, inspection, certification and food-safety systems for livestock products.",
        minutes: 40,
        notes: `## Meaning
- **Quality** — the **degree to which a product meets set standards and satisfies the consumer**.
- **Quality control (QC)** — **testing and inspection** to check that products meet standards.
- **Quality assurance (QA)** — the **planned system of activities** that prevents defects throughout production.
- **Food safety** — assurance that food **will not harm the consumer** when prepared and eaten as intended.

## Why quality control matters
protects **public health**; builds **consumer confidence**; gives access to **markets and export**; attracts better prices; meets the **law**; reduces waste and recalls; protects the brand.

## Quality attributes
| Product | Attributes |
|---|---|
| **milk** | fat and solids content; freshness; low bacterial count; no added water, antibiotics or adulterants |
| **meat** | colour, tenderness, fat cover; freedom from disease, parasites and residues; hygiene |
| **eggs** | weight; clean, sound shell; small air cell; firm albumen |
| **hides and skins** | size, substance, freedom from defects |
| **feed** | nutrient content; freedom from **aflatoxin** and contaminants |

## Hazards
- **biological** — bacteria (*Salmonella*, *E. coli*, *Listeria*), parasites, viruses
- **chemical** — **drug residues** (antibiotics, hormones), pesticides, heavy metals, **mycotoxins**, adulterants
- **physical** — bone chips, glass, metal, hair

**Withdrawal period** — the **time that must pass after the last drug treatment before the animal's meat, milk or eggs may be used**.

## Standards and regulatory bodies
| Body | Role |
|---|---|
| **Standards Organisation of Nigeria (SON)** | sets Nigerian Industrial Standards; MANCAP certification |
| **NAFDAC** | registers and regulates processed foods, drugs and veterinary products |
| **Federal Department of Veterinary and Pest Control Services** | animal health; meat inspection; abattoir control |
| **Nigeria Agricultural Quarantine Service (NAQS)** | inspection and certification of agricultural imports and exports |
| **Veterinary Council of Nigeria; Nigerian Institute of Animal Science (NIAS)** | regulate the professions; feed mill and farm standards |
| **Federal Competition and Consumer Protection Commission (FCCPC)** | consumer rights |
| **Codex Alimentarius Commission** (FAO/WHO) | international food standards |
| **WOAH** (World Organisation for Animal Health) | animal health standards for trade |
| **ISO** | international standards — **ISO 22000** (food safety management), ISO 9001 (quality) |

## Certification
**Certification** is **written assurance by an independent body that a product, process or system meets specified standards**.
Examples: NAFDAC registration number; SON MANCAP mark; **veterinary health certificate**; **halal** certificate; organic certificate; HACCP and ISO 22000 certificates; export (sanitary) certificates.
**Benefits:** consumer trust; market access; premium price.

## Food-safety systems
- **Good Agricultural Practices (GAP)** and **Good Animal Husbandry Practices** on the farm
- **Good Manufacturing Practices (GMP)** and **Good Hygienic Practices (GHP)** in processing
- **HACCP — Hazard Analysis and Critical Control Points:** a **preventive system that identifies hazards and controls them at critical points**

### The seven HACCP principles
1. conduct a **hazard analysis**
2. identify the **critical control points (CCPs)**
3. set **critical limits** (e.g. pasteurise at 72 °C for 15 s)
4. establish **monitoring**
5. establish **corrective actions**
6. establish **verification**
7. keep **records**

- **traceability** — the ability to **track a product back through every stage** to the farm (ear tags, batch numbers) — vital for recalls and disease control

## Quality control on the farm and in the plant
healthy stock and veterinary care; clean water and feed; hygiene of housing, equipment and workers; observing withdrawal periods; proper cooling and storage; sampling and laboratory tests; grading; correct labelling; records.

## Consumer indicators
intact packaging; **expiry date**; NAFDAC number; smell, colour and texture; inspection stamp on meat.`,
        examples: `**Example 1.** What does HACCP stand for? *Answer:* **Hazard Analysis and Critical Control Points**.

**Example 2.** Define withdrawal period. *Answer:* The **time after the last drug treatment** during which the animal's products must not be used for food.

**Example 3.** Name the Nigerian body that registers processed foods. *Answer:* **NAFDAC**.`,
      },
      questions: [
        ["E", "Testing and inspecting products to see that they meet set standards is", "quality control", "marketing", "branding", "breeding", "It checks the finished product against the standard."],
        ["E", "HACCP is a system used to ensure", "food safety", "faster growth", "higher prices", "animal breeding", "It prevents hazards during production."],
        ["E", "The Nigerian agency that registers processed foods and drugs is", "NAFDAC", "NNPC", "NIPOST", "NYSC", "Its number appears on approved products."],
        ["M", "The period that must pass after drug treatment before an animal's products are used is the", "withdrawal period", "gestation period", "incubation period", "lactation period", "It prevents drug residues in food."],
        ["M", "Antibiotic residues in meat are an example of a", "chemical hazard", "physical hazard", "biological hazard", "mechanical hazard", "Drugs and toxins are chemical contaminants."],
        ["M", "Written assurance by an independent body that a product meets specified standards is", "certification", "advertisement", "quarantine", "subsidy", "It builds trust and opens markets."],
        ["M", "The ability to track a product back through all stages to its source is", "traceability", "portability", "palatability", "heritability", "It is essential for recalls."],
        ["H", "A step in processing at which control is essential to prevent or eliminate a hazard is a", "critical control point", "break-even point", "dew point", "flash point", "Pasteurisation is an example."],
        ["H", "The international body that sets food standards under FAO and WHO is the", "Codex Alimentarius Commission", "World Trade Organization", "International Monetary Fund", "World Bank", "Its standards guide international food trade."],
        ["H", "A poisonous substance produced by moulds in poorly stored feed is", "aflatoxin", "casein", "tannin", "collagen", "It can pass into milk and harm consumers."],
      ],
    },
    {
      week: 10,
      title: "Export of Livestock Products",
      subtopics: ["Exportable livestock products", "International markets and requirements", "Trade barriers", "Opportunities and export procedure"],
      objectives: ["Identify livestock products that Nigeria can export", "Describe international market requirements", "Explain trade barriers", "Outline export opportunities and procedure"],
      lesson: {
        title: "Selling Livestock Products Abroad",
        summary: "What it takes to enter international markets with livestock products.",
        minutes: 40,
        notes: `## Export
**Export** is the **sale of goods to other countries**. It earns **foreign exchange**, widens markets, creates jobs and encourages higher quality.

## Exportable livestock products from Nigeria
- **hides, skins and leather** — Nigeria's leading livestock export (finished and semi-finished leather from Kano and elsewhere)
- **leather goods** — shoes, bags
- **live animals** — to neighbouring countries
- **meat and meat products** — potential, limited by disease status and standards
- **eggs and poultry products** — regional trade
- **honey and beeswax**
- **horns, hooves, bones** and craft items
- **snails**, smoked fish (related)
- **animal feed ingredients**

## International markets
- **regional:** **ECOWAS** neighbours; the **African Continental Free Trade Area (AfCFTA)** widens duty-free access across Africa
- **Europe, Asia, Middle East, America** — demanding standards; leather goes mainly to Italy, Spain, India, China
- **halal markets** — Middle East and Asia

### Requirements
- **animal health status** — freedom from diseases such as foot-and-mouth disease, CBPP, PPR, avian influenza, African swine fever
- **sanitary and phytosanitary (SPS) standards** — food safety and animal health rules
- **residue limits** — drugs, pesticides
- **certification** — veterinary health certificate; certificate of origin; halal; HACCP
- **approved abattoirs and processing plants**
- **traceability**
- **packaging and labelling** to the buyer's rules
- **consistent quantity and quality**; reliable delivery; cold chain

## Trade barriers
A **trade barrier** is a **government measure that restricts international trade**.
| Type | Examples |
|---|---|
| **tariff barriers** | **import duties (tariffs)** that raise the price of imported goods |
| **non-tariff barriers** | **quotas** (limits on quantity); import **bans** and embargoes; **licensing**; strict **SPS and technical standards**; lengthy customs procedures; **subsidies** to local producers; local-content rules |

### Barriers within Nigeria
endemic animal diseases; few export-standard abattoirs; poor cold-chain and transport infrastructure; inadequate laboratories; high cost of production and finance; unstable exchange rate; multiple charges and delays at ports; low volumes from small producers; weak market information; insecurity.

## Opportunities
large livestock population; strong world demand for **leather** and **halal meat**; AfCFTA market of over a billion people; **value addition** — exporting finished leather goods instead of raw skins; export incentives; growing demand for organic and niche products (honey, snails).

## Export procedure (outline)
1. **Register** the business (CAC).
2. Register as an exporter with the **Nigerian Export Promotion Council (NEPC)**.
3. Find a **buyer**; agree a contract (quantity, quality, price, delivery terms).
4. Open a **domiciliary account**; complete the **NXP form** through a bank.
5. Obtain **certificates** — NAQS inspection and sanitary certificate; veterinary health certificate; NAFDAC / SON where required; certificate of origin.
6. **Pre-shipment inspection**.
7. **Package, label and ship** — by air (perishables) or sea; clearing agents and **Nigeria Customs Service**.
8. Receive **payment** — e.g. by **letter of credit**; repatriate proceeds.

## Supporting bodies
**NEPC**; **Nigerian Export–Import Bank (NEXIM)** — export finance; **NAQS**; Customs; chambers of commerce; commodity associations.

## Balance of trade
**exports − imports**. Nigeria imports large quantities of **milk powder** and other animal products; raising local production saves foreign exchange (**import substitution**).

## Ways to improve exports
disease control and eradication programmes; modern abattoirs and tanneries; quality standards and certification; cold-chain investment; finance and training for exporters; producer co-operatives to aggregate supply; market research and trade fairs.`,
        examples: `**Example 1.** Name Nigeria's leading livestock export. *Answer:* **Hides, skins and leather**.

**Example 2.** Distinguish a tariff from a quota. *Answer:* A **tariff** is a **tax on imports**; a **quota** is a **limit on the quantity** that may be imported.

**Example 3.** Which body registers exporters in Nigeria? *Answer:* The **Nigerian Export Promotion Council (NEPC)**.`,
      },
      questions: [
        ["E", "The sale of goods to other countries is", "export", "import", "barter", "retail", "It earns foreign exchange."],
        ["E", "Nigeria's leading livestock export is", "hides, skins and leather", "fresh milk", "frozen chicken", "wool", "Tanneries supply leather to Europe and Asia."],
        ["E", "A tax placed on imported goods is a", "tariff", "quota", "subsidy", "dividend", "It raises the price of imports."],
        ["M", "A limit on the quantity of a product that may be imported is a", "quota", "tariff", "premium", "levy on exports", "It is a non-tariff barrier."],
        ["M", "Exporters in Nigeria register with the", "Nigerian Export Promotion Council", "Nigerian Communications Commission", "National Universities Commission", "Nigerian Railway Corporation", "The NEPC issues the exporter's certificate."],
        ["M", "The agreement that widens duty-free trade among African countries is", "AfCFTA", "OPEC", "NATO", "FIFA", "The African Continental Free Trade Area."],
        ["M", "Meat exports from Nigeria are limited mainly by", "animal disease status and failure to meet standards", "lack of cattle", "too much rainfall", "absence of demand abroad", "Importing countries require disease-free certification."],
        ["H", "Rules on food safety and animal health applied to traded products are known as", "sanitary and phytosanitary standards", "exchange controls", "copyright laws", "anti-dumping duties", "SPS measures can act as non-tariff barriers."],
        ["H", "Exporting finished leather shoes instead of raw skins is preferred because it", "adds value and earns more foreign exchange", "needs no skill", "reduces employment", "avoids all standards", "Processing creates jobs and higher returns."],
        ["H", "A bank's written undertaking to pay the exporter once shipping documents are presented is a", "letter of credit", "bill of lading", "certificate of origin", "pro forma invoice", "It secures payment in international trade."],
      ],
    },
  ],
};

/** Third Term — NERDC 2025 scheme. */
export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Farm Mechanization in Livestock",
      subtopics: ["Meaning and importance of mechanization", "Housing equipment", "Feeding and watering equipment", "Milking and other equipment"],
      objectives: ["Explain mechanization in livestock production", "Identify equipment used in housing", "Identify feeding and watering equipment", "Describe milking machines and other equipment and their maintenance"],
      lesson: {
        title: "Machines on the Livestock Farm",
        summary: "Equipment that replaces hand labour in housing, feeding, milking and processing.",
        minutes: 40,
        notes: `## Meaning
**Livestock mechanization** is the **use of machines and equipment to carry out livestock operations** in place of human or animal labour.

## Importance
saves **labour and time**; allows **large-scale** production; work is done **on time**; improves **hygiene and product quality**; reduces drudgery; uniform feeding; better records (automated systems).
**Disadvantages:** high cost; needs skill, spare parts and power; displaces labour; breakdowns disrupt the farm.

## Housing equipment
| Equipment | Use |
|---|---|
| **battery cages** | layers — easy egg collection, clean eggs |
| **brooders** (gas, electric, charcoal, infra-red) | heat for chicks |
| **incubators and hatchers** | hatching eggs — temperature about **37.5 °C**, humidity, turning, ventilation |
| **ventilation fans; cooling pads; foggers** | climate control |
| **heaters; lighting systems with timers** | temperature; day length for layers |
| **automatic manure belts and scrapers** | waste removal |
| **farrowing crates** | protect piglets from crushing |
| **slatted floors** | droppings fall through |
| **nest boxes; perches** | laying; resting |
| **crushes, races, loading ramps** | handling cattle |
| **dips and spray races** | tick control |
| **electric fencing** | paddocks |

## Feeding and watering equipment
- **feed mill machines:** **hammer mill / grinder** (reduces grain size), **mixer** (vertical or horizontal), **pelletiser**, crumbler, weighing scale, bagging machine
- **forage equipment:** mower, baler (hay), **forage chopper / chaff cutter**, silage harvester
- **feeders:** tube and trough feeders; **automatic chain or pan feeders**; self-feeders for pigs; feed trolleys; **total mixed ration (TMR) wagons** for cattle
- **drinkers:** bell drinkers, **nipple drinkers**, troughs with float valves, automatic bowls
- water pumps, tanks, boreholes

## Milking equipment
- **milking machine:** **vacuum pump**, **pulsator**, **teat cups with liners (cluster)**, milk tubes, receiver or bucket, pipeline
  - the vacuum draws milk; the **pulsator alternates suction and rest** to massage the teat and keep blood flowing
- **milking parlours:** herringbone, tandem, rotary
- **bulk milk cooling tank**
- **cream separator, pasteuriser, churn, homogeniser**
- strip cup, teat-dip cups, churns

## Other equipment
- **egg handling:** collection belts, **candler**, grader, washer
- **health and identification:** syringes, **drenching gun**, **burdizzo** and **elastrator** (castration), dehorner, debeaker, hoof trimmer, ear tagger and notcher, tattoo set
- **weighing:** scales, weigh bands
- **slaughter and processing:** stunner, scalder, plucker, bandsaw, mincer, sausage filler, cold room
- **transport:** tractors, trailers, livestock trucks
- **waste:** biogas digester, manure spreader
- **power:** generators, solar systems

## Maintenance
read the manual; **clean after use**; lubricate moving parts; check belts, liners and filters; replace worn parts (milking liners regularly); protect from rain; service on schedule; keep records; train operators; observe **safety** — guards on moving parts, switch off before cleaning.

## Factors limiting mechanization in Nigeria
small farm size; inadequate capital; cost of machines and spare parts; erratic electricity; lack of skilled operators and technicians; poor roads; cheap manual labour.

## Appropriate technology
simple, affordable, locally made equipment — manual feed mixers, kerosene incubators, locally fabricated cages, hand-operated cream separators.`,
        examples: `**Example 1.** What is the function of a hammer mill? *Answer:* It **grinds grain and other ingredients** into smaller particles for feed.

**Example 2.** What does the pulsator of a milking machine do? *Answer:* It **alternates suction and rest** on the teat, massaging it during milking.

**Example 3.** Give two advantages of mechanization. *Answer:* **Saves labour and time** and allows **large-scale production**.`,
      },
      questions: [
        ["E", "Using machines to carry out livestock operations is", "mechanization", "domestication", "castration", "pasteurisation", "Machines replace manual labour."],
        ["E", "The equipment that supplies heat to day-old chicks is the", "brooder", "incubator", "candler", "debeaker", "Chicks cannot regulate their body temperature at first."],
        ["E", "The machine used to hatch eggs artificially is the", "incubator", "pelletiser", "hammer mill", "pulsator", "It controls temperature, humidity and turning."],
        ["M", "The machine that grinds grain for feed is the", "hammer mill", "baler", "separator", "plucker", "Beating hammers reduce the particle size."],
        ["M", "The part of a milking machine that alternates suction and rest on the teat is the", "pulsator", "vacuum gauge", "receiver", "claw tube", "It massages the teat and maintains circulation."],
        ["M", "The instrument used for bloodless castration of bulls and rams is the", "burdizzo", "drenching gun", "trocar", "hoof knife", "It crushes the spermatic cord without cutting the skin."],
        ["M", "The equipment that protects piglets from being crushed by the sow is the", "farrowing crate", "battery cage", "nest box", "spray race", "It restricts the sow's movement at farrowing."],
        ["H", "The temperature at which chicken eggs are incubated is about", "37.5 °C", "25 °C", "45 °C", "60 °C", "It is close to the hen's body temperature."],
        ["H", "A drinker that releases water only when the animal presses a valve is the", "nipple drinker", "open trough", "bell drinker without valve", "bucket", "It keeps water clean and reduces wastage."],
        ["H", "A major factor limiting livestock mechanization in Nigeria is", "small farm size and inadequate capital", "excess electricity", "too many technicians", "low cost of machines", "Machines are costly relative to small-scale output."],
      ],
    },
    {
      week: 2,
      title: "ICT in Livestock Farming",
      subtopics: ["Digital tools on the farm", "Record systems", "Precision livestock farming", "Benefits and constraints"],
      objectives: ["Identify digital tools used in livestock farming", "Describe computerised record systems", "Explain precision livestock farming", "State the benefits and constraints of ICT in livestock"],
      lesson: {
        title: "Digital Livestock Farming",
        summary: "Phones, software, sensors and data in the management of animals.",
        minutes: 40,
        notes: `## ICT in livestock
**Information and communication technology** covers **computers, mobile phones, the internet, software, sensors and related devices** used to collect, store, process and share information.

## Digital tools
| Tool | Use |
|---|---|
| **mobile phones and apps** | market prices; weather; advisory messages; mobile money; telephone veterinary advice |
| **farm-management software / spreadsheets** | records, budgets, inventories |
| **electronic identification** — **RFID ear tags**, boluses, microchips | identify each animal automatically |
| **GPS collars and geofencing** | track grazing herds; reduce theft and straying |
| **sensors** | temperature, humidity, ammonia in houses; activity, rumination and body temperature of animals |
| **automatic feeders, drinkers and climate controllers** | precise control |
| **electronic weighing scales; walk-over weighers** | growth monitoring |
| **cameras and drones** | watching animals, pasture and security |
| **milk meters; robotic milkers** | yield per cow; automatic milking |
| **ultrasound scanners** | pregnancy diagnosis |
| **internet, social media, e-commerce** | information, training and sales |
| **e-extension** | radio, SMS, call centres, videos |

## Record systems
**Records** are **written or electronic accounts of farm activities**.
### Types
inventory; identification and pedigree; **breeding** (service, calving, litter size); **production** (eggs, milk, weights); **feed**; **health** (vaccination, treatment, mortality); labour; **financial** (sales, purchases, cash book, profit and loss).
### Importance
show profit or loss; guide selection and culling; detect problems early; support **loan** applications; planning and budgeting; **traceability**; tax and insurance.
### Computerised records
**spreadsheets** (rows of animals, columns of data, formulas for totals and averages), **databases** and farm apps.
**Advantages:** fast calculation; easy retrieval; graphs and reports; less space; backup in the cloud.
**Requirements:** device, power, skill, regular data entry.

*Example: 950 hens lay 760 eggs in a day; hen-day production* $= \\dfrac{760}{950} \\times 100 = 80\\%$ *— computed automatically in a spreadsheet.*

## Precision livestock farming (PLF)
**PLF** is the **use of sensors, data and automation to monitor and manage individual animals (or groups) continuously in real time**.
- **individual feeding** — collar-activated feeders give each cow her ration
- **oestrus detection** — activity meters (pedometers) show when a cow is on heat
- **health alerts** — a drop in rumination, feed intake or milk yield flags illness early
- **environment control** — automatic fans, heaters and lighting in poultry houses
- **automatic weighing and sorting**
- **robotic milking** with milk-quality sensors
- **sound and image analysis** — coughing, lameness, behaviour
- data analysed by software, including artificial intelligence

**Benefits:** early disease detection; better welfare; efficient feed use; higher output; less labour; lower environmental impact; evidence for certification.

## Benefits of ICT generally
better decisions; access to markets and prices; lower costs; access to finance and insurance (digital records); faster communication; learning.

## Constraints in Nigeria
cost of devices and software; poor **electricity and internet** in rural areas; low digital literacy; small farm size; maintenance and technical support; language; data security.

## Getting started
keep simple records on a phone or spreadsheet; join farmers' online groups; use mobile payments; adopt affordable sensors (thermometers, timers) before advanced systems.`,
        examples: `**Example 1.** What does RFID stand for, and how is it used? *Answer:* **Radio-frequency identification** — electronic ear tags that **identify each animal automatically**.

**Example 2.** 1200 hens laid 900 eggs. Find the hen-day production. *Answer:* $\\tfrac{900}{1200} \\times 100 = \\mathbf{75\\%}$.

**Example 3.** What is precision livestock farming? *Answer:* **Using sensors, data and automation to monitor and manage animals** continuously.`,
      },
      questions: [
        ["E", "Written or electronic accounts of farm activities are", "records", "rations", "pedigrees only", "tariffs", "They guide management decisions."],
        ["E", "An electronic ear tag that identifies an animal automatically uses", "RFID", "GPS only", "HACCP", "FIFO", "Radio-frequency identification."],
        ["E", "A computer program arranged in rows and columns for farm records and calculations is a", "spreadsheet", "word processor", "browser", "media player", "It calculates totals and averages with formulas."],
        ["M", "A device fitted to grazing cattle to show their location is a", "GPS collar", "burdizzo", "milk meter", "lactometer", "It helps to track herds and reduce theft."],
        ["M", "In a flock of 800 hens, 600 eggs are laid in a day. The hen-day production is", "75%", "60%", "133%", "80%", "600 ÷ 800 × 100."],
        ["M", "Using sensors and data to manage individual animals in real time is", "precision livestock farming", "extensive grazing", "subsistence farming", "nomadism", "It allows early detection of problems."],
        ["M", "Records of vaccinations, treatments and deaths are", "health records", "breeding records", "inventory records", "labour records", "They help to control disease."],
        ["H", "An activity meter worn by a dairy cow is used mainly to detect", "oestrus", "milk fat", "body weight", "horn growth", "Cows on heat walk and move much more."],
        ["H", "An advantage of computerised farm records over paper records is", "fast retrieval and automatic calculation", "no need for data entry", "no need for electricity", "immunity from all loss", "Software sorts, totals and graphs data quickly."],
        ["H", "A major constraint to the use of ICT on Nigerian livestock farms is", "poor electricity and internet access in rural areas", "too many trained operators", "excessive farm size", "lack of mobile phones in the country", "Infrastructure limits adoption."],
      ],
    },
    {
      week: 3,
      title: "Farm Management: Planning and Budgeting",
      subtopics: ["Functions of a farm manager", "Farm planning", "Budgeting", "Measures of farm performance"],
      objectives: ["State the functions of a farm manager", "Explain farm planning", "Prepare partial and complete budgets", "Calculate simple measures of farm performance"],
      lesson: {
        title: "Managing the Livestock Farm",
        summary: "Planning and budgeting exercises that turn resources into profit.",
        minutes: 40,
        notes: `## Farm management
**Farm management** is the **organisation of land, labour, capital and management to achieve the farmer's goals** — usually maximum profit.

## Factors of production
| Factor | Reward |
|---|---|
| **land** | rent |
| **labour** | wages |
| **capital** | interest |
| **management / entrepreneurship** | profit |

## Functions of a farm manager
**planning; organising; directing and supervising; co-ordinating; controlling; decision-making** (what, how and how much to produce; when and where to buy and sell); record keeping; marketing; evaluating.

## Farm planning
A **farm plan** is a **programme of what is to be produced, how, when and with what resources**.
**Steps:** state goals → take an **inventory** of resources → consider alternative enterprises → estimate costs and returns → choose the best combination → implement → monitor and revise.

## Budgeting
A **farm budget** is an **estimate of expected income and expenditure** for a future period.
| Type | Use |
|---|---|
| **complete (whole-farm) budget** | all enterprises of the farm |
| **enterprise budget** | one enterprise |
| **partial budget** | the effect of a **small change** — e.g. switching to a new feed |
| **cash-flow budget** | timing of cash coming in and going out |

### Partial budget format
| Gains | Losses |
|---|---|
| **added returns** | **added costs** |
| **reduced costs** | **reduced returns** |
**Net change** = (added returns + reduced costs) − (added costs + reduced returns). Adopt the change if positive.
*Changing to a better feed adds ₦80 000 in cost but adds ₦130 000 in egg sales: net gain ₦50 000 — adopt.*

## Costs
- **fixed costs** — do not change with output: rent, depreciation, salaries
- **variable costs** — change with output: feed, drugs, casual labour
- **total cost** = fixed + variable

### Depreciation
The **loss in value of an asset through wear and age**. Straight-line method:
$$\\text{annual depreciation} = \\frac{\\text{cost} - \\text{salvage value}}{\\text{useful life}}$$
*A feed mixer costing ₦600 000, salvage ₦100 000, life 5 years: ₦100 000 a year.*

## Measures of performance
| Measure | Formula |
|---|---|
| **gross margin** | revenue − variable costs |
| **net farm income (profit)** | revenue − total costs |
| **return on investment** | profit ÷ capital invested × 100 |
| **break-even output** | fixed costs ÷ (price − variable cost per unit) |
| **benefit–cost ratio** | total revenue ÷ total cost (above 1 is profitable) |

*Revenue ₦5 000 000; variable costs ₦3 200 000; fixed costs ₦800 000 → gross margin ₦1 800 000; profit ₦1 000 000; benefit–cost ratio 1.25.*

## Farm accounts
- **profit and loss account** — income and expenses for a period
- **balance sheet** — **assets** and **liabilities** at a date; **net worth** = assets − liabilities
- **cash book; inventory; sales and purchases journals**

## Economic principles
- **law of diminishing returns** — adding more of one input to fixed inputs eventually gives smaller additional output
- **opportunity cost** — the value of the best alternative forgone
- **comparative advantage** — produce what the farm does best

## Risk and uncertainty
disease, weather, price changes, theft, policy changes. **Managing risk:** diversification, insurance, contracts, vaccination, savings, records.

## Simulation exercise
*Plan a 1000-layer unit:* list capital items; estimate monthly feed (about 115 g per bird per day ≈ 3.45 tonnes a month); expected eggs at 80% production (800 a day ≈ 800 crates a month); price per crate; costs; monthly margin; payback period.`,
        examples: `**Example 1.** Define a farm budget. *Answer:* An **estimate of expected income and expenditure** for a future period.

**Example 2.** A machine costs ₦500 000, has a salvage value of ₦50 000 and lasts 9 years. Find the annual depreciation. *Answer:* $\\tfrac{450\\,000}{9} = $ **₦50 000**.

**Example 3.** Revenue ₦2 400 000; total cost ₦2 000 000. Find the benefit–cost ratio. *Answer:* $2.4 \\div 2.0 = \\mathbf{1.2}$.`,
      },
      questions: [
        ["E", "An estimate of expected farm income and expenditure for a future period is a", "budget", "balance sheet", "receipt", "pedigree", "It is a planning tool."],
        ["E", "The reward for labour as a factor of production is", "wages", "rent", "interest", "profit", "Rent goes to land and interest to capital."],
        ["E", "Costs that change with the level of output are", "variable costs", "fixed costs", "sunk costs", "overheads only", "Feed and drugs are examples."],
        ["M", "A budget used to assess the effect of a small change in farm practice is a", "partial budget", "complete budget", "cash book", "balance sheet", "It compares added returns and costs."],
        ["M", "The loss in value of a farm asset through wear and age is", "depreciation", "appreciation", "inflation", "interest", "It is charged as a yearly cost."],
        ["M", "A tractor costs ₦4 000 000, has a salvage value of ₦400 000 and a useful life of 8 years. Annual straight-line depreciation is", "₦450 000", "₦500 000", "₦400 000", "₦550 000", "(4 000 000 − 400 000) ÷ 8."],
        ["M", "Assets minus liabilities gives the farm's", "net worth", "gross margin", "turnover", "depreciation", "It is shown on the balance sheet."],
        ["H", "A change in feed adds ₦120 000 to costs and ₦90 000 to returns, and reduces other costs by ₦50 000. The net change is", "a gain of ₦20 000", "a loss of ₦30 000", "a gain of ₦140 000", "a loss of ₦80 000", "(90 000 + 50 000) − 120 000."],
        ["H", "A farm has revenue of ₦6 000 000 and total costs of ₦4 800 000. Its benefit–cost ratio is", "1.25", "0.80", "1.20", "2.50", "6 000 000 ÷ 4 800 000."],
        ["H", "The value of the best alternative given up when a choice is made is the", "opportunity cost", "fixed cost", "marginal revenue", "salvage value", "Using land for poultry forgoes what it could earn otherwise."],
      ],
    },
    {
      week: 9,
      title: "Career Opportunities in Livestock and Final Examination Preparation",
      subtopics: ["Careers in livestock", "Field work and project reporting", "Key syllabus areas", "Examination technique"],
      objectives: ["Identify career opportunities in the livestock industry", "Write a field-trip or project report", "Recall the key areas of the syllabus", "Apply good technique in the examination"],
      lesson: {
        title: "Careers and the Final Examination",
        summary: "Where livestock studies lead, how to report practical work, and how to revise.",
        minutes: 80,
        notes: `## Careers
| Field | Careers |
|---|---|
| **production** | livestock farmer, farm manager, poultry or dairy attendant, hatchery operator, rancher |
| **animal health** | **veterinary doctor**, animal health technologist, veterinary nurse, meat inspector |
| **extension and education** | **extension officer** — carries research findings to farmers; teacher, lecturer, researcher |
| **nutrition and inputs** | animal nutritionist, feed miller, sales representative for feed and drugs |
| **breeding** | animal breeder, AI technician |
| **processing** | dairy technologist, meat technologist, butcher, tanner, quality-control officer |
| **agribusiness** | livestock marketer, exporter, agricultural banker, insurance officer, consultant |
| **engineering and ICT** | farm equipment fabricator, farm-software developer |
| **public service** | livestock officer, quarantine officer, regulatory officer |

**Training routes:** colleges of agriculture and animal health; polytechnics; universities (animal science, veterinary medicine); skills certification; apprenticeship on farms. **Professional bodies:** Nigerian Institute of Animal Science; Veterinary Council of Nigeria.

## Field work
Visits to **livestock farms, hatcheries, feed mills, abattoirs, dairy plants and tanneries**.
**Before:** set objectives; prepare questions; observe **biosecurity** — clean clothes and footwear, footbaths; no visit to another farm of the same species on the same day.
**During:** observe housing, stock, feeding, health practices, records, waste handling, marketing; ask questions; take notes and photographs with permission.

## Project and field reports
| Section | Content |
|---|---|
| **title** | project or place visited; date |
| **introduction** | background and objectives |
| **materials and methods** | stock, housing, feeds, routine followed |
| **results** | records in tables — weights, feed, production, mortality, costs and income |
| **discussion** | explanation of results; problems and how they were solved |
| **conclusion and recommendations** | lessons; improvements |
| **acknowledgement; references** | |

**Supervised projects (examples):** raising 50 broilers; a rabbit or snail unit; making yoghurt or wara; compost from poultry litter. **Oral presentation:** clear, timed, with charts or slides; answer questions.

## Key syllabus areas for revision
1. **Classes of livestock** — ruminants (cattle, sheep, goats) and non-ruminants (pigs, poultry, rabbits); breeds.
2. **Anatomy and physiology** — digestive systems (four-chambered stomach: **rumen, reticulum, omasum, abomasum**), reproductive systems, hormones.
3. **Nutrition** — classes of feed (concentrates, roughages, supplements); nutrients; ration formulation; pasture and forage; hay and silage.
4. **Management systems** — extensive, semi-intensive, intensive; housing; routine practices (castration, dehorning, debeaking, identification).
5. **Reproduction terms** — gestation: cow about 283 days; ewe and doe about 150; sow about 114 (3 months, 3 weeks, 3 days); rabbit about 31; hen's egg incubates 21 days.
6. **Health** — diseases by cause: viral (Newcastle, foot-and-mouth, rinderpest, PPR, African swine fever), bacterial (anthrax, brucellosis, tuberculosis, mastitis, fowl typhoid), protozoan (**coccidiosis, trypanosomiasis**), fungal (ringworm, aspergillosis); parasites — ectoparasites (ticks, lice, mites) and endoparasites (roundworm, tapeworm, liver fluke); prevention.
7. **Improvement** — introduction, selection, breeding; AI; biotechnology.
8. **Products and processing** — milk, meat, eggs, hides and skins.
9. **Economics and business** — records, budgets, finance, marketing, export.
10. **Mechanization, ICT, welfare and sustainability**.

## Examination technique
- read instructions; plan time by marks
- **define** precisely; **list** in points; **explain** with reasons; **differentiate** in table form
- draw and **label** diagrams (digestive tract, egg, udder)
- show **working** in calculations — dressing percentage, FCR, mortality, hen-day production, gross margin
- in the **practical / test of practical** paper: identify specimens (feeds, tools, parasites, products), state uses, functions and maintenance
- in objective questions: eliminate wrong options; attempt all

## Formula check-list
dressing % = carcass ÷ live weight × 100; FCR = feed ÷ gain; mortality % = deaths ÷ stock × 100; hen-day % = eggs ÷ hens × 100; gross margin = revenue − variable costs; depreciation = (cost − salvage) ÷ life.`,
        examples: `**Example 1.** Who is an extension officer? *Answer:* One who **carries research findings and advice to farmers** and takes their problems back to researchers.

**Example 2.** Name the four chambers of a ruminant's stomach. *Answer:* **Rumen, reticulum, omasum, abomasum**.

**Example 3.** State the gestation period of a sow. *Answer:* About **114 days** (3 months, 3 weeks and 3 days).`,
      },
      questions: [
        ["E", "A professional who diagnoses and treats animal diseases is a", "veterinary doctor", "tanner", "feed miller", "butcher", "Veterinarians safeguard animal health."],
        ["E", "The officer who carries research findings to farmers is the", "extension officer", "quarantine officer", "auditor", "meat inspector", "Extension links research and farmers."],
        ["E", "The largest chamber of a ruminant's stomach is the", "rumen", "abomasum", "omasum", "reticulum", "Microbial fermentation of roughage takes place there."],
        ["M", "The gestation period of a sow is about", "114 days", "283 days", "150 days", "31 days", "Three months, three weeks and three days."],
        ["M", "Coccidiosis in poultry is caused by a", "protozoan", "virus", "bacterium", "fungus", "It is controlled with coccidiostats and dry litter."],
        ["M", "Before visiting a livestock farm on a field trip, students should", "observe biosecurity measures such as footbaths", "visit another poultry farm first", "carry feed from home", "handle sick animals freely", "Visitors can carry disease onto a farm."],
        ["M", "In a project report, tables of weights, feed and mortality belong under", "results", "introduction", "title", "acknowledgement", "They present the data collected."],
        ["H", "The true stomach of a ruminant, where gastric juice is secreted, is the", "abomasum", "rumen", "reticulum", "omasum", "It corresponds to the simple stomach of non-ruminants."],
        ["H", "Trypanosomiasis in cattle is transmitted by the", "tsetse fly", "tick", "housefly", "mosquito", "The protozoan parasite is carried by Glossina species."],
        ["H", "When asked to differentiate between two items in an examination, the best form of answer is", "a table setting out the differences point by point", "a single definition", "a labelled diagram only", "a list of similarities", "Corresponding points are compared side by side."],
      ],
    },
  ],
};
