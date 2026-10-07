import type { TermPlan } from "../types";

/** JSS1 Cultural and Creative Arts — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and scope of Cultural and Creative Arts",
        subtopics: ["Meaning of culture and creativity", "Branches of Cultural and Creative Arts", "Importance of the arts", "Art materials around us"],
        objectives: ["Explain culture and creativity", "Identify the branches of Cultural and Creative Arts", "State the importance of the arts to individuals and society", "Identify local materials for art work"],
        lesson: {
          title: "Exploring the World of the Arts",
          summary: "Define Cultural and Creative Arts and describe its branches.",
          minutes: 40,
          notes: `## Meaning
- **culture** is the **total way of life** of a people — their language, food, dress, beliefs, music, dance, festivals and crafts
- **creativity** is the ability to produce **new and original ideas or things**
- **Cultural and Creative Arts (CCA)** is the study of the arts through which people **express their culture and creativity**

## Branches of CCA
| Branch | Includes |
|---|---|
| **visual arts (fine and applied arts)** | drawing, painting, sculpture, pottery, textile design, graphics, crafts |
| **music** | singing, playing instruments, reading and writing music |
| **drama/theatre** | acting, storytelling, stage production, dance-drama |
| **dance** | traditional and modern dance |
| **cultural studies** | festivals, costumes, customs, heritage |

## Fine art and applied art
- **fine art** is made mainly for **beauty and expression** (paintings, sculptures)
- **applied art** is art for **use** (pottery, textiles, furniture design, graphic design)

## Importance of the arts
- preserve and promote **culture** and identity
- develop **creativity** and problem-solving
- provide **jobs and income** (artists, musicians, actors, designers)
- entertainment and relaxation
- **communication** of ideas and messages (posters, songs, plays)
- promote **unity** and tourism
- beautify homes and the environment

## Local materials for art
clay, wood, calabash, raffia, cowries, beads, seeds, charcoal, natural dyes (indigo, camwood), bamboo, cloth scraps, paper, bottle tops.`,
          examples: `**Example 1.** Is pottery a fine art or an applied art? *Answer:* **applied art** — pots are made for use.

**Example 2.** Name the branches of CCA. *Answer:* **visual arts, music, drama, dance and cultural studies**.

**Example 3.** Give one importance of the arts. *Answer:* They **preserve culture** (or create jobs).`,
        },
        questions: [
          ["E", "The total way of life of a people is their", "culture", "climate", "currency", "constitution", "Culture includes language and customs."],
          ["E", "The ability to produce new and original ideas is", "creativity", "laziness", "imitation", "forgetfulness", "Creativity is originality."],
          ["E", "Drawing and painting belong to the", "visual arts", "music branch", "drama branch", "dance branch", "They are seen with the eyes."],
          ["M", "Art made mainly for beauty and expression is", "fine art", "applied art", "industrial art only", "commercial art", "Paintings are fine art."],
          ["M", "Art made for use, such as pottery and textiles, is", "applied art", "fine art", "performing art", "literary art", "It has practical use."],
          ["M", "Acting and stage production belong to", "drama", "sculpture", "painting", "pottery", "Drama is a performing art."],
          ["M", "Which is a local material for art work?", "clay", "plastic explosives", "petrol", "glass shards", "Clay is used for pottery."],
          ["H", "One economic importance of the arts is that they", "provide jobs and income", "destroy culture", "stop tourism", "increase illiteracy", "Artists earn a living."],
          ["H", "Posters, songs and plays used to pass messages show that art is a means of", "communication", "punishment", "taxation", "farming", "Art conveys ideas."],
          ["H", "Festivals, costumes and customs are studied under", "cultural studies", "music theory only", "graphics", "sculpture", "They express culture."],
        ],
      },
      {
        week: 2,
        title: "Elements of design",
        subtopics: ["Line", "Shape and form", "Texture and space", "Using elements in design"],
        objectives: ["Identify the elements of design", "Draw different types of lines", "Distinguish shape from form", "Use elements of design in simple compositions"],
        lesson: {
          title: "The Building Blocks of Art",
          summary: "Identify and use the elements of design.",
          minutes: 40,
          notes: `## Elements of design
The **elements of design** are the **basic parts** used to create a work of art: **line, shape, form, colour, texture, space** and **tone (value)**.

## Line
A **line** is a mark made by a moving point. Types:
| Line | Effect |
|---|---|
| **vertical** | height, strength, stability |
| **horizontal** | calm, rest |
| **diagonal** | movement, action |
| **curved** | softness, grace |
| **zigzag** | excitement, energy |
| **broken/dotted** | incompleteness, direction |
| **thick and thin** | emphasis, variety |

## Shape and form
- **shape** is a **flat, two-dimensional (2D)** area with length and width — circle, square, triangle, rectangle
  - **geometric shapes**: regular, mathematical
  - **organic (natural) shapes**: irregular — leaves, clouds
- **form** is **three-dimensional (3D)**, with length, width and **depth** — sphere, cube, cone, cylinder

## Texture
**Texture** is how a surface **feels or appears to feel** — rough, smooth, soft, bumpy.
- **actual (tactile) texture** — can be felt (tree bark)
- **visual (implied) texture** — drawn to look rough or smooth

## Space
**Space** is the area **around, between or within** objects.
- **positive space** — the area occupied by the object
- **negative space** — the empty area around it

## Tone (value)
the **lightness or darkness** of a colour or shade.

## Using elements
artists combine elements to make designs attractive; e.g. curved lines for waves, rough texture for tree trunks.`,
          examples: `**Example 1.** Which type of line suggests movement? *Answer:* a **diagonal** line.

**Example 2.** Is a cube a shape or a form? *Answer:* a **form** (3D).

**Example 3.** What is negative space? *Answer:* the **empty area around** an object.`,
        },
        questions: [
          ["E", "The basic parts used to create a work of art are the", "elements of design", "principles of music", "stage directions", "clefs", "Line, shape and colour are elements."],
          ["E", "A mark made by a moving point is a", "line", "form", "texture", "space", "Lines trace movement."],
          ["E", "A circle is a", "shape", "form", "texture", "tone", "It is flat and 2D."],
          ["M", "A diagonal line usually suggests", "movement", "rest", "calm", "stability only", "It is slanting."],
          ["M", "A horizontal line usually suggests", "calm and rest", "excitement", "danger", "speed", "Like the horizon."],
          ["M", "A three-dimensional object with depth is a", "form", "shape", "line", "texture only", "Form has depth."],
          ["M", "How a surface feels or appears to feel is", "texture", "tone", "line", "space", "Rough or smooth."],
          ["H", "The empty area around an object in a picture is", "negative space", "positive space", "form", "tone", "It surrounds the subject."],
          ["H", "Texture drawn to look rough but which feels smooth to touch is", "visual texture", "actual texture", "form", "negative space", "The texture is only implied."],
          ["H", "Leaves and clouds are examples of", "organic shapes", "geometric shapes", "cubes", "cylinders", "They are irregular."],
        ],
      },
      {
        week: 3,
        title: "Colour",
        subtopics: ["The colour wheel", "Primary, secondary and tertiary colours", "Warm and cool colours", "Tints, shades and colour mixing"],
        objectives: ["Construct a simple colour wheel", "Classify colours into primary, secondary and tertiary", "Distinguish warm and cool colours", "Mix tints and shades"],
        lesson: {
          title: "Working with Colour",
          summary: "Mix colours and use the colour wheel.",
          minutes: 40,
          notes: `## Colour
**Colour** is the element produced when light strikes an object and is **reflected** to the eye. In painting, colours come from **pigments**.

## Classes of colour
| Class | Colours | How made |
|---|---|---|
| **primary** | **red, yellow, blue** | cannot be made by mixing other colours |
| **secondary** | **orange, green, violet (purple)** | mixing two primaries equally |
| **tertiary (intermediate)** | red-orange, yellow-orange, yellow-green, blue-green, blue-violet, red-violet | mixing a primary with a neighbouring secondary |

Mixing:
- red + yellow = **orange**
- yellow + blue = **green**
- red + blue = **violet**

## The colour wheel
A circle showing the **12 colours** (3 primary, 3 secondary, 6 tertiary) arranged in order.
- **complementary colours** — opposite each other: red and green, blue and orange, yellow and violet; they create strong **contrast**
- **analogous colours** — side by side: yellow, yellow-green, green; they create **harmony**

## Warm and cool colours
- **warm**: red, orange, yellow — suggest heat, energy, excitement; seem to **advance**
- **cool**: blue, green, violet — suggest calm, coolness; seem to **recede**

## Tints and shades
- **tint** — colour + **white** (lighter), e.g. pink from red
- **shade** — colour + **black** (darker), e.g. maroon from red
- **tone** — colour + grey
- **neutral colours**: black, white, grey, brown

## Local colour sources
indigo (blue), camwood (red), charcoal (black), chalk/kaolin (white), leaves (green).`,
          examples: `**Example 1.** What colour is made by mixing yellow and blue? *Answer:* **green**.

**Example 2.** What is the complementary colour of red? *Answer:* **green**.

**Example 3.** Adding white to red gives a **tint** (pink).`,
        },
        questions: [
          ["E", "The primary colours are", "red, yellow and blue", "orange, green and violet", "black, white and grey", "pink, brown and gold", "They cannot be mixed from others."],
          ["E", "Mixing red and yellow gives", "orange", "green", "violet", "brown", "Orange is secondary."],
          ["E", "A circle showing colours arranged in order is the", "colour wheel", "staff", "stage", "kiln", "It shows colour relationships."],
          ["M", "Mixing red and blue gives", "violet", "green", "orange", "yellow", "Violet is purple."],
          ["M", "Colours opposite each other on the colour wheel are", "complementary colours", "analogous colours", "tertiary colours only", "neutral colours", "They contrast strongly."],
          ["M", "Adding black to a colour produces a", "shade", "tint", "primary colour", "secondary colour", "It darkens the colour."],
          ["M", "Blue, green and violet are", "cool colours", "warm colours", "primary colours", "neutral colours", "They suggest calm."],
          ["H", "Mixing a primary colour with a neighbouring secondary colour gives a", "tertiary colour", "primary colour", "neutral colour", "complementary colour", "E.g. yellow-green."],
          ["H", "The complementary colour of blue is", "orange", "green", "violet", "yellow", "They are opposite on the wheel."],
          ["H", "Pink is obtained by adding white to red, producing a", "tint", "shade", "tone of grey", "secondary colour", "White lightens colours."],
        ],
      },
      {
        week: 4,
        title: "Drawing: tools and basic shapes",
        subtopics: ["Drawing materials and tools", "Grades of pencils", "Drawing from basic shapes", "Care of drawing materials"],
        objectives: ["Identify drawing materials and tools", "Explain the grades of pencils", "Draw objects using basic shapes", "Care for drawing materials"],
        lesson: {
          title: "Learning to Draw",
          summary: "Use drawing tools and basic shapes to draw objects.",
          minutes: 40,
          notes: `## Meaning
**Drawing** is making **marks or lines** on a surface to represent objects, ideas or feelings. It is the **foundation** of most visual art.

## Materials and tools
| Item | Use |
|---|---|
| **pencils** | general drawing and shading |
| **charcoal** | bold, dark drawings; easy to smudge |
| **crayons and pastels** | colour drawing |
| **pens and ink** | line drawings |
| **eraser** | removing mistakes; highlights |
| **sharpener or knife** | sharpening pencils |
| **drawing board** | firm support for paper |
| **cartridge paper** | good-quality drawing paper |
| **ruler, set square, compass** | technical and geometric drawing |
| **fixative** | prevents charcoal and pastel from smudging |

## Grades of pencils
- **H pencils** (H, 2H, 4H…) — **hard**, give **light** lines; used for technical drawing and guidelines
- **HB** — medium; everyday writing and drawing
- **B pencils** (B, 2B, 4B, 6B…) — **soft (black)**, give **dark** lines; good for **shading**
The higher the number in B, the softer and darker; the higher the number in H, the harder and lighter.

## Drawing from basic shapes
Most objects can be built from simple shapes:
- a cup = **cylinder** + handle
- a ball, orange = **sphere/circle**
- a house = **cube** + **triangle/prism** roof
- a bottle = cylinders of different sizes
Steps: observe → draw light **guidelines** with basic shapes → refine outlines → add details → shade.

## Care of materials
keep pencils sharp and stored in a case; keep paper clean and flat; keep charcoal in a box; wash hands to avoid smudges; use fixative on finished charcoal work.`,
          examples: `**Example 1.** Which pencil is best for dark shading? *Answer:* a **6B** (soft) pencil.

**Example 2.** Which basic form is used to draw a cup? *Answer:* a **cylinder**.

**Example 3.** What does a fixative do? *Answer:* It **prevents smudging** of charcoal or pastel.`,
        },
        questions: [
          ["E", "Making marks or lines on a surface to represent objects is", "drawing", "singing", "acting", "weaving", "Drawing is the basis of visual art."],
          ["E", "The tool used to remove pencil mistakes is the", "eraser", "brush", "palette", "kiln", "It rubs out marks."],
          ["E", "A firm support on which drawing paper is placed is the", "drawing board", "easel only", "palette", "canvas", "It keeps paper flat."],
          ["M", "Pencils marked B are", "soft and give dark lines", "hard and give light lines", "used only for writing", "coloured", "B stands for black."],
          ["M", "Pencils marked H are", "hard and give light lines", "soft and very dark", "made of charcoal", "used for painting", "H stands for hard."],
          ["M", "A spray used to stop charcoal drawings from smudging is", "fixative", "eraser", "turpentine", "glue", "It fixes the drawing."],
          ["M", "A cup is best drawn from the basic form of a", "cylinder", "cube", "cone", "pyramid", "Cups are cylindrical."],
          ["H", "Which pencil gives the darkest line?", "6B", "2H", "HB", "4H", "Higher B numbers are softer."],
          ["H", "The first step when drawing an object from observation is to", "observe it and draw light guidelines", "shade it heavily", "colour it", "frame it", "Guidelines set proportions."],
          ["H", "Good quality paper commonly used for drawing is", "cartridge paper", "tissue paper", "newsprint only", "foil", "It takes pencil and ink well."],
        ],
      },
      {
        week: 5,
        title: "Shading techniques",
        subtopics: ["Meaning of shading", "Light and shadow", "Shading techniques", "Tonal scale"],
        objectives: ["Explain shading and its purpose", "Identify areas of light and shadow", "Use different shading techniques", "Produce a tonal scale"],
        lesson: {
          title: "Giving Drawings Depth",
          summary: "Use shading to make drawings look three-dimensional.",
          minutes: 40,
          notes: `## Meaning
**Shading** is the use of **light and dark tones** to show **form, depth and volume**, making a flat drawing look **three-dimensional**.

## Light and shadow
When light falls on an object:
- **highlight** — the brightest part facing the light
- **mid-tone** — the area between light and dark
- **core shadow** — the darkest part of the object, away from the light
- **reflected light** — faint light bounced back into the shadow
- **cast shadow** — the shadow the object throws onto the surface, on the side **opposite the light source**

## Shading techniques
| Technique | Description |
|---|---|
| **hatching** | drawing **parallel lines** close together |
| **cross-hatching** | layers of **crossing** parallel lines for darker tones |
| **stippling** | using many **dots**; more dots = darker |
| **blending (smudging)** | rubbing the pencil marks with a finger, tissue or stump to make smooth tones |
| **scribbling** | loose, random lines built up for texture |
| **contour lines** | lines that follow the curve of the object |

## Tonal scale
A **tonal scale (value scale)** is a strip of boxes showing tones from **white (lightest)** to **black (darkest)**, usually in **5 to 9 steps**. It trains control of pencil pressure.

## Tips
decide the **direction of light** first; start light and build darker gradually; keep the pencil sharp; leave highlights clean or lift with an eraser; avoid over-smudging.`,
          examples: `**Example 1.** Which technique uses many dots? *Answer:* **stippling**.

**Example 2.** Where does a cast shadow fall? *Answer:* on the side **opposite the light source**.

**Example 3.** What is a tonal scale? *Answer:* a strip of boxes from **light to dark** tones.`,
        },
        questions: [
          ["E", "Using light and dark tones to show form is", "shading", "weaving", "carving", "singing", "Shading adds depth."],
          ["E", "The brightest part of an object facing the light is the", "highlight", "cast shadow", "core shadow", "outline", "It receives most light."],
          ["E", "Shading with many dots is", "stippling", "hatching", "blending", "cross-hatching", "Dots build tone."],
          ["M", "Shading with parallel lines close together is", "hatching", "stippling", "smudging", "colouring", "Lines run in one direction."],
          ["M", "Layers of crossing parallel lines used for darker tones is", "cross-hatching", "stippling", "blending", "scribbling", "Lines cross each other."],
          ["M", "Rubbing pencil marks to make smooth tones is", "blending", "hatching", "stippling", "contouring", "It smooths tones."],
          ["M", "The shadow an object throws onto the surface is the", "cast shadow", "highlight", "mid-tone", "reflected light", "It falls away from the light."],
          ["H", "A cast shadow falls on the side", "opposite the light source", "facing the light source", "above the object always", "inside the object", "Light is blocked by the object."],
          ["H", "A strip of boxes showing tones from lightest to darkest is a", "tonal scale", "colour wheel", "staff", "stage plan", "It trains pencil control."],
          ["H", "Before shading an object, the artist should first decide the", "direction of the light source", "colour of the frame", "price of the drawing", "title only", "Light determines shadows."],
        ],
      },
      {
        week: 6,
        title: "Paper craft: collage and mosaic",
        subtopics: ["Meaning of collage and mosaic", "Materials for collage and mosaic", "Steps in making a collage", "Steps in making a mosaic"],
        objectives: ["Distinguish collage from mosaic", "Identify materials for collage and mosaic", "Make a simple collage", "Make a simple paper mosaic"],
        lesson: {
          title: "Creating Pictures with Pieces",
          summary: "Make collage and mosaic pictures from local materials.",
          minutes: 45,
          notes: `## Collage
A **collage** is a picture made by **gluing different materials** — paper cuttings, fabric, seeds, leaves, feathers, bottle tops, magazine pictures — onto a surface. The word comes from the French *coller*, "to glue". Pieces may **overlap** and be of different textures.

## Mosaic
A **mosaic** is a picture made by arranging **small pieces of the same kind of material** (called **tesserae**) — coloured paper squares, tiles, glass, stones, seeds, eggshells — close together with small **gaps** between them. Pieces usually **do not overlap**.

## Differences
| Collage | Mosaic |
|---|---|
| mixed materials | usually one kind of material |
| pieces may overlap | small pieces with even gaps |
| varied shapes and textures | regular small pieces |

## Materials
cardboard or hardboard base, glue or gum, scissors, pencil, old magazines, coloured paper, fabric scraps, seeds (maize, beans, melon), sand, eggshells, bottle tops, feathers, varnish.

## Steps in making a collage
1. choose a theme (e.g. market scene)
2. sketch the design on the base
3. collect and sort materials by colour and texture
4. cut or tear materials to shape
5. arrange pieces before gluing
6. glue from the background to the foreground
7. press flat and allow to dry
8. trim, varnish if needed, and mount

## Steps in making a paper mosaic
1. sketch a simple design with bold outlines
2. cut coloured paper into small squares (about 1 cm)
3. apply glue to a small area at a time
4. place tesserae along the outline first, then fill in
5. leave small, even gaps between pieces
6. allow to dry; trim edges; mount`,
          examples: `**Example 1.** What are the small pieces in a mosaic called? *Answer:* **tesserae**.

**Example 2.** Name one difference between collage and mosaic. *Answer:* In a collage pieces may **overlap**; in a mosaic they are placed with **gaps**.

**Example 3.** From which language does the word "collage" come? *Answer:* **French**, meaning "to glue".`,
        },
        questions: [
          ["E", "A picture made by gluing different materials onto a surface is a", "collage", "mosaic", "sculpture", "print", "It mixes materials."],
          ["E", "A picture made from small pieces placed close together with gaps is a", "mosaic", "collage", "sketch", "painting", "It uses tesserae."],
          ["E", "The main material used to fix collage pieces is", "glue", "water", "ink", "paint only", "Collage means to glue."],
          ["M", "The small pieces used in a mosaic are called", "tesserae", "pixels", "stipples", "tints", "They are small cut pieces."],
          ["M", "In a collage, pieces of material", "may overlap", "must never touch", "must all be the same", "must be metal", "Overlapping is allowed."],
          ["M", "Which is a suitable local material for a seed mosaic?", "melon seeds", "petrol", "nails", "broken bottles without care", "Seeds are safe and colourful."],
          ["M", "The word 'collage' comes from a French word meaning", "to glue", "to cut", "to paint", "to carve", "Coller means to glue."],
          ["H", "When making a paper mosaic, one should fill in the", "outline first, then the rest", "background only", "centre without outline", "edges last only", "Outlines define the design."],
          ["H", "A difference between a mosaic and a collage is that a mosaic usually uses", "one kind of material in small regular pieces", "overlapping mixed materials", "only paint", "only fabric", "Mosaics are regular."],
          ["H", "When making a collage, materials are usually glued", "from the background to the foreground", "from the foreground to the background", "randomly without planning", "only in the centre", "Background layers go first."],
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
        title: "Introduction to music",
        subtopics: ["Meaning of music", "Sound and its properties", "Elements of music", "Functions of music in society"],
        objectives: ["Define music", "Explain the properties of musical sound", "Identify the elements of music", "State the functions of music in society"],
        lesson: {
          title: "The Art of Organised Sound",
          summary: "Define music and describe its elements and functions.",
          minutes: 40,
          notes: `## Meaning
**Music** is the art of **organising sounds** in a pleasant and meaningful way to express ideas and feelings.
Sounds that are regular and pleasant are **musical sounds**; irregular, unpleasant sounds are **noise**.

## Properties of musical sound
| Property | Meaning |
|---|---|
| **pitch** | how **high or low** a sound is |
| **duration** | how **long or short** a sound lasts |
| **dynamics (intensity)** | how **loud or soft** a sound is |
| **timbre (tone colour)** | the special **quality** that makes one voice or instrument sound different from another |

## Elements of music
- **melody** — a succession of single notes that form a tune
- **rhythm** — the pattern of long and short sounds in time
- **harmony** — two or more notes sounded together
- **tempo** — the speed of the music
- **dynamics** — loudness and softness
- **form** — the structure of a piece (e.g. verse and chorus)
- **texture** — how melodies and harmonies are layered

## Functions of music in society
- **entertainment** at parties and festivals
- **worship** in churches, mosques and traditional shrines
- **ceremonies**: naming, weddings, burials, coronations
- **work songs** to ease labour (farming, rowing)
- **education** — teaching values and history
- **communication** — talking drums send messages
- **social control** — satirical songs correct bad behaviour
- **national unity** — the national anthem
- **income** — careers in music`,
          examples: `**Example 1.** Which property tells whether a sound is high or low? *Answer:* **pitch**.

**Example 2.** What is melody? *Answer:* a **succession of single notes** forming a tune.

**Example 3.** Give one function of music. *Answer:* **worship** (or entertainment, ceremonies).`,
        },
        questions: [
          ["E", "The art of organising sounds pleasantly and meaningfully is", "music", "painting", "sculpture", "weaving", "Music uses sound."],
          ["E", "Irregular, unpleasant sound is called", "noise", "melody", "harmony", "rhythm", "It lacks musical order."],
          ["E", "How high or low a sound is, is its", "pitch", "duration", "timbre", "tempo", "Pitch is highness or lowness."],
          ["M", "How loud or soft a sound is, is its", "dynamics", "pitch", "timbre", "form", "Dynamics describe volume."],
          ["M", "The quality that makes one instrument sound different from another is", "timbre", "pitch", "duration", "tempo", "Also called tone colour."],
          ["M", "The speed of a piece of music is its", "tempo", "timbre", "harmony", "pitch", "Tempo is speed."],
          ["M", "Two or more notes sounded together produce", "harmony", "melody", "rhythm only", "noise", "Harmony is simultaneous sound."],
          ["H", "Songs sung by farmers to ease their labour are", "work songs", "lullabies", "anthems", "dirges", "They coordinate work."],
          ["H", "Talking drums used to send messages show that music serves the function of", "communication", "worship only", "decoration", "farming", "Drums imitate speech tones."],
          ["H", "The pattern of long and short sounds in music is", "rhythm", "pitch", "timbre", "harmony", "Rhythm organises time."],
        ],
      },
      {
        week: 2,
        title: "The staff and clefs",
        subtopics: ["The musical staff", "The treble clef", "The bass clef", "Ledger lines and the grand staff"],
        objectives: ["Describe the musical staff", "Name the notes on the treble staff", "Name the notes on the bass staff", "Explain ledger lines and the grand staff"],
        lesson: {
          title: "Where Music Is Written",
          summary: "Read note names on the treble and bass staves.",
          minutes: 45,
          notes: `## The staff (stave)
The **staff** is a set of **five horizontal lines and four spaces** on which music is written. Lines and spaces are counted **from the bottom upwards**.
The music alphabet uses seven letters: **A B C D E F G**, then repeats.

## Clefs
A **clef** is a sign placed at the **beginning of the staff** to show the pitch of the notes.

### Treble clef (G clef)
- curls around the **second line**, which is **G**
- used for **higher** sounds: soprano and alto voices, flute, violin, right hand of the piano
- **lines** (bottom to top): **E G B D F** — "**E**very **G**ood **B**oy **D**eserves **F**ood"
- **spaces** (bottom to top): **F A C E** — spells "FACE"

### Bass clef (F clef)
- its two dots lie on either side of the **fourth line**, which is **F**
- used for **lower** sounds: bass voice, tuba, left hand of the piano
- **lines**: **G B D F A** — "**G**ood **B**oys **D**o **F**ine **A**lways"
- **spaces**: **A C E G** — "**A**ll **C**ows **E**at **G**rass"

## Ledger lines
**Ledger lines** are **short extra lines** written above or below the staff for notes that are too high or too low.
**Middle C** is written on **one ledger line below the treble staff** or **one ledger line above the bass staff**.

## The grand staff
The **grand (great) staff** joins a treble staff and a bass staff with a **brace**; it is used for piano music.`,
          examples: `**Example 1.** What note is on the second line of the treble staff? *Answer:* **G**.

**Example 2.** What word do the treble clef spaces spell? *Answer:* **FACE**.

**Example 3.** Where is middle C written in the treble clef? *Answer:* on **one ledger line below** the staff.`,
        },
        questions: [
          ["E", "The set of five lines and four spaces on which music is written is the", "staff", "clef", "bar", "rest", "It holds the notes."],
          ["E", "The number of lines on a musical staff is", "five", "four", "six", "seven", "Five lines, four spaces."],
          ["E", "The treble clef is also called the", "G clef", "F clef", "C clef only", "D clef", "It curls around G."],
          ["M", "The bass clef is also called the", "F clef", "G clef", "A clef", "E clef", "Its dots surround F."],
          ["M", "The notes on the lines of the treble staff from bottom to top are", "E G B D F", "F A C E", "G B D F A", "A C E G", "Every Good Boy Deserves Food."],
          ["M", "The notes in the spaces of the treble staff spell", "FACE", "CAGE", "BEAD", "DEAF", "F A C E from the bottom."],
          ["M", "Short extra lines added above or below the staff are", "ledger lines", "bar lines", "clefs", "ties", "They extend the staff."],
          ["H", "The notes on the lines of the bass staff from bottom to top are", "G B D F A", "E G B D F", "A C E G", "F A C E", "Good Boys Do Fine Always."],
          ["H", "The notes in the spaces of the bass staff are", "A C E G", "F A C E", "E G B D", "G B D F", "All Cows Eat Grass."],
          ["H", "A treble staff and bass staff joined by a brace form the", "grand staff", "ledger staff", "tonic staff", "time staff", "Piano music uses it."],
        ],
      },
      {
        week: 3,
        title: "Note values and rests",
        subtopics: ["Types of notes", "Relative values of notes", "Rests", "Dotted notes and ties"],
        objectives: ["Identify the common notes and their names", "State the relative values of notes", "Identify the rests that match each note", "Explain dotted notes and ties"],
        lesson: {
          title: "How Long Each Sound Lasts",
          summary: "Read note and rest values and calculate their durations.",
          minutes: 45,
          notes: `## Notes
A **note** is a symbol that shows the **pitch** (by its position on the staff) and **duration** (by its shape) of a sound.

## Note values (in simple time, crotchet = 1 beat)
| British name | American name | Beats |
|---|---|---|
| **semibreve** | whole note | **4** |
| **minim** | half note | **2** |
| **crotchet** | quarter note | **1** |
| **quaver** | eighth note | **½** |
| **semiquaver** | sixteenth note | **¼** |

## Relationships
- 1 semibreve = 2 minims = 4 crotchets = 8 quavers = 16 semiquavers
- each note is **half** the value of the one above it

## Parts of a note
**head** (oval), **stem** (vertical line), **tail/flag** (on quavers and semiquavers). Quavers can be joined by **beams**.
- stems go **up on the right** for notes below the middle line
- stems go **down on the left** for notes on or above the middle line

## Rests
A **rest** is a sign for **silence** of a given duration. Each note has a matching rest:
- **semibreve rest** — hangs **below** the fourth line (4 beats; also used for a whole bar's rest)
- **minim rest** — sits **on** the third line (2 beats)
- **crotchet rest**, **quaver rest**, **semiquaver rest** (1, ½, ¼ beats)

## Dotted notes and ties
- a **dot** after a note **adds half its value**: dotted minim = 2 + 1 = **3 beats**; dotted crotchet = 1 + ½ = **1½ beats**
- a **tie** is a curved line joining two notes of the **same pitch**; they are played as one sound equal to their total value (e.g. minim tied to crotchet = 3 beats)`,
          examples: `**Example 1.** How many crotchets equal one semibreve? *Answer:* **four**.

**Example 2.** What is the value of a dotted minim? *Answer:* **3 beats**.

**Example 3.** Two minims tied together last how many beats? *Answer:* **4 beats**.`,
        },
        questions: [
          ["E", "A note worth 4 beats is the", "semibreve", "minim", "crotchet", "quaver", "It is the whole note."],
          ["E", "A note worth 1 beat is the", "crotchet", "minim", "semibreve", "semiquaver", "It is the quarter note."],
          ["E", "A sign for silence in music is a", "rest", "clef", "staff", "tie", "Rests show silence."],
          ["M", "A minim is worth", "2 beats", "4 beats", "1 beat", "half a beat", "It is the half note."],
          ["M", "A quaver is worth", "half a beat", "1 beat", "2 beats", "a quarter of a beat", "It is the eighth note."],
          ["M", "The number of quavers that equal one crotchet is", "two", "four", "eight", "one", "Each quaver is half a beat."],
          ["M", "A dot placed after a note", "adds half the value of the note", "doubles the value", "removes the value", "halves the value", "It lengthens the note."],
          ["H", "A dotted minim is worth", "3 beats", "2 beats", "4 beats", "1½ beats", "2 + 1 = 3 beats in all."],
          ["H", "A dotted crotchet is worth", "1½ beats", "2 beats", "3 beats", "½ beat", "1 + ½ = 1½ beats in all."],
          ["H", "A curved line joining two notes of the same pitch so they sound as one is a", "tie", "slur", "rest", "clef", "Tied notes are held."],
        ],
      },
      {
        week: 4,
        title: "Time signatures and rhythm",
        subtopics: ["Bars and bar lines", "Time signatures", "Simple time", "Clapping rhythms"],
        objectives: ["Explain bars and bar lines", "Interpret time signatures", "Group notes correctly in simple time", "Clap and write simple rhythms"],
        lesson: {
          title: "Counting Beats in Music",
          summary: "Read time signatures and write rhythms in bars.",
          minutes: 45,
          notes: `## Beats
A **beat (pulse)** is the steady, regular count that runs through music, like a heartbeat.

## Bars and bar lines
- music is divided into equal sections called **bars (measures)**
- a **bar line** is a vertical line that separates bars
- a **double bar line** marks the **end** of a piece or section

## Time signature
A **time signature** is written as **two numbers**, one above the other, at the beginning of the music after the clef.
- the **top number** shows **how many beats** are in each bar
- the **bottom number** shows the **type of note** that gets one beat: **4 = crotchet**, 2 = minim, 8 = quaver

## Common simple time signatures
| Time signature | Meaning | Name |
|---|---|---|
| **2 over 4** | two crotchet beats per bar | simple **duple** time (march) |
| **3 over 4** | three crotchet beats per bar | simple **triple** time (waltz) |
| **4 over 4** | four crotchet beats per bar | simple **quadruple** time; also called **common time**, shown as **C** |

## Accents
the **first beat** of each bar is the strongest (**accented**):
- 2 over 4: **STRONG**-weak
- 3 over 4: **STRONG**-weak-weak
- 4 over 4: **STRONG**-weak-medium-weak

## Clapping rhythms
say "ta" for a crotchet, "ta-a" for a minim, "ti-ti" for two quavers.
Example in 4 over 4: crotchet, crotchet, minim → "ta ta ta-a" (1 + 1 + 2 = 4 beats).
Each bar must add up to the number of beats shown by the time signature.`,
          examples: `**Example 1.** How many beats are in a bar of 3 over 4 time? *Answer:* **three** crotchet beats.

**Example 2.** What is another name for 4 over 4 time? *Answer:* **common time**.

**Example 3.** In 2 over 4 time, a bar with a crotchet and two quavers adds up to 1 + ½ + ½ = **2 beats** — correct.`,
        },
        questions: [
          ["E", "The steady regular count in music is the", "beat", "clef", "staff", "rest", "It is like a pulse."],
          ["E", "A vertical line that separates bars is a", "bar line", "ledger line", "tie", "slur", "It divides music into bars."],
          ["E", "The mark that shows the end of a piece is the", "double bar line", "single bar line", "treble clef", "tie", "It closes the music."],
          ["M", "In a time signature, the top number shows the", "number of beats in each bar", "type of note for one beat", "speed of the music", "key of the music", "The top number counts beats."],
          ["M", "In a time signature, a bottom number of 4 means that each beat is a", "crotchet", "minim", "quaver", "semibreve", "4 represents quarter notes."],
          ["M", "Three crotchet beats in a bar is", "simple triple time", "simple duple time", "simple quadruple time", "compound time", "Triple means three."],
          ["M", "4 over 4 time is also called", "common time", "cut time", "waltz time", "march time only", "It is shown as C."],
          ["H", "In 3 over 4 time, the accent pattern is", "strong-weak-weak", "weak-strong-weak", "strong-strong-weak", "weak-weak-strong", "The first beat is strongest."],
          ["H", "A bar in 4 over 4 containing a minim and a crotchet needs", "one more crotchet beat", "two more minims", "nothing more", "a semibreve", "2 + 1 = 3, so 1 beat is missing."],
          ["H", "A march is usually written in", "simple duple time", "simple triple time", "free time", "no time signature", "Marches have two beats per bar."],
        ],
      },
      {
        week: 5,
        title: "Nigerian musical instruments",
        subtopics: ["Classification of musical instruments", "Idiophones and membranophones", "Chordophones and aerophones", "Care of instruments"],
        objectives: ["Classify musical instruments", "Identify Nigerian idiophones and membranophones", "Identify Nigerian chordophones and aerophones", "Describe the care of instruments"],
        lesson: {
          title: "Instruments of Our Land",
          summary: "Classify Nigerian traditional instruments by how they produce sound.",
          minutes: 40,
          notes: `## Classification
Musical instruments are classified by **how they produce sound**:
| Class | How sound is produced |
|---|---|
| **idiophones** | the **body of the instrument itself vibrates** when struck, shaken or scraped |
| **membranophones** | a **stretched skin (membrane)** vibrates |
| **chordophones** | **strings** vibrate |
| **aerophones** | a **column of air** vibrates |
(**electrophones** produce sound electronically, e.g. keyboards.)

## Nigerian idiophones
- **ogene** — metal gong (Igbo)
- **agogo** — double bell (Yoruba)
- **ekwe** — wooden slit drum (Igbo)
- **shekere (sekere)** — gourd rattle with beads or cowries
- **ichaka** — gourd rattle (Igbo)
- **udu** — clay pot instrument (Igbo)
- **xylophone** (e.g. in parts of the south)

## Nigerian membranophones
- **dundun / gangan (talking drum)** — hourglass-shaped, pressure drum (Yoruba); imitates speech tones
- **bata drums** — Yoruba
- **kalangu** — hourglass drum (Hausa)
- **igba** — Igbo drum
- **gangi, ganga** — Hausa drums

## Nigerian chordophones
- **goje** — one- or two-string fiddle (Hausa, Yoruba)
- **molo** — lute (Hausa)
- **garaya** — two-string lute (Hausa)

## Nigerian aerophones
- **kakaki** — long metal trumpet (Hausa), played at royal ceremonies and durbars
- **algaita** — double-reed pipe (Hausa)
- **oja** — wooden flute (Igbo)
- **horns** from animal horns and ivory

## Care of instruments
keep dry and away from extreme heat; tighten or loosen drum skins properly; clean after use; store in cases; handle gently; replace worn strings.`,
          examples: `**Example 1.** In which class is the talking drum? *Answer:* **membranophone**.

**Example 2.** The goje produces sound through vibrating strings, so it is a **chordophone**.

**Example 3.** Name a Hausa aerophone. *Answer:* **kakaki** (or algaita).`,
        },
        questions: [
          ["E", "Instruments whose own bodies vibrate to produce sound are", "idiophones", "membranophones", "chordophones", "aerophones", "The body itself sounds."],
          ["E", "Instruments that produce sound from a stretched skin are", "membranophones", "idiophones", "aerophones", "chordophones", "The membrane vibrates."],
          ["E", "Instruments that produce sound from vibrating strings are", "chordophones", "aerophones", "idiophones", "membranophones", "Strings vibrate."],
          ["M", "Instruments that produce sound from a vibrating column of air are", "aerophones", "chordophones", "membranophones", "idiophones", "Air is blown into them."],
          ["M", "The talking drum (dundun) is a", "membranophone", "chordophone", "aerophone", "idiophone", "It has skin heads."],
          ["M", "The ogene (metal gong) is an", "idiophone", "aerophone", "chordophone", "membranophone", "The metal body vibrates."],
          ["M", "The goje (fiddle) is a", "chordophone", "idiophone", "aerophone", "membranophone", "It has strings."],
          ["H", "The kakaki, a long metal trumpet played at royal ceremonies, is a", "Hausa aerophone", "Igbo membranophone", "Yoruba chordophone", "Efik idiophone", "The kakaki is blown."],
          ["H", "A gourd rattle covered with beads or cowries is the", "shekere", "kakaki", "goje", "dundun", "The shekere is shaken."],
          ["H", "The ekwe, a wooden slit drum, is classified as an", "idiophone", "membranophone", "aerophone", "chordophone", "It has no skin head."],
        ],
      },
      {
        week: 6,
        title: "Tonic sol-fa and the major scale",
        subtopics: ["Meaning of a scale", "The C major scale", "Tonic sol-fa syllables", "Singing simple melodies in sol-fa"],
        objectives: ["Define a scale", "Write the C major scale on the staff", "Name the tonic sol-fa syllables", "Sing simple melodies using tonic sol-fa"],
        lesson: {
          title: "Doh, Ray, Me",
          summary: "Write the C major scale and sing it in tonic sol-fa.",
          minutes: 45,
          notes: `## Scale
A **scale** is a series of notes arranged in **ascending or descending order** of pitch, usually covering **eight notes** from one note to the same note an **octave** higher.

## Tones and semitones
- a **semitone** is the smallest step in Western music (e.g. E to F, B to C)
- a **tone** equals **two semitones** (e.g. C to D)

## The major scale
A **major scale** follows the pattern:
**tone, tone, semitone, tone, tone, tone, semitone** (T T S T T T S)

## The C major scale
**C D E F G A B C**
- semitones occur between **E–F** (3rd–4th) and **B–C** (7th–8th)
- it has **no sharps or flats**

## Degree names
| Degree | Note in C | Name |
|---|---|---|
| 1 | C | **tonic** |
| 2 | D | supertonic |
| 3 | E | mediant |
| 4 | F | subdominant |
| 5 | G | **dominant** |
| 6 | A | submediant |
| 7 | B | leading note |
| 8 | C | tonic (octave) |

## Tonic sol-fa
**Tonic sol-fa** is a system that uses **syllables** to represent the degrees of the scale:
**d (doh), r (ray), m (me), f (fah), s (soh), l (lah), t (te), d' (doh')**
In C major, doh = C. Tonic sol-fa is **movable doh** — doh is always the tonic of the key.
Many Nigerian choirs read music in tonic sol-fa.

## Singing practice
sing up and down the scale: d r m f s l t d' — d' t l s f m r d; then simple patterns: d m s m d; s l s m; d r m r d.`,
          examples: `**Example 1.** Write the C major scale. *Answer:* **C D E F G A B C**.

**Example 2.** What is the sol-fa name of the fifth degree? *Answer:* **soh**.

**Example 3.** Where do semitones occur in C major? *Answer:* between **E–F** and **B–C**.`,
        },
        questions: [
          ["E", "A series of notes arranged in order of pitch is a", "scale", "bar", "clef", "rest", "It ascends or descends."],
          ["E", "The first note of the tonic sol-fa scale is", "doh", "ray", "me", "soh", "Doh is the tonic."],
          ["E", "The C major scale has", "no sharps or flats", "two sharps", "one flat", "three sharps", "It uses only white keys."],
          ["M", "The pattern of the major scale is", "T T S T T T S", "T S T T S T T", "S T T S T T T", "T T T S T T S", "Tones and semitones."],
          ["M", "The fifth degree of the scale is called the", "dominant", "tonic", "mediant", "leading note", "In sol-fa it is soh."],
          ["M", "In the C major scale, a semitone occurs between", "E and F", "C and D", "F and G", "G and A", "E–F is a semitone."],
          ["M", "The tonic sol-fa syllable for the third degree is", "me", "fah", "ray", "lah", "d r m — me is third."],
          ["H", "The seventh degree of the major scale is called the", "leading note", "dominant", "subdominant", "supertonic", "It leads to the tonic."],
          ["H", "A tone is equal to", "two semitones", "one semitone", "three semitones", "half a semitone", "C to D is a tone."],
          ["H", "The eight notes from C to the next C form an", "octave", "interval of a fifth", "chord", "bar", "Octo means eight."],
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
        title: "Introduction to drama",
        subtopics: ["Meaning of drama", "Origin of drama", "Drama in Nigerian traditions", "Values of drama"],
        objectives: ["Define drama", "Describe the origin of drama", "Identify dramatic elements in Nigerian traditional life", "State the values of drama"],
        lesson: {
          title: "Stories Brought to Life",
          summary: "Define drama and trace its roots in ritual and tradition.",
          minutes: 40,
          notes: `## Meaning
**Drama** is a story **acted out** by performers (actors) before an **audience**, using **dialogue, action**, and often music and dance. The word comes from the Greek word *dran*, meaning "**to do**" or "**to act**".
**Theatre** refers to the **place** where plays are performed and also to the art of **performance** itself.

## Origin of drama
- drama grew out of **rituals, festivals and religious ceremonies**
- in ancient **Greece**, festivals in honour of the god **Dionysus** developed into plays (tragedy and comedy)
- in Africa, **rituals, masquerades, storytelling and festivals** contain drama

## Drama in Nigerian traditions
- **masquerade performances** (egungun, mmonwu) combine costume, dance, music and acting
- **moonlight storytelling** with songs and actions
- **festivals** re-enact history and myths (e.g. Osun-Osogbo, Eyo)
- **Alarinjo** — Yoruba travelling theatre with masks
- **Kwagh-hir** — Tiv puppet and masquerade theatre
- ceremonies such as weddings and coronations include dramatic roles

## Values of drama
- **entertainment**
- **education** — teaches morals, history and social issues
- **preservation of culture**
- **communication** — sends messages on health, politics and society
- **self-confidence and public speaking**
- **employment** — actors, directors, script writers, designers (e.g. **Nollywood**)
- **therapy** — drama helps people express feelings`,
          examples: `**Example 1.** What does the Greek word *dran* mean? *Answer:* **to do or to act**.

**Example 2.** Name one Nigerian traditional performance with dramatic elements. *Answer:* **masquerade performance** (or moonlight storytelling).

**Example 3.** Give one value of drama. *Answer:* It **teaches morals** (education).`,
        },
        questions: [
          ["E", "A story acted out by performers before an audience is", "drama", "painting", "pottery", "sculpture", "Drama is acted."],
          ["E", "People who watch a performance are the", "audience", "actors", "props", "directors", "They receive the play."],
          ["E", "People who perform roles in a play are", "actors", "spectators", "ushers", "critics", "They act the story."],
          ["M", "The word 'drama' comes from a Greek word meaning", "to do or to act", "to sing", "to paint", "to write", "Dran means to act."],
          ["M", "Drama is believed to have grown out of", "rituals and festivals", "factories", "banks", "elections", "Ceremonies had dramatic elements."],
          ["M", "Ancient Greek plays developed from festivals honouring", "Dionysus", "Zeus only", "Athena", "Apollo only", "Dionysus was the god of drama."],
          ["M", "The Nigerian film industry is popularly called", "Nollywood", "Hollywood", "Bollywood", "Kannywood only", "It is Nigeria's film industry."],
          ["H", "The Yoruba travelling masked theatre tradition is", "Alarinjo", "Kwagh-hir", "Durbar", "Argungu", "Alarinjo troupes travelled."],
          ["H", "Kwagh-hir is a puppet and masquerade theatre of the", "Tiv", "Yoruba", "Igbo", "Efik", "It comes from Benue."],
          ["H", "A play about the dangers of drug abuse mainly shows drama as a tool for", "education and communication", "farming", "taxation", "sport", "It spreads messages."],
        ],
      },
      {
        week: 2,
        title: "Elements of drama",
        subtopics: ["Plot and conflict", "Character and characterisation", "Theme and setting", "Dialogue and spectacle"],
        objectives: ["Explain plot and conflict", "Describe character and characterisation", "Identify theme and setting in a play", "Explain dialogue and spectacle"],
        lesson: {
          title: "What Makes a Play",
          summary: "Identify and explain the elements of drama.",
          minutes: 40,
          notes: `## Plot
The **plot** is the **sequence of events** in a play. Parts of a plot:
1. **exposition** — introduces characters, setting and background
2. **rising action** — complications develop
3. **climax** — the **turning point** or highest point of tension
4. **falling action** — events after the climax
5. **resolution (denouement)** — the conflict is settled

## Conflict
**Conflict** is the **struggle** between opposing forces that drives the plot:
person vs person; person vs self; person vs society; person vs nature; person vs fate/supernatural.

## Character and characterisation
- a **character** is a person (or animal/spirit) in a play
- the **protagonist** is the **main character**; the **antagonist** **opposes** the protagonist
- **characterisation** is how a writer reveals a character — through words, actions, what others say, costume

## Theme
The **theme** is the **central idea or message** of a play, e.g. "greed leads to destruction".

## Setting
The **setting** is the **time and place** in which the action happens.

## Dialogue
**Dialogue** is the **conversation between characters**. A **monologue** is a long speech by one character to others; a **soliloquy** is a character speaking thoughts aloud **alone** on stage; an **aside** is a remark to the audience that other characters do not hear.

## Spectacle
**Spectacle** is everything the audience **sees**: costume, make-up, scenery, lighting, props, dance.

## Other elements
**music and sound**, **language/diction**, **audience**.`,
          examples: `**Example 1.** What is the climax of a play? *Answer:* the **turning point** or highest tension.

**Example 2.** Who is the protagonist? *Answer:* the **main character**.

**Example 3.** A character alone on stage speaking her thoughts aloud is giving a **soliloquy**.`,
        },
        questions: [
          ["E", "The sequence of events in a play is the", "plot", "theme", "setting", "costume", "Plot is the storyline."],
          ["E", "The time and place in which a play happens is the", "setting", "theme", "climax", "dialogue", "Setting is when and where."],
          ["E", "Conversation between characters in a play is", "dialogue", "spectacle", "setting", "plot", "Characters speak to each other."],
          ["M", "The main character in a play is the", "protagonist", "antagonist", "narrator only", "audience", "The story centres on him or her."],
          ["M", "The character who opposes the main character is the", "antagonist", "protagonist", "chorus", "director", "Antagonists create conflict."],
          ["M", "The central idea or message of a play is its", "theme", "plot", "setting", "costume", "Theme is the message."],
          ["M", "The turning point or highest tension in a play is the", "climax", "exposition", "resolution", "prologue", "Tension peaks here."],
          ["H", "A character alone on stage speaking thoughts aloud gives a", "soliloquy", "dialogue", "aside to another character", "chorus", "Only the audience hears."],
          ["H", "The struggle between opposing forces in a play is", "conflict", "spectacle", "setting", "diction", "Conflict drives the plot."],
          ["H", "The part of the plot that introduces characters and background is the", "exposition", "climax", "falling action", "denouement", "It comes first."],
        ],
      },
      {
        week: 3,
        title: "Types of drama",
        subtopics: ["Tragedy", "Comedy", "Tragicomedy and melodrama", "Farce and other forms"],
        objectives: ["Explain tragedy and its features", "Explain comedy and its features", "Distinguish tragicomedy and melodrama", "Identify farce and other dramatic forms"],
        lesson: {
          title: "Kinds of Plays",
          summary: "Distinguish the main types of drama.",
          minutes: 40,
          notes: `## Tragedy
A **tragedy** is a serious play that ends **sadly**, often with the **downfall or death** of the main character.
- the **tragic hero** is usually a person of high status with a **tragic flaw** (weakness), such as pride
- it arouses **pity and fear** in the audience
- example: *The Gods Are Not to Blame* by **Ola Rotimi**

## Comedy
A **comedy** is a light play that **amuses** the audience and ends **happily**.
- uses humour, witty dialogue, misunderstandings
- often **satirises** (mocks) human weaknesses to correct them

## Tragicomedy
A play that **mixes tragic and comic elements**; serious events but usually a **happy ending**.

## Melodrama
A play with **exaggerated emotions**, clear **heroes and villains**, suspense and often music; good usually triumphs.

## Farce
An extreme kind of comedy with **ridiculous situations**, horseplay and exaggerated physical humour.

## Other forms
| Form | Description |
|---|---|
| **mime** | acting **without words**, using gestures and facial expressions |
| **dance drama** | story told mainly through **dance and music** |
| **puppetry** | performance with **puppets** |
| **improvisation** | acting **without a prepared script** |
| **radio and television drama** | plays for broadcast |
| **opera** | a drama that is mostly **sung** |`,
          examples: `**Example 1.** A play that ends with the death of the hero is a **tragedy**.

**Example 2.** What is mime? *Answer:* acting **without words**.

**Example 3.** A play full of ridiculous situations and slapstick humour is a **farce**.`,
        },
        questions: [
          ["E", "A serious play that ends sadly is a", "tragedy", "comedy", "farce", "mime", "It often ends in death or downfall."],
          ["E", "A light play that amuses and ends happily is a", "comedy", "tragedy", "dirge", "elegy", "Comedy brings laughter."],
          ["E", "Acting without words using gestures is", "mime", "opera", "dialogue", "monologue", "Actions replace speech."],
          ["M", "A play that mixes tragic and comic elements is a", "tragicomedy", "farce", "melodrama only", "opera", "It combines both."],
          ["M", "A play with exaggerated emotions and clear heroes and villains is a", "melodrama", "tragedy", "mime", "documentary", "Emotions are heightened."],
          ["M", "The weakness that leads to a tragic hero's downfall is the", "tragic flaw", "climax", "setting", "chorus", "E.g. excessive pride."],
          ["M", "A drama that is mostly sung is an", "opera", "mime", "improvisation", "farce", "Music carries the story."],
          ["H", "Acting without a prepared script is", "improvisation", "rehearsal", "blocking", "casting", "Actors make it up."],
          ["H", "An extreme comedy based on ridiculous situations and horseplay is a", "farce", "tragedy", "melodrama", "dance drama", "It uses slapstick."],
          ["H", "'The Gods Are Not to Blame' by Ola Rotimi is an example of a", "tragedy", "farce", "comedy", "mime", "It ends in sorrow."],
        ],
      },
      {
        week: 4,
        title: "Nigerian festivals",
        subtopics: ["Meaning of festivals", "Religious and traditional festivals", "Examples of Nigerian festivals", "Importance of festivals"],
        objectives: ["Explain festivals", "Classify festivals", "Describe some Nigerian festivals", "State the importance of festivals"],
        lesson: {
          title: "Celebrating Our Heritage",
          summary: "Describe Nigerian festivals and their importance.",
          minutes: 40,
          notes: `## Meaning
A **festival** is a **special occasion of celebration**, usually held yearly, to mark religious, cultural, historical or seasonal events. Festivals include music, dance, drama, costumes, food and rituals.

## Classes of festivals
- **religious festivals** — Christmas, Easter, Eid-el-Fitr, Eid-el-Kabir
- **traditional/cultural festivals** — celebrating deities, ancestors, harvests or history
- **national festivals** — Independence Day (1 October), Democracy Day (12 June)
- **arts festivals** — carnivals, film and music festivals

## Examples of Nigerian festivals
| Festival | Place / people | Highlights |
|---|---|---|
| **Argungu Fishing Festival** | Argungu, **Kebbi State** | fishing competition in the river with nets and gourds |
| **Osun-Osogbo Festival** | Osogbo, **Osun State** | honours the river goddess Osun; the sacred grove is a UNESCO World Heritage Site |
| **Eyo Festival** | **Lagos** | masquerades in white robes and hats |
| **New Yam Festival (Iri Ji)** | Igbo communities | thanksgiving for the yam harvest |
| **Durbar** | northern emirates (e.g. Kano, Katsina, Zaria) | horsemen in colourful regalia during Sallah |
| **Ofala Festival** | **Onitsha**, Anambra | the Obi appears to his people |
| **Calabar Carnival** | **Cross River State** | street parades in December |
| **Igue Festival** | **Benin** | celebrates the Oba |
| **Olojo Festival** | **Ile-Ife** | the Ooni wears the Are crown |

## Importance of festivals
preserve **culture and history**; promote **unity**; attract **tourists** and revenue; entertainment; thanksgiving; showcase arts (music, dance, costume); bring people home (reunion); create business opportunities.`,
          examples: `**Example 1.** In which state is the Argungu Fishing Festival held? *Answer:* **Kebbi State**.

**Example 2.** Which festival features masquerades in white robes in Lagos? *Answer:* the **Eyo Festival**.

**Example 3.** Give one importance of festivals. *Answer:* They **attract tourists**.`,
        },
        questions: [
          ["E", "A special occasion of celebration held regularly is a", "festival", "funeral only", "market day", "strike", "Festivals celebrate events."],
          ["E", "The Argungu Fishing Festival is held in", "Kebbi State", "Lagos State", "Osun State", "Cross River State", "It takes place in Argungu."],
          ["E", "The Eyo Festival is celebrated in", "Lagos", "Kano", "Calabar", "Onitsha", "Eyo masquerades wear white."],
          ["M", "The Osun-Osogbo Festival honours", "the river goddess Osun", "the god of iron", "the yam harvest only", "the Oba of Benin", "It is held at the sacred grove."],
          ["M", "The New Yam Festival is celebrated mainly by the", "Igbo", "Hausa", "Kanuri", "Fulani", "It gives thanks for yams."],
          ["M", "Colourful horse parades during Sallah in the north are called", "Durbar", "Eyo", "Ofala", "Argungu", "Horsemen salute the emir."],
          ["M", "The Calabar Carnival takes place in", "Cross River State", "Kebbi State", "Kano State", "Oyo State", "It is held in December."],
          ["H", "The Ofala Festival is associated with", "Onitsha", "Ile-Ife", "Argungu", "Benin", "The Obi of Onitsha appears."],
          ["H", "The Osun sacred grove has been listed by UNESCO as a", "World Heritage Site", "national park only", "museum", "stadium", "It has global cultural value."],
          ["H", "One economic importance of festivals is that they", "attract tourists and revenue", "stop trade", "destroy culture", "reduce unity", "Visitors spend money."],
        ],
      },
      {
        week: 5,
        title: "Traditional costumes and body adornment",
        subtopics: ["Meaning of costume and adornment", "Traditional attire of Nigerian peoples", "Body adornment", "Values of traditional costume"],
        objectives: ["Explain costume and body adornment", "Describe traditional attire of major Nigerian groups", "Identify forms of body adornment", "State the values of traditional costume"],
        lesson: {
          title: "Dressing Our Culture",
          summary: "Describe Nigerian traditional attire and adornment.",
          minutes: 40,
          notes: `## Meaning
- **costume** is clothing that shows the **identity, culture, occasion or role** of the wearer
- **body adornment** is **decorating the body** with ornaments, marks or colours for beauty or meaning

## Traditional attire of some Nigerian peoples
| People | Men | Women |
|---|---|---|
| **Yoruba** | **agbada** (large flowing gown), **buba** and **sokoto**, **fila** (cap) | **iro** (wrapper), **buba** (blouse), **gele** (head tie), **ipele** (shawl); fabric: **aso-oke** |
| **Hausa/Fulani** | **babban riga** (large gown), **jalabiya**, turban or **hula** (cap) | wrapper, blouse, **mayafi** (veil) |
| **Igbo** | **isiagu** (patterned top), wrapper, red cap (**okpu**) for titled men | blouse and double wrapper, head tie; coral beads |
| **Edo (Benin)** | wrapper, coral beads for chiefs | wrapper, coral bead necklaces and headgear |
| **Efik/Ibibio** | shirt with wrapper | **onyonyo** (long gown) |
| **Tiv** | **anger** (black and white striped cloth) | anger wrapper |
Special fabrics: **aso-oke** (Yoruba hand-woven), **akwete** (Igbo woven cloth), **adire** (Yoruba resist-dyed).

## Body adornment
- **beads** (coral, glass, cowries) — necklaces, wristbands, waistbeads
- **hair styles** — plaiting, weaving, threading (e.g. "shuku")
- **uli** — body painting designs (Igbo)
- **henna (lalle)** — decorating hands and feet (Hausa)
- **tribal marks** — traditional facial marks (less common today)
- **tattoos**, jewellery, **camwood** and **kaolin (nzu, efun)**

## Values
express **identity and culture**; show **status** (chiefs, titled persons); beautify; used for ceremonies (weddings, festivals); promote **local textile industries** and fashion; tourism.`,
          examples: `**Example 1.** What is the large flowing gown worn by Yoruba men called? *Answer:* **agbada**.

**Example 2.** Name a Yoruba hand-woven fabric. *Answer:* **aso-oke**.

**Example 3.** What is henna called in Hausa? *Answer:* **lalle**.`,
        },
        questions: [
          ["E", "Clothing that shows the identity or culture of the wearer is", "costume", "stage", "script", "tempo", "Costume reflects culture."],
          ["E", "The head tie worn by Yoruba women is the", "gele", "fila", "hula", "okpu", "It is tied on the head."],
          ["E", "Decorating the body with beads and marks is", "body adornment", "choreography", "harmony", "shading", "It beautifies the body."],
          ["M", "The large flowing gown worn by Yoruba men is the", "agbada", "isiagu", "anger", "onyonyo", "It is worn on special occasions."],
          ["M", "The large gown worn by Hausa men is the", "babban riga", "agbada only", "iro", "gele", "It is a northern attire."],
          ["M", "The patterned top worn by Igbo men is the", "isiagu", "babban riga", "buba only", "mayafi", "It often has lion-head patterns."],
          ["M", "The black and white striped cloth of the Tiv is", "anger", "aso-oke", "akwete", "adire", "It is Tiv identity cloth."],
          ["H", "Uli is a form of", "body painting design among the Igbo", "Hausa drum", "Yoruba festival", "Efik dance", "It is drawn on the body."],
          ["H", "Coral beads are especially associated with chiefs and royalty among the", "Edo (Benin) and Igbo", "Tiv only", "Kanuri only", "Fulani only", "Coral shows high status."],
          ["H", "Decorating the hands and feet with henna among the Hausa is called", "lalle", "uli", "gele", "fila", "It is used for weddings."],
        ],
      },
      {
        week: 6,
        title: "Careers in Cultural and Creative Arts",
        subtopics: ["Careers in visual arts", "Careers in music", "Careers in drama and film", "Skills for creative careers"],
        objectives: ["Identify careers in visual arts", "Identify careers in music", "Identify careers in drama and film", "State skills needed for creative careers"],
        lesson: {
          title: "Making a Living in the Arts",
          summary: "Explore careers in the creative industries.",
          minutes: 40,
          notes: `## Careers in visual arts
- **painter** and **sculptor**
- **graphic designer** (logos, posters, packaging, digital design)
- **illustrator** and **cartoonist** (books, newspapers, animation)
- **textile designer** (adire, batik, fabric prints)
- **ceramist/potter**
- **photographer** and **videographer**
- **interior decorator**
- **fashion designer**
- **art teacher** and **museum curator**

## Careers in music
- **musician/singer** and **instrumentalist**
- **composer** and **songwriter**
- **music producer** and **sound engineer**
- **music teacher** and **choir director/conductor**
- **disc jockey (DJ)**
- **instrument maker and repairer**

## Careers in drama and film
- **actor/actress**
- **director** and **producer**
- **script writer (playwright, screenwriter)**
- **costume designer** and **make-up artist**
- **set designer**, **lighting designer**
- **cinematographer**, **film editor**
- **dancer** and **choreographer**
- **master of ceremonies (MC)** and **comedian**

## The creative industry in Nigeria
Nigeria's **film (Nollywood)**, **music (Afrobeats)**, **fashion** and **visual art** industries employ many young people and earn income from around the world.

## Skills needed
creativity and imagination; talent developed through **practice**; discipline and hard work; communication; teamwork; **digital skills** (design software, music software, editing); business skills (marketing, pricing, **copyright** protection); honesty and professionalism.

## Protecting creative work
**Copyright** gives creators the legal right to control copies of their work. In Nigeria, the **Nigerian Copyright Commission** handles copyright matters.`,
          examples: `**Example 1.** Who designs logos and posters? *Answer:* a **graphic designer**.

**Example 2.** Who writes the script of a film? *Answer:* a **script writer (screenwriter)**.

**Example 3.** What protects a musician's song from being copied without permission? *Answer:* **copyright**.`,
        },
        questions: [
          ["E", "A person who designs logos and posters is a", "graphic designer", "choreographer", "conductor", "curator", "Graphic design is visual communication."],
          ["E", "A person who acts in plays and films is an", "actor", "editor", "engineer", "auditor", "Actors perform roles."],
          ["E", "A person who writes music is a", "composer", "sculptor", "potter", "curator", "Composers create music."],
          ["M", "A person who arranges dance movements is a", "choreographer", "cinematographer", "costumier", "conductor", "Choreography is dance design."],
          ["M", "A person who directs a choir is a", "conductor", "set designer", "potter", "photographer", "Conductors lead performances."],
          ["M", "A person who writes plays is a", "playwright", "cartographer", "photographer", "sculptor", "Playwrights write for the stage."],
          ["M", "A person who takes care of art collections in a museum is a", "curator", "DJ", "choreographer", "comedian", "Curators manage exhibits."],
          ["H", "The legal right that protects creative works from unauthorised copying is", "copyright", "trademark only", "citizenship", "franchise", "Copyright protects creators."],
          ["H", "The agency responsible for copyright matters in Nigeria is the", "Nigerian Copyright Commission", "INEC", "NAFDAC", "NDLEA", "It enforces copyright law."],
          ["H", "A person who controls the recording and mixing of sound in a studio is a", "sound engineer", "set designer", "costume designer", "curator", "Engineers manage audio."],
        ],
      },
    ],
  },
];
