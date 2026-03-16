# CLAUDE.md — PRSYS Foundation Codebase Guide

This file documents the codebase structure, development workflows, and conventions for AI assistants working on this project.

---

## Project Overview

**PRSYS Foundation** is a full-stack educational platform for teaching AI ethics and decision-making through the **TaoGate** and **ORFHEUSS** frameworks. It targets Dutch educational levels (MBO4, HBO, Universiteit, Docenten) across multiple professional domains.

### Core Concepts

- **TaoGate** — Decision threshold framework with formula `R = τ × ω × (1 / TI)`:
  - `τ` (Torsion) — Resistance in a decision
  - `ω` (Tempo) — Speed of situational change
  - `TI` (Transfer Integrity) — Completeness and honesty of context transfer
- **ORFHEUSS** — AI agent that tests three gates before proceeding:
  1. **Mandaat** — Is there authority to act?
  2. **Integriteit** — Is information correct and complete?
  3. **Draagkracht** — Is there sufficient support/capacity?

### Target Domains
Marketing & Communicatie, Sociaal Domein, Finance, Digital/ICT, Zorg, Horeca & Bakkerij

### Target Levels
MBO4 (practical), HBO (analytical), Universiteit (theoretical/critical), Docenten (didactic)

---

## Repository Structure

```
prsys-foundation/
├── web/                    # React 19 + TypeScript frontend (Vite)
├── backend/                # Express.js 5 + TypeScript API
├── src/taogate/            # Python CLI (Click + Rich)
├── lessons/                # Lesson content as Markdown
│   └── <niveau>/modules/<module>/les.md
├── workbooks/              # Student workbook markdown files
├── docentenhandleidingen/  # Teacher guides
├── prompts/                # AI prompts per domain/level
├── foundation/             # Tabularium Foundation library
├── scripts/                # Build and import utilities
├── tapes/                  # Tape/case definitions
├── workspace/              # Student workspace (local, .gitignored)
├── logs/                   # Application logs (.gitignored)
├── main.py                 # TaoGateTiger reference implementation
├── package.json            # Root monorepo scripts
├── pyproject.toml          # Python package config (Taogate CLI)
├── .env.example            # Environment variable template
└── .replit                 # Replit deployment config
```

---

## Technology Stack

| Layer       | Technology                                   |
|-------------|----------------------------------------------|
| Frontend    | React 19, TypeScript, Vite 7, React Router 7 |
| Backend     | Node.js 20, Express.js 5, TypeScript 5, tsx  |
| AI          | @anthropic-ai/sdk (Claude integration)       |
| Auth        | jsonwebtoken (JWT, stateless)                |
| Python CLI  | Python >=3.10, Click 8, Rich 13              |
| Deployment  | Replit (Nix stable-24_05)                    |
| Styling     | Custom CSS (no utility frameworks)           |

**No test framework is currently configured.** ESLint and TypeScript (`tsc -b`) serve as primary quality gates.

---

## Development Workflow

### Initial Setup

```bash
# Install all dependencies (web + backend)
npm run install:all

# Install Python CLI
pip install -e .

# Create environment file
cp .env.example .env
# Edit .env: set JWT_SECRET and ANTHROPIC_API_KEY
```

### Running in Development

```bash
# Start both frontend (port 5173) and backend (port 3001) concurrently
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:3001`.

### Production Build

```bash
npm run install:all   # Ensure deps are up to date
npm run build:web     # tsc -b && vite build → web/dist/
npm start             # Express serves web/dist/ + API on PORT (default 5000)
```

### Code Quality

```bash
npm run lint          # ESLint on web/src/ (run from web/ or root)
# No pre-commit hooks — linting is manual
```

### Python CLI

```bash
taogate overzicht              # List available modules
taogate les -n hbo -m 01_taogate  # Show a lesson
taogate domeinen -n mbo4       # List domains for a level
```

---

## Frontend Architecture (`web/src/`)

### Pages
| File | Purpose |
|------|---------|
| `LandingPage.tsx` | Public login/authentication |
| `HomePage.tsx` | Dashboard with domain selection |
| `TrackPage.tsx` | Lesson module display |
| `WorkbookPage.tsx` | Workbook listing |
| `WorkbookViewPage.tsx` | Case/lesson viewer |
| `AiGatePage.tsx` | ORFHEUSS comparison ("Angie's Boarding Pass") |

### Key Components
- `App.tsx` — Root router, user context, token validation
- `DomainSection.tsx` — Domain/category display (react-refresh disabled in ESLint)
- `RoleLevelSelector.tsx` — Profile selection (role + education level)
- `CaseDetail.tsx` — Individual case presentation
- `CaseCompareView.tsx` — AI vs ORFHEUSS comparison view

### Context (State Management)
- `UserContext.tsx` — JWT token, role, level, institution
- `WorkbookContext.tsx` — Current workbook/case and progress
- `ThemeContext.tsx` — Dark/light theme preference

### Services
- `authApi.ts` — JWT: store, decode, validate, refresh
- `taogateApi.ts` — API calls to `/api/taogate/*`

### Data Files (TypeScript)
- `lessons.ts`, `workbooks.ts`, `cases.ts`, `tracks.ts` — Content definitions
- `types.ts` — Shared TypeScript interfaces

