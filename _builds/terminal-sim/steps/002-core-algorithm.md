# Step 002 Core Algorithm

## Purpose

Implement a first inspectable hack algorithm that expresses the product's risk, reward, pressure, and consequence logic.

## Depends On

- `_builds/terminal-sim/index.md`
- `_builds/terminal-sim/steps/001-foundation.md`
- `_spec/product/hack-view.md`

## Inputs

- the terminal simulation foundation
- the Hack behavior contracts
- provisional dice and target definitions suitable for algorithm testing

## Task

Implement the first core algorithm for:

- hack ticks or decision windows
- profit growth
- heat or instability growth
- red-zone proximity
- body pressure
- suspicion or signature pressure
- cash-out and collapse resolution
- carry-over consequences

The implementation should make each action's tradeoff visible in state deltas.

## Expected Output

- explicit domain functions for hack state updates
- action handlers for push yield, stabilize channel, regulate body pressure, and cash out
- visible per-step terminal state output
- initial numeric constants kept easy to inspect and change
- a short note describing which behavior contracts are covered

## Out of Scope

- final balance
- large content set
- advanced progression economy
- automated batch comparison
- final UI terminology polish

## Spec Feedback

Record any ambiguity around:

- how quickly pressure should escalate
- how dice should modify pressure and profit
- how collapse, damage, suspicion, and catch pressure relate
- which behavior needs stronger product contracts

## Completion Signal

This step is complete when the terminal simulation can produce clearly different outcomes from repeated hack decisions and the main Hack behavior contracts are visibly represented.
