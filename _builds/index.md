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
- a game engine build
- a prototype build
- an experimental architecture path

## Build Path Rule

`_builds` is not only a place for isolated technology notes.

Each build path may contain both:

- a main build definition
- a sequence of bounded build steps

This means `_builds` should carry the implementation path itself, not only the stack choice.

## Usage

When implementation work should follow a specific variant, the instruction should explicitly name the file, for example:

- use `_builds/web-react/index.md`
- use `_builds/godot/index.md`
- use `_builds/terminal-prototype/index.md`

When stepwise execution is desired, the instruction should name both the build path and the step, for example:

- use `_builds/web-react/index.md` and execute `_builds/web-react/steps/002-core-state.md`
- use `_builds/godot/index.md` and execute `_builds/godot/steps/001-foundation.md`

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
