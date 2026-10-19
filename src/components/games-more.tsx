"use client";

import { Lightbulb, RotateCcw, Trophy } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { buttonClass, cx } from "./ui/primitives";

/**
 * More Game Zone games. Everything is drawn in the browser with no images or sounds, so the page
 * stays light. Error and proverb games use a small random sample sent with the page.
 */

const rnd = (n: number) => Math.floor(Math.random() * n);
const shuffle = <T,>(xs: T[]) => {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const Win = ({ children }: { children: ReactNode }) => (
  <p role="status" className="pop flex items-center gap-2 rounded-xl border border-emerald-200 bg-success-50 px-4 py-3 text-sm font-bold text-success-600">
    <Trophy className="size-5 shrink-0" aria-hidden /> {children}
  </p>
);
const Score = ({ right, total }: { right: number; total: number }) => (
  <p className="text-sm font-semibold text-navy-800">Score: <span className="text-royal-600">{right}</span> / {total}</p>
);

/* ------------------------------------------------- spot the correct sentence */

export function SpotTheError({ items }: { items: { wrong: string; right: string; why: string }[] }) {
  const deck = useMemo(() => shuffle(items).slice(0, 10), [items]);
  const [at, setAt] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [right, setRight] = useState(0);
  const [round, setRound] = useState(0);
  const q = deck[at];
  const options = useMemo(() => (q ? shuffle([q.wrong, q.right]) : []), [q]);
  if (!items.length) return <p className="text-sm text-muted">No common errors are available yet.</p>;
  if (!q) return (
    <div className="space-y-3">
      <Win>You scored {right} out of {deck.length}.</Win>
      <button type="button" className={buttonClass("primary", "sm")} onClick={() => { setAt(0); setRight(0); setPicked(null); setRound(round + 1); }}><RotateCcw className="size-4" /> Play again</button>
    </div>
  );
  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    if (o === q.right) setRight((r) => r + 1);
  };
  return (
    <div className="space-y-4" key={round}>
      <div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-wide text-gold-600">Question {at + 1} of {deck.length}</p><Score right={right} total={deck.length} /></div>
      <p className="text-base font-bold text-navy-800">Which one is correct?</p>
      <div className="grid gap-2">
        {options.map((o) => (
          <button key={o} type="button" onClick={() => choose(o)} disabled={Boolean(picked)} className={cx("rounded-xl px-4 py-3 text-left text-sm font-semibold ring-1 transition", !picked ? "bg-white text-navy-800 ring-line hover:bg-royal-50" : o === q.right ? "bg-success-50 text-success-600 ring-emerald-300" : o === picked ? "bg-danger-50 text-danger-600 ring-red-300" : "bg-white text-muted ring-line")}>{o}</button>
        ))}
      </div>
      {picked && (
        <div className="pop space-y-3">
          <p className="rounded-xl bg-gold-50 p-3 text-sm text-navy-800"><Lightbulb className="mr-1 inline size-4 text-gold-600" aria-hidden />{q.why}</p>
          <button type="button" className={buttonClass("primary", "sm")} onClick={() => { setAt(at + 1); setPicked(null); }}>Next</button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------- complete the proverb */

export function ProverbFinish({ proverbs }: { proverbs: { text: string; meaning: string }[] }) {
  const usable = useMemo(() => proverbs.filter((p) => p.text.split(" ").length >= 5), [proverbs]);
  const split = (t: string) => {
    const w = t.split(" ");
    const cut = Math.ceil(w.length / 2);
    return { start: w.slice(0, cut).join(" "), end: w.slice(cut).join(" ") };
  };
  const make = () => shuffle(usable).slice(0, 8).map((p) => {
    const { start, end } = split(p.text);
    const others = shuffle(usable.filter((x) => x.text !== p.text)).slice(0, 3).map((x) => split(x.text).end);
    return { start, end, meaning: p.meaning, options: shuffle([end, ...others]) };
  });
  const [deck, setDeck] = useState(make);
  const [at, setAt] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [right, setRight] = useState(0);
  if (usable.length < 4) return <p className="text-sm text-muted">More proverbs are needed for this game.</p>;
  const q = deck[at];
  if (!q) return (
    <div className="space-y-3">
      <Win>You completed {right} of {deck.length} proverbs correctly.</Win>
      <button type="button" className={buttonClass("primary", "sm")} onClick={() => { setDeck(make()); setAt(0); setRight(0); setPicked(null); }}><RotateCcw className="size-4" /> New proverbs</button>
    </div>
  );
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-wide text-gold-600">Proverb {at + 1} of {deck.length}</p><Score right={right} total={deck.length} /></div>
      <p className="rounded-2xl bg-navy-800 p-5 text-lg font-bold leading-relaxed text-white">“{q.start} …”</p>
      <div className="grid gap-2">
        {q.options.map((o) => (
          <button key={o} type="button" disabled={Boolean(picked)} onClick={() => { setPicked(o); if (o === q.end) setRight((r) => r + 1); }} className={cx("rounded-xl px-4 py-3 text-left text-sm font-semibold ring-1", !picked ? "bg-white text-navy-800 ring-line hover:bg-royal-50" : o === q.end ? "bg-success-50 text-success-600 ring-emerald-300" : o === picked ? "bg-danger-50 text-danger-600 ring-red-300" : "bg-white text-muted ring-line")}>… {o}</button>
        ))}
      </div>
      {picked && (
        <div className="pop space-y-3">
          <p className="rounded-xl bg-gold-50 p-3 text-sm text-navy-800"><strong>Meaning:</strong> {q.meaning}</p>
          <button type="button" className={buttonClass("primary", "sm")} onClick={() => { setAt(at + 1); setPicked(null); }}>Next</button>
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------- states and capitals */

export const STATE_CAPITALS: [string, string][] = [
  ["Abia", "Umuahia"], ["Adamawa", "Yola"], ["Akwa Ibom", "Uyo"], ["Anambra", "Awka"], ["Bauchi", "Bauchi"], ["Bayelsa", "Yenagoa"], ["Benue", "Makurdi"], ["Borno", "Maiduguri"], ["Cross River", "Calabar"], ["Delta", "Asaba"], ["Ebonyi", "Abakaliki"], ["Edo", "Benin City"], ["Ekiti", "Ado-Ekiti"], ["Enugu", "Enugu"], ["Gombe", "Gombe"], ["Imo", "Owerri"], ["Jigawa", "Dutse"], ["Kaduna", "Kaduna"], ["Kano", "Kano"], ["Katsina", "Katsina"], ["Kebbi", "Birnin Kebbi"], ["Kogi", "Lokoja"], ["Kwara", "Ilorin"], ["Lagos", "Ikeja"], ["Nasarawa", "Lafia"], ["Niger", "Minna"], ["Ogun", "Abeokuta"], ["Ondo", "Akure"], ["Osun", "Osogbo"], ["Oyo", "Ibadan"], ["Plateau", "Jos"], ["Rivers", "Port Harcourt"], ["Sokoto", "Sokoto"], ["Taraba", "Jalingo"], ["Yobe", "Damaturu"], ["Zamfara", "Gusau"], ["FCT", "Abuja"],
];

export function StatesQuiz() {
  const make = () => shuffle(STATE_CAPITALS).slice(0, 10).map(([s, c]) => ({ s, c, options: shuffle([c, ...shuffle(STATE_CAPITALS.filter((x) => x[1] !== c)).slice(0, 3).map((x) => x[1])]) }));
  const [deck, setDeck] = useState(make);
  const [at, setAt] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [right, setRight] = useState(0);
  const q = deck[at];
  if (!q) return (
    <div className="space-y-3">
      <Win>{right === deck.length ? "Perfect! You know your states." : `You got ${right} of ${deck.length}.`}</Win>
      <button type="button" className={buttonClass("primary", "sm")} onClick={() => { setDeck(make()); setAt(0); setRight(0); setPicked(null); }}><RotateCcw className="size-4" /> Play again</button>
    </div>
  );
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-wide text-gold-600">{at + 1} of {deck.length}</p><Score right={right} total={deck.length} /></div>
      <p className="text-lg font-extrabold text-navy-800">What is the capital of {q.s === "FCT" ? "the Federal Capital Territory" : `${q.s} State`}?</p>
      <div className="grid grid-cols-2 gap-2">
        {q.options.map((o) => (
          <button key={o} type="button" disabled={Boolean(picked)} onClick={() => { setPicked(o); if (o === q.c) setRight((r) => r + 1); }} className={cx("rounded-xl px-3 py-3 text-sm font-bold ring-1", !picked ? "bg-white text-navy-800 ring-line hover:bg-royal-50" : o === q.c ? "bg-success-50 text-success-600 ring-emerald-300" : o === picked ? "bg-danger-50 text-danger-600 ring-red-300" : "bg-white text-muted ring-line")}>{o}</button>
        ))}
      </div>
      {picked && <button type="button" className={buttonClass("primary", "sm")} onClick={() => { setAt(at + 1); setPicked(null); }}>Next</button>}
    </div>
  );
}

/* ---------------------------------------------------------------- typing test */

const TYPING_TEXTS = [
  "Practice makes perfect, so read a little and write a little every single day.",
  "The River Niger and the River Benue meet at Lokoja in Kogi State.",
  "A good student plans the week, asks questions and revises before every test.",
  "Wash your hands with soap and clean water to keep germs away.",
  "Solar panels change sunlight into electricity that can charge a battery.",
  "Kindness costs nothing, yet it can change the day of everyone around you.",
  "Nigeria became independent on the first of October, nineteen sixty.",
  "Computers follow instructions called programs, written by programmers.",
];

export function TypingTest() {
  const [text, setText] = useState(() => TYPING_TEXTS[rnd(TYPING_TEXTS.length)]);
  const [typed, setTyped] = useState("");
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);
  const done = end !== null;
  const correct = [...typed].filter((ch, i) => ch === text[i]).length;
  const minutes = start && end ? (end - start) / 60000 : 0;
  const wpm = minutes ? Math.round(typed.trim().split(/\s+/).length / minutes) : 0;
  const accuracy = typed.length ? Math.round((correct / typed.length) * 100) : 100;
  const reset = () => { setText(TYPING_TEXTS[rnd(TYPING_TEXTS.length)]); setTyped(""); setStart(null); setEnd(null); };
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">Type the sentence exactly as shown. The timer starts with your first key.</p>
      <p className="rounded-2xl bg-surface p-4 font-mono text-base leading-relaxed" aria-label="Sentence to type">
        {[...text].map((ch, i) => <span key={i} className={i < typed.length ? (typed[i] === ch ? "text-success-600" : "rounded bg-danger-50 text-danger-600") : i === typed.length ? "border-b-2 border-gold-500 text-navy-800" : "text-muted"}>{ch}</span>)}
      </p>
      <textarea
        value={typed}
        disabled={done}
        onChange={(e) => {
          const v = e.target.value.slice(0, text.length);
          if (!start) setStart(Date.now());
          setTyped(v);
          if (v.length === text.length) setEnd(Date.now());
        }}
        rows={3}
        aria-label="Type here"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        className="w-full rounded-xl border border-line p-3 font-mono text-base"
      />
      {done && <Win>{wpm} words a minute with {accuracy}% accuracy.</Win>}
      <button type="button" className={buttonClass("secondary", "sm")} onClick={reset}><RotateCcw className="size-4" /> New sentence</button>
    </div>
  );
}

/* ---------------------------------------------------------------- tic-tac-toe */

const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const winner = (b: string[]) => LINES.find(([a, c, d]) => b[a] && b[a] === b[c] && b[a] === b[d])?.map((i) => i) ?? null;
function best(b: string[], me: string): number {
  // Win, block, centre, corner, side: a fair computer that can still be beaten.
  const them = me === "O" ? "X" : "O";
  for (const who of [me, them]) for (let i = 0; i < 9; i++) if (!b[i]) { const t = [...b]; t[i] = who; if (winner(t)) return i; }
  if (!b[4]) return 4;
  const corners = [0, 2, 6, 8].filter((i) => !b[i]);
  if (corners.length && Math.random() < 0.8) return corners[rnd(corners.length)];
  const free = b.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
  return free[rnd(free.length)];
}

export function TicTacToe() {
  const [b, setB] = useState<string[]>(Array(9).fill(""));
  const [tally, setTally] = useState({ you: 0, comp: 0, draw: 0 });
  const line = winner(b);
  const full = b.every(Boolean);
  const over = Boolean(line) || full;
  const play = (i: number) => {
    if (b[i] || over) return;
    const next = [...b];
    next[i] = "X";
    if (!winner(next) && !next.every(Boolean)) next[best(next, "O")] = "O";
    setB(next);
    const w = winner(next);
    if (w) setTally((t) => (next[w[0]] === "X" ? { ...t, you: t.you + 1 } : { ...t, comp: t.comp + 1 }));
    else if (next.every(Boolean)) setTally((t) => ({ ...t, draw: t.draw + 1 }));
  };
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">You are X. Get three in a row before the computer does.</p>
      <div className="mx-auto grid max-w-xs grid-cols-3 gap-2">
        {b.map((v, i) => (
          <button key={i} type="button" onClick={() => play(i)} aria-label={`Square ${i + 1}${v ? `, ${v}` : ""}`} className={cx("grid aspect-square place-items-center rounded-2xl text-4xl font-extrabold ring-1 ring-line", line?.includes(i) ? "bg-gold-100" : "bg-white", v === "X" ? "text-royal-600" : "text-danger-600")}>{v}</button>
        ))}
      </div>
      <p className="text-center text-sm font-semibold text-navy-800">You {tally.you} · Computer {tally.comp} · Draws {tally.draw}</p>
      {over && <p className="text-center text-base font-bold text-navy-800">{line ? (b[line[0]] === "X" ? "You win! 🎉" : "The computer wins this time.") : "It's a draw."}</p>}
      <div className="text-center"><button type="button" className={buttonClass("primary", "sm")} onClick={() => setB(Array(9).fill(""))}><RotateCcw className="size-4" /> New game</button></div>
    </div>
  );
}

/* --------------------------------------------------------------- colour memory */

const COLOURS = [
  { name: "Green", cls: "bg-emerald-500" },
  { name: "Red", cls: "bg-red-500" },
  { name: "Yellow", cls: "bg-amber-400" },
  { name: "Blue", cls: "bg-blue-500" },
];

export function ColourMemory() {
  const [seq, setSeq] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [lit, setLit] = useState<number | null>(null);
  const [showing, setShowing] = useState(false);
  const [lost, setLost] = useState(false);
  const [bestScore, setBest] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timer.current.forEach(clearTimeout), []);
  const show = (s: number[]) => {
    setShowing(true);
    timer.current.forEach(clearTimeout);
    timer.current = [];
    s.forEach((c, i) => {
      timer.current.push(setTimeout(() => setLit(c), 700 * i + 400));
      timer.current.push(setTimeout(() => setLit(null), 700 * i + 900));
    });
    timer.current.push(setTimeout(() => setShowing(false), 700 * s.length + 400));
  };
  const begin = () => {
    const s = [rnd(4)];
    setSeq(s);
    setStep(0);
    setLost(false);
    show(s);
  };
  const tap = (c: number) => {
    if (showing || lost || !seq.length) return;
    setLit(c);
    setTimeout(() => setLit(null), 200);
    if (c !== seq[step]) {
      setLost(true);
      setBest((b) => Math.max(b, seq.length - 1));
      return;
    }
    if (step + 1 === seq.length) {
      const s = [...seq, rnd(4)];
      setSeq(s);
      setStep(0);
      setBest((b) => Math.max(b, seq.length));
      setTimeout(() => show(s), 500);
    } else setStep(step + 1);
  };
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">Watch the colours light up, then tap them in the same order. Each round adds one more.</p>
      <div className="mx-auto grid max-w-xs grid-cols-2 gap-3">
        {COLOURS.map((c, i) => (
          <button key={c.name} type="button" aria-label={c.name} onClick={() => tap(i)} className={cx("aspect-square rounded-3xl transition", c.cls, lit === i ? "scale-95 opacity-100 ring-4 ring-white shadow-lift" : "opacity-45")} />
        ))}
      </div>
      <p className="text-center text-sm font-semibold text-navy-800">{seq.length ? `Round ${seq.length}` : "Ready?"} · Best {bestScore}</p>
      {lost && <p className="text-center text-base font-bold text-danger-600">Oops! You remembered {seq.length - 1} in a row.</p>}
      <div className="text-center"><button type="button" className={buttonClass("primary", "sm")} onClick={begin} disabled={showing}>{seq.length && !lost ? "Restart" : "Start"}</button></div>
    </div>
  );
}
