# Focused Spec Work Protocol

## Module Authority

This file owns the project-specific working protocol for focused specification edits.

It exists to make agent work more targeted and to reduce accidental overwrites in large-context runs.

## Does Not Own

- product meaning
- lore meaning
- build path activation
- general meta rules

## Depends On

- [Agent](./index.md)
- [Spec Meta](../../_meta/index.md)

## Focus Declaration

A focused spec run should declare:

1. target module
2. allowed edit files
3. protected files
4. intended change type
5. conflict handling

When a user names a target module or file, the agent should treat that target as the default allowed edit area unless the user explicitly broadens the scope.

## Edit Boundary Rule

Agents should not rewrite neighboring modules to make a focused edit easier.

If a needed change crosses module boundaries, the agent should either ask for scope expansion or add a `Spec Feedback` note in the target module.

Small index-link updates are allowed when they are necessary to keep navigation correct.

## Module Header Rule

Focused product modules should usually declare:

1. Module Authority
2. Does Not Own
3. Depends On
4. Exports

These sections are operational boundaries for future agents.

They should be kept short and concrete.

## Replacement Rule

When focused work replaces existing meaning, the replacement should name the affected module and scope explicitly.

When focused work only clarifies, sharpens, or extends existing meaning, the edit should preserve the original authority boundary.

## Spec Feedback Rule

`Spec Feedback` is the place for cross-module observations that should not be silently resolved inside the current focused run.

Feedback should be actionable enough that a later agent can pick it up as a bounded task.
