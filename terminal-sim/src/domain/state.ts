import { BASE_SHOP_PRICE, DICE, LOSERS_DIE_ID, LOSERS_RIG, SHOP_ITEMS, TARGETS } from "./content.ts";
import type { DieDefinition, GameState, HackState, ShopItem } from "./types.ts";

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));

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
      dieDamage: {},
      onboardingComplete: false
    },
    rig: LOSERS_RIG,
    dice: diceIds.map((id) => DICE[id] ?? DICE[LOSERS_DIE_ID]).slice(0, LOSERS_RIG.activeSlots),
    target: TARGETS[options.targetId ?? "corner-penny"],
    purchasedItems: []
  };
}

export function shopPrice(item: ShopItem): number {
  return Math.round(item.priceFactor * BASE_SHOP_PRICE);
}

export function availableShopItems(game: GameState): ShopItem[] {
  return Object.values(SHOP_ITEMS).filter((item) => {
    if (game.purchasedItems.includes(item.id)) return false;
    if (item.type === "dieManipulator" && item.manipulator && game.rig.manipulators.includes(item.manipulator)) {
      return false;
    }
    return true;
  });
}

export function buyShopItem(game: GameState, itemId: string): { game: GameState; message: string } {
  if (!game.player.onboardingComplete) return { game, message: "Shop is locked until the first successful payout." };
  const item = SHOP_ITEMS[itemId];
  if (!item) return { game, message: `No shop item named ${itemId}.` };
  if (game.purchasedItems.includes(item.id)) return { game, message: `${item.name} is already owned.` };

  const price = shopPrice(item);
  if (game.player.money < price) return { game, message: `${item.name} costs $${price}; not enough money.` };

  let next: GameState = {
    ...game,
    player: {
      ...game.player,
      money: game.player.money - price,
      policeHeat: clamp(game.player.policeHeat + item.knownPoliceRisk)
    },
    purchasedItems: [...game.purchasedItems, item.id]
  };

  if (item.type === "die" && item.dieId) {
    const die = DICE[item.dieId];
    if (!die) return { game, message: `${item.name} is not available.` };
    const dice = [...next.dice];
    const slot = dice.map((candidate) => candidate.id).lastIndexOf(LOSERS_DIE_ID);
    dice[slot >= 0 ? slot : Math.min(dice.length, next.rig.activeSlots - 1)] = die;
    next = { ...next, dice: dice.slice(0, next.rig.activeSlots) };
  }

  if (item.type === "dieManipulator" && item.manipulator) {
    next = {
      ...next,
      rig: {
        ...next.rig,
        manipulators: [...new Set([...next.rig.manipulators, item.manipulator])]
      }
    };
  }

  if (item.type === "rigUpgrade" && item.rigUpgrade) {
    next = {
      ...next,
      rig: {
        ...next.rig,
        guidanceStrength: next.rig.guidanceStrength + (item.rigUpgrade.guidanceStrength ?? 0),
        coolingCapacity: next.rig.coolingCapacity + (item.rigUpgrade.coolingCapacity ?? 0),
        energyEfficiency: next.rig.energyEfficiency + (item.rigUpgrade.energyEfficiency ?? 0),
        stabilityControl: next.rig.stabilityControl + (item.rigUpgrade.stabilityControl ?? 0),
        signatureMasking: next.rig.signatureMasking + (item.rigUpgrade.signatureMasking ?? 0),
        topSpeed: next.rig.topSpeed + (item.rigUpgrade.topSpeed ?? 0)
      }
    };
  }

  return { game: next, message: `Bought ${item.name} for $${price}. Police heat +${item.knownPoliceRisk}.` };
}

export function calculateSharedSpeed(game: GameState): number {
  const dieLimit = Math.min(...game.dice.map((die) => die.maxSpeed));
  const rigDamagePenalty = Math.floor(game.player.rigDamage / 35);
  return Math.max(1, Math.min(game.rig.topSpeed - rigDamagePenalty, dieLimit));
}

export function derivedGuidanceDemand(die: DieDefinition, speed = die.maxSpeed * 0.65, damage = 0): number {
  const speedRatio = Math.max(0.1, speed / die.maxSpeed);
  const materialLoad =
    die.materialFamily === "light-fast" ? 1.1 :
    die.materialFamily === "dense-field" ? 0.8 :
    die.materialFamily === "dirty-high-output" ? 1 :
    0.4;
  const qualityPenalty = (10 - die.quality) * 0.25;
  const speedLoad = speedRatio * (die.maxSpeed / 7);
  const bodyLoad = die.mass * 0.18 + die.inertia * 0.08 + materialLoad;
  const damageLoad = damage / 30;
  return Math.round((qualityPenalty + speedLoad + bodyLoad + damageLoad) * 10) / 10;
}

export function buildWarnings(game: GameState): string[] {
  const sharedSpeed = calculateSharedSpeed(game);
  const guidanceDemand = game.dice.reduce(
    (sum, die) => sum + derivedGuidanceDemand(die, sharedSpeed, game.player.dieDamage[die.id] ?? 0),
    0
  );
  const heatLoad = game.dice.reduce((sum, die) => sum + die.heatBuildup, 0);
  const signature = game.dice.reduce((sum, die) => sum + die.signature, 0);
  const warnings: string[] = [];

  if (guidanceDemand > game.rig.guidanceStrength * game.rig.activeSlots) {
    warnings.push("Derived guidance demand exceeds Loser's Rig comfort range.");
  }
  if (game.dice.some((die) => die.quality <= 3)) {
    warnings.push("Low-quality die may rattle, eject, or endanger other dice when pushed.");
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
