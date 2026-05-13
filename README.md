# Die Craft

> *A high-speed probability roguelite about engineered luck, unstable systems, and inevitable collapse.*

---

# Overview

Die Craft is a fast-paced roguelite system-builder in which the player purchases, upgrades, combines, and manipulates dice to generate increasingly absurd chains of probability-driven events.

At first, the game feels simple:

* roll dice
* earn currency
* buy better dice
* survive

But over time:

* roll speed accelerates dramatically
* builds become unstable
* synergies spiral out of control
* the player begins engineering probability itself

The game evolves from a casual dice simulator into a high-frequency chaos engine where optimization, greed, and instability compete against survival.

The player is not merely gambling.

The player is constructing a machine capable of collapsing under its own success.

Humanity in a nutshell, honestly.

---

# Core Vision

The game should feel like:

* a casino
* a stock market
* an idle game
* a bullet heaven
* a physics experiment
* a collapsing economy
* a cyberpunk probability engine

all at once.

The central emotional arc:

> "I learned how to manipulate luck."
>
> followed by:
>
> "I can no longer control what I created."

---

# Genre

* Roguelite
* Probability Builder
* System Simulation
* Incremental Action
* High-Speed Strategy
* Synergy Sandbox

---

# Pillars

## 1. Probability Manipulation

The player alters:

* dice distributions
* rerolls
* critical events
* chain reactions
* event frequencies
* reward scaling

Probability becomes a resource.

---

## 2. Emergent Synergies

The game should constantly create moments where:

* systems unexpectedly combine
* small bonuses become absurd
* interactions create new strategies

The player should frequently discover:

> "Wait... this actually works?"

---

## 3. Escalating Speed

The game accelerates continuously.

Example:

* early game: 1 roll/sec
* mid game: 20 rolls/sec
* late game: 1000+ rolls/sec

Speed creates pressure:

* information overload
* instability
* optimization challenges
* uncontrollable chains

---

## 4. Instability & Collapse

Power creates risk.

Every manipulation of probability increases:

* instability
* entropy
* corruption
* system stress

The player eventually approaches:

## TOTAL COLLAPSE

Collapse is not simply death.

It is:

* statistical failure
* chain implosion
* economic collapse
* corrupted probability
* runaway feedback loops

---

# Gameplay Loop

## Main Loop

1. Roll dice automatically
2. Generate rewards/effects
3. Defeat enemies/events
4. Earn currency/resources
5. Visit shop
6. Buy/upgrade/combine dice
7. Increase roll speed
8. Survive instability
9. Collapse
10. Restart with progression/meta unlocks

---

# Dice System

Dice are the core entities of the game.

Each die has:

* sides
* probability profile
* modifiers
* traits
* bonuses
* penalties
* rarity/classification
* instability value

Dice are not generic stat sticks.

Each die should feel unique.

---

# Example Dice

## Greed Dice

* +300% gold generation
* cannot roll above 3

---

## Entropy Dice

* gains power every minute
* slowly corrupts nearby dice

---

## Glass Dice

* extremely powerful rolls
* can permanently shatter

---

## Echo Dice

* repeats previous successful rolls
* increases delay between events

---

## Parasite Dice

* gains strength from destroyed dice
* reduces shop quality

---

## Quantum Dice

* side values constantly mutate
* may generate impossible outcomes

---

# Dice Categories

Avoid generic rarity systems.

Instead, classify dice by behavior.

## Suggested Classes

| Class     | Description                  |
| --------- | ---------------------------- |
| Stable    | Reliable and predictable     |
| Volatile  | High-risk spikes             |
| Corrupted | Dangerous side effects       |
| Ancient   | Rare rule-breaking mechanics |
| Synthetic | Artificially optimized       |
| Organic   | Evolves over time            |
| Broken    | Defective but exploitable    |
| Divine    | Statistically unfair         |

---

# Shop System

The shop is one of the most important systems.

The shop provides:

* random dice
* upgrades
* modifiers
* repair systems
* instability tools
* experimental artifacts

The shop itself becomes a source of randomness.

The player is constantly evaluating:

