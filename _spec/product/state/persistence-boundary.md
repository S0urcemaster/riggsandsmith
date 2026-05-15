# State Persistence Boundary

## Module Authority

This file owns the boundary between persistent global resources and live operational pressure states.

## Does Not Own

- detailed meanings of money, casino heat, and police heat
- detailed Catch flow
- Hack view presentation
- concrete implementation persistence mechanisms

## Depends On

- [Game State](./index.md)
- [Global Resources](./global-resources.md)
- [Game Loop](../game-loop.md)

## Exports

- persistent resource boundary
- operational pressure boundary
- fallback viability requirement after resolved state

## Rule

The product should distinguish persistent global resources from live operational pressure states.

Persistent global resources carry across Home, Hack, and later planning decisions.

Operational pressure states describe current or near-current danger during preparation or Hack execution.

Operational pressure states can convert into persistent consequences when a result is resolved, but they should not replace the global resources that carry long-term planning meaning.

This boundary keeps the game state from becoming volatile, where important consequence exists only inside one view, one app, or one unresolved Hack moment.

## Behavior Contract: State Persistence Boundary

The player can leave a Hack result and still read the lasting state that matters for the next planning decision.

Acceptance checks:

- Money, casino heat, and police heat persist after Hack resolves into the next Home phase.
- Rig instability, thermal strain, signature, red-zone proximity, body pressure, and suspicion may change during Hack or preparation as operational pressure states.
- When an operational pressure state creates lasting consequence, that consequence is written into a persistent state before the next planning decision.
- A player can leave Hack and still read the lasting consequences that matter for the next Home decision.
- Every resolved game state preserves a viable fallback path made from Loser's Rig, Loser's Die, and at least one simple target.

## Spec Feedback

If future work introduces new pressures, it should decide whether each pressure is persistent, operational, or a conversion between both.
