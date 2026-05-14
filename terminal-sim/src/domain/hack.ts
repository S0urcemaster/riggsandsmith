import { HEAT_MAX } from "./data.js";
import type {
  GameState,
  HackAction,
  HackDelta,
  HackResolution,
  HackState,
  TargetMachine
} from "./types.js";

function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, value));
}

function round(value: number): number {
  return Math.round(value * 10) / 10;
}

function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function getSharedRigSpeed(gameState: GameState): number {
  const dieMaxSpeed = Math.min(...gameState.rigState.installedDice.map((die) => die.maxSpeed));
  return Math.min(gameState.rigState.activeRig.topSpeed, dieMaxSpeed);
}

export function createHackState(gameState: GameState, target: TargetMachine): HackState {
  return {
    tick: 0,
    target,
    rig: gameState.rigState.activeRig,
    dice: gameState.rigState.installedDice,
    sharedSpeed: getSharedRigSpeed(gameState),
    profit: 0,
    redZone: 10,
    bodyPressure: 15,
    instability: 8,
    thermalStrain: 8,
    signature: 4,
    collapsed: false,
    cashedOut: false,
    log: [`Hack started against ${target.name}.`]
  };
}

export function getBuildPressurePreview(gameState: GameState): string[] {
  const rig = gameState.rigState.activeRig;
  const dice = gameState.rigState.installedDice;
  const totalGuidanceDemand = sum(dice.map((die) => die.guidanceDemand));
  const totalHeat = sum(dice.map((die) => die.heatBuildup));
  const totalField = sum(dice.map((die) => die.fieldGeneration));
  const messages: string[] = [];

  messages.push(`Shared rig speed: ${getSharedRigSpeed(gameState)} rpm-equivalent.`);
  messages.push(`Field pressure: ${totalField} against ${rig.name}'s modest support profile.`);

  if (totalGuidanceDemand > rig.guidanceStrength) {
    messages.push("Warning: installed dice ask for more guidance than the rig cleanly provides.");
  } else {
    messages.push("Guidance fit: stable enough for a low-yield target.");
  }

  if (totalHeat > rig.coolingCapacity) {
    messages.push("Warning: heat pressure can outrun passive cooling if you keep pushing.");
  } else {
    messages.push("Cooling fit: passive cooling can handle a cautious run.");
  }

  return messages;
}

function calculateBaseDrift(state: HackState): HackDelta {
  const fieldGeneration = sum(state.dice.map((die) => die.fieldGeneration));
  const heatBuildup = sum(state.dice.map((die) => die.heatBuildup));
  const guidanceDemand = sum(state.dice.map((die) => die.guidanceDemand));
  const guidanceGap = Math.max(0, guidanceDemand - state.rig.guidanceStrength);
  const speedRatio = state.sharedSpeed / Math.max(1, state.rig.topSpeed);

  return {
    profit: round((fieldGeneration / 30) * state.target.payoutRate * speedRatio),
    redZone: round(2.4 * state.target.pressureRate + state.instability / 32),
    bodyPressure: round(1.7 + state.redZone / 45),
    instability: round(1.2 + guidanceGap / 18 - state.rig.stabilityControl / 110),
    thermalStrain: round(1.4 + heatBuildup / 38 - state.rig.coolingCapacity / 120),
    signature: round(0.8 + fieldGeneration / 90 - state.rig.signatureMasking / 140)
  };
}

function applyDelta(state: HackState, delta: HackDelta, logLine: string): HackState {
  const next: HackState = {
    ...state,
    tick: state.tick + 1,
    profit: round(Math.max(0, state.profit + delta.profit)),
    redZone: round(clamp(state.redZone + delta.redZone)),
    bodyPressure: round(clamp(state.bodyPressure + delta.bodyPressure)),
    instability: round(clamp(state.instability + delta.instability)),
    thermalStrain: round(clamp(state.thermalStrain + delta.thermalStrain)),
    signature: round(clamp(state.signature + delta.signature)),
    log: [...state.log, logLine]
  };

  const collapsePressure =
    next.redZone * 0.45 +
    next.instability * 0.25 +
    next.thermalStrain * 0.2 +
    next.bodyPressure * 0.1;

  if (collapsePressure >= 80 || next.redZone >= 100 || next.thermalStrain >= 100) {
    return {
      ...next,
      collapsed: true,
      log: [...next.log, "The operation crosses the red zone and collapses."]
    };
  }

  return next;
}

