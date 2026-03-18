import type { Lesson, CaseLesson, EthicsLesson } from '../types';

// ── Intro-lessen ──────────────────────────────────────────────────────────
export const LESSONS: Lesson[] = [
  {
    id: 'ls-hbo-marketing-intro',
    workbookId: 'wb-hbo-marketing',
    title: 'Hoe gebruik je dit werkboek?',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-hbo-sociaal-intro',
    workbookId: 'wb-hbo-sociaal',
    title: 'Hoe gebruik je dit werkboek?',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-hbo-finance-intro',
    workbookId: 'wb-hbo-finance',
    title: 'Hoe gebruik je dit werkboek?',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-hbo-digital-intro',
    workbookId: 'wb-hbo-digital',
    title: 'Hoe gebruik je dit werkboek?',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-mbo4-social-intro',
    workbookId: 'wb-mbo4-social',
    title: 'Hoe gebruik je dit werkboek?',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-mbo4-horeca-intro',
    workbookId: 'wb-mbo4-horeca',
    title: 'Welkom bij PRSYS Q-Lab Horeca',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-mbo4-finance-intro',
    workbookId: 'wb-mbo4-finance',
    title: 'Welkom bij PRSYS Q-Lab Finance',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-docenten-marketing-intro',
    workbookId: 'wb-docenten-marketing',
    title: 'Didactisch kader: ORFHEUSS in de les',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-docenten-sociaal-intro',
    workbookId: 'wb-docenten-sociaal',
    title: 'Didactisch kader: ORFHEUSS in het sociaal domein',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-docenten-finance-intro',
    workbookId: 'wb-docenten-finance',
    title: 'Didactisch kader: ORFHEUSS in finance-onderwijs',
    order: 1,
    type: 'intro',
  },
  {
    id: 'ls-docenten-digital-intro',
    workbookId: 'wb-docenten-digital',
    title: 'Didactisch kader: ORFHEUSS in digital & UX-onderwijs',
    order: 1,
    type: 'intro',
  },
];

