# Terminal Simulation

This is the terminal mechanics lab for the Home-to-Hack-to-next-Home loop.

It uses TypeScript files executed directly by Node 24 type stripping, so no package install is required.

## Commands

```bash
npm run play
npm run autorun -- --runs 100 --strategy balanced --seed 42
npm run compare -- --runs 200 --seed 42
```

## Interactive Controls

During Hack:

- `p` pushes yield
- `s` stabilizes the channel
- `b` regulates body pressure
- `a1` accelerates die slot 1
- `a2` accelerates die slot 2
- `c` cashes out

The terminal output is intentionally English because the terminal build definition requires English prompts and result text.
