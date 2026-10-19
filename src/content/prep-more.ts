import type { Q } from "./packs/types";

/**
 * More original practice for the advanced (JUPEB, IJMB) and Common Entrance programmes, written for
 * Precious PS Academy in the style of those examinations. None is taken from a real paper.
 */

export const JUPEB_CHEMISTRY: Q[] = [
  ["E", "What is the shape of a methane molecule, CH₄?", "tetrahedral", "linear", "trigonal planar", "octahedral", "Four bonding pairs around carbon repel equally, giving bond angles of about 109.5°."],
  ["M", "The pH of a 0.01 mol dm⁻³ solution of hydrochloric acid is", "2", "1", "0.01", "12", "HCl is a strong acid, so [H⁺] = 10⁻² and pH = −log 10⁻² = 2."],
  ["M", "Which type of reaction converts an alkene into an alkane?", "hydrogenation", "hydration", "halogenation", "polymerisation", "Adding hydrogen across the double bond, with a nickel catalyst, gives the alkane."],
  ["H", "For the equilibrium N₂ + 3H₂ ⇌ 2NH₃ (exothermic), raising the temperature will", "shift the equilibrium to the left", "shift the equilibrium to the right", "have no effect", "increase the yield of ammonia", "By Le Chatelier's principle, heating favours the endothermic (backward) reaction."],
  ["M", "The oxidation number of manganese in KMnO₄ is", "+7", "+4", "+2", "+6", "K is +1 and four O give −8, so Mn = +7 for a neutral compound."],
  ["E", "Isotopes of an element have the same number of", "protons", "neutrons", "nucleons", "mass number", "Isotopes differ in neutrons but have the same atomic number (protons)."],
  ["H", "The rate equation of a reaction is rate = k[A]²[B]. The overall order is", "3", "2", "1", "4", "Add the powers: 2 + 1 = 3."],
  ["M", "Which functional group is present in ethanoic acid?", "carboxyl, –COOH", "hydroxyl only, –OH", "carbonyl of a ketone", "ester, –COO–", "Carboxylic acids contain the –COOH group."],
  ["M", "How many moles of oxygen atoms are in 0.5 mol of CO₂?", "1", "0.5", "2", "0.25", "Each CO₂ has two O atoms: 0.5 × 2 = 1 mol."],
  ["H", "An element has the electronic configuration 1s² 2s² 2p⁶ 3s² 3p⁵. It belongs to group", "17 (VII)", "15 (V)", "1 (I)", "2 (II)", "Seven outer electrons (3s² 3p⁵) place it in group 17, the halogens: this is chlorine."],
  ["M","Which gas is produced when zinc reacts with dilute hydrochloric acid?","hydrogen","oxygen","chlorine","carbon dioxide","Zn + 2HCl → ZnCl₂ + H₂: a reactive metal displaces hydrogen from the acid."],
  ["H","What volume of 0.1 mol dm⁻³ NaOH exactly neutralises 25 cm³ of 0.2 mol dm⁻³ HCl?","50 cm³","25 cm³","12.5 cm³","100 cm³","Moles of HCl = 0.025 × 0.2 = 0.005; NaOH needed = 0.005 ÷ 0.1 = 0.05 dm³ = 50 cm³."],
];

