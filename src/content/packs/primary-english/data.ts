/** Word lists, sentences and passages for the Primary English Studies pack. Original material. */

export type Pair = [string, string];
export type Tiered<T> = Record<1 | 2 | 3, T[]>;

export const SOUND_START: Record<string, string[]> = {
  b: ["ball", "bag", "bed", "boy"], c: ["cat", "cup", "cow", "car"], d: ["dog", "door", "drum", "dish"], f: ["fish", "fan", "foot", "fork"], g: ["goat", "girl", "gate", "gum"], h: ["hen", "hat", "hand", "house"],
  m: ["man", "mat", "milk", "moon"], p: ["pen", "pot", "pig", "pan"], r: ["rat", "rope", "ring", "rain"], s: ["sun", "sock", "soap", "seat"], t: ["tap", "tin", "table", "tree"], l: ["leg", "lamp", "lion", "leaf"],
};
export const SOUND_MIDDLE: Record<string, string[]> = { a: ["cat", "bag", "hat", "man", "pan", "map"], e: ["pen", "bed", "hen", "leg", "net", "ten"], i: ["sit", "pig", "pin", "lip", "tin", "six"], o: ["hot", "pot", "dog", "box", "top", "fox"], u: ["sun", "cup", "bus", "mug", "nut", "bun"] };

export const T_NOUNS = ["dog", "girl", "teacher", "bird", "farmer", "baby", "driver", "goat", "boy", "woman", "cat", "nurse", "trader", "pupil"];
export const T_VERBS = ["ran", "sang", "jumped", "walked", "laughed", "spoke", "clapped", "danced", "worked", "played", "shouted", "marched"];
export const T_ADVERBS = ["quickly", "loudly", "slowly", "happily", "quietly", "proudly", "bravely", "gently", "politely", "carefully"];
export const T_ADJECTIVES = ["small", "happy", "old", "tall", "young", "kind", "tired", "clever", "hungry", "brave", "gentle", "busy"];

export const PLURALS: Tiered<Pair> = {
  1: [["book", "books"], ["box", "boxes"], ["cup", "cups"], ["bus", "buses"], ["pen", "pens"], ["dish", "dishes"], ["bag", "bags"], ["glass", "glasses"], ["car", "cars"], ["bench", "benches"], ["girl", "girls"], ["fox", "foxes"], ["tree", "trees"], ["class", "classes"], ["egg", "eggs"], ["brush", "brushes"], ["hat", "hats"], ["watch", "watches"], ["door", "doors"], ["dress", "dresses"], ["ball", "balls"], ["church", "churches"]],
  2: [["baby", "babies"], ["child", "children"], ["leaf", "leaves"], ["man", "men"], ["city", "cities"], ["tooth", "teeth"], ["knife", "knives"], ["woman", "women"], ["lady", "ladies"], ["foot", "feet"], ["wolf", "wolves"], ["mouse", "mice"], ["story", "stories"], ["tomato", "tomatoes"], ["loaf", "loaves"], ["fly", "flies"], ["mango", "mangoes"], ["shelf", "shelves"], ["key", "keys"], ["boy", "boys"], ["party", "parties"], ["half", "halves"]],
  3: [["ox", "oxen"], ["goose", "geese"], ["thief", "thieves"], ["potato", "potatoes"], ["radio", "radios"], ["chief", "chiefs"], ["passer-by", "passers-by"], ["crisis", "crises"], ["louse", "lice"], ["roof", "roofs"], ["hero", "heroes"], ["piano", "pianos"], ["son-in-law", "sons-in-law"], ["oasis", "oases"], ["calf", "calves"], ["photo", "photos"], ["wife", "wives"], ["country", "countries"], ["monkey", "monkeys"], ["echo", "echoes"], ["dwarf", "dwarfs"], ["volcano", "volcanoes"]],
};

