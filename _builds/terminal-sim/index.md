# Terminal Simulation Build

## Definition

This build path defines a terminal-based mechanics lab for the product.

It exists to test the game algorithm before visual production.

The build should make the core Home-to-Hack-to-next-Home loop playable, repeatable, and measurable through a command-line interface.

## Status

This build path is available for selection.

It is a pre-vertical-slice validation path for mechanics, balance direction, and long-run behavior.

## Intended Use

Use this build path when the goal is to test whether the product's core mechanics create readable tension, meaningful build differences, and viable multi-day consequences.

This path is especially suitable for:

- testing dice behavior before committing to visual UI
- comparing rig configurations across many runs
- measuring profit, collapse, suspicion, damage, and variance
- finding dominant, flat, or unstable algorithm directions early
- producing evidence that can sharpen `_spec`

## Technology Stack

- TypeScript
- Node.js
- a terminal command interface
- deterministic seeded random generation where useful
- plain file-based scenario/config data where useful

The build should avoid framework weight unless a concrete implementation step justifies it.

## Constraints

- The terminal build is an algorithm and mechanics lab.
- It should remain directly runnable by another agent.
- It should preserve product terms from `_spec`.
- Its terminal output, prompts, action labels, warnings, summaries, and result text should be written in English.
- It should expose state changes clearly through text output.
- It should support both interactive play and batch simulation.
- It should keep product logic separate from terminal input/output code.

## Implementation Directory

The concrete terminal simulation implementation should live in a dedicated parallel build directory named `terminal-sim/`.

That directory should be runnable on its own and should not be mixed with the web React implementation or other future build paths.

When an agent works on this build path, `_builds/terminal-sim/` remains the build definition source, while `terminal-sim/` is the expected concrete implementation workspace.

## Architecture Direction

The preferred direction is:

- explicit domain models for player state, rig state, dice state, target state, hack state, and external pressure
- pure or mostly deterministic functions for hack ticks, actions, and result resolution
- seedable simulation runs for reproducible comparisons
- terminal adapters that call domain logic rather than owning product rules
- summary reporting for autoruns

## Build Scope

The first meaningful scope for this build path is:

- a minimal starting player state
- Loser's Rig as the permanent fallback rig with two active die slots
- Loser's Die as the permanent fallback die in the player's inventory
- one simple low-yield target machine suitable for Loser's Rig and Loser's Die
- rig top speed and die max speed represented in the algorithm
- a small set of provisional dice types
- a small set of target machine archetypes
- a Hack simulation with repeated pressure ticks
- actions for pushing yield, stabilizing, regulating body pressure, and cashing out
- carry-over into the next day
- autoruns for repeated simulation of selected builds

## Out of Scope

The first terminal simulation does not need:

- final visual presentation
- React components
- animations
- casino navigation
- authored story progression
- final balance values

## Agent Instructions

When this build path is active, the agent should:

- read `_spec` first and treat it as the product truth
- use this file to choose the mechanics-lab implementation direction
- prefer small, inspectable domain functions over hidden simulation complexity
- make algorithm assumptions explicit in build-local notes
- record product ambiguities that become visible during simulation
- preserve a path from simulation findings back into behavior contracts or product definitions

## Open Decisions

The following implementation choices remain open inside this build path:

- exact command interface shape
- first dice type set for algorithm testing
- first target archetype set
- exact Loser's Rig parameters
- exact Loser's Die parameters
- exact simple target parameters
- initial rig top speed and die max speed values
- whether autorun strategies are scripted as config files, command flags, or both
- which metrics define a promising first algorithm