export const JUPEB_BIOLOGY: Q[] = [
  ["E", "The organelle where aerobic respiration releases most energy is the", "mitochondrion", "ribosome", "nucleus", "Golgi apparatus", "The Krebs cycle and oxidative phosphorylation take place in mitochondria."],
  ["M", "In a monohybrid cross between two heterozygous tall plants (Tt × Tt), the ratio of tall to short offspring is", "3 : 1", "1 : 1", "1 : 2 : 1", "all tall", "TT, Tt, Tt and tt: three show the dominant tall trait and one is short."],
  ["M", "Which base pairs with adenine in DNA?", "thymine", "uracil", "guanine", "cytosine", "In DNA, A pairs with T and G pairs with C; uracil replaces thymine only in RNA."],
  ["M", "The light-dependent stage of photosynthesis takes place in the", "thylakoid membranes of the chloroplast", "stroma", "cytoplasm", "mitochondria", "Chlorophyll in the thylakoids traps light, splitting water and making ATP and NADPH."],
  ["H", "Enzymes speed up reactions by", "lowering the activation energy", "raising the temperature of the cell", "supplying energy to the reactants", "changing the products formed", "An enzyme provides an alternative pathway with a lower activation energy."],
  ["E", "The process by which cells divide to produce gametes is", "meiosis", "mitosis", "binary fission", "budding", "Meiosis halves the chromosome number, forming haploid gametes."],
  ["M", "Which blood vessel carries oxygenated blood from the lungs to the heart?", "pulmonary vein", "pulmonary artery", "aorta", "vena cava", "The pulmonary vein is the only vein that carries oxygenated blood."],
  ["M", "Organisms that make their own food from simple substances are called", "autotrophs", "heterotrophs", "saprophytes", "parasites", "Autotrophs, such as green plants, make food by photosynthesis or chemosynthesis."],
  ["H", "In an ecosystem, only about 10% of energy passes from one trophic level to the next mainly because", "most energy is lost as heat in respiration", "animals eat too little", "plants do not trap sunlight", "decomposers take all the energy first", "Most energy is used in respiration and lost as heat, or remains in uneaten parts."],
  ["M", "The hormone that lowers blood glucose level is", "insulin", "glucagon", "adrenaline", "thyroxine", "Insulin from the pancreas causes the liver and muscles to take up glucose."],
  ["M","Which process moves water molecules across a partially permeable membrane from a dilute to a concentrated solution?","osmosis","diffusion of solutes","active transport","phagocytosis","Osmosis is the movement of water through a partially permeable membrane down its water potential gradient."],
  ["H","In humans, sex is determined by the","X and Y chromosomes from the father's sperm","mother's egg alone","temperature of the womb","number of autosomes","Eggs always carry X; a sperm carrying Y gives a boy (XY) and one carrying X gives a girl (XX)."],
];

export const JUPEB_ECONOMICS: Q[] = [
  ["E", "Opportunity cost is the", "next best alternative given up", "money price of a good", "total cost of production", "cost of hiring labour", "Choosing one thing means giving up the next best alternative."],
  ["M", "If the price of a good rises by 10% and quantity demanded falls by 20%, the price elasticity of demand is", "2 (elastic)", "0.5 (inelastic)", "1 (unitary)", "0 (perfectly inelastic)", "PED = 20% ÷ 10% = 2, which is greater than 1, so demand is elastic."],
  ["M", "In perfect competition in the long run, firms earn", "normal profit only", "supernormal profit", "losses", "monopoly profit", "Free entry and exit remove supernormal profits in the long run."],
  ["H", "A firm should shut down in the short run if price falls below", "average variable cost", "average total cost", "marginal revenue", "average fixed cost", "Below AVC the firm cannot even cover its variable costs, so producing adds to losses."],
  ["M", "Gross Domestic Product measures the", "value of final goods and services produced within a country in a period", "total money supply", "income of citizens abroad only", "value of all imports", "GDP counts production within the country's borders."],
  ["M", "Which of these is a tool of contractionary monetary policy?", "raising the monetary policy rate", "cutting taxes", "increasing government spending", "lowering the cash reserve ratio", "A higher policy rate makes borrowing dearer and reduces money supply."],
  ["E", "Inflation is a", "persistent rise in the general price level", "fall in prices", "rise in the price of one good", "rise in unemployment", "Inflation is a sustained increase in the general level of prices."],
  ["H", "If the marginal propensity to consume is 0.8, the simple multiplier is", "5", "8", "1.25", "0.2", "Multiplier = 1 ÷ (1 − MPC) = 1 ÷ 0.2 = 5."],
  ["M", "A tariff is a", "tax on imported goods", "subsidy on exports", "limit on the quantity of imports", "loan to a foreign country", "A tariff is a tax placed on imports."],
  ["M", "The law of diminishing returns applies when", "more of a variable factor is added to a fixed factor", "all factors are increased together", "prices fall", "demand rises", "Adding a variable input to a fixed one eventually makes marginal product fall."],
  ["M","A monopolist maximises profit where","marginal cost equals marginal revenue","price equals average cost","total revenue is greatest","average cost is lowest","All profit-maximising firms produce where MC = MR."],
  ["E","Which of these is a direct tax?","personal income tax","value added tax","import duty","excise duty","A direct tax is paid by the person on whom it is levied, such as income tax."],
];

