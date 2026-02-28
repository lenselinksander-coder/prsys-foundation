# Olympia: Attunement, Tempo en de O36-Constraint

## §5.1  Introductie: het Olympia-begrip

In de PRSYS-architectuur staat **Olympia** voor de toestand van maximale operationele
effectiviteit binnen strikte systeemconstraints. De term is ontleend aan het Griekse
begrip van het Olympische ideaal: niet de afwezigheid van beperking, maar de bereking
van piek-prestatie *precies door* beperking te accepteren en te benutten.

Olympia is daarmee het normatieve tegenbegrip voor overbelasting. Waar overbelasting
ontstaat wanneer het systeem zijn eigen constraints negeert, beschrijft Olympia de
toestand waarin het systeem zijn constraints kent, respecteert en als navigatieruimte
gebruikt.

Het begrip articuleert een spanning die centraal staat in het PRSYS-kader: efficiëntie
en duurzaamheid zijn niet hetzelfde. Een systeem kan kortstondig boven zijn Olympia-grens
opereren — maar het betaalt daarvoor een prijs in slijtage, foutaccumulatie en
herstelcapaciteitsverlies.

De relatie tot de andere PRSYS-grootheden:

```
ORFHEUSS  →  ethische gate (mandaat, integriteit, draagkracht)
OLYMPIA   →  operationele gate (tempo, torsie, attunement)
```

ORFHEUSS en Olympia zijn complementair: een beslissing die de ethische gate passeert,
moet ook de operationele gate doorstaan. Een actie die snel en efficiënt is maar de
mandaatstructuur negeert, faalt bij ORFHEUSS. Een actie die ethisch is maar het systeem
overbelast, faalt bij Olympia.

---

## §5.2  De ω-Attunement-Wet en Haar Grondslagen

De kern van Olympia is de **ω-attunement-wet** — de eis dat het operationele tempo (ω)
in overeenstemming is (*attuned*) met de netto draagkrachtcapaciteit van het systeem:

```
ω ≤ f(τ − σ_ext)
```

Waarbij:
- **ω** (*omega*) — het operationele tempo: de snelheid van beslissingen, overdrachten,
  schakelingen en interventies per tijdseenheid
- **τ** (*tau*) — de beslissingstorsie: de kracht waarmee beslissingen door structurele
  weerstand worden geduwd (zie Hoofdstuk 1, §1.3)
- **σ_ext** (*sigma extern*) — de externe frictie: de omgevingsdruk, netwerklatentie
  en externe mandaatbeperkingen op het systeem
- **f(·)** — de attunement-functie: de systeemspecifieke relatie tussen netto torsie
  en maximaal toelaatbaar tempo

De functie f(·) is niet universeel. Zij is organisatiespecifiek en moet worden
gekalibreerd op basis van empirische observatie (zie §5.6). Als vuistregel geldt:

```
ω_max ≈ (τ − σ_ext) / κ
```

Waarbij κ een systeemspecifieke traagheidscoëfficiënt is. Een hoge κ betekent dat het
systeem meer tijd nodig heeft om een toename in netto torsie te absorberen — het "trager"
aanpast. Een lage κ betekent dat het systeem snel kan schakelen maar ook snel overbelast
raakt bij veranderingen.

### Attunement als dynamisch evenwicht

Attunement is geen statische toestand maar een continu proces van bijstelling. Een systeem
in Olympia-toestand bewaakt actief de balans tussen ω en de netto torsiecapaciteit. Dit
vereist:

1. **Monitoring**: continue meting van ω en τ (zie Hoofdstuk 3 voor instrumentarium)
2. **Signalering**: vroegtijdige detectie van afwijkingen van het attunement-bereik
3. **Responsiviteit**: capaciteit om ω te verlagen vóórdat σ_int problematisch stijgt
4. **Dissipatie**: gecontroleerde vrijgave van geaccumuleerd surplus (zie §5.7)

---

## §5.3  O36-Constraint: Definitie en Toepassingsgebied

De **O36-constraint** is de 36e operationele constraint in de PRSYS-codex. Zij formaliseert
de attunement-wet als een institutioneel verantwoordelijkheidsbeginsel:

