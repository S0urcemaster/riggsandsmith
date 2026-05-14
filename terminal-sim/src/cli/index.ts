import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { createInitialGameState } from "../domain/data.js";
import {
  applyHackAction,
  cashOut,
  createHackState,
  resolveCollapse
} from "../domain/hack.js";
import type { GameState, HackResolution, HackState } from "../domain/types.js";
import { renderHack, renderHome, renderResolution } from "./render.js";

type CliAction = "push-yield" | "stabilize-channel" | "regulate-body" | "accelerate-die" | "cash-out";

function actionFromAnswer(answer: string): "push-yield" | "stabilize-channel" | "regulate-body" | "accelerate-die" | "cash-out" | null {
  const normalized = answer.trim().toLowerCase();
  if (normalized === "1" || normalized === "push" || normalized === "push yield") return "push-yield";
  if (normalized === "2" || normalized === "stabilize" || normalized === "stabilize channel") return "stabilize-channel";
  if (normalized === "3" || normalized === "regulate" || normalized === "regulate body") return "regulate-body";
  if (normalized === "4" || normalized === "accelerate" || normalized === "accelerate die") return "accelerate-die";
  if (normalized === "5" || normalized === "cash" || normalized === "cash out") return "cash-out";
  return null;
}

function applyCliAction(hackState: HackState, gameState: GameState, action: CliAction): HackState | HackResolution {
  if (action === "cash-out") {
    return cashOut(hackState, gameState);
  }

  return applyHackAction(hackState, action);
}

async function runHack(rl: readline.Interface, gameState: GameState): Promise<HackResolution> {
  let hackState: HackState = createHackState(gameState, gameState.availableTargets[0]);

  while (!hackState.collapsed) {
    console.log(renderHack(hackState));
    const answer = await rl.question("Choose an action: ");
    const action = actionFromAnswer(answer);

    if (!action) {
      console.log("Unknown action. Choose 1, 2, 3, 4, or 5.");
      continue;
    }

    const result = applyCliAction(hackState, gameState, action);

    if ("nextGameState" in result) {
      return result;
    }

    hackState = result;
  }

  return resolveCollapse(hackState, gameState);
}

function runDemo(): void {
  let gameState = createInitialGameState();
  let hackState = createHackState(gameState, gameState.availableTargets[0]);
  const actions: CliAction[] = ["push-yield", "stabilize-channel", "regulate-body", "cash-out"];

  console.log("Riggs & Smith Terminal Simulation");
  console.log("Foundation demo: Home -> Hack -> next Home.");
  console.log(renderHome(gameState));

  for (const action of actions) {
    console.log(renderHack(hackState));
    console.log(`Demo Action: ${action}`);
    const result = applyCliAction(hackState, gameState, action);

    if ("nextGameState" in result) {
      gameState = result.nextGameState;
      console.log(renderResolution(result));
      console.log(renderHome(gameState));
      console.log("Foundation demo complete.");
      return;
    }

    hackState = result;

    if (hackState.collapsed) {
      const resolution = resolveCollapse(hackState, gameState);
      gameState = resolution.nextGameState;
      console.log(renderResolution(resolution));
      console.log(renderHome(gameState));
      console.log("Foundation demo complete.");
      return;
    }
  }
}

async function main(): Promise<void> {
  if (process.argv.includes("--demo")) {
    runDemo();
    return;
  }

  const rl = readline.createInterface({ input, output });
  let gameState = createInitialGameState();

  console.log("Riggs & Smith Terminal Simulation");
  console.log("Foundation build: Home -> Hack -> next Home.");

  try {
    console.log(renderHome(gameState));
    const startAnswer = await rl.question("Start the hack? (y/n): ");

    if (!["y", "yes"].includes(startAnswer.trim().toLowerCase())) {
      console.log("Simulation stopped at Home.");
      return;
    }

    const resolution = await runHack(rl, gameState);
    gameState = resolution.nextGameState;
    console.log(renderResolution(resolution));
    console.log(renderHome(gameState));
    console.log("Foundation loop complete.");
  } finally {
    rl.close();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
