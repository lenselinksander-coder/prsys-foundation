# Diaspora, Kennismigratie en de SILK-Prijs van Vertaling

## Inleiding: Wie Kennis Verplaatst, Verliest Iets

De Zijderoute was nooit alleen een handelsroute voor goederen. Zij was de oudste bekende
infrastructuur voor kennisoverdracht over culturele en geografische grenzen. Wat in Chang'an
begon als lokale metallurgie, arriveerde tweeduizend kilometer verder in Samarkand als een
*andere* technologie — hervormd door interpretatie, verrijkt door contact, maar ook verlies
lijdend aan context.

Dit verlies-met-winst is wat we de **SILK-prijs** noemen.

In het kader van PRSYS en TaoGate is de diaspora meer dan een demografisch verschijnsel. Het
is een structureel model voor wat er gebeurt wanneer kennissystemen migreren: van Oost naar
West, van gemeenschap naar instelling, van praktijk naar theorie, van impliciet naar expliciet.
Elke significante migratie produceert **vertaalverliezen** — en soms, als de condities kloppen,
ook **vertaalwinsten**.

Dit hoofdstuk analyseert die dynamiek via twee sleutelinstituties van de PRSYS-architectuur:
**TRST** (*Transfer Structure*) en **TGR** (*Transfer Governance Requirements*). We plaatsen
ze in een antropologisch kader, koppelen ze aan de theorie van diasporische kennisoverdracht,
en verbinden dat aan de praktische implicaties voor overdrachtsintegriteit (TI) in
organisatorische en institutionele systemen.

Zie voor de technische uitwerking van de transfermetrieken Hoofdstuk 3 (TDS-architectuur) en
Hoofdstuk 9 (Mandaatstructuur). Dit hoofdstuk levert de *epistemologische fundering* die
beide technische kaders veronderstellen maar niet expliciet articuleren.

---

## 12.1  TRST en TGR als Instituties: een Antropologische Lezing

### Van mechanisme naar institutie

In de technische PRSYS-documentatie zijn TRST en TGR operationele begrippen. Ze beschrijven
de condities waaronder een overdracht veilig kan plaatsvinden: TRST articuleert de structurele
parameters van de verbinding (τ, σ_ext, σ_int), TGR de bestuurlijke randvoorwaarden waaraan
een overdracht moet voldoen voordat ze de gate passeert.

Bezien vanuit de institutionele economie (North, 1990) en de antropologie van organisaties
(Douglas, 1986) zijn het meer dan mechanismen: ze zijn **instituties** — stabiele, sociaal
gesanctioneerde regelstructuren die bepalen wat als geldige actie, als legitieme kennis, als
erkende overdracht telt.

Douglass North onderscheidt instituties van organisaties: instituties zijn de spelregels,
organisaties zijn de spelers. TGR als institutie codeert de impliciete en expliciete normen
die bepalen *wat* mag worden overgedragen, *hoe*, en *met welke integriteitswaarborgen*. De
formele parameters (ti_min, phi_crit, delta) zijn de geëxpliciteerde kern van een veel groter
geheel aan informele verwachtingen.

Mary Douglas (*How Institutions Think*, 1986) voegt een critische observatie toe: instituties
denken niet, maar ze selecteren en versterken de gedachten van degenen die er deel van
uitmaken. TRST en TGR als instituties **selecteren** wat als geldige kennisoverdracht wordt
erkend — en verwerpen systematisch wat buiten hun categorieën valt.

### De institutionele bias van kennisoverdracht

Wanneer kennis vanuit een diasporische positie wordt ingebracht in een dominante institutie,
dan geldt een drietal nagenoeg universele dynamieken:

**Canonisering**: de ontvangende institutie vertaalt de kennis naar haar eigen categorieën.
Wat niet in bestaande schema's past, wordt ofwel afgewezen ofwel verbogen tot het erin past.
Het resultaat is herkenbaar maar niet identiek aan het origineel.

**Depersonalisering**: de persoonlijke, gesitueerde en relationele oorsprong van kennis
verdwijnt. Kennisoverdracht via TGR produceert een gecertificeerd kennispakket; de meester,
de gemeenschap, de mislukte pogingen, de contingentie — die blijven achter.

**Formalisering**: impliciete kennis (*tacit knowledge*, Polanyi 1966) verliest haar dragende
context. Wat in de praktijk werkt via lichaamstaal, intonatie en gedeelde assumptie, wordt
voor TGR-overdracht omgezet naar expliciete documentatie — en verliest daarin zijn
werkingsmechanisme.

