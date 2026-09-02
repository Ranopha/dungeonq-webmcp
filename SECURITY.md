# Security boundary

DungeonQ is a safe, synthetic evaluation harness. It is not an offensive-security toolkit and has no connector to real infrastructure.

## Allowed use

- Fixed or user-authored synthetic identities, assets, signals, policies, and failures.
- Local browser execution through the loopback static server.
- Local CLI execution against an explicit JSON file chosen by the operator.
- Verification, mutation testing, defensive reasoning, and competition evaluation.

## Explicitly out of scope

- Real credentials, customer data, personal data, internal hostnames, tenant identifiers, or production logs.
- Exploits, malware, persistence, scanning, denial of service, hack-back, or interaction with real targets.
- Arbitrary commands, scripts, file references, URLs, callbacks, plugins, or network fetches inside a Scenario Pack.
- Claims that local approval, SHA-256 receipts, or an in-memory audit chain are equivalent to WebAuthn, HSM custody, external notarization, or WORM storage.

## Input controls

The runtime accepts only `dungeonq.scenario/v1` and requires `SYNTHETIC_ONLY`. It rejects unknown fields, unsupported enums, non-synthetic IDs, invalid cross-references, overscope／overbudget effects, duplicate logical IDs, unsafe object structure, credential-like values, local paths, external references, and active markup. Issues are bounded to twenty entries.

The JSON Schema is an authoring aid. The runtime validator remains authoritative because JSON Schema alone cannot enforce threshold ordering, target references, subject equality, budget comparisons, or content-safety rules.

## Browser controls

- No third-party assets or telemetry.
- Same-origin static scenario loading only.
- Strict CSP, no inline executable content, no unsafe DOM HTML sinks.
- WebMCP is optional and state-shaped; ordinary browsers retain the complete human workflow.
- Agent-authored object input is serialized, byte-bounded, and admitted by the same authoritative parser as UI text and CLI files.
- Scenario replacement is available only before simulation; post-simulation states cannot discard the current audit／receipt chain by admitting another pack.
- Human approval is available only through a visible UI control and is bound to the exact proposal digest and revision.

## Evidence limitations

Evidence digests detect protected-field mutation after generation. They do not prove that a real sensor told the truth, that a human identity was externally verified, or that the local host was uncompromised. Production designs must add independent identity, signing, key custody, external checkpoints, clock trust, durable claims, and deployment attestation.

## Reporting

Use the public repository's GitHub Security Advisory flow for vulnerabilities, or open an issue for non-sensitive defects. Do not include secrets, personal data, exploit payloads against third parties, or results from unauthorized external testing. Reports must reproduce the issue with synthetic fixtures only.
