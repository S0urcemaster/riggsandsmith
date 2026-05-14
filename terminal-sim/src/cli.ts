import { createInterface, type Interface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { simulateMany } from "./domain/autorun.ts";
import { applyHackAction, carryResultToNextHome, resolveHack } from "./domain/hack.ts";
import { createRng, randomSeed } from "./domain/rng.ts";
import { createHackState, createInitialGameState } from "./domain/state.ts";
import type { HackAction, StrategyName } from "./domain/types.ts";
import { clearScreen, renderHack, renderHome, renderMetrics, renderResult } from "./terminal/render.ts";

type CliOptions = Record<string, string | boolean>;

const command = process.argv[2] ?? "play";
const options = parseOptions(process.argv.slice(3));

async function play(): Promise<void> {
  const rng = createRng(readNumber("seed", randomSeed()));
  let game = createInitialGameState({
    diceIds: readDiceIds(),
    targetId: readString("target", "corner-penny")
  });

  const lines = new LineReader();

  while (true) {
    clearScreen();
    console.log(renderHome(game));
    const start = (await lines.question("\nPress enter to start Hack, or q to quit: ")).trim().toLowerCase();
    if (start === "q") break;

    let hack = createHackState(game);
    while (hack.status === "running") {
      clearScreen();
      console.log(renderHack(game, hack));
      const answer = (await lines.question("\nAction: ")).trim().toLowerCase();
      const action = mapAction(answer);
      if (!action) {
        hack.eventLog.push("Unknown command. Pressure keeps climbing while Riggs hesitates.");
        hack = applyHackAction(game, hack, "regulateBody", rng);
        continue;
      }
      hack = applyHackAction(game, hack, action, rng);
    }

    const result = resolveHack(game, hack);
    const resolved = carryResultToNextHome(game, result);
    game = resolved.game;

    clearScreen();
    console.log(renderResult(result));
    if (resolved.catchSource) {
      console.log(`\nCATCH: ${resolved.catchSource} heat reached maximum. Catch count is now ${game.player.catchCount}/3.`);
    }
    if (resolved.runEnded) {
      console.log(`\nRUN ENDED. Score: $${game.player.totalExtracted}`);
      break;
    }

    const next = (await lines.question("\nPress enter for next Home, or q to quit: ")).trim().toLowerCase();
    if (next === "q") break;
  }

  lines.close();
}

function autorun(): void {
  const strategy = readStrategy();
  const runs = readNumber("runs", 100);
  const seed = readNumber("seed", 42);
  const metrics = simulateMany({
    runs,
    seed,
    strategy,
    diceIds: readDiceIds(),
    targetId: readString("target", "corner-penny")
  });

  console.log(renderMetrics(metrics));
  console.log("\nFallback recovery scenario: Loser's Rig + two Loser's Dice against Corner Penny Slot.");
}

function compare(): void {
  const runs = readNumber("runs", 200);
  const seed = readNumber("seed", 42);
  const strategies: StrategyName[] = ["cautious", "balanced", "stabilizer", "greedy"];
  const diceIds = readDiceIds();
  const targetId = readString("target", "corner-penny");

  console.log(`Comparison over ${runs} runs per strategy.\n`);
  for (const strategy of strategies) {
    console.log(renderMetrics(simulateMany({ runs, seed, strategy, diceIds, targetId })));
    console.log("");
  }
  console.log("Current read: greed raises average profit only when collapse and heat variance remain survivable.");
}

function mapAction(value: string): HackAction | undefined {
  if (value === "p" || value === "push") return "pushYield";
  if (value === "s" || value === "stabilize") return "stabilizeChannel";
  if (value === "b" || value === "breath" || value === "breathe") return "regulateBody";
  if (value === "a1") return "accelerateSlot1";
  if (value === "a2") return "accelerateSlot2";
  if (value === "c" || value === "cash") return "cashOut";
  return undefined;
}

function readStrategy(): StrategyName {
  const value = readString("strategy", "balanced");
  if (["cautious", "balanced", "greedy", "stabilizer"].includes(value)) return value as StrategyName;
  return "balanced";
}

function readDiceIds(): string[] | undefined {
  const value = readString("dice", "");
  if (!value) return undefined;
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function readString(name: string, fallback: string): string {
  const value = options[name];
  return typeof value === "string" ? value : fallback;
}

function readNumber(name: string, fallback: number): number {
  const value = options[name];
  if (typeof value !== "string") return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseOptions(args: string[]): CliOptions {
  const parsed: CliOptions = {};

  for (let index = 0; index < args.length; index += 1) {
    const item = args[index];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = args[index + 1];
    if (!next || next.startsWith("--")) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }

  return parsed;
}

class LineReader {
  private rl: Interface;
  private queue: string[] = [];
  private waiters: ((value: string) => void)[] = [];
  private closed = false;

  constructor() {
    this.rl = createInterface({ input, output, terminal: input.isTTY && output.isTTY });
    this.rl.on("line", (line) => {
      const waiter = this.waiters.shift();
      if (waiter) waiter(line);
      else this.queue.push(line);
    });
    this.rl.on("close", () => {
      this.closed = true;
      for (const waiter of this.waiters.splice(0)) waiter("q");
    });
  }

  question(prompt: string): Promise<string> {
    output.write(prompt);
    const queued = this.queue.shift();
    if (queued !== undefined) return Promise.resolve(queued);
    if (this.closed) return Promise.resolve("q");
    return new Promise((resolve) => this.waiters.push(resolve));
  }

  close(): void {
    this.rl.close();
  }
}

if (command === "play") {
  await play();
} else if (command === "autorun") {
  autorun();
} else if (command === "compare") {
  compare();
} else {
  console.log("Usage: npm run play | npm run autorun -- --runs 100 --strategy balanced --seed 42 | npm run compare");
  process.exitCode = 1;
}
