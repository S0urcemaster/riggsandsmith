# Vertical Slice

## Module Authority

This file owns the binding first-slice product scope.

It defines what the first reliable build must prove and which product elements belong to that first slice.

## Does Not Own

- detailed view behavior
- detailed state rules
- rig operation rules
- dice physics rules
- concrete in-game text
- technical implementation path

## Depends On

- [Product Definition](./index.md)
- [Game Loop](./game-loop.md)
- [Rig Operation](./rig-operation.md)
- [Dice Physics](./dice-physics.md)

## Exports

- first vertical slice goal
- first binding scope boundary
- required first-slice views
- required first-slice systems
- Loser's Rig first-slice scope

## Vertical Slice Goal

The first implementable vertical slice should prove that the product fantasy works as a game system.

It should specifically show:

- that dice are understandable and gameplay-relevant as real modules
- that rig construction produces meaningfully different hack outcomes
- that profit always remains coupled to instability, suspicion, or damage
- that the multi-day cycle creates readable tension

## First Binding Scope Boundary

The slice should prove the core product logic with limited content.

For that reason, the first vertical slice excludes open-world exploration, a large story campaign, and complex infiltration simulation from its required build scope.

The first slice should therefore include at its core:

- a Start view that leads into the current playable state
- a Start view highscore list for completed runs
- a Home view as the central interaction and decision layer
- a dominant home computer as the main visible operating element
- a Rigging App with visible dice slots and module states
- a Targeting App focused on individual slot machines rather than full casino spaces
- a Shopping App for dice, upgrades, and die modifications
- a small set of distinct dice
- a small set of distinct target systems
- a Hack view with readable cause-and-effect relationships
- a Catch view for player boundary violations
- persistent consequences across multiple days
- run ending after the third catch

The first slice should assume one starting rig model.

For the first slice, this starting rig is Loser's Rig.

Loser's Rig should be small and simple.

It should have two active die slots.

Loser's Rig remains available across all outcomes.

The permanent availability of Loser's Rig is a product-level continuity rule.

Different rig models may become a later expansion axis, but they are not required to prove the first product core.

The named views should map clearly onto the named phases they present.

## Core Systems

In its first reliable implementation, the product should contain at minimum these system layers:

1. Game state
2. Home system
3. Hack execution and outcome system
4. Consequence system
5. Progression system

## Spec Feedback

Future scope work should edit this file when it changes what belongs to the first slice.

If a needed change concerns how one included element behaves, the owning product module should be edited instead.
