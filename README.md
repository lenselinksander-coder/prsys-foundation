# PRSYS Foundations (Hackathon build)

PRSYS is a lightweight pre-governance modeling layer: it does not diagnose people and it does not prescribe culture.
It quantifies *when* operational tempo outpaces mandate structure and produces mechanical overload risk.

This repo contains a minimal, reproducible prototype:
- a small load-capacity model
- a CLI that turns a few inputs into a "risk envelope"
- a reference flow diagram (Mermaid)

## Concept (minimal)
We model overload risk as a function of:
- **τ (torsion / decision torque)**: how hard decisions must be forced through constraints
- **ω (tempo / cadence)**: rate of change, meetings, handovers, interrupts
- **TI (transfer integrity)**: how cleanly context and responsibility transfer across roles

A simple derived metric:
`R = τ × ω × (1 / TI)`

R is not "burnout". It is an *overload indicator* for system conditions.

## Quickstart
Requires Python 3.10+.

```bash
pip install -e .
prsys --help
prsys run --input examples/sample_input.json
