import type { TermPlan } from "../types";

/** JSS2 Cultural and Creative Arts — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Principles of design",
        subtopics: ["Balance", "Rhythm and movement", "Proportion and emphasis", "Unity, contrast and variety"],
        objectives: ["Explain the principles of design", "Distinguish symmetrical, asymmetrical and radial balance", "Apply proportion and emphasis in a composition", "Use unity, contrast and variety in design"],
        lesson: {
          title: "Arranging the Elements Well",
          summary: "Apply the principles of design to create good compositions.",
          minutes: 40,
          notes: `## Meaning
The **principles of design** are the **rules or guidelines** artists use to **arrange the elements** (line, shape, colour, texture, space) in a work of art so that it looks good and communicates clearly.

## Balance
the **even distribution of visual weight** in a work.
| Type | Description | Example |
|---|---|---|
| **symmetrical (formal)** | both sides are **mirror images** | a butterfly, a mask |
| **asymmetrical (informal)** | different items on each side but still **feel balanced** | a large tree on one side, two small huts on the other |
| **radial** | elements **spread out from a centre** | a wheel, a flower, a mat design |

## Rhythm and movement
- **rhythm** is the **repetition** of elements to create a pattern or visual beat
- **movement** is how the viewer's **eye travels** through the work

## Proportion
the **relationship in size** of parts to one another and to the whole. Correct proportion makes figures look natural (e.g. the head is about **one-eighth** of an adult's height).

## Emphasis (dominance)
the **centre of interest** or **focal point** — the part that attracts attention first, created by contrast, size, colour or position.

## Unity and harmony
all parts **work together** to form a complete, pleasing whole.

## Contrast
the use of **differences** (light/dark, big/small, rough/smooth) to create interest.

## Variety
using **different** elements to avoid monotony, while keeping unity.`,
          examples: `**Example 1.** A mask with identical left and right sides shows **symmetrical balance**.

**Example 2.** What is emphasis? *Answer:* the **focal point** or centre of interest.

**Example 3.** Repeating the same motif across a fabric creates **rhythm**.`,
        },
        questions: [
          ["E", "Rules used to arrange elements in a work of art are the", "principles of design", "elements of music", "stage directions", "clefs", "They guide composition."],
          ["E", "Balance in which both sides are mirror images is", "symmetrical balance", "asymmetrical balance", "radial balance", "no balance", "Sides are identical."],
          ["E", "The part of a picture that attracts attention first is the", "focal point", "background", "border", "frame", "It shows emphasis."],
          ["M", "Balance in which elements spread from a centre is", "radial balance", "symmetrical balance", "asymmetrical balance", "rhythm", "Like a wheel or flower."],
          ["M", "The repetition of elements to create a visual beat is", "rhythm", "proportion", "unity", "balance", "Patterns create rhythm."],
          ["M", "The relationship in size of parts to one another is", "proportion", "contrast", "texture", "rhythm", "Parts must relate correctly."],
          ["M", "The use of differences such as light and dark to create interest is", "contrast", "unity", "harmony", "proportion", "Opposites attract attention."],
          ["H", "Different items on each side that still feel balanced show", "asymmetrical balance", "symmetrical balance", "radial balance", "imbalance", "It is informal balance."],
          ["H", "When all parts of a design work together to form a complete whole, the design has", "unity", "contrast", "variety only", "emphasis only", "Unity holds a work together."],
          ["H", "For an adult figure, the head is about", "one-eighth of the total height", "half the height", "one-quarter of the arm", "equal to the legs", "This is a common proportion guide."],
        ],
      },
      {
        week: 2,
        title: "Still-life drawing",
        subtopics: ["Meaning of still life", "Selecting and arranging objects", "Stages of still-life drawing", "Evaluating a still-life drawing"],
        objectives: ["Explain still-life drawing", "Arrange objects for a still-life composition", "Draw a still life in stages", "Evaluate a still-life drawing"],
        lesson: {
          title: "Drawing Objects at Rest",
          summary: "Compose and draw a still-life group.",
          minutes: 45,
          notes: `## Meaning
**Still life** is the drawing or painting of **non-living objects** that do not move, arranged in a group — such as fruits, bottles, pots, books, calabashes, cups and cloth.

## Selecting and arranging objects
- choose objects of **different sizes, shapes and textures**
- use an **odd number** of objects (3 or 5) for interest
- **overlap** some objects to show depth
- place a **drapery** (cloth) for background and texture
- arrange objects at different heights
- use a single **light source** to create clear shadows
- avoid placing the main object exactly in the centre

## Stages of still-life drawing
1. **observe** the group carefully from your position
2. use **light guidelines** to plan the composition on the paper — use most of the space
3. **block in** the basic shapes (cylinders, spheres, cubes)
4. **measure** proportions using the pencil at arm's length (**sighting**)
5. **refine outlines**; correct shapes and ellipses (e.g. the tops of bottles and cups are **ellipses**)
6. **shade** to show light, shadow, form and texture
7. add **cast shadows** and background tones
8. check and finish

## Evaluating
- is the **composition** well placed on the page?
- are the **proportions** correct?
- are the **shapes** accurate (ellipses, symmetry)?
- does shading show **form and light direction** consistently?
- are **textures** suggested (smooth bottle, rough calabash)?`,
          examples: `**Example 1.** Name three objects suitable for still life. *Answer:* **bottle, orange, calabash**.

**Example 2.** Why use an odd number of objects? *Answer:* It makes the arrangement **more interesting**.

**Example 3.** What shape is the top of a cup seen from an angle? *Answer:* an **ellipse**.`,
        },
        questions: [
          ["E", "Drawing non-living objects arranged in a group is", "still-life drawing", "figure drawing", "landscape drawing", "portrait drawing", "The objects do not move."],
          ["E", "Which object is suitable for still-life drawing?", "a calabash", "a running dog", "a flying bird", "a moving car", "Still objects are used."],
          ["E", "A cloth used as background in a still-life group is a", "drapery", "canvas only", "palette", "easel", "It adds texture."],
          ["M", "Overlapping some objects in a still-life group helps to show", "depth", "flatness", "motion", "sound", "Overlap shows one is in front."],
          ["M", "The top of a cup seen from an angle appears as an", "ellipse", "square", "triangle", "rectangle", "Circles in perspective look oval."],
          ["M", "Measuring proportions by holding the pencil at arm's length is", "sighting", "hatching", "stippling", "framing", "It compares sizes."],
          ["M", "An odd number of objects is often used in still life to", "make the arrangement interesting", "make it symmetrical", "reduce shading", "avoid drawing", "Odd numbers avoid monotony."],
          ["H", "The first stage of drawing a still life is to", "observe the group carefully", "shade the background", "add cast shadows", "colour it", "Observation guides accuracy."],
          ["H", "Using a single light source in still life helps to", "create clear light and shadow", "remove all shadows", "flatten the objects", "change their colours", "Shadows show form."],
          ["H", "Blocking in basic shapes before details helps the artist to", "get proportions and placement right", "finish faster without accuracy", "avoid drawing", "colour first", "Structure comes before detail."],
        ],
      },
      {
        week: 3,
        title: "Perspective drawing",
        subtopics: ["Meaning of perspective", "Horizon line and vanishing point", "One-point perspective", "Two-point perspective"],
        objectives: ["Explain perspective", "Identify the horizon line and vanishing points", "Draw objects in one-point perspective", "Draw objects in two-point perspective"],
        lesson: {
          title: "Showing Distance on Flat Paper",
          summary: "Use linear perspective to show depth and distance.",
          minutes: 45,
          notes: `## Meaning
**Perspective** is a method of drawing that shows **depth and distance** on a flat surface, making objects look as they do to the eye.

## Rules of perspective
- objects appear **smaller** as they move **further away**
- parallel lines moving away appear to **meet (converge)** at a point
- distant objects appear **higher** on the page (closer to the horizon)
- distant objects appear **less detailed** and **paler** (**aerial/atmospheric perspective**)
- nearer objects **overlap** further ones

## Key terms
- **horizon line (eye level)** — a horizontal line where the sky appears to meet the land; it is at the viewer's **eye level**
- **vanishing point (VP)** — the point on the horizon where parallel lines **converge**
- **orthogonals (converging lines)** — lines drawn to the vanishing point

## One-point perspective
- uses **one vanishing point**
- used when looking **straight at** the front of an object or down a road, railway line or corridor
- the front face of a box is drawn as a true square; its sides go back to the VP
- example: a road narrowing to a point on the horizon, with electric poles getting shorter

## Two-point perspective
- uses **two vanishing points** on the horizon line
- used when looking at an object from a **corner** (angle)
- **vertical lines stay vertical**; horizontal edges go to the left or right VP
- example: a house or a street corner seen from an angle

## Aerial perspective
far-off hills look **bluish, pale and less detailed** because of the atmosphere.`,
          examples: `**Example 1.** Where do parallel lines appear to meet? *Answer:* at the **vanishing point**.

**Example 2.** Looking straight down a railway line uses **one-point perspective**.

**Example 3.** A house viewed from its corner is drawn with **two-point perspective**.`,
        },
        questions: [
          ["E", "A method of drawing that shows depth and distance is", "perspective", "collage", "stippling", "mosaic", "It creates the illusion of space."],
          ["E", "Objects appear smaller as they move", "further away", "closer", "upward only", "to the left", "Distance reduces apparent size."],
          ["E", "The line where the sky appears to meet the land is the", "horizon line", "vanishing line", "contour line", "ledger line", "It is at eye level."],
          ["M", "The point where parallel lines appear to meet is the", "vanishing point", "focal point", "centre point", "starting point", "Lines converge there."],
          ["M", "Looking straight down a straight road uses", "one-point perspective", "two-point perspective", "no perspective", "radial balance", "One vanishing point."],
          ["M", "A building viewed from its corner is drawn in", "two-point perspective", "one-point perspective", "mosaic", "collage", "Two vanishing points are needed."],
          ["M", "Lines drawn towards the vanishing point are called", "orthogonals", "ledger lines", "bar lines", "hatching lines", "They converge at the VP."],
          ["H", "In two-point perspective, vertical lines", "remain vertical", "go to the vanishing points", "become horizontal", "disappear", "Only horizontal edges converge."],
          ["H", "Distant hills appearing pale, bluish and less detailed is", "aerial perspective", "linear perspective only", "radial balance", "chiaroscuro", "The atmosphere affects colour."],
          ["H", "The horizon line in a drawing is always at the", "viewer's eye level", "bottom of the page", "top of the page", "centre of every object", "It changes with viewpoint."],
        ],
      },
      {
        week: 4,
        title: "Painting: media and techniques",
        subtopics: ["Painting media", "Painting tools", "Painting techniques", "Care of painting materials"],
        objectives: ["Identify painting media and their properties", "Identify painting tools", "Apply basic painting techniques", "Care for painting materials"],
        lesson: {
          title: "Working with Paint",
          summary: "Use different painting media and techniques.",
          minutes: 45,
          notes: `## Meaning
**Painting** is the application of **colour (paint)** to a surface such as paper, canvas, wood or walls to create a picture or design.

## Painting media
| Medium | Properties | Thinned with |
|---|---|---|
| **watercolour** | **transparent**; light washes; white of paper shows through | water |
| **poster colour / gouache** | **opaque**; bright, flat colours | water |
| **acrylic** | dries **quickly**; water-resistant when dry | water |
| **oil paint** | slow-drying; rich colours; can be blended for a long time | **turpentine**, linseed oil |
| **natural colours** | from plants, earth, charcoal, kaolin | water or oil |

## Tools
**brushes** (flat, round, fan; different sizes), **palette** (for mixing), **palette knife**, **easel** (stand), **canvas** or cartridge paper, water containers, rags, masking tape, sponges.

## Techniques
| Technique | Description |
|---|---|
| **flat wash** | even layer of thin paint over an area |
| **graded wash** | colour gradually changes from dark to light |
| **wet-on-wet** | applying paint onto a wet surface for soft blending |
| **wet-on-dry** | paint on dry paper for sharp edges |
| **dry brush** | little paint on a dry brush for rough texture |
| **impasto** | thick paint applied in layers to show brush or knife marks |
| **stippling/dabbing** | dots or dabs with brush tip or sponge |
| **glazing** | thin transparent layers over dry paint |

## Stages of painting
sketch lightly → block in large areas and background → build middle tones → add details and highlights → sign and mount.

## Care of materials
wash brushes after use (water for water-based paints, turpentine then soap for oils); dry brushes with bristles up; close paint containers; clean the palette; store canvases flat or upright in a dry place.`,
          examples: `**Example 1.** Which medium is transparent? *Answer:* **watercolour**.

**Example 2.** What is used to thin oil paint? *Answer:* **turpentine** (or linseed oil).

**Example 3.** Applying thick paint to show knife marks is **impasto**.`,
        },
        questions: [
          ["E", "Applying colour to a surface to create a picture is", "painting", "carving", "weaving", "moulding", "Paint is the medium."],
          ["E", "The flat board or tray used for mixing paints is the", "palette", "easel", "canvas", "stage", "Colours are mixed on it."],
          ["E", "The stand that holds a painting while working is the", "easel", "palette", "kiln", "loom", "It supports the canvas."],
          ["M", "A transparent painting medium thinned with water is", "watercolour", "oil paint", "enamel", "crayon", "Light passes through it."],
          ["M", "Oil paint is thinned with", "turpentine", "water only", "milk", "kerosene only", "Turpentine is a solvent."],
          ["M", "An opaque water-based paint giving bright flat colours is", "poster colour", "watercolour", "oil paint", "charcoal", "It covers the surface."],
          ["M", "A layer of colour that changes gradually from dark to light is a", "graded wash", "flat wash", "impasto", "stipple", "It shows gradation."],
          ["H", "Applying paint onto a wet surface for soft blending is", "wet-on-wet", "dry brush", "impasto", "glazing", "Colours bleed softly."],
          ["H", "Thick paint applied to show brush or knife marks is", "impasto", "glazing", "wash", "stippling", "The paint stands out."],
          ["H", "A water-based paint that dries quickly and becomes water-resistant is", "acrylic", "watercolour", "gouache", "oil paint", "Acrylic is a polymer paint."],
        ],
      },
      {
        week: 5,
        title: "Lettering and poster design",
        subtopics: ["Types of lettering", "Rules of good lettering", "Poster design", "Steps in making a poster"],
        objectives: ["Identify types of lettering", "Apply the rules of good lettering", "State the qualities of a good poster", "Design a simple poster"],
        lesson: {
          title: "Words that Communicate",
          summary: "Use good lettering to design effective posters.",
          minutes: 45,
          notes: `## Lettering
**Lettering** is the art of **drawing or designing letters** for signs, posters, book covers, labels and certificates.

## Types of lettering
| Type | Description |
|---|---|
| **block letters (sans serif)** | plain letters of even thickness **without small strokes (serifs)** at the ends |
| **serif letters (Roman)** | letters with **small strokes (serifs)** at the ends of main lines |
| **italic** | letters that **slant** to the right |
| **script** | joined letters like handwriting |
| **decorative** | ornamental letters for special effects |
Letters may be **upper case (capitals)** or **lower case (small letters)**.

## Rules of good lettering
- **legibility** — letters must be easy to read
- **uniform height and thickness** within a word
- correct and even **spacing** between letters and words (**optical spacing**)
- use **guidelines** (top, bottom, and middle lines)
- suitable **size** for distance of viewing
- **consistent** style in one design
- good **colour contrast** with the background

## Poster design
A **poster** is a large printed or painted notice that **gives information or persuades** people (e.g. adverts, health campaigns, events).
Qualities of a good poster:
- short, **clear message** (few words)
- **bold headline** readable from a distance
- relevant **illustration**
- **eye-catching colours** with good contrast
- balanced **layout** and focal point
- includes essential details: what, where, when, contact

## Steps in making a poster
1. decide the purpose, message and audience
2. make **thumbnail sketches** (small rough layouts)
3. choose the best layout; enlarge it
4. draw guidelines; letter the headline and text
5. draw the illustration
6. colour boldly
7. check spelling and neatness`,
          examples: `**Example 1.** What are serifs? *Answer:* **small strokes** at the ends of letters.

**Example 2.** Give one quality of a good poster. *Answer:* a **short, clear message**.

**Example 3.** What are thumbnail sketches? *Answer:* **small rough layouts** used to plan a design.`,
        },
        questions: [
          ["E", "The art of drawing or designing letters is", "lettering", "weaving", "carving", "moulding", "It is used on signs and posters."],
          ["E", "A large notice that gives information or persuades people is a", "poster", "palette", "mosaic", "kiln", "It is displayed publicly."],
          ["E", "Capital letters are also called", "upper case", "lower case", "italic only", "script", "They are the large letters."],
          ["M", "Plain letters without small end strokes are", "sans serif (block) letters", "serif letters", "script letters", "decorative letters", "Sans means without."],
          ["M", "Small strokes at the ends of the main lines of letters are", "serifs", "stems", "guidelines", "ellipses", "Roman letters have serifs."],
          ["M", "Letters that slant to the right are", "italic letters", "block letters", "upper case letters only", "Roman capitals", "Italic letters slope."],
          ["M", "The most important rule of good lettering is", "legibility", "decoration only", "tiny size", "random spacing", "Text must be readable."],
          ["H", "Small rough layouts used to plan a design are", "thumbnail sketches", "final drawings", "stencils", "guidelines only", "They compare ideas quickly."],
          ["H", "Adjusting spaces between letters so they look even to the eye is", "optical spacing", "mechanical spacing only", "kerning of pictures", "blending", "Some letters need less space."],
          ["H", "A good poster should have", "a short, clear message and bold headline", "many long paragraphs", "tiny letters", "no illustration or colour", "Posters are read quickly."],
        ],
      },
      {
        week: 6,
        title: "Pottery and clay work",
        subtopics: ["Clay and its preparation", "Methods of forming pots", "Decoration and drying", "Firing and glazing"],
        objectives: ["Describe clay and how it is prepared", "Form pots by pinch, coil and slab methods", "Decorate and dry clay work", "Explain firing and glazing"],
        lesson: {
          title: "Shaping Clay",
          summary: "Prepare clay and form, decorate and fire simple pots.",
          minutes: 45,
          notes: `## Clay
**Clay** is a fine, soft earth that is **plastic** (can be shaped) when wet and becomes **hard** when fired. **Pottery (ceramics)** is the art of making objects from clay.

## Preparing clay
1. **dig** and collect clay
2. **soak** in water to soften (slaking)
3. **sieve** to remove stones, roots and dirt
4. allow excess water to evaporate until workable
5. **wedge** (knead) the clay to **remove air bubbles** and make it even — air bubbles can cause pots to **burst** during firing

## Methods of forming pots
| Method | Description |
|---|---|
| **pinching** | pushing the thumb into a ball of clay and pinching the walls outwards |
| **coiling** | rolling clay into long **ropes (coils)**, building them up in rings and smoothing them |
| **slab** | cutting **flat sheets** of clay and joining them to make boxes and tiles |
| **throwing** | shaping on a spinning **potter's wheel** |
| **moulding** | pressing clay into or over a **mould** |
Clay pieces are joined by **scoring** (scratching) and using **slip** (liquid clay) as glue.

## Decoration
incising (cutting lines), impressing (stamping), **burnishing** (polishing with a smooth stone), applied relief, painting with **slip**, piercing.

## Drying stages
**greenware** (unfired) → **leather-hard** (firm but damp; best for carving) → **bone-dry** (completely dry, ready for firing). Dry slowly in the shade to prevent cracking.

## Firing and glazing
- **firing** is heating clay to a high temperature in a **kiln** or open fire to make it hard and permanent
- the first firing gives **biscuit (bisque) ware**
- **glaze** is a glassy coating that makes pottery **waterproof** and decorative; fired again (glaze firing)
- traditional Nigerian potters often use **open (bonfire) firing**

## Nigerian pottery
famous centres include **Ilorin, Abuja (Dr Ladi Kwali), Okigwe, Ikot Ekpene**; **Ladi Kwali** was a renowned Nigerian potter whose image appears on the ₦20 note.`,
          examples: `**Example 1.** Why is clay wedged? *Answer:* To **remove air bubbles** that could make the pot burst in firing.

**Example 2.** Which method builds a pot with ropes of clay? *Answer:* the **coil** method.

**Example 3.** What is biscuit ware? *Answer:* clay ware after its **first firing**.`,
        },
        questions: [
          ["E", "The art of making objects from clay is", "pottery", "weaving", "lettering", "painting", "It is also called ceramics."],
          ["E", "The oven used to fire pottery is a", "kiln", "loom", "easel", "palette", "Kilns reach high temperatures."],
          ["E", "Pushing the thumb into a ball of clay to shape a pot is the", "pinch method", "coil method", "slab method", "throwing method", "The walls are pinched."],
          ["M", "Building a pot with long ropes of clay is the", "coil method", "pinch method", "slab method", "mould method", "Coils are stacked."],
          ["M", "Kneading clay to remove air bubbles is", "wedging", "glazing", "firing", "burnishing", "Air can make pots burst."],
          ["M", "Liquid clay used to join pieces of clay is", "slip", "glaze", "wax", "grog", "It acts as glue."],
          ["M", "Shaping clay on a spinning wheel is", "throwing", "coiling", "pinching", "slabbing", "The potter's wheel spins."],
          ["H", "Clay that is firm but still damp and best for carving is", "leather-hard", "bone-dry", "biscuit ware", "glazed ware", "It holds shape but can be cut."],
          ["H", "A glassy coating that makes pottery waterproof is", "glaze", "slip", "wedge", "grog", "It is fired onto the pot."],
          ["H", "The renowned Nigerian potter whose image appears on the ₦20 note is", "Ladi Kwali", "Ben Enwonwu", "Bruce Onobrakpeya", "Uche Okeke", "She worked at Abuja pottery."],
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
        title: "Sharps, flats and key signatures",
        subtopics: ["Accidentals", "The keyboard and semitones", "Key signatures of G major and F major", "Writing major scales"],
        objectives: ["Explain sharps, flats and naturals", "Locate tones and semitones on the keyboard", "Identify the key signatures of G major and F major", "Write the scales of G major and F major"],
        lesson: {
          title: "Changing the Pitch of Notes",
          summary: "Use accidentals and key signatures to write major scales.",
          minutes: 45,
          notes: `## Accidentals
| Sign | Name | Effect |
|---|---|---|
| ♯ | **sharp** | **raises** a note by a **semitone** |
| ♭ | **flat** | **lowers** a note by a **semitone** |
| ♮ | **natural** | **cancels** a sharp or flat |
An accidental written in a bar affects that note **until the end of the bar**.

## The keyboard
- the **white keys** are named A–G
- the **black keys** are sharps or flats of neighbouring white keys (e.g. the black key between C and D is **C♯ or D♭**)
- from one key to the very next key (white or black) is a **semitone**
- **E–F** and **B–C** are semitones with **no black key** between them

## Key signature
A **key signature** is the group of **sharps or flats** written at the **beginning of each staff** (after the clef) to show the **key** of the music. It saves writing accidentals every time.

## G major
- pattern T T S T T T S starting on G requires **F♯**
- scale: **G A B C D E F♯ G**
- key signature: **one sharp (F♯)**

## F major
- starting on F, the pattern requires **B♭**
- scale: **F G A B♭ C D E F**
- key signature: **one flat (B♭)**

## D major
- **D E F♯ G A B C♯ D**
- key signature: **two sharps (F♯, C♯)**

## Writing a major scale
1. write the notes from the tonic to its octave
2. mark the pattern T T S T T T S
3. add sharps or flats where needed to fit the pattern
4. check semitones fall between 3–4 and 7–8`,
          examples: `**Example 1.** What does a flat do? *Answer:* It **lowers** a note by a **semitone**.

**Example 2.** What is the key signature of G major? *Answer:* **one sharp, F♯**.

**Example 3.** Write the F major scale. *Answer:* **F G A B♭ C D E F**.`,
        },
        questions: [
          ["E", "A sign that raises a note by a semitone is a", "sharp", "flat", "natural", "rest", "Sharps raise pitch."],
          ["E", "A sign that lowers a note by a semitone is a", "flat", "sharp", "natural", "clef", "Flats lower pitch."],
          ["E", "A sign that cancels a sharp or flat is a", "natural", "tie", "dot", "slur", "It restores the note."],
          ["M", "The key signature of G major is", "one sharp (F sharp)", "one flat (B flat)", "two sharps", "no sharps or flats", "G major needs F sharp."],
          ["M", "The key signature of F major is", "one flat (B flat)", "one sharp", "two flats", "no sharps or flats", "F major needs B flat."],
          ["M", "The scale of G major is", "G A B C D E F sharp G", "G A B flat C D E F G", "G A B C D E F G", "G A sharp B C D E F G", "The seventh is F sharp."],
          ["M", "On the keyboard, there is no black key between", "E and F", "C and D", "F and G", "G and A", "E–F is a semitone."],
          ["H", "The key signature of D major is", "two sharps (F sharp and C sharp)", "one sharp", "two flats", "three sharps", "D major needs F sharp and C sharp."],
          ["H", "An accidental written in a bar affects that note", "until the end of the bar", "for the whole piece", "for one beat only", "only in the next bar", "Bar lines cancel accidentals."],
          ["H", "The black key between C and D can be called", "C sharp or D flat", "C flat or D sharp", "B sharp", "E flat", "Enharmonic names."],
        ],
      },
      {
        week: 2,
        title: "Intervals",
        subtopics: ["Meaning of intervals", "Naming intervals by number", "Melodic and harmonic intervals", "Intervals in the major scale"],
        objectives: ["Define an interval", "Name intervals by counting", "Distinguish melodic and harmonic intervals", "Identify intervals from the tonic in a major scale"],
        lesson: {
          title: "The Distance Between Notes",
          summary: "Name and identify intervals.",
          minutes: 40,
          notes: `## Meaning
An **interval** is the **distance in pitch between two notes**.

## Naming intervals by number
Count **both notes** and all the letter names between them (count inclusively):
| From C to | Letters counted | Interval |
|---|---|---|
| C | C | **unison (1st)** |
| D | C D | **2nd** |
| E | C D E | **3rd** |
| F | C D E F | **4th** |
| G | C D E F G | **5th** |
| A | C … A | **6th** |
| B | C … B | **7th** |
| C' | C … C' | **octave (8th)** |

## Quality of intervals from the tonic in a major scale
- **major**: 2nd, 3rd, 6th, 7th
- **perfect**: unison, 4th, 5th, octave
Examples in C major: C–E = **major 3rd**; C–G = **perfect 5th**; C–F = **perfect 4th**; C–C' = **perfect octave**.
Counting semitones: major 3rd = **4 semitones**; perfect 5th = **7 semitones**; perfect octave = **12 semitones**.

## Melodic and harmonic intervals
- **melodic interval** — notes sounded **one after the other**
- **harmonic interval** — notes sounded **together**

## Hearing intervals
simple song openings can help remember intervals; e.g. "doh–me" is a major 3rd, "doh–soh" is a perfect 5th.`,
          examples: `**Example 1.** What interval is C to G? *Answer:* a **perfect 5th**.

**Example 2.** What is a harmonic interval? *Answer:* two notes sounded **together**.

**Example 3.** How many semitones are in a major 3rd? *Answer:* **four**.`,
        },
        questions: [
          ["E", "The distance in pitch between two notes is an", "interval", "octave only", "bar", "rest", "Intervals measure pitch distance."],
          ["E", "The interval from C to E is a", "3rd", "2nd", "4th", "5th", "C D E gives three letters."],
          ["E", "The interval from C to the next C above is an", "octave", "unison", "7th", "6th", "It covers eight notes."],
          ["M", "The interval from C to G is a", "perfect 5th", "major 3rd", "perfect 4th", "major 6th", "C D E F G counts five."],
          ["M", "Two notes sounded one after the other form a", "melodic interval", "harmonic interval", "chord", "tie", "They are heard in sequence."],
          ["M", "Two notes sounded together form a", "harmonic interval", "melodic interval", "rest", "scale", "They sound simultaneously."],
          ["M", "The interval from C to F is a", "perfect 4th", "major 3rd", "perfect 5th", "major 2nd", "C D E F counts four."],
          ["H", "The number of semitones in a major 3rd is", "four", "three", "five", "seven", "C to E has four semitones."],
          ["H", "The number of semitones in a perfect 5th is", "seven", "five", "eight", "four", "C to G is seven semitones."],
          ["H", "In sol-fa, doh to soh is a", "perfect 5th", "major 3rd", "perfect 4th", "octave", "Soh is the fifth degree."],
        ],
      },
      {
        week: 3,
        title: "Musical terms: tempo and dynamics",
        subtopics: ["Tempo markings", "Changes of tempo", "Dynamic markings", "Other expression marks"],
        objectives: ["Interpret tempo markings", "Explain terms for changes of tempo", "Interpret dynamic markings", "Identify other expression marks"],
        lesson: {
          title: "Speed and Loudness in Music",
          summary: "Interpret Italian terms for tempo, dynamics and expression.",
          minutes: 40,
          notes: `## Tempo markings
Most musical terms are in **Italian**.
| Term | Meaning |
|---|---|
| **largo** | very slow and broad |
| **adagio** | slow |
| **andante** | at a **walking pace** |
| **moderato** | at a moderate speed |
| **allegro** | fast and lively |
| **presto** | very fast |
Tempo can also be shown by a **metronome mark**, e.g. crotchet = 60 (60 beats per minute).

## Changes of tempo
- **accelerando (accel.)** — gradually getting **faster**
- **ritardando (rit.)** / **rallentando (rall.)** — gradually getting **slower**
- **a tempo** — return to the original speed
- **fermata (pause)** — hold the note longer than its value

## Dynamic markings
| Sign | Term | Meaning |
|---|---|---|
| pp | pianissimo | very soft |
| p | piano | soft |
| mp | mezzo piano | moderately soft |
| mf | mezzo forte | moderately loud |
| f | forte | loud |
| ff | fortissimo | very loud |
- **crescendo (cresc.)** — gradually getting **louder** (hairpin opening)
- **diminuendo (dim.)** / **decrescendo** — gradually getting **softer** (hairpin closing)

## Other expression marks
- **staccato** — short and detached (dot above or below the note)
- **legato** — smooth and connected
- **slur** — curved line over **different** notes meaning play smoothly (legato)
- **accent** — emphasise the note
- **D.C. (da capo)** — go back to the beginning
- **fine** — the end
- **repeat signs** — play the section again`,
          examples: `**Example 1.** What does *andante* mean? *Answer:* at a **walking pace**.

**Example 2.** What does *ff* mean? *Answer:* **fortissimo** — very loud.

**Example 3.** What does *rallentando* mean? *Answer:* gradually getting **slower**.`,
        },
        questions: [
          ["E", "Most musical terms are written in", "Italian", "Hausa", "Chinese", "Arabic", "Italian is the traditional language of music terms."],
          ["E", "The term 'forte' means", "loud", "soft", "fast", "slow", "f stands for forte."],
          ["E", "The term 'piano' as a dynamic means", "soft", "loud", "fast", "very slow", "p stands for piano."],
          ["M", "The term 'andante' means", "at a walking pace", "very fast", "very slow", "gradually louder", "It is a moderate walking speed."],
          ["M", "The term 'allegro' means", "fast and lively", "very slow", "soft", "at a walking pace", "It is a quick tempo."],
          ["M", "Gradually getting louder is", "crescendo", "diminuendo", "ritardando", "staccato", "The hairpin opens."],
          ["M", "Gradually getting slower is", "rallentando", "accelerando", "crescendo", "presto", "Also ritardando."],
          ["H", "Notes played short and detached are marked", "staccato", "legato", "fermata", "tenuto only", "A dot is placed on the note."],
          ["H", "'D.C.' in music means", "go back to the beginning", "gradually louder", "very fast", "the end", "Da capo means from the head."],
          ["H", "The dynamic 'mp' means", "moderately soft", "moderately loud", "very soft", "very loud", "mp stands for mezzo piano."],
        ],
      },
      {
        week: 4,
        title: "Nigerian traditional music",
        subtopics: ["Features of Nigerian traditional music", "Types of traditional songs", "Traditional music ensembles", "Preserving traditional music"],
        objectives: ["Describe the features of Nigerian traditional music", "Classify types of traditional songs", "Describe traditional music ensembles", "Suggest ways of preserving traditional music"],
        lesson: {
          title: "The Music of Our Communities",
          summary: "Describe the features and types of Nigerian traditional music.",
          minutes: 40,
          notes: `## Features of Nigerian traditional music
- closely linked to **daily life** and occasions (functional music)
- **call and response** — a leader sings a line, the chorus answers
- strong **rhythm** and **polyrhythm** (several rhythms played together)
- **tonal languages** affect melodies; talking drums imitate speech
- music, **dance, drama and costume** are combined
- learned **orally** by listening and imitation, not usually written
- **improvisation** by lead singers and drummers
- use of local instruments (drums, gongs, rattles, flutes, fiddles)

## Types of traditional songs
| Type | Occasion or purpose |
|---|---|
| **lullabies** | calming babies to sleep |
| **work songs** | farming, pounding, rowing |
| **praise songs** | honouring kings, chiefs, heroes |
| **dirges** | mourning at funerals |
| **war songs** | encouraging warriors |
| **ritual/religious songs** | worship and festivals |
| **satirical songs** | criticising bad behaviour |
| **moonlight/folk songs** | storytelling and play |
| **wedding and naming songs** | celebrations |
| **cradle and children's game songs** | play |

## Traditional ensembles
- **dundun ensemble** (Yoruba) — talking drums of different sizes
- **bata ensemble** (Yoruba)
- **ogene and ekwe groups** (Igbo)
- **royal music** of emirs with **kakaki** trumpets and drums (Hausa)
- **goje and molo** music (Hausa)
- **atilogwu** dance ensemble (Igbo)

## Preserving traditional music
record and archive; teach it in schools; perform at festivals; support traditional musicians; broadcast on radio and TV; blend with modern styles; document in books.`,
          examples: `**Example 1.** A song sung at a funeral is a **dirge**.

**Example 2.** What is call and response? *Answer:* A leader sings and a **chorus answers**.

**Example 3.** Give one way to preserve traditional music. *Answer:* **recording and archiving** it.`,
        },
        questions: [
          ["E", "A song sung to calm a baby to sleep is a", "lullaby", "dirge", "war song", "praise song", "It soothes children."],
          ["E", "A song sung to mourn the dead is a", "dirge", "lullaby", "wedding song", "work song", "It expresses grief."],
          ["E", "Songs sung while farming or pounding are", "work songs", "dirges", "lullabies", "anthems", "They ease labour."],
          ["M", "A leader singing a line and a chorus answering is", "call and response", "harmony only", "solo singing", "improvisation only", "It is common in African music."],
          ["M", "Songs that honour kings and heroes are", "praise songs", "lullabies", "dirges", "cradle songs", "They celebrate greatness."],
          ["M", "Songs that criticise bad behaviour in society are", "satirical songs", "lullabies", "praise songs", "dirges", "They correct through mockery."],
          ["M", "Several different rhythms played together is", "polyrhythm", "monophony", "unison", "tempo", "Poly means many."],
          ["H", "Nigerian traditional music is mostly learned", "orally by listening and imitation", "only from printed scores", "only in universities", "through written exams", "It is passed down orally."],
          ["H", "Music that is closely linked to occasions and daily activities is described as", "functional", "abstract", "purely commercial", "silent", "It serves specific purposes."],
          ["H", "One way of preserving Nigerian traditional music is to", "record and archive it", "ban its performance", "forget it", "replace it entirely with foreign music", "Recordings keep it alive."],
        ],
      },
      {
        week: 5,
        title: "Western musical instruments and the orchestra",
        subtopics: ["The orchestra", "String and woodwind families", "Brass and percussion families", "Keyboard instruments"],
        objectives: ["Describe the orchestra", "Identify string and woodwind instruments", "Identify brass and percussion instruments", "Identify keyboard instruments"],
        lesson: {
          title: "Families of the Orchestra",
          summary: "Classify Western instruments into orchestral families.",
          minutes: 40,
          notes: `## The orchestra
An **orchestra** is a large group of instrumentalists playing together, led by a **conductor** who uses a **baton** to show tempo, entries and expression. A **symphony orchestra** has four main families.

## String family
sound from **vibrating strings**, played with a **bow** or plucked (**pizzicato**):
**violin** (smallest, highest), **viola**, **cello (violoncello)**, **double bass** (largest, lowest); also **harp** and **guitar**.

## Woodwind family
sound by **blowing air** across a hole or through a **reed**:
**flute** and **piccolo** (no reed), **clarinet** (single reed), **oboe** and **bassoon** (double reed), **saxophone** (single reed, used in bands).

## Brass family
sound by **buzzing the lips** into a cup-shaped **mouthpiece**:
**trumpet** (highest), **French horn**, **trombone** (uses a **slide**), **tuba** (lowest).

## Percussion family
sound by **striking, shaking or scraping**:
- **tuned (pitched)**: **timpani (kettle drums)**, **xylophone**, glockenspiel
- **untuned**: **snare drum**, **bass drum**, **cymbals**, triangle, tambourine

## Keyboard instruments
**piano** (hammers strike strings), **organ** (air through pipes or electronic), **electronic keyboard/synthesiser**. The piano has **88 keys**.

## Seating
strings sit at the **front**, woodwind in the middle, brass and percussion at the **back**, facing the conductor.`,
          examples: `**Example 1.** Which family does the trumpet belong to? *Answer:* **brass**.

**Example 2.** Which is the largest and lowest string instrument? *Answer:* the **double bass**.

**Example 3.** Who leads an orchestra? *Answer:* the **conductor**.`,
        },
        questions: [
          ["E", "A large group of instrumentalists playing together is an", "orchestra", "audience", "choir only", "ensemble of dancers", "It has instrument families."],
          ["E", "The person who leads an orchestra is the", "conductor", "composer only", "soloist", "usher", "He uses a baton."],
          ["E", "The violin belongs to the", "string family", "brass family", "woodwind family", "percussion family", "It has strings played with a bow."],
          ["M", "The trumpet belongs to the", "brass family", "woodwind family", "string family", "percussion family", "Lips buzz into a mouthpiece."],
          ["M", "The flute belongs to the", "woodwind family", "brass family", "string family", "percussion family", "Air is blown across a hole."],
          ["M", "The instrument in the brass family that uses a slide is the", "trombone", "trumpet", "tuba", "French horn", "The slide changes pitch."],
          ["M", "The largest and lowest string instrument is the", "double bass", "violin", "viola", "cello", "It is played standing."],
          ["H", "Kettle drums that can be tuned to definite pitches are", "timpani", "snare drums", "cymbals", "triangles", "They are pitched percussion."],
          ["H", "The oboe and bassoon produce sound using a", "double reed", "single reed", "cup mouthpiece", "string", "Two reeds vibrate together."],
          ["H", "Plucking the strings of a violin instead of bowing is called", "pizzicato", "staccato", "legato", "crescendo", "It is a plucking technique."],
        ],
      },
      {
        week: 6,
        title: "Singing and voice classification",
        subtopics: ["The singing voice", "Voice classification", "Good singing habits", "Part-singing and choirs"],
        objectives: ["Describe the singing voice", "Classify voices into soprano, alto, tenor and bass", "Apply good singing habits", "Sing simple part songs"],
        lesson: {
          title: "Using the Voice as an Instrument",
          summary: "Classify voices and practise good singing habits.",
          minutes: 40,
          notes: `## The singing voice
The voice is produced when air from the **lungs** passes through the **vocal cords (folds)** in the **larynx**, making them vibrate. The sound is shaped by the throat, mouth and nose (**resonators**).

## Voice classification
| Voice | Range | Usually |
|---|---|---|
| **soprano** | **highest** female voice | women and girls |
| **alto (contralto)** | **lower** female voice | women and girls |
| **tenor** | **higher** male voice | men |
| **bass** | **lowest** male voice | men |
Middle voices: **mezzo-soprano** (between soprano and alto) and **baritone** (between tenor and bass).
Boys' voices **break (change)** during **puberty** and become deeper.

## Good singing habits
- correct **posture**: stand or sit upright, shoulders relaxed, feet apart
- **breathing** from the diaphragm (deep, controlled breaths)
- **warm up** the voice with humming and scales
- clear **diction** (pronounce words clearly)
- open the mouth well; relax the jaw
- sing in tune (**intonation**); listen to others
- avoid shouting, cold drinks before singing and straining the voice
- drink water; rest the voice when tired

## Part-singing and choirs
- a **choir** is a group of singers
- a **four-part choir** has **SATB** — **soprano, alto, tenor, bass**
- **unison** — everyone sings the **same melody**
- **part-singing** — different groups sing **different parts** at the same time, producing harmony
- **a cappella** — singing **without instrumental accompaniment**
- the choir is led by a **choir director (choirmaster)**; the soloist sings alone`,
          examples: `**Example 1.** What is the highest female voice? *Answer:* **soprano**.

**Example 2.** What does SATB stand for? *Answer:* **soprano, alto, tenor, bass**.

**Example 3.** What is a cappella singing? *Answer:* singing **without instruments**.`,
        },
        questions: [
          ["E", "The highest female voice is the", "soprano", "alto", "tenor", "bass", "Sopranos sing high parts."],
          ["E", "The lowest male voice is the", "bass", "tenor", "alto", "soprano", "Bass sings the lowest part."],
          ["E", "A group of singers is a", "choir", "orchestra", "band of drummers only", "cast", "Choirs sing together."],
          ["M", "The lower female voice is the", "alto", "soprano", "tenor", "baritone", "Alto is below soprano."],
          ["M", "The higher male voice is the", "tenor", "bass", "alto", "soprano", "Tenor is above bass."],
          ["M", "SATB stands for", "soprano, alto, tenor, bass", "solo, alto, treble, baritone", "song, air, tune, beat", "soprano, air, tenor, band", "The four choir parts."],
          ["M", "Everyone singing the same melody is singing in", "unison", "harmony", "canon", "parts", "One tune for all."],
          ["H", "Singing without instrumental accompaniment is", "a cappella", "pizzicato", "staccato", "accelerando", "Only voices are heard."],
          ["H", "The voice between tenor and bass is the", "baritone", "mezzo-soprano", "alto", "soprano", "It is a middle male voice."],
          ["H", "Singing sound is produced when air vibrates the", "vocal cords in the larynx", "eardrums", "lungs directly", "teeth", "Vocal folds vibrate."],
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
        title: "The theatre and the stage",
        subtopics: ["Meaning of theatre", "Types of stages", "Parts of a theatre", "Theatre personnel"],
        objectives: ["Explain the theatre", "Distinguish types of stages", "Identify the parts of a theatre building", "State the roles of theatre personnel"],
        lesson: {
          title: "Where Plays Are Performed",
          summary: "Identify stage types, theatre parts and personnel.",
          minutes: 40,
          notes: `## Meaning
**Theatre** is both the **art of live performance** before an audience and the **building or space** where performances take place.

## Types of stages
| Stage | Description |
|---|---|
| **proscenium (picture-frame) stage** | audience sits on **one side**, looking through a frame (the **proscenium arch**) |
| **thrust stage** | stage extends into the audience, which sits on **three sides** |
| **arena stage (theatre-in-the-round)** | audience surrounds the stage on **all sides** |
| **traverse stage** | audience sits on **two opposite sides** |
| **open-air / traditional stage** | village squares, compounds, market places — common in African traditional performance |

## Parts of a theatre
- **stage** — where actors perform
- **auditorium** — where the audience sits
- **apron** — part of the stage in front of the curtain
- **wings** — sides of the stage hidden from the audience
- **backstage** — area behind the stage
- **green room** — where actors wait and relax
- **dressing rooms** — for costume and make-up
- **box office** — where tickets are sold
- **lighting and sound control booth**
- **curtain (tabs)**

## Theatre personnel
| Person | Role |
|---|---|
| **playwright** | writes the play |
| **director** | interprets the script and guides actors |
| **producer** | provides money and manages business |
| **actors** | perform the roles |
| **stage manager** | runs rehearsals and the performance backstage |
| **designers** | set, costume, lighting, make-up, sound |
| **choreographer** | designs dances |
| **front-of-house staff** | ushers, box office |`,
          examples: `**Example 1.** On which stage does the audience sit on all sides? *Answer:* the **arena stage** (theatre-in-the-round).

**Example 2.** Where do actors wait before going on stage? *Answer:* the **green room**.

**Example 3.** Who interprets the script and guides actors? *Answer:* the **director**.`,
        },
        questions: [
          ["E", "The place where the audience sits in a theatre is the", "auditorium", "stage", "green room", "wings", "It holds spectators."],
          ["E", "The person who writes a play is the", "playwright", "director", "producer", "usher", "Playwrights create scripts."],
          ["E", "The area where actors perform is the", "stage", "auditorium", "box office", "lobby", "Performances happen there."],
          ["M", "A stage where the audience sits on one side, looking through a frame, is a", "proscenium stage", "arena stage", "thrust stage", "traverse stage", "It has a picture frame."],
          ["M", "A stage where the audience sits on all sides is the", "arena stage", "proscenium stage", "thrust stage", "apron", "It is theatre-in-the-round."],
          ["M", "A stage where the audience sits on three sides is the", "thrust stage", "proscenium stage", "arena stage", "traverse stage", "It thrusts into the audience."],
          ["M", "The room where actors wait and relax before going on stage is the", "green room", "box office", "auditorium", "apron", "It is backstage."],
          ["H", "The person who interprets the script and guides the actors is the", "director", "producer", "usher", "box office clerk", "Directors shape the performance."],
          ["H", "The person who provides money and manages the business of a production is the", "producer", "director", "playwright", "stage hand", "Producers finance shows."],
          ["H", "The sides of a stage hidden from the audience are the", "wings", "apron", "auditorium", "aisles", "Actors enter from the wings."],
        ],
      },
      {
        week: 2,
        title: "Stage directions and acting",
        subtopics: ["Areas of the stage", "Stage directions", "Basic acting skills", "Rehearsals"],
        objectives: ["Name the areas of the stage", "Interpret stage directions", "Demonstrate basic acting skills", "Describe the stages of rehearsal"],
        lesson: {
          title: "Moving and Acting on Stage",
          summary: "Use stage directions and basic acting skills.",
          minutes: 45,
          notes: `## Areas of the stage
Directions are given from the **actor's point of view facing the audience**.
- **upstage** — the part of the stage **furthest from the audience**
- **downstage** — the part **nearest to the audience**
- **stage right** — the **actor's right** (the audience's left)
- **stage left** — the **actor's left** (the audience's right)
- **centre stage** — the middle
The stage is often divided into **nine areas**: upstage right, upstage centre, upstage left, centre right, centre, centre left, downstage right, downstage centre, downstage left.
(The terms come from old **raked** stages that sloped up away from the audience.)

## Stage directions
**Stage directions** are instructions in a script (usually in brackets or italics) telling actors **where to move and how to act**, e.g. *(enters from stage left, angrily)*.
- **cross** — move from one place to another
- **exit** — leave the stage; **exeunt** — several leave
- **blocking** — planning the movements and positions of actors

## Basic acting skills
- **voice**: audibility (**projection**), clarity (**diction**), pace, pitch, tone
- **body/movement**: posture, gestures, facial expressions
- **characterisation**: believing and becoming the character
- **concentration** and staying in character
- **improvisation**
- **cheating out** — turning partly towards the audience so they can see and hear
- **never turning your back** on the audience without reason
- **listening and reacting** to other actors

## Rehearsals
1. **reading rehearsal** — reading the script together
2. **blocking rehearsal** — fixing movements
3. **working rehearsals** — polishing scenes
4. **technical rehearsal** — lights, sound, set
5. **dress rehearsal** — full run with costumes and make-up, as in performance`,
          examples: `**Example 1.** Which part of the stage is nearest the audience? *Answer:* **downstage**.

**Example 2.** Stage right is on whose right? *Answer:* the **actor's right** when facing the audience.

**Example 3.** What is the final rehearsal with costumes called? *Answer:* the **dress rehearsal**.`,
        },
        questions: [
          ["E", "The part of the stage nearest to the audience is", "downstage", "upstage", "backstage", "offstage", "It is close to the audience."],
          ["E", "The part of the stage furthest from the audience is", "upstage", "downstage", "apron", "auditorium", "It is at the back."],
          ["E", "Leaving the stage is called", "exit", "entrance", "cross", "cue", "The actor goes off."],
          ["M", "Stage right is on the", "actor's right when facing the audience", "audience's right", "director's left always", "centre of the stage", "Directions are from the actor's view."],
          ["M", "Planning the movements and positions of actors on stage is", "blocking", "casting", "lighting", "costuming", "It sets where actors go."],
          ["M", "Speaking loudly enough for the audience to hear is", "projection", "diction", "blocking", "exit", "The voice carries."],
          ["M", "Pronouncing words clearly is", "diction", "projection", "gesture", "posture", "Diction means clear speech."],
          ["H", "The final rehearsal with full costumes and make-up is the", "dress rehearsal", "reading rehearsal", "blocking rehearsal", "audition", "It is like the real show."],
          ["H", "Turning the body partly toward the audience while talking to another actor is", "cheating out", "upstaging", "blocking out", "exiting", "The audience can see and hear."],
          ["H", "The stage direction 'exeunt' means", "several characters leave the stage", "one character enters", "lights go off", "music begins", "It is the plural of exit."],
        ],
      },
      {
        week: 3,
        title: "Technical theatre",
        subtopics: ["Costume", "Make-up", "Props and scenery", "Lighting and sound"],
        objectives: ["Explain the role of costume in drama", "Describe types and uses of stage make-up", "Distinguish props and scenery", "Describe the functions of lighting and sound"],
        lesson: {
          title: "Behind the Scenes",
          summary: "Describe costume, make-up, props, set, lighting and sound in drama.",
          minutes: 40,
          notes: `## Costume
**Costumes** are the **clothes and accessories** actors wear. They show:
- the character's **age, sex, status, occupation and personality**
- the **period** (time) and **place** of the play
- **culture** and occasion
A good costume fits the character, allows free movement and is safe.

## Make-up
**Stage make-up** changes or enhances the actor's appearance under stage lights.
- **straight make-up** — enhances natural features so they are visible under lights
- **character make-up** — changes appearance (e.g. ageing with lines, grey hair, scars)
- **special effects** — wounds, beards, masks
Materials: foundation, powder, eye pencil, lipstick, crepe hair (for beards), spirit gum, sponges, brushes. Local materials: **kaolin (efun/nzu)**, charcoal, camwood.
Always **remove make-up** after use and check for allergies.

## Props and scenery
- **props (properties)** are **movable objects** used on stage
  - **hand props** — carried by actors (walking stick, cup, gun, letter)
  - **set props** — larger items on the set (chairs, tables, beds)
- **scenery (set)** — the background and structures that show where the action happens (backdrops, flats, trees, walls)

## Lighting
Functions: **visibility**; showing **time of day and season**; creating **mood** (e.g. blue for night, red for danger); focusing attention (**spotlight**); marking scene changes (**blackout**).
Types: **spotlight** (narrow beam), **floodlight** (wide wash), **follow spot**, coloured **gels**.

## Sound
music, **sound effects** (thunder, gunshots, doorbells), and **microphones** for amplification. Sound creates mood and atmosphere, marks transitions and supports the action.`,
          examples: `**Example 1.** A walking stick carried by an actor is a **hand prop**.

**Example 2.** What type of make-up makes a young actor look old? *Answer:* **character make-up**.

**Example 3.** Which light gives a narrow beam on one actor? *Answer:* a **spotlight**.`,
        },
        questions: [
          ["E", "Clothes worn by actors in a play are", "costumes", "props", "sets", "scripts", "Costumes show character."],
          ["E", "Movable objects used on stage are called", "props", "costumes", "wings", "scripts", "Short for properties."],
          ["E", "A light that throws a narrow beam on one actor is a", "spotlight", "floodlight", "blackout", "footlight only", "It focuses attention."],
          ["M", "A walking stick carried by an actor is a", "hand prop", "set prop", "backdrop", "costume only", "Actors carry hand props."],
          ["M", "Chairs and tables on the stage set are", "set props", "hand props", "costumes", "make-up", "They are part of the set."],
          ["M", "Make-up used to make a young actor look old is", "character make-up", "straight make-up", "no make-up", "lighting", "It changes appearance."],
          ["M", "The background and structures showing where the action happens are the", "scenery", "props", "costumes", "cues", "The set shows location."],
          ["H", "Blue lighting on stage is often used to suggest", "night", "fire", "noon", "danger always", "Blue creates a night mood."],
          ["H", "Sudden switching off of all stage lights is a", "blackout", "spotlight", "fade-in", "flood", "It marks scene changes."],
          ["H", "Sounds such as thunder or gunshots produced during a play are", "sound effects", "dialogue", "costumes", "props", "They support the action."],
        ],
      },
      {
        week: 4,
        title: "Nigerian dramatists and theatre",
        subtopics: ["Pioneers of Nigerian theatre", "Nigerian playwrights and their works", "The Yoruba travelling theatre", "Nollywood and modern theatre"],
        objectives: ["Identify pioneers of Nigerian theatre", "Match Nigerian playwrights with their works", "Describe the Yoruba travelling theatre", "Describe the growth of Nollywood and modern theatre"],
        lesson: {
          title: "Nigeria's Theatre Heritage",
          summary: "Identify Nigerian dramatists and describe the growth of Nigerian theatre.",
          minutes: 40,
          notes: `## Pioneers of Nigerian theatre
- **Hubert Ogunde** (1916–1990) — often called the **father of Nigerian (modern) theatre**; founded a professional travelling theatre company in the 1940s; used music, dance and drama to comment on society and politics
- **Duro Ladipo** — known for Yoruba folk operas such as **Oba Koso** (about Sango)
- **Kola Ogunmola** — known for **The Palmwine Drinkard** (stage adaptation)

## Nigerian playwrights and their works
| Playwright | Some works |
|---|---|
| **Wole Soyinka** — first African winner of the **Nobel Prize in Literature (1986)** | *The Lion and the Jewel*, *The Trials of Brother Jero*, *Death and the King's Horseman* |
| **Ola Rotimi** | *The Gods Are Not to Blame*, *Kurunmi*, *Our Husband Has Gone Mad Again* |
| **J. P. Clark (Bekederemo)** | *Song of a Goat*, *Ozidi* |
| **Zulu Sofola** — among the first published Nigerian female playwrights | *Wedlock of the Gods*, *King Emene* |
| **Femi Osofisan** | *Once Upon Four Robbers*, *Women of Owu* |

## The Yoruba travelling theatre
theatre groups that **moved from town to town** performing plays in Yoruba with music, dance, costume and comedy; drew on myths, history and social issues; many later moved into **film and television**.

## Nollywood and modern theatre
- **Nollywood** — the Nigerian film industry, one of the largest in the world by number of films produced
- other film industries include **Kannywood** (Hausa films, based in Kano)
- university theatre departments, national and state theatres (e.g. the **National Theatre, Lagos**), festivals and stage revivals keep live theatre alive
- television drama and online streaming have expanded audiences`,
          examples: `**Example 1.** Who won the Nobel Prize for Literature in 1986? *Answer:* **Wole Soyinka**.

**Example 2.** Who wrote *The Gods Are Not to Blame*? *Answer:* **Ola Rotimi**.

**Example 3.** Who is often called the father of Nigerian theatre? *Answer:* **Hubert Ogunde**.`,
        },
        questions: [
          ["E", "The first African to win the Nobel Prize in Literature was", "Wole Soyinka", "Ola Rotimi", "Hubert Ogunde", "Zulu Sofola", "He won in 1986."],
          ["E", "The Nigerian film industry is known as", "Nollywood", "Hollywood", "Bollywood", "Wallywood", "It is based in Nigeria."],
          ["E", "Hubert Ogunde is often called the", "father of Nigerian theatre", "father of Nigerian football", "first Nigerian president", "king of juju music", "He founded a travelling theatre."],
          ["M", "'The Gods Are Not to Blame' was written by", "Ola Rotimi", "Wole Soyinka", "J. P. Clark", "Femi Osofisan", "It is a Yoruba adaptation of a Greek tragedy."],
          ["M", "'The Lion and the Jewel' was written by", "Wole Soyinka", "Ola Rotimi", "Zulu Sofola", "Duro Ladipo", "It is a comedy."],
          ["M", "'Wedlock of the Gods' was written by", "Zulu Sofola", "Wole Soyinka", "Femi Osofisan", "Hubert Ogunde", "She was a pioneer female playwright."],
          ["M", "The Hausa film industry based in Kano is known as", "Kannywood", "Nollywood", "Hollywood", "Ghallywood", "Named after Kano."],
          ["H", "'Oba Koso', a Yoruba folk opera about Sango, is associated with", "Duro Ladipo", "Ola Rotimi", "J. P. Clark", "Zulu Sofola", "He staged Yoruba operas."],
          ["H", "'Once Upon Four Robbers' was written by", "Femi Osofisan", "Wole Soyinka", "Ola Rotimi", "Zulu Sofola", "It examines armed robbery and justice."],
          ["H", "The Yoruba travelling theatre groups performed by", "moving from town to town", "staying only in Lagos", "performing only on radio", "writing novels", "They toured communities."],
        ],
      },
      {
        week: 5,
        title: "Dance",
        subtopics: ["Meaning and functions of dance", "Elements of dance", "Types of dance", "Creating a simple dance"],
        objectives: ["Define dance and state its functions", "Explain the elements of dance", "Identify types of dance", "Create and perform a simple dance sequence"],
        lesson: {
          title: "Expressing Ideas Through Movement",
          summary: "Explain dance and create a simple dance sequence.",
          minutes: 45,
          notes: `## Meaning
**Dance** is the art of **rhythmic body movement**, usually to music, used to express **ideas, feelings and stories**.

## Functions of dance
entertainment; worship and **ritual**; celebration (weddings, festivals, coronations); **storytelling** and preservation of history; **courtship**; physical fitness; social unity; tourism and income.

## Elements of dance
| Element | Meaning |
|---|---|
| **body** | the parts used (head, arms, torso, legs) and their shapes |
| **space** | **where** the dancer moves — levels (high, middle, low), directions, pathways |
| **time** | **when** — tempo (fast/slow), rhythm, pauses |
| **energy (force)** | **how** — strong or gentle, sharp or smooth movements |
| **relationship** | dancers moving with others, props or music |

## Types of dance
- **traditional dances** — **bata** (Yoruba), **atilogwu** (Igbo, acrobatic), **swange** (Tiv), **koroso** (Hausa/Fulani), **ekombi** (Efik), **owigiri** (Ijaw)
- **ritual dances** — performed during religious rites
- **ceremonial dances** — weddings, coronations
- **social/popular dances** — at parties
- **modern and contemporary dances** — ballet, hip-hop, Afro-dance
- **dance drama** — stories told through dance

## Creating a simple dance (choreography)
1. choose a **theme** (e.g. harvest)
2. select suitable **music**
3. create **movement motifs** (short movements)
4. arrange them into a **sequence** with a beginning, middle and end
5. use **formations** (lines, circles) and levels
6. rehearse to the music
7. add costume and props
8. perform and evaluate
The person who creates dances is the **choreographer**.`,
          examples: `**Example 1.** Name the elements of dance. *Answer:* **body, space, time, energy and relationship**.

**Example 2.** Which Igbo dance is known for acrobatics? *Answer:* **atilogwu**.

**Example 3.** Who creates dance movements? *Answer:* the **choreographer**.`,
        },
        questions: [
          ["E", "The art of rhythmic body movement usually to music is", "dance", "painting", "sculpture", "lettering", "Dance uses the body."],
          ["E", "The person who creates dance movements is the", "choreographer", "conductor", "curator", "playwright", "Choreography is dance design."],
          ["E", "Bata dance belongs to the", "Yoruba", "Igbo", "Tiv", "Efik", "Bata is Yoruba."],
          ["M", "The element of dance that deals with where the dancer moves is", "space", "time", "energy", "body only", "Space includes levels and pathways."],
          ["M", "The element of dance that deals with speed and rhythm is", "time", "space", "energy", "relationship", "Time covers tempo."],
          ["M", "The element of dance that deals with how strong or gentle movements are is", "energy", "space", "time", "body", "Energy is force."],
          ["M", "The acrobatic dance of the Igbo is", "atilogwu", "swange", "koroso", "bata", "It features flips."],
          ["H", "Dancing at high, middle and low positions refers to", "levels in space", "tempo", "energy only", "costume", "Levels vary height."],
          ["H", "A story told mainly through dance and music is", "dance drama", "mime only", "opera only", "soliloquy", "Dance carries the plot."],
          ["H", "Short movements that are repeated and developed in a dance are called", "motifs", "props", "wings", "tonics", "Motifs build choreography."],
        ],
      },
      {
        week: 6,
        title: "Storytelling and folktales",
        subtopics: ["Meaning of folktales", "Features of Nigerian folktales", "Characters in folktales", "Performing a folktale"],
        objectives: ["Explain folktales", "Identify the features of Nigerian folktales", "Describe common characters in folktales", "Perform a folktale before an audience"],
        lesson: {
          title: "Tales by Moonlight",
          summary: "Identify the features of folktales and perform one.",
          minutes: 40,
          notes: `## Meaning
A **folktale** is a **traditional story** passed down **orally** from generation to generation. Folktales are told to entertain and to **teach morals**, customs and wisdom.

## Features of Nigerian folktales
- told in the **evening or by moonlight** by elders to children
- **opening formula** (e.g. the teller calls "Story, story!" and the audience answers "Story!"); each language has its own formula
- **audience participation** — responses, clapping and singing
- **songs** that are repeated in the story
- **animals that talk** and behave like humans
- **repetition** and simple plot
- a clear **moral lesson** at the end
- a **closing formula**
- use of proverbs and humour
- the storyteller uses **voice changes, gestures and facial expressions**

## Characters in folktales
- **the tortoise** — the famous **trickster** (Ijapa in Yoruba, Mbe in Igbo) — clever, greedy, cunning; often punished for greed
- animals like the lion (king), hare, spider, dog, elephant
- humans — kings, orphans, wicked stepmothers, hunters
- spirits and supernatural beings

## Types of folktales
**trickster tales**, **why tales (aetiological tales)** that explain nature (e.g. why the tortoise's shell is cracked), **moral tales**, **dilemma tales** (the audience must decide the answer), **animal tales**, **myths and legends**.

## Performing a folktale
choose a suitable story; learn the sequence; use the opening formula; involve the audience with songs; use voice, gesture and movement to show characters; keep eye contact; end with the moral.

## Values
entertainment; moral education; preservation of language and culture; develops imagination, listening and speaking skills; brings families together.`,
          examples: `**Example 1.** Who is the famous trickster in Nigerian folktales? *Answer:* the **tortoise**.

**Example 2.** A tale explaining why the tortoise's shell is cracked is a **why (aetiological) tale**.

**Example 3.** Give one value of folktales. *Answer:* They **teach morals**.`,
        },
        questions: [
          ["E", "A traditional story passed down orally is a", "folktale", "novel", "newspaper", "biography", "Folktales are oral stories."],
          ["E", "Folktales are traditionally told", "in the evening or by moonlight", "only in offices", "only on television", "at noon in markets only", "Families gather at night."],
          ["E", "The famous trickster in Nigerian folktales is the", "tortoise", "elephant", "cow", "goat", "The tortoise is cunning."],
          ["M", "The tortoise is called Ijapa in", "Yoruba", "Igbo", "Hausa", "Efik", "Mbe is the Igbo name."],
          ["M", "The words used to start a folktale are the", "opening formula", "closing credits", "climax", "denouement", "They invite the audience."],
          ["M", "A folktale that explains why things in nature are as they are is a", "why (aetiological) tale", "dilemma tale", "trickster tale only", "legend of war", "It explains origins."],
          ["M", "A folktale that ends with a question for the audience to decide is a", "dilemma tale", "why tale", "myth", "praise song", "The audience must resolve it."],
          ["H", "A major purpose of folktales is to", "teach morals", "sell goods", "collect taxes", "hide history", "Stories carry lessons."],
          ["H", "Repeated songs in folktales mainly help to", "involve the audience and aid memory", "end the story early", "stop participation", "replace the moral", "Audiences sing along."],
          ["H", "In many folktales, the tortoise is punished for", "greed", "honesty", "generosity", "hard work", "His greed brings trouble."],
        ],
      },
    ],
  },
];
