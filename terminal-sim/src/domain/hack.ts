import {
  CASINO_HEAT_MAX,
  CATCHES_TO_END_RUN,
  DICE,
  LOSERS_DIE_ID,
  POLICE_HEAT_MAX
} from "./content.ts";
import type { Rng } from "./rng.ts";
import type {
  CatchSource,
  GameState,
  HackAction,
  HackResult,
  HackState,
  ResolvedDay
} from "./types.ts";
import { derivedGuidanceDemand } from "./state.ts";

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));
const round = (value: number) => Math.round(value * 10) / 10;

export function applyHackAction(game: GameState, hack: HackState, action: HackAction, rng: Rng): HackState {
  if (hack.status !== "running") return hack;

  const next: HackState = {
    ...hack,
    tick: hack.tick + 1,
    dieSpeeds: [...hack.dieSpeeds],
    eventLog: [...hack.eventLog],
    lastDeltas: []
  };

  const before = snapshot(next);
  applyPassivePressure(game, next, rng);

  if (action === "pushYield") {
    const output = buildOutput(game, next);
    next.profit += output * game.target.payoutScale * (1 + next.redZone / 140);
    next.redZone += 7 + game.target.redZoneTightness * 2;
    next.heat += 3;
    next.instability += 3;
    next.signature += 2;
    next.bodyPressure += 3;
    next.eventLog.push("Yield pushed. The slot starts paying faster.");
  }

  if (action === "stabilizeChannel") {
    next.profit += game.target.minimumYield * 0.25;
    next.redZone -= 9 + game.rig.stabilityControl * 0.7;
    next.instability -= 8 + game.rig.stabilityControl;
    next.heat -= 2 + game.rig.coolingCapacity * 0.4;
    next.bodyPressure += 1;
    next.eventLog.push("Channel stabilized. Profit window narrows, control improves.");
  }

  if (action === "regulateBody") {
    next.bodyPressure -= 14;
    next.instability -= 3;
    next.redZone -= 2;
    next.profit += game.target.minimumYield * 0.1;
    next.eventLog.push("Breathing regulated. Hands steady for another window.");
  }

  if (action === "accelerateSlot1" || action === "accelerateSlot2") {
    const slot = action === "accelerateSlot1" ? 0 : 1;
    const die = game.dice[slot];
    if (die && game.rig.manipulators.includes("accelerate")) {
      const overdrive = die.quality <= 3 ? 0.4 : 0;
      next.dieSpeeds[slot] = clamp(next.dieSpeeds[slot] + 1.5, 1, Math.min(game.rig.topSpeed, die.maxSpeed + overdrive));
      next.profit += die.fieldGeneration * game.target.payoutScale * 1.2;
      next.heat += die.heatBuildup * 1.2;
      next.instability += Math.max(1, derivedGuidanceDemand(die, next.dieSpeeds[slot], game.player.dieDamage[die.id] ?? 0) - game.rig.guidanceStrength * 0.55);
      next.redZone += 5;
      next.signature += die.signature * 0.8;
      next.bodyPressure += 2;
      next.eventLog.push(`${die.name} accelerated in slot ${slot + 1}.`);
    }
  }

  if (action === "brakeSlot1" || action === "brakeSlot2") {
    const slot = action === "brakeSlot1" ? 0 : 1;
    const die = game.dice[slot];
    if (die && game.rig.manipulators.includes("brake")) {
      next.dieSpeeds[slot] = clamp(next.dieSpeeds[slot] - 1.3, 1, Math.min(game.rig.topSpeed, die.maxSpeed));
      next.heat -= 3 + die.heatBuildup * 0.4;
      next.instability -= 4 + game.rig.stabilityControl * 0.4;
      next.redZone -= 2;
      next.profit += game.target.minimumYield * 0.1;
      next.eventLog.push(`${die.name} braked in slot ${slot + 1}.`);
    }
  }

  if (action === "coolSlot1" || action === "coolSlot2") {
    const slot = action === "coolSlot1" ? 0 : 1;
    const die = game.dice[slot];
    if (die && game.rig.manipulators.includes("cool")) {
      next.heat -= 7 + game.rig.coolingCapacity * 0.6;
      next.signature += 1.5;
      next.bodyPressure += 1;
      next.profit += game.target.minimumYield * 0.05;
      next.eventLog.push(`${die.name} cooled in slot ${slot + 1}; the cooling pulse leaves a trace.`);
    }
  }

  if (action === "cashOut") {
    next.status = "cashedOut";
    next.eventLog.push("Cash-out triggered. Rig is pulled before the floor notices.");
  }

  constrainOperationalState(next);
  maybeMistake(game, next, rng);

  if (next.status === "running" && collapseChance(game, next) > rng.next()) {
    next.status = "collapsed";
    next.eventLog.push(collapseReason(next));
  }

  next.lastDeltas = deltas(before, next);
  next.eventLog = next.eventLog.slice(-6);
  return next;
}

