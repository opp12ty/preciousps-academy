import type { TermPlan } from "../types";

/** JSS2 Basic Science — original Precious PS content following the national Basic Science and Technology structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The skeleton and movement",
        subtopics: ["Functions of the skeleton", "Main parts of the human skeleton", "Joints", "Muscles and movement"],
        objectives: ["State the functions of the skeleton", "Name the main bones of the human skeleton", "Describe types of joints with examples", "Explain how muscles work in pairs to cause movement"],
        lesson: {
          title: "Bones, Joints and Muscles",
          summary: "Describe how the skeleton, joints and muscles work together.",
          minutes: 45,
          notes: `## Functions of the skeleton
- **Support**: gives the body shape and holds it upright.
- **Protection**: skull protects the brain; ribs protect the heart and lungs; backbone protects the spinal cord.
- **Movement**: bones act as levers for muscles.
- **Production of blood cells** in the bone marrow.
- **Storage** of minerals such as calcium.

## Main bones
| Region | Bones |
|---|---|
| head | **skull** (cranium and jaw) |
| trunk | **backbone** (vertebral column), **ribs**, **sternum** (breastbone) |
| arms | **humerus**, radius, ulna |
| legs | **femur** (thigh bone — the longest bone), tibia, fibula |
| girdles | shoulder girdle (clavicle, scapula), hip girdle (pelvis) |
An adult has about **206 bones**.

## Joints
A **joint** is where two or more bones meet.
| Type | Movement | Example |
|---|---|---|
| **immovable (fixed)** | no movement | bones of the skull |
| **slightly movable** | little movement | between vertebrae |
| **ball-and-socket** | movement in all directions | shoulder, hip |
| **hinge** | movement in one plane (like a door) | elbow, knee |
| **gliding** | bones slide over each other | wrist, ankle |
Movable joints contain **synovial fluid**, which lubricates them; **cartilage** reduces friction; **ligaments** hold bones together.

## Muscles
Muscles are attached to bones by **tendons**. They work in **antagonistic pairs**: when one contracts, the other relaxes.
- To **bend** the arm: the **biceps** contracts; the triceps relaxes.
- To **straighten** the arm: the **triceps** contracts; the biceps relaxes.`,
          examples: `**Example 1.** Which bone protects the brain? *Answer:* the **skull**.

**Example 2.** What type of joint is the elbow? *Answer:* **hinge joint** — it moves in one plane.

**Example 3.** Which muscle contracts when you bend your arm? *Answer:* the **biceps**.`,
        },
        questions: [
          ["E", "Which part of the skeleton protects the brain?", "skull", "ribs", "femur", "pelvis", "The skull encloses the brain."],
          ["E", "The longest bone in the human body is the", "femur", "humerus", "tibia", "rib", "The thigh bone is the femur."],
          ["E", "The place where two bones meet is a", "joint", "muscle", "tendon", "nerve", "Joints connect bones."],
          ["M", "The ribs protect the", "heart and lungs", "brain", "stomach and kidneys only", "eyes", "The rib cage surrounds the chest organs."],
          ["M", "The shoulder is an example of a", "ball-and-socket joint", "hinge joint", "fixed joint", "gliding joint", "It allows movement in all directions."],
          ["M", "The knee is an example of a", "hinge joint", "ball-and-socket joint", "fixed joint", "pivot of the skull", "It moves in one plane like a door."],
          ["M", "Muscles are attached to bones by", "tendons", "ligaments", "cartilage", "synovial fluid", "Tendons join muscle to bone."],
          ["H", "When the arm is bent at the elbow,", "the biceps contracts and the triceps relaxes", "the triceps contracts and the biceps relaxes", "both muscles relax", "both muscles contract equally", "Antagonistic muscles work in opposite ways."],
          ["H", "The fluid that lubricates movable joints is", "synovial fluid", "saliva", "blood plasma", "bile", "It reduces friction in joints."],
          ["H", "Which function of the skeleton takes place in the bone marrow?", "production of blood cells", "digestion of food", "production of sweat", "exchange of gases", "Bone marrow makes blood cells."],
        ],
      },
      {
        week: 2,
        title: "The digestive system",
        subtopics: ["Meaning of digestion", "Organs of the digestive system", "Digestion in the mouth, stomach and small intestine", "Absorption and egestion"],
        objectives: ["Define digestion", "Name the organs of the alimentary canal in order", "Describe what happens to food in each part", "Explain absorption and egestion"],
        lesson: {
          title: "How Food Is Digested",
          summary: "Follow food through the digestive system from the mouth to egestion.",
          minutes: 45,
          notes: `## Meaning
**Digestion** is the breakdown of large, insoluble food molecules into small, soluble ones that can be absorbed into the blood.
- **Mechanical digestion**: chewing and churning break food into smaller pieces.
- **Chemical digestion**: **enzymes** break food down chemically.

## The alimentary canal (in order)
**mouth → oesophagus (gullet) → stomach → small intestine → large intestine → rectum → anus**
Helper organs: **salivary glands**, **liver** (makes bile), **gall bladder** (stores bile), **pancreas**.

## What happens where
| Part | What happens |
|---|---|
| **mouth** | teeth chew food; **saliva** moistens it; the enzyme **amylase (ptyalin)** starts digesting starch |
| **oesophagus** | food moves down by **peristalsis** (waves of muscle contraction) |
| **stomach** | churns food; **hydrochloric acid** kills germs; **pepsin** begins protein digestion |
| **small intestine** | **bile** breaks fats into droplets; enzymes from the pancreas and intestine complete digestion; **absorption** of digested food through **villi** into the blood |
| **large intestine** | **water** is absorbed |
| **rectum and anus** | undigested waste (faeces) is stored and removed — **egestion** |

## End products
starch → **glucose**; proteins → **amino acids**; fats → **fatty acids and glycerol**.`,
          examples: `**Example 1.** Where does the digestion of starch begin? *Answer:* in the **mouth**, by salivary amylase.

**Example 2.** What is the main function of the large intestine? *Answer:* **absorption of water**.

**Example 3.** What is the end product of starch digestion? *Answer:* **glucose**.`,
        },
        questions: [
          ["E", "The breakdown of food into small, soluble substances is", "digestion", "respiration", "excretion", "circulation", "Digestion prepares food for absorption."],
          ["E", "Digestion of starch begins in the", "mouth", "stomach", "large intestine", "rectum", "Saliva contains amylase."],
          ["E", "The tube that carries food from the mouth to the stomach is the", "oesophagus", "trachea", "rectum", "ureter", "The oesophagus is the gullet."],
          ["M", "Food moves along the alimentary canal by", "peristalsis", "diffusion only", "gravity only", "osmosis", "Waves of muscle contraction push food along."],
          ["M", "Hydrochloric acid in the stomach helps to", "kill germs in food", "digest starch", "absorb water", "make bile", "The acid destroys many microorganisms."],
          ["M", "Most absorption of digested food takes place in the", "small intestine", "stomach", "oesophagus", "mouth", "Villi absorb nutrients."],
          ["M", "The main function of the large intestine is to", "absorb water", "digest proteins", "produce saliva", "store bile", "Water is absorbed from the waste."],
          ["H", "Bile, which breaks fats into small droplets, is produced by the", "liver", "stomach", "pancreas", "salivary glands", "It is stored in the gall bladder."],
          ["H", "The end products of protein digestion are", "amino acids", "glucose", "fatty acids", "glycerol only", "Proteins are built from amino acids."],
          ["H", "The removal of undigested food from the body is called", "egestion", "excretion", "ingestion", "absorption", "Egestion expels faeces."],
        ],
      },
      {
        week: 3,
        title: "The respiratory system",
        subtopics: ["Organs of the respiratory system", "Breathing in and out", "Gaseous exchange in the lungs", "Care of the respiratory system"],
        objectives: ["Name the organs of the respiratory system", "Describe inhalation and exhalation", "Explain gaseous exchange in the alveoli", "State ways of keeping the respiratory system healthy"],
        lesson: {
          title: "Breathing and Gas Exchange",
          summary: "Explain how air enters the lungs and how oxygen reaches the blood.",
          minutes: 40,
          notes: `## Organs
**nose → pharynx → larynx (voice box) → trachea (windpipe) → bronchi → bronchioles → alveoli (air sacs)** in the **lungs**.
- Hairs and mucus in the nose trap dust and germs.
- The trachea is kept open by rings of **cartilage**.
- The **diaphragm** (a sheet of muscle) and **intercostal muscles** (between the ribs) help breathing.

## Breathing
| Inhalation (breathing in) | Exhalation (breathing out) |
|---|---|
| intercostal muscles contract; ribs move **up and out** | intercostal muscles relax; ribs move **down and in** |
| diaphragm contracts and **flattens** | diaphragm relaxes and **domes up** |
| chest volume increases; air rushes **in** | chest volume decreases; air is pushed **out** |

## Gaseous exchange
In the **alveoli**, **oxygen** diffuses into the blood and **carbon dioxide** diffuses out. The alveoli are thin-walled, moist and surrounded by many capillaries.
| Gas | Inhaled air | Exhaled air |
|---|---|---|
| oxygen | about 21% | about 16% |
| carbon dioxide | about 0.04% | about 4% |
Exhaled air also contains more water vapour and is warmer.

## Care
Avoid smoking and smoky places; do not run generators indoors; exercise regularly; cover your mouth when coughing.`,
          examples: `**Example 1.** Where does gaseous exchange take place? *Answer:* in the **alveoli** of the lungs.

**Example 2.** What happens to the diaphragm during inhalation? *Answer:* It **contracts and flattens**.

**Example 3.** Which gas is more abundant in exhaled than inhaled air? *Answer:* **carbon dioxide**.`,
        },
        questions: [
          ["E", "The main organs of breathing are the", "lungs", "kidneys", "liver", "intestines", "Gas exchange happens in the lungs."],
          ["E", "The windpipe is also called the", "trachea", "oesophagus", "ureter", "aorta", "The trachea carries air."],
          ["E", "The gas taken in and used by the body is", "oxygen", "carbon dioxide", "nitrogen only", "hydrogen", "Cells need oxygen for respiration."],
          ["M", "Gaseous exchange takes place in the", "alveoli", "trachea", "larynx", "nose", "Alveoli are the air sacs."],
          ["M", "During inhalation, the diaphragm", "contracts and flattens", "relaxes and domes up", "stays still", "moves into the neck", "This enlarges the chest cavity."],
          ["M", "Hairs and mucus in the nose help to", "trap dust and germs", "digest food", "produce sound", "exchange gases", "They filter the air."],
          ["M", "The voice box is the", "larynx", "pharynx", "bronchus", "diaphragm", "The larynx produces sound."],
          ["H", "Compared with inhaled air, exhaled air contains", "more carbon dioxide", "more oxygen", "less water vapour", "no nitrogen", "Carbon dioxide is released from cells."],
          ["H", "During exhalation, the ribs move", "down and in", "up and out", "forward only", "they do not move", "This reduces chest volume."],
          ["H", "Which feature makes alveoli efficient for gas exchange?", "thin, moist walls with many capillaries", "thick walls", "few blood vessels", "a dry lining", "These features speed up diffusion."],
        ],
      },
      {
        week: 4,
        title: "The circulatory system",
        subtopics: ["The heart", "Blood vessels", "Composition of blood", "Care of the circulatory system"],
        objectives: ["Describe the structure and function of the heart", "Distinguish arteries, veins and capillaries", "State the components and functions of blood", "Explain ways of keeping the heart healthy"],
        lesson: {
          title: "The Heart and Blood",
          summary: "Explain how the heart pumps blood through vessels around the body.",
          minutes: 45,
          notes: `## The heart
A muscular organ that **pumps blood** round the body. It has **four chambers**:
- **right atrium** and **right ventricle** — deal with **deoxygenated** blood;
- **left atrium** and **left ventricle** — deal with **oxygenated** blood.
**Valves** prevent backflow. The **left ventricle** has the thickest wall because it pumps blood to the whole body.

## Double circulation
- **Pulmonary circulation**: heart → lungs → heart (to pick up oxygen).
- **Systemic circulation**: heart → body → heart.

## Blood vessels
| Vessel | Carries blood | Features |
|---|---|---|
| **artery** | **away** from the heart (usually oxygenated) | thick, elastic walls; high pressure |
| **vein** | **towards** the heart (usually deoxygenated) | thinner walls; **valves**; low pressure |
| **capillary** | connects arteries and veins | walls one cell thick; exchange of materials |
Exceptions: the **pulmonary artery** carries deoxygenated blood; the **pulmonary vein** carries oxygenated blood.

## Blood
| Component | Function |
|---|---|
| **plasma** | liquid that carries food, wastes and hormones |
| **red blood cells** | contain **haemoglobin**; carry **oxygen** |
| **white blood cells** | fight **germs** |
| **platelets** | help blood to **clot** |

## Keeping the heart healthy
Regular exercise, a diet low in excess fat and salt, no smoking, adequate rest.`,
          examples: `**Example 1.** Which blood vessels carry blood away from the heart? *Answer:* **arteries**.

**Example 2.** Which blood cells carry oxygen? *Answer:* **red blood cells** (they contain haemoglobin).

**Example 3.** Why does the left ventricle have a thick wall? *Answer:* It pumps blood **to the whole body** at high pressure.`,
        },
        questions: [
          ["E", "The organ that pumps blood round the body is the", "heart", "lung", "liver", "kidney", "The heart is a muscular pump."],
          ["E", "How many chambers does the human heart have?", "4", "2", "3", "6", "Two atria and two ventricles."],
          ["E", "Blood vessels that carry blood away from the heart are", "arteries", "veins", "capillaries", "lymph vessels", "Arteries carry blood from the heart."],
          ["M", "Which blood cells carry oxygen?", "red blood cells", "white blood cells", "platelets", "plasma cells", "Haemoglobin binds oxygen."],
          ["M", "Which blood component helps blood to clot?", "platelets", "red blood cells", "plasma water", "haemoglobin", "Platelets start clotting."],
          ["M", "White blood cells help the body to", "fight germs", "carry oxygen", "clot blood", "digest food", "They defend against infection."],
          ["M", "Veins differ from arteries because veins have", "valves and thinner walls", "thicker walls", "higher pressure", "no blood", "Valves prevent backflow in veins."],
          ["H", "The chamber of the heart with the thickest wall is the", "left ventricle", "right atrium", "left atrium", "right ventricle", "It pumps blood to the whole body."],
          ["H", "Which blood vessel carries deoxygenated blood from the heart to the lungs?", "pulmonary artery", "pulmonary vein", "aorta", "vena cava from the head", "It is the exception among arteries."],
          ["H", "Exchange of materials between blood and body cells takes place through", "capillaries", "arteries", "veins", "the heart valves", "Capillary walls are one cell thick."],
        ],
      },
      {
        week: 5,
        title: "The excretory system",
        subtopics: ["Meaning of excretion", "Excretory organs and their products", "The kidneys and urine formation", "Care of excretory organs"],
        objectives: ["Define excretion and distinguish it from egestion", "Name the excretory organs and their products", "Describe the role of the kidneys", "State ways of caring for the excretory organs"],
        lesson: {
          title: "Removing Wastes from the Body",
          summary: "Identify the organs that remove metabolic wastes and how they work.",
          minutes: 40,
          notes: `## Meaning
**Excretion** is the removal of **waste products of metabolism** (chemical reactions in cells) from the body.
**Egestion** is different: it is the removal of **undigested food** (faeces), which was never absorbed into cells.

## Excretory organs
| Organ | Waste removed |
|---|---|
| **kidneys** | urea, excess water and salts — as **urine** |
| **lungs** | carbon dioxide and water vapour |
| **skin** | water, salts and a little urea — as **sweat** |
| **liver** | bile pigments (from old red blood cells); forms urea |

## The urinary system
**kidneys → ureters → bladder → urethra**
- The **kidneys** filter the blood, removing urea, excess water and salts.
- The **ureters** carry urine to the **bladder**, where it is stored.
- Urine leaves the body through the **urethra**.
The kidneys also help keep the body's **water balance**.

## Care of the excretory organs
- Drink enough clean water.
- Avoid excess salt and unprescribed drugs (which can damage kidneys and liver).
- Avoid alcohol and smoking.
- Bathe regularly so sweat pores stay clean.`,
          examples: `**Example 1.** Which organ removes carbon dioxide? *Answer:* the **lungs**.

**Example 2.** Why is removing faeces not called excretion? *Answer:* Faeces are **undigested food**, not products of cell metabolism — that is **egestion**.

**Example 3.** Where is urine stored? *Answer:* in the **bladder**.`,
        },
        questions: [
          ["E", "The removal of metabolic wastes from the body is", "excretion", "egestion", "digestion", "ingestion", "Excretion removes wastes made by cells."],
          ["E", "The kidneys remove wastes in the form of", "urine", "sweat", "carbon dioxide gas", "bile", "Kidneys produce urine."],
          ["E", "Sweat is produced by the", "skin", "kidney", "lung", "heart", "Sweat glands are in the skin."],
          ["M", "The lungs excrete", "carbon dioxide and water vapour", "urea and salts", "bile pigments", "faeces", "These are products of respiration."],
          ["M", "Urine is stored in the", "bladder", "kidney", "ureter", "liver", "The bladder holds urine."],
          ["M", "The tubes that carry urine from the kidneys to the bladder are the", "ureters", "urethra", "arteries", "bronchi", "There is one ureter from each kidney."],
          ["M", "Urea is mainly removed from the body by the", "kidneys", "lungs", "stomach", "heart", "Urea is filtered from blood into urine."],
          ["H", "The removal of faeces is called egestion, not excretion, because faeces", "are undigested food, not products of cell metabolism", "contain urea", "come from the lungs", "are made in the kidneys", "Faeces never entered body cells."],
          ["H", "Which organ breaks down old red blood cells and produces bile pigments?", "liver", "kidney", "skin", "bladder", "The liver processes haemoglobin wastes."],
          ["H", "Which habit can damage the kidneys?", "taking unprescribed drugs regularly", "drinking enough water", "bathing regularly", "eating vegetables", "Many drugs strain the kidneys."],
        ],
      },
      {
        week: 6,
        title: "Puberty and personal care",
        subtopics: ["Meaning of puberty", "Changes in boys and girls", "Menstruation and personal hygiene", "Making responsible choices"],
        objectives: ["Explain the meaning of puberty", "Describe physical changes in boys and girls during puberty", "Explain menstruation and menstrual hygiene", "Discuss responsible behaviour during adolescence"],
        lesson: {
          title: "Growing Up: Puberty",
          summary: "Understand the changes of puberty and how to manage them responsibly.",
          minutes: 40,
          notes: `## Meaning
**Puberty** is the stage when a child's body begins to change into an adult's body and the reproductive organs mature. It usually begins between **9 and 14 years**, often slightly earlier in girls. The changes are caused by **hormones**.

## Changes in both boys and girls
- growth spurt (rapid increase in height)
- hair growth in the armpits and pubic region
- increased sweating and body odour
- pimples (acne) may appear
- emotional changes: mood swings, new interests, desire for independence

## Changes in boys
- voice becomes deeper ("breaking" voice)
- shoulders broaden; muscles develop
- facial hair grows
- testes begin to produce sperm

## Changes in girls
- breasts develop
- hips widen
- **menstruation** begins

## Menstruation
A monthly flow of blood from the uterus lasting about **3–7 days**; the cycle is about **28 days** on average but varies. It shows that the reproductive system is maturing.
**Menstrual hygiene**: use clean sanitary pads, change them regularly (about every 4–6 hours), bathe at least twice daily, dispose of pads properly, and record dates.

## Responsible choices
Maintain good hygiene; eat well; exercise; seek information from parents, teachers and health workers; say **no** to peer pressure and sexual activity; respect others' bodies and privacy.`,
          examples: `**Example 1.** What causes the changes of puberty? *Answer:* **hormones**.

**Example 2.** Name one change that occurs only in boys. *Answer:* **deepening of the voice** (or facial hair).

**Example 3.** Why should sanitary pads be changed regularly? *Answer:* To prevent **infection and odour**.`,
        },
        questions: [
          ["E", "The stage when a child's body changes into an adult's body is", "puberty", "infancy", "old age", "germination", "Puberty marks sexual maturation."],
          ["E", "The changes of puberty are caused by", "hormones", "vitamins", "germs", "bones", "Hormones trigger body changes."],
          ["E", "Which change occurs in both boys and girls during puberty?", "growth of hair in the armpits", "breaking of the voice", "development of breasts", "growth of a beard", "Both sexes develop underarm hair."],
          ["M", "Deepening of the voice is a puberty change in", "boys", "girls", "both equally", "neither", "The larynx enlarges in boys."],
          ["M", "Menstruation is a sign of puberty in", "girls", "boys", "infants", "adult men", "It indicates the maturing reproductive system in girls."],
          ["M", "About how long does a menstrual cycle last on average?", "28 days", "7 days", "3 months", "1 year", "The average cycle is about 28 days."],
          ["M", "Increased sweating during puberty makes it important to", "bathe regularly", "stop drinking water", "avoid exercise", "wear the same clothes daily", "Regular bathing prevents body odour."],
          ["H", "Why should sanitary pads be changed regularly?", "to prevent infection and odour", "to make the period shorter", "to increase blood flow", "to stop puberty", "Hygiene prevents infection."],
          ["H", "Which is a responsible choice for an adolescent?", "seeking accurate information from parents and health workers", "giving in to peer pressure", "ignoring personal hygiene", "sharing personal items like razors", "Accurate guidance helps safe development."],
          ["H", "The rapid increase in height during puberty is called the", "growth spurt", "menstrual cycle", "adolescent crisis", "germination stage", "Many adolescents grow quickly."],
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
        title: "Atoms, elements and chemical symbols",
        subtopics: ["The atom", "Particles in the atom", "Atomic number and mass number", "Symbols of the first twenty elements"],
        objectives: ["Describe the atom as the smallest particle of an element", "Name the particles in an atom and their charges", "Define atomic number and mass number", "Write the symbols of the first twenty elements"],
        lesson: {
          title: "Inside the Atom",
          summary: "Describe atomic structure and learn the symbols of the first twenty elements.",
          minutes: 45,
          notes: `## The atom
An **atom** is the smallest particle of an element that can take part in a chemical reaction.

## Particles of the atom
| Particle | Charge | Location |
|---|---|---|
| **proton** | positive (+) | nucleus |
| **neutron** | none (neutral) | nucleus |
| **electron** | negative (−) | shells around the nucleus |
An atom is **neutral** because it has equal numbers of protons and electrons.

## Atomic number and mass number
- **Atomic number** = number of **protons**.
- **Mass number** = number of **protons + neutrons**.
- Number of neutrons = mass number − atomic number.
*Sodium: atomic number 11, mass number 23 → 11 protons, 11 electrons, 12 neutrons.*

## The first twenty elements
| No. | Element | Symbol | No. | Element | Symbol |
|---|---|---|---|---|---|
| 1 | hydrogen | H | 11 | sodium | Na |
| 2 | helium | He | 12 | magnesium | Mg |
| 3 | lithium | Li | 13 | aluminium | Al |
| 4 | beryllium | Be | 14 | silicon | Si |
| 5 | boron | B | 15 | phosphorus | P |
| 6 | carbon | C | 16 | sulphur | S |
| 7 | nitrogen | N | 17 | chlorine | Cl |
| 8 | oxygen | O | 18 | argon | Ar |
| 9 | fluorine | F | 19 | potassium | K |
| 10 | neon | Ne | 20 | calcium | Ca |

## Metals and non-metals
Metals (Na, Mg, Al, K, Ca) are shiny, conduct heat and electricity. Non-metals (C, N, O, S, Cl) are usually dull and poor conductors.`,
          examples: `**Example 1.** An atom has atomic number 8 and mass number 16. How many neutrons does it have? *Answer:* $16 - 8 = 8$ neutrons.

**Example 2.** What is the symbol of potassium? *Answer:* **K**.

**Example 3.** Why is an atom electrically neutral? *Answer:* It has **equal numbers of protons and electrons**.`,
        },
        questions: [
          ["E", "The smallest particle of an element that can take part in a chemical reaction is", "an atom", "a cell", "a compound", "a mixture", "Atoms are the building blocks of elements."],
          ["E", "Which particle of the atom carries a negative charge?", "electron", "proton", "neutron", "nucleus", "Electrons are negatively charged."],
          ["E", "The symbol of calcium is", "Ca", "C", "Cl", "Cm", "Calcium uses the two-letter symbol Ca."],
          ["M", "The atomic number of an element is the number of", "protons", "neutrons", "protons plus neutrons", "shells", "Atomic number counts protons."],
          ["M", "An atom has atomic number 8 and mass number 16. How many neutrons does it have?", "8", "16", "24", "4", "Neutrons = mass number − atomic number = $16 - 8 = 8$."],
          ["M", "The symbol of potassium is", "K", "P", "Po", "Pt", "K comes from the Latin 'kalium'."],
          ["M", "Which particles are found in the nucleus?", "protons and neutrons", "electrons only", "electrons and protons", "neutrons and electrons", "The nucleus contains protons and neutrons."],
          ["H", "Sodium has atomic number 11 and mass number 23. How many neutrons does it have?", "12", "11", "23", "34", "$23 - 11 = 12$ neutrons."],
          ["H", "An atom is electrically neutral because it has", "equal numbers of protons and electrons", "more neutrons than protons", "no electrons", "equal numbers of neutrons and electrons", "Positive and negative charges balance."],
          ["H", "Which of these elements is a metal?", "magnesium", "sulphur", "nitrogen", "chlorine", "Magnesium is a shiny metal that conducts electricity."],
        ],
      },
      {
        week: 2,
        title: "Separation of mixtures",
        subtopics: ["Why mixtures are separated", "Filtration, decantation and evaporation", "Sieving, magnetism and hand-picking", "Distillation and chromatography"],
        objectives: ["Explain the need to separate mixtures", "Choose a suitable separation method for a given mixture", "Describe filtration, evaporation and distillation", "Relate separation methods to everyday activities"],
        lesson: {
          title: "Separating Mixtures",
          summary: "Choose and describe methods for separating mixtures.",
          minutes: 45,
          notes: `## Why separate?
To obtain **pure** substances, remove **impurities** (e.g. from drinking water) or recover useful materials.

## Methods
| Method | Used to separate | Example |
|---|---|---|
| **hand-picking** | large solid pieces | stones from beans |
| **sieving** | solids of different particle sizes | chaff and sand from garri |
| **winnowing** | light chaff from heavier grains using wind | chaff from rice |
| **magnetic separation** | magnetic from non-magnetic solids | iron filings from sand |
| **decantation** | liquid from a settled solid by pouring | water from sand |
| **filtration** | insoluble solid from a liquid | sand from water — sand is the **residue**, water is the **filtrate** |
| **evaporation** | dissolved solid from a solution (solid kept) | salt from salt water |
| **distillation** | liquid from a solution (liquid collected) | pure water from salt water |
| **chromatography** | different dyes/colours in a mixture | inks, food colours |
| **sublimation** | a subliming solid from others | camphor from sand |

## Distillation
The solution is heated; the liquid **evaporates**, the vapour is cooled in a **condenser**, and the pure liquid (**distillate**) is collected.

## Everyday examples
Sieving garri, winnowing rice, filtering water, decanting palm oil, evaporating sea water for salt.`,
          examples: `**Example 1.** How would you separate iron filings from sand? *Answer:* **magnetic separation** — a magnet attracts the iron.

**Example 2.** In filtering muddy water, what is the filtrate? *Answer:* the **clear water** that passes through the filter paper.

**Example 3.** How do you obtain pure water from salt water? *Answer:* **distillation**.`,
        },
        questions: [
          ["E", "Which method separates stones from beans?", "hand-picking", "distillation", "chromatography", "evaporation", "Large pieces can be picked out by hand."],
          ["E", "Which method separates iron filings from sand?", "magnetic separation", "evaporation", "filtration", "winnowing", "A magnet attracts iron."],
          ["E", "Which method separates chaff from rice using wind?", "winnowing", "distillation", "decantation", "sublimation", "Wind blows away the light chaff."],
          ["M", "In filtration, the solid left on the filter paper is called the", "residue", "filtrate", "distillate", "solvent", "The residue remains on the paper."],
          ["M", "Salt can be obtained from salt solution by", "evaporation", "filtration", "sieving", "magnetism", "Water evaporates, leaving salt."],
          ["M", "Pouring off a liquid from a settled solid is called", "decantation", "distillation", "sublimation", "chromatography", "Decantation leaves the solid behind."],
          ["M", "Which method separates the different dyes in black ink?", "chromatography", "filtration", "winnowing", "sieving", "Dyes travel at different rates on paper."],
          ["H", "Which method gives pure water from salt water?", "distillation", "filtration", "decantation", "sieving", "The water vapour is condensed and collected."],
          ["H", "In distillation, the vapour is cooled in the", "condenser", "filter funnel", "evaporating dish", "sieve", "The condenser turns vapour to liquid."],
          ["H", "Why can filtration NOT separate salt from salt water?", "Salt is dissolved and passes through the filter paper.", "Salt is magnetic.", "Salt is heavier than water.", "Salt evaporates first.", "Dissolved particles pass through filters."],
        ],
      },
      {
        week: 3,
        title: "Acids, bases and indicators",
        subtopics: ["Properties of acids", "Properties of bases and alkalis", "Indicators and the pH scale", "Neutralisation and everyday uses"],
        objectives: ["State the properties of acids and bases", "Use indicators to identify acids and alkalis", "Interpret the pH scale", "Explain neutralisation with everyday examples"],
        lesson: {
          title: "Acids, Bases and pH",
          summary: "Identify acids and bases using indicators and the pH scale.",
          minutes: 45,
          notes: `## Acids
- Taste **sour** (never taste laboratory chemicals!).
- Turn blue litmus **red**.
- React with metals such as zinc to give hydrogen gas.
- Have **pH less than 7**.
Examples: citric acid (lime, orange), ethanoic acid (vinegar), hydrochloric acid (stomach), lactic acid (sour milk).

## Bases and alkalis
- A **base** neutralises an acid. A base that dissolves in water is an **alkali**.
- Alkalis feel **soapy**, taste **bitter**, turn red litmus **blue**, and have **pH greater than 7**.
Examples: sodium hydroxide (caustic soda), calcium hydroxide (lime water), ammonia solution, soap solution, baking soda solution.

## Indicators
| Indicator | In acid | In alkali |
|---|---|---|
| litmus | red | blue |
| phenolphthalein | colourless | pink |
| methyl orange | red | yellow |
Natural indicators can be made from red cabbage or hibiscus flowers.

## pH scale (0–14)
- **0–6**: acidic (the lower, the stronger)
- **7**: neutral (pure water)
- **8–14**: alkaline (the higher, the stronger)

## Neutralisation
**acid + base → salt + water**
Examples: taking an **antacid** for indigestion; putting **lime** on acidic soil; applying **baking soda** to a bee sting.`,
          examples: `**Example 1.** A solution turns blue litmus red. Is it acidic or alkaline? *Answer:* **acidic**.

**Example 2.** A liquid has pH 7. What is it? *Answer:* **neutral** (e.g. pure water).

**Example 3.** Why do farmers add lime to some soils? *Answer:* To **neutralise soil acidity**.`,
        },
        questions: [
          ["E", "Acids turn blue litmus", "red", "blue", "green", "colourless", "Litmus is red in acids."],
          ["E", "Which of these contains an acid?", "lime juice", "soap solution", "caustic soda", "lime water", "Lime juice contains citric acid."],
          ["E", "The pH of pure water is", "7", "0", "14", "1", "Pure water is neutral."],
          ["M", "Alkalis turn red litmus", "blue", "red", "yellow", "black", "Litmus turns blue in alkalis."],
          ["M", "A solution with pH 2 is", "strongly acidic", "neutral", "weakly alkaline", "strongly alkaline", "Low pH means strong acid."],
          ["M", "Phenolphthalein in an alkali turns", "pink", "colourless", "red", "blue", "It is pink in alkalis."],
          ["M", "A base that dissolves in water is called", "an alkali", "an acid", "a salt", "an indicator", "Soluble bases are alkalis."],
          ["H", "Acid + base → salt + water is called", "neutralisation", "distillation", "evaporation", "respiration", "The acid and base cancel each other."],
          ["H", "People take antacids for indigestion because antacids", "neutralise excess stomach acid", "increase stomach acid", "digest proteins", "kill all bacteria", "They are mild bases."],
          ["H", "Farmers add lime to acidic soil in order to", "raise the soil pH by neutralising acidity", "make the soil more acidic", "kill all soil organisms", "add nitrogen", "Lime is a base."],
        ],
      },
      {
        week: 4,
        title: "Work, energy and power",
        subtopics: ["Meaning of work", "Calculating work done", "Power", "Relationship between work and energy"],
        objectives: ["Define work in the scientific sense", "Calculate work using force and distance", "Define and calculate power", "Explain that work done equals energy transferred"],
        lesson: {
          title: "Work, Energy and Power",
          summary: "Calculate work and power and relate them to energy.",
          minutes: 45,
          notes: `## Work
In science, **work** is done when a **force moves an object** in the direction of the force.
$$W = F \\times d$$
where $F$ is force in newtons (N) and $d$ is distance moved in metres (m). The unit of work is the **joule (J)**: $1\\text{ J} = 1\\text{ N m}$.
If the object does not move, **no work** is done, however tiring the effort (e.g. pushing a wall).

## Work and energy
When work is done, **energy is transferred**. Work done = energy used.
Lifting an object gives it **potential energy**: $\\text{P.E.} = mgh$ (with $g \\approx 10\\text{ N/kg}$).

## Power
**Power** is the **rate** of doing work:
$$P = \\frac{W}{t}$$
The unit of power is the **watt (W)**: $1\\text{ W} = 1\\text{ J/s}$. $1\\text{ kW} = 1000\\text{ W}$.
Two students lift the same load up the same stairs; the one who does it **faster** develops **more power**.`,
          examples: `**Example 1.** A force of 20 N moves a box 5 m. Find the work done. *Answer:* $W = 20 \\times 5 = 100\\text{ J}$.

**Example 2.** A boy does 600 J of work in 20 s. Find his power. *Answer:* $P = \\frac{600}{20} = 30\\text{ W}$.

**Example 3.** A 2 kg bag is lifted 3 m. Find the potential energy gained ($g = 10\\text{ N/kg}$). *Answer:* $mgh = 2 \\times 10 \\times 3 = 60\\text{ J}$.`,
        },
        questions: [
          ["E", "Work is done when", "a force moves an object", "a person thinks hard", "an object stays still", "light is switched on", "Movement in the direction of the force is needed."],
          ["E", "The unit of work is the", "joule", "watt", "newton", "metre", "Work is measured in joules."],
          ["E", "The unit of power is the", "watt", "joule", "newton", "kilogram", "Power is measured in watts."],
          ["M", "A force of 20 N moves a box 5 m. What is the work done?", "100 J", "25 J", "4 J", "15 J", "$W = 20 \\times 5 = 100\\text{ J}$."],
          ["M", "A boy does 600 J of work in 20 s. What is his power?", "30 W", "12 000 W", "580 W", "620 W", "$P = 600 \\div 20 = 30\\text{ W}$."],
          ["M", "A man pushes a wall hard but it does not move. The work done is", "zero", "very large", "equal to his weight", "1 J", "There is no movement, so no work is done."],
          ["M", "Power is the", "rate of doing work", "total work done", "force on an object", "distance moved", "Power is work done per unit time: $P = W/t$."],
          ["H", "A 2 kg bag is lifted 3 m ($g = 10\\text{ N/kg}$). What potential energy does it gain?", "60 J", "6 J", "15 J", "600 J", "$mgh = 2 \\times 10 \\times 3 = 60\\text{ J}$."],
          ["H", "How much work does a 1.5 kW machine do in 10 s?", "15 000 J", "150 J", "1500 J", "15 J", "$W = Pt = 1500 \\times 10 = 15\\,000\\text{ J}$."],
          ["H", "Two girls carry identical loads up the same stairs. Ada takes 10 s and Ngozi 20 s. Which statement is correct?", "Ada develops more power.", "Ngozi develops more power.", "They develop equal power.", "Neither does any work.", "Same work in less time means more power."],
        ],
      },
      {
        week: 5,
        title: "Heat and temperature",
        subtopics: ["Difference between heat and temperature", "Thermometers and temperature scales", "Methods of heat transfer", "Effects of heat on matter"],
        objectives: ["Distinguish heat from temperature", "Describe how a thermometer works and convert between Celsius and kelvin", "Explain conduction, convection and radiation", "Describe expansion and its applications"],
        lesson: {
          title: "Heat and Temperature",
          summary: "Measure temperature and explain how heat moves and affects matter.",
          minutes: 45,
          notes: `## Heat and temperature
- **Heat** is a form of **energy** that flows from a hotter body to a colder one. Unit: **joule (J)**.
- **Temperature** is the **degree of hotness or coldness** of a body. Units: **°C** or **kelvin (K)**.

## Thermometers
A **liquid-in-glass thermometer** contains **mercury** or **alcohol**, which **expands** when heated and rises in the tube.
- Clinical thermometer: measures body temperature (normal about **37 °C**); has a **constriction** so the reading stays until reset.
- Fixed points: ice melts at **0 °C**; water boils at **100 °C** (at normal pressure).
- Conversion: $T(\\text{K}) = \\theta(°\\text{C}) + 273$

## Heat transfer
| Method | How it works | Example |
|---|---|---|
| **conduction** | heat passes through a solid from particle to particle | a metal spoon in hot tea becomes hot |
| **convection** | heated fluid rises and cooler fluid sinks (currents) | boiling water; sea and land breezes |
| **radiation** | heat travels as waves; needs no medium | heat from the sun; warmth from a fire |
**Conductors**: metals (copper, aluminium). **Insulators**: wood, plastic, wool, air.
Dull black surfaces absorb and emit radiation best; shiny white surfaces reflect it.

## Expansion
Most substances **expand** when heated and **contract** when cooled.
Applications: gaps in railway lines; sagging overhead wires in hot weather; fitting metal tyres onto wheels; thermostats (bimetallic strips).`,
          examples: `**Example 1.** Convert 27 °C to kelvin. *Answer:* $27 + 273 = 300\\text{ K}$.

**Example 2.** Why are cooking pots made of metal with plastic handles? *Answer:* Metal **conducts** heat to the food; plastic **insulates** the hand.

**Example 3.** Why are gaps left between railway lines? *Answer:* To allow for **expansion** in hot weather.`,
        },
        questions: [
          ["E", "The degree of hotness or coldness of a body is its", "temperature", "heat", "mass", "power", "Temperature measures hotness."],
          ["E", "Normal human body temperature is about", "37 °C", "100 °C", "0 °C", "20 °C", "A healthy person is about 37 °C."],
          ["E", "Heat from the sun reaches the Earth by", "radiation", "conduction", "convection", "evaporation", "Radiation needs no medium."],
          ["M", "Convert 27 °C to kelvin.", "300 K", "246 K", "27 K", "327 K", "$27 + 273 = 300\\text{ K}$."],
          ["M", "A metal spoon in hot tea becomes hot by", "conduction", "radiation", "convection", "evaporation", "Heat passes through the solid metal."],
          ["M", "Heat transfer by rising warm fluid and sinking cool fluid is", "convection", "conduction", "radiation", "insulation", "Convection currents form in fluids."],
          ["M", "Which material is a good insulator?", "plastic", "copper", "aluminium", "iron", "Plastic resists heat flow."],
          ["H", "Gaps are left between railway lines to", "allow for expansion in hot weather", "save metal", "drain rain water", "make the train faster", "Heated rails expand."],
          ["H", "A clinical thermometer has a constriction so that", "the reading stays until it is reset", "it can measure 100 °C", "mercury can boil", "it reads faster", "The constriction stops mercury flowing back."],
          ["H", "Which surface absorbs radiant heat best?", "dull black", "shiny white", "polished silver", "white paint", "Dull black surfaces are the best absorbers."],
        ],
      },
      {
        week: 6,
        title: "Light: sources and behaviour",
        subtopics: ["Luminous and non-luminous objects", "Rectilinear propagation of light", "Shadows and eclipses", "Reflection of light"],
        objectives: ["Distinguish luminous from non-luminous objects", "Explain that light travels in straight lines", "Explain the formation of shadows and eclipses", "State the laws of reflection and describe plane mirror images"],
        lesson: {
          title: "Light and How It Travels",
          summary: "Explain light sources, straight-line travel, shadows and reflection.",
          minutes: 45,
          notes: `## Sources of light
- **Luminous** objects give out their own light: the sun, stars, candle flame, bulb, torch.
- **Non-luminous** objects are seen because they **reflect** light: the moon, a book, a mirror.

## Transparent, translucent and opaque
- **Transparent**: allows light through clearly (clear glass, water).
- **Translucent**: allows some light through, but not clearly (frosted glass, tracing paper).
- **Opaque**: allows no light through (wood, stone, a human body).

## Rectilinear propagation
Light travels in **straight lines**. Evidence: shadows; a pinhole camera; light beams through gaps.

## Shadows
A shadow forms when an **opaque** object blocks light. A small source gives a sharp shadow (**umbra**); a large source also gives a partial shadow (**penumbra**).

## Eclipses
- **Solar eclipse**: the **moon** comes between the sun and Earth; the moon's shadow falls on Earth.
- **Lunar eclipse**: the **Earth** comes between the sun and moon; Earth's shadow falls on the moon.

## Reflection
Laws of reflection:
1. The **angle of incidence equals the angle of reflection** ($i = r$).
2. The incident ray, reflected ray and **normal** lie in the same plane.
Image in a **plane mirror**: upright, same size, as far behind the mirror as the object is in front, **laterally inverted** (left and right reversed), and **virtual**.`,
          examples: `**Example 1.** Is the moon luminous? *Answer:* **No** — it reflects sunlight.

**Example 2.** A ray strikes a mirror at an angle of incidence of 35°. What is the angle of reflection? *Answer:* **35°**.

**Example 3.** Why does "AMBULANCE" appear reversed on the front of ambulances? *Answer:* So that drivers read it correctly in their mirrors — plane mirrors cause **lateral inversion**.`,
        },
        questions: [
          ["E", "Which of these is a luminous object?", "the sun", "the moon", "a mirror", "a book", "The sun gives out its own light."],
          ["E", "Light travels in", "straight lines", "circles", "zigzags only", "spirals", "This is rectilinear propagation."],
          ["E", "A material that allows no light to pass through is", "opaque", "transparent", "translucent", "luminous", "Opaque objects block light."],
          ["M", "Frosted glass is an example of a", "translucent material", "transparent material", "opaque material", "luminous material", "It lets light through unclearly."],
          ["M", "A ray strikes a mirror at an angle of incidence of 35°. The angle of reflection is", "35°", "55°", "70°", "90°", "By the first law of reflection, $i = r$."],
          ["M", "Shadows are formed because", "light travels in straight lines and is blocked by opaque objects", "light bends round objects", "objects give out darkness", "the sun moves", "Blocked light leaves a dark region."],
          ["M", "The image in a plane mirror is", "laterally inverted", "upside down", "larger than the object", "real", "Left and right appear reversed."],
          ["H", "A solar eclipse occurs when", "the moon comes between the sun and the Earth", "the Earth comes between the sun and the moon", "the sun comes between the Earth and the moon", "clouds cover the sun", "The moon's shadow falls on Earth."],
          ["H", "'AMBULANCE' is written in reverse on vehicles so that", "drivers ahead read it correctly in their mirrors", "it looks attractive", "pedestrians cannot read it", "it reflects more light", "Mirrors laterally invert the image."],
          ["H", "If an object is 2 m in front of a plane mirror, its image is", "2 m behind the mirror", "4 m behind the mirror", "1 m behind the mirror", "on the mirror surface", "Image distance equals object distance."],
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
        title: "Sound",
        subtopics: ["Production of sound", "Transmission of sound", "Speed of sound and echoes", "Pitch and loudness"],
        objectives: ["Explain that sound is produced by vibrations", "Show that sound needs a medium", "Explain echoes and calculate distance using echoes", "Distinguish pitch from loudness"],
        lesson: {
          title: "Sound and Hearing",
          summary: "Explain how sound is produced, travels and is described.",
          minutes: 40,
          notes: `## Production
Sound is produced by **vibrating** objects: a drum skin, guitar strings, vocal cords.

## Transmission
Sound needs a **medium** (solid, liquid or gas). It **cannot travel through a vacuum** — this is shown by a ringing bell in a jar from which air is pumped out: the sound fades.
Sound travels **fastest in solids**, slower in liquids and slowest in gases. In air it travels at about **340 m/s**.

## Echoes
An **echo** is a reflected sound. It is heard when sound bounces off a hard surface such as a cliff or tall building.
Distance to the reflector:
$$d = \\frac{v \\times t}{2}$$
(divided by 2 because the sound travels **there and back**).
Uses of echoes: echo-sounding (sonar) to measure sea depth; bats locating objects.

## Pitch and loudness
- **Pitch** depends on **frequency** (number of vibrations per second, in hertz). Short, tight strings give **high** pitch.
- **Loudness** depends on **amplitude** (size of vibration). Striking a drum harder gives a louder sound.

## Noise
Unwanted or unpleasant sound. Prolonged exposure to loud noise damages hearing.`,
          examples: `**Example 1.** Why can astronauts on the moon not hear each other directly? *Answer:* There is **no air** — sound cannot travel through a vacuum.

**Example 2.** A girl hears an echo from a cliff 2 s after clapping. If sound travels at 340 m/s, how far is the cliff? *Answer:* $d = \\frac{340 \\times 2}{2} = 340\\text{ m}$.

**Example 3.** How can you make a drum louder? *Answer:* Strike it **harder** (larger amplitude).`,
        },
        questions: [
          ["E", "Sound is produced by", "vibrating objects", "still objects", "light rays", "magnets only", "All sound comes from vibrations."],
          ["E", "Sound cannot travel through", "a vacuum", "water", "air", "steel", "Sound needs a medium."],
          ["E", "A reflected sound is called", "an echo", "a pitch", "an amplitude", "a vacuum", "Echoes are reflections of sound."],
          ["M", "Sound travels fastest through", "solids", "liquids", "gases", "a vacuum", "Particles in solids are closest together."],
          ["M", "The loudness of a sound depends on its", "amplitude", "frequency", "colour", "speed only", "Bigger vibrations are louder."],
          ["M", "The pitch of a sound depends on its", "frequency", "amplitude", "medium only", "distance", "Higher frequency gives higher pitch."],
          ["M", "The speed of sound in air is about", "340 m/s", "3 m/s", "3000 m/s", "300 000 km/s", "Sound travels at about 340 m/s in air."],
          ["H", "A girl hears an echo from a cliff 2 s after clapping. If sound travels at 340 m/s, how far away is the cliff?", "340 m", "680 m", "170 m", "1360 m", "$d = (340 \\times 2) \\div 2 = 340\\text{ m}$."],
          ["H", "Why must the total distance be divided by 2 in echo calculations?", "The sound travels to the reflector and back.", "Sound slows down by half.", "Echoes are always half as loud.", "Air absorbs half the sound.", "The measured time covers the round trip."],
          ["H", "Tightening a guitar string makes its sound", "higher in pitch", "lower in pitch", "silent", "louder only", "Tighter strings vibrate faster."],
        ],
      },
      {
        week: 2,
        title: "Magnetism",
        subtopics: ["Magnetic and non-magnetic materials", "Poles of a magnet and the laws of magnetism", "Magnetic fields", "Making magnets and uses of magnets"],
        objectives: ["Distinguish magnetic from non-magnetic materials", "State the laws of magnetism", "Describe the magnetic field around a bar magnet", "Describe methods of making magnets and state their uses"],
        lesson: {
          title: "Magnets and Magnetism",
          summary: "Explain magnetic poles, fields and how magnets are made and used.",
          minutes: 40,
          notes: `## Magnetic materials
- **Magnetic**: iron, steel, nickel, cobalt.
- **Non-magnetic**: wood, plastic, glass, copper, aluminium, gold, paper.

## Poles
Every magnet has a **north (N) pole** and a **south (S) pole**. The magnetic force is strongest at the poles.
A freely suspended magnet comes to rest pointing **north–south** — the principle of the **compass**.

## Laws of magnetism
**Like poles repel; unlike poles attract.**
N–N repel; S–S repel; N–S attract.
**Repulsion** is the sure test for a magnet (attraction also occurs between a magnet and unmagnetised iron).

## Magnetic field
The region around a magnet where its force acts. Shown with **iron filings** or a plotting compass. Field lines go **from N to S** outside the magnet and are closest where the field is strongest.

## Making magnets
1. **Stroking** (single touch) a steel bar with one pole of a magnet in one direction.
2. **Electrical method**: placing a steel bar in a coil carrying **direct current (d.c.)**.
Heating, hammering or dropping a magnet can **demagnetise** it.

## Uses
Compasses, loudspeakers, electric motors, generators, fridge door seals, cranes in scrapyards (electromagnets), magnetic cards.`,
          examples: `**Example 1.** Two north poles are brought together. What happens? *Answer:* They **repel**.

**Example 2.** Is a copper coin magnetic? *Answer:* **No**.

**Example 3.** Why is repulsion the sure test for a magnet? *Answer:* A magnet **attracts** ordinary iron too, but only two magnets can **repel** each other.`,
        },
        questions: [
          ["E", "Which material is attracted by a magnet?", "iron", "wood", "plastic", "copper", "Iron is magnetic."],
          ["E", "Like magnetic poles", "repel", "attract", "have no effect", "become demagnetised", "This is a law of magnetism."],
          ["E", "A freely suspended magnet comes to rest pointing", "north–south", "east–west", "up and down", "in any direction", "This is how a compass works."],
          ["M", "Which of these is NOT magnetic?", "aluminium", "nickel", "cobalt", "steel", "Aluminium is a non-magnetic metal."],
          ["M", "The region around a magnet where its force can be felt is its", "magnetic field", "pole", "domain wall", "shadow", "The field surrounds the magnet."],
          ["M", "The magnetic force of a bar magnet is strongest at", "the poles", "the middle", "one side only", "no particular place", "Iron filings cluster at the poles."],
          ["M", "Which can destroy the magnetism of a magnet?", "heating it strongly", "keeping it with a keeper", "storing it in pairs", "stroking it correctly", "Heat disorders the magnetic domains."],
          ["H", "The sure test to show that a bar is a magnet is", "repulsion", "attraction", "weight", "colour", "Only two magnets can repel."],
          ["H", "A steel bar placed inside a coil carrying direct current becomes", "a magnet", "a conductor of heat only", "non-magnetic", "a battery", "This is the electrical method of magnetisation."],
          ["H", "Outside a bar magnet, magnetic field lines run", "from north pole to south pole", "from south pole to north pole", "in circles around the middle only", "nowhere", "Field lines leave N and enter S."],
        ],
      },
      {
        week: 3,
        title: "Electricity: static and current",
        subtopics: ["Static electricity", "Conductors and insulators", "Simple electric circuits", "Circuit symbols"],
        objectives: ["Explain static electricity and charging by rubbing", "Distinguish conductors from insulators", "Set up and describe a simple circuit", "Draw circuit diagrams using standard symbols"],
        lesson: {
          title: "Static and Current Electricity",
          summary: "Explain static charge and build simple electric circuits.",
          minutes: 45,
          notes: `## Static electricity
When some materials are **rubbed**, electrons move from one to the other, leaving them **charged**.
- Like charges **repel**; unlike charges **attract**.
- A rubbed plastic comb attracts small pieces of paper.
- **Lightning** is a huge discharge of static electricity from clouds; **lightning conductors** protect tall buildings.

## Current electricity
**Electric current** is the flow of electric charge (electrons) through a conductor. It is measured in **amperes (A)** with an **ammeter**.
**Voltage** (potential difference) pushes the current; measured in **volts (V)** with a **voltmeter**.

## Conductors and insulators
- **Conductors** allow current to flow: copper, aluminium, iron, graphite, salty water.
- **Insulators** do not: plastic, rubber, dry wood, glass.
Wires are made of **copper** covered with **plastic** insulation.

## A simple circuit
A complete (closed) path is needed: **cell/battery → wire → switch → bulb → back to the cell**. If the circuit is broken (open), current stops.

## Circuit symbols
| Component | Function |
|---|---|
| cell / battery | source of electrical energy |
| switch | opens or closes the circuit |
| bulb (lamp) | converts electrical energy to light |
| resistor | limits current |
| ammeter (A) | measures current (connected in series) |
| voltmeter (V) | measures voltage (connected in parallel) |
| fuse | melts to break the circuit when current is too large |`,
          examples: `**Example 1.** Why are electric wires covered with plastic? *Answer:* Plastic is an **insulator**; it prevents shocks and short circuits.

**Example 2.** A bulb in a circuit does not light when the switch is open. Why? *Answer:* The circuit is **incomplete**, so no current flows.

**Example 3.** What unit is current measured in? *Answer:* **ampere (A)**.`,
        },
        questions: [
          ["E", "The flow of electric charge is called", "electric current", "static charge", "voltage", "resistance", "Current is moving charge."],
          ["E", "Which material is a good conductor of electricity?", "copper", "rubber", "plastic", "dry wood", "Copper is widely used in wires."],
          ["E", "Electric current is measured in", "amperes", "volts", "joules", "newtons", "The unit of current is the ampere."],
          ["M", "Electric wires are covered with plastic because plastic is", "an insulator", "a conductor", "magnetic", "a source of current", "Insulation prevents shocks."],
          ["M", "The instrument used to measure current is the", "ammeter", "voltmeter", "thermometer", "barometer", "An ammeter measures current."],
          ["M", "A rubbed plastic comb attracts bits of paper because of", "static electricity", "magnetism", "gravity", "current electricity", "Rubbing charges the comb."],
          ["M", "A bulb does not light when the switch is open because", "the circuit is incomplete", "the bulb is too bright", "the battery is too strong", "the wires are copper", "No complete path, no current."],
          ["H", "Lightning conductors on tall buildings", "carry lightning charge safely to the ground", "attract rain", "produce electricity for the building", "stop thunder", "They protect buildings from strikes."],
          ["H", "A fuse protects a circuit by", "melting when the current is too large", "increasing the voltage", "storing charge", "making the bulb brighter", "The melted fuse breaks the circuit."],
          ["H", "A voltmeter should be connected", "in parallel across a component", "in series with a component", "only to the switch", "without a circuit", "It measures the potential difference across the component."],
        ],
      },
      {
        week: 4,
        title: "Soil",
        subtopics: ["Formation of soil", "Components of soil", "Types of soil", "Properties and uses of soil"],
        objectives: ["Explain how soil is formed", "List the components of soil", "Compare sandy, clay and loamy soils", "Relate soil properties to their uses"],
        lesson: {
          title: "Understanding Soil",
          summary: "Describe soil formation, components and types.",
          minutes: 40,
          notes: `## Formation
Soil is formed by **weathering** — the breaking down of rocks by:
- **physical** agents: temperature changes, water, wind;
- **chemical** agents: rain water dissolving minerals;
- **biological** agents: plant roots, burrowing animals, microorganisms.
Decayed plant and animal remains (**humus**) are added over time.

## Components of soil
1. **mineral particles** (sand, silt, clay)
2. **humus** (organic matter)
3. **water**
4. **air**
5. **living organisms** (earthworms, bacteria, fungi)

## Types of soil
| Property | Sandy soil | Clay soil | Loamy soil |
|---|---|---|---|
| particle size | large | very small | mixture |
| drainage | very fast | poor (waterlogs) | good |
| water retention | poor | high | moderate |
| air spaces | many | few | adequate |
| fertility | low | moderate–high but hard to work | high |
| uses | building (sand), some crops like groundnut | pottery, bricks | **best for farming** |

## Simple experiments
- Shake soil in water and allow to settle: layers show gravel, sand, silt, clay, with humus floating.
- Heating soil shows it contains water (droplets) and burning humus reduces mass.`,
          examples: `**Example 1.** Which soil is best for growing crops? *Answer:* **loamy soil** — good drainage, water retention and fertility.

**Example 2.** Why does clay soil waterlog? *Answer:* Its **tiny particles** leave few air spaces, so water drains slowly.

**Example 3.** What is humus? *Answer:* **decayed plant and animal matter** in the soil.`,
        },
        questions: [
          ["E", "Soil is formed mainly by the", "weathering of rocks", "melting of ice", "burning of wood", "evaporation of water", "Rocks break down into soil particles."],
          ["E", "Decayed plant and animal matter in the soil is called", "humus", "clay", "gravel", "silt", "Humus enriches the soil."],
          ["E", "Which soil is best for farming?", "loamy soil", "sandy soil", "clay soil", "gravel", "Loam balances drainage and fertility."],
          ["M", "Which soil drains water fastest?", "sandy soil", "clay soil", "loamy soil", "humus", "Large particles leave big spaces."],
          ["M", "Clay soil is used for making", "pots and bricks", "glass lenses", "electric wires", "fertiliser", "Clay is plastic when wet."],
          ["M", "Which is NOT a component of soil?", "plastic", "air", "water", "mineral particles", "Plastic is a pollutant, not a natural component."],
          ["M", "Clay soil easily becomes waterlogged because it has", "very small particles and few air spaces", "large particles", "too much sand", "no water", "Water drains slowly through clay."],
          ["H", "When soil is shaken in water and allowed to settle, the material that floats on top is", "humus", "gravel", "sand", "clay", "Organic matter is light."],
          ["H", "Plant roots splitting rocks is an example of", "biological weathering", "chemical weathering by acids only", "erosion by wind", "deposition", "Living organisms break rocks."],
          ["H", "Heating a soil sample and observing droplets on a cool surface shows that soil contains", "water", "iron", "air only", "humus only", "The water evaporates and condenses."],
        ],
      },
      {
        week: 5,
        title: "Communicable diseases and their prevention",
        subtopics: ["Meaning of communicable diseases", "Causes and modes of transmission", "Common communicable diseases", "Prevention and control"],
        objectives: ["Define communicable diseases", "Identify causes and modes of transmission", "Describe common communicable diseases and their symptoms", "State measures for preventing and controlling them"],
        lesson: {
          title: "Diseases That Spread",
          summary: "Explain how communicable diseases spread and how to prevent them.",
          minutes: 45,
          notes: `## Meaning
A **communicable disease** is one that can be passed from one person (or animal) to another. It is caused by **pathogens** (germs): bacteria, viruses, fungi and protozoa.

## Modes of transmission
| Mode | Examples |
|---|---|
| air (droplets from coughs and sneezes) | tuberculosis, measles, influenza, COVID-19 |
| contaminated food and water | cholera, typhoid, dysentery |
| insect vectors | malaria (female *Anopheles* mosquito), yellow fever, sleeping sickness (tsetse fly) |
| direct contact | ringworm, scabies, Ebola (body fluids) |
| blood and sexual contact | HIV/AIDS, hepatitis B |

## Common diseases
| Disease | Cause | Key signs |
|---|---|---|
| malaria | protozoan (*Plasmodium*) | fever, headache, shivering |
| cholera | bacterium | severe watery diarrhoea, dehydration |
| typhoid | bacterium | prolonged fever, weakness |
| tuberculosis | bacterium | persistent cough, weight loss |
| measles | virus | rash, fever, red eyes |

## Prevention and control
- **Immunisation** (vaccination) — e.g. measles, polio, yellow fever, hepatitis B.
- Clean water; proper food hygiene; hand washing.
- Sleeping under **insecticide-treated nets**; clearing stagnant water and bushes.
- Proper refuse and sewage disposal.
- Isolating infected people; early treatment.
- **ORS** (oral rehydration solution) for diarrhoea to prevent dehydration.`,
          examples: `**Example 1.** How is malaria transmitted? *Answer:* by the bite of an infected **female Anopheles mosquito**.

**Example 2.** Name two diseases spread by contaminated water. *Answer:* **cholera and typhoid**.

**Example 3.** Why is ORS given to a person with cholera? *Answer:* To **replace lost water and salts** and prevent dehydration.`,
        },
        questions: [
          ["E", "A disease that can be passed from one person to another is", "communicable", "non-communicable", "hereditary only", "a deficiency disease", "Germs spread communicable diseases."],
          ["E", "Malaria is transmitted by the bite of the", "female Anopheles mosquito", "housefly", "tsetse fly", "cockroach", "The mosquito carries the parasite."],
          ["E", "Sleeping under insecticide-treated nets helps prevent", "malaria", "cholera", "tuberculosis", "ringworm", "Nets keep mosquitoes away."],
          ["M", "Cholera is spread mainly through", "contaminated water and food", "mosquito bites", "shaking hands only", "sunlight", "The bacteria live in dirty water."],
          ["M", "Germs that cause disease are called", "pathogens", "vectors", "antibodies", "nutrients", "Pathogens cause illness."],
          ["M", "Tuberculosis mainly spreads through", "droplets from coughing and sneezing", "mosquito bites", "contaminated soil", "eating vegetables", "It is an airborne disease."],
          ["M", "Giving vaccines to prevent diseases is called", "immunisation", "sterilisation", "pollution", "digestion", "Vaccines build immunity."],
          ["H", "ORS is given to a patient with severe diarrhoea to", "replace lost water and salts", "kill the mosquitoes", "stop coughing", "cure measles", "It prevents dehydration."],
          ["H", "An organism that carries a pathogen from one host to another, like the mosquito, is a", "vector", "producer", "decomposer", "vaccine", "Vectors transmit diseases."],
          ["H", "Which disease is caused by a virus?", "measles", "cholera", "typhoid", "tuberculosis", "Measles is viral; the others are bacterial."],
        ],
      },
      {
        week: 6,
        title: "Kinetic theory of matter",
        subtopics: ["Particles in constant motion", "Diffusion", "Brownian motion", "Effect of temperature on particle motion"],
        objectives: ["State the main ideas of the kinetic theory", "Explain diffusion with examples", "Describe Brownian motion as evidence for moving particles", "Relate temperature to the speed of particles"],
        lesson: {
          title: "Particles on the Move",
          summary: "Use the kinetic theory to explain diffusion and changes of state.",
          minutes: 40,
          notes: `## The kinetic theory
1. All matter is made of tiny **particles** (atoms or molecules).
2. The particles are in **constant, random motion**.
3. There are spaces between particles.
4. Particles move **faster** when heated (they gain **kinetic energy**).
5. Forces of attraction hold particles together — strongest in solids, weakest in gases.

## Diffusion
**Diffusion** is the spreading of particles from a region of **higher concentration** to a region of **lower concentration** until evenly spread.
- The smell of perfume or frying akara spreading through a house.
- A drop of ink spreading in water.
- Oxygen diffusing from the alveoli into the blood.
Diffusion is **fastest in gases**, slower in liquids and very slow in solids. It is **faster at higher temperatures**.

## Brownian motion
The **random, zigzag movement** of tiny visible particles (e.g. smoke or pollen) caused by collisions with invisible, moving air or water molecules. It is evidence that particles are constantly moving.

## Temperature and changes of state
Heating gives particles more energy:
- in melting, particles break free of fixed positions;
- in boiling, particles escape completely as gas.`,
          examples: `**Example 1.** Why can you smell akara frying from another room? *Answer:* Its particles **diffuse** through the air.

**Example 2.** Why does sugar dissolve faster in hot tea than in cold tea? *Answer:* Particles move **faster at higher temperature**.

**Example 3.** What does Brownian motion show? *Answer:* That particles of air or liquid are in **constant random motion**.`,
        },
        questions: [
          ["E", "According to the kinetic theory, particles of matter are", "in constant motion", "always still", "invisible and motionless", "only in solids", "Particles are always moving."],
          ["E", "The spreading of perfume smell through a room is due to", "diffusion", "condensation", "freezing", "reflection", "Perfume particles spread out."],
          ["E", "When particles are heated, they", "move faster", "stop moving", "become smaller", "disappear", "They gain kinetic energy."],
          ["M", "Diffusion is the movement of particles from", "higher to lower concentration", "lower to higher concentration", "cold to hot only", "liquids to solids only", "Particles spread until even."],
          ["M", "Diffusion is fastest in", "gases", "liquids", "solids", "all equally", "Gas particles move fastest and farthest."],
          ["M", "Sugar dissolves faster in hot tea because", "particles move faster at higher temperature", "hot tea contains more sugar", "cold tea has no particles", "sugar melts at room temperature", "Higher temperature speeds particle motion."],
          ["M", "The random zigzag movement of smoke particles seen under a microscope is", "Brownian motion", "diffusion", "condensation", "osmosis", "It results from molecular collisions."],
          ["H", "Brownian motion provides evidence that", "air molecules are in constant random motion", "smoke particles are alive", "air has no particles", "light causes motion", "Invisible molecules push the visible particles."],
          ["H", "Oxygen passes from the alveoli into the blood by", "diffusion", "evaporation", "filtration", "sublimation", "It moves down a concentration gradient."],
          ["H", "During melting, heat energy is used to", "free particles from their fixed positions", "make particles smaller", "destroy particles", "stop particle motion", "Particles gain enough energy to move past each other."],
        ],
      },
    ],
  },
];
