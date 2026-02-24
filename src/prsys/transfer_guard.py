"""
TI-GATE: Transfer Integrity Gate
---------------------------------
Poortwachter voor overdrachten tussen organisaties, gebaseerd op de
TRST-architectuur en TDS (Theorem of Directional Stability).

State machine per overdracht:
  MANDATE_CHECK → PRE_GATE (TI-drempel) → EXECUTE (Phi + gradB-check)

Variabelen:
  tau        – Draagkracht bij ontvanger (carrying capacity)
  sigma_ext  – Externe frictie (netwerklatency / foutmarge)
  sigma_int  – Interne overhead van de overdracht
  gradB      – Nuttige progressie / waarde van de overdracht
  ti         – Transfer Integrity (0.05 .. 1.0)

Configuratie-parameters (instelbaar via YAML):
  ti_min     – Minimale integriteitsscore (Axioma A10)
  phi_crit   – Bovengrens netto voortstuwingsratio (overvectoring)
  delta      – Minimale progressiedrempel (Daedalus-stasis grens)
  c          – Drukvermenigvuldiger (THROTTLE_OR_SPLIT_STEP trigger)
  eps        – Kleine buffer voor randgevallen
"""

from __future__ import annotations

from dataclasses import dataclass, asdict
from typing import Literal, Optional


Decision = Literal[
    "OK",
    "BLOCK",
    "CLOSE_CONTACTPOINT",
    "THROTTLE_HARD",
    "NO_OP",
    "THROTTLE_OR_SPLIT_STEP",
]


@dataclass(frozen=True)
class TransferMetrics:
    tau: float        # Draagkracht bij ontvanger
    sigma_ext: float  # Externe frictie
    sigma_int: float  # Interne overhead
    gradB: float      # Nuttige progressie
    ti: float         # Transfer Integrity (0.05..1.0)

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass(frozen=True)
class TransferResult:
    decision: Decision
    reason: str
    phi: Optional[float]   # None als geblokkeerd vóór phi-berekening
    metrics: TransferMetrics
    stage: str             # State machine stap waar beslissing valt


class TransferGuard:
    """
    Evalueert of een overdracht tussen organisaties veilig mag plaatsvinden.

    Gebruik::

        guard = TransferGuard(config)
        result = guard.evaluate(metrics)
        print(result.decision, result.reason)
    """

    def __init__(self, config: Optional[dict] = None) -> None:
        cfg = config or {}
        self.ti_min = float(cfg.get("ti_min", 0.8))
        self.phi_crit = float(cfg.get("phi_crit", 5.0))
        self.delta = float(cfg.get("delta", 0.05))
        self.c = float(cfg.get("c", 2.0))
        self.eps = float(cfg.get("eps", 0.10))

    # ------------------------------------------------------------------
    # Publieke interface
    # ------------------------------------------------------------------

    def evaluate(self, metrics: TransferMetrics) -> TransferResult:
        """
        Voert de volledige state machine uit en retourneert een TransferResult.
        """
        # Stage 1 – MANDATE_CHECK (TI integrity threshold, Axioma A10)
        result = self._mandate_check(metrics)
        if result is not None:
            return result

        # Stage 2 – PRE_GATE (phi-berekening + stabiliteitscontrole)
        phi = self._compute_phi(metrics)
        result = self._pre_gate(metrics, phi)
        if result is not None:
            return result

        # Stage 3 – EXECUTE (progressie- en drukcontrole)
        return self._execute(metrics, phi)

    # ------------------------------------------------------------------
    # State machine stappen
    # ------------------------------------------------------------------

    def _mandate_check(self, m: TransferMetrics) -> Optional[TransferResult]:
        """Axioma A10: TI moet minimaal ti_min zijn."""
        if m.ti < self.ti_min:
            return TransferResult(
                decision="BLOCK",
                reason=(
                    f"Integriteit te laag: TI={m.ti:.3f} < ti_min={self.ti_min:.3f}. "
                    "Overdracht geblokkeerd."
                ),
                phi=None,
                metrics=m,
                stage="MANDATE_CHECK",
            )
        return None

    def _compute_phi(self, m: TransferMetrics) -> float:
        """Netto Voortstuwingsratio: phi = tau / (sigma_ext + sigma_int)."""
        denom = m.sigma_ext + m.sigma_int
        if denom < self.eps:
            denom = self.eps  # voorkom deling door nul
        return m.tau / denom

    def _pre_gate(self, m: TransferMetrics, phi: float) -> Optional[TransferResult]:
        """Stabiliteitstesten op basis van TDS."""
        if phi <= 1.0:
            return TransferResult(
                decision="CLOSE_CONTACTPOINT",
                reason=(
                    f"Geen netto draagkracht: phi={phi:.3f} ≤ 1.0. "
                    "Collapse-risico – verbinding sluiten."
                ),
                phi=phi,
                metrics=m,
                stage="PRE_GATE",
            )
        if phi >= self.phi_crit:
            return TransferResult(
                decision="THROTTLE_HARD",
                reason=(
                    f"Overvectoring-risico: phi={phi:.3f} ≥ phi_crit={self.phi_crit:.3f}. "
                    "Hard throttlen vereist."
                ),
                phi=phi,
                metrics=m,
                stage="PRE_GATE",
            )
        return None

    def _execute(self, m: TransferMetrics, phi: float) -> TransferResult:
        """Progressie- en drukcontrole (Daedalus-stasis en overpressure)."""
        abs_gradB = abs(m.gradB)

        if abs_gradB <= self.delta:
            return TransferResult(
                decision="NO_OP",
                reason=(
                    f"Geen betekenisvolle voortgang: |gradB|={abs_gradB:.3f} ≤ delta={self.delta:.3f}. "
                    "Daedalus-stasis gedetecteerd."
                ),
                phi=phi,
                metrics=m,
                stage="EXECUTE",
            )

        pressure_limit = self.c * phi
        if abs_gradB >= pressure_limit:
            return TransferResult(
                decision="THROTTLE_OR_SPLIT_STEP",
                reason=(
                    f"Te hoge druk voor verbinding: |gradB|={abs_gradB:.3f} ≥ "
                    f"c×phi={pressure_limit:.3f}. Splits of vertraag de stap."
                ),
                phi=phi,
                metrics=m,
                stage="EXECUTE",
            )

        return TransferResult(
            decision="OK",
            reason=(
                f"Overdracht toegestaan. phi={phi:.3f}, |gradB|={abs_gradB:.3f}, "
                f"TI={m.ti:.3f}."
            ),
            phi=phi,
            metrics=m,
            stage="EXECUTE",
        )
