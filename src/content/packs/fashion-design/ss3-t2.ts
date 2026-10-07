import type { TermPlan } from "../types";

/** SS3 Fashion Design and Garment Making, Second and Third Terms — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Revision of Major Skills: Garment Construction Techniques",
      subtopics: ["Stitches and seams", "Control of fullness", "Openings, fastenings and edge finishes", "Collars, sleeves, pockets and hems"],
      objectives: ["Classify stitches and seams and state their uses", "Describe methods of controlling fullness", "Identify openings, fastenings and edge finishes", "Explain the setting of collars, sleeves, pockets and hems"],
      lesson: {
        title: "The Processes of Garment Construction",
        summary: "A review of the basic sewing processes on which every garment depends.",
        minutes: 80,
        notes: `## Stitches
| Class | Stitches | Use |
|---|---|---|
| **temporary** | **tacking (basting)**: even, long-and-short, diagonal, tailor's tacks | holding and marking |
| **permanent — joining** | **running**, **back stitch**, oversewing | seams |
| **neatening** | overcasting, **blanket / loop stitch**, herringbone | raw edges |
| **hemming** | hemming, **slip hemming**, catch stitch | hems |
| **decorative (embroidery)** | chain, stem, satin, feather, French knot, cross stitch | decoration |
| **machine** | lockstitch (straight), zigzag, overlock | most work |

A good stitch is **even, of suitable length and tension**.

## Seams
A **seam** joins two or more pieces of fabric.
| Seam | Features and use |
|---|---|
| **open (plain) seam** | commonest; flat; edges neatened — most garments |
| **French seam** | raw edges enclosed; for **fine, sheer fabrics**, lingerie, children's wear |
| **run-and-fell (flat-fell) seam** | strong, flat, two rows of stitching; **shirts, jeans, pyjamas, overalls** |
| **overlaid (lapped) seam** | yokes, shaped sections |
| **double-stitched / welt seam** | strong; tailored wear |

**Choice** depends on fabric, position, style and wear. **Seam finishes:** overlocking, zigzag, pinking, edge stitching, binding, overcasting.

## Control of fullness
| Method | Use |
|---|---|
| **darts** | shape fabric to body curves — bust, waist, shoulder |
| **gathers** | soft fullness — waists, sleeves, yokes |
| **pleats** — knife, box, inverted | controlled folds — skirts |
| **tucks** | stitched folds; decoration; pin tucks |
| **easing** | slight fullness without visible gathers — sleeve head |
| **shirring / smocking** | decorative gathering with rows or stitches |
| **elastic and casing** | waists, cuffs |

## Openings
**continuous wrap (bound) opening**; **faced slit**; **bound opening**; **fly opening**; **zip plackets**. An opening must be long enough, flat, strong at the base and inconspicuous.

## Fastenings
**buttons and buttonholes** (worked, bound, loops); **zips** (semi-concealed, concealed/invisible, lapped, fly); **press studs**; **hooks and eyes / bars**; Velcro; ties; eyelets and laces. **Rule:** buttonholes on the **right front for females, left front for males**.

## Edge finishes
- **facings** — shaped, bias, combined neck-and-armhole
- **binding** — bias strip enclosing the edge
- **piping**
- **hems**
- **interfacing** stiffens collars, cuffs, waistbands, front openings

**True bias (cross)** is at **45°** to the selvedge — it stretches most; used for bindings.

## Collars
**flat** (Peter Pan), **roll** (shirt, convertible), **stand** (mandarin), shawl. Steps: interface → stitch → trim and clip → turn and press → attach with facing or band.

## Sleeves
**set-in**, **raglan**, **kimono / magyar**, puff, bishop, cap. Setting in: match **notches and balance marks**; ease the head; tack; stitch with sleeve uppermost; neaten.

## Pockets
**patch**, **in-seam**, **welt / jetted**, flap.

## Waist finishes
waistband; facing; casing with elastic; petersham.

## Hems
Mark level from the floor; turn up evenly; neaten; hem invisibly (slip hemming) or machine. Depth depends on fabric and flare — narrow for flared and sheer skirts.

## Pressing
**Press as you sew** — every seam before crossing it; use correct heat for the fibre; pressing cloth on wool and dark fabrics.`,
        examples: `**Example 1.** Which seam is most suitable for a sheer blouse? *Answer:* A **French seam** — it encloses the raw edges.

**Example 2.** Name three methods of controlling fullness. *Answer:* **Darts, gathers** and **pleats**.

**Example 3.** At what angle to the selvedge is the true bias? *Answer:* **45°**.`,
      },
      questions: [
        ["E", "A temporary stitch used to hold pieces together before machining is", "tacking", "back stitch", "hemming", "satin stitch", "It is removed after permanent stitching."],
        ["E", "A line of stitching joining two pieces of fabric is a", "seam", "dart", "pleat", "hem", "It may be plain, French or run-and-fell."],
        ["E", "A stitched fold that tapers to a point to shape a garment to the body is a", "dart", "tuck", "gather", "facing", "It is used at bust, waist and shoulder."],
        ["M", "The seam most suitable for fine, transparent fabrics is the", "French seam", "open seam", "overlaid seam", "welt seam", "Raw edges are enclosed and do not show through."],
        ["M", "The strong, flat seam used on shirts and jeans is the", "run-and-fell seam", "French seam", "plain seam", "lapped seam", "It has two rows of stitching and no raw edge."],
        ["M", "Material placed between garment and facing to stiffen collars and cuffs is", "interfacing", "lining", "binding", "piping", "It gives body and shape."],
        ["M", "On a female garment, buttonholes are worked on the", "right front", "left front", "back only", "hem", "Females button right over left."],
        ["H", "The true bias of a fabric lies at", "45° to the selvedge", "90° to the selvedge", "parallel to the selvedge", "30° to the weft", "It has the greatest stretch."],
        ["H", "When setting in a sleeve, the fullness at the sleeve head is controlled by", "easing", "knife pleats", "box pleats", "pin tucks", "Slight fullness is worked in without visible gathers."],
        ["H", "A flared or circular skirt should have a narrow hem because", "a deep hem would pucker on the curve", "it uses more thread", "the fabric is always thick", "it hides the lining", "The curved edge has too much fullness for a deep turning."],
      ],
    },
    {
      week: 2,
      title: "SSCE Theory Practice: Fibres, Fabrics and Clothing Care",
      subtopics: ["Classification of fibres", "Fabric construction and finishes", "Choice of fabrics", "Care of clothing and laundry"],
      objectives: ["Classify textile fibres and state their properties", "Describe methods of fabric construction and finishing", "Choose fabrics for different purposes", "Explain care labels, laundry and storage"],
      lesson: {
        title: "Textiles and Their Care",
        summary: "Worked revision of the textile knowledge examined in the theory paper.",
        minutes: 80,
        notes: `## Classification of fibres
| Class | Fibres |
|---|---|
| **natural — vegetable (cellulosic)** | **cotton**, **linen** (flax), jute, raffia |
| **natural — animal (protein)** | **wool**, **silk**, hair fibres |
| **man-made — regenerated** | **viscose rayon**, acetate |
| **man-made — synthetic** | **nylon**, **polyester**, acrylic, elastane (spandex) |
| **mineral** | asbestos, glass, metallic |

## Properties
| Fibre | Properties |
|---|---|
| **cotton** | strong (stronger wet), **absorbent**, cool, creases, shrinks, withstands high heat; burns like paper |
| **linen** | very strong, absorbent, cool, creases badly |
| **wool** | warm, elastic, absorbent, **felts and shrinks** with heat and rubbing, attacked by moths; smells of burning hair |
| **silk** | lustrous, strong, smooth, drapes well, weakened by sunlight and perspiration |
| **rayon** | absorbent, drapes well, **weak when wet** |
| **nylon** | very strong, elastic, **non-absorbent**, dries quickly, melts with heat |
| **polyester** | strong, **crease-resistant**, low absorbency, keeps shape; often blended with cotton |
| **acrylic** | wool-like, light, warm |

**Blends** combine advantages — polyester/cotton is cool, absorbent and easy-care.

### Identification tests
**burning test**, microscope, chemical tests, feel.

## Fabric construction
- **weaving** — interlacing **warp** (lengthwise) and **weft** (crosswise) yarns: **plain**, **twill** (diagonal lines — denim, drill), **satin** weaves; the **selvedge** is the firm side edge
- **knitting** — interlooping yarns: stretchy (jersey)
- **non-woven** — felting, bonding (interfacing)
- lace, net, crochet

## Finishes
bleaching, **mercerising** (lustre and strength for cotton), **sanforising** (pre-shrinking), crease resistance, water repellence, flame resistance, mothproofing, brushing, dyeing and printing.

**Nigerian fabrics and crafts:** **adire** (resist dyeing), batik, tie-dye, **aso-oke**, **akwete**, ankara (wax print).

## Choice of fabric
Consider **purpose and occasion, style, figure and complexion, climate, durability, ease of care, cost, age and season**.
- hot climate: cotton, linen
- children's wear: soft, absorbent, washable
- work clothes: strong (drill, denim)
- evening wear: silk, satin, lace
- **figure:** vertical lines slim and add height; horizontal lines add width; dark, dull fabrics slim; bright, shiny, bulky fabrics enlarge

## Fabric terms
**grain** — direction of yarns; **nap / pile** — raised surface needing one-way layout; **right side / wrong side**; one-way designs, checks and stripes need matching.

## Care of clothing
### Care labels
wash tub (temperature), triangle (bleach), square (drying), **iron** (dots for heat), circle (dry-clean); a cross means **do not**.

### Laundry process
sort → mend → remove stains → soak → wash → rinse → (starch / blue) → dry → iron → air → store.

### Washing by fibre
cotton and linen — hot water, friction; **wool** — lukewarm water, kneading and squeezing, dry flat; silk and rayon — gentle, cool iron; synthetics — warm water, cool iron, drip-dry.

### Stain removal
treat **fresh**; identify the stain; work from the outside inwards; test agents first. Ink — methylated spirit; grease — warm soapy water or solvent; blood — cold water and salt; rust — lemon and salt.

### Storage
clean, dry, aired; hang or fold; protect against moths, mildew and cockroaches (camphor, naphthalene).

## Agents
soaps and detergents; bleaches; starch; blue; fabric conditioner.`,
        examples: `**Example 1.** Classify nylon and cotton. *Answer:* **Nylon** — synthetic man-made fibre; **cotton** — natural vegetable fibre.

**Example 2.** Why is cotton suitable for hot climates? *Answer:* It is **absorbent and cool**.

**Example 3.** How should woollen garments be washed? *Answer:* In **lukewarm water by kneading and squeezing**, without rubbing, and dried flat.`,
      },
      questions: [
        ["E", "Cotton is classified as a", "natural vegetable fibre", "natural animal fibre", "synthetic fibre", "mineral fibre", "It comes from the cotton plant."],
        ["E", "Which of these is an animal fibre?", "Wool", "Linen", "Nylon", "Rayon", "It comes from the fleece of sheep."],
        ["E", "The lengthwise yarns in a woven fabric are the", "warp", "weft", "bias", "nap", "The weft runs across."],
        ["M", "The fibre most suitable for clothing in a hot climate is", "cotton", "nylon", "acrylic", "polyester", "It absorbs perspiration and is cool."],
        ["M", "A fabric finish that pre-shrinks cotton cloth is", "sanforising", "mercerising", "bleaching", "brushing", "The garment then keeps its size after washing."],
        ["M", "The weave that shows diagonal lines on the fabric, as in denim, is", "twill", "plain", "satin", "pile", "Each weft passes over two or more warps in steps."],
        ["M", "Woollen garments shrink and felt when they are", "rubbed in hot water", "dried flat", "squeezed in lukewarm water", "aired", "Heat and friction mat the fibres."],
        ["H", "A fibre that is weak when wet and must be handled gently in washing is", "viscose rayon", "cotton", "linen", "nylon", "Cotton and linen are stronger when wet."],
        ["H", "To make a short, stout figure appear taller and slimmer, a designer should choose", "vertical lines in dark, plain fabric", "horizontal stripes", "large bold prints", "shiny bulky fabric", "Vertical lines lead the eye up and down."],
        ["H", "Polyester is blended with cotton mainly to", "add crease resistance while keeping absorbency", "make the fabric heavier", "reduce strength", "make it shrink more", "The blend is cool, comfortable and easy to care for."],
      ],
    },
    {
      week: 4,
      title: "Mock Project I: Designing, Pattern Making and Cutting",
      subtopics: ["Design and sketching", "Body measurements and pattern drafting", "Pattern markings and layout", "Cutting out and transferring markings"],
      objectives: ["Apply the elements and principles of design in sketching a garment", "Take measurements and draft a basic pattern", "Lay a pattern correctly on fabric", "Cut out and transfer pattern markings"],
      lesson: {
        title: "From Sketch to Cut Pieces",
        summary: "The first stage of the mock project: design, pattern and cutting.",
        minutes: 80,
        notes: `## Design
### Elements of design
**line, shape (silhouette), colour, texture**.
### Principles of design
**balance** (formal and informal), **proportion**, **emphasis**, **rhythm**, **harmony (unity)**.

### Colour
**primary:** red, yellow, blue; **secondary:** orange, green, violet; **tertiary**; warm colours (red, orange, yellow) advance; cool colours (blue, green) recede. Schemes: monochromatic, analogous, complementary.

### Sketching
Draw the garment on a **fashion figure (croquis)** — front and back views; add notes on fabric, colour and details; attach a swatch.

## Body measurements
Take over light clothing with a tape; the person stands erect.
- **horizontal (girth):** bust/chest, waist, hip (about 18–20 cm below the waist), across back, across chest, round arm, wrist, neck
- **vertical (length):** nape to waist, shoulder to waist (front), shoulder length, sleeve length, skirt or dress length, outside and inside leg, crotch depth

## Patterns
- **drafting** — drawing a pattern on paper from measurements using rules
- **block (sloper)** — a basic foundation pattern (bodice, skirt, sleeve, trouser) without style
- **adaptation (flat-pattern designing)** — altering the block to a style: **slash and spread**, pivoting, moving darts
- **draping (modelling)** — shaping fabric on a dress form
- **commercial patterns** — bought in standard sizes
- **freehand cutting** — marking directly on fabric (common in Nigeria)

**Ease** is the **allowance added to body measurements for movement and comfort**.

### Pattern markings
| Marking | Meaning |
|---|---|
| **straight-grain arrow** | place parallel to the selvedge |
| **place to fold** | set on the fold — no seam |
| **notches / balance marks** | matching points |
| **darts, pleats, buttonholes, pocket positions** | construction details |
| **cutting line; stitching (fitting) line** | where to cut and sew |
| **seam allowance** | usually about 1.5 cm |
| **hem allowance** | turning at lower edge |

## Preparing the fabric
check for flaws; **straighten the grain**; pre-shrink if necessary; press; fold right sides together.

## Layout
A **layout** is the **arrangement of pattern pieces on fabric for cutting**.
**Rules:**
1. place **large pieces first**, fitting small ones between
2. keep **grain lines parallel to the selvedge** (measure both ends)
3. put "place to fold" edges **exactly on the fold**
4. all pieces **in one direction** for nap, pile and one-way prints
5. **match** checks, stripes and large motifs at seams
6. place pieces **close together** for economy
7. pin within the seam allowance; check that **every piece** is on before cutting

Types: lengthwise fold, crosswise fold, double fold, open (single) layout.

## Cutting out
use sharp **shears**; long, smooth strokes; fabric flat on the table, one hand holding it down; cut **notches outward**; do not lift the fabric.

## Transferring markings
**tailor's tacks** (best for fine fabrics), **tailor's chalk**, **tracing wheel and dressmaker's carbon**, thread tracing.

## Project brief — example
*Design and make a lined shift dress or a pair of trousers with a blouse for a named figure type; submit sketch, measurement chart, pattern, layout diagram and costing.*`,
        examples: `**Example 1.** What is a block pattern? *Answer:* A **basic foundation pattern without style features**, from which styles are adapted.

**Example 2.** How is the straight-grain arrow placed? *Answer:* **Parallel to the selvedge**.

**Example 3.** Why must pieces be laid in one direction on velvet? *Answer:* Its **pile (nap)** reflects light differently in each direction, so shades would not match.`,
      },
      questions: [
        ["E", "Which of these is a primary colour?", "Blue", "Green", "Orange", "Violet", "Red, yellow and blue are the primary colours."],
        ["E", "The arrangement of pattern pieces on fabric before cutting is the", "layout", "draft", "fitting", "toile", "It must respect grain and economy."],
        ["E", "The tool used for cutting out fabric is a pair of", "shears", "pliers", "pinking pins", "tweezers", "Dressmaker's shears have long blades."],
        ["M", "A basic foundation pattern from which styles are developed is a", "block", "marker", "facing", "yoke", "It is also called a sloper."],
        ["M", "The allowance added to body measurements for comfort and movement is", "ease", "seam allowance", "hem", "nap", "Without it the garment would be skin-tight."],
        ["M", "The grain-line arrow on a pattern piece must be placed", "parallel to the selvedge", "on the fold", "across the weft", "on the bias always", "This makes the garment hang correctly."],
        ["M", "The best method of transferring pattern markings to fine, delicate fabric is", "tailor's tacks", "tracing wheel and carbon", "biro", "pinking shears", "They leave no permanent mark."],
        ["H", "On fabric with a nap, all pattern pieces must be laid", "in one direction", "in opposite directions", "on the bias", "wrong side up", "Otherwise the pieces appear to be different shades."],
        ["H", "Shaping fabric directly on a dress form to create a pattern is", "draping", "drafting", "grading", "pivoting", "It is also called modelling."],
        ["H", "The design principle that creates a centre of interest in a garment is", "emphasis", "rhythm", "proportion", "balance", "It draws the eye to one feature."],
      ],
    },
    {
      week: 6,
      title: "Mock Project II: Sewing and Finishing",
      subtopics: ["Order of assembling a garment", "Machine use, faults and care", "Finishing processes", "Quality control"],
      objectives: ["State the order of making up a garment", "Use the sewing machine correctly and correct common faults", "Carry out finishing processes", "Check the quality of a finished garment"],
      lesson: {
        title: "Putting the Garment Together",
        summary: "The order of work, the machine and the finishing touches that decide the quality of a garment.",
        minutes: 80,
        notes: `## Order of work (unit method)
1. **stay-stitch** curved edges (necklines, armholes)
2. stitch **darts, tucks, pleats**; press
3. make **small units** — pockets, collars, cuffs
4. join **shoulder seams**; neaten; press
5. insert the **zip / make the opening**
6. attach the **collar or neck facing**
7. stitch **side seams**
8. set in **sleeves**; finish cuffs
9. join bodice to skirt; attach **waistband**
10. **first fitting**; adjust
11. attach **lining**
12. turn up the **hem**
13. **fastenings** — buttonholes and buttons, hooks
14. **final press**

**Principles:** work on flat pieces as long as possible; neaten and **press each seam** before crossing it; fit before final stitching.

## The sewing machine
### Parts
| Part | Function |
|---|---|
| **balance (hand) wheel** | raises and lowers the needle |
| **spool pin** | holds the reel |
| **thread guides; tension discs** | guide thread; control upper tension |
| **take-up lever** | pulls thread from the reel and tightens the stitch |
| **needle and needle clamp** | carries the upper thread through the fabric |
| **presser foot and lever** | holds the fabric down |
| **feed dog** | moves the fabric along |
| **throat (needle) plate** | covers the feed dog and bobbin |
| **bobbin and bobbin case; shuttle** | hold and deliver the lower thread |
| **stitch-length regulator; reverse lever** | size of stitch; back-stitching |
| **bobbin winder** | fills the bobbin |

### Faults and causes
| Fault | Likely causes |
|---|---|
| **upper thread breaking** | wrong threading; tension too tight; blunt or bent needle; poor thread |
| **lower thread breaking** | bobbin wrongly wound or inserted; tension too tight |
| **needle breaking** | pulling fabric; loose or bent needle; needle too fine; hitting pins |
| **skipped stitches** | blunt, bent or wrongly set needle; wrong needle size |
| **looped stitches** | tension incorrect; wrong threading |
| **puckered seams** | tension too tight; stitch too long; blunt needle |
| **machine running heavily** | lack of oil; dirt and fluff; thread caught in shuttle |
| **fabric not feeding** | feed dog lowered or clogged; stitch length at zero |

### Care
brush out fluff; **oil regularly** and run on scrap fabric; cover when not in use; correct needle and thread for the fabric (fine needle for fine fabric); service periodically.

## Finishing
- **trim** threads; **layer (grade)** and **clip or notch** curved seams
- **neaten** all raw edges
- **under-stitch** facings
- sew fastenings firmly, evenly spaced
- **hem** level and invisible
- attach **label**
- **final pressing** on the correct heat; hang on a hanger

## Decoration
embroidery, appliqué, beading, lace and braid, piping, top-stitching, stoning.

## Quality control checklist
correct **size and fit**; seams straight, flat and secure; matching of checks and seams; even hem; flat collar and facings; smooth zip; firm fastenings; no loose threads, puckers or marks; well pressed; inside neat.

## Safety in the workroom
keep pins in a cushion, never in the mouth; pass scissors handle first; switch off the machine and iron when not in use; keep fingers clear of the needle; dry hands for electrical equipment; tidy floor; good posture and light.`,
        examples: `**Example 1.** Which part of the machine moves the fabric along? *Answer:* The **feed dog**.

**Example 2.** Give two causes of needle breakage. *Answer:* **Pulling the fabric** while sewing and a **bent or loose needle**.

**Example 3.** Why should each seam be pressed before another crosses it? *Answer:* To give a **flat, professional finish** — it cannot be pressed properly afterwards.`,
      },
      questions: [
        ["E", "The part of the sewing machine that moves the fabric forward is the", "feed dog", "presser foot", "balance wheel", "spool pin", "Its teeth grip the fabric from below."],
        ["E", "The part that holds the fabric down during stitching is the", "presser foot", "take-up lever", "bobbin", "throat plate", "It is raised and lowered by a lever."],
        ["E", "The lower thread of a sewing machine is wound on the", "bobbin", "spool pin", "balance wheel", "needle clamp", "It sits in the bobbin case."],
        ["M", "A row of machine stitching made on a single curved edge to prevent stretching is", "stay-stitching", "top-stitching", "basting", "under-stitching", "It is done just inside the seam line."],
        ["M", "Skipped stitches are most often caused by", "a blunt or bent needle", "too much oil", "a full bobbin", "a long thread tail", "The needle fails to form the stitch."],
        ["M", "Curved seams are clipped in order to", "make them lie flat", "strengthen them", "lengthen them", "decorate them", "Clipping releases the tension in the allowance."],
        ["M", "A machine that runs heavily and noisily most likely needs", "cleaning and oiling", "a longer stitch", "a thicker needle", "a new presser foot", "Fluff and lack of oil increase friction."],
        ["H", "Puckered seams on fine fabric are usually caused by", "tension that is too tight", "a short bobbin thread", "a clean feed dog", "pressing as you sew", "The stitches draw the fabric up."],
        ["H", "Stitching a facing to the seam allowance close to the seam line, so that it does not roll outward, is", "under-stitching", "stay-stitching", "tacking", "overcasting", "It keeps the facing inside the garment."],
        ["H", "In the order of making up a garment, the first fitting should take place", "before final stitching of main seams and hem", "after the final press", "after labelling", "before cutting out", "Faults can then be corrected easily."],
      ],
    },
    {
      week: 8,
      title: "Mock Project III: Final Fitting and Presentation",
      subtopics: ["Fitting and common faults", "Alterations", "Pressing and packaging", "Presenting the garment"],
      objectives: ["Assess the fit of a garment", "Identify fitting faults and their corrections", "Press and package a finished garment", "Present and evaluate a finished project"],
      lesson: {
        title: "Fit, Finish and Presentation",
        summary: "Judging and correcting fit, and showing the finished garment to best advantage.",
        minutes: 80,
        notes: `## Fitting
**Fitting** is **trying a garment on the wearer to check and adjust its fit**.

### Standards of a good fit
- **grain** — hangs straight; centre front and back vertical; crosswise grain level
- **ease** — enough room to move, sit and raise the arms; neither tight nor baggy
- **line** — seams fall in the right places: shoulder seam on the shoulder; side seams vertical; waistline at the natural waist
- **balance** — hangs evenly on both sides
- **smoothness (set)** — no wrinkles, pulls or sagging
- **length** — hem level and suitable

### Procedure
wear the right undergarments and shoes; put the garment on **right side out**; pin openings closed; check from the top downward — neck, shoulders, bust, waist, hips, sleeves, length; view front, back and sides in a mirror; mark changes with pins or chalk.

## Fitting faults
| Fault | Cause | Correction |
|---|---|---|
| **tight horizontal wrinkles** | too little width | let out seams |
| **loose vertical folds** | too much width | take in seams |
| **diagonal wrinkles pointing to the bust** | darts too small or wrongly placed | enlarge or move darts |
| **gaping neckline** | neckline too wide | take in at shoulders; add small darts |
| **tight neckline** | cut too high | lower and clip |
| **sleeve pulls when arm is raised** | sleeve head too narrow or armhole too low | let out; raise under-arm |
| **shoulder seam off the shoulder** | shoulders too wide | take in |
| **skirt rides up at the hips** | too tight at hips | let out side seams |
| **hem uneven** | figure or grain | re-mark from the floor |
| **trousers tight or baggy at the crotch** | crotch length wrong | let out or take in |

## Alterations
**letting out, taking in, shortening, lengthening**, moving darts, re-setting sleeves and zips. Generous seam allowances make alteration possible.

## Final pressing
- **pressing** is lifting and lowering the iron; **ironing** is sliding it
- test heat on a scrap; **wool** — damp cloth, moderate heat; **cotton and linen** — hot; **silk and synthetics** — cool
- press on the **wrong side** where possible; use a sleeve board and tailor's ham for curves
- allow to cool on a hanger

## Packaging
fold neatly with tissue or hang; garment bag; **label and swing tag** with size, care instructions and price; branded carrier.

## Presenting the garment
- **display** — on a model, mannequin or hanger
- **fashion show** — models, music, order of appearance, commentary describing fabric, style and occasion
- **exhibition** — garments with design sheets and costing
- **portfolio** — sketches, patterns, photographs of stages and the finished work
- **oral presentation** — inspiration, fabric choice, techniques used, problems solved, cost and price

## Evaluation
| Criterion | Questions |
|---|---|
| **design** | is it original and suitable for the wearer and occasion? |
| **fabric choice** | appropriate? |
| **workmanship** | seams, finishes, pressing |
| **fit** | grain, ease, line, balance, set |
| **cost** | within budget? |
| **time** | completed as planned? |
State **strengths, weaknesses and improvements**.

## Photographing work
plain background; good light; front, back and detail shots — for portfolio and online marketing.`,
        examples: `**Example 1.** What is fitting? *Answer:* **Trying a garment on the wearer** to check and adjust it.

**Example 2.** What do tight horizontal wrinkles across the hips show? *Answer:* The garment is **too tight** there — let out the side seams.

**Example 3.** Distinguish pressing from ironing. *Answer:* **Pressing** lifts and lowers the iron; **ironing** slides it along the fabric.`,
      },
      questions: [
        ["E", "Trying a garment on the wearer to check and adjust it is", "fitting", "drafting", "grading", "costing", "It is done before final stitching."],
        ["E", "Lifting and lowering the iron on a seam is", "pressing", "ironing", "starching", "blueing", "Ironing slides the iron along."],
        ["E", "A lifelike figure used for displaying garments is a", "mannequin", "bodkin", "thimble", "bobbin", "It shows how the garment looks when worn."],
        ["M", "In a well-fitted garment, the shoulder seam should lie", "on top of the shoulder", "towards the back", "down the upper arm", "on the collar bone in front", "Correct line is a standard of good fit."],
        ["M", "Loose vertical folds in a garment show that it is", "too wide", "too tight", "too short", "off grain only", "The seams should be taken in."],
        ["M", "Woollen fabric is best pressed with", "a damp pressing cloth and moderate heat", "a very hot dry iron directly", "no heat at all", "a cold iron and starch", "This avoids shine and scorching."],
        ["M", "A collection of sketches, patterns and photographs of a designer's work is a", "portfolio", "marker", "job card", "price list", "It is used to present skills to clients and examiners."],
        ["H", "Tight horizontal wrinkles across a garment are corrected by", "letting out the seams", "taking in the seams", "shortening the hem", "raising the neckline", "They show too little width."],
        ["H", "The standard of fit that requires the centre front and centre back to hang vertically is", "grain", "ease", "set", "length", "The lengthwise yarns must hang straight."],
        ["H", "An uneven hem on a finished skirt is best corrected by", "re-marking the hem level from the floor", "pressing it harder", "adding a wider belt", "taking in the side seams", "Measuring up from the floor allows for the figure."],
      ],
    },
  ],
};

export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Comprehensive Revision I: Fashion Theory",
      subtopics: ["Clothing and its functions", "Figure types and wardrobe planning", "Nigerian traditional dress and fabric crafts", "Grooming and good dress sense"],
      objectives: ["State the reasons for wearing clothes", "Relate styles to figure types and plan a wardrobe", "Describe Nigerian traditional dress and fabric decoration", "Explain grooming and good dress sense"],
      lesson: {
        title: "Clothing, Figure and Culture",
        summary: "A revision of the general theory of clothing examined alongside the textiles and construction topics.",
        minutes: 80,
        notes: `## Why people wear clothes
**protection** (weather, injury); **modesty**; **adornment / beauty**; **identification** (uniforms, culture, religion); **status**; self-expression; occasion and ceremony.

## Types of clothing
underwear; outerwear; sleepwear; sportswear; work and protective clothing; ceremonial and traditional wear; **accessories** — shoes, bags, belts, scarves, headgear, jewellery.

## Figure types
| Figure | Suitable styles |
|---|---|
| **tall and thin** | horizontal lines, gathers, pleats, full sleeves, contrasting colours, bold prints, bulky textures |
| **tall and stout** | simple, semi-fitted styles; vertical or princess lines; dark, dull, medium-weight fabrics |
| **short and thin** | small prints; one-colour outfits; vertical lines; soft fullness |
| **short and stout** | vertical lines; V-necklines; plain dark colours; no frills or large prints |
| **large hips** | attention drawn to the upper body; A-line skirts; dark lower garments |
| **large bust** | simple bodice; V-neck; no pockets or frills at bust |

## Wardrobe planning
A **wardrobe** is **all the clothes and accessories a person owns**. Plan by: **needs and activities**, **budget**, climate, **mix-and-match** items in co-ordinating colours, quality rather than quantity, care requirements. Take an **inventory** first.

## Buying clothes
check fit, fabric, workmanship (seams, hems, fastenings), care label, colour fastness and price; avoid impulse buying.

## Nigerian traditional dress
| Group | Examples |
|---|---|
| **Yoruba** | **agbada**, buba and sokoto, fila; **iro and buba**, **gele**, ipele |
| **Hausa/Fulani** | **babban riga**, kaftan, hula; zani (wrapper), kallabi; mudukare |
| **Igbo** | **isiagu**, wrapper, red cap; two wrappers and blouse, ichafu |
| **Niger Delta** | etibo, woko, wrapper and bowler hat; george wrappers |
| **Tiv; Edo; Efik** | a'nger (black-and-white); coral beads; onyonyo |

**Traditional fabrics:** **aso-oke**, **adire**, **akwete**, okene cloth, ankara.

## Fabric decoration
- **dyeing:** **tie-dye**, **batik** (wax resist), **adire eleko** (starch resist)
- **printing:** block, screen, stencil
- **embroidery**, appliqué, patchwork, beadwork, smocking
**Dyes:** natural (indigo, kola, camwood) and synthetic.

## Grooming and dress sense
**Good grooming** is **keeping the body and clothes clean, neat and attractive**: bathing; care of hair, teeth, nails and skin; clean, mended, pressed clothes; polished shoes.
**Good dress sense:** dress to suit the **occasion, age, figure, climate and culture**; modesty; well-chosen accessories; not following every fad.

## Care and renovation
mending — **darning** (worn thin places, holes in knits), **patching** (holes in woven fabric), replacing buttons and zips; **renovation** — remodelling old garments, changing length, adding trimmings; recycling into children's wear or household articles.

## Children's clothing
soft, absorbent, washable fabrics; simple styles with room for growth (deep hems, tucks); easy openings; safe fastenings; bright colours.

## Careers
fashion designer, tailor/dressmaker, pattern cutter, fashion illustrator, stylist, textile designer, fashion merchandiser, costume designer, fashion journalist, teacher.`,
        examples: `**Example 1.** Give three reasons for wearing clothes. *Answer:* **Protection, modesty** and **adornment**.

**Example 2.** Suggest suitable lines for a short, stout figure. *Answer:* **Vertical lines** in plain, dark fabric.

**Example 3.** Distinguish darning from patching. *Answer:* **Darning** weaves threads across a thin place or small hole; **patching** covers a hole with a piece of fabric.`,
      },
      questions: [
        ["E", "Wearing clothes to cover the body decently fulfils the function of", "modesty", "status", "identification", "adornment", "It is a basic reason for clothing."],
        ["E", "All the clothes and accessories a person owns make up the", "wardrobe", "layout", "collection line", "inventory book", "It should be planned to meet the owner's needs."],
        ["E", "The flowing gown worn by Yoruba men is the", "agbada", "isiagu", "etibo", "zani", "It is worn over buba and sokoto."],
        ["M", "A tall, thin figure looks best in", "horizontal lines and full styles", "vertical stripes", "tight plain dark dresses", "long narrow panels", "They add apparent width."],
        ["M", "The resist-dyeing method in which wax is applied to the fabric is", "batik", "tie-dye", "screen printing", "appliqué", "The waxed areas resist the dye."],
        ["M", "Repairing a hole in a woven garment by covering it with a piece of fabric is", "patching", "darning", "smocking", "shirring", "Darning is used for thin places and knitwear."],
        ["M", "Clothes for young children should be made of fabric that is", "soft, absorbent and washable", "stiff and heavy", "non-absorbent", "dry-clean only", "They must be comfortable and easy to launder."],
        ["H", "A wardrobe built round items in co-ordinating colours that can be worn together in many ways uses the idea of", "mix and match", "impulse buying", "fast fashion", "haute couture", "Fewer garments give more outfits."],
        ["H", "The hand-woven cloth traditionally produced in strips by Yoruba weavers is", "aso-oke", "akwete", "ankara", "george", "The strips are sewn together to make garments."],
        ["H", "A deep hem and tucks are included in children's garments mainly to", "allow for growth", "add weight", "save fabric", "make ironing easier", "They can be let down as the child grows."],
      ],
    },
    {
      week: 2,
      title: "Comprehensive Revision II: Fashion Practical",
      subtopics: ["Processes commonly examined", "Working specimens", "Time plan and order of work", "Standards and marking"],
      objectives: ["Carry out commonly examined processes correctly", "Prepare neat working specimens", "Draw up a time plan for a practical test", "Meet the standards by which practical work is marked"],
      lesson: {
        title: "Preparing for the Practical Test",
        summary: "The processes to practise and how to organise the time in a practical examination.",
        minutes: 80,
        notes: `## Processes to practise
Make a **specimen** of each on about 20 cm squares of plain cotton.
### Seams
open seam with neatened edges; French seam (finished width about 6 mm); run-and-fell seam.
### Fullness
single-pointed and double-pointed darts; gathers set into a band; knife, box and inverted pleats; pin tucks.
### Openings
continuous wrap opening; faced slit; bound opening.
### Fastenings
**worked buttonhole** with button; press stud; hook and eye/bar; zip — semi-concealed and concealed.
### Edges
shaped facing with under-stitching; bias binding on a curve; **cutting and joining crossway strips** (join on the straight grain, right sides together, forming a V at each end).
### Collars and sleeves
flat collar attached with facing; shirt collar with stand; set-in sleeve; cuff.
### Pockets
patch pocket; in-seam pocket.
### Hems
slip-hemmed; machine-stitched; rolled hem on fine fabric.
### Decoration
basic embroidery stitches; appliqué.

## Method for selected processes
### Open seam
pin and tack right sides together → machine on the fitting line → remove tacking → press open → neaten each edge.
### French seam
**wrong sides together**, stitch about 6 mm from the fitting line in the allowance → trim → turn **right sides together**, crease on the seam → stitch on the fitting line, enclosing raw edges → press to one side.
### Worked buttonhole
mark position and length (button diameter + thickness) → stitch round → cut → **buttonhole stitch** closely round the edges, **round end** toward the garment edge where the button rests, bar at the other.
### Gathers
two rows of long machine or running stitches, one on each side of the fitting line → draw up to fit → distribute evenly → stitch with gathers uppermost.

## Time plan
A written plan dividing the examination time among tasks.
| Time | Activity |
|---|---|
| 10 min | read the question; study the pattern; plan |
| 20 min | lay out and cut; transfer markings |
| 15 min | darts and small units |
| 60 min | main processes in order |
| 20 min | fastenings and hem |
| 10 min | final press; label work; clear up |
Do the processes **specified in the question first**; leave decoration to the end.

## Standards (what examiners look for)
- **accuracy** — measurements, seam widths, matching of balance marks
- **stitching** — straight, even, correct tension; ends secured
- **neatening** — suitable and tidy
- **flatness** — pressed as work proceeds; no puckers
- **cleanliness** of work
- **correct method** for the fabric and process
- **completion** within the time
- **organisation** — tidy table, safe use of tools, economy of fabric

## Common faults
uneven seam allowance; bulky corners not trimmed; facings rolling out; gathers bunched; buttonhole too long or stitches uneven; zip teeth showing; hem stitches visible on the right side; unpressed work; threads not trimmed.

## Kit to bring
shears, small scissors, tape, pins and cushion, needles, thimble, tacking and matching threads, chalk, tracing wheel, seam ripper, ruler, pressing cloth.`,
        examples: `**Example 1.** With which sides together is the first row of a French seam stitched? *Answer:* **Wrong sides together**.

**Example 2.** How long should a buttonhole be? *Answer:* The **diameter of the button plus its thickness**.

**Example 3.** What should a candidate do first in a practical test? *Answer:* **Read the question carefully and plan** the work.`,
      },
      questions: [
        ["E", "A small sample of a sewing process made for practice or assessment is a", "specimen", "layout", "croquis", "marker", "It shows mastery of one process."],
        ["E", "The first row of stitching in a French seam is made with", "wrong sides together", "right sides together", "edges overlapped", "the fabric on the bias", "The raw edges are later enclosed inside."],
        ["E", "The stitch used to work round the cut edges of a buttonhole is", "buttonhole stitch", "running stitch", "tacking", "herringbone", "It forms a firm knotted edge."],
        ["M", "The length of a buttonhole should equal the button's", "diameter plus thickness", "diameter only", "radius", "circumference", "This lets the button pass through easily without gaping."],
        ["M", "Gathers are best prepared with", "two rows of long stitches", "one row of back stitch", "zigzag over the edge only", "a row of hemming", "Two rows give even, controllable fullness."],
        ["M", "Crossway strips should be joined", "on the straight grain", "along the bias edge", "on a curve", "with a French seam", "The join then lies diagonally across the strip and is flat."],
        ["M", "A written plan dividing examination time among tasks is a", "time plan", "mood board", "price list", "size chart", "It helps the candidate to finish."],
        ["H", "In a worked buttonhole on a shirt front, the round end is placed", "towards the garment edge, where the button rests", "away from the edge", "at both ends", "at the centre", "The shank of the button sits in the rounded end."],
        ["H", "A facing that rolls to the right side of a neckline shows that the worker omitted", "under-stitching", "stay-stitching the hem", "pinking", "gathering", "Under-stitching holds the facing inside."],
        ["H", "In a practical test, the candidate should first carry out", "the processes specified in the question", "decorative embroidery", "the final press", "labelling", "Marks are awarded mainly for the required processes."],
      ],
    },
    {
      week: 3,
      title: "Final Project: Presenting a Garment Collection",
      subtopics: ["Planning a collection", "Documentation: design sheets and portfolio", "Staging a fashion show or exhibition", "Evaluation"],
      objectives: ["Plan a small garment collection", "Prepare the documents that accompany a collection", "Organise a simple fashion show or exhibition", "Evaluate a collection"],
      lesson: {
        title: "Showing the Collection",
        summary: "Bringing individual or group garments together as a collection and presenting it.",
        minutes: 80,
        notes: `## A collection
A **collection** is a **group of garments designed round a common theme** for a season or occasion. A school project may have **three to six outfits** by an individual or group.

## Planning
1. **Theme** — e.g. "Independence", "Modern adire", "Graduation day".
2. **Target wearer and occasion**.
3. **Research and mood board**.
4. **Colour story and fabrics** — limit to a few co-ordinating colours and fabrics for unity.
5. **Sketches** of each outfit — front and back; choose the best.
6. **Range plan** — variety of garment types with a common thread (colour, fabric, detail, silhouette).
7. **Budget and costing**.
8. **Work schedule** — who makes what; deadlines.
9. **Production** — patterns, cutting, sewing, fitting, finishing.
10. **Presentation**.

**Unity with variety:** pieces should clearly belong together yet differ in style.

## Documentation
| Document | Content |
|---|---|
| **design sheet** | coloured illustration, **flat (technical) drawings**, swatches, description |
| **specification sheet** | measurements, fabrics, trims, construction notes |
| **pattern** | labelled pieces |
| **cost sheet** | materials, labour, overheads, price |
| **production record** | photographs of stages; problems and solutions |
| **portfolio** | all of the above neatly bound |

A **flat drawing** shows the garment laid flat with all seams, darts and details — the maker's working drawing.

## Staging a fashion show
- **committee and roles** — co-ordinator, models, dressers, commentator (MC), music, décor, ushers
- **venue** — hall with **runway (catwalk)**, backstage changing area, seating, lighting
- **running order** — sequence of outfits and models; opening and finale
- **models** — rehearsed walking, posture and turns; fittings done beforehand
- **commentary** — designer's name, theme, fabric, style features, occasion
- **music** suited to the theme
- **invitations and publicity**
- **rehearsal**
- **after the show** — thank guests; collect feedback; take orders

## Exhibition
garments on mannequins or hangers with labels and design sheets; neat stands; price tags; visitors' book.

## Budget for a show — example
hall decoration ₦30 000; sound ₦20 000; programmes ₦10 000; refreshments ₦25 000; miscellaneous ₦15 000 → **₦100 000**. Funding: school, contributions, gate fees, sponsors. If 80 guests pay ₦1 500 each, income is ₦120 000 — a surplus of ₦20 000.

## Evaluation
- did the collection express the **theme**?
- **unity and variety**
- **creativity** and originality
- **workmanship and fit**
- suitability for the target wearer
- **cost** against budget
- quality of **documentation and presentation**
- **teamwork** and time-keeping
Record strengths, weaknesses and what would be done differently.

## Next steps
use photographs for a **lookbook** and online pages; take orders; refine best-selling pieces into a small ready-to-wear line.`,
        examples: `**Example 1.** What is a collection? *Answer:* A **group of garments designed round a common theme**.

**Example 2.** What is a flat drawing? *Answer:* A **technical drawing of the garment laid flat**, showing all seams and details.

**Example 3.** A show costs ₦90 000 and 70 guests pay ₦1 500 each. Find the surplus. *Answer:* ₦105 000 − ₦90 000 = **₦15 000**.`,
      },
      questions: [
        ["E", "A group of garments designed round a common theme is a", "collection", "specimen", "wardrobe", "layout", "It is produced for a season or occasion."],
        ["E", "The raised walkway on which models display garments is the", "runway", "backstage", "showroom shelf", "cutting table", "It is also called the catwalk."],
        ["E", "The person who describes each outfit to the audience at a fashion show is the", "commentator", "dresser", "usher", "cutter", "The commentary names fabric, style and occasion."],
        ["M", "A technical drawing of a garment laid flat, showing seams and details, is a", "flat drawing", "croquis pose", "mood board", "swatch card", "It guides the pattern maker and machinist."],
        ["M", "The quality that makes the pieces of a collection clearly belong together is", "unity", "contrast only", "obsolescence", "ease", "It comes from shared colour, fabric or detail."],
        ["M", "The list giving the sequence of models and outfits in a show is the", "running order", "cost sheet", "size chart", "job card", "It keeps the show organised."],
        ["M", "Before a fashion show, models and organisers should hold a", "rehearsal", "stocktaking", "clearance sale", "fabric test", "Practice ensures a smooth performance."],
        ["H", "A fashion show costs ₦150 000 to stage. If 120 guests pay ₦2 000 each, the surplus is", "₦90 000", "₦240 000", "₦30 000", "₦390 000", "Income ₦240 000 minus cost ₦150 000."],
        ["H", "The document giving measurements, fabrics, trims and construction notes for a garment is the", "specification sheet", "invitation card", "visitors' book", "running order", "It ensures the garment is made as designed."],
        ["H", "Limiting a collection to a few co-ordinating colours and fabrics mainly helps to achieve", "harmony across the pieces", "higher overheads", "longer production time", "a wider seam allowance", "A restricted palette ties the outfits together."],
      ],
    },
    {
      week: 6,
      title: "Final SSCE Preparation: Fashion Examination Technique",
      subtopics: ["Structure of the papers", "Answering theory questions", "Design and pattern questions", "Last-minute check-list"],
      objectives: ["Describe what the theory, objective and practical papers demand", "Answer theory questions in the proper form", "Tackle design, pattern and costing questions", "Use a check-list for final revision"],
      lesson: {
        title: "Facing the Final Examination",
        summary: "How to turn knowledge into marks in the fashion and garment-making papers.",
        minutes: 80,
        notes: `## What is examined
- **objective paper** — short questions across the whole syllabus
- **theory paper** — textiles, design, construction processes, care, business
- **practical paper** — drafting or adapting a pattern and making up specified processes on a garment or part-garment

## Command words
| Word | What to do |
|---|---|
| **define** | give the exact meaning |
| **list / state** | brief points |
| **explain / describe** | points with reasons or steps |
| **differentiate** | set out differences side by side |
| **illustrate / sketch** | neat labelled drawing |
| **enumerate the steps** | in the correct order |

## Answering theory questions
- write in **numbered points**; one idea per point
- for a **process**, give steps **in order**, with diagrams
- label diagrams fully — **right side (RS), wrong side (WS)**, fitting line, raw edge
- give **reasons** when asked "why"
- use correct **technical terms** (selvedge, notch, facing, ease)
- match the **number of points** to the marks

### Model answer — "Describe how to make an open seam"
1. Place the two pieces right sides together, matching notches. 2. Pin and tack on the fitting line. 3. Machine along the fitting line; secure the ends. 4. Remove tacking. 5. Press the seam open. 6. Neaten each raw edge by overlocking or edge-stitching. 7. Press again.

## Design questions
sketch **front and back views**; show style features clearly; add notes on **fabric, colour, fastening** and why the design suits the **figure and occasion** stated.

## Pattern questions
- show **construction lines** and measurements used
- label every piece — name, **grain line, fold, notches, number to cut**
- state seam allowances
- for adaptations, show the **block outline** and the changes

## Layout questions
draw the fabric with **selvedges and fold** marked; place pieces with grain arrows; show economy.

## Costing questions
set out as a table; show working; state the selling price with the profit percentage used.

## Objective paper
read every option; eliminate wrong ones; beware **NOT** and **EXCEPT**; do not leave blanks.

## Practical paper
read the test twice; check the pattern and fabric supplied; plan the time; do the **specified processes** first; **press as you sew**; hand in neat, labelled work.

## Final check-list
fibres and properties; fabric construction and finishes; elements and principles of design; figure types; measurements; pattern markings and layout rules; seams and where used; fullness; openings and fastenings; collars, sleeves, pockets, hems; machine parts, faults and care; laundry and stain removal; traditional fabrics and dress; costing, pricing and business; ICT, trends and globalization.

## On the day
arrive early; bring a full kit; stay calm; keep the work clean; manage the time.`,
        examples: `**Example 1.** What does the command word "differentiate" require? *Answer:* **Differences set out point by point** between the items.

**Example 2.** What labels should appear on a pattern piece? *Answer:* **Name of piece, grain line, fold, notches** and **number to cut**.

**Example 3.** What should a candidate do while sewing in the practical? *Answer:* **Press each process as the work proceeds**.`,
      },
      questions: [
        ["E", "The command word that asks for the exact meaning of a term is", "define", "sketch", "list", "enumerate", "A precise statement is required."],
        ["E", "In diagrams of sewing processes, RS stands for", "right side", "raw seam", "running stitch", "round sleeve", "WS stands for wrong side."],
        ["E", "A design question normally requires sketches of the garment's", "front and back views", "price tag", "label only", "packaging", "Both views show all style features."],
        ["M", "When describing a sewing process in the theory paper, the steps should be given", "in the correct order", "in any order", "as one long sentence", "without diagrams", "The sequence is part of the correct method."],
        ["M", "On a drafted pattern piece, the instruction 'cut 2' tells the worker the", "number of pieces to cut", "seam allowance", "size of the hem", "width of the fabric", "Each piece must be labelled with it."],
        ["M", "In a layout diagram, the candidate must mark the fabric's", "selvedges and fold", "price and colour", "fibre content only", "brand name", "They show how pieces relate to the grain."],
        ["M", "The number of points written in an answer should be guided by the", "marks allotted", "length of the question", "colour of the pen", "time of day", "Marks indicate how much is expected."],
        ["H", "In a pattern-adaptation question, the candidate should show the", "block outline and the changes made", "finished garment only", "fabric price", "care label", "Examiners award marks for the method of adaptation."],
        ["H", "In objective questions, special care is needed with words such as", "NOT and EXCEPT", "AND and THE", "IS and ARE", "A and AN", "They reverse what the question asks."],
        ["H", "Asked why a V-neck vertical-panel dress suits a short stout figure, the best answer states that", "vertical lines lead the eye up and down, giving height and slimness", "it is the cheapest style", "it needs no fitting", "it uses the most fabric", "A reason linked to the design principle earns the marks."],
      ],
    },
  ],
};
