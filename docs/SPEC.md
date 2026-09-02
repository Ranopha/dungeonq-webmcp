# DungeonQ Competition Spec 0.1

- Status: Local validated competition prototype
- Data classification: `SYNTHETIC_ONLY`
- Execution authority: Browser／process-local simulated state only
- Public release: Not yet authorized

## 1. Product statement

DungeonQ lets an evaluator test governed adaptive-deception decisions without granting access to a real environment. The product accepts a bounded synthetic Scenario Pack, produces a deterministic security overlay and effect proposal, enforces a visible human gate, and returns replayable integrity evidence.

The differentiator is falsifiability: a judge can edit expectations, inject control failures, tamper with receipts, remove WebMCP, or supply a new simulated environment and observe a bounded pass／fail result.

## 2. Actors

- **Scenario Author** supplies untrusted, synthetic-only JSON and expected assertions.
- **Judge／Operator** validates and runs the scenario through Web or CLI.
- **Agent／Proposer** may call visible WebMCP tools to simulate and request review.
- **Human Reviewer** alone may create the approval record through the visible UI.
- **Effect Broker** applies an approved transition to local synthetic state under an idempotency claim.
- **Verifier** recomputes bundle, proposal, approval, receipt, audit-chain, transcript, and read-back digests.
- **Recovery Actor** appends compensation without deleting prior evidence.

## 3. Functional requirements

| ID | Requirement |
|---|---|
| DQ-FR-001 | Accept only `dungeonq.scenario/v1` with `SYNTHETIC_ONLY` and closed, bounded fields |
| DQ-FR-002 | Provide three fixed-seed cases and browser import for an external `.json` pack |
| DQ-FR-003 | Run Web, CLI, and WebMCP through the same validator, engine, and session contracts |
| DQ-FR-004 | Produce deterministic risk, source assessment, route overlay, capability set, proposal, and assertions |
| DQ-FR-005 | Prevent untrusted model output from affecting routing authority |
| DQ-FR-006 | Compose simultaneous control failures monotonically; failures may only remove capabilities |
| DQ-FR-007 | Require a separate human approval bound to exact digest and revision before any effect is executable |
| DQ-FR-008 | Claim each simulated effect idempotently and return the original receipt on exact replay |
| DQ-FR-009 | Verify read-back and nested digests; reject tampered or malformed evidence without throwing internal details |
| DQ-FR-010 | Roll back by appending a linked compensation receipt and retaining original audit evidence |
| DQ-FR-011 | Export one canonical Evidence Bundle with an explicit synthetic claim boundary |
| DQ-FR-012 | Return nonzero CLI status for invalid inputs, blocked lifecycle, and expected-result mismatch |

## 4. Security requirements

| ID | Requirement |
|---|---|
| DQ-SR-001 | No real connector, outbound telemetry, attack primitive, arbitrary command, plugin execution, or imported URL／file dereference |
| DQ-SR-002 | Browser UI renders imported values only through safe text nodes and operates under a restrictive CSP |
| DQ-SR-003 | WebMCP tool visibility follows session state; no tool may grant human approval |
| DQ-SR-004 | Missing edge context forces `DENY` and removes simulated production-response capability |
| DQ-SR-005 | Missing evidence or approval authority blocks effect execution rather than downgrading trust |
| DQ-SR-006 | Unknown versions, fields, enums, references, unsafe structure, and content patterns fail closed |
| DQ-SR-007 | Validation issues and WebMCP outputs are bounded and do not echo an entire untrusted payload |
| DQ-SR-008 | Public files contain no original project, tenant, company, owner-path, secret, or unresolved license claim |

## 5. Quality requirements

- Node.js 22+ with zero package dependencies.
- One-command `npm run check` for tests, scenario replay, evidence verification, and clean-room audit.
- Keyboard-operable controls, semantic labels, focus indicators, reduced-motion handling, and no horizontal overflow at 390 px.
- Loopback-only static server with allowlisted paths, traversal rejection, security headers, and no directory listing.
- Deterministic output for identical engine version, input, actors, command order, and idempotency keys.

## 6. Acceptance evidence

The competition profile is acceptable when all of the following are captured from the same source revision:

1. all tests pass, including 127 compound-failure combinations;
2. every golden scenario passes expected assertions and Evidence Bundle verification;
3. full browser lifecycle reaches `ROLLED_BACK` in order with no console error;
4. WebMCP transitions from simulate → request → human gate → apply without ever registering an approval tool;
5. 390 px browser width has no horizontal overflow;
6. clean-room audit returns zero findings; and
7. branch, commit, and remote read-back identify the tested revision.

## 7. Maturity boundary

This profile proves local deterministic and governance behavior only. Production readiness requires independent signal attestation, durable policy publication, real identity and dual control, atomic external claims, key custody, trusted time, cross-account evidence checkpoints, PEP conformance, availability testing, deployment provenance, and an authorized field evaluation. Those gaps are intentionally visible rather than simulated as completed.
