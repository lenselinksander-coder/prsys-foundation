"""
Audit Trail – Axioma A7 (Immutable Trace)
------------------------------------------
Elke uitkomst van de TransferGuard wordt als een JSONL-record weggeschreven
in een append-only logbestand. Records worden nooit gewijzigd of verwijderd.

Formaat per regel:
  {"ts": "<ISO8601>Z", "decision": "...", "reason": "...", "phi": ...,
   "stage": "...", "metrics": {...}}

Gebruik::

    from prsys.audit import AuditLog
    from prsys.transfer_guard import TransferGuard, TransferMetrics

    log = AuditLog("prsys_audit.jsonl")
    guard = TransferGuard()
    result = guard.evaluate(metrics)
    log.record(result)
"""

from __future__ import annotations

import datetime
import json
from pathlib import Path

from .transfer_guard import TransferResult


class AuditLog:
    """
    Append-only audit log voor TransferGuard-beslissingen (Axioma A7).

    Parameters
    ----------
    path:
        Pad naar het JSONL-logbestand. Wordt aangemaakt als het niet bestaat.
    """

    def __init__(self, path: str | Path = "prsys_audit.jsonl") -> None:
        self.path = Path(path)

    def record(self, result: TransferResult) -> None:
        """Schrijf één TransferResult als JSON-regel naar het logbestand."""
        entry = {
            "ts": datetime.datetime.now(datetime.timezone.utc).strftime(
                "%Y-%m-%dT%H:%M:%S.%fZ"
            ),
            "decision": result.decision,
            "reason": result.reason,
            "phi": round(result.phi, 6) if result.phi is not None else None,
            "stage": result.stage,
            "metrics": result.metrics.to_dict(),
        }
        with self.path.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(entry, ensure_ascii=False) + "\n")

    def tail(self, n: int = 10) -> list[dict]:
        """Lees de laatste n records uit het logbestand (voor inspectie)."""
        if not self.path.exists():
            return []
        lines = self.path.read_text(encoding="utf-8").splitlines()
        return [json.loads(line) for line in lines[-n:] if line.strip()]