export const PAST: Tiered<Pair> = {
  1: [["walk", "walked"], ["play", "played"], ["go", "went"], ["eat", "ate"], ["come", "came"], ["see", "saw"], ["run", "ran"], ["jump", "jumped"], ["sit", "sat"], ["give", "gave"], ["look", "looked"], ["take", "took"], ["have", "had"], ["wash", "washed"], ["make", "made"], ["cook", "cooked"], ["say", "said"], ["help", "helped"], ["get", "got"], ["clean", "cleaned"], ["do", "did"], ["open", "opened"]],
  2: [["buy", "bought"], ["teach", "taught"], ["write", "wrote"], ["sing", "sang"], ["drink", "drank"], ["catch", "caught"], ["bring", "brought"], ["think", "thought"], ["tell", "told"], ["sell", "sold"], ["find", "found"], ["keep", "kept"], ["sleep", "slept"], ["drive", "drove"], ["ride", "rode"], ["build", "built"], ["send", "sent"], ["stand", "stood"], ["feel", "felt"], ["leave", "left"], ["meet", "met"], ["pay", "paid"]],
  3: [["begin", "began"], ["choose", "chose"], ["fly", "flew"], ["forget", "forgot"], ["swim", "swam"], ["throw", "threw"], ["wear", "wore"], ["break", "broke"], ["speak", "spoke"], ["steal", "stole"], ["shake", "shook"], ["freeze", "froze"], ["draw", "drew"], ["grow", "grew"], ["hide", "hid"], ["ring", "rang"], ["rise", "rose"], ["tear", "tore"], ["fight", "fought"], ["seek", "sought"], ["bite", "bit"], ["blow", "blew"]],
};

/** [adjective, comparative, superlative] */
export type Three = [string, string, string];
export const COMPARE_SIMPLE: Three[] = [["big", "bigger", "biggest"], ["small", "smaller", "smallest"], ["tall", "taller", "tallest"], ["short", "shorter", "shortest"], ["fast", "faster", "fastest"], ["old", "older", "oldest"], ["long", "longer", "longest"], ["hot", "hotter", "hottest"], ["cold", "colder", "coldest"], ["new", "newer", "newest"], ["young", "younger", "youngest"], ["fat", "fatter", "fattest"], ["thin", "thinner", "thinnest"], ["sad", "sadder", "saddest"], ["kind", "kinder", "kindest"], ["loud", "louder", "loudest"], ["soft", "softer", "softest"], ["hard", "harder", "hardest"], ["wet", "wetter", "wettest"], ["rich", "richer", "richest"]];
export const COMPARE_IRREGULAR: Three[] = [["happy", "happier", "happiest"], ["heavy", "heavier", "heaviest"], ["easy", "easier", "easiest"], ["busy", "busier", "busiest"], ["pretty", "prettier", "prettiest"], ["funny", "funnier", "funniest"], ["good", "better", "best"], ["bad", "worse", "worst"], ["many", "more", "most"], ["little", "less", "least"], ["large", "larger", "largest"], ["nice", "nicer", "nicest"], ["safe", "safer", "safest"], ["wide", "wider", "widest"], ["brave", "braver", "bravest"], ["early", "earlier", "earliest"], ["dirty", "dirtier", "dirtiest"], ["noisy", "noisier", "noisiest"], ["lazy", "lazier", "laziest"], ["angry", "angrier", "angriest"]];
export const COMPARE_LONG = ["beautiful", "careful", "difficult", "expensive", "important", "interesting", "dangerous", "comfortable", "popular", "generous", "intelligent", "useful", "famous", "honest", "peaceful", "modern", "patient", "delicious", "wonderful", "obedient"];

