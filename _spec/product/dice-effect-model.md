# Dice Effect Model

## Module Authority

This file owns the algorithm-facing detail list for die properties and their Hack effects.

It translates readable dice physics into tunable effect channels that can drive the terminal simulation, later UI prototypes, and balance adjustments.

## Does Not Own

- individual named die identity
- general fate dice lore
- rig operation rules outside their interaction with die properties
- target-machine definitions
- final numeric balance for a specific build implementation

## Depends On

- [Dice Physics](./dice-physics.md)
- [Rig Operation](./rig-operation.md)
- [Hack View](./hack-view.md)
- [Dice Directory](../dice/index.md)
- [Game State](./state/index.md)

## Exports

- algorithm-facing die property list
- expected Hack effect channels per property
- tuning rules for balancing through simulation evidence
- behavior contracts for die effect balancing

## Purpose

Die properties should not be flavor labels only.

They are balance inputs for Hack.

When a die is installed in a rig and used against a target machine, its properties should help determine:

- profit pressure
- heat pressure
- instability pressure
- red-zone pressure
- signature and suspicion pressure
- body-pressure difficulty
- response to player actions
- collapse and damage consequences
- composition value with other dice
- price and quality pressure

The first algorithm may be simple, but it should keep these channels explicit so that a terminal simulation can expose balance problems and a later agent can tune the correct source.

## Scale Rule

Algorithm-facing die properties should use a small inspectable scale.

The preferred first-slice scale is `0` to `10`.

On this scale:

- `0` means absent or negligible
- `1` to `3` means low
- `4` to `6` means moderate
- `7` to `9` means high
- `10` means extreme and should create a clear build-defining behavior

An implementation may internally normalize values to `0.0` to `1.0`, but authored spec-facing values should remain easy to inspect and compare.

## Primary Hack State Channels

The first algorithm should expose at least these Hack state channels:

1. `profit`
2. `heat`
3. `instability`
4. `red_zone`
5. `signature`
6. `suspicion`
7. `body_pressure`
8. `collapse_risk`
9. `rig_damage`
10. `die_damage`

These channels should remain visible enough in the terminal simulation that balance failures can be traced to a property, rig support value, target value, or action effect.

## Property Detail List

### Mass

Mass is the die's physical substance in the field.

Primary positive effects:

- increases raw field output
- improves pressure continuity when paired with enough energy efficiency
- can stabilize weak field noise when guidance is sufficient

Primary negative effects:

- increases energy load
- increases spin-up burden
- can increase heat if cooling or energy efficiency is weak
- can increase guidance load when mass is high

Algorithm-facing effect channels:

- raises `profit` through output contribution
- raises `heat` through energy load
- may raise `instability` when rig guidance is below demand
- may lower action responsiveness when combined with high inertia

Tuning levers:

- `mass_output_weight`
- `mass_energy_load_weight`
- `mass_guidance_load_weight`
- `mass_response_penalty_weight`

Balance warning signs:

- If high-mass dice are always best, increase energy, heat, red-zone, or response penalties.
- If high-mass dice are never viable, lower their load penalties or raise dense-field payout situations.

### Inertia

Inertia is resistance to change in rotation and field state.

Primary positive effects:

- slows instability spikes
- makes output steadier across ticks
- helps sustain pressure when the target wave is not changing quickly

Primary negative effects:

- slows braking, cooling response, correction, and retuning
- makes mistakes harder to recover from
- makes sudden target changes more dangerous

Algorithm-facing effect channels:

- lowers passive `instability` growth under steady conditions
- lowers short-term variance in `profit`
- reduces effectiveness or speed of corrective actions
- increases `red_zone` recovery delay after aggressive pushes

Tuning levers:

- `inertia_stability_relief_weight`
- `inertia_action_delay_weight`
- `inertia_recovery_penalty_weight`
- `inertia_output_smoothing_weight`

Balance warning signs:

- If inertia feels invisible, increase its effect on correction speed or instability smoothing.
- If high-inertia dice feel purely bad, add stronger steady-output or anti-jitter value.

