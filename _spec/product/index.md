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

## Vertical Slice

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

## Game State

The game state should keep at least these layers visible and mutable:

- player state
- rig state
- dice state
- external pressure

### Global Resources

The product should include game-global resources that persist across the Home-to-Hack loop and shape future options.

The first global resources are:

- money
- casino heat
- police heat

Money is the player's spendable operational resource.

It is gained or lost through hacks and spent in Home on dice, upgrades, and die modifications.

Casino heat is the degree to which Lucky Smith has become known, watched, or recognizable across casino operations.

It is not only a local alarm state for one hack.

It is a broader reputation and attention value that can restrict future access.

Casino heat is not the same as the rig's thermal heat.

When casino heat rises above a casino's tolerance threshold, that casino or category of casino should become unavailable as a safe or normal target choice.

A player with high casino heat may still find work, but increasingly through casinos or target conditions with higher risk, stronger attention, or worse safety margins.

Police heat is the persistent degree to which police attention has accumulated around Lucky Smith, John Riggs, his purchases, traces, and repeated illegal activity.

For the first product direction, police heat is a global resource rather than a personal John Riggs attribute.

It can be raised by suspicious preparation behavior, especially buying too many illegal or unusual things through darknet sources.

When police heat reaches its maximum, the player is caught by police and enters Catch.

For the first slice, John Riggs's ordinary identity is represented through view tone, equipment access, money, police heat, and consequence pressure.

This excludes a separate RPG-like character sheet for personal John Riggs attributes from the required first-slice scope, because police pressure currently carries the relevant ordinary-life exposure function.

### State Persistence Boundary

The product should distinguish persistent global resources from live operational pressure states.

Persistent global resources carry across Home, Hack, and later planning decisions.

Operational pressure states describe current or near-current danger during preparation or Hack execution.

Operational pressure states can convert into persistent consequences when a result is resolved, but they should not replace the global resources that carry long-term planning meaning.

This boundary keeps the game state from becoming volatile, where important consequence exists only inside one view, one app, or one unresolved Hack moment.

Acceptance checks:

- Money, casino heat, and police heat persist after Hack resolves into the next Home phase.
- Rig instability, thermal strain, signature, red-zone proximity, body pressure, and suspicion may change during Hack or preparation as operational pressure states.
- When an operational pressure state creates lasting consequence, that consequence is written into a persistent state before the next planning decision.
- A player can leave Hack and still read the lasting consequences that matter for the next Home decision.
- Every resolved game state preserves a viable fallback path made from Loser's Rig, Loser's Die, and at least one simple target.

### Global Resource Display

The product should provide a persistent global resource display across views.

Money, casino heat, and police heat should remain visible or immediately readable because the player needs them for planning.

This display is a product-level requirement, not only a Home app detail.

It may change visual treatment between Home and Hack, but it should preserve continuity of the same underlying values.

Acceptance checks:

- Money is visible or immediately readable in the main product views where planning or consequence reading occurs.
- Casino heat is visible or immediately readable in the main product views where planning or consequence reading occurs.
- Police heat is visible or immediately readable in the main product views where planning or consequence reading occurs.
- The player can compare current money against shopping or upgrade decisions without leaving the planning context.
- The player can compare current casino heat against target access or target risk without leaving the planning context.
- The player can compare current police heat against suspicious shopping or preparation decisions without leaving the planning context.
- When a hack result or preparation action changes money, casino heat, or police heat, the persistent display reflects the updated value before the next planning decision.
- The display can be adapted visually to each view's tone, but the player can recognize that it represents the same global resources.

### Police Heat Pressure

Police heat can be raised by preparation behavior that makes John Riggs's illegal activity more visible to police.

The Shopping App represents darknet acquisition.

All shop items therefore carry some degree of police risk.

Some items expose known police risk before purchase.

Some items expose unknown darknet risk before purchase.

Unknown darknet risk marks that the purchase is suspicious, but hides the exact police heat consequence until later.

Unknown-risk items are the Home-side form of gambling.

The player may buy an unknown-risk item because it could make the next run segment much more profitable, while knowing that the delayed police heat result may later create a police catch.

The intended decision question is:

Can this item make enough money before the risk comes due, and can the current catch count survive a bad police heat reveal.

For the first slice, unknown darknet risk resolves at the next Home entry after the following Hack resolves and before the player makes the next planning decision.