export const GENDER: Pair[] = [["king", "queen"], ["man", "woman"], ["boy", "girl"], ["father", "mother"], ["brother", "sister"], ["uncle", "aunt"], ["nephew", "niece"], ["husband", "wife"], ["prince", "princess"], ["actor", "actress"], ["lion", "lioness"], ["bull", "cow"], ["cock", "hen"], ["ram", "ewe"], ["stallion", "mare"], ["drake", "duck"], ["gander", "goose"], ["bridegroom", "bride"], ["host", "hostess"], ["hero", "heroine"], ["waiter", "waitress"], ["landlord", "landlady"], ["headmaster", "headmistress"], ["tiger", "tigress"], ["wizard", "witch"], ["monk", "nun"], ["duke", "duchess"], ["emperor", "empress"], ["widower", "widow"], ["son", "daughter"]];
export const YOUNG: Pair[] = [["dog", "puppy"], ["cat", "kitten"], ["cow", "calf"], ["goat", "kid"], ["sheep", "lamb"], ["hen", "chick"], ["lion", "cub"], ["horse", "foal"], ["duck", "duckling"], ["pig", "piglet"], ["frog", "tadpole"], ["butterfly", "caterpillar"], ["goose", "gosling"], ["kangaroo", "joey"], ["deer", "fawn"], ["eagle", "eaglet"], ["owl", "owlet"]];
export const SOUNDS: Pair[] = [["dog", "barks"], ["cat", "mews"], ["lion", "roars"], ["cow", "moos"], ["goat", "bleats"], ["horse", "neighs"], ["duck", "quacks"], ["snake", "hisses"], ["bee", "buzzes"], ["cock", "crows"], ["hen", "clucks"], ["elephant", "trumpets"], ["monkey", "chatters"], ["frog", "croaks"], ["pig", "grunts"], ["owl", "hoots"], ["donkey", "brays"]];
export const HOMES: Pair[] = [["bird", "nest"], ["bee", "hive"], ["dog", "kennel"], ["horse", "stable"], ["pig", "sty"], ["lion", "den"], ["spider", "web"], ["rabbit", "burrow"], ["hen", "coop"], ["sheep", "pen"], ["snail", "shell"], ["ant", "anthill"], ["bat", "cave"]];

export const SPELL_2 = ["because", "friend", "school", "people", "beautiful", "different", "favourite", "answer", "minute", "colour", "picture", "written", "believe", "always", "enough", "between", "country", "morning", "special", "together", "brother", "kitchen", "holiday", "village"];
export const SPELL_3 = ["necessary", "separate", "definitely", "government", "environment", "restaurant", "occasion", "receive", "beginning", "business", "calendar", "embarrass", "immediately", "knowledge", "library", "neighbour", "parliament", "secretary", "successful", "temperature", "vegetable", "committee", "disappear", "tomorrow"];

/** [correct sentence, proper noun inside it (never the first word)] */
export const STATEMENTS: Pair[] = [["My name is Ada.", "Ada"], ["We live in Lagos.", "Lagos"], ["Today is Monday.", "Monday"], ["I saw Tunde at school.", "Tunde"], ["The capital of Nigeria is Abuja.", "Abuja"], ["My birthday is in March.", "March"], ["We visited Kano last year.", "Kano"], ["Her friend is called Amina.", "Amina"], ["The longest river here is the Niger.", "Niger"], ["Our teacher is Mrs Bello.", "Bello"], ["I like to read on Sunday.", "Sunday"], ["My uncle lives in Enugu.", "Enugu"], ["We speak English at school.", "English"], ["The boy's name is Emeka.", "Emeka"], ["School opens in January.", "January"], ["My sister is called Kemi.", "Kemi"], ["They travelled to Ibadan.", "Ibadan"], ["We play football on Saturday.", "Saturday"], ["The shop is in Jos.", "Jos"], ["My dog is called Bingo.", "Bingo"], ["We will travel in December.", "December"], ["Father works in Calabar.", "Calabar"]];
export const QUESTIONS = ["Where do you live", "What is your name", "How old are you", "Who is your teacher", "When does school close", "Why are you late", "Which class are you in", "Can you swim", "Is this your bag", "Do you like rice", "Where is my pencil", "How many books do you have", "What time is it", "Who broke the window", "Are they coming today", "May I come in", "Did you eat your food", "Whose pen is this", "Have you seen my shoe", "Will it rain today", "How far is the market", "What are you doing"];
export const LISTS: [string, string[]][] = [["I bought", ["rice", "beans", "yam", "oil"]], ["She packed", ["a pen", "a ruler", "a book", "an eraser"]], ["We saw", ["lions", "monkeys", "snakes", "birds"]], ["He plays", ["football", "tennis", "chess", "ludo"]], ["Mother cooked", ["rice", "stew", "fish", "plantain"]], ["The colours are", ["red", "blue", "green", "white"]], ["I visited", ["Kano", "Jos", "Enugu", "Lagos"]], ["They sell", ["bread", "milk", "sugar", "tea"]], ["We need", ["paper", "glue", "scissors", "paint"]], ["She grows", ["maize", "okra", "pepper", "cassava"]], ["He invited", ["Ada", "Musa", "Bola", "Chidi"]]];
export const OWNERS: Pair[] = [["Ada", "bag"], ["Tunde", "book"], ["Musa", "bicycle"], ["Kemi", "pencil"], ["Emeka", "ball"], ["Amina", "dress"], ["Chidi", "shoe"], ["Bola", "ruler"], ["Sani", "cap"], ["Ngozi", "cup"], ["Tolu", "desk"]];

