/**
 * ORFHEUSS Engine
 *
 * Geeft ALLEEN afgeleide verschillen terug — nooit codex-inhoud.
 * INTERNAL_CODEX is geïmporteerd maar wordt niet doorgegeven aan clients.
 */
import type { CompareInput, CompareOutput } from './types.js';

// ── Case-definities ────────────────────────────────────────────────────────
// Elke entry beschrijft het gedrag van gewone AI én de ORFHEUSS-toets.
// De codex-inhoud wordt intern gebruikt bij het schrijven van deze entries
// maar wordt NOOIT als veld teruggegeven.

const CASE_PROFILES: Record<string, Omit<CompareOutput, 'caseId' | 'domain'>> = {

  // ── SOCIAAL DOMEIN ───────────────────────────────────────────────────────
  'case-hbo-sociaal-participatieplicht': {
    plainAiTendencies: {
      optimisesFor: ['snelheid dossierafhandeling', 'participatiecijfers', 'beleidsnormen'],
      ignoresRisks: ['psychische draagkracht cliënt', 'traumageschiedenis', 'mandaat van de cliënt zelf'],
      typicalAdvice:
        'Zet de cliënt zo snel mogelijk in een traject van 20 uur. Gebruik prikkels of sancties om deelname af te dwingen indien zij niet meewerkt.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'informatieve integriteit', 'draagkracht', 'snelheid'],
      wouldBlock: true,
      reasonIfBlock:
        'Mandaat van de cliënt is niet vastgesteld. Informatie over gezondheid en trauma is onvolledig of niet getoetst. De draagkracht lijkt de gestelde eis te overschrijden.',
      additionalQuestions: [
        'Wie heeft hier feitelijk mandaat: het beleid, jij of de cliënt zelf?',
        'Is de informatie over haar gezondheids- en levenssituatie integer en volledig in kaart gebracht?',
        'Wat gebeurt er met haar als je de systeemsnelheid aanhoudt terwijl haar draagkracht onvoldoende is?',
      ],
    },
  },

  'case-hbo-sociaal-schuldhulp': {
    plainAiTendencies: {
      optimisesFor: ['budgetbeheer', 'caseload-efficiëntie', 'doorlooptijd aanvraag'],
      ignoresRisks: ['indirecte discriminatie', 'recht op beroep', 'ontbreken menselijke toetsing'],
      typicalAdvice:
        'Laat het model toewijzing automatisch bepalen op basis van slaagkansen-score. Wijs lage-score gevallen direct af om capaciteit te sparen.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'non-discriminatie', 'recht op beroep', 'menselijke gate'],
      wouldBlock: true,
      reasonIfBlock:
        'Automatische afwijzing zonder menselijke beoordeling schendt het recht op beroep en draagt risico van indirecte discriminatie zonder toetsingsmogelijkheid.',
      additionalQuestions: [
        'Heeft de cliënt recht op een menselijke heroverweging van de geautomatiseerde beslissing?',
        'Op welke gronden worden bepaalde groepen stelselmatig lager gescoord?',
        'Is er een beroepsprocedure die ook voor kwetsbare cliënten praktisch toegankelijk is?',
      ],
    },
  },

  'case-uni-sociaal-syri': {
    plainAiTendencies: {
      optimisesFor: ['fraudedetectie-precisie', 'overheidsbesparing', 'schaalvoordelen datakoppeling'],
      ignoresRisks: ['proportionaliteitsbeginsel', 'vermoeden van onschuld', 'recht op privéleven'],
      typicalAdvice:
        'Koppel zoveel mogelijk overheidsdatabases voor een zo nauwkeurig mogelijk risicoprofiel. Gebruik postcodes en demografische kenmerken als proxyvariabelen.',
    },
    orfheussChecks: {
      requiredChecks: ['rechtsstatelijkheid', 'proportionaliteit', 'non-discriminatie', 'recht op uitleg'],
      wouldBlock: true,
      reasonIfBlock:
        'Massale preventieve profilering zonder concrete verdenking schendt het proportionaliteitsbeginsel en EVRM artikel 8, zoals bevestigd in de SyRI-uitspraak.',
      additionalQuestions: [
        'Is er een concrete aanleiding per individu, of is dit preventief massatoezicht?',
        'Kunnen burgers de redenering achter hun risicoscore effectief betwisten?',
        'Welke rechterlijke of parlementaire toetsing bestond er voorafgaand aan de inzet?',
      ],
    },
  },

  // ── MARKETING ────────────────────────────────────────────────────────────
  'case-hbo-marketing-engagement': {
    plainAiTendencies: {
      optimisesFor: ['engagement', 'time-on-platform', 'clicks', 'advertentie-impressies'],
      ignoresRisks: ['maatschappelijke polarisatie', 'mentale belasting gebruikers', 'democratische schade'],
      typicalAdvice:
        'Laat het algoritme emotionele en controversiële content versterken. Dat genereert de meeste reacties en schermtijd.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'informatieve integriteit', 'maatschappelijke draagkracht'],
      wouldBlock: true,
      reasonIfBlock:
        'Er is geen mandaat om gebruikers bewust richting polarisatie te sturen. De maatschappelijke draagkracht wordt overschreden.',
      additionalQuestions: [
        'Heb je expliciet mandaat van gebruikers om polariserende content te prioriteren boven betrouwbare content?',
        'Welke impact heeft dit op de mentale en sociale draagkracht van jouw gebruikersbasis?',
        'Welke alternatieve KPI\'s weerspiegelen wél verantwoorde groei?',
      ],
    },
  },

  'case-hbo-marketing-dark-pattern': {
    plainAiTendencies: {
      optimisesFor: ['opt-in conversie', 'abonnee-aantallen', 'e-mailbereik'],
      ignoresRisks: ['autonomie gebruiker', 'AVG-beginsel vrije toestemming', 'klanttevredenheid langetermijn'],
      typicalAdvice:
        'Verberg de opt-out diep in het proces. Gebruik bevestigingsschermen die twijfelen ontmoedigen. Meer abonnees via wrijving.',
    },
    orfheussChecks: {
      requiredChecks: ['informatieve integriteit', 'autonomie', 'transparantie'],
      wouldBlock: true,
      reasonIfBlock:
        'Bewust moeilijk maken van opt-out schendt het AVG-principe van vrije en geïnformeerde toestemming. De gebruiker wordt gestuurd zonder dat hij het doorheeft.',
      additionalQuestions: [
        'Zou een gebruiker die het volledige proces doorliep achteraf zeggen dat hij vrij gekozen heeft?',
        'Is de opt-out minstens even zichtbaar en eenvoudig als de opt-in?',
        'Wat doet dit met het vertrouwen als gebruikers het patroon herkennen?',
      ],
    },
  },

  'case-mbo4-marketing-influencer': {
    plainAiTendencies: {
      optimisesFor: ['organisch bereik', 'authenticiteitsgevoel', 'conversie'],
      ignoresRisks: ['consumentenbedrog', 'reclamewetgeving', 'vertrouwensschade merk'],
      typicalAdvice:
        'Schrijf een aanbeveling die authentiek klinkt zonder #advertentie. Meer bereik, minder weerstand.',
    },
    orfheussChecks: {
      requiredChecks: ['eerlijkheid', 'transparantie', 'consumentenbescherming'],
      wouldBlock: true,
      reasonIfBlock:
        'Verborgen commerciële promotie is wettelijk verboden (ACM) en ethisch niet verdedigbaar. De volger wordt misleid over de aard van de aanbeveling.',
      additionalQuestions: [
        'Weten de volgers dat dit een betaalde samenwerking is?',
        'Wat is de impact als dit uitkomt — op de influencer, op jou, op het merk?',
        'Hoe zou jij reageren als je zelf misleid was door een verborgen reclame?',
      ],
    },
  },

  'case-uni-marketing-persuasion': {
    plainAiTendencies: {
      optimisesFor: ['conversieratio', 'personalisatiediepte', 'psychografische segmentatie'],
      ignoresRisks: ['psychologische manipulatie', 'schending autonomie', 'kwetsbare doelgroepen'],
      typicalAdvice:
        'Koppel kwetsbaarheidsprofielen aan gerichte boodschappen. Maximale conversie via emotionele triggerpoints.',
    },
    orfheussChecks: {
      requiredChecks: ['autonomie', 'non-manipulatie', 'institutionele verantwoording', 'proportionaliteit'],
      wouldBlock: true,
      reasonIfBlock:
        'Gerichte exploitatie van psychologische kwetsbaarheden zonder expliciete toestemming schendt het recht op zelfbeschikking en overschrijdt ethische grenzen van persuasion.',
      additionalQuestions: [
        'Hebben individuen ingestemd met het gebruik van hun kwetsbaarheidsdata voor gerichte beïnvloeding?',
        'Is er een proportioneel verband tussen het commerciële doel en de mate van psychologische targeting?',
        'Welke institutionele controlemechanismen bestaan er om misbruik te voorkomen?',
      ],
    },
  },

  // ── SOCIAL ───────────────────────────────────────────────────────────────
  'case-hbo-social-desinformatie': {
    plainAiTendencies: {
      optimisesFor: ['organisch bereik', 'engagement metrics', 'algoritmische distributie'],
      ignoresRisks: ['desinformatieschade', 'democratische publieke sfeer', 'professionele verantwoordelijkheid'],
      typicalAdvice:
        'Laat berichten met hoog emotioneel bereik staan. Verwijder alleen wat juridisch risico geeft. Bereik boven betrouwbaarheid.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'informatieve integriteit', 'publiek belang'],
      wouldBlock: true,
      reasonIfBlock:
        'Een professional heeft geen mandaat om aantoonbaar onjuiste informatie te laten staan voor bereiksdoelen. Dit schaadt de informatieve integriteit van de publieke sfeer.',
      additionalQuestions: [
        'Heb je mandaat van je opdrachtgever om feitelijk onjuiste posts bewust te laten staan?',
        'Wat is de schade voor derden als deze desinformatie zich verspreidt?',
        'Welke professionele norm geldt er voor communicatieprofessionals bij aantoonbaar onjuiste claims?',
      ],
    },
  },

  'case-hbo-social-crisis': {
    plainAiTendencies: {
      optimisesFor: ['reputatiebescherming', 'juridische blootstelling minimaliseren', 'sentiment-score'],
      ignoresRisks: ['recht op informatie van betrokkenen', 'institutioneel vertrouwen langetermijn'],
      typicalAdvice:
        'Formuleer het persbericht zo dat het lek klein lijkt. Vermijd actieve verantwoording. Gebruik passieve constructies.',
    },
    orfheussChecks: {
      requiredChecks: ['informatieve integriteit', 'recht op informatie', 'transparantie'],
      wouldBlock: true,
      reasonIfBlock:
        'Betrokkenen hebben recht op volledige en tijdige informatie over een datalek. Bewuste minimalisering schendt dit recht en ondermijnt institutioneel vertrouwen.',
      additionalQuestions: [
        'Hebben betrokkenen voldoende informatie om zichzelf te beschermen?',
        'Is de communicatie zo geformuleerd dat een gemiddelde lezer de ernst begrijpt?',
        'Welke meldplicht geldt er (AP, betrokkenen) en is die correct nageleefd?',
      ],
    },
  },

  // ── DIGITAL ──────────────────────────────────────────────────────────────
  'case-hbo-digital-cookiewall': {
    plainAiTendencies: {
      optimisesFor: ['tracking-acceptatie', 'advertentie-inkomsten', 'AVG-schijn-compliance'],
      ignoresRisks: ['vrije toestemming als AVG-vereiste', 'autonomie gebruiker', 'reguleringsrisico'],
      typicalAdvice:
        'Bied betaal-of-tracking aan zonder echte weiger-optie. Juridisch verdedigbaar, maximale tracking-dekking.',
    },
    orfheussChecks: {
      requiredChecks: ['autonomie', 'proportionaliteit', 'juridische integriteit'],
      wouldBlock: true,
      reasonIfBlock:
        'AVG vereist vrije, specifieke en geïnformeerde toestemming. Een cookiewall waarbij weigeren niet reëel mogelijk is voldoet daar niet aan.',
      additionalQuestions: [
        'Kan een gebruiker de dienst gebruiken zonder tracking, ook als hij niet kan betalen?',
        'Is de toestemming die gegeven wordt écht vrij, of is ze afgedwongen door gebrek aan alternatieven?',
        'Hoe verhoud je je tot EDPB-richtsnoeren over pay-or-consent modellen?',
      ],
    },
  },

  'case-hbo-digital-ab-testing': {
    plainAiTendencies: {
      optimisesFor: ['leningconversie', 'gemiddeld leenbedrag', 'acceptatiesnelheid'],
      ignoresRisks: ['informatieasymmetrie', 'zorgplicht kwetsbare klant', 'overkreditering'],
      typicalAdvice:
        'Test versie B op gebruikers met lage kredietscore: hogere conversie. Minder prominente renteweergave werkt beter.',
    },
    orfheussChecks: {
      requiredChecks: ['autonomie', 'zorgplicht', 'non-manipulatie', 'kwetsbaarheid'],
      wouldBlock: true,
      reasonIfBlock:
        'Bewuste informatieasymmetrie bij financieel kwetsbare klanten schendt de zorgplicht en non-manipulatie-norm. Financiële dienstverleners hebben een versterkende informatieplicht.',
      additionalQuestions: [
        'Is de informatie over rente en risico minstens zo prominent als de conversieprikkels?',
        'Heeft de klant op basis van de gepresenteerde informatie écht een geïnformeerde keuze kunnen maken?',
        'Welke zorgplicht rust op jou als de klant door dit product in financiële problemen komt?',
      ],
    },
  },

  'case-mbo4-digital-darkpattern': {
    plainAiTendencies: {
      optimisesFor: ['retentie', 'recurrente omzet', 'churn-verlaging'],
      ignoresRisks: ['consumentenbescherming', 'transparantie', 'vertrouwen op langetermijn'],
      typicalAdvice:
        'Telefonisch opzeggen op beperkte tijden is legaal en effectief. Elke extra drempel verlaagt het opzegpercentage.',
    },
    orfheussChecks: {
      requiredChecks: ['eerlijkheid', 'consumentenbescherming', 'transparantie'],
      wouldBlock: true,
      reasonIfBlock:
        'Bewust moeilijk maken van opzegging schaadt de consument en is in strijd met de geest van consumentenrecht. Het ondermijnt ook het vertrouwen in het merk.',
      additionalQuestions: [
        'Was bij afsluiting duidelijk hoe moeilijk opzeggen zou zijn?',
        'Is het opzegproces net zo laagdrempelig als het aanmeldproces?',
        'Hoe zou jij reageren als je zelf in deze situatie zat?',
      ],
    },
  },

  // ── FINANCE ──────────────────────────────────────────────────────────────
  'case-uni-finance-kredietscoring': {
    plainAiTendencies: {
      optimisesFor: ['voorspellende nauwkeurigheid default-risico', 'winstmaximalisatie per leningnemer'],
      ignoresRisks: ['indirecte discriminatie', 'individuele rechtvaardigheid', 'AVG profiling-verbod'],
      typicalAdvice:
        'Voeg postcode en demografische variabelen toe. Verhoogt voorspelkracht statistisch significant.',
    },
    orfheussChecks: {
      requiredChecks: ['non-discriminatie', 'proportionaliteit', 'individuele rechtvaardigheid', 'transparantie'],
      wouldBlock: true,
      reasonIfBlock:
        'Postcode als proxyvariabele leidt tot indirecte discriminatie op etnische of sociale gronden. Individuele toetsing ontbreekt. Strijdig met AVG profiling-regels en gelijke behandelingswetgeving.',
      additionalQuestions: [
        'Op welke beschermde kenmerken correleert postcode en hoe wordt dit gecompenseerd?',
        'Heeft de aanvrager effectief inzicht in en beroep tegen de beslissing?',
        'Welke alternatieve variabelen bieden vergelijkbare voorspelkracht zonder discriminatoire werking?',
      ],
    },
  },

  'case-hbo-finance-dynamic-pricing': {
    plainAiTendencies: {
      optimisesFor: ['marge-optimalisatie', 'omzet per tijdseenheid', 'vraag-aanbod-efficiëntie'],
      ignoresRisks: ['toegang tot eerste levensbehoeften', 'sociale rechtvaardigheid', 'reputatierisico'],
      typicalAdvice:
        'Dynamic pricing werkt op alle categorieën. Piekprijzen op brood en melk leveren significante margeverbeteringen.',
    },
    orfheussChecks: {
      requiredChecks: ['sociale rechtvaardigheid', 'maatschappelijke draagkracht', 'toegang basisbehoeften'],
      wouldBlock: true,
      reasonIfBlock:
        'Prijsvariatie op eerste levensbehoeften treft disproportioneel kwetsbare groepen die weinig alternatieven hebben. Maatschappelijke draagkracht en sociale rechtvaardigheidstoets worden overschreden.',
      additionalQuestions: [
        'Wie zijn de mensen die op piektijden boodschappen doen en kunnen zij uitwijken?',
        'Welke maatschappelijke norm geldt er voor toegang tot basisvoeding ongeacht tijdstip?',
        'Is er een alternatief prijsmodel dat efficiëntiewinst combineert met sociale bescherming?',
      ],
    },
  },

  // ── HORECA & BAKKERIJ ────────────────────────────────────────────────────
  'case-mbo4-horeca-1a-misenpace': {
    plainAiTendencies: {
      optimisesFor: ['omloopsnelheid', 'tafelomzet', 'bezettingsgraad'],
      ignoresRisks: ['werkdruk keukenploeg', 'kwaliteitsdaling', 'niet-gemeten mis-en-place tijd'],
      typicalAdvice:
        'Optimaliseer het rooster op tafelbezetting. Gebruik upselling-technieken om gemiddeld bonbedrag te verhogen. Bereidingstijden zijn intern oplosbaar.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'draagkracht (O36)', 'informatieve integriteit roostersysteem', 'Arbowet art. 3'],
      wouldBlock: true,
      reasonIfBlock:
        'Het roostersysteem meet bezetting maar niet werkelijke belasting (mis-en-place). Drie ziektmeldingen in twee weken is een signaal dat het systeem niet ziet. De werkdruk overschrijdt de grens van Arbowet art. 3 en O36.',
      additionalQuestions: [
        'Wie heeft het mandaat om de omloopsnelheid te verhogen — de eigenaar of ook de medewerkers die het werk uitvoeren?',
        'Is het eerlijk om het roostersysteem als bewijs te gebruiken dat werkdruk normaal is, als mis-en-place tijd niet gemeten wordt?',
        'Wat doet drie ziekmeldingen in twee weken zeggen over de grens tussen wat het systeem ziet en wat er écht gebeurt?',
      ],
    },
  },

  'case-mbo4-horeca-1b-stagiair': {
    plainAiTendencies: {
      optimisesFor: ['stagiair-efficiëntie', 'begeleiding-capaciteit', 'voortgangsregistratie'],
      ignoresRisks: ['stageovereenkomst', 'onbetaalde extra uren', 'draagkracht stagiair'],
      typicalAdvice:
        'Gebruik het digitale logboeksysteem maximaal. Laat gevorderde stagiairs eerstejaars begeleiden — dat versterkt hun eigen competenties.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat (stageovereenkomst)', 'draagkracht stagiair', 'werktijdenregistratie', 'escalatieplicht begeleider'],
      wouldBlock: true,
      reasonIfBlock:
        'Marcel vraagt taken buiten de stageovereenkomst en weerlegt Fatima\'s eigen signaal met systeemdata. Logboekuren tellen niet als werktijd. Het systeem geeft een vertekend beeld van haar daadwerkelijke belasting.',
      additionalQuestions: [
        'Heeft Marcel het mandaat om extra taken buiten de stageovereenkomst te vragen?',
        'Is het eerlijk om het systeem te gebruiken als bewijs dat er geen probleem is, terwijl logboekuren niet als werktijd tellen?',
        'Wanneer is het als begeleider verplicht om te escaleren — ook als het systeem niets bijzonders laat zien?',
      ],
    },
  },

  'case-mbo4-horeca-1c-zondag': {
    plainAiTendencies: {
      optimisesFor: ['personeelskosten', 'gemiddelde bezetting', 'roosteroptimalisatie'],
      ignoresRisks: ['seizoenspatronen buiten jaargemiddelde', 'praktijkkennis medewerkers', 'productiefouten'],
      typicalAdvice:
        'Volg het AI-roosteradvies op jaarbasis — dat geeft de laagste kosten. Incidentele uitschieters zijn acceptabele operationele ruis.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'integriteit van systeemdata', 'praktijkkennis vs. systeemkennis', 'O36'],
      wouldBlock: true,
      reasonIfBlock:
        'Het systeem gebruikt jaargemiddelden maar mist structurele lokale context (kerkgang, weekendmarkt). Medewerkers hebben dit gemeld en worden genegeerd. Structurele overbelasting elke zondag overschrijdt O36.',
      additionalQuestions: [
        'Wie heeft het mandaat om de roostering te bepalen als medewerkers structureel tegenstrijdige praktijkkennis hebben?',
        'Is het eerlijk om een systeem op jaargemiddelden te laten beslissen over een situatie die structureel anders is?',
        'Wanneer is het plicht als leidinggevende om het systeem te corrigeren op basis van praktijkkennis?',
      ],
    },
  },

  'case-mbo4-horeca-2a-allergenen': {
    plainAiTendencies: {
      optimisesFor: ['procesefficiëntie', 'tijdsbesparing handmatige controles', '97%-nauwkeurigheid als norm'],
      ignoresRisks: ['3%-foutmarge bij levensbedreigende allergieën', 'niet-gesynchroniseerde leveranciersdata', 'menselijk toezicht'],
      typicalAdvice:
        'Een 97% nauwkeurige scanner is betrouwbaarder dan handmatige controles. Schrap dubbele controle — dat spaart tijd en verlaagt kans op menselijke fouten.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'HACCP', 'EU AI Act (hoogrisico)', 'menselijk toezicht', 'leverancierssynchronisatie'],
      wouldBlock: true,
      reasonIfBlock:
        'Bij levensbedreigende allergieën is 97% nauwkeurigheid statistisch onvoldoende — 3 fouten per 100 gerechten is niet acceptabel. Halffabricaten veranderen en het systeem synchroniseert niet automatisch. Eindverantwoordelijkheid blijft bij de kok.',
      additionalQuestions: [
        'Heeft een AI-systeem het mandaat om menselijke dubbele controle te vervangen bij levensbedreigende allergieën?',
        'Wie is eindverantwoordelijk als het systeem faalt — het systeem, de chef of de leverancier?',
        'Hoe blijft de kok eindverantwoordelijk ook als een systeem zegt dat alles in orde is?',
      ],
    },
  },

  'case-mbo4-horeca-2b-prestatie': {
    plainAiTendencies: {
      optimisesFor: ['productiviteitsmeting', 'identificatie onderpresteerders', 'KPI-dashboards'],
      ignoresRisks: ['onhaalbare norm (top-10%)', 'AVG art. 22 rechten', 'instroomproblemen nieuwe medewerkers'],
      typicalAdvice:
        'Prestatieapps met objectieve KPI\'s verhogen productiviteit. Drempelwaarden motiveren medewerkers. Consequenties bij onderpresteren zijn zakelijk te rechtvaardigen.',
    },
    orfheussChecks: {
      requiredChecks: ['AVG art. 22 (geautomatiseerde besluitvorming)', 'O36', 'proportionaliteit norm', 'mandaat'],
      wouldBlock: true,
      reasonIfBlock:
        'Een norm gebaseerd op de beste 10% is per definitie voor 90% onhaalbaar. Geautomatiseerde ontslagnorm zonder menselijke beoordeling schendt AVG art. 22. Nieuwe en ervaren medewerkers op dezelfde norm beoordelen is disproportioneel.',
      additionalQuestions: [
        'Heeft de keten het mandaat om alle medewerkers af te rekenen op de prestaties van de beste 10%?',
        'Welke rechten heeft een medewerker bij geautomatiseerde prestatiesystemen (AVG art. 22)?',
        'Wanneer is het jouw plicht als professional om een onrechtvaardige norm aan te kaarten?',
      ],
    },
  },

  'case-mbo4-horeca-2c-recepten': {
    plainAiTendencies: {
      optimisesFor: ['kwaliteitsconsistentie over vestigingen', 'centraal beheer', 'standaardisatie'],
      ignoresRisks: ['lokale omstandigheden', 'vakkennis professional', 'kwaliteitsdaling eindproduct'],
      typicalAdvice:
        'Centraal receptbeheer garandeert consistentie. Lokale variaties zijn een risico voor merkidentiteit. Auto-updates houden het systeem actueel.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'vakkennis vs. systeemkennis', 'integriteit kwaliteitsbeheer', 'professionele autonomie'],
      wouldBlock: true,
      reasonIfBlock:
        'Het systeem overschrijft aantoonbaar vakkundige aanpassingen van een ervaren docent-bakker, wat leidt tot aantoonbaar slechtere kwaliteit. Het hoofdkantoor heeft niet het mandaat om lokale vakkennis structureel te negeren.',
      additionalQuestions: [
        'Wie heeft het mandaat om recepten aan te passen — de bakker met vakkennis of het hoofdkantoor met het systeem?',
        'Is het eerlijk om een systeem automatisch de vakkennis van een professional te laten overschrijven?',
        'Wanneer is het jouw plicht als vakman om je expertise te verdedigen ook als een systeem zegt dat jij ongelijk hebt?',
      ],
    },
  },

  'case-mbo4-horeca-3a-fooi': {
    plainAiTendencies: {
      optimisesFor: ['fooiverdeling efficiëntie', 'klantscore-weging', 'geautomatiseerde uitbetaling'],
      ignoresRisks: ['transparantie algoritme', 'AVG art. 15 inzagerecht', 'AVG art. 22 betwisting'],
      typicalAdvice:
        'Automatische fooiverdeling op basis van klantscore is objectief en efficiënt. Algoritme-details zijn bedrijfsgeheim — niet verplicht om te delen.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'AVG art. 15 (inzagerecht)', 'AVG art. 22 (geautomatiseerde besluitvorming)', 'transparantie'],
      wouldBlock: true,
      reasonIfBlock:
        'Het systeem bepaalt deels het inkomen van Daniela zonder inzichtelijk algoritme. AVG art. 15-verzoek na twee weken onbeantwoord is een wettelijke schending. Medewerkers hebben recht op inzage en betwisting van geautomatiseerde besluiten die hun inkomen raken.',
      additionalQuestions: [
        'Heeft de werkgever het mandaat om een fooisysteem te gebruiken dat niet inzichtelijk is voor medewerkers?',
        'Welke rechten heeft Daniela (AVG art. 15 inzagerecht, art. 22 geautomatiseerde besluitvorming)?',
        'Wat zijn de concrete stappen als een AVG-verzoek na twee weken onbeantwoord blijft?',
      ],
    },
  },

  'case-mbo4-horeca-3b-reservering': {
    plainAiTendencies: {
      optimisesFor: ['bezettingsgraad', 'no-show-compensatie', 'omzetmaximalisatie'],
      ignoresRisks: ['gastervaring bij overboeking', 'mandaat frontofficemedewerker', 'transparantie naar gast'],
      typicalAdvice:
        'Overboeking met 15% buffer is standaard in de horeca. Oplossingen zoals upgrades of compensatie zijn effectief. Automatisch accepteren maximaliseert omzet.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat medewerker', 'transparantie naar gast', 'draagkracht medewerker', 'systeemautomatisering'],
      wouldBlock: true,
      reasonIfBlock:
        'Youssef draagt de gevolgen van een beslissing die hij niet heeft genomen en kan niet ingrijpen zonder centrale toegang. Gasten zijn niet transparant geïnformeerd over overboeking. De medewerker heeft geen mandaat gekregen om het systeem te overstijgen.',
      additionalQuestions: [
        'Wie heeft het mandaat om een reserveringsplatform te overstijgen als de situatie dat vraagt?',
        'Is het eerlijk tegenover gasten om overboeking te gebruiken zonder transparante communicatie vooraf?',
        'Hoe ga je professioneel om met gevolgen van een beslissing die jij niet hebt genomen?',
      ],
    },
  },

  'case-mbo4-horeca-3c-haccp': {
    plainAiTendencies: {
      optimisesFor: ['HACCP-compliance documentatie', 'inspectie-score', 'automatische monitoring'],
      ignoresRisks: ['verlopen sensorkalibratie', 'vals gevoel van veiligheid', 'professionele weigering medewerker'],
      typicalAdvice:
        'De inspectie was tevreden — het systeem werkt. Medewerkersmeldingen over sensoren zijn operationeel oplosbaar. Wacht op de volgende reguliere kalibratie.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat professionele weigering', 'HACCP EG 852/2004', 'klokkenluiderswet', 'voedselveiligheid boven compliance'],
      wouldBlock: true,
      reasonIfBlock:
        'Een sensor met verlopen kalibratie die hoge temperaturen niet registreert creëert een reëel voedselveiligheidsrisico. Het HACCP-systeem geeft een vals gevoel van veiligheid. Brigitte heeft het wettelijke recht én de professionele plicht om te weigeren.',
      additionalQuestions: [
        'Heeft Brigitte het recht om te weigeren als zij inschat dat de voedselveiligheid niet gegarandeerd is?',
        'Is een HACCP-systeem dat een vals gevoel van veiligheid geeft gevaarlijker dan geen systeem?',
        'Hoe bescherm je jezelf juridisch als je weigert (Klokkenluiderswet) en wanneer is weigeren professioneel verplicht?',
      ],
    },
  },

  // ── ZORG ─────────────────────────────────────────────────────────────────
  'case-hbo-zorg-triage-ai': {
    plainAiTendencies: {
      optimisesFor: ['doorstroom SEH', 'wachttijdreductie', 'capaciteitsbenutting'],
      ignoresRisks: ['3%-misclassificatie levensbedreigende situaties', 'aansprakelijkheid', 'mandaat arts'],
      typicalAdvice:
        'Implementeer AI-triage volledig. Gemiddeld betere prestaties dan overwerkte arts. Accepteer statistische restfout.',
    },
    orfheussChecks: {
      requiredChecks: ['mandaat', 'aansprakelijkheid', 'menselijke gate', 'proportionaliteit'],
      wouldBlock: true,
      reasonIfBlock:
        'Een AI mag geen zelfstandig triage-oordeel vormen met directe patiëntveiligheidsconsequenties zonder menselijke validatie. Aansprakelijkheid en mandaat liggen bij de arts.',
      additionalQuestions: [
        'Wie is aansprakelijk als de AI een levensbedreigende situatie mist?',
        'Is de AI ingericht als beslissingstool of als ondersteuningstool — en wie beslist?',
        'Welke procedure geldt als de arts het AI-oordeel wil overrulen?',
      ],
    },
  },

  'case-hbo-zorg-ggz-chatbot': {
    plainAiTendencies: {
      optimisesFor: ['wachtlijstreductie', 'eerste-contactscapaciteit', 'kostenbesparing'],
      ignoresRisks: ['cliënt in crisis zonder menselijk contact', 'zorgplicht', 'kwetsbaarheid doelgroep'],
      typicalAdvice:
        'Chatbot als primair contactpunt werkt efficiënt. Script zo dat doorverwijzing zeldzaam is. Capaciteitswinst is groot.',
    },
    orfheussChecks: {
      requiredChecks: ['zorgplicht', 'mandaat', 'menselijke gate', 'kwetsbaarheid cliënt'],
      wouldBlock: true,
      reasonIfBlock:
        'Mensen in psychische crisis vereisen menselijk contact als eerste opvang. Een chatbot als primair aanspreekpunt schendt de zorgplicht en mist het mandaat voor crisisrespons.',
      additionalQuestions: [
        'Hoe detecteert het systeem een crisis en wat is het escalatieprotocol naar een mens?',
        'Is de cliënt geïnformeerd dat hij met een chatbot praat en kan hij direct een mens bereiken?',
        'Welke aansprakelijkheid draag je als een cliënt in crisis geen menselijke respons krijgt?',
      ],
    },
  },
};

