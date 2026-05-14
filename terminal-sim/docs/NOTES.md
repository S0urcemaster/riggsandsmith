# Terminal Simulation Notes

## Active Build Definition

This implementation follows `_builds/terminal-sim/index.md`.

The current implemented step is `_builds/terminal-sim/steps/001-foundation.md`.

## Algorithm Assumptions

- The first run starts at Home with 40 money, 0 casino heat, 0 police heat, and 0 catches.
- Heat maximums are represented as values from 0 to 100.
- Loser's Rig has two active slots, modest top speed, weak-to-modest support stats, and only the `accelerate` die manipulator.
- Loser's Die is always present in inventory and installed in both fallback slots for the foundation build.
- The first target is a low-yield slot machine that can be handled by Loser's Rig and Loser's Die.
- Hack state uses simple pressure values: profit, red-zone proximity, body pressure, instability, thermal strain, and signature.
- Cashing out converts current profit into money and converts a small amount of signature into casino heat.
- Collapse applies no profit, raises casino heat, and can damage non-fallback equipment in future steps.
- The foundation build preserves Loser's Rig and Loser's Die across all outcomes.

## Covered Product Behaviors

- Home leads into Hack and Hack resolves back into the next Home phase.
- Money, casino heat, police heat, and catch count remain readable across the loop.
- Push Yield visibly increases profit and pressure.
- Stabilize visibly improves control at the cost of momentum.
- Regulate Body visibly lowers body pressure and competes with profit actions.
- Cash Out voluntarily ends Hack and carries results into the next Home phase.
- Loser's Rig and Loser's Die remain available after resolution.
- `npm run check` completes one deterministic Home -> Hack -> next Home loop.

## Spec Gaps Found During Step 001

- Exact first numeric parameters for Loser's Rig, Loser's Die, and the simple target remain open.
- The first algorithm still needs a stronger rule for how shared rig speed should be selected during Home preparation.
- Collapse consequence severity is provisional.
- Casino heat and police heat catch thresholds are defined as maximums, but first numeric maximum values are provisional.
- The relationship between terminal simulation action names and final UI labels can be sharpened later in content files.
- The foundation build uses one fixed target and one fixed fallback loadout; Home configuration is readable but not yet editable.