Voor TaoGate heeft dit directe gevolgen. De TI (Transfer Integrity) meet de mate van
fideliteit van een overdracht op kwantificeerbare parameters. Maar TI meet *niet* wat niet
meetbaar is: de epistemische rijkheid die door formalisering verdwijnt. Een overdracht met
TI = 0.95 kan alsnog een hoge SILK-prijs hebben als de tacit knowledge-component groot is.

### TRST als meervoudige architectuur

Anthropologisch bezien is TRST geen enkelvoudige structuur maar een gelaagd systeem van
verbindingsprotocollen die verschillende typen kennis op verschillende manieren bedienen. Een
functionele TRST-architectuur erkent:

- **Expliciete kennis**: codeerbaar, overdraagbaar via formele TGR-kanalen, meetbaar op TI
- **Impliciete kennis**: vraagt aanvullende overdrachtskanalen (mentoring, stageverband,
  communities of practice)
- **Geïncarneerde kennis** (*embodied knowledge*, Dreyfus 1972): vraagt fysieke aanwezigheid
  en gedeelde praktijk — zij is per definitie niet volledig overdraagbaar via digitale TGR

De institutionele valkuil is de reductie van TRST tot uitsluitend het eerste type. Een
overdrachtsarchitectuur die alleen expliciete kennisoverdracht faciliteert en valoriseert,
produceert structureel hoge SILK-prijzen — ze exporteert de output zonder het productieproces.

---

## 12.2  De Oost-West Kennismigratie: Drie Historische Golven

De overdrachtsgeschiedenis van kennis tussen Oost en West is geen lineaire voortgang maar
een spiraalvormige dynamiek van appropriatie, hybridisering en herinterpretatie. Zij biedt
de meest gedocumenteerde casuïstiek voor het bestuderen van SILK-prijzen op institutioneel
niveau.

### Eerste golf: de islamitische Gouden Eeuw (8e–13e eeuw)

Griekse filosofie, Perzische wiskunde, Indiase geneeskunde en Chinese technologie
convergeerden in Bagdad en werden — via systematisch vertaalwerk — gefuseerd tot een nieuw
kenniscorpus. Bayt al-Hikma (het Huis der Wijsheid) fungeerde als institutionele TRST:
een formele overdrachtsstructuur met mandaat, middelen en methode.

Al-Khwarizmi's algebra is geen import of export, maar een *synthese* die beide tradities
overstijgt. De TI van deze overdracht was relatief hoog — het Huis der Wijsheid opereerde
met gedeelde institutionele normen en beloonde vertaalkwaliteit. De SILK-prijs was desondanks
aanzienlijk: de Indiase herkomst van positionale getallensystemen verdween in de latere
westerse appropriatie als "Arabische cijfers" — de overdrachtsgeschiedenis werd gewist.

*TGR-analyse*: het Huis der Wijsheid functioneerde als een expliciete TGR — het verleende
mandaat voor overdracht, borgen integriteitseisen en onderhield een audittraject (catalogi,
colofons, vertalersbiografieën). De institutionele herinnering van herkomst bleef aanvankelijk
intact, maar overleefde de volgende transfer — naar West-Europa — niet.

### Tweede golf: de Verlichting en haar vergeten bronnen

Locke, Descartes, Spinoza — de Westerse Verlichting ontwikkelde een kennisstructuur die
systematisch de niet-Europese wortels van haar inzichten maskeerde. Dekoloniaal denken
(Mignolo, 2011; Wynter, 2003; Quijano, 2000) heeft deze verborgen genealogieën zichtbaar
gemaakt: de "universele rede" had particuliere, situatiegebonden wortels die onder het
project van koloniale kennisextractie werden onttrokken aan hun gemeenschapsverankering.

De encyclopedisten codificeerden kennis als onttrokken aan persoon en gemeenschap —
en produceerden daarmee de ideologie van TGR zonder herkomsterkenning. Kennis werd eigendom
van de overdrachtsinfrastructuur, niet van de zendende gemeenschap.

*TGR-analyse*: lage institutionele TI op het niveau van herkomsterkenning. De TGR faalde
als institutie doordat zij de machtsasymmetrie internaliseerde als epistemisch standaard.
De SILK-prijs was maximaal: niet alleen tacit knowledge ging verloren, maar ook het recht van
de zendende gemeenschap op erkenning en reciprociteit.

