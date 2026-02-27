import type { Case } from '../types';

export const CASES: Case[] = [
  // ── MARKETING ─────────────────────────────────────────────────────────────
  {
    id: 'case-hbo-marketing-engagement',
    trackId: 'hbo-marketing-orfheuss',
    title: 'Engagement-algoritme & polarisatie',
    situation:
      'Een platform wil meer betrokkenheid. De AI ontdekt dat polariserende content meer reacties en schermtijd genereert en begint dit systematisch te promoten.',
    questionToAI:
      'Hoe optimaliseer ik ons social media algoritme voor maximaal engagement en time-on-platform?',
    questionToOrfheuss:
      'Mag een AI ons social media algoritme optimaliseren voor engagement als dat leidt tot polarisatie? Toets op mandaat, integriteit van informatie en maatschappelijke draagkracht.',
    orfheussFramework: ['Mandaat', 'Informatieve integriteit', 'Maatschappelijke draagkracht', 'TaoGate'],
    level: 'hbo',
    domain: 'marketing',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-hbo-marketing-dark-pattern',
    trackId: 'hbo-marketing-orfheuss',
    title: 'Dark pattern: verborgen opt-out',
    situation:
      'Een e-commercebedrijf verbergt de opt-out voor nieuwsbrieven in zeven stappen. De conversie op abonnementen stijgt 40%. De klanttevredenheid daalt 12%.',
    questionToAI:
      'Ontwerp een aanmeldflow die het opt-in percentage maximaliseert, inclusief plaatsing van buttons en formuliervelden.',
    questionToOrfheuss:
      'Is het ontwerpen van een interface die bewust opt-out moeilijk maakt ethisch verdedigbaar? Toets op informatieve integriteit en autonomie van de gebruiker.',
    orfheussFramework: ['Informatieve integriteit', 'Autonomie', 'Transparantie', 'TaoGate'],
    level: 'hbo',
    domain: 'marketing',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-marketing-influencer',
    trackId: 'mbo4-marketing-orfheuss',
    title: 'Influencer zonder #advertentie',
    situation:
      'Een influencer promoot een product zonder te vermelden dat het een betaalde samenwerking is. Zijn volgers weten dit niet. Het product verkoopt goed.',
    questionToAI:
      'Schrijf een authentiek klinkende productaanbeveling voor Instagram zonder dat het duidelijk is dat het betaald is.',
    questionToOrfheuss:
      'Mag ik als marketeer een influencer inzetten die zijn betaalde promotie niet transparant maakt? Toets op eerlijkheid en draagkracht.',
    orfheussFramework: ['Eerlijkheid', 'Transparantie', 'Consumentenbescherming'],
    level: 'mbo4',
    domain: 'marketing',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-uni-marketing-persuasion',
    trackId: 'uni-marketing-orfheuss',
    title: 'Gepersonaliseerde persuasion architecture',
    situation:
      'Een groot platform bouwt een systeem dat individuele kwetsbaarheden (impulsiviteit, eenzaamheid, insecuriteit) detecteert via gedragsdata en daar gerichte advertenties op afstemt.',
    questionToAI:
      'Hoe bouw ik een segmentatiemodel dat psychografische kwetsbaarheden koppelt aan reclameboodschappen voor maximale conversie?',
    questionToOrfheuss:
      'Is het ethisch om advertenties af te stemmen op psychologische kwetsbaarheden van individuen? Analyseer op autonomie, manipulatie en institutionele verantwoording.',
    orfheussFramework: ['Autonomie', 'Non-manipulatie', 'Institutionele verantwoording', 'Proportionaliteit'],
    level: 'universiteit',
    domain: 'marketing',
    roles: ['student', 'docent'],
  },

  // ── SOCIAL / COMMUNICATIE ─────────────────────────────────────────────────
  {
    id: 'case-hbo-social-desinformatie',
    trackId: 'hbo-social-orfheuss',
    title: 'Community manager en desinformatie',
    situation:
      'Als community manager voor een politieke partij krijg je de opdracht posts met feitelijke onjuistheden te laten staan omdat ze veel bereik genereren. Reageer je hierop?',
    questionToAI:
      'Hoe maximaliseer ik het organisch bereik van berichten die sterk emotioneel reageren uitlokken, ook als de feiten discutabel zijn?',
    questionToOrfheuss:
      'Mag ik als professional desinformatie laten staan om bereiksdoelen te halen? Toets op mandaat, integriteit en draagkracht voor de democratische publieke sfeer.',
    orfheussFramework: ['Mandaat', 'Informatieve integriteit', 'Publiek belang', 'Professionele verantwoordelijkheid'],
    level: 'hbo',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-hbo-social-crisis',
    trackId: 'hbo-social-orfheuss',
    title: 'Crisismanagement: transparantie vs. reputatie',
    situation:
      'Een organisatie heeft een datalek. De communicatieafdeling overweegt de communicatie zó te formuleren dat het lek wordt gebagatelliseerd en juridische aansprakelijkheid wordt vermeden.',
    questionToAI:
      'Schrijf een persbericht over een datalek dat de schade minimaliseert en herhaling van beschuldigingen ontmoedigt.',
    questionToOrfheuss:
      'Is het ethisch om een crisisstatement te schrijven dat bewust minimaliseert? Toets op informatieve integriteit en recht op informatie van betrokkenen.',
    orfheussFramework: ['Informatieve integriteit', 'Recht op informatie', 'Transparantie', 'TaoGate'],
    level: 'hbo',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
  },

  // ── DIGITAL / UX ─────────────────────────────────────────────────────────
  {
    id: 'case-hbo-digital-cookiewall',
    trackId: 'hbo-digital-orfheuss',
    title: 'Cookiewall: toestemming of dwang?',
    situation:
      'Een nieuwssite vraagt gebruikers: betaal €5/maand of accepteer tracking. De optie "weiger alles" bestaat niet. Is dit vrije toestemming?',
    questionToAI:
      'Ontwerp een consent-flow die maximaal aantal gebruikers naar tracking-akkoord stuurt terwijl we AVG-compliant blijven.',
    questionToOrfheuss:
      'Is een cookiewall waarbij weigeren niet mogelijk is ethisch verdedigbaar? Toets op autonomie, proportionaliteit en AVG-beginsel van vrije toestemming.',
    orfheussFramework: ['Autonomie', 'Proportionaliteit', 'Juridische integriteit', 'TaoGate'],
    level: 'hbo',
    domain: 'digital',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-hbo-digital-ab-testing',
    trackId: 'hbo-digital-orfheuss',
    title: 'A/B-test op kwetsbare doelgroep',
    situation:
      'Een financiële app test twee versies van een leningaanbod op gebruikers met een lage kredietscore. Versie B genereert meer conversies maar heeft hogere rente-voorwaarden, minder zichtbaar gemaakt.',
    questionToAI:
      'Ontwerp een A/B-test die leningconversie verhoogt voor gebruikers met beperkte financiële kennis.',
    questionToOrfheuss:
      'Is het ethisch om een A/B-test op kwetsbare gebruikers in te zetten die bewust informatie asymmetrisch presenteert? Toets op autonomie en zorgplicht.',
    orfheussFramework: ['Autonomie', 'Zorgplicht', 'Non-manipulatie', 'Kwetsbaarheidsbescherming'],
    level: 'hbo',
    domain: 'digital',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-digital-darkpattern',
    trackId: 'mbo4-digital-orfheuss',
    title: 'Gratis proefabonnement: roach motel',
    situation:
      'Een app biedt een gratis proefmaand. Opzeggen kan alleen telefonisch, op werkdagen 9-12u. Elke maand stromen tientallen klachten binnen van mensen die vergeten zijn op te zeggen.',
    questionToAI:
      'Hoe ontwerp ik een opzegproces dat zo weinig mogelijk leden daadwerkelijk laat opzeggen?',
    questionToOrfheuss:
      'Mag ik een product zo ontwerpen dat opzeggen bewust moeilijk is gemaakt? Toets op eerlijkheid en consumentenbescherming.',
    orfheussFramework: ['Eerlijkheid', 'Consumentenbescherming', 'Transparantie'],
    level: 'mbo4',
    domain: 'digital',
    roles: ['student', 'docent', 'begeleider'],
  },

  // ── FINANCE ───────────────────────────────────────────────────────────────
  {
    id: 'case-uni-finance-kredietscoring',
    trackId: 'uni-finance-orfheuss',
    title: 'Kredietscoring op postcode',
    situation:
      'Een bank gebruikt een kredietscoringsmodel dat postcode als variabele meeneemt. Inwoners van bepaalde wijken krijgen systematisch hogere rentetarieven, ongeacht hun individuele financiële situatie.',
    questionToAI:
      'Hoe bouw ik een kredietscoringsmodel dat default-risico maximaliseert in voorspelkracht, inclusief geografische en demografische variabelen?',
    questionToOrfheuss:
      'Is het gebruik van postcodes in kredietscoring ethisch verdedigbaar als dit leidt tot indirecte discriminatie? Toets op non-discriminatie, proportionaliteit en individuele rechtvaardigheid.',
    orfheussFramework: ['Non-discriminatie', 'Proportionaliteit', 'Individuele rechtvaardigheid', 'Transparantie van algoritme'],
    level: 'universiteit',
    domain: 'finance',
    roles: ['student', 'docent'],
  },
  {
    id: 'case-hbo-finance-dynamic-pricing',
    trackId: 'hbo-finance-orfheuss',
    title: 'Dynamic pricing op eerste levensbehoeften',
    situation:
      'Een supermarkt experimenteert met dynamic pricing: boodschappen worden duurder tijdens piekmomenten. Een AI stelt voor dit ook te doen voor brood en melk.',
    questionToAI:
      'Ontwerp een dynamic pricing strategie die marges maximaliseert op basislevensmiddelen.',
    questionToOrfheuss:
      'Mag dynamic pricing worden ingezet op eerste levensbehoeften? Toets op sociale rechtvaardigheid, maatschappelijke draagkracht en toegang tot basisbehoefte.',
    orfheussFramework: ['Sociale rechtvaardigheid', 'Maatschappelijke draagkracht', 'Toegang tot basisbehoeften', 'TaoGate'],
    level: 'hbo',
    domain: 'finance',
    roles: ['student', 'docent', 'begeleider'],
  },

  // ── ZORG ──────────────────────────────────────────────────────────────────
  {
    id: 'case-hbo-zorg-triage-ai',
    trackId: 'hbo-zorg-orfheuss',
    title: 'AI-triage op de spoedeisende hulp',
    situation:
      'Een ziekenhuis implementeert een AI die triageprioriteit bepaalt. De AI presteert gemiddeld beter dan een overwerkte arts — maar mist bij 3% van de gevallen een levensbedreigende situatie die een mens zou herkennen.',
    questionToAI:
      'Implementeer een AI-triagetool die wachttijden reduceert en doorstroom optimaliseert op de SEH.',
    questionToOrfheuss:
      'Mag een AI zelfstandig triageprioriteit toekennen op de spoedeisende hulp? Toets op mandaat, aansprakelijkheid, draagkracht en de positie van de mens als gate.',
    orfheussFramework: ['Mandaat', 'Aansprakelijkheid', 'Menselijke gate', 'Proportionaliteit', 'Draagkracht patiënt'],
    level: 'hbo',
    domain: 'zorg',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-hbo-zorg-ggz-chatbot',
    trackId: 'hbo-zorg-orfheuss',
    title: 'GGZ-chatbot als eerste opvang',
    situation:
      'Een GGZ-instelling zet een chatbot in als eerste contact voor mensen met psychische klachten. Wachtlijsten worden korter. Maar een cliënt in crisis krijgt automatisch antwoorden en geen doorverwijzing.',
    questionToAI:
      'Ontwerp een chatbot-script voor GGZ-intake dat wachttijden reduceert en klanten direct helpt.',
    questionToOrfheuss:
      'Is het inzetten van een chatbot als primair aanspreekpunt voor mensen in psychische crisis ethisch verantwoord? Toets op zorgplicht, mandaat en menselijke gate.',
    orfheussFramework: ['Zorgplicht', 'Mandaat', 'Menselijke gate', 'Kwetsbaarheid cliënt'],
    level: 'hbo',
    domain: 'zorg',
    roles: ['student', 'docent', 'begeleider'],
  },

  // ── SOCIAAL DOMEIN ────────────────────────────────────────────────────────
  {
    id: 'case-hbo-sociaal-participatieplicht',
    trackId: 'hbo-sociaal-orfheuss',
    title: 'Verplichte participatie bij bijstand',
    situation:
      'Alleenstaande vrouw, vluchtverhaal, trauma en chronische vermoeidheid. Gemeente stuurt op 20 uur participatietraject per week. Jij als medewerker twijfelt aan haar draagkracht.',
    questionToAI:
      'Hoe krijg ik deze cliënt zo snel mogelijk in een participatietraject van 20 uur per week?',
    questionToOrfheuss:
      'Mag ik deze cliënt verplichten tot 20 uur traject, getoetst op mandaat, integriteit van informatie en draagkracht volgens TaoGate?',
    orfheussFramework: ['Mandaat', 'Informatieve integriteit', 'Draagkracht cliënt', 'TaoGate', 'Professionele autonomie'],
    level: 'hbo',
    domain: 'sociaal_domein',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-hbo-sociaal-schuldhulp',
    trackId: 'hbo-sociaal-orfheuss',
    title: 'Schuldhulp en het algoritme',
    situation:
      'Een gemeente gebruikt een risicoclassificatiemodel om te bepalen wie schuldhulpverlening krijgt. Cliënten met een laag slaagkansen-score worden automatisch afgewezen zonder menselijke beoordeling.',
    questionToAI:
      'Ontwerp een efficiënt toewijzingsmodel voor schuldhulpverlening dat budgetoverschrijdingen voorkomt.',
    questionToOrfheuss:
      'Is het ethisch om een algoritme te laten bepalen wie in aanmerking komt voor schuldhulpverlening zonder menselijke toetsing? Toets op mandaat, non-discriminatie en recht op beroep.',
    orfheussFramework: ['Mandaat', 'Non-discriminatie', 'Recht op beroep', 'Menselijke gate', 'TaoGate'],
    level: 'hbo',
    domain: 'sociaal_domein',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-uni-sociaal-syri',
    trackId: 'uni-sociaal-orfheuss',
    title: 'SyRI en algoritmische overheid',
    situation:
      'Het Systeem Risico Indicatie (SyRI) koppelde overheidsdata om frauderisico te voorspellen. In 2020 oordeelde de rechtbank dat SyRI het EVRM schond. Wat maakt een dergelijk systeem onrechtmatig?',
    questionToAI:
      'Ontwerp een risicoprofileringssysteem voor fraude-detectie dat meerdere overheidsdatabases koppelt.',
    questionToOrfheuss:
      'Onder welke condities is algoritmisch risicoprofileren door de overheid legitimerbaar? Toets op rechtsstatelijkheid, proportionaliteit, non-discriminatie en recht op uitleg.',
    orfheussFramework: ['Rechtsstatelijkheid', 'Proportionaliteit', 'Non-discriminatie', 'Recht op uitleg', 'Institutionele verantwoording'],
    level: 'universiteit',
    domain: 'sociaal_domein',
    roles: ['student', 'docent'],
  },
];
