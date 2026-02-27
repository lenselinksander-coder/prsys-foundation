# Taogate Lesprogramma

**AI, ethiek en grondhouding** — voor MBO4, HBO, universiteit en docenten.

Taogate onderzoekt de verhouding tussen mens en AI: wanneer vertraag je bewust, wie bewaakt de gate, en hoe hou je je grondhouding overeind in een versnelde wereld?

---

## Structuur

```
lessons/
├── mbo4/        # Praktisch, concreet, beroepsgericht
├── hbo/         # Analytisch, methodisch, toepassingsgericht
├── uni/         # Theoretisch, kritisch-wetenschappelijk
└── docenten/    # Didactisch, reflectief, overdrachtsgerichte handleidingen

codex/           # Mandaatbroncode — NIET voor studenten, .gitignored
workspace/       # Lokale werkruimte studenten
```

### Modules (alle niveaus)

| # | Module | Titel |
|---|--------|-------|
| 01 | `01_taogate` | Wat is Taogate? |
| 02 | `02_orfheus_ai` | AI met en zonder Orfheus |
| 03 | `03_versnelling` | De Versnelling |
| 04 | `04_ethiek` | Ethiek in een versnelde wereld |
| 05 | `05_grondhouding` | Grondhouding |

---

## Installatie

```bash
pip install -e .
```

## Gebruik

```bash
# Overzicht modules voor een niveau
taogate overzicht --niveau mbo4

# Een les lezen
taogate les --niveau hbo --module 02_orfheus_ai

# Domeinen per niveau
taogate domeinen --niveau uni
```

Of zonder vlaggen — de CLI vraagt dan om een keuze:

```bash
taogate overzicht
```

---

## Codex

De codex (mandaatbroncode) bevat de theoretische fundering van het Taogate-kader.
Studenten hebben deze **niet nodig** om het programma te doorlopen.

Docenten kunnen toegang aanvragen bij de programmacoördinator.
De `codex/` directory is uitdrukkelijk in `.gitignore` opgenomen en wordt nooit gepusht.

---

## Bijdragen / aanpassen

Lesinhoud zit in `lessons/<niveau>/modules/<module>/les.md`.
Structuur en domeinen in `src/taogate/config.py`.

Niveaus toevoegen: voeg een `Niveau` toe in `config.py` en maak de corresponderende directory aan.
