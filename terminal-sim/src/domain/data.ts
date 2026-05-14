import type { Die, GameState, Rig, TargetMachine } from "./types.js";

export const HEAT_MAX = 100;

export const losersRig: Rig = {
  id: "losers-rig",
  name: "Loser's Rig",
  activeSlots: 2,
  topSpeed: 60,
  guidanceStrength: 32,
  energyEfficiency: 36,
  coolingCapacity: 30,
  heatTolerance: 58,
  stabilityControl: 34,
  signatureMasking: 24,
  manipulators: ["accelerate"],
  permanent: true
};

export const losersDie: Die = {
  id: "losers-die",
  name: "Loser's Die",
  materialFamily: "Stable Control Material",
  mass: 34,
  inertia: 42,
  maxSpeed: 54,
  guidanceDemand: 24,
  fieldGeneration: 28,
  heatBuildup: 18,
  damageTolerance: 56,
  responseSpeed: 40,
  permanent: true
};

export const cornerPennySlot: TargetMachine = {
  id: "corner-penny-slot",
  name: "Corner Penny Slot",
  payoutRate: 1.1,
  tolerance: 44,
  suspicionSensitivity: 0.65,
  pressureRate: 1
};

export function createInitialGameState(): GameState {
  return {
    player: {
      day: 1,
      catchCount: 0
    },
    resources: {
      money: 40,
      casinoHeat: 0,
      policeHeat: 0,
      totalExtracted: 0
    },
    rigState: {
      activeRig: losersRig,
      installedDice: [losersDie, losersDie]
    },
    inventory: {
      rigs: [losersRig],
      dice: [losersDie]
    },
    availableTargets: [cornerPennySlot]
  };
}

