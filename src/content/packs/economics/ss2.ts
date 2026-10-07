import type { TermPlan } from "../types";

/** SS2 Economics — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Elasticity of demand",
        subtopics: ["Price elasticity of demand and its measurement", "Types of price elasticity", "Income and cross elasticity of demand", "Determinants and importance of elasticity"],
        objectives: ["Define and calculate price elasticity of demand", "Describe the types of price elasticity with their curves", "Calculate and interpret income and cross elasticity", "State the determinants and uses of elasticity of demand"],
        lesson: {
          title: "How Responsive Is Demand?",
          summary: "Calculate and interpret price, income and cross elasticity of demand.",
          minutes: 40,
          notes: `## Elasticity of demand
The **degree of responsiveness of quantity demanded to a change in a factor that affects demand** — the price of the good, consumers' income or the price of another good.

## Price elasticity of demand (PED)
**PED = percentage change in quantity demanded ÷ percentage change in price**
The sign is negative (price and quantity move in opposite directions), but it is usually ignored.
*Example 1:* price rises from ₦10 to ₦12 (20%); quantity falls from 100 to 80 (20%): PED = 20 ÷ 20 = **1**.
*Example 2:* price rises from ₦50 to ₦60 (20%); quantity falls from 200 to 120 (40%): PED = 40 ÷ 20 = **2**.
*Example 3:* price rises from ₦20 to ₦25 (25%); quantity falls from 100 to 90 (10%): PED = 10 ÷ 25 = **0.4**.

## Types
| Type | Value | Meaning | Curve |
|---|---|---|---|
| **perfectly elastic** | infinity | any rise in price cuts demand to zero | horizontal |
| **elastic** | greater than 1 | quantity changes more than proportionately | flat |
| **unitary** | equal to 1 | quantity changes in the same proportion | rectangular hyperbola |
| **inelastic** | less than 1 | quantity changes less than proportionately | steep |
| **perfectly inelastic** | zero | quantity does not change at all | vertical |

## Elasticity and total revenue
Total revenue (total expenditure) = price × quantity.
| Demand | Price falls | Price rises |
|---|---|---|
| elastic | revenue **rises** | revenue falls |
| unitary | revenue unchanged | revenue unchanged |
| inelastic | revenue **falls** | revenue rises |
In Example 3, revenue rises from ₦2000 to ₦2250 when the price rises — demand is inelastic.

## Determinants of price elasticity
- **availability of substitutes** — many close substitutes make demand elastic
- **nature of the commodity** — necessities (salt, staple food) are inelastic; luxuries are elastic
- **proportion of income spent** — goods taking a small part of income (matches) are inelastic
- **habit** — cigarettes, alcohol: inelastic
- **number of uses** — goods with many uses are more elastic
- **time** — demand is more elastic in the long run
- **durability**; whether purchase can be postponed
- the level of consumers' income

## Income elasticity of demand (YED)
**YED = percentage change in quantity demanded ÷ percentage change in income**
- **positive** — a **normal** good; greater than 1 — a **luxury**; between 0 and 1 — a **necessity**
- **negative** — an **inferior** good
- zero — demand unaffected by income
*Example:* income rises by 10% and demand rises by 5%: YED = **0.5** — a normal good (a necessity).

## Cross elasticity of demand (XED)
**XED = percentage change in quantity demanded of good A ÷ percentage change in price of good B**
- **positive** — **substitutes** (a rise in the price of butter raises the demand for margarine)
- **negative** — **complements** (a rise in the price of cars lowers the demand for petrol)
- **zero** — unrelated goods

## Importance of elasticity
- **firms** — pricing decisions: reduce price if demand is elastic; raise it if inelastic
- **government** — taxing goods with inelastic demand yields more revenue; the consumer bears more of the tax when demand is inelastic
- **devaluation** succeeds only if demand for exports and imports is elastic
- **wage bargaining** — unions gain more where demand for the product is inelastic
- **price discrimination** by monopolists
- explains why farmers' incomes may fall after a bumper harvest (demand for food is inelastic)`,
          examples: `**Example 1.** Price falls from ₦40 to ₦30 and quantity demanded rises from 100 to 150. Find the PED. *Solution:* 50% ÷ 25% = **2** (elastic).

**Example 2.** Income rises by 20% and demand for gari falls by 5%. Find the YED and classify the good. *Solution:* −5 ÷ 20 = **−0.25** — an **inferior** good.

**Example 3.** The cross elasticity between two goods is +1.5. What is their relationship? *Answer:* They are **substitutes**.`,
        },
        questions: [
          ["E", "The responsiveness of quantity demanded to a change in price is known as", "price elasticity of demand", "income elasticity of demand", "cross elasticity of demand", "elasticity of supply", "It compares the percentage changes in quantity and price."],
          ["E", "Demand is said to be elastic when its coefficient of elasticity is", "greater than one", "less than one", "equal to zero", "equal to one", "Quantity changes more than proportionately."],
          ["E", "The demand for a necessity such as salt is", "inelastic", "elastic", "perfectly elastic", "unitary", "People buy almost the same quantity whatever the price."],
          ["M", "When the price of a good rises from ₦10 to ₦12, quantity demanded falls from 100 to 80 units. The price elasticity of demand is", "1", "2", "0.5", "20", "Both changes are 20%."],
          ["M", "A perfectly inelastic demand curve is", "vertical", "horizontal", "upward-sloping", "a rectangular hyperbola", "Quantity demanded does not respond to price."],
          ["M", "Consumers' income rises by 10% and the demand for a good rises by 5%. The income elasticity of demand is", "0.5", "2", "5", "15", "5 ÷ 10. Answer: 0.5."],
          ["M", "A negative cross elasticity of demand between two goods shows that they are", "complements", "substitutes", "unrelated", "inferior goods", "A rise in the price of one reduces demand for the other."],
          ["H", "The price of a good rises from ₦50 to ₦60 and quantity demanded falls from 200 to 120 units. The price elasticity of demand is", "2", "0.5", "1", "4", "A 40% fall in quantity divided by a 20% rise in price."],
          ["H", "If the demand for a commodity is elastic, a reduction in its price will", "increase total revenue", "reduce total revenue", "leave total revenue unchanged", "reduce quantity demanded", "Quantity rises more than proportionately."],
          ["H", "A government seeking the largest revenue from an indirect tax should tax goods whose demand is", "inelastic", "elastic", "perfectly elastic", "unitary", "Consumers continue to buy them despite the higher price."],
        ],
      },
      {
        week: 2,
        title: "Elasticity of supply and price control",
        subtopics: ["Price elasticity of supply", "Determinants of elasticity of supply", "Maximum price legislation", "Minimum price legislation"],
        objectives: ["Define and calculate price elasticity of supply", "State the factors that determine elasticity of supply", "Explain maximum price control and its effects", "Explain minimum price control and its effects"],
        lesson: {
          title: "Supply Response and Controlled Prices",
          summary: "Calculate elasticity of supply and explain the effects of maximum and minimum prices.",
          minutes: 40,
          notes: `## Price elasticity of supply (PES)
The **degree of responsiveness of quantity supplied to a change in price**.
**PES = percentage change in quantity supplied ÷ percentage change in price**
It is positive, because price and quantity supplied move in the same direction.
*Example 1:* price rises from ₦10 to ₦15 (50%); quantity supplied rises from 100 to 125 (25%): PES = 25 ÷ 50 = **0.5** — inelastic.
*Example 2:* price rises from ₦40 to ₦50 (25%); quantity supplied rises from 200 to 300 (50%): PES = 50 ÷ 25 = **2** — elastic.

## Types
| Type | Value | Curve |
|---|---|---|
| perfectly elastic | infinity | **horizontal** |
| elastic | greater than 1 | flat; cuts the price axis |
| unitary | 1 | any straight line through the origin |
| inelastic | less than 1 | steep; cuts the quantity axis |
| perfectly inelastic (fixed supply) | 0 | **vertical** |

## Determinants
- **time** — supply is fixed in the very short run, inelastic in the short run, elastic in the long run
- **nature of the product** — agricultural and mineral products are inelastic (they take time to produce); manufactured goods are more elastic
- **cost and ease of storage** — goods that can be stored have elastic supply; **perishable** goods are inelastic
- **availability of spare capacity** and of factors of production
- **mobility of factors**
- ease of entry of new firms
- the cost of increasing output

## Price control
The **fixing of prices by the government** instead of leaving them to market forces.
### Objectives
- to protect **consumers** from exploitation
- to protect **producers** (especially farmers) and workers
- to control inflation
- to prevent monopoly profits
- to stabilise prices and incomes

## Maximum price (price ceiling)
The **highest price** at which a good may legally be sold, fixed **below the equilibrium price** to help consumers.
### Effects
- quantity demanded exceeds quantity supplied — a **shortage (excess demand)**
- **queues**, **hoarding** and **black markets** (illegal sales above the controlled price)
- **rationing** becomes necessary
- under-the-counter sales and favouritism
- producers may cut output or quality
*Example:* equilibrium ₦100; maximum ₦70: at ₦70 buyers want 500 units but sellers offer only 300 — a shortage of 200 units.
Rent control and controlled fuel prices are examples.

## Minimum price (price floor)
The **lowest price** at which a good may legally be sold, fixed **above the equilibrium price** to help producers.
### Effects
- quantity supplied exceeds quantity demanded — a **surplus (excess supply)**
- the government may have to **buy and store** the surplus, or destroy or export it
- consumers pay more
- producers enjoy higher, more stable incomes
A **minimum wage** is a minimum price for labour; set above the equilibrium wage it may cause unemployment, though it protects low-paid workers. Guaranteed minimum prices for farm produce are another example.

## Other methods
- **rationing** — sharing limited supplies by coupon or quota
- **price stabilisation by buffer stocks** — an agency buys when prices are low and sells from stock when they are high
- **subsidies** — payments to producers that lower prices

## Problems of price control
difficult and costly to enforce; needs many inspectors; encourages corruption, smuggling and hoarding; discourages production.`,
          examples: `**Example 1.** Price rises from ₦20 to ₦30 and quantity supplied rises from 400 to 500. Find the PES. *Solution:* 25% ÷ 50% = **0.5** (inelastic).

**Example 2.** What happens when a maximum price is fixed below the equilibrium price? *Answer:* A **shortage** develops, leading to queues and black markets.

**Example 3.** Why is the supply of fresh tomatoes inelastic in the short run? *Answer:* They are **perishable** and take time to grow.`,
        },
        questions: [
          ["E", "The responsiveness of quantity supplied to a change in price is", "price elasticity of supply", "price elasticity of demand", "cross elasticity", "income elasticity", "It is positive for a normal supply curve."],
          ["E", "A maximum price fixed below the equilibrium price leads to", "a shortage", "a surplus", "equilibrium", "a fall in demand", "Quantity demanded exceeds quantity supplied."],
          ["E", "A minimum price is fixed mainly to protect", "producers", "consumers", "importers", "hoarders", "It guarantees them a higher price."],
          ["M", "When price rises from ₦10 to ₦15, quantity supplied rises from 100 to 125 units. The price elasticity of supply is", "0.5", "2", "1", "25", "A 25% change in quantity divided by a 50% change in price."],
          ["M", "In the short run, the supply of perishable agricultural products is", "inelastic", "elastic", "perfectly elastic", "unitary", "Output cannot be raised quickly or stored."],
          ["M", "The illegal sale of a controlled commodity above its fixed price takes place in", "a black market", "a stock market", "a perfect market", "a capital market", "It arises from shortages under price control."],
          ["M", "A national minimum wage is an example of", "a minimum price", "a maximum price", "an indirect tax", "a subsidy", "It sets a floor for the price of labour."],
          ["H", "A perfectly elastic supply curve is", "horizontal", "vertical", "downward-sloping", "backward-bending", "Any quantity is supplied at the given price."],
          ["H", "When price rises from ₦40 to ₦50, quantity supplied rises from 200 to 300 units. Supply is", "elastic, with a coefficient of 2", "inelastic, with a coefficient of 0.5", "unitary", "perfectly inelastic", "A 50% change in quantity divided by a 25% change in price."],
          ["H", "A minimum price fixed above the equilibrium price is likely to result in", "a surplus that the government may have to buy", "queues and rationing", "a black market", "a fall in quantity supplied", "Producers offer more than consumers will buy."],
        ],
      },
      {
        week: 3,
        title: "Theory of consumer behaviour: utility",
        subtopics: ["Meaning and types of utility", "The law of diminishing marginal utility", "Consumer equilibrium", "Utility and the demand curve"],
        objectives: ["Define total, average and marginal utility", "State and illustrate the law of diminishing marginal utility", "Explain the conditions for consumer equilibrium", "Derive the demand curve from marginal utility"],
        lesson: {
          title: "Satisfaction and Choice",
          summary: "Explain utility, diminishing marginal utility and the consumer's equilibrium.",
          minutes: 40,
          notes: `## Utility
The **satisfaction** a consumer derives from consuming a good or service. It is subjective, and is measured in imaginary units called **utils**.

## Concepts
- **total utility (TU)** — the total satisfaction from all the units consumed
- **marginal utility (MU)** — the **additional** satisfaction from consuming **one more unit**: MU = change in TU ÷ change in quantity
- **average utility (AU)** — TU ÷ number of units

## Utility schedule
| Units consumed | Total utility | Marginal utility |
|---|---|---|
| 1 | 10 | 10 |
| 2 | 18 | 8 |
| 3 | 24 | 6 |
| 4 | 28 | 4 |
| 5 | 30 | 2 |
| 6 | 30 | 0 |
| 7 | 28 | −2 |

### Relationships
- TU rises as long as MU is **positive**
- **TU is at its maximum when MU is zero** — the point of **satiety**
- when MU is **negative**, TU falls (disutility)
- the MU curve slopes downwards

## The law of diminishing marginal utility
**As more and more units of a commodity are consumed, the satisfaction derived from each additional unit declines.**
The first bottle of water to a thirsty person gives great satisfaction; each further bottle gives less.
### Assumptions
the units are identical; consumption is continuous; tastes and income do not change; the consumer is rational.
### Exceptions
collectors' items and hobbies; addictive goods; money (for some people).

## Consumer equilibrium
A consumer is in equilibrium when he gets the **greatest possible satisfaction** from his limited income and has no reason to change his pattern of spending.
### One commodity
He buys up to the point where **MU = price**.
If MU is greater than the price he buys more; if less, he buys fewer.
### Several commodities — the law of equi-marginal utility
Satisfaction is greatest when the **marginal utility per naira is the same for every good**:
**MUx ÷ Px = MUy ÷ Py = MUz ÷ Pz**, with all income spent.
*Example:* MUx = 40 utils and Px = ₦10, so MU per naira = 4. If Py = ₦5, equilibrium requires MUy = 4 × 5 = **20 utils**.
If MUx ÷ Px exceeds MUy ÷ Py, the consumer gains by buying more of X and less of Y; as he does so, MUx falls and MUy rises until the two ratios are equal.

## Utility and the demand curve
Because marginal utility diminishes, a consumer will buy an extra unit **only if its price is lower**. At equilibrium MU = P; a fall in price makes MU greater than P, so he buys more until MU falls to the new price. Hence the demand curve **slopes downwards** — it is, in effect, the marginal utility curve.

## The paradox of value
Water is essential but cheap; diamonds are inessential but dear. The explanation: **price depends on marginal, not total, utility**. Water is abundant, so its marginal utility is low; diamonds are scarce, so their marginal utility is high.

## Consumer surplus
The difference between what a consumer is **willing to pay** and what he **actually pays**. If he would pay ₦100 for a book priced at ₦70, his surplus is ₦30.

## Limitations of the utility approach
utility cannot really be measured; tastes change; consumers do not calculate so precisely; goods are often not divisible. The **indifference curve** approach avoids measuring utility by ranking combinations of goods.`,
          examples: `**Example 1.** Total utility from 3 units is 24 utils and from 4 units 28 utils. Find the marginal utility of the 4th unit. *Solution:* 28 − 24 = **4 utils**.

**Example 2.** When is total utility at its maximum? *Answer:* When **marginal utility is zero**.

**Example 3.** MUx = 60, Px = ₦12, Py = ₦6. Find MUy at equilibrium. *Solution:* 60 ÷ 12 = 5 per naira; MUy = 5 × 6 = **30 utils**.`,
        },
        questions: [
          ["E", "The satisfaction derived from consuming a commodity is called", "utility", "demand", "income", "elasticity", "It is measured in imaginary units called utils."],
          ["E", "The additional satisfaction obtained from consuming one more unit of a commodity is", "marginal utility", "total utility", "average utility", "consumer surplus", "It is the change in total utility."],
          ["E", "Total utility is at its maximum when marginal utility is", "zero", "at its highest", "negative", "equal to total utility", "This is the point of satiety."],
          ["M", "A consumer's total utility from 1, 2 and 3 units of a good is 10, 18 and 24 utils. The marginal utility of the third unit is", "6 utils", "8 utils", "24 utils", "14 utils", "24 − 18. Answer: 6 utils."],
          ["M", "The law of diminishing marginal utility states that as more units of a good are consumed, the", "satisfaction from each extra unit falls", "total utility falls at once", "price of the good rises", "consumer's income falls", "Each successive unit adds less."],
          ["M", "A consumer buying a single commodity is in equilibrium when", "marginal utility equals price", "total utility equals price", "marginal utility is zero", "average utility is at a maximum", "He buys until the last unit is just worth its price."],
          ["M", "When marginal utility is negative, total utility is", "falling", "rising", "constant", "zero", "Extra units now reduce satisfaction."],
          ["H", "A consumer is in equilibrium with MUx = 40 utils, Px = ₦10 and Py = ₦5. The marginal utility of Y must be", "20 utils", "80 utils", "8 utils", "200 utils", "MU per naira must be 4 for both goods."],
          ["H", "The demand curve slopes downwards because, as marginal utility diminishes, a consumer will buy more units only if", "the price falls", "the price rises", "his income falls", "supply is reduced", "At equilibrium, marginal utility equals price."],
          ["H", "Diamonds are more expensive than water, although water is more useful, because", "price depends on marginal utility, which is high for scarce goods", "water has no total utility", "diamonds have a low marginal utility", "water is not an economic good anywhere", "This resolves the paradox of value."],
        ],
      },
      {
        week: 4,
        title: "Theory of production",
        subtopics: ["The production function and time periods", "Total, average and marginal product", "The law of variable proportions", "Returns to scale"],
        objectives: ["Explain the production function and the short and long run", "Calculate total, average and marginal product", "State and illustrate the law of diminishing returns", "Distinguish returns to a factor from returns to scale"],
        lesson: {
          title: "Inputs and Output",
          summary: "Explain the relationship between inputs and output in the short and long run.",
          minutes: 40,
          notes: `## Production function
The relationship between the **quantity of inputs** (land, labour, capital) and the **quantity of output**: Q = f(L, K).

## Time periods
- **short run** — a period in which **at least one factor is fixed** (usually land or plant); output can be changed only by varying the other factors
- **long run** — a period long enough for **all factors to be varied**
A **fixed factor** does not change with output in the short run; a **variable factor** does.

## Concepts of product
- **total product (TP)** — the total output from all the units of the variable factor
- **average product (AP)** — output per unit of the variable factor: **AP = TP ÷ number of units**
- **marginal product (MP)** — the addition to total product from employing **one more unit**: **MP = change in TP ÷ change in the factor**

## Production schedule (land fixed)
| Workers | Total product | Average product | Marginal product |
|---|---|---|---|
| 1 | 10 | 10 | 10 |
| 2 | 24 | 12 | 14 |
| 3 | 36 | 12 | 12 |
| 4 | 44 | 11 | 8 |
| 5 | 48 | 9.6 | 4 |
| 6 | 48 | 8 | 0 |
| 7 | 42 | 6 | −6 |

### Relationships
- when **MP is greater than AP**, AP is **rising**
- when MP is less than AP, AP is falling
- MP cuts AP at the **maximum** of AP
- **TP is at its maximum when MP is zero**; when MP is negative, TP falls

## The law of variable proportions (diminishing returns)
**As more and more units of a variable factor are added to a fixed factor, the marginal product will, after a point, begin to diminish.**
### Three stages
1. **increasing returns** — MP rises; the fixed factor is being used more fully and labour is specialised
2. **diminishing returns** — MP falls but is still positive; TP rises at a decreasing rate — the **rational stage** of production
3. **negative returns** — MP is negative; TP falls; too many workers for the fixed factor
### Assumptions
one factor is fixed; technology is unchanged; the units of the variable factor are identical; it applies to the short run.
### Importance
It explains why costs eventually rise in the short run and why adding labour to a fixed area of land cannot increase output without limit.

## Returns to scale (the long run)
What happens to output when **all inputs are increased in the same proportion**.
- **increasing returns to scale** — output rises **more than** proportionately (doubling inputs more than doubles output) — economies of scale
- **constant returns to scale** — output rises in the same proportion
- **decreasing returns to scale** — output rises **less than** proportionately — diseconomies of scale

## Returns to a factor and returns to scale
| Law of variable proportions | Returns to scale |
|---|---|
| short run | long run |
| one factor varied, others fixed | all factors varied together |
| factor proportions change | proportions stay the same |

## Combining factors
A firm chooses the **least-cost combination** of factors — substituting cheaper factors for dearer ones. Methods may be **labour-intensive** or **capital-intensive**.

## Productivity
Output per unit of input — per worker, per hectare. It rises with better tools, training, management and technology.`,
          examples: `**Example 1.** 4 workers produce 44 bags and 5 workers produce 48 bags. Find the marginal product of the 5th worker. *Solution:* 48 − 44 = **4 bags**.

**Example 2.** Find the average product when 6 workers produce 48 bags. *Solution:* 48 ÷ 6 = **8 bags**.

**Example 3.** Inputs are doubled and output trebles. What kind of returns to scale is this? *Answer:* **Increasing** returns to scale.`,
        },
        questions: [
          ["E", "Total product divided by the number of units of the variable factor gives", "average product", "marginal product", "total cost", "fixed product", "It is output per worker."],
          ["E", "The addition to total product from employing one more unit of a variable factor is", "marginal product", "average product", "total product", "fixed cost", "It is the change in total product."],
          ["E", "The short run is a period in which", "at least one factor of production is fixed", "all factors are variable", "no production takes place", "technology always changes", "Output is changed by varying the other factors."],
          ["M", "With 2 workers total product is 24 units and with 3 workers it is 36 units. The marginal product of the third worker is", "12 units", "36 units", "60 units", "8 units", "36 − 24. Answer: 12 units."],
          ["M", "Four workers produce a total of 44 units. The average product of labour is", "11 units", "44 units", "8 units", "40 units", "44 ÷ 4. Answer: 11 units."],
          ["M", "The law of diminishing returns operates when", "increasing amounts of a variable factor are added to a fixed factor", "all factors are increased together", "technology improves", "the firm reduces all inputs", "Marginal product eventually falls."],
          ["M", "Total product is at its maximum when marginal product is", "zero", "at its maximum", "negative", "equal to average product", "Any further unit would reduce total output."],
          ["H", "When marginal product is greater than average product, average product is", "rising", "falling", "at its maximum", "zero", "The extra unit pulls the average up."],
          ["H", "If a firm doubles all its inputs and output more than doubles, the firm is experiencing", "increasing returns to scale", "decreasing returns to scale", "constant returns to scale", "diminishing marginal returns", "This reflects economies of scale."],
          ["H", "A rational producer will operate in the stage of production where", "marginal product is falling but still positive", "marginal product is negative", "marginal product is rising", "total product is falling", "Output is still rising, and the fixed factor is fully used."],
        ],
      },
      {
        week: 5,
        title: "Theory of costs and revenue",
        subtopics: ["Concepts of cost", "Short-run cost curves", "Concepts of revenue", "Profit and the equilibrium of the firm"],
        objectives: ["Define and calculate the types of cost", "Describe the shapes of the short-run cost curves", "Define and calculate total, average and marginal revenue", "Calculate profit and state the condition for profit maximisation"],
        lesson: {
          title: "Costs, Revenue and Profit",
          summary: "Calculate costs and revenue and find the output that maximises profit.",
          minutes: 40,
          notes: `## Cost of production
The expenses incurred in producing goods. The **accountant's cost** covers only money (explicit) costs; the **economist's cost** adds **implicit costs** — the opportunity cost of the owner's own labour, capital and premises.

## Short-run costs
- **fixed cost (FC)** — does **not vary with output**; paid even when output is zero: rent, interest on loans, insurance, salaries of permanent staff. Also called overhead or indirect cost
- **variable cost (VC)** — **varies directly with output**: raw materials, fuel, wages of casual labour. Also called prime or direct cost
- **total cost (TC) = FC + VC**
- **average fixed cost (AFC) = FC ÷ Q**
- **average variable cost (AVC) = VC ÷ Q**
- **average (total) cost (AC or ATC) = TC ÷ Q = AFC + AVC**
- **marginal cost (MC)** — the addition to total cost from producing **one more unit**: MC = change in TC ÷ change in Q

### Cost schedule (FC = ₦100)
| Output | FC | VC | TC | AC | MC |
|---|---|---|---|---|---|
| 0 | 100 | 0 | 100 | — | — |
| 1 | 100 | 50 | 150 | 150 | 50 |
| 2 | 100 | 80 | 180 | 90 | 30 |
| 3 | 100 | 120 | 220 | 73.3 | 40 |
| 4 | 100 | 180 | 280 | 70 | 60 |
| 5 | 100 | 270 | 370 | 74 | 90 |

*Example:* at an output of 10 units, FC = ₦100 and VC = ₦200. TC = ₦300; ATC = ₦30; AFC = ₦10; AVC = ₦20. If TC rises to ₦340 at 11 units, MC = **₦40**.

## Shapes of the cost curves
- the **FC** curve is a horizontal line
- the **AFC** curve **falls continuously** as output rises (the fixed cost is spread over more units)
- the **AVC, AC and MC** curves are **U-shaped** — falling at first (increasing returns), then rising (diminishing returns)
- the **MC curve cuts the AVC and AC curves at their lowest points**
- when MC is below AC, AC is falling; when MC is above AC, AC is rising

## Long-run costs
All costs are variable. The long-run average cost curve is also U-shaped, because of **economies** and then **diseconomies of scale**; it is the "envelope" of the short-run curves.

## Revenue
- **total revenue (TR) = price × quantity sold**
- **average revenue (AR) = TR ÷ Q = price**
- **marginal revenue (MR)** — the addition to total revenue from selling **one more unit**
Under **perfect competition** the price is constant, so **P = AR = MR** — a horizontal line. Under **monopoly** and imperfect competition the firm must lower its price to sell more, so AR slopes downwards and MR lies below it.

## Profit
**profit = total revenue − total cost**
*Example:* 10 units sold at ₦50 each: TR = ₦500; with TC = ₦300, profit = **₦200**.
*Example:* 20 units sold at ₦15; FC = ₦100; AVC = ₦8: TR = ₦300; TC = 100 + 160 = ₦260; profit = **₦40**.
- **normal profit** — the minimum return needed to keep the entrepreneur in the business; it is included in cost; TR = TC
- **supernormal (abnormal) profit** — TR greater than TC
- **loss** — TR less than TC
- **break-even point** — TR = TC

## Equilibrium of the firm
A firm maximises profit at the output where
**marginal cost = marginal revenue (MC = MR)**, with MC rising.
If MR is greater than MC, another unit adds to profit; if MC is greater than MR, it reduces profit.

## Shut-down point
In the short run a firm continues to produce as long as price covers **average variable cost**; below that it does better to close, losing only its fixed costs.`,
          examples: `**Example 1.** A firm's fixed cost is ₦500 and variable cost ₦1500 at an output of 100 units. Find the average total cost. *Solution:* 2000 ÷ 100 = **₦20**.

**Example 2.** Total cost rises from ₦800 to ₦860 when output rises from 20 to 21 units. Find the marginal cost. *Solution:* **₦60**.

**Example 3.** A firm sells 50 units at ₦40 each; total cost is ₦1700. Find the profit. *Solution:* 2000 − 1700 = **₦300**.`,
        },
        questions: [
          ["E", "Costs that do not vary with the level of output are", "fixed costs", "variable costs", "marginal costs", "prime costs", "Rent is an example."],
          ["E", "Total cost is the sum of", "fixed cost and variable cost", "average cost and marginal cost", "total revenue and profit", "price and quantity", "TC = FC + VC. Answer: fixed cost and variable cost."],
          ["E", "Total revenue is obtained by multiplying", "price by quantity sold", "cost by quantity produced", "profit by price", "fixed cost by output", "TR = P × Q. Answer: price by quantity sold."],
          ["M", "At an output of 10 units, fixed cost is ₦100 and variable cost is ₦200. The average total cost is", "₦30", "₦300", "₦20", "₦10", "Total cost of ₦300 divided by 10."],
          ["M", "A firm's fixed cost is ₦100. At an output of 10 units, its average fixed cost is", "₦10", "₦100", "₦1000", "₦1", "100 ÷ 10. Answer: ₦10."],
          ["M", "Total cost rises from ₦300 to ₦340 when output increases from 10 to 11 units. The marginal cost of the eleventh unit is", "₦40", "₦340", "₦30.9", "₦640", "The change in total cost."],
          ["M", "A firm sells 10 units at ₦50 each and its total cost is ₦300. Its profit is", "₦200", "₦500", "₦800", "₦20", "Total revenue of ₦500 less total cost."],
          ["H", "A firm maximises its profit at the level of output where", "marginal cost equals marginal revenue", "average cost equals average revenue", "total cost is lowest", "total revenue equals total cost", "Producing more or less would reduce profit."],
          ["H", "As output increases, the average fixed cost curve", "falls continuously", "rises continuously", "is U-shaped", "remains horizontal", "The fixed cost is spread over more units."],
          ["H", "A firm sells 20 units at ₦15 each. Its fixed cost is ₦100 and its average variable cost is ₦8. Its profit is", "₦40", "₦140", "₦300", "₦200", "Revenue of ₦300 less total cost of ₦260."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Market structures",
        subtopics: ["Perfect competition", "Monopoly", "Monopolistic competition and oligopoly", "Price discrimination and control of monopoly"],
        objectives: ["State the features of perfect competition", "Describe monopoly, its sources, merits and demerits", "Describe monopolistic competition and oligopoly", "Explain price discrimination and how monopoly is controlled"],
        lesson: {
          title: "Types of Market",
          summary: "Compare perfect competition, monopoly, monopolistic competition and oligopoly.",
          minutes: 40,
          notes: `## Market structure
The characteristics of a market that determine how firms behave: the **number of buyers and sellers**, the **nature of the product**, **freedom of entry** and **knowledge** of market conditions.

## Perfect competition
An ideal market.
### Features
- a **large number of buyers and sellers** — none can influence the price
- a **homogeneous (identical) product**
- **free entry and exit**
- **perfect knowledge** of prices
- **perfect mobility** of factors
- no transport costs; no government interference; no preferential treatment
### Consequences
- each firm is a **price taker**
- the firm's demand curve is **horizontal (perfectly elastic)**: **P = AR = MR**
- equilibrium where MC = MR
- in the **short run** a firm may make supernormal profit or a loss; in the **long run**, free entry and exit ensure **only normal profit**, with price equal to the lowest average cost
The nearest real examples are the markets for foreign exchange, stocks and staple farm produce.

## Monopoly
A market with a **single seller** of a product that has **no close substitute**.
### Sources of monopoly power (barriers to entry)
- **legal** — patents, copyrights, Acts of Parliament (public corporations)
- **natural** — sole ownership of a raw material
- **large capital** requirements; economies of scale
- **mergers and cartels**
- trade marks and advertising
- technical know-how
### Features
- the firm **is** the industry
- it is a **price maker** — but it cannot fix both price and quantity
- its demand (AR) curve slopes **downwards**; **MR lies below AR**
- it can earn **supernormal profit even in the long run**
### Advantages
economies of scale; funds for research; no wasteful competition; stable prices; suits public utilities.
### Disadvantages
higher prices and restricted output; exploitation of consumers; little choice; inefficiency; unequal distribution of income.

## Monopolistic competition
**Many sellers** of **differentiated products** — similar but not identical: soap, toothpaste, restaurants, clothing.
- **product differentiation** through brand names, packaging, quality and advertising
- each firm has some control over its price; its demand curve slopes downwards but is elastic
- free entry and exit — only **normal profit in the long run**
- **non-price competition**; heavy advertising

## Oligopoly
A market dominated by a **few large firms**: cement, petroleum marketing, telecommunications, airlines.
- firms are **interdependent** — each watches the others' reactions
- prices tend to be **rigid** (the kinked demand curve)
- **collusion** — firms may form a **cartel** to fix prices and output (OPEC is a cartel of countries)
- price leadership; non-price competition
- barriers to entry
A **duopoly** has two sellers.

## On the buyers' side
**monopsony** — a single buyer; **oligopsony** — a few buyers.

## Summary
| | Perfect competition | Monopolistic competition | Oligopoly | Monopoly |
|---|---|---|---|---|
| sellers | very many | many | few | one |
| product | identical | differentiated | identical or differentiated | unique |
| entry | free | free | restricted | blocked |
| control over price | none | some | considerable | great |
| long-run profit | normal | normal | may be supernormal | supernormal |

## Price discrimination
Selling the **same product at different prices to different buyers** for reasons not connected with cost.
### Conditions
- the seller must have **monopoly power**
- the markets must be **separable** — no resale from the cheaper to the dearer market
- the markets must have **different elasticities of demand** — a higher price where demand is inelastic
### Examples
different rates for industrial and domestic electricity; lower fares for children and students; dumping goods abroad at lower prices.

## Control of monopoly
legislation against restrictive practices; price control; taxation of excess profit; nationalisation; removing barriers to entry and imports; consumer protection agencies; regulatory commissions.`,
          examples: `**Example 1.** Give three features of perfect competition. *Answer:* **Many buyers and sellers, a homogeneous product and free entry and exit**.

**Example 2.** Why can a monopolist earn supernormal profit in the long run? *Answer:* **Barriers prevent new firms from entering** the market.

**Example 3.** State two conditions for price discrimination. *Answer:* **Separable markets** with **different elasticities of demand**.`,
        },
        questions: [
          ["E", "A market with a single seller of a commodity that has no close substitute is", "a monopoly", "perfect competition", "an oligopoly", "a duopoly", "The firm is the whole industry."],
          ["E", "A market dominated by a few large sellers is", "an oligopoly", "a monopoly", "perfect competition", "a monopsony", "The firms are interdependent."],
          ["E", "A feature of perfect competition is", "a large number of buyers and sellers", "a single seller", "differentiated products", "barriers to entry", "No one can influence the price."],
          ["M", "Under perfect competition the product is", "homogeneous", "differentiated", "unique", "rationed", "The goods of all sellers are identical."],
          ["M", "A firm in a perfectly competitive market is described as", "a price taker", "a price maker", "a price discriminator", "a price leader", "It accepts the price fixed by the market."],
          ["M", "The chief feature of monopolistic competition is", "product differentiation", "a single seller", "identical products", "the absence of advertising", "Brands are similar but not identical."],
          ["M", "A market in which there is only one buyer is called", "a monopsony", "a monopoly", "a duopoly", "an oligopoly", "The buyer can influence the price paid."],
          ["H", "For a firm under perfect competition", "price equals average revenue and marginal revenue", "marginal revenue is below average revenue", "price is above average revenue", "average revenue is zero", "Its demand curve is horizontal."],
          ["H", "A monopolist can practise price discrimination only if the markets", "can be kept separate and have different elasticities of demand", "have identical elasticities of demand", "allow free resale between buyers", "are perfectly competitive", "Otherwise buyers would resell or pay the same price."],
          ["H", "In the long run, firms in perfect competition earn only normal profit because", "there is free entry and exit of firms", "the government fixes prices", "there is a single seller", "products are differentiated", "Supernormal profit attracts new firms until it disappears."],
        ],
      },
      {
        week: 2,
        title: "Location and localisation of industry",
        subtopics: ["Factors influencing the location of industry", "Localisation of industry", "Advantages and disadvantages of localisation", "Government and industrial location"],
        objectives: ["Explain the factors that influence the location of industry", "Explain localisation of industry with examples", "State the advantages and disadvantages of localisation", "Explain the role of government in the location of industry"],
        lesson: {
          title: "Where Firms Are Sited",
          summary: "Explain the factors that determine the location and concentration of industries.",
          minutes: 40,
          notes: `## Terms
- **plant** — a factory or unit of production
- **firm** — a business unit under one management, which may own several plants
- **industry** — all the firms producing the same or similar goods
- **location of industry** — the **siting** of a firm or industry in a particular place
- **localisation of industry** — the **concentration of many firms of the same industry** in one area

## Factors influencing location
- **nearness to raw materials** — especially for bulky, heavy or **weight-losing** materials: cement near limestone, sawmills near forests, sugar mills near cane
- **nearness to the market** — for bulky, fragile or **perishable** products, or goods that gain weight in manufacture: bread, soft drinks, furniture
- **power and fuel** — electricity, gas
- **transport and communication** — good roads, railways, ports
- **labour** — skilled and unskilled
- **capital** and banking facilities
- **water supply**
- **land** — suitable, cheap sites
- **government policy** — incentives, industrial estates, political considerations
- **climate**; security; political stability
- **external economies** already present in an area
- **industrial inertia** — the tendency to remain where an industry first grew

## Localisation of industry
Examples in Nigeria: oil refining and petrochemicals in the Niger Delta; cement near limestone deposits; textiles in Kaduna and Kano; motor assembly and many light industries in the Lagos–Ikeja–Otta axis; leather in Kano; vehicle parts at Nnewi.

### Advantages
- a **pool of skilled labour**
- growth of **subsidiary (ancillary) industries** supplying parts and services
- development of **infrastructure** — roads, power, water
- **specialised services** — banks, insurance, training institutions, markets
- **external economies** of scale; lower costs
- exchange of ideas; research
- employment and rapid development of the area
- the area gains a reputation for the product

### Disadvantages
- **structural unemployment** if the industry declines — the whole area suffers
- **congestion** — traffic, housing shortage, slums
- **pollution**
- **uneven development** — other regions are neglected
- **rural–urban migration**
- higher rents and wages
- the area is **vulnerable** in war
- narrow range of skills

## Role of government
Governments influence location in order to
- achieve **balanced regional development**
- reduce unemployment in depressed areas
- relieve congestion in big cities
- use local resources
- for strategic and political reasons
### Methods
- **industrial estates** — areas provided with roads, power and water for factories
- tax holidays, grants and cheap loans for firms in less developed areas
- direct siting of public enterprises (steel at Ajaokuta, refineries at Kaduna and Warri)
- **export processing zones**
- providing infrastructure
- licensing and planning controls
Location decided on political rather than economic grounds may raise costs — as when a plant is sited far from its raw materials and market.

## Small-scale and cottage industries
They are widely dispersed, use local materials and labour, need little capital and help to spread employment to rural areas.

## Importance of industrialisation
employment; higher national income; saving and earning of foreign exchange; diversification; development of skills and technology; use of local raw materials.

## Problems of industrialisation in Nigeria
inadequate capital; unreliable power; poor transport; dependence on imported inputs; shortage of skilled manpower; small market; unstable policies.`,
          examples: `**Example 1.** Distinguish location from localisation of industry. *Answer:* **Location** is the siting of a firm; **localisation** is the **concentration of firms of one industry** in an area.

**Example 2.** Why are bakeries located near their markets? *Answer:* Bread is **perishable** and bulky.

**Example 3.** Give two disadvantages of localisation. *Answer:* **Structural unemployment** if the industry declines, and **congestion**.`,
        },
        questions: [
          ["E", "The concentration of many firms of the same industry in a particular area is", "localisation of industry", "location of industry", "nationalisation", "diversification", "The area becomes known for that product."],
          ["E", "A group of firms producing the same or similar goods is called", "an industry", "a plant", "a cartel only", "a market", "A firm may own several plants."],
          ["E", "A cement factory is usually located near", "limestone deposits", "the seaport only", "a university", "a textile mill", "The raw material is bulky."],
          ["M", "Industries that use bulky, weight-losing raw materials tend to be located near", "the source of raw materials", "the market", "the capital city", "the airport", "It saves the cost of transporting waste."],
          ["M", "An advantage of localisation of industry is", "the growth of subsidiary industries", "structural unemployment", "traffic congestion", "pollution", "Ancillary firms supply parts and services."],
          ["M", "A disadvantage of the localisation of industry is that it", "may cause mass unemployment if the industry declines", "creates a pool of skilled labour", "attracts banks", "improves infrastructure", "The area depends on one industry."],
          ["M", "An area provided by the government with roads, power and water for the siting of factories is", "an industrial estate", "a trade fair", "a commodity board", "a stock exchange", "It attracts firms to chosen places."],
          ["H", "Governments sometimes influence the location of industries mainly in order to", "achieve balanced regional development", "increase congestion in cities", "reduce total output", "discourage employment", "Benefits are spread to less developed areas."],
          ["H", "Firms producing perishable or fragile goods are usually sited", "close to their markets", "close to mineral deposits", "far from consumers", "only in rural areas", "This reduces spoilage and breakage in transit."],
          ["H", "The benefits that firms enjoy because many similar firms are concentrated in one area are", "external economies of scale", "internal economies of scale", "diseconomies of scale", "fixed costs", "They arise outside the individual firm."],
        ],
      },
      {
        week: 3,
        title: "Trade unions and industrial relations",
        subtopics: ["Trade unions: aims and types", "Collective bargaining and weapons of trade unions", "Employers' associations", "Industrial disputes and their settlement"],
        objectives: ["State the aims and types of trade union", "Explain collective bargaining and the weapons used by unions", "Describe employers' associations and their weapons", "Explain how industrial disputes are settled"],
        lesson: {
          title: "Workers, Employers and Disputes",
          summary: "Describe trade unions, employers' associations and the settlement of industrial disputes.",
          minutes: 40,
          notes: `## Trade union
An **association of workers formed to protect and promote the interests of its members**, especially over wages and conditions of work.

### Aims and functions
- to secure **higher wages**
- to improve **conditions of work** — hours, safety, leave
- to protect members from **unfair dismissal** and victimisation
- to secure **job security**
- to provide **welfare** — loans, education, legal aid
- to take part in **policy making**; to advise government
- to educate and inform members
- to promote unity among workers

### Types
- **craft union** — workers with the **same skill**, whatever the industry: carpenters, electricians
- **industrial union** — all workers in **one industry**, whatever their skill: NUPENG (petroleum and natural gas workers), the textile workers' union
- **general union** — workers of all kinds, skilled and unskilled
- **white-collar (professional) union** — clerical and professional staff: the Nigeria Union of Teachers (NUT), the Academic Staff Union of Universities (ASUU)

### Central labour organisations in Nigeria
The **Nigeria Labour Congress (NLC)**, formed in **1978**, mainly for junior workers' unions, and the **Trade Union Congress (TUC)** for senior staff associations.

## Collective bargaining
**Negotiation between representatives of workers (the union) and employers** on wages and conditions of service. It is the normal, peaceful way of settling differences; the result is a collective agreement.

## Weapons of trade unions
- **collective bargaining**
- **work-to-rule** — workers follow every rule strictly, slowing production
- **go-slow**
- **overtime ban**
- **picketing** — standing at the gates to persuade others not to work
- **sit-down strike**
- **strike** — total withdrawal of labour: the strongest weapon and the last resort
- threats, ultimatums and demonstrations
- **closed shop** — only union members may be employed

## Employers' associations
Organisations of employers in an industry formed to deal jointly with unions and government. Examples: the **Nigeria Employers' Consultative Association (NECA)**, the Manufacturers Association of Nigeria (MAN), chambers of commerce.
### Functions
negotiating with unions; advising members and government; settling disputes; providing information and training.
### Weapons of employers
- **lock-out** — closing the workplace against the workers
- **dismissal** or retrenchment
- **blacklisting** of union leaders
- use of **strike-breakers**
- "no work, no pay"

## Industrial disputes
Disagreements between workers and employers.
### Causes
low wages and delayed salaries; poor conditions; unfair dismissal; refusal to recognise the union; failure to honour agreements; poor communication.
### Settlement
1. **collective bargaining** (negotiation)
2. **mediation / conciliation** — a neutral third party helps the two sides to agree
3. **arbitration** — the dispute goes to the **Industrial Arbitration Panel**, whose decision (award) is binding
4. the **National Industrial Court** — the final judicial body for labour disputes
5. a board of inquiry
The Ministry of Labour supervises the process.

## When can a union raise wages successfully?
- when the **demand for labour is inelastic** — the product has few substitutes or wages are a small part of total cost
- when **productivity** is rising
- when the firm is making **high profits**
- when the union is strong and united
- when the economy is booming
Otherwise higher wages may lead to **unemployment** or higher prices.

## Effects of strikes
loss of output and of workers' pay; shortage of goods; loss of government revenue; inconvenience to the public; damaged relations; but they may win better conditions.

## Problems of trade unions in Nigeria
inadequate funds; poor leadership and corruption; government interference; disunity and rivalry; ignorance among members; victimisation of leaders.`,
          examples: `**Example 1.** Define collective bargaining. *Answer:* **Negotiation between a union and employers** on wages and conditions of service.

**Example 2.** Name two weapons of trade unions and one of employers. *Answer:* Unions: **strike** and **work-to-rule**; employers: **lock-out**.

**Example 3.** What is arbitration? *Answer:* Settlement of a dispute by a **neutral panel whose decision is binding**.`,
        },
        questions: [
          ["E", "An association of workers formed to protect the interests of its members is", "a trade union", "an employers' association", "a cartel", "a co-operative bank", "It bargains for better wages and conditions."],
          ["E", "The total withdrawal of labour by workers to press their demands is a", "strike", "lock-out", "picket", "merger", "It is the strongest weapon of a trade union."],
          ["E", "The central body of junior workers' unions in Nigeria is the", "Nigeria Labour Congress", "Nigeria Employers' Consultative Association", "Manufacturers Association of Nigeria", "National Industrial Court", "It was formed in 1978."],
          ["M", "Negotiation between a trade union and employers over wages and conditions of work is called", "collective bargaining", "arbitration", "picketing", "blacklisting", "It is the normal way of settling differences."],
          ["M", "The closing of a workplace by an employer to force workers to accept his terms is", "a lock-out", "a strike", "a go-slow", "a closed shop", "It is the employer's counterpart of a strike."],
          ["M", "A union made up of workers with the same skill, regardless of the industry in which they work, is", "a craft union", "an industrial union", "a general union", "an employers' union", "Carpenters' and electricians' unions are examples."],
          ["M", "When workers strictly follow every regulation so as to slow down production, they are said to", "work to rule", "picket", "lock out", "arbitrate", "It is a form of industrial action short of a strike."],
          ["H", "The settlement of an industrial dispute by a panel whose decision is binding on both parties is", "arbitration", "conciliation", "negotiation", "picketing", "In Nigeria the Industrial Arbitration Panel performs this role."],
          ["H", "A trade union is most likely to win higher wages without causing unemployment when", "the demand for labour is inelastic and productivity is rising", "the demand for labour is very elastic", "the firm is making losses", "there are many unemployed workers", "Employers can then afford and need the workers."],
          ["H", "An arrangement under which only members of a trade union may be employed in a firm is called", "a closed shop", "a lock-out", "a sit-down strike", "an overtime ban", "It strengthens the union's bargaining power."],
        ],
      },
      {
        week: 4,
        title: "Inflation and deflation",
        subtopics: ["Meaning and types of inflation", "Causes of inflation", "Effects of inflation", "Control of inflation and deflation"],
        objectives: ["Define inflation and describe its types", "Explain the causes of inflation", "Explain the effects of inflation on different groups", "Describe the control of inflation and explain deflation"],
        lesson: {
          title: "Changes in the General Price Level",
          summary: "Explain the causes, effects and control of inflation and deflation.",
          minutes: 40,
          notes: `## Inflation
A **persistent (continuous) rise in the general price level** — a fall in the value of money. A single rise in a few prices is not inflation.

## Types
- **demand-pull inflation** — total demand exceeds the supply of goods at full employment: "**too much money chasing too few goods**"
- **cost-push inflation** — rising **costs of production** (wages, raw materials, fuel, imported inputs) are passed on as higher prices
- **imported inflation** — from higher prices of imports
- **creeping (mild) inflation** — prices rise slowly
- **galloping** inflation — prices rise rapidly
- **hyperinflation (runaway inflation)** — prices rise so fast that money loses almost all value and people lose confidence in it (Germany in 1923; Zimbabwe in 2008)
- **stagflation** — inflation combined with **unemployment** and stagnant output

## Causes
- an **increase in the money supply** — printing money, excessive bank lending
- **deficit financing** by government
- **increased demand** — higher incomes, population growth
- **higher wages** not matched by productivity
- **rising costs** of raw materials, fuel and power
- **low production** — shortages of food and manufactured goods
- **dependence on imports** and **depreciation of the currency**
- **hoarding** and the activities of middlemen
- war and natural disasters
- indirect taxes

## Effects
### Losers
- **fixed-income earners** — pensioners, salaried workers
- **creditors (lenders)** — they are repaid in money worth less
- **savers** — the real value of savings falls
- consumers generally
### Gainers
- **debtors (borrowers)** — they repay less in real terms
- **businessmen and holders of real assets** — land, buildings, goods, shares
- workers in strong unions
### On the economy
- the **value of money falls**; the standard of living of many drops
- **saving is discouraged**; people prefer goods to money
- **exports become dearer** and imports more attractive — the balance of payments worsens
- demands for higher wages; industrial unrest
- uncertainty hinders planning
- income is redistributed unfairly
- mild inflation may stimulate production and employment, since profits rise

## Control
### Monetary measures (contractionary)
- **raise the bank rate (interest rates)**
- **sell securities** in the open market
- **raise the cash reserve ratio**; special deposits; credit restrictions
### Fiscal measures
- **increase taxes** — to reduce spending power
- **reduce government expenditure**; aim at a budget surplus
### Direct and other measures
- **price control** and rationing
- **wage restraint** (an incomes policy)
- **increase production** — food, manufactures, power
- import essential goods to relieve shortages
- encourage saving
- check hoarding and smuggling

## Measuring inflation
By the **consumer price index (CPI)**. If the index rises from 100 to 125, prices have risen by 25%, and the value of money has fallen to 100 ÷ 125 = 0.8 of its former level — a fall of **20%**.

## Deflation
A **persistent fall in the general price level** — the value of money rises.
### Causes
a fall in the money supply; reduced spending; over-production; high taxes; tight credit.
### Effects
falling profits and output; **unemployment**; debtors lose and creditors gain; fixed-income earners gain; exports become cheaper.
### Control
The opposite of anti-inflation policy: lower interest rates; buy securities; reduce taxes; increase government spending (a budget deficit).

## Reflation
Deliberate action to raise the level of economic activity and prices after a depression.`,
          examples: `**Example 1.** Distinguish demand-pull from cost-push inflation. *Answer:* **Demand-pull** arises from **excess demand**; **cost-push** from **rising costs of production**.

**Example 2.** Who gains and who loses during inflation? *Answer:* **Debtors gain**; **creditors and fixed-income earners lose**.

**Example 3.** The price index rises from 100 to 150. By how much has the value of money fallen? *Solution:* 100 ÷ 150 = 0.667, a fall of about **33%**.`,
        },
        questions: [
          ["E", "A persistent rise in the general price level is known as", "inflation", "deflation", "devaluation", "depreciation", "The value of money falls."],
          ["E", "A persistent fall in the general price level is", "deflation", "inflation", "stagflation", "reflation", "The value of money rises."],
          ["E", "During inflation, those who suffer most are", "fixed-income earners", "debtors", "businessmen", "owners of land", "Their incomes do not rise with prices."],
          ["M", "Inflation described as 'too much money chasing too few goods' is", "demand-pull inflation", "cost-push inflation", "imported inflation", "stagflation", "Total demand exceeds available supply."],
          ["M", "Inflation that results from rising wages and prices of raw materials is", "cost-push inflation", "demand-pull inflation", "hyperinflation", "creeping inflation", "Producers pass higher costs on to consumers."],
          ["M", "During a period of inflation, the group that gains is", "debtors", "creditors", "pensioners", "savers", "They repay loans with money of lower value."],
          ["M", "Which of the following measures would help to reduce inflation?", "raising the bank rate", "reducing taxes", "increasing government spending", "printing more money", "Dearer credit reduces spending."],
          ["H", "A situation in which rising prices exist together with high unemployment is called", "stagflation", "hyperinflation", "deflation", "reflation", "Output stagnates while prices rise."],
          ["H", "If the price index rises from 100 to 125, the value of money falls by", "20%", "25%", "125%", "80%", "Each naira now buys 100 ÷ 125 of what it did."],
          ["H", "A fiscal measure for controlling inflation is", "increasing taxes and reducing government expenditure", "raising the cash reserve ratio", "selling securities in the open market", "moral suasion by the central bank", "Fiscal policy works through the government budget."],
        ],
      },
      {
        week: 5,
        title: "National income accounting",
        subtopics: ["Concepts of national income", "Methods of measuring national income", "Problems of measurement", "Uses and limitations of national income statistics"],
        objectives: ["Define and calculate the main national income aggregates", "Describe the three methods of measuring national income", "Explain the problems of measuring national income", "State the uses and limitations of national income statistics"],
        lesson: {
          title: "Measuring a Nation's Output",
          summary: "Define, calculate and interpret the national income aggregates.",
          minutes: 40,
          notes: `## National income
The **total money value of all goods and services produced by a country in a year**.

## Concepts
- **gross domestic product (GDP)** — the value of all goods and services produced **within the country's borders** in a year, by citizens and foreigners alike
- **gross national product (GNP)** — the value of output produced **by the nationals** of the country, at home and abroad:
  **GNP = GDP + net factor income from abroad**
  (income earned abroad by nationals minus income earned at home by foreigners)
- **net national product (NNP)** — **NNP = GNP − depreciation** (capital consumption)
- **national income (NI)** — NNP at factor cost: NNP at market prices − indirect taxes + subsidies
- **personal income** — income actually received by individuals, including transfer payments
- **disposable income** — personal income − personal taxes; it is either **consumed or saved**
- **per capita income** — **national income ÷ population**: a measure of the average standard of living
- **real national income** — national income adjusted for changes in prices

### Worked examples
- GDP ₦500 billion; net factor income from abroad ₦50 billion; depreciation ₦30 billion:
  GNP = 500 + 50 = **₦550 billion**; NNP = 550 − 30 = **₦520 billion**
- national income ₦600 billion; population 200 million: per capita income = **₦3000**
- money income rises by 10% and prices rise by 10%: **real income is unchanged**

## Methods of measurement
All three should give the same total: **output = income = expenditure**.
### Income method
Add all **factor incomes**: wages and salaries, rent, interest, profits. **Transfer payments** (pensions, gifts, students' allowances) are **excluded**, because nothing is produced in return.
### Output (net product) method
Add the value of output of all sectors, counting only **final goods** or the **value added** at each stage, to avoid double counting.
### Expenditure method
Add all spending on final goods and services:
**Y = C + I + G + (X − M)**
consumption + investment + government spending + (exports − imports).

## Problems of measurement
- **double counting** — counting intermediate goods as well as final goods
- **inadequate and unreliable statistics**
- **subsistence output** — goods consumed by producers and not sold
- **unpaid services** — housewives, self-help
- **illegal and unrecorded activities** — smuggling, the informal sector
- **depreciation** is hard to estimate
- **owner-occupied houses** — imputing rent
- **changes in prices** (inflation)
- transfer payments wrongly included
- shortage of trained personnel; poor record keeping by firms

## Uses
- measures the **size and growth** of the economy
- shows the **standard of living** (per capita income)
- allows **comparison** over time and between countries
- guides **economic planning** and budgeting
- shows the **contribution of each sector**
- shows the distribution of income among factors
- used by international bodies to assess aid and contributions

## Limitations as a measure of living standards
- it ignores the **distribution of income** — a high average may hide mass poverty
- **price changes** — a rise in money income may be only inflation
- **what is produced** — arms add to income but not to welfare
- **leisure**, working conditions and the quality of goods are ignored
- **non-market output** is left out
- **social costs** such as pollution are not deducted
- population size and exchange rates complicate international comparison

## Factors determining the size of national income
natural resources; quantity and quality of labour; capital and technology; political stability; the level of investment; terms of trade.

## Circular flow of income
Households supply factors to firms and receive incomes; they spend on goods made by firms. **Injections** (investment, government spending, exports) add to the flow; **leakages** (saving, taxes, imports) withdraw from it.`,
          examples: `**Example 1.** GDP is ₦800 billion and net factor income from abroad is −₦40 billion. Find GNP. *Solution:* 800 − 40 = **₦760 billion**.

**Example 2.** National income is ₦900 billion and the population is 150 million. Find the per capita income. *Solution:* **₦6000**.

**Example 3.** Why are transfer payments excluded from national income? *Answer:* They are **not payments for any current production**.`,
        },
        questions: [
          ["E", "The total money value of goods and services produced within a country's borders in a year is", "gross domestic product", "gross national product", "net national product", "disposable income", "It includes output by foreigners in the country."],
          ["E", "Per capita income is obtained by dividing national income by", "the population", "the price level", "the labour force", "the number of firms", "It measures average income per person."],
          ["E", "Which of the following is a method of measuring national income?", "the expenditure method", "the barter method", "the quota method", "the tariff method", "The others are the income and output methods."],
          ["M", "A country's GDP is ₦500 billion and its net factor income from abroad is ₦50 billion. Its GNP is", "₦550 billion", "₦450 billion", "₦500 billion", "₦25 000 billion", "GNP = GDP + net factor income from abroad."],
          ["M", "A country's GNP is ₦550 billion and depreciation is ₦30 billion. Its net national product is", "₦520 billion", "₦580 billion", "₦550 billion", "₦18.3 billion", "NNP = GNP − depreciation."],
          ["M", "Double counting in national income accounting is avoided by", "counting only the value added at each stage", "adding all sales of all firms", "including transfer payments", "ignoring final goods", "Intermediate goods must not be counted again."],
          ["M", "Pensions and gifts are excluded from national income because they are", "transfer payments", "factor incomes", "indirect taxes", "capital goods", "No goods or services are produced in exchange."],
          ["H", "A country's national income is ₦600 billion and its population is 200 million. Its per capita income is", "₦3000", "₦300", "₦30 000", "₦1200", "600 billion ÷ 200 million."],
          ["H", "In a year, money national income rises by 10% while the general price level also rises by 10%. Real national income has", "remained unchanged", "risen by 10%", "risen by 20%", "fallen by 10%", "The whole increase is due to higher prices."],
          ["H", "A high per capita income may not mean a high standard of living for most people because", "income may be very unequally distributed", "population is always small", "prices never change", "all output is exported", "A few rich people can raise the average."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Public finance: revenue and expenditure",
        subtopics: ["Meaning and objectives of public finance", "Sources of government revenue", "Government expenditure", "Revenue allocation in Nigeria"],
        objectives: ["Explain public finance and its objectives", "Describe the sources of government revenue", "Classify government expenditure and explain its growth", "Describe revenue allocation in Nigeria"],
        lesson: {
          title: "Government Income and Spending",
          summary: "Describe how governments raise and spend money and how revenue is shared in Nigeria.",
          minutes: 40,
          notes: `## Public finance
The branch of economics that deals with **government revenue, expenditure and debt**, and their effects on the economy.
### Objectives
- to raise revenue for government activities
- to provide **public goods and services**
- to **redistribute income**
- to control inflation and unemployment (economic stability)
- to promote economic growth
- to correct the balance of payments
- to protect infant industries

## Government revenue
### Tax revenue
- **direct taxes** — personal income tax, companies income tax, petroleum profits tax, capital gains tax
- **indirect taxes** — value added tax (VAT), customs (import and export) duties, excise duties
### Non-tax revenue
- **royalties and rents** from minerals, especially petroleum
- **fees, licences and fines**
- **profits and dividends** from government enterprises and investments
- **loans** — internal and external
- **grants and aid**
- sale of government property; interest on loans
In Nigeria, **petroleum** is the largest single source of public revenue.

### By level of government
- **federal**: petroleum profits tax, companies income tax, customs and excise duties, VAT (collected centrally and shared)
- **state**: personal income tax (PAYE), road taxes and vehicle licences, fees, the statutory allocation
- **local**: tenement rates, market fees, licences, the statutory allocation

## Government expenditure
### Recurrent expenditure
Spending that recurs every year on the **day-to-day running** of government: **salaries and wages**, pensions, maintenance, stationery, interest on debt.
### Capital expenditure
Spending on **permanent projects** that add to the nation's assets: **roads, bridges, schools, hospitals, dams**, power stations.

### By function
- **administration** — general services, defence, internal security
- **social and community services** — education, health, housing
- **economic services** — agriculture, transport, industry, power
- **transfers** — debt servicing, pensions, grants to other tiers

### Reasons for the growth of public expenditure
population growth; rising prices; urbanisation; demand for more and better social services; development projects; defence and security; the public debt; the growing cost of administration and of new states and local governments.

### Effects
on production (roads and power raise output); on distribution (helping the poor); on employment; on prices (heavy spending may be inflationary).

## Revenue allocation in Nigeria
Federally collected revenue is paid into the **Federation Account** and shared among the **federal, state and local governments** according to a formula proposed by the **Revenue Mobilisation, Allocation and Fiscal Commission** and approved by the National Assembly. The current vertical formula gives the federal government about 52.68%, the states 26.72% and the local governments 20.60%.
### Principles used in sharing among states
- **equality of states**
- **population**
- **derivation** — at least **13%** of revenue from natural resources goes to the states where it is produced
- **land mass and terrain**
- **internally generated revenue effort**
- social development factors (education, health, water)
- need; national interest
### Problems
disputes over the formula; over-dependence of states on federal allocations; controversy over derivation and resource control; unreliable population figures.

## The public sector and the economy
Government spending is a large part of total demand; changes in it affect output, employment and prices — the basis of fiscal policy.`,
          examples: `**Example 1.** Distinguish recurrent from capital expenditure. *Answer:* **Recurrent** spending is on **day-to-day running** (salaries); **capital** spending is on **permanent projects** (roads).

**Example 2.** Give three sources of non-tax revenue. *Answer:* **Royalties, fees and fines, and loans**.

**Example 3.** What is the derivation principle? *Answer:* A share of revenue — **at least 13%** — is returned to the **states where the resource is produced**.`,
        },
        questions: [
          ["E", "The study of government revenue, expenditure and debt is known as", "public finance", "private finance", "banking", "international trade", "It deals with how governments raise and spend money."],
          ["E", "The largest single source of government revenue in Nigeria is", "petroleum", "market fees", "court fines", "tenement rates", "Oil taxes and royalties dominate federal revenue."],
          ["E", "Payment of the salaries of civil servants is an example of", "recurrent expenditure", "capital expenditure", "transfer earnings", "investment income", "It recurs every year."],
          ["M", "The construction of roads and bridges by the government is classified as", "capital expenditure", "recurrent expenditure", "transfer payment", "debt servicing", "It adds to the nation's permanent assets."],
          ["M", "Which of the following is a source of non-tax revenue?", "royalties", "company income tax", "customs duties", "value added tax", "They are payments for the right to extract minerals."],
          ["M", "Federally collected revenue in Nigeria is paid into the", "Federation Account", "Consolidated Bank", "Stock Exchange", "Excess Profit Fund", "It is then shared among the three tiers of government."],
          ["M", "One reason for the continuous growth of public expenditure is", "an increasing population", "a falling price level", "a decline in social services", "a reduction in the number of states", "More people need more services."],
          ["H", "The principle of revenue allocation that returns part of the revenue to the area from which it was derived is", "derivation", "equality of states", "population", "land mass", "At least 13% goes to the producing states."],
          ["H", "Tenement rates and market fees are sources of revenue mainly for", "local governments", "the federal government", "the central bank", "public companies", "They are collected at the grass roots."],
          ["H", "Heavy government spending financed by printing money is likely to cause", "inflation", "deflation", "a budget surplus", "a fall in the money supply", "Demand rises faster than output."],
        ],
      },
      {
        week: 2,
        title: "Taxation",
        subtopics: ["Meaning and objectives of taxation", "Canons of taxation", "Direct and indirect taxes", "Systems, incidence and effects of taxation"],
        objectives: ["Define taxation and state its objectives", "State the canons of taxation", "Distinguish direct from indirect taxes with their merits and demerits", "Explain tax systems, the incidence of tax and its effects"],
        lesson: {
          title: "Taxes",
          summary: "Explain the purposes, principles, types and effects of taxation.",
          minutes: 40,
          notes: `## Tax
A **compulsory levy imposed by the government on individuals and firms**, for which no direct benefit is given in return.

## Objectives of taxation
- to raise **revenue**
- to **redistribute income** — taking more from the rich
- to **control inflation** — reducing spending power
- to **protect infant industries** — import duties
- to **discourage harmful goods** — alcohol, tobacco
- to correct the **balance of payments**
- to control monopoly and influence production and consumption

## Canons (principles) of taxation
Stated by **Adam Smith**:
1. **equity** — taxpayers should pay according to their **ability to pay**
2. **certainty** — the amount, time and manner of payment should be clear
3. **convenience** — the tax should be collected at a time and in a way convenient to the payer (PAYE is deducted when salaries are paid)
4. **economy** — the cost of collection should be small relative to the yield
Later additions: flexibility, simplicity, productivity, neutrality.

## Direct taxes
Levied **directly on the income or wealth** of persons and firms; the burden **cannot be shifted**.
- **personal income tax** (Pay As You Earn)
- **companies income tax**
- **petroleum profits tax**
- **capital gains tax**
- capital transfer (inheritance) tax; property tax; poll tax
### Advantages
equitable (based on ability to pay); certain; yields rise with income; reduces inequality; checks inflation.
### Disadvantages
may **discourage work, saving and investment**; easily **evaded** by the self-employed; unpopular; costly to assess.

## Indirect taxes
Levied on **goods and services**; paid by the producer or seller, who **shifts the burden** wholly or partly to the consumer through higher prices.
- **value added tax (VAT)** — introduced in Nigeria in 1994; now 7.5%
- **customs duties** — import duties (tariffs) and export duties
- **excise duties** — on goods produced locally
- sales and purchase taxes
They may be **specific** (a fixed sum per unit) or **ad valorem** (a percentage of value).
### Advantages
easy and cheap to collect; difficult to evade; paid in small amounts; wide coverage; can discourage harmful goods and imports.
### Disadvantages
**regressive** — they take a larger share of the income of the poor; they **raise prices** (inflationary); yield is uncertain; they may reduce demand and output.

## Tax systems
| System | Meaning | Example |
|---|---|---|
| **progressive** | the **rate rises as income rises** | personal income tax |
| **proportional** | the **same rate** for all incomes | a flat 10% on all incomes |
| **regressive** | the **rate falls as income rises** — the poor pay a larger share | poll tax; taxes on necessities |
*Example:* A earns ₦100 000 and pays ₦10 000 (10%); B earns ₦500 000 and pays ₦100 000 (20%) — a **progressive** tax.

## Incidence of taxation
The **final resting place of the burden** of a tax — who really pays it.
- for a **direct** tax, the person on whom it is levied
- for an **indirect** tax, it depends on **elasticity of demand**:
  - **inelastic demand** — the **consumer** bears most of the burden
  - **elastic demand** — the **producer** bears most
  - perfectly inelastic — the consumer bears all

## Effects of taxation
- on **production** — high taxes may reduce the incentive to work and invest
- on **consumption** — less disposable income
- on **prices** — indirect taxes raise them
- on **distribution** — progressive taxes reduce inequality
- on **saving** and investment

## Tax evasion and avoidance
- **evasion** — illegally failing to pay tax due
- **avoidance** — legally arranging affairs to pay less

## Problems of tax collection in Nigeria
evasion; poor records of income; a large informal sector; corruption of officials; illiteracy; shortage of trained staff; multiple taxation.`,
          examples: `**Example 1.** State Adam Smith's four canons of taxation. *Answer:* **Equity, certainty, convenience and economy**.

**Example 2.** Classify VAT and company income tax. *Answer:* VAT is an **indirect** tax; company income tax is a **direct** tax.

**Example 3.** Who bears the burden of a tax on a good with inelastic demand? *Answer:* Mostly the **consumer**.`,
        },
        questions: [
          ["E", "A compulsory levy imposed by the government on individuals and firms is", "a tax", "a subsidy", "a dividend", "a grant", "No direct benefit is given in return."],
          ["E", "Personal income tax is an example of", "a direct tax", "an indirect tax", "an excise duty", "a tariff", "It is levied on the income of the person who pays it."],
          ["E", "Value added tax is classified as", "an indirect tax", "a direct tax", "a poll tax", "a capital gains tax", "It is levied on goods and services."],
          ["M", "A tax whose rate increases as income increases is", "a progressive tax", "a regressive tax", "a proportional tax", "a specific tax", "Higher incomes pay a higher percentage."],
          ["M", "A tax that takes a larger proportion of the income of the poor than of the rich is", "regressive", "progressive", "proportional", "direct", "Taxes on necessities have this effect."],
          ["M", "The principle that a tax should be related to the taxpayer's ability to pay is the canon of", "equity", "certainty", "convenience", "economy", "It is the first of Adam Smith's canons."],
          ["M", "The incidence of a tax refers to", "who finally bears the burden of the tax", "the rate of the tax", "the date of payment", "the cost of collecting the tax", "It may differ from the person who pays it to the government."],
          ["H", "A tax of 10% levied on all incomes, whatever their size, is", "proportional", "progressive", "regressive", "indirect", "Everyone pays the same percentage."],
          ["H", "The burden of an indirect tax falls mainly on the consumer when the demand for the commodity is", "inelastic", "elastic", "perfectly elastic", "unitary", "The seller can raise the price with little loss of sales."],
          ["H", "A earns ₦100 000 and pays ₦10 000 in tax, while B earns ₦500 000 and pays ₦100 000. The tax system is", "progressive", "proportional", "regressive", "indirect", "A pays 10% and B pays 20%."],
        ],
      },
      {
        week: 3,
        title: "Petroleum and the Nigerian economy",
        subtopics: ["Development of the petroleum industry", "Upstream and downstream activities", "Contributions of petroleum to the economy", "Problems of the oil sector and OPEC"],
        objectives: ["Outline the development of the petroleum industry in Nigeria", "Distinguish upstream from downstream activities", "Explain the contributions of petroleum to the economy", "Discuss the problems of the oil sector and the role of OPEC"],
        lesson: {
          title: "Oil and the Economy",
          summary: "Explain the role of petroleum in the Nigerian economy and the problems it has created.",
          minutes: 40,
          notes: `## Development
- exploration began in 1908; Shell-BP struck oil in commercial quantity at **Oloibiri in 1956**; the first export was in **1958**
- other companies followed — Mobil, Chevron (Gulf), Agip, Elf/Total, Texaco
- Nigeria joined the **Organisation of the Petroleum Exporting Countries (OPEC) in 1971**
- the Nigerian National Oil Corporation (1971) became the **Nigerian National Petroleum Corporation (NNPC) in 1977**; under the **Petroleum Industry Act of 2021** it became a limited company
- the **oil boom** of the 1970s made petroleum the mainstay of the economy
- government takes part through **joint ventures** and **production-sharing contracts** with the oil companies

## Structure of the industry
### Upstream sector
**Exploration and production** of crude oil and gas — seismic surveys, drilling, pumping to terminals.
### Downstream sector
**Refining, petrochemicals, distribution and marketing** of products — refineries at Port Harcourt, Warri and Kaduna and the private Dangote refinery; pipelines, depots and filling stations.
### Products
petrol (PMS), kerosene, diesel, aviation fuel, liquefied petroleum gas (cooking gas), lubricants, bitumen and petrochemicals (plastics, fertiliser).

## Contributions to the economy
- **foreign exchange** — the great bulk of export earnings
- **government revenue** — petroleum profits tax, royalties, rents
- contribution to **gross domestic product**
- **energy** for homes, transport and industry
- **raw materials** for petrochemical, fertiliser and plastics industries
- **employment** — directly and in service firms
- **infrastructure** — roads, ports, schools and hospitals financed from oil revenue
- growth of towns such as Port Harcourt and Warri
- transfer of technology; training of Nigerians
- finance for development plans

## Negative effects and problems
- **over-dependence on oil** — a **mono-product** economy; other sectors, especially **agriculture**, were neglected
- **vulnerability to world price fluctuations** — revenue collapses when prices fall
- **environmental degradation** — oil spillage, gas flaring, destruction of farmland and fishing waters
- **unrest in the Niger Delta** — militancy, pipeline vandalism, oil theft
- **importation of refined products** because local refining has been inadequate
- costly **fuel subsidies**; smuggling of products
- **corruption** and mismanagement of oil revenue
- inflation and a taste for imports during the boom
- capital-intensive methods give few jobs relative to the revenue
- dependence on foreign technology and capital
- **exhaustibility** — oil is a wasting asset

## Government policies
- **indigenisation** and **local content** laws to increase Nigerian participation
- **deregulation** of the downstream sector — removing price controls and subsidies so that prices reflect the market
- the **Niger Delta Development Commission**, the amnesty programme and the **13% derivation** fund
- **gas utilisation** — liquefied natural gas for export; gas for power
- savings in the excess crude account and the sovereign wealth fund
- **diversification** — reviving agriculture, solid minerals, manufacturing and services

## OPEC
Founded in **Baghdad in 1960** by Iran, Iraq, Kuwait, Saudi Arabia and Venezuela; headquarters in **Vienna**.
### Objectives
- to co-ordinate and unify the petroleum policies of members
- to **stabilise oil prices** in the world market
- to secure a steady income for producers and a regular supply for consumers
- to protect members' interests against the oil companies
It fixes **production quotas** for members to influence the price.
### Problems
members exceeding their quotas; competition from non-OPEC producers; alternative energy; conflicting interests among members.

## Lessons
Oil wealth should be invested in productive capacity and in people; an economy resting on one export is unstable.`,
          examples: `**Example 1.** Distinguish the upstream from the downstream sector. *Answer:* **Upstream** covers **exploration and production**; **downstream** covers **refining, distribution and marketing**.

**Example 2.** State three benefits of petroleum to Nigeria. *Answer:* **Foreign exchange, government revenue and energy**.

**Example 3.** Give two aims of OPEC. *Answer:* To **co-ordinate members' oil policies** and **stabilise oil prices**.`,
        },
        questions: [
          ["E", "Crude oil was first discovered in commercial quantity in Nigeria in", "1956", "1960", "1971", "1986", "The discovery was made at Oloibiri."],
          ["E", "Nigeria became a member of OPEC in", "1971", "1960", "1956", "1999", "OPEC itself was founded in 1960."],
          ["E", "The main source of Nigeria's foreign exchange earnings is", "petroleum", "cocoa", "tin", "groundnuts", "Crude oil dominates the country's exports."],
          ["M", "The exploration and production of crude oil belong to the", "upstream sector", "downstream sector", "retail sector", "informal sector", "Refining and marketing are downstream."],
          ["M", "The refining and marketing of petroleum products belong to the", "downstream sector", "upstream sector", "primary sector", "subsistence sector", "It follows the production of crude oil."],
          ["M", "A harmful effect of the oil boom on the Nigerian economy was", "the neglect of agriculture", "a fall in government revenue", "a fall in imports", "the decline of oil exports", "Labour and investment moved away from farming."],
          ["M", "The headquarters of OPEC is in", "Vienna", "Baghdad", "Lagos", "Geneva", "The organisation was founded in Baghdad."],
          ["H", "The main danger of Nigeria's dependence on crude oil exports is that", "revenue falls sharply when world oil prices drop", "oil can never be exhausted", "oil prices never change", "it encourages diversification", "A one-product economy is unstable."],
          ["H", "Deregulation of the downstream oil sector means", "removing government control over the prices of petroleum products", "banning the export of crude oil", "nationalising all filling stations", "increasing fuel subsidies", "Prices are then determined by market forces."],
          ["H", "OPEC attempts to influence world oil prices mainly by", "fixing production quotas for its members", "building refineries in every country", "banning oil imports", "printing a common currency", "Limiting supply supports the price."],
        ],
      },
      {
        week: 4,
        title: "Economic growth and development",
        subtopics: ["Meaning of economic growth and development", "Characteristics of developing countries", "Obstacles to development", "Strategies for development"],
        objectives: ["Distinguish economic growth from economic development", "State the characteristics of developing countries", "Explain the obstacles to economic development", "Describe strategies for achieving development"],
        lesson: {
          title: "Growth and Development",
          summary: "Distinguish growth from development and explain the problems of developing economies.",
          minutes: 40,
          notes: `## Economic growth
A **sustained increase in a country's real national output (real GDP)** or real income per head over time. It is **quantitative**.
*Example:* real GDP rises from ₦200 billion to ₦210 billion: growth rate = 10 ÷ 200 × 100 = **5%**.

## Economic development
Economic growth **accompanied by improvements in the living standards of the people and by structural change** — less poverty, unemployment and inequality; better health, education, housing and infrastructure; a shift from primary production towards industry and services. It is both **quantitative and qualitative**.

## Growth and development compared
| Economic growth | Economic development |
|---|---|
| increase in output | growth plus better welfare and structural change |
| quantitative | quantitative and qualitative |
| measured by real GDP or per capita income | measured also by health, literacy, poverty and inequality |
| can occur without development | cannot occur without growth |
**Growth without development** happens when higher output benefits only a few, or comes from one sector such as oil, while most people remain poor.

## Indicators of development
- **real per capita income**
- **life expectancy**; infant mortality
- **literacy** and school enrolment
- access to clean water, health care and electricity
- level of industrialisation; employment
- the **Human Development Index (HDI)** — combining **life expectancy, education and income**

## Characteristics of developing (underdeveloped) countries
- **low per capita income**; widespread poverty
- **dependence on primary production** — agriculture and minerals
- **low capital formation** — low saving and investment
- high **population growth**; a high dependency ratio
- **unemployment** and underemployment
- low level of **technology**; low productivity
- **poor infrastructure**
- high **illiteracy**; poor health; low life expectancy
- dependence on a few **primary exports** and on imported manufactures
- unequal distribution of income
- heavy foreign debt
- a dual economy — a small modern sector beside a large traditional one

## Obstacles to development
- the **vicious circle of poverty**: **low income → low saving → low investment → low productivity → low income**
- inadequate capital and technology
- rapid population growth
- **political instability**; corruption
- unfavourable **terms of trade**; debt burden
- shortage of skilled manpower and entrepreneurs
- poor planning; traditional attitudes
- a small market
- over-dependence on one product

## Strategies for development
- **raising saving and investment**; attracting foreign investment
- **industrialisation** — import substitution and export promotion
- **modernising agriculture**
- **education and manpower development**
- providing **infrastructure** — power, roads, water
- **population control**
- **diversification** of the economy
- sound **planning**, good governance and political stability
- **technology** transfer and research
- encouraging small and medium enterprises
- regional economic co-operation
- fair distribution of income; poverty reduction

## Balanced and unbalanced growth
- **balanced growth** — developing all sectors together so that each provides a market for the others
- **unbalanced growth** — concentrating scarce resources on a few leading sectors that will pull the rest along

## Sustainable development
Development that meets present needs without damaging the ability of future generations to meet theirs — growth with care for the environment.

## Costs of growth
pollution; depletion of resources; congestion; loss of traditional ways; present consumption sacrificed for investment.`,
          examples: `**Example 1.** Distinguish growth from development. *Answer:* **Growth** is a rise in **real output**; **development** is growth **plus improved living standards and structural change**.

**Example 2.** Real GDP rises from ₦400 billion to ₦424 billion. Find the growth rate. *Solution:* 24 ÷ 400 × 100 = **6%**.

**Example 3.** Describe the vicious circle of poverty. *Answer:* **Low income → low saving → low investment → low productivity → low income**.`,
        },
        questions: [
          ["E", "A sustained increase in a country's real national output is", "economic growth", "inflation", "economic planning", "devaluation", "It is measured by the rise in real GDP."],
          ["E", "A characteristic of developing countries is", "low per capita income", "a high level of technology", "low population growth", "dependence on manufactured exports", "Most people are poor."],
          ["E", "Economic development differs from economic growth in that development includes", "improvement in the living standards of the people", "only an increase in output", "a fall in output", "a rise in prices", "It is qualitative as well as quantitative."],
          ["M", "The Human Development Index combines income, education and", "life expectancy", "the exchange rate", "the size of the army", "the money supply", "It measures welfare more broadly than income alone."],
          ["M", "Developing countries depend mainly on the export of", "primary products", "machinery", "motor vehicles", "electronic goods", "Crops and minerals dominate their exports."],
          ["M", "The vicious circle of poverty begins with low income, which leads to", "low saving and low investment", "high saving", "high productivity", "rapid industrialisation", "Productivity therefore stays low."],
          ["M", "Which of the following is an obstacle to economic development?", "political instability", "a high rate of capital formation", "a skilled labour force", "good infrastructure", "Investors avoid unstable countries."],
          ["H", "A country's real GDP rises from ₦200 billion to ₦210 billion. Its rate of economic growth is", "5%", "10%", "2%", "105%", "10 ÷ 200 × 100."],
          ["H", "Growth without development is said to occur when", "output rises but most people remain poor", "output and welfare both rise", "output falls while welfare rises", "prices remain constant", "The benefits are confined to a few or to one sector."],
          ["H", "Concentrating scarce resources on a few leading sectors in the hope that they will pull the rest of the economy along is", "unbalanced growth", "balanced growth", "the vicious circle", "sustainable development", "It contrasts with developing all sectors together."],
        ],
      },
      {
        week: 5,
        title: "Development planning in Nigeria",
        subtopics: ["Meaning, types and objectives of planning", "National development plans, 1962–1985", "Later plans and programmes", "Problems of planning"],
        objectives: ["Explain development planning, its types and objectives", "Outline Nigeria's national development plans from 1962 to 1985", "Describe later plans and programmes", "Explain the problems of development planning in Nigeria"],
        lesson: {
          title: "Planning for Development",
          summary: "Explain development planning and review Nigeria's development plans and their problems.",
          minutes: 40,
          notes: `## Development planning
A **deliberate, conscious effort by the government to set economic and social targets for a given period and to allocate resources to achieve them**.

### Why plan?
- resources are scarce and must be used on priorities
- the market alone may not achieve rapid, balanced development
- to co-ordinate public and private activities
- to attract foreign aid and investment
- to correct regional imbalance

### Objectives
- a high rate of **economic growth**
- **higher per capita income** and living standards
- **full employment**
- **price stability**
- **equitable distribution** of income
- **diversification** of the economy
- **balanced development** of all areas
- self-reliance; a favourable balance of payments

## Types of plan
### By time
- **short-term** — one to two years; the **annual budget**
- **medium-term** — three to five years
- **long-term (perspective)** — fifteen to twenty years or more
- **rolling plan** — a medium-term plan (usually three years) that is **reviewed every year**: the completed year drops out and a new year is added, so the plan stays up to date
### By scope
- **comprehensive** — covering the whole economy
- **partial (sectoral)** — covering selected sectors
- **project** planning
### By method
- **imperative (directive)** — as in socialist states
- **indicative** — the government sets targets and guides the private sector, as in mixed economies

## Nigeria's national development plans
| Plan | Period | Emphasis |
|---|---|---|
| colonial ten-year plan | 1946–1956 | welfare and basic services |
| **First** | **1962–1968** | agriculture, industry and manpower; interrupted by the civil war |
| **Second** | **1970–1974** | **reconstruction, rehabilitation and reconciliation** after the war; stated the five national objectives |
| **Third** | **1975–1980** | financed by the oil boom; heavy industry, infrastructure, Universal Primary Education |
| **Fourth** | **1981–1985** | agriculture (the Green Revolution), housing, self-reliance; hit by the fall in oil prices |
The Second Plan aimed at a united, strong and self-reliant nation; a great and dynamic economy; a just and egalitarian society; a land of bright opportunities; and a free and democratic society.

## Later plans and programmes
- the **Structural Adjustment Programme (SAP), 1986** — devaluation, deregulation, privatisation, removal of subsidies
- **rolling plans** from **1990**, within a perspective plan
- **Vision 2010** (1996)
- the **National Economic Empowerment and Development Strategy (NEEDS), 2004**, with state (SEEDS) and local (LEEDS) versions — wealth creation, employment, poverty reduction, value reorientation
- the Seven-Point Agenda (2007); **Vision 20:2020** — to be among the twenty largest economies by 2020; the Transformation Agenda (2011)
- the **Economic Recovery and Growth Plan (2017–2020)**
- the **National Development Plan (2021–2025)** and **Agenda 2050**

## Achievements
roads, bridges, ports and airports; universities, schools and hospitals; dams and power stations; steel and petrochemical projects; a new federal capital; more trained manpower.

## Problems of planning in Nigeria
- **inadequate and unreliable data**
- **shortage of finance**; dependence on fluctuating oil revenue and on foreign loans
- **political instability** — frequent changes of government and policy
- **corruption** and mismanagement
- **plan indiscipline** — abandoning or altering projects; lack of continuity
- **shortage of skilled personnel**
- **over-ambitious** plans
- poor implementation, monitoring and evaluation
- inflation, which raises project costs
- little involvement of the people and the private sector
- natural and external shocks

## Requirements for successful planning
accurate statistics; realistic targets; adequate finance; political stability and commitment; skilled manpower; public co-operation; effective monitoring.`,
          examples: `**Example 1.** What is a rolling plan? *Answer:* A medium-term plan **reviewed every year**, with one year dropped and another added.

**Example 2.** State the period and main concern of the Second National Development Plan. *Answer:* **1970–1974**; **reconstruction after the civil war**.

**Example 3.** Give three problems of planning in Nigeria. *Answer:* **Inadequate data, political instability and corruption**.`,
        },
        questions: [
          ["E", "A deliberate effort by the government to set economic targets and allocate resources to achieve them is", "development planning", "revenue allocation", "price control", "devaluation", "It directs scarce resources to priorities."],
          ["E", "Nigeria's First National Development Plan covered the period", "1962–1968", "1970–1974", "1975–1980", "1981–1985", "It was interrupted by the civil war."],
          ["E", "The annual budget is an example of", "a short-term plan", "a perspective plan", "a rolling plan", "a long-term plan", "It covers one year."],
          ["M", "The Structural Adjustment Programme was introduced in Nigeria in", "1986", "1976", "1999", "1962", "It involved devaluation and deregulation."],
          ["M", "A plan covering a period of fifteen to twenty years is described as a", "perspective plan", "short-term plan", "rolling plan", "budget", "It sets out long-term goals."],
          ["M", "A major problem of development planning in Nigeria is", "inadequate and unreliable data", "too many statisticians", "excess finance", "too much continuity of policy", "Plans built on poor data miss their targets."],
          ["M", "Vision 20:2020 aimed at making Nigeria one of the", "twenty largest economies in the world by 2020", "twenty most populous countries by 2020", "twenty oil exporters by 2020", "twenty members of OPEC", "It was a long-term development goal."],
          ["H", "A medium-term plan that is reviewed every year, with a new year added as the completed one drops out, is", "a rolling plan", "a fixed plan", "a perspective plan", "an imperative plan", "Nigeria adopted this approach from 1990."],
          ["H", "The Second National Development Plan (1970–1974) was mainly concerned with", "post-war reconstruction and rehabilitation", "the Structural Adjustment Programme", "privatisation of public enterprises", "the introduction of rolling plans", "It followed the end of the civil war."],
          ["H", "The National Economic Empowerment and Development Strategy (NEEDS) was launched in", "2004", "1986", "1996", "2017", "The states had their own versions, called SEEDS."],
        ],
      },
    ],
  },
];
