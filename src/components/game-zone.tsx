"use client";

import { ArrowLeft, BookOpenCheck, Brain, CircleDot, Grid3x3, Keyboard, Layers, Lightbulb, MapPin, Puzzle, Quote, RotateCcw, Search, Shuffle, SpellCheck, Trophy } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { buttonClass, cx } from "./ui/primitives";
import { ColourMemory, ProverbFinish, SpotTheError, StatesQuiz, TicTacToe, TypingTest } from "./games-more";

/**
 * The Game Zone. Every game here is drawn and played in the browser with no pictures, sound files or
 * extra downloads, so the page stays light on a phone. Built-in games make their own puzzles; the
 * school's own games (word search, spelling, matching and riddles) come from the backend.
 */

export interface GameWord { term: string; meaning: string }
export interface CustomGame { id: string; kind: "WORD_SEARCH" | "HANGMAN" | "MATCH" | "RIDDLE"; title: string; description: string | null; pairs: [string, string][] }
export interface GameFlags { sudoku: boolean; slidingPuzzle: boolean; wordSearch: boolean; hangman: boolean; hanoi: boolean; spotError?: boolean; proverbGame?: boolean; statesQuiz?: boolean; typingTest?: boolean; ticTacToe?: boolean; colourMemory?: boolean }
export interface GameExtras { errors: { wrong: string; right: string; why: string }[]; proverbs: { text: string; meaning: string }[] }

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

/* ------------------------------------------------------------------ sudoku */

const BOX: Record<number, [number, number]> = { 4: [2, 2], 6: [2, 3], 9: [3, 3] };

export function makeSudoku(n: number, blanks: number) {
  const [br, bc] = BOX[n];
  const groups = (size: number, count: number) => shuffle([...Array(count).keys()]).flatMap((g) => shuffle([...Array(size).keys()]).map((x) => g * size + x));
  const rows = groups(br, n / br);
  const cols = groups(bc, n / bc);
  const digits = shuffle([...Array(n).keys()].map((x) => x + 1));
  const full = rows.map((r) => cols.map((c) => digits[(bc * (r % br) + Math.floor(r / br) + c) % n]));
  const hide = new Set(shuffle([...Array(n * n).keys()]).slice(0, blanks));
  return full.map((row, r) => row.map((v, c) => (hide.has(r * n + c) ? 0 : v)));
}

/** Cells that break a rule: the same number twice in a row, a column or a box. */
export function sudokuClashes(g: number[][], n: number) {
  const [br, bc] = BOX[n];
  const bad = new Set<string>();
  const check = (cells: [number, number][]) => {
    for (const [r, c] of cells) if (g[r][c] && cells.some(([r2, c2]) => (r2 !== r || c2 !== c) && g[r2][c2] === g[r][c])) bad.add(`${r},${c}`);
  };
  for (let i = 0; i < n; i++) {
    check([...Array(n).keys()].map((k) => [i, k]));
    check([...Array(n).keys()].map((k) => [k, i]));
  }
  for (let r = 0; r < n; r += br) for (let c = 0; c < n; c += bc) check([...Array(br * bc).keys()].map((k) => [r + Math.floor(k / bc), c + (k % bc)]));
  return bad;
}

