# ORFHEUSS Backend

Express + TypeScript API met de gesloten ORFHEUSS-laag.

## Codex

Plaats de mandaatbroncode in `src/orfheussCodexInternal.ts`.
Dit bestand is `.gitignored` en wordt nooit gecommit.
Zie `src/orfheussCodexInternal.ts` voor de verwachte structuur.

## Draaien

```bash
npm install
npm run dev        # development, hot-reload via tsx
npm start          # productie
```

Draait standaard op `http://localhost:3001`.

## Endpoint

**POST `/api/taogate/compare`**

Body:
```json
{
  "domain": "sociaal_domein",
  "level": "hbo",
  "role": "student",
  "caseId": "case-hbo-sociaal-participatieplicht"
}
```

Response: alleen afgeleide AI vs ORFHEUSS-vergelijking.
Codex-inhoud wordt nooit teruggegeven.
