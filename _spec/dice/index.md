# Dice Directory

## Module Authority

This directory is the canonical source for individual die entries.

An individual die entry may contain the die's lore identity, player-facing content text, product tags, and first-slice usage meaning in one place.

This avoids maintaining separate duplicate definitions for the same die in lore and content files.

## Does Not Own

- general fate dice lore
- general dice physics rules
- rig operation rules
- shop system rules
- technical item data schema

## Depends On

- [The Dice](../lore/die.md)
- [Dice Physics](../product/dice-physics.md)
- [Product Definition](../product/index.md)
- [Content](../content/index.md)

## Exports

- canonical individual die entries
- current die property list
- current material-family list
- current readable die labels
- algorithm-facing die effect model

## Individual Dice

1. [Loser's Die](./losers-die.md)

## Current Die Properties

The current product-level die properties are:

1. mass
2. inertia
3. max speed
4. guidance demand
5. field generation
6. heat buildup
7. damage tolerance
8. response speed
9. signature profile
10. unbreakable

The first eight properties are general physical forces.

`signature profile` is an algorithm-facing operational property that describes how visible, dirty, or traceable a die's field is during Hack.

`unbreakable` is a rare special property rather than a normal material force.

It changes overload consequence from permanent destruction into disruptive failure, ejection, recovery cost, or lost opportunity.

## Current Material Families

The current material families are:

- light fast material
- dense field material
- stable control material
- resonant material
- dirty high-output material

Material families are defined in [Dice Physics](../product/dice-physics.md).

Algorithm-facing property effects are defined in [Dice Effect Model](../product/dice-effect-model.md).

## Current Readable Labels

Useful player-facing die labels currently include:

- light
- dense
- fast
- slow response
- strong field
- high guidance demand
- heat-prone
- durable
- fragile
- unbreakable
- resonant
- dirty
- quiet
- loud

## Entry Shape

Each individual die entry should usually contain:

1. status
2. module authority
3. lore identity
4. product identity
5. properties
6. first-slice behavior
7. player-facing content
8. out of scope
9. spec feedback

## No-Duplication Rule

When a die has an entry in this directory, that entry is the source for the die's specific identity and player-facing text.

Lore files may explain general world logic and link to the entry.

Product files may define general systems and link to the entry when they need the die's specific behavior.

Content files may link to the entry instead of duplicating die text.
