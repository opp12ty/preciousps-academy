import type { TermPlan } from "../types";

/** JSS3 Physical and Health Education — original Precious PS content following the national Basic Education structure. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Hurdles",
        subtopics: ["Hurdle events and specifications", "Phases of hurdling", "Lead leg and trail leg action", "Rules of hurdle races"],
        objectives: ["Identify hurdle events and their specifications", "Describe the phases of hurdling", "Perform lead leg and trail leg drills", "State the rules of hurdle races"],
        lesson: {
          title: "Sprinting over Barriers",
          summary: "Perform hurdling technique and apply hurdle rules.",
          minutes: 45,
          notes: `## Hurdle events
| Event | Number of hurdles | Senior hurdle height |
|---|---|---|
| **100 m hurdles (women)** | 10 | 0.838 m |
| **110 m hurdles (men)** | 10 | 1.067 m |
| **400 m hurdles** | 10 | men 0.914 m; women 0.762 m |
Lower hurdles and shorter distances are used for school age groups.

## Phases of hurdling
1. **start and approach** — crouch start; usually **7 or 8 strides** to the first hurdle
2. **take-off** — attack the hurdle from about 2 m away; drive the lead knee up
3. **clearance** — lean the trunk forward; clear the hurdle with minimum height ("run over, not jump over")
4. **landing** — land on the ball of the lead foot close to the hurdle, ready to run
5. **running between hurdles** — usually **three strides** between hurdles in the sprint hurdles
6. **run-in** to the finish

## Lead leg and trail leg
- **lead leg**: the first leg over; the knee drives up, then the leg extends and snaps down quickly
- **trail leg**: follows, **bent at the knee and turned out to the side**, knee pulled through high towards the armpit
- the arm opposite the lead leg reaches forward for balance

## Rules
- stay in your own lane
- an athlete is **disqualified** for trailing the foot or leg **beside the hurdle below the height of the bar**, for deliberately knocking hurdles over with hand or foot, or for jumping a hurdle in another lane
- **knocking down a hurdle accidentally is not a foul**, but it slows the runner
- a false start leads to disqualification`,
          examples: `**Example 1.** How many hurdles are in the 110 m hurdles? *Answer:* **10**.

**Example 2.** How many strides are usually taken between sprint hurdles? *Answer:* **three**.

**Example 3.** Is knocking a hurdle over accidentally a foul? *Answer:* **No**, but it slows the athlete.`,
        },
        questions: [
          ["E", "A race in which athletes run over barriers is a", "hurdle race", "relay", "marathon", "walk", "Hurdles are barriers."],
          ["E", "The number of hurdles in the 110 m hurdles is", "10", "8", "12", "5", "Each sprint hurdle race has 10."],
          ["E", "The first leg to go over the hurdle is the", "lead leg", "trail leg", "support leg", "back leg", "It leads the clearance."],
          ["M", "The men's sprint hurdle race is the", "110 m hurdles", "100 m hurdles", "200 m hurdles", "60 m hurdles only", "Women run 100 m."],
          ["M", "The usual number of strides between sprint hurdles is", "three", "one", "seven", "ten", "It keeps a rhythm."],
          ["M", "When clearing a hurdle, the hurdler should", "lean the trunk forward and clear with minimum height", "jump high and upright", "stop before the hurdle", "clear with both feet together", "Run over, don't jump."],
          ["M", "The trail leg crosses the hurdle", "bent at the knee and turned out to the side", "straight and pointing down", "under the hurdle", "before the lead leg", "This keeps it clear of the bar."],
          ["H", "A hurdler who accidentally knocks down a hurdle", "is not disqualified but loses speed", "is always disqualified", "gains a point", "must restart", "Accidental knocks are not fouls."],
          ["H", "A hurdler is disqualified for", "trailing the leg beside the hurdle below bar height", "knocking a hurdle accidentally", "running in his own lane", "clearing all hurdles", "The leg must pass over the bar."],
          ["H", "Most sprint hurdlers reach the first hurdle in about", "7 or 8 strides", "2 strides", "20 strides", "15 strides", "This allows correct take-off."],
        ],
      },
      {
        week: 2,
        title: "Discus and javelin",
        subtopics: ["Discus facilities and technique", "Javelin facilities and technique", "Rules of discus and javelin", "Safety in throwing events"],
        objectives: ["Describe the discus facilities and throwing technique", "Describe the javelin facilities and throwing technique", "State the rules of discus and javelin", "Apply safety rules in throwing events"],
        lesson: {
          title: "Throwing the Discus and Javelin",
          summary: "Perform discus and javelin techniques safely and legally.",
          minutes: 45,
          notes: `## Discus
**Implement**: a disc — senior men **2 kg**, senior women **1 kg**.
**Facilities**: throwing circle about **2.5 m** in diameter, a **safety cage**, landing sector.
**Grip**: the disc rests against the pads of the spread fingers (first joints over the rim); thumb relaxed on top.
**Technique**:
1. stand at the back of the circle, back to the throwing direction
2. **preliminary swings** of the arm
3. a **turn** (about one and a half turns) across the circle
4. powerful **release** with a sweeping arm, the disc spinning off the index finger
5. **reverse** the feet to stay in the circle

## Javelin
**Implement**: a spear — senior men **800 g**, senior women **600 g**.
**Facilities**: a **runway** and a curved **scratch line (arc)**; a landing sector.
**Grip**: behind the cord binding (e.g. American grip, Finnish grip, fork grip).
**Technique**:
1. **approach run** with the javelin held above the shoulder
2. **withdrawal** — draw the javelin back with a straight arm
3. **cross-over steps** to position the body
4. **plant** of the front leg (block)
5. **throw** over the shoulder, arm high, pulling from the legs and trunk
6. **recovery** to stop behind the arc

## Rules
- discus: the thrower must start still in the circle, not touch the top of the rim or ground outside, and leave from the **back half**
- javelin: must be held at the grip and thrown **over the shoulder or upper arm**; not slung or hurled; the **tip must strike the ground first**; athletes must not turn their back to the arc before release; must not step on or over the arc
- the implement must land inside the sector
- measured from the nearest mark made by the implement to the inside of the circle or arc

## Safety
throw only on signal; stand behind throwers; never throw implements back; carry javelins **vertically** with the tip down or point covered; use cages for discus.`,
          examples: `**Example 1.** What is the weight of the senior men's javelin? *Answer:* **800 g**.

**Example 2.** Which part of the javelin must strike the ground first? *Answer:* the **tip (metal head)**.

**Example 3.** Why is a cage used in discus? *Answer:* To **protect officials and spectators** from wild throws.`,
        },
        questions: [
          ["E", "The discus is shaped like a", "disc", "spear", "ball", "hammer", "It is a flat round implement."],
          ["E", "The javelin is a type of", "spear", "disc", "ball", "baton", "It is thrown over the shoulder."],
          ["E", "Throwing implements should be thrown only", "on signal from the official", "at any time", "towards people", "back to the circle", "Safety comes first."],
          ["M", "The senior men's discus weighs", "2 kg", "1 kg", "7.26 kg", "800 g", "Women use 1 kg."],
          ["M", "The senior women's javelin weighs", "600 g", "800 g", "2 kg", "4 kg", "Senior men use 800 g."],
          ["M", "A javelin throw is valid only if the", "tip strikes the ground first", "tail lands first", "javelin lands flat", "javelin lands outside the sector", "The metal head must land first."],
          ["M", "The javelin is thrown from behind a curved line called the", "arc (scratch line)", "stop board", "take-off board", "break line", "Athletes must not cross it."],
          ["H", "The discus is thrown after", "a turn across the circle", "a long runway approach", "a glide backwards only", "a standing jump", "Rotation builds speed."],
          ["H", "A javelin must be thrown", "over the shoulder or upper arm", "underarm", "with both hands", "with a spin like a discus", "Slinging is illegal."],
          ["H", "A discus safety cage is used to", "protect officials and spectators from wild throws", "stop the discus from landing", "increase distance", "hold the athlete", "Discus can fly off line."],
        ],
      },
      {
        week: 3,
        title: "Triple jump",
        subtopics: ["Phases of the triple jump", "Hop, step and jump technique", "Rules of the triple jump", "Training drills"],
        objectives: ["Describe the phases of the triple jump", "Perform the hop, step and jump sequence", "State the rules of the triple jump", "Use drills to develop triple jump skills"],
        lesson: {
          title: "Hop, Step and Jump",
          summary: "Perform the triple jump sequence and apply its rules.",
          minutes: 45,
          notes: `## Meaning
The **triple jump** (hop, step and jump) is a horizontal jump in which the athlete performs **three linked actions** from the take-off board into the sand pit.

## Phases
1. **approach** — accelerating run-up to the board
2. **hop** — take off from one foot and **land on the same foot**
3. **step** — take off from that foot and **land on the other foot**
4. **jump** — take off and land in the **pit** on both feet, as in the long jump
Example: right–right–left–both feet.

## Technique tips
- keep the hop **low and controlled** — too high a hop kills speed
- keep the trunk upright; use the arms (single or double arm action) for balance and drive
- aim for a rhythm; a common ratio of phase lengths is roughly **35% : 30% : 35%**
- "active" landings — pull the foot back under the body to keep momentum

## Rules
- the sequence must be **hop, step, jump** in that order (same foot, other foot, pit)
- a foul if the athlete steps over the take-off line, or if the "sleeping" (free) leg touches the ground during the phases
- measured like the long jump: from the take-off line to the **nearest mark in the pit**
- the take-off board is placed further from the pit than in the long jump

## Training drills
bounding (exaggerated running strides), hopping on one leg, **alternate-leg bounding**, short-approach triple jumps, rhythm drills, skipping, strength training for legs.`,
          examples: `**Example 1.** On which foot does the athlete land after the hop? *Answer:* the **same foot** used for take-off.

**Example 2.** What is the correct order? *Answer:* **hop, step, jump**.

**Example 3.** Why should the hop not be too high? *Answer:* A high hop **loses horizontal speed**.`,
        },
        questions: [
          ["E", "The triple jump is also known as the", "hop, step and jump", "high jump", "pole vault", "long throw", "It has three phases."],
          ["E", "The triple jump ends with a landing in the", "sand pit", "throwing circle", "water jump", "foam bed", "It lands like the long jump."],
          ["E", "The first phase after the approach in the triple jump is the", "hop", "step", "jump", "landing", "The hop comes first."],
          ["M", "After the hop, the athlete lands on", "the same foot used for take-off", "the other foot", "both feet", "the hands", "Hop is same foot."],
          ["M", "After the step, the athlete lands on", "the other foot", "the same foot as the hop", "both feet in the pit", "the knees", "Step changes feet."],
          ["M", "A correct foot pattern for a right-footed triple jumper is", "right, right, left, both", "right, left, right, both", "left, left, left, both", "both, both, both", "Hop same, step other, jump."],
          ["M", "The triple jump is measured from the take-off line to the", "nearest mark in the pit", "furthest mark", "first footprint on the runway", "end of the pit", "As in the long jump."],
          ["H", "A hop that is too high in the triple jump", "reduces horizontal speed", "increases the distance always", "is required by rules", "makes the step longer automatically", "Speed must be kept."],
          ["H", "A training drill using exaggerated running strides is", "bounding", "chopping", "blocking", "gliding", "It builds power and rhythm."],
          ["H", "It is a foul in the triple jump if the free leg", "touches the ground during the phases", "swings forward", "bends at the knee", "is used for balance", "Only the jumping foot may land."],
        ],
      },
      {
        week: 4,
        title: "Swimming and water safety",
        subtopics: ["Benefits of swimming", "Basic swimming strokes", "Water safety rules", "Rescue and resuscitation basics"],
        objectives: ["State the benefits of swimming", "Describe the basic swimming strokes", "Apply water safety rules", "Describe safe rescue methods"],
        lesson: {
          title: "Safe and Skilful Swimming",
          summary: "Describe swimming strokes and apply water safety.",
          minutes: 45,
          notes: `## Benefits of swimming
works almost all muscles; improves **cardiovascular endurance**; low impact on joints; a **life-saving skill**; recreation; a career and competitive sport.

## Basic swimming skills
water confidence; breathing control (blowing bubbles); floating (front and back); gliding; kicking; sculling (hand movements to stay in place); treading water.

## Competitive strokes
| Stroke | Key features |
|---|---|
| **front crawl (freestyle)** | face in the water; alternate arm recovery over the water; flutter kick; breathe to the side; the **fastest** stroke |
| **backstroke** | on the back; alternate arm action; flutter kick; face out of the water |
| **breaststroke** | on the front; simultaneous arm pull; **frog (whip) kick**; head lifts to breathe; the **slowest** competitive stroke |
| **butterfly** | both arms recover over the water together; **dolphin kick** with legs together |
Individual medley order: **butterfly, backstroke, breaststroke, freestyle**.
An Olympic-size pool is **50 m** long.

## Water safety rules
- **never swim alone**; swim where a **lifeguard** is present
- do not swim in deep water unless you are a strong swimmer
- avoid swimming in rivers with strong currents, dams, or quarries
- do not swim after a heavy meal or when tired
- do not run or push others near the pool
- obey pool rules and warning signs
- wear a **life jacket** on boats

## Rescue basics
**Reach, throw, don't go**:
- **reach** with a pole, stick or towel from the edge
- **throw** a float, rope or buoyant object
- do **not** jump in unless trained — a drowning person may pull you under
- call for help; once out, check breathing; trained persons give **CPR** if needed`,
          examples: `**Example 1.** Which is the fastest swimming stroke? *Answer:* **front crawl (freestyle)**.

**Example 2.** Which stroke uses the frog kick? *Answer:* **breaststroke**.

**Example 3.** What is the safe rescue rule? *Answer:* **Reach, throw, don't go**.`,
        },
        questions: [
          ["E", "A person employed to watch and rescue swimmers is a", "lifeguard", "referee", "coach", "linesman", "Lifeguards keep pools safe."],
          ["E", "The fastest swimming stroke is the", "front crawl", "breaststroke", "backstroke", "doggy paddle", "It is used in freestyle."],
          ["E", "A person should never swim", "alone", "with a lifeguard present", "in a safe pool", "after learning", "Help may be needed."],
          ["M", "The stroke performed lying on the back is the", "backstroke", "butterfly", "breaststroke", "front crawl", "The face stays out of the water."],
          ["M", "The breaststroke uses a", "frog (whip) kick", "flutter kick", "dolphin kick", "scissor kick only", "Legs bend and push out."],
          ["M", "The butterfly uses a", "dolphin kick", "frog kick", "flutter kick only", "no kick", "Legs move together."],
          ["M", "An Olympic-size swimming pool is", "50 m long", "25 m long", "100 m long", "10 m long", "It is the standard long course."],
          ["H", "The safe rescue rule for untrained people is", "reach, throw, don't go", "jump in immediately", "shout and leave", "wait silently", "Untrained rescuers can drown."],
          ["H", "The individual medley order is", "butterfly, backstroke, breaststroke, freestyle", "freestyle, butterfly, backstroke, breaststroke", "backstroke, breaststroke, butterfly, freestyle", "breaststroke, freestyle, backstroke, butterfly", "This is the IM order."],
          ["H", "Using hand movements to stay in one place in the water is", "sculling", "gliding", "diving", "kicking", "It keeps the body stable."],
        ],
      },
      {
        week: 5,
        title: "Combat sports",
        subtopics: ["Meaning of combat sports", "Wrestling", "Judo and taekwondo", "Boxing and safety in combat sports"],
        objectives: ["Explain combat sports", "Describe the styles and basic rules of wrestling", "Describe judo and taekwondo", "Identify safety measures in combat sports"],
        lesson: {
          title: "Sports of Skill and Self-Control",
          summary: "Describe combat sports and their safety measures.",
          minutes: 40,
          notes: `## Meaning
**Combat sports** are contests in which two opponents use **holds, throws, strikes or kicks** within strict rules to win. They develop strength, agility, discipline and self-defence skills.

## Wrestling
- two main Olympic styles:
  - **freestyle**: holds on the whole body, including the legs
  - **Greco-Roman**: **no holds below the waist**; legs may not be used to attack
- a wrestler wins by a **fall (pin)** — holding both of the opponent's shoulders on the mat — or by points
- Nigeria has a strong **traditional wrestling** heritage
- governing body: **United World Wrestling (UWW)**

## Judo
- developed in **Japan** by **Jigoro Kano** (1882); means "gentle way"
- uses **throws, holds (pins), arm locks and strangles** (for seniors)
- players wear a **judogi** with a belt showing grade (beginners wear **white**)
- scores: **ippon** (full point — wins), **waza-ari**
- bow to show respect

## Taekwondo
- a **Korean** martial art emphasising **kicks**, especially high and spinning kicks
- points for kicks and punches to the scoring areas (body protector and head)
- players wear a **dobok**, protective **headgear**, chest protector, forearm and shin guards, and mouthguard

## Boxing
- opponents punch with **padded gloves** above the belt
- bouts are divided into **rounds**
- win by points, knockout or referee stopping the contest
- amateur boxers wear protective gear

## Safety
qualified coaches and referees; proper protective equipment; matching by **weight categories**, age and experience; good warm-up; strict rules against illegal techniques; medical checks; respect and self-control — skills must never be used to bully.`,
          examples: `**Example 1.** In which wrestling style are holds below the waist banned? *Answer:* **Greco-Roman**.

**Example 2.** Who founded judo? *Answer:* **Jigoro Kano** of Japan.

**Example 3.** Why are contestants matched by weight? *Answer:* For **fairness and safety**.`,
        },
        questions: [
          ["E", "Sports in which opponents use holds, throws or strikes are", "combat sports", "racket games", "water sports", "athletics events", "They involve direct contests."],
          ["E", "Boxers wear", "padded gloves", "football boots", "swimming caps", "rackets", "Gloves protect hands and opponents."],
          ["E", "Taekwondo originated in", "Korea", "Japan", "Nigeria", "Brazil", "It is a Korean martial art."],
          ["M", "Judo was developed by", "Jigoro Kano", "James Naismith", "Pierre de Coubertin", "Dick Fosbury", "He founded it in 1882."],
          ["M", "The wrestling style that bans holds below the waist is", "Greco-Roman", "freestyle", "traditional", "sumo", "Legs cannot be attacked."],
          ["M", "Holding both of an opponent's shoulders on the mat in wrestling is a", "fall (pin)", "knockout", "ippon kick", "foul", "It ends the bout."],
          ["M", "Taekwondo is known for emphasising", "kicks", "throws only", "strangles", "swimming", "High kicks score points."],
          ["H", "The full point that wins a judo contest is", "ippon", "waza-ari", "yuko", "shido", "Ippon ends the contest."],
          ["H", "Combat athletes are grouped by weight categories to ensure", "fairness and safety", "more injuries", "shorter bouts", "higher ticket sales", "Size differences are reduced."],
          ["H", "A beginner in judo usually wears a", "white belt", "black belt", "red belt", "gold belt", "Grades start at white."],
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
        title: "Sports officials and officiating",
        subtopics: ["Meaning of officiating", "Officials in different sports", "Qualities of a good official", "Duties of officials"],
        objectives: ["Explain officiating", "Identify officials in different sports", "State the qualities of a good official", "Describe the duties of sports officials"],
        lesson: {
          title: "The People Who Control the Game",
          summary: "Identify sports officials and their qualities and duties.",
          minutes: 40,
          notes: `## Meaning
**Officiating** is the act of **controlling and judging** a sports contest to ensure that it is played **according to the rules**. Officials include referees, umpires, judges, timekeepers and scorers.

## Officials in different sports
| Sport | Officials |
|---|---|
| **football** | referee, two assistant referees, fourth official; video assistant referee (VAR) in some competitions |
| **basketball** | referee and umpires; table officials — scorer, timer, shot clock operator |
| **volleyball** | first referee, second referee, scorer, line judges |
| **handball** | two court referees, timekeeper, scorekeeper |
| **athletics** | starter, recall starter, track judges, finish judges, timekeepers, umpires, field judges, referee |
| **table tennis** | umpire, assistant umpire |
| **boxing** | referee, judges, timekeeper |

## Qualities of a good official
- sound **knowledge of the rules**
- **fairness** and **impartiality** (no favouritism)
- **decisiveness** and confidence
- physical **fitness** and alertness
- good judgement and concentration
- honesty and **integrity**
- good communication (clear signals and whistle)
- **calmness** under pressure
- punctuality and neat appearance

## Duties of officials
- inspect the **field and equipment** before play
- check players' kit and eligibility
- start, stop and restart play
- enforce the rules and **penalise** offences
- keep **time and scores**
- ensure the **safety** of players
- write a **match report** after the game

## Signals and tools
whistle, flags, cards (yellow/red), scoresheets, stopwatches, hand signals.`,
          examples: `**Example 1.** Name two qualities of a good referee. *Answer:* **fairness** and **knowledge of the rules**.

**Example 2.** Who signals offside in football? *Answer:* the **assistant referee**.

**Example 3.** Who starts a race in athletics? *Answer:* the **starter**.`,
        },
        questions: [
          ["E", "Controlling and judging a sports contest according to the rules is", "officiating", "coaching", "spectating", "training", "Officials enforce rules."],
          ["E", "The official who controls a football match is the", "referee", "coach", "captain", "spectator", "The referee has final authority."],
          ["E", "The official who starts races in athletics is the", "starter", "timekeeper", "field judge", "umpire", "He fires the gun."],
          ["M", "Which is a quality of a good official?", "impartiality", "favouritism", "laziness", "indecision", "Officials must be fair."],
          ["M", "In football, offside is usually signalled by the", "assistant referee", "goalkeeper", "coach", "ball boy", "Flags signal offside."],
          ["M", "In volleyball, the official standing on the stand at one end of the net is the", "first referee", "scorer", "line judge", "second referee", "He has overall control."],
          ["M", "Before a match, officials should", "inspect the field and equipment", "leave the ground", "coach one team", "sell tickets", "Safety checks are needed."],
          ["H", "After a match, the referee writes a", "match report", "love letter", "recipe", "school essay", "It records events and incidents."],
          ["H", "A referee who changes decisions because of pressure from fans lacks", "decisiveness and integrity", "fitness only", "a whistle", "a uniform", "Decisions must be firm and honest."],
          ["H", "In basketball, the person who operates the 24-second clock is a", "table official", "court referee", "player", "coach", "Table officials assist referees."],
        ],
      },
      {
        week: 2,
        title: "Sports organisation and administration",
        subtopics: ["Meaning of sports administration", "School sports organisation", "National sports bodies", "International sports bodies and competitions"],
        objectives: ["Explain sports administration", "Describe how sports are organised in schools", "Identify national sports bodies", "Identify international sports bodies and competitions"],
        lesson: {
          title: "How Sports Are Organised",
          summary: "Describe sports organisation from school to international level.",
          minutes: 40,
          notes: `## Meaning
**Sports administration** is the **planning, organising, directing and controlling** of sports programmes, facilities, people and events to achieve sporting goals.

## School sports organisation
- **principal** — overall head
- **games master/mistress** and PHE teachers — plan and supervise sports
- **house system** — pupils grouped into houses (e.g. Red, Blue, Green, Yellow) that compete at inter-house sports
- **sports prefects and team captains**
- **school sports clubs**
Competitions: **inter-house sports**, **inter-school** competitions, zonal and state school sports festivals.

## Organising an inter-house sports competition
form a **committee** → plan the programme of events → prepare the field and equipment → select and train athletes → appoint officials → invite guests → hold the event → award prizes → evaluate.

## National sports bodies (Nigeria)
- the **federal ministry responsible for sports** makes policy and funds national sports
- **sports federations** (e.g. Nigeria Football Federation — NFF; Athletics Federation of Nigeria — AFN; Nigeria Basketball Federation) manage individual sports
- the **Nigeria Olympic Committee (NOC)** handles Olympic and Commonwealth participation
- **state sports councils/commissions** run sports at state level
- the **National Sports Festival** brings states together

## International bodies and competitions
| Body | Sport |
|---|---|
| **IOC** | Olympic movement |
| **FIFA** | football |
| **CAF** | African football |
| **World Athletics** | athletics |
| **FIBA** | basketball |
| **FIVB** | volleyball |
| **IHF** | handball |
| **ITTF** | table tennis |
| **BWF** | badminton |
Competitions: **Olympic Games**, **FIFA World Cup**, **Africa Cup of Nations (AFCON)**, **African Games**, **Commonwealth Games**, world championships.`,
          examples: `**Example 1.** Which body controls football in Africa? *Answer:* **CAF**.

**Example 2.** What is the first step in organising inter-house sports? *Answer:* **forming a committee**.

**Example 3.** Name one competition for African countries. *Answer:* the **African Games** (or AFCON).`,
        },
        questions: [
          ["E", "The international body that organises the FIFA World Cup is", "FIFA", "FIBA", "FIVB", "IHF", "FIFA governs world football."],
          ["E", "The teacher in charge of games in a school is the", "games master or mistress", "bursar", "librarian", "cook", "He or she coordinates sports."],
          ["E", "Competitions between houses in a school are", "inter-house sports", "the Olympic Games", "the World Cup", "the African Games", "Houses compete within the school."],
          ["M", "The body that controls football in Africa is", "CAF", "FIFA only", "IOC", "BWF", "Confederation of African Football."],
          ["M", "The world governing body of basketball is", "FIBA", "FIFA", "IHF", "ITTF", "It sets basketball rules."],
          ["M", "The body that manages Nigeria's Olympic participation is the", "Nigeria Olympic Committee", "NFF", "INEC", "NAFDAC", "It works with the IOC."],
          ["M", "The planning, organising and controlling of sports programmes is", "sports administration", "officiating only", "spectating", "doping", "Administration manages sport."],
          ["H", "The first step in organising an inter-house sports competition is to", "form a committee", "award prizes", "evaluate the event", "invite guests", "Planning starts with a committee."],
          ["H", "A competition for national football teams of Africa is the", "Africa Cup of Nations", "Commonwealth Games", "Wimbledon", "Tour de France", "AFCON is Africa's football championship."],
          ["H", "The body that governs athletics worldwide is", "World Athletics", "FIVB", "BWF", "IHF", "Formerly known as the IAAF."],
        ],
      },
      {
        week: 3,
        title: "Careers in Physical and Health Education",
        subtopics: ["Careers in sports performance", "Careers in coaching and teaching", "Careers in health and fitness", "Careers in sports business and media"],
        objectives: ["Identify careers in sports performance", "Describe careers in coaching and teaching", "Identify careers in health and fitness", "Identify careers in sports business and media"],
        lesson: {
          title: "Earning a Living Through Sport and Health",
          summary: "Explore career opportunities in PHE.",
          minutes: 40,
          notes: `## Careers in sports performance
**professional athlete** (footballer, sprinter, boxer, basketballer); **sports official** (referee, umpire, judge).

## Careers in coaching and teaching
**PHE teacher** in schools and colleges; **coach** (team or individual); **fitness instructor**; **lecturer** in human kinetics or sports science.

## Careers in health and fitness
| Career | Role |
|---|---|
| **physiotherapist** | treats injuries through exercise, massage and physical methods |
| **sports medicine doctor** | treats and prevents sports injuries |
| **nutritionist/dietitian** | plans diets for athletes |
| **health educator** | teaches communities about healthy living |
| **fitness/gym instructor** | leads exercise programmes |
| **recreation officer** | organises recreation in parks, resorts, communities |
| **public health worker** | prevents disease in communities |

## Careers in sports business and media
**sports journalist** and **commentator**; **sports photographer**; **sports administrator/manager**; **sports agent**; **event organiser**; **sports equipment and sportswear** business; **sports marketing**; facility manager.

## Preparing for a PHE career
study PHE, Biology and English well; join school sports teams and clubs; stay fit and disciplined; study **Physical and Health Education, Human Kinetics, Sports Science or Physiotherapy** at a college of education, polytechnic or university; get coaching and first aid certificates.

## Qualities needed
discipline, fitness, teamwork, leadership, communication, honesty, patience, dedication.`,
          examples: `**Example 1.** Who treats sports injuries through exercise and massage? *Answer:* a **physiotherapist**.

**Example 2.** Name one career in sports media. *Answer:* **sports commentator** (or journalist).

**Example 3.** Name a university course for a PHE career. *Answer:* **Human Kinetics** (or Sports Science).`,
        },
        questions: [
          ["E", "A person who trains athletes to improve their performance is a", "coach", "referee", "spectator", "journalist", "Coaches develop skills."],
          ["E", "A person who reports sports news for newspapers or TV is a", "sports journalist", "physiotherapist", "coach", "referee", "Journalists report events."],
          ["E", "A teacher who teaches Physical and Health Education in schools is a", "PHE teacher", "chef", "banker", "mechanic", "PHE is taught by trained teachers."],
          ["M", "A professional who treats injuries with exercise and massage is a", "physiotherapist", "commentator", "sports agent", "groundsman", "Physiotherapy aids recovery."],
          ["M", "A person who leads exercise programmes in a gym is a", "fitness instructor", "sports journalist", "umpire", "sports agent", "Instructors guide workouts."],
          ["M", "A person who describes a match live on radio or television is a", "commentator", "coach", "physiotherapist", "timekeeper", "Commentators narrate games."],
          ["M", "A professional who plans diets for athletes is a", "nutritionist", "referee", "commentator", "starter", "Diet affects performance."],
          ["H", "A person who negotiates contracts on behalf of athletes is a", "sports agent", "physiotherapist", "timekeeper", "team doctor", "Agents manage athletes' business."],
          ["H", "A relevant university course for a PHE career is", "Human Kinetics", "Petroleum Engineering", "Law only", "Fine Art only", "It studies human movement."],
          ["H", "An officer who organises leisure activities in parks and resorts is a", "recreation officer", "commentator", "boxer", "judge", "Recreation is a PHE area."],
        ],
      },
      {
        week: 4,
        title: "Consumer health",
        subtopics: ["Meaning of consumer health", "Choosing health products and services", "Quackery and self-medication", "Consumer health protection agencies"],
        objectives: ["Explain consumer health", "Choose health products and services wisely", "Explain the dangers of quackery and self-medication", "Identify agencies that protect health consumers"],
        lesson: {
          title: "Choosing Health Products and Services Wisely",
          summary: "Make wise choices about health products and services.",
          minutes: 40,
          notes: `## Meaning
**Consumer health** is the ability to **choose and use health products and services wisely**, and to avoid being deceived.
**Health products**: medicines, food supplements, toothpaste, soaps, cosmetics, sports drinks.
**Health services**: hospitals, clinics, pharmacies, laboratories, dentists, physiotherapists.

## Choosing health products
- buy from **licensed pharmacies** and registered shops
- check the **NAFDAC registration number**, **expiry date**, batch number and seal
- read labels and instructions carefully
- avoid products with exaggerated claims ("cures all diseases")
- beware of **fake and substandard drugs**

## Choosing health services
- use **registered and qualified** health professionals
- consider cost, location, quality of care and hygiene
- get a second opinion for serious conditions
- use **National Health Insurance** schemes where available

## Quackery
**Quackery** is the **promotion or practice of fake medical treatments** by unqualified people (**quacks**).
Signs: promises of quick or miraculous cures; one product for many diseases; secret formulas; no scientific evidence; pressure to buy immediately.
Dangers: wrong treatment, delayed proper care, poisoning, waste of money, death.

## Self-medication
**Self-medication** is taking medicines **without a qualified health worker's advice**.
Dangers: wrong diagnosis; wrong dose; side effects; **drug resistance** (e.g. misusing antibiotics); masking serious illness; addiction.

## Agencies
- **NAFDAC** — regulates food, drugs, cosmetics
- **Pharmacists Council of Nigeria (PCN)** — regulates pharmacies and pharmacists
- **Medical and Dental Council of Nigeria (MDCN)** — regulates doctors and dentists
- **SON** — product standards
- **FCCPC** — consumer complaints`,
          examples: `**Example 1.** What is self-medication? *Answer:* Taking medicines **without a qualified health worker's advice**.

**Example 2.** Name one sign of quackery. *Answer:* **promise of a miraculous cure** for many diseases.

**Example 3.** Which body regulates pharmacies? *Answer:* the **Pharmacists Council of Nigeria (PCN)**.`,
        },
        questions: [
          ["E", "Choosing and using health products and services wisely is", "consumer health", "quackery", "self-medication", "doping", "It protects health consumers."],
          ["E", "Medicines should be bought from", "licensed pharmacies", "roadside hawkers", "unknown sellers", "open markets without labels", "Licensed pharmacies sell genuine drugs."],
          ["E", "Before buying a drug, one should check the", "expiry date", "colour of the shop", "seller's height", "price only", "Expired drugs are unsafe."],
          ["M", "Taking medicine without a qualified health worker's advice is", "self-medication", "prescription", "immunisation", "therapy", "It can be dangerous."],
          ["M", "The practice of fake medical treatment by unqualified people is", "quackery", "physiotherapy", "surgery", "pharmacy", "Quacks deceive patients."],
          ["M", "A product claiming to cure every disease is likely a sign of", "quackery", "good medicine", "a vaccine", "a balanced diet", "Real medicines have specific uses."],
          ["M", "The body that regulates pharmacies and pharmacists in Nigeria is the", "Pharmacists Council of Nigeria", "INEC", "NFF", "NIPOST", "PCN licenses pharmacies."],
          ["H", "Misusing antibiotics through self-medication can lead to", "drug resistance", "better immunity always", "faster healing always", "stronger bones", "Germs adapt to the drug."],
          ["H", "The body that regulates doctors and dentists in Nigeria is the", "Medical and Dental Council of Nigeria", "NAFDAC", "SON", "FCCPC", "MDCN registers doctors."],
          ["H", "A danger of consulting quacks is", "delay in getting proper treatment", "cheaper genuine care", "guaranteed cure", "better diagnosis", "Serious illness may worsen."],
        ],
      },
      {
        week: 5,
        title: "HIV/AIDS and sexually transmitted infections",
        subtopics: ["Meaning of HIV and AIDS", "Modes of transmission", "Common sexually transmitted infections", "Prevention and support"],
        objectives: ["Explain HIV and AIDS", "State how HIV is and is not transmitted", "Identify common sexually transmitted infections", "Describe prevention and the need to support people living with HIV"],
        lesson: {
          title: "Protecting Yourself from HIV and STIs",
          summary: "Explain HIV/AIDS and STIs and how to prevent them.",
          minutes: 40,
          notes: `## Meaning
- **HIV** — **Human Immunodeficiency Virus** — attacks the body's **immune system** (especially CD4 cells)
- **AIDS** — **Acquired Immune Deficiency Syndrome** — the advanced stage of HIV infection when the immune system is very weak and the person gets serious infections
A person can look healthy and still have HIV; only a **test** can confirm it.

## How HIV is transmitted
- **unprotected sexual intercourse** with an infected person
- sharing **needles, razors, blades** and other sharp objects contaminated with infected blood
- **transfusion** of unscreened infected blood
- from an infected **mother to her baby** during pregnancy, childbirth or breastfeeding

## How HIV is NOT transmitted
shaking hands, hugging, sharing plates and cups, using the same toilet, mosquito bites, playing sports together, sharing classrooms.

## Common sexually transmitted infections (STIs)
| STI | Cause |
|---|---|
| **gonorrhoea** | bacterium |
| **syphilis** | bacterium |
| **chlamydia** | bacterium |
| **genital herpes** | virus |
| **hepatitis B** | virus (also by blood) |
| **HIV** | virus |
Signs may include sores, unusual discharge, pain when urinating — but many STIs show **no signs**. Untreated STIs can cause infertility and increase the risk of HIV.

## Prevention
- **abstinence** from sexual activity — the surest way for young people
- **faithfulness** to one uninfected partner in marriage
- do **not share** needles, razors or sharp objects
- ensure blood is **screened** before transfusion
- pregnant women should test so that treatment can prevent mother-to-child transmission
- **HIV counselling and testing (HCT)**

## Treatment and support
There is **no cure** yet for HIV, but **antiretroviral therapy (ART)** controls the virus and allows people to live long, healthy lives.
**Stigma and discrimination** against people living with HIV are wrong; they deserve care, respect and support.`,
          examples: `**Example 1.** What does HIV stand for? *Answer:* **Human Immunodeficiency Virus**.

**Example 2.** Can HIV be spread by mosquito bites? *Answer:* **No**.

**Example 3.** What is the surest way for young people to avoid sexually transmitted HIV? *Answer:* **abstinence**.`,
        },
        questions: [
          ["E", "HIV attacks the body's", "immune system", "skeletal system", "digestive system only", "hair", "It weakens body defence."],
          ["E", "The surest way for young people to avoid sexually transmitted infections is", "abstinence", "peer pressure", "sharing razors", "self-medication", "No sexual contact means no sexual transmission."],
          ["E", "HIV cannot be spread by", "shaking hands", "sharing contaminated needles", "unscreened blood transfusion", "unprotected sex with an infected person", "Casual contact is safe."],
          ["M", "AIDS stands for", "Acquired Immune Deficiency Syndrome", "Active Infection Disease Syndrome", "Acute Immune Disorder Sickness", "Advanced Immune Drug System", "It is the advanced stage of HIV."],
          ["M", "HIV can be transmitted from an infected mother to her baby during", "pregnancy, childbirth or breastfeeding", "school lessons", "handshakes", "football matches", "Mother-to-child transmission occurs."],
          ["M", "Gonorrhoea and syphilis are caused by", "bacteria", "viruses", "worms", "fungi only", "They are bacterial STIs."],
          ["M", "The only way to know one's HIV status is by", "testing", "looking at the face", "guessing", "body weight only", "A person can look healthy."],
          ["H", "The treatment that controls HIV in the body is", "antiretroviral therapy", "antibiotics only", "vitamin C only", "surgery", "ART suppresses the virus."],
          ["H", "Treating people living with HIV unfairly is", "stigma and discrimination", "counselling", "support", "testing", "It is wrong and harmful."],
          ["H", "A person may have an STI without knowing because", "many STIs show no signs", "all STIs are painful", "STIs always cause rashes", "STIs cure themselves", "Testing is important."],
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
        title: "BECE revision: athletics",
        subtopics: ["Track events and starts", "Relays and hurdles", "Jumping events", "Throwing events"],
        objectives: ["Recall the classification of athletics events", "Recall rules of sprints, relays and hurdles", "Recall techniques and rules of jumping events", "Recall techniques and rules of throwing events"],
        lesson: {
          title: "Revising Athletics",
          summary: "Consolidate athletics topics for the BECE.",
          minutes: 45,
          notes: `## Classification
track: sprints (100, 200, 400 m), middle distance (800, 1500 m), long distance (5000, 10,000 m), hurdles, relays, steeplechase. Field: jumps (long, triple, high, pole vault) and throws (shot, discus, javelin, hammer). Combined: heptathlon (7), decathlon (10). Marathon: 42.195 km.

## Starts
crouch start with blocks for sprints ("On your marks" → "Set" → gun); standing start for distance races. False start → disqualification. Finish judged on the **torso**.

## Relays
4 runners; baton passed in the **changeover zone**; upsweep/downsweep; visual pass (4 × 400 m), non-visual pass (4 × 100 m); last runner = **anchor**.

## Hurdles
10 hurdles in the 100 m, 110 m and 400 m hurdles; lead leg and trail leg; about three strides between sprint hurdles; accidental knock-down is not a foul.

## Jumps
- long jump: approach, take-off, flight (sail, hang, hitch-kick), landing; measured to the **nearest mark**
- triple jump: **hop (same foot), step (other foot), jump**
- high jump: one-foot take-off; styles scissors, western roll, straddle, **Fosbury flop**; three consecutive failures eliminate

## Throws
- shot put: pushed from the neck; men 7.26 kg, women 4 kg; leave from the **back half** of the circle
- discus: men 2 kg, women 1 kg; turn in the circle; cage
- javelin: men 800 g, women 600 g; thrown over the shoulder; **tip lands first**

## Safety
throw on signal; nobody in the sector; carry javelins vertically.`,
          examples: `**Example 1.** In the triple jump, the step lands on the **other foot**.

**Example 2.** What weight is the senior men's shot? *Answer:* **7.26 kg**.

**Example 3.** In a relay, where is the baton exchanged? *Answer:* inside the **changeover zone**.`,
        },
        questions: [
          ["E", "The 200 m race is classified as a", "sprint", "long distance race", "field event", "throwing event", "It is a short race."],
          ["E", "Pole vault is a", "jumping event", "throwing event", "track race", "relay", "It is a field jump."],
          ["E", "The last runner of a relay team is the", "anchor", "starter", "pacer", "judge", "The anchor finishes."],
          ["M", "The seven-event competition for women is the", "heptathlon", "decathlon", "pentathlon", "marathon", "Hepta means seven."],
          ["M", "The sequence of the triple jump is", "hop, step, jump", "step, hop, jump", "jump, hop, step", "hop, jump, step", "It follows this order."],
          ["M", "A high jumper is eliminated after", "three consecutive failures", "two clearances", "one knock", "four successes", "Three misses in a row."],
          ["M", "The senior men's shot weighs", "7.26 kg", "4 kg", "2 kg", "800 g", "Women use 4 kg."],
          ["H", "In the discus, the athlete must leave the circle", "from the back half", "from the front half", "by jumping over the rim", "before the discus lands", "Leaving earlier or from the front is a foul."],
          ["H", "The pass used in the 4 × 100 m relay to maintain speed is the", "non-visual pass", "visual pass", "throw pass", "rolling pass", "The receiver does not look back."],
          ["H", "The sprint finish is judged when the athlete's", "torso crosses the line", "arm crosses the line", "head crosses the line", "shoe crosses the line", "Only the torso counts."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: games and sports",
        subtopics: ["Football and handball", "Basketball and volleyball", "Racket games", "Gymnastics, swimming and combat sports"],
        objectives: ["Recall the rules of football and handball", "Recall the rules of basketball and volleyball", "Recall the rules of table tennis and badminton", "Recall key facts on gymnastics, swimming and combat sports"],
        lesson: {
          title: "Revising Games and Sports",
          summary: "Consolidate games and sports topics for the BECE.",
          minutes: 45,
          notes: `## Team games at a glance
| Game | Players | Duration / scoring | Key rules |
|---|---|---|---|
| **football** | 11 | 2 × 45 min | throw-in, corner, goal kick, penalty; yellow/red cards; offside |
| **handball** | 7 | 2 × 30 min | 3 steps, 3 seconds; goal area 6 m; 7-metre throw |
| **basketball** | 5 | 4 × 10 min (FIBA) | 2 and 3-point goals, 1-point free throw; travelling, double dribble; 24-second shot clock |
| **volleyball** | 6 | sets to 25 (5th set to 15), 2-point lead; best of 5 | 3 touches per side; rotate clockwise |

## Racket games
- **table tennis**: games to 11 (2-point lead); serve changes every 2 points; toss at least 16 cm
- **badminton**: games to 21 (2-point lead, cap 30); best of three; underarm diagonal serve

## Governing bodies
FIFA, CAF, FIBA, FIVB, IHF, ITTF, BWF, World Athletics, IOC.

## Gymnastics
rolls (forward, backward, log); balances (stork, V-sit, headstand — hands and forehead triangle, handstand); cartwheel; bridge; splits; sequences judged for control and linking; use mats and spotters.

## Swimming
front crawl (fastest), backstroke, breaststroke (frog kick), butterfly (dolphin kick); IM order: fly, back, breast, free; rescue: **reach, throw, don't go**.

## Combat sports
wrestling (freestyle; Greco-Roman — no holds below the waist); judo (Jigoro Kano; ippon); taekwondo (Korean; kicks); boxing (gloves, rounds). Safety: weight categories and protective equipment.

## Traditional games
ayo, dambe, suwe, tug of war, traditional wrestling, ten-ten.`,
          examples: `**Example 1.** How many players form a handball team on court? *Answer:* **seven**.

**Example 2.** How many points does a basketball free throw earn? *Answer:* **one**.

**Example 3.** Which stroke uses the dolphin kick? *Answer:* **butterfly**.`,
        },
        questions: [
          ["E", "A football team has how many players on the field?", "11", "7", "6", "5", "Including the goalkeeper."],
          ["E", "A handball team has how many players on court?", "7", "11", "5", "9", "Six court players plus a goalkeeper."],
          ["E", "The governing body of volleyball is the", "FIVB", "FIFA", "FIBA", "IHF", "It governs world volleyball."],
          ["M", "In volleyball, a team may touch the ball at most", "three times before sending it over", "five times", "once", "ten times", "A block does not count."],
          ["M", "A table tennis game is won at", "11 points with a 2-point lead", "21 points", "25 points", "7 points", "Current rules use 11."],
          ["M", "A basketball field goal from inside the three-point line is worth", "2 points", "3 points", "1 point", "4 points", "Long shots earn 3."],
          ["M", "The swimming stroke that uses a frog kick is the", "breaststroke", "front crawl", "backstroke", "butterfly", "Legs push out and together."],
          ["H", "In a handball game, a player holding the ball may not take more than", "three steps", "one step", "six steps", "ten steps", "This prevents running with the ball."],
          ["H", "The traditional Hausa form of boxing is", "dambe", "ayo", "suwe", "atilogwu", "It is a traditional combat sport."],
          ["H", "When teaching a headstand, the base formed by the hands and forehead is a", "triangle", "line", "circle", "rectangle", "It gives stability."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: health education",
        subtopics: ["Personal, school and environmental health", "Communicable and non-communicable diseases", "Drugs, consumer health and HIV", "First aid and safety"],
        objectives: ["Recall personal, school and environmental health practices", "Distinguish communicable and non-communicable diseases", "Recall facts on drugs, consumer health and HIV", "Apply first aid and safety knowledge"],
        lesson: {
          title: "Revising Health Education",
          summary: "Consolidate health education topics for the BECE.",
          minutes: 45,
          notes: `## Health
WHO: complete physical, mental and social well-being, not merely absence of disease.
School health programme: health services, healthful environment, health instruction, school feeding, school–community relations.

## Environmental health
refuse (landfill, incineration, composting, recycling); sewage (water closet, VIP latrine; end open defecation); safe water (boiling, filtration, chlorination); pollution (air, water, land, noise).

## Diseases
- **communicable**: malaria (Anopheles mosquito), cholera and typhoid (contaminated food and water), tuberculosis (air; BCG vaccine), measles (virus), HIV (blood and sexual contact)
- **non-communicable**: hypertension, diabetes, stroke, heart disease, cancer, obesity, asthma, sickle cell (SS)
- risk factors: poor diet, inactivity, tobacco, alcohol, heredity

## Drugs and consumer health
use vs misuse vs abuse; addiction; effects of alcohol, tobacco, cannabis, codeine, tramadol, inhalants; **doping** in sports; NDLEA and NAFDAC.
Consumer health: licensed pharmacies; NAFDAC number and expiry date; avoid **quackery** and **self-medication**; PCN, MDCN.

## HIV and STIs
HIV attacks the immune system; transmitted by unprotected sex, contaminated sharps, unscreened blood, mother-to-child; not by casual contact or mosquitoes; prevention by **abstinence**, faithfulness, no sharing sharps; ART controls HIV; avoid stigma.

## First aid and safety
3 Ps; RICE for sprains and strains; nosebleed — lean forward and pinch; fractures — immobilise and get help; concussion — no return to play; warm-up and cool-down; safe facilities.`,
          examples: `**Example 1.** Which vaccine protects against tuberculosis? *Answer:* **BCG**.

**Example 2.** Is hypertension communicable? *Answer:* **No**.

**Example 3.** What does RICE stand for? *Answer:* **Rest, Ice, Compression, Elevation**.`,
        },
        questions: [
          ["E", "Malaria is transmitted by the", "female Anopheles mosquito", "housefly", "tsetse fly", "rat", "It carries Plasmodium."],
          ["E", "High blood pressure is an example of a", "non-communicable disease", "communicable disease", "deficiency disease only", "vector", "It is not spread by germs."],
          ["E", "Adding chlorine to water is done to", "kill germs", "add colour", "add sugar", "pollute it", "Chlorine disinfects water."],
          ["M", "Cholera spreads mainly through", "contaminated food and water", "mosquito bites", "handshakes", "sunlight", "Faecal contamination spreads it."],
          ["M", "Taking drugs without medical need, harming health, is", "drug abuse", "drug use", "immunisation", "first aid", "It is harmful use."],
          ["M", "Taking antibiotics without a doctor's advice is", "self-medication", "prescription", "quackery by a doctor", "vaccination", "It may cause resistance."],
          ["M", "The first aid for a sprained ankle follows", "RICE", "CPR only", "heat and massage", "running it off", "Rest, ice, compression, elevation."],
          ["H", "HIV is NOT transmitted by", "mosquito bites", "sharing contaminated needles", "unscreened blood", "mother-to-child transmission", "Mosquitoes do not transmit HIV."],
          ["H", "The WHO definition of health emphasises", "complete physical, mental and social well-being", "only physical strength", "only absence of disease", "only wealth", "Health is holistic."],
          ["H", "Using banned substances to enhance sports performance is", "doping", "coaching", "officiating", "rehydration", "It is cheating."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: the body, fitness and mixed practice",
        subtopics: ["Skeletal and muscular systems", "Physical fitness components", "Training principles and nutrition", "Mixed practice test"],
        objectives: ["Recall the skeletal and muscular systems", "Recall health-related and skill-related fitness", "Apply training principles and sports nutrition", "Complete a mixed BECE-style practice test"],
        lesson: {
          title: "Revising the Body and Fitness",
          summary: "Consolidate body systems and fitness topics and practise mixed questions.",
          minutes: 45,
          notes: `## Skeletal system
206 bones; functions: support, protection, movement, blood cell production (marrow), mineral storage. Axial (skull, backbone, ribs) and appendicular (limbs, girdles). Longest bone: **femur**. Joints: fixed (skull), slightly movable (vertebrae), synovial — ball-and-socket (hip, shoulder), hinge (knee, elbow), pivot (neck), gliding (wrist). Ligaments join bone to bone; tendons join muscle to bone.

## Muscular system
skeletal (voluntary), smooth (involuntary), cardiac (heart). Muscles pull, work in **antagonistic pairs** (biceps/triceps; quadriceps/hamstrings). Training causes **hypertrophy**.

## Fitness
- health-related: cardiovascular endurance, muscular strength, muscular endurance, flexibility, body composition
- skill-related: speed, agility, balance, coordination, power, reaction time
- tests: sit-and-reach (flexibility), standing long jump (power), ruler drop (reaction time), 12-minute run (endurance)
- BMI = weight (kg) ÷ height (m) squared

## Training
principles: specificity, overload, progression, reversibility, individual differences, rest. **FITT**: frequency, intensity, time, type. Methods: continuous, interval, fartlek, circuit, weight training. Max heart rate ≈ 220 − age.

## Sports nutrition
carbohydrates (main energy), proteins (repair), water (prevent dehydration); light meal 2–3 hours before exercise.

## Olympic facts
ancient: Olympia, Greece, 776 BC; modern: Athens 1896, Pierre de Coubertin; rings = five continents; Nigeria's first golds at Atlanta 1996.`,
          examples: `**Example 1.** Which joint is found at the knee? *Answer:* a **hinge** joint.

**Example 2.** What is the estimated maximum heart rate of a 15-year-old? *Answer:* 220 − 15 = **205** beats per minute.

**Example 3.** Which fitness component does the ruler drop test measure? *Answer:* **reaction time**.`,
        },
        questions: [
          ["E", "The knee is an example of a", "hinge joint", "ball-and-socket joint", "fixed joint", "pivot joint", "It bends in one direction."],
          ["E", "The heart is made of", "cardiac muscle", "skeletal muscle", "smooth muscle only", "bone", "Cardiac muscle never tires."],
          ["E", "The ability to move joints through a full range of motion is", "flexibility", "speed", "power", "balance", "Stretching improves it."],
          ["M", "The estimated maximum heart rate of a 15-year-old is", "205 beats per minute", "235 beats per minute", "150 beats per minute", "220 beats per minute", "220 − 15 = 205."],
          ["M", "The 'T' for type in FITT refers to", "the kind of activity", "the time of day", "the team size", "the temperature", "E.g. jogging or swimming."],
          ["M", "When the knee bends, the muscle that contracts is the", "hamstrings", "quadriceps", "biceps", "deltoid", "Hamstrings flex the knee."],
          ["M", "A student of 50 kg and 1.6 m height has a BMI of about", "19.5", "31.3", "80", "12.5", "50 ÷ 2.56 ≈ 19.5."],
          ["H", "The fitness component shown by a goalkeeper responding instantly to a shot is", "reaction time", "body composition", "flexibility", "muscular endurance", "Response to a stimulus."],
          ["H", "Blood cells are produced in the", "red bone marrow", "tendons", "ligaments", "cartilage", "Marrow is a blood factory."],
          ["H", "The modern Olympic Games were first held in", "Athens, 1896", "Olympia, 776 BC", "Atlanta, 1996", "Helsinki, 1952", "Athens hosted the revival."],
        ],
      },
    ],
  },
];
