# Glossary

This file stabilizes dominant meta-level terms used across the specification framework.

Terms should be added here when they shape how the specification is read, changed, or interpreted across files.

## Meta Specification

Meta specification defines how the specification works.

It governs interpretation, structure, validity, and change behavior.

## Domain Specification

Domain specification defines the product itself.

It contains the currently valid product meaning unless a statement is explicitly replaced.

## Build Definition

A build definition is a separate implementation-layer definition beside the specification.

It may refine technical build direction for a selected implementation path, but must not silently override domain meaning in `_spec`.
