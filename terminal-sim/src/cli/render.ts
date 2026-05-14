import type { GameState, HackResolution, HackState } from "../domain/types.js";
import { getBuildPressurePreview } from "../domain/hack.js";

function bar(value: number, width = 20): string {
  const filled = Math.round((Math.max(0, Math.min(100, value)) / 100) * width);
  return `${"#".repeat(filled)}${"-".repeat(width - filled)} ${value.toFixed(1)}`;
}

export function renderHome(gameState: GameState): string {
  const target = gameState.availableTargets[0];
  const rig = gameState.rigState.activeRig;
  const diceNames = gameState.rigState.installedDice.map((die) => die.name).join(", ");
  const preview = getBuildPressurePreview(gameState).map((line) => `  - ${line}`).join("\n");

  return [
    "",
    "=== HOME ===",
    `Day: ${gameState.player.day}`,
    `Money: ${gameState.resources.money}`,
    `Casino Heat: ${gameState.resources.casinoHeat}/100`,
    `Police Heat: ${gameState.resources.policeHeat}/100`,
    `Catch Count: ${gameState.player.catchCount}/3`,
    "",
    `Active Rig: ${rig.name} (${rig.activeSlots} active slots, top speed ${rig.topSpeed})`,
    `Installed Dice: ${diceNames}`,
    `Target: ${target.name}`,
    "",
    "Build Readout:",
    preview,
    ""
  ].join("\n");
}

export function renderHack(state: HackState): string {
  return [
    "",
    `=== HACK: ${state.target.name} ===`,
    `Tick: ${state.tick}`,
    `Shared Rig Speed: ${state.sharedSpeed}`,
    `Extractable Gain: ${state.profit.toFixed(1)}`,
    `Red Zone:      ${bar(state.redZone)}`,
    `Body Pressure: ${bar(state.bodyPressure)}`,
    `Instability:   ${bar(state.instability)}`,
    `Thermal Strain:${bar(state.thermalStrain)}`,
    `Signature:     ${bar(state.signature)}`,
    "",
    `Last: ${state.log[state.log.length - 1]}`,
    "",
    "Actions:",
    "  1. Push Yield",
    "  2. Stabilize Channel",
    "  3. Regulate Body Pressure",
    "  4. Accelerate Die",
    "  5. Cash Out"
  ].join("\n");
}

export function renderResolution(resolution: HackResolution): string {
  const gameState = resolution.nextGameState;
  const caught = gameState.player.catchCount > 0 && (gameState.resources.casinoHeat === 65 || gameState.resources.policeHeat === 65);

  return [
    "",
    "=== RESULT ===",
    resolution.message,
    `Money Change: +${resolution.moneyDelta}`,
    `Casino Heat Change: +${resolution.casinoHeatDelta}`,
    `Police Heat Change: +${resolution.policeHeatDelta}`,
    caught ? "Catch triggered. Heat has been resolved below maximum before the run continues." : "",
    "",
    "Next Home State:",
    `Day: ${gameState.player.day}`,
    `Money: ${gameState.resources.money}`,
    `Total Extracted: ${gameState.resources.totalExtracted}`,
    `Casino Heat: ${gameState.resources.casinoHeat}/100`,
    `Police Heat: ${gameState.resources.policeHeat}/100`,
    `Catch Count: ${gameState.player.catchCount}/3`,
    `Fallback Rig Available: ${gameState.inventory.rigs.some((rig) => rig.id === "losers-rig") ? "yes" : "no"}`,
    `Fallback Die Available: ${gameState.inventory.dice.some((die) => die.id === "losers-die") ? "yes" : "no"}`,
    ""
  ]
    .filter(Boolean)
    .join("\n");
}

