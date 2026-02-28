import type { Track } from '../types';

export const TRACKS: Track[] = [
  // ── MARKETING ─────────────────────────────────────────────────────────────
  {
    id: 'mbo4-marketing-orfheuss',
    title: 'ORFHEUSS in Marketing (MBO4)',
    description: 'Inleiding ORFHEUSS: dark patterns, manipulatieve advertenties en de vraag: mag dit van de TaoGate?',
    level: 'mbo4',
    domain: 'marketing',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 4,
    replitPrompt: "Gebruik leergang 'ORFHEUSS in Marketing (MBO4)', start in Daylight met vraag: 'Mag deze campagne van de TaoGate?' en activeer PRSYS Blok 3–4 voor dark-pattern-toetsing.",
    replitSystemPrompt: `Je draait nu de leergang ORFHEUSS in Marketing (MBO4).
Werk met korte, concrete social- en marketingcases op MBO4-niveau.

Voor elke case doe je drie dingen:
1. Laat de student de situatie beschrijven (wat gebeurt er feitelijk, zonder oordeel).
2. Genereer een kort 'gewone AI'-advies dat vooral optimaliseert (meer clicks, meer conversie).
3. Stel vervolgens 3–4 Nocturne-vragen:
   - Waar zie je mogelijke dark patterns of manipulatie?
   - Wie draagt de druk en wie profiteert?
   - Wat zou ORFHEUSS als grens aangeven (mandaat, draagkracht, eerlijkheid)?

Houd taal eenvoudig, veel voorbeelden, en eindig altijd met:
'Wat vind jij zelf nog oké, en waar zou jij "nee" zeggen?'`,
  },
  {
    id: 'hbo-marketing-orfheuss',
    title: 'ORFHEUSS Werkboek Marketing & Communicatie (HBO)',
    description: 'Acht cases over gepersonaliseerde reclame, engagement-algoritmes, influencer-ethics en merkverantwoordelijkheid.',
    level: 'hbo',
    domain: 'marketing',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 8,
    workbookId: 'wb-hbo-marketing',
    replitPrompt: "Gebruik werkboek 'ORFHEUSS Werkboek Marketing & Communicatie (HBO)', open Case 1 in Daylight, lees het AI-advies, schakel dan naar Nocturne voor ORFHEUSS-analyse op mandaat, PRIJS en O36-schending.",
    replitSystemPrompt: `Je ondersteunt nu HBO-studenten Marketing & Communicatie met het ORFHEUSS-werkboek.

Voor elke les:
1. Activeer Daylight: vraag de student om de case te kiezen en de context kort samen te vatten (doelgroep, kanaal, KPI).
2. Genereer een AI-marketingadvies dat realistisch is (segmentatie, targeting, algoritmes, creatie).
3. Schakel naar Nocturne:
   - Laat de student F-druk benoemen (waar zit druk op gebruiker/klant?).
   - Laat een snelle O36-scan doen: overschrijdt dit voorstel menselijke draagkracht of maatschappelijke grenzen?
   - Vraag expliciet naar PRIJS: welke biologische, sociale of ecologische kost wordt hier genegeerd?
4. Laat de student eindigen met een eigen standpunt (max. 150 woorden).

Geef geen definitieve oordelen; bied vocabulaire en vragen zodat studenten zelf kunnen begrenzen en eventueel weigeren.`,
  },
  {
    id: 'uni-marketing-orfheuss',
    title: 'Algoritmische Persuasie & Mediademocratie',
    description: 'Wetenschappelijk kader: persuasion architecture, filter bubbles, platform governance en regulering.',
    level: 'universiteit',
    domain: 'marketing',
    roles: ['student', 'docent'],
    moduleCount: 6,
    replitPrompt: "Gebruik leergang 'Algoritmische Persuasie & Mediademocratie', start in Daylight met vraag: 'Welke biologische en democratische kosten heeft AI-gestuurde persuasie?' en activeer PRSYS Blok 3–4 en SILK.",
    replitSystemPrompt: `Je werkt nu met universitaire studenten in de leergang Algoritmische Persuasie & Mediademocratie.

Taken voor elke sessie:
1. Vraag naar de casus of paper (bijv. aanbevelingsalgoritme, politieke micro-targeting, content-moderatie).
2. Help de student de situatie te analyseren via het ORFHEUSS-lexicon: situatie → impact → context → resonantie → betekenis.
3. Koppel daarna aan PRSYS/Olympia:
   - Waar wordt velocity verhoogd?
   - Waar wordt draagkracht of democratische legitimiteit ondergraven (TRST, TaoGate)?
4. Sluit af met 1–2 vragen over SILK/PRIJS: wat is de metabolische en democratische prijs van deze architectuur?

Focus op denkkaders en conceptuele precisie, niet op politieke voorkeuren of praktische beleidsadviezen.`,
  },

  // ── SOCIAL / COMMUNICATIE ─────────────────────────────────────────────────
  {
    id: 'mbo4-social-orfheuss',
    title: 'Social Media & Ethiek (MBO4)',
    description: 'Praktische cases: likes kopen, nep-reviews, ghosten en online pesten vanuit werkgeversrol.',
    level: 'mbo4',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 4,
    workbookId: 'wb-mbo4-social',
    replitPrompt: "Gebruik leergang 'Social Media & Ethiek (MBO4)', start in Daylight met vraag: 'Is dit een Quiet Violence- of F-druk-situatie?' en gebruik het eenvoudige PRSYS-mandaatschema.",
    replitSystemPrompt: `Je ondersteunt nu MBO4-studenten Social & Communicatie in de module Social Media & Ethiek.

Voor elke case (likes kopen, ghosten, nep-reviews, online pesten):
1. Laat de student in eigen woorden vertellen wat er gebeurt en wie er betrokken zijn.
2. Vraag: 'Wie voelt hier druk, en waarvan?' (F-druk D1–D4, in gewone taal).
3. Introduceer 2–3 simpele begrippen: grens, mandaat, herstel.
4. Stel vragen als:
   - Wat gebeurt er met iemands energie/zelfbeeld als dit lang doorgaat?
   - Waar zou een volwassene of platform "stop" moeten zeggen?

Blijf concreet en kort; help vooral om taal te geven aan wat studenten al voelen.`,
  },
  {
    id: 'hbo-social-orfheuss',
    title: 'ORFHEUSS in Social & Communicatie (HBO)',
    description: 'Cases over polarisatie, desinformatie, community management en de verantwoordelijkheid van communicatieprofessionals.',
    level: 'hbo',
    domain: 'social',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 6,
    replitPrompt: "Gebruik werkboek 'ORFHEUSS in Social & Communicatie (HBO)', open Case 1 in Daylight, doorloop canonflow Argos–Arachne–Logos–Hermes–Charon en leg je grensbeslissing vast in Nocturne.",
    replitSystemPrompt: `Je begeleidt nu HBO-studenten Social & Communicatie in ORFHEUSS in Social & Communicatie.

Voor elke casus:
1. Loop expliciet de canonflow door:
   - Argos: welke feiten en patronen zien we?
   - Arachne: hoe hangen ze samen, waar rafelt het weefsel?
   - Logos: welke moderatie- of communicatiestrategieën zijn mogelijk (nog zonder oordeel)?
   - Hermes: hoe zou je dit communiceren zonder te manipuleren?
   - Charon: wanneer is de interventie klaar; wat is de exitconditie?
2. Laat studenten per stap 2–3 zinnen schrijven; jij geeft feedback op scherpte en begrenzing.

Je geeft geen 'beste strategie', maar helpt zien waar polarisatie, Quiet Violence of mandaatverlies optreedt.`,
  },
  {
    id: 'uni-social-orfheuss',
    title: 'Platformpolitiek & Digitale Publieke Sfeer',
    description: 'Academisch: Habermas, networked publics, content moderation, EU Digital Services Act.',
    level: 'universiteit',
    domain: 'social',
    roles: ['student', 'docent'],
    moduleCount: 5,
    replitPrompt: "Gebruik leergang 'Platformpolitiek & Digitale Publieke Sfeer', start in Daylight met vraag: 'Hoe toets je een platformbeslissing op legitimiteit en democratische draagkracht?' en activeer ORFHEUSS als pre-governance-laag.",
    replitSystemPrompt: `Je werkt nu met universitaire studenten in Platformpolitiek & Digitale Publieke Sfeer.

Bij elke opdracht:
1. Vraag naar het gekozen platformvraagstuk (DSA, recommender systems, de-platforming, shadow-banning, etc.).
2. Laat de student kort de bestaande juridische/beleidskaders samenvatten.
3. Pas vervolgens TRST/PRSYS toe als pre-governance-test:
   - Is er duidelijk mandaat (V = M ∧ J ∧ C)?
   - Wordt O36 gerespecteerd, of wordt menselijke/maatschappelijke draagkracht overschreden?
   - Waar zou een TaoGate-BLOCK of ESCALATE logisch zijn?
4. Sluit af met een reflectievraag: 'Welke prijs (SILK) betaalt de publieke sfeer voor deze platformkeuze?'

Zorg dat je altijd onderscheid houdt tussen beschrijving (wat is) en normatieve keuze (wat zou moeten); de laatste blijft bij de student en docent.`,
  },

  // ── DIGITAL / UX ─────────────────────────────────────────────────────────
  {
    id: 'mbo4-digital-orfheuss',
    title: 'UX & Dark Patterns (MBO4)',
    description: 'Herken en voorkom manipulatief UX-design: hidden unsubscribe, confirmshaming, roach motel.',
    level: 'mbo4',
    domain: 'digital',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 4,
  },
  {
    id: 'hbo-digital-orfheuss',
    title: 'ORFHEUSS in Digital & UX (HBO)',
    description: 'Privacy by design, toegankelijkheid, cookiewalls, A/B-testen op kwetsbare doelgroepen.',
    level: 'hbo',
    domain: 'digital',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 7,
    workbookId: 'wb-hbo-digital',
  },
  {
    id: 'uni-digital-orfheuss',
    title: 'Value-Sensitive Design & AI-systemen',
    description: "Theoretisch kader: Friedman's VSD, Nissenbaum's contextual integrity, EU AI Act artikel 13.",
    level: 'universiteit',
    domain: 'digital',
    roles: ['student', 'docent'],
    moduleCount: 6,
  },

  // ── FINANCE ───────────────────────────────────────────────────────────────
  {
    id: 'mbo4-finance-orfheuss',
    title: 'Eerlijk advies in Financiële Dienstverlening (MBO4)',
    description: 'Wat mag je vertellen aan een klant? Wanneer adviseer je tegen je eigen belang in?',
    level: 'mbo4',
    domain: 'finance',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 4,
  },
  {
    id: 'hbo-finance-orfheuss',
    title: 'ORFHEUSS in Finance (HBO)',
    description: 'Kredietscoring, dynamic pricing, verzekeringsselectie en algoritmische uitsluiting.',
    level: 'hbo',
    domain: 'finance',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 6,
    workbookId: 'wb-hbo-finance',
  },
  {
    id: 'uni-finance-orfheuss',
    title: 'Algoritmische Besluitvorming in Finance',
    description: 'Cases rond HFT, kredietscoring, dynamic pricing, trading en governance-vraagstukken.',
    level: 'universiteit',
    domain: 'finance',
    roles: ['student', 'docent'],
    moduleCount: 7,
  },

  // ── ZORG ──────────────────────────────────────────────────────────────────
  {
    id: 'mbo4-zorg-orfheuss',
    title: 'Zorgtechnologie & Menswaardigheid (MBO4)',
    description: 'AI in de zorg: wanneer neemt technologie een beslissing die een mens moet nemen?',
    level: 'mbo4',
    domain: 'zorg',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 4,
  },
  {
    id: 'hbo-zorg-orfheuss',
    title: 'ORFHEUSS in Zorg & Welzijn (HBO)',
    description: 'Cases: triage-AI, domotica, GGZ-chatbots, zelfregie vs. algoritme.',
    level: 'hbo',
    domain: 'zorg',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 6,
  },
  {
    id: 'uni-zorg-orfheuss',
    title: 'AI-ethiek in de Gezondheidszorg',
    description: 'Academisch: beneficence, non-maleficence, autonomie, rechtvaardige verdeling bij AI-triage.',
    level: 'universiteit',
    domain: 'zorg',
    roles: ['student', 'docent'],
    moduleCount: 6,
  },

  // ── SOCIAAL DOMEIN ────────────────────────────────────────────────────────
  {
    id: 'mbo4-sociaal-orfheuss',
    title: 'ORFHEUSS in het Sociaal Domein (MBO4)',
    description: 'Praktijkcases: cliënt onder druk, te weinig tijd, conflicterende regels.',
    level: 'mbo4',
    domain: 'sociaal_domein',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 4,
  },
  {
    id: 'hbo-sociaal-orfheuss',
    title: 'ORFHEUSS in het Sociaal Domein (HBO)',
    description: 'Cases: participatieplicht, schuldhulp, huiselijk geweld, bureaucratie vs. draagkracht.',
    level: 'hbo',
    domain: 'sociaal_domein',
    roles: ['student', 'docent', 'begeleider'],
    moduleCount: 7,
    workbookId: 'wb-hbo-sociaal',
  },
  {
    id: 'uni-sociaal-orfheuss',
    title: 'Algoritmische Overheid & Sociale Rechtvaardigheid',
    description: 'Toeslagenaffaire, SyRI-arrest, risicoprofilering en de grenzen van geautomatiseerde besluitvorming door de overheid.',
    level: 'universiteit',
    domain: 'sociaal_domein',
    roles: ['student', 'docent'],
    moduleCount: 6,
  },
];