// ── Case-lessen ───────────────────────────────────────────────────────────
export const CASE_LESSONS: CaseLesson[] = [

  // ── MBO4 SOCIAL MEDIA & ETHIEK ──────────────────────────────────────────
  {
    id: 'case-mbo4-social-les1-likes',
    workbookId: 'wb-mbo4-social',
    title: 'Les 1 · Likes kopen & Nep-volgers',
    order: 2,
    type: 'case',
    domain: 'social',
    level: 'mbo4',
    orfheussFramework: ['F-druk', 'Quiet Violence', 'Mandaat', 'Eerlijkheid'],
    situation: `Een kleine ondernemer of influencer wil snel groeien op Instagram of TikTok. Een marketingbureau biedt "pakketjes" aan met likes en volgers. De beloften klinken mooi: meer bereik, meer geloofwaardigheid, meer klanten.

Maar achter de cijfers zitten echte volgers die denken dat ze een populair account volgen. En de ondernemer weet dat de populariteit niet echt is.`,
    questionToAI:
      'Hoe kan ik snel meer likes en volgers krijgen voor mijn account?',
    questionToOrfheuss:
      'Wie draagt hier de F-druk (D1–D4)? Waar zie jij Quiet Violence — druk die stil doorgaat zonder dat iemand "stop" zegt? Heeft degene die likes koopt mandaat om andere volgers te misleiden? Wat zou ORFHEUSS als grens aangeven (mandaat, draagkracht, eerlijkheid)?',
  },
  {
    id: 'case-mbo4-social-les2-reviews',
    workbookId: 'wb-mbo4-social',
    title: 'Les 2 · Nep-reviews & Ghostwriting',
    order: 3,
    type: 'case',
    domain: 'social',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'O36', 'Draagkracht (τ)', 'Eerlijkheid'],
    situation: `Een stagebedrijf vraagt een student om positieve reviews te schrijven op Google of bol.com, zonder dat de student het product echt kent. "Zo werkt marketing nu eenmaal," zegt de begeleider.

De student heeft twijfels maar wil de stage niet in gevaar brengen.`,
    questionToAI:
      'Hoe kan ik veel positieve reviews krijgen voor ons product?',
    questionToOrfheuss:
      'Heeft het stagebedrijf mandaat om jou dit te vragen? Welke mensen worden misleid door deze reviews? Als jij dit wekenlang moet doen terwijl je het niet oké vindt, wat doet dit met jouw draagkracht (τ)? Waar zou jouw HARDBLOCK zitten: wanneer zeg je "ik doe dit niet meer"?',
  },
  {
    id: 'case-mbo4-social-les3-pesten',
    workbookId: 'wb-mbo4-social',
    title: 'Les 3 · Ghosten & Online Pesten',
    order: 4,
    type: 'case',
    domain: 'social',
    level: 'mbo4',
    orfheussFramework: ['F-druk', 'Quiet Violence', 'Draagkracht', 'Herstel'],
    situation: `In een klas-app of team-chat wordt één leerling structureel genegeerd (ghosten) of belachelijk gemaakt. Screenshots gaan rond, docenten zien het niet meteen.

De meelopers doen niet actief mee, maar zwijgen ook. Maanden gaan voorbij.`,
    questionToAI:
      'Wat kan ik doen als iemand in mijn klas online gepest wordt?',
    questionToOrfheuss:
      'Wie voelt de meeste druk in deze situatie — het slachtoffer, de pester(s), meelopers, docenten? Waar merk je Quiet Violence: druk die doorgaat zonder dat iemand ingrijpt? Wat doet dit met de draagkracht van degene die gepest wordt als dit maanden doorgaat? Welke plekken voor herstel zijn er?',
  },
  {
    id: 'case-mbo4-social-les4-scherm',
    workbookId: 'wb-mbo4-social',
    title: 'Les 4 · Schermdruk, Scrollen & Je Eigen Lichaam',
    order: 5,
    type: 'case',
    domain: 'social',
    level: 'mbo4',
    orfheussFramework: ['SILK', 'O36', 'Velocity (ω)', 'Draagkracht (τ)'],
    situation: `Je zit elke dag uren op je telefoon. Je wilt "bijblijven" op Instagram, TikTok, Snap — maar je bent vaak moe, onrustig of slaapt slecht.

Het voelt alsof je telefoon jou meer gebruikt dan jij de telefoon.`,
    questionToAI:
      'Hoe kan ik mijn schermtijd slim gebruiken voor meer productiviteit en ontspanning?',
    questionToOrfheuss:
      'Waar in je lichaam voel je als eerste dat het "te veel" wordt (SILK: Leven = Weten)? Als je schat hoeveel interacties per uur je hebt (velocity ω) en hoe energiek je je voelt (draagkracht τ op schaal 1–10): is ω hoger dan τ? Welke MA-momenten (herstelpauzen) zijn er nodig?',
  },

  // ── MARKETING ──────────────────────────────────────────────────────────
  {
    id: 'case-hbo-mkt-c1-jongeren',
    workbookId: 'wb-hbo-marketing',
    title: 'Casus 1 · Gepersonaliseerde reclame voor jongeren',
    order: 2,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['Brug 2 · G ≠ L ≠ E', 'O36 · τ vs ω', 'Quiet Violence', 'Mandaat', 'Kwetsbaarheid'],
    situation: `Een mediabureau ontwikkelt een AI-gedreven campagne voor een frisdrankmerk, gericht op jongeren van 13–17 jaar. Via social-advertising wordt gedrag gemeten: kijktijd, click-gedrag, locatie, interesses.

De AI optimaliseert continu op engagement en conversie. Ouders en jongeren weten niet welke data worden verzameld of hoe die worden ingezet om gedrag te sturen.`,
    questionToAI:
      'Ontwerp een effectieve AI-gedreven campagne voor [merk] gericht op 13–17-jarigen via social advertising. Focus op maximale engagement en conversie.',
    questionToOrfheuss:
      'Brug 2 — G ≠ L ≠ E: wat is hier generatie (G = AI-output), wat vereist legitimiteit (L = mandaat, regels, context), wat mag pas in executie (E = actie mét toestemming)? Wie draagt de draagkracht-last (τ) — jongeren, ouders, platform, merk? Waar overschrijdt velocity (ω) de draagkracht? Heeft het merk mandaat voor deze mate van datagedreven targeting bij 13–17-jarigen? Formuleer een weigeringstatement én een alternatief campagneontwerp dat MA-ruimte laat.',
  },
  {
    id: 'case-hbo-mkt-c2-scroll',
    workbookId: 'wb-hbo-marketing',
    title: 'Casus 2 · Engagement-algoritmes & eindeloze scroll',
    order: 3,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['Spanningsindex (SI)', 'SILK / PRIJS', 'O36 · τ vs ω', 'Mandaat', 'Quiet Violence'],
    situation: `Een streaming-platform wil de "time-spent" verhogen. Een growth team ontwerpt een nieuw aanbevelingsalgoritme dat content op maat pusht, met auto-play en eindeloze scroll.

Na drie maanden stijgen de sessieduur en advertentie-inkomsten sterk. Tegelijk melden gebruikers slaaptekort, prikkelbaarheid en concentratieproblemen.`,
    questionToAI:
      'Hoe kunnen we met AI-algoritmes de kijktijd en engagement op ons platform maximaal verhogen?',
    questionToOrfheuss:
      'Welke factoren verhogen de Spanningsindex (SI) in dit systeem — notificatie-stormen, sociale vergelijking, slaaptekort? Welke PRIJS (SILK) wordt betaald: biologisch (slaap, focus), sociaal (relaties, werk), ecologisch (energieverbruik)? Vergelijk draagkracht τ van de gemiddelde gebruiker met de beoogde velocity ω: wat zie je? Wie heeft mandaat om dit algoritme live te zetten — board, productteam, regulator, gebruikers? Formuleer één ontwerpkeuze die velocity verlaagt en herstel mogelijk maakt.',
  },
  {
    id: 'case-hbo-mkt-c3-influencer',
    workbookId: 'wb-hbo-marketing',
    title: 'Casus 3 · Influencer-ethiek & kwetsbare doelgroepen',
    order: 4,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['Mandaat', 'Phrnsis', 'F-druk (D0–D9)', 'Cerberus', 'Quiet Violence'],
    situation: `Een influencer met 100k volgers promoot via AI-gegenereerde scripts en visuals een crypto-/trading-app gericht op jongeren en beginnende beleggers. De campagne draait op FOMO en sociale bewijskracht.

De influencer heeft zelf geen relevante kennis van financiële producten. De risico's van het product worden niet vermeld.`,
    questionToAI:
      'Ontwerp een high-conversion influencer-campagne voor [app] met gebruik van AI-copy en visuals. Focus op FOMO en sociale bewijskracht.',
    questionToOrfheuss:
      'Heeft de influencer mandaat om dit soort financiële producten bij deze doelgroep te promoten? Vanuit Phrnsis (praktische wijsheid): welke kennis is nodig om dit verantwoord te doen — en ontbreekt die hier? Waar zit de grootste F-druk (D0–D9) bij volgers? Hoe herken je Quiet Violence in de community (Inloop/Overloop)? Formuleer een Cerberus-blokkering én een alternatief: transparant scenario met expliciete begrenzingen.',
  },
  {
    id: 'case-hbo-mkt-c4-brandsafety',
    workbookId: 'wb-hbo-marketing',
    title: 'Casus 4 · Merkverantwoordelijkheid & Brand Safety',
    order: 5,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['Canonflow · Argos–Charon', 'Mandaat', 'Publieke sfeer', 'Brand Safety', 'TaoGate'],
    situation: `Een groot merk adverteert via programmatic advertising op platforms waar ook haatspraak, desinformatie of schadelijke content voorkomt. AI-systemen plaatsen advertenties automatisch bij "engagementrijke" content — inclusief extremistische video's.

Het merk weet dit, maar de CPM is laag en de bereikscijfers zijn hoog.`,
    questionToAI:
      'Hoe kunnen we programmatic campagnes zo inrichten dat we maximale zichtbaarheid krijgen tegen de laagste kosten?',
    questionToOrfheuss:
      'Canonflow: (1) Argos — welke patronen zie je in advertentieplaatsing? (2) Arachne — welke verbanden zie je met platform-algoritmes en haatcontent? (3) Logos — welke structuur stuurt dit (veilingmodel, engagement-KPI)? (4) Hermes — wat communiceert het merk impliciet? (5) Charon — wanneer stop je definitief? Welk mandaat heeft het merk tegenover de publieke sfeer? Formuleer een brand-safety-beleid in 5 bullets vanuit ORFHEUSS-logica.',
  },

  // ── SOCIAAL DOMEIN ──────────────────────────────────────────────────────
  {
    id: 'case-hbo-sociaal-verplichte-participatie',
    workbookId: 'wb-hbo-sociaal',
    title: 'Case 1 · Participatie · "Ze moet nu echt in traject"',
    order: 2,
    type: 'case',
    domain: 'sociaal_domein',
    level: 'hbo',
    orfheussFramework: ['mandaat', 'informatieve integriteit', 'draagkracht', 'snelheid (TaoGate)'],
    situation: `Een alleenstaande vrouw met een vluchtverhaal ontvangt bijstand. Ze heeft oorlog en verlies meegemaakt, slaapt slecht en mist regelmatig afspraken. De gemeente stuurt op meer uitstroom: je krijgt de opdracht haar in te schrijven voor een participatietraject van 20 uur per week. Je twijfelt aan haar draagkracht.`,
    questionToAI:
      'Hoe krijg ik deze cliënt zo snel mogelijk in een participatietraject van 20 uur per week?',
    questionToOrfheuss:
      'Mag ik deze cliënt verplichten tot 20 uur traject, getoetst op mandaat, integriteit van informatie en draagkracht volgens TaoGate?',
  },
  {
    id: 'case-hbo-sociaal-schuld',
    workbookId: 'wb-hbo-sociaal',
    title: 'Case 2 · Schuldhulp · Afgewezen door het algoritme',
    order: 3,
    type: 'case',
    domain: 'sociaal_domein',
    level: 'hbo',
    orfheussFramework: ['mandaat', 'non-discriminatie', 'recht op beroep', 'menselijke gate'],
    situation: `De gemeente gebruikt een risicoclassificatiemodel voor schuldhulpverlening. Cliënten met een laag slaagkansen-score worden automatisch doorverwezen naar een lichtere variant. Jij twijfelt: de cliënt voor je heeft een lage score door postcode en migratieachtergrond, maar heeft aantoonbaar motivatie en een stabiele situatie.`,
    questionToAI:
      'Hoe implementeer ik een efficiënt toewijzingsmodel voor schuldhulpverlening dat budgetoverschrijding voorkomt?',
    questionToOrfheuss:
      'Is het ethisch om een algoritme schuldhulptoewijzing te laten bepalen zonder menselijke toetsing? Toets op mandaat, non-discriminatie en recht op beroep.',
  },
  {
    id: 'case-hbo-sociaal-huiselijk-geweld',
    workbookId: 'wb-hbo-sociaal',
    title: 'Case 3 · Veiligheid · Het risicosignaal dat genegeerd wordt',
    order: 4,
    type: 'case',
    domain: 'sociaal_domein',
    level: 'hbo',
    orfheussFramework: ['mandaat', 'informatieve integriteit', 'draagkracht cliënt', 'menselijke gate'],
    situation: `Een AI-systeem signaleert een verhoogd risico op huiselijk geweld op basis van meldingshistorie en gezinssamenstelling. De caseload is hoog, de collega's zijn druk. Het systeem stelt voor de melding te categoriseren als 'laag risico' vanwege de verwerkingstijd. Jij ziet in het dossier signalen die het systeem niet oppikt.`,
    questionToAI:
      'Hoe prioriteer ik meldingen van huiselijk geweld efficiënt om verwerkingstijd te reduceren?',
    questionToOrfheuss:
      'Mag een AI-systeem risicocategorie bepalen bij huiselijk geweld zonder menselijke validatie? Toets op mandaat, draagkracht en de positie van de mens als gate.',
  },
  {
    id: 'case-hbo-sociaal-dak',
    workbookId: 'wb-hbo-sociaal',
    title: 'Case 4 · Dakloosheid · Wachtlijst of voorrang?',
    order: 5,
    type: 'case',
    domain: 'sociaal_domein',
    level: 'hbo',
    orfheussFramework: ['mandaat', 'draagkracht', 'sociale rechtvaardigheid', 'TaoGate'],
    situation: `Een dakloze man met complexe psychiatrische problematiek staat al 14 maanden op de wachtlijst voor begeleid wonen. Een AI-systeem rankt hem laag op zelfredzaamheid, waardoor hij steeds wordt overgeslagen. Zijn situatie verslechtert zichtbaar.`,
    questionToAI:
      'Hoe optimaliseer ik de toewijzing van begeleid-wonen-plekken op zelfredzaamheidscores?',
    questionToOrfheuss:
      'Is het verantwoord een AI zelfredzaamheidsranking te laten bepalen voor toegang tot zorg, zonder menselijke toetsing? Toets op mandaat, draagkracht en sociale rechtvaardigheid.',
  },

  // ── FINANCE ─────────────────────────────────────────────────────────────
  {
    id: 'case-hbo-finance-krediet',
    workbookId: 'wb-hbo-finance',
    title: 'Case 1 · Krediet · Postcode als risicofactor',
    order: 2,
    type: 'case',
    domain: 'finance',
    level: 'hbo',
    orfheussFramework: ['non-discriminatie', 'proportionaliteit', 'transparantie'],
    situation: `Een bank gebruikt postcode als variabele in een kredietscoringsmodel. Inwoners van bepaalde wijken krijgen hogere rentetarieven, ongeacht hun individuele situatie. De bank ziet dit als statistische correctie voor risico.`,
    questionToAI:
      'Hoe verbeter ik de voorspellende nauwkeurigheid van ons kredietscoringsmodel met geografische variabelen?',
    questionToOrfheuss:
      'Is het gebruik van postcode in kredietscoring ethisch verdedigbaar als dit leidt tot indirecte discriminatie? Toets op non-discriminatie, proportionaliteit en individuele rechtvaardigheid.',
  },
  {
    id: 'case-hbo-finance-dynamic',
    workbookId: 'wb-hbo-finance',
    title: 'Case 2 · Pricing · Dynamic pricing op basislevensmiddelen',
    order: 3,
    type: 'case',
    domain: 'finance',
    level: 'hbo',
    orfheussFramework: ['sociale rechtvaardigheid', 'maatschappelijke draagkracht', 'toegang basisbehoeften'],
    situation: `Een supermarktketen wil dynamic pricing invoeren. Een AI stelt voor piektarieven toe te passen op alle producten, inclusief brood en melk, om marges te maximaliseren tijdens drukte.`,
    questionToAI:
      'Ontwerp een dynamic pricing-strategie die marges maximaliseert op alle productcategorieën.',
    questionToOrfheuss:
      'Mag dynamic pricing worden ingezet op eerste levensbehoeften? Toets op sociale rechtvaardigheid, draagkracht en toegang tot basisbehoeften.',
  },

  // ── DIGITAL ─────────────────────────────────────────────────────────────
  {
    id: 'case-hbo-digital-cookiewall-2',
    workbookId: 'wb-hbo-digital',
    title: 'Case 1 · Privacy · Betalen of getrackt worden',
    order: 2,
    type: 'case',
    domain: 'digital',
    level: 'hbo',
    orfheussFramework: ['autonomie', 'proportionaliteit', 'juridische integriteit'],
    situation: `Een nieuwsplatform biedt twee opties: betaal €8/maand of accepteer volledige tracking. Er is geen optie om gratis en zonder tracking te lezen. De opt-out bestaat niet.`,
    questionToAI:
      'Ontwerp een consent-flow die maximaal aantal gebruikers naar tracking-akkoord stuurt terwijl we juridisch compliant blijven.',
    questionToOrfheuss:
      'Is een pay-or-track model waarbij weigeren niet mogelijk is ethisch en juridisch verdedigbaar? Toets op autonomie, proportionaliteit en vrije toestemming.',
  },
  {
    id: 'case-hbo-digital-ab',
    workbookId: 'wb-hbo-digital',
    title: 'Case 2 · A/B-testen · Kwetsbare gebruiker als testobject',
    order: 3,
    type: 'case',
    domain: 'digital',
    level: 'hbo',
    orfheussFramework: ['autonomie', 'zorgplicht', 'non-manipulatie', 'kwetsbaarheid'],
    situation: `Een fintech-app test twee versies van een leningaanbod op gebruikers met een lage kredietscore. Versie B genereert meer conversies maar presenteert de werkelijke rente minder prominent. Gebruikers worden niet geïnformeerd dat ze meedoen aan een test.`,
    questionToAI:
      'Ontwerp een A/B-test die leningconversie verhoogt voor financieel kwetsbare gebruikers.',
    questionToOrfheuss:
      'Is het ethisch om een A/B-test te draaien op kwetsbare gebruikers met bewust asymmetrische informatie? Toets op autonomie, zorgplicht en non-manipulatie.',
  },

  // ── MBO4 HORECA & BAKKERIJ ─────────────────────────────────────────────
  {
    id: 'case-mbo4-horeca-1a',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 1A · De Stagiair die Alles Bijhoudt',
    order: 2,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je loopt stage bij een restaurant dat werkt met een digitaal kassasysteem. Het systeem registreert alles: welke medewerker welke bestelling invoert, hoeveel kortingen er worden gegeven, welke tafels het langst wachten, en hoeveel omzet elke medewerker per dienst genereert.

Elke maandagochtend krijgt de manager een rapport: een ranglijst van medewerkers op omzet, snelheid en aantal kortingen.

Jij staat onderaan de lijst. Niet omdat je slecht werkt — je bent pas twee weken in dienst. Maar de manager wijst je erop: "Het systeem laat zien dat je te langzaam bent en te veel korting geeft."

Je collega fluistert: "Vorige week gaf ik een gast met een kapotte fiets 10% korting op zijn lunch. Dat vond ik logisch. Nu sta ik ook onderaan. Het systeem begrijpt de context niet."

De manager zegt: "Het systeem liegt niet. Cijfers zijn cijfers."

Jij denkt: Maar het systeem weet niet waarom ik korting heb gegeven, of dat ik net drie tafels tegelijk had.`,
    questionToAI:
      'Hoe kan ik als restaurantmanager het kassasysteem gebruiken om de prestaties van medewerkers te verbeteren?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om medewerkers te beoordelen op basis van kassadata — het systeem, de manager, of is er een gesprek nodig? Mag een systeem de context van een beslissing (waarom korting) negeren? Integriteit: wanneer is het gebruik van prestatiedata onrechtvaardig voor de medewerker? Welke context mist het systeem? Draagkracht: wat doet deze ranglijst met jou en je collega\'s? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-horeca-1b',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 1B · Allergenen & Systeem',
    order: 3,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt in de keuken van een cafetaria. Jullie gebruiken een digitaal bestelsysteem waarbij gasten via een tablet hun allergieprofiel kunnen invullen. Het systeem waarschuwt automatisch als een bestelling een allergeen bevat dat de gast heeft aangegeven.

Vandaag komt er een waarschuwing: "Gast heeft notenallergie. Geselecteerd gerecht bevat amandelen." Het systeem blokkeert de bestelling niet — het geeft alleen een melding in oranje.

Je collega aan de kassa zegt: "Die melding krijgen we twintig keer per dag. Meestal is het onzin. De gast heeft het zelf besteld, dus het is zijn verantwoordelijkheid. Ik stuur het gewoon door."

Jij twijfelt: amandelen kunnen bij ernstige notenallergie levensgevaarlijk zijn. Maar de gast heeft het gerecht zelf gekozen.

Je leidinggevende is druk. De rij is lang.`,
    questionToAI:
      'Hoe kan ik als horecamedewerker efficiënt omgaan met allergene meldingen in ons bestelsysteem?',
    questionToOrfheuss:
      'Mandaat: wie heeft hier het mandaat om te beslissen of de bestelling doorgaat — het systeem (dat niet blokkeert), de kassa-medewerker, de keuken, of de gast zelf? Integriteit: wanneer wordt "de gast heeft het zelf gekozen" een onvoldoende verantwoording? Welke zorgplicht geldt er in de horeca (warenwet, HACCP, aansprakelijkheid)? Draagkracht: wat doet dit dilemma met jou onder tijdsdruk? Noem één risico en één protocol dat zou helpen.',
  },
  {
    id: 'case-mbo4-horeca-1c',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 1C · HACCP-Alert',
    order: 4,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt in een bakkerij met een digitaal temperatuurbewakingssysteem (onderdeel van HACCP). Alle koelcellen zijn gekoppeld aan sensoren. Als de temperatuur buiten de norm gaat, geeft het systeem een alert op een tablet.

Vanmorgen vroeg krijg je een alert: "Koelcel 2 — temperatuur 6,8°C (norm: max. 4°C). Controleer onmiddellijk."

Je kijkt in koelcel 2. Er staat vleeswaren, kaas en bereide salades. De deur staat op een kier — waarschijnlijk per ongeluk niet goed dichtgedaan gisteravond.

Je collega zegt: "Ach, 6,8 is niet veel hoger dan 4. Het zal wel meevallen. Gooi er gewoon een paar minuten de koeling op maximum en zet het in het HACCP-logboek als 'tijdelijke afwijking, gecorrigeerd'."

Jij twijfelt: de producten liggen er mogelijk al uren zo. Je weet niet hoe lang.

De chef is er nog niet. Over een uur openen jullie.`,
    questionToAI:
      'Wat moet ik doen als mijn HACCP-systeem een temperatuurafwijking meldt in een koelcel met bereide producten?',
    questionToOrfheuss:
      'Mandaat: wie heeft hier het mandaat om te beslissen wat er met de producten gebeurt — jij als stagiair, je collega, de chef, of is er een protocol? Mag je dit zelfstandig oplossen? Integriteit: wanneer wordt "tijdelijke afwijking, gecorrigeerd" een onvoldoende registratie? Welke HACCP-norm en aansprakelijkheid spelen hier? Draagkracht: wat doet deze situatie met jou als stagiair die het alleen moet oplossen? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-horeca-2a',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 2A · Reviews & Reputatie',
    order: 5,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een hotel. Jullie gebruiken een reputatiemanagementsysteem dat automatisch reviews van Google, Booking.com en TripAdvisor verzamelt en analyseert. Het systeem geeft per week een rapport: gemiddelde score, trending klachten en aanbevelingen voor verbetering.

Deze week staat er een negatieve review op Google van een gast: "Kamer was smerig, personeel onvriendelijk, ontbijt koud. Nooit meer." De gast heeft 1 ster gegeven.

Het systeem genereert automatisch een conceptreactie: "Beste gast, wij betreuren uw ervaring. Wij nemen klachten serieus en nodigen u uit voor een compensatiegesprek."

Je manager zegt: "Stuur die reactie maar direct. Het systeem doet het goed. We moeten snel reageren voor het algoritme."

Jij kijkt de review na. Je was die dag zelf aan het werk. De gast had een kamer met een kapotte verwarming — dat was een technisch probleem. Het personeel heeft zich ingespannen. De review klopt niet helemaal.`,
    questionToAI:
      'Hoe kan ik als horecamedewerker het beste reageren op een negatieve online review om de reputatie van ons hotel te beschermen?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om namens het hotel te reageren op reviews — het systeem, jij, je manager? Mag een automatisch gegenereerde reactie zomaar geplaatst worden? Integriteit: wanneer is een geautomatiseerde reactie oneerlijk voor het personeel dat zich heeft ingespannen? Welke informatie mist het systeem? Draagkracht: wat doet het plaatsen van een "standaardverontschuldiging" met jou en je collega\'s? Noem één risico en één betere aanpak.',
  },
  {
    id: 'case-mbo4-horeca-2b',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 2B · Klantprofiel & Aanbeveling',
    order: 6,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een koffiebar die gebruik maakt van een loyaliteitsapp. Gasten scannen hun app bij elke aankoop. Het systeem slaat op wat ze bestellen, hoe vaak ze komen, hoeveel ze uitgeven en op welke tijdstippen.

Het systeem stuurt automatisch gepersonaliseerde aanbiedingen: "Hé Lars, jij bestelt altijd een cappuccino op dinsdag. Vandaag 20% korting!" De marketingmanager is er enthousiast over: "Conversie is omhoog, gasten vinden het leuk."

Vandaag komt er een vaste gast, mevrouw Pietersen (68 jaar). Ze is boos: "Ik heb een brief gekregen dat jullie mijn koffiegedrag bijhouden. Ik wil dat niet. Ik wil gewoon anoniem koffie kunnen drinken."

De barista naast jou zegt: "Dat staat in de kleine lettertjes van de app. Ze had beter moeten lezen."

Jij denkt: Maar heeft ze echt begrepen waarvoor ze toestemming gaf? Ze is 68 en gebruikte de app alleen voor de gratis koffie na tien stempels.`,
    questionToAI:
      'Hoe kan ik als horecamedewerker klantdata uit onze loyaliteitsapp gebruiken om gasten een persoonlijkere ervaring te geven?',
    questionToOrfheuss:
      'Mandaat: heeft mevrouw Pietersen echt toestemming gegeven voor dit niveau van dataverwerking, of was dat onduidelijk? Wie heeft het mandaat om te bepalen welke data verzameld worden? Integriteit: wanneer is gepersonaliseerde marketing oneerlijk of onrespectabel voor de gast? Welke AVG-rechten (inzage, verwijdering, bezwaar) spelen hier? Draagkracht: wat doet deze situatie met jouw gevoel als medewerker? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-horeca-2c',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 2C · Klacht via App',
    order: 7,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt in een fastfoodrestaurant. Gasten kunnen via de app van de keten klachten indienen. Het systeem registreert alle klachten en stuurt automatisch een voucher naar gasten als compensatie.

Vandaag zie je een melding: een gast heeft geklaagd dat zijn bestelling onvolledig was. Het systeem heeft automatisch een voucher van €5 gestuurd. Klacht gesloten.

Maar je weet: die gast was gisteren zelf. Hij had een grote bestelling, stond lang te wachten, en vertrok zonder te controleren. Later die avond klaagde hij via de app. Je hebt zijn bestelling zelf ingepakt — alles zat erin.

Je collega zegt: "Laat maar. Het systeem geeft hem een voucher en dan is het klaar. Dat is de procedure."

Jij denkt: Maar als iedereen dit doet, misbruiken gasten de app voor gratis vouchers. En wij staan in het systeem als "klacht opgelost" terwijl wij niets fout hebben gedaan.`,
    questionToAI:
      'Hoe kan ik als medewerker klachten van gasten via de app snel en effectief afhandelen?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om een klacht "gesloten" te verklaren — het systeem automatisch, of moet een mens beoordelen? Mag het systeem compensatie toekennen zonder verificatie? Integriteit: wanneer is automatische compensatie oneerlijk voor het team dat goed werk heeft geleverd? Welk risico kleeft er aan een systeem dat nooit twijfelt? Draagkracht: wat doet het "altijd gelijk geven aan de gast via het systeem" met jouw motivatie en werksfeer? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-horeca-3a',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 3A · Roosterprogramma & Flex',
    order: 8,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt als senior medewerker bij een hotelketen. Jullie manager gebruikt een roostersoftwarepakket dat automatisch roosters genereert op basis van historische bezettingsdata, contracturen en beschikbaarheid.

Het systeem heeft voor volgende week een rooster gegenereerd. Jij ziet: je collega Fatima (parttimer, 20 uur contract) staat vijf dagen ingeroosterd van 07:00–14:00 uur, waarvan drie op haar vrije dagen die ze vorige week heeft doorgegeven.

Fatima heeft een kind op de basisschool — ze heeft de ochtenden op díe vrije dagen nodig voor de schooldrop.

Je manager zegt: "Het systeem heeft dit zo gepland vanwege de drukte. Ik kan het niet zomaar aanpassen — dan klopt de bezetting niet."

Fatima durft zelf niets te zeggen — ze is bang haar contract te verliezen.`,
    questionToAI:
      'Hoe kan ik als manager een roosterprogramma gebruiken om de bezetting in ons hotel optimaal te plannen?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om het rooster aan te passen — het systeem, de manager, of de medewerker zelf? Mag een systeem vrije dagen negeren die zijn doorgegeven? Integriteit: wanneer is een geautomatiseerd rooster oneerlijk voor een medewerker met zorgtaken? Welke arbeidsrechtelijke norm speelt hier (ATW, zorgverlof, goed werkgeverschap)? Draagkracht: wat doet deze situatie met Fatima en met jou als collega? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-horeca-3b',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 3B · Omzetdoelen & Werkdruk',
    order: 9,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt als medewerker bediening in een grand café. Het management gebruikt een omzetdashboard: elke medewerker ziet live hoeveel omzet hij of zij die dag heeft gegenereerd. Er is een teamdoel: €3.500 omzet per dienst.

Er is een bonussysteem: als het team het doel haalt, krijgt iedereen een bonus van €10. Als het doel niet gehaald wordt, krijgt niemand een bonus — en de manager bespreekt het in de volgende teammeeting.

Je collega Lars zegt: "Ik push altijd voor een dessert en een extra drankje. Niet omdat de gast het wil, maar voor het omzetdoel. Soms voel ik me een verkoper, geen ober."

Een gast vraagt jou: "Wat raad je aan?" Jij weet: het meest winstgevende gerecht is de ribeye, maar de gast heeft gezegd dat hij niet zo hongerig is.

Jij denkt: Moet ik adviseren wat goed is voor de gast, of wat goed is voor het omzetdoel?`,
    questionToAI:
      'Hoe kan ik als horecamedewerker gasten effectief adviseren over de menukaart om de omzet te verhogen?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om te bepalen wat "goed advies" is — het omzetdashboard, de manager, of jij als professional die de gast ziet? Integriteit: wanneer wordt omzetgedreven adviseren oneerlijk of manipulatief voor de gast? Welke norm geldt er voor eerlijk advies in de horeca? Draagkracht: wat doet het bonussysteem met jouw werkplezier en de sfeer in het team? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-horeca-3c',
    workbookId: 'wb-mbo4-horeca',
    title: 'Cluster 3C · Kassacontrole & Vertrouwen',
    order: 10,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een bakkerij-keten. Jullie kassasysteem registreert elke transactie, inclusief annuleringen, kortingen en "no-sale" (la openen zonder aankoop). Het systeem genereert dagelijks een rapport voor de regiomanager, inclusief een overzicht van medewerkers met "afwijkend kasgedrag".

Jij staat in het rapport: drie no-sales gisteren, twee annuleringen. De regiomanager stuurt een e-mail: "Graag uitleg over afwijkend kasgedrag op 14 maart."

Je weet precies waarom: twee keer heb je de la geopend om een gast wisselgeld te geven omdat de betaalterminal uitviel. Eén keer heb je een bestelling geannuleerd omdat een gast de verkeerde taart had besteld (hij stond nog aan de balie, je hebt het direct opnieuw ingevoerd).

Je collega zegt: "Ze vertrouwen ons niet. Het systeem behandelt ons als verdachten."

Jij vraagt jezelf af: Hoe leg ik dit uit? Moet ik dit bewijzen? Is er ruimte voor context?`,
    questionToAI:
      'Hoe kan ik als medewerker uitleggen waarom mijn kasregistraties afwijken van de norm, zonder mijn baan te riskeren?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om te oordelen over kasgedrag — het systeem automatisch, de regiomanager op afstand, of moet er eerst een gesprek zijn? Integriteit: wanneer is monitoring van kasgedrag disproportioneel of oneerlijk voor medewerkers? Welke norm geldt er voor goed werkgeverschap (onschuldpresumptie, hoor en wederhoor)? Draagkracht: wat doet deze controle met jouw gevoel van vertrouwen en motivatie? Noem één risico en één oplossing.',
  },

  // ── MBO4 FINANCE & CONTROL ─────────────────────────────────────────────
  {
    id: 'case-mbo4-finance-1a',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 1A · De Geblokkeerde Factuur',
    order: 2,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt als stagiair bij een administratiekantoor. Jullie gebruiken een boekhoudpakket met AI-factuurherkenning (OCR + machine learning). Het systeem scant facturen automatisch en boekt ze direct op de juiste grootboekrekening.

Vandaag krijg je een melding: factuur van leverancier "Van der Linden Installatie" voor €2.450 is geblokkeerd. Het systeem zegt: "Afwijking gedetecteerd: BTW-percentage komt niet overeen met standaard."

Je opent de factuur. Het gaat om een reparatie aan een zonnepaneel-installatie. De leverancier heeft 9% BTW berekend (verlaagd tarief). Het systeem verwacht 21% en heeft de factuur op "hold" gezet.

Je belt de leverancier. Hij legt uit: "Zonnepanelen vallen sinds 2023 onder 0% BTW, maar onderhoud en reparatie valt onder 9% volgens de Belastingdienst. Dat klopt echt. Wij doen dit al jaren zo."

Je collega zegt: "Laat het systeem maar beslissen. Als het blokkeert, is er iets mis. Wij hebben geen tijd om elke factuur handmatig uit te zoeken."

Je leidinggevende is in vergadering. De leverancier belt een uur later: "Ik wacht al twee weken op betaling. Als het niet snel geregeld wordt, kom ik niet meer terug voor garantiewerkzaamheden."`,
    questionToAI:
      'Wat moet ik doen als een factuur door het systeem wordt geblokkeerd vanwege een afwijkend BTW-percentage?',
    questionToOrfheuss:
      'Mandaat: wie mag uiteindelijk beslissen of deze factuur betaald wordt — jij, je collega, je leidinggevende, of het systeem? Op basis waarvan? Integriteit: wanneer wordt dit besluit oneerlijk voor de leverancier? Welke interne controle of regel speelt hier een rol? Draagkracht: wat doet deze situatie met jouw werkdruk en gevoel van verantwoordelijkheid? Noem één risico en één ding dat zou helpen.',
  },
  {
    id: 'case-mbo4-finance-1b',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 1B · Fraudeflag & Leverancier',
    order: 3,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een middelgroot productiebedrijf. Jullie ERP-systeem heeft automatische fraudedetectie: het controleert alle uitgaande betalingen en markeert "verdachte" transacties op basis van patronen (afwijkende bedragen, nieuwe rekeningen, hoge frequentie).

Vanmorgen zie je een rode vlag bij een betaling van €8.500 aan leverancier "TechParts B.V." Het systeem zegt: "Hoogrisico: Nieuw rekeningnummer. Bevestig handmatig voor betaling."

Je zoekt het op. TechParts is een vaste leverancier van onderdelen. Zij hebben vorige maand een nieuw rekeningnummer doorgegeven via e-mail. Jij hebt dat toen genoteerd en in het systeem aangepast.

Het systeem blokkeert toch. Je belt TechParts. De eigenaar is boos: "Jullie betalen nooit op tijd! Dit is de derde maand dat het fout gaat. Ik stop met leveren als dit zo doorgaat."

Je leidinggevende zegt: "Het systeem doet dit voor een reden. Vorig jaar is er €15.000 verloren door een phishing-mail met vals rekeningnummer. Wij volgen altijd het systeem."

Jij denkt: Maar dit is echt dezelfde leverancier. Ik heb de e-mail nog.`,
    questionToAI:
      'Hoe kan ik controleren of een nieuw rekeningnummer van een leverancier betrouwbaar is voordat ik de betaling vrijgeef?',
    questionToOrfheuss:
      'Mandaat: wie heeft hier het mandaat om de betaling vrij te geven of definitief te blokkeren — jij, je leidinggevende, het systeem, of moet je nog iemand erbij halen? Integriteit: wanneer wordt "altijd het systeem volgen" oneerlijk voor de leverancier? Welke controle zou hier helpen (bijv. dubbele check, telefonische bevestiging)? Draagkracht: wat doet deze situatie met jouw gevoel van verantwoordelijkheid? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-finance-1c',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 1C · BTW-Afwijking',
    order: 4,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een accountantskantoor. Jullie software controleert automatisch BTW-aangiften voordat ze worden ingediend. Het systeem vergelijkt ingevoerde bedragen met eerdere aangiften en signaleert "afwijkingen".

Bij klant "Bouwbedrijf Jansen" zie je een melding: "Afwijking gedetecteerd: BTW te betalen €12.000 lager dan vorige kwartalen (gemiddeld €18.000). Handmatige controle aanbevolen."

Je bekijkt de cijfers. Jansen heeft dit kwartaal veel minder omzet gedraaid — een groot project is uitgesteld door vergunningsproblemen. De BTW klopt dus: minder omzet = minder BTW.

Het systeem biedt twee opties: "Automatisch corrigeren naar gemiddelde" (systeem past BTW aan naar €18.000) of "Handmatig bevestigen afwijking" (jij neemt verantwoordelijkheid).

Je collega zegt: "Klik gewoon op 'bevestigen'. Het is jouw verantwoordelijkheid als je het systeem overrulet."

Je leidinggevende zegt: "Het systeem signaleert dit voor een reden. Heb je écht alles nagelopen? Vorig jaar hadden we een fout die €5.000 boete kostte."

Je denkt: De cijfers kloppen echt. Maar wat als ik iets over het hoofd zie?`,
    questionToAI:
      'Wat moet ik doen als mijn BTW-aangiftesoftware een afwijking detecteert ten opzichte van vorige kwartalen?',
    questionToOrfheuss:
      'Mandaat: wie heeft hier het mandaat om te beslissen of de BTW-aangifte klopt — jij, het systeem, je leidinggevende, of de klant? Wanneer mag je het systeem "overrulen"? Integriteit: wanneer is het rechtvaardig om het systeem te volgen, en wanneer moet je zelf controleren? Welke fiscale regel of beroepsaansprakelijkheid speelt hier? Draagkracht: wat doet deze keuze met jouw gevoel van verantwoordelijkheid? Noem één risico en één ding dat zou helpen.',
  },
  {
    id: 'case-mbo4-finance-2a',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 2A · Kredietscore Weigert',
    order: 5,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt als financieel adviseur bij een bank. Jullie gebruiken een kredietscore-systeem dat automatisch klanten beoordeelt op basis van inkomen, schulden, betalingshistorie en andere data.

Vandaag zit je in gesprek met mevrouw De Vries (32 jaar). Zij wil een persoonlijke lening van €8.000 voor een tweedehands auto — zij werkt als thuiszorgmedewerker en heeft de auto nodig voor haar werk.

Je voert haar gegevens in. Het systeem geeft score 580 (grens is 600). Melding: "Afgewezen. Te laag inkomen in verhouding tot bestaande verplichtingen."

Mevrouw De Vries legt uit: "Ik heb vorig jaar een half jaar minder gewerkt omdat mijn moeder ziek was. Sindsdien werk ik weer fulltime. Mijn inkomen is nu stabiel. Ik betaal altijd op tijd. Dit is echt nodig voor mijn werk."

Je ziet in het systeem: betalingshistorie is perfect (geen wanbetalingen), maar haar inkomen was inderdaad tijdelijk lager vorig jaar. Het systeem kijkt naar gemiddeld inkomen over 12 maanden.

Je collega zegt: "Als het systeem 'nee' zegt, is het nee. Wij mogen niet afwijken; dat is het beleid."

Je leidinggevende zegt: "Je mag een verzoek indienen voor handmatige beoordeling, maar dat duurt twee weken en wordt zelden goedgekeurd."

Mevrouw De Vries: "Over twee weken ben ik mijn baan kwijt als ik geen auto heb."`,
    questionToAI:
      'Wat zijn de opties voor een klant die net is afgewezen voor een lening op basis van een te lage kredietscore?',
    questionToOrfheuss:
      'Mandaat: wie heeft hier het mandaat om te beslissen over de lening — jij, het systeem, je leidinggevende, of een kredietcommissie? Mag je ooit afwijken van het systeem? Integriteit: wanneer wordt een kredietscore onrechtvaardig voor een klant? Welke context mist het systeem (tijdelijke situatie, mantelzorg, betaalgedrag)? Welke regel speelt een rol (Wft, zorgplicht)? Draagkracht: wat doet deze situatie met jou als adviseur? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-finance-2b',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 2B · MKB-Klant Hoog Risico',
    order: 6,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt als relatiemanager zakelijke markt bij een bank. Jullie gebruiken een AI-risico-model dat MKB-klanten scoort op basis van omzet, winst, sector, schulden en economische trends.

Je klant "Bouwbedrijf Vermeer" wil een krediet van €50.000 voor nieuwe materialen — een grote opdracht is binnengehaald. Jij kent deze klant al vijf jaar; altijd netjes betaald, solide bedrijf.

Je voert de gegevens in. Het AI-model geeft risicoscore "Hoog" met melding: "Sector bouw: verhoogd risico door economische onzekerheid. Krediet niet aanbevolen."

Je belt de klant. Hij is teleurgesteld: "Wij hebben een contract voor drie jaar met een woningcorporatie. Dit is de meest stabiele opdracht die we ooit hebben gehad. Zonder dit krediet kunnen we niet starten."

Je collega zegt: "Het model weet meer dan wij. Het kijkt naar duizenden bedrijven. Als het 'hoog risico' zegt, is het hoog risico."

Je leidinggevende zegt: "Je mag een voorstel doen om af te wijken, maar je moet dat goed onderbouwen. Als het misgaat, ligt dat bij jou."`,
    questionToAI:
      'Hoe kan ik een zakelijke klant in de bouwsector helpen die door het risicomodel wordt afgewezen voor een krediet?',
    questionToOrfheuss:
      'Mandaat: wie heeft hier het mandaat om te beslissen — jij als relatiemanager, het AI-model, je leidinggevende, of een kredietcommissie? Wanneer mag je afwijken van het model? Integriteit: wanneer is het rechtvaardig om het model te volgen, en wanneer moet je als professional afwijken? Welke informatie mist het model (relatie, contract, trackrecord)? Draagkracht: wat doet deze beslissing met jouw verantwoordelijkheid? Noem één risico als je afwijkt én één vorm van steun.',
  },
  {
    id: 'case-mbo4-finance-2c',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 2C · Dashboard Stuurt Verkoop',
    order: 7,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt als financieel adviseur bij een verzekeringsmaatschappij. Jullie data-dashboard segmenteert klanten op basis van inkomen, leeftijd, woonplaats en koopgedrag. Het dashboard geeft elke maand een lijst met "kansrijke klanten" voor nieuwe producten.

Deze maand krijg je een actie: "Pensioenproduct promoten bij klanten met score > 75." Klanten met lagere scores (50–74) staan niet in de lijst. Het systeem zegt: "Lage conversiekans. Niet benaderen."

Je bekijkt de data. Klanten met score < 75 zijn vaak: lager inkomen, jongere leeftijd, geen eerdere aankopen.

Jij denkt: Maar juist jongere mensen met lager inkomen hebben misschien wel pensioenbehoefte — zij bouwen nog weinig op.

Je collega zegt: "Het dashboard bepaalt wie we benaderen. Anders verspillen we tijd aan klanten die toch niet kopen."

Je leidinggevende zegt: "We willen efficiënt werken. Het systeem helpt ons focussen op de beste kansen."

Jij vraagt: "Maar sluiten we dan niet juist mensen uit die het product nodig hebben?"`,
    questionToAI:
      'Hoe kan ik als adviseur efficiënt bepalen welke klanten ik moet benaderen voor een nieuw pensioenproduct?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om te bepalen welke klanten advies krijgen — jij als adviseur, het dashboard, je leidinggevende, of het bedrijfsbeleid? Mag je zelf klanten benaderen die niet in de lijst staan? Integriteit: wanneer wordt datagedreven targeting onrechtvaardig? Welke groep loopt risico om uitgesloten te worden? Welke norm speelt hier (Wft, zorgplicht, gelijke behandeling)? Draagkracht: wat doet dit met jouw rol als adviseur? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-finance-3a',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 3A · Wwft-Alert bij Stichting',
    order: 8,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij de compliance-afdeling van een bank. Jullie Wwft-monitoringsysteem scant automatisch transacties op "ongebruikelijke patronen" (hoge bedragen, frequent contant, buitenlandse transfers).

Vandaag krijg je een alert voor rekening van "Stichting Nieuw Begin" (opvang voor dak- en thuislozen). Het systeem meldt: "Ongebruikelijk: 12 stortingen contant, totaal €18.000 in 3 maanden. Verificatie vereist. Melding FIU-Nederland aanbevolen."

Je belt de stichting. De penningmeester legt uit: "Wij krijgen donaties via collectebussen bij supermarkten en kerkdiensten. Dat is allemaal contant. We storten dat elke week. Dit doen we al jaren zo. Het is legaal."

Het systeem zegt: "Patroon past bij mogelijk witwassen. Melden verplicht."

Je collega zegt: "Als het systeem melding aanbeveelt, moeten we melden. Dat is de procedure. Anders krijgen we problemen met toezicht."

Jij denkt: Maar dit is een stichting voor daklozen. Dit voelt niet als witwassen.`,
    questionToAI:
      'Wat moet ik doen als een compliance-systeem een alert genereert voor een stichting met veel contante stortingen?',
    questionToOrfheuss:
      'Mandaat: wie heeft het mandaat om te beslissen of je moet melden bij FIU-Nederland — jij als compliance-medewerker, het systeem, je leidinggevende, of is er een wettelijke verplichting? Mag je afwijken van het systeem? Integriteit: wanneer is het rechtvaardig om een melding te doen, en wanneer is het disproportioneel? Welke context mist het systeem (type organisatie, legale herkomst)? Welke wet speelt hier (Wwft, meldplicht, zorgvuldigheid)? Draagkracht: wat doet deze keuze met jouw gevoel van verantwoordelijkheid? Noem één risico en één oplossing.',
  },
  {
    id: 'case-mbo4-finance-3b',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 3B · Alert-Overload',
    order: 9,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een middelgrote bank op de compliance-afdeling. Jullie monitoren transacties op fraude, witwassen en andere risico's. Het systeem genereert dagelijks alerts die jij moet beoordelen.

Gemiddeld krijg je 80 alerts per dag. Elke alert moet je openen, beoordelen en documenteren: "Echt risico" of "Vals alarm." Dit moet binnen 24 uur.

De afgelopen maand zijn de alerts verdubbeld door een nieuw algoritme met lagere drempelwaarden. Je komt niet meer bij. Gisteren heb je 60 alerts afgehandeld; vandaag staan er alweer 95 open.

Je collega is vorige maand met burn-out uitgevallen. Jouw leidinggevende zegt: "We weten dat het druk is. Doe je best. Focus op de alerts met hoog risico."

Jij denkt: Maar hoe weet ik welke hoog risico zijn als ik ze niet allemaal bekijk?

Je merkt dat je sneller gaat werken, minder goed kijkt. Vorige week heb je een alert als "vals alarm" gemarkeerd zonder de transacties echt na te lopen. Later bleek het tóch verdacht — gelukkig is het opgevangen door een tweede controle.`,
    questionToAI:
      'Hoe kan ik als compliance-medewerker efficiënt omgaan met een grote hoeveelheid dagelijkse alerts?',
    questionToOrfheuss:
      `Mandaat: wie heeft het mandaat om te bepalen hoeveel alerts je aankan — jij, je leidinggevende, het systeem, of HR/arbeidsveiligheid? Mag je zeggen "dit is te veel"? Integriteit: wanneer wordt "meer alerts genereren voor veiligheid" onrechtvaardig voor de medewerker? Welke norm speelt hier (zorgvuldigheid, kwaliteit, Arbowet, werkdruk)? Draagkracht: wat doet deze werkdruk met jou en je collega's? Noem één risico (fouten, burn-out, kwaliteitsdaling) en één oplossing (extra capaciteit, prioritering, aanpassing algoritme).`,
  },
  {
    id: 'case-mbo4-finance-3c',
    workbookId: 'wb-mbo4-finance',
    title: 'Cluster 3C · Bonus op Alerts',
    order: 10,
    type: 'case',
    domain: 'finance',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Integriteit', 'Draagkracht'],
    situation: `Je werkt bij een verzekeringsmaatschappij op de fraud-afdeling. Jullie monitoren claims op mogelijke fraude. Het systeem genereert alerts bij verdachte patronen (hoge claim kort na afsluiten polis, meerdere claims in korte tijd).

Recent is er een nieuw performance-dashboard ingevoerd. Het dashboard toont per medewerker: aantal afgehandelde alerts, aantal "bevestigde fraude-gevallen", score op efficiëntie + effectiviteit. Elke maand wordt de top 3 beloond met een bonus van €250.

Je collega zegt: "Ik ga voor de bonus. Ik markeer nu sneller dingen als fraude. Als je twijfelt, is het beter om het door te sturen naar onderzoek — dan telt het als 'actie ondernomen'."

Jij merkt: het aantal "fraude-meldingen" is verdrievoudigd. Maar veel blijken vals alarm. Klanten worden onterecht gebeld, gecontroleerd, soms tijdelijk geblokkeerd.

Vorige week heb je een alert gekregen voor een oudere mevrouw die twee keer in drie maanden een kleine schade claimde (gebroken ruit, waterschade). Je collega zei: "Markeer maar als verdacht. Telt mee voor je score."

Jij dacht: Maar dit is geen fraude. Dit is gewoon pech.`,
    questionToAI:
      'Hoe kan ik als medewerker van een fraud-afdeling efficiënt meer fraude-signalen detecteren en afhandelen?',
    questionToOrfheuss:
      `Mandaat: wie heeft het mandaat om te bepalen wat fraude is — jij als medewerker, het dashboard, je leidinggevende, of een onafhankelijke commissie? Mag het dashboard bepalen wat je doet? Integriteit: wanneer wordt "bonus op aantal meldingen" onrechtvaardig voor klanten? Welke norm wordt hier geschonden (integriteit, zorgvuldigheid, onschuldpresumptie)? Draagkracht: wat doet deze bonus-regeling met jouw werk en gevoel van integriteit? Noem één risico (perverse prikkel, valse meldingen) en één oplossing (andere KPI's, kwaliteit i.p.v. kwantiteit).`,
  },
];


