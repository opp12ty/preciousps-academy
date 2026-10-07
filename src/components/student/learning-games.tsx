"use client";

import { Brain, Calculator, Hash, Layers, RotateCcw, Shuffle, Timer, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonClass, Card, cx, inputClass } from "../ui/primitives";

interface Word {
  term: string;
  meaning: string;
  picture: string;
}
interface Phrase {
  term: string;
  meaning: string;
}
interface Cfg {
  wordScramble: boolean;
  memoryMatch: boolean;
  meaningMatch: boolean;
  mathsSprint: boolean;
  numberPatterns: boolean;
  roundQuestions: number;
  secondsPerRound: number;
}
/** One question in a round: either pick an option or type the answer. */
interface Item {
  prompt: string;
  picture?: string;
  hint?: string;
  options?: string[];
  answer: string;
}
type GameKey = "scramble" | "memory" | "meaning" | "maths" | "patterns";

const rnd = (n: number) => Math.floor(Math.random() * n);
const between = (a: number, b: number) => a + rnd(b - a + 1);
const shuffle = <T,>(xs: T[]) => {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = <T,>(xs: T[], n: number) => shuffle(xs).slice(0, n);

/** Four different options including the answer, the wrong ones close to it. */
function numberOptions(answer: number) {
  const out = new Set<number>([answer]);
  const spread = Math.max(3, Math.round(Math.abs(answer) * 0.2));
  for (let guard = 0; out.size < 4 && guard < 60; guard++) {
    const v = answer + between(-spread, spread);
    if (v >= 0) out.add(v);
  }
  for (let v = answer + 1; out.size < 4; v++) out.add(v);
  return shuffle([...out]).map(String);
}

/** Sums pitched at the year of schooling: Basic 1 = 1 … SS3 = 12. */
function mathsItem(grade: number): Item {
  const ops = grade <= 1 ? ["+"] : grade <= 2 ? ["+", "-"] : grade <= 3 ? ["+", "-", "×"] : ["+", "-", "×", "÷"];
  const op = ops[rnd(ops.length)];
  const top = grade <= 1 ? 10 : grade <= 2 ? 20 : grade <= 4 ? 100 : grade <= 6 ? 500 : 1000;
  const times = grade <= 3 ? 5 : grade <= 5 ? 12 : grade <= 9 ? 20 : 30;
  let a = 0;
  let b = 0;
  let answer = 0;
  if (op === "+") {
    a = between(1, top);
    b = between(1, top);
    answer = a + b;
  } else if (op === "-") {
    a = between(2, top);
    b = between(1, a);
    answer = a - b;
  } else if (op === "×") {
    a = between(2, times);
    b = between(2, Math.min(12, times));
    answer = a * b;
  } else {
    b = between(2, Math.min(12, times));
    answer = between(2, times);
    a = b * answer;
  }
  if (grade >= 10 && rnd(3) === 0) {
    const base = between(2, 15);
    return { prompt: `${base}² = ?`, options: numberOptions(base * base), answer: String(base * base) };
  }
  return { prompt: `${a} ${op} ${b} = ?`, options: numberOptions(answer), answer: String(answer) };
}

function patternItem(grade: number): Item {
  const kinds = grade <= 2 ? ["add"] : grade <= 5 ? ["add", "sub", "double"] : ["add", "sub", "double", "square", "grow"];
  const kind = kinds[rnd(kinds.length)];
  const seq: number[] = [];
  if (kind === "add") {
    const step = between(1, grade <= 2 ? 5 : 12);
    const start = between(1, 20);
    for (let i = 0; i < 5; i++) seq.push(start + i * step);
  } else if (kind === "sub") {
    const step = between(2, 9);
    const start = between(50, 99);
    for (let i = 0; i < 5; i++) seq.push(start - i * step);
  } else if (kind === "double") {
    const ratio = grade <= 5 ? 2 : between(2, 3);
    const start = between(1, 5);
    for (let i = 0; i < 5; i++) seq.push(start * ratio ** i);
  } else if (kind === "square") {
    const start = between(1, 6);
    for (let i = 0; i < 5; i++) seq.push((start + i) ** 2);
  } else {
    let v = between(1, 9);
    let step = between(1, 4);
    for (let i = 0; i < 5; i++) {
      seq.push(v);
      v += step;
      step += 1;
    }
  }
  const answer = seq[4];
  return { prompt: `${seq.slice(0, 4).join(",  ")},  ?`, hint: "What comes next?", options: numberOptions(answer), answer: String(answer) };
}

function scrambleItem(w: Word): Item {
  let mixed = w.term;
  for (let i = 0; i < 8 && mixed === w.term; i++) mixed = shuffle([...w.term]).join("");
  return { prompt: mixed.toUpperCase().split("").join(" "), picture: w.picture, hint: w.meaning, answer: w.term };
}

function meaningItem(p: Phrase, all: Phrase[]): Item {
  const wrong = pick(all.filter((x) => x.meaning !== p.meaning), 3).map((x) => x.meaning);
  return { prompt: p.term, hint: "Choose the meaning.", options: shuffle([p.meaning, ...wrong]), answer: p.meaning };
}

const bestKey = (g: GameKey) => `pps-game-best-${g}`;
const readBest = (g: GameKey) => {
  try {
    return Number(window.localStorage.getItem(bestKey(g)) ?? 0);
  } catch {
    return 0;
  }
};

export function LearningGames({ words, phrases, grade, cfg }: { words: Word[]; phrases: Phrase[]; grade: number; cfg: Cfg }) {
  const [game, setGame] = useState<GameKey | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [cards, setCards] = useState<{ id: number; pair: number; face: string }[]>([]);
  // Shorter words for the younger classes.
  const maxLen = grade <= 2 ? 5 : grade <= 4 ? 7 : grade <= 6 ? 9 : 12;
  const usable = words.filter((w) => w.term.length <= maxLen);
  const menu = [
    { key: "scramble" as const, on: cfg.wordScramble && usable.length >= 4, icon: Shuffle, title: "Word Scramble", text: "The letters are mixed up. Use the picture and the meaning to spell the word." },
    { key: "memory" as const, on: cfg.memoryMatch && usable.length >= 6, icon: Layers, title: "Memory Match", text: "Turn over two cards at a time and pair each picture with its word." },
    { key: "meaning" as const, on: cfg.meaningMatch && phrases.length >= 4, icon: Brain, title: "Meaning Match", text: "Choose the right meaning of an idiom, cliché or phrasal verb." },
    { key: "maths" as const, on: cfg.mathsSprint, icon: Calculator, title: "Maths Sprint", text: "Answer as many sums as you can before the time runs out." },
    { key: "patterns" as const, on: cfg.numberPatterns, icon: Hash, title: "Number Patterns", text: "Work out the rule and find the next number." },
  ].filter((m) => m.on);

  const start = (g: GameKey) => {
    const n = cfg.roundQuestions;
    if (g === "scramble") setItems(pick(usable, n).map(scrambleItem));
    else if (g === "meaning") setItems(pick(phrases, n).map((p) => meaningItem(p, phrases)));
    else if (g === "maths") setItems(Array.from({ length: n }, () => mathsItem(grade)));
    else if (g === "patterns") setItems(Array.from({ length: n }, () => patternItem(grade)));
    else {
      const chosen = pick(usable.filter((w) => w.picture), 6);
      setCards(shuffle(chosen.flatMap((w, i) => [{ pair: i, face: w.picture }, { pair: i, face: w.term }])).map((c, id) => ({ ...c, id })));
    }
    setGame(g);
  };

  if (!game) {
    return menu.length ? (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {menu.map((m) => (
          <Card key={m.key} className="flex flex-col p-5">
            <span className="grid size-12 place-items-center rounded-xl bg-royal-50 text-royal-600"><m.icon className="size-6" aria-hidden /></span>
            <h2 className="mt-3 text-lg font-extrabold text-navy-800">{m.title}</h2>
            <p className="mt-1 text-sm text-muted">{m.text}</p>
            <div className="mt-auto pt-4"><button type="button" className={buttonClass("primary", "sm")} onClick={() => start(m.key)}>Play</button></div>
          </Card>
        ))}
      </div>
    ) : (
      <Card className="p-6 text-sm text-muted">Games will appear here once your teachers switch them on.</Card>
    );
  }
  const title = menu.find((m) => m.key === game)?.title ?? "Game";
  const again = () => start(game);
  const leave = () => setGame(null);
  // The key restarts the round component with fresh state whenever a new round begins.
  return game === "memory" ? <Memory key={cards.map((c) => c.face).join("")} title={title} cards={cards} again={again} leave={leave} /> : <Round key={items.map((i) => i.prompt).join("|")} game={game} title={title} items={items} seconds={cfg.secondsPerRound} again={again} leave={leave} />;
}

function Round({ game, title, items, seconds, again, leave }: { game: GameKey; title: string; items: Item[]; seconds: number; again: () => void; leave: () => void }) {
  const [at, setAt] = useState(0);
  const [score, setScore] = useState(0);
  const [left, setLeft] = useState(seconds);
  const [typed, setTyped] = useState("");
  const [shown, setShown] = useState<{ chosen: string; right: boolean } | null>(null);
  const [best, setBest] = useState(0);
  const over = at >= items.length || left <= 0;

  useEffect(() => {
    if (over) return;
    const id = window.setInterval(() => setLeft((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [over]);
  useEffect(() => {
    if (!over) return;
    const prev = readBest(game);
    if (score > prev) {
      try {
        window.localStorage.setItem(bestKey(game), String(score));
      } catch {
        /* private browsing: the best score is simply not kept */
      }
    }
    const id = window.setTimeout(() => setBest(Math.max(prev, score)), 0);
    return () => window.clearTimeout(id);
  }, [over, game, score]);

  if (over) {
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <Trophy className="mx-auto size-12 text-gold-500" aria-hidden />
        <h2 className="mt-3 text-2xl font-extrabold text-navy-800">{score} out of {items.length}</h2>
        <p className="mt-1 text-sm text-muted">{left <= 0 && at < items.length ? "Time is up. " : ""}{score === items.length ? "Perfect round!" : score >= items.length / 2 ? "Well done. Try to beat your score." : "Keep practising and try again."}</p>
        <p className="mt-1 text-xs font-semibold text-royal-600">Your best on this device: {best}</p>
        <div className="mt-5 flex justify-center gap-2">
          <button type="button" className={buttonClass("primary")} onClick={again}><RotateCcw className="size-4" /> Play again</button>
          <button type="button" className={buttonClass("ghost")} onClick={leave}>All games</button>
        </div>
      </Card>
    );
  }
  const item = items[at];
  const answer = (value: string) => {
    if (shown) return;
    const right = value.trim().toLowerCase() === item.answer.toLowerCase();
    if (right) setScore((s) => s + 1);
    setShown({ chosen: value, right });
    window.setTimeout(() => {
      setShown(null);
      setTyped("");
      setAt((i) => i + 1);
    }, right ? 600 : 1600);
  };
  return (
    <Card className="mx-auto max-w-2xl p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold">
        <span className="text-navy-800">{title} · Question {at + 1} of {items.length}</span>
        <span className="flex items-center gap-3">
          <span className="text-success-600">Score {score}</span>
          <span className={cx("inline-flex items-center gap-1 tabular-nums", left <= 10 ? "text-danger-600" : "text-muted")}><Timer className="size-4" aria-hidden /> {Math.floor(left / 60)}:{String(left % 60).padStart(2, "0")}</span>
        </span>
      </div>
      <div className="mt-5 text-center">
        {item.picture && <div className="text-6xl" aria-hidden>{item.picture}</div>}
        <p className="mt-2 text-2xl font-extrabold tracking-wide text-navy-800 sm:text-3xl">{item.prompt}</p>
        {item.hint && <p className="mt-2 text-sm text-muted">{item.hint}</p>}
      </div>
      {item.options ? (
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {item.options.map((o) => {
            const isAnswer = o === item.answer;
            return (
              <button key={o} type="button" disabled={Boolean(shown)} onClick={() => answer(o)} className={cx("rounded-xl border px-4 py-3 text-left text-sm font-semibold transition", shown ? (isAnswer ? "border-success-600 bg-success-50 text-success-600" : shown.chosen === o ? "border-danger-600 bg-danger-50 text-danger-600" : "border-line bg-white text-muted") : "border-line bg-white text-navy-800 hover:border-royal-600 hover:bg-royal-50")}>
                {o}
              </button>
            );
          })}
        </div>
      ) : (
        <form className="mt-6 flex gap-2" onSubmit={(e) => { e.preventDefault(); if (typed.trim()) answer(typed); }}>
          <input autoFocus value={typed} onChange={(e) => setTyped(e.target.value)} disabled={Boolean(shown)} placeholder="Type the word" aria-label="Your answer" autoComplete="off" autoCapitalize="off" spellCheck={false} className={inputClass} />
          <button className={buttonClass("primary")} disabled={Boolean(shown)}>Check</button>
        </form>
      )}
      <p className="mt-4 min-h-6 text-center text-sm font-bold" aria-live="polite">
        {shown && (shown.right ? <span className="text-success-600">Correct!</span> : <span className="text-danger-600">The answer is “{item.answer}”.</span>)}
      </p>
      <div className="mt-2 text-center"><button type="button" className="text-xs font-semibold text-muted hover:underline" onClick={leave}>Leave game</button></div>
    </Card>
  );
}

function Memory({ title, cards, again, leave }: { title: string; cards: { id: number; pair: number; face: string }[]; again: () => void; leave: () => void }) {
  const [open, setOpen] = useState<number[]>([]);
  const [done, setDone] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const finished = done.length === cards.length / 2;
  const turn = (id: number) => {
    const card = cards[id];
    if (open.length === 2 || open.includes(id) || done.includes(card.pair)) return;
    const next = [...open, id];
    setOpen(next);
    if (next.length < 2) return;
    setMoves((m) => m + 1);
    const match = cards[next[0]].pair === cards[next[1]].pair;
    window.setTimeout(() => {
      if (match) setDone((d) => [...d, card.pair]);
      setOpen([]);
    }, match ? 400 : 1000);
  };
  return (
    <Card className="mx-auto max-w-2xl p-5 sm:p-7">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-navy-800">{title}</span>
        <span className="text-muted">Moves {moves} · Pairs {done.length}/{cards.length / 2}</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {cards.map((c) => {
          const up = open.includes(c.id) || done.includes(c.pair);
          return (
            <button key={c.id} type="button" onClick={() => turn(c.id)} aria-label={up ? c.face : "Hidden card"} className={cx("grid aspect-square place-items-center rounded-2xl border-2 p-1 text-center font-extrabold transition", up ? (done.includes(c.pair) ? "border-success-600 bg-success-50 text-navy-800" : "border-royal-600 bg-white text-navy-800") : "border-navy-800 bg-navy-800 text-gold-400 hover:bg-navy-900")}>
              <span className={/^[a-z]/i.test(c.face) ? "text-sm sm:text-base" : "text-4xl"}>{up ? c.face : "?"}</span>
            </button>
          );
        })}
      </div>
      {finished && <p className="mt-4 text-center text-sm font-bold text-success-600">All pairs found in {moves} moves!</p>}
      <div className="mt-4 flex justify-center gap-2">
        <button type="button" className={buttonClass(finished ? "primary" : "secondary", "sm")} onClick={again}><RotateCcw className="size-4" /> New game</button>
        <button type="button" className={buttonClass("ghost", "sm")} onClick={leave}>All games</button>
      </div>
    </Card>
  );
}
