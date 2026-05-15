export type TierFit = "same-tier" | "under-tiered" | "blocked";

export type ProbeParams = {
  machineTier: number;
  rigTier: number;
  frequencyHz: number;
  bankBias: number;
  rigBias: number;
  rigSupport: number;
  noise: number;
  decisionLatencyMs: number;
  fieldEnergy: number;
};

export type WaveSample = {
  timeMs: number;
  rawWave: number;
  effectiveWave: number;
  favorable: boolean;
  favorableMargin: number;
};

export type LeverPullResult = {
  id: number;
  pressedAtMs: number;
  effectiveAtMs: number;
  visibleWaveAtPress: number;
  effectiveWaveAtResolution: number;
  favorable: boolean;
  moneyDelta: number;
  riskDelta: number;
  tierFit: TierFit;
};

export type ProbeState = {
  money: number;
  risk: number;
  pulls: LeverPullResult[];
};

export const initialParams: ProbeParams = {
  machineTier: 1,
  rigTier: 1,
  frequencyHz: 0.42,
  bankBias: 0.24,
  rigBias: 0.18,
  rigSupport: 0.55,
  noise: 0.08,
  decisionLatencyMs: 620,
  fieldEnergy: 0.52,
};

export const initialProbeState: ProbeState = {
  money: 0,
  risk: 18,
  pulls: [],
};

export function getTierFit(params: ProbeParams): TierFit {
  const gap = params.machineTier - params.rigTier;

  if (gap <= 0) {
    return "same-tier";
  }

  if (gap === 1) {
    return "under-tiered";
  }

  return "blocked";
}

export function getTierFitLabel(tierFit: TierFit): string {
  if (tierFit === "same-tier") {
    return "same-tier";
  }

  if (tierFit === "under-tiered") {
    return "under-tiered";
  }

  return "blocked";
}

export function sampleMachineWave(timeMs: number, params: ProbeParams): WaveSample {
  const timeSeconds = timeMs / 1000;
  const phase = timeSeconds * params.frequencyHz * Math.PI * 2;
  const rawWave = Math.sin(phase);
  const tierFit = getTierFit(params);
  const tierPenalty = tierFit === "same-tier" ? 0 : tierFit === "under-tiered" ? 0.16 : 0.42;
  const correctionSupport = params.rigSupport * params.fieldEnergy;
  const readableNoise =
    params.noise *
    (1 + tierPenalty * 2) *
    (Math.sin(phase * 2.7 + 0.8) * 0.7 + Math.sin(phase * 5.2) * 0.3);

  const effectiveWave =
    rawWave -
    params.bankBias +
    params.rigBias * correctionSupport -
    tierPenalty +
    readableNoise;

  return {
    timeMs,
    rawWave,
    effectiveWave,
    favorable: effectiveWave > 0,
    favorableMargin: effectiveWave,
  };
}

export function resolveLeverPull(
  currentTimeMs: number,
  params: ProbeParams,
  state: ProbeState,
): ProbeState {
  const tierFit = getTierFit(params);
  const pressed = sampleMachineWave(currentTimeMs, params);
  const effectiveAtMs = currentTimeMs + params.decisionLatencyMs;
  const resolved = sampleMachineWave(effectiveAtMs, params);
  const blocked = tierFit === "blocked";
  const favorable = !blocked && resolved.favorable;
  const moneyDelta = favorable ? Math.round(16 + params.machineTier * 12 + params.fieldEnergy * 24) : -Math.round(8 + params.machineTier * 7);
  const riskDelta = Math.round(4 + params.fieldEnergy * 10 + (tierFit === "under-tiered" ? 9 : 0) + (blocked ? 18 : 0));

  const pull: LeverPullResult = {
    id: state.pulls.length + 1,
    pressedAtMs: currentTimeMs,
    effectiveAtMs,
    visibleWaveAtPress: pressed.effectiveWave,
    effectiveWaveAtResolution: resolved.effectiveWave,
    favorable,
    moneyDelta,
    riskDelta,
    tierFit,
  };

  return {
    money: state.money + moneyDelta,
    risk: clamp(state.risk + riskDelta, 0, 100),
    pulls: [pull, ...state.pulls].slice(0, 9),
  };
}

export function getCorrectionDemand(params: ProbeParams): number {
  const tierFit = getTierFit(params);
  const tierDemand = tierFit === "same-tier" ? 0.2 : tierFit === "under-tiered" ? 0.62 : 1;
  const supportRelief = params.rigSupport * 0.42 + params.rigBias * 0.16;
  const latencyDemand = clamp(params.decisionLatencyMs / 1400, 0, 1) * 0.25;
  const noiseDemand = params.noise * 0.5;

  return clamp(tierDemand + latencyDemand + noiseDemand - supportRelief, 0, 1);
}

export function getFavorableWindowEstimate(params: ProbeParams): number {
  const points = 240;
  let favorableCount = 0;
  const periodMs = 1000 / params.frequencyHz;

  for (let index = 0; index < points; index += 1) {
    const sampleTime = (periodMs * index) / points;
    if (sampleMachineWave(sampleTime, params).favorable) {
      favorableCount += 1;
    }
  }

  return favorableCount / points;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function formatSeconds(ms: number): string {
  return `${(ms / 1000).toFixed(2)}s`;
}

export function formatSigned(value: number): string {
  return value >= 0 ? `+${value.toFixed(2)}` : value.toFixed(2);
}
