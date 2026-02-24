import argparse
import json
from pathlib import Path

from .model import Inputs, compute
from .transfer_guard import TransferGuard, TransferMetrics
from .audit import AuditLog


def _load_yaml_config(config_path: str) -> dict:
    """Laad YAML-configuratiebestand. Vereist pyyaml."""
    try:
        import yaml  # type: ignore
    except ImportError:
        raise SystemExit(
            "pyyaml is niet geïnstalleerd. Voer uit: pip install prsys-foundations[yaml]"
        )
    with open(config_path, encoding="utf-8") as fh:
        return yaml.safe_load(fh) or {}


def _run_cmd(args: argparse.Namespace) -> None:
    p = Path(args.input)
    data = json.loads(p.read_text(encoding="utf-8"))

    inputs = Inputs(
        tau=float(data["tau"]),
        omega=float(data["omega"]),
        ti=float(data["ti"]),
    )

    res = compute(inputs)

    notes = {
        "tau": "Decision torque domineert: constraint/mandate-druk is de hoofddriver.",
        "omega": "Tempo domineert: cadans en wisselsnelheid drijven overload-risico.",
        "ti": "Transfer integrity domineert: handover/context-verlies drijft risico.",
    }[res.dominant]

    out = {
        "r": round(res.r, 3),
        "band": res.band,
        "dominant": res.dominant,
        "notes": notes,
    }
    print(json.dumps(out, indent=2))


def _transfer_cmd(args: argparse.Namespace) -> None:
    # Metrics laden
    p = Path(args.input)
    data = json.loads(p.read_text(encoding="utf-8"))

    metrics = TransferMetrics(
        tau=float(data["tau"]),
        sigma_ext=float(data["sigma_ext"]),
        sigma_int=float(data["sigma_int"]),
        gradB=float(data["gradB"]),
        ti=float(data["ti"]),
    )

    # Configuratie laden (optioneel)
    guard_cfg: dict = {}
    audit_cfg: dict = {}

    if args.config:
        full_cfg = _load_yaml_config(args.config)
        guard_cfg = full_cfg.get("transfer_guard", {})
        audit_cfg = full_cfg.get("audit", {})

    guard = TransferGuard(guard_cfg)
    result = guard.evaluate(metrics)

    # Audit trail schrijven (Axioma A7)
    audit_enabled = audit_cfg.get("enabled", True)
    if audit_enabled and not args.no_audit:
        audit_path = args.audit_log or audit_cfg.get("path", "prsys_audit.jsonl")
        AuditLog(audit_path).record(result)

    # Output
    out = {
        "decision": result.decision,
        "stage": result.stage,
        "reason": result.reason,
        "phi": round(result.phi, 4) if result.phi is not None else None,
        "metrics": result.metrics.to_dict(),
    }
    print(json.dumps(out, indent=2, ensure_ascii=False))


def main() -> None:
    parser = argparse.ArgumentParser(prog="prsys", description="PRSYS Foundations CLI")
    sub = parser.add_subparsers(dest="cmd", required=True)

    # --- prsys run ---
    run = sub.add_parser("run", help="Voer overload-model uit op JSON-input")
    run.add_argument("--input", required=True, help="Pad naar JSON-inputbestand")

    # --- prsys transfer ---
    tr = sub.add_parser(
        "transfer",
        help="Evalueer een overdracht via de TI-GATE (TransferGuard)",
    )
    tr.add_argument("--input", required=True, help="Pad naar JSON met transfer-metrics")
    tr.add_argument(
        "--config",
        default=None,
        help="Pad naar YAML-configuratiebestand (bijv. config/default.yaml)",
    )
    tr.add_argument(
        "--audit-log",
        default=None,
        dest="audit_log",
        help="Pad naar audit-logbestand (overschrijft YAML-instelling)",
    )
    tr.add_argument(
        "--no-audit",
        action="store_true",
        dest="no_audit",
        help="Sla audit-logging over (niet aanbevolen voor productie)",
    )

    args = parser.parse_args()

    if args.cmd == "run":
        _run_cmd(args)
    elif args.cmd == "transfer":
        _transfer_cmd(args)