> *O36 — Attunement-verplichting: Een organisatorisch systeem draagt de expliciete
> verantwoordelijkheid om het operationele tempo (ω) te bewaken en te reguleren binnen
> het bereik dat door de netto torsiecapaciteit is toegestaan. Overschrijding van dit
> bereik zonder actief dissipatiemechanisme constitueert een schending van de
> draagkrachtplicht tegenover de systeemdeelnemers.*

Drie elementen van O36 verdienen nadere uitwerking:

### 1. "Expliciete verantwoordelijkheid"

O36 legt de attunement-verantwoordelijkheid bij het systeem als institutie, niet bij
individuele deelnemers. Een medewerker die aangeeft dat de werkdruk te hoog is, meldt een
O36-signaal. De verantwoordelijkheid om te responderen ligt bij de institutie — niet bij
de medewerker om te "wennen" aan hogere druk.

Dit onderscheidt O36 van het individualistische burnout-discours: het is geen persoonlijk
falen maar een systeemfalen als attunement niet wordt geborgd.

### 2. "Actief dissipatiemechanisme"

O36 erkent dat tijdelijke ω-overschrijding onvermijdelijk is — crises, deadlines en
onvoorziene omstandigheden zullen het systeem periodiek boven Olympia drijven. De
constraint eist niet dat dit nooit gebeurt; zij eist dat er *actieve dissipatie* plaatsvindt
zodra de overschrijding is beëindigd (zie §5.7 voor uitwerking).

### 3. "Draagkrachtplicht tegenover systeemdeelnemers"

O36 situeert de attunement-eis binnen een relationele ethiek: het systeem heeft verplichtingen
tegenover zijn deelnemers. Die verplichting omvat de waarborg dat tempo niet structureel
boven draagkracht wordt gehouden. Dit raakt aan fundamentele arbeids- en zorgethische
principes die PRSYS verankert in zijn axiomatische basis (zie Axioma A7 — Immutable Trace
en Axioma A10 — Transfer Integrity Threshold).

---

## §5.4  Faseruimte en Toestandsovergangen

De Olympia-dynamiek is conceptueel het best beschreven via een **faseruimte** — een
tweedimensionale ruimte met ω op de y-as en (τ − σ_ext) op de x-as.

```
ω
│                              / overbelasting
│                         /   /  (ω > ω_max)
│                   /   /
│    Olympia-zone  /   /
│                 /   /
│   (ω ≤ ω_max) /   /
│               /___/   attunement-grens
│              /
│  stagnatie  /   (ω < ω_min)
│            /
└─────────────────────────────── (τ − σ_ext)
```

In deze ruimte zijn drie zones te onderscheiden:

**Zone 1 — Stagnatie** (ω < ω_min): het systeem opereert te traag voor de beschikbare
capaciteit. Potentie wordt verspild; deelnemers ervaren onderstimulering; kennis en
momentum gaan verloren. TaoGate-term: *Daedalus-stasis* (|gradB| ≤ δ).

**Zone 2 — Olympia** (ω_min ≤ ω ≤ ω_max): het systeem opereert in optimale attunement.
Energie wordt effectief omgezet in output; deelnemers ervaren flow; het systeem bouwt
herstelcapaciteit op.

**Zone 3 — Overbelasting** (ω > ω_max): het systeem opereert boven zijn attunement-grens.
Fouten accumuleren; σ_int stijgt; TI degradeert; deelnemers tonen tekenen van afstomping.
TaoGate-term: *overvectoring* (φ ≥ φ_crit).

Toestandsovergangen tussen de zones zijn niet altijd lineair. Systemen die lang in Zone 3
opereren, ontwikkelen een verhoogde κ (traagheid) waardoor terugkeer naar Olympia meer
inspanning kost dan de oorspronkelijke overschrijding. Dit is het **slijtage-effect**: de
attunement-grens daalt naarmate het systeem langer buiten haar heeft geopereerd.

---

## §5.5  Olympia in Institutionele Systemen

Olympia als concept is ontwikkeld voor technische systemen maar heeft directe implicaties
voor menselijke organisaties. De vertaling vereist aandacht voor drie institutionele
complicaties:

### 1. Heterogeniteit van ω

In een organisatie bestaat niet één tempo maar een *polyfonie* van tempo's: afdelingstempo,
individueel tempo, beslissingstempo, communicatietempo. Een Olympia-analyse moet specificeren
*welk* tempo zij betreft en hoe de verschillende tempo's op elkaar inwerken.

