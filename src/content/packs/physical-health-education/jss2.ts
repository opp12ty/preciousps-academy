import type { TermPlan } from "../types";

/** JSS2 Physical and Health Education — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Skill-related fitness",
        subtopics: ["Meaning of skill-related fitness", "Components of skill-related fitness", "Tests for skill-related fitness", "Sports that need each component"],
        objectives: ["Explain skill-related fitness", "Describe the components of skill-related fitness", "Perform simple tests of skill-related fitness", "Match components to sports"],
        lesson: {
          title: "Fitness for Performance",
          summary: "Describe and test the skill-related components of fitness.",
          minutes: 40,
          notes: `## Meaning
**Skill-related (motor) fitness** is the fitness needed to **perform sports skills well**. It builds on health-related fitness (endurance, strength, flexibility, body composition).

## Components
| Component | Meaning | Sports example |
|---|---|---|
| **speed** | ability to move the body or a part **quickly** from one point to another | sprinting |
| **agility** | ability to **change direction quickly** while keeping control | dribbling in football, badminton |
| **balance** | ability to keep the body **stable**, still or moving | gymnastics beam, cycling |
| **coordination** | ability to use **body parts together smoothly** (e.g. eyes and hands) | catching, table tennis |
| **power** | combination of **strength and speed** — explosive force | long jump take-off, shot put |
| **reaction time** | time between a **signal** and the **response** | sprint start, goalkeeping |

## Simple tests
| Test | Component |
|---|---|
| 30 m or 50 m sprint | speed |
| Illinois agility run / shuttle run | agility |
| stork stand (time on one foot) | balance |
| wall toss catch (alternate hands) | coordination |
| standing long jump / vertical jump | power |
| ruler drop test | reaction time |

## Improving skill-related fitness
practise sport-specific drills; plyometrics (jumping drills) for power; ladder drills for agility; balance exercises; reaction games.`,
          examples: `**Example 1.** A goalkeeper diving to stop a sudden shot mainly uses **reaction time** (and agility).

**Example 2.** Which test measures power? *Answer:* the **standing long jump** (or vertical jump).

**Example 3.** Define agility. *Answer:* the ability to **change direction quickly** while keeping control.`,
        },
        questions: [
          ["E", "The ability to change direction quickly while keeping control is", "agility", "flexibility", "endurance", "body composition", "Agility helps dodging."],
          ["E", "The ability to keep the body stable is", "balance", "speed", "power", "reaction time", "Balance keeps us steady."],
          ["E", "Moving the body quickly from one point to another is", "speed", "balance", "flexibility", "coordination", "Sprinters need speed."],
          ["M", "The combination of strength and speed is", "power", "agility", "balance", "endurance", "It is explosive force."],
          ["M", "The time between a signal and the response is", "reaction time", "speed", "power", "agility", "It matters at sprint starts."],
          ["M", "Using the eyes and hands together smoothly is", "coordination", "flexibility", "body composition", "endurance", "It aids catching."],
          ["M", "The ruler drop test measures", "reaction time", "flexibility", "power", "balance", "Catching a falling ruler tests reaction."],
          ["H", "The standing long jump test measures", "power", "flexibility", "reaction time", "balance", "It needs explosive leg force."],
          ["H", "A badminton player moving quickly to all corners of the court mainly needs", "agility", "body composition", "flexibility only", "cardiovascular endurance only", "Direction changes are constant."],
          ["H", "Jumping drills used to build explosive power are called", "plyometrics", "aerobics only", "stretching", "yoga", "They train quick force."],
        ],
      },
      {
        week: 2,
        title: "Principles of fitness training",
        subtopics: ["Principles of training", "The FITT principle", "Parts of a training session", "Types of training"],
        objectives: ["Explain the principles of training", "Apply the FITT principle", "Describe the parts of a training session", "Identify types of training"],
        lesson: {
          title: "Training the Body Wisely",
          summary: "Plan safe training using the principles of training.",
          minutes: 40,
          notes: `## Principles of training
| Principle | Meaning |
|---|---|
| **specificity** | train for the particular sport or component you want to improve |
| **overload** | work harder than normal to cause improvement |
| **progression** | increase the load **gradually** over time |
| **reversibility** | fitness is **lost** when training stops ("use it or lose it") |
| **individual differences** | people respond differently; plan for each person |
| **rest and recovery** | the body needs time to adapt and repair |

## The FITT principle
| Letter | Meaning | Example |
|---|---|---|
| **F** | **frequency** — how often | 3–5 times a week |
| **I** | **intensity** — how hard | jog at a steady pace |
| **T** | **time** — how long | 30 minutes |
| **T** | **type** — kind of activity | jogging, swimming, cycling |

## Parts of a training session
1. **warm-up** (10–15 min): pulse raiser, stretching, skill practice
2. **main activity**: fitness or skill work
3. **cool-down**: light jogging, stretching

## Types of training
| Type | Description | Improves |
|---|---|---|
| **continuous training** | steady activity without rest for 20+ minutes | cardiovascular endurance |
| **interval training** | periods of hard work followed by rest | speed and endurance |
| **fartlek ("speed play")** | continuous running with changes of pace and terrain | endurance and speed |
| **circuit training** | a series of exercises at stations | general fitness, muscular endurance |
| **weight training** | lifting weights | strength and power |
| **flexibility training** | stretching | flexibility |

## Heart rate
**Maximum heart rate** ≈ 220 − age. For a 13-year-old: 220 − 13 = **207** beats per minute.`,
          examples: `**Example 1.** Increasing jogging time from 15 to 20 minutes over weeks applies **progression**.

**Example 2.** What does the "I" in FITT stand for? *Answer:* **intensity**.

**Example 3.** Estimate the maximum heart rate of a 14-year-old. *Answer:* 220 − 14 = **206** beats per minute.`,
        },
        questions: [
          ["E", "The 'F' in the FITT principle stands for", "frequency", "fitness", "flexibility", "force", "How often you train."],
          ["E", "Training for the particular sport you play applies the principle of", "specificity", "reversibility", "rest", "overload only", "Training should be specific."],
          ["E", "A training session should begin with a", "warm-up", "cool-down", "shower", "meal", "The body must be prepared."],
          ["M", "Working harder than normal to cause improvement is", "overload", "reversibility", "specificity", "recovery", "The body adapts to extra load."],
          ["M", "Losing fitness when training stops is", "reversibility", "progression", "overload", "specificity", "Use it or lose it."],
          ["M", "Exercises performed at a series of stations make up", "circuit training", "continuous training", "fartlek", "weight training only", "Stations form a circuit."],
          ["M", "Running with changes of pace and terrain is", "fartlek training", "circuit training", "weight training", "interval rest", "Fartlek means speed play."],
          ["H", "The estimated maximum heart rate of a 14-year-old is", "206 beats per minute", "234 beats per minute", "140 beats per minute", "220 beats per minute", "220 − 14 = 206."],
          ["H", "Alternating periods of hard work with rest is", "interval training", "continuous training", "flexibility training", "fartlek only", "Work and rest intervals alternate."],
          ["H", "Increasing the training load gradually over weeks applies", "progression", "reversibility", "rest", "specificity", "Sudden increases cause injury."],
        ],
      },
      {
        week: 3,
        title: "Long jump",
        subtopics: ["Facilities for long jump", "Phases of the long jump", "Flight techniques", "Rules and measurement"],
        objectives: ["Identify long jump facilities", "Perform the phases of the long jump", "Describe flight techniques", "Apply the rules and measure a jump"],
        lesson: {
          title: "Jumping for Distance",
          summary: "Perform the long jump and apply its rules.",
          minutes: 45,
          notes: `## Facilities
**runway** (at least 40 m long), **take-off board** (white board with a foul indicator/plasticine), **landing pit** filled with soft, level **sand**, measuring tape, rake, flags (white for valid, red for foul).

## Phases of the long jump
| Phase | Key points |
|---|---|
| **approach (run-up)** | accelerate smoothly over a measured distance (check marks); reach top controllable speed |
| **take-off** | plant the take-off foot flat and firmly on the board; drive the free knee and arms upward; body upright |
| **flight** | maintain balance; prepare legs for landing |
| **landing** | extend legs forward; swing arms forward; fall **forward**, not backward |

## Flight techniques
- **sail (float)**: simplest; knees drawn up in the air
- **hang**: body extended with arms and legs back, then brought forward
- **hitch-kick**: "running in the air" with cycling leg action (advanced)

## Rules
- a jump is a **foul** if the athlete's foot touches the ground **beyond the take-off line**, takes off outside the board ends, or walks back through the pit after landing
- somersaulting is not allowed
- in competition, athletes usually get **3 attempts**, and the best eight may get 3 more
- the **best valid jump** counts

## Measurement
Measured from the **take-off line** to the **nearest mark in the sand made by any part of the body** (for example, a hand that falls back), at right angles to the take-off line.`,
          examples: `**Example 1.** What are the four phases of the long jump? *Answer:* **approach, take-off, flight, landing**.

**Example 2.** Why should a jumper fall forward on landing? *Answer:* Falling back **reduces the measured distance**.

**Example 3.** From where is a long jump measured? *Answer:* from the **take-off line** to the **nearest mark** in the sand.`,
        },
        questions: [
          ["E", "The long jump landing pit is filled with", "sand", "water", "stones", "sawdust only", "Sand cushions the landing."],
          ["E", "The run before the jump is the", "approach", "flight", "landing", "recovery", "It builds speed."],
          ["E", "The board from which a long jumper takes off is the", "take-off board", "stop board", "starting block", "springboard", "It marks the take-off line."],
          ["M", "The simplest flight technique in the long jump is the", "sail", "hitch-kick", "hang", "Fosbury flop", "The knees are drawn up."],
          ["M", "The flight technique that looks like running in the air is the", "hitch-kick", "sail", "hang", "scissors", "Legs cycle in the air."],
          ["M", "A long jump is a foul if the athlete", "steps beyond the take-off line", "lands in the sand", "runs fast", "uses check marks", "Overstepping is illegal."],
          ["M", "On landing, a long jumper should fall", "forward", "backward", "sideways out of the pit", "onto the runway", "Falling back reduces distance."],
          ["H", "A long jump is measured from the take-off line to the", "nearest mark in the sand made by any part of the body", "furthest mark in the sand", "heel of the leading foot only", "end of the pit", "The nearest mark counts."],
          ["H", "The correct order of the phases of the long jump is", "approach, take-off, flight, landing", "flight, approach, landing, take-off", "take-off, approach, landing, flight", "landing, flight, take-off, approach", "Run, jump, fly, land."],
          ["H", "Marks placed on the runway to help a jumper hit the board accurately are", "check marks", "lane lines", "sectors", "hurdles", "They regulate the approach."],
        ],
      },
      {
        week: 4,
        title: "High jump",
        subtopics: ["Facilities for high jump", "Phases of the high jump", "High jump styles", "Rules of the high jump"],
        objectives: ["Identify high jump facilities", "Describe the phases of the high jump", "Compare high jump styles", "Apply the rules of the high jump"],
        lesson: {
          title: "Jumping for Height",
          summary: "Perform basic high jump techniques and apply the rules.",
          minutes: 45,
          notes: `## Facilities
two **uprights (stands)**, a **crossbar**, a semicircular or fan-shaped **approach area**, and a thick **foam landing area** (for modern techniques). In schools, simple styles such as the scissors may be taught with a soft landing.

## Phases
1. **approach** — a controlled run (curved for the flop, straight/angled for others)
2. **take-off** — from **one foot**; drive the free leg and arms upward
3. **bar clearance (flight)** — getting the body over the bar
4. **landing** — safely on the landing area

## High jump styles
| Style | Description |
|---|---|
| **scissors** | approach from the side; legs swing over one after the other in a scissor action; land on the feet |
| **western roll** | body rolls over the bar sideways |
| **straddle** | athlete goes over face-down, straddling the bar |
| **Fosbury flop** | curved approach; goes over the bar **head first and back first**, lands on the shoulders and back; the most used style today (introduced by Dick Fosbury in the 1960s) |

## Rules
- take off from **one foot** only
- a failure is recorded if the athlete **knocks the bar off**, or touches the ground or landing area beyond the plane of the bar without clearing it
- **three consecutive failures** eliminate the athlete
- the bar is raised after each round; the athlete who clears the greatest height wins
- ties are broken by fewest failures at the last height cleared, then fewest total failures
- height is measured from the ground to the **lowest point of the upper side** of the crossbar`,
          examples: `**Example 1.** Which style lands the athlete on the back? *Answer:* the **Fosbury flop**.

**Example 2.** How many consecutive failures eliminate a high jumper? *Answer:* **three**.

**Example 3.** From how many feet must a high jumper take off? *Answer:* **one** foot.`,
        },
        questions: [
          ["E", "In the high jump, athletes try to clear a", "crossbar", "net", "hurdle", "rope", "The bar is raised each round."],
          ["E", "A high jumper must take off from", "one foot", "both feet", "the hands", "the knees", "A two-foot take-off is illegal."],
          ["E", "The most widely used high jump style today is the", "Fosbury flop", "scissors", "straddle", "western roll", "It is back first over the bar."],
          ["M", "In the scissors style, the jumper", "swings the legs over one after the other", "goes over back first", "goes over face down", "dives head first onto sand", "The legs make a scissor action."],
          ["M", "The straddle style takes the athlete over the bar", "face-down", "back first", "feet first sitting", "upside-down on the hands", "The body straddles the bar."],
          ["M", "The Fosbury flop uses a", "curved approach", "straight approach only", "standing start without run", "two-foot take-off", "The curve helps rotation."],
          ["M", "An athlete is eliminated after", "three consecutive failures", "one failure", "five successes", "two clearances", "Three misses in a row."],
          ["H", "Knocking the crossbar off during an attempt is recorded as a", "failure", "clearance", "tie", "false start", "The attempt fails."],
          ["H", "High jump height is measured from the ground to the", "lowest point of the upper side of the crossbar", "top of the uprights", "athlete's head", "landing area", "This is the standard measurement."],
          ["H", "A thick foam landing area is necessary for the Fosbury flop because the athlete", "lands on the shoulders and back", "lands on the feet", "never lands", "lands in water", "The back needs protection."],
        ],
      },
      {
        week: 5,
        title: "Shot put",
        subtopics: ["Facilities and equipment", "Holding the shot", "Putting techniques", "Rules and safety"],
        objectives: ["Identify shot put facilities and implements", "Hold the shot correctly", "Describe the standing and glide techniques", "Apply the rules and safety measures"],
        lesson: {
          title: "Putting the Shot",
          summary: "Put the shot using correct technique and rules.",
          minutes: 45,
          notes: `## Facilities and equipment
- **throwing circle**: about **2.135 m** in diameter
- **stop board**: curved board at the front of the circle
- **landing sector**: marked by lines at an angle of about **35°**
- **shot**: a solid metal ball — senior men **7.26 kg**, senior women **4 kg** (lighter shots for younger age groups)

## Holding the shot
- rest the shot on the **base of the fingers** (not the palm), fingers slightly spread, thumb for support
- place it against the **neck**, under the jaw, elbow raised
- the shot is **pushed (put)**, not thrown

## Techniques
| Technique | Description |
|---|---|
| **standing put** | side-on stance at the front of the circle; rotate hips and push the shot from the neck; beginners learn this first |
| **glide (O'Brien) technique** | start facing the back of the circle; glide backwards across the circle; turn and push |
| **rotational (spin)** | a turn like a discus thrower before release; advanced |
Key: power comes from the **legs and hips**, then trunk, then arm; release at about **40°** angle; follow through and reverse the feet to stay in the circle.

## Rules
- start from a stationary position inside the circle
- the shot must stay close to the neck and not drop behind the shoulder line
- the athlete must not touch the top of the stop board or ground outside the circle
- the shot must land **within the sector**
- the athlete must **leave from the back half** of the circle after the shot lands
- measurement from the nearest mark made by the shot to the inside edge of the circle

## Safety
throw only on signal; nobody stands in the sector; carry the shot, never throw it back; keep implements dry.`,
          examples: `**Example 1.** What is the weight of the senior women's shot? *Answer:* **4 kg**.

**Example 2.** Why must the shot be "put" rather than thrown? *Answer:* The **rules require it to be pushed** from the neck.

**Example 3.** From which half of the circle must the athlete leave? *Answer:* the **back half**.`,
        },
        questions: [
          ["E", "In shot put, the athlete pushes a", "metal ball", "spear", "disc", "baton", "The shot is a heavy ball."],
          ["E", "The shot put is performed from a", "throwing circle", "runway", "sand pit", "swimming pool", "The circle is the throwing area."],
          ["E", "The shot must land within the", "landing sector", "take-off board", "lane", "relay zone", "Throws outside the sector are fouls."],
          ["M", "The shot is held at the", "base of the fingers, against the neck", "palm, held far from the body", "fingertips above the head", "elbow", "This is the correct grip."],
          ["M", "The weight of the senior men's shot is", "7.26 kg", "4 kg", "2 kg", "10 kg", "Women use 4 kg."],
          ["M", "The curved board at the front of the throwing circle is the", "stop board", "take-off board", "starting block", "springboard", "It stops the athlete overstepping."],
          ["M", "After a put, the athlete must leave the circle from the", "back half", "front half", "stop board", "sector", "Leaving from the front is a foul."],
          ["H", "In the glide technique, the athlete starts", "facing the back of the circle", "facing the sector", "outside the circle", "sitting down", "The glide moves backwards across the circle."],
          ["H", "The main source of power in the shot put comes from the", "legs and hips", "fingers only", "neck muscles", "wrist alone", "Power flows from the ground up."],
          ["H", "For safety during shot put practice, athletes should", "throw only on signal with nobody in the sector", "throw the shot back to the circle", "stand in the sector", "practise without supervision", "Implements can cause serious injury."],
        ],
      },
      {
        week: 6,
        title: "Middle and long distance races",
        subtopics: ["Middle and long distance events", "Running technique and pace", "Race tactics", "Rules and training"],
        objectives: ["Identify middle and long distance events", "Describe efficient running technique and pacing", "Explain simple race tactics", "State rules and training methods"],
        lesson: {
          title: "Running the Distance",
          summary: "Pace and plan middle and long distance races.",
          minutes: 40,
          notes: `## Events
- **middle distance**: **800 m** and **1500 m** (also the mile)
- **long distance**: **5000 m**, **10,000 m**, cross-country, road races, **marathon (42.195 km)**

## Running technique
- run tall with a slight forward lean
- relaxed shoulders, arms swinging comfortably
- land lightly on the mid-foot; shorter strides than sprinting
- rhythmic breathing
- economy of effort — avoid wasted movement

## Pace
**Pace** is the speed at which a runner covers a distance. Good pacing means **spreading energy evenly** so the runner does not tire too early. Even pace is usually most efficient.
Example: running 1500 m in 6 minutes means an average of **90 seconds per 375 m lap segment**, or **96 seconds per 400 m lap**.

## Tactics
- **front running**: leading from the start at a strong pace
- **sitting in (drafting)**: running behind a leader to save energy
- **kick finish**: a fast sprint at the end
- avoid being **boxed in** by other runners

## Rules
- a **standing start** is used
- in the **800 m**, runners stay in lanes until the end of the first bend (the **break line**), then may move to the inside lane
- longer races start from a curved **start line** without lanes
- pushing, tripping or cutting in front of others causes disqualification
- runners must not leave the track to shorten the distance

## Training
continuous runs, fartlek, interval training, hill running, cross-country; adequate diet, water and rest.`,
          examples: `**Example 1.** Is the 1500 m middle or long distance? *Answer:* **middle distance**.

**Example 2.** What is a kick finish? *Answer:* A **fast sprint at the end** of the race.

**Example 3.** In the 800 m, when can runners leave their lanes? *Answer:* after the **break line** at the end of the first bend.`,
        },
        questions: [
          ["E", "The 800 m and 1500 m are", "middle distance races", "sprints", "field events", "relays", "They are between sprints and long distance."],
          ["E", "The 10,000 m is a", "long distance race", "sprint", "hurdle race", "field event", "It covers 25 laps."],
          ["E", "Distance races begin with a", "standing start", "crouch start", "rolling start", "diving start", "No blocks are used."],
          ["M", "The speed at which a runner covers a distance is", "pace", "reaction time", "power", "flexibility", "Pacing spreads energy."],
          ["M", "A fast sprint at the end of a distance race is a", "kick finish", "false start", "relay exchange", "glide", "It decides many races."],
          ["M", "Running behind a leader to save energy is", "sitting in (drafting)", "front running", "boxing in", "false starting", "The leader breaks the wind."],
          ["M", "In the 800 m, runners stay in lanes until the", "end of the first bend", "finish line", "start of the last lap", "halfway point", "They then break for the inside."],
          ["H", "A runner who is surrounded by others and cannot move out is", "boxed in", "leading", "drafting", "lapped", "Tactics should avoid this."],
          ["H", "A runner covers 1500 m in 6 minutes. The average time for each 400 m is", "96 seconds", "60 seconds", "120 seconds", "80 seconds", "360 s ÷ 3.75 laps = 96 s."],
          ["H", "Compared with sprinting, distance running uses", "shorter strides and relaxed arm action", "maximum speed from start to finish", "a crouch start", "no breathing rhythm", "Economy of effort matters."],
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
        title: "Basketball fundamentals",
        subtopics: ["Nature of basketball", "Court and equipment", "Basic skills", "Basic rules and violations"],
        objectives: ["Describe basketball as a team game", "Identify the court and equipment", "Perform basic basketball skills", "State basic rules and violations"],
        lesson: {
          title: "Playing Basketball",
          summary: "Perform basketball skills and apply the basic rules.",
          minutes: 45,
          notes: `## Nature of basketball
**Basketball** is played by **two teams of five players** each. Players score by shooting the ball through the opponent's **basket (hoop)**. The game was invented by **James Naismith** in **1891** in the USA. The international governing body is **FIBA**.

## Court and equipment
- court: **28 m × 15 m** (FIBA)
- basket (ring) height: **3.05 m** above the floor
- **three-point line**, **free-throw line**, centre circle, restricted area
- ball, backboards, rings with nets, scoreboard, shot clock

## Duration (FIBA)
**four quarters of 10 minutes** each.

## Scoring
- field goal inside the three-point line: **2 points**
- field goal beyond the three-point line: **3 points**
- free throw: **1 point**

## Basic skills
**dribbling** (bouncing the ball with one hand), **passing** (chest pass, bounce pass, overhead pass), **shooting** (set shot, jump shot, **lay-up**), **rebounding** (catching the ball off the rim or board), **pivoting**, **defending**.

## Violations
| Violation | Meaning |
|---|---|
| **travelling** | moving with the ball without dribbling (taking too many steps) |
| **double dribble** | dribbling, stopping, then dribbling again; or dribbling with both hands |
| **out of bounds** | ball or player with ball touching the boundary line or outside |
| **3-second rule** | an attacker staying in the opponent's restricted area for more than 3 seconds |
| **shot clock** | failing to attempt a shot within **24 seconds** |

## Fouls
illegal personal contact (pushing, holding, charging, blocking). A player is disqualified after **5 personal fouls** (FIBA).`,
          examples: `**Example 1.** How many points is a free throw worth? *Answer:* **1 point**.

**Example 2.** What is travelling? *Answer:* **Moving with the ball without dribbling**.

**Example 3.** Who invented basketball? *Answer:* **James Naismith** (1891).`,
        },
        questions: [
          ["E", "The number of basketball players per team on court is", "five", "six", "seven", "eleven", "Five players per side."],
          ["E", "Bouncing the ball continuously with one hand is", "dribbling", "passing", "shooting", "rebounding", "It moves the ball legally."],
          ["E", "Basketball was invented by", "James Naismith", "Pierre de Coubertin", "Dick Fosbury", "William Morgan", "He invented it in 1891."],
          ["M", "A shot scored from beyond the three-point line is worth", "3 points", "2 points", "1 point", "4 points", "It is a long-range shot."],
          ["M", "A free throw is worth", "1 point", "2 points", "3 points", "0 points", "It is taken from the free-throw line."],
          ["M", "Moving with the ball without dribbling is", "travelling", "double dribble", "charging", "rebounding", "Too many steps are taken."],
          ["M", "Catching the ball after a missed shot bounces off the rim is", "rebounding", "dribbling", "pivoting", "travelling", "Rebounds regain possession."],
          ["H", "Dribbling, stopping and then dribbling again is", "double dribble", "travelling", "a lay-up", "a pivot", "It is a violation."],
          ["H", "Under FIBA rules, a team must attempt a shot within", "24 seconds", "3 seconds", "10 minutes", "60 seconds", "This is the shot clock."],
          ["H", "The height of a basketball ring above the floor is", "3.05 m", "2.43 m", "1.52 m", "4.5 m", "It is about 10 feet."],
        ],
      },
      {
        week: 2,
        title: "Handball fundamentals",
        subtopics: ["Nature of handball", "Court and equipment", "Basic skills", "Basic rules"],
        objectives: ["Describe handball as a team game", "Identify the court and equipment", "Perform basic handball skills", "State basic handball rules"],
        lesson: {
          title: "Playing Handball",
          summary: "Perform handball skills and apply the basic rules.",
          minutes: 45,
          notes: `## Nature of handball
**Handball** is played by **two teams of seven players** (six court players and one **goalkeeper**). Players pass and throw the ball with their **hands** and score by throwing it into the opponent's goal. The international governing body is the **IHF**.

## Court and equipment
- court: **40 m × 20 m**
- goals: **3 m wide and 2 m high**
- **goal area line** (6 m line) — only the goalkeeper may stand inside the goal area
- **free-throw line** (9 m dotted line)
- **7-metre line** for penalty throws
- ball (size depends on age and sex)

## Duration
senior matches: **two halves of 30 minutes**.

## Basic skills
**passing** (shoulder pass, bounce pass), **catching**, **dribbling** (bouncing with one hand), **shooting** (jump shot, standing shot), **feinting** (faking), **goalkeeping**, **defending**.

## Basic rules
- a player may take **at most three steps** while holding the ball
- a player may hold the ball for **at most three seconds**
- no **double dribbling**
- court players may not enter the **goal area** (except when in the air after a jump shot and releasing before landing)
- players may not touch the ball with the leg below the knee (goalkeepers may, in their area)
- illegal contact (pushing, holding, hitting) is a foul
- **7-metre throw** for a foul that destroys a clear chance to score
- **2-minute suspension**, yellow and red cards for misconduct`,
          examples: `**Example 1.** How many players are on a handball team on court? *Answer:* **seven** (including the goalkeeper).

**Example 2.** How many steps may a player take while holding the ball? *Answer:* **three**.

**Example 3.** Who may stand inside the goal area? *Answer:* only the **goalkeeper**.`,
        },
        questions: [
          ["E", "The number of players in a handball team on court is", "seven", "five", "six", "eleven", "Six court players and a goalkeeper."],
          ["E", "In handball, the ball is mainly played with the", "hands", "feet", "head", "bat", "It is a hand game."],
          ["E", "Only the goalkeeper may stand inside the", "goal area", "centre circle", "whole court", "spectator area", "Court players must stay out."],
          ["M", "A handball player holding the ball may take at most", "three steps", "one step", "ten steps", "five steps", "More steps is a violation."],
          ["M", "A player may hold the ball for at most", "three seconds", "ten seconds", "one minute", "thirty seconds", "This keeps the game moving."],
          ["M", "The goal area line in handball is", "6 m from the goal", "9 m from the goal", "3 m from the goal", "12 m from the goal", "It is the 6-metre line."],
          ["M", "A senior handball match consists of", "two halves of 30 minutes", "four quarters of 10 minutes", "two halves of 45 minutes", "three sets", "Total 60 minutes."],
          ["H", "A foul that destroys a clear scoring chance is punished with a", "7-metre throw", "corner kick", "free throw of 1 point", "jump ball", "It is like a penalty."],
          ["H", "Faking a movement to deceive an opponent is", "feinting", "dribbling", "blocking", "travelling", "It creates space."],
          ["H", "A temporary exclusion of a player for misconduct in handball lasts", "2 minutes", "10 minutes", "the whole match always", "30 seconds", "It is the 2-minute suspension."],
        ],
      },
      {
        week: 3,
        title: "Table tennis",
        subtopics: ["Nature of table tennis", "Equipment", "Grips and basic strokes", "Rules and scoring"],
        objectives: ["Describe table tennis", "Identify table tennis equipment", "Perform grips and basic strokes", "Apply the rules and scoring"],
        lesson: {
          title: "Playing Table Tennis",
          summary: "Use correct grips and strokes and apply table tennis rules.",
          minutes: 45,
          notes: `## Nature
**Table tennis (ping-pong)** is a racket game played by **two players (singles)** or **four players (doubles)** who hit a light ball back and forth over a net on a table. The world governing body is the **ITTF**.

## Equipment
- table: **2.74 m long, 1.525 m wide, 76 cm high**
- net: **15.25 cm** high
- ball: **40 mm** diameter, white or orange
- **bat (racket/paddle)** covered with rubber (usually one red side and one black side)

## Grips
- **shakehand grip**: like shaking hands; the most common
- **penhold grip**: held like a pen; common in parts of Asia

## Basic strokes
| Stroke | Use |
|---|---|
| **push** | gentle backspin return close to the table |
| **drive** | fast, flat or topspin attacking stroke |
| **block** | returning a fast attack by holding the bat still |
| **chop** | defensive backspin from far behind the table |
| **smash** | powerful kill shot on a high ball |
| **loop** | heavy topspin stroke |

## Service rules
- ball rests on the **open, flat palm** of the free hand
- toss the ball **at least 16 cm** almost vertically
- strike it as it falls, behind the end line and above the table surface
- in singles, the ball must bounce **once on the server's side**, then once on the receiver's side
- in doubles, the service goes **diagonally** from the right half-court to the right half-court

## Scoring
- a game is won by the first player to **11 points** with a lead of **2** (e.g. 12–10)
- service changes every **2 points**; at 10–10 it changes every point
- a match is best of 3, 5 or 7 games`,
          examples: `**Example 1.** How many points win a table tennis game? *Answer:* **11**, with a 2-point lead.

**Example 2.** Which grip is most common? *Answer:* the **shakehand grip**.

**Example 3.** How often does service change? *Answer:* every **2 points** (every point at 10–10).`,
        },
        questions: [
          ["E", "Table tennis is also called", "ping-pong", "squash", "lawn tennis", "badminton", "It is a popular nickname."],
          ["E", "The most common grip in table tennis is the", "shakehand grip", "penhold grip", "fist grip", "overlap grip", "It resembles a handshake."],
          ["E", "A table tennis game with singles players has", "two players", "four players", "six players", "eleven players", "Singles is one against one."],
          ["M", "A table tennis game is won by the first to", "11 points with a 2-point lead", "21 points", "25 points", "15 points", "Current scoring uses 11."],
          ["M", "In table tennis, service changes every", "2 points", "5 points", "game", "10 points", "At 10–10 it changes every point."],
          ["M", "When serving, the ball must be tossed at least", "16 cm", "1 m", "2 cm", "50 cm", "It must be visible."],
          ["M", "A powerful stroke on a high ball to win the point is a", "smash", "push", "block", "chop", "It is a kill shot."],
          ["H", "In doubles, the service must go", "diagonally from right half to right half", "straight down the side", "to any part of the table", "over the net twice", "Doubles service is diagonal."],
          ["H", "A defensive backspin stroke played far from the table is the", "chop", "drive", "smash", "loop", "It slows the ball."],
          ["H", "In a singles service, the ball must bounce", "once on the server's side, then once on the receiver's side", "only on the receiver's side", "twice on the server's side", "not at all", "This is the legal service path."],
        ],
      },
      {
        week: 4,
        title: "Badminton",
        subtopics: ["Nature of badminton", "Court and equipment", "Basic strokes", "Rules and scoring"],
        objectives: ["Describe badminton", "Identify the court and equipment", "Perform basic strokes", "Apply badminton rules and scoring"],
        lesson: {
          title: "Playing Badminton",
          summary: "Perform badminton strokes and apply its rules.",
          minutes: 45,
          notes: `## Nature
**Badminton** is a racket game played with a **shuttlecock** over a high net, in **singles** or **doubles**. The world governing body is the **Badminton World Federation (BWF)**.

## Court and equipment
- court: **13.4 m long**; **5.18 m** wide for singles and **6.1 m** for doubles
- net: about **1.55 m** high at the posts and **1.524 m** at the centre
- **shuttlecock** (feathered or synthetic) and light **racket**

## Basic strokes
| Stroke | Description |
|---|---|
| **serve** | underarm stroke to start a rally (short serve or long/high serve) |
| **clear** | high, deep shot to the back of the opponent's court |
| **drop shot** | soft shot that falls just over the net |
| **smash** | powerful downward attacking shot |
| **drive** | fast, flat shot across the net |
| **net shot** | gentle shot played close to the net |

## Grip
**forehand grip** ("shake hands" with the racket) and **backhand grip** (thumb pressed on the back of the handle).

## Rules
- the serve must be **underarm**, hit below the server's waist, diagonally into the opposite service court
- the shuttle must not touch the ground on your side
- a player may hit the shuttle only once per stroke; no touching the net with body or racket
- a shuttle landing **on the line is in**

## Scoring
- **rally-point scoring**: a point on every rally
- a game is won at **21 points** with a lead of **2**; at 29–29, the first to **30** wins
- a match is **best of three games**
- the server serves from the **right court** when his or her score is even and from the **left** when odd`,
          examples: `**Example 1.** What is used instead of a ball in badminton? *Answer:* a **shuttlecock**.

**Example 2.** How many points win a game? *Answer:* **21**, with a 2-point lead (maximum 30).

**Example 3.** A soft shot that falls just over the net is a **drop shot**.`,
        },
        questions: [
          ["E", "Badminton is played with a racket and a", "shuttlecock", "tennis ball", "baton", "puck", "The shuttle has feathers."],
          ["E", "A powerful downward attacking shot in badminton is the", "smash", "clear", "serve", "net shot", "It is hit steeply down."],
          ["E", "The world governing body of badminton is the", "BWF", "FIFA", "FIBA", "IHF", "Badminton World Federation."],
          ["M", "A high, deep shot to the back of the opponent's court is the", "clear", "drop shot", "smash", "drive", "It pushes the opponent back."],
          ["M", "A badminton game is won at", "21 points with a 2-point lead", "11 points", "25 points", "15 points", "The maximum score is 30."],
          ["M", "The badminton serve must be", "underarm and diagonal", "overarm and straight", "thrown by hand", "bounced first", "It is hit below the waist."],
          ["M", "A shuttle that lands on the boundary line is", "in", "out", "a let", "a fault always", "Lines are part of the court."],
          ["H", "When the server's score is even, the serve is taken from the", "right service court", "left service court", "back line", "net", "Odd scores serve from the left."],
          ["H", "At 29–29 in a badminton game, the winner is the first to reach", "30", "31", "35", "29", "30 points is the cap."],
          ["H", "A soft shot that just clears the net and drops steeply is the", "drop shot", "clear", "smash", "drive", "It surprises opponents at the back."],
        ],
      },
      {
        week: 5,
        title: "Gymnastics: advanced floor skills",
        subtopics: ["Cartwheel", "Handstand and headstand", "Bridge and splits", "Linking skills into a sequence"],
        objectives: ["Perform a cartwheel", "Perform a handstand and headstand with support", "Perform bridge and split positions", "Link skills into a short floor sequence"],
        lesson: {
          title: "Building a Floor Routine",
          summary: "Perform and link intermediate floor skills safely.",
          minutes: 45,
          notes: `## Cartwheel
1. stand facing forward, arms raised
2. step forward into a lunge
3. place hands on the mat one after the other in a line
4. kick legs over the head, legs straight and apart ("star" shape)
5. land one foot after the other; finish standing, arms up
Moves like a **wheel** — hands and feet touch in a straight line.

## Handstand
1. lunge forward, arms beside the ears
2. place hands shoulder-width apart
3. kick one leg up, then bring the other to join it
4. **straight body**, tight stomach, eyes looking at the hands
5. hold, then step down
Use a **spotter** or wall when learning.

## Headstand
hands and forehead form a **triangle** on the mat; walk the feet in; lift legs slowly to vertical; hold; lower carefully. Weight is on the **forehead and hands**, not the top of the head alone. Practise with support.

## Bridge and splits
- **bridge (back arch)**: lie on the back; place hands by the ears and feet flat; push up to arch the body
- **splits**: legs extended in opposite directions (front or side splits) — needs good **flexibility**; do not force

## Linking into a sequence
A **sequence** links skills smoothly with a clear **start and finish**, e.g. *stand → forward roll → stork stand → cartwheel → V-sit → finish*.
Judges look for: **control**, smooth **linking**, body tension, extension, and variety.

## Safety
warm up and stretch well; use mats; have spotters; progress step by step; stop if you feel pain.`,
          examples: `**Example 1.** What shape do the hands and forehead make in a headstand? *Answer:* a **triangle**.

**Example 2.** Which skill looks like a turning wheel? *Answer:* the **cartwheel**.

**Example 3.** Name two qualities of a good sequence. *Answer:* **control** and **smooth linking**.`,
        },
        questions: [
          ["E", "A skill in which the body turns sideways like a wheel is the", "cartwheel", "forward roll", "stork stand", "V-sit", "Hands and feet move in a line."],
          ["E", "Balancing upside down on the hands is a", "handstand", "headstand", "bridge", "log roll", "The hands support the body."],
          ["E", "Legs extended in opposite directions on the floor form the", "splits", "bridge", "tuck", "stork", "It requires flexibility."],
          ["M", "In a headstand, the hands and forehead should form a", "triangle", "straight line", "circle", "square", "The triangle gives a stable base."],
          ["M", "Arching the body upward with hands and feet on the floor is the", "bridge", "splits", "cartwheel", "headstand", "It is a back arch."],
          ["M", "When learning a handstand, a gymnast should use", "a spotter or a wall", "no mat", "a crowded floor", "a hard concrete surface", "Support prevents falls."],
          ["M", "A series of gymnastic skills linked smoothly is a", "sequence", "relay", "circuit", "set", "It has a start and finish."],
          ["H", "During a handstand, the gymnast's body should be", "straight with a tight stomach", "bent at the hips", "twisted", "relaxed and floppy", "Body tension keeps balance."],
          ["H", "Judges of a floor sequence look for", "control and smooth linking", "speed only", "noise", "how many times the gymnast falls", "Quality matters."],
          ["H", "In a cartwheel, the legs pass over the head", "straight and apart", "tucked tightly", "crossed", "bent at the knees", "They form a star shape."],
        ],
      },
      {
        week: 6,
        title: "Sports injuries and their management",
        subtopics: ["Types of sports injuries", "Causes of sports injuries", "Management of soft tissue injuries", "Management of bone and joint injuries"],
        objectives: ["Classify common sports injuries", "State the causes of sports injuries", "Manage soft tissue injuries", "Give first aid for bone and joint injuries"],
        lesson: {
          title: "Dealing with Sports Injuries",
          summary: "Identify and manage common sports injuries.",
          minutes: 40,
          notes: `## Types of sports injuries
| Group | Injury | Meaning |
|---|---|---|
| **soft tissue** | **strain** | overstretching or tearing of a **muscle or tendon** ("pulled muscle") |
| | **sprain** | overstretching or tearing of a **ligament** at a joint (e.g. ankle) |
| | **bruise (contusion)** | bleeding under the skin from a blow |
| | **cuts, grazes, blisters** | skin injuries |
| **bone and joint** | **fracture** | a break or crack in a bone — **closed (simple)** or **open (compound)** where the bone breaks the skin |
| | **dislocation** | bone displaced out of its joint |
| **head** | **concussion** | brain disturbance from a blow to the head — dizziness, confusion, headache, vomiting |
| **others** | cramp, heat exhaustion, dehydration |

## Causes
no warm-up; poor fitness; wrong technique; overtraining and fatigue; unsafe facilities or equipment; rough play; wrong footwear; previous injury not healed.

## Managing soft tissue injuries — RICE
- **Rest**: stop the activity
- **Ice**: apply wrapped ice for 15–20 minutes every 2–3 hours for the first day or two
- **Compression**: firm bandage to limit swelling
- **Elevation**: raise the injured part above heart level
Avoid heat, massage and alcohol in the first 48 hours.

## Managing bone and joint injuries
- do **not** move the injured part unnecessarily; do **not** try to push a dislocation back
- **immobilise** with a splint, sling or padding in the position found
- for an open fracture, cover the wound with a clean dressing; control bleeding without pressing on the bone
- keep the casualty warm and calm
- get **medical help** quickly

## Head injury
remove the player from play; monitor; seek medical assessment; **no return to play the same day** if concussion is suspected.`,
          examples: `**Example 1.** An overstretched ankle ligament is a **sprain**.

**Example 2.** A fracture where the bone breaks through the skin is an **open (compound) fracture**.

**Example 3.** Should a player with suspected concussion continue the match? *Answer:* **No** — remove from play and seek medical help.`,
        },
        questions: [
          ["E", "A break or crack in a bone is a", "fracture", "strain", "sprain", "cramp", "Bones can crack or break."],
          ["E", "Bleeding under the skin caused by a blow is a", "bruise", "fracture", "dislocation", "blister", "It shows as discolouration."],
          ["E", "Overstretching or tearing a muscle is a", "strain", "sprain", "fracture", "dislocation", "It is a pulled muscle."],
          ["M", "Overstretching or tearing a ligament is a", "sprain", "strain", "fracture", "concussion", "Ligaments join bones."],
          ["M", "A bone displaced out of its joint is a", "dislocation", "sprain", "bruise", "cramp", "The joint is out of place."],
          ["M", "A fracture in which the bone breaks through the skin is", "an open (compound) fracture", "a closed fracture", "a sprain", "a bruise", "The wound is open."],
          ["M", "Dizziness, confusion and headache after a blow to the head may indicate", "concussion", "cramp", "blister", "sprain", "The brain is disturbed."],
          ["H", "First aid for a suspected fracture includes", "immobilising the limb and getting medical help", "straightening the bone", "making the player walk", "massaging the area", "Movement worsens the injury."],
          ["H", "A player with suspected concussion should", "not return to play that day", "continue playing", "be given alcohol", "run laps", "Rest and medical assessment are needed."],
          ["H", "During the first 48 hours after a sprain, one should avoid", "heat and massage", "rest", "ice", "elevation", "They increase swelling."],
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
        title: "The skeletal system",
        subtopics: ["Functions of the skeleton", "Divisions of the skeleton", "Types of bones", "Joints and movement"],
        objectives: ["State the functions of the skeleton", "Distinguish the axial and appendicular skeleton", "Classify bones by shape", "Describe types of joints and the movements they allow"],
        lesson: {
          title: "The Body's Framework",
          summary: "Describe the skeleton and joints and how they allow movement.",
          minutes: 40,
          notes: `## Functions of the skeleton
- **support** — gives the body shape
- **protection** — skull protects the brain; ribs protect the heart and lungs
- **movement** — bones act as levers for muscles
- **blood cell production** — in the **bone marrow**
- **storage of minerals** — calcium and phosphorus

An adult skeleton has **206 bones**.

## Divisions
| Division | Parts |
|---|---|
| **axial skeleton** | skull, vertebral column (backbone), ribs, sternum |
| **appendicular skeleton** | shoulder girdle (clavicle, scapula), arms, pelvic girdle, legs |

## Types of bones
| Type | Examples |
|---|---|
| **long bones** | femur (thigh — the longest bone), humerus, radius, ulna, tibia, fibula |
| **short bones** | carpals (wrist), tarsals (ankle) |
| **flat bones** | skull, ribs, scapula, sternum |
| **irregular bones** | vertebrae |
| **sesamoid bones** | patella (kneecap) |

## Joints
A **joint** is where **two or more bones meet**.
| Type | Movement | Examples |
|---|---|---|
| **fixed (fibrous)** | no movement | skull sutures |
| **slightly movable (cartilaginous)** | limited movement | between vertebrae |
| **freely movable (synovial)** | free movement | knee, elbow, shoulder, hip |

### Synovial joints
- **ball-and-socket**: movement in all directions — shoulder, hip
- **hinge**: movement in one plane — elbow, knee
- **pivot**: rotation — neck (atlas and axis)
- **gliding**: sliding — wrist, ankle bones

Joints are held by **ligaments** (bone to bone); muscles attach to bones by **tendons**.`,
          examples: `**Example 1.** What is the longest bone in the body? *Answer:* the **femur**.

**Example 2.** The hip is which type of joint? *Answer:* **ball-and-socket**.

**Example 3.** What connects bone to bone at a joint? *Answer:* **ligaments**.`,
        },
        questions: [
          ["E", "The number of bones in an adult human skeleton is", "206", "106", "306", "26", "Babies have more that later fuse."],
          ["E", "The skull protects the", "brain", "heart", "stomach", "kidneys", "It surrounds the brain."],
          ["E", "The place where two or more bones meet is a", "joint", "muscle", "tendon", "vein", "Joints allow movement."],
          ["M", "The longest bone in the human body is the", "femur", "humerus", "tibia", "radius", "It is the thigh bone."],
          ["M", "The shoulder and hip are examples of", "ball-and-socket joints", "hinge joints", "pivot joints", "fixed joints", "They move in all directions."],
          ["M", "The elbow and knee are", "hinge joints", "ball-and-socket joints", "fixed joints", "pivot joints", "They move like a door hinge."],
          ["M", "Bones of the skull are joined by", "fixed joints", "hinge joints", "ball-and-socket joints", "pivot joints", "They do not move."],
          ["H", "Blood cells are produced in the", "bone marrow", "ligaments", "tendons", "cartilage only", "Marrow makes blood cells."],
          ["H", "The skull, backbone and ribs form the", "axial skeleton", "appendicular skeleton", "pelvic girdle", "shoulder girdle", "They lie along the body's axis."],
          ["H", "Tough bands that connect bone to bone at joints are", "ligaments", "tendons", "muscles", "nerves", "Tendons join muscle to bone."],
        ],
      },
      {
        week: 2,
        title: "The muscular system",
        subtopics: ["Types of muscles", "Functions of muscles", "How muscles produce movement", "Effects of exercise on muscles"],
        objectives: ["Identify the types of muscles", "State the functions of muscles", "Explain how muscles work in pairs", "Describe the effects of exercise on muscles"],
        lesson: {
          title: "Muscles in Motion",
          summary: "Explain how muscles work and how exercise affects them.",
          minutes: 40,
          notes: `## Types of muscles
| Type | Control | Location |
|---|---|---|
| **skeletal (voluntary, striated)** | under **conscious control** | attached to bones; move the body |
| **smooth (involuntary)** | automatic | walls of the stomach, intestines, blood vessels, bladder |
| **cardiac** | automatic; never tires | only in the **heart** |
The body has **over 600** skeletal muscles.

## Functions of muscles
movement; maintaining **posture**; producing **heat** (shivering); pumping blood (cardiac); moving food through the gut (smooth); protecting internal organs.

## How muscles produce movement
- muscles are attached to bones by **tendons**
- muscles can only **pull (contract)**, not push
- muscles work in **antagonistic pairs**: when one contracts, the other relaxes
  - **agonist (prime mover)**: the muscle that contracts to cause movement
  - **antagonist**: the muscle that relaxes
- **example**: bending the elbow — **biceps contracts**, **triceps relaxes**; straightening — triceps contracts, biceps relaxes
- other pairs: **quadriceps and hamstrings** (knee), abdominals and back muscles

## Major muscles and actions
| Muscle | Location | Action |
|---|---|---|
| biceps | front of upper arm | bends elbow |
| triceps | back of upper arm | straightens elbow |
| quadriceps | front of thigh | straightens knee |
| hamstrings | back of thigh | bends knee |
| gastrocnemius (calf) | back of lower leg | points toes, pushes off |
| deltoid | shoulder | raises arm |
| abdominals | stomach | bends trunk |

## Effects of exercise
**short term**: muscles get warm; faster heart rate; fatigue; lactic acid build-up.
**long term**: bigger, stronger muscles (**hypertrophy**); better endurance; better tone and posture; stronger tendons.`,
          examples: `**Example 1.** Which muscle contracts when the elbow bends? *Answer:* the **biceps**.

**Example 2.** Where is cardiac muscle found? *Answer:* only in the **heart**.

**Example 3.** Why do muscles work in pairs? *Answer:* Muscles can **only pull**, so another muscle is needed to move the bone back.`,
        },
        questions: [
          ["E", "Muscles attached to bones and under conscious control are", "skeletal muscles", "cardiac muscles", "smooth muscles", "involuntary muscles only", "We control them at will."],
          ["E", "Cardiac muscle is found only in the", "heart", "stomach", "arm", "leg", "It pumps blood."],
          ["E", "Muscles are attached to bones by", "tendons", "ligaments", "nerves", "veins", "Tendons transmit pull."],
          ["M", "Muscles found in the walls of the stomach and intestines are", "smooth muscles", "skeletal muscles", "cardiac muscles", "voluntary muscles", "They work automatically."],
          ["M", "When the elbow bends, the muscle that contracts is the", "biceps", "triceps", "quadriceps", "hamstrings", "Biceps pulls the forearm up."],
          ["M", "The muscle at the front of the thigh that straightens the knee is the", "quadriceps", "hamstrings", "biceps", "deltoid", "It extends the knee."],
          ["M", "Muscles work in pairs because they can only", "pull", "push", "rotate", "stretch themselves", "Another muscle must pull back."],
          ["H", "Two muscles that work in opposition, one contracting while the other relaxes, form an", "antagonistic pair", "agonist chain", "ligament pair", "cardiac pair", "E.g. biceps and triceps."],
          ["H", "The increase in muscle size due to training is", "hypertrophy", "atrophy", "cramp", "dehydration", "Muscles grow with training."],
          ["H", "The muscle that relaxes while its partner contracts is the", "antagonist", "agonist", "prime mover", "tendon", "It allows smooth movement."],
        ],
      },
      {
        week: 3,
        title: "Environmental health",
        subtopics: ["Meaning of environmental health", "Refuse and sewage disposal", "Water supply and safety", "Pollution and its control"],
        objectives: ["Explain environmental health", "Describe proper refuse and sewage disposal", "Explain how to make water safe", "Identify types of pollution and control measures"],
        lesson: {
          title: "A Healthy Environment for All",
          summary: "Keep the environment clean to prevent disease.",
          minutes: 40,
          notes: `## Meaning
**Environmental health** deals with **factors in the surroundings** — air, water, soil, housing, food, waste — that affect human health, and how to control them.

## Refuse disposal
**Refuse** is solid waste (paper, food remains, plastics, cans).
Methods: **controlled tipping (sanitary landfill)**, **incineration** (burning in an incinerator), **composting** (organic waste into manure), **recycling**, **burying**.
Poor disposal breeds flies, rats and mosquitoes, blocks drains and causes flooding.

## Sewage disposal
**Sewage** is liquid waste containing human excreta and dirty water.
Methods: **water closet** connected to septic tank or sewer, **pit latrine** (located away from wells), **ventilated improved pit (VIP) latrine**.
**Open defecation** spreads cholera, typhoid and worms and should be ended.

## Water supply and safety
Sources: rain, rivers, streams, wells, boreholes, pipe-borne water.
Making water safe: **boiling**, **filtration**, **chlorination** (adding chlorine), **sedimentation**, storing in **covered, clean containers**; protecting wells.

## Pollution
**Pollution** is the introduction of **harmful substances** into the environment.
| Type | Causes | Control |
|---|---|---|
| **air** | smoke from vehicles, generators, bush burning, factories | regular vehicle servicing, tree planting, less burning |
| **water** | refuse and sewage in rivers, oil spills, chemicals | proper waste disposal, laws, treatment plants |
| **land (soil)** | plastics, chemicals, refuse dumps | recycling, proper disposal |
| **noise** | loudspeakers, generators, traffic | regulations, silencers |

## Personal role
keep surroundings clean; take part in **environmental sanitation**; plant trees; avoid littering; clear drains; report polluters.`,
          examples: `**Example 1.** Name one method of making water safe. *Answer:* **boiling** (or chlorination).

**Example 2.** What is sewage? *Answer:* **Liquid waste** containing human excreta and dirty water.

**Example 3.** Give one cause of air pollution. *Answer:* **smoke from vehicles** (or generators, bush burning).`,
        },
        questions: [
          ["E", "Solid waste such as paper and food remains is", "refuse", "sewage", "compost only", "smoke", "It is dry waste."],
          ["E", "Liquid waste containing human excreta is", "sewage", "refuse", "rainwater", "dew", "It must be disposed safely."],
          ["E", "Boiling water helps to", "kill germs", "add germs", "pollute it", "colour it", "Heat destroys pathogens."],
          ["M", "Burning refuse in a special furnace is", "incineration", "composting", "landfilling", "recycling", "It reduces volume."],
          ["M", "Turning organic waste into manure is", "composting", "incineration", "chlorination", "sedimentation", "Organic matter decomposes."],
          ["M", "Adding chlorine to water to kill germs is", "chlorination", "filtration", "boiling", "sedimentation", "Chlorine disinfects."],
          ["M", "Smoke from vehicles and generators causes", "air pollution", "water purification", "soil fertility", "noise control", "It releases harmful gases."],
          ["H", "Open defecation spreads diseases such as", "cholera and typhoid", "rickets and scurvy", "goitre", "night blindness", "Faeces contaminate water."],
          ["H", "A pit latrine should be sited", "away from wells", "next to the kitchen", "inside a well", "beside the dining room", "It can contaminate water."],
          ["H", "Loud music from loudspeakers at night is an example of", "noise pollution", "air pollution", "water pollution", "land pollution", "It disturbs rest and hearing."],
        ],
      },
      {
        week: 4,
        title: "Non-communicable diseases",
        subtopics: ["Meaning of non-communicable diseases", "Common non-communicable diseases", "Risk factors", "Prevention through healthy living"],
        objectives: ["Define non-communicable diseases", "Describe common non-communicable diseases", "Identify risk factors", "State ways of preventing non-communicable diseases"],
        lesson: {
          title: "Diseases of Lifestyle",
          summary: "Explain non-communicable diseases and how healthy living prevents them.",
          minutes: 40,
          notes: `## Meaning
**Non-communicable diseases (NCDs)** are diseases that **cannot be passed from one person to another**. Many develop slowly and last long.

## Common NCDs
| Disease | Description |
|---|---|
| **hypertension (high blood pressure)** | persistently high pressure of blood in the arteries; can lead to stroke and heart failure |
| **diabetes mellitus** | high blood sugar because the body does not make or use insulin properly |
| **heart disease** | narrowed arteries supplying the heart |
| **stroke** | blocked or burst blood vessel in the brain |
| **cancers** | uncontrolled growth of abnormal cells (e.g. lung, breast, cervical, prostate cancer) |
| **obesity** | excess body fat that harms health |
| **asthma** | narrowing of airways causing wheezing |
| **sickle cell disease** | inherited blood disorder (**genotype SS**) |

## Risk factors
- **unhealthy diet** (too much salt, sugar, fat)
- **physical inactivity**
- **tobacco** use
- harmful use of **alcohol**
- **obesity**
- stress
- **family history** (heredity) and age

## Prevention through healthy living
- eat a balanced diet: more fruits and vegetables, less salt, sugar and fat
- exercise regularly (at least **60 minutes** of activity daily for young people)
- avoid tobacco and alcohol
- maintain a healthy weight
- manage stress and sleep well
- go for regular **check-ups** (blood pressure, blood sugar)
- know your **genotype** before marriage to reduce sickle cell births`,
          examples: `**Example 1.** Is diabetes communicable? *Answer:* **No** — it is non-communicable.

**Example 2.** Name two risk factors for heart disease. *Answer:* **physical inactivity** and **tobacco use**.

**Example 3.** How can sickle cell births be reduced? *Answer:* by **genotype testing** and counselling before marriage.`,
        },
        questions: [
          ["E", "Diseases that cannot be passed from person to person are", "non-communicable diseases", "communicable diseases", "infectious diseases", "contagious diseases", "They are not spread by germs."],
          ["E", "High blood pressure is also called", "hypertension", "diabetes", "anaemia", "asthma", "Blood pressure is too high."],
          ["E", "Regular exercise helps to prevent", "obesity", "fitness", "good health", "strong muscles", "It burns excess energy."],
          ["M", "A disease in which blood sugar is too high is", "diabetes", "hypertension", "asthma", "stroke", "Insulin is not working well."],
          ["M", "Uncontrolled growth of abnormal cells is", "cancer", "malaria", "cholera", "measles", "Cells multiply abnormally."],
          ["M", "Which is a risk factor for non-communicable diseases?", "tobacco use", "regular exercise", "eating vegetables", "adequate sleep", "Smoking damages organs."],
          ["M", "A disease causing narrowing of the airways and wheezing is", "asthma", "diabetes", "goitre", "rickets", "Breathing becomes difficult."],
          ["H", "Sickle cell disease occurs in people with the genotype", "SS", "AA", "AS", "AO", "Two sickle genes cause the disease."],
          ["H", "A blocked or burst blood vessel in the brain causes", "stroke", "asthma", "diabetes", "anaemia", "Brain tissue is damaged."],
          ["H", "Reducing salt in the diet mainly helps to prevent", "hypertension", "night blindness", "goitre", "scurvy", "Salt raises blood pressure."],
        ],
      },
      {
        week: 5,
        title: "The Olympic Games",
        subtopics: ["Ancient Olympic Games", "Modern Olympic Games", "Olympic symbols and values", "Nigeria at the Olympics"],
        objectives: ["Describe the ancient Olympic Games", "Explain the revival of the modern Olympic Games", "Identify Olympic symbols and values", "State Nigeria's participation in the Olympics"],
        lesson: {
          title: "The World's Greatest Sports Festival",
          summary: "Trace the history and values of the Olympic Games.",
          minutes: 40,
          notes: `## Ancient Olympic Games
- began at **Olympia** in ancient **Greece**, traditionally dated **776 BC**
- held every **four years** in honour of the god **Zeus**
- events included running, wrestling, boxing, chariot racing and the pentathlon
- a truce stopped wars so athletes and spectators could travel safely
- abolished around **AD 393** by Roman Emperor Theodosius I

## Modern Olympic Games
- revived by **Baron Pierre de Coubertin** of France
- the **International Olympic Committee (IOC)** was formed in **1894**
- the first modern Games were held in **Athens, Greece, in 1896**
- held every **four years** (an **Olympiad**); the **Winter Olympics** are separate
- the **Paralympic Games** are for athletes with disabilities

## Olympic symbols and values
| Symbol | Meaning |
|---|---|
| **five interlocking rings** (blue, yellow, black, green, red on white) | the union of the **five continents** |
| **Olympic motto** | *"Citius, Altius, Fortius"* — **Faster, Higher, Stronger** (the IOC added *"Communiter"* — **Together** — in 2021) |
| **Olympic flame** | lit at Olympia and carried by a **torch relay** to the host city |
| **Olympic oath** | athletes promise to compete fairly |
**Olympic values:** excellence, friendship and respect.

## Nigeria at the Olympics
- Nigeria first took part in **1952** (Helsinki)
- Nigeria's first Olympic gold medals were won at **Atlanta 1996**: **Chioma Ajunwa** (women's long jump) and the **men's football team**
- Nigerian athletes have also won medals in athletics, boxing, weightlifting, taekwondo and other events
- the **Nigeria Olympic Committee** manages Nigeria's participation`,
          examples: `**Example 1.** Who revived the modern Olympic Games? *Answer:* **Baron Pierre de Coubertin**.

**Example 2.** What do the five rings represent? *Answer:* the **five continents** united.

**Example 3.** Who won Nigeria's first individual Olympic gold medal? *Answer:* **Chioma Ajunwa**, women's long jump, 1996.`,
        },
        questions: [
          ["E", "The ancient Olympic Games began in", "Greece", "Nigeria", "China", "Brazil", "They were held at Olympia."],
          ["E", "The Olympic Games are held every", "four years", "year", "two months", "ten years", "This period is an Olympiad."],
          ["E", "The modern Olympic Games were revived by", "Baron Pierre de Coubertin", "James Naismith", "Dick Fosbury", "Zeus", "He founded the IOC movement."],
          ["M", "The first modern Olympic Games were held in", "Athens in 1896", "Rome in 1960", "London in 1908", "Lagos in 1973", "Greece hosted the first."],
          ["M", "The five Olympic rings represent the", "five continents", "five sports", "five founders", "five host cities", "They show unity of continents."],
          ["M", "The Olympic motto 'Citius, Altius, Fortius' means", "Faster, Higher, Stronger", "Win at All Costs", "Play and Rest", "One World Only", "The motto is in Latin."],
          ["M", "The body that governs the Olympic movement is the", "IOC", "FIFA", "FIBA", "BWF", "International Olympic Committee."],
          ["H", "Nigeria's first Olympic gold medals were won at", "Atlanta 1996", "Helsinki 1952", "Tokyo 1964", "Sydney 2000", "Long jump and football."],
          ["H", "The Olympic Games for athletes with disabilities are the", "Paralympic Games", "Commonwealth Games", "All-Africa Games", "World Cup", "They follow the Olympics."],
          ["H", "The ancient Olympic Games were held in honour of", "Zeus", "Apollo only", "Poseidon", "Hermes", "Olympia was sacred to Zeus."],
        ],
      },
      {
        week: 6,
        title: "Contact and non-contact sports",
        subtopics: ["Classification of sports", "Contact sports", "Non-contact sports", "Sportsmanship and fair play"],
        objectives: ["Classify sports by contact and number of players", "Identify contact sports and their risks", "Identify non-contact sports", "Demonstrate sportsmanship and fair play"],
        lesson: {
          title: "Types of Sports and Fair Play",
          summary: "Classify sports and practise sportsmanship.",
          minutes: 40,
          notes: `## Classifying sports
| Basis | Classes | Examples |
|---|---|---|
| **number of players** | **individual** | athletics, swimming, gymnastics, boxing |
| | **dual** | table tennis singles, badminton singles, tennis singles |
| | **team** | football, basketball, volleyball, handball, hockey |
| **physical contact** | **contact** | football, basketball, handball, rugby, wrestling, boxing, judo |
| | **non-contact** | volleyball, table tennis, badminton, athletics (in lanes), swimming, golf |
| **equipment** | ball games, racket games, combat sports, water sports |

## Contact sports
Players are allowed some **physical contact** within the rules.
**Combat sports** (wrestling, boxing, judo, taekwondo) involve deliberate contact.
**Risks:** bruises, fractures, dislocations, concussion.
**Safety:** protective equipment (mouthguards, headgear, shin guards, gloves), strict rules, qualified referees, good fitness and technique.

## Non-contact sports
Players are separated by a **net** or **lanes**, or perform alone, so contact is not part of play. Injuries are mostly from overuse or falls.

## Sportsmanship and fair play
**Sportsmanship** means playing fairly and treating others with respect, win or lose.
- obey the rules and the officials' decisions
- respect opponents, teammates and spectators
- shake hands before and after games
- do not cheat, fake injuries or take banned drugs (**doping**)
- help an injured opponent
- win without boasting; lose without bitterness
**Unsporting behaviour:** violence, abusing officials, deliberate fouls, match-fixing, doping.`,
          examples: `**Example 1.** Is table tennis a contact or non-contact sport? *Answer:* **non-contact**.

**Example 2.** Name one team sport. *Answer:* **football** (or basketball, volleyball).

**Example 3.** Give one act of sportsmanship. *Answer:* **shaking hands** with opponents after a game.`,
        },
        questions: [
          ["E", "A sport played by teams of several players is a", "team sport", "individual sport", "dual sport only", "non-sport", "Football is a team sport."],
          ["E", "Which is a non-contact sport?", "volleyball", "wrestling", "boxing", "rugby", "A net separates the teams."],
          ["E", "Shaking hands with opponents after a game shows", "sportsmanship", "cheating", "violence", "doping", "It shows respect."],
          ["M", "Sports in which opponents grapple, throw or strike each other, such as judo, are", "combat sports", "racket games", "water sports", "non-contact sports", "They involve deliberate contact."],
          ["M", "A sport in which one player competes against one other player is", "a dual sport", "a team sport", "a relay", "a combat team game", "Singles games are dual."],
          ["M", "Mouthguards and headgear are worn in contact sports to", "prevent injuries", "look fashionable", "cheat", "slow down opponents", "They protect the body."],
          ["M", "Swimming and gymnastics are classified as", "individual sports", "team sports", "contact sports", "dual sports", "Athletes perform alone."],
          ["H", "Arranging the result of a match illegally is", "match-fixing", "sportsmanship", "officiating", "coaching", "It destroys fair play."],
          ["H", "Pretending to be fouled to deceive the referee is", "unsporting behaviour", "fair play", "good tactics allowed by rules", "sportsmanship", "It is cheating."],
          ["H", "Players are separated by lanes or a net in", "non-contact sports", "contact sports", "combat sports", "rugby", "This prevents physical contact."],
        ],
      },
    ],
  },
];
