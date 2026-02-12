"""
LLM Adapter (hackathon skeleton)

Purpose:
- Convert a free-text system description into numeric scalars: tau, omega, ti.
- This file intentionally contains NO API keys and NO vendor lock-in.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Dict, Any
import json


@dataclass(frozen=True)
class ScalarEstimate:
    tau: float
    omega: float
    ti: float
    rationale: str


PROMPT = """You are extracting scalars for a pre-governance overload model.
Return ONLY valid JSON.

Definitions:
- tau (decision torque): 0.0..2.0 (higher = decisions forced through constraints)
- omega (tempo): 0.0..50.0 (higher = faster cadence/change)
- ti (transfer integrity): 0.05..1.0 (higher = cleaner handovers)

Rules:
- Do NOT diagnose people.
- Do NOT mention burnout or mental health.
- Do NOT prescribe culture change.
- Output JSON with keys: tau, omega, ti, rationale.

Text:
{TEXT}
"""


def build_prompt(text: str) -> str:
    return PROMPT.replace("{TEXT}", text.strip())


def parse_json_reply(reply: str) -> Dict[str, Any]:
    # minimal robustness for hackathon demos
    reply = reply.strip()
    return json.loads(reply)


def estimate_scalars_from_text(
    text: str,
    *,
    llm_call: Optional[callable] = None
) -> ScalarEstimate:
    """
    Provide llm_call(prompt: str) -> str to integrate with an LLM.
    For hackathon safety, this function can be tested by passing a stub.
    """
    prompt = build_prompt(text)

    if llm_call is None:
        raise RuntimeError(
            "No llm_call provided. Pass a function llm_call(prompt)->str "
            "or implement vendor-specific call outside this repo."
        )

    reply = llm_call(prompt)
    data = parse_json_reply(reply)

    return ScalarEstimate(
        tau=float(data["tau"]),
        omega=float(data["omega"]),
        ti=float(data["ti"]),
        rationale=str(data.get("rationale", "")),
    )