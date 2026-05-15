# Global Resources

## Module Authority

This file owns the product meaning and cross-view behavior of money, casino heat, and police heat.

It also owns police heat pressure from preparation behavior and casino heat access pressure.

## Does Not Own

- Catch view presentation
- run-end scoring beyond the resource value used by scoring
- Hack live pressure presentation
- shop item content text
- target content text
- technical state storage shape

## Depends On

- [Game State](./index.md)
- [Persistence Boundary](./persistence-boundary.md)
- [Catch and Run End](./catch-and-run-end.md)
- [Game Loop](../game-loop.md)

## Exports

- money
- casino heat
- police heat
- global resource display requirement
- police heat preparation pressure
- casino heat access pressure

## Resource Definitions

The product should include game-global resources that persist across the Home-to-Hack loop and shape future options.

The first global resources are:

- money
- casino heat
- police heat

Money is the player's spendable operational resource.

It is gained or lost through hacks and spent in Home on dice, upgrades, and die modifications.

Casino heat is the degree to which Lucky Smith has become known, watched, or recognizable across casino operations.

It is not only a local alarm state for one hack.

It is a broader reputation and attention value that can restrict future access.

Casino heat is not the same as the rig's thermal heat.

When casino heat rises above a casino's tolerance threshold, that casino or category of casino should become unavailable as a safe or normal target choice.

A player with high casino heat may still find work, but increasingly through casinos or target conditions with higher risk, stronger attention, or worse safety margins.

Police heat is the persistent degree to which police attention has accumulated around Lucky Smith, John Riggs, his purchases, traces, and repeated illegal activity.

For the first product direction, police heat is a global resource rather than a personal John Riggs attribute.

It can be raised by suspicious preparation behavior, especially buying too many illegal or unusual things through darknet sources.

When police heat reaches its maximum, the player is caught by police and enters Catch.

For the first slice, John Riggs's ordinary identity is represented through view tone, equipment access, money, police heat, and consequence pressure.

This excludes a separate RPG-like character sheet for personal John Riggs attributes from the required first-slice scope, because police pressure currently carries the relevant ordinary-life exposure function.

## Global Resource Display

The product should provide a persistent global resource display across views.

Money, casino heat, and police heat should remain visible or immediately readable because the player needs them for planning.

This display is a product-level requirement, not only a Home app detail.

It may change visual treatment between Home and Hack, but it should preserve continuity of the same underlying values.

Acceptance checks:

- Money is visible or immediately readable in the main product views where planning or consequence reading occurs.
- Casino heat is visible or immediately readable in the main product views where planning or consequence reading occurs.
- Police heat is visible or immediately readable in the main product views where planning or consequence reading occurs.
- The player can compare current money against shopping or upgrade decisions without leaving the planning context.
- The player can compare current casino heat against target access or target risk without leaving the planning context.
- The player can compare current police heat against suspicious shopping or preparation decisions without leaving the planning context.
- When a hack result or preparation action changes money, casino heat, or police heat, the persistent display reflects the updated value before the next planning decision.
- The display can be adapted visually to each view's tone, but the player can recognize that it represents the same global resources.

## Police Heat Pressure

Police heat can be raised by preparation behavior that makes John Riggs's illegal activity more visible to police.

The Shopping App represents darknet acquisition.

All shop items therefore carry some degree of police risk.

Some items expose known police risk before purchase.

Some items expose unknown darknet risk before purchase.

Unknown darknet risk marks that the purchase is suspicious, but hides the exact police heat consequence until later.

Unknown-risk items are the Home-side form of gambling.

The player may buy an unknown-risk item because it could make the next run segment much more profitable, while knowing that the delayed police heat result may later create a police catch.

The intended decision question is:

Can this item make enough money before the risk comes due, and can the current catch count survive a bad police heat reveal.

For the first slice, unknown darknet risk resolves at the next Home entry after the following Hack resolves and before the player makes the next planning decision.

This timing makes the mistake belong to Home planning without turning Home into a complex investigation simulation.

Acceptance checks:

- Police heat is visible as a persistent player or external-pressure value.
- Buying too many illegal, rare, or suspicious items through darknet-like sources can increase police heat.
- Police heat consequences are tied to global operational exposure rather than to a separate John Riggs character attribute sheet.
- The player can read that aggressive preparation can create risk before the next hack begins.
- Shop items expose either known police risk or unknown darknet risk before purchase.
- Known-risk shop items expose their police heat consequence before purchase.
- Unknown-risk shop items show `unknown risk` instead of an exact police heat value.
- Buying an unknown-risk shop item creates a pending unknown darknet risk.
- Pending unknown darknet risk remains visible or immediately readable until it resolves.
- The player can compare pending unknown darknet risk against current catch count before committing to the next Hack.
- Unknown darknet risk resolves at the next Home entry after the following Hack resolves.
- When unknown darknet risk resolves, its police heat consequence is applied before the next planning decision.
- Resolving unknown darknet risk can trigger Catch if police heat reaches maximum.

## Casino Heat Access Pressure

Casino heat can push the player out of lucrative lower-risk casino options and toward higher-risk work.

Acceptance checks:

- Casino heat is visible as a persistent player or external-pressure value.
- Hack results can increase casino heat.
- Target choices expose whether a casino or machine is available under the current casino heat level.
- If casino heat exceeds a target's tolerance threshold, that target becomes excluded, locked, or marked as too watched for normal work.
- Higher-risk targets can remain available at higher casino heat levels.
- The player can read that becoming too known changes future target access rather than only affecting the current hack.

## Spec Feedback

Future shop or target work should not redefine money, casino heat, or police heat locally.

If a shop or target rule needs a new global-resource effect, it should reference this file or add a focused change here.
