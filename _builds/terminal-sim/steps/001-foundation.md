# Step 001 Foundation

## Purpose

Establish a runnable terminal simulation foundation for testing the product algorithm.

## Depends On

- `_spec/index.md`
- `_spec/product/index.md`
- `_spec/product/game-loop.md`
- `_spec/product/hack-view.md`
- `_builds/terminal-sim/index.md`

## Inputs

- the active terminal simulation build definition
- the current product specification
- the Hack behavior contracts

## Task

Create the initial terminal simulation scaffold.

The result should provide:

- a runnable command entry point
- a basic source structure that separates domain logic from terminal input/output
- a minimal game state model for Home, Hack, and next-day carry-over
- Loser's Rig as the permanent two-slot fallback rig
- Loser's Die as the permanent fallback die
- a simple low-yield target machine
- rig top speed and die max speed fields in the initial model
- a first interactive path that lets the user start a hack, take simple actions, and see a result

## Expected Output

- a working local terminal command
- initial project structure
- explicit domain model files
- a minimal interactive simulation loop
- a short build-local note of algorithm assumptions and spec gaps

## Out of Scope

- final dice balance
- complete autorun analysis
- rich terminal UI
- final persistence
- visual product implementation

## Spec Feedback

Record any ambiguity around:

- minimum state required for algorithm testing
- how Loser's Rig should be represented in inventory, availability, and consequences
- how Loser's Die should be represented in inventory and consequences
- relationship between Home configuration and Hack pressure
- result carry-over into the next day

## Completion Signal

This step is complete when another agent can run the terminal command locally and complete at least one Home-to-Hack-to-next-Home simulation.