export const JUPEB_GOVERNMENT: Q[] = [
  ["E", "The doctrine that divides government into legislative, executive and judicial arms is", "separation of powers", "rule of law", "federalism", "delegated legislation", "Montesquieu's separation of powers assigns law-making, executing and interpreting to different organs."],
  ["M", "The rule of law, as explained by A. V. Dicey, includes", "equality of all before the law", "supremacy of the military", "rule by decree", "immunity of citizens from courts", "Dicey's principles include supremacy of law, equality before the law and protection of rights by courts."],
  ["M", "In a federal system, powers are shared between", "the central government and the component units", "the president and the vice-president", "the courts and the police", "political parties", "Federalism divides powers constitutionally between national and state (regional) governments."],
  ["M", "Nigeria became a republic in", "1963", "1960", "1966", "1979", "Nigeria gained independence in 1960 and became a republic on 1 October 1963."],
  ["H", "A constitution that requires a special procedure to amend is described as", "rigid", "flexible", "unwritten", "unitary", "A rigid constitution cannot be changed by an ordinary law-making process."],
  ["M", "Delegated legislation means laws made by", "bodies other than the legislature, under authority given by it", "the judiciary only", "the electorate in a referendum", "foreign governments", "The legislature delegates power to ministers, agencies or local authorities to make rules."],
  ["E", "A system in which the head of state and head of government are the same person is", "presidential", "parliamentary", "monarchical", "confederal", "In a presidential system such as Nigeria's, the president holds both roles."],
  ["H", "The power of courts to declare laws unconstitutional is called", "judicial review", "judicial precedent", "habeas corpus", "impeachment", "Judicial review lets courts test laws and actions against the constitution."],
  ["M", "Universal adult suffrage means that", "all qualified adults can vote", "only property owners can vote", "only men can vote", "only educated people can vote", "Every adult citizen who meets basic conditions such as age may vote."],
  ["M", "The organ of the United Nations with five permanent members is the", "Security Council", "General Assembly", "Secretariat", "International Court of Justice", "China, France, Russia, the UK and the USA are permanent members of the Security Council."],
  ["M","Impeachment is a process by which","the legislature removes an executive officer for misconduct","the courts try ordinary criminals","voters elect a new president","the army takes over power","The legislature charges and may remove a president or governor for gross misconduct."],
  ["E","A referendum is","a direct vote by citizens on a particular issue","a meeting of the cabinet","a court judgement","a party convention","In a referendum the electorate decides a specific question directly."],
];

export const IJMB_PHYSICS: Q[] = [
  ["E", "The SI unit of power is the", "watt", "joule", "newton", "pascal", "Power is energy per second: one watt is one joule per second."],
  ["M", "A body of mass 2 kg moves at 3 m/s. Its kinetic energy is", "9 J", "6 J", "18 J", "3 J", "KE = ½mv² = ½ × 2 × 9 = 9 J."],
  ["M", "Two resistors of 6 Ω and 3 Ω are joined in parallel. The combined resistance is", "2 Ω", "9 Ω", "4.5 Ω", "18 Ω", "1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω."],
  ["M", "A wave has frequency 50 Hz and wavelength 4 m. Its speed is", "200 m/s", "12.5 m/s", "54 m/s", "0.08 m/s", "v = fλ = 50 × 4 = 200 m/s."],
  ["H", "A stone is thrown horizontally from a cliff. Ignoring air resistance, its horizontal velocity", "stays constant", "increases steadily", "decreases to zero", "changes direction", "No horizontal force acts, so the horizontal component of velocity is unchanged."],
  ["M", "The momentum of a 1000 kg car moving at 20 m/s is", "20 000 kg m/s", "50 kg m/s", "10 000 kg m/s", "200 kg m/s", "p = mv = 1000 × 20 = 20 000 kg m/s."],
  ["E", "Which of these is a vector quantity?", "velocity", "speed", "mass", "temperature", "Velocity has both magnitude and direction."],
  ["H", "The half-life of a radioactive sample is 5 days. What fraction remains after 15 days?", "one-eighth", "one-third", "one-quarter", "one-fifteenth", "15 days is three half-lives: ½ × ½ × ½ = ⅛."],
  ["M", "Light travels from air into glass. It bends", "towards the normal, because it slows down", "away from the normal, because it speeds up", "not at all", "back into the air", "Glass is optically denser, so light slows and bends towards the normal."],
  ["M", "The specific heat capacity of water is 4200 J/kg K. Heat needed to warm 2 kg of water by 10 K is", "84 000 J", "42 000 J", "8400 J", "21 000 J", "Q = mcΔθ = 2 × 4200 × 10 = 84 000 J."],
  ["M","The pressure exerted by a force of 200 N on an area of 4 m² is","50 Pa","800 Pa","204 Pa","0.02 Pa","Pressure = force ÷ area = 200 ÷ 4 = 50 Pa."],
  ["E","Which device converts electrical energy into mechanical energy?","electric motor","generator","transformer","battery","A motor uses the force on a current-carrying conductor in a magnetic field to turn."],
];

