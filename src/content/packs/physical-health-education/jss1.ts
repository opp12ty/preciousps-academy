import type { TermPlan } from "../types";

/** JSS1 Physical and Health Education — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and scope of Physical and Health Education",
        subtopics: ["Meaning of Physical Education", "Meaning of Health Education", "Scope of PHE", "PHE as a school subject"],
        objectives: ["Define Physical Education and Health Education", "Identify the areas covered by PHE", "Explain why PHE is taught in schools", "Distinguish PHE from ordinary play"],
        lesson: {
          title: "What Physical and Health Education Covers",
          summary: "Define PHE and describe its scope.",
          minutes: 40,
          notes: `## Physical Education
**Physical Education (PE)** is the part of education that uses **planned physical activities** — games, sports, dance, gymnastics and exercises — to develop the **whole person**: body, mind and social skills.

## Health Education
**Health Education** is the process of giving people **knowledge, attitudes and practices** that help them keep themselves, their families and communities **healthy**.

## Physical and Health Education (PHE)
PHE combines both. It aims to produce individuals who are **physically fit, healthy, and socially responsible**.

## Scope of PHE
| Area | Examples |
|---|---|
| **athletics** | track events (races) and field events (jumps, throws) |
| **games and sports** | football, volleyball, basketball, handball, table tennis |
| **gymnastics** | rolls, balances, vaults |
| **dance and rhythmic activities** | traditional dances, aerobics |
| **aquatics** | swimming, water safety |
| **combat sports** | wrestling, judo, taekwondo, boxing |
| **recreation** | leisure activities, outdoor pursuits |
| **health education** | personal health, nutrition, diseases, drugs, first aid, safety |
| **human anatomy and physiology** | how the body works during exercise |

## PHE versus ordinary play
Ordinary play is **unplanned**; PHE is **planned, supervised and has clear objectives**. PHE teaches correct techniques, rules, safety and healthy living.`,
          examples: `**Example 1.** Is first aid part of PHE? *Answer:* **Yes** — it belongs to health education.

**Example 2.** Name two areas of PHE. *Answer:* **athletics** and **gymnastics**.

**Example 3.** How is PHE different from play? *Answer:* PHE is **planned and supervised** with clear objectives.`,
        },
        questions: [
          ["E", "Education that uses planned physical activities to develop the whole person is", "Physical Education", "Home Economics", "Business Studies", "Fine Art", "It develops body, mind and social skills."],
          ["E", "Giving people knowledge and habits for healthy living is", "Health Education", "Civic Education", "Agricultural Science", "Music", "It promotes health."],
          ["E", "Races and jumps belong to the area of", "athletics", "dance", "aquatics", "health education", "Athletics has track and field events."],
          ["M", "Swimming belongs to the area of", "aquatics", "gymnastics", "combat sports", "athletics", "Aquatics involves water activities."],
          ["M", "Rolls, balances and vaults belong to", "gymnastics", "aquatics", "athletics", "ball games", "They are gymnastic movements."],
          ["M", "Wrestling and judo are examples of", "combat sports", "aquatics", "field events", "rhythmic activities", "Players grapple or strike."],
          ["M", "PHE differs from ordinary play because it is", "planned and supervised", "unplanned", "without rules", "done only at home", "PHE has objectives."],
          ["H", "The study of how the body works during exercise is part of", "human anatomy and physiology", "consumer education", "home management", "textile design", "It explains body functions."],
          ["H", "Which topic belongs to the health education part of PHE?", "drug education", "high jump", "football passing", "cartwheel", "It teaches about drugs."],
          ["H", "The main aim of PHE is to produce individuals who are", "physically fit, healthy and socially responsible", "only good footballers", "unhealthy but skilful", "idle", "It develops the whole person."],
        ],
      },
      {
        week: 2,
        title: "Values of Physical and Health Education",
        subtopics: ["Physical values", "Mental and emotional values", "Social and moral values", "Economic values"],
        objectives: ["State the physical values of PHE", "Explain the mental and emotional values of PHE", "Describe the social and moral values of PHE", "Identify economic values of sports"],
        lesson: {
          title: "Why PHE Matters",
          summary: "Explain the benefits of PHE to individuals and society.",
          minutes: 40,
          notes: `## Physical values
- develops **strong muscles, bones and heart**
- improves **physical fitness** (endurance, strength, flexibility)
- helps control **body weight**
- improves **posture** and coordination
- reduces risk of diseases such as heart disease, diabetes and high blood pressure

## Mental and emotional values
- reduces **stress** and tension
- improves **concentration** and learning
- builds **self-confidence** and self-esteem
- teaches how to handle **winning and losing**
- provides enjoyment and relaxation

## Social and moral values
- teaches **teamwork** and cooperation
- promotes **friendship** and unity (sports bring people of different backgrounds together)
- develops **leadership** and followership
- teaches **discipline**, obedience to rules and **fair play (sportsmanship)**
- keeps youths away from **crime and drugs**

## Economic values
- careers: athletes, coaches, PE teachers, physiotherapists, referees, sports journalists
- sports businesses: sportswear, equipment, facilities
- sports tourism and events create jobs
- a healthy population is more productive

## National value
sports promote **national unity** and bring **honour** to the country through international competitions.`,
          examples: `**Example 1.** Give one physical value of PHE. *Answer:* It **strengthens the heart and muscles**.

**Example 2.** How does PHE promote moral values? *Answer:* It teaches **fair play and obedience to rules**.

**Example 3.** Name one career in sports. *Answer:* **coach** (or referee, physiotherapist).`,
        },
        questions: [
          ["E", "Regular physical activity helps to control", "body weight", "the weather", "school fees", "exam dates", "Exercise burns energy."],
          ["E", "Working together in a team game develops", "cooperation", "selfishness", "laziness", "cheating", "Teamwork requires cooperation."],
          ["E", "Obeying rules and respecting opponents is", "sportsmanship", "cheating", "violence", "doping", "Fair play is sportsmanship."],
          ["M", "Which is a mental value of PHE?", "reducing stress", "breaking bones", "increasing crime", "encouraging drugs", "Exercise relaxes the mind."],
          ["M", "Which is an economic value of sports?", "creating jobs", "wasting money", "causing unemployment", "closing schools", "Sports employ many people."],
          ["M", "Sports promote national unity because they", "bring people of different backgrounds together", "divide ethnic groups", "encourage hatred", "stop communication", "Teams mix people."],
          ["M", "Learning to accept defeat gracefully is a value that is", "emotional", "economic", "only physical", "harmful", "It helps manage feelings."],
          ["H", "Regular exercise reduces the risk of", "heart disease and diabetes", "good health", "strong muscles", "better sleep", "It keeps the heart healthy."],
          ["H", "Sports keep youths away from crime mainly by", "engaging them in useful activities", "giving them weapons", "encouraging idleness", "hiding them", "Busy youths avoid bad company."],
          ["H", "A person who treats injured athletes through exercise and massage is a", "physiotherapist", "referee", "sports journalist", "spectator", "Physiotherapy aids recovery."],
        ],
      },
      {
        week: 3,
        title: "Basic body movements",
        subtopics: ["Locomotor movements", "Non-locomotor movements", "Manipulative movements", "Combining movements in games"],
        objectives: ["Identify locomotor movements", "Identify non-locomotor movements", "Identify manipulative movements", "Combine movements in simple activities"],
        lesson: {
          title: "How the Body Moves",
          summary: "Classify and perform basic body movements.",
          minutes: 40,
          notes: `## Locomotor movements
Movements that **carry the body from one place to another**:
**walking, running, jumping, hopping** (on one foot), **leaping** (from one foot to the other with a long step), **skipping**, **galloping**, **sliding**, **crawling**, **climbing**.

## Non-locomotor movements
Movements performed **on the spot** without moving from place to place:
**bending, stretching, twisting, turning, swinging, pushing, pulling, lifting, swaying, shaking, rocking, balancing**.

## Manipulative movements
Movements that involve **handling or controlling an object** with the hands, feet or other body parts:
**throwing, catching, kicking, striking, bouncing, dribbling, rolling a ball, trapping, volleying**.

## Combining movements
Games and sports combine all three:
- in **football**: running (locomotor) + twisting (non-locomotor) + kicking (manipulative)
- in **basketball**: running + jumping + dribbling + shooting
- in **dance**: stepping + swaying + turning

## Safety
warm up before activity; use open, safe spaces; wear suitable clothing and shoes; follow the teacher's instructions.`,
          examples: `**Example 1.** Is hopping locomotor or non-locomotor? *Answer:* **locomotor** — it moves the body from place to place.

**Example 2.** Twisting the trunk while standing is a **non-locomotor** movement.

**Example 3.** Dribbling a ball is a **manipulative** movement.`,
        },
        questions: [
          ["E", "Movements that carry the body from one place to another are", "locomotor movements", "non-locomotor movements", "manipulative movements", "static postures", "The body travels."],
          ["E", "Running is an example of a", "locomotor movement", "non-locomotor movement", "manipulative movement", "fixed movement", "It moves the body across space."],
          ["E", "Kicking a ball is an example of a", "manipulative movement", "non-locomotor movement", "locomotor movement only", "resting position", "It controls an object."],
          ["M", "Movements performed on the spot without travelling are", "non-locomotor movements", "locomotor movements", "manipulative movements", "relay movements", "The body stays in one place."],
          ["M", "Bending and stretching are", "non-locomotor movements", "locomotor movements", "manipulative movements", "throwing skills", "They happen on the spot."],
          ["M", "Moving on one foot repeatedly is", "hopping", "leaping", "sliding", "crawling", "Hopping uses one foot."],
          ["M", "Which is a manipulative movement?", "catching", "walking", "twisting", "swaying", "It involves handling a ball."],
          ["H", "Springing from one foot and landing on the other with a long step is", "leaping", "hopping", "galloping", "skipping", "A leap covers distance."],
          ["H", "A footballer running, turning and kicking the ball combines", "locomotor, non-locomotor and manipulative movements", "only locomotor movements", "only manipulative movements", "no movements", "Games combine all types."],
          ["H", "Pushing and pulling while standing in one place are", "non-locomotor movements", "locomotor movements", "field events", "aquatic skills", "No travelling occurs."],
        ],
      },
      {
        week: 4,
        title: "Physical fitness: health-related components",
        subtopics: ["Meaning of physical fitness", "Health-related components", "Simple fitness tests", "Benefits of being fit"],
        objectives: ["Define physical fitness", "Explain the health-related components of fitness", "Perform simple fitness tests", "State the benefits of physical fitness"],
        lesson: {
          title: "Being Fit for Life",
          summary: "Explain and test the health-related components of fitness.",
          minutes: 40,
          notes: `## Meaning
**Physical fitness** is the ability to carry out daily tasks **efficiently and with vigour**, without undue fatigue, and still have energy left for leisure and emergencies.

## Health-related components
| Component | Meaning | Activities to improve it |
|---|---|---|
| **cardiovascular (cardiorespiratory) endurance** | ability of the **heart and lungs** to supply oxygen to muscles during long activity | jogging, swimming, cycling, skipping |
| **muscular strength** | the **maximum force** a muscle can exert once | lifting weights, push-ups |
| **muscular endurance** | ability of muscles to work **repeatedly** for a long time without tiring | sit-ups, many push-ups, cycling |
| **flexibility** | range of movement around a **joint** | stretching exercises, gymnastics |
| **body composition** | proportion of **fat** to lean mass (muscle, bone) in the body | balanced diet and regular exercise |

## Simple fitness tests
| Test | Component measured |
|---|---|
| 12-minute run (Cooper test) or step test | cardiovascular endurance |
| sit-ups in 1 minute | abdominal muscular endurance |
| push-ups | upper-body muscular endurance/strength |
| sit-and-reach test | flexibility |
| waist measurement, BMI | body composition |
**BMI** = weight (kg) ÷ height (m) squared.

## Benefits of fitness
healthy heart and lungs; good body weight; less fatigue; better posture; stronger bones; better concentration and mood; resistance to disease; longer life.`,
          examples: `**Example 1.** Which component is improved by jogging? *Answer:* **cardiovascular endurance**.

**Example 2.** What does the sit-and-reach test measure? *Answer:* **flexibility**.

**Example 3.** A student weighs 45 kg and is 1.5 m tall. Find the BMI. *Answer:* 45 ÷ (1.5 × 1.5) = 45 ÷ 2.25 = **20**.`,
        },
        questions: [
          ["E", "The ability to carry out daily tasks efficiently without undue fatigue is", "physical fitness", "malnutrition", "fatigue", "laziness", "Fit people have energy to spare."],
          ["E", "Stretching exercises improve", "flexibility", "body fat", "tooth health", "eyesight", "They increase range of motion."],
          ["E", "Jogging regularly improves", "cardiovascular endurance", "flexibility only", "eyesight", "hearing", "It trains heart and lungs."],
          ["M", "The maximum force a muscle can exert in one effort is", "muscular strength", "muscular endurance", "flexibility", "agility", "Strength is maximum force."],
          ["M", "The ability of muscles to work repeatedly without tiring is", "muscular endurance", "muscular strength", "balance", "reaction time", "Endurance lasts over time."],
          ["M", "The proportion of fat to lean mass in the body is", "body composition", "flexibility", "coordination", "power", "It compares fat and muscle."],
          ["M", "The sit-and-reach test measures", "flexibility", "speed", "strength", "cardiovascular endurance", "It tests stretch at the hips and back."],
          ["H", "A student weighs 45 kg and is 1.5 m tall. The BMI is", "20", "30", "67.5", "15", "45 ÷ 2.25 = 20."],
          ["H", "The number of sit-ups done in one minute measures", "abdominal muscular endurance", "flexibility", "reaction time", "body composition", "It tests repeated muscle work."],
          ["H", "The component that depends on the heart and lungs supplying oxygen to muscles is", "cardiovascular endurance", "flexibility", "muscular strength only", "body composition", "It supports long activity."],
        ],
      },
      {
        week: 5,
        title: "Introduction to athletics",
        subtopics: ["Meaning of athletics", "Track events", "Field events", "Athletics facilities and equipment"],
        objectives: ["Define athletics", "Classify track events", "Classify field events", "Identify athletics facilities and equipment"],
        lesson: {
          title: "Running, Jumping and Throwing",
          summary: "Classify athletics events and identify their facilities.",
          minutes: 40,
          notes: `## Meaning
**Athletics** is a group of sporting events involving **running, walking, jumping and throwing**. It is often called the **"mother of sports"** because its skills are used in most other games.

## Track events
Races run on a track (standard outdoor track is **400 m** round).
| Group | Events |
|---|---|
| **sprints (short distance)** | 100 m, 200 m, 400 m |
| **middle distance** | 800 m, 1500 m |
| **long distance** | 5000 m, 10,000 m |
| **hurdles** | 100 m hurdles (women), 110 m hurdles (men), 400 m hurdles |
| **relays** | 4 × 100 m, 4 × 400 m |
| **steeplechase** | 3000 m with barriers and a water jump |
| **road events** | marathon (42.195 km), race walking |

## Field events
Events held on the field inside or near the track.
| Group | Events |
|---|---|
| **jumps** | long jump, triple jump, high jump, pole vault |
| **throws** | shot put, discus, javelin, hammer |

## Combined events
**heptathlon** (7 events, women) and **decathlon** (10 events, men).

## Facilities and equipment
track with **lanes**; starting blocks; batons; hurdles; landing pits with sand (long and triple jump); foam landing area (high jump, pole vault); throwing circles and sectors; implements (shot, discus, javelin); measuring tapes; stopwatches; starter's gun or clapper; finish line.`,
          examples: `**Example 1.** Is the 400 m a track or field event? *Answer:* a **track** event (sprint).

**Example 2.** Name two throwing events. *Answer:* **shot put** and **discus**.

**Example 3.** Why is athletics called the "mother of sports"? *Answer:* Its **running, jumping and throwing** skills are used in most other sports.`,
        },
        questions: [
          ["E", "Sporting events involving running, jumping and throwing are called", "athletics", "aquatics", "gymnastics", "combat sports", "Athletics covers track and field."],
          ["E", "The 100 m race is a", "sprint", "long-distance race", "field event", "throwing event", "It is a short race."],
          ["E", "Long jump is a", "field event", "track event", "relay", "road race", "It is a jumping event."],
          ["M", "Athletics is often called the", "mother of sports", "father of games", "king of aquatics", "queen of combat", "Its skills are basic to other sports."],
          ["M", "Shot put, discus and javelin are", "throwing events", "jumping events", "sprints", "relays", "They involve throwing implements."],
          ["M", "The standard outdoor running track measures", "400 m round", "100 m round", "1000 m round", "50 m round", "One lap is 400 m."],
          ["M", "A race in which teammates pass a baton is a", "relay", "sprint only", "marathon", "steeplechase", "The baton is exchanged."],
          ["H", "The marathon distance is", "42.195 km", "10 km", "21 km", "100 km", "It is the longest standard road race."],
          ["H", "The 10-event competition for men is the", "decathlon", "heptathlon", "pentathlon", "triathlon", "Deca means ten."],
          ["H", "The event run over barriers and a water jump is the", "steeplechase", "hurdles sprint", "relay", "marathon", "It is usually 3000 m."],
        ],
      },
      {
        week: 6,
        title: "Sprints and starting techniques",
        subtopics: ["Phases of a sprint", "The crouch start", "Starting commands", "Sprint finish and rules"],
        objectives: ["Describe the phases of a sprint race", "Perform a crouch start", "Respond correctly to starting commands", "Explain the finish and basic sprint rules"],
        lesson: {
          title: "Running Fast from the Blocks",
          summary: "Perform sprint starts and apply sprint rules.",
          minutes: 45,
          notes: `## Sprints
**Sprints** are short races run at **maximum speed**: 100 m, 200 m and 400 m. Each athlete runs in his or her own **lane**.

## Phases of a sprint
1. **start** (reaction to the gun)
2. **drive/acceleration phase** — body leans forward, powerful strides
3. **maximum speed phase** — upright running, high knees, arms pumping from the shoulders
4. **finish** — maintain speed through the line; **lean the torso** at the finish

## The crouch start
Sprinters use a **crouch start** with **starting blocks**. Types by foot spacing:
- **bunch (short) start**: feet close together
- **medium start**: the most common
- **elongated (long) start**: feet far apart

## Starting commands
| Command | Action |
|---|---|
| **"On your marks"** | kneel with feet against the blocks, hands behind the line (shoulder-width), eyes looking down, body still |
| **"Set"** | raise the hips slightly above shoulder level, weight forward on hands, hold still |
| **gun (or "Go")** | drive powerfully out of the blocks, arms driving |
Middle and long distance races use a **standing start**.

## Rules
- a **false start** (moving before the gun) leads to **disqualification** under current international rules
- stay in your lane throughout
- the finish is judged when the athlete's **torso** (not head, arm or leg) crosses the finish line
- do not obstruct other runners

## Sprint technique tips
run on the balls of the feet; keep the head steady; relax the face and shoulders; drive arms back and forth (not across the body).`,
          examples: `**Example 1.** What should the athlete do at the command "Set"? *Answer:* **Raise the hips** slightly above shoulder level and hold still.

**Example 2.** Which body part must cross the line to finish? *Answer:* the **torso**.

**Example 3.** What start is used in the 1500 m? *Answer:* a **standing start**.`,
        },
        questions: [
          ["E", "Short races run at maximum speed are", "sprints", "marathons", "relays only", "walks", "They cover 100 to 400 m."],
          ["E", "Sprinters start from", "starting blocks", "a standing position only", "a moving car", "the finish line", "Blocks help a powerful push."],
          ["E", "The first starting command in a sprint is", "On your marks", "Set", "Go home", "Finish", "Athletes take position."],
          ["M", "At the command 'Set', the sprinter should", "raise the hips slightly above shoulder level", "stand up fully", "start running", "sit down", "It prepares for the drive."],
          ["M", "The start used by sprinters is the", "crouch start", "standing start", "flying start", "rolling start", "They crouch in blocks."],
          ["M", "A crouch start with the feet very close together is the", "bunch start", "elongated start", "standing start", "medium start", "Feet are bunched."],
          ["M", "Moving before the gun is fired is a", "false start", "fair start", "relay", "lap", "It is against the rules."],
          ["H", "A sprinter finishes when his or her", "torso crosses the finish line", "head crosses the line", "hand touches the line", "foot crosses the line", "The torso is judged."],
          ["H", "Middle and long distance races begin with a", "standing start", "crouch start in blocks", "sitting start", "rolling start", "Speed from blocks matters less."],
          ["H", "During sprinting, the arms should", "drive back and forth from the shoulders", "swing across the body", "stay still", "be held above the head", "This balances leg action."],
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
        title: "Safety in physical activities",
        subtopics: ["Causes of accidents in sports", "Warm-up and cool-down", "Safe facilities and equipment", "Safety rules"],
        objectives: ["Identify causes of accidents in sports", "Perform warm-up and cool-down activities", "Check facilities and equipment for safety", "Apply safety rules during physical activities"],
        lesson: {
          title: "Staying Safe While Active",
          summary: "Prevent injuries through warm-up, safe equipment and rules.",
          minutes: 40,
          notes: `## Causes of accidents in sports
- no **warm-up**
- unsafe **facilities** (holes in the field, slippery floors, broken glass)
- faulty **equipment** (broken hurdles, loose javelin tips)
- wrong **clothing and shoes**
- poor **technique**
- **fatigue** and illness
- rough play and breaking rules
- lack of **supervision**
- carelessness and overcrowding

## Warm-up
A **warm-up** is light exercise before the main activity. It:
- raises body temperature and heart rate gradually
- loosens muscles and joints
- prepares the mind
- reduces the risk of **injuries** such as strains
**Examples:** jogging, skipping, arm circles, leg swings, gentle stretches — about **10–15 minutes**.

## Cool-down
Light activity after exercise (slow jogging, walking, stretching). It:
- returns heart rate to normal gradually
- helps remove waste such as lactic acid
- reduces muscle soreness and dizziness

## Safe facilities and equipment
inspect the field before play; remove stones and glass; mark boundaries; keep equipment in good condition; store implements properly; provide a **first aid box**.

## Safety rules
wear proper sportswear and shoes; remove jewellery; follow instructions; observe rules of the game; do not throw implements when others are in the sector; drink water; stop when injured and report.`,
          examples: `**Example 1.** Give one purpose of a warm-up. *Answer:* It **reduces the risk of injury**.

**Example 2.** Why should jewellery be removed before games? *Answer:* It can **cause cuts and injuries** to the wearer or others.

**Example 3.** Name one cool-down activity. *Answer:* **slow jogging** (or stretching).`,
        },
        questions: [
          ["E", "Light exercise done before the main activity is a", "warm-up", "cool-down", "time-out", "penalty", "It prepares the body."],
          ["E", "Light exercise done after the main activity is a", "cool-down", "warm-up", "sprint", "false start", "It helps the body recover."],
          ["E", "Before games, players should remove", "jewellery", "sportswear", "shoes", "water bottles", "Jewellery can cause injuries."],
          ["M", "A warm-up helps to", "reduce the risk of injury", "increase injuries", "cool the body", "end the game", "Warm muscles are less likely to tear."],
          ["M", "Which is a cause of sports accidents?", "faulty equipment", "proper supervision", "good shoes", "warming up", "Broken equipment is dangerous."],
          ["M", "A cool-down helps to", "return the heart rate to normal gradually", "start the race", "increase soreness", "raise body temperature quickly", "Recovery is gradual."],
          ["M", "Before a football match on a school field, one should", "remove stones and broken glass", "dig holes", "pour oil on the grass", "remove the goalposts", "The field must be safe."],
          ["H", "A javelin should not be thrown when", "people are in the throwing sector", "the field is clear", "the teacher signals", "the throwing area is marked", "People could be hit."],
          ["H", "A suitable warm-up usually lasts about", "10 to 15 minutes", "2 hours", "30 seconds", "a whole day", "Enough to raise body temperature."],
          ["H", "A player who feels sharp pain during a game should", "stop and report to the teacher", "keep playing", "hide the injury", "run faster", "Continuing may worsen it."],
        ],
      },
      {
        week: 2,
        title: "Recreation and leisure",
        subtopics: ["Meaning of recreation and leisure", "Types of recreational activities", "Values of recreation", "Recreational facilities"],
        objectives: ["Distinguish recreation from leisure", "Classify recreational activities", "State the values of recreation", "Identify recreational facilities in the community"],
        lesson: {
          title: "Using Free Time Well",
          summary: "Plan healthy recreational activities for leisure time.",
          minutes: 40,
          notes: `## Meaning
- **leisure** is **free time** after work, school and other duties
- **recreation** is **activities done voluntarily during leisure** for **enjoyment, relaxation and refreshment** of body and mind

## Types of recreational activities
| Type | Examples |
|---|---|
| **active (physical)** | football, swimming, cycling, dancing, hiking |
| **passive** | watching films, listening to music, reading |
| **indoor** | board games (ludo, draughts, chess, ayo), table tennis |
| **outdoor** | picnics, camping, fishing, gardening |
| **social** | parties, clubs, visiting friends |
| **creative/cultural** | drawing, craft, drama, traditional festivals |
| **educational** | visits to museums, zoos, historical sites |

## Values of recreation
relieves **stress**; refreshes the body and mind; improves **health and fitness**; builds **friendships**; develops talents and hobbies; keeps people away from **crime and bad habits**; promotes culture; creates jobs (tourism).

## Recreational facilities
parks and gardens, stadiums, swimming pools, playgrounds, cinemas, libraries, beaches, zoos, museums, community halls, resorts.

## Using leisure wisely
choose safe and healthy activities; balance active and passive recreation; avoid harmful activities (gambling, drug use, excessive screen time); plan your time.`,
          examples: `**Example 1.** Is playing ludo active or passive recreation? *Answer:* It is an **indoor** activity with low physical effort — mostly **passive**.

**Example 2.** What is leisure? *Answer:* **Free time** after work and duties.

**Example 3.** Name one value of recreation. *Answer:* It **relieves stress**.`,
        },
        questions: [
          ["E", "Free time after work and other duties is", "leisure", "recreation", "exercise", "labour", "Leisure is free time."],
          ["E", "Activities done during free time for enjoyment are", "recreation", "punishment", "examinations", "chores", "They refresh body and mind."],
          ["E", "Which is an outdoor recreational activity?", "picnic", "watching TV indoors", "playing chess indoors", "reading in the room", "It takes place outside."],
          ["M", "Listening to music is an example of", "passive recreation", "active recreation", "combat sport", "athletics", "Little physical effort is used."],
          ["M", "Ayo and draughts are", "indoor games", "outdoor athletics", "aquatic sports", "combat sports", "They are board games."],
          ["M", "One value of recreation is that it", "relieves stress", "causes fatigue", "promotes crime", "wastes resources", "It relaxes the mind."],
          ["M", "A place with trees, benches and open spaces for relaxation is a", "park", "prison", "factory", "market", "Parks are recreational facilities."],
          ["H", "Visiting a museum during holidays is", "educational recreation", "combat sport", "passive punishment", "athletics", "It combines learning and leisure."],
          ["H", "Which leisure activity should be avoided?", "gambling", "cycling", "reading", "gardening", "It is harmful and addictive."],
          ["H", "Spending too many hours on screens during leisure can lead to", "inactivity and poor health", "better fitness", "stronger muscles", "improved posture", "It reduces physical activity."],
        ],
      },
      {
        week: 3,
        title: "Football (soccer) fundamentals",
        subtopics: ["History and nature of football", "The field and equipment", "Basic skills", "Basic rules"],
        objectives: ["Describe football as a team game", "Identify the field markings and equipment", "Perform basic football skills", "State basic rules of football"],
        lesson: {
          title: "Playing Football the Right Way",
          summary: "Perform basic football skills and apply the main rules.",
          minutes: 45,
          notes: `## Nature of football
**Football (soccer)** is played by **two teams of 11 players** each (including one **goalkeeper**). The aim is to score by getting the ball into the opponent's goal. The world governing body is **FIFA**.
A match lasts **90 minutes** — two halves of **45 minutes** — with a half-time break.

## The field and equipment
- rectangular field with **touchlines** (sides) and **goal lines** (ends)
- **halfway line**, **centre circle**, **penalty area**, **goal area**, **penalty mark**, **corner arcs**
- goals, corner flags, ball, jerseys, shorts, stockings, **shin guards** and boots

## Basic skills
| Skill | Description |
|---|---|
| **passing** | kicking the ball to a teammate (inside of the foot for accuracy) |
| **receiving/trapping** | controlling a ball with the foot, thigh or chest |
| **dribbling** | moving with the ball under close control |
| **shooting** | kicking the ball at goal |
| **heading** | playing the ball with the forehead |
| **tackling** | taking the ball from an opponent fairly |
| **throw-in** | restarting play from the touchline with both hands over the head, both feet on the ground |
| **goalkeeping** | catching, diving, punching, distributing |

## Basic rules
- the ball is out when it wholly crosses a touchline or goal line
- **throw-in** when it crosses the touchline
- **corner kick** when the defending team last touched it over its own goal line (no goal)
- **goal kick** when the attacking team last touched it over the goal line
- **fouls** (tripping, pushing, holding, handling the ball) → free kick; in the defender's penalty area → **penalty kick**
- **yellow card** = caution; **red card** = sending off
- **offside**: a player in the opponent's half nearer to the goal line than both the ball and the second-last opponent when the ball is played to him, and who becomes involved in play
- the **referee** controls the match, assisted by assistant referees`,
          examples: `**Example 1.** How many players are on a football team on the field? *Answer:* **11**.

**Example 2.** How is play restarted when the ball crosses the touchline? *Answer:* with a **throw-in**.

**Example 3.** What does a red card mean? *Answer:* The player is **sent off**.`,
        },
        questions: [
          ["E", "The number of players in a football team on the field is", "11", "5", "7", "15", "Including the goalkeeper."],
          ["E", "The world governing body of football is", "FIFA", "FIBA", "IOC only", "NBA", "It organises the World Cup."],
          ["E", "A football match normally lasts", "90 minutes", "60 minutes", "45 minutes", "120 minutes always", "Two halves of 45 minutes."],
          ["M", "When the ball crosses the touchline, play restarts with a", "throw-in", "corner kick", "goal kick", "penalty kick", "It is taken from the touchline."],
          ["M", "Moving with the ball under close control is", "dribbling", "heading", "tackling", "trapping", "The ball stays near the feet."],
          ["M", "A foul by a defender inside his own penalty area results in a", "penalty kick", "throw-in", "goal kick", "drop ball", "It is taken from the penalty mark."],
          ["M", "A yellow card shown to a player means a", "caution", "sending off", "goal", "substitution", "It is a warning."],
          ["H", "When the attacking team last touches the ball over the defenders' goal line without scoring, the restart is a", "goal kick", "corner kick", "penalty kick", "throw-in", "The defending team restarts."],
          ["H", "During a throw-in, the thrower must", "use both hands with the ball over the head and keep both feet on the ground", "throw with one hand", "jump while throwing", "kick the ball", "These are the throw-in rules."],
          ["H", "Protective pads worn under the stockings are", "shin guards", "knee caps", "helmets", "gloves", "They protect the lower legs."],
        ],
      },
      {
        week: 4,
        title: "Gymnastics: basic skills",
        subtopics: ["Meaning and types of gymnastics", "Rolls", "Balances", "Safety in gymnastics"],
        objectives: ["Define gymnastics and name its types", "Perform forward and backward rolls", "Perform simple balances", "Observe safety rules in gymnastics"],
        lesson: {
          title: "Rolling and Balancing",
          summary: "Perform basic rolls and balances safely.",
          minutes: 45,
          notes: `## Meaning
**Gymnastics** is a sport of **body movements** that require **strength, flexibility, balance, coordination and control**.

## Types of gymnastics
- **artistic gymnastics** (floor, vault, beam, bars, rings, pommel horse)
- **rhythmic gymnastics** (with ribbons, hoops, balls, clubs to music)
- **trampolining**
- **acrobatic gymnastics** (partners and groups)
- **educational/basic gymnastics** (in schools: rolls, balances, jumps)

## Rolls
### Forward roll
1. squat with hands on the mat shoulder-width apart
2. **tuck the chin** to the chest
3. push with the legs; roll over on the **back of the head and shoulders** (not the top of the head)
4. keep the body **tucked** like a ball
5. come up onto the feet without using hands, arms forward

### Backward roll
1. squat with back to the mat, chin tucked
2. roll backwards, placing hands beside the ears (fingers pointing towards the shoulders)
3. push with the hands as the hips go over
4. land on the feet in a squat

### Log (side) roll
lie stretched, arms above the head, and roll sideways.

## Balances
**front support**, **back support**, **V-sit**, **stork stand** (on one leg), **shoulder stand (candle)**, **headstand** (with a spotter). A balance should be held still for about **3 seconds**.

## Safety
use **mats**; warm up well; remove jewellery and hard objects from pockets; wear suitable clothes; have a **spotter** (helper) for difficult skills; do one skill at a time; progress from simple to difficult.`,
          examples: `**Example 1.** Why tuck the chin in a forward roll? *Answer:* So that you roll on the **back of the head and shoulders**, protecting the neck.

**Example 2.** Standing on one leg with the arms stretched is the **stork stand**.

**Example 3.** Who is a spotter? *Answer:* A **helper who supports and protects** the gymnast.`,
        },
        questions: [
          ["E", "A sport of body movements requiring strength, balance and flexibility is", "gymnastics", "football", "athletics only", "swimming", "It includes rolls and balances."],
          ["E", "Gymnastics skills should be practised on", "mats", "concrete", "broken glass", "wet floors", "Mats cushion falls."],
          ["E", "Standing on one leg with arms stretched out is the", "stork stand", "headstand", "shoulder stand", "V-sit", "It resembles a stork."],
          ["M", "In a forward roll, the gymnast should first", "tuck the chin to the chest", "look up", "straighten the neck", "land on the top of the head", "It protects the neck."],
          ["M", "Gymnastics performed with ribbons and hoops to music is", "rhythmic gymnastics", "artistic gymnastics only", "trampolining", "weightlifting", "It combines dance and apparatus."],
          ["M", "A helper who supports a gymnast during a difficult skill is a", "spotter", "referee", "linesman", "timekeeper", "Spotters prevent injuries."],
          ["M", "Rolling sideways with the body stretched is a", "log roll", "forward roll", "backward roll", "cartwheel", "The body rolls like a log."],
          ["H", "In a backward roll, the hands are placed", "beside the ears with fingers pointing towards the shoulders", "on the knees", "behind the back", "on the hips", "They push the body over."],
          ["H", "A balance should normally be held still for about", "3 seconds", "30 minutes", "0.1 second", "1 hour", "It shows control."],
          ["H", "The forward roll should be taken on the", "back of the head and shoulders", "top of the head", "face", "elbows only", "This protects the neck."],
        ],
      },
      {
        week: 5,
        title: "Nigerian traditional games and dances",
        subtopics: ["Meaning of traditional games", "Examples of Nigerian traditional games", "Traditional dances", "Values of traditional games and dances"],
        objectives: ["Explain traditional games", "Describe examples of Nigerian traditional games", "Identify traditional dances from Nigerian communities", "State the values of traditional games and dances"],
        lesson: {
          title: "Games and Dances of Our Heritage",
          summary: "Describe and value Nigerian traditional games and dances.",
          minutes: 40,
          notes: `## Meaning
**Traditional games** are games that originated in a community and have been passed down from generation to generation. They use **local materials**, simple rules and are played for recreation, skill development and cultural expression.

## Examples of Nigerian traditional games
| Game | Description |
|---|---|
| **ayo (ncho, dara)** | board game with seeds and pits; strategy and counting |
| **traditional wrestling** | strength and skill; common during festivals (e.g. "gidigbo", "mgba", "kokawa") |
| **boxing (dambe)** | traditional boxing of the Hausa |
| **ten-ten** | girls' clapping and foot-stamping game |
| **suwe (hopscotch)** | hopping over squares drawn on the ground |
| **boju-boju** | hide and seek |
| **tug of war** | two teams pull a rope |
| **canoe racing and regattas** | common in riverine areas |
| **"Who is in the garden?"** | singing and chasing game |

## Traditional dances
| Dance | People |
|---|---|
| **bata** | Yoruba |
| **atilogwu** | Igbo (acrobatic) |
| **swange** | Tiv |
| **koroso** | Hausa/Fulani |
| **ekombi** | Efik |
| **owigiri** | Ijaw |
Dances are performed at festivals, weddings, naming ceremonies and funerals.

## Values
promote **culture and identity**; physical fitness; mental skills (strategy in ayo); social interaction and unity; recreation; tourism; teach cooperation and respect for rules.`,
          examples: `**Example 1.** Which traditional game uses seeds and pits? *Answer:* **ayo**.

**Example 2.** Name one Igbo dance. *Answer:* **atilogwu**.

**Example 3.** Give one value of traditional games. *Answer:* They **preserve culture**.`,
        },
        questions: [
          ["E", "Games passed down from generation to generation in a community are", "traditional games", "Olympic sports", "computer games", "modern sports only", "They are part of culture."],
          ["E", "Ayo is played with", "seeds and pits on a board", "a ball and net", "bats and shuttles", "a rope only", "It is a strategy board game."],
          ["E", "Two teams pulling a rope in opposite directions play", "tug of war", "ayo", "suwe", "ten-ten", "The stronger team wins."],
          ["M", "Hopping over squares drawn on the ground is", "suwe (hopscotch)", "ayo", "dambe", "tug of war", "It uses hopping."],
          ["M", "Dambe is a traditional form of", "boxing", "swimming", "board game", "dance", "It is Hausa boxing."],
          ["M", "Atilogwu is a traditional dance of the", "Igbo", "Tiv", "Efik", "Hausa", "It is acrobatic."],
          ["M", "Swange is a traditional dance of the", "Tiv", "Yoruba", "Igbo", "Ijaw", "It is from Benue."],
          ["H", "Ayo mainly develops", "strategic thinking and counting skills", "muscular strength only", "swimming skills", "sprint speed", "Players plan moves."],
          ["H", "Canoe racing is most common in", "riverine communities", "desert areas", "mountain tops", "big cities only", "Water is needed."],
          ["H", "One value of traditional dances is that they", "preserve cultural identity", "destroy culture", "cause illness", "stop festivals", "They express heritage."],
        ],
      },
      {
        week: 6,
        title: "First aid in sports",
        subtopics: ["Meaning and aims of first aid", "Qualities of a first aider", "The first aid box", "Treating minor sports injuries"],
        objectives: ["Define first aid and state its aims", "Describe the qualities of a good first aider", "Identify the contents of a sports first aid box", "Give first aid for minor sports injuries"],
        lesson: {
          title: "Helping the Injured on the Field",
          summary: "Give first aid for common sports injuries.",
          minutes: 40,
          notes: `## Meaning
**First aid** is the **immediate help** given to an injured or suddenly ill person **before** professional medical help arrives.

## Aims of first aid (the 3 Ps)
- **Preserve life**
- **Prevent** the condition from getting worse
- **Promote** recovery

## Qualities of a first aider
calm, observant, quick-thinking, knowledgeable, gentle, confident, tactful, **sympathetic**, resourceful, able to take charge and communicate.

## Sports first aid box
sterile dressings, bandages (roller and triangular), plasters, cotton wool, **antiseptic**, scissors, safety pins, tweezers, disposable gloves, **ice packs** or cold spray, crepe bandage, splints, water, a whistle, a first aid manual.

## Treating minor sports injuries
| Injury | First aid |
|---|---|
| **cuts and grazes (abrasions)** | wear gloves; clean with clean water and antiseptic; cover with a dressing |
| **nosebleed** | sit up, lean forward, pinch the soft part of the nose for 10 minutes |
| **sprain** (ligament) and **strain** (muscle) | **RICE**: **R**est, **I**ce (wrapped, about 15–20 minutes), **C**ompression (bandage), **E**levation |
| **muscle cramp** | gently stretch the muscle; massage; give water |
| **blister** | do not burst; cover with a plaster |
| **bruise** | apply a cold compress |
| **fainting** | lay flat, raise legs, loosen tight clothing, fresh air |
| **suspected fracture** | do **not** move the limb; support it; call for medical help |

## Safety for the first aider
check the scene is safe; wear gloves; avoid contact with blood; wash hands after.`,
          examples: `**Example 1.** What does RICE stand for? *Answer:* **Rest, Ice, Compression, Elevation**.

**Example 2.** First aid for a muscle cramp? *Answer:* **gently stretch and massage** the muscle.

**Example 3.** Why should a first aider wear gloves? *Answer:* To **avoid infection** from blood.`,
        },
        questions: [
          ["E", "Immediate help given to an injured person before medical help arrives is", "first aid", "surgery", "physiotherapy", "coaching", "It is given first."],
          ["E", "A first aider should remain", "calm", "panicky", "rude", "careless", "Calmness helps decisions."],
          ["E", "Which item belongs in a sports first aid box?", "bandages", "football boots", "a javelin", "a baton", "Bandages dress wounds."],
          ["M", "The 'I' in RICE stands for", "ice", "injection", "iodine", "inspection", "Ice reduces swelling."],
          ["M", "The 'E' in RICE stands for", "elevation", "exercise", "examination", "energy", "Raising the limb reduces swelling."],
          ["M", "A sudden painful tightening of a muscle during exercise is a", "cramp", "fracture", "bruise", "blister", "Stretching relieves it."],
          ["M", "The first aid for a sprained ankle is", "RICE", "running on it", "hot oil massage", "ignoring it", "Rest, ice, compression, elevation."],
          ["H", "When a fracture is suspected, the first aider should", "support the limb without moving it and call for help", "straighten the bone forcefully", "make the player walk", "massage the bone", "Movement causes more damage."],
          ["H", "A first aider wears disposable gloves mainly to", "avoid infection from blood", "keep hands warm", "look professional", "hold the ball", "Blood may carry germs."],
          ["H", "The three aims of first aid are to preserve life, prevent worsening and", "promote recovery", "punish the player", "praise the coach", "postpone treatment", "These are the 3 Ps."],
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
        title: "Personal and school health",
        subtopics: ["Meaning of health", "Personal health habits", "School health programme", "Healthy school environment"],
        objectives: ["Define health", "Describe good personal health habits", "Explain the school health programme", "Describe a healthy school environment"],
        lesson: {
          title: "Healthy Habits at Home and School",
          summary: "Practise good health habits and describe the school health programme.",
          minutes: 40,
          notes: `## Meaning of health
The World Health Organization (WHO) describes **health** as a state of **complete physical, mental and social well-being**, and not merely the absence of disease or infirmity.

## Personal health habits
- bathe daily; brush teeth twice daily; wash hands frequently
- eat a **balanced diet**; drink clean water
- get enough **sleep** (about 9–10 hours for young adolescents)
- exercise regularly
- wear clean clothes
- avoid drugs, alcohol and smoking
- go for regular medical and dental check-ups
- manage stress; keep good friends

## The school health programme
Activities by the school to protect and promote the health of pupils and staff:
| Component | Examples |
|---|---|
| **school health services** | medical check-ups, first aid, sick bay, immunisation, referrals |
| **healthful school environment** | clean water, toilets, safe buildings, clean compound |
| **school health instruction** | teaching health topics in class |
| **school feeding** | nutritious meals |
| **school–community relationship** | PTA involvement, health campaigns |

## Healthy school environment
clean classrooms with good **ventilation and lighting**; clean toilets and **hand-washing** points; safe drinking water; proper **refuse disposal**; safe playground; no stagnant water (mosquitoes); trees for shade; a **sick bay**.`,
          examples: `**Example 1.** Give the WHO meaning of health. *Answer:* **complete physical, mental and social well-being**, not merely absence of disease.

**Example 2.** Name one component of the school health programme. *Answer:* **school health services**.

**Example 3.** Why should stagnant water be removed from the school compound? *Answer:* It breeds **mosquitoes** that spread malaria.`,
        },
        questions: [
          ["E", "A state of complete physical, mental and social well-being is", "health", "disease", "fatigue", "injury", "This is the WHO description."],
          ["E", "The room in a school where sick pupils rest is the", "sick bay", "library", "laboratory", "staff room", "It is for first care."],
          ["E", "Which is a good personal health habit?", "getting enough sleep", "smoking", "skipping meals", "never bathing", "Sleep restores the body."],
          ["M", "Teaching health topics in the classroom is", "school health instruction", "school health services", "school feeding only", "sports", "It is part of the school health programme."],
          ["M", "Medical check-ups and immunisation in school are", "school health services", "school health instruction", "sports days", "PTA meetings", "They are services to pupils."],
          ["M", "Stagnant water in the school compound should be removed because it breeds", "mosquitoes", "butterflies", "bees", "fish", "Mosquitoes spread malaria."],
          ["M", "A healthy classroom should have good", "ventilation and lighting", "darkness", "dampness", "overcrowding", "Fresh air and light aid health."],
          ["H", "The WHO definition of health includes the words", "not merely the absence of disease", "only physical strength", "only wealth", "only mental ability", "Health is more than no disease."],
          ["H", "Involving parents in health campaigns is part of", "school–community relationship", "school feeding", "sports officiating", "athletics", "The school works with the community."],
          ["H", "Young adolescents need about how many hours of sleep each night?", "9 to 10 hours", "2 to 3 hours", "15 to 18 hours", "no sleep", "Sleep supports growth."],
        ],
      },
      {
        week: 2,
        title: "Communicable diseases",
        subtopics: ["Meaning of communicable diseases", "Causes and modes of transmission", "Common communicable diseases", "Prevention and control"],
        objectives: ["Define communicable diseases", "Explain modes of transmission", "Describe common communicable diseases", "State ways of preventing and controlling them"],
        lesson: {
          title: "Diseases That Spread",
          summary: "Explain how communicable diseases spread and how to prevent them.",
          minutes: 40,
          notes: `## Meaning
**Communicable (infectious) diseases** are diseases that can be **passed from one person or animal to another**. They are caused by **pathogens** (germs): **bacteria, viruses, fungi, protozoa** and worms.

## Modes of transmission
| Mode | Examples |
|---|---|
| **air (droplets)** | tuberculosis, measles, common cold, COVID-19 |
| **contaminated food and water** | cholera, typhoid, dysentery |
| **insects (vectors)** | malaria (mosquito), sleeping sickness (tsetse fly) |
| **direct contact** | ringworm, scabies |
| **body fluids** | HIV, hepatitis B |
| **contaminated objects** | sharing razors, needles, towels |

## Common diseases
| Disease | Cause | Signs | Prevention |
|---|---|---|---|
| **malaria** | protozoan (Plasmodium) via female Anopheles mosquito | fever, headache, chills | insecticide-treated nets, clear stagnant water |
| **cholera** | bacterium | severe watery diarrhoea, vomiting | clean water, hygiene, proper sewage |
| **typhoid** | bacterium | prolonged fever, weakness | clean food and water, vaccination |
| **tuberculosis** | bacterium | persistent cough, weight loss | BCG vaccine, ventilation |
| **measles** | virus | rash, fever, red eyes | measles vaccine |
| **chickenpox** | virus | itchy blisters | avoid contact, vaccination |

## Prevention and control
**immunisation**; personal and environmental hygiene; safe water and food; **isolation** of patients; treating sick people early; vector control; health education; covering the mouth when coughing.`,
          examples: `**Example 1.** Which insect transmits malaria? *Answer:* the **female Anopheles mosquito**.

**Example 2.** How is cholera spread? *Answer:* through **contaminated food and water**.

**Example 3.** Name one way to prevent communicable diseases. *Answer:* **immunisation** (or hygiene).`,
        },
        questions: [
          ["E", "Diseases that can pass from one person to another are", "communicable diseases", "non-communicable diseases", "deficiency diseases", "hereditary diseases only", "They are infectious."],
          ["E", "Germs that cause diseases are called", "pathogens", "vitamins", "hormones", "nutrients", "They include bacteria and viruses."],
          ["E", "Malaria is spread by the", "female Anopheles mosquito", "housefly", "tsetse fly", "cockroach", "It carries the parasite."],
          ["M", "Cholera is spread mainly through", "contaminated food and water", "mosquito bites", "sunlight", "handshakes only", "It affects the intestines."],
          ["M", "Measles is caused by a", "virus", "bacterium", "worm", "fungus", "It is a viral infection."],
          ["M", "The vaccine that protects against tuberculosis is", "BCG", "OPV", "measles vaccine", "tetanus toxoid", "BCG is given at birth."],
          ["M", "Sleeping under insecticide-treated nets helps to prevent", "malaria", "cholera", "ringworm", "measles", "Nets keep mosquitoes away."],
          ["H", "Keeping sick people away from others to stop spread is", "isolation", "immunisation", "vaccination only", "sanitation", "It limits contact."],
          ["H", "A persistent cough with weight loss may be a sign of", "tuberculosis", "malaria", "ringworm", "scabies", "TB affects the lungs."],
          ["H", "Insects that carry disease-causing organisms are called", "vectors", "hosts only", "vaccines", "antibodies", "They transmit pathogens."],
        ],
      },
      {
        week: 3,
        title: "Nutrition and physical activity",
        subtopics: ["Food and energy for activity", "Nutrients for athletes", "Water and hydration", "Eating before and after exercise"],
        objectives: ["Explain the need for food in physical activity", "Identify nutrients important for athletes", "Explain the importance of hydration", "Plan meals before and after exercise"],
        lesson: {
          title: "Fuel for the Active Body",
          summary: "Plan healthy eating and drinking for physical activity.",
          minutes: 40,
          notes: `## Food and energy
The body needs **energy** from food for every movement. Energy is measured in **kilocalories (kcal)** or **kilojoules (kJ)**. Active people need more energy than inactive people.

## Nutrients for active people
| Nutrient | Role in activity | Sources |
|---|---|---|
| **carbohydrates** | **main energy source** for muscles | rice, yam, bread, garri, pasta, fruits |
| **proteins** | build and **repair muscles** | beans, fish, eggs, meat, milk |
| **fats** | energy for long, low-intensity activity | palm oil, groundnuts, avocado |
| **vitamins** | help release energy, support immunity | fruits, vegetables |
| **minerals** | iron (oxygen transport), calcium (bones), sodium and potassium (muscle and nerve function) | leafy vegetables, milk, bananas |
| **water** | cooling (sweat), transport, preventing dehydration | clean water |

## Hydration
During exercise we lose water through **sweat**. **Dehydration** causes thirst, tiredness, headache, dizziness, cramps and poor performance.
- drink water **before, during and after** exercise
- drink small amounts regularly
- check urine colour (pale yellow is good)
- avoid sugary soft drinks and energy drinks for hydration

## Eating before and after exercise
- **before**: a light, carbohydrate-rich meal **2–3 hours** before (e.g. bread and tea, pap with akara); avoid heavy, fatty meals just before activity
- **after**: carbohydrates and protein to refuel and repair (e.g. rice and beans with fish), plus water
- avoid exercising on a completely empty stomach or immediately after a heavy meal`,
          examples: `**Example 1.** What is the main energy source for muscles? *Answer:* **carbohydrates**.

**Example 2.** Name two signs of dehydration. *Answer:* **headache and dizziness** (or thirst, cramps).

**Example 3.** When should a heavy meal be eaten before a match? *Answer:* about **2–3 hours before**, and it should be light.`,
        },
        questions: [
          ["E", "The main source of energy for working muscles is", "carbohydrates", "vitamins", "minerals", "roughage", "They are quickly broken down for energy."],
          ["E", "Water lost through the skin during exercise is", "sweat", "urine", "saliva", "blood", "Sweat cools the body."],
          ["E", "Athletes should drink water", "before, during and after exercise", "only after a week", "never during exercise", "only when fainting", "This prevents dehydration."],
          ["M", "The nutrient that repairs muscles after exercise is", "protein", "fat", "water only", "fibre", "Proteins rebuild tissue."],
          ["M", "Excessive loss of body water is", "dehydration", "hydration", "digestion", "respiration", "The body lacks water."],
          ["M", "The mineral that helps blood carry oxygen to muscles is", "iron", "iodine", "sodium only", "fluoride", "Iron forms haemoglobin."],
          ["M", "A light pre-match meal should be eaten about", "2 to 3 hours before activity", "5 minutes before", "during the match", "a week before", "Time allows digestion."],
          ["H", "A good indicator of proper hydration is urine that is", "pale yellow", "very dark", "red", "absent", "Pale urine shows enough water."],
          ["H", "Exercising immediately after a heavy meal may cause", "stomach discomfort and cramps", "better speed", "less fatigue", "improved digestion", "Blood is needed for digestion."],
          ["H", "Energy in food is measured in", "kilocalories or kilojoules", "metres", "litres", "degrees", "These are energy units."],
        ],
      },
      {
        week: 4,
        title: "Drug education",
        subtopics: ["Meaning of drugs", "Drug use, misuse and abuse", "Commonly abused substances and effects", "Prevention of drug abuse"],
        objectives: ["Define drugs", "Distinguish drug use, misuse and abuse", "Identify commonly abused substances and their effects", "Suggest ways of preventing drug abuse"],
        lesson: {
          title: "Saying No to Drug Abuse",
          summary: "Explain drug abuse, its effects and prevention.",
          minutes: 40,
          notes: `## Meaning
A **drug** is any substance that, when taken into the body, **changes the way the body or mind works**. Drugs can be medicines that heal, or substances that harm.

## Use, misuse and abuse
| Term | Meaning |
|---|---|
| **drug use** | taking drugs correctly as prescribed by a qualified health worker |
| **drug misuse** | using a drug wrongly (wrong dose, wrong time, sharing prescriptions, self-medication) |
| **drug abuse** | taking drugs **without medical need**, in excess, or for pleasure, harming health |
**Addiction (dependence)** is when a person cannot do without a drug.

## Commonly abused substances
| Substance | Effects |
|---|---|
| **alcohol** | poor judgement, accidents, liver damage |
| **tobacco (cigarettes)** | lung cancer, heart disease, bad breath |
| **cannabis (Indian hemp)** | poor memory, mental illness |
| **codeine cough syrup, tramadol** | addiction, breathing problems, mental problems |
| **cocaine, heroin** | addiction, heart failure, death |
| **inhalants (glue, fuel, solvents)** | brain damage |
| **excess caffeine/energy drinks** | sleeplessness, fast heartbeat |

## Effects of drug abuse
**health**: organ damage, mental illness, HIV (through shared needles); **social**: crime, violence, broken homes, school dropout; **economic**: wasted money, loss of jobs.

## Doping in sports
Using banned substances to improve performance is **doping**; it is **cheating**, harms health and leads to bans.

## Prevention
**say "No"**; choose good friends; engage in sports and hobbies; seek counselling; talk to trusted adults; obey laws. The **NDLEA** (National Drug Law Enforcement Agency) fights illegal drugs; **NAFDAC** regulates medicines.`,
          examples: `**Example 1.** Taking a friend's prescribed medicine is drug **misuse**.

**Example 2.** Which agency fights illegal drugs in Nigeria? *Answer:* **NDLEA**.

**Example 3.** Name one effect of smoking. *Answer:* **lung cancer** (or heart disease).`,
        },
        questions: [
          ["E", "Any substance that changes how the body or mind works is a", "drug", "vitamin", "food class", "hormone only", "Drugs affect body functions."],
          ["E", "Taking drugs without medical need or in excess is", "drug abuse", "drug use", "immunisation", "nutrition", "It harms health."],
          ["E", "The agency that fights illegal drugs in Nigeria is", "NDLEA", "NIPOST", "INEC", "CAC", "National Drug Law Enforcement Agency."],
          ["M", "Taking a friend's prescribed medicine is", "drug misuse", "correct drug use", "immunisation", "exercise", "The drug was not prescribed for you."],
          ["M", "A state in which a person cannot do without a drug is", "addiction", "hydration", "recreation", "fitness", "The body depends on it."],
          ["M", "Smoking tobacco can cause", "lung cancer", "stronger lungs", "better stamina", "healthy teeth", "Smoke damages lungs."],
          ["M", "Sniffing glue or fuel can cause", "brain damage", "stronger muscles", "better memory", "good health", "Inhalants harm the brain."],
          ["H", "Using banned substances to improve performance in sports is", "doping", "coaching", "warming up", "officiating", "It is cheating."],
          ["H", "Sharing needles among drug users increases the risk of", "HIV infection", "fitness", "better grades", "good sleep", "Blood-borne infections spread."],
          ["H", "The best way for a student to avoid drug abuse is to", "say 'No' and choose good friends", "try drugs once", "hide from teachers", "keep bad company", "Refusal prevents the start."],
        ],
      },
      {
        week: 5,
        title: "Athletics: relay races",
        subtopics: ["Meaning of relay races", "Types of relays", "Baton exchange techniques", "Relay rules"],
        objectives: ["Explain relay races", "Identify types of relay races", "Perform baton exchanges", "State the rules of relay races"],
        lesson: {
          title: "Passing the Baton",
          summary: "Perform baton exchanges and apply relay rules.",
          minutes: 45,
          notes: `## Meaning
A **relay race** is a team race in which **four runners** each run a part (**leg**) of the race and pass a **baton** from one to the next.

## Types of relays
- **4 × 100 m** (sprint relay): each runner covers 100 m
- **4 × 400 m**: each runner covers 400 m
- **medley relays**: runners cover different distances
- **shuttle relays**: runners run back and forth (common in schools)
- **mixed relays**: men and women in one team

## The baton
a smooth hollow tube carried in the hand; it must be **carried by hand throughout** and passed within the **changeover (takeover) zone**.

## Baton exchange techniques
| Technique | How it is done |
|---|---|
| **upsweep** | incoming runner passes the baton **upwards** into the outgoing runner's hand (palm facing down, thumb and fingers forming a V) |
| **downsweep** | incoming runner passes the baton **downwards** into the outgoing runner's upturned palm |
| **visual (look-back) pass** | outgoing runner looks back to receive; used in longer relays like 4 × 400 m |
| **non-visual (blind) pass** | outgoing runner does not look back; used in 4 × 100 m for speed |

## Order of runners (4 × 100 m)
- 1st: good starter, runs the bend
- 2nd: strong runner on a straight
- 3rd: good bend runner
- 4th (anchor): fastest finisher

## Rules
- the baton must be passed **within the changeover zone**
- if the baton is dropped, the runner who dropped it must pick it up without obstructing others
- runners in 4 × 100 m stay in their lanes
- the baton must not be thrown
- the team is disqualified for passing outside the zone or obstruction`,
          examples: `**Example 1.** How many runners are in a relay team? *Answer:* **four**.

**Example 2.** Which pass is used for speed in 4 × 100 m? *Answer:* the **non-visual (blind) pass**.

**Example 3.** Where must the baton be exchanged? *Answer:* within the **changeover zone**.`,
        },
        questions: [
          ["E", "A team race in which runners pass a baton is a", "relay race", "marathon", "hurdles race", "steeplechase", "The baton is exchanged."],
          ["E", "The number of runners in a relay team is", "four", "two", "six", "eleven", "Each runs one leg."],
          ["E", "The object passed between relay runners is the", "baton", "shot", "discus", "javelin", "It is a hollow tube."],
          ["M", "The baton must be exchanged within the", "changeover zone", "long jump pit", "throwing circle", "spectators' stand", "Passing outside it leads to disqualification."],
          ["M", "The last runner in a relay team is called the", "anchor", "starter", "pacer", "judge", "He or she finishes the race."],
          ["M", "The pass in which the outgoing runner looks back to receive the baton is the", "visual pass", "non-visual pass", "upsweep only", "throw pass", "The runner watches the baton."],
          ["M", "The non-visual pass is mainly used in the", "4 × 100 m relay", "marathon", "high jump", "discus", "Speed is maintained."],
          ["H", "In the upsweep technique, the baton is passed", "upwards into the receiver's hand", "downwards onto the palm", "by throwing it", "over the head", "The hand forms a V."],
          ["H", "If a runner drops the baton, the correct action is to", "pick it up without obstructing others", "leave the race immediately", "throw another baton", "run without it", "The runner who dropped it retrieves it."],
          ["H", "The 4 × 100 m relay first runner should be", "a good starter who can run the bend", "the slowest runner", "the tallest runner only", "a thrower", "The first leg starts on a bend."],
        ],
      },
      {
        week: 6,
        title: "Volleyball fundamentals",
        subtopics: ["Nature of volleyball", "Court and equipment", "Basic skills", "Basic rules"],
        objectives: ["Describe volleyball as a team game", "Identify the court and equipment", "Perform basic volleyball skills", "State basic rules of volleyball"],
        lesson: {
          title: "Playing Volleyball",
          summary: "Perform volleyball skills and apply basic rules.",
          minutes: 45,
          notes: `## Nature of volleyball
**Volleyball** is played by **two teams of six players** on a court divided by a **net**. Players hit the ball over the net and try to make it land in the opponent's court. The world governing body is the **FIVB**.

## Court and equipment
- court: **18 m × 9 m**, divided into two halves of 9 m × 9 m
- **attack line** 3 m from the centre line on each side
- net height: about **2.43 m** for men and **2.24 m** for women
- equipment: ball, net, posts, antennae, kneepads

## Basic skills
| Skill | Description |
|---|---|
| **service** | putting the ball into play from behind the end line (underarm or overarm) |
| **forearm pass (dig/bump)** | playing the ball off the joined forearms; used to receive serves |
| **overhead pass (set/volley)** | using the fingertips above the forehead to set the ball for an attacker |
| **spike (smash/attack)** | jumping and hitting the ball forcefully downward |
| **block** | jumping at the net with hands up to stop an attack |

## Basic rules
- each team may touch the ball **three times** before sending it over (a block does not count)
- a player may not touch the ball **twice in a row** (except after a block)
- **rally-point scoring**: a point is scored on every rally
- a set is won by the first team to **25 points** with a lead of **2**; a deciding fifth set is played to **15**
- a match is **best of five sets**
- players **rotate clockwise** when their team wins the right to serve
- faults: touching the net during play, ball landing outside, catching or throwing the ball, stepping on the end line while serving`,
          examples: `**Example 1.** How many players does a volleyball team have on court? *Answer:* **six**.

**Example 2.** What is the maximum number of touches per side? *Answer:* **three**.

**Example 3.** Which skill is used to receive a serve? *Answer:* the **forearm pass (dig)**.`,
        },
        questions: [
          ["E", "The number of players in a volleyball team on court is", "six", "five", "seven", "eleven", "Six players per side."],
          ["E", "Volleyball is played over a", "net", "goalpost", "basket", "crossbar", "The net divides the court."],
          ["E", "Putting the ball into play from behind the end line is", "service", "spike", "block", "dig", "It starts each rally."],
          ["M", "The maximum number of times a team may touch the ball before sending it over is", "three", "two", "five", "one", "A block does not count."],
          ["M", "Jumping and hitting the ball forcefully downward is a", "spike", "set", "dig", "serve", "It is an attack."],
          ["M", "Playing the ball off joined forearms is the", "forearm pass (dig)", "overhead pass", "spike", "block", "It receives serves."],
          ["M", "A standard volleyball court measures", "18 m by 9 m", "28 m by 15 m", "100 m by 60 m", "9 m by 4.5 m", "Each half is 9 m by 9 m."],
          ["H", "A normal volleyball set is won by the first team to reach", "25 points with a 2-point lead", "11 points", "21 points exactly", "15 points in every set", "The fifth set goes to 15."],
          ["H", "When a team wins the right to serve, its players", "rotate clockwise", "rotate anticlockwise", "stay in place", "leave the court", "Rotation changes positions."],
          ["H", "Using the fingertips above the forehead to set the ball is the", "overhead pass", "dig", "block", "spike", "It sets up an attack."],
        ],
      },
    ],
  },
];
