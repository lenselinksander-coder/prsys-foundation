"""Laad en geef lesinhoud weer."""
from pathlib import Path
from dataclasses import dataclass

LESSONS_ROOT = Path(__file__).parent.parent.parent / "lessons"


@dataclass
class Les:
    niveau: str
    module: str
    titel: str
    inhoud: str
    oefeningen: list[str]


def _parse_oefeningen(tekst: str) -> tuple[str, list[str]]:
    """Splits op ## Oefeningen, geeft (body, oefeningen) terug."""
    if "## Oefeningen" in tekst:
        delen = tekst.split("## Oefeningen", 1)
        return delen[0].strip(), [r.strip() for r in delen[1].strip().split("\n---\n") if r.strip()]
    return tekst.strip(), []


def laad_les(niveau: str, module: str) -> Les | None:
    pad = LESSONS_ROOT / niveau / "modules" / module / "les.md"
    if not pad.exists():
        return None
    tekst = pad.read_text(encoding="utf-8")
    # Eerste # regel = titel
    lines = tekst.splitlines()
    titel = lines[0].lstrip("# ").strip() if lines else module
    body = "\n".join(lines[1:]).strip()
    body, oefeningen = _parse_oefeningen(body)
    return Les(niveau=niveau, module=module, titel=titel, inhoud=body, oefeningen=oefeningen)


def beschikbare_modules(niveau: str) -> list[str]:
    pad = LESSONS_ROOT / niveau / "modules"
    if not pad.exists():
        return []
    return sorted(d.name for d in pad.iterdir() if d.is_dir() and (d / "les.md").exists())
