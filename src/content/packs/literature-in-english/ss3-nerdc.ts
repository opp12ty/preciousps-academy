import type { PackTopic } from "../types";

/**
 * SS3 Literature in English — topics introduced by the NERDC 2025 scheme (weeks are set in ss3.ts).
 * Commentary is original; texts are summarised and analysed, not reproduced.
 */
type Topic = Omit<PackTopic, "week">;

export const dreamOverview: Topic = {
  title: "A Midsummer Night's Dream: Author, Characters and Plot",
  subtopics: ["William Shakespeare and his theatre", "Dramatis personae", "Plot summary", "Setting and structure of the play"],
  objectives: ["Relate the author's life and theatre to the play", "Identify the characters and their groups", "Summarise the plot of the play", "Describe the setting and structure of the play"],
  lesson: {
    title: "Meeting the Play",
    summary: "The playwright, the four groups of characters and the outline of the action.",
    minutes: 40,
    notes: `## The author
**William Shakespeare (1564–1616)** was born at **Stratford-upon-Avon**, England. He became an actor, playwright and part-owner of a company (the Lord Chamberlain's Men, later the King's Men) that performed at the **Globe Theatre** in London. He wrote about 37 plays — **comedies**, **histories** and **tragedies** — and 154 sonnets. *A Midsummer Night's Dream*, a **romantic comedy**, was written about **1595–96**, probably for performance at an aristocratic wedding.

In Shakespeare's theatre there was little scenery, so place and time are created by the **language**; women's parts were played by boys; plays mixed **verse** for noble characters with **prose** for common ones.

## Dramatis personae
The characters fall into **four groups**.

### The court of Athens
- **Theseus** — Duke of Athens; stands for law, reason and order.
- **Hippolyta** — Queen of the Amazons, betrothed to Theseus.
- **Egeus** — father of Hermia; insists on his right to choose her husband.
- **Philostrate** — Master of the Revels.

### The four lovers
- **Hermia** — small and dark; loves Lysander.
- **Lysander** — loves Hermia.
- **Demetrius** — Egeus's choice for Hermia; formerly courted Helena.
- **Helena** — tall and fair; loves Demetrius, who scorns her.

### The fairies
- **Oberon** — King of the Fairies.
- **Titania** — Queen of the Fairies.
- **Puck (Robin Goodfellow)** — Oberon's mischievous attendant.
- **Peaseblossom, Cobweb, Moth, Mustardseed** — Titania's fairies.

### The mechanicals (Athenian workmen)
- **Peter Quince**, carpenter — director of the play.
- **Nick Bottom**, weaver — plays Pyramus.
- **Francis Flute**, bellows-mender — plays Thisbe.
- **Tom Snout**, tinker — plays Wall.
- **Snug**, joiner — plays Lion.
- **Robin Starveling**, tailor — plays Moonshine.

## Plot summary
Theseus is to marry Hippolyta in four days. Egeus demands that the Duke enforce the law against his daughter **Hermia**, who refuses to marry **Demetrius** because she loves **Lysander**. She must obey, die, or become a nun. The lovers flee into the **wood**; **Helena** tells Demetrius, and both follow.

In the wood **Oberon and Titania** are quarrelling over a **changeling boy**. Oberon sends **Puck** for a magic flower whose juice makes a sleeper love the first creature seen on waking. He uses it on Titania, and orders Puck to use it on Demetrius; but Puck **mistakes Lysander** for him. Soon both young men love Helena and reject Hermia, and the four quarrel bitterly.

Meanwhile six workmen rehearse a play for the Duke's wedding. Puck gives **Bottom** an **ass's head**, and Titania, waking, falls in love with him.

Oberon, having obtained the boy, releases Titania; Puck restores Lysander's love for Hermia, while Demetrius remains in love with Helena. Theseus finds the lovers, overrules Egeus, and three couples are married. The workmen perform their absurd "tragedy" of **Pyramus and Thisbe**, the fairies bless the marriages, and Puck asks the audience to think it all a dream.

## Setting
- **Athens** — the city: daylight, law, authority and reason.
- **The wood** — night, moonlight, magic, freedom and confusion.
The action moves from city to wood and back, from order through disorder to a new harmony.

## Structure
Five acts; **several plots interwoven**: the royal wedding (the frame), the lovers, the fairy quarrel and the workmen's play. All are linked by the theme of **love** and brought together in the final act.

## Type of play
A **comedy**: it deals with love, involves mistaken identities and confusion, and ends in marriage and celebration.`,
    examples: `**Example 1.** Name the four groups of characters. *Answer:* the **Athenian court**, the **four lovers**, the **fairies** and the **mechanicals**.

**Example 2.** What do Athens and the wood represent? *Answer:* **Athens** stands for law and order; the **wood** for magic, freedom and confusion.

**Example 3.** Why is the play classified as a comedy? *Answer:* It treats love light-heartedly through confusion and ends happily in **marriages**.`,
  },
  questions: [
    ["E", "A Midsummer Night's Dream was written by", "William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Osborne", "It dates from about 1595–96."],
    ["E", "The Duke of Athens in the play is", "Theseus", "Oberon", "Egeus", "Lysander", "He is about to marry Hippolyta."],
    ["E", "The King of the Fairies is", "Oberon", "Puck", "Theseus", "Bottom", "His queen is Titania."],
    ["M", "The play is best classified as a", "romantic comedy", "revenge tragedy", "history play", "morality play", "It deals with love and ends in marriage."],
    ["M", "Hermia is in love with", "Lysander", "Demetrius", "Theseus", "Bottom", "Her father wants her to marry Demetrius."],
    ["M", "The Athenian workman who is a weaver by trade is", "Nick Bottom", "Peter Quince", "Francis Flute", "Tom Snout", "Bottom the weaver plays Pyramus."],
    ["M", "In the play, the wood outside Athens represents", "magic, freedom and confusion", "law and authority", "war and death", "poverty and labour", "It contrasts with the ordered city."],
    ["H", "Hippolyta is described as the Queen of the", "Amazons", "Fairies", "Athenians", "Spartans", "Theseus won her in war and is to wed her."],
    ["H", "Which of these characters is the Master of the Revels at Theseus's court?", "Philostrate", "Egeus", "Starveling", "Mustardseed", "He presents the list of entertainments."],
    ["H", "The device of several plots woven together in the play is best described as", "multiple plotting", "stream of consciousness", "flashback", "epistolary form", "The court, lovers, fairies and workmen each have a storyline."],
  ],
  jamb: [
    ["M", "Puck is also known in the play as", "Robin Goodfellow", "Robin Starveling", "Peter Quince", "Peaseblossom", "He is Oberon's mischievous servant."],
    ["H", "The quarrel between Oberon and Titania is over", "a changeling boy", "the magic flower", "Bottom's ass head", "Theseus's wedding feast", "Oberon wants the boy as his attendant."],
  ],
};

export const dreamAct1: Topic = {
  title: "A Midsummer Night's Dream: Act I",
  subtopics: ["Theseus and Hippolyta", "Egeus's complaint and the law of Athens", "The lovers' plan to escape", "The mechanicals' casting"],
  objectives: ["Discuss the relationship between Theseus and Hippolyta", "Explain the conflict between Hermia and her father", "Describe the lovers' plan and Helena's decision", "Describe the first meeting of the mechanicals"],
  lesson: {
    title: "Act I: The Conflict Is Set",
    summary: "Law opposes love in Athens, and the lovers and the workmen each make plans that lead to the wood.",
    minutes: 40,
    notes: `## Scene 1 — The palace of Theseus
### Theseus and Hippolyta
The play opens with **Theseus** impatient for his wedding to **Hippolyta**, four days away at the **new moon**. He complains that the old moon wanes slowly; she calmly replies that the days will pass quickly. Theseus admits he won her **by the sword**, but promises to wed her "in another key" — with pomp and revelry. Their relationship shows **conflict turned to harmony**, the pattern the whole play will follow. He tells Philostrate to stir up merriment in Athens.

### Egeus's complaint
**Egeus** enters "full of vexation" with his daughter **Hermia**. He has given consent for **Demetrius** to marry her, but **Lysander** has "bewitched" her with verses, gifts and songs by moonlight. Egeus claims the **ancient privilege of Athens**: as she is his, he may dispose of her — to Demetrius or **to her death**.

### Theseus's ruling
Theseus tells Hermia her father should be "as a god" to her. She asks the worst that can befall her. He replies that she must either **die** or **live as a nun**, "chanting faint hymns to the cold fruitless moon". She has until the day of the Duke's wedding to decide. Hermia boldly declares she would rather take the veil than yield.

**Lysander** argues that he is as well born and as wealthy as Demetrius, is loved by Hermia, and that Demetrius once **courted Helena** and won her heart. Theseus admits he has heard this, but upholds the law.

### The lovers' plan
Left alone, Lysander comforts Hermia with the famous line that **the course of true love never did run smooth**, listing the obstacles lovers face. He proposes that they **flee** to the house of his **widowed aunt**, seven leagues from Athens, where the Athenian law cannot reach them, and meet tomorrow night in the **wood**. Hermia swears to be there.

### Helena
**Helena** enters, lamenting that Demetrius loves Hermia's beauty. Hermia and Lysander confide their plan. Alone, Helena reflects in a **soliloquy** that love "looks not with the eyes, but with the mind" — that is why **Cupid is painted blind**. She decides to **tell Demetrius** of the flight, hoping to win his thanks.

## Scene 2 — Quince's house
The **mechanicals** meet to cast their play, "The most lamentable comedy, and most cruel death of **Pyramus and Thisbe**", for the Duke's wedding night.
- **Bottom** is to play **Pyramus**, a lover who kills himself for love.
- **Flute** is to play **Thisbe**, though he protests he has a beard coming.
- **Starveling** — Thisbe's mother; **Snout** — Pyramus's father; **Quince** — Thisbe's father; **Snug** — the **lion**.

**Bottom** wants to play **every part** — Thisbe in a "monstrous little voice", and the lion, roaring so that the Duke will say "Let him roar again". Quince flatters him into keeping to Pyramus. They agree to rehearse **in the palace wood, at the Duke's oak**, by moonlight.

## Significance of Act I
- **Exposition:** the characters and the central conflict — **love against law and parental authority** — are introduced.
- **Theme of love:** its difficulties (Lysander), its blindness and irrationality (Helena).
- **Comic contrast:** the elevated verse of the court is followed by the workmen's clumsy prose and **malapropisms** (Bottom says "aggravate" for "moderate"; the oxymoron "lamentable comedy").
- **Preparation:** both plots now point to the **wood**.
- **Character:** Hermia is courageous; Egeus harsh; Helena self-pitying; Bottom vain but likeable.
- **Imagery of the moon** runs through the act, linking it with change and with chastity.`,
    examples: `**Example 1.** What three choices does Theseus set before Hermia? *Answer:* To **marry Demetrius**, to **die**, or to **become a nun**.

**Example 2.** Why does Helena betray her friend's secret? *Answer:* She hopes Demetrius will be **grateful to her** and she may enjoy his company.

**Example 3.** Identify one source of humour in Scene 2. *Answer:* **Bottom's wish to play every part** (and his misuse of words).`,
  },
  questions: [
    ["E", "At the opening of the play, Theseus and Hippolyta are to be married in", "four days", "one month", "a year", "two weeks", "The wedding will take place at the new moon."],
    ["E", "Egeus wants his daughter Hermia to marry", "Demetrius", "Lysander", "Theseus", "Philostrate", "He has given Demetrius his consent."],
    ["E", "The play the workmen plan to perform is about", "Pyramus and Thisbe", "Romeo and Juliet", "Antony and Cleopatra", "Oberon and Titania", "It is a tale of two ill-fated lovers."],
    ["M", "According to Athenian law as stated by Theseus, if Hermia refuses to marry her father's choice she must die or", "become a nun", "be banished to the wood", "marry Theseus", "serve Hippolyta", "She would live a life of chastity."],
    ["M", "Lysander plans that he and Hermia will escape to the house of his", "widowed aunt", "elder brother", "tutor", "grandfather", "It lies seven leagues from Athens, beyond the reach of the law."],
    ["M", "Helena decides to tell Demetrius of the lovers' flight because she", "hopes to win his gratitude", "hates Hermia", "wants to please Egeus", "fears the Duke", "She longs for any attention from him."],
    ["M", "In the workmen's play, the part of Thisbe is given to", "Flute", "Bottom", "Snug", "Starveling", "Flute objects that he has a beard coming."],
    ["H", "Helena's remark that Cupid is painted blind suggests that love", "is irrational and does not judge by sight", "is always faithful", "depends on wealth", "is forbidden by law", "Love 'looks not with the eyes, but with the mind'."],
    ["H", "Bottom's eagerness to play Pyramus, Thisbe and the lion reveals his", "vanity and enthusiasm", "cowardice", "hatred of Quince", "wisdom", "He believes he can do everything well."],
    ["H", "Theseus's statement that he wooed Hippolyta with his sword implies that their union began in", "conflict", "friendship from childhood", "a fairy spell", "a business agreement", "He won her in war and now promises to wed her with joy."],
  ],
  jamb: [
    ["M", "The workmen agree to hold their rehearsal", "in the palace wood by moonlight", "in Quince's house at noon", "at the temple", "in the market square", "They wish to avoid being watched in the city."],
    ["H", "The phrase 'most lamentable comedy' in the title of the workmen's play is an example of", "oxymoron", "simile", "litotes", "apostrophe", "It joins contradictory ideas of sorrow and comedy."],
  ],
};

