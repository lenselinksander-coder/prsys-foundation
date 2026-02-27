"""Niveaus en domeinen voor het Taogate lesprogramma."""
from dataclasses import dataclass, field

MODULES = [
    "01_taogate",
    "02_orfheus_ai",
    "03_versnelling",
    "04_ethiek",
    "05_grondhouding",
]

MODULE_TITLES = {
    "01_taogate":      "Wat is Taogate?",
    "02_orfheus_ai":   "AI met en zonder Orfheus",
    "03_versnelling":  "De Versnelling",
    "04_ethiek":       "Ethiek in een versnelde wereld",
    "05_grondhouding": "Grondhouding",
}


@dataclass
class Niveau:
    key: str
    label: str
    omschrijving: str
    domeinen: list[str] = field(default_factory=list)


NIVEAUS: dict[str, Niveau] = {
    "mbo4": Niveau(
        key="mbo4",
        label="MBO4",
        omschrijving="Praktisch, concreet, herkenbaar vanuit de beroepspraktijk.",
        domeinen=[
            "Techniek & ICT",
            "Zorg & Welzijn",
            "Economie & Dienstverlening",
            "Creatieve industrie",
        ],
    ),
    "hbo": Niveau(
        key="hbo",
        label="HBO",
        omschrijving="Analytisch, methodisch, toepassingsgericht.",
        domeinen=[
            "Informatica / Data",
            "Bedrijfskunde",
            "Communicatie",
            "Sociaal werk",
            "Techniek",
        ],
    ),
    "uni": Niveau(
        key="uni",
        label="Universiteit",
        omschrijving="Theoretisch, kritisch-wetenschappelijk, interdisciplinair.",
        domeinen=[
            "Technische Wetenschappen",
            "Sociale Wetenschappen",
            "Filosofie / Ethiek",
            "Recht",
            "Economie",
        ],
    ),
    "docenten": Niveau(
        key="docenten",
        label="Docenten",
        omschrijving="Didactisch, reflectief, gericht op overdracht en begeleiding.",
        domeinen=[
            "MBO-docenten",
            "HBO-docenten",
            "WO-docenten",
            "Coaches & Begeleiders",
        ],
    ),
}
