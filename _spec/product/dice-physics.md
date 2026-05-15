# Dice Physics

This file defines the first product layer for material-driven die behavior.

Algorithm-facing property effects and tuning rules are defined in [Dice Effect Model](./dice-effect-model.md).

The goal is not full physical simulation.

The goal is a small set of physical principles that the player can learn, estimate, and combine.

Dice material should communicate how a die behaves under rig operation.

The player should be able to think in simple causal rules such as:

- heavier dice create stronger fields but cost more energy
- lighter dice spin faster but need stronger guidance
- hotter dice are more likely to be damaged
- high inertia makes a die steady but slow to react

## Core Physical Forces

The first slice should use these core forces for dice material behavior:

1. mass
2. inertia
3. max speed
4. field generation
5. heat buildup
6. damage tolerance
7. response speed

These forces may be represented numerically, as labeled tiers, or through clear UI language.

They should remain few enough that the player can estimate a build without solving a hidden spreadsheet.

Quality is a separate die value.

It describes how well-made, well-preserved, and cleanly running the die is as an object.

It should correlate with price more directly than the physical forces do.

Low quality usually means rough operation, hidden defects, poor fit, unstable behavior under speed, or increased demand on rig support.

High quality usually means the die runs cleaner, holds guidance better, and can be pushed with less unwanted wobble, ejection, or cross-load.

Quality should not replace the physical forces.

It is a price-and-condition axis that modifies how safely those forces can be used.

Signature profile is handled as an algorithm-facing operational property in the Dice Effect Model.

It is not one of the core physical forces, but it should be exposed when it materially affects suspicion, casino heat, police heat, or target traceability.

## Mass

Mass describes how much physical substance the die brings into the field.

Higher mass usually increases field generation.

Higher mass also increases energy demand and spin-up burden.

Lower mass usually allows higher max speed and faster response.

Lower mass usually creates weaker raw field generation.

## Inertia

Inertia describes how strongly the die resists changes to its rotation and field state.

Inertia is a separate die property from mass.

It may correlate with mass, but it is not the same property.

Implementation may author inertia directly or derive it from material-family behavior.

High inertia makes a die steadier under pressure.

High inertia also makes the die slower to brake, correct, or retune in response to target-machine behavior.

Low inertia makes a die more responsive.

Low inertia also makes the die easier to disturb when guidance is weak.

## Max Speed

Max speed describes the highest rotation speed a die can safely tolerate.

Higher max speed allows stronger frequency-driven effects and faster field modulation.

Higher max speed does not automatically mean stronger raw field generation.

A low-mass high-speed die can be excellent for fast response while still producing a modest field.

## Guidance Demand

Guidance demand describes how much magnetic control the rig must provide to keep the die stable.

It is a derived operating value rather than an authored base die property.

The product should derive it from:

- quality
- max speed and current operating speed
- mass
- inertia
- material family
- current damage or defects
- active manipulator pressure

Low quality should usually be the clearest cause of unexpectedly high derived guidance demand.

Light or very fast dice often need strong guidance because they are easy to disturb at high speed.

Heavy dice may also need strong guidance because their mass creates larger control loads.

If guidance demand exceeds what the rig or slot can provide, rig stability falls and heat or instability rises.

## Field Generation

Field generation describes the raw strength of the die's probability field under load.

Heavy or dense materials usually create stronger field generation.

Fast materials may create useful modulation without matching the raw field strength of dense materials.

Field generation should be readable as power, not as guaranteed profit.

Stronger field generation should usually increase at least one pressure state such as heat, instability, signature, or red-zone proximity.

## Heat Buildup

Heat buildup describes how quickly the die becomes thermally dangerous under operation.

Heat rises from speed, energy demand, poor guidance, and field load.

Heat increases the risk of die damage, corruption, or temporary unusability.

Heat should be one of the clearest ways the player understands that a build is being pushed too hard.

## Damage Tolerance

Damage tolerance describes how much heat, strain, or unstable operation a die can survive.

High damage tolerance lets a die endure riskier operation for longer.

Low damage tolerance makes the die powerful only if the player protects it through cooling, guidance, lower speed, or shorter runs.

Damage tolerance should not erase the meaning of heat; it should change how much danger the die can absorb before consequences begin.

## Unbreakable Dice

Some dice have an unbreakable property.

An unbreakable die can still overload, fail, eject, lose sync, interrupt a hack, or create consequences.

