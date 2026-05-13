# Build Definitions

This directory contains selectable build variants for implementation work.

It does not define the product by itself.

It defines alternative technical build paths that may be activated for a concrete build task.

## Reading Rule

Read `_spec` first.

Read a file in `_builds` only as an additional implementation guide for the current task.

If no build file has been explicitly selected, `_builds` remains inactive.

## Purpose

This layer exists so that the project can keep multiple technical build variants in parallel, for example:

- a web build
- a game engine build
- a prototype build
- an experimental architecture path

## Usage

When implementation work should follow a specific variant, the instruction should explicitly name the file, for example:

- use `_builds/web-react.md`
- use `_builds/godot.md`
- use `_builds/terminal-prototype.md`

## Expected Content of a Build File

A build file should usually define:

- the intended stack
- the implementation constraints
- the architecture direction
- the build scope
- build-specific agent instructions

## Current State

No concrete build variant is active by default.

Concrete build files may be added here progressively as the project develops.
