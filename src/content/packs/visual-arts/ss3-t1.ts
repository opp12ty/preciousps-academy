import type { TermPlan } from "../types";

/** SS3 Visual Arts, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Drawing and Painting",
      subtopics: ["Materials and tools for drawing", "Materials and tools for painting", "Observation and nature drawing", "Application of colour"],
      objectives: ["List and explain the materials and tools for drawing and painting", "Use the materials effectively", "Observe objects carefully for drawing and painting", "Apply colour to drawings of natural objects"],
      lesson: {
        title: "Tools, Observation and Colour",
        summary: "The materials of drawing and painting, how to observe, and how to apply colour to nature studies.",
        minutes: 80,
        notes: `## Drawing
**Drawing** is the art of **representing objects, ideas or feelings with lines and tones** on a surface. It is the foundation of all visual art.

### Materials and tools
| Material | Use |
|---|---|
| **pencils** — H (hard, light) to B (soft, dark); HB is medium | sketching and shading |
| **charcoal** | bold, dark tones; easily smudged |
| **pastels and crayons** | coloured drawing |
| **pen and ink; markers** | crisp line work |
| **conté, chalk** | tonal studies |
| **paper** — cartridge, sugar paper, sketch pads | the **support** |
| **eraser, sharpener, drawing board, clips** | accessories |
| **fixative** | spray that prevents smudging |

### Shading techniques
**hatching** (parallel lines), **cross-hatching**, **stippling** (dots), **blending / smudging**, **scribbling**.

## Painting
**Painting** is the art of **applying colour (pigment) to a surface**.

### Materials and tools
| Material | Notes |
|---|---|
| **water colour** | transparent; thinned with water |
| **poster colour / gouache** | opaque water-based paint |
| **acrylic** | fast-drying; water-based; permanent |
| **oil paint** | slow-drying; thinned with turpentine or linseed oil |
| **brushes** — round, flat; hog-hair and sable | applying paint |
| **palette** | mixing colours |
| **palette knife** | mixing and applying thick paint (**impasto**) |
| **easel** | holds the work |
| **supports** — paper, canvas, board, wall | surfaces |

### Techniques
**wash** (thin transparent layer), **wet-on-wet**, **dry brush**, **impasto**, **glazing**, **pointillism** (dots of colour).

## Observation
Draw what you **see**, not what you know.
- study **shape**, **proportion** and **size relationships** (use the pencil as a measuring guide)
- note the **direction of light**: highlight, mid-tone, shadow and **cast shadow**
- apply **perspective** — objects look smaller as they recede; lines converge at the **vanishing point** on the **eye level**
- observe **texture** and detail last

### Types of drawing and painting
**still life** (arranged objects); **nature** (plants, fruits, shells, animals); **life / figure** (the human figure); **landscape** and seascape; **imaginative composition**.

## Colour
- **primary:** red, yellow, blue
- **secondary:** orange, green, purple (violet) — two primaries mixed
- **tertiary:** a primary mixed with a neighbouring secondary
- **warm** colours (red, orange, yellow) advance; **cool** colours (blue, green, violet) recede
- **complementary** colours are opposite on the colour wheel: red–green, blue–orange, yellow–purple
- **tint** = colour + white; **shade** = colour + black; **tone** = lightness or darkness
- **hue** is the name of a colour; **intensity** is its brightness

### Applying colour to nature drawings
sketch lightly; block in the **local colour**; build **light and dark** tones to show form; add reflected colours and the cast shadow; work from light to dark in water colour; keep brushes and water clean.`,
        examples: `**Example 1.** Name the three primary colours. *Answer:* **Red, yellow and blue**.

**Example 2.** Which pencil grade is softer and darker: 2H or 4B? *Answer:* **4B**.

**Example 3.** What is a tint? *Answer:* A colour **mixed with white**.`,
      },
      questions: [
        ["E", "The primary colours are red, yellow and", "blue", "green", "orange", "purple", "They cannot be obtained by mixing other colours."],
        ["E", "The board on which an artist mixes colours is the", "palette", "easel", "canvas", "fixative", "Paint is mixed on it before application."],
        ["E", "A drawing of arranged, non-living objects is called", "still life", "landscape", "life drawing", "portrait", "Objects such as bottles and fruits are arranged."],
        ["M", "Mixing blue and yellow produces", "green", "orange", "purple", "brown", "Green is a secondary colour."],
        ["M", "Shading with sets of crossing parallel lines is", "cross-hatching", "stippling", "blending", "scumbling", "The crossing lines build darker tones."],
        ["M", "A colour mixed with white gives a", "tint", "shade", "hue", "complement", "Adding black gives a shade."],
        ["M", "The spray used to prevent charcoal drawings from smudging is", "fixative", "turpentine", "linseed oil", "varnish for wood", "It fixes loose particles to the paper."],
        ["H", "The complementary colour of red is", "green", "orange", "yellow", "blue", "They lie opposite each other on the colour wheel."],
        ["H", "Applying paint thickly so that brush or knife marks stand out is", "impasto", "wash", "glazing", "wet-on-wet", "The paint has a raised texture."],
        ["H", "In perspective drawing, receding parallel lines appear to meet at the", "vanishing point", "focal length", "picture plane", "ground line", "It lies on the eye level or horizon."],
      ],
    },
    {
      week: 2,
      title: "History of Western Art: Early Christian, Byzantine, Islamic and Renaissance Art",
      subtopics: ["Early Christian art", "Byzantine art", "Islamic art", "Renaissance art"],
      objectives: ["Describe Early Christian and Byzantine art", "Describe the characteristics of Islamic art", "Explain the Renaissance and name its leading artists", "State the media and characteristics of these periods"],
      lesson: {
        title: "From the Catacombs to the Renaissance",
        summary: "Four great periods of art history, their features, media and masters.",
        minutes: 40,
        notes: `## Early Christian art (c. 2nd–6th century)
- Began in secret in the **catacombs** (underground burial places) of Rome, with wall paintings.
- **Symbols:** the fish, the Good Shepherd, the dove, the anchor, the Chi-Rho monogram.
- After Christianity was legalised (AD 313), large churches called **basilicas** were built.
- **Media:** fresco, **mosaic**, carved stone coffins (sarcophagi), ivory.
- **Character:** simple, symbolic, teaching the faith rather than imitating nature.

## Byzantine art (c. 5th–15th century)
- Centred on **Constantinople (Byzantium)**, capital of the Eastern Roman Empire.
- **Mosaics** of glass and stone with **gold backgrounds**; **icons** (holy images on panels).
- Figures are **flat, frontal, elongated**, with large eyes — solemn and spiritual.
- **Architecture:** great **domes** on pendentives; the **Hagia Sophia** (built under Justinian, 537).
- Rich colour, pattern and decoration.

## Islamic art (from the 7th century)
- Art of the Muslim world, from Spain to India.
- Religious art generally **avoids human and animal figures**.
- **Characteristics:** **calligraphy** (beautiful Arabic writing); **arabesque** (flowing plant patterns); **geometric patterns**; rich surface decoration with tiles, stucco and carving.
- **Architecture:** **mosques** with **domes**, **minarets**, courtyards, the **mihrab** (prayer niche) and pointed or horseshoe arches. Examples: the Dome of the Rock (Jerusalem), the Great Mosque of Córdoba, the Alhambra (Granada), the Taj Mahal (India).
- **Other arts:** carpets, ceramics, metalwork, glass, illuminated manuscripts, miniatures.
- Influence in Nigeria: mosque architecture, Hausa wall decoration, calligraphy, embroidery.

## Renaissance art (c. 14th–16th century)
**Renaissance** means "**rebirth**" — a revival of interest in the learning and art of ancient Greece and Rome. It began in **Florence, Italy**.

### Characteristics
- **humanism** — interest in man and the natural world
- **realism** and correct **anatomy**
- **linear perspective** (developed by Brunelleschi) giving depth
- **chiaroscuro** — light and shade to model form; **sfumato** — soft, smoky blending
- balanced, harmonious **composition**
- religious and classical subjects; portraits
- patronage by the Church and wealthy families (the Medici)

### Artists
| Artist | Works |
|---|---|
| **Giotto** (forerunner) | Arena Chapel frescoes |
| **Donatello** | bronze *David* |
| **Botticelli** | *The Birth of Venus* |
| **Leonardo da Vinci** | *Mona Lisa*, *The Last Supper* |
| **Michelangelo** | marble *David*, *Pietà*, Sistine Chapel ceiling |
| **Raphael** | *The School of Athens*, Madonnas |
| **Titian** | Venetian colourist |

### Media
**fresco** (painting on wet plaster), **tempera** (pigment with egg), **oil** on panel and canvas, marble and bronze.

## Surface decoration in architecture
mosaics, frescoes, stained glass, carved reliefs, tiles and stucco enriched walls, domes and ceilings in all four periods.`,
        examples: `**Example 1.** What does "Renaissance" mean? *Answer:* **Rebirth** — the revival of classical learning and art.

**Example 2.** Give two characteristics of Islamic art. *Answer:* **Calligraphy** and **geometric and arabesque patterns** (avoidance of figures).

**Example 3.** Who painted the *Mona Lisa*? *Answer:* **Leonardo da Vinci**.`,
      },
      questions: [
        ["E", "The word 'Renaissance' means", "rebirth", "reformation", "revolution", "impression", "It was a revival of classical art and learning."],
        ["E", "The Mona Lisa was painted by", "Leonardo da Vinci", "Michelangelo", "Raphael", "Giotto", "It is his most famous portrait."],
        ["E", "Early Christian paintings were first made in the", "catacombs", "pyramids", "pagodas", "palaces of Benin", "Christians worshipped and buried their dead there in secret."],
        ["M", "Pictures made from small pieces of coloured glass or stone are", "mosaics", "frescoes", "icons on wood", "etchings", "Byzantine churches are famous for them."],
        ["M", "A major characteristic of Islamic religious art is the", "avoidance of human figures", "use of nude figures", "portrait sculpture", "painting of saints", "Calligraphy and pattern are used instead."],
        ["M", "The Sistine Chapel ceiling was painted by", "Michelangelo", "Leonardo da Vinci", "Botticelli", "Titian", "He painted it between 1508 and 1512."],
        ["M", "The Renaissance began in", "Italy", "France", "Spain", "England", "Florence was its first centre."],
        ["H", "The use of strong contrast of light and shade to model form is", "chiaroscuro", "arabesque", "impasto", "pointillism", "It gives figures a three-dimensional look."],
        ["H", "The Hagia Sophia is an outstanding example of", "Byzantine architecture", "Renaissance painting", "Gothic sculpture", "Impressionist design", "It was built in Constantinople under Justinian."],
        ["H", "Painting on freshly laid wet plaster is known as", "fresco", "tempera", "gouache", "encaustic", "The colours bind with the wall as the plaster dries."],
      ],
    },
    {
      week: 3,
      title: "Impressionism Art Movement",
      subtopics: ["Origin of Impressionism", "Artists of the movement", "Style and characteristics", "Influence and application"],
      objectives: ["Explain the Impressionist movement of the nineteenth century", "List the artists involved", "Identify the style and characteristics of Impressionism", "Apply Impressionist methods in painting"],
      lesson: {
        title: "Painting Light and the Moment",
        summary: "The French movement that left the studio to capture the fleeting effects of light and colour.",
        minutes: 40,
        notes: `## Origin
**Impressionism** arose in **France in the 1860s and 1870s**. A group of young painters, rejected by the official exhibition (the **Salon**), held their own exhibition in **Paris in 1874**. A critic mocked **Claude Monet's** painting ***Impression, Sunrise*** — and the name "Impressionists" stuck.

### Background
- the invention of **paint in tubes** and portable easels made outdoor work easy
- **photography** freed painters from exact copying and suggested new viewpoints
- new scientific ideas about **colour and light**
- Japanese prints suggested flat colour and unusual compositions

## Artists
| Artist | Known for |
|---|---|
| **Claude Monet** | water lilies, haystacks, Rouen Cathedral series — the same subject in changing light |
| **Pierre-Auguste Renoir** | joyful scenes of people, dance and leisure |
| **Edgar Degas** | ballet dancers, racehorses; pastels |
| **Camille Pissarro** | rural and city scenes; the "father" figure of the group |
| **Alfred Sisley** | landscapes |
| **Berthe Morisot; Mary Cassatt** | domestic life, women and children |
| **Édouard Manet** | forerunner who inspired the group |

## Style and characteristics
1. Painting **outdoors** (**en plein air**), directly from nature.
2. Interest in the **changing effects of light and atmosphere** at different times of day.
3. **Short, broken, visible brush strokes**.
4. **Pure, bright colours** placed side by side, mixing in the viewer's eye.
5. **Coloured shadows** — little or no black.
6. **Everyday subjects** — landscapes, streets, cafés, leisure.
7. A sense of the **moment**; soft outlines; little fine detail.
8. Unusual, "snapshot" **compositions**.

## Functions and importance
- broke with academic rules and opened the way to **modern art**
- showed that **how** a thing is seen matters as much as what is painted
- made ordinary life a worthy subject
- led to **Post-Impressionism** (Van Gogh, Cézanne, Gauguin, Seurat) and later movements

## Applying Impressionism
- work outdoors and quickly; choose a simple scene
- use **dabs** of unmixed colour
- observe the **colour of shadows** (blues, violets)
- paint the same view at **morning and evening** and compare
- do not outline; let colours meet softly

Many Nigerian landscape and market-scene painters use Impressionist brushwork and light.`,
        examples: `**Example 1.** From which painting did Impressionism take its name? *Answer:* Monet's ***Impression, Sunrise***.

**Example 2.** Give three characteristics of Impressionist painting. *Answer:* **Outdoor painting, short visible brush strokes** and **bright, pure colours**.

**Example 3.** Name three Impressionist painters. *Answer:* **Monet, Renoir and Degas**.`,
      },
      questions: [
        ["E", "Impressionism began in", "France", "Italy", "Nigeria", "China", "It arose in Paris in the 1860s and 1870s."],
        ["E", "The painter of 'Impression, Sunrise' was", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci", "Ben Enwonwu", "The movement was named after this work."],
        ["E", "Impressionist painters were chiefly interested in", "the effects of light", "religious symbols", "geometric shapes", "calligraphy", "They studied how light changes what we see."],
        ["M", "Painting outdoors directly from nature is called", "en plein air", "chiaroscuro", "fresco", "collage", "The French phrase means 'in the open air'."],
        ["M", "The Impressionist famous for paintings of ballet dancers is", "Edgar Degas", "Camille Pissarro", "Alfred Sisley", "Claude Monet", "He often worked in pastel."],
        ["M", "A characteristic of Impressionist painting is the use of", "short, visible brush strokes", "smooth, invisible brushwork", "heavy black outlines", "gold backgrounds", "The strokes are broken and lively."],
        ["M", "The first Impressionist exhibition was held in Paris in", "1874", "1907", "1492", "1960", "The artists exhibited independently of the Salon."],
        ["H", "Impressionists generally avoided black in shadows, using instead", "blues and violets", "pure white", "gold leaf", "brown varnish", "They observed that shadows contain colour."],
        ["H", "An invention that made outdoor painting practical for the Impressionists was", "paint in tubes", "the printing press", "the potter's wheel", "the airbrush", "Ready-mixed colours could be carried about."],
        ["H", "Which of these artists is regarded as a forerunner who inspired the Impressionists?", "Édouard Manet", "Georges Braque", "Giotto", "Raphael", "His modern subjects and bold handling influenced the group."],
      ],
    },
    {
      week: 4,
      title: "Nigerian Contemporary Artists",
      subtopics: ["Development of contemporary Nigerian art", "Pioneer artists and their contributions", "Art schools and movements", "Areas of specialisation"],
      objectives: ["Explain the history of contemporary Nigerian art", "List the contributions of leading artists", "Describe the major art schools and movements", "Identify the artists' areas of specialisation"],
      lesson: {
        title: "Makers of Modern Nigerian Art",
        summary: "The pioneers, schools and specialisations of Nigerian art in the twentieth and twenty-first centuries.",
        minutes: 40,
        notes: `## Development
**Contemporary (modern) Nigerian art** began in the early twentieth century, when Nigerian artists adopted new materials and formal training while drawing on traditional art.

- **Aina Onabolu** (1882–1963), a self-taught portrait painter trained later in London and Paris, is the **father of modern Nigerian art**. He campaigned for art in schools, which led to the coming of **Kenneth Murray** (1927), who encouraged students to use local themes.
- Art departments opened at **Yaba** College of Technology and the Nigerian College of Arts, Science and Technology, **Zaria** (now Ahmadu Bello University), then **Nsukka**, **Ife**, **Benin** and **Auchi**.

## Pioneer artists
| Artist | Specialisation and contribution |
|---|---|
| **Aina Onabolu** | portrait painting; art education |
| **Akinola Lasekan** | painter, illustrator and pioneer **political cartoonist** |
| **Ben Enwonwu** | sculptor and painter; ***Anyanwu***; bronze statue of Queen Elizabeth II; ***Tutu***; first Nigerian artist of world fame |
| **Uche Okeke** | painter and draughtsman; leader of the **Zaria Art Society**; **uli** line; "**Natural Synthesis**" |
| **Bruce Onobrakpeya** | **printmaker**; deep etching, plastograph; Harmattan workshops |
| **Yusuf Grillo** | painter; stained glass and mosaics; elongated figures in blues |
| **Demas Nwoko** | sculptor, designer and **architect** |
| **Erhabor Emokpae** | sculptor, painter and graphic designer; murals and reliefs for the National Theatre |
| **Felix Idubor; Ben Osawe** | sculptors |
| **Lamidi Fakeye** | Yoruba **wood carver** — doors and veranda posts |
| **Ladi Kwali** | **potter** — Abuja Pottery; traditional forms in glazed stoneware |
| **Solomon Wangboje** | printmaker and art educator |
| **Twins Seven-Seven; Jimoh Buraimoh; Muraina Oyelami** | **Osogbo school** — folklore painting, **bead painting** |
| **Nike Davies-Okundaye** | **adire** and batik; art centres |
| **Kolade Oshinowo; Abayomi Barber** | painters |
| **El Anatsui** (Ghanaian-born, based at Nsukka) | monumental sculptures from bottle tops |

## Schools and movements
- **Zaria Art Society ("Zaria Rebels", 1958)** — Okeke, Onobrakpeya, Grillo, Nwoko and others; their **Natural Synthesis** blended the best of indigenous traditions with Western techniques.
- **Osogbo (Mbari Mbayo) workshops (1960s)** — led by Ulli Beier, Georgina Beier and Susanne Wenger; untrained artists painting Yoruba myths.
- **Nsukka school** — **uli** design and line.
- **Ife school (Ona)** — Yoruba motifs.
- **Auchi school** — bold colour.
- **Yaba school** — strong draughtsmanship.

## Contributions of contemporary artists
preserved and renewed **cultural identity**; trained younger artists; public monuments and decorations; gave Nigerian art **international recognition**; created employment and an art market; recorded history and social life.

## Appreciating and criticising an artwork
**describe** (what is seen) → **analyse** (how elements are organised) → **interpret** (meaning) → **judge** (success).

## Organisations
the **Society of Nigerian Artists (SNA)**; the National Gallery of Art; the National Council for Arts and Culture.`,
        examples: `**Example 1.** Who is the father of modern Nigerian art? *Answer:* **Aina Onabolu**.

**Example 2.** What was "Natural Synthesis"? *Answer:* The Zaria Art Society's idea of **blending indigenous art traditions with Western techniques**.

**Example 3.** In what field did Ladi Kwali specialise? *Answer:* **Pottery**.`,
      },
      questions: [
        ["E", "The father of modern Nigerian art is", "Aina Onabolu", "Ben Enwonwu", "Uche Okeke", "Yusuf Grillo", "He pioneered portrait painting and art education."],
        ["E", "Ladi Kwali was famous as a", "potter", "painter", "printmaker", "carver", "She worked at the Abuja Pottery."],
        ["E", "The sculpture 'Anyanwu' was made by", "Ben Enwonwu", "Lamidi Fakeye", "Bruce Onobrakpeya", "Felix Idubor", "It is one of his best-known bronzes."],
        ["M", "Bruce Onobrakpeya is best known for", "printmaking", "pottery", "textile weaving", "architecture", "He developed deep etching and plastograph techniques."],
        ["M", "The Zaria Art Society promoted the idea of", "Natural Synthesis", "Cubism", "Impressionism", "Pop Art", "It combined indigenous and Western art."],
        ["M", "Lamidi Fakeye specialised in", "wood carving", "bead painting", "stained glass", "cartooning", "He carved doors and posts in the Yoruba tradition."],
        ["M", "The expatriate teacher who encouraged Nigerian students to use local themes from 1927 was", "Kenneth Murray", "Ulli Beier", "Michael Cardew", "Frank Willett", "He came at Onabolu's urging."],
        ["H", "The art school associated with uli design and line is", "Nsukka", "Yaba", "Auchi", "Zaria", "Uche Okeke developed it there."],
        ["H", "The Osogbo art workshops of the 1960s are associated with", "Ulli Beier and Susanne Wenger", "Aina Onabolu and Akinola Lasekan", "Kenneth Murray and Ben Enwonwu", "Yusuf Grillo and Demas Nwoko", "They encouraged untrained artists such as Twins Seven-Seven."],
        ["H", "The pioneer Nigerian political cartoonist was", "Akinola Lasekan", "Erhabor Emokpae", "Solomon Wangboje", "Kolade Oshinowo", "He drew for the West African Pilot."],
      ],
    },
    {
      week: 5,
      title: "Cubism",
      subtopics: ["Origin of Cubism", "Types and styles of Cubism", "Characteristics and exponents", "Cubism and African art"],
      objectives: ["Explain the Cubist movement of the twentieth century", "Distinguish Analytic from Synthetic Cubism", "State the characteristics and exponents of Cubism", "Explain the relationship between Cubism and African art"],
      lesson: {
        title: "Seeing from Many Sides at Once",
        summary: "The revolutionary movement of Picasso and Braque that broke objects into geometric planes.",
        minutes: 40,
        notes: `## Origin
**Cubism** was developed in **Paris between about 1907 and 1914** by **Pablo Picasso** (Spanish) and **Georges Braque** (French). The name came from a critic's remark about Braque's "little cubes".

### Sources
- **Paul Cézanne**, who advised treating nature as the cylinder, the sphere and the cone
- **African masks and sculpture**, which Picasso studied in Paris
- Picasso's ***Les Demoiselles d'Avignon*** (1907), with mask-like faces, opened the way

## Types
| Type | Period | Features |
|---|---|---|
| **Analytic Cubism** | c. 1909–1912 | objects **broken down (analysed)** into small overlapping planes; **dull colours** — browns, greys, greens; subject hard to recognise |
| **Synthetic Cubism** | c. 1912–1914 | images **built up (synthesised)** from flat shapes; **brighter colour**; **collage** — pasted paper, newspaper, cloth; simpler, bolder forms |

## Characteristics
1. Objects reduced to **geometric shapes** — cubes, cones, cylinders.
2. **Multiple viewpoints** shown at once — front and side together.
3. **Flattened space** — traditional perspective abandoned.
4. **Fragmentation** and overlapping planes.
5. Limited colour in the analytic phase.
6. Use of **collage** and lettering.
7. Favourite subjects: still life, musical instruments, portraits.

## Exponents
**Pablo Picasso**, **Georges Braque**, **Juan Gris**, **Fernand Léger**, Robert Delaunay; sculptors Alexander Archipenko and Jacques Lipchitz.

Famous works: Picasso's *Les Demoiselles d'Avignon*, *Three Musicians*, *Guernica* (later); Braque's *Violin and Candlestick*.

## Cubism and African art
- European artists were struck by the way African carvers **simplified and rearranged the human form** — bold planes, geometric features, expressive distortion — to express an **idea** rather than copy appearance.
- African art thus helped to **inspire** Cubism and modern art.
- In turn, Cubist ideas returned to Africa: many modern African and Nigerian artists use **angular, simplified forms** and feel free to combine traditional design with modern styles.

## Importance
Cubism was the most influential movement of the twentieth century; it led to **abstract art**, Futurism and Constructivism, and changed design, architecture and sculpture.

## Applying Cubism
- choose a simple still life
- sketch it from **several angles** and combine the views
- break forms into **planes** with a ruler
- limit the palette, or add **collage** from newspaper and coloured paper`,
        examples: `**Example 1.** Name the two founders of Cubism. *Answer:* **Pablo Picasso and Georges Braque**.

**Example 2.** Distinguish Analytic from Synthetic Cubism. *Answer:* **Analytic** breaks objects into small planes in dull colours; **Synthetic** builds images from flat, brighter shapes and collage.

**Example 3.** How did African art influence Cubism? *Answer:* African masks and carvings showed **simplified, geometric treatment of form**, which Picasso and others adopted.`,
      },
      questions: [
        ["E", "Cubism was founded by Pablo Picasso and", "Georges Braque", "Claude Monet", "Leonardo da Vinci", "Vincent van Gogh", "They worked closely together in Paris."],
        ["E", "Cubist painters reduced objects to", "geometric shapes", "realistic portraits", "soft dabs of light", "gold mosaics", "Forms were shown as cubes, cones and cylinders."],
        ["E", "Cubism developed in the", "twentieth century", "fifteenth century", "eighteenth century", "tenth century", "It arose between about 1907 and 1914."],
        ["M", "The phase of Cubism that used collage and brighter colours is", "Synthetic Cubism", "Analytic Cubism", "Impressionism", "Realism", "Images were built up from flat shapes."],
        ["M", "A characteristic of Cubist painting is", "showing several viewpoints at once", "accurate linear perspective", "painting outdoors", "gold backgrounds", "An object may be seen from front and side together."],
        ["M", "Picasso's painting of 1907 that opened the way to Cubism is", "Les Demoiselles d'Avignon", "Impression, Sunrise", "The Last Supper", "The Starry Night", "Its figures have mask-like faces."],
        ["M", "Pasting paper and other materials onto a picture surface is", "collage", "fresco", "etching", "batik", "Synthetic Cubists introduced it into fine art."],
        ["H", "Cubism was influenced by African", "masks and sculpture", "rock paintings only", "textiles only", "architecture only", "Their bold simplification of form impressed Picasso."],
        ["H", "The painter whose advice to treat nature as the cylinder, sphere and cone influenced the Cubists was", "Paul Cézanne", "Edgar Degas", "Raphael", "Giotto", "He is called the father of modern art."],
        ["H", "Analytic Cubism is noted for its", "limited range of dull colours", "bright primary colours", "use of gold leaf", "realistic shading", "Browns and greys kept attention on form."],
      ],
    },
    {
      week: 6,
      title: "Furniture",
      subtopics: ["Meaning and functions of furniture", "Materials: wood, leather and fabric", "Construction of a piece of furniture", "Outlets and marketing"],
      objectives: ["State the functions of furniture", "Identify materials used in furniture, including leather and fabric", "Outline the steps in constructing a simple piece of furniture", "Identify outlets for marketing furniture products"],
      lesson: {
        title: "Designing and Making Furniture",
        summary: "Furniture as applied art: its uses, materials, construction and sale.",
        minutes: 80,
        notes: `## Meaning
**Furniture** refers to the **movable articles that make a room fit for living or working** — chairs, tables, beds, stools, shelves, cabinets, wardrobes. Furniture design is an **applied art**: it must be both **useful and beautiful**.

## Functions
- **seating** — chairs, stools, sofas, benches
- **sleeping and resting** — beds, couches
- **working and eating surfaces** — tables, desks
- **storage** — cupboards, wardrobes, shelves, chests
- **display** — showcases
- **decoration** and expression of taste and status
- **division of space** — screens, partitions

## Qualities of good furniture
**function**; **comfort** (ergonomics — fitting the human body); **strength and durability**; **good proportion and appearance**; **suitable materials**; good **finish**; reasonable cost.

## Materials
| Material | Notes |
|---|---|
| **wood** — mahogany, iroko, obeche, teak, afara | the commonest; also plywood, block board, MDF |
| **cane, bamboo and raffia** | light, woven furniture |
| **metal** — steel, aluminium, wrought iron | frames, office furniture |
| **plastic and fibreglass** | moulded chairs |
| **glass** | table tops, shelves |
| **leather** | durable, elegant covering for seats |
| **fabric** — cotton, velvet, damask, synthetic | upholstery covering |
| **foam, springs and webbing** | padding |
| **adhesives, nails, screws, hinges** | joining |
| **finishes** — sandpaper, stain, varnish, lacquer, polish, paint | protection and beauty |

### Using leather and fabric (upholstery)
**Upholstery** is the padding and covering of furniture. Steps: fix **webbing** and springs to the frame → add **foam or stuffing** → cover with lining → cut and stretch the **leather or fabric**, tack or staple it → finish with trimmings or studs. Leather and fabric may be decorated by tooling, dyeing, appliqué or printing.

## Tools
saws, plane, chisels, hammer and mallet, try-square, measuring tape, marking gauge, drill, clamps, screwdriver, staple gun.

## Constructing a simple piece (e.g. a stool)
1. **Design** — sketches and a **working drawing** with measurements.
2. **Select and season** the timber.
3. **Measure and mark out**.
4. **Cut** the parts.
5. Make the **joints** — butt, **mortise and tenon**, **dovetail**, halving, dowel.
6. **Assemble** with glue and fasteners; clamp until set.
7. **Smooth** with plane and sandpaper.
8. **Finish** — stain, varnish, polish or paint; upholster the seat.

## Outlets and marketing
- **showrooms** and furniture shops
- **roadside workshops** and markets
- **exhibitions and trade fairs**
- **contracts** from schools, offices, hotels and churches
- **online** — social media, websites, marketplaces
- interior designers and estate developers
Marketing methods: good finishing and branding; catalogues and photographs; fair pricing; delivery; customer referrals.

## Safety
keep tools sharp and stored; wear protective goggles and masks; work in a ventilated space when varnishing.`,
        examples: `**Example 1.** State three functions of furniture. *Answer:* **Seating, storage and sleeping**.

**Example 2.** What is upholstery? *Answer:* The **padding and covering** of furniture with foam and leather or fabric.

**Example 3.** Name two joints used in furniture making. *Answer:* **Mortise and tenon** and **dovetail**.`,
      },
      questions: [
        ["E", "Movable articles such as chairs and tables that make a room fit for use are", "furniture", "fixtures", "ornaments", "utensils", "They serve practical needs."],
        ["E", "The padding and covering of chairs with foam and fabric is", "upholstery", "carpentry", "joinery", "veneering", "It gives comfort and beauty."],
        ["E", "Which of these is a timber commonly used for furniture in Nigeria?", "Mahogany", "Bamboo leaf", "Raffia palm leaf", "Cotton", "It is a durable hardwood."],
        ["M", "A liquid applied to wooden furniture to protect it and give a glossy finish is", "varnish", "glue", "turpentine only", "kerosene", "It forms a hard, clear coat."],
        ["M", "The joint in which a projecting tongue fits into a slot is the", "mortise and tenon joint", "butt joint", "lap joint", "mitre joint", "It is strong and widely used in frames."],
        ["M", "The study of fitting furniture to the human body for comfort is", "ergonomics", "aesthetics", "acoustics", "ceramics", "It guides the dimensions of chairs and tables."],
        ["M", "A wardrobe is furniture used mainly for", "storage", "seating", "sleeping", "display of food", "Clothes are kept in it."],
        ["H", "A drawing showing exact measurements and construction details of a piece of furniture is a", "working drawing", "still life", "freehand sketch", "poster", "The maker follows it in the workshop."],
        ["H", "An advantage of leather over ordinary fabric as a furniture covering is that it is", "more durable and easy to clean", "cheaper", "more absorbent", "lighter in weight always", "Leather wears well and wipes clean."],
        ["H", "Which of these is an outlet for marketing furniture products?", "Trade fairs and showrooms", "Quarries", "Dye pits", "Kilns", "Buyers see and order pieces there."],
      ],
    },
    {
      week: 8,
      title: "Oriental and Oceanic Art",
      subtopics: ["Chinese art", "Japanese art", "Indian art", "Oceanic art: Melanesian, Polynesian and Micronesian"],
      objectives: ["Describe the characteristics of Chinese art", "Describe the characteristics of Japanese and Indian art", "Describe the arts of Oceania", "Explain the historical development and value of Oceanic art"],
      lesson: {
        title: "Arts of Asia and the Pacific",
        summary: "The main features of Chinese, Japanese and Indian art, and of the island cultures of the Pacific.",
        minutes: 40,
        notes: `## Oriental art
"**Oriental**" refers to the arts of **Asia**, especially China, Japan and India.

### Chinese art
- one of the world's oldest continuous traditions (over 4,000 years)
- **brush-and-ink painting** on **silk and paper**; **calligraphy** regarded as the highest art
- **landscape** ("mountain and water") painting expressing harmony with nature; much empty space
- **porcelain** and ceramics (blue-and-white ware); **bronze** ritual vessels; **jade** carving; **lacquer**; silk
- the **Terracotta Army** of the first emperor (3rd century BC)
- **architecture:** the **pagoda**, curved tiled roofs, the Great Wall, the Forbidden City
- influenced by **Confucianism, Taoism and Buddhism**

### Japanese art
- learnt much from China, then developed its own refinement and simplicity
- **ukiyo-e** — colour **woodblock prints** of everyday life, actors and landscapes: **Hokusai** (*The Great Wave*), **Hiroshige**, Utamaro; these prints influenced the Impressionists
- ink painting, painted **screens and scrolls**
- **Zen** gardens; **ikebana** (flower arrangement); the **tea ceremony**; **origami** (paper folding)
- fine ceramics, lacquer, textiles (kimono)
- wooden temples and shrines
- love of **nature, asymmetry and empty space**

### Indian art
- closely tied to religion — **Hinduism, Buddhism, Jainism**, later Islam
- **stone sculpture** covering temples; many-armed gods; graceful, rounded figures
- **Buddhist stupas** (Sanchi); rock-cut **cave temples** with wall paintings at **Ajanta** and Ellora
- bronze figures such as the dancing Shiva (Nataraja)
- **Mughal miniature painting** and architecture — the **Taj Mahal**
- rich textiles and jewellery

## Oceanic art
**Oceania** covers the islands of the **Pacific Ocean**.

| Region | Islands | Art |
|---|---|---|
| **Melanesia** (listed as "Malaysian" in some schemes) | New Guinea, Solomon Islands, Vanuatu, Fiji | dramatic **masks**, ancestor figures, carved and painted shields, men's-house decoration, bold colour |
| **Polynesia** | Hawaii, Samoa, Tonga, Tahiti, New Zealand (Maori), Easter Island | **tattoo**, **tapa** (bark cloth), wood and stone carving, feather work; the giant **moai** statues of Easter Island; Maori meeting houses |
| **Micronesia** | Caroline, Marshall and Mariana Islands, Kiribati | fine **weaving**, canoe building, **navigation stick charts**, simple elegant carving |

(In **Malaysia** and Indonesia of South-East Asia, notable arts include **batik**, wood carving, woven *songket* cloth and shadow puppets.)

### Characteristics
- made from local materials — wood, bark, shell, feathers, fibre, stone
- linked to **ancestors, spirits, rank and ritual**
- strong **pattern**, stylisation and symbolism
- body decoration as art

### Historical development
The islands were settled over thousands of years by seafaring peoples; isolated communities developed distinct styles. European contact from the eighteenth century brought collectors, missionaries and change; many works are now in museums. Oceanic art, like African art, influenced modern European artists such as Gauguin.

## Comparing with African art
Like traditional African art, Oceanic art is **functional and spiritual** rather than "art for art's sake".`,
        examples: `**Example 1.** What is ukiyo-e? *Answer:* **Japanese colour woodblock prints** of everyday life and landscape.

**Example 2.** Name the three regions of Oceania. *Answer:* **Melanesia, Polynesia and Micronesia**.

**Example 3.** Which medium is regarded as the highest art in China? *Answer:* **Calligraphy** (with brush-and-ink painting).`,
      },
      questions: [
        ["E", "Oriental art refers to the art of", "Asia", "Europe", "Africa", "South America", "It includes Chinese, Japanese and Indian art."],
        ["E", "The Taj Mahal is located in", "India", "China", "Japan", "Hawaii", "It is a masterpiece of Mughal architecture."],
        ["E", "The art of paper folding in Japan is called", "origami", "ikebana", "ukiyo-e", "batik", "Ikebana is flower arrangement."],
        ["M", "Japanese colour woodblock prints are known as", "ukiyo-e", "tapa", "moai", "stupa", "Hokusai and Hiroshige were masters of the form."],
        ["M", "The giant stone statues called moai are found on", "Easter Island", "New Guinea", "Fiji", "Sri Lanka", "They belong to Polynesian art."],
        ["M", "A tower-like, many-storeyed temple building typical of Chinese architecture is the", "pagoda", "minaret", "basilica", "pyramid", "Each storey has an upturned roof."],
        ["M", "Bark cloth made in Polynesia is called", "tapa", "kente", "adire", "silk", "It is beaten from the inner bark of trees."],
        ["H", "The wall paintings in the rock-cut caves at Ajanta are examples of", "Indian Buddhist art", "Chinese landscape painting", "Japanese printmaking", "Melanesian mask making", "They date from about the 2nd century BC to the 6th century AD."],
        ["H", "Navigation stick charts are associated with the art of", "Micronesia", "Melanesia", "India", "China", "Islanders mapped ocean swells with sticks and shells."],
        ["H", "Oceanic art resembles traditional African art in being", "functional and spiritual", "made only of marble", "purely decorative for the market", "based on linear perspective", "Both serve ritual, ancestors and social life."],
      ],
    },
    {
      week: 9,
      title: "Sculpture: Relief Sculpture",
      subtopics: ["Meaning and types of sculpture", "Relief sculpture", "Materials, tools and equipment", "Processes and finishing"],
      objectives: ["Explain sculpture and its types", "Explain relief sculpture and its kinds", "List and use sculpture materials, tools and equipment", "Create and finish a relief sculpture"],
      lesson: {
        title: "Carving and Modelling in Relief",
        summary: "Three-dimensional art that projects from a flat background, and how to make it.",
        minutes: 80,
        notes: `## Sculpture
**Sculpture** is the art of making **three-dimensional forms**.

### Types
- **sculpture in the round** — free-standing; viewed from all sides
- **relief sculpture** — forms project from, or are cut into, a **flat background**
- **kinetic** (moving) and **assemblage** (constructed) sculpture

## Relief sculpture
| Kind | Description |
|---|---|
| **low relief (bas-relief)** | forms project **slightly** — as on coins and medals |
| **high relief (alto-relievo)** | forms project **boldly**, more than half their depth |
| **sunken relief (intaglio)** | the design is **cut below** the surface |

Examples: Benin bronze **plaques**; carved Yoruba **doors and panels**; Egyptian temple walls; coins; Erhabor Emokpae's reliefs.

## Methods of sculpture
| Method | Process | Materials |
|---|---|---|
| **modelling** (additive) | building up soft material | clay, plasticine, wax, papier mâché, cement |
| **carving** (subtractive) | cutting away | wood, stone, soap, ivory |
| **casting** | pouring liquid material into a **mould** | bronze, brass, plaster, cement, fibreglass |
| **construction / assemblage** | joining parts | metal, wood, found objects |

**Lost-wax (cire perdue) casting:** a wax model is covered with clay; heat melts the wax out; molten metal fills the space — the method of Ife and Benin.

## Materials
clay; plaster of Paris; cement and sand; wood; stone; metal; wax; papier mâché; fibreglass; found objects.

## Tools and equipment
| Tool | Use |
|---|---|
| **spatulas and modelling tools** | shaping clay |
| **wire loop tools** | hollowing and removing clay |
| **chisels and gouges; mallet** | carving wood and stone |
| **rasps and files** | smoothing |
| **armature** | the inner skeleton of wire or wood that supports a model |
| **turntable (banding wheel)** | turning the work |
| **calipers** | measuring proportions |
| **kiln** | firing clay |

## Making a relief in clay
1. Make **sketches** of the design.
2. Roll a **slab** of clay as the background on a board.
3. **Transfer** the design.
4. **Build up** the forms with added clay, or **cut back** the background.
5. Refine details and **textures**.
6. Dry slowly; **fire** it — or make a **mould** and cast it in plaster or cement.

## Casting a relief in cement or plaster
model in clay → pour plaster over it to make a **negative mould** → remove clay; apply a **separator** (oil or soap) → fill with plaster or cement → release the cast.

## Finishing
sanding; **painting**; staining and polishing; **bronzing** with metallic paint; varnishing; **patina** on metal; glazing fired clay; mounting.

## Uses of relief sculpture
decoration of buildings and doors; monuments and memorials; coins and medals; recording history (the Benin plaques).`,
        examples: `**Example 1.** Distinguish low relief from high relief. *Answer:* In **low relief** forms project slightly; in **high relief** they project boldly from the background.

**Example 2.** What is an armature? *Answer:* The **internal support (skeleton)** of a sculpture.

**Example 3.** Name the casting method used by Benin bronze casters. *Answer:* The **lost-wax (cire perdue)** method.`,
      },
      questions: [
        ["E", "Sculpture in which forms project from a flat background is", "relief sculpture", "sculpture in the round", "kinetic sculpture", "assemblage", "It is viewed mainly from the front."],
        ["E", "The method of sculpture that involves cutting away material is", "carving", "modelling", "casting", "welding", "It is a subtractive process."],
        ["E", "The inner support of a modelled sculpture is the", "armature", "kiln", "patina", "mould", "It is made of wire or wood."],
        ["M", "Relief sculpture in which forms project only slightly is", "bas-relief", "high relief", "sunken relief", "in the round", "Coins and medals are examples."],
        ["M", "The famous Benin plaques are examples of", "relief sculpture in metal", "pottery", "textile design", "wall painting", "They decorated the Oba's palace."],
        ["M", "Building up a form with soft material such as clay is", "modelling", "carving", "casting", "etching", "It is an additive process."],
        ["M", "The tool struck with a mallet to carve wood is the", "chisel", "spatula", "caliper", "brush", "Gouges and chisels cut the wood."],
        ["H", "In the lost-wax process, the wax model is", "melted out and replaced by molten metal", "left inside the finished work", "carved from stone", "painted with glaze", "The cavity it leaves is filled with metal."],
        ["H", "A design cut below the surface of the material is called", "sunken relief", "high relief", "bas-relief", "free-standing sculpture", "It is also known as intaglio."],
        ["H", "The surface colour that forms on or is applied to bronze sculpture is", "patina", "slip", "gesso", "primer", "It may be greenish or brown."],
      ],
    },
    {
      week: 10,
      title: "Photography",
      subtopics: ["Meaning and relevance of photography", "The camera and its parts", "Materials, tools and terminologies", "Film making"],
      objectives: ["Explain photography and its relevance to visual arts", "Identify and operate the parts of a camera", "Explain the terminologies of photography", "Explain the stages of film making"],
      lesson: {
        title: "Drawing with Light",
        summary: "How cameras make images, the terms photographers use, and the basics of making a film.",
        minutes: 40,
        notes: `## Meaning
**Photography** — from Greek words meaning "**drawing with light**" — is the art and science of **recording images by the action of light** on a light-sensitive surface: film or, in digital cameras, an electronic **sensor**.

## The camera and its parts
| Part | Function |
|---|---|
| **body** | light-tight box that holds the parts |
| **lens** | gathers and **focuses** light |
| **aperture (diaphragm)** | adjustable opening that controls **how much light** enters; measured in **f-stops** |
| **shutter** | opens for a set time to control **how long** light enters |
| **shutter release button** | takes the picture |
| **viewfinder / LCD screen** | for composing the picture |
| **sensor (or film)** | records the image |
| **flash** | provides extra light |
| **memory card** | stores digital images |
| **focus ring; zoom ring** | sharpen the image; change focal length |
| **mode dial** | selects automatic, manual and other modes |
| **battery; tripod socket** | power; support |

### Types of camera
compact (point-and-shoot); **DSLR** and **mirrorless** cameras with interchangeable lenses; phone cameras; film cameras; video cameras; drones.

## Materials and tools
lenses (wide-angle, standard, telephoto, macro); **tripod**; reflectors and studio lights; backdrops; filters; memory cards; computer and **editing software** (Photoshop, Lightroom); printer and photographic paper. (Film photography used film, a darkroom, developer, stop bath and fixer.)

## Terminologies
- **exposure** — the total light reaching the sensor, set by **aperture, shutter speed and ISO** (the "exposure triangle")
- **ISO** — the sensor's sensitivity to light
- **over-exposure / under-exposure** — too bright / too dark
- **focus** — sharpness of the subject
- **depth of field** — the zone that appears sharp; a wide aperture gives a shallow depth
- **focal length** — determines angle of view and magnification
- **composition** — arrangement of the picture; the **rule of thirds** places the subject off-centre on imaginary grid lines
- **framing; angle of view; close-up; long shot**
- **resolution** — detail, measured in megapixels
- **white balance** — correct colour under different lights
- **negative; print; cropping; editing**

## Branches of photography
portrait; landscape; photojournalism; wedding and event; fashion; product and advertising; wildlife; architectural; documentary; aerial.

## Film making
**Film making (cinematography)** records **moving images**, which are a rapid sequence of still **frames**.
1. **Pre-production** — idea, **script**, storyboard, budget, casting, locations.
2. **Production** — shooting the scenes: camera, lighting, sound, acting, directing.
3. **Post-production** — **editing**, sound, music, effects, titles.
4. **Distribution** — cinema, television, streaming.
Key people: producer, director, scriptwriter, cinematographer, editor, actors. **Nollywood** is Nigeria's film industry.

## Relevance to visual arts
- **reference** material for drawing and painting
- **documentation** of artworks and exhibitions
- an **art form** in itself
- used in **graphic design, advertising and printing**
- records history and culture
- a source of **employment**`,
        examples: `**Example 1.** What does the aperture control? *Answer:* The **amount of light** entering the camera.

**Example 2.** Name the three elements of the exposure triangle. *Answer:* **Aperture, shutter speed and ISO**.

**Example 3.** List the three main stages of film making. *Answer:* **Pre-production, production and post-production**.`,
      },
      questions: [
        ["E", "Photography literally means", "drawing with light", "painting with water", "writing with ink", "carving in stone", "The word comes from Greek."],
        ["E", "The part of a camera that focuses light is the", "lens", "shutter", "tripod", "memory card", "It gathers light to form a sharp image."],
        ["E", "A three-legged stand that keeps a camera steady is a", "tripod", "easel", "reflector", "flash", "It prevents camera shake."],
        ["M", "The camera part that controls how long light enters is the", "shutter", "aperture", "viewfinder", "lens cap", "Shutter speed is measured in fractions of a second."],
        ["M", "The adjustable opening that controls the amount of light entering the camera is the", "aperture", "sensor", "flash", "mode dial", "It is measured in f-stops."],
        ["M", "The sensitivity of a camera's sensor to light is expressed as", "ISO", "DPI", "RGB", "USB", "Higher ISO suits dim light."],
        ["M", "Arranging the subject off-centre along imaginary grid lines follows the", "rule of thirds", "golden mean of sculpture", "law of perspective", "colour wheel", "It makes a composition more pleasing."],
        ["H", "The zone in a photograph that appears acceptably sharp is the", "depth of field", "focal plane shutter", "white balance", "resolution", "A wide aperture gives a shallow depth of field."],
        ["H", "Editing, sound mixing and adding titles to a film take place during", "post-production", "pre-production", "production", "distribution", "This follows the shooting."],
        ["H", "A photograph that is too dark because too little light reached the sensor is", "under-exposed", "over-exposed", "out of focus", "cropped", "More light or a slower shutter is needed."],
      ],
    },
  ],
};