### Max Speed

Max speed is the highest shared operating speed the die can safely tolerate.

Primary positive effects:

- raises the ceiling for speed-based output
- enables fast modulation and short opportunity windows
- improves value in rigs with high top speed

Primary negative effects:

- creates a low build limit when max speed is low
- high speed can increase heat, signature, and red-zone pressure
- fast dice often require stronger guidance

Algorithm-facing effect channels:

- caps shared rig speed for the full active build
- shapes output by current speed ratio
- raises `heat` and `signature` when operated near the limit
- raises `collapse_risk` when speed pressure exceeds support

Tuning levers:

- `speed_output_curve`
- `speed_heat_curve`
- `speed_signature_curve`
- `low_speed_build_cap_penalty`
- `overspeed_risk_weight`

Balance warning signs:

- If the highest max-speed die is always best, make derived guidance demand, heat, or low field generation matter more.
- If low max-speed dice are always dead weight, give dense or stable dice stronger low-speed output roles.

### Derived Guidance Demand

Guidance demand is how much magnetic control the rig must provide to keep the die stable.

It is not an authored base die property.

The algorithm derives it from authored die values and current operating conditions.

The minimum derivation inputs should be:

- quality
- current speed ratio
- max speed
- mass
- inertia
- material family
- damage or defect state
- active manipulator pressure

Primary positive effects:

- high derived demand can justify strong output, high speed, low price, or unusual field behavior
- creates meaningful rig-fit decisions

Primary negative effects:

- creates instability when rig guidance is insufficient
- can raise heat through wobble and corrective load
- can make body-pressure mistakes more likely when the build is hard to hold

Algorithm-facing effect channels:

- compares against rig guidance strength and slot support
- raises `instability` by the unsupported guidance gap
- raises `heat` when the guidance gap is large
- may raise `body_pressure` because the operation is harder to keep steady

Tuning levers:

- `guidance_gap_instability_weight`
- `guidance_gap_heat_weight`
- `guidance_gap_body_weight`
- `guidance_support_relief_weight`

Balance warning signs:

- If guidance warnings do not predict bad runs, increase unsupported guidance penalties.
- If weak guidance instantly invalidates many dice, soften the gap curve or add partial rig compensation.

### Field Generation

Field generation is the raw strength of the probability field under load.

Primary positive effects:

- increases profit potential
- improves ability to push favorable target-machine moments
- makes greedy play more tempting

Primary negative effects:

- should usually increase at least one pressure state
- may raise signature because the field is more noticeable
- may raise red-zone pressure because the target is being pushed harder

Algorithm-facing effect channels:

- raises `profit` through output contribution
- raises `red_zone` through target pressure
- may raise `signature`
- may raise `heat` when paired with dense or dirty material

Tuning levers:

- `field_profit_weight`
- `field_red_zone_weight`
- `field_signature_weight`
- `field_heat_weight`
- `field_target_resistance_weight`

Balance warning signs:

- If profit scales without meaningful risk, raise red-zone, signature, or heat coupling.
- If strong-field dice collapse before they can matter, lower early pressure or add target windows that reward fast cash-out.

### Heat Buildup

Heat buildup is how quickly the die becomes thermally dangerous during operation.

Primary positive effects:

- heat-prone dice may justify stronger output, dirty output, or special effects
- creates value for cooling rigs, cool manipulators, and shorter runs

Primary negative effects:

- raises damage risk
- raises collapse risk
- can force earlier cash-out

Algorithm-facing effect channels:

- raises `heat` per tick based on speed, output, and cooling support
- contributes to `collapse_risk` above threshold
- contributes to `die_damage` when heat exceeds tolerance
- may contribute to `rig_damage` when total thermal pressure exceeds rig tolerance

Tuning levers:

- `heat_per_tick_weight`
- `heat_speed_multiplier`
- `heat_output_multiplier`
- `cooling_relief_weight`
- `heat_damage_threshold`
- `heat_collapse_weight`

Balance warning signs:

