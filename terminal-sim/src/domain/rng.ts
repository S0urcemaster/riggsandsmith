export type Rng = {
  seed: number;
  next: () => number;
  int: (min: number, max: number) => number;
  chance: (probability: number) => boolean;
  pick: <T>(items: T[]) => T;
};

export function createRng(seed: number): Rng {
  let state = seed >>> 0;

  const next = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };

  return {
    seed,
    next,
    int: (min, max) => Math.floor(next() * (max - min + 1)) + min,
    chance: (probability) => next() < probability,
    pick: (items) => items[Math.floor(next() * items.length)]
  };
}

export function randomSeed(): number {
  return Math.floor(Math.random() * 0xffffffff);
}
