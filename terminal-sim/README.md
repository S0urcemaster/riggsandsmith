# Riggs & Smith Terminal Simulation

This is the concrete implementation directory for `_builds/terminal-sim/`.

The current scope implements `_builds/terminal-sim/steps/001-foundation.md`.

## Run

```bash
npm install
npm run dev
```

For a non-interactive verification run:

```bash
npm run check
```

## Current Shape

- TypeScript and Node.js
- Domain logic in `src/domain/`
- Terminal input/output in `src/cli/`
- English terminal prompts and result text
- One playable Home -> Hack -> next Home loop
- A deterministic demo path for build verification