- If heat never creates hard decisions, lower thresholds or increase speed and output coupling.
- If heat makes long runs impossible for all builds, raise cooling relief, tolerance, or safe low-energy output.

### Damage Tolerance

Damage tolerance is how much heat, strain, or unstable operation a die can survive.

Primary positive effects:

- allows riskier pushes
- reduces permanent consequence pressure
- makes fragile and durable dice meaningfully different after repeated hacks

Primary negative effects:

- high tolerance should not remove collapse risk
- durable dice can still create rig damage, heat, signature, or lost opportunity

Algorithm-facing effect channels:

- raises threshold before `die_damage`
- lowers severity of damage after overload
- does not directly prevent `collapse_risk`
- can convert a dangerous run into survivable damage rather than inventory loss

Tuning levers:

- `damage_tolerance_threshold_weight`
- `damage_severity_divisor`
- `overload_consequence_weight`
- `durability_repair_cost_weight`

Balance warning signs:

- If durable dice are safe and profitable with no downside, increase their mass, heat, signature, cost, or slow response.
- If fragile dice are unusable, increase their output, response, stealth, or lower their exposure time.

### Response Speed

Response speed is how quickly the die reacts to player action or target-machine changes.

Primary positive effects:

- improves corrective actions
- improves timing-window exploitation
- helps recover from mistakes
- makes active play more valuable

Primary negative effects:

- fast response often pairs with light mass, high derived guidance demand, or lower raw output
- fast response may create more visible modulation or signature when pushed

Algorithm-facing effect channels:

- increases effectiveness of stabilize, brake, sync, and timing actions
- lowers delay before a manipulator effect applies
- reduces `red_zone` or `instability` recovery cost
- may improve profit from short target windows

Tuning levers:

- `response_action_effect_weight`
- `response_timing_window_weight`
- `response_recovery_weight`
- `response_signature_tradeoff_weight`

Balance warning signs:

- If response speed is only a UI label, make it change action deltas or event-window success.
- If high-response dice dominate, reduce their raw field output or raise derived guidance demand.

### Quality

Quality is the die's manufacturing, preservation, calibration, and running condition as a priced object.

It is a direct price-adjacent property.

A high-quality die should usually cost more than a low-quality die with similar physical forces.

Within a quality band, the shop may still contain good and bad offers.

This means quality should strongly influence price, but price should not perfectly reveal every offer's real value.

Primary positive effects:

- improves running smoothness under speed
- lowers derived guidance demand or slows guidance failure
- lowers wobble-driven heat and instability
- reduces ejection, rattling, misalignment, and cross-load events
- makes expensive rigs feel fluent when paired with good dice

Primary negative effects:

- low quality makes a die cheap for a reason
- low quality can destabilize an otherwise strong setup
- low quality can damage or endanger other installed dice through shared instability, bad suspension behavior, or violent ejection
- low quality may hide defects until the die is pushed under real Hack pressure

Algorithm-facing effect channels:

- modifies derived `guidance demand`
- modifies passive `instability`
- modifies wobble-driven `heat`
- modifies `die_damage` chance for itself and, in severe failures, adjacent or co-installed dice
- modifies `collapse_risk` when speed, guidance gap, or acceleration stress is high
- modifies shop price factor

Tuning levers:

- `quality_price_weight`
- `low_quality_guidance_penalty_weight`
- `low_quality_instability_weight`
- `low_quality_heat_weight`
- `low_quality_ejection_chance`
- `low_quality_cross_damage_weight`
- `quality_hidden_defect_chance`

Balance warning signs:

- If low-quality dice are always efficient bargains, increase guidance, instability, ejection, or cross-damage risk.
- If low-quality dice are never worth buying, lower their price factor or make some low-quality offers physically strong enough to tempt desperate play.
- If high-quality dice feel invisible, make smooth operation visibly reduce noise, warning spikes, or support pressure.

Design rule:

Low quality should usually imply higher derived guidance demand.

This may be shown directly in technical views or left partially discoverable through play, warnings, rattling behavior, ejections, or unexpected instability.

Late-game rule:

