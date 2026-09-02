# Architecture and trust boundaries

DungeonQ intentionally keeps one small kernel and several replaceable adapters.

```text
Scenario JSON / file / WebMCP object
        │
        ▼
Strict admission + canonicalization
        │
        ▼
Deterministic simulation engine
  ├─ risk and route overlay
  ├─ failure capability lattice
  ├─ exact proposal digest
  └─ invariant / expected assertions
        │
        ▼
Governed in-memory session
  VALIDATED → SIMULATED → APPROVAL_PENDING → APPROVED
                                      │
                                      ▼
                         APPLIED → VERIFIED → ROLLED_BACK
        │
        ├──────── Web UI
        ├──────── CLI
        └──────── WebMCP progressive adapter
                                      │
                                      ▼
                       Canonical Evidence Bundle
```

## Authority separation

| Authority | Lab representation | Cannot do |
|---|---|---|
| Scenario author | Declares synthetic input and expected assertions | Change engine output after admission |
| Engine | Produces deterministic decision and proposal | Approve or apply an effect |
| Agent／proposer | Runs simulation and requests review | Grant human approval |
| Human reviewer | Uses a visible control bound to digest and revision | Rewrite proposal or receipt |
| Effect broker | Applies an already approved browser-local transition once | Reach a real system or change scope |
| Evidence verifier | Recomputes protected digests and read-back | Assert source truth or production non-repudiation |
| Recovery actor | Appends a compensation receipt | Delete the original receipt or audit event |

## Deterministic engine

The engine is pure with respect to the validated Scenario Pack. Positive and counter-evidence produce a bounded score; policy thresholds produce a route overlay; failure types remove capabilities from a fixed base set. `PEP_CONTEXT_MISSING` additionally forces `DENY` in the synthetic overlay because absence of an edge binding must never imply access to a real route.

Signal confidence is not accepted at face value. Each declared source class has a fixed trust weight, recorded in `signalAssessments`. Only sufficiently strong, non-model sources may contribute an independence bonus. `UNTRUSTED_MODEL` has weight zero, so even a model-claimed confidence of 100 cannot change routing authority. This models the architecture rule that AI may propose context but is not a security authority.

The route `NO_ADDITIONAL_RESTRICTION` means only that this simulator adds no new restriction. It never grants a production permission.

## Failure composition

Each failure maps to a set of blocked capabilities. Composition performs set subtraction only, so adding any failure cannot increase authority. The test suite enumerates all 127 non-empty combinations of the seven currently supported failures and checks the subset property.

## State and effect boundary

All effects mutate one in-memory synthetic asset state. Apply requires:

1. an executable proposal;
2. a separate human approval record;
3. exact proposal digest and revision;
4. expected-before-state match; and
5. a unique idempotency claim.

If the policy does not explicitly require human approval for the requested effect, this competition profile leaves the effect non-executable instead of creating an implicit auto-apply path.

An exact replay returns the original receipt. Reusing the key for a different digest or revision fails. Rollback is compensation: it appends a second receipt linked to the first and leaves the full audit chain intact.

## Evidence model

The bundle covers canonical input digest, engine version, deterministic command transcript, route decision, capability constraints, proposal and approval, target read-back, receipts, invariant results, expected assertions, and hash-chained audit entries. The bundle digest covers the complete protected object except its own digest field.

This is integrity evidence for a local simulation, not proof of sensor provenance or external identity. The `claimBoundary` field makes that limitation machine-readable.

## Adapter parity

The Web UI, CLI, and WebMCP adapter import the same `src/` modules. UI text, CLI files, and `dungeonq_scenario_admit` all cross the same authoritative Scenario admission boundary. Agent admission exists only in `VALIDATED`, before any simulation evidence exists.

WebMCP registration is progressive and state-shaped. Tools are re-registered after each transition; there is deliberately no WebMCP approval tool. Tool output is bounded and summarizes untrusted scenario content rather than returning arbitrary input. Tool JSON Schema improves discovery and input shaping, but runtime validation—not annotations—is the security boundary.
