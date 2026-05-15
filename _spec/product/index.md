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

Its primary product form is a state-based systems game in which planning, configuration, and consequence carry the main decision weight.

Real-time pressure may appear inside Hack, and spatial fiction may support the views, but those elements serve the systems loop rather than replacing it.

## Core Player Action

The central player action is to configure an illegal probability rig and use that configuration to perform a risky hack against a target system.

The gameplay decision unit is not only the individual button press.

The actual decision unit is an operational configuration for the next hack.

Such a configuration includes at minimum:

- selection and arrangement of dice
- selection or modification of rig modules
- choice of a target system
- deliberate acceptance of a risk profile

## Product Modules

The first vertical slice scope is defined in [Vertical Slice](./vertical-slice.md).

The game loop and view sequence are defined in [Game Loop](./game-loop.md).

Product-level game state is defined in [Game State](./state/index.md).

Persistent global resources are defined in [Global Resources](./state/global-resources.md).

The persistence boundary between global resources and live operational pressure is defined in [State Persistence Boundary](./state/persistence-boundary.md).

Catch count, Catch triggers, run ending, and first-slice scoring are defined in [Catch and Run End](./state/catch-and-run-end.md).

Home as the central preparation view is defined in [Home](./home.md).

Target selection is defined in [Target Selection](./target-selection.md).

Shopping is defined in [Shopping App](./shopping-app.md).

## Dice Rule

Dice must not be only passive stat bonuses.

A die should be defined as a rule-active component that produces field behavior and shapes other states.

The first slice should make dice understandable through a small set of learnable physical forces.

Those forces are defined in [Dice Physics](./dice-physics.md).

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

Loser's Die is defined in [Loser's Die](../dice/losers-die.md).

Loser's Die remains in the player's inventory across all outcomes.

The permanence of Loser's Die is a product-level continuity rule.

Loser's Die has the unbreakable property.

When it is overloaded, it should jump out of its seating or stable suspension rather than being permanently destroyed.

The fallback die ensures that the player can always return to a small viable hack loop after damage, loss, collapse, or poor play.

The fallback die should support modest earnings against simple target machines.

It should preserve the possibility of recovery without making stronger dice, riskier builds, or progression irrelevant.

Other dice may be damaged, lost, corrupted, or otherwise removed from practical use by hack consequences.

Loser's Die is the baseline component that remains after those consequences.

This protection is intentionally narrow.

It prevents an unrecoverable volatile state, but it does not protect profit level, strong equipment, target access beyond the fallback path, or the consequences of risky play.

### Fallback Die Recovery

The player can always recover into a small viable hack loop with Loser's Die and Loser's Rig.

Acceptance checks:

- After any hack result, Loser's Die remains in the player's inventory.
- When Loser's Die is overloaded, it ejects or disrupts the operation instead of being permanently destroyed.
- After any hack result, Loser's Rig remains available.
- If all other practical dice are damaged, lost, or unusable, the player can still equip Loser's Die.
- Loser's Rig can run with Loser's Die.
- At least one simple target machine remains viable for Loser's Die.
- Successful fallback runs produce modest earnings.
- Fallback runs preserve recovery without matching the earning potential or strategic depth of stronger builds.

## Hack Definition

Hack is the product view in which the home-built configuration is physically deployed onto a target machine and then played against that target system through an intensified operational interface.

Hack is the product view most closely associated with Lucky Smith as Riggs's illegal operating identity.

Its visual expression may differ noticeably from Home.

Compared with Home, Hack may be wilder, sharper, more unstable, and more visibly pulled toward pressure, risk, and illegal momentum.

Its outcome should not feel arbitrary.

It should be understandable as a readable consequence of build, target choice, load, risk, and variance.

The first implementation direction for Hack should be a pressure console built around escalating reward-versus-risk decisions.

Freely unfolding action sequencing and expensive object animation are outside the required first-slice scope because the first build must prove readable cause and effect between build, pressure, greed, cash-out, and consequence.

The player should understand that Riggs is standing at or near the machine, operating through AR-assisted telemetry while the view presents an enlarged and manipulable rig representation for readability.

## Catch Definition

It is the exception view that appears when the player crosses a boundary severe enough to trigger direct response, exposure, or capture pressure.

Catch sits outside the standard Home-to-Hack progression loop so that severe boundary violations remain exceptional consequences rather than a normal daily step.

## Failure

Failure can mean money loss and also:

- damaged dice
- rig defects
- escalating suspicion
- loss of access
- forced interruption of the next hack
- catastrophic collapse of a configuration

Failure consequences may affect all practical dice except Loser's Die.

Failure consequences may affect other rig equipment while Loser's Rig remains available.

## Progression

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
- how exactly body pressure, suspicion, and access are coupled
- what minimum number of dice and target archetypes the first slice needs