export const dreamAct2: Topic = {
  title: "A Midsummer Night's Dream: Act II",
  subtopics: ["The quarrel of Oberon and Titania", "The magic flower", "Demetrius and Helena in the wood", "Puck's mistake"],
  objectives: ["Discuss the relationship between Oberon and Titania", "Explain the origin and power of the magic flower", "Describe Helena's pursuit of Demetrius", "Explain how Puck's error complicates the plot"],
  lesson: {
    title: "Act II: Into the Fairy Wood",
    summary: "The fairy king and queen quarrel, and Oberon's attempt to help the lovers goes wrong.",
    minutes: 40,
    notes: `## Scene 1 — A wood near Athens
### Puck and the fairy
A fairy serving Titania meets **Puck**, who is described as a "shrewd and knavish sprite" — he frightens village maidens, misleads night travellers, spoils the churning of butter and plays tricks on gossips. He warns that **Oberon is angry** because Titania keeps a lovely **changeling boy** stolen from an Indian king, whom Oberon wants as a knight of his train.

### The quarrel
Oberon and Titania meet: "Ill met by moonlight, proud Titania." Each accuses the other of love for Hippolyta and Theseus. In a great speech Titania describes how their quarrel has **upset nature**: fogs, floods, rotting corn, diseases and **confused seasons** — "this same progeny of evils comes from our debate". The disorder among the fairies is mirrored in the human world.

She **refuses to give up the boy**: his mother was a votaress of her order and a dear friend who died in childbirth, and for her sake Titania will rear him. She departs.

### The magic flower
Oberon vows to torment her. He tells Puck how he once saw **Cupid's arrow** miss its mark and fall on a little western flower, turning it from white to purple — **love-in-idleness** (the pansy). Its juice, laid on sleeping eyelids, makes a person **dote madly on the next living creature seen**. Puck promises to fetch it swiftly, putting "a girdle round about the earth in forty minutes". Oberon plans to anoint Titania so that she falls in love with some vile thing, and to take the boy before he removes the charm with another herb.

### Demetrius and Helena
Oberon, invisible, watches **Demetrius** enter, pursued by **Helena**. He tells her harshly that he does not and cannot love her. She answers that she is his **spaniel** — the more he beats her, the more she will fawn on him. He threatens to leave her to the wild beasts.

Pitying Helena, Oberon orders Puck to anoint the eyes of the disdainful youth, whom he will know by his **Athenian garments**, so that he loves her more than she loves him.

## Scene 2 — Another part of the wood
Titania's fairies **sing her to sleep** with a lullaby warding off snakes, hedgehogs and spiders. **Oberon squeezes the juice** on her eyelids, wishing that she wake when some vile creature is near.

**Lysander and Hermia**, lost and weary, lie down to sleep. Hermia modestly insists that he lie **further off**. **Puck**, finding a man in Athenian dress sleeping apart from a lady, takes him for the scornful youth and **anoints Lysander's eyes** by mistake.

**Demetrius** runs in and abandons **Helena**. She sees Lysander on the ground and wakes him. He instantly declares **love for her** and scorn for Hermia. Helena believes she is being **mocked** and leaves hurt; he follows.

**Hermia** wakes from a **nightmare** in which a **serpent** ate her heart while Lysander sat smiling. Finding herself alone, she goes in terror to look for him.

## Significance of Act II
- **Rising action / complication:** the fairy plot is introduced and entangled with the lovers'.
- **Parallel:** Oberon and Titania's quarrel over the boy mirrors the human quarrels over love; both show the struggle for **control** between male and female.
- **Theme of love's irrationality:** the flower makes love arbitrary — Lysander's vows to Hermia vanish in a moment. He claims his change is guided by **"reason"**, which is ironic.
- **Dramatic irony:** the audience knows what Lysander and Helena do not.
- **Imagery:** rich nature poetry — the bank "where the wild thyme blows"; the moon; flowers; animals.
- **Symbolism:** Hermia's dream of the serpent foreshadows Lysander's betrayal.
- **Character:** Puck is playful and careless; Oberon is commanding, jealous but capable of pity; Titania is proud and loyal; Helena abases herself for love.`,
    examples: `**Example 1.** What is the cause of the quarrel between Oberon and Titania? *Answer:* Titania's refusal to give Oberon the **changeling boy**.

**Example 2.** How does the love-juice work? *Answer:* Laid on a sleeper's eyelids, it makes the person **fall in love with the first living creature seen on waking**.

**Example 3.** Why does Puck anoint the wrong man? *Answer:* He was told to look for **a man in Athenian garments** and finds Lysander sleeping apart from Hermia.`,
  },
  questions: [
    ["E", "Oberon and Titania quarrel over", "a changeling boy", "a magic ring", "Bottom", "the Duke's wedding", "Titania refuses to give the boy to Oberon."],
    ["E", "The magic flower in the play is called", "love-in-idleness", "forget-me-not", "wild thyme", "Dian's bud", "Cupid's arrow fell on it and turned it purple."],
    ["E", "Puck is told to recognise the young man he must anoint by his", "Athenian garments", "golden hair", "sword", "crown of flowers", "The instruction leads to his mistake."],
    ["M", "According to Titania, the quarrel between her and Oberon has caused", "disorder in the seasons and the weather", "war in Athens", "the death of the Duke", "Hermia's flight", "Floods, fogs and failed crops result from their dissension."],
    ["M", "Titania refuses to part with the boy because", "his mother was her devoted friend who died in childbirth", "he is her own son", "Theseus gave him to her", "he owns the magic flower", "She rears the boy for his mother's sake."],
    ["M", "Helena compares herself in her devotion to Demetrius to a", "spaniel", "dove", "lioness", "serpent", "The more he spurns her, the more she fawns."],
    ["M", "Puck mistakenly applies the love-juice to the eyes of", "Lysander", "Demetrius", "Bottom", "Egeus", "Lysander wakes and falls in love with Helena."],
    ["H", "Hermia's dream that a serpent ate her heart while Lysander smiled is an example of", "foreshadowing", "comic relief", "hyperbole", "aside", "It anticipates Lysander's desertion of her."],
    ["H", "When the enchanted Lysander says that reason guides him to love Helena, the effect is", "ironic", "tragic", "pastoral", "didactic", "His change is caused by magic, not reason."],
    ["H", "Oberon's order that Demetrius be made to love Helena shows that Oberon", "can feel pity for human suffering", "hates all mortals", "wishes to marry Helena", "obeys Theseus", "He is moved by her ill-treatment."],
  ],
  jamb: [
    ["M", "Puck boasts that he can put a girdle round the earth in", "forty minutes", "a single day", "seven nights", "an hour", "The boast shows his supernatural speed."],
    ["H", "The parallel between the fairy quarrel and the disputes of the Athenian lovers is an instance of", "sub-plot mirroring the main plot", "deus ex machina", "tragic flaw", "poetic justice", "The fairy story echoes the human struggles over love."],
  ],
};

