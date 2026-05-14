# Product Definition

## Definition

The product is a singleplayer systems game with a small scope.

It should first be defined as a vertical slice, not as a full large-scale production.

The first reliable product core is a repeatable structure of Home and Hack, framed by Start as the entry view and Catch as an exception view.

In this product specification, a phase is a gameplay step in the product flow, while a view is the UI representation through which such a phase is presented to the player.

## Product Form

In its first viable state, the product is:

- state-based
- systemic
- menu- and interface-driven
- atmospheric rather than abstract
- focused on build composition, risk, and consequence

It should not primarily be defined as a real-time action game.

It should also not primarily be defined as a freely explorable world.

## Core Player Action

The central player action is to configure an illegal probability rig and use that configuration to perform a risky hack against a target system.

The gameplay decision unit is not only the individual button press.

The actual decision unit is an operational configuration for the next hack.

Such a configuration includes at minimum:

- selection and arrangement of dice
- selection or modification of rig modules
- choice of a target system
- deliberate acceptance of a risk profile

## Vertical Slice

The first implementable vertical slice should prove that the product fantasy works as a game system.

It should specifically show:

- that dice are understandable and gameplay-relevant as real modules
- that rig construction produces meaningfully different hack outcomes
- that profit always remains coupled to instability, suspicion, or damage
- that the multi-day cycle creates readable tension

## First Binding Scope Boundary

The first vertical slice should not require an open world, a large story campaign, or a complex infiltration simulation.

The slice should prove the core product logic with limited content.

The first slice should therefore include at its core:

- a Start view that leads into the current playable state
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

## Game State

The game state should keep at least these layers visible and mutable:

- player state
- rig state
- dice state
- external pressure

### Player State

The player state includes at minimum:

- money
- suspicion
- strain or stress
- available knowledge or access
- day progression

### Rig State

The rig state includes at minimum:

- rig model
- available slots
- top speed
- whether it is protected as the player's fallback rig
- energy or load level
- stability
- cooling or thermal strain
- signature or traceability

### Dice State

Each die should be describable at minimum by:

- type
- field behavior
- probability bias
- max speed
- risk
- relationship to other dice
- whether it is protected as the player's fallback die

### External Pressure

External pressure includes at minimum:

- pressure from casinos or operators
- police attention
- market and supply conditions
- quality of available contacts or sources

## Dice Rule

Dice must not be only passive stat bonuses.

A die should be defined as a rule-active component that produces field behavior and shapes other states.

A die can therefore, among other things:

- reinforce tendencies
- encourage repetition
- build instability
- influence adjacent dice
- tip into corrupted states

The product identity depends on dice remaining readable as active probability modules.

## Shared Rig Speed Rule

A rig operates all active dice at one shared rotation speed.

The rig's top speed defines the highest shared speed the rig can drive.

Each die's max speed defines the highest rotation speed that die can safely tolerate.

The maximum usable shared speed of a build is limited by the rig's top speed and by the lowest max speed among installed active dice.

A die can operate below its max speed.

Shared speed affects field output, heat, instability, signature, and pressure generation.

### Shared Speed Constraint

The player configures dice under a shared rig speed constraint.

Acceptance checks:

- The rig state exposes top speed.
- Each die exposes max speed.
- Installing a die with lower max speed can lower the build's maximum usable shared speed.
- Increasing shared speed increases field output.
- Increasing shared speed also increases at least one pressure state such as heat, instability, signature, or red-zone proximity.
- A high-max-speed die reaches its potential only when the rig top speed and the rest of the installed dice support that speed.
- A low-max-speed die can still be valuable when its field behavior or stability profile fits the build.

## Fallback Die Rule

The product should give the player one permanent fallback die.

For the first slice, this fallback die is Loser's Die.

Loser's Die remains in the player's inventory across all outcomes.

The permanence of Loser's Die is a product-level continuity rule.

The fallback die ensures that the player can always return to a small viable hack loop after damage, loss, collapse, or poor play.

The fallback die should support modest earnings against simple target machines.

It should preserve the possibility of recovery without making stronger dice, riskier builds, or progression irrelevant.

