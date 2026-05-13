# Build Definitions

This file defines how build definitions should be understood and used.

## Purpose

Build definitions exist to stabilize implementation work across different agent runs.

They make technical direction explicit without turning technology choices into product truth.

## Relation to `_spec`

`_spec` defines what the product is.

`_builds` defines how a selected build variant should implement that product.

Build definitions may refine implementation direction.

They must not silently redefine product meaning, gameplay meaning, or lore meaning.

## Activation Rule

A build definition is inactive unless it is explicitly selected for the current build task.

A selected build definition becomes the active implementation guide for that task.

Without such a selection, agents must not assume that any file in `_builds` is active.

## Allowed Content

A build definition may contain:

- intended technology stack
- language and framework choices
- platform target
- architecture direction
- storage and state approach
- UI direction for the selected build
- implementation constraints
- build scope and exclusions
- agent instructions specific to that build path

## Disallowed Behavior

A build definition must not silently:

- replace product intent
- downgrade already clarified product meaning
- reinterpret lore into implementation shortcuts
- become the default truth for every future build

## Variant Rule

Multiple build definitions may coexist.

They are alternative implementation paths for the same product direction unless a file explicitly states otherwise.

This means the project may intentionally keep several build variants in parallel for comparison, collection, or later execution.

## Suggested File Shape

Each build definition should usually contain:

1. Definition
2. Status
3. Intended Use
4. Technology Stack
5. Constraints
6. Architecture Direction
7. Build Scope
8. Agent Instructions
9. Open Decisions