export function applyHackAction(state: HackState, action: Exclude<HackAction, "cash-out">): HackState {
  const base = calculateBaseDrift(state);

  if (action === "push-yield") {
    return applyDelta(
      state,
      {
        profit: round(base.profit + 5.5),
        redZone: round(base.redZone + 5.2),
        bodyPressure: round(base.bodyPressure + 2.6),
        instability: round(base.instability + 3.2),
        thermalStrain: round(base.thermalStrain + 3.4),
        signature: round(base.signature + 2.8)
      },
      "You push yield. Profit rises, and every pressure gauge answers."
    );
  }

  if (action === "stabilize-channel") {
    return applyDelta(
      state,
      {
        profit: round(base.profit * 0.35),
        redZone: round(base.redZone - 4.6),
        bodyPressure: round(base.bodyPressure + 0.5),
        instability: round(base.instability - 7.2),
        thermalStrain: round(base.thermalStrain + 0.2),
        signature: round(base.signature + 0.1)
      },
      "You stabilize the channel. The run calms down, but the payout window narrows."
    );
  }

  if (action === "regulate-body") {
    return applyDelta(
      state,
      {
        profit: round(base.profit * 0.2),
        redZone: round(base.redZone - 1.8),
        bodyPressure: round(base.bodyPressure - 10.5),
        instability: round(base.instability - 1.2),
        thermalStrain: round(base.thermalStrain + 0.4),
        signature: round(base.signature)
      },
      "You regulate your breathing. Your body pressure drops while the machine keeps ticking."
    );
  }

  return applyDelta(
    state,
    {
      profit: round(base.profit + 3),
      redZone: round(base.redZone + 3.2),
      bodyPressure: round(base.bodyPressure + 1.4),
      instability: round(base.instability + 2.4),
      thermalStrain: round(base.thermalStrain + 4.8),
      signature: round(base.signature + 1.9)
    },
    "Loser's Rig accelerates the selected die. Output jumps and heat climbs."
  );
}

export function cashOut(state: HackState, gameState: GameState): HackResolution {
  const moneyDelta = Math.max(0, Math.floor(state.profit));
  const casinoHeatDelta = Math.max(1, Math.floor(state.signature * state.target.suspicionSensitivity * 0.12));
  const nextGameState = resolveCatchIfNeeded({
    ...gameState,
    player: {
      ...gameState.player,
      day: gameState.player.day + 1
    },
    resources: {
      ...gameState.resources,
      money: gameState.resources.money + moneyDelta,
      totalExtracted: gameState.resources.totalExtracted + moneyDelta,
      casinoHeat: clamp(gameState.resources.casinoHeat + casinoHeatDelta, 0, HEAT_MAX)
    }
  });

  return {
    kind: "cash-out",
    message: "You cash out and get clear before the field breaks.",
    moneyDelta,
    casinoHeatDelta,
    policeHeatDelta: 0,
    nextGameState
  };
}

export function resolveCollapse(state: HackState, gameState: GameState): HackResolution {
  const casinoHeatDelta = Math.max(10, Math.floor(12 + state.signature * 0.18 + state.redZone * 0.08));
  const nextGameState = resolveCatchIfNeeded({
    ...gameState,
    player: {
      ...gameState.player,
      day: gameState.player.day + 1
    },
    resources: {
      ...gameState.resources,
      casinoHeat: clamp(gameState.resources.casinoHeat + casinoHeatDelta, 0, HEAT_MAX)
    }
  });

  return {
    kind: "collapse",
    message: "The hack collapses. You leave with nothing but heat and a shaking rig.",
    moneyDelta: 0,
    casinoHeatDelta,
    policeHeatDelta: 0,
    nextGameState
  };
}

function resolveCatchIfNeeded(gameState: GameState): GameState {
  const caughtByCasino = gameState.resources.casinoHeat >= HEAT_MAX;
  const caughtByPolice = gameState.resources.policeHeat >= HEAT_MAX;

  if (!caughtByCasino && !caughtByPolice) {
    return gameState;
  }

  const nextCatchCount = gameState.player.catchCount + 1;

  return {
    ...gameState,
    player: {
      ...gameState.player,
      catchCount: nextCatchCount
    },
    resources: {
      ...gameState.resources,
      casinoHeat: caughtByCasino ? 65 : gameState.resources.casinoHeat,
      policeHeat: caughtByPolice ? 65 : gameState.resources.policeHeat
    }
  };
}