export const WORD_ORDER = ["This is a ball", "I have a pen", "The cat is black", "We go to school", "She likes to read", "My name is Ada", "The sun is hot", "I can see you", "He has a dog", "Birds can fly high", "The baby is sleeping", "We love our teacher", "I drink clean water", "The boy runs fast", "She has two books", "Fish live in water", "My bag is new", "They are playing football", "The dog is barking", "I wash my hands", "We eat rice daily", "The girl can sing", "Mother cooks good food", "Father reads a newspaper"];

export const AN_NOUNS = ["apple", "egg", "orange", "umbrella", "elephant", "ant", "onion", "eagle", "axe", "ear", "eye", "owl", "insect", "arm", "uncle", "aunt", "island", "oven", "engine", "arrow"];
export const A_NOUNS = ["book", "cat", "dog", "pen", "table", "ball", "house", "tree", "car", "girl", "boy", "bag", "cup", "hen", "goat", "chair", "door", "fish", "bird", "shoe"];

/** [sentence with ___, answer, three wrong words] */
export type Gap = [string, string, [string, string, string]];
export const PREPOSITIONS: Gap[] = [
  ["The cat is hiding ___ the bed.", "under", ["during", "since", "among"]], ["We go to school ___ Monday to Friday.", "from", ["at", "of", "into"]], ["The lesson begins ___ eight o'clock.", "at", ["on", "in", "of"]], ["My birthday is ___ December.", "in", ["at", "on", "to"]],
  ["The meeting is ___ Friday.", "on", ["in", "at", "of"]], ["He jumped ___ the river.", "into", ["at", "of", "during"]], ["She shared the sweets ___ her two brothers.", "between", ["among", "into", "at"]], ["The teacher shared the oranges ___ the thirty pupils.", "among", ["between", "at", "into"]],
  ["The aeroplane flew ___ the clouds.", "above", ["of", "at", "since"]], ["They walked ___ the bridge to the other side.", "across", ["among", "since", "of"]], ["I have lived here ___ 2020.", "since", ["for", "from", "at"]], ["We waited ___ two hours.", "for", ["since", "at", "in"]],
  ["The boy is afraid ___ dogs.", "of", ["from", "with", "at"]], ["She is good ___ Mathematics.", "at", ["in", "on", "of"]], ["He is married ___ a nurse.", "to", ["with", "by", "at"]], ["The pupil was absent ___ school.", "from", ["in", "at", "to"]],
  ["Please listen ___ the teacher.", "to", ["at", "for", "on"]], ["The bucket is full ___ water.", "of", ["with", "by", "in"]], ["We travelled ___ bus.", "by", ["on", "with", "in"]], ["Divide ten ___ two.", "by", ["with", "from", "on"]],
  ["She arrived ___ the airport early.", "at", ["to", "in", "on"]], ["The picture hangs ___ the wall.", "on", ["in", "at", "to"]], ["He was born ___ Kano.", "in", ["at", "on", "to"]], ["Congratulations ___ your success.", "on", ["for", "at", "of"]],
];
export const CONJUNCTIONS: Gap[] = [
  ["I was hungry, ___ I ate some bread.", "so", ["but", "or", "although"]], ["She is small ___ strong.", "but", ["so", "or", "because"]], ["He stayed at home ___ he was ill.", "because", ["but", "so", "or"]], ["Would you like tea ___ coffee?", "or", ["but", "so", "because"]],
  ["Ada ___ Bola are friends.", "and", ["but", "or", "so"]], ["___ it was raining, we went to school.", "Although", ["Because", "So", "And"]], ["Wait here ___ I come back.", "until", ["but", "and", "or"]], ["You will fail ___ you work hard.", "unless", ["and", "so", "because"]],
  ["___ you heat ice, it melts.", "If", ["But", "Or", "So"]], ["He ran fast, ___ he missed the bus.", "yet", ["so", "because", "or"]], ["Wash your hands ___ you eat.", "before", ["although", "but", "or"]], ["She brushed her teeth ___ she had eaten.", "after", ["unless", "but", "or"]],
  ["I will call you ___ I arrive.", "when", ["but", "or", "although"]], ["He is neither tall ___ short.", "nor", ["or", "and", "but"]], ["You may either walk ___ take a bus.", "or", ["nor", "and", "but"]], ["She is not only clever ___ also kind.", "but", ["and", "or", "so"]],
  ["He worked hard ___ that he could pass.", "so", ["but", "or", "although"]], ["Do not talk ___ the teacher is speaking.", "while", ["but", "or", "so"]], ["I like rice, ___ my sister prefers beans.", "but", ["so", "because", "unless"]], ["___ he is rich, he is not proud.", "Though", ["Because", "So", "Or"]],
  ["Take an umbrella ___ it rains.", "in case", ["although", "but", "until"]], ["He spoke quietly ___ nobody would hear.", "so that", ["although", "unless", "or"]],
];

