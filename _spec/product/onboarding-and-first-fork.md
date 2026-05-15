# Onboarding and First Fork

## Module Authority

This file owns the first playable flow before the normal run opens and the first meaningful equipment fork after the player's first successful hack.

It defines how the game moves from protected learning into real player control.

## Does Not Own

- detailed Home UI layout
- detailed Hack algorithm
- final shop item text
- final numeric item balance
- full tutorial scripting
- long-term progression economy

## Depends On

- [Game Loop](./game-loop.md)
- [Home](./home.md)
- [Target Selection](./target-selection.md)
- [Shopping App](./shopping-app.md)
- [Rig Operation](./rig-operation.md)
- [Dice Effect Model](./dice-effect-model.md)

## Exports

- protected onboarding flow
- first successful hack requirement
- first full-control Home entry
- first equipment fork
- root balancing requirement for first purchases

## Purpose

The game should not begin by punishing a new player for failing to understand the basic loop.

It should first teach:

- Home as the planning place
- blueprint simulation as a preview tool
- Loser's Rig and Loser's Die as the fallback build
- a simple first target
- cash-out as the basic success decision

After the first successful hack, the game should open into the first real strategic fork.

That fork is the first place where the player should start thinking like an optimizer.

## Protected Onboarding Flow

A new run should begin in a protected onboarding state.

The intended first sequence is:

1. Start leads into Home.
2. Home is introduced as the operating view.
3. A known blueprint or blueprint-like preview is shown.
4. The player is guided into the first simple target machine.
5. The player repeats that first target until they complete a successful basic hack.
6. Failed attempts during this protected sequence do not create lasting economic or run-ending punishment.
7. The first successful hack awards a small amount of money.
8. The player returns to Home with full control unlocked.

The onboarding state may still show pressure, failure, collapse, or missed opportunity.

Those failures should teach cause and effect, not damage the run.

The protected state should end only after the first successful hack result has been carried back to Home.

## Free First Steps Rule

The earliest failures are free in the sense of run continuity.

They should not permanently damage the fallback path, end the run, remove access to the first simple target, or create an unrecoverable resource state.

They may still:

- replay the first target
- show what went wrong
- withhold profit
- return the player to the guided setup
- require the player to try again

The player should be able to repeat the first simple target until they produce the first successful payout.

## First Full-Control Home Entry

The first normal Home entry occurs after the first successful hack.

At this moment:

- the player has a small amount of spendable money
- the Shopping App becomes meaningfully actionable
- the Targeting App and Rigging App become player-controlled rather than purely guided
- the next decision should be an actual build choice rather than only a tutorial continuation

This is the first point where the long-run match begins in a strategic sense.

## First Equipment Fork

The first shop fork should present a short list of affordable options.

The list should be small enough to compare directly.

The preferred first fork has three options:

1. a Loser's Rig improvement
2. a second die for the second slot
3. a rig function or manipulator upgrade such as `turbo`

The exact names may change.

The important structure is that each option should open a different root strategy:

- rig improvement: makes the fallback build safer, cleaner, faster, or more efficient
- second die: adds composition and slot-combination play
- rig function: adds active control and timing leverage during Hack

The first fork should not make one option the obvious correct answer.

It should make the player ask:

Which first improvement gives the best long-term run foundation for the way I want to play.

## First Fork Option Roles

### Loser's Rig Improvement

This option improves the starting rig without introducing a completely separate rig model.

It may improve one or more of:

- guidance strength
- cooling capacity
- energy efficiency
- stability control
- signature masking
- top speed

Its role is reliability.

It should make Loser's Die and future dice easier to run, but it should not create a new source of dramatic profit by itself.

### Second Die

This option gives the player another active component for the second slot.

It may be weak, specialized, risky, or incomplete, but it should make composition matter.

Its role is build expansion.

It should produce new field behavior and new tradeoffs rather than only increasing a single power number.

The preferred first second-die candidate is [Needle Glass](../dice/needle-glass.md).

Needle Glass should be cheap, fast, and fragile.

It teaches that dice can be damaged while still giving the player a useful early reason to care about the second slot.

Its early use case is pairing with Loser's Die: Needle Glass opens speed and response potential, while Loser's Die may still limit shared speed unless it is actively pushed or the rig is improved.

### Rig Function Upgrade

This option gives the player a new active tool during Hack.

For the first fork, this option should be framed as buying a Die Manipulator.

The first Die Manipulator shop set is:

- `accelerate`
- `brake`
- `cool`

If the starting rig already has `accelerate`, the shop may show it as owned, included, or available as an upgraded acceleration module.

It may later expand into functions such as `turbo`, a stronger acceleration mode, a cooling pulse, a masking pulse, or another compact manipulator.

Its role is active agency.

It should reward timing and judgment, but it should cost pressure, charge, cooldown, heat, signature, or opportunity.

If the option is `turbo`, it should mean a short burst of stronger die acceleration or field drive.

`turbo` should be powerful only for a limited window and should worsen at least one pressure state.

Manipulator opening prices should use the factor model defined in [Rig Operation](./rig-operation.md).

## Root Balancing Requirement

The first fork is root balancing for the whole run.

The three first options should be approximately equal in long-run value while creating different kinds of advantage.

They do not need identical expected value.

They should instead satisfy:

- each option can lead to a successful run
- each option has a readable weakness
- each option changes Hack behavior quickly enough that the player feels the choice
- each option creates a reason to replay and try a different opening
- none of the three options is always correct across all early targets and strategies

## Terminal Simulation Requirement

Terminal simulation should be able to test the first fork.

At minimum, batch runs should compare:

- first money spent on the Loser's Rig improvement
- first money spent on a second die
- first money spent on the rig function upgrade

Useful comparison metrics include:

- average money after a fixed number of hacks
- collapse rate
- casino heat gain
- police heat gain
- rig damage
- die damage
- target access after several hacks
- variance between cautious, balanced, and greedy strategies

If one first fork option dominates across most strategies and targets, the balance problem should be treated as a root balancing issue.

## Behavior Contract: Protected First Success

The player reaches the first real decision fork through a protected learning path.

Acceptance checks:

- A new player can fail the first simple target without ending or damaging the run.
- The first simple target remains available until the player succeeds.
- The player receives a small first payout after the first successful hack.
- Full Home control opens after the first successful payout returns to Home.
- The protected state ends before the first normal shop fork decision.

## Behavior Contract: First Fork Replay Value

The first post-onboarding purchase creates meaningful replayable strategy.

Acceptance checks:

- The first shop fork offers a small set of affordable options.
- At least three root strategies are represented: rig reliability, second-die composition, and active rig function.
- Each option has a visible benefit and a visible tradeoff.
- Each option changes at least one observable Hack or Home planning behavior.
- Autoruns can compare the three first options over repeated hacks.
- No option should be tuned as the universal best opening.

## Spec Feedback

Future shop-content work should define the exact first fork items and their prices.

Future terminal-sim work should add a first-fork autorun scenario.

Future tutorial work should decide how much of the first blueprint hack is guided interaction and how much is simulated preview.