function Sudoku({ grade }: { grade: number }) {
  const make = (size: number) => {
    const g = makeSudoku(size, size === 4 ? 8 : size === 6 ? 18 : 44);
    return { n: size, start: g, grid: g.map((r) => [...r]) };
  };
  const [game, setGame] = useState(() => make(grade <= 3 ? 4 : grade <= 8 ? 6 : 9));
  const [pick, setPick] = useState<[number, number] | null>(null);
  const { n, start, grid } = game;
  const fresh = (size: number) => {
    setGame(make(size));
    setPick(null);
  };
  const [br, bc] = BOX[n];
  const bad = sudokuClashes(grid, n);
  const done = grid.every((r) => r.every(Boolean)) && bad.size === 0;
  const put = (v: number) => pick && !start[pick[0]][pick[1]] && setGame((g) => ({ ...g, grid: g.grid.map((row, r) => row.map((x, c) => (r === pick[0] && c === pick[1] ? v : x))) }));
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {[4, 6, 9].map((s) => <button key={s} type="button" onClick={() => fresh(s)} className={cx("rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1", n === s ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line")}>{s} × {s}</button>)}
        <button type="button" onClick={() => fresh(n)} className={buttonClass("secondary", "sm")}><RotateCcw className="size-4" /> New puzzle</button>
      </div>
      <p className="text-sm text-muted">Fill the grid so that every row, every column and every thick-lined box has each number from 1 to {n} once. Tap a square, then tap a number.</p>
      <div className="mx-auto grid w-full max-w-md select-none overflow-hidden rounded-xl border-2 border-navy-800 bg-white" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }} role="grid" aria-label="Sudoku">
        {grid.map((row, r) => row.map((v, c) => {
          const given = Boolean(start[r][c]);
          const on = pick?.[0] === r && pick?.[1] === c;
          return (
            <button key={`${r}-${c}`} type="button" role="gridcell" aria-label={`Row ${r + 1}, column ${c + 1}${v ? `, ${v}` : ", empty"}`} disabled={given} onClick={() => setPick([r, c])}
              className={cx("grid aspect-square place-items-center border border-line text-lg font-extrabold tabular-nums sm:text-xl", given ? "bg-surface text-navy-800" : "text-royal-600", on && "bg-gold-100 ring-2 ring-inset ring-gold-500", bad.has(`${r},${c}`) && "bg-danger-50 text-danger-600", (c + 1) % bc === 0 && c < n - 1 && "border-r-2 border-r-navy-800", (r + 1) % br === 0 && r < n - 1 && "border-b-2 border-b-navy-800")}>
              {v || ""}
            </button>
          );
        }))}
      </div>
      <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2">
        {[...Array(n).keys()].map((k) => <button key={k} type="button" onClick={() => put(k + 1)} disabled={!pick} className="grid size-11 place-items-center rounded-xl bg-navy-800 text-lg font-extrabold text-white disabled:opacity-40">{k + 1}</button>)}
        <button type="button" onClick={() => put(0)} disabled={!pick} className="grid h-11 place-items-center rounded-xl bg-white px-3 text-sm font-bold text-navy-800 ring-1 ring-line disabled:opacity-40">Clear</button>
      </div>
      {done && <Win>Solved! Every row, column and box is correct.</Win>}
    </div>
  );
}

/* ---------------------------------------------------------- sliding puzzle */

function Sliding() {
  const mix = (size: number) => {
    // Mixed by making real moves from the solved board, so every puzzle can be solved.
    let t = [...Array(size * size).keys()].map((k) => (k + 1) % (size * size));
    let hole = t.indexOf(0);
    for (let i = 0; i < size * size * 30; i++) {
      const opts = [hole - size, hole + size, hole % size ? hole - 1 : -1, hole % size < size - 1 ? hole + 1 : -1].filter((x) => x >= 0 && x < t.length);
      const to = opts[rnd(opts.length)];
      t = t.map((v, k) => (k === hole ? t[to] : k === to ? 0 : v));
      hole = to;
    }
    return { n: size, tiles: t, moves: 0 };
  };
  const [game, setGame] = useState(() => mix(3));
  const { n, tiles, moves } = game;
  const fresh = (size: number) => setGame(mix(size));
  const hole = tiles.indexOf(0);
  const canMove = (k: number) => (Math.abs(k - hole) === n) || (Math.abs(k - hole) === 1 && Math.floor(k / n) === Math.floor(hole / n));
  const solved = tiles.length > 0 && tiles.every((v, k) => v === (k + 1) % tiles.length);
  const move = (k: number) => {
    if (!canMove(k) || solved) return;
    setGame((g) => ({ ...g, tiles: g.tiles.map((v, i) => (i === hole ? g.tiles[k] : i === k ? 0 : v)), moves: g.moves + 1 }));
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {[3, 4].map((s) => <button key={s} type="button" onClick={() => fresh(s)} className={cx("rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1", n === s ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line")}>{s} × {s}</button>)}
        <button type="button" onClick={() => fresh(n)} className={buttonClass("secondary", "sm")}><Shuffle className="size-4" /> Mix again</button>
        <span className="ml-auto text-sm font-bold text-navy-800">Moves: {moves}</span>
      </div>
      <p className="text-sm text-muted">Slide the tiles into order, 1 to {n * n - 1}, with the empty space last. Tap a tile next to the space to move it.</p>
      <div className="mx-auto grid w-full max-w-xs select-none gap-1.5 rounded-2xl bg-navy-800 p-2" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {tiles.map((v, k) => (
          <button key={k} type="button" onClick={() => move(k)} aria-label={v ? `Tile ${v}` : "Empty space"} disabled={!v}
            className={cx("grid aspect-square place-items-center rounded-xl text-2xl font-extrabold transition", v ? (v === k + 1 ? "bg-gold-400 text-navy-900" : "bg-white text-navy-800") : "bg-navy-900/40", v && canMove(k) && "ring-2 ring-royal-500")}>
            {v || ""}
          </button>
        ))}
      </div>
      {solved && moves > 0 && <Win>In order! You did it in {moves} moves.</Win>}
    </div>
  );
}

/* ------------------------------------------------------------- word search */

export function buildSearch(words: string[], size: number) {
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(""));
  const placed: { word: string; cells: [number, number][] }[] = [];
  const dirs: [number, number][] = [[0, 1], [1, 0], [1, 1], [-1, 1]];
  for (const w of words) {
    for (let attempt = 0; attempt < 80; attempt++) {
      const [dr, dc] = dirs[rnd(dirs.length)];
      const r0 = rnd(size);
      const c0 = rnd(size);
      const cells = [...w].map((_, i) => [r0 + dr * i, c0 + dc * i] as [number, number]);
      if (cells.some(([r, c]) => r < 0 || c < 0 || r >= size || c >= size)) continue;
      if (cells.some(([r, c], i) => grid[r][c] && grid[r][c] !== w[i])) continue;
      cells.forEach(([r, c], i) => (grid[r][c] = w[i]));
      placed.push({ word: w, cells });
      break;
    }
  }
  const ABC = "ABCDEFGHIJKLMNOPRSTUW";
  return { grid: grid.map((row) => row.map((ch) => ch || ABC[rnd(ABC.length)])), placed };
}

function WordSearch({ words, title }: { words: GameWord[]; title?: string }) {
  const size = 10;
  const make = () => buildSearch(shuffle(words.map((w) => w.term.toUpperCase().replace(/[^A-Z]/g, "")).filter((w) => w.length >= 3 && w.length <= size)).slice(0, 8), size);
  const [board, setBoard] = useState(make);
  const [found, setFound] = useState<string[]>([]);
  const [first, setFirst] = useState<[number, number] | null>(null);
  const again = () => {
    setBoard(make());
    setFound([]);
    setFirst(null);
  };
  if (!board.placed.length) return <p className="text-sm text-muted">There are not enough words for a word search yet.</p>;
  const lit = new Set(board.placed.filter((p) => found.includes(p.word)).flatMap((p) => p.cells.map(([r, c]) => `${r},${c}`)));
  const tap = (r: number, c: number) => {
    if (!first) return setFirst([r, c]);
    const hit = board.placed.find((p) => {
      const a = p.cells[0];
      const b = p.cells[p.cells.length - 1];
      return (a[0] === first[0] && a[1] === first[1] && b[0] === r && b[1] === c) || (b[0] === first[0] && b[1] === first[1] && a[0] === r && a[1] === c);
    });
    if (hit && !found.includes(hit.word)) setFound((f) => [...f, hit.word]);
    setFirst(null);
  };
  const done = found.length === board.placed.length;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {title && <p className="font-bold text-navy-800">{title}</p>}
        <button type="button" onClick={again} className={buttonClass("secondary", "sm")}><RotateCcw className="size-4" /> New grid</button>
        <span className="ml-auto text-sm font-bold text-navy-800">Found {found.length} of {board.placed.length}</span>
      </div>
      <p className="text-sm text-muted">Find each word in the grid. Words run across, down or diagonally. Tap the first letter of a word, then its last letter.</p>
      <div className="mx-auto grid w-full max-w-md select-none gap-0.5" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
        {board.grid.map((row, r) => row.map((ch, c) => (
          <button key={`${r}-${c}`} type="button" onClick={() => tap(r, c)} aria-label={`${ch}, row ${r + 1}, column ${c + 1}`}
            className={cx("grid aspect-square place-items-center rounded-md text-sm font-extrabold sm:text-base", lit.has(`${r},${c}`) ? "bg-gold-400 text-navy-900" : first?.[0] === r && first?.[1] === c ? "bg-royal-600 text-white" : "bg-white text-navy-800 ring-1 ring-line")}>
            {ch}
          </button>
        )))}
      </div>
      <ul className="flex flex-wrap gap-2">
        {board.placed.map((p) => <li key={p.word} className={cx("rounded-full px-3 py-1 text-xs font-bold", found.includes(p.word) ? "bg-success-50 text-success-600 line-through" : "bg-surface text-navy-800 ring-1 ring-line")}>{p.word}</li>)}
      </ul>
      {done && <Win>You found every word!</Win>}
    </div>
  );
}

/* ----------------------------------------------------------------- hangman */

function Hangman({ words, title }: { words: GameWord[]; title?: string }) {
  const pool = useMemo(() => words.filter((w) => /^[a-z]{3,14}$/i.test(w.term)), [words]);
  const [at, setAt] = useState(() => rnd(Math.max(1, pool.length)));
  const [tried, setTried] = useState<string[]>([]);
  if (!pool.length) return <p className="text-sm text-muted">There are no words for this game yet.</p>;
  const w = pool[at % pool.length];
  const word = w.term.toUpperCase();
  const wrong = tried.filter((l) => !word.includes(l)).length;
  const LIVES = 7;
  const won = [...word].every((l) => tried.includes(l));
  const lost = wrong >= LIVES;
  const next = () => {
    setAt((x) => (x + 1 + rnd(Math.max(1, pool.length - 1))) % pool.length);
    setTried([]);
  };
  return (
    <div className="space-y-4">
      {title && <p className="font-bold text-navy-800">{title}</p>}
      <p className="text-sm text-muted">Spell the word one letter at a time. You may miss {LIVES} letters.</p>
      <p className="rounded-xl bg-royal-50 px-4 py-3 text-sm text-navy-800"><span className="font-bold">Clue:</span> {w.meaning}</p>
      <div className="flex items-center justify-between gap-3">
        <p className="flex flex-wrap gap-1.5 font-mono text-2xl font-extrabold tracking-widest text-navy-800" aria-label={`Word with ${word.length} letters`}>
          {[...word].map((l, i) => <span key={i} className="grid h-10 w-8 place-items-center border-b-4 border-navy-800">{tried.includes(l) || lost ? l : ""}</span>)}
        </p>
        <p className="shrink-0 text-sm font-bold" aria-label={`${LIVES - wrong} chances left`}>{"❤".repeat(Math.max(0, LIVES - wrong))}<span className="opacity-25">{"❤".repeat(Math.min(LIVES, wrong))}</span></p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((l) => (
          <button key={l} type="button" disabled={tried.includes(l) || won || lost} onClick={() => setTried((t) => [...t, l])}
            className={cx("grid size-9 place-items-center rounded-lg text-sm font-extrabold", tried.includes(l) ? (word.includes(l) ? "bg-success-50 text-success-600" : "bg-danger-50 text-danger-600") : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
            {l}
          </button>
        ))}
      </div>
      {won && <Win>Correct: {word}.</Win>}
      {lost && <p role="status" className="rounded-xl border border-red-200 bg-danger-50 px-4 py-3 text-sm font-bold text-danger-600">The word was {word}. Try the next one.</p>}
      {(won || lost) && <button type="button" onClick={next} className={buttonClass("primary", "sm")}>Next word</button>}
    </div>
  );
}

/* ---------------------------------------------------------- tower of hanoi */

function Hanoi() {
  const [n, setN] = useState(3);
  const [pegs, setPegs] = useState<number[][]>([[3, 2, 1], [], []]);
  const [from, setFrom] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const fresh = (d: number) => {
    setN(d);
    setPegs([[...Array(d).keys()].map((k) => d - k), [], []]);
    setFrom(null);
    setMoves(0);
  };
  const tap = (p: number) => {
    if (from === null) return pegs[p].length ? setFrom(p) : undefined;
    if (from === p) return setFrom(null);
    const disc = pegs[from][pegs[from].length - 1];
    const top = pegs[p][pegs[p].length - 1];
    if (top === undefined || disc < top) {
      setPegs((ps) => ps.map((x, i) => (i === from ? x.slice(0, -1) : i === p ? [...x, disc] : x)));
      setMoves((m) => m + 1);
    }
    setFrom(null);
  };
  const done = pegs[2].length === n;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {[3, 4, 5].map((d) => <button key={d} type="button" onClick={() => fresh(d)} className={cx("rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1", n === d ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line")}>{d} discs</button>)}
        <button type="button" onClick={() => fresh(n)} className={buttonClass("secondary", "sm")}><RotateCcw className="size-4" /> Start again</button>
        <span className="ml-auto text-sm font-bold text-navy-800">Moves: {moves} · best possible: {2 ** n - 1}</span>
      </div>
      <p className="text-sm text-muted">Move the whole tower to the last peg. Move one disc at a time, and never put a bigger disc on a smaller one. Tap a peg to lift its top disc, then tap the peg to put it on.</p>
      <div className="grid grid-cols-3 gap-2">
        {pegs.map((p, i) => (
          <button key={i} type="button" onClick={() => tap(i)} aria-label={`Peg ${i + 1} with ${p.length} discs`} className={cx("flex h-44 flex-col-reverse items-center gap-1 rounded-2xl border-2 bg-white p-2", from === i ? "border-gold-500 bg-gold-50" : "border-line")}>
            <span className="h-1.5 w-full rounded bg-navy-800" />
            {p.map((d, k) => <span key={d} className={cx("h-5 rounded-full", k === p.length - 1 && from === i ? "bg-gold-500" : "bg-royal-600")} style={{ width: `${25 + (d / n) * 70}%` }} />)}
          </button>
        ))}
      </div>
      {done && <Win>{moves === 2 ** n - 1 ? `Perfect! ${moves} moves is the fewest possible.` : `Done in ${moves} moves. The fewest possible is ${2 ** n - 1}.`}</Win>}
    </div>
  );
}

/* ---------------------------------------------- school games: match, riddle */

function Match({ pairs }: { pairs: [string, string][] }) {
  const deal = () => {
    const set = shuffle(pairs).slice(0, 6);
    return { set, right: shuffle(set.map((x) => x[1])) };
  };
  const [{ set, right }, setDeal] = useState(deal);
  const [left, setLeft] = useState<string | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [miss, setMiss] = useState(0);
  const another = () => {
    setDeal(deal());
    setDone([]);
    setLeft(null);
    setMiss(0);
  };
  const choose = (meaning: string) => {
    if (!left) return;
    if (set.find((p) => p[0] === left)?.[1] === meaning) setDone((d) => [...d, left]);
    else setMiss((m) => m + 1);
    setLeft(null);
  };
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">Tap an item on the left, then tap what matches it on the right.</p>
      <div className="grid grid-cols-2 gap-3">
        <ul className="space-y-2">{set.map(([t]) => <li key={t}><button type="button" disabled={done.includes(t)} onClick={() => setLeft(t)} className={cx("w-full rounded-xl px-3 py-2.5 text-left text-sm font-bold", done.includes(t) ? "bg-success-50 text-success-600" : left === t ? "bg-royal-600 text-white" : "bg-white text-navy-800 ring-1 ring-line")}>{t}</button></li>)}</ul>
        <ul className="space-y-2">{right.map((m) => { const used = set.some((p) => p[1] === m && done.includes(p[0])); return <li key={m}><button type="button" disabled={used} onClick={() => choose(m)} className={cx("w-full rounded-xl px-3 py-2.5 text-left text-sm", used ? "bg-success-50 text-success-600" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{m}</button></li>; })}</ul>
      </div>
      {done.length === set.length && <Win>All matched{miss ? ` with ${miss} wrong ${miss === 1 ? "try" : "tries"}` : " without a single mistake"}!</Win>}
      {done.length === set.length && pairs.length > 6 && <button type="button" onClick={another} className={buttonClass("primary", "sm")}>Another set</button>}
    </div>
  );
}

function Riddles({ pairs }: { pairs: [string, string][] }) {
  const [at, setAt] = useState(0);
  const [show, setShow] = useState(false);
  const [q, a] = pairs[at % pairs.length];
  return (
    <div className="space-y-4">
      <p className="text-xs font-bold uppercase tracking-wide text-gold-600">Riddle {(at % pairs.length) + 1} of {pairs.length}</p>
      <p className="rounded-2xl bg-navy-800 p-5 text-lg font-bold leading-relaxed text-white">{q}</p>
      {show ? <p className="pop rounded-2xl border border-gold-400/50 bg-gold-50 p-4 text-base font-bold text-navy-800">{a}</p> : <button type="button" onClick={() => setShow(true)} className={buttonClass("secondary")}><Lightbulb className="size-4" /> Show the answer</button>}
      <div><button type="button" onClick={() => { setAt((x) => x + 1); setShow(false); }} className={buttonClass("primary", "sm")}>Next riddle</button></div>
    </div>
  );
}

/* -------------------------------------------------------------------- zone */

type Entry = { key: string; title: string; blurb: string; icon: typeof Puzzle; colour: string; play: () => ReactNode; school?: boolean };

export function GameZone({ words, grade, flags, custom, extras }: { words: GameWord[]; grade: number; flags: GameFlags; custom: CustomGame[]; extras?: GameExtras }) {
  const [open, setOpen] = useState<string | null>(null);
  const asWords = (pairs: [string, string][]) => pairs.map(([term, meaning]) => ({ term, meaning }));
  const games: Entry[] = [
    ...(flags.sudoku ? [{ key: "sudoku", title: "Sudoku", blurb: "Number logic: each number once in every row, column and box.", icon: Grid3x3, colour: "#1d4ed8", play: () => <Sudoku grade={grade} /> }] : []),
    ...(flags.slidingPuzzle ? [{ key: "sliding", title: "Sliding Puzzle", blurb: "Slide the numbered tiles back into order in as few moves as you can.", icon: Puzzle, colour: "#7c3aed", play: () => <Sliding /> }] : []),
    ...(flags.wordSearch ? [{ key: "wordsearch", title: "Word Search", blurb: "Find hidden words from your class dictionary.", icon: Search, colour: "#047857", play: () => <WordSearch words={words} /> }] : []),
    ...(flags.hangman ? [{ key: "hangman", title: "Spell It", blurb: "Read the clue and spell the word before your chances run out.", icon: SpellCheck, colour: "#c2410c", play: () => <Hangman words={words} /> }] : []),
    ...(flags.hanoi ? [{ key: "hanoi", title: "Tower of Hanoi", blurb: "A classic planning puzzle: move the tower one disc at a time.", icon: Layers, colour: "#a8841e", play: () => <Hanoi /> }] : []),
    ...(flags.spotError !== false && extras?.errors.length ? [{ key: "spot", title: "Spot the Correct Sentence", blurb: "Two sentences, one mistake. Pick the correct English and learn why.", icon: BookOpenCheck, colour: "#0f766e", play: () => <SpotTheError items={extras.errors} /> }] : []),
    ...(flags.proverbGame !== false && (extras?.proverbs.length ?? 0) >= 4 ? [{ key: "proverb", title: "Complete the Proverb", blurb: "Finish wise sayings from Nigeria, Africa and the world.", icon: Quote, colour: "#9333ea", play: () => <ProverbFinish proverbs={extras!.proverbs} /> }] : []),
    ...(flags.statesQuiz !== false ? [{ key: "states", title: "States and Capitals", blurb: "How well do you know Nigeria's 36 states and their capitals?", icon: MapPin, colour: "#15803d", play: () => <StatesQuiz /> }] : []),
    ...(flags.typingTest !== false ? [{ key: "typing", title: "Typing Speed", blurb: "Type a sentence and see your words per minute and accuracy.", icon: Keyboard, colour: "#0369a1", play: () => <TypingTest /> }] : []),
    ...(flags.ticTacToe !== false ? [{ key: "ttt", title: "Tic-Tac-Toe", blurb: "Think ahead and beat the computer: three in a row wins.", icon: CircleDot, colour: "#dc2626", play: () => <TicTacToe /> }] : []),
    ...(flags.colourMemory !== false ? [{ key: "memory", title: "Colour Memory", blurb: "Watch, remember and repeat a growing pattern of colours.", icon: Brain, colour: "#d97706", play: () => <ColourMemory /> }] : []),
    ...custom.filter((g) => g.pairs.length >= (g.kind === "RIDDLE" ? 1 : 3)).map((g): Entry => ({
      key: g.id,
      title: g.title,
      blurb: g.description || { WORD_SEARCH: "A word search set by your school.", HANGMAN: "A spelling game set by your school.", MATCH: "A matching game set by your school.", RIDDLE: "Riddles set by your school." }[g.kind],
      icon: { WORD_SEARCH: Search, HANGMAN: SpellCheck, MATCH: Shuffle, RIDDLE: Lightbulb }[g.kind],
      colour: "#be185d",
      school: true,
      play: () => (g.kind === "WORD_SEARCH" ? <WordSearch words={asWords(g.pairs)} /> : g.kind === "HANGMAN" ? <Hangman words={asWords(g.pairs)} /> : g.kind === "MATCH" ? <Match pairs={g.pairs} /> : <Riddles pairs={g.pairs} />),
    })),
  ];
  const now = games.find((g) => g.key === open);
  if (now) {
    return (
      <section className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-6">
        <button type="button" onClick={() => setOpen(null)} className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> All games</button>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-navy-800"><now.icon className="size-6" style={{ color: now.colour }} aria-hidden /> {now.title}</h2>
        {now.play()}
      </section>
    );
  }
  if (!games.length) return <p className="rounded-2xl border border-line bg-white p-6 text-sm text-muted">No game is switched on at the moment.</p>;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {games.map((g, i) => (
        <li key={g.key}>
          <button type="button" onClick={() => setOpen(g.key)} className={cx("pop group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-5 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-lift", i % 4 === 1 && "pop-2", i % 4 === 2 && "pop-3", i % 4 === 3 && "pop-4")}>
            <span aria-hidden className="absolute inset-x-0 top-0 h-1.5" style={{ background: g.colour }} />
            <span className="grid size-12 place-items-center rounded-2xl text-white" style={{ background: g.colour }}><g.icon className="size-6" aria-hidden /></span>
            <span className="mt-3 text-lg font-extrabold text-navy-800">{g.title}</span>
            <span className="mt-1 flex-1 text-sm leading-relaxed text-muted">{g.blurb}</span>
            <span className="mt-3 text-sm font-bold text-royal-600">{g.school ? "From your school · Play" : "Play"}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
