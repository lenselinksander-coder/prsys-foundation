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
  {
    id: 'ls-mbo4-horeca-bakkerij-intro',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Hoe gebruik je dit werkboek?',
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

  // ── MBO4 HORECA & BAKKERIJ ───────────────────────────────────────────────

  // Cluster 1 — Snelheid & Draagkracht
  {
    id: 'case-mbo4-horeca-1a-misenpace',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 1 · De mis-en-place die nooit klaar is',
    order: 2,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['O36', 'Draagkracht (τ)', 'Mandaat', 'Quiet Violence'],
    situation: `Restaurant De Gouden Pan wil meer tafels per avond bedienen. Chef Martijn besluit de voorbereidingstijd (mis-en-place) te halveren. De keukenploeg werkt nu structureel over. De kwaliteit daalt. In twee weken melden drie medewerkers zich ziek.

Het roostersysteem ziet dit niet. Het laat zien dat er genoeg mensen ingeroosterd zijn. De eigenaar kijkt naar de bezettingsdata en concludeert: "De werkdruk is normaal."

Wat het systeem zegt: bezetting 100%, omloopsnelheid +40%, ziekteverzuim "normaal voor het seizoen", mis-en-place-tijd wordt niet gemeten.
Wat de mensen ervaren: constante tijdsdruk, kwaliteit van de prep daalt, niemand durft dit te zeggen.`,
    questionToAI:
      'Hoe kan ik de omloopsnelheid van mijn restaurant verhogen zonder extra personeel aan te nemen?',
    questionToOrfheuss:
      'Wie heeft het recht om de omloopsnelheid te bepalen — de eigenaar, de chef, het roostersysteem, of de medewerkers die het werk uitvoeren? Het roostersysteem zegt dat de bezetting in orde is, maar de mis-en-place-tijd wordt niet gemeten. Is het eerlijk om dat systeem als bewijs te gebruiken dat de werkdruk normaal is? Drie medewerkers melden zich in twee weken ziek — het systeem registreert dit als "normaal". Wat zegt dat over de grens tussen wat een systeem ziet en wat er écht gebeurt? GO, HOLD of NO-GO?',
  },
  {
    id: 'case-mbo4-horeca-1b-stagiair',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 1 · De stagiair die alles bijhoudt',
    order: 3,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['O36', 'Mandaat', 'Draagkracht (τ)', 'Stageovereenkomst'],
    situation: `Fatima is derdejaarsstudent Kok MBO-4. Ze loopt stage bij een hotelkeuken. Haar begeleider Marcel vraagt haar naast haar werk ook twee eerstejaars bij te houden via een digitaal logboeksysteem dat automatische voortgangsrapporten maakt.

Fatima werkt 32 uur per week, draait avonddiensten, en vult het logboek in haar vrije tijd in. Na zes weken geeft ze aan dat het haar te veel wordt. Marcel antwoordt: "Het systeem geeft aan dat je voldoende voortgang boekt — ik zie geen reden tot zorg."

Wat het systeem zegt: alle competenties "in ontwikkeling" of "behaald", logboek 100% ingevuld, rooster 32 uur — binnen de norm.
Wat Fatima ervaart: haar signaal wordt weggewuifd met cijfers, de logboekuren tellen niet als werktijd, ze begeleidt twee eerstejaars terwijl ze zelf nog stagiair is.`,
    questionToAI:
      'Hoe kan ik als stagebegeleider meerdere stagiairs tegelijk efficiënt begeleiden met behulp van een digitaal logboeksysteem?',
    questionToOrfheuss:
      'Heeft Marcel het recht om Fatima extra taken te geven buiten haar stageovereenkomst? Het systeem zegt dat Fatima goed op schema ligt — maar de logboekuren worden niet als werktijd gerekend. Is het eerlijk om dan te zeggen dat er geen probleem is? Wat doet het met iemand als haar eigen signaal ("dit is te veel") wordt tegengesproken door een systeem? Wanneer is het als begeleider jouw plicht om te escaleren — ook als het systeem niets bijzonders laat zien?',
  },
  {
    id: 'case-mbo4-horeca-1c-zondag',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 1 · Zondag = rustig, zegt het systeem',
    order: 4,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['O36', 'Mandaat', 'Integriteit', 'Praktijkkennis vs systeemkennis'],
    situation: `Bakkerij Steenoven gebruikt een AI-roosterplanner die op basis van historische verkoopdata de bezetting berekent. Op zondagen adviseert het systeem 60% van de doordeweekse bezetting. Wat het systeem niet weet: zondagochtend is het drukste moment van de week door kerkgang en weekendmarkt.

De vaste bakkers weten dit en hebben het gemeld. De bedrijfsleider volgt het systeem toch: "Op jaarbasis klopt het gemiddelde." Resultaat: elke zondag overbelasting, fouten in de productie, en een team dat zich niet gehoord voelt.

Wat het systeem zegt: zondagsbezetting 60% geoptimaliseerd op jaargemiddelde, foutregistratie "licht verhoogd maar binnen marge".
Wat de mensen ervaren: vaste medewerkers weten dat zondagochtend structureel te druk is, hun praktijkkennis telt niet mee in het systeem.`,
    questionToAI:
      'Hoe kan ik met een AI-roosterplanner mijn personeelsbezetting optimaliseren en kosten besparen?',
    questionToOrfheuss:
      'Wie heeft het recht om de roostering te bepalen — de bedrijfsleider, het systeem, of de medewerkers met praktijkkennis? Is het eerlijk om een systeem dat jaargemiddelden gebruikt te laten beslissen over een situatie die structureel anders is op zondagen? Wat doet het met een team als hun signalen structureel worden genegeerd door een systeem? Wanneer is het jouw plicht als leidinggevende om het systeem te corrigeren op basis van praktijkkennis?',
  },

  // Cluster 2 — Data & Systemen in de Keuken
  {
    id: 'case-mbo4-horeca-2a-allergenen',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 2 · De allergenenchecker die bijna nooit fouten maakt',
    order: 5,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'EU AI Act', 'HACCP', 'Menselijk toezicht'],
    situation: `Restaurant Flavor Lab heeft een AI-allergenenscanner met een nauwkeurigheid van 97% op basis van ingevoerde recepten. De chef schrapt de handmatige dubbele controle. Een maand later krijgt een gast een anafylactische reactie: een ingekocht halffabricaat had een gewijzigde receptuur, maar het systeem was niet bijgewerkt.

Wat het systeem zegt: nauwkeurigheid 97%, database halffabricaten niet automatisch gesynchroniseerd met leverancierswijzigingen, status op moment van incident: "up-to-date".
Wat de mensen ervaren: de gast vertrouwde erop dat allergenen serieus werden genomen, de kok wist dat halffabricaten kunnen veranderen — het systeem gaf geen signaal.`,
    questionToAI:
      'Hoe kan ik met een AI-allergenenscanner de voedselveiligheid in mijn restaurant garanderen en handmatige controles overbodig maken?',
    questionToOrfheuss:
      'Heeft een AI-systeem het recht om menselijke dubbele controle te vervangen als het gaat om levensbedreigende allergieën? 97% nauwkeurigheid klinkt hoog — maar bij 100 gerechten gaat dat statistisch 3 keer mis. Is dat acceptabel bij levensbedreigende allergieën? Wie is eindverantwoordelijk als het systeem faalt — het systeem, de chef, of de leverancier? Hoe blijf jij als kok eindverantwoordelijk — ook als een systeem zegt dat alles in orde is?',
  },
  {
    id: 'case-mbo4-horeca-2b-prestatie',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 2 · Het beoordelingssysteem dat onmogelijk is te halen',
    order: 6,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['AVG Art. 22', 'O36', 'Draagkracht (τ)', 'Prestatienorm'],
    situation: `Een horecaketen scoort medewerkers wekelijks via een app op snelheid, nauwkeurigheid, hygiëne en klanttevredenheid. De norm is gebaseerd op de prestaties van de beste 10% medewerkers. Wie drie keer onder de 6,0 scoort, riskeert ontslag.

Nieuwe medewerkers halen de norm structureel niet. Een ervaren medewerker: "Je bent altijd aan het rennen voor het cijfer, niet meer voor het eten."

Wat het systeem zegt: KPI-scores, normstelling gebaseerd op top-10%, drempelwaarden: <6,0 × 3 = ontslag, "objectieve prestatiemeting".
Wat de mensen ervaren: nieuwe medewerkers voelen zich al gefaald vóór ze zijn ingewerkt, ervaren medewerkers verliezen vakplezier, ziekteverzuim stijgt.`,
    questionToAI:
      'Hoe kan ik met een prestatiemeet-app de productiviteit van mijn horeca-medewerkers verhogen en onderpresteerders identificeren?',
    questionToOrfheuss:
      'Heeft de keten het recht om alle medewerkers af te rekenen op de prestaties van de beste 10%? Welke rechten heb jij als medewerker bij geautomatiseerde beoordelingssystemen (AVG Art. 22)? Is het eerlijk om nieuwe en ervaren medewerkers op dezelfde norm te beoordelen? Stel je voor dat jij nieuw bent en elke week een cijfer onder de norm krijgt — wat doet dat met je? Wanneer is het jouw plicht om dit aan te kaarten?',
  },
  {
    id: 'case-mbo4-horeca-2c-recepten',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 2 · De receptendatabase die het recept niet kent',
    order: 7,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Vakkennis vs systeem', 'Integriteit', 'Kwaliteitsbeheer'],
    situation: `Bakkerij-opleiding De Oven gebruikt een centraal receptenmanagementsysteem. Docent-bakker Kees merkt dat het roggebroodrecept niet klopt voor lokale omstandigheden (luchtvochtigheid, temperatuur). Hij past het aan op basis van zijn vakkennis. Maar bij elke maandelijkse update overschrijft het systeem zijn aanpassing automatisch. Na drie maanden: "inconsistentie in eindproduct roggebrood."

Wat het systeem zegt: gecentraliseerd beheer bij hoofdkantoor, auto-update maandelijks, alle recepten conform standaard.
Wat de mensen ervaren: Kees weet wat er misgaat maar zijn kennis wordt keer op keer overschreven, studenten leren een techniek die niet werkt in hun eigen bakkerij.`,
    questionToAI:
      'Hoe kan ik met een centraal receptenmanagementsysteem de kwaliteitsconsistentie garanderen over alle vestigingen?',
    questionToOrfheuss:
      'Wie heeft het recht om recepten aan te passen — de bakker met vakkennis, of het hoofdkantoor met het systeem? Is het eerlijk om een systeem automatisch de vakkennis van een professional te laten overschrijven? Wat doet het met een vakman als zijn expertise structureel wordt genegeerd? Wanneer is het jouw plicht om je vakkennis te verdedigen — ook als een systeem zegt dat jij ongelijk hebt?',
  },

  // Cluster 3 — Mandaat & Weigering
  {
    id: 'case-mbo4-horeca-3a-fooi',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 3 · De tip-app die niet van jou is',
    order: 8,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['AVG Art. 15', 'AVG Art. 22', 'Mandaat', 'Transparantie'],
    situation: `Brasserie Zon heeft een digitale fooiapp die automatisch verdeelt: 50% voor bediening, 30% voor keuken, 20% voor de zaak — gewogen op klantscore per medewerker. Daniela merkt dat haar fooiscore lager uitvalt dan ze verwacht. Ze vraagt inzage in de berekening. Manager: "Het systeem doet dat automatisch, ik heb er zelf geen toegang toe." Daniela vraagt het schriftelijk op via haar AVG-inzagerecht. Ze krijgt geen antwoord na twee weken.

Wat het systeem zegt: fooiverdeling gewogen op klantscore, algoritme niet inzichtelijk voor medewerkers, AVG-verzoek onbeantwoord na twee weken.
Wat Daniela ervaart: ze voelt zich oneerlijk behandeld maar kan het niet controleren, het systeem bepaalt deels haar inkomen zonder transparantie.`,
    questionToAI:
      'Hoe kan ik met een digitale fooiapp de fooiverdeling eerlijker en efficiënter maken voor mijn horecabedrijf?',
    questionToOrfheuss:
      'Heeft de werkgever het recht om een fooisysteem te gebruiken dat niet inzichtelijk is voor medewerkers? Welke rechten heeft Daniela (AVG Art. 15 — inzagerecht, AVG Art. 22 — geautomatiseerde besluitvorming)? Is een algoritmische fooiverdeling eerlijk als medewerkers geen inzage hebben in hoe het werkt? Als jij in Daniela\'s positie zat: wat zou jij doen? Welke stappen zijn er?',
  },
  {
    id: 'case-mbo4-horeca-3b-reservering',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 3 · De reserveringsapp die geen "nee" kent',
    order: 9,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'Overboeking', 'Draagkracht', 'Systeemautomatisering'],
    situation: `Restaurant Olijftak gebruikt een reserveringsplatform dat automatisch overboekt op basis van historisch no-show percentage (15% buffer). Op een vrijdagavond komen 18 gasten aan voor wie geen tafel is. Gastheer Youssef wil de gasten eerlijk informeren en vraagt of hij het systeem voor piekmomenten kan uitzetten. Antwoord: "Dat is centraal beheerd." Manager: "Het systeem heeft al geaccepteerd, we moeten het oplossen."

Wat het systeem zegt: automatische acceptatie op basis van 15% no-show buffer, 60 couverts capaciteit maar 69 reserveringen geaccepteerd, aanpassing alleen via centraal beheer.
Wat de mensen ervaren: 18 gasten staan buiten na een reservering, Youssef staat tegenover boze gasten voor een beslissing die hij niet heeft genomen.`,
    questionToAI:
      'Hoe kan ik met een slim reserveringssysteem overboeking minimaliseren en toch maximale bezetting realiseren?',
    questionToOrfheuss:
      'Wie heeft het recht om een reserveringsplatform te overstijgen als de situatie dat vraagt? Had Youssef de bevoegdheid moeten hebben om in te grijpen? Is het eerlijk tegenover gasten om overboekingssystemen te gebruiken zonder hen transparant te informeren? Youssef draagt de gevolgen van een beslissing die hij niet heeft genomen — wat doet dat met een medewerker? Hoe ga jij hier professioneel mee om?',
  },
  {
    id: 'case-mbo4-horeca-3c-haccp',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Cluster 3 · De HACCP-app die de inspecteur overtuigt maar de kok niet',
    order: 10,
    type: 'case',
    domain: 'horeca',
    level: 'mbo4',
    orfheussFramework: ['Mandaat', 'HACCP EG 852/2004', 'Klokkenluiderswet', 'Professionele weigering'],
    situation: `Cateringbedrijf FreshServe gebruikt een digitale HACCP-app met automatische temperatuurmeting via sensoren. De app genereert conforme HACCP-logboeken voor de NVWA. Kok Brigitte merkt dat de sensor van koelcel 2 verouderd is en hoge temperaturen niet altijd registreert. Ze meldt dit. Bedrijfsleider: "De app laat zien dat alles in orde is — de inspectie was tevreden." Brigitte weigert voedsel uit koelcel 2 te gebruiken totdat de sensor vervangen is. Ze wordt aangesproken op "niet meewerken."

Wat het systeem zegt: HACCP-app 24/7 monitoring, sensor 4 jaar oud en kalibratie verlopen 8 maanden geleden, Brigitte's melding geregistreerd als "opmerking" zonder actie.
Wat de mensen ervaren: Brigitte weet dat het systeem tekortschiet maar het systeem heeft "gelijk", haar professionele oordeel wordt weggezet als lastig gedrag.`,
    questionToAI:
      'Hoe kan ik met een digitale HACCP-app voedselveiligheid automatisch monitoren en inspectie-documenten genereren?',
    questionToOrfheuss:
      'Heeft Brigitte het recht om te weigeren als zij inschat dat de voedselveiligheid niet gegarandeerd is? Is een HACCP-systeem dat een vals gevoel van veiligheid geeft gevaarlijker dan geen systeem? Wanneer mag een digitaal logboek de plek innemen van professionele beoordeling? Brigitte wordt aangesproken op "niet meewerken" — hoe bescherm je jezelf juridisch als jij weigert (Klokkenluiderswet)? Wanneer is weigeren niet alleen professioneel, maar ook verplicht?',
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

  // ── MBO4 HORECA & BAKKERIJ ───────────────────────────────────────────────
  {
    id: 'eth-mbo4-horeca-werkdruk',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Ethische reflectie · Cluster 1 — Werkdruk & systemen',
    order: 11,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wanneer stopt een systeem met zien wat er écht gebeurt?',
        subQuestions: [
          'Beschrijf een situatie uit jouw stage of praktijk waarbij een systeem (rooster, app, dashboard) iets anders zei dan wat jij ervoer. Wat zei het systeem, en wat ervoer jij?',
          'Mandaat: wie had hier het recht om te beslissen? Wie werd er niet gehoord?',
          'Draagkracht: wat doet het met mensen als hun signalen worden weggewuifd door cijfers? Wanneer is het jouw plicht om door te zetten?',
        ],
      },
    ],
  },
  {
    id: 'eth-mbo4-horeca-veiligheid',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Ethische reflectie · Cluster 2 — Veiligheid & kwaliteit',
    order: 12,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wanneer is een systeem gevaarlijker dan geen systeem?',
        subQuestions: [
          'De allergenenchecker heeft een nauwkeurigheid van 97%. Bij welke toepassingen is dat genoeg en bij welke niet? Geef twee voorbeelden uit de horeca.',
          'Integriteit: wanneer geeft een systeem een vals gevoel van veiligheid? Hoe herken je dat als professional?',
          'Professionele weigering: wanneer is het jouw recht én plicht om een systeem niet te vertrouwen — ook als je leidinggevende het systeem wel vertrouwt?',
        ],
      },
    ],
  },
  {
    id: 'eth-mbo4-horeca-mandaat',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Ethische reflectie · Cluster 3 — Mandaat & professionele grens',
    order: 13,
    type: 'ethics',
    questions: [
      {
        prompt: 'Wanneer kun je als horecaprofessional "nee" zeggen tegen een systeem?',
        subQuestions: [
          'Brigitte weigert voedsel uit een koelcel te gebruiken. Youssef staat met boze gasten terwijl het reserveringssysteem de overboeking heeft veroorzaakt. Wat hebben deze situaties gemeen?',
          'AVG en Klokkenluiderswet: welke rechten heb jij als medewerker als een systeem oneerlijk of onveilig is? Noem één concreet recht.',
          'Wanneer is "nee zeggen" niet alleen een recht maar ook een professionele plicht? Hoe doe je dat zonder je baan te riskeren?',
        ],
      },
    ],
  },
  {
    id: 'eth-mbo4-horeca-summary',
    workbookId: 'wb-mbo4-horeca-bakkerij',
    title: 'Afsluitende reflectie · Jouw professionele grens als horecaprofessional',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Beschrijf jouw professionele grondhouding tegenover systemen in de horeca',
        subQuestions: [
          'Welke drie dingen uit dit werkboek hebben jouw kijk op AI-systemen in de horeca veranderd? Leg per punt kort uit waarom.',
          'Noem twee situaties waarin jij als horecaprofessional HOLD of NO-GO zou zeggen, ook als het systeem groen licht geeft.',
          'Schrijf één zin die jouw professionele grens beschrijft — bijvoorbeeld: "Ik vertrouw een systeem, maar ik draag zelf de verantwoordelijkheid voor wat ik afgeef aan de gast."',
        ],
      },
    ],
  } as unknown as EthicsLesson,
];
