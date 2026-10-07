"use client";

import { Delete, X } from "lucide-react";
import { useState } from "react";
import { evaluate, formatResult } from "@/core/calc";
import { cx } from "../ui/primitives";

const KEYS: { label: string; insert?: string; kind?: "fn" | "op" | "eq" | "clear" | "back" }[] = [
  { label: "sin", insert: "sin(", kind: "fn" },
  { label: "cos", insert: "cos(", kind: "fn" },
  { label: "tan", insert: "tan(", kind: "fn" },
  { label: "log", insert: "log(", kind: "fn" },
  { label: "ln", insert: "ln(", kind: "fn" },
  { label: "√", insert: "√(", kind: "fn" },
  { label: "x²", insert: "^2", kind: "fn" },
  { label: "xʸ", insert: "^", kind: "fn" },
  { label: "π", insert: "π", kind: "fn" },
  { label: "n!", insert: "!", kind: "fn" },
  { label: "(", insert: "(", kind: "fn" },
  { label: ")", insert: ")", kind: "fn" },
  { label: "%", insert: "%", kind: "fn" },
  { label: "AC", kind: "clear" },
  { label: "⌫", kind: "back" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "÷", kind: "op" },
  { label: "EXP", insert: "e", kind: "fn" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "×", kind: "op" },
  { label: "Ans", kind: "fn" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "−", kind: "op" },
  { label: "=", kind: "eq" },
  { label: "0" },
  { label: "." },
  { label: "(−)", insert: "−", kind: "fn" },
  { label: "+", kind: "op" },
];

/** On-screen scientific calculator for examinations in subjects that allow one. Angles are in degrees. */
export function ExamCalculator({ onClose }: { onClose: () => void }) {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("0");
  const [ans, setAns] = useState("0");
  const [fresh, setFresh] = useState(false); // true just after "=": a digit starts a new sum, an operator continues

  const equals = () => {
    if (!expr) return;
    try {
      const out = formatResult(evaluate(expr));
      setResult(out);
      setAns(out);
      setFresh(true);
    } catch {
      setResult("Error");
    }
  };
  const press = (k: (typeof KEYS)[number]) => {
    if (k.kind === "clear") {
      setExpr("");
      setResult("0");
      setFresh(false);
    } else if (k.kind === "back") setExpr((e) => e.slice(0, -1));
    else if (k.kind === "eq") equals();
    else {
      const add = k.label === "Ans" ? `(${ans})` : (k.insert ?? k.label);
      const continues = k.kind === "op" || add.startsWith("^") || add === "!" || add === "%";
      setExpr((e) => (fresh ? (continues ? `(${ans})${add}` : add) : e + add));
      setFresh(false);
    }
  };

  return (
    <div role="dialog" aria-label="Calculator" className="fixed bottom-24 right-3 z-50 max-h-[calc(100vh-7rem)] w-[19rem] max-w-[calc(100vw-1.5rem)] overflow-y-auto rounded-2xl border border-line bg-navy-900 p-3 text-white shadow-lift lg:bottom-6">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-gold-400">Calculator · degrees</p>
        <button type="button" onClick={onClose} aria-label="Close calculator" className="grid size-7 place-items-center rounded-lg hover:bg-white/10">
          <X className="size-4" />
        </button>
      </div>
      <div className="mb-2 rounded-xl bg-navy-950 px-3 py-2 text-right font-mono">
        <p className="min-h-5 truncate text-xs text-white/60" aria-label="Expression">{expr || " "}</p>
        <p className="truncate text-2xl font-bold tabular-nums" aria-live="polite">{result}</p>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {KEYS.map((k) => (
          <button
            key={k.label}
            type="button"
            onClick={() => press(k)}
            aria-label={k.kind === "back" ? "Backspace" : k.label === "AC" ? "Clear" : undefined}
            className={cx(
              "grid h-10 place-items-center rounded-lg text-sm font-bold transition active:scale-95",
              k.kind === "eq" ? "bg-gold-500 text-navy-950 hover:bg-gold-400" : k.kind === "clear" || k.kind === "back" ? "bg-danger-600 hover:brightness-110" : k.kind === "op" ? "bg-royal-600 hover:bg-royal-500" : k.kind === "fn" ? "bg-white/10 text-xs hover:bg-white/20" : "bg-white/20 hover:bg-white/30",
            )}
          >
            {k.kind === "back" ? <Delete className="size-4" aria-hidden /> : k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
