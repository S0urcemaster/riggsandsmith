import { useEffect, useMemo, useState } from "react";
import {
  ProbeParams,
  ProbeState,
  formatSeconds,
  formatSigned,
  getCorrectionDemand,
  getFavorableWindowEstimate,
  getTierFit,
  getTierFitLabel,
  initialParams,
  initialProbeState,
  resolveLeverPull,
  sampleMachineWave,
} from "./domain/hackProbe";

const viewport = {
  width: 860,
  height: 320,
  midY: 160,
  amplitude: 92,
};

function App() {
  const [params, setParams] = useState<ProbeParams>(initialParams);
  const [probeState, setProbeState] = useState<ProbeState>(initialProbeState);
  const [timeMs, setTimeMs] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      setTimeMs(now - startedAt);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const currentSample = useMemo(() => sampleMachineWave(timeMs, params), [params, timeMs]);
  const effectiveSample = useMemo(
    () => sampleMachineWave(timeMs + params.decisionLatencyMs, params),
    [params, timeMs],
  );
  const tierFit = getTierFit(params);
  const correctionDemand = getCorrectionDemand(params);
  const favorableWindow = getFavorableWindowEstimate(params);

  const updateParam = (key: keyof ProbeParams, value: number) => {
    setParams((current) => ({ ...current, [key]: value }));
  };

  const pullLever = () => {
    setProbeState((current) => resolveLeverPull(timeMs, params, current));
  };

  const resetRun = () => {
    setProbeState(initialProbeState);
  };

  return (
    <main className="app-shell">
      <section className="title-band">
        <div>
          <p className="eyebrow">Spec probe</p>
          <h1>Hack Machine Play Phase</h1>
        </div>
        <div className={`tier-pill ${tierFit}`}>
          <span>Rig {params.rigTier}</span>
          <strong>{getTierFitLabel(tierFit)}</strong>
          <span>Machine {params.machineTier}</span>
        </div>
      </section>

      <section className="workbench">
        <div className="wave-zone">
          <div className="readout-strip">
            <Metric label="visible now" value={formatSigned(currentSample.effectiveWave)} tone={currentSample.favorable ? "good" : "bad"} />
            <Metric label="effective in latency" value={formatSigned(effectiveSample.effectiveWave)} tone={effectiveSample.favorable ? "good" : "bad"} />
            <Metric label="latency" value={formatSeconds(params.decisionLatencyMs)} />
            <Metric label="favorable window" value={`${Math.round(favorableWindow * 100)}%`} />
          </div>
          <WaveDisplay timeMs={timeMs} params={params} />
          <div className="action-row">
            <button className="primary-action" onClick={pullLever} disabled={tierFit === "blocked"}>
              Pull lever
            </button>
            <button className="secondary-action" onClick={resetRun}>
              Reset run
            </button>
            <div className="action-note">
              Lever resolves at the ghost cursor, after target decision latency.
            </div>
          </div>
        </div>

        <aside className="control-panel">
          <h2>Parameters</h2>
          <Control
            label="machine tier"
            value={params.machineTier}
            min={1}
            max={4}
            step={1}
            onChange={(value) => updateParam("machineTier", value)}
          />
          <Control
            label="rig tier"
            value={params.rigTier}
            min={1}
            max={4}
            step={1}
            onChange={(value) => updateParam("rigTier", value)}
          />
          <Control
            label="frequency"
            value={params.frequencyHz}
            min={0.15}
            max={1.2}
            step={0.01}
            suffix="Hz"
            onChange={(value) => updateParam("frequencyHz", value)}
          />
          <Control
            label="bank bias"
            value={params.bankBias}
            min={0}
            max={0.75}
            step={0.01}
            onChange={(value) => updateParam("bankBias", value)}
          />
          <Control
            label="rig bias"
            value={params.rigBias}
            min={0}
            max={0.9}
            step={0.01}
            onChange={(value) => updateParam("rigBias", value)}
          />
          <Control
            label="rig support"
            value={params.rigSupport}
            min={0}
            max={1}
            step={0.01}
            onChange={(value) => updateParam("rigSupport", value)}
          />
          <Control
            label="field energy"
            value={params.fieldEnergy}
            min={0}
            max={1}
            step={0.01}
            onChange={(value) => updateParam("fieldEnergy", value)}
          />
          <Control
            label="noise"
            value={params.noise}
            min={0}
            max={0.45}
            step={0.01}
            onChange={(value) => updateParam("noise", value)}
          />
          <Control
            label="decision latency"
            value={params.decisionLatencyMs}
            min={120}
            max={1600}
            step={20}
            suffix="ms"
            onChange={(value) => updateParam("decisionLatencyMs", value)}
          />
        </aside>
      </section>

      <section className="lower-grid">
        <div className="debug-panel">
          <h2>Debug State</h2>
          <dl>
            <DebugItem label="money" value={`$${probeState.money}`} />
            <DebugItem label="risk pressure" value={`${probeState.risk}/100`} />
            <DebugItem label="correction demand" value={`${Math.round(correctionDemand * 100)}%`} />
            <DebugItem label="raw wave" value={currentSample.rawWave.toFixed(3)} />
            <DebugItem label="effective wave now" value={currentSample.effectiveWave.toFixed(3)} />
            <DebugItem label="effective wave at decision" value={effectiveSample.effectiveWave.toFixed(3)} />
          </dl>
        </div>

        <div className="log-panel">
          <h2>Result Log</h2>
          {probeState.pulls.length === 0 ? (
            <p className="empty-log">No lever pulls yet.</p>
          ) : (
            <ol>
              {probeState.pulls.map((pull) => (
                <li key={pull.id} className={pull.favorable ? "success" : "failure"}>
                  <span>#{pull.id}</span>
                  <span>press {formatSeconds(pull.pressedAtMs)}</span>
                  <span>resolve {formatSeconds(pull.effectiveAtMs)}</span>
                  <strong>{pull.favorable ? "favorable" : "miss"}</strong>
                  <span>wave {pull.effectiveWaveAtResolution.toFixed(2)}</span>
                  <span>{pull.moneyDelta >= 0 ? "+" : ""}${pull.moneyDelta}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </main>
  );
}

function WaveDisplay({ timeMs, params }: { timeMs: number; params: ProbeParams }) {
  const periodMs = 1000 / params.frequencyHz;
  const windowMs = periodMs * 1.65;
  const points = 220;
  const startMs = timeMs - windowMs * 0.35;
  const nowX = viewport.width * 0.35;
  const effectiveX = nowX + (params.decisionLatencyMs / windowMs) * viewport.width;

  const rawPath = createPath(points, startMs, windowMs, params, "raw");
  const effectivePath = createPath(points, startMs, windowMs, params, "effective");
  const current = sampleMachineWave(timeMs, params);
  const effective = sampleMachineWave(timeMs + params.decisionLatencyMs, params);

  return (
    <svg viewBox={`0 0 ${viewport.width} ${viewport.height}`} className="wave-display" role="img" aria-label="Machine probability wave">
      <rect className="favorable-zone" x="0" y="0" width={viewport.width} height={viewport.midY} />
      <line className="grid-line neutral" x1="0" y1={viewport.midY} x2={viewport.width} y2={viewport.midY} />
      <line className="cursor now" x1={nowX} y1="18" x2={nowX} y2={viewport.height - 18} />
      <line className="cursor effective" x1={effectiveX} y1="18" x2={effectiveX} y2={viewport.height - 18} />
      <path className="raw-wave" d={rawPath} />
      <path className="effective-wave" d={effectivePath} />
      <circle className={current.favorable ? "sample-dot good" : "sample-dot bad"} cx={nowX} cy={toY(current.effectiveWave)} r="7" />
      <circle className={effective.favorable ? "sample-dot ghost good" : "sample-dot ghost bad"} cx={effectiveX} cy={toY(effective.effectiveWave)} r="8" />
      <text className="svg-label" x={nowX + 10} y="32">now</text>
      <text className="svg-label" x={Math.min(effectiveX + 10, viewport.width - 132)} y="54">effective</text>
      <text className="svg-label neutral-label" x="18" y={viewport.midY - 10}>neutral</text>
    </svg>
  );
}

function createPath(
  points: number,
  startMs: number,
  windowMs: number,
  params: ProbeParams,
  mode: "raw" | "effective",
) {
  const commands: string[] = [];

  for (let index = 0; index < points; index += 1) {
    const ratio = index / (points - 1);
    const x = ratio * viewport.width;
    const sample = sampleMachineWave(startMs + windowMs * ratio, params);
    const value = mode === "raw" ? sample.rawWave : sample.effectiveWave;
    commands.push(`${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${toY(value).toFixed(1)}`);
  }

  return commands.join(" ");
}

function toY(value: number) {
  return viewport.midY - Math.max(-1.4, Math.min(1.4, value)) * viewport.amplitude;
}

function Control({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  const displayValue = step >= 1 ? value.toFixed(0) : value.toFixed(2);

  return (
    <label className="control">
      <span>
        {label}
        <strong>{displayValue}{suffix}</strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone?: "good" | "bad" }) {
  return (
    <div className={`metric ${tone ?? ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function DebugItem({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </>
  );
}

export default App;
