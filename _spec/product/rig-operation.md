# Rig Operation

This file defines the product-level operating rules for rigs.

The lore defines what a rig is in the world.

This file defines how a rig should behave as a game system.

The rig is the operating frame that makes dice usable.

It should not only be a container for dice slots.

It should shape how dice physics turn into playable strengths, limits, and risks.

## Operating Manual Principle

A rig should be readable as a machine with constraints.

The player should learn a small set of rig operating principles and use them to estimate whether a dice build will be controllable.

The rig can compensate for dice weaknesses, amplify dice strengths, or fail to support demanding dice.

The intended player thought is:

This die is strong, heavy, hot, fast, dirty, or guidance-hungry. Does this rig have the operating profile to handle it.

## Core Rig Properties

The first slice should define rigs through these properties:

1. active slots
2. rig top speed
3. guidance strength
4. energy efficiency
5. field energy control
6. cooling capacity
7. heat tolerance
8. stability control
9. signature masking
10. rig perks
11. die manipulators

These properties should remain readable in Home before the player commits to a Hack.

## Active Slots

Active slots define how many dice can operate in the rig at the same time.

More slots increase build complexity and combination potential.

More active dice also increase energy load, guidance load, heat, signature, and failure surface.

Slot count is therefore power and risk at the same time.

## Rig Top Speed

Rig top speed is the highest shared operating speed the rig can drive across active dice.

Rig top speed interacts with die max speed.

The usable shared speed of a build is limited by the rig top speed and by the lowest die max speed among active dice.

A high-top-speed rig helps fast dice reach their purpose.

A low-top-speed rig can still be useful when it has good cooling, guidance, stability, or perks.

## Guidance Strength

Guidance strength describes how well the rig can magnetically hold and steer dice under load.

High guidance strength supports light fast dice, high-speed operation, and unstable materials.

Low guidance strength makes guidance-hungry dice harder to run safely.

When total guidance demand exceeds guidance strength, rig stability should fall or heat should rise.

## Energy Efficiency

Energy efficiency describes how much operating load the rig wastes while driving dice.

Good energy efficiency reduces energy loss from demanding dice.

This can make heavy, dense, or high-inertia materials more viable.

Example perk:

`Heavy material energy loss reduced by 20%.`

Energy efficiency should not erase mass as a tradeoff.

It should make a rig better suited to a class of build.

## Field Energy Control

Field energy control is the player's direct control over the active energy level of the rig's dice field.

It should read as a throttle or fader rather than as a one-time command.

The player can raise or lower the field energy level during relevant rig work.

Higher field energy should make the dice field stronger, more readable, or more capable of pushing a target machine's probability wave toward the player.

Higher field energy should also increase at least one operating pressure such as heat, instability, signature, red-zone proximity, body pressure, energy load, or damage risk.

Lower field energy should make the operation calmer and safer, but should reduce field strength, profit pressure, wave influence, or the ability to hold a favorable probability condition.

The field energy throttle is not the same as a die manipulator.

Die manipulators apply a selected effect to a selected die.

The field energy throttle changes the overall operating level of the active dice field.

The player should be able to read the current energy level and its likely consequences before and during Hack.

## Wave Sync

Wave sync is the act of aligning the rig's field rhythm with the target machine's probability wave before pushing hard for profit.

It should feel closer to beatmatching or overlaying two waveforms than to entering a password.

The player first reads the target machine's wave and the rig's current field wave.

Wave sync should always have an audible layer.

At the beginning of the sync step, the player hears two musical or rhythmic signals at once: one representing the target machine's probability wave and one representing the rig's field rhythm.

The player must bring those signals into matching speed and usable overlay, comparable to DJ beatmatching.

This audible sync requirement applies regardless of rig type, rig layout, or installed dice.

The player then brings those waves into usable alignment through field energy, shared speed, timing, stabilizing actions, or rig-supported controls.

The active rig can provide additional visual information that helps the player reach a synced state faster or with greater confidence.

Better rigs, upgrades, or tools may expose clearer visual phase, drift, beat, or wave alignment information.

The visual aid should support the audible sync problem rather than replacing it.

A good sync should make later pressure more efficient, make favorable windows more readable, or make the rig better able to amplify a positive machine wave.

A poor sync should make the hack noisier, less efficient, less predictable, or more dangerous.

Wave sync should not become a large separate simulation game that replaces the Home-to-Hack loop.

It should be a compact first step in rig work that establishes whether the rig is properly coupled to the machine before the player drives the dice field into a profitable range.

Blueprint simulation can teach or preview the expected wave shape, but live sync may still differ when the blueprint is stale, incomplete, or the machine behaves differently on site.

## Cooling Capacity

Cooling capacity describes how effectively the rig removes heat during operation.

High cooling capacity slows heat buildup or improves recovery from heat spikes.

