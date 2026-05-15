import type { DieDefinition, RigDefinition, ShopItem, TargetDefinition } from "./types.ts";

export const BASE_SHOP_PRICE = 100;

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
    fieldGeneration: 3,
    heatBuildup: 2,
    damageTolerance: 7,
    responseSpeed: 4,
    quality: 5,
    signature: 2
  },
  "needle-glass": {
    id: "needle-glass",
    name: "Needle Glass",
    materialFamily: "light-fast",
    mass: 1,
    inertia: 2,
    maxSpeed: 9,
    fieldGeneration: 3,
    heatBuildup: 3,
    damageTolerance: 4,
    responseSpeed: 8,
    quality: 3,
    signature: 3
  },
  "lead-heart": {
    id: "lead-heart",
    name: "Lead Heart Die",
    materialFamily: "dense-field",
    mass: 7,
    inertia: 7,
    maxSpeed: 5,
    fieldGeneration: 7,
    heatBuildup: 6,
    damageTolerance: 8,
    responseSpeed: 2,
    quality: 6,
    signature: 5
  },
  "black-six": {
    id: "black-six",
    name: "Black Six",
    materialFamily: "dirty-high-output",
    mass: 4,
    inertia: 3,
    maxSpeed: 7,
    fieldGeneration: 8,
    heatBuildup: 7,
    damageTolerance: 4,
    responseSpeed: 5,
    quality: 3,
    signature: 8
  }
};

export const SHOP_ITEMS: Record<string, ShopItem> = {
  "needle-glass": {
    id: "needle-glass",
    name: "Needle Glass",
    type: "die",
    dieId: "needle-glass",
    priceFactor: 1,
    knownPoliceRisk: 1,
    description: "Fast, cheap, fragile second-slot die. Teaches quality risk."
  },
  brake: {
    id: "brake",
    name: "Brake Manipulator",
    type: "dieManipulator",
    manipulator: "brake",
    priceFactor: 1,
    knownPoliceRisk: 1,
    description: "Slows a selected die to cut heat and instability at output cost."
  },
  cool: {
    id: "cool",
    name: "Cool Manipulator",
    type: "dieManipulator",
    manipulator: "cool",
    priceFactor: 1.5,
    knownPoliceRisk: 2,
    description: "Direct slot cooling with a higher opening price."
  },
  "guidance-kit": {
    id: "guidance-kit",
    name: "Loser's Rig Guidance Kit",
    type: "rigUpgrade",
    priceFactor: 1,
    knownPoliceRisk: 1,
    rigUpgrade: { guidanceStrength: 1, stabilityControl: 1 },
    description: "Makes the starting rig hold rough dice more reliably."
  },
  "black-six": {
    id: "black-six",
    name: "Black Six",
    type: "die",
    dieId: "black-six",
    priceFactor: 2.5,
    knownPoliceRisk: 4,
    description: "Dirty high-output die. Strong, loud, and expensive early."
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