export const dreamAct3: Topic = {
  title: "A Midsummer Night's Dream: Act III",
  subtopics: ["The rehearsal and Bottom's transformation", "Titania in love with Bottom", "The lovers' quarrel", "Puck leads the rivals astray"],
  objectives: ["Describe the rehearsal and the transformation of Bottom", "Explain the comedy of Titania's love for Bottom", "Analyse the quarrel of the four lovers", "Explain how Oberon and Puck begin to repair the confusion"],
  lesson: {
    title: "Act III: The Height of Confusion",
    summary: "The climax: a queen loves an ass, friends turn enemies, and Puck enjoys the chaos.",
    minutes: 40,
    notes: `## Scene 1 — The wood; Titania asleep
### The rehearsal
The workmen worry about their play.
- Pyramus must draw a **sword and kill himself** — the ladies will be frightened. Bottom proposes a **prologue** saying that Pyramus is not really killed, and is in fact Bottom the weaver.
- The **lion** will terrify them; Snug must show half his face and explain that he is a man.
- They need **moonlight** — one of them must enter with a **lantern and a bush of thorns** as Moonshine.
- They need a **wall** — a man with plaster or loam must stand for it, holding his fingers apart for the chink.

The humour lies in their belief that the audience **cannot tell a play from reality** — a comment on the nature of theatrical illusion.

### Bottom transformed
**Puck**, watching, follows Bottom off stage and returns him with an **ass's head**. The others **flee in terror**: "Bottom, thou art translated." Bottom, unaware, thinks they are trying to make an ass of him — **dramatic irony** — and sings to show he is not afraid.

### Titania wakes
His singing wakes **Titania**, who at once **falls in love** with him. Bottom remarks, wisely, that **reason and love keep little company together** nowadays. She commands her fairies **Peaseblossom, Cobweb, Moth and Mustardseed** to wait on him; he greets each with homely courtesy.

## Scene 2 — Another part of the wood
**Puck** gleefully reports to Oberon: "My mistress with a monster is in love."

**Demetrius and Hermia** enter. She accuses him of **murdering Lysander**; he denies it; she leaves, and he lies down to sleep. Oberon sees that Puck has anointed the **wrong man** and sends him to fetch Helena, while he himself **anoints Demetrius**. Puck exclaims: **"Lord, what fools these mortals be!"**

**Lysander** enters wooing **Helena**. **Demetrius wakes** and also declares passionate love for her. Helena is convinced that **both men are mocking her**.

**Hermia** arrives, and Lysander tells her he hates her. Helena now believes all three are in a plot; she reminds Hermia of their **childhood friendship** — two cherries on one stem. The women quarrel: Hermia calls Helena a **"painted maypole"**; Helena calls Hermia a **"puppet"** and says that though she is little, she is **fierce**. Hermia threatens to scratch her eyes. The men go off to **fight a duel** for Helena.

### Oberon's remedy
Oberon orders Puck to **overcast the night with fog**, and lead the rivals apart by **imitating their voices** until they fall asleep; then to squeeze an **antidote** on Lysander's eyes. Meanwhile he will beg the boy from Titania and release her. Puck misleads each man; all four lovers, exhausted, **sleep near one another**. Puck applies the herb to Lysander: "Jack shall have Jill; nought shall go ill."

## Significance of Act III
- **Climax** of the comedy: confusion reaches its peak in both the fairy and the lover plots.
- **Reversal:** Helena, once scorned by all, is now loved by both men; Hermia, once loved by both, is abandoned.
- **Theme:** love is **blind, fickle and irrational**; the lovers behave exactly alike, showing how arbitrary passion is.
- **Comic incongruity:** the dainty fairy queen and the coarse weaver with an ass's head — the height of the play's humour.
- **Puck's line** on mortals' foolishness sums up the fairies' view of human love.
- **Friendship tested:** the women's long bond breaks under jealousy.
- **Language:** the lovers' rhymed verse grows shrill and insulting; Bottom speaks prose; Titania speaks lyrical verse.
- **Turning point:** Oberon's plan begins the movement towards **resolution**.`,
    examples: `**Example 1.** What does Puck do to Bottom? *Answer:* He gives him an **ass's head**.

**Example 2.** Why does Helena refuse to believe the men love her? *Answer:* Both scorned her before; she thinks they are **mocking her**, with Hermia in the plot.

**Example 3.** How does Oberon plan to end the confusion? *Answer:* Puck will **separate the rivals with fog and false voices**, let them sleep, and apply an **antidote to Lysander's eyes**.`,
  },
  questions: [
    ["E", "Puck transforms Bottom by giving him the head of", "an ass", "a lion", "a bear", "a dog", "His friends flee at the sight."],
    ["E", "On waking under the spell, Titania falls in love with", "Bottom", "Oberon", "Puck", "Lysander", "He is the first creature she sees."],
    ["E", "'Lord, what fools these mortals be!' is spoken by", "Puck", "Oberon", "Theseus", "Bottom", "He is amused by the lovers' confusion."],
    ["M", "The workmen plan to represent the wall in their play by", "a man covered with plaster holding his fingers apart", "building a real wall of stone", "painting a cloth", "leaving it to the imagination", "Snout presents Wall, with a chink made by his fingers."],
    ["M", "Hermia accuses Demetrius of", "killing Lysander", "stealing the changeling boy", "insulting Theseus", "deserting the army", "She cannot believe Lysander would leave her willingly."],
    ["M", "During their quarrel Hermia calls Helena", "a painted maypole", "a little puppet", "a vile serpent", "a gentle dove", "She mocks Helena's height."],
    ["M", "Helena concludes that Lysander, Demetrius and Hermia are", "joined in a plot to mock her", "bewitched by Titania", "sent by Egeus", "truly in love with her", "She cannot believe the men's sudden love."],
    ["H", "Bottom's remark that 'reason and love keep little company together' is significant because it", "states a central theme of the play", "shows that he knows about the love-juice", "is addressed to Theseus", "ends the fairy quarrel", "The play shows love as irrational."],
    ["H", "The workmen's fear that the ladies will take the stage lion for a real one satirises", "a naive view of theatrical illusion", "the cruelty of the Duke", "the fairies' power", "Athenian law", "They do not trust the audience to tell acting from reality."],
    ["H", "Structurally, Act III represents the play's", "climax of confusion", "exposition", "denouement", "epilogue", "The complications reach their height before being resolved."],
  ],
  jamb: [
    ["M", "To keep Lysander and Demetrius from fighting, Puck", "leads them apart by imitating their voices", "puts them in prison", "summons Theseus", "turns them into trees", "He misleads them through the fog until they sleep."],
    ["H", "Bottom's belief that his friends ran away 'to make an ass of me' is an example of", "dramatic irony", "euphemism", "metonymy", "pathetic fallacy", "He does not know that he literally has an ass's head."],
  ],
};

export const dreamAct4: Topic = {
  title: "A Midsummer Night's Dream: Act IV",
  subtopics: ["Titania released from the spell", "The lovers discovered by Theseus", "Bottom's dream", "The mechanicals reunited"],
  objectives: ["Describe how Titania and Bottom are released from enchantment", "Explain Theseus's judgement on the lovers", "Interpret Bottom's speech on his dream", "Describe the reunion of the workmen"],
  lesson: {
    title: "Act IV: Waking",
    summary: "Spells are lifted, the lovers are rightly paired, and Athens accepts what the wood has done.",
    minutes: 40,
    notes: `## Scene 1 — The wood
### Titania and Bottom
**Titania** caresses Bottom, sticks **musk-roses** in his head and kisses his "fair large ears". Bottom enjoys his new state, asking the fairies to **scratch his head** and fetch a honey-bag; he has "a great desire to a bottle of hay". They sleep in each other's arms.

### Oberon relents
**Oberon** tells Puck that he now **pities her dotage**. He met her earlier, taunted her, and she readily **gave him the changeling boy**. With his aim achieved, he squeezes **"Dian's bud"** on her eyes to undo "Cupid's flower". Titania wakes: "Methought I was enamoured of an ass" — and loathes the sight of Bottom. **Puck removes the ass's head.** Oberon and Titania, **reconciled**, dance, and promise to dance in Theseus's house tomorrow and bless the couples. The harmony of the fairy world is restored.

### The hunt
At dawn **Theseus, Hippolyta and Egeus** enter with huntsmen; Theseus and Hippolyta talk of the music of the hounds. They find the **four lovers asleep** and wake them with hunting horns.

**Lysander** confesses the plan to flee. **Egeus** demands **the law** upon his head. But **Demetrius** explains that, by some power he does not understand, his love for Hermia has **melted like snow**; the object of his heart is now **Helena**, to whom he was betrothed before.

### Theseus's judgement
Theseus **overrules Egeus**: the two couples shall be **married in the temple together with him and Hippolyta**. Law gives way to love.

The lovers, half awake, wonder whether they still **dream**; things seem "small and undistinguishable", seen "with parted eye, when everything seems double". They follow the Duke to Athens.

### Bottom's dream
**Bottom wakes**, calling for his cue. He recalls "a most rare vision" — a dream "past the wit of man to say what dream it was". He **muddles the senses** ("the eye of man hath not heard, the ear of man hath not seen…"), a comic garbling of a biblical passage. He will have Quince write a **ballad** of it, to be called **"Bottom's Dream", because it hath no bottom**, and sing it at the end of the play.

## Scene 2 — Athens; Quince's house
The workmen lament that Bottom is lost: without him the play cannot go on, for no one else in Athens can play Pyramus. **Snug** reports that the Duke and **two or three more lords and ladies** have been married. Flute mourns that Bottom has lost **sixpence a day** for life.

**Bottom bursts in**: their play is **"preferred"** — chosen. He gives last instructions: clean linen; let the lion not pare his nails; and **eat no onions or garlic**, for they must "utter sweet breath".

## Significance of Act IV
- **Falling action / resolution of the conflicts:** fairy quarrel ended; lovers correctly paired; the law set aside.
- **Order restored** in the fairy world, and therefore in nature and among mortals.
- **Dawn and waking** mark the return from the night-world of magic to the day-world of reason.
- **Dream theme:** the lovers and Bottom cannot tell whether their experiences were real; the experience of the wood is transforming even if unexplained.
- **Demetrius remains charmed** — the only lover not released — yet the outcome is just, as he had first loved Helena.
- **Theseus** shows that good rule is **flexible and merciful**; Egeus's rigid authority is defeated.
- **Bottom** is the only mortal to see the fairies; his confused speech hints at a wonder beyond words, and is also richly comic. The **pun** on "bottom" (his name; no foundation; very deep) is typical of the play's wordplay.
- **Music and dance** symbolise harmony.`,
    examples: `**Example 1.** Why does Oberon release Titania from the spell? *Answer:* He has **obtained the changeling boy** and now pities her.

**Example 2.** How does Theseus settle the dispute over Hermia? *Answer:* He **overrules Egeus** and orders that both couples be **married with him**.

**Example 3.** Explain the pun in "Bottom's Dream". *Answer:* It is named after **Bottom**, and "**hath no bottom**" — it is unfathomable (or has no foundation).`,
  },
  questions: [
    ["E", "Oberon releases Titania from the spell after she", "gives him the changeling boy", "falls asleep beside Theseus", "quarrels with Puck", "leaves the wood", "His purpose has been achieved."],
    ["E", "The sleeping lovers are discovered at dawn by", "Theseus, Hippolyta and Egeus", "the mechanicals", "Titania's fairies", "Philostrate alone", "They are out hunting."],
    ["E", "Bottom proposes to call the ballad of his strange experience", "Bottom's Dream", "The Weaver's Tale", "A Night in the Wood", "Titania's Song", "He says it is so called because it has no bottom."],
    ["M", "When the lovers are found, Egeus demands", "the law upon Lysander", "that Hermia be married at once to Lysander", "a triple wedding", "pardon for his daughter", "He still insists on his rights."],
    ["M", "Theseus's decision about the lovers is to", "overrule Egeus and let the couples marry", "send Hermia to a nunnery", "banish Lysander", "postpone his own wedding", "Love is allowed to triumph over the old law."],
    ["M", "Demetrius says that his love for Hermia has", "melted like snow", "grown like a tree", "burned like fire", "turned to hatred of Helena", "He now loves Helena."],
    ["M", "Bottom tells his fellow actors to eat no onions or garlic so that they may", "utter sweet breath", "sing more loudly", "avoid falling asleep", "please the fairies", "It is a comic piece of stage advice."],
    ["H", "The herb Oberon uses to undo the love-charm on Titania is called", "Dian's bud", "Cupid's flower", "love-in-idleness", "musk-rose", "It counters the power of Cupid's flower."],
    ["H", "Bottom's speech 'the eye of man hath not heard, the ear of man hath not seen' is comic because it", "confuses the functions of the senses", "is spoken in Latin", "insults Titania", "reveals the secret of the flower", "He jumbles the senses as he struggles to describe his vision."],
    ["H", "Of the four lovers, the one who remains under the influence of the love-juice at the end is", "Demetrius", "Lysander", "Hermia", "Helena", "The charm is never removed from his eyes."],
  ],
  jamb: [
    ["M", "The restoration of harmony between Oberon and Titania is marked on stage by", "a dance", "a duel", "a trial", "a funeral", "Music and dance symbolise concord."],
    ["H", "The lovers' sense on waking that everything 'seems double' contributes to the theme of", "the uncertain boundary between dream and reality", "the cruelty of fathers", "war between Athens and the Amazons", "the wealth of the court", "They cannot tell whether the night's events were real."],
  ],
};

