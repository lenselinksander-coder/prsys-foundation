import { Router } from 'express';
import type { Request, Response } from 'express';
import { compareWithOrfheuss } from '../orfheussEngine.js';
import { claudiusOrfheussCheck, ClaudiusNotAvailableError } from '../claudeOrfheussService.js';
import { aiGateMiddleware } from '../auth/middleware.js';
import type { CompareInput } from '../types.js';

const router = Router();

const VALID_DOMAINS = new Set(['marketing', 'social', 'digital', 'finance', 'zorg', 'sociaal_domein']);
const VALID_LEVELS = new Set(['mbo4', 'hbo', 'universiteit']);
const VALID_ROLES = new Set(['student', 'docent', 'begeleider']);

function validateCompareInput(
  body: Partial<CompareInput & { situation?: string }>,
  res: Response
): (CompareInput & { situation?: string }) | null {
  const { domain, level, role, caseId } = body;
  if (!domain || !VALID_DOMAINS.has(domain)) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: domain' });
    return null;
  }
  if (!level || !VALID_LEVELS.has(level)) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: level' });
    return null;
  }
  if (!role || !VALID_ROLES.has(role)) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: role' });
    return null;
  }
  if (!caseId || typeof caseId !== 'string' || caseId.length > 128) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: caseId' });
    return null;
  }
  return { domain, level, role, caseId, situation: body.situation };
}

router.post('/compare', (req: Request, res: Response) => {
  const input = validateCompareInput(req.body as Partial<CompareInput>, res);
  if (!input) return;

  const result = compareWithOrfheuss(input);
  res.json(result);
});

// Claudius: Claude als live ORFHEUSS AI — codex als server-side systeem-prompt
// aiGateMiddleware vereist ai_gate_completed: true in JWT (authMiddleware is al toegepast via server.ts)
router.post('/claudius', aiGateMiddleware, async (req: Request, res: Response) => {
  const input = validateCompareInput(
    req.body as Partial<CompareInput & { situation?: string }>,
    res
  );
  if (!input) return;

  const situation = input.situation ?? '';
  if (typeof situation !== 'string' || situation.length > 2000) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: situation' });
    return;
  }

  // Gebruik niveau uit JWT als authoritative source voor de system prompt
  const jwtLevel = req.user?.level;
  const trustedInput = jwtLevel ? { ...input, level: jwtLevel } : input;

  try {
    const orfheussChecks = await claudiusOrfheussCheck(trustedInput, situation, jwtLevel);
    res.json({ caseId: trustedInput.caseId, domain: trustedInput.domain, orfheussChecks });
  } catch (err) {
    if (err instanceof ClaudiusNotAvailableError) {
      res.status(503).json({ error: err.message });
    } else {
      console.error('[Claudius] Fout:', err);
      res.status(500).json({ error: 'Claudius kon de ORFHEUSS-toets niet voltooien' });
    }
  }
});

export default router;