A cheap low-quality die should be able to make an expensive setup risky.

If the player is in a financial bind and buys a bad die for a high-end rig, the build may still become dangerous because the cheap die can add instability, overload guidance, eject violently, or damage other more expensive dice.

### Signature Profile

Signature profile is how visible, traceable, or dirty the die's field is under operation.

This is an algorithm-facing property even when the player-facing label is simply `dirty`, `clean`, `loud`, or `quiet`.

Primary positive effects:

- a high-signature die may offer unusually strong or cheap output
- dirty dice can support risky short-run builds

Primary negative effects:

- raises local suspicion
- raises casino heat after the hack
- may increase police or shop pressure when tied to illegal sourcing or corrupt materials

Algorithm-facing effect channels:

- raises `signature` per tick based on speed and output
- raises `suspicion` through target sensitivity
- raises persistent casino heat on cash-out or collapse
- may raise persistent police heat when the die is explicitly illegal or dirty enough

Tuning levers:

- `signature_per_tick_weight`
- `signature_speed_multiplier`
- `signature_output_multiplier`
- `signature_masking_relief_weight`
- `suspicion_conversion_weight`
- `casino_heat_conversion_weight`
- `police_heat_dirty_bonus`

Balance warning signs:

- If dirty dice are free power, increase suspicion conversion, casino heat, or collapse sensitivity.
- If dirty dice are never worth using, make their profit spike sharper or their danger more delayed.

### Unbreakable

Unbreakable is a rare special property.

It is not a normal physical force.

Primary positive effects:

- prevents permanent inventory destruction
- protects the fallback path
- allows recovery after bad play

Primary negative effects:

- still permits overload, ejection, disruption, lost opportunity, collapse, repair cost, or forced recovery
- should not make a die safe
- should not let the player ignore heat or instability

Algorithm-facing effect channels:

- converts permanent die loss into non-permanent consequence
- may set `die_damage` to temporary disruption instead of destruction
- may interrupt the hack immediately on overload
- may reduce profit or break sync when the die ejects

Tuning levers:

- `unbreakable_ejection_threshold`
- `unbreakable_profit_loss_weight`
- `unbreakable_recovery_cost`
- `unbreakable_sync_break_weight`

Balance warning signs:

- If unbreakable removes fear, make ejection, lost profit, rig damage, or heat carry-over harsher.
- If unbreakable still feels like permanent failure, reduce recovery cost or guarantee re-equipping at Home.

## Derived Build Checks

The algorithm should calculate these build checks before or during Hack:

1. `shared_speed_limit`: minimum of rig top speed and all active die max speeds.
2. `tier_fit`: whether the active rig is same-tier with the target machine, one tier below it, or outside normal viable capability.
3. `guidance_gap`: total or slot-level guidance demand beyond rig support.
4. `thermal_gap`: expected heat buildup beyond rig cooling and heat tolerance.
5. `field_output`: sum of die output after speed, damage, and support modifiers.
6. `signature_gap`: expected signature beyond rig masking and target tolerance.
7. `response_profile`: expected ability to correct, brake, retune, predict latency, or exploit windows.
8. `machine_play_window`: expected size, readability, stability, and bank-biased position of the target machine's favorable timing window.
9. `quality_risk`: expected instability, ejection, or cross-damage from low-quality dice under the planned speed.
10. `fallback_protection`: whether the build preserves Loser's Die or another protected fallback die.

These checks should feed both Home warnings and Hack behavior.

A warning that appears in Home should correspond to a real risk in the Hack algorithm.

## First-Slice Algorithm Skeleton

The first inspectable algorithm may use this shape:

1. Read active rig, active dice, target machine, current hack state, and selected player action.
2. Calculate speed ratios for each active die.
3. Calculate die output from field generation, speed ratio, damage penalty, and target resistance.
4. Calculate target machine tier fit, bank advantage, decision latency, and current probability-wave state.
5. Apply passive pressure from heat, guidance gap, signature, red-zone proximity, tier mismatch, and target volatility.
6. Apply the selected action as a visible delta.
7. If the action triggers the machine play cycle, resolve it at the effective moment after decision latency.
8. Apply rig support to the machine play phase through wave bias, timing-window width, stability, prediction clarity, or win-decision manipulation where the rig supports it.
9. Apply rig compensation from guidance, cooling, stability control, energy efficiency, and signature masking.
10. Convert high body pressure or instability into mistake chance.
11. Convert high pressure into collapse chance.
12. On cash-out or collapse, convert operational state into money, heat, damage, and consequences.

The algorithm should stay small enough that a failed autorun can be inspected by reading the state deltas.

## Tuning Protocol

When terminal simulation exposes a balance problem, future agents should tune in this order:

1. Identify the dominant failing outcome.
2. Identify the state channel that caused it.
3. Identify the die property, rig support value, target value, or action effect that mainly fed that channel.
4. Change the narrowest relevant tuning lever.
5. Re-run the same seed or autorun set.
6. Record the observed effect in build-local notes.
7. Update this file only when the product-level relationship changes or a tuning lever needs to become stable product guidance.

Agents should avoid balancing by changing unrelated rewards, hidden randomness, or broad collapse thresholds when the problem belongs to a specific property channel.

## Balance Metrics

Terminal simulation should be able to report at least:

- average profit
- profit variance
- collapse rate
- cash-out rate
- average casino heat gain
- average police heat gain
- rig damage rate
- die damage rate
- average run length
- dominant collapse reason
- per-property contribution summary where practical

These metrics should be compared across at least:

- Loser's Rig plus Loser's Die against the simple fallback target
- a high-field build
- a high-speed build
- a dirty high-output build
- a stable-control build
- a high-quality expensive build
- a low-quality bargain build

## First-Slice Balance Intent

Loser's Rig plus Loser's Die against the simple fallback target should:

- be viable for modest recovery
- produce limited profit
- rarely cause permanent loss
- still create visible pressure if the player pushes too long
- teach the core cash-out decision

High-field builds should:

- earn faster
- heat faster
- risk collapse or damage if pushed without cooling or stability

High-speed builds should:

- respond better to timing and correction
- need stronger guidance
- expose instability when run in weak rigs

Dirty high-output builds should:

- spike profit quickly
- create strong suspicion, signature, or heat
- reward short greedy runs while punishing repeated reckless use

Stable-control builds should:

- lower variance and danger
- produce less spectacular gains
- remain useful as support for risky dice

High-quality builds should:

- run smoother
- support higher usable speed
- reduce surprise instability
- cost enough that the player can be forced to compromise during financial pressure

Low-quality bargain builds should:

- be tempting when money is tight
- create visible or discoverable rough operation
- risk ejection, instability, or damage beyond the cheap die itself

## Behavior Contract: Tunable Die Effects

Die properties produce traceable Hack effects that can be tuned after simulation evidence.

Acceptance checks:

- Each algorithm-facing die property maps to at least one Hack state channel.
- Each Hack state channel influenced by dice can be traced back to one or more die properties.
- Each property has at least one named tuning lever.
- Quality affects both price expectation and at least one operational risk channel.
- Terminal simulation output exposes enough state deltas to identify why a run became profitable, dangerous, or collapsed.
- A balance change can be made by adjusting a narrow tuning lever rather than rewriting the whole Hack algorithm.

## Behavior Contract: Fallback Balance

The fallback build remains viable without becoming the best general strategy.

Acceptance checks:

- Loser's Rig plus Loser's Die can complete simple fallback hacks with modest positive outcomes under cautious play.
- Greedy play with the fallback build can still create collapse, lost opportunity, heat, or damage pressure.
- Stronger dice or better rigs can outperform the fallback build when matched properly.
- Failed or damaged non-fallback builds do not remove the player's ability to return to the fallback path.

## Spec Feedback

Individual dice entries should eventually include full algorithm-facing values for every property in this file.

Target-machine definitions should eventually expose which property profiles they reward or punish.

Rig definitions should eventually expose slot-level support where the difference between total rig support and per-slot support becomes important.