export const dreamAct5: Topic = {
  title: "A Midsummer Night's Dream: Act V, Themes and Resolution",
  subtopics: ["Theseus on imagination", "The performance of Pyramus and Thisbe", "The fairies' blessing and Puck's epilogue", "Main themes and dramatic techniques"],
  objectives: ["Explain Theseus's view of the lovers' story", "Describe the play-within-the-play and its comic effects", "Discuss the resolution of the play", "Draw out the main themes and techniques by relating all the acts"],
  lesson: {
    title: "Act V: Celebration and Meaning",
    summary: "The weddings are celebrated with a ridiculous play, the fairies bless the house, and the whole is offered as a dream.",
    minutes: 40,
    notes: `## Act V — The palace
### Theseus on imagination
Hippolyta finds the lovers' story strange. **Theseus** will not believe "these antique fables": **the lunatic, the lover and the poet** are "of imagination all compact" — the madman sees devils, the lover sees beauty where there is none, and the poet gives "to airy nothing a local habitation and a name". **Hippolyta** answers that the lovers' stories agree so closely that there must be something real in them.

### Choosing the entertainment
**Philostrate** offers a list. Theseus chooses "A tedious brief scene of young Pyramus and his love Thisbe; **very tragical mirth**". Philostrate warns that it is acted by hard-handed men who never laboured in their minds till now. Theseus insists: nothing can be amiss "when **simpleness and duty** tender it".

### Pyramus and Thisbe
- **Quince's Prologue** is so badly **punctuated** that it says the opposite of what he means.
- **Wall** (Snout) explains himself and holds up his fingers as the chink through which the lovers whisper.
- **Pyramus** (Bottom) addresses the night and the wall in absurd verse; **Thisbe** (Flute) answers. They agree to meet at "Ninny's tomb" (Ninus' tomb).
- **Lion** (Snug) gently explains that he is only Snug the joiner.
- **Moonshine** (Starveling) presents his lantern, thorn-bush and dog, and is interrupted by the courtiers' jokes.
- The lion frightens Thisbe, who drops her **mantle**; the lion stains it. Pyramus finds it, believes her dead and **stabs himself** with much repetition ("die, die, die, die, die"). Thisbe finds him and kills herself.
- Bottom rises to ask whether the Duke would like the **epilogue** or a **Bergomask dance**. Theseus chooses the dance.

The courtiers mock the play, but good-naturedly; the performance is a **parody** of tragedy — and of the lovers' own story, which might have ended like that of Pyramus and Thisbe.

### The fairies' blessing
At midnight the mortals go to bed. **Puck** enters with a broom to sweep the dust behind the door. **Oberon and Titania** and their train sing, dance and **bless the three marriages**: the couples will be ever true in love and their children free from blemish.

### Epilogue
**Puck**, alone, addresses the audience: "If we shadows have offended", think that you have but **slumbered** and that the play was a **dream**; he asks for applause — "Give me your hands, if we be friends".

## Resolution
All conflicts are settled: the three couples are married; Oberon and Titania are reconciled; the workmen succeed; the law is satisfied through mercy. Order is restored at every level — fairy, noble and common.

## Main themes
1. **Love** — its difficulties, blindness, fickleness and irrationality; yet it ends in marriage.
2. **Dream and reality** — the night's events may be dream or truth; the play itself is a dream.
3. **Order and disorder** — Athens (law) against the wood (misrule); disorder gives way to a better order.
4. **Imagination and art** — the play-within-the-play examines what theatre is and what audiences must contribute.
5. **Magic and the supernatural** — the fairies govern nature and human feeling.
6. **Authority and gender** — fathers over daughters, husbands over wives; Oberon's control of Titania.
7. **Transformation** — Bottom into an ass; hatred into love; enemies into friends.
8. **Friendship** — tested and restored.

## Dramatic techniques
- **play-within-a-play**; **multiple plots**
- **dramatic irony** — the audience knows of the charm
- **contrast** — court and workmen; verse and prose; city and wood; day and night
- **soliloquy** (Helena) and **epilogue** (Puck)
- **mistaken identity**
- **song, music and dance**
- **imagery** of the moon, flowers and animals
- **malapropism, puns and parody** for humour
- **blank verse** for nobles, **rhymed couplets** for lovers and fairies, **prose** for the mechanicals`,
    examples: `**Example 1.** Which three kinds of people does Theseus say are ruled by imagination? *Answer:* **the lunatic, the lover and the poet**.

**Example 2.** How does "Pyramus and Thisbe" relate to the main plot? *Answer:* It is a **comic version of what might have happened** to Lysander and Hermia — lovers defying parents and meeting in secret — had their story ended tragically.

**Example 3.** What does Puck ask of the audience in the epilogue? *Answer:* To **think of the play as a dream** if it has offended, and to **applaud**.`,
  },
  questions: [
    ["E", "The play performed by the workmen before the Duke is", "Pyramus and Thisbe", "The Battle with the Centaurs", "The Death of Orpheus", "Venus and Adonis", "Theseus chooses it from Philostrate's list."],
    ["E", "The epilogue of A Midsummer Night's Dream is spoken by", "Puck", "Theseus", "Bottom", "Oberon", "He asks the audience's pardon and applause."],
    ["E", "In the workmen's play, the part of the Lion is taken by", "Snug", "Snout", "Quince", "Flute", "Snug the joiner assures the ladies that he is not a real lion."],
    ["M", "According to Theseus, 'the lunatic, the lover and the poet' are alike in being ruled by", "imagination", "reason", "law", "fate", "They are 'of imagination all compact'."],
    ["M", "Quince's Prologue is comic because", "its faulty punctuation reverses his meaning", "it is sung out of tune", "he forgets all his lines", "it is spoken in Greek", "He pauses in the wrong places."],
    ["M", "The play of Pyramus and Thisbe functions in the comedy mainly as", "a parody of romantic tragedy", "a serious warning to Theseus", "a history of Athens", "a religious rite", "It turns a tragic tale into farce."],
    ["M", "At the end of the play Oberon and Titania", "bless the marriages of the three couples", "return the changeling boy to India", "punish Puck", "leave Athens in anger", "They promise the couples happiness and healthy children."],
    ["H", "Hippolyta's reply to Theseus about the lovers' story suggests that", "their consistent accounts point to something real", "the lovers are all mad", "the fairies do not exist", "Egeus invented the tale", "She finds their agreement more than mere fancy."],
    ["H", "Starveling, as Moonshine, enters with", "a lantern, a thorn-bush and a dog", "a sword and a mantle", "a crown and a sceptre", "a mirror and a candle", "These represent the man in the moon."],
    ["H", "Puck's suggestion that the audience has merely 'slumbered' reinforces the play's theme of", "dream and reality", "war and peace", "justice and mercy", "wealth and poverty", "The whole play is offered as a dream."],
  ],
  jamb: [
    ["M", "A play performed by characters within another play, as in Act V, is known as", "a play-within-a-play", "an interlude of mime", "a soliloquy", "a prologue", "Pyramus and Thisbe is staged inside the comedy."],
    ["H", "In A Midsummer Night's Dream, the mechanicals generally speak in", "prose", "blank verse", "heroic couplets", "sonnets", "Prose marks their low social status and comic role."],
  ],
};

export const answering: Topic = {
  title: "Principles of Answering Context and Literature Questions",
  subtopics: ["Types of literature questions", "Interpreting examination terms", "Answering context questions", "Writing essays on prescribed texts"],
  objectives: ["Identify the types of questions set in literature examinations", "Interpret terms such as comment, describe, examine and compare and contrast", "Answer context questions accurately", "Plan and write a relevant, well-supported literature essay"],
  lesson: {
    title: "Answering Literature Questions Well",
    summary: "How to read a question, give exactly what it asks, and support every point from the text.",
    minutes: 40,
    notes: `## Types of questions
| Type | What it tests |
|---|---|
| **objective (multiple choice)** | general literary knowledge; unseen prose and poetry; questions on the Shakespeare text |
| **context questions** | a short extract from a set text (usually the Shakespeare play) with questions on speaker, situation, meaning and devices |
| **essay questions on prescribed texts** | themes, characters, techniques, setting, relationships |
| **unseen appreciation** | a passage or poem not studied before |

## Interpreting examination terms
| Term | What to do |
|---|---|
| **describe** | give a clear account of how something is or happens |
| **narrate / give an account of** | tell the events in order |
| **discuss** | consider different sides and reach a conclusion |
| **examine** | look closely at and analyse in detail |
| **comment on** | give your informed opinion with reasons and evidence |
| **compare and contrast** | show **similarities and differences** |
| **analyse** | break into parts and show how they work |
| **assess / evaluate** | judge importance or success, with evidence |
| **justify** | give reasons for a view |
| **illustrate** | explain with examples from the text |
| **to what extent / how far** | weigh the evidence for and against and state a degree |
| **account for** | explain why |
| **identify** | point out and name |
| **role / significance / contribution** | what a character or incident **does** for plot and theme |

## Context questions
You are given a few lines and asked, typically:
1. **Who is the speaker?** Who is addressed?
2. **What is the situation** — what has just happened, and where?
3. **What happens next**, or what is the outcome?
4. **What does a word or phrase mean** in the context?
5. **What literary device** is used, and what is its effect?
6. What does the extract show of **character, mood or theme**?

### Method
- Read the extract and **place it in the play** (act, scene, event).
- Answer **each part directly**, in a sentence or two — no long introduction.
- Use the **marks** as a guide to length.
- **Quote briefly** or refer exactly; do not retell the whole plot.

*Illustration.* Extract: a speaker tells a young woman that her father "should be as a god" to her.
- *Speaker and addressee:* **Theseus** to **Hermia**.
- *Situation:* **Egeus** has complained that Hermia refuses to marry **Demetrius**.
- *What follows:* she must choose **death, a nunnery or obedience** by the Duke's wedding day; she and Lysander plan to flee.
- *Device:* **simile** ("as a god") stressing a father's absolute authority.

## Essay questions
### Steps
1. **Read the question twice**; underline the key terms and the **limits** (one character? two texts? one scene?).
2. **Plan**: jot five or six relevant points and arrange them.
3. **Introduction** — brief: name the text, author and genre; address the question directly.
4. **Body** — **one point per paragraph**: state the **point**, give **evidence** (incident, brief quotation), **explain** how it answers the question (**P-E-E**).
5. **Conclusion** — sum up your answer to the question.

### Qualities rewarded
- **Relevance** — answer the question set, not the one you prepared.
- **Knowledge of the text** — accurate names, incidents, sequence.
- **Analysis**, not mere story-telling.
- **Evidence** for every claim.
- **Organisation** and **expression** — clear paragraphs; correct English; **present tense** for events in the text ("Hermia flees…").
- Correct use of **literary terms**.

### Writing about character
appearance and background; what the character **says and does**; what **others say**; relationships; **development**; **role** in plot and theme.

### Writing about theme
state the theme; show **how** it is developed through plot, character, setting, symbol and language; cite incidents.

### Writing about technique
name the device; give an example; explain its **effect**.

## Common errors
- narrating the story instead of answering
- ignoring part of a two-part question
- inventing or mixing up incidents and names
- writing on the wrong text or the same text for two questions where the rubric forbids it
- long quotations inaccurately remembered
- no paragraphs; slang; poor timing

## Time management
Read the rubric; choose questions quickly; share the time **equally**; leave a few minutes to check.`,
    examples: `**Example 1.** What does "compare and contrast" require? *Answer:* Showing both the **similarities** and the **differences** between two things.

**Example 2.** What is the P-E-E method? *Answer:* **Point, Evidence, Explanation** — make a point, support it from the text, and explain how it answers the question.

**Example 3.** In what tense should events in a literary text be discussed? *Answer:* The **present tense**.`,
  },
  questions: [
    ["E", "A question that gives a short extract from a set text and asks about its speaker and situation is a", "context question", "summary question", "register question", "cloze test", "It tests close knowledge of the text."],
    ["E", "To 'compare and contrast' two characters is to show their", "similarities and differences", "ages", "physical appearance only", "authors", "Both likeness and unlikeness must be treated."],
    ["E", "In a literature essay, each point should be supported with", "evidence from the text", "the candidate's life story", "a proverb", "a diagram", "Claims must be backed by incident or quotation."],
    ["M", "An instruction to 'examine' a theme requires the candidate to", "analyse it closely and in detail", "list the characters", "retell the whole plot", "write a poem", "Examination involves careful analysis."],
    ["M", "The first thing to do with an essay question is to", "identify its key terms and limits", "write the conclusion", "copy out the question", "count the pages available", "Understanding the question guides the whole answer."],
    ["M", "Events in a literary text are conventionally discussed in the", "present tense", "future tense", "past perfect tense only", "imperative mood", "For example, 'Hermia flees to the wood'."],
    ["M", "The most common fault in literature essays is", "narrating the story instead of answering the question", "using literary terms", "writing in paragraphs", "quoting briefly", "Story-telling shows knowledge but not analysis."],
    ["H", "A question asking 'to what extent' a statement is true expects the candidate to", "weigh evidence for and against and state a degree of agreement", "agree completely without argument", "summarise the author's biography", "define literary terms", "A balanced judgement is required."],
    ["H", "In discussing the 'role' of a character, a candidate should chiefly show", "what the character contributes to plot and theme", "the character's height and dress", "how many lines the character speaks", "the actor who played the part", "Role concerns function in the work."],
    ["H", "In the P-E-E approach to paragraphing, the final 'E' stands for", "explanation", "example", "exaggeration", "epilogue", "The evidence must be explained in relation to the question."],
  ],
  jamb: [
    ["M", "When asked to 'account for' a character's action, a candidate should", "explain the reasons for it", "describe the setting", "list the other characters", "quote the whole scene", "To account for is to explain why."],
    ["H", "Which of these would be most appropriate in the introduction of a literature essay?", "A direct response to the question naming the text and author", "A full summary of the plot", "A list of all the characters", "The candidate's opinion of the examiner", "The introduction should be brief and focused on the question."],
  ],
};

