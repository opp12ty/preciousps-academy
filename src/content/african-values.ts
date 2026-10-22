import type { StarterArticle } from "./hub";

/**
 * African discipline and values, taught across Precious PS: on the home page, as the "value of the day" on
 * every dashboard, and in Knowledge Hub and Parent Learning articles. Written for Precious PS Academy.
 * Entry: [value, word from a Nigerian or African language, meaning, how to live it].
 */
export type Value = [title: string, word: string, meaning: string, practice: string];

export const AFRICAN_VALUES: Value[] = [
  ["Respect for elders", "Ìbọ̀wọ̀ (Yoruba)", "Elders carry wisdom and deserve honour.", "Greet elders first, stand or bow when they enter, and never shout at them."],
  ["Good character", "Ọmọlúàbí (Yoruba)", "A well-brought-up person is honest, kind, hardworking and respectful.", "Let your behaviour bring honour to your family and school."],
  ["Togetherness", "Ubuntu (Southern Africa)", "“I am because we are”: we grow by caring for one another.", "Share, help a classmate, and include those who are left out."],
  ["Brotherhood", "Onye aghana nwanne ya (Igbo)", "Never abandon your brother or sister.", "Stand by your family, friends and neighbours in hard times."],
  ["Dignity and honour", "Mutunci (Hausa)", "Self-respect shown through decent speech and conduct.", "Dress decently, speak politely and keep your word."],
  ["Hard work", "Iṣẹ́ lògùn ìṣẹ́ (Yoruba)", "Work is the cure for poverty.", "Do your chores and homework fully, without being pushed."],
  ["Honesty", "Gaskiya (Hausa)", "Truth is a light that never goes out.", "Never cheat in exams or tell lies to escape blame."],
  ["Patience", "Sùúrù (Yoruba)", "Patience is the father of good character.", "Wait your turn and finish what you start."],
  ["Greeting", "Ẹ káàárọ̀ · Ina kwana · Ụtụtụ ọma", "In our cultures, greeting is the first sign of good home training.", "Greet parents, teachers and neighbours every morning."],
  ["Gratitude", "Ẹ ṣé · Na gode · Daalụ", "A grateful heart attracts more blessing.", "Say thank you for every kindness, small or big."],
  ["Humility", "Ìrẹ̀lẹ̀ (Yoruba)", "The tree that bears fruit bends its branches.", "Celebrate success quietly and keep learning from others."],
  ["Responsibility", "Ojúṣe (Yoruba)", "Each person has a duty to the family and community.", "Take care of your belongings, younger siblings and your environment."],
  ["Punctuality", "Àsìkò (Yoruba)", "Time is precious; lateness shows disrespect.", "Arrive early to school, church, mosque and meetings."],
  ["Self-control", "Kamun kai (Hausa)", "A disciplined person controls the tongue and temper.", "Walk away from quarrels and think before you speak."],
  ["Community service", "Igwe bụ ike (Igbo)", "The community is strength.", "Join environmental sanitation, help the aged and keep public places clean."],
  ["Modest speech", "Ọ̀rọ̀ rere (Yoruba)", "Good words open doors; bad words close them.", "Avoid insults and rude language, online and offline."],
  ["Love of learning", "Ilimi (Hausa)", "Knowledge is the best inheritance a parent can give.", "Read every day and ask questions."],
  ["Care for nature", "Ilẹ̀ (Yoruba)", "The land feeds us, so we must protect it.", "Plant trees, never litter, and save water."],
  ["Obedience", "Ìgbọràn (Yoruba)", "Obeying good instructions keeps us safe and wise.", "Follow the rules at home and school the first time you are told."],
  ["Hospitality", "Karimci (Hausa)", "A guest is a blessing; welcome visitors warmly.", "Offer water or a seat to visitors and be polite."],
];

/** Today's value, the same for everyone on a given day. */
export const valueOfDay = (day: string, list?: { title: string; word: string; meaning: string; practice: string }[]): Value => {
  const n = [...day].reduce((a, c) => a + c.charCodeAt(0), 0);
  const items = list?.filter((v) => v.title.trim()).map((v): Value => [v.title, v.word, v.meaning, v.practice]) ?? [];
  const pool = items.length ? items : AFRICAN_VALUES;
  return pool[n % pool.length];
};