Low cooling capacity makes dense, dirty, high-speed, or high-output dice more dangerous.

Cooling capacity should be especially readable before Hack because it determines how long a risky build can be pushed.

## Heat Tolerance

Heat tolerance describes how much thermal strain the rig can survive before its own operation becomes dangerous.

Cooling capacity affects how quickly heat rises.

Heat tolerance affects how much heat the rig can endure once it is present.

A rig can have strong cooling but poor tolerance, or weak cooling but rugged tolerance.

That distinction should remain readable if both properties are present.

## Stability Control

Stability control describes how well the rig keeps field behavior controllable when dice interact.

High stability control helps mixed or resonant builds remain readable.

Low stability control makes strong synergies more likely to tip into instability.

Stability control should interact with die material and field behavior rather than replacing them.

## Signature Masking

Signature masking describes how well the rig hides its operating trace during Hack.

High signature masking can reduce casino heat or signature pressure generated by strong field output.

Low signature masking makes powerful or dirty builds more visible.

Signature masking is not police heat protection by default.

Police heat belongs mainly to preparation, acquisition, and delayed darknet risk unless a later rule explicitly adds police trace behavior.

## Rig Perks

Rig perks are explicit modifiers that make a rig distinct.

They should be narrow, readable, and connected to rig operating properties.

A good rig perk changes a build decision without becoming a hidden exception.

Examples:

- heavy material energy loss reduced by 20%
- light dice guidance demand reduced by one tier
- heat buildup from dense field material reduced by 15%
- first heat spike each Hack is absorbed
- resonant dice instability rises more slowly
- dirty material signature reduced by one tier
- active die braking recovers stability faster

Perks should usually affect one clear force or one clear material family.

Perks should not make a rig universally better at everything unless the rig is intentionally a later high-end progression item.

## Die Manipulators

Die manipulators are active rig features that let the player apply an effect to a selected die during Hack.

They belong to the rig's equipment, manufacturer profile, upgrades, or modification history.

They are not universal actions that every rig automatically has.

The first interaction model is:

1. The player selects a manipulator mode from a small rig keypad.
2. The player clicks or taps an active die.
3. The selected manipulator effect is applied to that die.

The keypad should show only the manipulators currently available on the active rig.

Unavailable manipulators may be hidden or shown as locked only when that helps planning.

The first manipulator set is:

- accelerate
- brake
- cool

These manipulators are also the first named rig-function shop items.

Their balancing price should be authored as a factor first and converted into a round money price later by the Shopping App price scale.

Initial manipulator price factors are:

| manipulator | price factor |
| --- | ---: |
| accelerate | 1.0 |
| brake | 1.0 |
| cool | 1.5 |

The factor expresses relative opening value, not final money.

For example, a shop implementation may multiply the factor by a round base value such as `$100`, then adjust the base value during tuning.

Future manipulators and other shop items should also receive comparable price factors before final money values are locked.

### Accelerate

Accelerate pushes the selected die to spin faster for a short time or until the next state change.

It increases field output or response opportunity.

It also increases heat, energy load, instability, signature, or red-zone pressure.

Accelerate changes operating speed, not the die's permanent max speed.

If the selected die is currently the slowest active die and therefore limits shared rig speed, accelerate may temporarily let the build operate closer to that die's limit.

A stronger or upgraded accelerate behavior may briefly create an overdrive margin above normal safe operation, but that should sharply increase heat, instability, damage risk, or red-zone pressure.

This lets a fast second die such as Needle Glass make Loser's Die feel limiting until the player actively pushes Loser's Die or improves the rig.

### Brake

Brake slows the selected die.

It reduces heat buildup or lets the die cool.

It also reduces field output, profit pressure, and combination strength while the die is slowed.

### Cool

Cool applies a direct cooling effect to the selected die or its slot.

It reduces heat without necessarily reducing speed as strongly as braking.

It should cost a limited resource, create cooldown, consume rig energy, or increase another pressure so that it does not replace braking.

## First Slice Manipulator Scope

For the first slice, Loser's Rig has only the accelerate manipulator.

This makes Loser's Rig risky and simple.

The player can push for output, but cannot directly brake or cool through rig features unless later equipment adds those manipulators.

Brake and cool should exist as understandable future rig features, upgrades, or stronger rig identities.

The first build may still represent passive cooling or natural slowdown, but direct player-applied brake and cool are rig feature access, not universal baseline actions.

## Rig Compensation Rules

Rigs may compensate for dice weaknesses.

The compensation should be readable:

- cooling compensates for heat-prone dice
- guidance compensates for light fast or unstable dice
- energy efficiency compensates for heavy or high-inertia dice
- stability control compensates for resonant or complex combinations
- signature masking compensates for dirty high-output dice

Compensation should reduce a pressure, slow its growth, or increase tolerance.

