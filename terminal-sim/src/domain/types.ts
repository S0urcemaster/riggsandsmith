export type HeatSource = "casino" | "police";

export type HackAction =
  | "push-yield"
  | "stabilize-channel"
  | "regulate-body"
  | "accelerate-die"
  | "cash-out";

export interface GlobalResources {
  money: number;
  casinoHeat: number;
  policeHeat: number;
  totalExtracted: number;
}

export interface PlayerState {
  day: number;
  catchCount: number;
}

export interface Rig {
  id: string;
  name: string;
  activeSlots: number;
  topSpeed: number;
  guidanceStrength: number;
  energyEfficiency: number;
  coolingCapacity: number;
  heatTolerance: number;
  stabilityControl: number;
  signatureMasking: number;
  manipulators: Array<"accelerate" | "brake" | "cool">;
  permanent: boolean;
}

export interface Die {
  id: string;
  name: string;
  materialFamily: string;
  mass: number;
  inertia: number;
  maxSpeed: number;
  guidanceDemand: number;
  fieldGeneration: number;
  heatBuildup: number;
  damageTolerance: number;
  responseSpeed: number;
  permanent: boolean;
}

export interface TargetMachine {
  id: string;
  name: string;
  payoutRate: number;
  tolerance: number;
  suspicionSensitivity: number;
  pressureRate: number;
}

export interface RigState {
  activeRig: Rig;
  installedDice: Die[];
}

export interface GameState {
  player: PlayerState;
  resources: GlobalResources;
  rigState: RigState;
  inventory: {
    rigs: Rig[];
    dice: Die[];
  };
  availableTargets: TargetMachine[];
}

export interface HackState {
  tick: number;
  target: TargetMachine;
  rig: Rig;
  dice: Die[];
  sharedSpeed: number;
  profit: number;
  redZone: number;
  bodyPressure: number;
  instability: number;
  thermalStrain: number;
  signature: number;
  collapsed: boolean;
  cashedOut: boolean;
  log: string[];
}

export interface HackDelta {
  profit: number;
  redZone: number;
  bodyPressure: number;
  instability: number;
  thermalStrain: number;
  signature: number;
}

export interface HackResolution {
  kind: "cash-out" | "collapse";
  message: string;
  moneyDelta: number;
  casinoHeatDelta: number;
  policeHeatDelta: number;
  nextGameState: GameState;
}

