export type HackAction =
  | "pushYield"
  | "stabilizeChannel"
  | "regulateBody"
  | "accelerateSlot1"
  | "accelerateSlot2"
  | "brakeSlot1"
  | "brakeSlot2"
  | "coolSlot1"
  | "coolSlot2"
  | "cashOut";

export type HackStatus = "running" | "cashedOut" | "collapsed";

export type CatchSource = "casino" | "police";

export type MaterialFamily =
  | "stable-control"
  | "light-fast"
  | "dense-field"
  | "dirty-high-output";

export type Manipulator = "accelerate" | "brake" | "cool";

export type DieDefinition = {
  id: string;
  name: string;
  materialFamily: MaterialFamily;
  mass: number;
  inertia: number;
  maxSpeed: number;
  fieldGeneration: number;
  heatBuildup: number;
  damageTolerance: number;
  responseSpeed: number;
  quality: number;
  signature: number;
};

export type RigDefinition = {
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
  manipulators: Manipulator[];
};

export type TargetDefinition = {
  id: string;
  name: string;
  tolerance: number;
  payoutScale: number;
  volatility: number;
  suspicionSensitivity: number;
  redZoneTightness: number;
  minimumYield: number;
};

export type PlayerState = {
  day: number;
  money: number;
  totalExtracted: number;
  casinoHeat: number;
  policeHeat: number;
  catchCount: number;
  rigDamage: number;
  dieDamage: Record<string, number>;
  onboardingComplete: boolean;
};

export type GameState = {
  player: PlayerState;
  rig: RigDefinition;
  dice: DieDefinition[];
  target: TargetDefinition;
  purchasedItems: string[];
};

export type ShopItemType = "die" | "dieManipulator" | "rigUpgrade";

export type ShopItem = {
  id: string;
  name: string;
  type: ShopItemType;
  priceFactor: number;
  knownPoliceRisk: number;
  description: string;
  dieId?: string;
  manipulator?: Manipulator;
  rigUpgrade?: Partial<
    Pick<
      RigDefinition,
      "guidanceStrength" | "coolingCapacity" | "energyEfficiency" | "stabilityControl" | "signatureMasking" | "topSpeed"
    >
  >;
};

export type HackState = {
  status: HackStatus;
  tick: number;
  profit: number;
  heat: number;
  instability: number;
  redZone: number;
  bodyPressure: number;
  signature: number;
  suspicion: number;
  sharedSpeed: number;
  dieSpeeds: number[];
  eventLog: string[];
  lastDeltas: string[];
};

export type HackResult = {
  status: Exclude<HackStatus, "running">;
  profit: number;
  casinoHeatGain: number;
  policeHeatGain: number;
  rigDamageGain: number;
  dieDamageGain: Record<string, number>;
  collapseReason?: string;
  events: string[];
};

export type ResolvedDay = {
  game: GameState;
  result: HackResult;
  catchSource?: CatchSource;
  runEnded: boolean;
};

export type StrategyName = "cautious" | "balanced" | "greedy" | "stabilizer";

export type RunMetrics = {
  runs: number;
  strategy: StrategyName;
  seed: number;
  totalProfit: number;
  averageProfit: number;
  collapseRate: number;
  cashOutRate: number;
  averageCasinoHeatGain: number;
  averagePoliceHeatGain: number;
  averageRigDamage: number;
  profitVariance: number;
};
