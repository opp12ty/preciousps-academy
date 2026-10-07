import { describe, expect, it } from "vitest";
import { evaluate, formatResult } from "@/core/calc";

const run = (s: string) => formatResult(evaluate(s));

describe("examination calculator", () => {
  it("follows the order of operations", () => {
    expect(run("2+3×4")).toBe("14");
    expect(run("(2+3)×4")).toBe("20");
    expect(run("10÷4")).toBe("2.5");
    expect(run("2^3^2")).toBe("512");
    expect(run("-3^2")).toBe("-9");
    expect(run("2(3+4)")).toBe("14");
  });

  it("handles decimals without floating-point dust", () => {
    expect(run("0.1+0.2")).toBe("0.3");
    expect(run("1÷3")).toBe("0.3333333333");
  });

  it("supports the scientific functions in degrees", () => {
    expect(run("sin(30)")).toBe("0.5");
    expect(run("cos(60)")).toBe("0.5");
    expect(run("tan(45)")).toBe("1");
    expect(run("√(144)")).toBe("12");
    expect(run("log(1000)")).toBe("3");
    expect(run("ln(e)")).toBe("1");
    expect(run("2π")).toBe("6.283185307");
    expect(run("5!")).toBe("120");
    expect(run("200×15%")).toBe("30");
    expect(run("6.02e23×2")).toBe("1.204e+24");
  });

  it("rejects anything that is not arithmetic", () => {
    for (const bad of ["", "2+", "(2+3", "1÷0", "alert(1)", "2**3", "sqrt(-4)", "process.exit()"]) expect(() => evaluate(bad), bad).toThrow();
  });
});