Praktisch gevolg: een afdeling kan in Olympia opereren op het niveau van individuele taken,
terwijl zij buiten Olympia opereert op het niveau van interdepartementale afstemming. De
aggregatie is niet triviaal.

### 2. Verborgen σ_ext

Externe frictie is in organisaties zelden volledig zichtbaar. Regulatoire druk, marktonzekerheid,
stakeholder-verwachtingen en culturele normen vormen een σ_ext-omgeving die moeilijk
te kwantificeren is. O36 vereist echter dat de organisatie *een* schatting maakt — ook een
grove schatting is beter dan de assumptie dat σ_ext = 0.

### 3. Politieke dimensie van attunement

Tempo-beslissingen zijn machtsbeslissingen. Wie bepaalt wat het "juiste" tempo is? Wiens
ervaring van overbelasting telt? Olympia vereist institutionele mechanismen voor collectieve
tempo-evaluatie — niet alleen top-down monitoring, maar ook bottom-up signalering met
garanties dat signalen zonder sanctie kunnen worden afgegeven (zie ORFHEUSS-component
*draagkracht* in Hoofdstuk 4).

---

## §5.6  Praktische Oefening: Attunement-Diagnose

Deze sectie biedt een diagnostisch instrument voor toepassing van de Olympia-analyse in
een concrete organisatorische context. Het instrument bestaat uit vier stappen.

**Stap 1 — ω-meting**

Selecteer een meetperiode (2–4 weken). Registreer per dag:
- Aantal beslissingen met significante consequentie (drempelwaarde naar eigen oordeel)
- Aantal context-wissels (schakelingen tussen taken, dossiers, overleggen)
- Aantal onvolledige handelingen (gestart maar niet afgerond)

Aggregeer tot een ω-profiel voor de meetperiode.

**Stap 2 — τ- en σ_ext-schatting**

Stel per beslissingscategorie:
- Hoeveel weerstand ondervond de uitvoering? (τ-proxy: laag/middel/hoog)
- Welke externe factoren beperkten de uitvoeringsruimte? (σ_ext-proxy: identificeer de
  drie meest invloedrijke externe factoren)

**Stap 3 — Olympia-zonering**

Plot uw ω-profiel en τ−σ_ext schatting in de faseruimte (§5.4). In welke zone opereert
uw systeem? Zijn er periodes van Zone 3 (overbelasting) te identificeren?

**Stap 4 — O36-diagnose**

Beantwoord: welke dissipatiemechanismen zijn aanwezig (zie §5.7)? Werden zij ingezet na
de geïdentificeerde overbelastingsperiodes? Zo nee: wat verhinderde dat?

Lever de diagnose in als een gestructureerde notitie (600–800 woorden) met het ω-profiel
als bijlage. Gebruik de PRSYS-terminologie consequent.

---

## §5.7  Dissipatie als Regulatiemechanisme in O36-Context

### Definitie

**Dissipatie** is in de PRSYS-architectuur het gecontroleerde proces waarbij geaccumuleerde
ω-energie (operationele spanning) wordt omgezet naar een niet-operationele, herstelbare
vorm — zonder dat dit leidt tot systeemcollapse of structureel capaciteitsverlies.

De term is ontleend aan de thermodynamica: dissipatie is de omzetting van geordende
mechanische energie naar ongeordende thermische energie (warmte). In een systeem dat lange
tijd ω > ω_max heeft geopereerd, bestaat een *spanningsreservoir* — een opgebouwde
interne druk (σ_int) die niet via normale output is vrijgegeven.

O36 vereist actieve dissipatie zodra een overbelastingsperiode (Zone 3) is beëindigd of
wordt gedetecteerd. Dissipatie is daarmee geen luxe of beloning, maar een **technische
noodzaak** voor het herstel van Olympia-capaciteit.

### Dissipatie versus collapse

Het onderscheid tussen dissipatie en collapse is centraal voor O36:

| Kenmerk | Dissipatie | Collapse |
|---|---|---|
| Initiatie | Proactief, gecontroleerd | Reactief, ongecontroleerd |
| Richting | Geordend vrijgeven naar herstel | Chaotisch verlies van functie |
| Resultaat | Herstel van attunement-capaciteit | Permanente of langdurige capaciteitsreductie |
| TI-effect | TI stabiliseert en herstelt | TI daalt verder |
| O36-status | Compliance | Schending |

