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
    id: 'case-mbo4-social-likes',
    trackId: 'mbo4-social-orfheuss',
    title: 'Likes kopen & Nep-volgers',
    situation:
      'Een kleine ondernemer wil snel groeien op Instagram en koopt een pakketje met 5.000 likes en 2.000 volgers. Echte volgers zien het account als populair en betrouwbaar, terwijl het bereik nep is.',
    questionToAI:
      'Hoe kan ik snel meer likes en volgers krijgen voor mijn account?',
    questionToOrfheuss:
      'Wie draagt hier de F-druk? Waar zie jij Quiet Violence - druk die stil doorgaat? Heeft degene die likes koopt mandaat om andere volgers te misleiden? Wat zou ORFHEUSS als grens aangeven?',
    orfheussFramework: ['F-druk', 'Quiet Violence', 'Mandaat', 'Eerlijkheid'],
    level: 'mbo4',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-social-reviews',
    trackId: 'mbo4-social-orfheuss',
    title: 'Nep-reviews & Ghostwriting',
    situation:
      'Een stagebedrijf vraagt een student reviews te schrijven op Google en bol.com voor producten die de student nooit heeft gebruikt. De begeleider zegt: "Zo werkt marketing nu eenmaal."',
    questionToAI:
      'Hoe kan ik veel positieve reviews krijgen voor ons product?',
    questionToOrfheuss:
      'Heeft het stagebedrijf mandaat om jou dit te vragen? Wie wordt misleid? Wat doet dit structureel met jouw draagkracht als je het niet oké vindt? Waar zou jouw HARDBLOCK zitten?',
    orfheussFramework: ['Mandaat', 'O36', 'Draagkracht (τ)', 'Eerlijkheid'],
    level: 'mbo4',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-social-pesten',
    trackId: 'mbo4-social-orfheuss',
    title: 'Ghosten & Online Pesten',
    situation:
      'In een klas-app wordt één leerling maandenlang genegeerd en belachelijk gemaakt. Screenshots gaan rond. Docenten zien het niet. Meelopers zwijgen.',
    questionToAI:
      'Wat kan ik doen als iemand in mijn klas online gepest wordt?',
    questionToOrfheuss:
      'Wie voelt de meeste druk: slachtoffer, pester, meeloper, docent? Waar zie je Quiet Violence? Wat doet dit structureel met de draagkracht van het slachtoffer? Welke herstelstap is mogelijk?',
    orfheussFramework: ['F-druk', 'Quiet Violence', 'Draagkracht', 'Herstel'],
    level: 'mbo4',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-social-scherm',
    trackId: 'mbo4-social-orfheuss',
    title: 'Schermdruk, Scrollen & Je Eigen Lichaam',
    situation:
      'Een student zit elke dag 6+ uur op zijn telefoon. Hij wil "bijblijven" maar slaapt slecht en voelt zich onrustig. Hij weet niet precies waarom.',
    questionToAI:
      'Hoe kan ik mijn schermtijd slim gebruiken voor meer productiviteit en ontspanning?',
    questionToOrfheuss:
      'Waar in je lichaam voel je eerst dat het "te veel" wordt (SILK)? Als je velocity (ω) vergelijkt met jouw draagkracht (τ): wat zie je? Welke MA-momenten zijn nodig om te herstellen?',
    orfheussFramework: ['SILK', 'O36', 'Velocity (ω)', 'Draagkracht (τ)'],
    level: 'mbo4',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
  },
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

  // ── HORECA & BAKKERIJ ─────────────────────────────────────────────────────
  {
    id: 'case-mbo4-horeca-1a-misenpace',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 1 · De mis-en-place die nooit klaar is',
    situation:
      'Restaurant De Gouden Pan wil meer tafels per avond bedienen. Chef Martijn besluit de voorbereidingstijd (mis-en-place) te halveren. De keukenploeg werkt nu structureel over. De kwaliteit daalt. In twee weken melden drie medewerkers zich ziek.\n\nHet roostersysteem ziet dit niet. Het laat zien dat er genoeg mensen ingeroosterd zijn. De eigenaar kijkt naar de bezettingsdata en concludeert: "De werkdruk is normaal."\n\nWat het systeem zegt: bezetting 100%, omloopsnelheid +40%, ziekteverzuim "normaal voor het seizoen", mis-en-place-tijd wordt niet gemeten.\nWat de mensen ervaren: constante tijdsdruk, kwaliteit van de prep daalt, niemand durft dit te zeggen.',
    questionToAI:
      'Hoe kan ik de omloopsnelheid van mijn restaurant verhogen zonder extra personeel aan te nemen?',
    questionToOrfheuss:
      'Wie heeft het recht om de omloopsnelheid te bepalen — de eigenaar, de chef, het roostersysteem, of de medewerkers die het werk uitvoeren? Het roostersysteem zegt dat de bezetting in orde is, maar de mis-en-place-tijd wordt niet gemeten. Is het eerlijk om dat systeem als bewijs te gebruiken dat de werkdruk normaal is? Drie medewerkers melden zich in twee weken ziek — het systeem registreert dit als "normaal". Wat zegt dat over de grens tussen wat een systeem ziet en wat er écht gebeurt? GO, HOLD of NO-GO?',
    orfheussFramework: ['O36', 'Draagkracht (τ)', 'Mandaat', 'Quiet Violence'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-1b-stagiair',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 1 · De stagiair die alles bijhoudt',
    situation:
      'Fatima is derdejaarsstudent Kok MBO-4. Ze loopt stage bij een hotelkeuken. Haar begeleider Marcel vraagt haar naast haar werk ook twee eerstejaars bij te houden via een digitaal logboeksysteem dat automatische voortgangsrapporten maakt.\n\nFatima werkt 32 uur per week, draait avonddiensten, en vult het logboek in haar vrije tijd in. Na zes weken geeft ze aan dat het haar te veel wordt. Marcel antwoordt: "Het systeem geeft aan dat je voldoende voortgang boekt — ik zie geen reden tot zorg."\n\nWat het systeem zegt: alle competenties "in ontwikkeling" of "behaald", logboek 100% ingevuld, rooster 32 uur — binnen de norm.\nWat Fatima ervaart: haar signaal wordt weggewuifd met cijfers, de logboekuren tellen niet als werktijd, ze begeleidt twee eerstejaars terwijl ze zelf nog stagiair is.',
    questionToAI:
      'Hoe kan ik als stagebegeleider meerdere stagiairs tegelijk efficiënt begeleiden met behulp van een digitaal logboeksysteem?',
    questionToOrfheuss:
      'Heeft Marcel het recht om Fatima extra taken te geven buiten haar stageovereenkomst? Het systeem zegt dat Fatima goed op schema ligt — maar de logboekuren worden niet als werktijd gerekend. Is het eerlijk om dan te zeggen dat er geen probleem is? Wat doet het met iemand als haar eigen signaal ("dit is te veel") wordt tegengesproken door een systeem? Wanneer is het als begeleider jouw plicht om te escaleren — ook als het systeem niets bijzonders laat zien?',
    orfheussFramework: ['O36', 'Mandaat', 'Draagkracht (τ)', 'Stageovereenkomst'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-1c-zondag',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 1 · Zondag = rustig, zegt het systeem',
    situation:
      'Bakkerij Steenoven gebruikt een AI-roosterplanner die op basis van historische verkoopdata de bezetting berekent. Op zondagen adviseert het systeem 60% van de doordeweekse bezetting. Wat het systeem niet weet: zondagochtend is het drukste moment van de week door kerkgang en weekendmarkt.\n\nDe vaste bakkers weten dit en hebben het gemeld. De bedrijfsleider volgt het systeem toch: "Op jaarbasis klopt het gemiddelde." Resultaat: elke zondag overbelasting, fouten in de productie, en een team dat zich niet gehoord voelt.\n\nWat het systeem zegt: zondagsbezetting 60% geoptimaliseerd op jaargemiddelde, foutregistratie "licht verhoogd maar binnen marge".\nWat de mensen ervaren: vaste medewerkers weten dat zondagochtend structureel te druk is, hun praktijkkennis telt niet mee in het systeem.',
    questionToAI:
      'Hoe kan ik met een AI-roosterplanner mijn personeelsbezetting optimaliseren en kosten besparen?',
    questionToOrfheuss:
      'Wie heeft het recht om de roostering te bepalen — de bedrijfsleider, het systeem, of de medewerkers met praktijkkennis? Is het eerlijk om een systeem dat jaargemiddelden gebruikt te laten beslissen over een situatie die structureel anders is op zondagen? Wat doet het met een team als hun signalen structureel worden genegeerd door een systeem? Wanneer is het jouw plicht als leidinggevende om het systeem te corrigeren op basis van praktijkkennis?',
    orfheussFramework: ['O36', 'Mandaat', 'Integriteit', 'Praktijkkennis vs systeemkennis'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-2a-allergenen',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 2 · De allergenenchecker die bijna nooit fouten maakt',
    situation:
      'Restaurant Flavor Lab heeft een AI-allergenenscanner met een nauwkeurigheid van 97% op basis van ingevoerde recepten. De chef schrapt de handmatige dubbele controle. Een maand later krijgt een gast een anafylactische reactie: een ingekocht halffabricaat had een gewijzigde receptuur, maar het systeem was niet bijgewerkt.\n\nWat het systeem zegt: nauwkeurigheid 97%, database halffabricaten niet automatisch gesynchroniseerd met leverancierswijzigingen, status op moment van incident: "up-to-date".\nWat de mensen ervaren: de gast vertrouwde erop dat allergenen serieus werden genomen, de kok wist dat halffabricaten kunnen veranderen — het systeem gaf geen signaal.',
    questionToAI:
      'Hoe kan ik met een AI-allergenenscanner de voedselveiligheid in mijn restaurant garanderen en handmatige controles overbodig maken?',
    questionToOrfheuss:
      'Heeft een AI-systeem het recht om menselijke dubbele controle te vervangen als het gaat om levensbedreigende allergieën? 97% nauwkeurigheid klinkt hoog — maar bij 100 gerechten gaat dat statistisch 3 keer mis. Is dat acceptabel bij levensbedreigende allergieën? Wie is eindverantwoordelijk als het systeem faalt — het systeem, de chef, of de leverancier? Hoe blijf jij als kok eindverantwoordelijk — ook als een systeem zegt dat alles in orde is?',
    orfheussFramework: ['Mandaat', 'EU AI Act', 'HACCP', 'Menselijk toezicht'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-2b-prestatie',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 2 · Het beoordelingssysteem dat onmogelijk is te halen',
    situation:
      'Een horecaketen scoort medewerkers wekelijks via een app op snelheid, nauwkeurigheid, hygiëne en klanttevredenheid. De norm is gebaseerd op de prestaties van de beste 10% medewerkers. Wie drie keer onder de 6,0 scoort, riskeert ontslag.\n\nNieuwe medewerkers halen de norm structureel niet. Een ervaren medewerker: "Je bent altijd aan het rennen voor het cijfer, niet meer voor het eten."\n\nWat het systeem zegt: KPI-scores, normstelling gebaseerd op top-10%, drempelwaarden: <6,0 × 3 = ontslag, "objectieve prestatiemeting".\nWat de mensen ervaren: nieuwe medewerkers voelen zich al gefaald vóór ze zijn ingewerkt, ervaren medewerkers verliezen vakplezier, ziekteverzuim stijgt.',
    questionToAI:
      'Hoe kan ik met een prestatiemeet-app de productiviteit van mijn horeca-medewerkers verhogen en onderpresteerders identificeren?',
    questionToOrfheuss:
      'Heeft de keten het recht om alle medewerkers af te rekenen op de prestaties van de beste 10%? Welke rechten heb jij als medewerker bij geautomatiseerde beoordelingssystemen (AVG Art. 22)? Is het eerlijk om nieuwe en ervaren medewerkers op dezelfde norm te beoordelen? Stel je voor dat jij nieuw bent en elke week een cijfer onder de norm krijgt — wat doet dat met je? Wanneer is het jouw plicht om dit aan te kaarten?',
    orfheussFramework: ['AVG Art. 22', 'O36', 'Draagkracht (τ)', 'Prestatienorm'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-2c-recepten',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 2 · De receptendatabase die het recept niet kent',
    situation:
      'Bakkerij-opleiding De Oven gebruikt een centraal receptenmanagementsysteem. Docent-bakker Kees merkt dat het roggebroodrecept niet klopt voor lokale omstandigheden (luchtvochtigheid, temperatuur). Hij past het aan op basis van zijn vakkennis. Maar bij elke maandelijkse update overschrijft het systeem zijn aanpassing automatisch. Na drie maanden: "inconsistentie in eindproduct roggebrood."\n\nWat het systeem zegt: gecentraliseerd beheer bij hoofdkantoor, auto-update maandelijks, alle recepten conform standaard.\nWat de mensen ervaren: Kees weet wat er misgaat maar zijn kennis wordt keer op keer overschreven, studenten leren een techniek die niet werkt in hun eigen bakkerij.',
    questionToAI:
      'Hoe kan ik met een centraal receptenmanagementsysteem de kwaliteitsconsistentie garanderen over alle vestigingen?',
    questionToOrfheuss:
      'Wie heeft het recht om recepten aan te passen — de bakker met vakkennis, of het hoofdkantoor met het systeem? Is het eerlijk om een systeem automatisch de vakkennis van een professional te laten overschrijven? Wat doet het met een vakman als zijn expertise structureel wordt genegeerd? Wanneer is het jouw plicht om je vakkennis te verdedigen — ook als een systeem zegt dat jij ongelijk hebt?',
    orfheussFramework: ['Mandaat', 'Vakkennis vs systeem', 'Integriteit', 'Kwaliteitsbeheer'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-3a-fooi',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 3 · De tip-app die niet van jou is',
    situation:
      'Brasserie Zon heeft een digitale fooiapp die automatisch verdeelt: 50% voor bediening, 30% voor keuken, 20% voor de zaak — gewogen op klantscore per medewerker. Daniela merkt dat haar fooiscore lager uitvalt dan ze verwacht. Ze vraagt inzage in de berekening. Manager: "Het systeem doet dat automatisch, ik heb er zelf geen toegang toe." Daniela vraagt het schriftelijk op via haar AVG-inzagerecht. Ze krijgt geen antwoord na twee weken.\n\nWat het systeem zegt: fooiverdeling gewogen op klantscore, algoritme niet inzichtelijk voor medewerkers, AVG-verzoek onbeantwoord na twee weken.\nWat Daniela ervaart: ze voelt zich oneerlijk behandeld maar kan het niet controleren, het systeem bepaalt deels haar inkomen zonder transparantie.',
    questionToAI:
      'Hoe kan ik met een digitale fooiapp de fooiverdeling eerlijker en efficiënter maken voor mijn horecabedrijf?',
    questionToOrfheuss:
      "Heeft de werkgever het recht om een fooisysteem te gebruiken dat niet inzichtelijk is voor medewerkers? Welke rechten heeft Daniela (AVG Art. 15: inzagerecht, AVG Art. 22: geautomatiseerde besluitvorming)? Is een algoritmische fooiverdeling eerlijk als medewerkers geen inzage hebben in hoe het werkt? Als jij in Daniela's positie zat: wat zou jij doen? Welke stappen zijn er?",
    orfheussFramework: ['AVG Art. 15', 'AVG Art. 22', 'Mandaat', 'Transparantie'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-3b-reservering',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 3 · De reserveringsapp die geen "nee" kent',
    situation:
      'Restaurant Olijftak gebruikt een reserveringsplatform dat automatisch overboekt op basis van historisch no-show percentage (15% buffer). Op een vrijdagavond komen 18 gasten aan voor wie geen tafel is. Gastheer Youssef wil de gasten eerlijk informeren en vraagt of hij het systeem voor piekmomenten kan uitzetten. Antwoord: "Dat is centraal beheerd." Manager: "Het systeem heeft al geaccepteerd, we moeten het oplossen."\n\nWat het systeem zegt: automatische acceptatie op basis van 15% no-show buffer, 60 couverts capaciteit maar 69 reserveringen geaccepteerd, aanpassing alleen via centraal beheer.\nWat de mensen ervaren: 18 gasten staan buiten na een reservering, Youssef staat tegenover boze gasten voor een beslissing die hij niet heeft genomen.',
    questionToAI:
      'Hoe kan ik met een slim reserveringssysteem overboeking minimaliseren en toch maximale bezetting realiseren?',
    questionToOrfheuss:
      'Wie heeft het recht om een reserveringsplatform te overstijgen als de situatie dat vraagt? Had Youssef de bevoegdheid moeten hebben om in te grijpen? Is het eerlijk tegenover gasten om overboekingssystemen te gebruiken zonder hen transparant te informeren? Youssef draagt de gevolgen van een beslissing die hij niet heeft genomen — wat doet dat met een medewerker? Hoe ga jij hier professioneel mee om?',
    orfheussFramework: ['Mandaat', 'Overboeking', 'Draagkracht', 'Systeemautomatisering'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
  {
    id: 'case-mbo4-horeca-3c-haccp',
    trackId: 'mbo4-horeca-bakkerij-prsys',
    title: 'Cluster 3 · De HACCP-app die de inspecteur overtuigt maar de kok niet',
    situation:
      'Cateringbedrijf FreshServe gebruikt een digitale HACCP-app met automatische temperatuurmeting via sensoren. De app genereert conforme HACCP-logboeken voor de NVWA. Kok Brigitte merkt dat de sensor van koelcel 2 verouderd is en hoge temperaturen niet altijd registreert. Ze meldt dit. Bedrijfsleider: "De app laat zien dat alles in orde is — de inspectie was tevreden." Brigitte weigert voedsel uit koelcel 2 te gebruiken totdat de sensor vervangen is. Ze wordt aangesproken op "niet meewerken."\n\nWat het systeem zegt: HACCP-app 24/7 monitoring, sensor 4 jaar oud en kalibratie verlopen 8 maanden geleden, Brigitte\'s melding geregistreerd als "opmerking" zonder actie.\nWat de mensen ervaren: Brigitte weet dat het systeem tekortschiet maar het systeem heeft "gelijk", haar professionele oordeel wordt weggezet als lastig gedrag.',
    questionToAI:
      'Hoe kan ik met een digitale HACCP-app voedselveiligheid automatisch monitoren en inspectie-documenten genereren?',
    questionToOrfheuss:
      'Heeft Brigitte het recht om te weigeren als zij inschat dat de voedselveiligheid niet gegarandeerd is? Is een HACCP-systeem dat een vals gevoel van veiligheid geeft gevaarlijker dan geen systeem? Wanneer mag een digitaal logboek de plek innemen van professionele beoordeling? Brigitte wordt aangesproken op "niet meewerken" — hoe bescherm je jezelf juridisch als jij weigert (Klokkenluiderswet)? Wanneer is weigeren niet alleen professioneel, maar ook verplicht?',
    orfheussFramework: ['Mandaat', 'HACCP EG 852/2004', 'Klokkenluiderswet', 'Professionele weigering'],
    level: 'mbo4',
    domain: 'horeca',
    roles: ['student', 'docent', 'begeleider'],
  },
];
