import argparse
import json
from pathlib import Path

from .model import Inputs, compute

def main() -> None:
    parser = argparse.ArgumentParser(prog="prsys", description="PRSYS Foundations CLI")
    sub = parser.add_subparsers(dest="cmd", required=True)

    run = sub.add_parser("run", help="Run model on JSON input")
    run.add_argument("--input", required=True, help="Path to JSON input file")

    args = parser.parse_args()

    if args.cmd == "run":
        p = Path(args.input)
        data = json.loads(p.read_text(encoding="utf-8"))

        inputs = Inputs(
            tau=float(data["tau"]),
            omega=float(data["omega"]),
            ti=float(data["ti"]),
        )

        res = compute(inputs)

        notes = {
            "tau": "Decision torque dominates: constraint/mandate pressure is the main driver.",
            "omega": "Tempo dominates: cadence and change-rate drive overload risk.",
            "ti": "Transfer integrity dominates: handover/context loss drives risk."
        }[res.dominant]

        out = {
            "r": round(res.r, 3),
            "band": res.band,
            "dominant": res.dominant,
            "notes": notes
        }

        print(json.dumps(out, indent=2))
