/**
 * Expression evaluator for the examination calculator. A small recursive-descent parser — never
 * `eval` — so only arithmetic can run. Trigonometry works in degrees, as on a school calculator.
 */

const FUNCTIONS: Record<string, (x: number) => number> = {
  sqrt: Math.sqrt,
  sin: (x) => Math.sin((x * Math.PI) / 180),
  cos: (x) => Math.cos((x * Math.PI) / 180),
  tan: (x) => Math.tan((x * Math.PI) / 180),
  asin: (x) => (Math.asin(x) * 180) / Math.PI,
  acos: (x) => (Math.acos(x) * 180) / Math.PI,
  atan: (x) => (Math.atan(x) * 180) / Math.PI,
  log: Math.log10,
  ln: Math.log,
};

export function evaluate(input: string): number {
  const src = input.replace(/\s+/g, "").replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/π/g, "pi").replace(/√/g, "sqrt");
  let i = 0;
  const peek = () => src[i];
  const fail = (): never => {
    throw new Error("Invalid expression");
  };

  function expression(): number {
    let v = term();
    while (peek() === "+" || peek() === "-") v = src[i++] === "+" ? v + term() : v - term();
    return v;
  }
  function term(): number {
    let v = unary();
    for (;;) {
      if (peek() === "*") {
        i++;
        v *= unary();
      } else if (peek() === "/") {
        i++;
        v /= unary();
      } else if (peek() === "(" || /[a-z]/.test(peek() ?? "")) v *= unary(); // implied multiplication: 2(3), 2pi
      else return v;
    }
  }
  function unary(): number {
    if (peek() === "-") {
      i++;
      return -unary();
    }
    if (peek() === "+") {
      i++;
      return unary();
    }
    return power();
  }
  function power(): number {
    const base = postfix();
    if (peek() === "^") {
      i++;
      return Math.pow(base, unary()); // right-associative
    }
    return base;
  }
  function postfix(): number {
    let v = primary();
    for (;;) {
      if (peek() === "%") {
        i++;
        v /= 100;
      } else if (peek() === "!") {
        i++;
        if (v < 0 || v > 170 || !Number.isInteger(v)) fail();
        let f = 1;
        for (let k = 2; k <= v; k++) f *= k;
        v = f;
      } else return v;
    }
  }
  function primary(): number {
    if (peek() === "(") {
      i++;
      const v = expression();
      if (peek() !== ")") fail();
      i++;
      return v;
    }
    const num = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(src.slice(i));
    if (num && !/^\d+\.?\d*e$/i.test(num[0])) {
      i += num[0].length;
      return Number(num[0]);
    }
    const name = /^[a-z]+/.exec(src.slice(i))?.[0];
    if (name === "pi") {
      i += 2;
      return Math.PI;
    }
    if (name === "e") {
      i += 1;
      return Math.E;
    }
    if (name && FUNCTIONS[name]) {
      i += name.length;
      if (peek() !== "(") fail();
      i++;
      const arg = expression();
      if (peek() !== ")") fail();
      i++;
      return FUNCTIONS[name](arg);
    }
    return fail();
  }

  if (!src) fail();
  const out = expression();
  if (i !== src.length || !Number.isFinite(out)) fail();
  return out;
}

/** Display form: up to 10 significant figures, no floating-point dust (0.1 + 0.2 → 0.3). */
export function formatResult(n: number): string {
  if (Number.isInteger(n) && Math.abs(n) < 1e15) return String(n);
  const s = Number(n.toPrecision(10));
  return Math.abs(s) >= 1e12 || (Math.abs(s) < 1e-6 && s !== 0) ? s.toExponential(6).replace(/\.?0+e/, "e") : String(s);
}
