import type { DieDefinition, RigDefinition, TargetDefinition } from "./types.ts";

export const LOSERS_RIG: RigDefinition = {
  id: "losers-rig",
  name: "Loser's Rig",
  activeSlots: 2,
  topSpeed: 6,
  guidanceStrength: 4,
  energyEfficiency: 3,
  coolingCapacity: 3,
  heatTolerance: 8,
  stabilityControl: 4,
  signatureMasking: 2,
  manipulators: ["accelerate"]
};

export const DICE: Record<string, DieDefinition> = {
  "losers-die": {
    id: "losers-die",
    name: "Loser's Die",
    materialFamily: "stable-control",
    mass: 3,
    inertia: 4,
    maxSpeed: 6,
    guidanceDemand: 3,
    fieldGeneration: 3,
    heatBuildup: 2,
    damageTolerance: 7,
    responseSpeed: 4,
    signature: 2
  },
  "needle-glass": {
    id: "needle-glass",
    name: "Needle Glass Die",
    materialFamily: "light-fast",
    mass: 1,
    inertia: 2,
    maxSpeed: 9,
    guidanceDemand: 6,
    fieldGeneration: 3,
    heatBuildup: 3,
    damageTolerance: 4,
    responseSpeed: 8,
    signature: 3
  },
  "lead-heart": {
    id: "lead-heart",
    name: "Lead Heart Die",
    materialFamily: "dense-field",
    mass: 7,
    inertia: 7,
    maxSpeed: 5,
    guidanceDemand: 5,
    fieldGeneration: 7,
    heatBuildup: 6,
    damageTolerance: 8,
    responseSpeed: 2,
    signature: 5
  },
  "black-market-six": {
    id: "black-market-six",
    name: "Black-Market Six",
    materialFamily: "dirty-high-output",
    mass: 4,
    inertia: 3,
    maxSpeed: 7,
    guidanceDemand: 5,
    fieldGeneration: 8,
    heatBuildup: 7,
    damageTolerance: 4,
    responseSpeed: 5,
    signature: 8
  }
};

export const TARGETS: Record<string, TargetDefinition> = {
  "corner-penny": {
    id: "corner-penny",
    name: "Corner Penny Slot",
    tolerance: 8,
    payoutScale: 2.8,
    volatility: 2,
    suspicionSensitivity: 1.0,
    redZoneTightness: 1.0,
    minimumYield: 8
  },
  "sleepy-quarter": {
    id: "sleepy-quarter",
    name: "Sleepy Quarter Slot",
    tolerance: 7,
    payoutScale: 4.2,
    volatility: 3,
    suspicionSensitivity: 1.15,
    redZoneTightness: 1.2,
    minimumYield: 12
  },
  "host-watch": {
    id: "host-watch",
    name: "Host-Watched Dollar Slot",
    tolerance: 6,
    payoutScale: 7.0,
    volatility: 5,
    suspicionSensitivity: 1.6,
    redZoneTightness: 1.45,
    minimumYield: 20
  }
};

export const CASINO_HEAT_MAX = 100;
export const POLICE_HEAT_MAX = 100;
export const CATCHES_TO_END_RUN = 3;
export const LOSERS_DIE_ID = "losers-die";