export function resolveHack(game: GameState, hack: HackState): HackResult {
  const collapsed = hack.status === "collapsed";
  const pressure = hack.heat + hack.instability + hack.redZone + hack.bodyPressure * 0.5;
  const profit = Math.max(0, Math.floor(collapsed ? hack.profit * 0.35 : hack.profit));
  const casinoHeatGain = Math.ceil((hack.signature * 0.8 + hack.suspicion + pressure * 0.08) * (collapsed ? 1.8 : 0.75));
  const policeHeatGain = collapsed ? 2 : hack.tick >= 10 ? 1 : 0;
  const rigDamageGain = Math.ceil(Math.max(0, pressure - game.rig.heatTolerance * 8) / (collapsed ? 5 : 10));
  const dieDamageGain: Record<string, number> = {};

  game.dice.forEach((die, index) => {
    const slotHeat = hack.heat + hack.dieSpeeds[index] * die.heatBuildup;
    const damage = Math.ceil(Math.max(0, slotHeat - die.damageTolerance * 9) / (collapsed ? 4 : 9));
    if (damage > 0 && die.id !== LOSERS_DIE_ID) {
      dieDamageGain[die.id] = (dieDamageGain[die.id] ?? 0) + damage;
    }
  });

  return {
    status: collapsed ? "collapsed" : "cashedOut",
    profit,
    casinoHeatGain,
    policeHeatGain,
    rigDamageGain,
    dieDamageGain,
    collapseReason: collapsed ? collapseReason(hack) : undefined,
    events: hack.eventLog
  };
}

export function carryResultToNextHome(game: GameState, result: HackResult): ResolvedDay {
  const next: GameState = {
    ...game,
    player: {
      ...game.player,
      day: game.player.day + 1,
      money: game.player.money + result.profit,
      totalExtracted: game.player.totalExtracted + result.profit,
      casinoHeat: clamp(game.player.casinoHeat + result.casinoHeatGain),
      policeHeat: clamp(game.player.policeHeat + result.policeHeatGain),
      rigDamage: clamp(game.player.rigDamage + result.rigDamageGain),
      dieDamage: { ...game.player.dieDamage }
    },
    dice: game.dice.length > 0 ? [...game.dice] : [DICE[LOSERS_DIE_ID], DICE[LOSERS_DIE_ID]]
  };

  for (const [dieId, damage] of Object.entries(result.dieDamageGain)) {
    next.player.dieDamage[dieId] = clamp((next.player.dieDamage[dieId] ?? 0) + damage);
  }

  let catchSource: CatchSource | undefined;
  if (next.player.casinoHeat >= CASINO_HEAT_MAX) catchSource = "casino";
  if (next.player.policeHeat >= POLICE_HEAT_MAX) catchSource = "police";

  if (catchSource) {
    next.player.catchCount += 1;
    if (catchSource === "casino") next.player.casinoHeat = 62;
    if (catchSource === "police") next.player.policeHeat = 58;
    next.player.money = Math.max(0, next.player.money - 30);
    next.player.rigDamage = clamp(next.player.rigDamage + 8);
  }

  const runEnded = next.player.catchCount >= CATCHES_TO_END_RUN;
  return { game: next, result, catchSource, runEnded };
}

