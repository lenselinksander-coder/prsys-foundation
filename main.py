"""TI Gate – demo entry point voor Replit."""
import json
from src.prsys.model import Inputs, compute
from src.prsys.transfer_guard import TransferGuard, TransferMetrics

# --- Overload meting ---
print("=== TI Gate: Overload Meting ===")
inputs = Inputs(tau=0.9, omega=18, ti=0.42)
res = compute(inputs)
print(json.dumps({
    "r": round(res.r, 3),
    "band": res.band,
    "dominant": res.dominant,
}, indent=2))

# --- Transfer poortwachter ---
print("\n=== TI Gate: Transfer Poortwachter ===")
metrics = TransferMetrics(tau=0.9, sigma_ext=0.2, sigma_int=0.1, gradB=0.4, ti=0.95)
result = TransferGuard().evaluate(metrics)
print(json.dumps({
    "decision": result.decision,
    "stage": result.stage,
    "reason": result.reason,
    "phi": round(result.phi, 4) if result.phi is not None else None,
}, indent=2))