export const IJMB_BIOLOGY: Q[] = [
  ["E", "The basic unit of life is the", "cell", "tissue", "organ", "atom", "All living things are made of cells."],
  ["M", "Which part of the flower develops into the fruit after fertilisation?", "ovary", "anther", "petal", "stigma", "The ovary becomes the fruit and the ovules become seeds."],
  ["M", "Malaria is caused by", "Plasmodium, carried by female Anopheles mosquitoes", "a virus carried by houseflies", "bacteria in dirty water", "a fungus on the skin", "Plasmodium is a protozoan transmitted by the bite of the female Anopheles mosquito."],
  ["M", "The functional unit of the kidney is the", "nephron", "neuron", "alveolus", "villus", "Each kidney contains about a million nephrons that filter blood."],
  ["H", "A population grows quickly at first and then levels off. The level at which it stabilises is called the", "carrying capacity", "biotic potential", "birth rate", "niche", "The environment's carrying capacity limits population size."],
  ["E", "Xylem tissue transports", "water and mineral salts", "manufactured food", "hormones only", "oxygen to the roots", "Xylem carries water and minerals from roots to leaves; phloem carries food."],
  ["M", "Which vitamin deficiency causes scurvy?", "vitamin C", "vitamin A", "vitamin D", "vitamin K", "Lack of vitamin C (ascorbic acid) causes bleeding gums and scurvy."],
  ["H", "A person with blood group O can donate blood to people of", "all four ABO groups", "group O only", "group AB only", "groups A and B only", "Group O red cells carry no A or B antigens, so O is the universal donor (ABO system)."],
  ["M", "The sequence of a simple food chain is", "grass → grasshopper → lizard → hawk", "hawk → lizard → grasshopper → grass", "lizard → grass → hawk → grasshopper", "grasshopper → grass → hawk → lizard", "Energy flows from producer to primary, secondary and tertiary consumers."],
  ["M", "Which gas is released as a by-product of photosynthesis?", "oxygen", "carbon dioxide", "nitrogen", "methane", "Splitting water in the light stage releases oxygen."],
  ["M","Which part of the brain controls balance and coordination of movement?","cerebellum","cerebrum","medulla oblongata","hypothalamus","The cerebellum coordinates muscular activity and maintains posture and balance."],
  ["E","The green pigment that absorbs light in plants is","chlorophyll","haemoglobin","melanin","carotene only","Chlorophyll in chloroplasts absorbs mainly red and blue light for photosynthesis."],
];

export const IJMB_ECONOMICS: Q[] = [
  ["E", "The basic economic problem is", "scarcity of resources relative to wants", "too much money", "high taxes", "lack of banks", "Wants are unlimited but resources are scarce, so choices must be made."],
  ["M", "A shift of the demand curve to the right can be caused by", "a rise in consumers' income for a normal good", "a rise in the good's own price", "a fall in income", "a rise in the price of a complement", "Higher income raises demand for normal goods at every price."],
  ["M", "Price ceiling set below equilibrium price leads to", "shortage", "surplus", "no change", "higher prices", "At the low controlled price, quantity demanded exceeds quantity supplied."],
  ["M", "Which is a function of a central bank?", "banker to the government", "accepting deposits from the public", "issuing shares", "selling insurance", "The central bank manages government accounts, issues currency and controls money supply."],
  ["H", "When marginal cost is below average cost, average cost is", "falling", "rising", "constant", "zero", "If the extra unit costs less than the average, it pulls the average down."],
  ["E", "Money that is acceptable by law for payment of debts is", "legal tender", "near money", "a cheque", "barter", "Notes and coins issued by the central bank are legal tender."],
  ["M", "Balance of payments deficit on current account means", "payments for imports exceed receipts from exports", "exports exceed imports", "the budget is balanced", "the currency has gained value", "More is paid out for goods, services and transfers than is received."],
  ["M", "The ability of a country to produce a good at a lower opportunity cost than another is", "comparative advantage", "absolute advantage", "terms of trade", "dumping", "Comparative advantage is based on lower opportunity cost."],
  ["H", "Cost-push inflation is caused by", "rising costs of production such as wages and fuel", "too much consumer spending", "falling interest rates only", "a budget surplus", "Higher input costs push prices up even without extra demand."],
  ["M", "The factor of production that bears risk and organises the others is", "the entrepreneur", "labour", "land", "capital", "The entrepreneur combines land, labour and capital and bears the risk."],
  ["M","Demand for a good whose quantity rises when income falls is described as demand for an","inferior good","normal good","luxury good","complementary good","For inferior goods, demand moves opposite to income."],
  ["E","Division of labour means","breaking production into tasks done by different workers","sharing profit equally","paying all workers the same wage","dividing land among farmers","Specialisation by task raises output per worker."],
];