export const africanProse: Topic = {
  title: "Revision of African Prose: Second Class Citizen and Unexpected Joy at Dawn",
  subtopics: ["Second Class Citizen: plot and characters", "Second Class Citizen: themes", "Unexpected Joy at Dawn: plot and characters", "Unexpected Joy at Dawn: themes"],
  objectives: ["Describe the main characters of the two novels and their contributions to the story", "Outline the plot of each novel", "Identify incidents that portray the themes", "Compare the concerns of the two novels"],
  lesson: {
    title: "Two African Novels",
    summary: "Buchi Emecheta's story of a woman's struggle in Lagos and London, and Alex Agyei-Agyiri's story of a family divided by expulsions.",
    minutes: 40,
    notes: `## Second Class Citizen — Buchi Emecheta (1974)
### Background
A largely **autobiographical** novel by the Nigerian writer Buchi Emecheta, set in **Lagos** and **London** in the 1950s and 1960s. It is a **bildungsroman** — a novel of growing up.

### Plot
**Adah Ofili**, an Igbo girl from Ibuza brought up in Lagos, dreams from childhood of going to the **United Kingdom**. Because she is a girl her education is not valued; she takes herself to school, and after her father's death lives as a servant with relatives. She wins a scholarship to the Methodist Girls' High School, and to have a home in which to study she marries **Francis Obi**. She earns a good salary at the American Consulate library and supports him and his family. Francis goes to England to study accountancy; Adah persuades her in-laws to let her follow with the children.

In London she is shocked by the cold, the squalid housing and **racial discrimination** — notices refusing rooms to "coloureds". Francis tells her that in England they are all **second-class citizens**. He refuses to work, fails his examinations, beats her, is unfaithful, and treats her as property. Adah works in libraries, bears five children, and is nearly killed by neglect in childbirth. A child-minder, **Trudy**, neglects her children and her son Vicky falls ill. Evicted, they lodge with the Nobles. When Adah secretly obtains birth control, Francis beats her. She writes a novel, ***The Bride Price***; Francis **burns the manuscript**. This is the breaking point: she leaves him. In court he denies the marriage and the children. Adah resolves to bring them up alone.

### Characters
- **Adah** — intelligent, determined, resilient; refuses the place assigned to her as a woman and as a black immigrant.
- **Francis** — lazy, selfish, violent, insecure; hides behind tradition and religion.
- **Pa and Ma (Adah's parents); Boy (her brother)** — show the preference for sons.
- **Mr and Mrs Noble** — the Nigerian landlord and his English wife.
- **Trudy** — the negligent child-minder.
- **Mr Okpara, Bill, Peggy** — friends and colleagues who encourage her.

### Themes
**gender discrimination and patriarchy**; **racism**; **determination and self-reliance**; the value of **education**; **marriage and domestic violence**; **motherhood**; the **immigrant experience** and disillusionment; clash of cultures.

### Style
third-person narration through Adah's eyes; simple, direct language; **irony** and humour; flashback; the title as a controlling **symbol**.

## Unexpected Joy at Dawn — Alex Agyei-Agyiri (2004)
### Background
A Ghanaian novel set against two historical expulsions: Ghana's **Aliens Compliance Order of 1969**, which drove out Nigerians and other foreigners, and Nigeria's **expulsion of illegal aliens in 1983**, which drove out Ghanaians.

### Plot
**Nii Tackie** and his sister **Mama Orojo** are of **Nigerian parentage**; in 1969 their family was forced out of Ghana, but the boy Nii, left behind with a guardian, grew up as a Ghanaian. Fifteen years later he is an **assistant bank manager** in Accra, yet so poor in a collapsing economy that he cannot buy medicine; his wife **Massa** dies, and he cannot give her a proper burial. Mocked as a foreigner because of his **tribal marks**, he sets out for **Nigeria** to find his roots.

At the same time **Mama Orojo**, now a prosperous businesswoman and church leader in Lagos, travels to **Ghana** to find her brother. They **cross each other's paths** without meeting. Nii suffers at the border and in Lagos — labouring jobs, exploitation, and then the 1983 order against aliens, which makes him an outcast in Nigeria too. Mama searches in vain, helped and deceived by various people. At last, back in Lagos, brother and sister are **reunited at dawn** — the "unexpected joy" of the title.

### Characters
- **Nii Tackie (Moses)** — honest, hardworking; a man without a country, searching for identity.
- **Mama Orojo** — strong, wealthy, loving; founder of a church; faithful to the memory of her family.
- **Massa** — Nii's sick wife.
- **Aaron Tsuru, Marshak, Linda** — companions in Nii's struggles.
- **Joe, Ibuk, Tally O** — figures around Mama in Lagos.

### Themes
**search for identity and belonging**; **xenophobia and the folly of expulsions**; **African unity** — the artificiality of colonial borders; **economic hardship and corruption**; **suffering and endurance**; **family love**; **migration**; **hope**.

### Style
**parallel plots** that finally meet; third-person omniscient narration; **suspense** and near-misses; **irony** — each is a foreigner in the land of his blood and of his birth; **symbolism** of dawn (new beginning) and of tribal marks (identity); journey motif.

## Comparison
Both novels follow characters who **migrate in search of a better life**, meet **rejection as outsiders**, and endure through **determination**. Emecheta stresses **gender and race**; Agyei-Agyiri stresses **nationality and identity**.`,
    examples: `**Example 1.** What event finally makes Adah leave Francis? *Answer:* He **burns the manuscript** of her first novel, *The Bride Price*.

**Example 2.** Explain the title *Unexpected Joy at Dawn*. *Answer:* It refers to the **unlooked-for reunion of Nii and Mama Orojo at daybreak** after long suffering.

**Example 3.** State one theme common to both novels. *Answer:* **Discrimination against the outsider** (or migration; determination).`,
  },
  questions: [
    ["E", "Second Class Citizen was written by", "Buchi Emecheta", "Chinua Achebe", "Flora Nwapa", "Ama Ata Aidoo", "It draws on her own life in Lagos and London."],
    ["E", "The heroine of Second Class Citizen is", "Adah", "Massa", "Mama Orojo", "Trudy", "Adah Ofili marries Francis Obi."],
    ["E", "The author of Unexpected Joy at Dawn is", "Alex Agyei-Agyiri", "Ayi Kwei Armah", "Amma Darko", "Kofi Awoonor", "He is a Ghanaian writer."],
    ["M", "Adah's husband in Second Class Citizen is best described as", "lazy and abusive", "hardworking and supportive", "wealthy and generous", "a political activist", "Francis refuses to work and beats her."],
    ["M", "In Unexpected Joy at Dawn, Nii Tackie works in Accra as", "an assistant bank manager", "a taxi driver", "a schoolteacher", "a soldier", "Despite his post he is very poor."],
    ["M", "The historical events behind Unexpected Joy at Dawn are the", "expulsions of aliens from Ghana in 1969 and from Nigeria in 1983", "Nigerian civil war and the Biafran famine", "struggle against apartheid", "Mau Mau uprising", "The novel shows the human cost of the expulsion orders."],
    ["M", "The title Second Class Citizen refers to Adah's status as", "a woman and a black immigrant", "a wealthy traveller", "a member of the royal family", "a political refugee", "She is treated as inferior on grounds of sex and race."],
    ["H", "Francis's burning of Adah's manuscript is significant because it", "precipitates her decision to leave him", "makes her a famous writer", "reconciles the couple", "causes her return to Lagos", "It destroys her 'brainchild' and ends the marriage."],
    ["H", "The structure of Unexpected Joy at Dawn is built on", "two parallel journeys that cross before finally meeting", "a series of letters", "a single day in one village", "a trial scene", "Brother and sister travel in opposite directions in search of each other."],
    ["H", "The irony of Nii Tackie's situation is that he is", "treated as a foreigner both in Ghana and in Nigeria", "rich but pretends to be poor", "a Nigerian who has never left Lagos", "a bank manager who cannot count", "He belongs fully to neither country."],
  ],
  jamb: [
    ["M", "A novel that traces the growth of its central character from childhood to maturity, as Second Class Citizen does, is called", "a bildungsroman", "an epistolary novel", "a picaresque satire", "a gothic romance", "It is a novel of education or development."],
    ["H", "In Unexpected Joy at Dawn, the tribal marks on Nii's face function as a symbol of", "identity and origin", "wealth", "military rank", "religious office", "They mark him out as of Nigerian descent."],
  ],
};

