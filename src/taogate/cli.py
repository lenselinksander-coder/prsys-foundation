"""Taogate CLI — navigeer door het lesprogramma."""
import click
from rich.console import Console
from rich.markdown import Markdown
from rich.panel import Panel
from rich.table import Table

from taogate.config import NIVEAUS, MODULE_TITLES
from taogate.lesson import laad_les, beschikbare_modules

console = Console()


def _niveau_keuze(niveau_key: str | None) -> str:
    if niveau_key and niveau_key in NIVEAUS:
        return niveau_key
    table = Table(title="Kies een niveau", show_header=True)
    table.add_column("Sleutel", style="bold cyan")
    table.add_column("Niveau")
    table.add_column("Omschrijving", style="dim")
    for key, n in NIVEAUS.items():
        table.add_row(key, n.label, n.omschrijving)
    console.print(table)
    keuze = console.input("[bold]Niveau[/bold] (mbo4 / hbo / uni / docenten): ").strip().lower()
    if keuze not in NIVEAUS:
        console.print(f"[red]Onbekend niveau: {keuze}[/red]")
        raise SystemExit(1)
    return keuze


@click.group()
def main():
    """Taogate lesprogramma — AI, ethiek en grondhouding."""


@main.command()
@click.option("--niveau", "-n", default=None, help="Niveau: mbo4 / hbo / uni / docenten")
def overzicht(niveau):
    """Toon beschikbare modules voor een niveau."""
    niveau_key = _niveau_keuze(niveau)
    n = NIVEAUS[niveau_key]
    modules = beschikbare_modules(niveau_key)

    console.print(Panel(f"[bold]{n.label}[/bold] — {n.omschrijving}", title="Taogate"))

    if not modules:
        console.print("[yellow]Nog geen lesmodules beschikbaar voor dit niveau.[/yellow]")
        return

    table = Table(show_header=True)
    table.add_column("#", style="dim")
    table.add_column("Module")
    table.add_column("Titel")
    for i, m in enumerate(modules, 1):
        table.add_row(str(i), m, MODULE_TITLES.get(m, m))
    console.print(table)


@main.command()
@click.option("--niveau", "-n", required=True, help="Niveau: mbo4 / hbo / uni / docenten")
@click.option("--module", "-m", required=True, help="Module-sleutel, bv. 01_taogate")
def les(niveau, module):
    """Toon een les."""
    if niveau not in NIVEAUS:
        console.print(f"[red]Onbekend niveau: {niveau}[/red]")
        raise SystemExit(1)

    l = laad_les(niveau, module)
    if l is None:
        console.print(f"[red]Les niet gevonden: {niveau}/{module}[/red]")
        raise SystemExit(1)

    console.print(Panel(f"[bold]{l.titel}[/bold]", subtitle=f"{niveau} / {module}"))
    console.print(Markdown(l.inhoud))

    if l.oefeningen:
        console.rule("[bold]Oefeningen[/bold]")
        for i, oe in enumerate(l.oefeningen, 1):
            console.print(Panel(Markdown(oe), title=f"Oefening {i}"))


@main.command()
@click.option("--niveau", "-n", required=True, help="Niveau: mbo4 / hbo / uni / docenten")
def domeinen(niveau):
    """Toon de domeinen/opleidingen voor een niveau."""
    if niveau not in NIVEAUS:
        console.print(f"[red]Onbekend niveau: {niveau}[/red]")
        raise SystemExit(1)
    n = NIVEAUS[niveau]
    console.print(Panel(f"Domeinen voor [bold]{n.label}[/bold]"))
    for d in n.domeinen:
        console.print(f"  • {d}")


@main.command()
def systeemcheck():
    """Controleer de taogate Python-omgeving."""
    import sys
    import os
    import importlib.util
    from pathlib import Path

    checks: list[tuple[str, bool, str]] = []

    # Python versie >= 3.10
    vinfo = sys.version_info
    py_ok = vinfo >= (3, 10)
    py_label = f"{vinfo.major}.{vinfo.minor}.{vinfo.micro}"
    checks.append(("Python >= 3.10", py_ok, py_label))

    # Verplichte packages
    for pkg in ("click", "rich"):
        aanwezig = importlib.util.find_spec(pkg) is not None
        checks.append((f"Package: {pkg}", aanwezig, "geïnstalleerd" if aanwezig else "ontbreekt"))

    # Optioneel: anthropic SDK
    anthropic_ok = importlib.util.find_spec("anthropic") is not None
    checks.append(("Package: anthropic (optioneel)", anthropic_ok,
                   "geïnstalleerd" if anthropic_ok else "niet geïnstalleerd"))

    # ANTHROPIC_API_KEY in omgeving
    api_key_ok = bool(os.environ.get("ANTHROPIC_API_KEY"))
    checks.append(("ANTHROPIC_API_KEY", api_key_ok,
                   "aanwezig" if api_key_ok else "niet ingesteld"))

    # Lessendirectory aanwezig
    lessons_dir = Path(__file__).resolve().parents[2] / "lessons"
    lessons_ok = lessons_dir.is_dir()
    lesson_count = sum(1 for _ in lessons_dir.rglob("les.md")) if lessons_ok else 0
    checks.append(("lessons/ directory", lessons_ok,
                   f"{lesson_count} les(sen) gevonden" if lessons_ok else "map ontbreekt"))

    table = Table(title="Taogate Systeemcheck", show_header=True, header_style="bold")
    table.add_column("Check", style="bold")
    table.add_column("Status", justify="center")
    table.add_column("Detail", style="dim")

    alles_ok = True
    for naam, ok, detail in checks:
        symbool = "[green]✓[/green]" if ok else "[red]✗[/red]"
        if not ok:
            alles_ok = False
        table.add_row(naam, symbool, detail)

    console.print(table)

    if alles_ok:
        console.print(Panel("[green]Alle checks geslaagd — taogate omgeving is gereed.[/green]"))
    else:
        console.print(Panel("[yellow]Sommige checks zijn niet geslaagd. Zie tabel hierboven.[/yellow]"))
        raise SystemExit(1)
