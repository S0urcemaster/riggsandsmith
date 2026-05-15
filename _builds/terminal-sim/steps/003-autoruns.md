# Step 003 Autoruns

## Purpose

Add batch simulation so the algorithm can be tested across many runs and longer play sequences.

## Depends On

- `_builds/terminal-sim/index.md`
- `_builds/terminal-sim/steps/001-foundation.md`
- `_builds/terminal-sim/steps/002-core-algorithm.md`
- `_spec/product/onboarding-and-first-fork.md`

## Inputs

- the terminal simulation foundation
- the first core algorithm
- selected builds, targets, and action strategies

## Task

Implement autorun support for repeated simulation.

Autoruns should support:

- a selected rig configuration
- a selected target machine
- a selected action strategy
- a run count
- optional seeded randomness
- summary metrics
- comparison between at least two configurations or strategies
- a fallback recovery scenario using only Loser's Rig and Loser's Die
- a first-fork comparison scenario for the first rig improvement, second die, and rig function opening

## Expected Output

- a command path for running batch simulations
- aggregate metrics for profit, collapse rate, cash-out rate, suspicion gain, damage, and variance
- readable output for comparing builds or strategies
- readable output for the fallback recovery scenario
- a short note about what the current algorithm appears to reward

## Out of Scope

- final game balance
- hidden tuning automation
- production analytics
- visual dashboards

## Spec Feedback

Record any ambiguity around:

- which metrics best represent a fun run
- which strategies should exist as baseline comparisons
- which dice behaviors create distinct long-run profiles
- whether any behavior contract should be sharpened after simulation evidence

## Completion Signal

This step is complete when another agent can run a batch simulation and compare at least two configurations over many hacks using reproducible settings.
