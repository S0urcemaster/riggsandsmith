# Target Selection

## Module Authority

This file owns first-slice target selection as a product function.

It defines what the player selects before Hack and how casino heat affects target availability.

## Does Not Own

- global casino heat definition
- concrete target content entries
- Hack view behavior after a target is selected
- technical target data schema
- target UI implementation details

## Depends On

- [Product Definition](./index.md)
- [Vertical Slice](./vertical-slice.md)
- [Home](./home.md)
- [Global Resources](./state/global-resources.md)
- [Catch and Run End](./state/catch-and-run-end.md)

## Exports

- first-slice actionable target form
- Targeting App function
- casino heat target access rule
- simple fallback target requirement

## Definition

For the first product slice, target selection should be represented primarily as a list of individual slot machines with different difficulty levels.

The casino around them may exist as framing fiction or decorative presentation, but the actionable target in the first slice is the machine, not the full venue.

From the Targeting App in Home, the player selects which machine the next hack will target.

That choice defines the next operational objective and the machine to which the portable rig will later be attached on site.

Target selection should account for casino heat.

Some lucrative casinos or machines should have a casino-heat tolerance threshold.

When the player's casino heat exceeds that threshold, those targets should become unavailable or unsafe enough that they are excluded from normal selection.

At higher casino heat, available work should shift toward casinos, machines, or conditions with greater operational risk.

The first target set should include a simple low-yield slot machine that can be attacked with Loser's Rig and Loser's Die.

This simple target should provide a reliable recovery path with limited profit and limited strategic depth.

## Spec Feedback

Future target-content work should define concrete targets in content or data-oriented modules without redefining target selection meaning here.
