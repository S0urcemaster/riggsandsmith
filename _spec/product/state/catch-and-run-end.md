# Catch and Run End

## Module Authority

This file owns catch count, catch triggers, catch continuation, run end, and first-slice scoring.

## Does Not Own

- Catch view visual presentation
- detailed casino heat meaning
- detailed police heat meaning
- highscore content text
- technical persistence of highscore entries

## Depends On

- [Game State](./index.md)
- [Global Resources](./global-resources.md)
- [Game Loop](../game-loop.md)
- [Vertical Slice](../vertical-slice.md)

## Exports

- catch triggers
- catch count
- first and second catch continuation
- third catch run end
- first-slice run score definition

## Rule

The run tracks how many times the player has been caught.

A catch occurs when casino heat reaches maximum or police heat reaches maximum.

Casino heat reaching maximum means the player is caught by casino security.

Police heat reaching maximum means the player is caught by police.

The first and second catches continue the run after consequences are applied.

The third catch ends the run.

When the run ends, the completed result is written to the highscore list.

For the first slice, run score is the total amount of money successfully extracted across the run.

## Behavior Contract: Catch and Run End

The player can be caught by casino security or police, continue after limited catches, and end the run on the third catch.

Acceptance checks:

- Casino heat has a readable maximum threshold.
- Police heat has a readable maximum threshold.
- Reaching maximum casino heat sends the player to Catch as a casino-security catch.
- Reaching maximum police heat sends the player to Catch as a police catch.
- Each Catch increments catch count by one.
- Catch count remains visible or immediately readable after the run continues.
- After the first or second Catch, the heat value that caused the catch is resolved below maximum before the player returns to Home.
- The third Catch ends the run.
- A completed run creates or updates an entry in the highscore list with its run score.

## Spec Feedback

Future Catch view work should reference this file for catch logic and keep visual or narrative presentation in the owning Catch view or content files.
