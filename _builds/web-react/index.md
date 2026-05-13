# Web React Build

## Definition

This build path defines a web-based implementation of the product using React.

It is intended for a playable vertical slice that prioritizes rapid iteration, readable state flow, and a strong interface-centered presentation.

## Status

This build path is available for selection.

It is an early implementation path for product validation, not yet a final production commitment.

## Intended Use

Use this build path when the goal is to build and test the product as an interface-driven systems game in the browser.

This path is especially suitable for:

- validating the core game loop quickly
- iterating on rig configuration and run resolution
- making systemic relationships visible in a readable UI
- testing the vertical slice without requiring a game engine

## Technology Stack

- React
- TypeScript
- Vite
- browser-based local storage for early persistence
- CSS with project-owned styling rather than a heavy UI framework

## Constraints

- The build should remain primarily single-page and interface-driven in the early slice.
- The implementation should avoid unnecessary backend dependence in the first buildable state.
- The build should preserve the product's diegetic technical tone rather than collapsing into generic dashboard UI.
- The build should remain straightforward to run locally by another agent.

## Architecture Direction

The first implementation should favor a clear front-end state architecture over premature complexity.

The preferred direction is:

- a single React application
- product logic separated from view components
- state represented through explicit domain models
- deterministic run resolution functions where possible
- UI composition around home phase, rig configuration, run, and result

## Build Scope

The first meaningful scope for this build path is a playable vertical slice with:

- one home/prep flow
- one rig configuration surface
- a small set of dice and target archetypes
- a run resolution prototype
- a result phase with carry-over into the next day

This build path does not require:

- multiplayer
- backend services
- account systems
- fully authored narrative progression
- open-world navigation

## Agent Instructions

When this build path is active, the agent should:

- read `_spec` first and treat it as the product truth
- use this file to choose implementation technology and build direction
- prefer bounded build steps over one large undivided implementation pass
- keep product logic readable and testable
- make spec tension explicit if the selected technology path pushes against product meaning

## Open Decisions

The following implementation choices remain open inside this build path:

- exact state management approach beyond plain React state boundaries
- test strategy for domain logic and UI behavior
- precise persistence shape for local save data
- whether the run phase should be represented on one screen or as multiple staged views
