# Step 002 Core State

## Purpose

Define and implement the minimal game state needed to support the vertical slice loop in code.

## Depends On

- `_builds/dev-build/index.md`
- `_builds/dev-build/steps/001-foundation.md`
- `_spec/product/index.md`
- `_spec/product/game-loop.md`

## Inputs

- the active development build definition
- the foundation scaffold
- the current product definitions for state and loop

## Task

Implement the minimal domain state for:

- player state
- rig state
- dice state
- external pressure
- day-to-day loop carry-over

The implementation should keep domain logic separate from display components.

## Expected Output

- explicit TypeScript domain models for the initial game state
- initialization logic for a new run cycle
- a visible connection between state and the placeholder prep/run/result surfaces
- a short note of any ambiguity discovered in the product definitions

## Out of Scope

- complete balance
- full run resolution logic
- deep content variety
- final save system

## Spec Feedback

Record any ambiguity around:

- the minimum shape of a die
- the relationship between suspicion, stress, and access
- how much rig state should persist versus reset between runs

## Completion Signal

This step is complete when the application can hold and display a coherent minimal game state across the core loop surfaces.
