# Terminal Simulation

This is the terminal mechanics lab for the Home-to-Hack-to-next-Home loop.

It uses TypeScript files executed directly by Node 24 type stripping, so no package install is required.

## Commands

```bash
npm run play
npm run autorun -- --runs 100 --strategy balanced --seed 42
npm run compare -- --runs 200 --seed 42
npm run firstfork -- --runs 200 --strategy greedy --seed 42
```

## Interactive Controls

During Hack:

- `p` pushes yield
- `s` stabilizes the channel
- `b` regulates body pressure
- `a1` accelerates die slot 1
- `a2` accelerates die slot 2
- `br1` brakes die slot 1 when brake is owned
- `br2` brakes die slot 2 when brake is owned
- `co1` cools die slot 1 when cool is owned
- `co2` cools die slot 2 when cool is owned
- `c` cashes out

At Home after the protected first success:

- `buy needle-glass` buys the first cheap fast second-slot die
- `buy brake` buys the brake Die Manipulator
- `buy cool` buys the cool Die Manipulator
- `buy guidance-kit` improves Loser's Rig guidance and stability
- `buy black-six` buys the early dirty high-output die

The first successful payout unlocks the shop. Failed protected first attempts do not carry lasting consequences.

The terminal output is intentionally English because the terminal build definition requires English prompts and result text.