### Derde golf: digitale kennismigratie (1990–heden)

Silicon Valley absorbeert inzichten uit boeddhistische meditatiepraktijk
(mindfulness-industrie), confucianistische organisatielogica (lean manufacturing, Toyota
Production System), Ubuntu-ethiek (management-terminologie) en inheemse ecologische kennis
(biodiversiteitspatenten). Deze absorptie is zelden symmetrisch.

Mindfulness als bedrijfsstrategie verliest de Boeddhistische ethische grondslag (het Achtvoudig
Pad als geheel), de gemeenschapsstructuur van de sangha, en de soteriologische horizon. Wat
overblijft, is een individuele productiviteitstechniek. De SILK-prijs is het verlies van
precies dat wat de praktijk zijn kracht gaf.

*TGR-analyse*: de overdrachtsarchitectuur van de digitale golf heeft geen formele TGR. Er
bestaat geen institutioneel mandaat dat herkomsterkenning borgt. De variabele TI reflecteert
de willekeur van individuele appropriatoren. Sommige transfers zijn zorgvuldig en reciproque;
de meeste niet.

---

## 12.3  De SILK-Prijs: Definitie, Formalisering en Categorieën

### Definitie

De **SILK-prijs** duidt op het inherente verlies-met-compensatie dat elke significante
kennismigratie kenmerkt. De term verwijst naar de Zijderoute: zijden stoffen arriveerden in
Rome, maar de productiekennis, de sociale relaties rondom het weefsel, de ceremoniale
betekenis, het milieu van de moerbeiboom — die bleven achter in China.

In PRSYS-termen is de SILK-prijs een kwalitatieve, institutionele maat voor wat een overdracht
kost aan epistemische rijkheid — afgezet tegen wat zij opbrengt in nieuwe contexten.

### Een operationele benadering

Als heuristiek kunnen we de SILK-prijs beschrijven als:

```
SILK = (K_zender − K_ontvanger) + V_win − C_trans
```

Waarbij:
- **K_zender** — de kennisrijkheid bij de zendende context, inclusief tacit knowledge,
  sociale inbedding en historische gelaagdheid
- **K_ontvanger** — de kennisrijkheid bij de ontvangende context na overdracht
- **V_win** — vertaalwinsten door nieuwe synthese, hybridisering of formalisering
- **C_trans** — transactiekosten van de overdracht (tijd, vertaalwerk, institutioneel mandaat)

Een SILK-prijs van nul is theoretisch — en vermoedelijk ook onwenselijk. Perfecte reproductie
zonder interpretatie produceert geen nieuwe inzichten. Een negatieve SILK-prijs (winst >
verlies) is het doel van **kennisdiplomatie** — bewuste overdrachten die de ontvangende
context verrijken *en* de oorsprong respect bieden.

Merk op dat deze formalisering bewust kwalitatief is. De PRSYS-parameters (τ, σ, TI) meten
de overdrachtsintegriteit op het niveau van de informatiedrager; de SILK-prijs adresseert de
epistemische laag eronder.

### Vertaalverliezen: vier categorieën

**1. Contextueel verlies**
Kennis verliest haar situering in een gemeenschap, landschap of praktijk. Inheemse
plantenkennis die in farmaceutische databases wordt opgeslagen, verliest de kennis van
wanneer te oogsten, welke relatie tot te onderhouden met de plant, wat de grens is van
toegestane extractie.

**2. Relationeel verlies**
Kennis verliest haar drager — de persoon, de meester-leerlingrelatie, de *isnad* (de keten
van overdrachtsgetuigen in de islamitische traditie). Kenniscertificering die alleen inhoud
certificeert en niet de overdrachtrelatie, snijdt de wortel van de betrouwbaarheidsbepaling door.

**3. Temporeel verlies**
Kennis verliest haar ontwikkelingsgeschiedenis: de gefaalde experimenten, de gekozen wegen en
de wegen die bewust niet genomen zijn. Een methodebeschrijving zonder procesgeschiedenis mist
de epistemische immuniteit die die geschiedenis biedt — men zal dezelfde fouten opnieuw maken.

**4. Normatief verlies**
De ethische of spirituele horizon van kennis verdwijnt in de functionele toepassing.
Acupunctuur als medische techniek verliest de vijf-elemententheorie die bepaalt *wanneer* en
*voor wie* zij passend is. Zonder die normatieve grondslag is de techniek beschikbaar maar
is het toepassingsoordeel verdwenen.

