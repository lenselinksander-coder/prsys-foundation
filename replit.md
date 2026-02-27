# PRSYS Foundation — Replit Agent Context

## Projectbeschrijving

PRSYS is een leerplatform voor beroepsonderwijs rondom AI-gebruik met menselijke gate-logica.
Het platform begeleidt leerlingen door de **TaoGate** en laat hen kennismaken met **ORFHEUSS** —
een AI die niet klakkeloos uitvoert, maar toetst op mandaat, integriteit en draagkracht.

Doelgroepen: MBO/HBO-studenten in marketing, social media, digital, finance, zorg en sociaal domein.

---

## Tech Stack

| Laag      | Technologie                              |
|-----------|------------------------------------------|
| Frontend  | React 18 + TypeScript + Vite             |
| Backend   | Node.js + Express + TypeScript (tsx)     |
| Stijl     | Eigen CSS (geen Tailwind/Bootstrap)      |
| Fonts     | EB Garamond + IBM Plex Mono (Google Fonts) |
| Port      | `5000` (extern: 80)                      |

---

## Projectstructuur

```
prsys-foundation/
├── web/                    # React frontend (Vite)
│   └── src/
│       ├── App.tsx         # Routing + NavBar
│       ├── pages/          # HomePage, TrackPage, WorkbookPage, WorkbookViewPage
│       ├── components/     # OrfheussLogo, DomainSection, RoleLevelSelector, ...
│       ├── context/        # UserContext (rol/niveau), WorkbookContext
│       ├── data/           # tracks.ts, lessons.ts, workbooks.ts
│       └── index.css       # Globale stijlen (kleurenpalet, typografie)
├── backend/                # Express API
│   └── src/
│       ├── server.ts       # Express setup + static serving
│       ├── routes/
│       │   └── taogate.ts  # /api/taogate/* endpoints
│       ├── orfheussEngine.ts     # Kernlogica ORFHEUSS
│       └── orfheussCodexInternal.ts  # Interne codex
├── lessons/                # Markdown lesbestanden
├── .replit                 # Replit run/deploy config
└── replit.nix              # Nix packages (nodejs_20)
```

---

## Commando's

```bash
# Development (beide servers parallel)
npm run dev

# Productie build + start
npm run install:all
npm run build:web
npm start
```

---

## Kernconcepten

### TaoGate
Een beslisdrempel met drie variabelen:
- **τ (Torsie)** — hoeveel weerstand zit er in een beslissing?
- **ω (Tempo)** — hoe snel verandert de situatie?
- **TI (Transfer Integrity)** — hoe volledig en eerlijk gaat context over?

Formule: `R = τ × ω × (1 / TI)` — overbelastingsindicator

### ORFHEUSS
AI-agent die toetst op drie gates:
1. Mandaat — is er bevoegdheid om te handelen?
2. Integriteit — klopt de informatie?
3. Draagkracht — is er voldoende steun/capaciteit?

Als één gate faalt → geen actie, terug naar de mens.

---

## Rollen & Niveaus

**Rollen:** `leerling` | `begeleider` | `professional`
**Niveaus:** `basis` | `gevorderd` | `expert`

Leergangen en werkboeken filteren op rol × niveau.

---

## Domeinen

- marketing
- social
- digital
- finance
- zorg
- sociaal_domein

---

## Stijlgids

- Kleurenpalet: zwart/antraciet + wit/gebroken wit (geen heldere kleuren)
- Typografie: EB Garamond (serif, body/titels) + IBM Plex Mono (code/labels)
- Logo: Enso-cirkel (SVG) als navbar logo + hero watermark
- Tone: zakelijk, rustig, filosofisch — geen startup-energie

---

## API Endpoints

| Method | Route                    | Beschrijving              |
|--------|--------------------------|---------------------------|
| GET    | `/api/health`            | Health check              |
| GET    | `/api/taogate/*`         | TaoGate leercontent       |

---

## Deploy (Replit)

- Port `5000` → extern port `80`
- Build: `npm run install:all && npm run build:web`
- Start: `npm start` (serveert React build via Express)