---

## Backend Architecture (`backend/src/`)

### Server (`server.ts`)
- CORS: dev allows `localhost:5173/4173`; prod allows all origins
- Serves `web/dist/` as static files with SPA fallback
- Runs on `PORT` env var (default `5000`)

### API Routes

| Route | Auth | Purpose |
|-------|------|---------|
| `GET /api/health` | Public | Health check |
| `POST /api/auth/register` | Public | User registration |
| `POST /api/auth/login` | Public | JWT generation |
| `POST /api/taogate/compare` | JWT required | Static ORFHEUSS comparison |
| `POST /api/taogate/claudius` | JWT + `ai_gate_completed` | Live Claude analysis |

### Core Engines
- `orfheussEngine.ts` — Static case-based comparison logic (plain AI vs ORFHEUSS gates)
- `claudeOrfheussService.ts` — Live Claude API integration with ORFHEUSS system prompt

### Auth (`auth/`)
- `middleware.ts` — JWT validation middleware + `aiGateMiddleware`
- `types.ts` — `User` and `JwtPayload` interfaces
- `userStore.ts` — JSON file-based user persistence (`backend/data/users.json`, `.gitignored`)

### JWT Payload Fields
```typescript
{
  sub: string;              // User ID
  email: string;
  role: 'student' | 'docent' | 'begeleider';
  level: 'mbo4' | 'hbo' | 'universiteit';
  institution_id: string;
  ai_gate_completed: boolean; // Gates access to /api/taogate/claudius
  iat: number;
  exp: number;
}
```

---

## Python CLI (`src/taogate/`)

- `config.py` — Education levels and their domains
- `cli.py` — Click commands: `overzicht`, `les`, `domeinen`
- `lesson.py` — Loads `lessons/<niveau>/modules/<module>/les.md`

Lesson files split on `## Oefeningen` to separate theory from exercises.

---

## Configuration Files

| File | Purpose |
|------|---------|
| `web/vite.config.ts` | Vite + React plugin, `/api` proxy |
| `web/eslint.config.js` | ESLint rules (react-hooks, react-refresh) |
| `web/tsconfig.app.json` | Frontend TS (ES2020, strict, React JSX) |
| `backend/tsconfig.json` | Backend TS (ES2022, NodeNext, strict) |
| `pyproject.toml` | Taogate CLI package config |
| `.env.example` | `JWT_SECRET`, `PORT`, `NODE_ENV`, `ANTHROPIC_API_KEY` |
| `.replit` | Replit platform config (build + run commands) |

### ESLint Exception
`DomainSection.tsx` and all files under `src/context/` have `react-refresh` rules disabled. This is intentional.

---

## Environment Variables

```bash
JWT_SECRET=<strong-random-secret>      # Required for auth
PORT=5000                               # Server port (optional, default 5000)
NODE_ENV=development                    # or 'production'
ANTHROPIC_API_KEY=<anthropic-api-key>  # Required for Claudius endpoint
```

---

## Security Conventions

1. **Never commit** `backend/data/users.json` or `.env` (both `.gitignored`)
2. **Never return** ORFHEUSS codex content to the client — it is server-side only
3. **JWT gating**: the `ai_gate_completed` flag must be `true` to access `/api/taogate/claudius`
4. **No eval/exec** of lesson content — markdown is rendered, not executed
5. **ANTHROPIC_API_KEY** is backend-only; never expose to frontend

---

## Git Conventions

### Branch Naming
- Feature branches follow `claude/<description>-<id>` pattern for automated branches
- Main development branch: `main` (on remote `origin`)

### Commit Messages
Follow conventional commit style:
```
feat: add hospitality domain workbooks
fix: correct missing import in server.ts
chore: update dependencies
```

### Push Command
```bash
git push -u origin <branch-name>
```

---

## Content Authoring

### Adding a Lesson
1. Create `lessons/<niveau>/modules/<module>/les.md`
2. Use `## Oefeningen` as separator between theory and exercises
3. Update `web/src/data/lessons.ts` with metadata

### Adding a Workbook
1. Add markdown to `workbooks/`
2. Register in `web/src/data/workbooks.ts` with `domain`, `level`, `roles`
3. Define related cases in `web/src/data/cases.ts`

### Adding an ORFHEUSS Case
1. Add case logic to `backend/src/orfheussEngine.ts`
2. Define case ID, plain AI tendencies, ORFHEUSS checks (mandaat/integriteit/draagkracht)
3. Register case metadata in frontend data files

---

## Known Limitations

- **User storage is file-based** (`data/users.json`) — not suitable for production scale
- **No automated tests** — TypeScript + ESLint are the only quality checks
- **No CI/CD pipeline** — deployment is manual or via Replit platform
- **Single-server** — no horizontal scaling support (stateless JWT helps, but no cache layer)
- **CORS is open in production** — relies on same-origin serving assumption

---

## Deployment (Replit)

```bash
# Build step (automated by Replit)
npm run install:all && npm run build:web

# Run step
npm start  # NODE_ENV=production tsx backend/src/server.ts
```

Ports: `5000` (external/80), `3001` (backend dev only)