### Vertaalwinsten: drie categorieën

**1. Schaalwinst**
Kennis bereikt meer mensen en contexten dan in de zendende gemeenschap mogelijk zou zijn.
Formalisering maakt kennisoverdracht schaalbaar — een Braille-equivalent voor tast-afhankelijke kennis.

**2. Hybridiseringswinst**
Contact met andere kennissystemen in de ontvangende context produceert nieuwe inzichten die
geen van beide tradities alleen had kunnen genereren. De ontmoeting van Griekse logica met
Arabische algebra en Indiase getallenleer produceerde wiskunde die alle drie oversteeg.

**3. Conserveringswinst**
Sommige kennis overleeft uitsluitend doordat zij werd overgedragen naar een externe context.
De Bibliotheca Alexandrina overleefde haar brand mede doordat kopieën waren verspreid over
het hele Middellandse Zee-gebied. Formalisering beschermt kennis tegen de kwetsbaarheid van
een enkelvoudige gemeenschap.

---

## 12.4  Diaspora als Epistemisch Concept

In de diasporastudies is diaspora meer dan een beschrijving van bevolkingsgroepen die hun
thuisland verlieten. Vanuit het werk van Stuart Hall (1990), Paul Gilroy (1993) en Homi
Bhabha (1994) is het een **epistemisch concept** — een structurele positie van waaruit een
specifiek type kennis mogelijk wordt.

### De derde ruimte (Bhabha)

Homi Bhabha introduceert de **derde ruimte** als de hybride positie die ontstaat in het
contact tussen twee culturen: niet thuis in de cultuur van herkomst, niet volledig
geabsorbeerd in de nieuwe cultuur, maar dragend van een dubbele articulatie die *beide*
overstijgt. De derde ruimte is productief — zij is de epistemische broedplaats voor kennis
die geen van beide tradities alleen had kunnen produceren.

Voor TRST is dit een significante observatie. De meest innovatieve overdrachten — degene die
een negatieve SILK-prijs produceren — vinden niet plaats *tussen* culturen in een rechte
lijn, maar *in* de derde ruimte die contact creëert. Een TRST-architectuur die diasporische
kennisdragers niet accommodeert, verliest precies die zone van productieve hybriditeit.

### Diasporisch bewustzijn als kwaliteitsmechanisme

Robin Cohen (1997) beschrijft *diasporic consciousness* als een bewustzijnsvorm die wordt
gekarakteriseerd door: geheugen aan het land van herkomst, idealisering van dat thuis als
mythe, sterke groepsidentiteit die transgenerationeel wordt overdragen, en een gespannen
verhouding tot de ontvangende samenleving.

Dit bewustzijn is functioneel voor kennisoverdracht: het produceert een scherp gevoel voor
wat verloren gaat in de overdracht. Diasporische kennisdragers zijn, in epistemische termen,
getrainde SILK-prijsanalisten — zij weten wat de prijs is omdat zij hem hebben betaald.

Een TGR die diasporische kennisdragers uitsluit van het institutionele mandaat om te
certificeren wat overdraagbaar is, verliest dit kwaliteitsmechanisme. Zij verliest de
getuige van het verlies.

### Avtar Brah: thuis als mythe en verankering

Avtar Brah (1996) introduceert het concept van *homing desire* tegenover *desire for home*:
de wens om thuis te zijn (een stroom van verlangen) is niet hetzelfde als de wens naar het
concrete thuis terug te keren. Diasporisch wonen creëert een meervoudige thuisheid die
geografische ankerpunten overstijgt.

In overdrachtstermen: kennis die een hoog diasporisch bewustzijn draagt, is verankerd aan
*homing desire* — aan de homing van waardes, praktijken en relaties — maar niet aan een
territoriale locatie. Dit maakt haar overdraagbaar over grote institutionele en geografische
afstanden *mits* de TGR de meervoudige verankering erkent.

### De TaoGate-parallel

TaoGate staat niet voor snelheid of efficiëntie. TaoGate staat voor bewuste vertraging op
de momenten die ertoe doen — en die bewuste vertraging is precies wat diasporische
kennisproducenten structureel wordt ontzegd in dominante institutionele contexten.

De druk tot assimilatie, tot productiviteit, tot het leveren van overdraagbare, gecertificeerde
outputs — dit zijn de **versnellingsdrukken** (vgl. Hoofdstuk 3, Rosa) die de derde ruimte
vernietigen. Een institutie die hoge SILK-prijzen produceert, is een institutie die te snel
overdraagt — die de gate overslaat, die mandaat niet verifieert, die de draagkracht van de
overdracht niet toetst.