export const nonAfricanProse: Topic = {
  title: "Revision of Non-African Prose: Invisible Man and Wuthering Heights",
  subtopics: ["Invisible Man: plot and characters", "Invisible Man: themes and symbols", "Wuthering Heights: plot and characters", "Wuthering Heights: themes and narrative technique"],
  objectives: ["Identify and describe the major and minor characters of the two novels", "Outline the plot of each novel", "Discuss the themes and symbols", "Explain the narrative techniques used"],
  lesson: {
    title: "Two Non-African Novels",
    summary: "Ralph Ellison's novel of a black American's search for identity, and Emily Brontë's story of passion and revenge on the Yorkshire moors.",
    minutes: 40,
    notes: `## Invisible Man — Ralph Ellison (1952)
### Background
An African-American novel set in the **American South** and in **Harlem, New York**, in the 1930s. The nameless narrator tells his story from an underground hideout.

### Plot
The narrator declares that he is **invisible** — because people **refuse to see him**. As a gifted schoolboy in the South he is invited to give a speech to the town's leading white men, but is first made to fight blindfolded in a humiliating **"battle royal"**. He wins a scholarship to a black college. There he drives a white trustee, **Mr Norton**, into the poor quarter, where Norton hears the story of **Jim Trueblood** and is taken, ill, to the **Golden Day** tavern. The college president, **Dr Bledsoe**, expels the narrator and sends him north with sealed letters that secretly betray him.

In New York he works at **Liberty Paints**, famous for its "Optic White", is injured in an explosion and given shock treatment. Cared for by **Mary Rambo** in Harlem, he makes an impromptu speech at an eviction and is recruited by the **Brotherhood**, a political organisation led by **Brother Jack**. He becomes a celebrated speaker, but discovers that the Brotherhood uses the black community for its own ends. His friend **Tod Clifton** leaves and is shot by a policeman. The black nationalist **Ras the Exhorter** (later the Destroyer) opposes him. Disguised in dark glasses, he is mistaken for the trickster **Rinehart**. During a **riot in Harlem** he falls into a manhole and remains underground, lighting his cellar with 1,369 bulbs, resolving at last to **emerge**.

### Characters
- **The narrator** — naive, idealistic, slowly disillusioned.
- **Dr Bledsoe** — power-hungry college president who flatters whites.
- **Mr Norton** — patronising white trustee.
- **Brother Jack** — the Brotherhood's leader; his glass eye reveals his "blindness".
- **Tod Clifton** — charismatic youth leader.
- **Ras the Exhorter** — militant black nationalist.
- **Mary Rambo** — motherly landlady.
- **The grandfather** — whose dying advice haunts the narrator.

### Themes
**identity and invisibility**; **racism**; **blindness** (literal and figurative); **betrayal**; the limits of **ideology**; **power**; individual responsibility.

### Symbols and style
the **briefcase**; **dark glasses**; **Optic White paint**; the **Sambo doll**; light and darkness; the underground. **First-person narration** with **prologue and epilogue** framing a long **flashback**; picaresque episodes; jazz and blues rhythms; irony.

## Wuthering Heights — Emily Brontë (1847)
### Background
An English novel set on the **Yorkshire moors** in the late eighteenth century, around two houses: the wild **Wuthering Heights** and the refined **Thrushcross Grange**.

### Plot
**Mr Lockwood**, tenant of the Grange, visits his landlord **Heathcliff** and is intrigued. The housekeeper **Nelly Dean** tells him the history. Mr Earnshaw brought home an orphan, **Heathcliff**, whom his daughter **Catherine** grew to love and his son **Hindley** to hate. After the father's death Hindley degrades Heathcliff to a servant. Catherine, though she declares "I *am* Heathcliff", decides to marry the wealthy **Edgar Linton**; Heathcliff overhears part of her words and vanishes.

He returns three years later, rich, and bent on **revenge**. He gambles Hindley out of the Heights, elopes with Edgar's sister **Isabella** and ill-treats her. Catherine dies giving birth to **Cathy**. Heathcliff brutalises Hindley's son **Hareton** and later forces young Cathy to marry his sickly son **Linton**, so gaining the Grange as well. But as Cathy and Hareton grow to love each other, Heathcliff loses the will to revenge; haunted by Catherine's ghost, he dies and is buried beside her. The second generation restores peace.

### Characters
- **Heathcliff** — passionate, vengeful outsider; a **Byronic hero**.
- **Catherine Earnshaw** — wild, divided between passion and social ambition.
- **Edgar Linton** — gentle, civilised, weak.
- **Isabella Linton** — infatuated, then abused.
- **Hindley Earnshaw** — jealous, self-destructive.
- **Hareton; Cathy Linton; Linton Heathcliff** — the second generation.
- **Nelly Dean and Lockwood** — the narrators; **Joseph** — the surly servant.

### Themes
**destructive love and passion**; **revenge**; **social class**; **nature against culture** (Heights against Grange); the **supernatural**; suffering and cruelty; redemption through the younger generation.

### Technique
**frame narrative** with **two narrators** (Lockwood and Nelly), neither wholly reliable; **flashback**; **gothic** elements — ghosts, storms, isolated houses; **doubling** of names and generations; symbolic setting and weather; dialect (Joseph).

## Comparison
Both novels centre on an **outsider** rejected by society — the narrator for his race, Heathcliff for his origin — and both use **first-person narration** and **flashback**. Ellison's concern is social and political; Brontë's is emotional and domestic.`,
    examples: `**Example 1.** Why does the narrator of *Invisible Man* call himself invisible? *Answer:* Because others **refuse to see him as an individual** — they see only their own ideas of a black man.

**Example 2.** Who narrates most of *Wuthering Heights*? *Answer:* **Nelly Dean**, the housekeeper, speaking to **Lockwood**.

**Example 3.** Name one symbol in each novel. *Answer:* The **briefcase** in *Invisible Man*; the **two houses** (Heights and Grange) in *Wuthering Heights*.`,
  },
  questions: [
    ["E", "Invisible Man was written by", "Ralph Ellison", "Richard Wright", "James Baldwin", "George Orwell", "It was published in 1952."],
    ["E", "The author of Wuthering Heights is", "Emily Brontë", "Charlotte Brontë", "Jane Austen", "George Eliot", "It was her only novel."],
    ["E", "The orphan brought to Wuthering Heights by Mr Earnshaw is", "Heathcliff", "Hareton", "Edgar", "Lockwood", "He grows up loving Catherine."],
    ["M", "The narrator of Invisible Man is 'invisible' because", "people refuse to see him as an individual", "he has taken a chemical potion", "he lives in a foreign country", "he is a ghost", "His invisibility is social, not physical."],
    ["M", "The organisation that recruits the narrator in Harlem is the", "Brotherhood", "Golden Day", "Liberty Paints", "Founder's Committee", "Brother Jack leads it."],
    ["M", "Catherine Earnshaw marries", "Edgar Linton", "Heathcliff", "Hindley", "Lockwood", "She chooses social position over passion."],
    ["M", "The main motive of Heathcliff on his return to Wuthering Heights is", "revenge", "charity", "education", "religious duty", "He sets out to ruin the Earnshaws and Lintons."],
    ["H", "The college president who expels the narrator of Invisible Man and betrays him with sealed letters is", "Dr Bledsoe", "Mr Norton", "Brother Jack", "Ras the Exhorter", "The letters warn employers against hiring him."],
    ["H", "The narrative technique of Wuthering Heights is best described as", "a frame narrative with two narrators", "an omniscient third-person narrative", "a series of letters", "a dramatic monologue", "Lockwood records the story Nelly Dean tells."],
    ["H", "In Wuthering Heights, the contrast between the Heights and Thrushcross Grange symbolises", "wild passion against civilised refinement", "poverty against education", "town against village", "England against Scotland", "The two houses stand for opposed ways of life."],
  ],
  jamb: [
    ["M", "The humiliating fight the narrator of Invisible Man is forced into before giving his speech is called the", "battle royal", "Harlem riot", "Golden Day brawl", "eviction", "Blindfolded black boys are made to fight for white men's amusement."],
    ["H", "A dark, brooding, passionate hero who defies social convention, such as Heathcliff, is termed a", "Byronic hero", "tragic chorus", "stock character", "foil", "The type derives from the heroes of Lord Byron."],
  ],
};

