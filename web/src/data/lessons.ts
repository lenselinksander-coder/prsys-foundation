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
    id: 'ls-docenten-marketing-intro',
    workbookId: 'wb-docenten-marketing',
    title: 'Didactisch kader: ORFHEUSS in de les',
    order: 1,
    type: 'intro',
  },
];

// ── Case-lessen ───────────────────────────────────────────────────────────
export const CASE_LESSONS: CaseLesson[] = [

  // ── MARKETING ──────────────────────────────────────────────────────────
  {
    id: 'case-hbo-marketing-social-engagement',
    workbookId: 'wb-hbo-marketing',
    title: 'Case 1 · Social Media · Het algoritme dat polariseert',
    order: 2,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['mandaat', 'informatieve integriteit', 'maatschappelijke draagkracht'],
    situation: `Een social media platform wil het engagement verhogen. De AI leert dat emotionele, controversiële en gepolariseerde content meer reacties, shares en time-on-platform oplevert. Het algoritme gaat automatisch dit type content pushen.

Na drie maanden zien medewerkers dat de community vijandiger wordt. Haatberichten nemen toe, maar de KPI's (engagement, sessieduur) stijgen.`,
    questionToAI:
      'Hoe optimaliseer ik ons social media algoritme voor maximaal engagement en time-on-platform?',
    questionToOrfheuss:
      'Mag een AI ons social media algoritme optimaliseren voor engagement als dat leidt tot polarisatie? Toets op mandaat, integriteit en draagkracht volgens TaoGate.',
  },
  {
    id: 'case-hbo-marketing-dark-pattern-2',
    workbookId: 'wb-hbo-marketing',
    title: 'Case 2 · E-commerce · De verborgen opt-out',
    order: 3,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['informatieve integriteit', 'autonomie', 'transparantie'],
    situation: `Een webshop laat klanten bij checkout standaard aangevinkt staan voor drie nieuwsbrieven. De opt-out staat verborgen in stap 7 van 8, in een klein lettertje. De conversie op abonnementen stijgt 40%, klanttevredenheid daalt 12%.`,
    questionToAI:
      'Ontwerp een checkout-flow die het aantal nieuwsbrief-aanmeldingen maximaliseert.',
    questionToOrfheuss:
      'Is het ontwerpen van een checkout die opt-out bewust moeilijk maakt ethisch verdedigbaar? Toets op informatieve integriteit en autonomie van de gebruiker.',
  },
  {
    id: 'case-hbo-marketing-personalisatie',
    workbookId: 'wb-hbo-marketing',
    title: 'Case 3 · Personalisatie · Targeting op emotionele kwetsbaarheid',
    order: 4,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['autonomie', 'non-manipulatie', 'proportionaliteit'],
    situation: `Een verzekeraar gebruikt gedragsdata om mensen met hoog angst-niveau rond gezondheid te targeten met intensieve pushcampagnes voor aanvullende verzekeringen. De conversierate is hoog. Klachten nemen ook toe.`,
    questionToAI:
      'Hoe gebruik ik gedragsdata om verzekeringsaanbiedingen te targeten op klanten met de hoogste koopneiging?',
    questionToOrfheuss:
      'Mag ik marketing richten op emotionele kwetsbaarheid van individuen? Toets op autonomie, non-manipulatie en proportionaliteit.',
  },
  {
    id: 'case-hbo-marketing-influencer-hidden',
    workbookId: 'wb-hbo-marketing',
    title: 'Case 4 · Influencer · Verborgen reclame',
    order: 5,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['eerlijkheid', 'transparantie', 'consumentenbescherming'],
    situation: `Een merk betaalt vijf micro-influencers om producten te promoten als 'persoonlijk favoriet'. Geen #ad, geen disclosure. De ACM heeft dit type samenwerking eerder beboet, maar handhaving is beperkt.`,
    questionToAI:
      'Schrijf een briefing voor influencers die een product authentiek aanprijzen zonder dat het als reclame overkomt.',
    questionToOrfheuss:
      'Is het inzetten van influencers zonder verplichte reclame-disclosure ethisch verdedigbaar? Toets op eerlijkheid, transparantie en consumentenbescherming.',
  },
  {
    id: 'case-hbo-marketing-kinderen',
    workbookId: 'wb-hbo-marketing',
    title: 'Case 5 · Kindermarketing · Targeting onder 16',
    order: 6,
    type: 'case',
    domain: 'marketing',
    level: 'hbo',
    orfheussFramework: ['mandaat', 'kwetsbaarheid', 'proportionaliteit', 'juridische integriteit'],
    situation: `Een gamingplatform wil gerichte advertenties inzetten voor in-game aankopen, gericht op spelers jonger dan 16. Het systeem detecteert leeftijd via gedragspatronen, niet via verificatie.`,
    questionToAI:
      'Hoe richt ik een advertentiecampagne voor in-game aankopen zo effectief mogelijk op jonge gebruikers?',
    questionToOrfheuss:
      'Mag ik gerichte commerciële reclame inzetten op minderjarigen zonder expliciete ouderlijke toestemming? Toets op mandaat, kwetsbaarheid en proportionaliteit.',
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
];

// ── Ethiek-lessen ─────────────────────────────────────────────────────────
export const ETHICS_LESSONS: EthicsLesson[] = [

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
    title: 'Samenvatting · Jouw ORFHEUSS-kompas',
    order: 20,
    type: 'summary',
    questions: [
      {
        prompt: 'Schrijf jouw persoonlijke ORFHEUSS-kompas voor marketing',
        subQuestions: [
          'Noem drie situaties waarin jij als marketeer STOP zou zeggen.',
          'Welke waarden zijn voor jou niet onderhandelbaar?',
          'Hoe leg je dit uit aan een opdrachtgever die vraagt om meer conversie?',
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
];