export const IJMB_GOVERNMENT: Q[] = [
  ["E", "Sovereignty means", "supreme power of a state over its territory", "the right to vote", "membership of the UN", "a written constitution", "A sovereign state has final authority within its borders."],
  ["M", "Which body conducts federal elections in Nigeria?", "the Independent National Electoral Commission (INEC)", "the National Assembly", "the Supreme Court", "the Nigeria Police Force", "INEC organises and supervises federal elections."],
  ["M", "Pressure groups differ from political parties because pressure groups", "seek to influence policy without contesting elections", "always form the government", "write the constitution", "control the army", "Pressure groups lobby; parties seek to win elections and form government."],
  ["M", "The legislature of Nigeria is known as the", "National Assembly", "Federal Executive Council", "Council of State", "House of Chiefs", "The National Assembly consists of the Senate and the House of Representatives."],
  ["H", "Indirect rule in Northern Nigeria worked well mainly because", "there was an established emirate system of administration", "the British spoke Hausa", "there were no traditional rulers", "the region had many missionaries", "The British ruled through existing emirs and their administrative structures."],
  ["E", "A government by a few rich people is", "plutocracy", "democracy", "theocracy", "monarchy", "Plutocracy is rule by the wealthy."],
  ["M", "Fundamental human rights in Nigeria are contained in", "Chapter IV of the 1999 Constitution", "the Criminal Code only", "the Electoral Act", "the Land Use Act", "Chapter IV of the 1999 Constitution lists fundamental rights."],
  ["M", "The Economic Community of West African States (ECOWAS) was founded in", "1975", "1963", "1960", "1999", "ECOWAS was established by the Treaty of Lagos in 1975."],
  ["H", "Proportional representation is an electoral system in which", "seats are shared according to each party's share of votes", "the candidate with most votes in a single-member constituency wins", "only one party may contest", "the president appoints legislators", "Parties win seats in proportion to their votes."],
  ["M", "The Public Service is expected to be", "neutral and permanent", "partisan and temporary", "elected every four years", "controlled by pressure groups", "Civil servants serve any government in office without party bias."],
  ["M","The head of the judiciary in Nigeria is the","Chief Justice of Nigeria","Attorney-General of the Federation","Senate President","Inspector-General of Police","The Chief Justice of Nigeria heads the Supreme Court and the judiciary."],
  ["E","Nigeria practises which system of government?","federal presidential","unitary parliamentary","confederal monarchy","one-party state","Nigeria is a federation with an executive president."],
];

/* ---------------------------------------------------------- Common Entrance (Primary 4–6) */