* risk
* synergy potential
* instability cost
* long-term scaling

---

# Upgrade Philosophy

Avoid boring upgrades like:

* +5 damage
* +10% speed

Prefer:

* rule changes
* conditional mechanics
* probability interactions
* systemic transformations

Good upgrades:

* "Even numbers trigger chain lightning"
* "Rolling a 1 duplicates another die"
* "Destroyed dice become ghost dice"
* "6s increase future instability"
* "Repeated values create combo multipliers"

---

# Instability System

Instability represents pressure placed on reality/probability.

Sources:

* excessive rerolls
* manipulated distributions
* corrupted dice
* recursive chains
* extreme speed
* impossible probability states

---

# Instability Effects

Low instability:

* minor glitches
* visual distortion
* inconsistent rolls

Medium instability:

* delayed events
* corrupted values
* side mutations
* UI noise

High instability:

* phantom rolls
* negative rewards
* chain failures
* random destruction
* paradox events

Critical instability:

## TOTAL COLLAPSE

---

# Collapse

Collapse is the climax of a run.

Potential collapse effects:

* economic implosion
* probability inversion
* chain overload
* system corruption
* catastrophic entropy spike

The player should feel:

> "I pushed the machine too far."

---

# Visual Direction

## Style

* minimalistic
* geometric
* cyberpunk-inspired
* neon accents
* dark background
* clean UI
* highly readable chaos

---

# Visual Themes

The game should gradually evolve visually:

## Early Game

* clean
* stable
* readable

## Mid Game

* dense
* energetic
* overloaded

## Late Game

* distorted
* corrupted
* reality breakdown
* statistical noise

---

# Audio Direction

Audio should scale with intensity.

## Early

* mechanical clicks
* subtle ambience

## Mid

* layered rhythmic systems
* synchronized events

## Late

* overwhelming cascades
* corrupted sounds
* unstable harmonics

The game should sound like:

> a machine trying to think too fast.

---

# Meta Progression

Potential long-term systems:

* permanent unlocks
* new dice archetypes
* new instability mechanics
* alternate collapse types
* shop manipulation
* probability research tree

---

# Technical Direction

## Recommended Stack

### Frontend

* React
* TypeScript
* Canvas/WebGL rendering
* Vite or Next.js

### Rendering

Prefer:

* PixiJS
  or
* custom canvas renderer

High roll counts require efficient rendering.

DOM-heavy rendering will die screaming at 1000 rolls/sec. Browsers are cooperative right until they suddenly become medieval peasants with torches.

---

# Performance Philosophy

The game should:

* simulate large event counts efficiently
* batch calculations
* aggregate effects visually
* avoid rendering every single event literally

At high speed:

* the player perceives patterns
* not individual rolls

---

# UI Philosophy

The UI should prioritize:

* clarity
* readable synergies
* controlled chaos
* rapid comprehension

Important:
The player must always feel:

> "The collapse was my fault."

Not:

> "The game cheated."

---

# Inspirations

Primary inspirations:

* Balatro
* Luck be a Landlord
* Dicey Dungeons
* Vampire Survivors

But Dice Collapse should feel more:

* systemic
* unstable
* philosophical
* machine-like

---

# Possible Future Features

* online seeded runs
* replay sharing
* build exporting
* collapse statistics
* probability heatmaps
* daily challenge seeds
* asynchronous leaderboard systems
* "forbidden" experimental dice

---

# Prototype Goals (MVP)

## Phase 1

* automatic rolling
* simple enemy/resource system
* shop
* 20 dice types
* instability meter
* basic collapse mechanic

---

## Phase 2

* visual effects
* synergy systems
* advanced shop logic
* scaling difficulty
* meta progression

---

## Phase 3

* massive speed scaling
* visual corruption
* deep build complexity
* advanced collapse systems
* content expansion

---

# Final Design Goal

The ideal player experience:

> Start with a single harmless die.
>
> End with a screaming probabilistic reactor consuming reality at 1400 rolls per second while the UI disintegrates under recursive quantum gambling logic.

Civilization simulator, basically.
