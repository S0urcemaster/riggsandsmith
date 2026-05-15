# Development Build

## Definition

This build path defines the local development client used to probe and refine the product specification.

It is currently a web-based implementation using React, TypeScript, and Vite.

Its primary purpose is specification discovery through playable, inspectable prototypes.

It should help reveal missing rules, ambiguous interactions, weak balance assumptions, and unclear build requirements before a later final implementation run.

## Status

This build path is active as the current concrete development build.

The concrete implementation directory is `dev-build`.

This is not a final production commitment.

## Intended Use

Use this build path when the goal is to build and test product behavior in the browser in order to improve `_spec`.

This path is especially suitable for:

- validating individual product mechanics quickly
- iterating on rig configuration, target behavior, and run resolution
- making systemic relationships visible in a readable UI
- testing unclear specification areas without requiring a game engine

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

The current implemented scope is a specification probe for the post-sync Hack machine play phase.

It includes:

- one live Hack test page
- a sine-wave target machine probability oscillator
- neutral line and favorable-zone display
- bank bias, rig bias, field energy, tier fit, noise, and decision latency controls
- a lever action that resolves after target decision latency
- a result log with press time, resolve time, effective wave value, and money result
- visible debug state for correction demand and favorable-window estimate

The next broader scope for this build path is a playable vertical slice with:

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
- preserve `dev-build` as the concrete implementation directory unless explicitly redirected
- prefer bounded build steps over one large undivided implementation pass
- keep product logic readable and testable
- make spec tension explicit if the selected technology path pushes against product meaning
- record discovered specification gaps in `_spec` or in the active build step when they are not yet product-stable

## Open Decisions

The following implementation choices remain open inside this build path:

- exact state management approach beyond plain React state boundaries
- test strategy for domain logic and UI behavior
- precise persistence shape for local save data
- whether the run phase should be represented on one screen or as multiple staged views
- which probe observations should become stable product rules before the vertical slice expands
