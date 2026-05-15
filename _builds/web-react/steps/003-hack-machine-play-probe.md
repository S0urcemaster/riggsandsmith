# Step 003 Hack Machine Play Probe

## Purpose

Create a browser-based specification probe for the post-sync target-machine play phase.

This step is meant to expose product ambiguities around timing, tier fit, bank advantage, rig support, and decision latency before the broader vertical slice is built.

## Depends On

- `_builds/web-react/index.md`
- `_spec/product/hack-view.md`
- `_spec/product/rig-operation.md`
- `_spec/product/target-selection.md`
- `_spec/product/dice-effect-model.md`

## Output

The initial implementation lives in `frontend`.

It provides:

- a React + TypeScript + Vite local client
- a single hack machine play test view
- a visible sine-wave probability oscillator
- neutral line and favorable zone display
- bank bias, rig bias, field energy, tier fit, noise, and decision latency controls
- a lever action that resolves after target decision latency
- an explicit result log showing press time, resolve time, effective wave value, and money result
- debug state for correction demand and favorable-window estimate

## Interpretation

This build is a specification probe, not a final product UI.

Its success condition is whether it helps identify missing or unclear rules in the Hack specification.

Observed issues should be fed back into `_spec` before the probe is broadened into a full Home-to-Hack vertical slice.

## Run

From `frontend`:

```sh
npm install
npm run dev
```

The local development server defaults to `http://localhost:5173/`.
