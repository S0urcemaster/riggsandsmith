import { DICE, LOSERS_DIE_ID, LOSERS_RIG, TARGETS } from "./content.ts";
import type { GameState, HackState } from "./types.ts";

export function createInitialGameState(options: {
  diceIds?: string[];
  targetId?: string;
} = {}): GameState {
  const diceIds = options.diceIds ?? [LOSERS_DIE_ID, LOSERS_DIE_ID];

  return {
    player: {
      day: 1,
      money: 20,
      totalExtracted: 0,
      casinoHeat: 0,
      policeHeat: 0,
      catchCount: 0,
      rigDamage: 0,
      dieDamage: {}
    },
    rig: LOSERS_RIG,
    dice: diceIds.map((id) => DICE[id] ?? DICE[LOSERS_DIE_ID]).slice(0, LOSERS_RIG.activeSlots),
    target: TARGETS[options.targetId ?? "corner-penny"]
  };
}

export function calculateSharedSpeed(game: GameState): number {
  const dieLimit = Math.min(...game.dice.map((die) => die.maxSpeed));
  const rigDamagePenalty = Math.floor(game.player.rigDamage / 35);
  return Math.max(1, Math.min(game.rig.topSpeed - rigDamagePenalty, dieLimit));
}

export function buildWarnings(game: GameState): string[] {
  const guidanceDemand = game.dice.reduce((sum, die) => sum + die.guidanceDemand, 0);
  const heatLoad = game.dice.reduce((sum, die) => sum + die.heatBuildup, 0);
  const signature = game.dice.reduce((sum, die) => sum + die.signature, 0);
  const warnings: string[] = [];

  if (guidanceDemand > game.rig.guidanceStrength * game.rig.activeSlots) {
    warnings.push("Guidance demand exceeds Loser's Rig comfort range.");
  }
  if (heatLoad > game.rig.coolingCapacity * game.rig.activeSlots) {
    warnings.push("Heat load is high for the installed cooling capacity.");
  }
  if (signature > game.rig.signatureMasking * game.rig.activeSlots + 3) {
    warnings.push("Field signature is easy for the casino to notice.");
  }
  if (warnings.length === 0) {
    warnings.push("Build fit is readable and suitable for a simple target.");
  }

  return warnings;
}

export function createHackState(game: GameState): HackState {
  const sharedSpeed = calculateSharedSpeed(game);
  return {
    status: "running",
    tick: 0,
    profit: 0,
    heat: Math.max(0, Math.floor(game.player.rigDamage / 20)),
    instability: 0,
    redZone: 0,
    bodyPressure: 8 + game.target.volatility,
    signature: Math.max(0, game.player.casinoHeat / 10),
    suspicion: game.player.casinoHeat / 12,
    sharedSpeed,
    dieSpeeds: game.dice.map(() => Math.max(1, sharedSpeed - 2)),
    eventLog: ["Rig attached. Target handshake is live."],
    lastDeltas: []
  };
}
