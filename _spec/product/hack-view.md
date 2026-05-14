# Hack View

## Definition

The first Hack view should be built as a pressure console rather than as a spectacle-driven animation scene.

Its purpose is to create stress, greed, and risk judgment through readable system pressure.

The core emotional question of the view is:

Should the player keep pushing for more profit, or cash out and leave safely before control collapses.

## Prototype Direction

For the first prototype, the Hack view should not depend on complex physical animation, realistic spinning dice presentation, or explosive simulation as the primary source of tension.

The first prototype should instead create tension through:

- escalating risk
- short decision windows
- competing priorities
- visible cause and effect
- the constant possibility of voluntary exit

## Core Tension Rule

Profit potential should rise together with operational risk.

A safer run should usually produce smaller gains.

A greedier run should expose the player to stronger chances of damage, trace, instability, or collapse.

The player should therefore feel that more reward is usually still possible, but never free.

## Core Decision Rule

The Hack view should repeatedly force the player to choose between:

- stabilizing the run
- pushing the run harder
- taking a smaller but safer outcome
- aborting before a worse failure occurs

The player should not be able to maximize all desirable outcomes at once.

A meaningful hack is one in which pressure creates tradeoffs.

## View Form

The first Hack view should be primarily interface-driven.

It should present the target machine as the current operational subject together with a large manipulable rig representation that exposes the deployed rig's active internals.

The target machine and the rig representation should share the view at the same time rather than replacing one another.

The target machine should communicate the physical site of the hack.

The rig representation should carry most of the readable system interaction weight.

This can be read as AR-assisted perception from Riggs's point of view even when the interface scales the rig larger than its literal physical size.

Riggs should feel physically present at the machine while the player receives an expanded operational picture.

It should feel live, compressed, and dangerous, but still readable.

## Minimum Visible State

The first Hack view should keep at minimum these live elements visible:

- the target machine or target state
- the deployed rig representation with visible dice slots and module states
- current profit or extractable gain
- current risk pressure
- current red-zone proximity
- current pulse or body-control pressure
- rig instability and/or heat
- available immediate actions
- an explicit safe-exit or cash-out option

## Red Zone Rule

The red zone should be the main visible danger threshold of the view.

It is the point at which the operation is close to slipping out of control.

Remaining near that threshold may improve gain potential, but it should also sharply raise the chance of failure or damage.

The player should understand that surviving near the red zone can be profitable, but staying there too long is reckless.

## Body Pressure Rule

The Hack view should not treat bodily stress as flavor only.

Pulse, breathing control, or a comparable body-pressure signal should participate in the operational state.

If body pressure rises too far, mistakes, instability, or loss of control should become more likely.

This does not require a realistic biometrics simulation.

It requires only that body control be legible as one of the pressures the player is managing.

## Action Model

The first prototype should use a small set of immediate actions rather than a broad command space.

These actions may include functions such as:

- applying rig die manipulators
- cooling or bleeding heat where the active rig supports it
- masking signature
- pushing yield
- stabilizing a channel
- regulating breath or pulse
- aborting the run

The exact action names may still change.

The important point is that the player has a compact action set with clearly different risk intentions.

Rig die manipulators should use a keypad-and-target interaction.

The player selects a manipulator mode from the active rig's keypad and then clicks or taps the target die.

The first manipulator modes are accelerate, brake, and cool, but the available set depends on the active rig.

For the first slice, Loser's Rig exposes only accelerate.

## Timing Model

The Hack view should operate in short live decision intervals.

It does not need to be twitch-action, but it should feel time-pressured.

A good first prototype can therefore use repeated short ticks, pulses, or event windows in which state changes and the player must respond.

## Build Expression Rule

The player build prepared in Home must visibly shape the Hack view.

The hack should not feel like the same minigame regardless of loadout.

Different rigs, dice, and modifications should change at minimum:

- what kinds of pressure rise fastest
- what opportunities appear
- how safely profit can be pushed
- which failures are most likely

## Prototype Presentation Rule

For the first prototype, presentation should rely on interface rhythm rather than expensive effects.

Suitable presentation tools include:

- warning color escalation
- compressed timers
- blinking thresholds
- short layout jolts
- signal noise
- temporary information pressure

The composition may place Riggs and the machine on one side and the enlarged rig operating surface on the other side if that helps preserve both physical context and clear manipulation space.

The prototype should not require elaborate 3D object behavior in order to feel stressful.

## Success Condition

The first Hack view is successful when the player can clearly feel:

- that pushing longer can earn more
- that pushing longer can also ruin the run
- that cashing out early is sometimes the smart choice
- that the build prepared in Home shaped what happened

If those feelings are present, the first prototype is doing its job even without advanced animation.

## Behavior Contracts

The following contracts declare first-slice Hack functions through observable behavior.

### Push Yield

The player can push the active hack for stronger profit during Hack.

Acceptance checks:

- When the player pushes yield, current profit or extractable gain rises visibly.
- Repeated yield pushes increase at least one pressure state such as risk, heat, instability, signature, red-zone proximity, or body pressure.
- A greedier push creates a stronger chance of damage, suspicion, instability, or collapse than a safer action.
- The player can read which pressure became worse after the push.

### Cash Out

The player can voluntarily end the active hack before control collapses.

Acceptance checks:

- A cash-out action is visible during Hack.
- When the player cashes out, the hack ends and its result carries into the next Home phase.
- Earlier cash-out usually produces a smaller but safer outcome than staying under pressure.
- Cashing out near the red zone can still carry consequences from the pressure already accumulated.

### Stabilize Channel

The player can spend an action window to make the active operation more controllable.

Acceptance checks:

- When the player stabilizes a channel, at least one danger state improves or rises more slowly.
- Stabilizing trades immediate profit potential for control.
- Stabilizing is most valuable when pressure is already visible.
- The player can read the tradeoff between immediate safety and immediate gain.

### Regulate Body Pressure

The player can actively reduce pulse, breathing pressure, or a comparable body-control state during Hack.

Acceptance checks:

- Body pressure is visible during Hack.
- When the player regulates body pressure, that state improves or rises more slowly.
- Improved body pressure reduces the chance of mistakes, instability, or loss of control.
- Regulating body pressure competes with more profitable or more technical actions.

### Rig Die Manipulation

The player can apply a rig-supported manipulator to an active die during Hack.

Acceptance checks:

- A rig manipulator keypad is visible during Hack.
- The player can select an available manipulator mode.
- When the player clicks or taps an active die, the selected manipulator applies to that die.
- If accelerate is applied, the die speeds up or output rises and at least one pressure state worsens.
- If brake is available and applied, the die slows down, heat or instability improves, and output decreases.
- If cool is available and applied, the die heat improves and a visible cost, charge, cooldown, energy, or pressure tradeoff is consumed.
- Loser's Rig exposes accelerate as its only available die manipulator in the first slice.
