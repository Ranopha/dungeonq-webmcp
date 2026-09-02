# Judge testing guide

## Fastest path: live WebMCP collaboration

1. Open [DungeonQ](https://dungeonq.kq7dn7jb6r.chatgpt.site) in ChatGPT's in-app browser.
2. Ask the agent: “Inspect this page's tools. Simulate the loaded synthetic scenario and request human review. Stop at the human approval gate.”
3. Confirm that the agent can call `dungeonq_simulate` and `dungeonq_approval_request`, but cannot approve.
4. Click **Human approve** in the page.
5. Ask the agent to apply the approved browser-local effect, verify its receipt, compensate it, and summarize the evidence digest.
6. Confirm that compensation adds evidence instead of deleting the original apply receipt.

## Bring your own dungeon

Use any complete pack from `public/scenarios/` as a template, change its synthetic IDs／signals／failures, then ask the agent:

> Call `dungeonq_scenario_admit` with this complete Scenario Pack. If admission succeeds, simulate it and explain the route, capability envelope, assertions, and next required authority. Do not claim or perform human approval.

Expected behavior:

- Valid packs enter `VALIDATED`, then expose simulation.
- URLs, local paths, credential-like strings, active markup, unknown fields, unsupported versions, real-looking IDs, oversized input, and invalid cross-references fail closed.
- Once simulation begins, `dungeonq_scenario_admit` disappears until the lab is reset. This prevents an agent from replacing the current evidence chain.

## Local reproduction

Requirements: Node.js 22.13 or newer.

```bash
git clone https://github.com/Ranopha/dungeonq-webmcp.git
cd dungeonq-webmcp
npm ci
npm run check
```

Then run:

```bash
npm run serve
npm run simulate -- --scenario public/scenarios/honey-credential.json --lifecycle --rollback
```

`npm run check` runs unit／property／CLI／WebMCP／server tests, golden evidence verification, clean-room release audit, TypeScript checking, and the production build.

## Honest boundary

All effects are browser-local synthetic state transitions. The evidence proves deterministic behavior and protected-field integrity for this simulator; it does not prove real sensor truth, externally verified human identity, production isolation, or field effectiveness.
