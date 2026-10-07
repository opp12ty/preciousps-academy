import type { TermPlan } from "../types";

/** SS2 Biology — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The digestive system",
        subtopics: ["Alimentary canals of different animals", "The human alimentary canal", "Digestion, absorption and assimilation", "The liver and digestion in ruminants"],
        objectives: ["Compare the alimentary canals of different animals", "Describe the parts of the human alimentary canal", "Explain digestion, absorption and assimilation of food", "Describe the role of the liver and digestion in ruminants"],
        lesson: {
          title: "From Food to Nutrients",
          summary: "Describe the alimentary canal and the digestion and absorption of food.",
          minutes: 40,
          notes: `## Digestion
The breakdown of **large, insoluble food molecules into small, soluble ones** that can be absorbed. It is **mechanical** (chewing, churning) and **chemical** (enzymes).
The stages of holozoic nutrition: **ingestion → digestion → absorption → assimilation → egestion**.

## Alimentary canals compared
- **Planaria** (flatworm): one opening serves as mouth and anus; branched gut
- **earthworm**: mouth, pharynx, oesophagus, **crop** (storage), **gizzard** (grinding), intestine, anus
- **grasshopper / cockroach**: fore-gut (mouth, crop, gizzard), mid-gut with caeca (digestion and absorption), hind-gut
- **bird**: beak (no teeth), **crop** stores grain, proventriculus adds enzymes, **gizzard** grinds with swallowed grit, intestine, cloaca

## The human alimentary canal
### Mouth
Teeth chew the food (**mastication**); saliva moistens it and salivary amylase begins the digestion of starch. The tongue rolls the food into a **bolus**. During swallowing the **epiglottis** closes the windpipe.
### Oesophagus (gullet)
Food is pushed along by **peristalsis** — waves of contraction of the muscular wall.
### Stomach
A muscular bag that churns food into **chyme**. Gastric juice contains hydrochloric acid, pepsin and (in infants) rennin. Food stays for 3–4 hours; the pyloric sphincter releases it gradually.
### Small intestine
- **duodenum** — receives **bile** from the liver (stored in the **gall bladder**) and **pancreatic juice** from the pancreas
- **ileum** — digestion is completed by intestinal juice (succus entericus); the main site of **absorption**
### Large intestine
- **colon** — absorbs **water** and mineral salts
- **rectum** — stores **faeces**, which are passed out through the **anus** (**egestion**)
- the **caecum and appendix** are small and have no digestive function in man, but are large in herbivores such as the rabbit, where bacteria digest cellulose

## End products
carbohydrates → **glucose** (and other simple sugars); proteins → **amino acids**; fats and oils → **fatty acids and glycerol**.

## Absorption
The ileum is adapted for absorption:
- it is very **long**
- its wall is folded and covered with millions of finger-like **villi**, each bearing microvilli — a huge **surface area**
- villi have **thin walls** (one cell thick)
- each villus has a network of **blood capillaries** (absorbing glucose and amino acids) and a **lacteal** (absorbing fatty acids and glycerol into the lymph)
Glucose and amino acids travel in the **hepatic portal vein** to the liver.

## Assimilation
The **use of absorbed food** by the body cells:
- glucose — oxidised for energy; excess stored as **glycogen** in the liver and muscles or changed to fat
- amino acids — build proteins for growth and repair; excess is **deaminated** in the liver to form **urea**
- fats — energy store under the skin; part of cell membranes

## The liver
The largest gland. Functions:
- produces **bile**
- regulates **blood sugar** (glucose ⇌ glycogen)
- **deamination** of excess amino acids
- **detoxification** of poisons and drugs
- stores iron and vitamins A, D and B₁₂
- makes plasma proteins such as fibrinogen
- produces heat

## Digestion in ruminants
Cattle, sheep and goats have a stomach with **four chambers**:
1. **rumen** — the largest; bacteria and protozoa digest **cellulose** by fermentation
2. **reticulum** — forms the food into **cud**, which is returned to the mouth to be chewed again (**rumination**)
3. **omasum** — absorbs water
4. **abomasum** — the "true stomach", with gastric juice

## Disorders
constipation, diarrhoea, indigestion, ulcers, appendicitis, tooth decay.`,
          examples: `**Example 1.** Name the process that moves food along the oesophagus. *Answer:* **Peristalsis**.

**Example 2.** State two ways in which the ileum is adapted for absorption. *Answer:* It is **long** and has numerous **villi** giving a large surface area.

**Example 3.** In which chamber of a cow's stomach is cellulose digested by bacteria? *Answer:* The **rumen**.`,
        },
        questions: [
          ["E", "The wave-like muscular contraction that moves food along the gut is", "peristalsis", "mastication", "assimilation", "egestion", "It occurs along the whole alimentary canal."],
          ["E", "The end product of the digestion of proteins is", "amino acids", "glucose", "fatty acids", "glycerol", "They are absorbed into the blood capillaries."],
          ["E", "Most absorption of digested food takes place in the", "ileum", "stomach", "colon", "oesophagus", "Its wall is lined with villi."],
          ["M", "The finger-like projections on the wall of the small intestine are called", "villi", "cilia", "alveoli", "papillae", "They increase the surface area for absorption."],
          ["M", "Fatty acids and glycerol are absorbed into the", "lacteals", "blood capillaries", "hepatic artery", "bile duct", "They enter the lymphatic system."],
          ["M", "The organ that grinds food in birds, with the help of swallowed grit, is the", "gizzard", "crop", "cloaca", "caecum", "Birds have no teeth."],
          ["M", "The main function of the colon is to", "absorb water", "digest proteins", "produce bile", "store glycogen", "The remains become faeces."],
          ["H", "The removal of the amino group from excess amino acids in the liver is called", "deamination", "detoxification", "emulsification", "assimilation", "Urea is formed as a result."],
          ["H", "The chamber of the ruminant stomach in which cellulose is digested by microorganisms is the", "rumen", "abomasum", "omasum", "reticulum", "It is the largest chamber."],
          ["H", "The blood vessel that carries absorbed food from the small intestine to the liver is the", "hepatic portal vein", "hepatic artery", "renal vein", "pulmonary vein", "It links two sets of capillaries."],
        ],
      },
      {
        week: 2,
        title: "Transport system in animals",
        subtopics: ["Need for transport and types of circulatory system", "Blood and its functions", "The heart and blood vessels", "Circulation and the lymphatic system"],
        objectives: ["Explain why large organisms need transport systems", "Describe the composition and functions of blood", "Describe the structure and action of the heart and blood vessels", "Describe double circulation and the lymphatic system"],
        lesson: {
          title: "Blood and Circulation",
          summary: "Describe blood, the heart, blood vessels and the circulation of blood.",
          minutes: 40,
          notes: `## Need for transport
In small organisms such as Amoeba, **diffusion** alone supplies every part. Large organisms have a **small surface area to volume ratio**, so diffusion is too slow; they need a transport system to carry food, oxygen and wastes.

## Types of circulatory system
- **open** — blood flows through body spaces (haemocoel) and bathes the organs: insects, snails
- **closed** — blood stays inside vessels: earthworm, vertebrates
- **single circulation** — blood passes through the heart **once** in a complete circuit: fish (two-chambered heart)
- **double circulation** — blood passes through the heart **twice**: mammals and birds (four-chambered heart). Amphibians have three chambers

## Blood
| Component | Features | Function |
|---|---|---|
| **plasma** | pale yellow liquid, about 55% of blood, mostly water | carries dissolved food, urea, hormones, carbon(IV) oxide, heat |
| **red blood cells (erythrocytes)** | biconcave discs; **no nucleus**; contain **haemoglobin**; made in bone marrow; live about 120 days | carry **oxygen** as oxyhaemoglobin |
| **white blood cells (leucocytes)** | larger; have a nucleus; fewer | **defence**: phagocytes engulf germs; lymphocytes make antibodies |
| **platelets (thrombocytes)** | tiny cell fragments | **clotting** of blood |

### Clotting
At a wound, platelets release **thrombokinase**, which, with **calcium ions** and vitamin K, converts **prothrombin** to **thrombin**. Thrombin changes soluble **fibrinogen** into insoluble **fibrin** threads, which trap blood cells to form a clot. Clotting prevents loss of blood and entry of germs.

### Functions of blood
transport of oxygen, food, wastes, hormones and heat; defence; clotting; regulation of temperature and pH.

## The heart
A muscular pump in the chest, made of **cardiac muscle**, enclosed in the pericardium.
- four chambers: two thin-walled **auricles (atria)** above; two thick-walled **ventricles** below
- the **left ventricle** has the thickest wall — it pumps blood to the whole body
- the right side holds **deoxygenated** blood; the left side **oxygenated** blood; a **septum** separates them
- **valves** prevent backflow: **tricuspid** (right), **bicuspid or mitral** (left), and **semilunar** valves at the bases of the arteries
- the **coronary arteries** supply the heart muscle itself

### Heartbeat
**systole** — contraction; **diastole** — relaxation. The beat starts at the **pacemaker**. An adult heart beats about 72 times a minute; the **pulse** is felt where an artery passes near the skin.

## Blood vessels
| Arteries | Veins | Capillaries |
|---|---|---|
| carry blood **away from** the heart | carry blood **to** the heart | link arteries to veins |
| thick, muscular, elastic walls | thinner walls | walls **one cell thick** |
| narrow lumen | wide lumen | very narrow |
| no valves | **valves** present | no valves |
| blood at high pressure; pulse | low pressure | exchange of materials with tissues |
| oxygenated blood (except the **pulmonary artery**) | deoxygenated blood (except the **pulmonary vein**) | |

## Double circulation
- **pulmonary circulation**: right ventricle → pulmonary artery → lungs → pulmonary vein → left auricle
- **systemic circulation**: left ventricle → **aorta** → body → **venae cavae** → right auricle
Important vessels: hepatic artery and vein (liver), hepatic portal vein (gut to liver), renal artery and vein (kidneys).

## Lymphatic system
**Tissue fluid** leaks from capillaries and bathes the cells. Excess drains into **lymph vessels** as **lymph**, passes through **lymph nodes** (which filter germs and make lymphocytes) and returns to the blood near the heart. Lymph also carries absorbed fats.

## Disorders
hypertension, anaemia, sickle-cell anaemia, leukaemia, heart attack, stroke.`,
          examples: `**Example 1.** Which blood cells transport oxygen? *Answer:* **Red blood cells**, using haemoglobin.

**Example 2.** Name the artery that carries deoxygenated blood. *Answer:* The **pulmonary artery**.

**Example 3.** Why is the wall of the left ventricle thicker than that of the right? *Answer:* It pumps blood **round the whole body**, which needs greater pressure.`,
        },
        questions: [
          ["E", "The component of blood that carries oxygen is the", "red blood cell", "white blood cell", "platelet", "plasma", "It contains haemoglobin."],
          ["E", "The blood cells responsible for clotting are the", "platelets", "red blood cells", "phagocytes", "lymphocytes", "They gather at a wound."],
          ["E", "The mammalian heart has", "four chambers", "two chambers", "three chambers", "one chamber", "There are two auricles and two ventricles."],
          ["M", "Blood vessels that carry blood away from the heart are", "arteries", "veins", "capillaries", "lacteals", "They have thick, elastic walls."],
          ["M", "The chamber of the heart with the thickest muscular wall is the", "left ventricle", "right ventricle", "left auricle", "right auricle", "It pumps blood to the whole body."],
          ["M", "The valve between the right auricle and the right ventricle is the", "tricuspid valve", "bicuspid valve", "semilunar valve", "pyloric valve", "It has three flaps."],
          ["M", "An insect such as the cockroach has", "an open circulatory system", "a closed circulatory system", "double circulation", "a four-chambered heart", "The blood bathes the organs directly."],
          ["H", "The vein that carries oxygenated blood is the", "pulmonary vein", "hepatic vein", "renal vein", "vena cava", "It brings blood from the lungs to the heart."],
          ["H", "During clotting, thrombin converts", "fibrinogen to fibrin", "prothrombin to thrombokinase", "fibrin to fibrinogen", "haemoglobin to oxyhaemoglobin", "The fibrin threads trap blood cells."],
          ["H", "Large animals need a transport system because", "their surface area is small compared with their volume", "they have no cells", "diffusion does not occur in them", "they do not respire", "Diffusion alone would be too slow."],
        ],
      },
      {
        week: 3,
        title: "Transport in plants",
        subtopics: ["Vascular tissues: xylem and phloem", "Absorption and movement of water", "Transpiration", "Translocation"],
        objectives: ["Describe the structure and functions of xylem and phloem", "Explain how water is absorbed and moved up the plant", "Explain transpiration and the factors affecting it", "Describe translocation and experiments on transport"],
        lesson: {
          title: "Movement of Water and Food in Plants",
          summary: "Explain how water, mineral salts and manufactured food are transported in plants.",
          minutes: 40,
          notes: `## Vascular tissues
- **xylem** — carries **water and mineral salts upwards** from the roots. It consists of **vessels** and **tracheids**: dead, hollow cells with **lignified** walls, joined end to end into continuous tubes. Xylem also supports the plant
- **phloem** — carries **manufactured food** (mainly sucrose) from the leaves to all parts. It consists of living **sieve tubes** (no nucleus; end walls are perforated sieve plates) and **companion cells**
In a dicot **stem**, the vascular bundles form a **ring**, with xylem inside, phloem outside and **cambium** between. In a monocot stem the bundles are **scattered**. In a **root**, xylem forms a central star with phloem between its arms.

## Absorption of water
**Root hairs** — long, thin extensions of epidermal cells — give a large surface area. The cell sap is more concentrated than soil water, so water enters by **osmosis**, then passes from cell to cell across the cortex to the xylem. **Mineral salts** are absorbed as ions, mainly by **active transport**.

## Movement of water up the stem
- **root pressure** — pushes water up a short distance (seen when a cut stump bleeds)
- **capillarity** — water rises in the very narrow vessels
- **transpiration pull** — the main force: evaporation from the leaves pulls a continuous column of water upwards, held together by **cohesion** between water molecules and **adhesion** to the vessel walls
### Experiment
A leafy shoot placed in a dilute solution of red ink (eosin) shows, when its stem is cut across, that only the **xylem** is stained.

## Transpiration
The **loss of water vapour** from the aerial parts of a plant, mainly through the **stomata** of the leaves; also through the cuticle and the lenticels.
### Importance
- cools the plant
- draws water and mineral salts up the plant (the **transpiration stream**)
- removes excess water
Excessive transpiration causes **wilting**.
### Factors affecting the rate
| Factor | Effect |
|---|---|
| **temperature** | higher temperature — faster |
| **humidity** | higher humidity — **slower** |
| **wind** | more wind — faster |
| **light** | stomata open in light — faster |
| soil water | shortage closes stomata — slower |
| leaf structure | large leaves and many stomata — faster |
### Measuring transpiration
A **potometer** measures the rate of **water uptake** by a shoot (nearly equal to the rate of transpiration) from the movement of an air bubble. A potted plant on a balance loses mass. Dry **cobalt(II) chloride paper** on a leaf turns from **blue to pink** — faster on the lower surface, where there are more stomata.
### Stomata
Each stoma is bounded by two **guard cells**. When the guard cells are **turgid** they bend apart and the stoma **opens**; when flaccid it closes.
### Reducing water loss
thick cuticle, sunken stomata, leaves reduced to spines, shedding leaves in the dry season, hairy leaves.

## Guttation
The loss of water as **liquid droplets** from the edges of leaves through hydathodes, when humidity is high.

## Translocation
The movement of **manufactured food** in the **phloem** from the leaves (source) to growing points, roots, fruits and storage organs (sinks).
### Evidence
- **ringing experiment**: removing a ring of bark (which contains the phloem) causes food to accumulate and the stem to **swell above the ring**; the part below is starved
- aphids feed by inserting their mouthparts into sieve tubes
- radioactive carbon supplied to a leaf is later found in the phloem`,
          examples: `**Example 1.** Which tissue conducts water in plants? *Answer:* **Xylem**.

**Example 2.** How does high humidity affect transpiration? *Answer:* It **reduces** the rate.

**Example 3.** In a ringing experiment, why does the stem swell above the ring? *Answer:* **Food travelling down the phloem accumulates** there because the phloem has been removed.`,
        },
        questions: [
          ["E", "The tissue that conducts water and mineral salts in plants is the", "xylem", "phloem", "cambium", "cortex", "Its cells are dead and lignified."],
          ["E", "The loss of water vapour from the leaves of a plant is called", "transpiration", "translocation", "guttation", "respiration", "It occurs mainly through the stomata."],
          ["E", "Manufactured food is transported in plants through the", "phloem", "xylem", "epidermis", "pith", "Sieve tubes carry it."],
          ["M", "The instrument used to measure the rate of water uptake by a leafy shoot is the", "potometer", "photometer", "hygrometer", "barometer", "An air bubble moves along a capillary tube."],
          ["M", "Which condition reduces the rate of transpiration?", "high humidity", "high temperature", "strong wind", "bright light", "The air is already nearly saturated with water vapour."],
          ["M", "The opening and closing of a stoma is controlled by the", "guard cells", "companion cells", "root hairs", "palisade cells", "They open the pore when turgid."],
          ["M", "The movement of manufactured food from the leaves to other parts of a plant is", "translocation", "transpiration", "absorption", "capillarity", "It takes place in the phloem."],
          ["H", "The main force that draws water up tall trees is", "transpiration pull", "root pressure", "active transport", "guttation", "Cohesion keeps the water column unbroken."],
          ["H", "In a ringing experiment, the stem swells above the ring because", "food accumulates where the phloem has been removed", "water cannot pass upwards", "the xylem is blocked", "the cambium dies", "The phloem lies in the bark that was removed."],
          ["H", "The loss of water as liquid droplets from the margins of leaves is called", "guttation", "transpiration", "plasmolysis", "wilting", "It happens when the air is very humid."],
        ],
      },
      {
        week: 4,
        title: "The respiratory system",
        subtopics: ["Respiratory surfaces and their characteristics", "Respiratory organs of different organisms", "The human respiratory system and breathing", "Gaseous exchange in plants"],
        objectives: ["State the characteristics of respiratory surfaces", "Describe the respiratory organs of different organisms", "Describe the human respiratory system and the mechanism of breathing", "Explain gaseous exchange in plants"],
        lesson: {
          title: "Gaseous Exchange",
          summary: "Describe respiratory surfaces and the mechanism of breathing in organisms.",
          minutes: 40,
          notes: `## Gaseous exchange
The exchange of **oxygen and carbon(IV) oxide** between an organism and its environment by **diffusion** across a **respiratory surface**. It is different from cellular respiration, which releases energy in the cells.

## Characteristics of respiratory surfaces
- **large surface area**
- **thin** walls — a short diffusion distance
- **moist** — gases dissolve before diffusing
- rich supply of **blood capillaries** (in animals with blood)
- well ventilated

## Respiratory organs
| Organism | Respiratory surface |
|---|---|
| Amoeba, Paramecium | the whole **cell membrane** |
| Hydra, flatworms | body surface |
| earthworm | moist **skin** |
| insects | **tracheal system** — air enters through **spiracles** into tracheae and fine tracheoles reaching the tissues; blood is not involved |
| fish | **gills** — gill filaments on gill arches; gill rakers protect them; covered by the operculum in bony fish |
| tadpole | external, then internal gills |
| toad (adult) | **skin, mouth lining and lungs** |
| reptiles, birds, mammals | **lungs** |
| spider | lung books |

### Gaseous exchange in fish
The mouth opens and water enters; the mouth closes, the floor of the mouth rises and water is forced over the gills and out under the operculum. Blood in the filaments flows in the opposite direction to the water (**counter-current flow**), which increases the uptake of oxygen.

## The human respiratory system
**nostrils → nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli**
- the nasal cavity warms, moistens and filters the air (hairs and mucus)
- the **larynx** (voice box) contains the vocal cords; the **epiglottis** closes it during swallowing
- the **trachea** is kept open by C-shaped rings of **cartilage**; cilia sweep mucus and dust upwards
- the **lungs** lie in the chest (thorax), enclosed by the **pleural membranes**, protected by the ribs; below is the muscular **diaphragm**
- the **alveoli** — millions of tiny air sacs — are the respiratory surface: thin, moist and surrounded by capillaries. Oxygen diffuses into the blood and combines with haemoglobin; carbon(IV) oxide diffuses out

## Mechanism of breathing
| | Inspiration (breathing in) | Expiration (breathing out) |
|---|---|---|
| intercostal muscles | contract | relax |
| ribs | move **up and out** | move down and in |
| diaphragm | contracts and **flattens** | relaxes and becomes **dome-shaped** |
| volume of thorax | increases | decreases |
| pressure in lungs | decreases | increases |
| air | rushes **in** | is forced **out** |

## Inspired and expired air
| Gas | Inspired air | Expired air |
|---|---|---|
| oxygen | about 21% | about 16% |
| carbon(IV) oxide | 0.03% | about 4% |
| nitrogen | 78% | 78% |
| water vapour | variable | saturated |
Expired air is also warmer. It turns **limewater milky** faster than inspired air.

## Lung volumes
tidal volume (about 0.5 dm³ at rest); **vital capacity** (the largest volume that can be breathed out after the deepest breath, about 4–5 dm³); residual volume remains in the lungs.

## Gaseous exchange in plants
- through **stomata** in leaves and young stems
- through **lenticels** in woody stems
- through root hairs from soil air
- mangrove plants have **breathing roots (pneumatophores)**
In daylight, photosynthesis is faster than respiration, so the plant takes in carbon(IV) oxide and gives out oxygen; in darkness only respiration occurs, so it takes in oxygen and gives out carbon(IV) oxide.

## Care of the system
avoid smoking (causes lung cancer, bronchitis); avoid dusty, polluted air; exercise. Diseases: tuberculosis, pneumonia, asthma, whooping cough.`,
          examples: `**Example 1.** Through which structures does air enter the tracheal system of an insect? *Answer:* The **spiracles**.

**Example 2.** What happens to the diaphragm during inspiration? *Answer:* It **contracts and flattens**.

**Example 3.** State two features of the alveoli that aid gaseous exchange. *Answer:* **Thin, moist walls** and a **rich supply of capillaries** (also a large surface area).`,
        },
        questions: [
          ["E", "The respiratory organs of fish are the", "gills", "lungs", "spiracles", "lenticels", "Water passes over them."],
          ["E", "Gaseous exchange in the human lungs takes place in the", "alveoli", "trachea", "bronchi", "larynx", "They are tiny thin-walled air sacs."],
          ["E", "Air enters the body of an insect through the", "spiracles", "nostrils", "stomata", "gill slits", "They lead to the tracheae."],
          ["M", "During inspiration in man, the diaphragm", "contracts and flattens", "relaxes and becomes dome-shaped", "moves upwards", "remains still", "This increases the volume of the chest."],
          ["M", "Which of the following is a characteristic of a respiratory surface?", "it is thin and moist", "it is thick and dry", "it has no blood supply", "it has a small surface area", "Gases dissolve and diffuse across it easily."],
          ["M", "The trachea is kept open by", "rings of cartilage", "bones", "the diaphragm", "pleural membranes", "They prevent it from collapsing."],
          ["M", "Woody stems exchange gases through", "lenticels", "stomata only", "root hairs", "xylem vessels", "They are small openings in the bark."],
          ["H", "Compared with inspired air, expired air contains", "less oxygen and more carbon(IV) oxide", "more oxygen and less carbon(IV) oxide", "less nitrogen", "no water vapour", "Oxygen is used and carbon(IV) oxide released by the tissues."],
          ["H", "The largest volume of air that can be breathed out after the deepest possible breath is the", "vital capacity", "tidal volume", "residual volume", "dead space", "It is about four to five cubic decimetres in adults."],
          ["H", "In the gills of fish, blood flows in the opposite direction to the water in order to", "increase the uptake of oxygen", "slow down the fish", "prevent clotting", "warm the blood", "This is called counter-current flow."],
        ],
      },
      {
        week: 5,
        title: "The excretory system",
        subtopics: ["Excretion and excretory products", "Excretory organs of different organisms", "The mammalian kidney and urine formation", "Other excretory organs and excretion in plants"],
        objectives: ["Define excretion and list excretory products", "Name the excretory organs of different organisms", "Describe the structure of the kidney and the formation of urine", "Describe the excretory roles of the lungs, skin and liver, and excretion in plants"],
        lesson: {
          title: "Getting Rid of Metabolic Wastes",
          summary: "Describe excretory organs and the formation of urine in the kidney.",
          minutes: 40,
          notes: `## Excretion
The **removal of the waste products of metabolism** from the body. It differs from **egestion** — the removal of undigested food (faeces), which was never part of the cells — and from **secretion** — the release of useful substances.
### Why excretion is necessary
wastes are **toxic** if they accumulate; it maintains the water and salt balance and the pH of body fluids.

## Excretory products
- **carbon(IV) oxide** and water — from respiration
- **nitrogenous wastes** from excess amino acids: **ammonia** (very toxic; aquatic animals), **urea** (mammals, amphibians), **uric acid** (insects, birds, reptiles — saves water)
- bile pigments; excess mineral salts

## Excretory organs
| Organism | Excretory structure |
|---|---|
| Amoeba, Paramecium | **contractile vacuole**; body surface |
| flatworms (Planaria, tapeworm) | **flame cells** |
| earthworm | **nephridia** |
| insects | **Malpighian tubules** |
| crustaceans | green (antennal) glands |
| fish, amphibians, reptiles, birds, mammals | **kidneys** |

## The mammalian urinary system
two **kidneys** → two **ureters** → **urinary bladder** → **urethra**. The **renal artery** brings blood to each kidney; the **renal vein** takes it away.

### Structure of the kidney
bean-shaped, with an outer **cortex**, an inner **medulla** (containing the pyramids) and a central **pelvis** leading to the ureter.
The functional unit is the **nephron (kidney tubule)** — about a million in each kidney:
- **Bowman's capsule** enclosing a knot of capillaries, the **glomerulus** (together the Malpighian body)
- **proximal convoluted tubule**
- **loop of Henle**
- **distal convoluted tubule**
- **collecting duct**

### Formation of urine
1. **ultrafiltration**: blood enters the glomerulus under **high pressure** (the vessel leaving is narrower than the one entering). Water, glucose, amino acids, salts and urea are forced into the capsule as **glomerular filtrate**. Blood cells and plasma proteins are too large to pass
2. **selective reabsorption**: as the filtrate flows along the tubule, **all the glucose and amino acids**, most of the water and some salts are taken back into the blood — glucose and salts by active transport, water by osmosis
3. the remaining liquid — water, **urea**, excess salts — is **urine**, which flows to the pelvis, down the ureter and is stored in the bladder

### Functions of the kidney
excretion of urea; **osmoregulation** (water balance); control of salts and of blood pH.

### Disorders
- **kidney stones**; **nephritis** (inflammation); **oedema**
- **diabetes mellitus** — glucose in the urine (lack of insulin)
- **diabetes insipidus** — large volumes of dilute urine (lack of ADH)
Kidney failure is treated by **dialysis** or transplant.

## Other excretory organs
- **lungs** — carbon(IV) oxide and water vapour
- **skin** — **sweat** (water, salts, a little urea) from the sweat glands
- **liver** — forms urea by deamination; excretes bile pigments from the breakdown of old red blood cells

## Excretion in plants
Plants have no special excretory organs. Carbon(IV) oxide, oxygen and water vapour leave through the stomata and lenticels. Other wastes are stored in harmless form in leaves, bark and fruits, and lost when these fall: **tannins**, **resins**, **gums**, **latex**, **alkaloids** (quinine, caffeine, nicotine) and crystals of calcium oxalate. Many are useful to man.`,
          examples: `**Example 1.** Distinguish excretion from egestion. *Answer:* Excretion removes **wastes made in the cells**; egestion removes **undigested food**.

**Example 2.** Name the excretory organ of insects. *Answer:* **Malpighian tubules**.

**Example 3.** Why is there normally no glucose in urine? *Answer:* It is **completely reabsorbed** in the kidney tubule.`,
        },
        questions: [
          ["E", "The removal of metabolic wastes from the body is", "excretion", "egestion", "secretion", "digestion", "Urea and carbon(IV) oxide are such wastes."],
          ["E", "The excretory organs of insects are the", "Malpighian tubules", "nephridia", "flame cells", "kidneys", "They empty into the hind-gut."],
          ["E", "Urine is stored temporarily in the", "urinary bladder", "ureter", "kidney pelvis", "urethra", "It is released through the urethra."],
          ["M", "The functional unit of the kidney is the", "nephron", "neurone", "alveolus", "villus", "Each kidney has about a million of them."],
          ["M", "The excretory structures of the earthworm are", "nephridia", "flame cells", "Malpighian tubules", "contractile vacuoles", "There is a pair in almost every segment."],
          ["M", "The nitrogenous waste excreted by birds and insects is mainly", "uric acid", "urea", "ammonia", "amino acids", "It conserves water."],
          ["M", "The knot of blood capillaries inside Bowman's capsule is the", "glomerulus", "loop of Henle", "pelvis", "collecting duct", "Blood is filtered there."],
          ["H", "Substances that are NOT normally found in the glomerular filtrate include", "plasma proteins", "glucose", "urea", "mineral salts", "Their molecules are too large to pass through."],
          ["H", "The process by which useful substances are taken back into the blood from the kidney tubule is", "selective reabsorption", "ultrafiltration", "deamination", "dialysis", "Glucose and most of the water are recovered."],
          ["H", "The presence of glucose in the urine is a sign of", "diabetes mellitus", "diabetes insipidus", "kidney stones", "nephritis", "It results from a lack of insulin."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Nervous coordination",
        subtopics: ["Organisation of the nervous system", "The brain and spinal cord", "Neurones and the nerve impulse", "Reflex and voluntary actions"],
        objectives: ["Describe the organisation of the nervous system", "State the functions of the parts of the brain and the spinal cord", "Describe the types of neurone and the transmission of impulses", "Distinguish reflex actions from voluntary actions and explain conditioned reflexes"],
        lesson: {
          title: "The Nervous System",
          summary: "Describe the nervous system, neurones and reflex actions.",
          minutes: 40,
          notes: `## Coordination
The working together of the parts of the body. It is brought about by the **nervous system** (fast, by electrical impulses) and the **endocrine system** (slower, by hormones).

## Organisation
- **central nervous system (CNS)** — the **brain** and **spinal cord**
- **peripheral nervous system (PNS)** — the cranial nerves (12 pairs) and spinal nerves (31 pairs) linking the CNS to all parts
  - **somatic** — controls voluntary actions
  - **autonomic** — controls involuntary actions of internal organs: the **sympathetic** system prepares the body for action (faster heartbeat, wider pupils); the **parasympathetic** system restores it to rest

## The brain
Protected by the **skull (cranium)**, three membranes called **meninges**, and cerebrospinal fluid.
| Part | Functions |
|---|---|
| **cerebrum** (the largest part; two hemispheres) | intelligence, memory, thought, learning; voluntary actions; receives sensations of sight, hearing, smell, taste and touch |
| **cerebellum** | **balance**, posture and coordination of muscular movement |
| **medulla oblongata** | involuntary actions: **heartbeat, breathing**, swallowing, blood pressure |
| **hypothalamus** | body temperature, water balance, hunger, thirst; controls the pituitary |
| thalamus | relays impulses to the cerebrum |
Fore-brain: cerebrum, thalamus, hypothalamus, olfactory lobes. Mid-brain: optic lobes. Hind-brain: cerebellum and medulla.

## The spinal cord
Runs inside the vertebral column. In section it has **grey matter** (cell bodies) in the shape of an H in the centre and **white matter** (nerve fibres) outside — the reverse of the brain. It conducts impulses to and from the brain and controls **reflex actions**. Each spinal nerve has a **dorsal root** (sensory fibres, with a ganglion) and a **ventral root** (motor fibres).

## Neurones
The **neurone** (nerve cell) is the unit of the nervous system. It has a **cell body** with a nucleus, short branched **dendrites** that receive impulses, and a long **axon** that carries impulses away. Many axons are covered by a fatty **myelin sheath**, which insulates and speeds up the impulse; gaps in it are the nodes of Ranvier.
| Type | Function |
|---|---|
| **sensory (afferent)** | carries impulses from **receptors to the CNS** |
| **motor (efferent)** | carries impulses from the **CNS to effectors** (muscles, glands) |
| **relay (intermediate)** | links sensory and motor neurones within the CNS |

### The nerve impulse
An **electrical** signal that travels along a neurone. Between two neurones is a tiny gap, the **synapse**; the impulse crosses it by means of a **chemical transmitter** (such as acetylcholine), which ensures it travels in one direction only.

## Reflex action
A **rapid, automatic response** to a stimulus, not under the control of the will. It protects the body.
### The reflex arc
**stimulus → receptor → sensory neurone → relay neurone (in the spinal cord) → motor neurone → effector → response**
Examples: withdrawing the hand from a hot object; the knee jerk; blinking; coughing; sneezing; the pupil narrowing in bright light.

### Conditioned reflex
A **learned** response to a stimulus that did not originally produce it. **Pavlov** rang a bell each time he fed his dogs; eventually the bell alone made them salivate. Examples: salivating at the smell of food; learning to ride a bicycle, type or drive.

## Voluntary action
A deliberate action controlled by the will, involving the **cerebrum**: walking, writing, speaking.
| Reflex action | Voluntary action |
|---|---|
| automatic, very fast | deliberate, slower |
| the cerebrum is not involved in the response | controlled by the cerebrum |
| the same stimulus gives the same response | the response can vary |

## Care
adequate rest and sleep; avoiding drug and alcohol abuse; protective helmets. Disorders: stroke, paralysis, epilepsy, meningitis, poliomyelitis.`,
          examples: `**Example 1.** Which part of the brain controls balance? *Answer:* The **cerebellum**.

**Example 2.** List the path of a reflex arc. *Answer:* **Receptor → sensory neurone → relay neurone → motor neurone → effector**.

**Example 3.** Give an example of a conditioned reflex. *Answer:* **Salivating at the sound of a bell** associated with food.`,
        },
        questions: [
          ["E", "The central nervous system consists of the brain and the", "spinal cord", "cranial nerves", "sense organs", "spinal nerves", "The nerves form the peripheral system."],
          ["E", "The part of the brain responsible for intelligence and memory is the", "cerebrum", "cerebellum", "medulla oblongata", "hypothalamus", "It is the largest part of the brain."],
          ["E", "The basic unit of the nervous system is the", "neurone", "nephron", "synapse", "ganglion", "It is a nerve cell."],
          ["M", "The part of the brain that controls heartbeat and breathing is the", "medulla oblongata", "cerebrum", "cerebellum", "thalamus", "These are involuntary actions."],
          ["M", "A neurone that carries impulses from a receptor to the central nervous system is a", "sensory neurone", "motor neurone", "relay neurone", "effector neurone", "It is also called an afferent neurone."],
          ["M", "The gap between two neurones is called a", "synapse", "node of Ranvier", "dendrite", "myelin sheath", "A chemical transmitter carries the impulse across it."],
          ["M", "Balance and muscular coordination are controlled by the", "cerebellum", "medulla oblongata", "cerebrum", "spinal cord", "Damage to it causes unsteady movement."],
          ["H", "The experiment in which dogs salivated at the sound of a bell demonstrated", "a conditioned reflex", "a simple reflex", "a voluntary action", "an instinct", "The response was learned by association."],
          ["H", "In a transverse section of the spinal cord, the grey matter is", "in the centre, surrounded by white matter", "on the outside, surrounding white matter", "absent", "found only in the dorsal root", "The arrangement is the reverse of that in the brain."],
          ["H", "The function of the myelin sheath around an axon is to", "insulate it and speed up the impulse", "produce the chemical transmitter", "receive impulses", "nourish the cell body", "Impulses jump between the gaps in it."],
        ],
      },
      {
        week: 2,
        title: "Sense organs",
        subtopics: ["The skin, tongue and nose", "The eye and vision", "Eye defects and their correction", "The ear: hearing and balance"],
        objectives: ["Describe the skin, tongue and nose as sense organs", "Describe the structure of the eye and how we see", "Explain eye defects and their correction", "Describe the structure of the ear and explain hearing and balance"],
        lesson: {
          title: "Detecting the World",
          summary: "Describe the structure and functions of the eye, ear, skin, tongue and nose.",
          minutes: 40,
          notes: `## Sense organs
Organs containing **receptors** that detect stimuli and send impulses to the brain.
| Organ | Sense | Stimulus |
|---|---|---|
| eye | sight | light |
| ear | hearing and balance | sound; movement |
| nose | smell | chemicals in air |
| tongue | taste | chemicals in solution |
| skin | touch, pressure, pain, heat, cold | contact, temperature |

## The skin
Receptors in the dermis detect touch, pressure, pain, heat and cold. They are most numerous in the fingertips and lips.

## The tongue
**Taste buds** detect the four basic tastes: **sweet** (tip), **salt** (tip and sides), **sour** (sides) and **bitter** (back). Substances must be dissolved to be tasted.

## The nose
**Olfactory cells** in the roof of the nasal cavity detect chemicals dissolved in mucus. Smell and taste work together — food tastes dull during a cold.

## The eye
Set in a bony **orbit**, moved by six muscles, protected by eyelids, eyelashes and tears (which contain an enzyme that kills bacteria).
| Part | Function |
|---|---|
| **sclera** | tough white outer coat; protects |
| **cornea** | transparent front; **refracts** most of the light |
| **conjunctiva** | thin membrane protecting the cornea |
| **choroid** | black layer with blood vessels; prevents internal reflection |
| **iris** | coloured muscular ring; controls the size of the pupil |
| **pupil** | hole through which light enters |
| **lens** | focuses light on the retina |
| **ciliary muscles** and **suspensory ligaments** | change the shape of the lens |
| **retina** | light-sensitive layer: **rods** (dim light, black and white) and **cones** (bright light, colour) |
| **fovea (yellow spot)** | most sensitive point; cones only |
| **blind spot** | where the optic nerve leaves; no receptors |
| **optic nerve** | carries impulses to the brain |
| aqueous and vitreous humour | maintain the shape of the eyeball; refract light |

### How we see
Light from an object is refracted by the cornea and lens to form a **real, inverted, smaller** image on the retina. Impulses pass along the optic nerve to the brain, which interprets the image the right way up.

### Accommodation
The adjustment of the lens to focus objects at different distances.
- **near object**: ciliary muscles **contract**, suspensory ligaments slacken, lens becomes **thicker**
- **distant object**: ciliary muscles relax, ligaments tighten, lens becomes **thinner**

### Control of light
In bright light the circular muscles of the iris contract and the pupil becomes **smaller**; in dim light it widens.

## Eye defects
| Defect | Cause | Correction |
|---|---|---|
| **short sight (myopia)** | eyeball too long; image falls **in front of** the retina | **concave (diverging)** lens |
| **long sight (hypermetropia)** | eyeball too short; image falls **behind** the retina | **convex (converging)** lens |
| **presbyopia** | lens loses elasticity with age | bifocal lenses |
| **astigmatism** | uneven curvature of the cornea | cylindrical lens |
| **cataract** | lens becomes cloudy | surgery |
| colour blindness | defective cones; inherited | none |
| night blindness | lack of vitamin A | diet rich in vitamin A |

## The ear
### Outer ear
**pinna** collects sound waves; **ear canal** leads to the **eardrum (tympanum)**, which vibrates.
### Middle ear
An air-filled cavity with three small bones, the **ossicles** — **malleus (hammer), incus (anvil), stapes (stirrup)** — which amplify the vibrations and pass them to the oval window. The **Eustachian tube** connects it to the throat and **equalises the pressure** on both sides of the eardrum.
### Inner ear
Fluid-filled:
- **cochlea** — a coiled tube with sensory hair cells; concerned with **hearing**
- **semicircular canals** (three, at right angles), with the utricle and saccule — concerned with **balance**

### Hearing
sound waves → eardrum vibrates → ossicles → oval window → fluid in the cochlea vibrates → hair cells stimulated → **auditory nerve** → brain.

### Balance
Movement of the head moves the fluid in the semicircular canals, bending sensory hairs; impulses go to the cerebellum. Spinning makes the fluid continue to move, causing dizziness.

### Care of the ear
do not push sharp objects into it; avoid very loud noise; treat infections early.`,
          examples: `**Example 1.** Which cells of the retina detect colour? *Answer:* The **cones**.

**Example 2.** What lens corrects short sight? *Answer:* A **concave (diverging)** lens.

**Example 3.** Which part of the ear is concerned with balance? *Answer:* The **semicircular canals**.`,
        },
        questions: [
          ["E", "The light-sensitive layer of the eye is the", "retina", "cornea", "sclera", "iris", "It contains rods and cones."],
          ["E", "The part of the ear that collects sound waves is the", "pinna", "cochlea", "eardrum", "Eustachian tube", "It is the visible flap of the outer ear."],
          ["E", "The taste detected mainly at the back of the tongue is", "bitter", "sweet", "salt", "sour", "Sweet is detected at the tip."],
          ["M", "The amount of light entering the eye is controlled by the", "iris", "lens", "retina", "choroid", "It changes the size of the pupil."],
          ["M", "The receptor cells that work in dim light and do not detect colour are the", "rods", "cones", "olfactory cells", "taste buds", "Cones work in bright light."],
          ["M", "Short sight is corrected with", "a concave lens", "a convex lens", "a cylindrical lens", "a bifocal lens", "The lens spreads the rays before they enter the eye."],
          ["M", "The structure that equalises the air pressure on both sides of the eardrum is the", "Eustachian tube", "cochlea", "ear canal", "oval window", "It connects the middle ear to the throat."],
          ["H", "When the eye focuses on a near object, the", "ciliary muscles contract and the lens becomes thicker", "ciliary muscles relax and the lens becomes thinner", "pupil disappears", "retina moves forward", "A thicker lens bends light more strongly."],
          ["H", "The point on the retina where the optic nerve leaves the eye and no image is detected is the", "blind spot", "yellow spot", "pupil", "fovea", "It has no rods or cones."],
          ["H", "In long sight, the image of a near object is formed", "behind the retina", "in front of the retina", "on the blind spot", "on the cornea", "The eyeball is too short or the lens too weak."],
        ],
      },
      {
        week: 3,
        title: "Hormonal coordination",
        subtopics: ["Endocrine glands and their hormones", "Effects of over- and under-secretion", "Hormones in metamorphosis", "Plant hormones"],
        objectives: ["Name the endocrine glands, their positions and hormones", "Describe the effects of over- and under-secretion of hormones", "Compare nervous and hormonal coordination", "Describe plant hormones and their uses"],
        lesson: {
          title: "Chemical Messengers",
          summary: "Describe the endocrine glands and hormones of animals and the hormones of plants.",
          minutes: 40,
          notes: `## Hormones
A **hormone** is a **chemical substance** produced by an **endocrine (ductless) gland**, carried in the **blood**, which affects the activity of a **target organ** elsewhere in the body. Hormones act in small amounts and are destroyed by the liver.

## Endocrine glands of man
| Gland | Position | Hormone | Function |
|---|---|---|---|
| **pituitary** ("master gland") | base of the brain | growth hormone | growth of bones and tissues |
| | | TSH, ACTH, FSH, LH | control other glands |
| | | **ADH** (antidiuretic hormone) | reabsorption of water in the kidneys |
| | | oxytocin; prolactin | contraction of the womb at birth; milk production |
| **thyroid** | neck | **thyroxine** (contains iodine) | controls the **rate of metabolism** and growth |
| **parathyroid** | on the thyroid | parathormone | level of calcium in the blood |
| **pancreas** (islets of Langerhans) | below the stomach | **insulin** | lowers blood sugar: glucose → glycogen |
| | | glucagon | raises blood sugar |
| **adrenal** | on the kidneys | **adrenaline** | prepares the body for "fight or flight" |
| **ovaries** | abdomen | **oestrogen**; progesterone | female secondary sexual characteristics; menstrual cycle; pregnancy |
| **testes** | scrotum | **testosterone** | male secondary sexual characteristics; sperm production |

### Effects of adrenaline
faster heartbeat and breathing; raised blood pressure; glycogen changed to glucose; blood diverted to the muscles; pupils dilate; hair stands on end.

## Over- and under-secretion
| Hormone | Too little | Too much |
|---|---|---|
| growth hormone | **dwarfism** | **gigantism**; acromegaly in adults |
| thyroxine | **cretinism** in children; myxoedema in adults; **goitre** if iodine is lacking | exophthalmic goitre: thin, restless, bulging eyes |
| insulin | **diabetes mellitus** — sugar in the urine | low blood sugar; coma |
| ADH | diabetes insipidus — much dilute urine | very little urine |
| sex hormones | poorly developed sexual characteristics | early sexual maturity |

## Nervous and hormonal coordination compared
| Nervous | Hormonal |
|---|---|
| electrical impulses | chemical messengers |
| carried by neurones | carried by blood |
| very fast | slower |
| short-lived effect | long-lasting effect |
| effect is localised | effect may be widespread |

## Hormones in metamorphosis
In tadpoles, **thyroxine** brings about metamorphosis into the adult; a tadpole given extra thyroxine changes early into a tiny toad. In insects, **ecdysone** causes moulting and the **juvenile hormone** keeps the larval form.

## Plant hormones
| Hormone | Effects |
|---|---|
| **auxins** (such as indoleacetic acid, IAA) — made at the tips of shoots and roots | cell elongation; **tropisms**; **apical dominance** (the tip suppresses side buds); root formation; fruit development |
| **gibberellins** | stem elongation; break seed dormancy; larger fruits |
| **cytokinins** | cell division; delay ageing of leaves |
| **abscisic acid** | dormancy; closing of stomata; leaf fall |
| **ethene (ethylene)** | ripening of fruits |

### Auxins and tropisms
When a shoot is lit from one side, auxin moves to the **shaded side**, where the cells elongate more, so the shoot bends **towards the light**. In a root placed horizontally, auxin collects on the lower side, where a high concentration **slows** growth, so the root bends **downwards**.
If the tip of a shoot is cut off or covered, it no longer bends — showing that the tip detects the stimulus. A **klinostat**, which rotates a seedling slowly, cancels the one-sided effect of gravity or light.

### Uses in agriculture
- rooting powders for **cuttings**
- **selective weedkillers** (2,4-D kills broad-leaved weeds in cereal crops)
- inducing flowering and fruiting; producing **seedless fruits** (parthenocarpy)
- ripening fruits artificially; preventing premature fruit fall
- pruning removes apical dominance and makes the plant bushy.`,
          examples: `**Example 1.** Which hormone lowers the level of sugar in the blood? *Answer:* **Insulin**.

**Example 2.** What results from under-secretion of growth hormone in childhood? *Answer:* **Dwarfism**.

**Example 3.** Why does a shoot bend towards light? *Answer:* **Auxin gathers on the shaded side**, making cells there elongate faster.`,
        },
        questions: [
          ["E", "The gland referred to as the master gland of the body is the", "pituitary gland", "thyroid gland", "adrenal gland", "pancreas", "Its hormones control other glands."],
          ["E", "Chemical messengers produced by ductless glands are called", "hormones", "enzymes", "vitamins", "antibodies", "They are carried in the blood."],
          ["E", "The hormone that prepares the body for emergency action is", "adrenaline", "insulin", "thyroxine", "oestrogen", "It is the fight-or-flight hormone."],
          ["M", "The hormone that converts excess glucose in the blood to glycogen is", "insulin", "glucagon", "adrenaline", "thyroxine", "It is made by the islets of Langerhans."],
          ["M", "Deficiency of iodine in the diet leads to", "goitre", "diabetes mellitus", "gigantism", "rickets", "The thyroid gland swells."],
          ["M", "The plant hormone mainly responsible for the ripening of fruits is", "ethene", "auxin", "gibberellin", "cytokinin", "It is a gas. Answer: ethene."],
          ["M", "The male sex hormone is", "testosterone", "oestrogen", "progesterone", "prolactin", "It is produced by the testes."],
          ["H", "A shoot bends towards light coming from one side because auxin", "accumulates on the shaded side and causes faster elongation there", "is destroyed on the shaded side", "accumulates on the lit side and speeds growth there", "stops being produced", "Unequal growth produces the curvature."],
          ["H", "Removing the tip of the main shoot makes a plant bushy because it", "removes apical dominance, allowing side buds to grow", "increases transpiration", "kills the side buds", "stops photosynthesis", "Auxin from the tip had been suppressing the lateral buds."],
          ["H", "Unlike nervous coordination, hormonal coordination is", "slower and longer-lasting", "faster and short-lived", "carried by neurones", "always localised", "Hormones travel in the bloodstream."],
        ],
      },
      {
        week: 4,
        title: "Homeostasis: the kidney, liver and skin",
        subtopics: ["Meaning of homeostasis and feedback", "Osmoregulation by the kidney", "The liver and blood sugar", "The skin and temperature regulation"],
        objectives: ["Explain homeostasis and negative feedback", "Explain how the kidney regulates water and salts", "Explain the role of the liver in regulating blood sugar", "Describe the structure of the skin and how body temperature is regulated"],
        lesson: {
          title: "Keeping the Internal Environment Constant",
          summary: "Explain how the kidney, liver and skin keep conditions in the body steady.",
          minutes: 40,
          notes: `## Homeostasis
The **maintenance of a constant internal environment** — the composition, temperature and pH of the blood and tissue fluid — so that the cells work efficiently.
It works by **negative feedback**: a change away from normal triggers a response that **reverses** the change.
The main organs are the **kidneys**, **liver** and **skin**, controlled by the brain (hypothalamus) and hormones.

## Osmoregulation by the kidney
The control of the **water and salt content** of the body.
### Too little water (after sweating, or little drinking)
1. the blood becomes more concentrated
2. the **hypothalamus** detects this and the **pituitary** releases more **ADH**
3. ADH makes the kidney tubules and collecting ducts **more permeable** to water
4. more water is reabsorbed
5. a **small volume of concentrated urine** is produced; thirst is also felt
### Too much water (after drinking a lot)
less ADH is released; less water is reabsorbed; a **large volume of dilute urine** is produced.
The hormone **aldosterone** from the adrenal glands controls the reabsorption of sodium ions.

### In other organisms
- freshwater fish gain water by osmosis: they produce much dilute urine and absorb salts through the gills
- marine bony fish lose water: they drink sea water, excrete salts through the gills and produce little urine
- desert animals (kangaroo rat, camel) have long loops of Henle and produce very concentrated urine

## The liver
### Regulation of blood sugar
The normal level is about 90 mg per 100 cm³ of blood.
- after a meal, blood sugar rises → the pancreas secretes **insulin** → the liver converts glucose to **glycogen** → the level falls
- during fasting or exercise, blood sugar falls → the pancreas secretes **glucagon** (and the adrenals secrete adrenaline) → glycogen is converted to glucose → the level rises
### Other homeostatic functions
deamination; detoxification; storage of iron and vitamins; production of heat; manufacture and breakdown of blood components; production of bile.
### Diseases
hepatitis (inflammation, often viral), cirrhosis (from alcohol), gallstones, jaundice (yellowing from excess bile pigment), liver cancer.

## The skin
### Structure
- **epidermis**:
  - **cornified layer** — dead, flat cells of keratin; waterproof; keeps out germs
  - **granular layer** — living cells becoming cornified
  - **Malpighian layer** — dividing cells; contains **melanin**, which gives colour and protects against ultraviolet rays
- **dermis**: blood capillaries; **sweat glands** and ducts; **hair follicles** with erector muscles; **sebaceous glands** (secrete oily sebum, keeping skin supple and waterproof); sensory nerve endings
- **subcutaneous fat** — insulation and energy store

### Functions
protection; **temperature regulation**; excretion (sweat); sensitivity; making **vitamin D** in sunlight; storing fat.

## Temperature regulation
**Homoiotherms** (birds and mammals) keep a constant body temperature (about 37 °C in man); **poikilotherms** (fish, amphibians, reptiles) vary with their surroundings.
| When the body is too hot | When the body is too cold |
|---|---|
| **sweating** increases; evaporation cools the skin | sweating stops |
| **vasodilation**: skin arterioles widen; more blood near the surface; more heat lost | **vasoconstriction**: arterioles narrow; less heat lost |
| hairs lie flat | hairs stand erect, trapping air (goose pimples) |
| metabolic rate falls | **shivering** and a higher metabolic rate produce heat |
Behaviour also helps: seeking shade, wearing light or warm clothes, fanning, taking hot or cold drinks. The **hypothalamus** is the control centre.

### Care of the skin
regular bathing; balanced diet; avoiding bleaching creams, which destroy melanin and thin the skin; treating wounds promptly.`,
          examples: `**Example 1.** What effect does ADH have on the kidney? *Answer:* It makes the tubules **reabsorb more water**, so less urine is produced.

**Example 2.** How does sweating cool the body? *Answer:* The **evaporation of sweat** takes heat from the skin.

**Example 3.** Which hormone raises the level of blood sugar? *Answer:* **Glucagon** (also adrenaline).`,
        },
        questions: [
          ["E", "The maintenance of a constant internal environment in the body is", "homeostasis", "metabolism", "osmosis", "excretion", "It keeps conditions suitable for the cells."],
          ["E", "The normal body temperature of a healthy person is about", "37 °C", "27 °C", "47 °C", "100 °C", "It is kept nearly constant."],
          ["E", "The pigment that gives colour to the skin is", "melanin", "keratin", "haemoglobin", "sebum", "It protects against ultraviolet rays."],
          ["M", "The hormone that controls the reabsorption of water in the kidney is", "ADH", "insulin", "thyroxine", "adrenaline", "It is released by the pituitary gland."],
          ["M", "Animals that maintain a constant body temperature are described as", "homoiothermic", "poikilothermic", "cold-blooded", "amphibious", "Birds and mammals are examples."],
          ["M", "After a carbohydrate-rich meal, the liver lowers blood sugar by converting glucose to", "glycogen", "urea", "bile", "amino acids", "Insulin stimulates the change."],
          ["M", "The oily substance secreted by the sebaceous glands is", "sebum", "sweat", "melanin", "keratin", "It keeps the skin supple and waterproof."],
          ["H", "On a hot day, the blood vessels in the skin", "dilate so that more heat is lost", "constrict so that less heat is lost", "disappear", "stop carrying blood", "This is called vasodilation."],
          ["H", "A person who has sweated heavily and drunk little water produces", "a small volume of concentrated urine", "a large volume of dilute urine", "no ADH", "urine containing glucose", "More ADH causes more water to be reabsorbed."],
          ["H", "In negative feedback, a change from the normal level", "sets off a response that reverses the change", "is made larger by the response", "is ignored by the body", "always causes disease", "This keeps conditions fluctuating around a set point."],
        ],
      },
      {
        week: 5,
        title: "Reproductive system in mammals",
        subtopics: ["Male reproductive system", "Female reproductive system and the menstrual cycle", "Fertilisation, pregnancy and birth", "Reproduction in other vertebrates"],
        objectives: ["Describe the male reproductive system", "Describe the female reproductive system and the menstrual cycle", "Describe fertilisation, development of the embryo and birth", "Compare reproduction in fish, amphibians, reptiles, birds and mammals"],
        lesson: {
          title: "Reproduction in Mammals",
          summary: "Describe the human reproductive systems, fertilisation, pregnancy and birth.",
          minutes: 40,
          notes: `## Male reproductive system
| Part | Function |
|---|---|
| **testes** (in the scrotum) | produce **sperm** and **testosterone**; the scrotum keeps them slightly cooler than the body |
| **epididymis** | stores sperm |
| **sperm duct (vas deferens)** | carries sperm to the urethra |
| **seminal vesicles, prostate gland, Cowper's glands** | add fluid that nourishes and activates the sperm, forming **semen** |
| **urethra** | passes semen (and urine) out |
| **penis** | introduces sperm into the vagina |
A **sperm** has a head (with the nucleus and an acrosome containing enzymes), a middle piece (with mitochondria for energy) and a tail for swimming.

## Female reproductive system
| Part | Function |
|---|---|
| **ovaries** | produce **eggs (ova)**, oestrogen and progesterone |
| **oviducts (Fallopian tubes)** | carry the egg to the uterus; **site of fertilisation** |
| **uterus (womb)** | where the embryo develops |
| **cervix** | ring of muscle at the neck of the uterus |
| **vagina** | receives sperm; birth canal |

## The menstrual cycle
About **28 days**, controlled by hormones (FSH, LH, oestrogen, progesterone).
1. days 1–5: **menstruation** — the lining of the uterus breaks down and is shed
2. the lining is repaired; a follicle matures in the ovary
3. about day 14: **ovulation** — an egg is released
4. the lining thickens further, ready for a fertilised egg
5. if no fertilisation occurs, the lining breaks down and the cycle repeats
Menstruation begins at **puberty** and ends at the **menopause**.

## Fertilisation
During **copulation**, semen is deposited in the vagina. Sperm swim through the uterus to the oviduct, where one sperm **fuses with the egg** to form a **zygote**. Fertilisation is **internal**.

## Development
The zygote divides repeatedly as it moves down the oviduct, forming a ball of cells that sinks into the uterus lining — **implantation**. It develops into an **embryo** and, when it has human form, a **foetus**.
- the **placenta** — attached to the uterus wall: oxygen and food diffuse from the mother's blood to the foetus; carbon(IV) oxide and urea pass the other way; the two bloods **do not mix**; it also produces hormones and acts as a barrier to many germs
- the **umbilical cord** — connects the foetus to the placenta
- the **amnion** — a sac of **amniotic fluid** that cushions the foetus against shock
**Gestation** in humans lasts about **9 months (40 weeks)**.

## Birth (parturition)
The uterus wall contracts rhythmically (**labour**), the amnion bursts, the cervix widens and the baby is pushed out head first. The umbilical cord is tied and cut; the placenta follows as the **afterbirth**.
**Parental care:** the baby is fed on milk from the mammary glands, protected and trained.

### Twins
- **identical**: one zygote splits into two — same sex, same genes
- **fraternal (non-identical)**: two eggs fertilised by two sperm

## Reproduction in other vertebrates
| Group | Fertilisation | Development | Parental care |
|---|---|---|---|
| **fish** | mostly **external**, in water; very many eggs | external | little or none (tilapia broods eggs in the mouth) |
| **amphibians** | **external**; eggs in jelly (spawn) | external; **metamorphosis** from tadpole | none |
| **reptiles** | **internal**; leathery-shelled eggs laid on land | external | little |
| **birds** | **internal**; hard-shelled eggs | external; eggs **incubated** | well developed: nest, feeding |
| **mammals** | **internal** | inside the uterus (**viviparous**) | highly developed |
- **oviparous** animals lay eggs; **viviparous** animals bear live young; **ovoviviparous** animals retain eggs in the body until they hatch (some snakes and sharks)

### The bird's egg
shell (protection, porous to gases); shell membranes; **albumen** (water and protein); **yolk** (food); chalazae (hold the yolk in place); germinal disc (the embryo); air space.

## Reproductive health
sexually transmitted infections (gonorrhoea, syphilis, HIV) are prevented by abstinence and faithfulness; antenatal care protects mother and baby.`,
          examples: `**Example 1.** Where does fertilisation occur in humans? *Answer:* In the **oviduct (Fallopian tube)**.

**Example 2.** State two functions of the placenta. *Answer:* It **supplies food and oxygen** to the foetus and **removes its wastes**.

**Example 3.** What is ovulation? *Answer:* The **release of an egg from the ovary**, about the middle of the menstrual cycle.`,
        },
        questions: [
          ["E", "The male gametes of mammals are produced in the", "testes", "prostate gland", "penis", "sperm duct", "They also produce testosterone."],
          ["E", "The embryo of a mammal develops in the", "uterus", "ovary", "vagina", "oviduct", "It is also called the womb."],
          ["E", "The fusion of a sperm with an egg is called", "fertilisation", "ovulation", "implantation", "gestation", "A zygote is formed."],
          ["M", "The release of an egg from the ovary is known as", "ovulation", "menstruation", "copulation", "parturition", "It occurs at about the middle of the cycle."],
          ["M", "In humans, fertilisation normally takes place in the", "oviduct", "uterus", "vagina", "cervix", "The egg meets the sperm on its way to the uterus."],
          ["M", "The structure that connects the foetus to the placenta is the", "umbilical cord", "amnion", "cervix", "oviduct", "It carries blood vessels of the foetus."],
          ["M", "Fertilisation is external in", "toads", "lizards", "birds", "mammals", "Eggs and sperm are shed into water."],
          ["H", "The function of the amniotic fluid is to", "protect the foetus from shock", "supply oxygen to the foetus", "digest food for the foetus", "produce hormones", "It surrounds the foetus within the amnion."],
          ["H", "Identical twins are formed when", "one fertilised egg divides into two separate embryos", "two eggs are fertilised by two sperm", "one egg is fertilised by two sperm", "two eggs are fertilised by one sperm", "They have the same genes and sex."],
          ["H", "The testes of most mammals lie in the scrotum outside the abdomen because", "sperm production needs a temperature slightly below that of the body", "they need more oxygen", "they are too large for the abdomen", "the abdomen is too cold", "The scrotum keeps them cooler."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Reproduction in flowering plants",
        subtopics: ["Structure of a flower", "Pollination and its agents", "Fertilisation in flowering plants", "Asexual reproduction and artificial propagation"],
        objectives: ["Describe the parts of a flower and their functions", "Distinguish self- from cross-pollination and insect- from wind-pollinated flowers", "Describe fertilisation in flowering plants", "Describe vegetative propagation and its artificial methods"],
        lesson: {
          title: "Flowers, Pollination and Fertilisation",
          summary: "Describe the flower, pollination, fertilisation and vegetative propagation.",
          minutes: 40,
          notes: `## The flower
The reproductive organ of a flowering plant, borne on a **receptacle** at the end of a flower stalk (pedicel).
| Whorl | Parts | Function |
|---|---|---|
| **calyx** | **sepals** | protect the flower in bud |
| **corolla** | **petals** | often brightly coloured and scented to attract insects |
| **androecium** (male) | **stamens**: each has an **anther** on a **filament** | anthers produce **pollen grains** (male gametes) |
| **gynoecium / pistil** (female) | **carpels**: each has a **stigma**, **style** and **ovary** | the ovary contains **ovules** (with female gametes) |

### Terms
- **complete** flower — has all four whorls; **incomplete** — lacks one or more
- **bisexual (hermaphrodite)** — has both stamens and carpels: hibiscus, Pride of Barbados
- **unisexual** — has only one: maize, pawpaw
- **monoecious** plant — male and female flowers on the same plant (maize); **dioecious** — on separate plants (pawpaw)
- **regular (actinomorphic)** — can be cut into equal halves in several planes (hibiscus); **irregular (zygomorphic)** — in one plane only (Crotalaria, Pride of Barbados)
- **superior ovary** — above the other parts (hibiscus); **inferior** — below them (guava)

## Pollination
The **transfer of pollen grains from the anther to the stigma**.
- **self-pollination** — to the stigma of the **same flower** or another flower on the same plant
- **cross-pollination** — to the stigma of a flower on **another plant of the same species**; produces more variation and healthier offspring

### Devices favouring cross-pollination
unisexual flowers; dioecious plants; anthers and stigmas ripening at different times (**dichogamy**: protandry — anthers first; protogyny — stigmas first); self-sterility.

### Agents
| Insect-pollinated flowers | Wind-pollinated flowers |
|---|---|
| large, brightly coloured petals | small, dull, often green; petals absent or reduced |
| scented, with **nectar** | no scent or nectar |
| pollen sticky or rough, in small quantity | pollen light, smooth, in **large quantity** |
| stigma sticky, inside the flower | stigma large and **feathery**, hanging outside |
| anthers firmly attached inside | anthers hang loosely on long filaments |
| hibiscus, Crotalaria, Pride of Barbados | maize, grasses, rice |
Other agents: birds, bats, water.

## Fertilisation
1. a pollen grain on the stigma absorbs sugary fluid and grows a **pollen tube**
2. the tube grows down the style into the ovary and enters an ovule through the **micropyle**
3. it carries **two male nuclei**
4. one male nucleus fuses with the **egg cell** to form the **zygote**, which becomes the **embryo**
5. the other fuses with the two polar nuclei to form the **endosperm** (food store) — this is **double fertilisation**
After fertilisation: the **ovule becomes the seed**; the **ovary becomes the fruit**; the integuments become the seed coat (testa); petals, stamens and style wither.

## Asexual (vegetative) reproduction
New plants grow from **vegetative parts** — stems, roots or leaves — without seeds.
### Natural
| Organ | Examples |
|---|---|
| **rhizome** (underground stem) | ginger, canna lily |
| **stem tuber** | Irish potato, yam |
| **root tuber** | sweet potato, cassava |
| **bulb** | onion, garlic |
| **corm** | cocoyam |
| **runner / stolon** | sweet potato vine, strawberry, grasses |
| **sucker** | banana, plantain, pineapple |
| leaf buds | Bryophyllum |
### Artificial
- **cutting** — a piece of stem planted: cassava, sugar cane, hibiscus
- **layering** — a branch bent into the soil until it roots, then cut off
- **budding** — a bud of one plant inserted under the bark of another: citrus, rose
- **grafting** — a shoot (**scion**) joined to a rooted plant (**stock**) of a related kind: mango, citrus
- **tissue culture** — many plants raised from small pieces of tissue

### Advantages
offspring are identical to the parent, so good qualities are kept; faster maturity; no need for pollination; suits plants that produce few seeds.
### Disadvantages
no variation; diseases pass to all offspring; overcrowding and competition.`,
          examples: `**Example 1.** Define pollination. *Answer:* The **transfer of pollen grains from the anther to the stigma**.

**Example 2.** State two features of wind-pollinated flowers. *Answer:* **Feathery stigmas** and **large quantities of light pollen**.

**Example 3.** What does the ovary become after fertilisation? *Answer:* The **fruit**.`,
        },
        questions: [
          ["E", "The transfer of pollen grains from the anther to the stigma is", "pollination", "fertilisation", "germination", "dispersal", "Insects and wind are the common agents."],
          ["E", "The part of the flower that produces pollen grains is the", "anther", "stigma", "ovary", "sepal", "It is borne on a filament."],
          ["E", "The part of a flower that is usually brightly coloured to attract insects is the", "petal", "sepal", "style", "receptacle", "Petals together form the corolla."],
          ["M", "After fertilisation, the ovule develops into the", "seed", "fruit", "flower", "embryo sac", "The ovary becomes the fruit."],
          ["M", "A feature of wind-pollinated flowers is", "large feathery stigmas", "brightly coloured petals", "strong scent", "sticky pollen", "They catch pollen floating in the air."],
          ["M", "A flower that has both stamens and carpels is described as", "bisexual", "unisexual", "incomplete", "dioecious", "Hibiscus is an example."],
          ["M", "Ginger reproduces vegetatively by means of a", "rhizome", "bulb", "corm", "sucker", "It is an underground stem."],
          ["H", "The pollen tube enters the ovule through the", "micropyle", "style", "stigma", "funicle", "It is a small opening in the ovule coats."],
          ["H", "In double fertilisation, the second male nucleus fuses with the polar nuclei to form the", "endosperm", "zygote", "testa", "embryo", "It stores food for the embryo."],
          ["H", "In grafting, the shoot that is joined to the rooted plant is called the", "scion", "stock", "sucker", "runner", "The rooted plant is the stock."],
        ],
      },
      {
        week: 2,
        title: "Fruits, seeds, dispersal and germination",
        subtopics: ["Types of fruit", "Structure of seeds", "Dispersal of fruits and seeds", "Germination"],
        objectives: ["Classify fruits with examples", "Describe the structure of dicot and monocot seeds", "Describe the agents of dispersal and the adaptations of fruits and seeds", "State the conditions for and types of germination"],
        lesson: {
          title: "From Flower to Seedling",
          summary: "Classify fruits and describe seeds, dispersal and germination.",
          minutes: 40,
          notes: `## Fruits
A **fruit** is a **matured, fertilised ovary** containing one or more seeds. The fruit wall is the **pericarp** — epicarp (skin), mesocarp and endocarp. A fruit has **two scars** (stalk and style); a seed has one (the hilum).

### True and false fruits
- **true fruit** — develops from the ovary alone: mango, tomato
- **false fruit** — includes other floral parts such as the receptacle: **cashew**, apple, pineapple

### By origin
- **simple** — from one flower with one ovary: mango, bean
- **aggregate** — from one flower with many separate carpels: custard apple, strawberry
- **multiple (composite)** — from many flowers of an inflorescence: **pineapple**, breadfruit, fig

### By nature of the pericarp
**Fleshy fruits**
| Type | Features | Examples |
|---|---|---|
| **drupe** | fleshy mesocarp; **hard, stony endocarp** enclosing one seed | mango, coconut, oil palm |
| **berry** | whole pericarp fleshy; many seeds | tomato, pepper, guava, orange (hesperidium) |
| pome | false fruit from the receptacle | apple, pear |
**Dry dehiscent fruits** (split open to release seeds)
| Type | Features | Examples |
|---|---|---|
| **legume (pod)** | one carpel; splits along two sides | beans, Crotalaria, flamboyant |
| **capsule** | several carpels; splits along many lines | okra, cotton |
| follicle | splits along one side | Sterculia |
| schizocarp | breaks into one-seeded parts | Desmodium, castor oil |
**Dry indehiscent fruits** (do not split)
| Type | Features | Examples |
|---|---|---|
| **caryopsis** | pericarp fused with the seed coat | maize, rice, wheat |
| **achene** | one seed, free from the pericarp | sunflower |
| **cypsela** | with a pappus of hairs | Tridax |
| **nut** | hard, woody pericarp | cashew nut |
| samara | pericarp forms a wing | Combretum |

## Seeds
A **seed** is a matured, fertilised **ovule**.
### Bean (dicotyledon)
- **testa** — tough seed coat; **hilum** — scar; **micropyle** — tiny hole through which water enters
- **embryo**: **plumule** (young shoot), **radicle** (young root), two **cotyledons** that store food
- **non-endospermous**
### Maize grain (monocotyledon)
- actually a fruit (caryopsis), with fused pericarp and testa
- **endosperm** stores starch (endospermous)
- one cotyledon, the **scutellum**; plumule protected by the **coleoptile**, radicle by the **coleorhiza**

## Dispersal
The scattering of fruits and seeds away from the parent plant. It reduces **overcrowding and competition**, helps the species **colonise new areas**, and reduces the spread of disease.
| Agent | Adaptations | Examples |
|---|---|---|
| **wind** | light; wings, hairs or a parachute-like pappus | Tridax, cotton, Combretum, silk cotton |
| **animals** | hooks or sticky surfaces that cling to fur; or edible, coloured fruits whose seeds pass through undigested | Desmodium, Boerhavia; mango, guava, tomato |
| **water** | light, fibrous, waterproof; float | coconut, water lily |
| **explosive mechanism** | pods dry, twist and burst | beans, flamboyant, balsam, castor oil |

## Germination
The development of a seed into a **seedling**.
### Conditions
- **water** — softens the testa and activates enzymes
- **oxygen (air)** — for respiration
- **suitable temperature (warmth)** — for enzyme action
- **viable seeds** (alive and capable of growing)
Light is not usually needed.
### Experiment
Four tubes of seeds: (A) moist cotton wool, air, room temperature — germinates; (B) dry cotton wool — no water; (C) seeds under boiled, cooled water with a layer of oil — no oxygen; (D) moist, in a refrigerator — too cold. Only A germinates.

### Types
- **epigeal** — the cotyledons are carried **above the soil** by the lengthening hypocotyl: cowpea, groundnut, castor oil, melon
- **hypogeal** — the cotyledons **remain below the soil**; the epicotyl lengthens: maize, guinea corn, mango, broad bean

### What happens
The seed absorbs water and swells; enzymes change stored food into soluble forms; the **radicle emerges first** and grows downwards; the plumule grows upwards and forms the first leaves. Dry mass falls at first (food is respired), then rises once photosynthesis begins.

### Dormancy
A period when a viable seed fails to germinate even in good conditions — because of a hard testa, immature embryo or chemical inhibitors. It helps seeds survive unfavourable seasons.`,
          examples: `**Example 1.** Classify the mango fruit. *Answer:* A **drupe** — fleshy, with a hard, stony endocarp.

**Example 2.** State three conditions necessary for germination. *Answer:* **Water, oxygen and a suitable temperature**.

**Example 3.** Give an example of a seed with hypogeal germination. *Answer:* **Maize**.`,
        },
        questions: [
          ["E", "A fruit develops from the", "ovary", "ovule", "petal", "anther", "It encloses the seeds."],
          ["E", "The fruit of the coconut is dispersed mainly by", "water", "wind", "animals", "explosion", "Its fibrous mesocarp makes it float."],
          ["E", "The part of the embryo that develops into the root is the", "radicle", "plumule", "cotyledon", "testa", "It emerges first during germination."],
          ["M", "A fleshy fruit with a hard, stony endocarp enclosing the seed is a", "drupe", "berry", "legume", "capsule", "Mango and oil palm are examples."],
          ["M", "Which of these is a condition necessary for the germination of seeds?", "oxygen", "light", "fertiliser", "carbon(IV) oxide", "Seeds respire actively during germination."],
          ["M", "Fruits and seeds with wings or hairs are dispersed by", "wind", "water", "animals", "explosive mechanism", "They are light and float in air."],
          ["M", "Germination in which the cotyledons are carried above the soil is", "epigeal", "hypogeal", "dormant", "viviparous", "Cowpea shows this type."],
          ["H", "The cashew is described as a false fruit because", "the fleshy part develops from the receptacle and not the ovary", "it has no seed", "it is poisonous", "it develops from many flowers", "The true fruit is the nut."],
          ["H", "A maize grain is classified as a caryopsis because", "its pericarp is fused with the seed coat", "it splits open when ripe", "it has two cotyledons", "it has a fleshy mesocarp", "It is a dry indehiscent fruit."],
          ["H", "The dry mass of a germinating seed falls at first because", "stored food is used up in respiration", "the seed loses water", "the testa falls off", "photosynthesis is rapid", "It rises once the first leaves start making food."],
        ],
      },
      {
        week: 3,
        title: "Aquatic and terrestrial habitats",
        subtopics: ["Marine habitats", "Estuarine habitats", "Freshwater habitats", "Terrestrial habitats: marsh, forest, savanna and arid land"],
        objectives: ["Describe the zones and characteristics of marine habitats", "Describe estuarine habitats and the adaptations of their organisms", "Describe freshwater habitats and their organisms", "Describe the characteristics of terrestrial habitats and the adaptations of their organisms"],
        lesson: {
          title: "Where Organisms Live",
          summary: "Describe aquatic and terrestrial habitats and how organisms are adapted to them.",
          minutes: 40,
          notes: `## Aquatic habitats
Classified by **salinity**: marine (about 3.5% salt), estuarine (brackish, variable) and freshwater (very low salt).

## Marine habitats
The oceans and seas — the largest habitat on earth.
### Characteristics
high and fairly constant **salinity**; high density; waves, **tides** and currents; light penetrates only the upper layers; temperature and pressure change with depth; alkaline pH (about 8).
### Zones
- **splash (supratidal) zone** — wetted only by spray
- **intertidal (littoral) zone** — covered at high tide, exposed at low tide
- **sublittoral (neritic) zone** — shallow water over the continental shelf; well lit; rich in life
- **benthic zone** — the sea bed
- **pelagic zone** — open water: **euphotic** (lit), **bathyal** (dim) and **abyssal** (dark, cold, high pressure)
### Organisms and adaptations
- **plankton**: phytoplankton (diatoms) and zooplankton — small, with spines or oil droplets to float
- seaweeds (Sargassum, sea lettuce) — holdfasts for attachment, air bladders, slimy covering against drying
- periwinkles, barnacles, limpets, mussels — hard shells, strong attachment to rocks
- crabs — burrow; gills kept moist
- fish — streamlined, fins, gills, swim bladder; cartilaginous fish retain urea to balance the salt
- deep-sea fish — light-producing organs, large mouths

## Estuarine habitats
Where a river meets the sea: **deltas, lagoons, bays, mangrove swamps**.
### Characteristics
**fluctuating salinity** (brackish); turbid, muddy water; low oxygen in the mud; shallow; affected by tides; rich in nutrients.
### Organisms and adaptations
- **red mangrove (Rhizophora)** — **stilt (prop) roots** for support in soft mud; seeds germinate while still on the tree (**vivipary**)
- **white mangrove (Avicennia)** — **breathing roots (pneumatophores)**; glands excrete salt
- mudskipper — fins used for crawling; breathes air through moist skin
- crabs, oysters, lobsters, mosquito larvae, water birds, tilapia

## Freshwater habitats
- **lotic** (running water): rivers, streams, springs
- **lentic** (still water): ponds, lakes, puddles, dams
### Characteristics
low salinity; small and shallow; temperature varies; seasonal changes in volume; currents in running water; oxygen is highest near the surface.
### Organisms and adaptations
- water lily — broad floating leaves with stomata on the upper surface; long flexible stalks; **air spaces** for buoyancy
- water lettuce (Pistia), water hyacinth — floating, with hairy roots or swollen stalks
- Spirogyra, hornwort (Ceratophyllum) — submerged, finely divided leaves
- pond skater — walks on the surface film
- tilapia, catfish — gills, fins, lateral line
- tadpoles, water beetles, dragonfly nymphs, mosquito larvae (breathing tubes), water snails, Hydra
- freshwater protozoa — contractile vacuoles remove excess water

## Terrestrial habitats
### Marsh
Low, **waterlogged** land; soft, wet, poorly aerated soil; high humidity; decaying matter with a foul smell. Plants: sedges, raffia palm, water lettuce, algae. Animals: frogs, toads, mudfish, crabs, snails, snakes, birds.

### Rainforest
Heavy rainfall (over 1500 mm) through most of the year; high temperature and humidity; evergreen; rich in species; trees in **layers (strata)**:
- emergent layer (over 40 m) — iroko, obeche, mahogany
- upper and middle canopy
- shrub layer and ground layer (dim light; few plants)
Trees have **buttress roots**, thin bark and broad leaves with **drip tips**. **Climbers (lianas)** and **epiphytes** reach for light. Animals are mostly **arboreal**: monkeys, squirrels, birds, tree frogs, snakes, chameleons.

### Savanna (grassland)
Marked wet and dry seasons; grasses dominant, with scattered trees; frequent bush fires. Trees (baobab, shea butter, acacia, locust bean) have **thick, fire-resistant bark**, deep roots, small leaves, and shed leaves in the dry season. Grasses survive by underground stems. Animals: antelopes, zebras, lions, grasscutters, rodents, snakes, lizards, termites — many are fast runners, burrowers or camouflaged.

### Arid lands (deserts)
Very low rainfall (under 250 mm); hot days, cold nights; sandy or rocky soil; strong winds. Plants (**xerophytes**: cactus, date palm) have leaves reduced to **spines**, thick cuticle, sunken stomata, **succulent stems** storing water and very long roots. Animals: the **camel** (stores fat in the hump, tolerates dehydration, closable nostrils, broad feet), desert rats (nocturnal, burrow, produce concentrated urine), lizards, scorpions.`,
          examples: `**Example 1.** What is the main characteristic of an estuarine habitat? *Answer:* **Fluctuating salinity** — brackish water.

**Example 2.** How is the white mangrove adapted to its muddy habitat? *Answer:* It has **breathing roots (pneumatophores)** that take in air.

**Example 3.** State two adaptations of desert plants. *Answer:* **Leaves reduced to spines** and **succulent stems that store water**.`,
        },
        questions: [
          ["E", "A habitat with water of high and fairly constant salinity is", "marine", "freshwater", "estuarine", "marsh", "Oceans and seas are examples."],
          ["E", "Plants adapted to very dry conditions are called", "xerophytes", "hydrophytes", "epiphytes", "mesophytes", "The cactus is an example."],
          ["E", "Animals that live in trees are described as", "arboreal", "aquatic", "nocturnal", "burrowing", "Monkeys and squirrels are examples."],
          ["M", "The water of an estuary is described as", "brackish", "fresh", "pure", "stagnant", "Its salinity changes with the tides and river flow."],
          ["M", "The breathing roots of the white mangrove are called", "pneumatophores", "buttress roots", "stilt roots", "rhizoids", "They grow upwards out of the mud."],
          ["M", "Trees of the tropical rainforest often have", "buttress roots", "leaves reduced to spines", "thick fire-resistant bark", "succulent stems", "They support the tall trunks in shallow soil."],
          ["M", "Savanna trees survive the annual bush fires because they have", "thick, corky bark", "thin, smooth bark", "drip tips", "breathing roots", "The bark protects the living tissues."],
          ["H", "The zone of the sea shore that is covered at high tide and exposed at low tide is the", "intertidal zone", "abyssal zone", "splash zone", "benthic zone", "Organisms there must resist drying and wave action."],
          ["H", "The water lily is adapted to its habitat by having", "air spaces in its tissues and stomata on the upper leaf surface", "leaves reduced to spines", "a thick waxy cuticle and sunken stomata", "deep tap roots", "These help it to float and exchange gases."],
          ["H", "Desert rodents conserve water by", "producing very concentrated urine and staying in burrows by day", "sweating heavily", "drinking sea water", "having thin skins", "They are active mainly at night."],
        ],
      },
      {
        week: 4,
        title: "Ecology of populations",
        subtopics: ["Population size, density and studies", "Factors affecting population", "Competition and ecological succession", "Overcrowding and food shortage"],
        objectives: ["Define population terms and describe methods of population study", "Explain the factors that affect population size", "Explain competition and ecological succession", "Describe the effects of overcrowding and food shortage and how populations are controlled"],
        lesson: {
          title: "Populations in Nature",
          summary: "Explain population studies, competition, succession and population control.",
          minutes: 40,
          notes: `## Population terms
- **population size** — the total number of individuals of a species in an area
- **population density** — the number per unit area: density = number of organisms ÷ area
- **frequency** — how often a species occurs in samples
- **percentage cover** — the proportion of ground a species covers
- **dominance** — the species with the greatest influence on the community
- **distribution** — how the individuals are spread: clumped, random or uniform

## Population studies
### Quadrat
A square frame (often 1 m²) thrown at random several times; the organisms in it are counted and averaged. Used for plants and slow-moving animals.
*Example:* if 10 throws of a 1 m² quadrat give 40 plants of a species, the density is 4 per m²; a field of 500 m² holds about 2000.
### Transect
A line (tape) stretched across a habitat; organisms touching it at intervals are recorded — shows how species change across an area.
### Capture–recapture
For mobile animals. A sample is caught, **marked** and released; later a second sample is caught.
**population ≈ (first sample × second sample) ÷ number of marked animals recaptured**
*Example:* 50 grasshoppers marked; second catch 40, of which 10 are marked: 50 × 40 ÷ 10 = **200**.

## Factors affecting population
A population increases through **births (natality)** and **immigration**; it decreases through **deaths (mortality)** and **emigration**.
- **density-dependent** factors act more strongly as density rises: food, space, disease, predators, competition
- **density-independent** factors act regardless of density: drought, flood, fire, temperature
### Abiotic factors
temperature, water, light, pH, salinity, space, mineral nutrients.
### Biotic factors
**competition**; **predation**; **parasitism** and disease; food supply; mortality and natality; dispersal.

### Population growth
In a new habitat a population grows slowly, then rapidly, then levels off at the **carrying capacity** — the largest population the environment can support — giving an S-shaped curve.

## Competition
The struggle among organisms for resources in **short supply** — food, water, light, space, mates.
- **intraspecific** — between members of the **same species**: maize seedlings sown too close
- **interspecific** — between **different species**: weeds and crops; lions and hyenas
The better-adapted survive; the weaker die, migrate or adapt. Two species with exactly the same niche cannot live together indefinitely.

## Ecological succession
The **gradual, orderly replacement** of one community by another over time, until a stable **climax community** is reached.
- **primary succession** — begins on a **bare** surface never before colonised: bare rock, new sand, cooled lava. **Pioneer organisms** (lichens, mosses) break down rock and add humus; then grasses, herbs, shrubs and finally trees
- **secondary succession** — begins where an existing community has been cleared: abandoned farmland, burnt forest. It is faster because soil is already present
In a pond: floating and submerged plants → silt accumulates → reeds and sedges → marsh → land plants.
During succession the number of species and the stability of the community increase.

## Overcrowding
Too many individuals for the available space and resources.
### Effects
competition; shortage of food and space; spread of disease; build-up of wastes; aggression and cannibalism; stunted growth; reduced reproduction; emigration; death.
### How organisms avoid it
dispersal of seeds and fruits; **territorial behaviour** (birds, lizards, fish); migration; swarming in bees and termites.

## Food shortage
Causes: drought, flood, pests, overpopulation, poor farming, war. Effects: competition, malnutrition, emigration, reduced reproduction, death — so the population falls.

## Balance in nature
Populations are kept in check by predators, disease, food supply and competition. **Biological control** uses natural enemies of a pest.
### Human population
Controlled by **family planning** (natural methods, barrier methods, pills, sterilisation), education and improved living standards. Rapid growth strains food, housing, schools, health services and the environment.`,
          examples: `**Example 1.** 30 snails are marked and released. Later 20 are caught, 5 of them marked. Estimate the population. *Solution:* 30 × 20 ÷ 5 = **120**.

**Example 2.** Distinguish intraspecific from interspecific competition. *Answer:* **Intraspecific** is within one species; **interspecific** is between different species.

**Example 3.** Name the pioneer organisms on bare rock. *Answer:* **Lichens** (followed by mosses).`,
        },
        questions: [
          ["E", "The number of organisms of a species per unit area is the population", "density", "size", "frequency", "dominance", "It is found by dividing the number by the area."],
          ["E", "A square frame used for sampling plants in a habitat is a", "quadrat", "transect", "pooter", "pitfall trap", "It is thrown at random several times."],
          ["E", "The struggle among organisms for resources in short supply is", "competition", "succession", "symbiosis", "migration", "Food, light and space are examples of such resources."],
          ["M", "Competition between members of the same species is described as", "intraspecific", "interspecific", "symbiotic", "parasitic", "Crowded maize seedlings show it."],
          ["M", "The first organisms to colonise bare rock are usually", "lichens", "grasses", "shrubs", "trees", "They are pioneer organisms."],
          ["M", "Which of the following increases the size of a population?", "immigration", "emigration", "mortality", "predation", "Individuals move in from elsewhere."],
          ["M", "The final stable community in an ecological succession is the", "climax community", "pioneer community", "secondary community", "transect", "It remains until disturbed."],
          ["H", "In a capture–recapture study, 50 insects were marked and released. Of 40 caught later, 10 were marked. The estimated population is", "200", "100", "400", "80", "50 × 40 ÷ 10. Answer: 200."],
          ["H", "Succession on abandoned farmland is faster than on bare rock because", "soil and seeds are already present", "there is more rainfall", "there are no animals", "rock is more fertile", "This is secondary succession."],
          ["H", "The largest population that an environment can support indefinitely is its", "carrying capacity", "population density", "climax", "biomass", "Growth levels off when it is reached."],
        ],
      },
      {
        week: 5,
        title: "Tolerance and adaptation of organisms",
        subtopics: ["Tolerance and limiting factors", "Structural adaptations for obtaining food", "Adaptations for protection and defence", "Adaptations for movement and to physical conditions"],
        objectives: ["Explain tolerance range and limiting factors", "Describe adaptations of organisms for obtaining food", "Describe adaptations for protection and defence", "Describe adaptations for movement and for surviving unfavourable conditions"],
        lesson: {
          title: "Fitting the Environment",
          summary: "Explain tolerance and describe how organisms are adapted for survival.",
          minutes: 40,
          notes: `## Tolerance
**Tolerance** is the ability of an organism to **withstand variations** in the factors of its environment — temperature, water, salinity, light, pH.
- every organism has a **range of tolerance** for each factor, with a **minimum**, an **optimum** (where it thrives best) and a **maximum**
- outside the range it cannot survive
- the **geographic range** of a species is the area where conditions fall within its tolerance
- organisms with a wide range are widely distributed; those with a narrow range are restricted (a freshwater fish dies in sea water)

### Limiting factors
A factor that is **in short supply or in excess**, and so restricts the growth or distribution of organisms, is a **limiting factor** — water in the desert, light on the forest floor, oxygen in polluted water, salinity in an estuary.

## Adaptation
An **adaptation** is any feature of structure, function or behaviour that helps an organism **survive and reproduce** in its habitat.

## Adaptations for obtaining food
- **mouthparts of insects**: biting and chewing (grasshopper); piercing and sucking (mosquito, aphid); sucking (butterfly); sponging (housefly)
- **beaks of birds**: short and strong for seeds; hooked for flesh; long and thin for nectar; broad and flat for sieving
- **feet of birds**: talons for grasping (hawk); webbed for swimming (duck); perching feet
- **teeth of mammals**: carnassials in carnivores; ridged molars and a diastema in herbivores
- **insectivorous plants** have traps; **parasitic plants** such as dodder and mistletoe have sucking roots (haustoria)
- **climbing plants** use tendrils, hooks or twining stems to reach light

## Adaptations for protection and defence
- **shells and scales**: snail, tortoise, pangolin
- **spines and thorns**: porcupine, hedgehog; cactus, acacia
- **poison and stings**: snakes, scorpions, bees; stinging hairs and bitter or poisonous sap in plants
- **camouflage (cryptic coloration)**: the body blends with the background — green grasshopper, stick insect, **chameleon** (changes colour)
- **countershading**: dark above, pale below — many fish
- **warning coloration**: bright colours advertise that an animal is distasteful or dangerous — wasps, some caterpillars
- **mimicry**: a harmless species resembles a harmful one
- **autotomy**: the wall gecko and lizard shed the tail to escape
- **offensive smell**: some bugs; speed and alertness in antelopes; living in herds

## Adaptations for movement
- **fish**: streamlined body, fins, swim bladder, slimy scales
- **birds**: wings and feathers, hollow bones, streamlined shape, strong breast muscles
- **toad**: long, muscular hind limbs for hopping; webbed feet for swimming
- **monkey**: grasping hands, long tail for balance

## Adaptations to physical conditions
### To drought and heat
- plants: leaves reduced to spines, thick cuticle, sunken stomata, water storage, deep roots, leaf fall
- animals: nocturnal habits, burrowing, concentrated urine, scales or waterproof cuticle
- **aestivation** — a period of inactivity during hot, dry conditions: African lungfish, snails
### To cold
- thick fur, a layer of fat, migration
- **hibernation** — inactivity during cold periods
### To water
- hydrophytes: air spaces, poorly developed roots and supporting tissue, stomata on upper surfaces
- aquatic animals: gills, fins, webbed feet
### To life in soft mud or salty water
breathing roots, stilt roots, salt glands.

## Adaptation and survival
Organisms that are better adapted obtain more resources, escape enemies and leave more offspring. Over many generations this leads to change in populations.`,
          examples: `**Example 1.** What is a limiting factor? *Answer:* A factor **in short supply (or excess) that restricts** the growth or distribution of organisms.

**Example 2.** Give an example of camouflage. *Answer:* A **green grasshopper** among green grass.

**Example 3.** What is aestivation? *Answer:* A period of **dormancy during hot, dry conditions**, as in the lungfish.`,
        },
        questions: [
          ["E", "The ability of an organism to withstand changes in environmental factors is", "tolerance", "competition", "succession", "dominance", "Each organism has a range for every factor."],
          ["E", "The ability of the chameleon to change colour to match its surroundings is a form of", "camouflage", "mimicry", "migration", "hibernation", "It hides the animal from enemies and prey."],
          ["E", "A bird with webbed feet is adapted for", "swimming", "grasping prey", "perching", "scratching the soil", "Ducks have such feet."],
          ["M", "A factor that restricts the distribution of organisms because it is in short supply is a", "limiting factor", "biotic factor", "climax factor", "density factor", "Water is one in deserts."],
          ["M", "The shedding of the tail by a lizard to escape from an enemy is called", "autotomy", "aestivation", "mimicry", "moulting", "A new tail grows later."],
          ["M", "The bright colours of wasps and some caterpillars are an example of", "warning coloration", "camouflage", "countershading", "courtship display", "They signal that the animal is dangerous or distasteful."],
          ["M", "The hooked beak of the hawk is an adaptation for", "tearing flesh", "cracking seeds", "sucking nectar", "sieving mud", "It is a bird of prey."],
          ["H", "A period of inactivity that enables the African lungfish to survive the dry season is", "aestivation", "hibernation", "migration", "metamorphosis", "It lies dormant in a mud cocoon."],
          ["H", "The condition under which an organism grows and reproduces best within its range of tolerance is the", "optimum", "minimum", "maximum", "limit", "Survival is poorer towards either extreme."],
          ["H", "A harmless insect that resembles a stinging wasp is protected by", "mimicry", "countershading", "autotomy", "aestivation", "Predators that avoid the wasp avoid it too."],
        ],
      },
    ],
  },
];
