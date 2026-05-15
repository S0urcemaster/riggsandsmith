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
- [Onboarding and First Fork](./onboarding-and-first-fork.md)

## Exports

- Shopping App first-slice function
- supported first-slice purchase categories
- darknet acquisition framing
- known-risk and unknown-risk shopping rule
- first-slice rig shopping exclusion
- shop price factor rule

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

The first meaningful Shopping App decision after onboarding should be the first equipment fork defined in [Onboarding and First Fork](./onboarding-and-first-fork.md).

That fork may include an improvement to Loser's Rig.

That improvement is not the same as buying a completely separate rig model.

## Price Factor Rule

Shop item prices should be authored first as relative price factors.

The implementation may then convert the factor into a pleasant round money value.

The preferred first conversion is:

`price = price factor * base shop price`

The base shop price may start at a round value such as `$100`.

Final money values are tuning data.

The factor is the more stable design value because it expresses how expensive one item should feel compared with another item at the same progression point.

Die quality should be one of the strongest inputs into die price factor.

A high-quality die should usually cost more than a low-quality die with similar physical forces.

Within the same broad quality level, the shop may still contain good and bad offers.

This preserves bargain hunting and bad purchases instead of making price a perfect truth display.

Low-quality dice may be cheap enough to tempt the player during financial pressure, but they should carry real operational risk.

For the first Die Manipulator shop items, the initial factors are defined in [Rig Operation](./rig-operation.md):

- `accelerate`: `1.0`
- `brake`: `1.0`
- `cool`: `1.5`

Other early items should receive comparable factors before they receive final money prices.

## Spec Feedback

Future shop-content work should define concrete items in content or data-oriented modules without redefining Shopping App product meaning here.

If a shop item needs a new kind of police heat behavior, that change should reference or update [Global Resources](./state/global-resources.md).
