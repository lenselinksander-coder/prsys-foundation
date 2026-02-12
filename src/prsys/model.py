from dataclasses import dataclass

@dataclass(frozen=True)
class Inputs:
    tau: float   # decision torque
    omega: float # tempo / cadence
    ti: float    # transfer integrity (0..1)

@dataclass(frozen=True)
class Result:
    r: float
    band: str
    dominant: str

def clamp(x: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, x))

def compute(inputs: Inputs) -> Result:
    tau = clamp(inputs.tau, 0.0, 2.0)
    omega = clamp(inputs.omega, 0.0, 50.0)
    ti = clamp(inputs.ti, 0.05, 1.0)

    r = tau * omega * (1.0 / ti)

    if r < 15:
        band = "LOW"
    elif r < 35:
        band = "MED"
    else:
        band = "HIGH"

    contrib_tau = tau
    contrib_omega = omega / 10.0
    contrib_ti = (1.0 / ti)

    dominant = max(
        [("tau", contrib_tau), ("omega", contrib_omega), ("ti", contrib_ti)],
        key=lambda p: p[1]
    )[0]

    return Result(r=r, band=band, dominant=dominant)
