# Game Loop

## View Structure

The product currently uses four views:

1. Start
2. Home
3. Hack
4. Catch

These views are the UI representations of the corresponding game phases.

Start precedes the playable game loop.

Home and Hack form the logical playable game loop.

Catch is an exception view that appears only when the player crosses a boundary that triggers it.

## Cross-View Planning Display

The product should keep plan-critical global resources readable across the main views.

Money, casino heat, and police heat are needed for planning, target judgment, preparation judgment, and consequence reading.

They should therefore not be hidden inside one isolated app or one isolated phase.

The display may be calmer in Home and more pressured in Hack, but it should remain recognizable as the same global resource state.

## Core Loop

The logical playable loop begins at Home.

The normal loop is:

1. Home
2. Hack

The resulting state carries forward and leads into the next Home view.

## Start

Start is the entry view that precedes the playable game loop.

It frames access into the current game state and leads into Home without being part of the logical game loop.

Start may also show the highscore list.

The highscore list records ended runs and gives the player a readable long-term comparison point before entering the current game state.

For the first slice, the highscore list ranks runs by total money successfully extracted.

## Home

Home is the home phase and the first view of the playable game loop.

Here the player works on the rig inside the safety and constraints of home, changes the build composition, installs dice, checks load and instability, uses computer apps, shops for equipment, and sets up the next illegal hack.

Home is the most important decision phase of the product.

This is where the operational configuration for the upcoming hack is created.

This also is where the player selects the next target machine.

## Hack

Hack is the executed operational phase and the second view of the playable game loop.

Here the home-built configuration is carried to the chosen target machine, attached in concealed form, and used against that target system.

Hack should read primarily as a consequence of build, target choice, risk, strain, and variance.

Real-time pressure may shape the phase, but it serves consequence reading rather than becoming the main product form.

Riggs operates under direct local pressure and reads the run through AR-assisted rig telemetry rather than through a calm remote desktop situation.

Its visible outcome includes profit, loss, suspicion, damage, instability, failure, or escalation.

These consequences carry into the next cycle and change the starting condition of the following day.

## Catch

Catch is a special-case view.

It is shown when casino heat reaches maximum or police heat reaches maximum.

Maximum casino heat means the player is caught by casino security.

Maximum police heat means the player is caught by police.

Catch sits outside the normal Home-to-Hack loop and expresses a breached limit rather than a standard cycle step.

Each Catch increases catch count by one.

The first and second catches return to the continuing run with consequences.

Before the run continues, the heat value that caused the catch is resolved below its maximum so that Catch does not immediately retrigger.

The third catch ends the run and sends the completed result to the highscore list.