export const SIMILES: Pair[] = [["brave", "a lion"], ["busy", "a bee"], ["slow", "a snail"], ["white", "snow"], ["black", "coal"], ["cold", "ice"], ["sweet", "honey"], ["light", "a feather"], ["strong", "an ox"], ["quiet", "a mouse"], ["proud", "a peacock"], ["wise", "an owl"], ["blind", "a bat"], ["cunning", "a fox"], ["gentle", "a lamb"], ["green", "grass"], ["fresh", "a daisy"], ["stubborn", "a mule"], ["tall", "a giraffe"], ["fast", "lightning"], ["old", "the hills"], ["clear", "crystal"], ["flat", "a pancake"], ["good", "gold"], ["sharp", "a razor"], ["playful", "a kitten"], ["heavy", "lead"], ["hungry", "a wolf"], ["dry", "a bone"], ["smooth", "silk"]];
export const SIMILE_WRONG = ["a spoon", "a table", "a door", "a shoe", "a basket", "a ladder", "a window", "a pencil", "a bucket", "a blanket"];

/** [question, answer, wrong, wrong, wrong] */
export type Item = [string, string, string, string, string];
export const LETTERS: Item[] = [
  ["How many addresses does an informal letter have?", "one", "two", "three", "none"],
  ["How many addresses does a formal letter have?", "two", "one", "three", "four"],
  ["Where is the writer's address written in a letter?", "at the top right-hand corner", "at the bottom left-hand corner", "in the middle of the page", "at the back of the page"],
  ["What is written just below the writer's address?", "the date", "the title", "the signature", "the greeting"],
  ["In a letter, \"Dear Aunty Bisi,\" is called the", "salutation", "conclusion", "address", "heading"],
  ["Which closing suits a letter to your friend?", "Yours sincerely,", "Yours faithfully,", "Yours obediently,", "Your customer,"],
  ["Which closing suits a formal letter that begins \"Dear Sir,\"?", "Yours faithfully,", "Yours sincerely,", "Your loving son,", "Bye for now,"],
  ["A letter to your father is", "an informal letter", "a formal letter", "a business letter", "a letter of application"],
  ["A letter to the headmaster asking for permission is", "a formal letter", "an informal letter", "a friendly letter", "a private note"],
  ["Which part of a letter comes last?", "the writer's name", "the date", "the salutation", "the address"],
  ["The main part of a letter is called the", "body", "heading", "closing", "salutation"],
  ["In a formal letter, the title of the letter is written", "after the salutation", "before the addresses", "after the signature", "at the very end"],
  ["A composition should begin with", "an introduction", "a conclusion", "a signature", "an address"],
  ["The last paragraph of a composition is the", "conclusion", "introduction", "title", "salutation"],
  ["Each paragraph of a composition should be about", "one main idea", "many unrelated ideas", "the title only", "the writer's address"],
  ["A composition that tells a story of something that happened is", "narrative", "descriptive", "argumentative", "a formal letter"],
  ["A composition that tells what a person or place looks like is", "descriptive", "narrative", "a debate", "a notice"],
  ["Before writing a composition it is best to", "make an outline of your points", "write the conclusion first", "count the words", "draw pictures only"],
  ["The first word of every sentence begins with", "a capital letter", "a small letter", "a comma", "a number"],
  ["Which is the best way to write the title of a composition about your school?", "My School", "my school", "MY school", "my School"],
  ["In a debate, a speaker who supports the motion is on the", "proposing side", "opposing side", "judging panel", "timekeeping table"],
  ["A new paragraph should begin", "on a new line", "on the same line", "on the back page", "in the margin"],
  ["Which of these should not appear in a formal letter?", "slang and jokes", "the date", "the receiver's address", "a title"],
  ["In a formal letter, the address of the person you are writing to is the", "receiver's address", "writer's address", "return address", "postal stamp"],
  ["Which date is written correctly for a letter?", "4th October, 2026", "october 4th 2026", "4th, october 2026.", "2026 4th october"],
  ["\"I hope to hear from you soon.\" usually comes in the", "conclusion of a letter", "address", "salutation", "heading"],
  ["Which punctuation mark follows the salutation \"Dear Sir\"?", "a comma", "a full stop", "a question mark", "an exclamation mark"],
  ["After writing a composition you should", "read it over and correct mistakes", "never read it again", "tear out the page", "remove all the paragraphs"],
  ["Words such as \"first\", \"next\", \"then\" and \"finally\" show", "the order of events", "the writer's address", "the spelling of words", "the title"],
  ["A letter of application for a job is", "a formal letter", "an informal letter", "a friendly letter", "a personal note"],
];