export const africanDrama: Topic = {
  title: "Revision of African Drama: The Lion and the Jewel and Let Me Die Alone",
  subtopics: ["The Lion and the Jewel: plot and characters", "The Lion and the Jewel: themes and techniques", "Let Me Die Alone: plot and characters", "Let Me Die Alone: themes and techniques"],
  objectives: ["Outline the plot of each play", "Describe the characters and their roles", "State and discuss the themes of the plays", "Identify and describe the dramatic techniques used"],
  lesson: {
    title: "Two African Plays",
    summary: "Wole Soyinka's comedy of tradition and modernity, and John Kargbo's tragedy of a Mende woman chief.",
    minutes: 40,
    notes: `## The Lion and the Jewel — Wole Soyinka
### Background
A **comedy** by the Nigerian Nobel laureate, first performed in 1959, set in the Yoruba village of **Ilujinle**. The action takes place in **one day**, divided into **Morning, Noon and Night**.

### Plot
**Morning.** **Lakunle**, the young schoolteacher, woos the village belle **Sidi** with bookish talk of modern marriage, but **refuses to pay the bride price**, calling it a savage custom. Sidi will not marry without it. Village girls bring news that a **stranger's magazine** has published photographs of Sidi, making her famous; the Bale has only a small picture beside the village latrine. The villagers **mime** the coming of the photographer.

**Noon.** **Sadiku**, the Bale's senior wife, brings Sidi a proposal from **Baroka**, the sixty-two-year-old Bale — the "Lion". Sidi, proud of her beauty, **mocks his age**. Lakunle tells how Baroka once **bribed a surveyor** to divert a railway from the village. Baroka then confides in Sadiku that his **manhood is gone**.

**Night.** Sadiku gleefully tells Sidi, and dances in triumph over men. Sidi goes to the palace to taunt the Bale. But the story was a **trick**: Baroka flatters her with talk of a **stamp-making machine** bearing her image, and **seduces** her. Sidi returns in tears. Lakunle offers to marry her — now without bride price — but she **chooses Baroka**, the man of proven vigour.

### Characters
- **Sidi** — the "Jewel"; beautiful, vain, naive.
- **Baroka** — the "Lion"; cunning, patient, a guardian of tradition who selects what he wants of progress.
- **Lakunle** — half-educated, pompous; a **caricature** of shallow modernity.
- **Sadiku** — the chief wife and matchmaker; gullible.
- **The Favourite; village girls; the wrestler; the surveyor.**

### Themes
**tradition against modernity**; **bride price and marriage customs**; **vanity**; **cunning and experience over youth**; the **position of women**; **power**.

### Techniques
**mime, dance, song and drumming** (total theatre); **flashback through mime** (the photographer; the railway); **irony**; **satire** of Lakunle; **symbolism** in the title; wrestling as metaphor; proverbs; verse dialogue; unity of time and place.

## Let Me Die Alone — John K. Kargbo
### Background
A **historical tragedy** by a Sierra Leonean playwright about **Madam Yoko**, ruler of the **Kpaa Mende** in the late nineteenth century under British colonial influence.

### Plot
Chief **Gbanya** of Senehun is humiliated — **flogged by the British Governor** — for taking part in a local war. Weakened and fearful, he is **poisoned** by his wife's brother **Lamboi** and the seer **Musa**, who want the chieftaincy. Before dying he keeps his promise that his wife **Yoko** will succeed him. To rule, Yoko must join the **Poro** society and so **renounce child-bearing**. She becomes a powerful chief, moves her seat to **Moyamba**, and expands her territory by war and diplomacy in loyal service to the Governor.

Lamboi and Musa plot against her: they **kill the child Jeneba**, daughter of the warrior **Ndapi** and **Jilo**, and make the people believe that **Yoko sacrificed her** to keep power. The mob insults her; the truth is later discovered. Then the Governor's messenger brings word that her boundary is to be **reduced** — a humiliation from the power she served. Betrayed by kin, people and colonial master, childless and weary, Yoko **takes poison** and dies, asking to be left to die alone.

### Characters
- **Yoko** — ambitious, courageous, sacrificing; a **tragic heroine**.
- **Gbanya** — warrior chief, sensual, superstitious.
- **Lamboi** — Yoko's envious brother; **Musa** — corrupt medicine man.
- **Ndapi and Jilo** — the warrior and his wife; **Jeneba** — their daughter.
- **Lavalie** — loyal warrior; **Fanneh and Musu** — Yoko's attendants.
- **The Governor (Dr Samuel Rowe)** and his **Messenger**.

### Themes
**power and ambition**; **betrayal**; **gender and leadership** — a woman in a man's office, and its price; **sacrifice**; **colonial domination and humiliation**; **superstition and ritual**; **loneliness of power**; **death**.

### Techniques
historical setting; **foreshadowing** (omens before Gbanya's death); **dramatic irony** (the audience knows the plotters); **song, dance and ritual**; **soliloquy**; **flashback**; proverbs and local idiom; tragic structure ending in suicide.

## Comparison
Both plays are rooted in **African traditional society** and use **song, dance and ritual**. Soyinka's is a **comedy** in which tradition outwits a foolish modernity; Kargbo's is a **tragedy** in which tradition, ambition and colonial power destroy a great woman. Both examine the **place of women**: Sidi becomes a prize; Yoko gains power only by giving up motherhood.`,
    examples: `**Example 1.** Why does Sidi refuse to marry Lakunle? *Answer:* He **refuses to pay her bride price**.

**Example 2.** How does Baroka win Sidi? *Answer:* By **pretending to have lost his manhood**, so that she comes to mock him, then **flattering and seducing** her.

**Example 3.** What sacrifice does Yoko make to become chief? *Answer:* She joins the **Poro** society and so **gives up bearing children**.`,
  },
  questions: [
    ["E", "The Lion and the Jewel was written by", "Wole Soyinka", "Ola Rotimi", "J. P. Clark", "Femi Osofisan", "It is one of his early comedies."],
    ["E", "The 'Jewel' in The Lion and the Jewel is", "Sidi", "Sadiku", "the Favourite", "Jilo", "She is the village belle."],
    ["E", "The central character of Let Me Die Alone is", "Yoko", "Jilo", "Fanneh", "Jeneba", "She succeeds her husband as chief."],
    ["M", "Lakunle refuses to pay the bride price because he considers it", "a savage and outdated custom", "too cheap for Sidi", "an insult to Baroka", "forbidden by the Bale", "He prides himself on being modern."],
    ["M", "Baroka tricks Sidi into visiting him by", "spreading a false story that he has lost his manhood", "sending her gifts of gold", "arresting Lakunle", "promising her the school", "Sadiku carries the story to Sidi."],
    ["M", "In Let Me Die Alone, Chief Gbanya dies after being", "poisoned by Lamboi and Musa", "killed in battle", "executed by the Governor", "struck by lightning", "They want to prevent Yoko's succession."],
    ["M", "The action of The Lion and the Jewel is divided into", "Morning, Noon and Night", "five acts", "three years", "Spring, Summer and Winter", "The play covers a single day."],
    ["H", "Lamboi and Musa turn the people against Yoko by", "killing Jeneba and blaming her", "burning the palace", "inviting the Governor to arrest her", "stealing her staff of office", "They spread the lie that she sacrificed the child for power."],
    ["H", "The mimes of the photographer and of the railway surveyor in The Lion and the Jewel serve as", "flashbacks", "epilogues", "soliloquies", "asides", "They enact past events through dance and mime."],
    ["H", "Yoko's suicide is prompted finally by", "the Governor's humiliating reduction of her territory", "the death of Lavalie", "her defeat in war", "Lamboi becoming chief", "The power she served faithfully dishonours her."],
  ],
  jamb: [
    ["M", "Lakunle in The Lion and the Jewel is best seen as", "a caricature of half-baked modernity", "a tragic hero", "a wise elder", "a faithful messenger", "Soyinka satirises his shallow imitation of Western ways."],
    ["H", "To become chief, Yoko must be initiated into the", "Poro society", "Bondo society only", "Ogboni fraternity", "Ekpe society", "Membership requires her to forgo child-bearing."],
  ],
};

export const nonAfricanDrama: Topic = {
  title: "Revision of Non-African Drama: Look Back in Anger and Fences",
  subtopics: ["Look Back in Anger: plot and characters", "Look Back in Anger: themes and techniques", "Fences: plot and characters", "Fences: themes and techniques"],
  objectives: ["Identify and describe the major and minor characters of the two plays", "Outline the plot of each play", "State and discuss the themes", "Identify and describe the dramatic techniques used"],
  lesson: {
    title: "Two Non-African Plays",
    summary: "John Osborne's portrait of an angry young Englishman, and August Wilson's of a black American father in the 1950s.",
    minutes: 40,
    notes: `## Look Back in Anger — John Osborne (1956)
### Background
A British play that began the "**angry young man**" movement and "**kitchen-sink realism**" — drama about ordinary, cramped domestic life. It is set in a **one-room attic flat** in the English Midlands.

### Plot
**Act I.** Sunday evening. **Jimmy Porter**, twenty-five, university-educated but running a **sweet stall**, reads the papers and rails against the dullness of English life and against his wife **Alison**, who irons in silence. She comes from an upper-middle-class family he despises. Their lodger and friend **Cliff Lewis** keeps the peace. In horseplay the ironing board is knocked over and Alison's arm burnt. She tells Cliff she is **pregnant** but dare not tell Jimmy. Her actress friend **Helena Charles** is coming to stay.

**Act II.** Helena, disapproving, persuades Alison to leave and wires her father. Jimmy speaks bitterly of watching his **father die** when he was ten. He learns that **Hugh's mother**, who set him up in the stall, is dying and asks Alison to come with him; she goes to church with Helena instead. **Colonel Redfern** takes Alison home. When Jimmy returns, Helena slaps him — then kisses him.

**Act III.** Months later, Helena is at the ironing board; she is now Jimmy's mistress. Cliff decides to leave. **Alison returns**, having **lost the baby**. Helena, feeling guilty, leaves. Alison tells Jimmy she has at last known the suffering he wanted for her. They retreat into their private game of **bears and squirrels**.

### Characters
- **Jimmy Porter** — intelligent, frustrated, cruel and vulnerable; the "angry young man".
- **Alison Porter** — passive, well-bred, long-suffering.
- **Cliff Lewis** — warm-hearted Welsh friend; the buffer.
- **Helena Charles** — confident, conventional, moral yet yielding.
- **Colonel Redfern** — Alison's father, a relic of imperial Edwardian England.

### Themes
**anger and frustration**; **class conflict**; **alienation** and lack of "good, brave causes"; **marriage and the battle of the sexes**; **loss and suffering**; **nostalgia** for a vanished England; **escape** through fantasy.

### Techniques
**realism** — single naturalistic set; **long tirades (monologues)**; **symbols** — the ironing board (domestic routine), the **trumpet** (Jimmy's protest), church bells, the **bear and squirrel** toys; **repetition** — Act III opens as a mirror of Act I; **irony**; offstage characters (Hugh's mother, Mummy, Nigel).

## Fences — August Wilson (1985)
### Background
An African-American play, part of Wilson's "Pittsburgh Cycle", set in the **yard of the Maxson house in Pittsburgh** in **1957** (final scene 1965).

### Plot
**Troy Maxson**, fifty-three, a **garbage collector**, drinks on Friday evenings with his friend **Jim Bono**. He has challenged his employers over why only white men **drive** the trucks, and wins — becoming the first black driver. Once a great hitter in the **Negro baseball leagues**, he is bitter that the **colour bar** kept him from the major leagues. His wife **Rose** asks him to build a **fence** round the yard.

His son by an earlier relationship, **Lyons**, a musician, comes to borrow money. His younger son **Cory** has been offered a college **football scholarship**, but Troy, convinced that white sport will cheat the boy as it cheated him, **refuses to sign** and makes Cory keep his job. His brother **Gabriel**, brain-damaged in the war, believes he is the angel Gabriel; Troy used Gabriel's compensation money to buy the house.

Troy confesses to Rose that he has fathered a child by **Alberta**. Alberta dies in childbirth; Rose agrees to raise the baby, **Raynell**, but tells Troy he is now "a womanless man". Troy signs papers committing Gabriel to hospital. He and Cory **fight**; Cory leaves home. In 1965, on the day of **Troy's funeral**, Cory returns a Marine. Rose persuades him to attend. Gabriel tries to blow his trumpet to open heaven's gates, then dances.

### Characters
- **Troy Maxson** — proud, hardworking, flawed; a **tragic hero** shaped by racism and a brutal father.
- **Rose** — loyal, loving, strong; the moral centre.
- **Cory** — ambitious; struggles to escape his father's shadow.
- **Lyons** — easy-going jazz musician.
- **Gabriel** — innocent, visionary.
- **Jim Bono** — faithful friend and conscience.
- **Raynell** — hope for the future; **Alberta** — never seen.

### Themes
**racial discrimination**; **father–son conflict**; **responsibility and duty against love**; **betrayal and infidelity**; **dreams deferred**; **death**; the **cycle of generations**; **family**.

### Techniques
- **Symbolism:** the **fence** — Rose builds it to **keep her family in**, Troy to **keep death out**; it also stands for the barriers of race and between people. **Baseball** — Troy's language for life ("three strikes"); **Gabriel's trumpet**; the **rag ball**.
- **Personification of Death**, with whom Troy claims to have wrestled.
- **Realistic setting**; **African-American vernacular**; storytelling and the **blues**; **foreshadowing**; offstage character.

## Comparison
Both plays use a **single domestic setting** and a **dominant, embittered male protagonist** who wounds those who love him — Jimmy with words, Troy with decisions. Jimmy's anger springs from **class**; Troy's from **race**. Both wives, Alison and Rose, endure; each play ends with a muted **reconciliation**.`,
    examples: `**Example 1.** Why is Jimmy Porter called an "angry young man"? *Answer:* He is **educated but frustrated**, and pours out **rage at class, society and his wife**.

**Example 2.** Why does Troy stop Cory from playing college football? *Answer:* He believes **racial prejudice** will deny Cory a fair chance, as it denied him in baseball.

**Example 3.** Give two meanings of the fence in *Fences*. *Answer:* For **Rose**, it keeps her **family together**; for **Troy**, it keeps **death out**.`,
  },
  questions: [
    ["E", "Look Back in Anger was written by", "John Osborne", "Harold Pinter", "Samuel Beckett", "Arthur Miller", "It was first staged in 1956."],
    ["E", "The author of Fences is", "August Wilson", "Lorraine Hansberry", "Tennessee Williams", "Eugene O'Neill", "It belongs to his Pittsburgh Cycle."],
    ["E", "Troy Maxson in Fences earns his living as a", "garbage collector", "baseball coach", "factory owner", "preacher", "He later becomes the first black driver."],
    ["M", "Jimmy Porter makes his living by", "running a sweet stall", "teaching at a university", "acting in the theatre", "serving in the army", "Despite his education he does a humble job."],
    ["M", "Jimmy resents Alison chiefly because of her", "upper-middle-class background and passivity", "poverty", "foreign birth", "lack of education", "He attacks her family and her calm silence."],
    ["M", "Troy refuses to let Cory accept a football scholarship because he", "believes racism will deny Cory a fair chance", "wants Cory to play baseball instead", "cannot afford the fees", "dislikes the recruiter personally", "His own exclusion from the major leagues shapes his view."],
    ["M", "In Look Back in Anger, the character who acts as a buffer between Jimmy and Alison is", "Cliff", "Helena", "Colonel Redfern", "Hugh", "Cliff's affection keeps the household together."],
    ["H", "For Rose, the fence in Fences symbolises", "keeping her family together", "her desire to leave Troy", "wealth and status", "racial segregation only", "Bono observes that some people build fences to keep people in."],
    ["H", "The game of 'bears and squirrels' in Look Back in Anger represents", "an escape into a private world of affection", "Jimmy's political programme", "Alison's religious faith", "Cliff's homesickness", "The couple retreat into fantasy to avoid pain."],
    ["H", "Troy's habit of describing his life in baseball terms is an example of", "extended metaphor", "onomatopoeia", "litotes", "pathetic fallacy", "He speaks of strikes, bases and fastballs to describe life and death."],
  ],
  jamb: [
    ["M", "The style of drama, associated with Look Back in Anger, that depicts ordinary domestic life in drab settings is known as", "kitchen-sink realism", "theatre of the absurd", "epic theatre", "restoration comedy", "It brought working- and lower-middle-class life to the stage."],
    ["H", "At the end of Fences, Gabriel attempts to", "blow his trumpet to open the gates of heaven for Troy", "sell the house", "fight Cory", "rebuild the fence", "When no sound comes, he dances instead."],
  ],
};

