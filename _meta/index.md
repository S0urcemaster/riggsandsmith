# Spec Meta

This file defines how the specification is structured and how it should be read.

## Glossary

The dominant glossary for meta-level terms is [Glossary](./glossary.md).

Meta terms that become important, overloaded, or repeatedly reused across `_meta` should be stabilized there.

Behavior contracts are defined in [Behavior Contracts](./behavior-contracts.md).

## Core Principle

The specification must always be read as the currently valid description of the intended product.

It is not a draft snapshot. Even unresolved points are valid when they are explicitly marked as open decisions.

## Two Layers

The specification has two layers:

1. Meta specification
2. Domain specification

The meta specification defines how the specification works.

The domain specification defines the product itself.

## Build Definitions

Build definitions are a separate implementation layer beside the specification.

They do not define product meaning by themselves.

They define technical build direction for a selected implementation path.

Build definitions are inactive by default.

A build definition only becomes active when it is explicitly selected for build work.

An active build definition may refine:

- technology choices
- implementation constraints
- architecture direction
- delivery scope for a concrete build

An active build definition must not silently override domain meaning in `_spec`.

If a build definition suggests a direction that conflicts with `_spec`, that tension must be made explicit and resolved consciously.

## Validity and Change

Existing statements remain valid until they are explicitly replaced.

New statements should be understood as one of these:

- clarification
- sharpening
- extension
- replacement

Replacement must be explicit and clearly scoped.

## Stable Terms

Once a term has been defined, it keeps that meaning across the specification.

A term may only change meaning if that change is stated explicitly.

Avoiding ambiguity in term usage is a high-priority specification concern.

The specification should place strong value on minimizing overlapping, drifting, or context-dependent meanings for the same term.

If a term risks becoming ambiguous, its meaning should be stabilized explicitly instead of being left to local interpretation.

Terms that become important, overloaded, or repeatedly reused across files should be added to a glossary.

The glossary should serve as a central reference point for stable product terminology.

## Purpose

The specification should guide different agents and humans toward the same product direction with high reliability.

It should stay readable for humans and precise enough to minimize interpretation work.

## Statement Types

The specification uses these statement types:

- definition
- principle
- rule
- structure
- interaction
- behavior contract
- derivation
- open decision

## Reading Rule

Read the specification through its terminology, structure, and direction, not only sentence by sentence.

Use these priorities:

1. Definitions establish meaning.
2. Principles guide interpretation.
3. Rules define what is binding.
4. Structures and interactions express that binding form in the product.
5. Open decisions stay visible until they are resolved.

## Agent Behavior

Agents must treat the specification as the primary source of product truth.

They should:

- read terms in their defined meaning
- respect statement types
- make tensions explicit
- not silently resolve open decisions

## Language Rule

The specification should prefer positive, goal-directed language.

It should describe what applies, what should emerge, and what a structure is meant to achieve.

Negative or exclusionary wording is justified when it prevents a likely misbuild, resolves an observed ambiguity, protects a scope boundary, or distinguishes a defined term from a nearby term.

When such wording is used, the same section should make the intended positive direction readable.

An exclusion should not stand alone as product meaning if the intended buildable behavior can be stated directly.

## Domain Specification Shape

The domain specification should usually be organized in these layers:

1. DNA
2. Core elements and composition
3. Domain logic
4. Interaction
5. Presentation
6. Implementation

The exact file structure may vary as long as these layers remain recognizable.