In de terminologie van Hoofdstuk 2 (TaoGate als systeem): de diasporische overdracht vereist
een **verlengde gate** — een overdrachtsmoment dat niet in één sessie kan worden afgerond
maar een langdurig, vertrouwend proces van wederzijdse articulatie vraagt.

---

## 12.5  Verbinding met Diasporastudies: Literatuurkader

Het volgende overzicht verbindt de centrale theoretici uit de diasporastudies met de
PRSYS-architectuur. Het is een analytisch kader, geen exhaustieve bibliografie.

| Theoreticus | Kernbegrip | PRSYS-pendant |
|---|---|---|
| Stuart Hall (1990) | Culturele identiteit als productie, niet essentie | TI als dynamisch proces, niet als stabiele eigenschap |
| Paul Gilroy (1993) | De Zwarte Atlantische cultuur als hybride ruimte | TRST als meervoudige architectuur voor niet-lineaire overdracht |
| Homi Bhabha (1994) | Derde ruimte, hybriditeit, mimicry | De gate als drempelruimte — niet doorgang maar articulatiezone |
| Avtar Brah (1996) | Homing desire en diasporische cartografieën | Mandaatstructuur als institutioneel thuishaven voor meervoudige verankering |
| Robin Cohen (1997) | Diasporisch bewustzijn en typologieën | TGR als collectief geheugen en herkomsterkenningssysteem |
| Sylvia Wynter (2003) | Overrepresentatie van de moderne "Man" als epistemische norm | SILK-prijs als macht-in-overdracht — wie bepaalt wat de prijs is? |
| Walter Mignolo (2011) | Koloniale wondheid en epistemische ongehoorzaamheid | TRST-architectuur als site van herstel of reproducering van epistemisch geweld |
| Michael Polanyi (1966) | Tacit knowledge — we know more than we can tell | Grens van TI: wat de TGR niet kan meten, maar overdracht bepaalt |

Deze theoretici denken vanuit de ervaring van verlies-en-herstel, van migratie-en-aanpassing.
Hun concepten zijn niet louter academisch maar voortgekomen uit existentiële vragen over de
overleving van kennis en gemeenschap onder druk. PRSYS put uit deze ervaring voor haar analyse
van institutionele kennisoverdracht in versnelde organisatorische omgevingen.

---

## 12.6  Implicaties voor PRSYS-Architectuur en TaoGate

De antropologische analyse van TRST en TGR, gecombineerd met het SILK-prijsconcept en
diasporastudies, heeft directe implicaties voor de PRSYS-architectuur:

### Aanbeveling 1: TI uitbreiden met een herkomstparagraaf

De huidige TI-berekening (Hoofdstuk 3) meet overdrachtsintegriteit op formele parameters.
Een aanvulling — een **herkomstindex** naast TI — zou borgen dat de overdracht de
genealogie van de kennis meeoverdraagt. Dit is niet alleen epistemisch eerlijk maar ook
functioneel: kennis waarvan de herkomst bekend is, kan worden bijgesteld als die herkomst
relevant blijkt voor de toepassing.

### Aanbeveling 2: TGR expliciet kalibreren op tacit knowledge-type

De TGR-parameters (ti_min, phi_crit) zijn nu uniform. Een gedifferentieerde TGR-configuratie
zou hogere gate-drempels hanteren voor overdrachten met een hoog aandeel tacit knowledge
(praktijkkennis, relationele kennis, contextuele kennis) en lagere voor expliciete, formeel
gedocumenteerde kennis.

### Aanbeveling 3: De gate als articulatiezone, niet als doorgang

De gate in TaoGate is conceptueel een moment van beoordeling — een binaire beslissing (OK /
BLOCK). De diasporische analyse suggereert een rijkere interpretatie: de gate als
**articulatiezone**, een ruimte van wederzijdse aanpassing tussen zender en ontvanger, vóór
de overdracht plaatsvindt. Dit vereist een temporele verlenging van het gate-moment en de
introductie van een **PRE_GATE_DIALOGUE**-stap in de state machine (vgl. de huidige
MANDATE_CHECK → PRE_GATE → EXECUTE-volgorde uit Hoofdstuk 3).

### Aanbeveling 4: SILK-prijs als institutionele kwaliteitsindicator