This timing makes the mistake belong to Home planning without turning Home into a complex investigation simulation.

Acceptance checks:

- Police heat is visible as a persistent player or external-pressure value.
- Buying too many illegal, rare, or suspicious items through darknet-like sources can increase police heat.
- Police heat consequences are tied to global operational exposure rather than to a separate John Riggs character attribute sheet.
- The player can read that aggressive preparation can create risk before the next hack begins.
- Shop items expose either known police risk or unknown darknet risk before purchase.
- Known-risk shop items expose their police heat consequence before purchase.
- Unknown-risk shop items show `unknown risk` instead of an exact police heat value.
- Buying an unknown-risk shop item creates a pending unknown darknet risk.
- Pending unknown darknet risk remains visible or immediately readable until it resolves.
- The player can compare pending unknown darknet risk against current catch count before committing to the next Hack.
- Unknown darknet risk resolves at the next Home entry after the following Hack resolves.
- When unknown darknet risk resolves, its police heat consequence is applied before the next planning decision.
- Resolving unknown darknet risk can trigger Catch if police heat reaches maximum.

### Catch and Run End

The run tracks how many times the player has been caught.

A catch occurs when casino heat reaches maximum or police heat reaches maximum.

Casino heat reaching maximum means the player is caught by casino security.

Police heat reaching maximum means the player is caught by police.

The first and second catches continue the run after consequences are applied.

The third catch ends the run.

When the run ends, the completed result is written to the highscore list.

For the first slice, run score is the total amount of money successfully extracted across the run.

Acceptance checks:

- Casino heat has a readable maximum threshold.
- Police heat has a readable maximum threshold.
- Reaching maximum casino heat sends the player to Catch as a casino-security catch.
- Reaching maximum police heat sends the player to Catch as a police catch.
- Each Catch increments catch count by one.
- Catch count remains visible or immediately readable after the run continues.
- After the first or second Catch, the heat value that caused the catch is resolved below maximum before the player returns to Home.
- The third Catch ends the run.
- A completed run creates or updates an entry in the highscore list with its run score.

### Casino Heat Access Pressure

Casino heat can push the player out of lucrative lower-risk casino options and toward higher-risk work.

Acceptance checks:

- Casino heat is visible as a persistent player or external-pressure value.
- Hack results can increase casino heat.
- Target choices expose whether a casino or machine is available under the current casino heat level.
- If casino heat exceeds a target's tolerance threshold, that target becomes excluded, locked, or marked as too watched for normal work.
- Higher-risk targets can remain available at higher casino heat levels.
- The player can read that becoming too known changes future target access rather than only affecting the current hack.

### Player State

The player state includes at minimum:

- money
- casino heat
- police heat
- suspicion
- available knowledge or access
- day progression

### Rig State

The rig state includes at minimum:

- rig model
- available slots
- top speed
- whether it is protected as the player's fallback rig
- energy or load level
- rig stability
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
- police heat
- market and supply conditions
- quality of available contacts or sources

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

Loser's Die remains in the player's inventory across all outcomes.

The permanence of Loser's Die is a product-level continuity rule.

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
- After any hack result, Loser's Rig remains available.
- If all other practical dice are damaged, lost, or unusable, the player can still equip Loser's Die.
- Loser's Rig can run with Loser's Die.
- At least one simple target machine remains viable for Loser's Die.
- Successful fallback runs produce modest earnings.
- Fallback runs preserve recovery without matching the earning potential or strategic depth of stronger builds.

## Home Definition

It is the central operating interface of the game.

Home also carries thematic location meaning, but in the first product definition its binding function is the operating interface where the next hack is prepared.

Home is the product view most closely associated with John Riggs as the ordinary working programmer.

Its visual expression may include clutter, pressure, and improvised technical density, but it should still feel comparatively adapted to normal life.

Home should therefore read as controlled, habitual, and lived-in even when it is chaotic.

Inside Home, the computer is the dominant visible element.

Within Home, the player uses a small set of computer apps as the main operating tools for the next decision.

These apps should include at minimum:

- the Rigging App
- the Targeting App
- the Shopping App

The first slice presents Home through the operating presence of the room, with the computer and rig area carrying most of the visible interaction weight.

A large navigable apartment is excluded from the required first-slice scope because it would add spatial exploration without proving the core Home-to-Hack systems loop.

## Target Selection Definition

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

## Shopping App Definition

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