function applyPassivePressure(game: GameState, hack: HackState, rng: Rng): void {
  const totalGuidanceDemand = game.dice.reduce(
    (sum, die, index) => sum + derivedGuidanceDemand(die, hack.dieSpeeds[index], game.player.dieDamage[die.id] ?? 0),
    0
  );
  const totalHeat = game.dice.reduce((sum, die, index) => sum + die.heatBuildup * (hack.dieSpeeds[index] / die.maxSpeed), 0);
  const totalSignature = game.dice.reduce((sum, die, index) => sum + die.signature * (hack.dieSpeeds[index] / die.maxSpeed), 0);
  const guidanceGap = Math.max(0, totalGuidanceDemand - game.rig.guidanceStrength * game.rig.activeSlots);
  const coolingRelief = game.rig.coolingCapacity * 0.55;
  const jitter = rng.next() * game.target.volatility;

  hack.profit += Math.max(game.target.minimumYield * 0.15, buildOutput(game, hack) * 0.45);
  hack.heat += Math.max(0.6, totalHeat - coolingRelief) + jitter * 0.2;
  hack.instability += Math.max(0.4, guidanceGap * 0.5 + game.target.volatility * 0.35 - game.rig.stabilityControl * 0.18);
  hack.instability += lowQualityRattle(game, hack, rng);
  hack.redZone += (hack.profit / 140) * game.target.redZoneTightness + game.target.volatility * 0.2;
  hack.signature += Math.max(0.2, totalSignature - game.rig.signatureMasking) * 0.4;
  hack.suspicion += (hack.signature * game.target.suspicionSensitivity) / 20 + hack.redZone / 90;
  hack.bodyPressure += 1.4 + game.target.volatility * 0.25 + hack.redZone / 130;
}

function lowQualityRattle(game: GameState, hack: HackState, rng: Rng): number {
  return game.dice.reduce((sum, die, index) => {
    if (die.quality > 3) return sum;
    const speedRatio = hack.dieSpeeds[index] / die.maxSpeed;
    if (speedRatio < 0.72) return sum;
    if (rng.chance((0.08 + speedRatio * 0.1) * ((4 - die.quality) / 2))) {
      hack.heat += 1.5;
      hack.eventLog.push(`${die.name} rattles under speed.`);
      return sum + 2.5;
    }
    return sum;
  }, 0);
}

function buildOutput(game: GameState, hack: HackState): number {
  return game.dice.reduce((sum, die, index) => {
    const speedRatio = hack.dieSpeeds[index] / die.maxSpeed;
    const damagePenalty = 1 - (game.player.dieDamage[die.id] ?? 0) / 140;
    return sum + die.fieldGeneration * speedRatio * damagePenalty;
  }, 0);
}

function maybeMistake(game: GameState, hack: HackState, rng: Rng): void {
  const probability = clamp((hack.bodyPressure - 45) / 160 + (hack.instability - 55) / 220, 0, 0.35);
  if (!rng.chance(probability)) return;

  hack.redZone += 5 + game.target.volatility;
  hack.signature += 3;
  hack.eventLog.push("A control mistake spikes the rig telemetry.");
}

function collapseChance(game: GameState, hack: HackState): number {
  const pressure =
    Math.max(0, hack.redZone - 72) * 0.012 +
    Math.max(0, hack.heat - 76) * 0.01 +
    Math.max(0, hack.instability - 70) * 0.011 +
    Math.max(0, hack.bodyPressure - 82) * 0.009 +
    Math.max(0, hack.suspicion - game.target.tolerance * 8) * 0.007;

  return clamp(pressure, 0, 0.82);
}

function collapseReason(hack: HackState): string {
  const entries = [
    ["red zone", hack.redZone],
    ["heat", hack.heat],
    ["instability", hack.instability],
    ["body pressure", hack.bodyPressure],
    ["suspicion", hack.suspicion]
  ] as const;
  const [label] = entries.sort((a, b) => b[1] - a[1])[0];
  return `Collapse: ${label} breaks control.`;
}

function constrainOperationalState(hack: HackState): void {
  hack.profit = round(Math.max(0, hack.profit));
  hack.heat = round(clamp(hack.heat));
  hack.instability = round(clamp(hack.instability));
  hack.redZone = round(clamp(hack.redZone));
  hack.bodyPressure = round(clamp(hack.bodyPressure));
  hack.signature = round(clamp(hack.signature));
  hack.suspicion = round(clamp(hack.suspicion));
}

function snapshot(hack: HackState): Record<string, number> {
  return {
    profit: hack.profit,
    heat: hack.heat,
    instability: hack.instability,
    redZone: hack.redZone,
    bodyPressure: hack.bodyPressure,
    signature: hack.signature,
    suspicion: hack.suspicion
  };
}

function deltas(before: Record<string, number>, after: HackState): string[] {
  const labels: [keyof typeof before, string][] = [
    ["profit", "profit"],
    ["heat", "heat"],
    ["instability", "instability"],
    ["redZone", "red zone"],
    ["bodyPressure", "body"],
    ["signature", "signature"],
    ["suspicion", "suspicion"]
  ];

  return labels
    .map(([key, label]) => {
      const delta = round(after[key] - before[key]);
      if (Math.abs(delta) < 0.1) return "";
      return `${label} ${delta > 0 ? "+" : ""}${delta}`;
    })
    .filter(Boolean);
}