export const CE_MATHS: Q[] = [
  ["E", "What is 3456 + 2789?", "6245", "6235", "5245", "6345", "Add column by column, carrying: 3456 + 2789 = 6245."],
  ["E", "Find the value of 72 ÷ 8 × 3.", "27", "3", "24", "21", "Work from left to right: 72 ÷ 8 = 9, then 9 × 3 = 27."],
  ["M", "What is the LCM of 4, 6 and 8?", "24", "12", "48", "2", "24 is the smallest number divisible by 4, 6 and 8."],
  ["M", "Simplify ¾ + ⅚.", "1 7/12", "4/10", "1 1/2", "1 5/12", "Use twelfths: 9/12 + 10/12 = 19/12 = 1 7/12."],
  ["M", "A trader buys a bag of rice for ₦40 000 and sells it for ₦46 000. Find the percentage profit.", "15%", "6%", "13%", "20%", "Profit = ₦6000; 6000 ÷ 40 000 × 100 = 15%."],
  ["M", "Find the area of a rectangle 12 cm long and 7 cm wide.", "84 cm²", "38 cm²", "19 cm²", "74 cm²", "Area = length × breadth = 12 × 7 = 84 cm²."],
  ["M", "The average of 12, 15, 18 and 23 is", "17", "68", "16", "18", "Sum = 68; 68 ÷ 4 = 17."],
  ["H", "If 5 pencils cost ₦350, how much will 8 pencils cost?", "₦560", "₦400", "₦700", "₦2800", "One pencil costs ₦70, so 8 cost ₦560."],
  ["M", "Round 4.786 to two decimal places.", "4.79", "4.78", "4.8", "4.70", "The third decimal digit is 6, so round 4.78 up to 4.79."],
  ["H", "A car travels 180 km in 3 hours. At the same speed, how far will it go in 5 hours?", "300 km", "540 km", "900 km", "250 km", "Speed = 60 km/h; 60 × 5 = 300 km."],
  ["E", "How many minutes are there in 2½ hours?", "150", "120", "250", "130", "2 × 60 + 30 = 150 minutes."],
  ["M", "The angles of a triangle are 50° and 70°. Find the third angle.", "60°", "120°", "70°", "180°", "Angles in a triangle add to 180°: 180 − 120 = 60°."],
  ["H", "Find the missing number: 2, 6, 18, 54, ___", "162", "108", "72", "158", "Each term is multiplied by 3: 54 × 3 = 162."],
  ["M", "Express 0.35 as a fraction in its lowest terms.", "7/20", "35/10", "3/5", "7/2", "0.35 = 35/100 = 7/20."],
  ["H", "The perimeter of a square is 36 cm. Find its area.", "81 cm²", "36 cm²", "144 cm²", "9 cm²", "Each side is 36 ÷ 4 = 9 cm, so area = 9 × 9 = 81 cm²."],
];

export const CE_ENGLISH: Q[] = [
  ["E", "Choose the correct plural of 'child'.", "children", "childs", "childrens", "childes", "'Child' has an irregular plural: children."],
  ["E", "Choose the word opposite in meaning to 'ancient'.", "modern", "old", "historic", "aged", "Ancient means very old; modern is its opposite."],
  ["M", "Choose the correct option: 'Neither Tunde nor his sisters ___ at home.'", "are", "is", "was", "be", "With neither … nor, the verb agrees with the nearer subject, 'sisters', which is plural."],
  ["M", "Choose the word nearest in meaning to 'courageous'.", "brave", "afraid", "careless", "lazy", "Courageous means brave."],
  ["M", "Which word is correctly spelt?", "beautiful", "beautifull", "beutiful", "beatiful", "Beautiful: b-e-a-u-t-i-f-u-l."],
  ["M", "'The boy ran quickly to school.' The word 'quickly' is", "an adverb", "an adjective", "a noun", "a verb", "'Quickly' tells us how he ran, so it is an adverb."],
  ["M", "Choose the correct tense: 'Yesterday, my mother ___ a new dress.'", "bought", "buys", "buy", "has buy", "'Yesterday' shows the simple past: bought."],
  ["H", "Choose the correct question tag: 'She can swim, ___?'", "can't she", "can she", "doesn't she", "isn't she", "A positive statement with 'can' takes the negative tag 'can't she'."],
  ["M", "Fill the gap with the correct preposition: 'The cat is hiding ___ the table.'", "under", "on to", "at", "into of", "'Under' shows position below something."],
  ["E", "Choose the correct article: 'She ate ___ orange.'", "an", "a", "the a", "any a", "Use 'an' before a vowel sound: an orange."],
  ["H", "Which sentence is correctly punctuated?", "\"Where are you going?\" asked Ada.", "\"Where are you going\" asked Ada?", "Where are you going? asked Ada.", "\"Where are you going,\" asked Ada?", "The question mark belongs inside the quotation marks after the question."],
  ["M", "'As busy as a ___' — complete the simile.", "bee", "stone", "snail", "pillow", "Bees are always at work: 'as busy as a bee'."],
  ["M", "Choose the word that best completes: 'He was ___ for coming late, so he said sorry.'", "sorry", "happy", "proud", "excited", "Saying sorry shows he felt regret."],
  ["H", "The comparative form of 'good' is", "better", "gooder", "best", "more good", "Good, better, best: an irregular adjective."],
  ["M", "Choose the odd one out.", "chair", "mango", "orange", "banana", "Mango, orange and banana are fruits; a chair is furniture."],
];