Other dice may be damaged, lost, corrupted, or otherwise removed from practical use by hack consequences.

Loser's Die is the baseline component that remains after those consequences.

### Fallback Die Recovery

The player can always recover into a small viable hack loop with Loser's Die and Loser's Rig.

Acceptance checks:

- After any hack result, Loser's Die remains in the player's inventory.
- After any hack result, Loser's Rig remains available.
- If all other practical dice are damaged, lost, or unusable, the player can still equip Loser's Die.
- Loser's Rig can run with Loser's Die.
- At least one simple target machine remains viable for Loser's Die.
- Successful fallback runs produce modest earnings.
- Fallback runs preserve recovery without matching the earning potential or strategic depth of stronger builds.

## Home Definition

In the first product definition, Home is not only a thematic location.

It is the central operating interface of the game.

Inside Home, the computer is the dominant visible element.

Within Home, the player uses a small set of computer apps as the main operating tools for the next decision.

These apps should include at minimum:

- the Rigging App
- the Targeting App
- the Shopping App

The first slice does not need to present a large navigable apartment.

It should instead present Home through the operating presence of the room, with the computer and rig area carrying most of the visible interaction weight.

## Target Selection Definition

For the first product slice, target selection should be represented primarily as a list of individual slot machines with different difficulty levels.

The casino around them may exist as framing fiction or decorative presentation, but the actionable target in the first slice is the machine, not the full venue.

From the Targeting App in Home, the player selects which machine the next hack will target.

That choice defines the next operational objective and the machine to which the portable rig will later be attached on site.

The first target set should include a simple low-yield slot machine that can be attacked with Loser's Rig and Loser's Die.

This simple target should provide a reliable recovery path with limited profit and limited strategic depth.

## Shopping App Definition

The Shopping App is part of the Home decision layer.

It is the place where the player can spend money to acquire or improve operational tools before the next hack.

The first slice Shopping App should support at minimum:

- buying dice
- buying upgrades
- buying die modifications

The Shopping App should therefore express progression through equipment access rather than through abstract unlock language alone.

Additional rig models may be introduced later, but the first slice does not require rig shopping.

## Hack Definition

In the first product definition, Hack is not primarily a freely unfolding action sequence.

Hack is the product view in which the home-built configuration is physically deployed onto a target machine and then played against that target system through an intensified operational interface.

Its outcome should not feel arbitrary.

It should be understandable as a readable consequence of build, target choice, load, risk, and variance.

The first implementation direction for Hack should be a pressure console built around escalating reward-versus-risk decisions rather than around expensive object animation.

The player should understand that Riggs is standing at or near the machine, operating through AR-assisted telemetry while the view presents an enlarged and manipulable rig representation for readability.

## Catch Definition

Catch is not a standard progression step of the normal loop.

It is the exception view that appears when the player crosses a boundary severe enough to trigger direct response, exposure, or capture pressure.

## Failure

Failure is not only money loss.

Failure can also mean:

- damaged dice
- rig defects
- escalating suspicion
- loss of access
- forced interruption of the next hack
- catastrophic collapse of a configuration

Failure consequences may affect all practical dice except Loser's Die.

Failure consequences may affect other rig equipment while Loser's Rig remains available.

## Progression

Progression is not only wealth accumulation.

Progression includes at minimum:

- access to new dice types
- access to better or riskier modules
- deeper understanding of field logic
- access to more demanding target systems
- growing operational reach paired with higher risk

## Presentation Rule

The interface should not hide the systemics behind generic number panels.

The rig should be visible and readable as the central object.

Dice, slots, load, instability, and signature should appear as part of a diegetic technical operating world.

In Hack, the target machine and the rig representation should be shown together so that the player can read both the physical subject of the attack and the internal state of the deployed machine.

## Open Refinements

The following points remain open for now, but from this point onward they should be treated as explicit refinement axes:

- how granularly Hack is shown step by step
- how strongly the field logic is exposed numerically
- how exactly stress, suspicion, and access are coupled
- what minimum number of dice and target archetypes the first slice needs
