import { Router } from 'express';
import type { Request, Response } from 'express';
import { compareWithOrfheuss } from '../orfheussEngine.js';
import type { CompareInput } from '../types.js';

const router = Router();

const VALID_DOMAINS = new Set(['marketing', 'social', 'digital', 'finance', 'zorg', 'sociaal_domein']);
const VALID_LEVELS = new Set(['mbo4', 'hbo', 'universiteit']);
const VALID_ROLES = new Set(['student', 'docent', 'begeleider']);

router.post('/compare', (req: Request, res: Response) => {
  const { domain, level, role, caseId } = req.body as Partial<CompareInput>;

  if (!domain || !VALID_DOMAINS.has(domain)) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: domain' });
    return;
  }
  if (!level || !VALID_LEVELS.has(level)) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: level' });
    return;
  }
  if (!role || !VALID_ROLES.has(role)) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: role' });
    return;
  }
  if (!caseId || typeof caseId !== 'string' || caseId.length > 128) {
    res.status(400).json({ error: 'Ongeldig of ontbrekend veld: caseId' });
    return;
  }

  const result = compareWithOrfheuss({ domain, level, role, caseId });
  res.json(result);
});

export default router;
