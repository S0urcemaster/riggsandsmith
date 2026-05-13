# Mr Riggs & Lucky Smith

> A neon-noir probability hacking game about preparing a risky casino intrusion, pushing an unstable machine, and surviving the consequences.

## Core Slice

The vertical slice is built around one compact gameplay loop:

1. Prep
2. Run
3. Result

The player lives two connected roles:

- Mr Riggs prepares the operation
- Lucky Smith executes it inside the casino

The slice should prove that this loop is fun, readable, and expandable.

## 1. Prep

Prep is the slower planning phase.

Here the player prepares the next casino run.

Core actions:

- choose or upgrade a small set of dice modules
- buy or equip a few hacking tools
- tune the build toward profit, speed, or stability
- accept tradeoffs between power and safety

Prep should feel:

- controlled
- strategic
- readable

The purpose of Prep is to build intent before pressure begins.

## 2. Run

Run is the active casino hacking phase.

Here the player uses the prepared build inside a live machine.

Core actions:

- manipulate probability through dice and tools
- trigger stronger rewards through combinations
- push the machine toward higher output
- react to instability and rising detection
- decide when to continue and when to get out

Core pressures:

- instability can destroy the run
- detection can escalate toward police response

Run should feel:

- fast
- risky
- escalating
- slightly chaotic but still understandable

## 3. Result

Result is the consequence phase after the run.

The player returns from the run with an outcome that affects the next Prep phase.

Possible outcomes:

- successful escape with money
- partial success with damage or suspicion
- collapse during the run
- police escalation after too much exposure

Result should make the player feel that every run leaves a mark.

It should feed back into the next loop through:

- earned money
- lost equipment
- increased suspicion
- changed strategic options

## Vertical Slice Scope

The slice should stay intentionally small.

Suggested scope:

- 2 switching UIs: Prep and Run
- 1 core casino machine type
- 1 compact workshop / loadout screen
- a small set of dice modules
- a small set of hacking tools
- 1 instability system
- 1 detection / police pressure system
- clear run outcomes that lead back into Prep

## Success Condition for the Slice

The slice succeeds if the player can clearly experience this loop:

1. build a setup in Prep
2. risk it in Run
3. suffer or profit in Result
4. want to try again with a better plan

## Design Priority

The first goal is not feature breadth.

The first goal is a strong loop with:

- understandable preparation
- exciting escalation
- meaningful consequences
