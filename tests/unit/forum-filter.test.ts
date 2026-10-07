import { describe, expect, it } from "vitest";
import { checkForumMessage, forumDay, forumWindow, parseBlockedWords } from "@/core/forum-filter";

const o = { maxLength: 500, blockLinks: true, blockedWords: parseBlockedWords("sex, porn, nude, hook up, betting") };
const reason = (t: string) => {
  const r = checkForumMessage(t, o);
  return r.ok ? "OK" : r.reason;
};

describe("forum safety filter", () => {
  it("lets ordinary school talk through, including short numbers", () => {
    for (const t of [
      "Who can explain question 12 of the 2024 mock?",
      "JAMB cut-off for Medicine at UI was 270 last year I think",
      "x = 25 and y = 100, so the ratio is 1:4",
      "The exam starts at 9:30 on 14/05/2027",
      "Sussex and Essex are counties in England", // contains "sex" only inside longer words
      "I scored 82% in Physics. What about you?",
    ])
      expect(reason(t), t).toBe("OK");
  });

  it("blocks phone numbers however they are written", () => {
    for (const t of ["call me on 08031234567", "0803 123 4567", "+234-803-123-4567", "zero eight zero three one two three four five six seven", "my number is 0 8 0 3 1 2 3 4 5 6 7", "080 three one two 3 4 5 six 7"]) expect(reason(t), t).toBe("PHONE");
  });

  it("blocks e-mail addresses, links and social contacts", () => {
    expect(reason("mail me: tunde.a@gmail.com")).toBe("EMAIL");
    expect(reason("tunde at gmail dot com")).toBe("EMAIL");
    expect(reason("see https://example.com/answers")).toBe("LINK");
    expect(reason("check answers.com.ng for expo")).toBe("LINK");
    expect(reason("add me on whatsapp")).toBe("SOCIAL");
    expect(reason("follow @tunde_ade")).toBe("SOCIAL");
  });

  it("blocks home addresses and requests for location", () => {
    for (const t of ["I live at Bodija, come around", "where do you live?", "12 Adeola Street is my house", "send me your location", "let's meet after school"]) expect(reason(t), t).toBe("ADDRESS");
  });

  it("blocks listed words, including disguised spellings", () => {
    for (const t of ["send nude", "s3x chat", "p0rn", "s e x", "wanna hook up?", "any betting tips"]) expect(reason(t), t).toBe("BLOCKED_WORD");
  });

  it("rejects empty and over-long messages", () => {
    expect(reason("   ")).toBe("EMPTY");
    expect(reason("a".repeat(501))).toBe("TOO_LONG");
  });
});

describe("forum hours", () => {
  it("opens from 10am and closes at 10pm Lagos time", () => {
    const at = (iso: string) => forumWindow(new Date(iso), "Africa/Lagos", 10, 22);
    expect(at("2026-10-05T08:59:00Z").open).toBe(false); // 9:59am WAT
    expect(at("2026-10-05T09:00:00Z").open).toBe(true); // 10:00am WAT
    expect(at("2026-10-05T20:59:00Z").open).toBe(true); // 9:59pm WAT
    expect(at("2026-10-05T21:00:00Z").open).toBe(false); // 10:00pm WAT
    expect(at("2026-10-05T20:30:00Z").secondsToClose).toBe(1800);
    expect(at("2026-10-05T12:00:00Z").hours).toBe("10am to 10pm");
  });

  it("counts the day in the school's time zone", () => {
    expect(forumDay(new Date("2026-10-05T23:30:00Z"), "Africa/Lagos")).toBe("2026-10-06");
  });
});
