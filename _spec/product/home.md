# Home

## Module Authority

This file owns the product meaning of Home as the central preparation view and operating interface.

It defines what Home is for, how it should read as a product view, and which first-slice apps belong inside it.

## Does Not Own

- detailed rig operating rules
- detailed target selection rules
- detailed shopping rules
- global resource definitions
- concrete in-game text
- technical UI implementation

## Depends On

- [Product Definition](./index.md)
- [Vertical Slice](./vertical-slice.md)
- [Game Loop](./game-loop.md)
- [Global Resources](./state/global-resources.md)
- [Rig Operation](./rig-operation.md)

## Exports

- Home binding function
- Home view tone
- Home first-slice app set
- Home first-slice spatial scope boundary

## Definition

Home is the central operating interface of the game.

Home also carries thematic location meaning, but in the first product definition its binding function is the operating interface where the next hack is prepared.

Home is the product view most closely associated with John Riggs as the ordinary working programmer.

Its visual expression may include clutter, pressure, and improvised technical density, but it should still feel comparatively adapted to normal life.

Home should therefore read as controlled, habitual, and lived-in even when it is chaotic.

Inside Home, the computer is the dominant visible element.

Within Home, the player uses a small set of computer apps as the main operating tools for the next decision.

These apps should include at minimum:

- the Rigging App
- the Targeting App
- the Shopping App

The first slice presents Home through the operating presence of the room, with the computer and rig area carrying most of the visible interaction weight.

A large navigable apartment is excluded from the required first-slice scope because it would add spatial exploration without proving the core Home-to-Hack systems loop.

## Spec Feedback

Future Home work should keep this file focused on Home's product role and view-level operating shape.

Detailed rules for Targeting App and Shopping App should remain in their owning modules.