Organisaties die systematisch hoge SILK-prijzen produceren, zijn organisaties die structureel
sneller overdragen dan de epistemische ecologie kan verdragen. Een periodieke SILK-prijsaudit
— kwalitatief, participatief, met inbreng van de zendende gemeenschappen — vormt een aanvulling
op de kwantitatieve TI-monitoring van PRSYS.

---

## Oefeningen

**Oefening 7.1 — De SILK-Prijs van een Concrete Overdracht**

Kies een concrete overdracht uit uw onderzoeksdomein of professionele context. Dit kan een
formele kennisoverdracht zijn (training, curriculum, beleidsdocument, handboek) of een
informele (mentoring, werkbezoek, stagebegeleiding, intervisie).

Analyseer deze overdracht op SILK-prijs:

1. Beschrijf de overdracht: wat werd overgedragen, van wie naar wie, via welk kanaal?
2. Identificeer de K_zender: welke kennis was aanwezig bij de zender die *niet* kon worden
   overgedragen? Maak onderscheid tussen expliciete, impliciete en geïncarneerde kennis.
3. Identificeer de K_ontvanger: welke kennis arriveerde? Wat ontbreekt in vergelijking?
4. Analyseer V_win: welke vertaalwinsten waren aantoonbaar? Is er sprake van hybridisering?
5. Formuleer een aanbeveling: hoe zou een lagere SILK-prijs er concreet hebben uitgezien?
   Welke aanpassing in TGR of TRST was daarvoor nodig geweest?

Lever in als analytische memo (1000–1200 woorden) met expliciete verwijzing naar ten minste
twee van de in §12.5 genoemde theoretici. Gebruik de PRSYS-terminologie (TI, TRST, TGR,
SILK-prijs) aantoonbaar en zorgvuldig — zet het technische kader niet in als decoratie maar
als analyseapparaat.

---

**Oefening 7.2 — TRST en TGR als Institutionele Analyse**

Kies een bestaande organisatie (overheid, onderwijs, zorg, bedrijfsleven, ngo) en analyseer
haar overdrachtsarchitectuur op twee niveaus:

*Niveau 1 — Formeel (TGR)*
Welke formele overdrachtsregels bestaan er? Wie heeft mandaat om kennis te certificeren als
"overdraagbaar"? Via welke kanalen verloopt die certificering? Wie wordt systematisch
uitgesloten van dit mandaat — en op welke gronden?

*Niveau 2 — Institutioneel (TRST)*
Welke impliciete normen bepalen wat als geldige kennis wordt erkend in de overdracht?
Welke epistemische tradities worden geprivilegieerd — en welke gemarginaliseerd? Hoe
verhoudt dit zich tot de SILK-prijs die de institutie structureel produceert?

Analyseer ten slotte de machtsstructuur: wie profiteert van de huidige TRST-configuratie?
Wie draagt de SILK-prijs?

Formuleer een beleidsaanbeveling (3 concrete maatregelen) die de institutionele TI verhoogt
*zonder* de SILK-prijs te verhogen. Motiveer waarom dit onderscheid analytisch niet
vanzelfsprekend is.

Lever in als beleidsnotitie (1500–2000 woorden), geschreven voor een bestuurlijk publiek dat
niet vertrouwd is met PRSYS-terminologie. Voeg een begrippenlijst toe als bijlage.

---

**Oefening 7.3 — Positiebepaling: Diasporisch Kennen in een Institutioneel Kader**

Dit is een positioneringsoefening.

Schrijf een argumentatief essay (1500 woorden) als antwoord op de volgende stelling:

> *"Elke institutie die kennis wil borgen, moet de diasporische oorsprong van die kennis
> erkennen — of zij creëert onvermijdelijk een SILK-prijs die haar eigen fundament
> ondermijnt."*

Gebruik hierbij:
- Ten minste één empirische casus (historisch of contemporain) die uw argument draagt
- Ten minste drie van de in §12.5 genoemde theoretici, functioneel ingezet (niet decoratief)
- Een expliciete verbinding met de TaoGate-benadering (de gate als conditionering voor
  legitieme overdracht — vgl. Hoofdstuk 2)
- Een tegenargument, serieus ingenomen en serieus weersproken

Neem een verdedigbaar standpunt in. Beschrijving is onvoldoende; analyse en positie zijn
vereist. Stel uw eigen epistemische positie ter discussie: vanuit welk perspectief schrijft u?
Welke SILK-prijs betaalt uw eigen lezing?
