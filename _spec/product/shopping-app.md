# Shopping App

## Module Authority

This file owns the Shopping App as a first-slice Home function.

It defines what the player can buy or improve and how shopping participates in police heat risk.

## Does Not Own

- global police heat definition
- concrete shop item text
- concrete dice physics
- detailed rig model progression
- technical shop data schema
- technical UI implementation

## Depends On

- [Product Definition](./index.md)
- [Vertical Slice](./vertical-slice.md)
- [Home](./home.md)
- [Global Resources](./state/global-resources.md)
- [Dice Physics](./dice-physics.md)
- [Rig Operation](./rig-operation.md)

## Exports

- Shopping App first-slice function
- supported first-slice purchase categories
- darknet acquisition framing
- known-risk and unknown-risk shopping rule
- first-slice rig shopping exclusion

## Definition

The Shopping App is part of the Home decision layer.

It represents darknet acquisition.

It is the place where the player can spend money to acquire or improve illegal operational tools before the next hack.

The first slice Shopping App should support at minimum:

- buying dice
- buying upgrades
- buying die modifications

The Shopping App should therefore express progression through equipment access rather than through abstract unlock language alone.

Shopping entries should distinguish known-risk items from unknown-risk items.

Known-risk items make their police heat consequence readable before purchase.

Unknown-risk items show that risk exists, but the exact police heat consequence is revealed later at the next Home entry after the following Hack resolves.

Additional rig models may be introduced later, but the first slice does not require rig shopping.

## Spec Feedback

Future shop-content work should define concrete items in content or data-oriented modules without redefining Shopping App product meaning here.

If a shop item needs a new kind of police heat behavior, that change should reference or update [Global Resources](./state/global-resources.md).
