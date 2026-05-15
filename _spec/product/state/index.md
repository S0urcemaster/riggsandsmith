# Game State

## Module Authority

This file owns the overview shape of product-level game state.

Detailed state meanings belong to focused state modules.

## Does Not Own

- detailed global resource behavior
- catch and run-end rules
- rig operating rules
- dice physics rules
- view presentation
- technical storage shape

## Depends On

- [Product Definition](../index.md)
- [Vertical Slice](../vertical-slice.md)
- [Persistence Boundary](./persistence-boundary.md)
- [Global Resources](./global-resources.md)
- [Catch and Run End](./catch-and-run-end.md)

## Exports

- game state layer overview
- player state minimum
- rig state minimum
- dice state minimum
- external pressure minimum

## State Layers

The game state should keep at least these layers visible and mutable:

- player state
- rig state
- dice state
- external pressure

## Player State

The player state includes at minimum:

- money
- casino heat
- police heat
- suspicion
- available knowledge or access
- day progression

## Rig State

The rig state includes at minimum:

- rig model
- available slots
- top speed
- whether it is protected as the player's fallback rig
- energy or load level
- rig stability
- cooling or thermal strain
- signature or traceability

Rig operating rules are defined in [Rig Operation](../rig-operation.md).

## Dice State

Each die should be describable at minimum by:

- type
- field behavior
- probability bias
- max speed
- risk
- relationship to other dice
- whether it is protected as the player's fallback die

Dice physics rules are defined in [Dice Physics](../dice-physics.md).

## External Pressure

External pressure includes at minimum:

- pressure from casinos or operators
- police heat
- market and supply conditions
- quality of available contacts or sources

## Spec Feedback

Future state work should keep this file as an overview.

Detailed rules should move into focused state modules instead of expanding this file into a second product index.
