# Build Definitions

This file defines how build definitions should be understood and used.

## Purpose

Build definitions exist to stabilize implementation work across different agent runs.

They make technical direction explicit without turning technology choices into product truth.

## Relation to `_spec`

`_spec` defines what the product is.

`_builds` defines how a selected build path should implement that product.

Build definitions may refine implementation direction.

They must not silently redefine product meaning, gameplay meaning, or lore meaning.

## Activation Rule

A build path is inactive unless it is explicitly selected for the current build task.

A selected build path becomes the active implementation guide for that task.

Without such a selection, agents must not assume that any file in `_builds` is active.

## Build Path Structure

`_builds` is the full implementation space for selectable build work.

A build path may contain:

- one main build definition
- one or more bounded build steps
- build-local implementation notes
- build-local open decisions

Build steps belong to their build path.

They should not be treated as a separate global layer beside `_builds`.

## Allowed Content

A build path may contain:

- intended technology stack
- language and framework choices
- platform target
- architecture direction
- storage and state approach
- UI direction for the selected build
- implementation constraints
- build scope and exclusions
- agent instructions specific to that build path
- ordered implementation steps for that build path
- completion criteria for individual steps

## Disallowed Behavior

A build path must not silently:

- replace product intent
- downgrade already clarified product meaning
- reinterpret lore into implementation shortcuts
- become the default truth for every future build

## Variant Rule

Multiple build paths may coexist.

They are alternative implementation paths for the same product direction unless a file explicitly states otherwise.

This means the project may intentionally keep several build variants in parallel for comparison, collection, or later execution.

## Suggested Shape

Each build path should usually contain a main definition file with:

1. Definition
2. Status
3. Intended Use
4. Technology Stack
5. Constraints
6. Architecture Direction
7. Build Scope
8. Agent Instructions
9. Open Decisions

Each build path may additionally contain a `steps/` directory.

Each step file should usually contain:

1. Purpose
2. Depends On
3. Inputs
4. Task
5. Expected Output
6. Out of Scope
7. Spec Feedback
8. Completion Signal