export const CE_QUANTITATIVE: Q[] = [
  ["E", "Find the next number: 3, 7, 11, 15, ___", "19", "18", "21", "17", "Add 4 each time: 15 + 4 = 19."],
  ["M", "Find the next number: 1, 4, 9, 16, 25, ___", "36", "30", "35", "49", "These are square numbers: 6 × 6 = 36."],
  ["M", "If 4 → 12 and 7 → 21, then 9 →", "27", "18", "36", "29", "The rule is multiply by 3: 9 × 3 = 27."],
  ["M", "Find the missing number: 5, 10, 20, 40, ___", "80", "60", "45", "50", "Each number doubles: 40 × 2 = 80."],
  ["H", "If 6 → 40 and 3 → 13, then 5 →", "29", "31", "30", "25", "The rule is square the number, then add 4: 6² + 4 = 40 and 3² + 4 = 13, so 5² + 4 = 29."],
  ["E", "Find the next number: 50, 45, 40, 35, ___", "30", "25", "32", "34", "Subtract 5 each time."],
  ["M", "Find the next number: 2, 3, 5, 8, 12, ___", "17", "16", "15", "18", "The differences grow by one: +1, +2, +3, +4, then +5."],
  ["M", "If 8 → 5 and 15 → 12, then 20 →", "17", "23", "15", "18", "The rule is subtract 3: 20 − 3 = 17."],
  ["H", "Find the next number: 1, 1, 2, 3, 5, 8, ___", "13", "11", "12", "10", "Each number is the sum of the two before it: 5 + 8 = 13."],
  ["M", "If 10 → 5 and 30 → 15, then 48 →", "24", "96", "16", "12", "The rule is divide by 2: 48 ÷ 2 = 24."],
  ["H", "Find the missing number: 100, 81, 64, 49, ___", "36", "40", "25", "38", "These are falling square numbers: 10², 9², 8², 7², then 6² = 36."],
  ["M", "Find the next number: 7, 14, 28, 56, ___", "112", "70", "84", "102", "Each number doubles."],
];

export const CE_VERBAL: Q[] = [
  ["E", "Pen is to write as knife is to", "cut", "eat", "cook", "sharp", "A pen is used to write; a knife is used to cut."],
  ["M", "Doctor is to hospital as teacher is to", "school", "market", "farm", "church", "Each person works in the place named."],
  ["M", "Which word does NOT belong: lion, tiger, goat, leopard?", "goat", "lion", "tiger", "leopard", "Lion, tiger and leopard are wild cats; a goat is a domestic animal."],
  ["M", "Find the word that can come before 'ball', 'step' and 'print': ___", "foot", "hand", "door", "net", "football, footstep, footprint."],
  ["H", "If CAT is written as DBU, how is DOG written?", "EPH", "CNF", "EOH", "DPH", "Each letter moves one place forward in the alphabet: D→E, O→P, G→H."],
  ["E", "Hot is to cold as tall is to", "short", "big", "high", "long", "Hot and cold are opposites; the opposite of tall is short."],
  ["M", "Arrange to make a word: T, A, E, W, R", "WATER", "TAWER", "WRATE", "RETAW", "The letters spell WATER."],
  ["M", "Which word means the same as 'enormous'?", "huge", "tiny", "quick", "quiet", "Enormous means very large: huge."],
  ["H", "Find the missing letters: AB, DE, GH, JK, ___", "MN", "LM", "NO", "KL", "Each pair skips one letter: after JK skip L, then MN."],
  ["M", "Bird is to nest as bee is to", "hive", "web", "den", "kennel", "A bird lives in a nest; a bee lives in a hive."],
  ["M", "Which word does NOT belong: Monday, March, Friday, Sunday?", "March", "Monday", "Friday", "Sunday", "March is a month; the others are days of the week."],
  ["H", "If 1 = A, 2 = B and 3 = C, what does 8-5-12-16 spell?", "HELP", "HEAP", "HELD", "HOLD", "8 = H, 5 = E, 12 = L, 16 = P."],
];