type Part = [heading: string, text: string];
const body = (parts: Part[]) => parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n");
const both = (category: string, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string): StarterArticle[] => {
  const base = { category, title, summary, body: body(parts), keyPoints: keyPoints.join("\n"), activity };
  return [{ ...base, audience: "STUDENT", section: "KNOWLEDGE" }, { ...base, audience: "PARENT", section: "LEARNING" }];
};

export const DISCIPLINE_ARTICLES: StarterArticle[] = [
  ...both("African Discipline", "African discipline: the values that raised great people", "Respect, hard work, honesty and togetherness: the home training our grandparents passed down.", [
    ["What is African discipline?", "African discipline is the **home training** that shapes how we speak, work and live with others. It is not about harshness. It is about **character**: being an Ọmọlúàbí (Yoruba), keeping your Mutunci (Hausa), and never abandoning your brother, *Onye aghana nwanne ya* (Igbo)."],
    ["The core values", AFRICAN_VALUES.slice(0, 8).map(([t, w, m]) => `- **${t}** (${w}): ${m}`).join("\n")],
    ["Why it still matters", "Employers, universities and communities look for people they can trust. Good character opens doors that certificates alone cannot."],
  ], ["Discipline is character, not harshness", "Respect, honesty, hard work, togetherness", "Good character opens doors"], "Choose one value from the list and practise it every day this week. Write what changed."),
  ...both("African Discipline", "Respect and greeting in Nigerian cultures", "How and why we greet, and the respect it shows.", [
    ["Greeting is home training", "In Yoruba culture boys may prostrate (*dọ̀bálẹ̀*) and girls kneel (*kúnlẹ̀*) to greet elders. Igbo children greet with *Ụtụtụ ọma* and Hausa children with *Ina kwana*, often bowing or kneeling. Every culture says the same thing: **I respect you.**"],
    ["Everyday respect", "- Greet first; don't wait to be greeted.\n- Use both hands to give or receive from an elder.\n- Don't interrupt adults; wait, then speak politely.\n- Address elders with titles: Mummy, Daddy, Aunty, Uncle, Sir, Ma."],
    ["Respect goes both ways", "Elders also show respect to children by listening, being fair and keeping their promises."],
  ], ["Greet first", "Both hands when giving to elders", "Never interrupt", "Respect is two-way"], "Learn to greet in three Nigerian languages and greet five people with them tomorrow."),
  ...both("African Discipline", "Hard work, the farm and the family", "Why our parents rise early, and what the farm teaches about discipline.", [
    ["Rise early", "In villages across Africa, families rise at dawn and walk together to the farm: the father with his hoe on his shoulder, mothers with baskets, children carrying water. Work starts before the sun is hot."],
    ["What the farm teaches", "- **Patience**: crops take months to grow.\n- **Planning**: plant at the right season.\n- **Teamwork**: everyone has a role.\n- **Reward**: you harvest what you plant. *Iṣẹ́ lògùn ìṣẹ́*: work is the cure for poverty."],
    ["At school today", "Your 'farm' is your studies. Plant daily effort, weed out distractions, and you will harvest good results."],
  ], ["Start early", "Patience and planning", "Everyone contributes", "You reap what you sow"], "For one week, wake up 30 minutes earlier to revise. Record how it helps."),
  ...both("African Discipline", "Togetherness: Ubuntu and community", "We are stronger together: caring for family, neighbours and our country.", [
    ["Ubuntu", "*Umuntu ngumuntu ngabantu*: a person is a person through other people. We succeed when we lift each other."],
    ["Living it", "- Help a struggling classmate.\n- Visit and assist the elderly.\n- Join community clean-ups.\n- Respect other ethnic groups and religions; Nigeria's diversity is our strength."],
  ], ["I am because we are", "Help others rise", "Respect diversity"], "Do one act of kindness for a neighbour this week without being asked."),
];
