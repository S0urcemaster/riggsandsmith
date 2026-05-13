# Step 001 Foundation

## Purpose

Establish the technical foundation for the web React build path so later product work can proceed with low friction.

## Depends On

- `_spec/index.md`
- `_builds/web-react/index.md`

## Inputs

- the active web React build definition
- the current product specification

## Task

Create the initial project scaffold for a React + TypeScript + Vite implementation.

The result should provide:

- a runnable application shell
- a basic source structure that separates domain logic from UI
- an initial styling direction that avoids generic default UI
- a minimal placeholder flow for home, rig, run, and result views

## Expected Output

- a working local app entry point
- initial project structure
- placeholder screens or routes for the core product cycle
- a short note of any specification gaps that became visible during scaffolding

## Out of Scope

- final game systems
- full dice logic
- final visual polish
- persistence beyond minimal bootstrapping

## Spec Feedback

Record any structural uncertainty that blocks clean scaffolding, especially around:

- minimum view breakdown
- required domain model boundaries
- tone-critical presentation rules

## Completion Signal

This step is complete when another agent can run the app locally and see the early product structure of the vertical slice.
