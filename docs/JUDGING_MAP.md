# Judge map and honest claims

## Three-minute live route

1. **Problem and boundary, 20 seconds** — Point to `SYNTHETIC_SIMULATION_ONLY`: security automation needs proof and human authority, not another autonomous black box.
2. **WebMCP-native admission, 30 seconds** — Ask the agent to inspect the page, call `dungeonq_scenario_admit` with a judge-authored pack, and simulate it. Show the input digest and tool surface changing.
3. **Human-agent gate, 45 seconds** — Let the agent request review. Observe that it has no approval tool. Use the visible Human approve control; then ask the agent to apply and verify the receipt.
4. **Recovery with proof, 30 seconds** — Ask the agent to compensate. Show that the original receipt remains and a linked compensation receipt is appended.
5. **Adversarial failure, 25 seconds** — Load Compound edge failure. Missing edge context forces `DENY`, and failure composition only removes capabilities.
6. **Open evaluation, 15 seconds** — Point to the public source, fixed seeds, CLI, 38+ tests, and downloadable Evidence Bundle.

## Claim matrix

| Claim | Status | Evidence |
|---|---|---|
| Scenario admission is closed and bounded | Demonstrated locally | Contract and malicious-input tests |
| Same input and engine version are deterministic | Demonstrated locally | Golden digest and duplicate-run verification |
| Compound failure does not expand capabilities | Demonstrated locally | Exhaustive 127-combination property test |
| Agent cannot self-approve | Demonstrated locally | Session negative test and no WebMCP approval tool |
| Apply is exact and idempotent | Demonstrated locally | stale, replay, conflict, and before-state tests |
| Receipt／bundle tampering is detected | Demonstrated locally | protected-field mutation tests |
| Rollback preserves prior evidence | Demonstrated locally | compensation receipt and audit assertions |
| Third parties and agents can bring a simulation | Demonstrated locally and in public app | Browser import, `dungeonq_scenario_admit`, JSON Schema, CLI path input |
| Works without WebMCP | Demonstrated locally | ordinary Web controls remain complete |
| Production isolation／identity／storage | Not claimed | No production integration in this profile |
| Real-world deception effectiveness | Not claimed | Requires an authorized field evaluation |

## Reproduction commands

```bash
npm run check
npm run simulate -- --scenario public/scenarios/compound-pep-failure.json
npm run simulate -- --scenario public/scenarios/honey-credential.json --lifecycle --rollback
```

Run `npm ci` once, then the commands work with Node.js 22.13+. The standalone public source is Apache-2.0 licensed; `private: true` only prevents accidental npm publication.
