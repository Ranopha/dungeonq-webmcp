# DungeonQ — OpenAI WebMCP Challenge submission

## Tagline

Enter the unknown. Exit with proof.

## Short description

DungeonQ is a WebMCP-native synthetic security proving ground where agents can admit and navigate judge-authored defense scenarios, while human approval remains visibly and technically human-only.

## What it does

Security teams want adaptive defense, but an autonomous agent should not become the approval authority for its own high-impact proposal. DungeonQ turns that tension into an interactive cyber dungeon.

A judge can provide a bounded synthetic environment containing assets, signals, trust classes, policy thresholds, injected control failures, a requested effect, and expected invariants. A WebMCP agent admits the Scenario Pack through a strict runtime validator, runs a deterministic decision engine, explains the resulting route and capability envelope, and requests human review. The registered tool surface then contracts: the agent never receives an approval tool. After a person approves the exact proposal digest and revision in the visible UI, the agent can apply the browser-local synthetic effect, verify its receipt, compensate it, and return a replayable evidence digest.

Three fixed-seed scenarios cover a controlled honey-credential replay, compound edge/evidence failure, and fresh-context false-positive recovery. Judges can also author their own packs and replay them through the browser or CLI.

## How we used WebMCP

DungeonQ exposes state-shaped tools through `document.modelContext`:

- `dungeonq_scenario_admit`
- `dungeonq_status`
- `dungeonq_simulate`
- `dungeonq_approval_request`
- `dungeonq_effect_apply`
- `dungeonq_receipt_verify`
- `dungeonq_effect_rollback`
- `dungeonq_evidence_export`

This is not a static wrapper around buttons. WebMCP makes the application meaningfully better because an agent can carry a complete new environment into the page, traverse a governed multi-step workflow, and lose capabilities as state changes. Human approval remains an intentionally missing capability.

## How we built it

The dependency-free security core uses browser-safe JavaScript modules shared by Web UI, CLI, tests, and WebMCP. Admission enforces a 128 KiB document bound, closed fields, synthetic namespaces, content safety, cross-field references, budgets, scopes, and bounded arrays. The pure engine produces a canonical SHA-256 input digest, weighted risk score, route safety overlay, failure-composed capability set, exact proposal digest, and invariant results.

A governed in-memory state machine binds approval, proposal digest, revision, expected prior state, and idempotency claim. Apply and compensation append protected receipts; Evidence Bundles cover the command transcript and hash-chained audit events. Vinext and the official Sites Vite plugin create the public ChatGPT Sites artifact without changing the core decision path.

## Challenges

The hard part was not adding more agent power. It was designing a useful WebMCP experience where capability absence is part of the product: Scenario replacement disappears after simulation, approval never exists as an agent tool, stale digests fail closed, compound failures can only remove capabilities, and recovery preserves prior evidence.

## Accomplishments

- A judge can bring a new synthetic environment through WebMCP, UI, or CLI.
- The same fixed-seed input produces the same engine result across adapters.
- The agent cannot approve its own proposal.
- All 127 non-empty combinations of seven injected failures are tested for monotonic capability reduction.
- Receipt and Evidence Bundle tampering are detected.
- Compensation is idempotent and preserves the original evidence chain.
- The live app contains no third-party browser asset, analytics, remote script, real credential, or production connector.

## What we learned

The strongest human-agent experiences are not necessarily the ones with the most tools. A state-shaped capability surface can make authority, uncertainty, and recovery legible to both the agent and the person supervising it.

## What's next

DungeonQ deliberately stops at synthetic validation. A production path would require independently attested signals, durable state and claims, external evidence checkpoints, verified human identity, real policy distribution, isolated effect infrastructure, clock trust, and field acceptance. Those are future gates, not claims hidden behind a polished demo.

## Links

- Live app: https://dungeonq.kq7dn7jb6r.chatgpt.site
- Public source: https://github.com/Ranopha/dungeonq-webmcp
- License: Apache-2.0
- Demo video: pending public YouTube upload