It should not remove the underlying physical identity of the die.

## Rig Mismatch Rules

A rig may also be mismatched with a build.

Mismatch should be visible before or during Hack.

Examples:

- heavy dice on poor energy efficiency create high load
- light fast dice on weak guidance create instability
- dense field dice on weak cooling create heat danger
- dirty high-output dice on poor signature masking create casino heat pressure
- resonant dice on weak stability control create volatile synergy

Mismatch is important because it gives rigs identity.

The same die can be sensible in one rig and reckless in another.

## Loser's Rig Operating Identity

Loser's Rig is the first fallback rig.

It should be small, simple, familiar, and constrained.

For the first slice, Loser's Rig has two active die slots.

Its operating identity should be:

- low or modest top speed
- limited guidance strength
- limited cooling capacity
- modest stability control
- understandable behavior
- low strategic complexity
- reliable fallback availability

Loser's Rig should be able to run Loser's Die against simple targets.

It should not make demanding dice feel fully safe.

Its value comes from availability, familiarity, and baseline recovery rather than strong performance.

## Behavior Contract: Rig Build Fit

The player can judge whether a rig fits a dice build before starting Hack.

Acceptance checks:

- Each rig exposes active slots, top speed, guidance, cooling, stability, and any perks.
- Each rig exposes its field energy control range or throttle behavior.
- Each rig exposes its available die manipulators.
- The build view shows when installed dice create high energy load, high guidance demand, high heat pressure, or high signature pressure.
- A rig perk is visible before it affects the build.
- A rig perk clearly names the force or material family it modifies.
- A mismatched rig and dice build exposes at least one warning before Hack begins.
- A well-matched rig and dice build exposes at least one readable advantage before Hack begins.

## Behavior Contract: Rig Compensation

The rig can compensate for specific dice risks without making dice physics disappear.

Acceptance checks:

- Better cooling slows heat buildup or improves heat recovery.
- Better guidance improves stability for high-guidance-demand dice.
- Better energy efficiency lowers load pressure from heavy or high-inertia dice.
- Better signature masking reduces signature or casino-heat pressure from visible field output.
- Better stability control makes complex or resonant dice combinations safer.
- A compensation effect reduces or slows a danger state, but the original die tradeoff remains readable.

## Behavior Contract: Field Energy Throttle

The player can regulate the active energy level of the rig's dice field.

Acceptance checks:

- The active rig exposes a readable field energy throttle, fader, or equivalent control.
- Raising field energy visibly increases field strength, wave influence, profit pressure, or ability to hold a favorable probability condition.
- Raising field energy worsens at least one pressure state such as heat, instability, signature, red-zone proximity, body pressure, energy load, or damage risk.
- Lowering field energy visibly reduces at least one danger state or slows its growth.
- Lowering field energy also reduces field strength, profit pressure, wave influence, or the ability to hold a favorable probability condition.
- The player can read the current field energy level while making Hack decisions.
- Field energy control affects the overall dice field rather than only a single selected die.

## Behavior Contract: Wave Sync

The player can align the rig's field wave with the target machine's probability wave before driving for profit.

Acceptance checks:

- The Hack setup or early Hack state shows both the rig field wave and the target machine probability wave, or shows an equivalent overlay of their alignment.
- The Hack setup or early Hack state plays two distinguishable musical or rhythmic signals representing the rig field rhythm and target probability wave.
- The player can adjust speed, timing, or alignment until the two audible signals are synced or acceptably overlaid.
- The audible sync layer exists regardless of rig type, rig layout, or installed dice.
- The active rig may add visual sync information that makes alignment faster or clearer.
- The player can act to improve alignment before pushing the dice field into a stronger profit-driving range.
- Better alignment makes favorable probability windows more readable, more stable, more efficient, or easier to amplify.
- Poor alignment increases noise, inefficiency, instability, pressure, or missed timing.
- A stale or incomplete blueprint can cause the live target wave or machine interface to differ from the simulated expectation.
- Wave sync remains a compact operational step and does not replace the main Hack pressure loop.

## Behavior Contract: Die Manipulator Keypad

The player can apply rig-specific die manipulation through a keypad-and-target interaction.

Acceptance checks:

- During Hack, the active rig exposes a small manipulator keypad.
- Selecting a manipulator mode makes that mode visibly active.
- Clicking or tapping an active die applies the selected manipulator to that die.
- The keypad contains only manipulators available on the active rig, or clearly marks unavailable manipulators as locked.
- Accelerate increases selected die speed or output and worsens at least one pressure state.
- Brake reduces selected die speed and improves heat or instability while reducing output.
- Cool reduces selected die heat and consumes a visible cost, cooldown, charge, energy, or pressure tradeoff.
- Loser's Rig exposes accelerate as its only direct die manipulator in the first slice.
