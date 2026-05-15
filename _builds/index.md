# Build Definitions

This directory contains selectable build paths for implementation work.

It does not define the product by itself.

It defines alternative technical build paths that may be activated for a concrete build task.

## Reading Rule

Read `_spec` first.

Read a file in `_builds` only as an additional implementation guide for the current task.

If no build file has been explicitly selected, `_builds` remains inactive.

## Purpose

This layer exists so that the project can keep multiple technical build variants in parallel, for example:

- a web build
- a terminal simulation build
- a game engine build
- a prototype build
- an experimental architecture path

## Parallel Build Directory Rule

Build paths should remain parallel and independently runnable.

Each selected implementation path should have its own concrete implementation directory instead of sharing one mixed source tree with other build paths.

The build definition directory in `_builds/<build-path>/` describes the path.

The concrete implementation directory should use a matching, recognizable path name so another agent can connect implementation work back to its active build definition.

Examples:

- `_builds/terminal-sim/` defines the terminal simulation build path.
- `terminal-sim/` may contain the concrete terminal simulation implementation.
- `_builds/dev-build/` defines the development build path.
- `dev-build/` contains the concrete development build implementation.

Parallel build directories may duplicate small amounts of setup when that keeps each build path easier to run, inspect, and compare.

Shared product meaning should remain in `_spec`.

Shared implementation code should only be introduced after a concrete need appears across build paths.

## Build Path Rule

`_builds` is not only a place for isolated technology notes.

Each build path may contain both:

- a main build definition
- a sequence of bounded build steps

This means `_builds` should carry the implementation path itself, not only the stack choice.

## Usage

When implementation work should follow a specific variant, the instruction should explicitly name the file, for example:

- use `_builds/dev-build/index.md`
- use `_builds/terminal-sim/index.md`
- use `_builds/godot/index.md`
- use `_builds/terminal-prototype/index.md`

When stepwise execution is desired, the instruction should name both the build path and the step, for example:

- use `_builds/dev-build/index.md` and execute `_builds/dev-build/steps/003-hack-machine-play-probe.md`
- use `_builds/terminal-sim/index.md` and execute `_builds/terminal-sim/steps/003-autoruns.md`
- use `_builds/godot/index.md` and execute `_builds/godot/steps/001-foundation.md`

## Available Build Paths

The currently defined build paths are:

- [Development Build](./dev-build/index.md)
- [Terminal Simulation Build](./terminal-sim/index.md)

## Expected Content of a Build File

A build file should usually define:

- the intended stack
- the implementation constraints
- the architecture direction
- the build scope
- build-specific agent instructions

## Expected Structure of a Build Path

A build path will usually be shaped like this:

1. one main definition file such as `index.md`
2. an optional `steps/` directory
3. step files that define bounded implementation tasks

## Step Rule

Build work should usually be assigned in bounded steps rather than as one undivided total build request.

This improves:

- implementation reliability
- planning clarity
- comparison across runs
- the chance to feed corrections back into `_spec` or the active build path

## Current State

No concrete build variant is active by default.

Concrete build files may be added here progressively as the project develops.