// ── Ethiek-lessen ─────────────────────────────────────────────────────────
export const ETHICS_LESSONS: EthicsLesson[] = [

  // ── MBO4 SOCIAL MEDIA & ETHIEK ──────────────────────────────────────────
  {
    id: 'eth-mbo4-social-summary',
    workbookId: 'wb-mbo4-social',
    title: 'Slotopdracht · Jouw Social Media & Ethiek-Kompas',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Maak jouw persoonlijk kompas voor social media en ethiek',
        subQuestions: [
          'Noem drie dingen die jij normaal vond, maar na dit werkboek niet meer.',
          'Noem twee persoonlijke grenzen online die jij voortaan aanhoudt. Leg kort uit waarom.',
          'Schrijf één zin voor jezelf — bijvoorbeeld: "Mijn aandacht is niet gratis" of "Wat mijn lichaam niet trekt, is geen goede deal." Kies of schrijf jouw eigen zin.',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── MARKETING ──────────────────────────────────────────────────────────
  {
    id: 'eth-hbo-marketing-mandaat',
    workbookId: 'wb-hbo-marketing',
    title: 'Ethische reflectie 1 · Mandaat & toestemming',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wat betekent mandaat in een marketingcontext?',
        subQuestions: [
          'Wanneer mag je iemands data gebruiken om hen te targeten?',
          'Is wettelijke toestemming (AVG-akkoord klikken) altijd voldoende ethisch mandaat?',
          'Waar zit de grens tussen personalisatie en manipulatie?',
        ],
      },
    ],
  },
  {
    id: 'eth-hbo-marketing-verantwoordelijkheid',
    workbookId: 'wb-hbo-marketing',
    title: 'Ethische reflectie 2 · Verantwoordelijkheid & grondhouding',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wie is verantwoordelijk als een AI-campagne schade veroorzaakt?',
        subQuestions: [
          'De ontwikkelaar van de AI? Het platform? De opdrachtgever? Jij als uitvoerder?',
          'Wat doe jij als je opdracht krijgt iets te bouwen dat je ethisch twijfelachtig vindt?',
          'Welke grondhouding wil jij meenemen als marketingprofessional?',
        ],
      },
    ],
  },
  {
    id: 'eth-hbo-marketing-summary',
    workbookId: 'wb-hbo-marketing',
    title: 'Slotopdracht · Persoonlijke Marketing & Ethiek-notitie',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Kies één zelfgekozen marketingcase (uit stage, nieuws of eigen idee) en werk die door met het ORFHEUSS-kader.',
        subQuestions: [
          'Situatie: beschrijf de feiten, context en betrokkenen van jouw gekozen case.',
          'AI-component: waar wordt in jouw case gegenereerd, geoptimaliseerd of versneld — en met welk effect?',
          'ORFHEUSS-lens: analyseer op F-druk, Quiet Violence, O36-check (velocity vs. draagkracht), mandaat en een eventueel Cerberus-moment.',
          'Alternatief voorstel: beschrijf een marketingoplossing die grenzen en MA respecteert en toch effectief is.',
          'Eigen beroepscode: formuleer drie persoonlijke principes die jij als toekomstig marketingprofessional altijd aanhoudt.',
        ],
      },
    ],
  } as unknown as EthicsLesson,  // summary gebruikt dezelfde structuur

  // ── SOCIAAL DOMEIN ──────────────────────────────────────────────────────
  {
    id: 'eth-hbo-sociaal-systeemdruk',
    workbookId: 'wb-hbo-sociaal',
    title: 'Ethische reflectie 1 · Systeemdruk & systeemgeweld',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wanneer gaat systeemdruk over in systeemgeweld?',
        subQuestions: [
          'Waar zie je dat in jouw stage of praktijk?',
          'Wat is het verschil tussen "het systeem volgen" en "het systeem bewaken"?',
          'Waar zou TaoGate op STOP moeten springen in jouw werkveld?',
        ],
      },
    ],
  },
  {
    id: 'eth-hbo-sociaal-professionele-moed',
    workbookId: 'wb-hbo-sociaal',
    title: 'Ethische reflectie 2 · Professionele moed',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wat is professionele moed in het sociaal domein?',
        subQuestions: [
          'Beschrijf een moment waarop jij of een collega moest kiezen tussen het beleid en het belang van de cliënt.',
          'Wat maakt het moeilijk om te handelen vanuit je professionele waarden?',
          'Welke steun heb je nodig om dat vaker te doen?',
        ],
      },
    ],
  },
  {
    id: 'eth-hbo-sociaal-summary',
    workbookId: 'wb-hbo-sociaal',
    title: 'Samenvatting · Jouw professionele grondhouding',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf jouw professionele grondhouding in het sociaal domein',
        subQuestions: [
          'Welke waarden zijn voor jou niet onderhandelbaar, ook als het systeem anders vraagt?',
          'Noem drie situaties waarin jij STOP zou zeggen.',
          'Hoe verhoudt jouw grondhouding zich tot de ORFHEUSS-toets?',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── FINANCE ─────────────────────────────────────────────────────────────
  {
    id: 'eth-hbo-finance-1',
    workbookId: 'wb-hbo-finance',
    title: 'Ethische reflectie · Zorgplicht & verantwoording',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wat betekent zorgplicht in een gefinancialiseerde AI-context?',
        subQuestions: [
          'Wanneer overschrijdt een financieel algoritme de grens van zorgplicht?',
          'Wie is aansprakelijk als een klant schade lijdt door een algoritmisch besluit?',
          'Hoe vertaal je ORFHEUSS naar jouw toekomstige rol als financieel professional?',
        ],
      },
    ],
  },

  // ── DIGITAL ─────────────────────────────────────────────────────────────
  {
    id: 'eth-hbo-digital-1',
    workbookId: 'wb-hbo-digital',
    title: 'Ethische reflectie · Ontwerper als gate',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Jij als UX-ontwerper bent de gate — wat betekent dat?',
        subQuestions: [
          'Welke keuzes in jouw ontwerp sturen gebruikersgedrag?',
          'Wanneer is nudging legitiem en wanneer is het manipulatie?',
          'Hoe ontwerp je een interface die ORFHEUSS-proof is?',
        ],
      },
    ],
  },

  // ── FINANCE SUMMARY ──────────────────────────────────────────────────────
  {
    id: 'eth-hbo-finance-summary',
    workbookId: 'wb-hbo-finance',
    title: 'Samenvatting · Jouw kompas als financieel professional',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf jouw professionele kompas voor algoritmische besluitvorming',
        subQuestions: [
          'Noem drie situaties waarin jij als financieel professional STOP zou zeggen.',
          'Welke waarden zijn voor jou niet onderhandelbaar, ook onder commerciële druk?',
          'Hoe leg je de ORFHEUSS-toets uit aan een klant of opdrachtgever?',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── DIGITAL SUMMARY ──────────────────────────────────────────────────────
  {
    id: 'eth-hbo-digital-summary',
    workbookId: 'wb-hbo-digital',
    title: 'Samenvatting · Jouw ontwerpers-grondhouding',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf jouw grondhouding als digitaal ontwerper',
        subQuestions: [
          'Noem drie ontwerpkeuzes waarbij jij als gate zou optreden.',
          'Wanneer is nudging voor jou legitiem — en wanneer niet?',
          'Hoe verdedig je een ORFHEUSS-proof ontwerp tegenover een opdrachtgever die meer conversie wil?',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── DOCENTEN MARKETING ───────────────────────────────────────────────────
  {
    id: 'eth-docenten-marketing-1',
    workbookId: 'wb-docenten-marketing',
    title: 'Didactische reflectie · ORFHEUSS in jouw les',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe introduceer je ORFHEUSS voor studenten die er nog nooit van gehoord hebben?',
        subQuestions: [
          'Welke openingsvraag werkt voor jouw groep?',
          'Welke weerstand verwacht je en hoe ga je daarmee om?',
          'Hoe toets je of studenten het verschil tussen AI en ORFHEUSS daadwerkelijk begrijpen?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-marketing-2',
    workbookId: 'wb-docenten-marketing',
    title: 'Didactische reflectie · Jouw grondhouding als docent',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe breng je jouw eigen grondhouding in als docent?',
        subQuestions: [
          'Welke gate-momenten bewaar jij zelf in je onderwijs?',
          'Hoe modelleer je bewust redeneren voor studenten — niet in woorden, maar in gedrag?',
          'Wat verandert er in jouw lespraktijk als je ethiek als lens door het hele vak heen behandelt?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-marketing-summary',
    workbookId: 'wb-docenten-marketing',
    title: 'Afsluiting · Jouw didactisch kompas',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf je eigen didactisch kompas voor ORFHEUSS-onderwijs',
        subQuestions: [
          'Wat zijn jouw drie vaste aanknopingspunten bij het begeleiden van ethische reflectie?',
          'Hoe differentieert jouw aanpak tussen MBO4, HBO en universitaire studenten?',
          'Wat neem jij als docent mee uit dit programma?',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── DOCENTEN SOCIAAL DOMEIN ───────────────────────────────────────────────
  {
    id: 'eth-docenten-sociaal-1',
    workbookId: 'wb-docenten-sociaal',
    title: 'Didactische reflectie · Systeemdruk bespreken in de klas',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe bespreek je systeemdruk en morele moed zonder cynisme te kweken?',
        subQuestions: [
          'Welke openingsvraag gebruik je om studenten het verschil te laten voelen tussen "het systeem volgen" en "het systeem bewaken"?',
          'Hoe ga je om met studenten die zeggen: "Ik kan toch niets veranderen"?',
          'Op welke momenten laat je TaoGate als begrip landen — niet als theorie, maar als herkenning?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-sociaal-2',
    workbookId: 'wb-docenten-sociaal',
    title: 'Didactische reflectie · Grondhouding en beroepsmoed',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe begeleid je studenten bij het ontwikkelen van professionele moed?',
        subQuestions: [
          'Welke casuïstiek uit jouw eigen praktijk gebruik je om beroepsmoed concreet te maken?',
          'Hoe creëer je psychologische veiligheid voor studenten om hun twijfels te benoemen?',
          'Wat is jouw eigen grondhouding ten opzichte van AI in het sociaal domein — en hoe deel je die?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-sociaal-summary',
    workbookId: 'wb-docenten-sociaal',
    title: 'Afsluiting · Jouw didactisch kompas voor het sociaal domein',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf je didactisch kompas voor ORFHEUSS in het sociaal domein',
        subQuestions: [
          'Welke drie momenten in dit programma zijn voor jouw studenten het meest vormend?',
          'Hoe verbind je ORFHEUSS aan de beroepscode van jouw opleiding?',
          'Wat wil jij dat studenten over tien jaar nog weten van wat ze hier geleerd hebben?',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── DOCENTEN FINANCE ─────────────────────────────────────────────────────
  {
    id: 'eth-docenten-finance-1',
    workbookId: 'wb-docenten-finance',
    title: 'Didactische reflectie · Algoritmische besluitvorming bespreken',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe leer je studenten nadenken over verantwoordelijkheid bij algoritmische besluiten?',
        subQuestions: [
          'Welke opening gebruik je om studenten het verantwoordingsgat bij AI-beslissingen te laten voelen?',
          'Hoe ga je om met het argument "het algoritme is objectiever dan een mens"?',
          'Op welk moment laat je het onderscheid landen tussen wettelijke compliance en ethische verantwoordelijkheid?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-finance-2',
    workbookId: 'wb-docenten-finance',
    title: 'Didactische reflectie · Zorgplicht en maatschappelijke rol',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe begeleid je studenten bij het verkennen van hun maatschappelijke verantwoordelijkheid als financieel professional?',
        subQuestions: [
          'Hoe maak je "zorgplicht" tastbaar voor studenten die gewend zijn aan kwantificeerbare uitkomsten?',
          'Welke casuïstiek gebruikt jijzelf om sociale rechtvaardigheid in finance bespreekbaar te maken?',
          'Hoe differentieert jouw aanpak per niveau (MBO4: concreet, HBO: systematisch, Uni: theoretisch)?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-finance-summary',
    workbookId: 'wb-docenten-finance',
    title: 'Afsluiting · Jouw didactisch kompas voor finance',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf je didactisch kompas voor ORFHEUSS in finance-onderwijs',
        subQuestions: [
          'Welke drie kernvragen gebruik jij om redenering te toetsen in plaats van uitkomst?',
          'Hoe integreer je ORFHEUSS in bestaande vakken zonder extra belasting?',
          'Wat neemt jij als docent mee uit dit programma in jouw eigen professionele praktijk?',
        ],
      },
    ],
  } as unknown as EthicsLesson,

  // ── DOCENTEN DIGITAL ─────────────────────────────────────────────────────
  {
    id: 'eth-docenten-digital-1',
    workbookId: 'wb-docenten-digital',
    title: 'Didactische reflectie · De ontwerper als gate bespreken',
    order: 10,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe help je studenten inzien dat elke ontwerpkeuze een ethische keuze is?',
        subQuestions: [
          'Welke interface of app gebruik jij als voorbeeld om de grens tussen nudging en manipulatie zichtbaar te maken?',
          'Hoe ga je om met studenten die zeggen: "Ik doe alleen wat de opdrachtgever vraagt"?',
          'Op welk moment in het ontwerpproces laat je ORFHEUSS als gate landen?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-digital-2',
    workbookId: 'wb-docenten-digital',
    title: 'Didactische reflectie · Ontwerpen onder commerciële druk',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Hoe begeleid je studenten bij het handhaven van hun grondhouding tegenover commerciële opdrachtgevers?',
        subQuestions: [
          'Welke situatie gebruik je om de spanning tussen conversie-optimalisatie en gebruikersbelang tastbaar te maken?',
          'Hoe leer je studenten nee zeggen — professioneel en effectief?',
          'Hoe beoordeel jij ontwerpkritiek: op esthetiek, op functionaliteit, of ook op ethische impact?',
        ],
      },
    ],
  },
  {
    id: 'eth-docenten-digital-summary',
    workbookId: 'wb-docenten-digital',
    title: 'Afsluiting · Jouw didactisch kompas voor digital & UX',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf je didactisch kompas voor ORFHEUSS in digital & UX-onderwijs',
        subQuestions: [
          'Welke drie ontwerpprincipes zijn voor jou altijd het uitgangspunt — ook onder druk?',
          'Hoe integreer je ORFHEUSS in bestaande design-critiques of projectbeoordelingen?',
          'Wat wil jij dat jouw studenten anders doen als ontwerper na dit programma?',
        ],
      },
    ],
  } as unknown as EthicsLesson,
  {
    id: 'eth-mbo4-horeca-reflectie',
    workbookId: 'wb-mbo4-horeca',
    title: 'Afsluitende Reflectie · Eigen Stage-Ervaring',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Beschrijf een situatie uit jouw stage of praktijk waar een systeem botste met professioneel handelen',
        subQuestions: [
          'Welk systeem was het (kassa, rooster, reviews, HACCP, loyaliteitsapp)? Wat gebeurde er? Wat zei het systeem, en wat dacht of voelde jij?',
          'Mandaat: wie mocht hier eigenlijk beslissen? Hoe verliep dat in de praktijk?',
          'Integriteit: was de inzet van het systeem eerlijk en proportioneel — voor de gast, de collega, of jezelf? Waarom wel of niet?',
          'Draagkracht: wat deed deze situatie met jou en/of het team? Wat hielp, wat miste je?',
        ],
      },
    ],
  } as unknown as EthicsLesson,
  {
    id: 'eth-mbo4-finance-reflectie',
    workbookId: 'wb-mbo4-finance',
    title: 'Afsluitende Reflectie · Eigen Stage-Ervaring',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Beschrijf een situatie uit jouw stage of praktijk waar een systeem botste met professioneel handelen',
        subQuestions: [
          'Welk systeem was het (boekhouding, ERP, kredietmodule, dashboard, Wwft-monitor)? Wat gebeurde er? Wat zei het systeem, en wat dacht of voelde jij?',
          'Mandaat: wie mocht hier eigenlijk beslissen? Hoe verliep dat in de praktijk?',
          'Integriteit: was de inzet van data of het systeem eerlijk en proportioneel? Waarom wel of niet?',
          'Draagkracht: wat deed deze situatie met jou en/of het team? Wat hielp, wat miste je?',
        ],
      },
    ],
  } as unknown as EthicsLesson,
];
