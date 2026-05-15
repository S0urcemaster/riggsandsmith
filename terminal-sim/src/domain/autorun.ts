import { applyHackAction, carryResultToNextHome, resolveHack } from "./hack.ts";
import { createRng } from "./rng.ts";
import { buyShopItem, createHackState, createInitialGameState } from "./state.ts";
import type { GameState, HackAction, HackState, RunMetrics, StrategyName } from "./types.ts";

export function chooseAction(strategy: StrategyName, hack: HackState, game?: GameState): HackAction {
  const canBrake = game?.rig.manipulators.includes("brake") ?? false;
  const canCool = game?.rig.manipulators.includes("cool") ?? false;

  if (strategy === "cautious") {
    if (hack.profit >= 35 || hack.redZone > 45 || hack.bodyPressure > 55) return "cashOut";
    if (hack.bodyPressure > 35) return "regulateBody";
    if (canCool && hack.heat > 28) return "coolSlot1";
    if (canBrake && hack.instability > 24) return "brakeSlot1";
    if (hack.instability > 30 || hack.heat > 35) return "stabilizeChannel";
    return "pushYield";
  }

  if (strategy === "balanced") {
    if (hack.profit >= 85 || hack.redZone > 68 || hack.heat > 72 || hack.bodyPressure > 72) return "cashOut";
    if (hack.bodyPressure > 58) return "regulateBody";
    if (canCool && hack.heat > 48) return "coolSlot1";
    if (canBrake && hack.instability > 44) return "brakeSlot1";
    if (hack.instability > 50 || hack.heat > 55) return "stabilizeChannel";
    return hack.tick % 4 === 2 ? "accelerateSlot1" : "pushYield";
  }

  if (strategy === "stabilizer") {
    if (hack.profit >= 65 && hack.redZone > 52) return "cashOut";
    if (hack.bodyPressure > 45) return "regulateBody";
    if (canCool && hack.heat > 24) return "coolSlot1";
    if (canBrake && hack.instability > 20) return "brakeSlot1";
    if (hack.tick % 2 === 1 || hack.instability > 24 || hack.heat > 30) return "stabilizeChannel";
    return "pushYield";
  }

  if (hack.profit >= 160 || hack.redZone > 88 || hack.heat > 90 || hack.bodyPressure > 88) return "cashOut";
  if (canCool && hack.heat > 82) return "coolSlot1";
  if (canBrake && hack.instability > 76) return "brakeSlot1";
  if (hack.tick % 5 === 1) return "accelerateSlot2";
  return "pushYield";
}

export function simulateOneHack(options: {
  seed: number;
  strategy: StrategyName;
  game?: GameState;
  maxTicks?: number;
}) {
  const rng = createRng(options.seed);
  const game = options.game ?? createInitialGameState();
  let hack = createHackState(game);
  const maxTicks = options.maxTicks ?? 18;

  while (hack.status === "running" && hack.tick < maxTicks) {
    hack = applyHackAction(game, hack, chooseAction(options.strategy, hack, game), rng);
  }

  if (hack.status === "running") {
    hack = applyHackAction(game, hack, "cashOut", rng);
  }

  const result = resolveHack(game, hack);
  return carryResultToNextHome(game, result);
}

export function simulateMany(options: {
  runs: number;
  seed: number;
  strategy: StrategyName;
  diceIds?: string[];
  targetId?: string;
  openingItemId?: string;
}): RunMetrics {
  const profits: number[] = [];
  let collapses = 0;
  let cashOuts = 0;
  let casinoHeatGain = 0;
  let policeHeatGain = 0;
  let rigDamage = 0;

  for (let index = 0; index < options.runs; index += 1) {
    let game = createInitialGameState({ diceIds: options.diceIds, targetId: options.targetId });
    if (options.openingItemId) {
      game = {
        ...game,
        player: {
          ...game.player,
          onboardingComplete: true,
          money: 300
        }
      };
      game = buyShopItem(game, options.openingItemId).game;
    }
    const resolved = simulateOneHack({
      game,
      strategy: options.strategy,
      seed: options.seed + index * 101
    });

    profits.push(resolved.result.profit);
    if (resolved.result.status === "collapsed") collapses += 1;
    if (resolved.result.status === "cashedOut") cashOuts += 1;
    casinoHeatGain += resolved.result.casinoHeatGain;
    policeHeatGain += resolved.result.policeHeatGain;
    rigDamage += resolved.result.rigDamageGain;
  }

  const totalProfit = profits.reduce((sum, profit) => sum + profit, 0);
  const averageProfit = totalProfit / options.runs;
  const profitVariance =
    profits.reduce((sum, profit) => sum + (profit - averageProfit) ** 2, 0) / options.runs;

  return {
    runs: options.runs,
    strategy: options.strategy,
    seed: options.seed,
    totalProfit,
    averageProfit,
    collapseRate: collapses / options.runs,
    cashOutRate: cashOuts / options.runs,
    averageCasinoHeatGain: casinoHeatGain / options.runs,
    averagePoliceHeatGain: policeHeatGain / options.runs,
    averageRigDamage: rigDamage / options.runs,
    profitVariance
  };
}