export const poemsRevision: Topic = {
  title: "Revision of Poems: African and Non-African",
  subtopics: ["Approach to revising prescribed poems", "African poems: subject matter and themes", "Non-African poems: subject matter and themes", "Poetic devices and imagery"],
  objectives: ["Summarise the subject matter of the prescribed poems", "State the themes of each poem", "Identify the poetic devices used", "Link images to the main ideas of the poems"],
  lesson: {
    title: "The Prescribed Poems in Review",
    summary: "A compact guide to the subject, themes and devices of twelve prescribed poems.",
    minutes: 40,
    notes: `## How to revise a poem
For each poem know: the **poet and background**; **subject matter** (what it says); **themes** (what it means); **structure and form**; **tone and mood**; **diction and imagery**; **devices** and their **effects**.

## African poems
### "Black Woman" — Léopold Sédar Senghor (Senegal)
A **praise poem** to the African woman, who is also **Mother Africa**. The poet celebrates her "nakedness" clothed in colour and life, comparing her to the promised land, ripe fruit, dark wine, a taut drum and a gazelle. He sings her beauty before time turns it to ashes.
*Themes:* pride in **blackness (Négritude)**; beauty of Africa; love and reverence for womanhood; transience.
*Devices:* **apostrophe**, **metaphor**, **simile**, **personification**, **repetition/refrain**, sensuous imagery; free verse.

### "The Leader and the Led" — Niyi Osundare (Nigeria)
A **fable in couplets**. The animals meet to choose a leader: the **lion** is rejected for his fierceness, the **hyena** for greed, the **giraffe** because his eyes are too far from the ground, the **zebra** for duplicity, the **elephant** for trampling, the **warthog** for ugliness, the **rhino** for violence. The **forest sage** advises that a leader should be **"a hybrid of habits"** — a little bit of a lion, a little bit of a lamb — and that leader and led must know their roles.
*Themes:* **qualities of good leadership**; balance; followership; political satire.
*Devices:* **allegory**, **personification**, **antithesis**, **alliteration**, **metaphor**; couplets.

### "The Grieved Lands" — Agostinho Neto (Angola)
A lament for **Africa** under slavery and colonialism — lands of tears, chains and humiliation — which nevertheless **cannot be killed**: its life, dance and dream endure.
*Themes:* **colonial oppression and slavery**; suffering; **resilience and hope**.
*Devices:* **repetition** ("the grieved lands of Africa"), **personification**, **imagery** of chains and blood, **symbolism**; free verse.

### "The Song of the Women of My Land" — Oumar Farouk Sesay (Sierra Leone)
The poet mourns the fading of the **work songs** once sung by peasant women — songs that soothed their toil and carried their history — now eroded by time like footprints.
*Themes:* **loss of oral tradition**; women's suffering and endurance; memory; time.
*Devices:* **personification** (time as a sculptor), **simile**, **metaphor**, **alliteration**, **repetition**; elegiac tone.

### "Raider of the Treasure Trove" — Lade Wosornu (Ghana)
A **didactic** poem. Life's treasure is **love**; its raider is **rage**. The reader is urged to rise above anger, which robs the heart of joy.
*Themes:* **self-control**; love against anger; how to live well.
*Devices:* **extended metaphor**, **personification** (Rage as a chief raider), **rhetorical question**, **alliteration**; rhyme.

### "A Government Driver on His Retirement" — Onu Chibuike (Nigeria)
After **thirty-five years** of careful service a driver retires, is rewarded with a car, celebrates with **drink**, and **dies** driving home the same day.
*Themes:* **irony of fate**; dangers of drunk driving and excess; service and reward; mortality.
*Devices:* **situational irony**, **narrative** form, **repetition**, **euphemism**, **alliteration**.

## Non-African poems
### "The Good-Morrow" — John Donne (England)
A **metaphysical** love poem. The lovers wake as if their earlier lives were childish sleep; their love makes **one little room an everywhere**; each sees himself in the other's eye; perfectly mixed love cannot die.
*Themes:* **mature, complete love**; spiritual union; discovery.
*Devices:* **conceit** (hemispheres, maps), **hyperbole**, **rhetorical questions**, **allusion** (the Seven Sleepers), **paradox**; three seven-line stanzas.

### "Caged Bird" — Maya Angelou (USA)
The **free bird** leaps on the wind and claims the sky; the **caged bird**, wings clipped and feet tied, **sings of freedom**.
*Themes:* **freedom and oppression**; racial injustice; hope and resistance.
*Devices:* **extended metaphor / symbolism**, **contrast**, **refrain**, **alliteration**, **personification**, imagery.

### "The Journey of the Magi" — T. S. Eliot
A **dramatic monologue** by one of the wise men recalling the hard winter journey to Christ's birth, and his unease afterwards among his own people: the birth was also a **death** of the old order.
*Themes:* **spiritual journey and conversion**; suffering; birth and death; alienation.
*Devices:* **allusion** (biblical), **symbolism** (three trees, white horse), **paradox**, **imagery**, conversational free verse.

### "Do Not Go Gentle into That Good Night" — Dylan Thomas (Wales)
The poet urges his dying father to **fight death**: "Rage, rage against the dying of the light." Wise, good, wild and grave men all resist.
*Themes:* **defiance of death**; love of a son; value of life.
*Devices:* **villanelle** form (19 lines, two refrains), **metaphor** (night = death; light = life), **repetition**, **oxymoron** ("blinding sight"), **paradox**, **pun** ("grave men").

### "Binsey Poplars" — Gerard Manley Hopkins (England)
A lament for a row of **aspens felled** in 1879; the poet grieves that people harm nature without knowing what they destroy — "after-comers cannot guess the beauty been".
*Themes:* **destruction of nature**; environmental loss; fragility of beauty.
*Devices:* **sprung rhythm**, heavy **alliteration** and **assonance**, **repetition**, **simile** (the pricked eyeball), coined compounds.

### "Bat" — D. H. Lawrence (England)
At evening in Florence the poet watches what he takes for **swallows**, then realises with **disgust** that they are **bats** — in China a symbol of happiness, but "not for me".
*Themes:* **appearance and reality**; man's response to nature; cultural difference; revulsion.
*Devices:* **free verse**, **simile**, **imagery**, **repetition**, **contrast**, change of **tone**.

## Devices to know
simile; metaphor; personification; apostrophe; hyperbole; irony; paradox; oxymoron; allusion; symbolism; alliteration; assonance; onomatopoeia; repetition and refrain; enjambment; rhyme and rhythm; conceit; rhetorical question.`,
    examples: `**Example 1.** What is the central message of "The Leader and the Led"? *Answer:* A good leader needs a **balance of qualities** — firmness and gentleness — "a hybrid of habits".

**Example 2.** What do the two birds in "Caged Bird" represent? *Answer:* The **free** and the **oppressed** — the caged bird stands for those denied freedom who still hope.

**Example 3.** Name the verse form of "Do Not Go Gentle into That Good Night". *Answer:* a **villanelle**.`,
  },
  questions: [
    ["E", "'Black Woman' was written by", "Léopold Sédar Senghor", "David Diop", "Kofi Awoonor", "Dennis Brutus", "He was a Senegalese poet and statesman."],
    ["E", "The poem 'Caged Bird' was written by", "Maya Angelou", "Emily Dickinson", "Sylvia Plath", "Langston Hughes", "She was an African-American poet."],
    ["E", "In 'The Leader and the Led', the creatures choosing a leader are", "animals", "birds only", "fishes", "villagers", "The poem is an animal fable."],
    ["M", "The dominant theme of 'The Grieved Lands' is", "Africa's suffering under oppression and its resilience", "romantic love", "the beauty of the seasons", "a quarrel between brothers", "The lands grieve but cannot be destroyed."],
    ["M", "'Do Not Go Gentle into That Good Night' urges the poet's father to", "resist death", "accept death calmly", "travel at night", "forgive his enemies", "'Rage, rage against the dying of the light.'"],
    ["M", "In 'Raider of the Treasure Trove', the raider is", "rage", "love", "death", "poverty", "Anger robs the heart of its treasure."],
    ["M", "The irony in 'A Government Driver on His Retirement' is that the driver", "dies in a crash on the day he retires after years of careful driving", "is dismissed without benefits", "never learns to drive", "becomes a minister", "His celebration leads to his death."],
    ["H", "'The Good-Morrow' is described as a metaphysical poem partly because it uses", "elaborate conceits", "a ballad stanza", "animal characters", "dialect", "Donne compares the lovers to worlds and hemispheres."],
    ["H", "'Do Not Go Gentle into That Good Night' is written in the form of", "a villanelle", "a sonnet", "an ode", "blank verse", "It has nineteen lines with two repeated refrains."],
    ["H", "In 'Binsey Poplars', Hopkins laments", "the felling of trees and man's careless damage to nature", "the death of a friend at sea", "the loss of his faith", "the decay of a city", "The aspens he loved were cut down."],
  ],
  jamb: [
    ["M", "'The Journey of the Magi' is presented as", "a dramatic monologue", "a ballad", "an elegy for a king", "a limerick", "One of the wise men speaks of his experience."],
    ["H", "The philosophy of pride in black identity and culture expressed in 'Black Woman' is known as", "Négritude", "Romanticism", "Imagism", "Existentialism", "Senghor was a leading figure of the movement."],
  ],
};
