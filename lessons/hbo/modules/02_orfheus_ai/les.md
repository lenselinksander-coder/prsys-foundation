# AI met en zonder Orfheus

## De Orfheus-metafoor

In de Griekse mythologie daalt Orfheus af naar de onderwereld om Eurydike terug te halen. De voorwaarde: hij mag niet omkijken. Hij kijkt toch — en verliest haar.

Wat op het eerste gezicht een mislukking lijkt, is ook een illustratie van reflectief vermogen: Orfheus *kon* niet anders dan terugkijken. Die drang tot reflectie is zijn wezen.

In het Taogate-kader staat **Orfheus** voor AI-systemen (of AI-gebruikspatronen) die:
- De eigen redenering expliciteren
- Onzekerheid communiceren
- Terugvragen bij ambiguïteit
- Contextuele nuance bewaren

**Niet-Orfheus AI** geeft een antwoord. **Orfheus AI** geeft een antwoord én een redeneerpad.

## Architecturele implicaties

Vanuit een systeemontwerpperspectief zijn er twee benaderingen:

**Pipeline-model (zonder Orfheus)**
```
Input → Model → Output
```
Efficiënt, snel, moeilijk auditeerbaar.

**Reflectief model (met Orfheus)**
```
Input → Redeneerlaag → Evaluatielaag → Output + Verantwoording
```
Langzamer, explicieter, beter auditeerbaar — maar ook complexer te implementeren.

## Kritische kanttekening

Orfheus-AI is geen panacee. Risico's:
- **Pseudo-transparantie**: een redeneerpad dat plausibel klinkt maar niet de werkelijke inferentie weergeeft
- **Vertrouwensinflatie**: gebruikers vertrouwen een systeem meer *omdat* het uitlegt, niet *omdat* de uitleg klopt
- **Overload**: te veel uitleg verlaagt de drempel om gate-functie daadwerkelijk uit te voeren

## Oefeningen

**Oefening 1 — Architectuurkeuze**

Je ontwerpt een beslissingsondersteunend systeem voor een zorginstelling. Stakeholders willen snelheid; toezichthouder wil auditeerbaarheid.

Maak een argumentatiekaart:
- Pro pipeline-model
- Pro reflectief model
- Wat zijn de doorslaggevende criteria?

---

**Oefening 2 — Prompt engineering**

Ontwerp twee prompts voor dezelfde taak:
1. Een die een directe output stimuleert
2. Een die de AI dwingt zijn redenering te expliciteren (chain-of-thought)

Vergelijk de outputs. Beoordeel op: kwaliteit, betrouwbaarheid, bruikbaarheid voor een professional.