The property means that overload does not permanently destroy the die as an inventory component.

Unbreakable dice are rare.

The property can exist outside Loser's Die, but it should be especially uncommon among strong, high-output, or high-value dice.

Unbreakable should not mean safe.

It should convert some permanent loss risk into disruptive failure, recovery cost, lost opportunity, or other immediate consequence.

For the first slice, Loser's Die has this property.

Loser's Die is defined in [Loser's Die](../dice/losers-die.md).

When Loser's Die is overloaded, it should jump out of its seating or stable suspension rather than being destroyed.

## Response Speed

Response speed describes how quickly the die can react to player action or target-machine changes.

High response speed helps when the player must brake, stabilize, retune, or exploit short opportunity windows.

Low response speed is acceptable for steady field pressure but risky when the target machine changes state quickly.

Response speed is shaped by mass, inertia, max speed, and guidance quality.

## Learnable Combination Rules

Material behavior should produce clear combination effects.

The player should be able to learn and estimate these relationships:

- high mass plus high field generation creates strong output with high energy and heat cost
- high max speed plus low mass creates fast modulation with weaker raw field power
- high inertia plus high field generation creates steady pressure but poor reaction to sudden target changes
- low inertia plus high max speed creates quick response but needs reliable guidance
- high derived guidance demand plus weak rig slots creates instability even if the die itself is valuable
- high heat buildup plus low damage tolerance creates a fragile high-risk die
- high damage tolerance plus high heat buildup creates a die that can be pushed, but not forever

## Material Families

The first slice should use a small number of material families rather than many narrow materials.

Each family should make one physical identity easy to read.

### Light Fast Material

A light fast material has low mass, high max speed, high response speed, and modest field generation.

It needs strong guidance at high speed.

Its clear use is fast reaction, modulation, and short opportunity windows.

### Dense Field Material

A dense field material has high mass, high field generation, high energy demand, and high heat buildup.

It reacts slowly.

Its clear use is strong pressure against targets that reward raw field strength.

### Stable Control Material

A stable control material has moderate mass, moderate speed, good damage tolerance, and low instability.

It is less spectacular but easier to operate.

Its clear use is safe composition, fallback builds, and stabilizing stronger risky dice.

### Resonant Material

A resonant material has strong pattern behavior.

It may amplify repetition, timing, or synergy effects.

Its clear use is combination play rather than raw power.

It should be readable through clear compatibility tags or field tendencies.

### Dirty High-Output Material

A dirty high-output material creates unusually strong or cheap field output with poor field purity.

It may raise heat, signature, instability, or police/shop risk.

Its clear use is short-term power at obvious consequence cost.

## Readability Rules

Dice material stats should be communicated in terms the player can reason with.

Useful labels include:

- light
- dense
- fast
- slow response
- strong field
- high derived guidance demand
- heat-prone
- durable
- fragile
- unbreakable
- resonant
- dirty

The UI should avoid hiding these forces behind opaque rarity or abstract item power alone.

If a material increases a risk, the player should be able to see which risk is affected.

If a material creates a synergy, the player should be able to estimate the synergy direction before testing it.

## Behavior Contract: Material Reasoning

The player can estimate a die's operational behavior from its material description.

Acceptance checks:

- Each die exposes material or material-family information.
- Each material family has a readable strength and tradeoff.
- Heavy or dense dice visibly tend toward stronger field generation and higher energy or heat cost.
- Light or fast dice visibly tend toward higher speed or response and higher derived guidance demand.
- Heat visibly increases die damage or corruption risk.
- If a die is unbreakable, the player can read that overload may eject or disrupt the die instead of permanently destroying it.
- High inertia visibly improves steadiness or pressure continuity but slows player correction.
- Weak rig guidance combined with high derived guidance demand visibly worsens stability or heat.
- The player can compare two dice and predict at least one major operational difference before running a hack.

## Behavior Contract: Combination Clarity

The player can combine dice material forces and read the likely result.

Acceptance checks:

- A build with high raw field generation and weak cooling exposes heat danger before or during Hack.
- A build with light fast dice and weak guidance exposes instability before or during Hack.
- A build with stable control material reduces at least one danger state or makes it rise more slowly.
- A build with resonant material exposes at least one clear compatibility or pattern effect.
- A build with dirty high-output material exposes its immediate strength and its consequence pressure.