export interface Passage {
  title: string;
  text: string;
  /** [question, answer, wrong, wrong, wrong] */
  questions: Item[];
}
export const PASSAGES: Passage[] = [
  {
    title: "Bola and her ball",
    text: "Bola has a red ball. She plays with the ball every evening. Her dog, Bingo, runs after the ball. One day the ball rolled into the gutter. Bola's father brought it out and washed it. Bola said, \"Thank you, Daddy.\"",
    questions: [
      ["What colour is Bola's ball?", "red", "blue", "green", "yellow"],
      ["When does Bola play with the ball?", "every evening", "every morning", "at night", "at noon"],
      ["What is the name of Bola's dog?", "Bingo", "Bola", "Daddy", "Bimbo"],
      ["What does the dog do?", "It runs after the ball.", "It sleeps on the ball.", "It eats the ball.", "It hides the ball."],
      ["Where did the ball roll into?", "the gutter", "the river", "the house", "the bush"],
      ["Who brought the ball out?", "Bola's father", "Bola's mother", "Bingo", "Bola's teacher"],
      ["What did Bola's father do to the ball after he brought it out?", "He washed it.", "He threw it away.", "He kicked it.", "He hid it."],
      ["What did Bola say to her father?", "Thank you", "Good morning", "I am sorry", "Goodbye"],
      ["Who owns the ball?", "Bola", "Bingo", "the teacher", "a friend"],
      ["Which word in the story tells us that Bola is polite?", "Thank you", "rolled", "gutter", "red"],
    ],
  },
  {
    title: "Musa on the farm",
    text: "Musa lives in a village near a river. Every Saturday he goes to the farm with his grandfather. They plant maize and yams. Musa carries a small hoe. At noon they sit under a mango tree and eat roasted corn. Musa loves the farm because the air is fresh and the birds sing.",
    questions: [
      ["Where does Musa live?", "in a village near a river", "in a big city", "on a mountain", "beside the sea"],
      ["On which day does Musa go to the farm?", "Saturday", "Sunday", "Monday", "Friday"],
      ["Who goes to the farm with Musa?", "his grandfather", "his teacher", "his sister", "his friend"],
      ["What do they plant?", "maize and yams", "rice and beans", "mangoes and oranges", "pepper and okra"],
      ["What does Musa carry?", "a small hoe", "a big cutlass", "a basket", "a bucket"],
      ["When do they rest?", "at noon", "at night", "at dawn", "in the evening"],
      ["Where do they sit to rest?", "under a mango tree", "inside a hut", "beside the river", "on a rock"],
      ["What do they eat on the farm?", "roasted corn", "fried yam", "boiled rice", "ripe mangoes"],
      ["Why does Musa love the farm?", "The air is fresh and the birds sing.", "There is a river to swim in.", "He is paid money there.", "He meets his friends there."],
      ["The word \"noon\" means", "the middle of the day", "early morning", "late at night", "the end of the week"],
    ],
  },
  {
    title: "The honest girl",
    text: "Ngozi's mother sells vegetables at Oja market. On Friday, Ngozi helped her to arrange tomatoes, peppers and onions on a wooden table. A woman bought tomatoes worth two hundred naira but walked away without her change. Ngozi ran after her and gave her the fifty naira. The woman smiled and said, \"You are an honest girl.\" Ngozi's mother was proud of her and bought her a new storybook.",
    questions: [
      ["What does Ngozi's mother sell?", "vegetables", "clothes", "books", "fish"],
      ["What is the name of the market?", "Oja market", "Main market", "Ngozi market", "Friday market"],
      ["On which day did Ngozi help her mother?", "Friday", "Saturday", "Monday", "Sunday"],
      ["Which of these was not arranged on the table?", "carrots", "tomatoes", "peppers", "onions"],
      ["What was the table made of?", "wood", "iron", "plastic", "glass"],
      ["How much were the tomatoes the woman bought?", "two hundred naira", "fifty naira", "one hundred naira", "five hundred naira"],
      ["How much was the woman's change?", "fifty naira", "two hundred naira", "twenty naira", "one hundred naira"],
      ["What did the woman forget?", "her change", "her tomatoes", "her bag", "her child"],
      ["Which word did the woman use to describe Ngozi?", "honest", "clever", "pretty", "quiet"],
      ["What did Ngozi's mother buy for her?", "a new storybook", "a new dress", "a pair of shoes", "a school bag"],
    ],
  },
  {
    title: "The harmattan",
    text: "The harmattan is a dry, dusty wind that blows across Nigeria from the Sahara Desert between November and February. During the harmattan the mornings and nights are cold, but the afternoons can be hot. The air is so dry that lips crack and skin becomes rough, so people rub oil or cream on their bodies. Dust covers leaves, roofs and furniture. Farmers like the season because it helps them to dry their crops, but drivers must be careful because the dusty haze makes it hard to see far.",
    questions: [
      ["What is the harmattan?", "a dry, dusty wind", "a heavy rain", "a kind of crop", "a hot desert"],
      ["Where does the harmattan blow from?", "the Sahara Desert", "the Atlantic Ocean", "the River Niger", "the rain forest"],
      ["Between which months does the harmattan blow?", "November and February", "March and June", "July and September", "April and August"],
      ["What are the mornings like during the harmattan?", "cold", "hot", "rainy", "stormy"],
      ["Why do lips crack during the harmattan?", "because the air is very dry", "because it rains heavily", "because people eat too much", "because the sun does not rise"],
      ["What do people rub on their bodies?", "oil or cream", "dust", "water only", "sand"],
      ["What covers leaves, roofs and furniture?", "dust", "snow", "rain water", "smoke"],
      ["Why do farmers like the harmattan?", "It helps them to dry their crops.", "It brings rain for planting.", "It kills all the weeds.", "It makes the days longer."],
      ["Why must drivers be careful?", "The dusty haze makes it hard to see far.", "The roads are flooded.", "The roads are closed.", "There are too many farmers."],
      ["The word \"haze\" in the passage means", "thin dust in the air that makes things unclear", "a very heavy rainfall", "a type of farm crop", "a cold morning"],
    ],
  },
  {
    title: "The honeybee",
    text: "Honeybees live together in a home called a hive. A hive may contain as many as fifty thousand bees, and each bee has a job. The queen is the largest bee, and her only work is to lay eggs. The drones are the male bees. The workers, which are all female, do everything else: they build the wax comb, guard the entrance, feed the young and fly out to collect nectar from flowers. Back in the hive the nectar is turned into honey, which the bees store as food for the dry season. As bees move from flower to flower they carry pollen, and this helps plants to produce fruits and seeds. Without bees, many of our crops would fail.",
    questions: [
      ["What is the home of honeybees called?", "a hive", "a nest", "a den", "a web"],
      ["About how many bees may live in one hive?", "fifty thousand", "fifty", "five hundred", "five million"],
      ["Which is the largest bee in the hive?", "the queen", "the drone", "the worker", "the guard"],
      ["What is the queen's only work?", "to lay eggs", "to collect nectar", "to guard the hive", "to build the comb"],
      ["What are drones?", "male bees", "female bees", "young bees", "old bees"],
      ["Which bees are all female?", "the workers", "the drones", "the guards only", "the young"],
      ["Which of these is not a job of the workers?", "laying eggs", "building the wax comb", "feeding the young", "collecting nectar"],
      ["Where do bees collect nectar from?", "flowers", "rivers", "leaves", "the soil"],
      ["Why do bees store honey?", "as food for the dry season", "to sell to farmers", "to build the hive", "to feed the flowers"],
      ["How do bees help plants to produce fruits and seeds?", "by carrying pollen from flower to flower", "by watering the plants", "by eating the leaves", "by guarding the plants"],
    ],
  },
  {
    title: "Plastic waste and recycling",
    text: "Every day, thousands of plastic bottles and sachets are thrown into the streets and gutters of our towns. Plastic does not rot quickly; a single bottle can remain in the soil for hundreds of years. When it rains, the waste blocks the drains, and the water that cannot flow away floods roads and houses. Stagnant water in blocked gutters also becomes a breeding place for mosquitoes, which spread malaria. Fortunately, plastic can be recycled. Collectors gather used bottles and sell them to factories, where they are washed, shredded, melted and made into new products such as buckets, chairs and even roofing tiles. Recycling therefore keeps the environment clean, creates jobs and saves the raw materials needed to make new plastic. Each of us can help by dropping waste in a bin instead of on the ground.",
    questions: [
      ["Where are plastic bottles and sachets thrown every day?", "into the streets and gutters", "into recycling factories", "into waste bins", "into the sea only"],
      ["How long can a plastic bottle remain in the soil?", "hundreds of years", "a few days", "one year", "ten weeks"],
      ["What blocks the drains when it rains?", "plastic waste", "fallen leaves only", "mosquitoes", "roofing tiles"],
      ["What happens when rain water cannot flow away?", "Roads and houses are flooded.", "The plastic rots quickly.", "New jobs are created.", "The gutters become clean."],
      ["What breeds in the stagnant water of blocked gutters?", "mosquitoes", "fish", "bees", "collectors"],
      ["Which disease is mentioned in the passage?", "malaria", "cholera", "measles", "typhoid"],
      ["Who gather used bottles and sell them to factories?", "collectors", "teachers", "drivers", "farmers"],
      ["In what order is plastic treated in the factory?", "washed, shredded, melted", "melted, washed, shredded", "shredded, melted, washed", "melted, shredded, washed"],
      ["Which of these products is not mentioned in the passage?", "plates", "buckets", "chairs", "roofing tiles"],
      ["How can each of us help?", "by dropping waste in a bin", "by burning plastic at home", "by throwing waste in the gutter", "by buying more sachets"],
    ],
  },
];
