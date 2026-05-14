# Behavior Contracts

This file defines how product functions can be written as testable specification material with one source of product truth.

## Definition

A behavior contract is a compact product statement that declares a function through observable behavior.

It contains:

1. a short function statement
2. acceptance checks that describe what must be observable when the function exists

The acceptance checks are the testable form of the function itself.

## Purpose

Behavior contracts exist to keep functional declarations short, precise, and buildable.

They help future agents understand:

- what the product function is
- how the function should be recognized in a build
- which visible outcomes prove that the function was implemented in the intended direction

## Source of Truth Rule

When a behavior contract exists in the domain specification, it is product meaning.

The contract should be treated as the source declaration for that function.

Agents should keep product-level test meaning inside the behavior contract that declares the function.

## Acceptance Check Rule

Acceptance checks should describe player-observable or state-observable behavior.

They should prefer product-observable wording over implementation-only wording.

A good acceptance check usually starts from a player action, system event, or visible state change.

## Build Derivation Rule

Concrete automated tests may be derived from behavior contracts inside an active build path.

Those build tests may name tools, selectors, framework APIs, timing tolerances, fixtures, or implementation details.

They must remain derived from the behavior contract and preserve the product function it declares.

## Open Idea Rule

If a possible function is still exploratory, it should be marked as an open interaction idea.

Once written as a behavior contract, the function is part of the current product specification until explicitly changed.