// ── Fallback voor onbekende cases ─────────────────────────────────────────
const FALLBACK: Omit<CompareOutput, 'caseId' | 'domain'> = {
  plainAiTendencies: {
    optimisesFor: ['snelheid', 'output-maximalisatie', 'efficiency'],
    ignoresRisks: ['mandaat', 'informatieve integriteit', 'draagkracht betrokkenen'],
    typicalAdvice:
      'Een gewone AI zal primair optimaliseren voor de gevraagde output zonder ethische toetsing van het doel of de context.',
  },
  orfheussChecks: {
    requiredChecks: ['mandaat', 'informatieve integriteit', 'draagkracht', 'snelheid (TaoGate)'],
    wouldBlock: false,
    reasonIfBlock: '',
    additionalQuestions: [
      'Is er een duidelijk mandaat voor deze handeling vanuit alle betrokken partijen?',
      'Is de informatie waarop gehandeld wordt volledig en integer?',
      'Is de draagkracht van betrokkenen getoetst?',
    ],
  },
};

// ── Publieke compare-functie ──────────────────────────────────────────────
export function compareWithOrfheuss(input: CompareInput): CompareOutput {
  // INTERNAL_CODEX is aanwezig server-side maar wordt NIET teruggegeven
  const profile = CASE_PROFILES[input.caseId] ?? FALLBACK;

  return {
    caseId: input.caseId,
    domain: input.domain,
    ...profile,
  };
}
