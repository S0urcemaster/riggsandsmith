import { CASINO_HEAT_MAX, POLICE_HEAT_MAX } from "../domain/content.ts";
import { buildWarnings, calculateSharedSpeed } from "../domain/state.ts";
import type { GameState, HackResult, HackState, RunMetrics } from "../domain/types.ts";

const bar = (value: number, max = 100, width = 18) => {
  const filled = Math.round((Math.max(0, Math.min(max, value)) / max) * width);
  return `[${"#".repeat(filled)}${".".repeat(width - filled)}] ${Math.round(value)}/${max}`;
};

export function clearScreen(): void {
  process.stdout.write("\x1Bc");
}

export function renderHome(game: GameState): string {
  const diceLines = game.dice
    .map((die, index) => {
      const damage = game.player.dieDamage[die.id] ?? 0;
      return `  Slot ${index + 1}: ${die.name} (${die.materialFamily}, max speed ${die.maxSpeed}, field ${die.fieldGeneration}, heat ${die.heatBuildup}, damage ${damage})`;
    })
    .join("\n");

  return [
    "HOME / Rig Bench",
    "================",
    `Day ${game.player.day} | Money $${game.player.money} | Extracted $${game.player.totalExtracted} | Catches ${game.player.catchCount}/3`,
    `Casino heat ${bar(game.player.casinoHeat, CASINO_HEAT_MAX)} | Police heat ${bar(game.player.policeHeat, POLICE_HEAT_MAX)}`,
    "",
    `${game.rig.name}: slots ${game.rig.activeSlots}, top speed ${game.rig.topSpeed}, shared speed limit ${calculateSharedSpeed(game)}`,
    `Guidance ${game.rig.guidanceStrength} | Cooling ${game.rig.coolingCapacity} | Stability ${game.rig.stabilityControl} | Signature masking ${game.rig.signatureMasking}`,
    `Manipulators: ${game.rig.manipulators.join(", ")}`,
    "",
    diceLines,
    "",
    `Target: ${game.target.name} | payout ${game.target.payoutScale} | volatility ${game.target.volatility} | tolerance ${game.target.tolerance}`,
    "",
    "Build read:",
    ...buildWarnings(game).map((warning) => `  - ${warning}`)
  ].join("\n");
}

export function renderHack(game: GameState, hack: HackState): string {
  return [
    "HACK / Pressure Console",
    "=======================",
    `Day ${game.player.day} | ${game.target.name} | Money $${game.player.money} | Casino heat ${Math.round(game.player.casinoHeat)} | Police heat ${Math.round(game.player.policeHeat)}`,
    `Tick ${hack.tick} | Status ${hack.status} | Extractable profit $${Math.floor(hack.profit)}`,
    "",
    `Red zone     ${bar(hack.redZone)}`,
    `Heat         ${bar(hack.heat)}`,
    `Instability  ${bar(hack.instability)}`,
    `Body pressure${bar(hack.bodyPressure)}`,
    `Signature    ${bar(hack.signature)}`,
    `Suspicion    ${bar(hack.suspicion)}`,
    "",
    "Rig dice:",
    ...game.dice.map((die, index) => `  ${index + 1}. ${die.name} | speed ${hack.dieSpeeds[index].toFixed(1)}/${Math.min(game.rig.topSpeed, die.maxSpeed)} | field ${die.fieldGeneration}`),
    "",
    `Last deltas: ${hack.lastDeltas.length > 0 ? hack.lastDeltas.join(" | ") : "none yet"}`,
    "",
    "Recent events:",
    ...hack.eventLog.map((event) => `  - ${event}`),
    "",
    "Actions: [p]ush yield, [s]tabilize, [b]reathe, [a1] accelerate slot 1, [a2] accelerate slot 2, [c]ash out"
  ].join("\n");
}

export function renderResult(result: HackResult): string {
  return [
    "HACK RESULT",
    "===========",
    `Outcome: ${result.status}`,
    `Profit carried home: $${result.profit}`,
    `Casino heat gain: +${result.casinoHeatGain}`,
    `Police heat gain: +${result.policeHeatGain}`,
    `Rig damage gain: +${result.rigDamageGain}`,
    `Die damage: ${Object.keys(result.dieDamageGain).length > 0 ? JSON.stringify(result.dieDamageGain) : "none"}`,
    result.collapseReason ? `Collapse reason: ${result.collapseReason}` : "Cash-out completed before collapse."
  ].join("\n");
}

export function renderMetrics(metrics: RunMetrics): string {
  return [
    `${metrics.strategy.toUpperCase()} strategy over ${metrics.runs} runs (seed ${metrics.seed})`,
    `  Total profit: $${Math.round(metrics.totalProfit)}`,
    `  Average profit: $${metrics.averageProfit.toFixed(2)}`,
    `  Profit variance: ${metrics.profitVariance.toFixed(2)}`,
    `  Collapse rate: ${(metrics.collapseRate * 100).toFixed(1)}%`,
    `  Cash-out rate: ${(metrics.cashOutRate * 100).toFixed(1)}%`,
    `  Average casino heat gain: ${metrics.averageCasinoHeatGain.toFixed(2)}`,
    `  Average police heat gain: ${metrics.averagePoliceHeatGain.toFixed(2)}`,
    `  Average rig damage: ${metrics.averageRigDamage.toFixed(2)}`
  ].join("\n");
}
