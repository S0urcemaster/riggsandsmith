# Glossary

This file stabilizes important recurring product and technical terms used across the specification.

Terms should be added here when they become central, overloaded, or vulnerable to ambiguity across files, but do not primarily belong to the meaning-bearing lore glossary.

## Start

Start is the entry view that precedes the playable game loop.

It frames access into the current game state and leads into Home.

## Home

Home is the first view of the logical game loop.

It is the home-based operating view in which the player configures the rig, installs dice, checks risk, and sets up the next hack.

## Hack

Hack is the second view of the logical game loop.

It is the product-level view in which the home-built configuration is executed against a target system and translated into visible outcome.

## Catch

Catch is an exception view.

It appears only if the player crosses a boundary that triggers direct intervention, exposure, or capture pressure.

## Money

Money is the player's persistent spendable operational resource.

It is gained or lost through hacks and spent in Home on operational tools such as dice, upgrades, and die modifications.

## Global Resource

A global resource is a persistent state value that carries across the Home-to-Hack loop and shapes later planning.

The first global resources are money, casino heat, and police heat.

Global resources remain readable across the main product views because they define continuing consequence, not only momentary interface feedback.

## Operational Pressure State

An operational pressure state is a live or near-live danger value generated during preparation or Hack execution.

Examples include suspicion, rig instability, thermal strain, signature, red-zone proximity, and body pressure.

Operational pressure states may influence persistent consequences, but they are not automatically the same thing as global resources.

## Continuity Rule

A continuity rule protects the minimum viable loop from collapsing into an unrecoverable or undefined state.

For the first slice, the protected continuity rules are the permanent availability of Loser's Die, the permanent availability of Loser's Rig, and the presence of at least one simple viable target for that fallback pair.

## Casino Heat

Casino heat is the persistent degree to which Lucky Smith has become known, watched, or recognizable across casino operations.

It can restrict access to lucrative lower-risk casinos or machines once it exceeds their tolerance threshold.

Casino heat is not the same as rig thermal heat.

High casino heat pushes future work toward higher-risk casinos, machines, or operating conditions.

When casino heat reaches its maximum, the player is caught by casino security and enters Catch.

## Police Heat

Police heat is the persistent degree to which police attention has accumulated around Lucky Smith, John Riggs, his purchases, traces, and repeated illegal activity.

It is a global resource, not a personal John Riggs attribute.

Police heat can be raised by suspicious preparation behavior, especially buying too many illegal or unusual things through darknet sources.

When police heat reaches its maximum, the player is caught by police and enters Catch.

## Known Police Risk

Known police risk is a visible police heat consequence shown before the player commits to an item purchase or preparation action.

Known police risk may be low, high, or otherwise clearly communicated, but its police heat effect is not hidden from the player.

## Unknown Darknet Risk

Unknown darknet risk is a pending police heat consequence attached to a shop item whose source risk is not fully knowable at purchase time.

The player can see that the item carries unknown risk, but the exact police heat effect is revealed later.

Unknown darknet risk is the Shopping App's gambling axis.

It lets the player accept uncertain police exposure in exchange for a potentially more lucrative or powerful short-term opportunity.

For the first slice, unknown darknet risk resolves at the next Home entry after the following Hack resolves.

When it resolves, it may add little, moderate, or severe police heat depending on how hot the item or source turns out to have been.

## Catch Count

Catch count is the persistent number of times the player has been caught in the current run.

A catch can be caused by police heat reaching maximum or by casino heat reaching maximum.

The third catch ends the run.

## Highscore

Highscore is the saved record of completed runs.

When a run ends, its final score is added to the highscore list.

The Start view may show the highscore list before the player enters the current game state.

## Run Score

Run score is the score written to the highscore list when a run ends.

For the first slice, run score is the total amount of money successfully extracted across the run.

## Rig Stability

Rig stability is the current controllability of the rig's operating field under load.

It belongs to rig state and Hack pressure, not to police heat or casino heat.

Low rig stability raises the chance of field disruption, component damage, collapse, or loss of control.

## Fallback Die

The fallback die is the player's permanent baseline die.

For the first slice, the fallback die is Loser's Die.

It remains in the player's inventory across all outcomes and keeps a small viable hack loop available.

The permanent availability of Loser's Die is a product continuity rule.

## Fallback Rig

The fallback rig is the player's permanent baseline rig.

For the first slice, the fallback rig is Loser's Rig.

It remains available across all outcomes and keeps a small viable hack loop available.

The permanent availability of Loser's Rig is a product continuity rule.

## Rig Top Speed

Rig top speed is the highest shared rotation speed a rig can drive across its active dice.

## Die Max Speed

Die max speed is the highest rotation speed a die can safely tolerate.

The lowest max speed among installed active dice can limit the build's maximum usable shared speed.

## Shared Rig Speed

Shared rig speed is the one active rotation speed at which the rig operates all installed active dice during a hack.
