import { describe, expect, it } from "vitest";
import { htmlBlocks, parseFscBook, sanitizeHtml, textBlocks } from "@/core/fsc-import";
import { markTheory } from "@/core/theory-marking";

const BOOK = `Precious PS COLLEGE | Precious PS CBT
BASIC SCIENCE
JSS 2 - Second Term
UNIT 9 | WEEK 1
Living Things
Features of living things
Living things feed, breathe, grow and reproduce.
Advanced Corner
Explain why a car is not a living thing.
Classwork 9
1. Name two features of living things.
2. What do plants need to make food?
Assignment 9
1. Name one living thing in your home.
UNIT 10 | WEEK 2
Non-living Things
Rocks, water and air
Non-living things do not grow.
Classwork 10
1. Give one example of a non-living thing.
TERM REVIEW
Computer-Based Test (CBT) Practice
1. Which of these is living?
A. stone
B. *goat
C. chair
D. water
2. Plants make food by
A. digestion
B. photosynthesis
C. breathing
D. sleeping
Platform note
The asterisk marks the correct answer.
ANSWER KEY
Unit 9: Living Things
Classwork
1. Any two: feeding, breathing, growth, reproduction, movement
2. Sunlight, water and carbon dioxide
Assignment
1. Any one: goat, hen, plant, person
Advanced Corner
It does not grow or reproduce
Unit 10: Non-living Things
Classwork
1. Any one: rock, water, air, chair
Term Review CBT
1. B 2. B`;

describe("Precious PS Study Centre import", () => {
  const b = parseFscBook(textBlocks(BOOK));

  it("splits units with their numbers, titles and weeks", () => {
    expect(b.title).toBe("BASIC SCIENCE");
    expect(b.subtitle).toBe("JSS 2 - Second Term");
    expect(b.units.map((u) => [u.number, u.title, u.subtitle, u.week])).toEqual([
      [9, "Living Things", "Features of living things", "Week 1"],
      [10, "Non-living Things", "Rocks, water and air", "Week 2"],
    ]);
    expect(b.units[0].html.join("")).toContain("Living things feed");
  });

  it("matches the Answer Key to each unit by its number", () => {
    expect(b.units[0].classwork).toEqual([
      { q: "Name two features of living things.", a: "Any two: feeding, breathing, growth, reproduction, movement" },
      { q: "What do plants need to make food?", a: "Sunlight, water and carbon dioxide" },
    ]);
    expect(b.units[0].assignment[0].a).toBe("Any one: goat, hen, plant, person");
    expect(b.units[0].advanced).toBe("Explain why a car is not a living thing.");
    expect(b.units[0].advancedAnswer).toBe("It does not grow or reproduce");
    expect(b.units[1].classwork[0].a).toBe("Any one: rock, water, air, chair");
  });

  it("reads the Term Review from stars, else from the Answer Key letters", () => {
    expect(b.review).toHaveLength(2);
    expect(b.review[0]).toMatchObject({ stem: "Which of these is living?", answer: "B" });
    expect(b.review[0].options[1].text).toBe("goat");
    expect(b.review[1].answer).toBe("B");
    expect(b.notices).toEqual([]);
  });

  it("keeps Word tables and lists whole and strips unsafe HTML", () => {
    const blocks = htmlBlocks('<table><tr><td><p>UNIT 1 | WEEK 1</p><p>Title</p></td></tr></table><p>Text</p><ul><li>a</li><li>b</li></ul>');
    expect(blocks.map((x) => x.tag)).toEqual(["table", "p", "ul"]);
    expect(blocks[0].text).toBe("UNIT 1 | WEEK 1\nTitle");
    expect(sanitizeHtml('<p onclick="x()">Hi<script>alert(1)</script><img src="https://evil/x.png"><img src="/api/v1/assets/00000000-0000-0000-0000-000000000000" alt="a"></p>')).toBe('<p>Hi<img src="/api/v1/assets/00000000-0000-0000-0000-000000000000" alt="a" loading="lazy" /></p>');
  });
});

describe("written-answer marking", () => {
  it.each([
    ["It is the study of past events", "The study of past human events", 1],
    ["oral tradition, archaeology and written records", "Any three: oral tradition, written records, archaeology, artifacts", 1],
    ["oral tradition and archaeology", "Any three: oral tradition, written records, archaeology, artifacts", 0.5],
    ["the camel", "The camel", 1],
    ["a donkey", "The camel", 0],
    ["1804", "1804", 1],
    ["1805", "1804", 0],
    ["306042", "306,042", 1],
    ["an object made in the past", "An object made by people in the past, e.g. a Nok terracotta head", 1],
    ["", "The camel", 0],
  ])("%s → %s", (answer, model, mark) => {
    expect(markTheory(answer as string, model as string)).toBe(mark);
  });
  it("leaves questions without a model answer unmarked", () => {
    expect(markTheory("anything", "")).toBeNull();
  });
});
