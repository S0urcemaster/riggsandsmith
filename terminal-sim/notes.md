# Terminal Simulation Notes

## Algorithm Assumptions

- One action advances one hack tick.
- Die definitions now author quality instead of fixed guidance demand.
- Derived guidance demand is calculated from quality, speed, mass, inertia, material, and damage.
- Profit, red-zone pressure, heat, instability, signature, suspicion, and body pressure are operational Hack states.
- Money, casino heat, police heat, catch count, total extracted money, rig damage, and die damage persist into the next Home phase.
- Shared speed is limited by rig top speed and the lowest max speed among installed dice.
- Loser's Rig is always available and always has two active die slots.
- Loser's Die is always preserved; if both slots would become empty, slot 1 is restored to Loser's Die.
- The first successful payout unlocks shop control; failed protected first attempts do not carry lasting consequences.
- The mini shop uses price factors converted through the current base shop price.
- Collapse converts operational pressure into lower or lost profit, rig damage, die damage, casino heat, and possible catch.
- Cashing out near high pressure still converts some operational signature and suspicion into casino heat.
- Police heat mainly comes from Home-side preparation in the product spec; this terminal build only models a tiny repeat-day police drift and leaves shopping risk for a later build.

## Covered Behavior Contracts

- Push Yield: visible profit increase with pressure increase.
- Cash Out: voluntary Hack end and persistent carry-over.
- Stabilize Channel: reduced red zone, instability, and heat growth at the cost of immediate profit.
- Regulate Body Pressure: visible body-pressure reduction and lower mistake pressure.
- Rig Die Manipulation: Loser's Rig exposes accelerate only; applying it to a die raises speed/output and worsens pressure.
- Rig Build Fit: Home output reports active slots, top speed, shared speed limit, and build warnings.
- Material Reasoning: dice expose material-family stats and produce different output/risk profiles.
- First Fork: the sim can compare guidance-kit, Needle Glass, brake, cool, and Black Six openings.

## Spec Gaps Exposed

- The exact numeric relationship between casino heat, suspicion, signature, and Catch remains provisional.
- Police heat from hacks is intentionally weak because the spec currently places police pressure mainly in Home shopping/darknet behavior.
- Loser's Die recovery earnings are modeled as modest but not yet product-calibrated.
- The product should eventually decide whether global casino heat and local Hack suspicion are separate names or whether one should be renamed for clarity.
- Autorun strategy quality is currently measured by profit, collapse rate, cash-out rate, damage, suspicion, and variance; the spec has not yet defined which combination best predicts a fun run.
- First-fork metrics currently emphasize hack outcome more than net value after purchase price; this makes expensive high-output items like Black Six look strong and should be refined next.