Een organisatie die dissipatie niet faciliteert maar ω-reductie via uitstroom van deelnemers
realiseert (verloop, ziekteverzuim, ontslag), ervaart collapse — geen dissipatie. De
capaciteitsreductie is reëel; het spanningsreservoir wordt niet vereffend maar geëxporteerd.

### Dissipatiemechanismen in institutionele context

De volgende categorieën dissipatiemechanismen zijn in PRSYS gedocumenteerd als O36-compliant:

**Temporele dissipatie**
Expliciete periodes van verlaagd ω na een Zone 3-episode: rustweken, projectpauzes,
periodes zonder nieuwe commitments. Kenmerk: de periode is vooraf aangekondigd, gedefinieerd
in duur, en vrij van nieuwe torsie-input.

**Relationele dissipatie**
Gestructureerde evaluatie van de overbelastingsperiode in groepsverband: wat is er
gebeurd, wat had anders gekund, wat wordt anders gedaan. Kenmerk: psychologische
veiligheid is een voorwaarde — O36 vereist dat signalering zonder sanctie kan.

**Structurele dissipatie**
Aanpassing van de systeemstructuur als respons op geïdentificeerde O36-schendingen: rolverdeling
herzien, beslissingsarchitectuur vereenvoudigen, redundantie inbouwen. Kenmerk: dit is de
diepste maar ook traagste vorm van dissipatie.

**Rituele dissipatie**
In traditionele organisatiekaders: vaste momenten van collectieve reflectie, viering en
rouw die de emotionele component van het spanningsreservoir reguleren. In PRSYS-terminologie:
de TaoGate zelf kan als ritueel dissipatie-moment fungeren als zij bewust zo wordt ingericht.

### De O36-dissipatieplicht in de praktijk

O36 legt geen specifieke dissipatiemethode op — de keuze is systeemspecifiek en contextafhankelijk.
Zij stelt wel drie minimale eisen:

1. **Detectie**: het systeem heeft een mechanisme om Zone 3-episodes te detecteren, bij
   voorkeur vroegtijdig (zie §5.6, Stap 3)
2. **Respons**: het systeem heeft vooraf bepaalde dissipatiemechanismen beschikbaar en
   heeft de verantwoordelijkheid belegd om deze te activeren
3. **Evaluatie**: na de dissipatie-episode evalueert het systeem of attunement is hersteld
   en registreert dit in het audittraject (Axioma A7 — Immutable Trace)

Organisaties die O36 serieus nemen, behandelen dissipatie niet als "downtime" maar als
**productieve investering**: de herstelcapaciteit die dissipatie genereert, is de
voorwaarde voor elke volgende Olympia-periode.

---

## Oefeningen

**Oefening 5.1 — Olympia-faseanalyse**

Selecteer een afdeling of team (uit stage, praktijk of literatuurcasus). Beschrijf op basis
van beschikbare informatie:

1. De dominante ω-dynamiek: is er sprake van gereguleerd tempo, stagnatie of structurele
   overbelasting?
2. De τ−σ_ext-verhouding: welke torsie-bronnen zijn identificeerbaar? Welke externe
   frictiefactoren spelen een rol?
3. Positie in de faseruimte: in welke Olympia-zone opereert het systeem primair?

Analyseer vervolgens: welke institutionele mechanismen zouden het systeem naar de Olympia-zone
kunnen bewegen? Wat verhindert dat in de huidige context?

Lever in als analytisch verslag (1200–1500 woorden) met een schetsmatig faseruimtediagram
als bijlage.

---

**Oefening 5.2 — O36-audit**

Voer een O36-audit uit op een organisatorische casus naar keuze (historisch, contemporain,
of hypothetisch). De audit bestaat uit drie onderdelen:

*Deel A*: Is er sprake van een identificeerbare Zone 3-periode? Documenteer met
beschikbare indicatoren (verloop, foutfrequentie, kwaliteitsmeldingen, ziekteverzuim).

*Deel B*: Welke dissipatiemechanismen waren aanwezig? Werden zij geactiveerd? Waren zij
O36-compliant (zie de drie minimale eisen in §5.7)?

*Deel C*: Formuleer een O36-herstelplan: welke specifieke maatregelen, in welke volgorde,
met welk verwacht effect op de attunement-capaciteit?

Lever in als auditrapport (1500–2000 woorden) in de stijl van een professioneel
intern-onderzoeksrapport.
